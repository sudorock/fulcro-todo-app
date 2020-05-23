(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom :refer [div input p button ul li]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as target]
    [clojure.pprint :refer [pprint]]))

(defonce app (app/fulcro-app))

(defmutation delete-todo [{:keys [id list-id]}]
  (action
    [{:keys [state]}]
    (swap! state update :todo-item/id dissoc id)
    (swap! state merge/remove-ident* [:todo-item/id id] [:todo-list/id list-id :todo-list/items])))

(defsc TodoItem [this {:todo-item/keys [id value list-id]}]
  {:query          [:todo-item/id
                    :todo-item/value
                    :todo-item/list-id]
   :ident          :todo-item/id
   :initLocalState (fn [this _]
                     {:on-click (fn [e id list-id]
                                  (comp/transact! this [(delete-todo {:id id :list-id list-id})]))})}
  (let [{:keys [on-click]} (comp/get-state this)]
    (li {} value (button {:onClick #(on-click % id list-id)} "Delete"))))

(def ui-todo-item (comp/factory TodoItem {:keyfn :todo-item/id}))

(defmutation add-todo [{:keys [list-id value]}]
  (action
    [{:keys [state]}]
    (let [new-id (inc (get-in @state [:todo-list/id list-id :todo-list/item-count]))]
      (swap! state merge/merge-component TodoItem {:todo-item/id      new-id
                                                   :todo-item/value   value
                                                   :todo-item/list-id list-id}
             :append [:todo-list/id list-id :todo-list/items])
      (swap! state update-in [:todo-list/id list-id :todo-list/item-count] inc))))

(defsc TodoList [this {:todo-list/keys [items]}]
  {:query         [:todo-list/id
                   :todo-list/item-count
                   {:todo-list/items (comp/get-query TodoItem)}]
   :ident         :todo-list/id
   :initial-state {:todo-list/item-count 0
                   :todo-list/id         :param/id
                   :todo-list/items      []}}
  (when (not-empty items)
    (ul (map ui-todo-item items))))

(def ui-todo-list (comp/factory TodoList))

(defsc TodoInput [this {:todo-input/keys [value list]}]
  {:query          [:todo-input/id
                    :todo-input/value
                    {:todo-input/list (comp/get-query TodoList)}]
   :ident          :todo-input/id
   :initial-state  {:todo-input/id    :param/id
                    :todo-input/value ""
                    :todo-input/list  {:id :param/list-id}}
   :initLocalState (fn [this _]
                     {:on-change (fn [e]
                                   (m/set-value! this :todo-input/value (.. e -target -value)))
                      :on-click  (fn [e list-id value]
                                   (.preventDefault e)
                                   (comp/transact! this [(add-todo {:list-id list-id
                                                                    :value   value})])
                                   (m/set-value! this :todo-input/value ""))})}
  (let [{:keys [on-change on-click]} (comp/get-state this)
        list-id (:todo-list/id list)]
    (div (input {:type     "text"
                 :value    value
                 :onChange on-change})
         (button {:onClick #(on-click % list-id value)} "ADD"))))

(def ui-todo-input (comp/factory TodoInput))

(defsc Root [this {:root/keys [todo-list todo-input]}]
  {:query         [{:root/todo-list (comp/get-query TodoList)}
                   {:root/todo-input (comp/get-query TodoInput)}]
   :initial-state {:root/todo-input {:id 1 :list-id 1}
                   :root/todo-list  {:id 1}}}
  (div (ui-todo-input todo-input)
       (ui-todo-list todo-list)))

(defn ^:export init
  "Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build."
  []
  (app/mount! app Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh
  "During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn"
  []
  ;; re-mounting will cause forced UI refresh, update internals, etc.
  (app/mount! app Root "app")
  (js/console.log "Hot reload"))

(comment
  (keys app)
  (reset! (::app/state-atom app) {})
  (-> app (::app/state-atom) deref)
  (merge/merge-component! app TodoList {:todo-list/id         1
                                        :todo-list/item-count 0
                                        :todo-list/items      [{:todo-item/id    1
                                                                :todo-item/value "hello"}
                                                               {:todo-item/id    2
                                                                :todo-item/value "world"}]}
                          :replace [:root/todo-list])
  (merge/merge-component! app TodoItem {:todo-item/id    4
                                        :todo-item/value "I am Sunil"}
                          :append [:todo-list/id 1 :todo-list/items])
  (merge/merge-component! app TodoInput {:todo-input/id 1}
                          :replace [:root/todo-input])
  (::app/state-atom app)
  (app/current-state app)
  (comp/get-ident TodoItem {:todo-item/id 1})
  (app/schedule-render! app)
  (app/unmount! app Root "app"))
