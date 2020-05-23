goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
goog.require('cljs.pprint');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined')){
} else {
app.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
/**
 * 
 */
app.client.delete_todo = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","delete-todo","app.client/delete-todo",1209334124,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","delete-todo","app.client/delete-todo",1209334124,null),(function (fulcro_mutation_env_symbol){
var map__70507 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__70507__$1 = (((((!((map__70507 == null))))?(((((map__70507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70507):map__70507);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70507__$1,new cljs.core.Keyword(null,"list-id","list-id",1757820635));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$action(p__70509){
var map__70510 = p__70509;
var map__70510__$1 = (((((!((map__70510 == null))))?(((((map__70510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70510):map__70510);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70510__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),list_id,new cljs.core.Keyword("todo-list","items","todo-list/items",35585877)], null));

return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
})], null);
}));

var options__45975__auto___70557 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449),new cljs.core.Keyword("todo-item","list-id","todo-item/list-id",84846245)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new cljs.core.Keyword("todo-item","id","todo-item/id",116791802).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e,id,list_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70513 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"list-id","list-id",1757820635),list_id], null);
return (app.client.delete_todo.cljs$core$IFn$_invoke$arity$1 ? app.client.delete_todo.cljs$core$IFn$_invoke$arity$1(G__70513) : app.client.delete_todo.call(null,G__70513));
})()], null));
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_TodoItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__70514 = com.fulcrologic.fulcro.components.props(this$);
var map__70514__$1 = (((((!((map__70514 == null))))?(((((map__70514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70514):map__70514);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70514__$1,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70514__$1,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449));
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70514__$1,new cljs.core.Keyword("todo-item","list-id","todo-item/list-id",84846245));
var map__70516 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__70516__$1 = (((((!((map__70516 == null))))?(((((map__70516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70516):map__70516);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70516__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["li",({}),com.fulcrologic.fulcro.components.force_children(value),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__70512_SHARP_){
return (on_click.cljs$core$IFn$_invoke$arity$3 ? on_click.cljs$core$IFn$_invoke$arity$3(p1__70512_SHARP_,id,list_id) : on_click.call(null,p1__70512_SHARP_,id,list_id));
})], null),"Delete"], null),null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.TodoItem !== 'undefined')){
} else {
app.client.TodoItem = (function app$client$TodoItem(props__45976__auto__){
var this__45977__auto__ = this;
var temp__5733__auto___70558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45975__auto___70557,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___70558)){
var init_state__45978__auto___70559 = temp__5733__auto___70558;
(this__45977__auto__.state = (function (){var obj70519 = ({"fulcro$state":(function (){var G__70520 = this__45977__auto__;
var G__70521 = goog.object.get(props__45976__auto__,"fulcro$value");
return (init_state__45978__auto___70559.cljs$core$IFn$_invoke$arity$2 ? init_state__45978__auto___70559.cljs$core$IFn$_invoke$arity$2(G__70520,G__70521) : init_state__45978__auto___70559.call(null,G__70520,G__70521));
})()});
return obj70519;
})());
} else {
(this__45977__auto__.state = (function (){var obj70523 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj70523;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.TodoItem,new cljs.core.Keyword("app.client","TodoItem","app.client/TodoItem",-1156729569),options__45975__auto___70557);
app.client.ui_todo_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.TodoItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("todo-item","id","todo-item/id",116791802)], null));
/**
 * 
 */
app.client.add_todo = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","add-todo","app.client/add-todo",-810437882,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","add-todo","app.client/add-todo",-810437882,null),(function (fulcro_mutation_env_symbol){
var map__70524 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__70524__$1 = (((((!((map__70524 == null))))?(((((map__70524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70524):map__70524);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70524__$1,new cljs.core.Keyword(null,"list-id","list-id",1757820635));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70524__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$action(p__70526){
var map__70527 = p__70526;
var map__70527__$1 = (((((!((map__70527 == null))))?(((((map__70527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70527):map__70527);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70527__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var new_id_70560 = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),list_id,new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557)], null)) + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,com.fulcrologic.fulcro.algorithms.merge.merge_component,app.client.TodoItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new_id_70560,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449),value,new cljs.core.Keyword("todo-item","list-id","todo-item/list-id",84846245),list_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),list_id,new cljs.core.Keyword("todo-list","items","todo-list/items",35585877)], null)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),list_id,new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557)], null),cljs.core.inc);

return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
})], null);
}));

var options__45975__auto___70561 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-list","items","todo-list/items",35585877),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.TodoItem)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),new cljs.core.Keyword("todo-list","id","todo-list/id",116741263).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557),(0),new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("todo-list","items","todo-list/items",35585877),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-list","items","todo-list/items",35585877),app.client.TodoItem], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_TodoList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__70529 = com.fulcrologic.fulcro.components.props(this$);
var map__70529__$1 = (((((!((map__70529 == null))))?(((((map__70529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70529):map__70529);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70529__$1,new cljs.core.Keyword("todo-list","items","todo-list/items",35585877));
if(cljs.core.truth_(cljs.core.not_empty(items))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_todo_item,items)], null),null);
} else {
return null;
}
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.TodoList !== 'undefined')){
} else {
app.client.TodoList = (function app$client$TodoList(props__45976__auto__){
var this__45977__auto__ = this;
var temp__5733__auto___70562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45975__auto___70561,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___70562)){
var init_state__45978__auto___70563 = temp__5733__auto___70562;
(this__45977__auto__.state = (function (){var obj70532 = ({"fulcro$state":(function (){var G__70533 = this__45977__auto__;
var G__70534 = goog.object.get(props__45976__auto__,"fulcro$value");
return (init_state__45978__auto___70563.cljs$core$IFn$_invoke$arity$2 ? init_state__45978__auto___70563.cljs$core$IFn$_invoke$arity$2(G__70533,G__70534) : init_state__45978__auto___70563.call(null,G__70533,G__70534));
})()});
return obj70532;
})());
} else {
(this__45977__auto__.state = (function (){var obj70536 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj70536;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.TodoList,new cljs.core.Keyword("app.client","TodoList","app.client/TodoList",-57350194),options__45975__auto___70561);
app.client.ui_todo_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.TodoList);

var options__45975__auto___70564 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-input","id","todo-input/id",-54742319),new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-input","list","todo-input/list",1561872606),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.TodoList)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-input","id","todo-input/id",-54742319),new cljs.core.Keyword("todo-input","id","todo-input/id",-54742319).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo-input","id","todo-input/id",-54742319),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306),"",new cljs.core.Keyword("todo-input","list","todo-input/list",1561872606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("param","list-id","param/list-id",1587412586)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-input","list","todo-input/list",1561872606),app.client.TodoList], null),params);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306),e.target.value);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e,list_id,value){
e.preventDefault();

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70538 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),list_id,new cljs.core.Keyword(null,"value","value",305978217),value], null);
return (app.client.add_todo.cljs$core$IFn$_invoke$arity$1 ? app.client.add_todo.cljs$core$IFn$_invoke$arity$1(G__70538) : app.client.add_todo.call(null,G__70538));
})()], null));

return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306),"");
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_TodoInput(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__70539 = com.fulcrologic.fulcro.components.props(this$);
var map__70539__$1 = (((((!((map__70539 == null))))?(((((map__70539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70539):map__70539);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70539__$1,new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70539__$1,new cljs.core.Keyword("todo-input","list","todo-input/list",1561872606));
var map__70541 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__70541__$1 = (((((!((map__70541 == null))))?(((((map__70541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70541):map__70541);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70541__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70541__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var list_id = new cljs.core.Keyword("todo-list","id","todo-list/id",116741263).cljs$core$IFn$_invoke$arity$1(list);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),on_change], null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__70537_SHARP_){
return (on_click.cljs$core$IFn$_invoke$arity$3 ? on_click.cljs$core$IFn$_invoke$arity$3(p1__70537_SHARP_,list_id,value) : on_click.call(null,p1__70537_SHARP_,list_id,value));
})], null),"ADD"], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.TodoInput !== 'undefined')){
} else {
app.client.TodoInput = (function app$client$TodoInput(props__45976__auto__){
var this__45977__auto__ = this;
var temp__5733__auto___70565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45975__auto___70564,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___70565)){
var init_state__45978__auto___70566 = temp__5733__auto___70565;
(this__45977__auto__.state = (function (){var obj70544 = ({"fulcro$state":(function (){var G__70545 = this__45977__auto__;
var G__70546 = goog.object.get(props__45976__auto__,"fulcro$value");
return (init_state__45978__auto___70566.cljs$core$IFn$_invoke$arity$2 ? init_state__45978__auto___70566.cljs$core$IFn$_invoke$arity$2(G__70545,G__70546) : init_state__45978__auto___70566.call(null,G__70545,G__70546));
})()});
return obj70544;
})());
} else {
(this__45977__auto__.state = (function (){var obj70548 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj70548;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.TodoInput,new cljs.core.Keyword("app.client","TodoInput","app.client/TodoInput",157449717),options__45975__auto___70564);
app.client.ui_todo_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.TodoInput);

var options__45975__auto___70567 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.TodoList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","todo-input","root/todo-input",720975256),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.TodoInput)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("root","todo-input","root/todo-input",720975256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"list-id","list-id",1757820635),(1)], null),new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),app.client.TodoList,new cljs.core.Keyword("root","todo-input","root/todo-input",720975256),app.client.TodoInput], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__70549 = com.fulcrologic.fulcro.components.props(this$);
var map__70549__$1 = (((((!((map__70549 == null))))?(((((map__70549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70549):map__70549);
var todo_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70549__$1,new cljs.core.Keyword("root","todo-list","root/todo-list",664379024));
var todo_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70549__$1,new cljs.core.Keyword("root","todo-input","root/todo-input",720975256));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_todo_input.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_todo_input.cljs$core$IFn$_invoke$arity$1(todo_input) : app.client.ui_todo_input.call(null,todo_input)),(app.client.ui_todo_list.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_todo_list.cljs$core$IFn$_invoke$arity$1(todo_list) : app.client.ui_todo_list.call(null,todo_list))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
app.client.Root = (function app$client$Root(props__45976__auto__){
var this__45977__auto__ = this;
var temp__5733__auto___70568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45975__auto___70567,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___70568)){
var init_state__45978__auto___70569 = temp__5733__auto___70568;
(this__45977__auto__.state = (function (){var obj70552 = ({"fulcro$state":(function (){var G__70553 = this__45977__auto__;
var G__70554 = goog.object.get(props__45976__auto__,"fulcro$value");
return (init_state__45978__auto___70569.cljs$core$IFn$_invoke$arity$2 ? init_state__45978__auto___70569.cljs$core$IFn$_invoke$arity$2(G__70553,G__70554) : init_state__45978__auto___70569.call(null,G__70553,G__70554));
})()});
return obj70552;
})());
} else {
(this__45977__auto__.state = (function (){var obj70556 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj70556;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__45975__auto___70567);
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Hot reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
