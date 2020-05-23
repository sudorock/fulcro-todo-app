goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = goog.object.get(React.createElement("div",null),"$$typeof");
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(child)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__59494){
var vec__59498 = p__59494;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59498,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59498,(1),null);
var pair = vec__59498;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__59501){
var vec__59505 = p__59501;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59505,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59505,(1),null);
var pair = vec__59505;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(arg)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(arg)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__59517){
var vec__59518 = p__59517;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__59521 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59521,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__59521;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__59533 = arguments.length;
switch (G__59533) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__59538 = component.refs;
var G__59538__$1 = (((G__59538 == null))?null:goog.object.get(G__59538,name));
if((G__59538__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__59538__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__59550 = arguments.length;
switch (G__59550) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___60772 = arguments.length;
var i__4731__auto___60773 = (0);
while(true){
if((i__4731__auto___60773 < len__4730__auto___60772)){
args_arr__4751__auto__.push((arguments[i__4731__auto___60773]));

var G__60774 = (i__4731__auto___60773 + (1));
i__4731__auto___60773 = G__60774;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq59545){
var G__59546 = cljs.core.first(seq59545);
var seq59545__$1 = cljs.core.next(seq59545);
var G__59547 = cljs.core.first(seq59545__$1);
var seq59545__$2 = cljs.core.next(seq59545__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59546,G__59547,seq59545__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4109__auto__ = tag;
if(cljs.core.truth_(and__4109__auto__)){
var G__59589 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59589) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__59589));
} else {
return and__4109__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return state;
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x59597_60775 = ctor.prototype;
(x59597_60775.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x59597_60775.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__59590_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__59590_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4109__auto__ = state_value;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = element_value;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,168,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
}),null)),null,1250342407);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x59597_60775.render = (function (){
var this$ = this;
return React.createElement(element,this$.state);
}));


var real_factory = React.createFactory(ctor);
return (function() { 
var G__60776__delegate = function (props,children){
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__60776 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__60777__i = 0, G__60777__a = new Array(arguments.length -  1);
while (G__60777__i < G__60777__a.length) {G__60777__a[G__60777__i] = arguments[G__60777__i + 1]; ++G__60777__i;}
  children = new cljs.core.IndexedSeq(G__60777__a,0,null);
} 
return G__60776__delegate.call(this,props,children);};
G__60776.cljs$lang$maxFixedArity = 1;
G__60776.cljs$lang$applyTo = (function (arglist__60778){
var props = cljs.core.first(arglist__60778);
var children = cljs.core.rest(arglist__60778);
return G__60776__delegate(props,children);
});
G__60776.cljs$core$IFn$_invoke$arity$variadic = G__60776__delegate;
return G__60776;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__59614 = tag;
switch (G__59614) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59614)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__59618 = arguments.length;
switch (G__59618) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__59622 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__59623 = cljs.core.seq(vec__59622);
var first__59624 = cljs.core.first(seq__59623);
var seq__59623__$1 = cljs.core.next(seq__59623);
var head = first__59624;
var tail = seq__59623__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__59627 = (function (){var G__59628 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59628,tail);

return G__59628;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59627) : f.call(null,G__59627));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__59629 = (function (){var G__59630 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59630,args);

return G__59630;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59629) : f.call(null,G__59629));
} else {
if(cljs.core.object_QMARK_(head)){
var G__59632 = (function (){var G__59633 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59633,tail);

return G__59633;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59632) : f.call(null,G__59632));
} else {
if(cljs.core.map_QMARK_(head)){
var G__59634 = (function (){var G__59635 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__59635,tail);

return G__59635;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59634) : f.call(null,G__59634));
} else {
var G__59638 = (function (){var G__59639 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59639,args);

return G__59639;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59638) : f.call(null,G__59638));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60781 = arguments.length;
var i__4731__auto___60782 = (0);
while(true){
if((i__4731__auto___60782 < len__4730__auto___60781)){
args__4736__auto__.push((arguments[i__4731__auto___60782]));

var G__60783 = (i__4731__auto___60782 + (1));
i__4731__auto___60782 = G__60783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59665 = conformed_args__58244__auto__;
var map__59665__$1 = (((((!((map__59665 == null))))?(((((map__59665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59665):map__59665);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq59657){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60784 = arguments.length;
var i__4731__auto___60785 = (0);
while(true){
if((i__4731__auto___60785 < len__4730__auto___60784)){
args__4736__auto__.push((arguments[i__4731__auto___60785]));

var G__60786 = (i__4731__auto___60785 + (1));
i__4731__auto___60785 = G__60786;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59674 = conformed_args__58244__auto__;
var map__59674__$1 = (((((!((map__59674 == null))))?(((((map__59674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59674):map__59674);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq59669){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60787 = arguments.length;
var i__4731__auto___60788 = (0);
while(true){
if((i__4731__auto___60788 < len__4730__auto___60787)){
args__4736__auto__.push((arguments[i__4731__auto___60788]));

var G__60789 = (i__4731__auto___60788 + (1));
i__4731__auto___60788 = G__60789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59681 = conformed_args__58244__auto__;
var map__59681__$1 = (((((!((map__59681 == null))))?(((((map__59681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59681):map__59681);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq59679){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59679));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60790 = arguments.length;
var i__4731__auto___60791 = (0);
while(true){
if((i__4731__auto___60791 < len__4730__auto___60790)){
args__4736__auto__.push((arguments[i__4731__auto___60791]));

var G__60792 = (i__4731__auto___60791 + (1));
i__4731__auto___60791 = G__60792;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59694 = conformed_args__58244__auto__;
var map__59694__$1 = (((((!((map__59694 == null))))?(((((map__59694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59694):map__59694);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq59687){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59687));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60793 = arguments.length;
var i__4731__auto___60794 = (0);
while(true){
if((i__4731__auto___60794 < len__4730__auto___60793)){
args__4736__auto__.push((arguments[i__4731__auto___60794]));

var G__60795 = (i__4731__auto___60794 + (1));
i__4731__auto___60794 = G__60795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59705 = conformed_args__58244__auto__;
var map__59705__$1 = (((((!((map__59705 == null))))?(((((map__59705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59705):map__59705);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq59699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60796 = arguments.length;
var i__4731__auto___60797 = (0);
while(true){
if((i__4731__auto___60797 < len__4730__auto___60796)){
args__4736__auto__.push((arguments[i__4731__auto___60797]));

var G__60798 = (i__4731__auto___60797 + (1));
i__4731__auto___60797 = G__60798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59722 = conformed_args__58244__auto__;
var map__59722__$1 = (((((!((map__59722 == null))))?(((((map__59722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59722):map__59722);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq59714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60799 = arguments.length;
var i__4731__auto___60800 = (0);
while(true){
if((i__4731__auto___60800 < len__4730__auto___60799)){
args__4736__auto__.push((arguments[i__4731__auto___60800]));

var G__60801 = (i__4731__auto___60800 + (1));
i__4731__auto___60800 = G__60801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59727 = conformed_args__58244__auto__;
var map__59727__$1 = (((((!((map__59727 == null))))?(((((map__59727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59727):map__59727);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq59726){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60802 = arguments.length;
var i__4731__auto___60803 = (0);
while(true){
if((i__4731__auto___60803 < len__4730__auto___60802)){
args__4736__auto__.push((arguments[i__4731__auto___60803]));

var G__60804 = (i__4731__auto___60803 + (1));
i__4731__auto___60803 = G__60804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59739 = conformed_args__58244__auto__;
var map__59739__$1 = (((((!((map__59739 == null))))?(((((map__59739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59739):map__59739);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq59736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60805 = arguments.length;
var i__4731__auto___60806 = (0);
while(true){
if((i__4731__auto___60806 < len__4730__auto___60805)){
args__4736__auto__.push((arguments[i__4731__auto___60806]));

var G__60807 = (i__4731__auto___60806 + (1));
i__4731__auto___60806 = G__60807;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59745 = conformed_args__58244__auto__;
var map__59745__$1 = (((((!((map__59745 == null))))?(((((map__59745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59745):map__59745);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq59742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60808 = arguments.length;
var i__4731__auto___60809 = (0);
while(true){
if((i__4731__auto___60809 < len__4730__auto___60808)){
args__4736__auto__.push((arguments[i__4731__auto___60809]));

var G__60810 = (i__4731__auto___60809 + (1));
i__4731__auto___60809 = G__60810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59757 = conformed_args__58244__auto__;
var map__59757__$1 = (((((!((map__59757 == null))))?(((((map__59757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59757):map__59757);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq59749){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60811 = arguments.length;
var i__4731__auto___60812 = (0);
while(true){
if((i__4731__auto___60812 < len__4730__auto___60811)){
args__4736__auto__.push((arguments[i__4731__auto___60812]));

var G__60813 = (i__4731__auto___60812 + (1));
i__4731__auto___60812 = G__60813;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59769 = conformed_args__58244__auto__;
var map__59769__$1 = (((((!((map__59769 == null))))?(((((map__59769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59769):map__59769);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq59768){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60814 = arguments.length;
var i__4731__auto___60815 = (0);
while(true){
if((i__4731__auto___60815 < len__4730__auto___60814)){
args__4736__auto__.push((arguments[i__4731__auto___60815]));

var G__60816 = (i__4731__auto___60815 + (1));
i__4731__auto___60815 = G__60816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59775 = conformed_args__58244__auto__;
var map__59775__$1 = (((((!((map__59775 == null))))?(((((map__59775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59775):map__59775);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq59773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60817 = arguments.length;
var i__4731__auto___60818 = (0);
while(true){
if((i__4731__auto___60818 < len__4730__auto___60817)){
args__4736__auto__.push((arguments[i__4731__auto___60818]));

var G__60819 = (i__4731__auto___60818 + (1));
i__4731__auto___60818 = G__60819;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59782 = conformed_args__58244__auto__;
var map__59782__$1 = (((((!((map__59782 == null))))?(((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59782):map__59782);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq59781){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60820 = arguments.length;
var i__4731__auto___60821 = (0);
while(true){
if((i__4731__auto___60821 < len__4730__auto___60820)){
args__4736__auto__.push((arguments[i__4731__auto___60821]));

var G__60822 = (i__4731__auto___60821 + (1));
i__4731__auto___60821 = G__60822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59794 = conformed_args__58244__auto__;
var map__59794__$1 = (((((!((map__59794 == null))))?(((((map__59794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59794):map__59794);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq59788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60823 = arguments.length;
var i__4731__auto___60824 = (0);
while(true){
if((i__4731__auto___60824 < len__4730__auto___60823)){
args__4736__auto__.push((arguments[i__4731__auto___60824]));

var G__60825 = (i__4731__auto___60824 + (1));
i__4731__auto___60824 = G__60825;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59807 = conformed_args__58244__auto__;
var map__59807__$1 = (((((!((map__59807 == null))))?(((((map__59807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59807):map__59807);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq59803){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60826 = arguments.length;
var i__4731__auto___60827 = (0);
while(true){
if((i__4731__auto___60827 < len__4730__auto___60826)){
args__4736__auto__.push((arguments[i__4731__auto___60827]));

var G__60828 = (i__4731__auto___60827 + (1));
i__4731__auto___60827 = G__60828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59813 = conformed_args__58244__auto__;
var map__59813__$1 = (((((!((map__59813 == null))))?(((((map__59813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59813):map__59813);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq59812){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60829 = arguments.length;
var i__4731__auto___60830 = (0);
while(true){
if((i__4731__auto___60830 < len__4730__auto___60829)){
args__4736__auto__.push((arguments[i__4731__auto___60830]));

var G__60831 = (i__4731__auto___60830 + (1));
i__4731__auto___60830 = G__60831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59829 = conformed_args__58244__auto__;
var map__59829__$1 = (((((!((map__59829 == null))))?(((((map__59829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59829):map__59829);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq59822){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60832 = arguments.length;
var i__4731__auto___60833 = (0);
while(true){
if((i__4731__auto___60833 < len__4730__auto___60832)){
args__4736__auto__.push((arguments[i__4731__auto___60833]));

var G__60834 = (i__4731__auto___60833 + (1));
i__4731__auto___60833 = G__60834;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59839 = conformed_args__58244__auto__;
var map__59839__$1 = (((((!((map__59839 == null))))?(((((map__59839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59839):map__59839);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq59833){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60835 = arguments.length;
var i__4731__auto___60836 = (0);
while(true){
if((i__4731__auto___60836 < len__4730__auto___60835)){
args__4736__auto__.push((arguments[i__4731__auto___60836]));

var G__60837 = (i__4731__auto___60836 + (1));
i__4731__auto___60836 = G__60837;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59853 = conformed_args__58244__auto__;
var map__59853__$1 = (((((!((map__59853 == null))))?(((((map__59853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59853):map__59853);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq59849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60838 = arguments.length;
var i__4731__auto___60839 = (0);
while(true){
if((i__4731__auto___60839 < len__4730__auto___60838)){
args__4736__auto__.push((arguments[i__4731__auto___60839]));

var G__60840 = (i__4731__auto___60839 + (1));
i__4731__auto___60839 = G__60840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59863 = conformed_args__58244__auto__;
var map__59863__$1 = (((((!((map__59863 == null))))?(((((map__59863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59863):map__59863);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq59855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60841 = arguments.length;
var i__4731__auto___60842 = (0);
while(true){
if((i__4731__auto___60842 < len__4730__auto___60841)){
args__4736__auto__.push((arguments[i__4731__auto___60842]));

var G__60843 = (i__4731__auto___60842 + (1));
i__4731__auto___60842 = G__60843;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59871 = conformed_args__58244__auto__;
var map__59871__$1 = (((((!((map__59871 == null))))?(((((map__59871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59871):map__59871);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq59869){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60844 = arguments.length;
var i__4731__auto___60845 = (0);
while(true){
if((i__4731__auto___60845 < len__4730__auto___60844)){
args__4736__auto__.push((arguments[i__4731__auto___60845]));

var G__60846 = (i__4731__auto___60845 + (1));
i__4731__auto___60845 = G__60846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59877 = conformed_args__58244__auto__;
var map__59877__$1 = (((((!((map__59877 == null))))?(((((map__59877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59877):map__59877);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq59876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60847 = arguments.length;
var i__4731__auto___60848 = (0);
while(true){
if((i__4731__auto___60848 < len__4730__auto___60847)){
args__4736__auto__.push((arguments[i__4731__auto___60848]));

var G__60849 = (i__4731__auto___60848 + (1));
i__4731__auto___60848 = G__60849;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59888 = conformed_args__58244__auto__;
var map__59888__$1 = (((((!((map__59888 == null))))?(((((map__59888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59888):map__59888);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq59885){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59885));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60850 = arguments.length;
var i__4731__auto___60851 = (0);
while(true){
if((i__4731__auto___60851 < len__4730__auto___60850)){
args__4736__auto__.push((arguments[i__4731__auto___60851]));

var G__60852 = (i__4731__auto___60851 + (1));
i__4731__auto___60851 = G__60852;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59895 = conformed_args__58244__auto__;
var map__59895__$1 = (((((!((map__59895 == null))))?(((((map__59895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59895):map__59895);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq59891){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59891));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60853 = arguments.length;
var i__4731__auto___60854 = (0);
while(true){
if((i__4731__auto___60854 < len__4730__auto___60853)){
args__4736__auto__.push((arguments[i__4731__auto___60854]));

var G__60855 = (i__4731__auto___60854 + (1));
i__4731__auto___60854 = G__60855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59901 = conformed_args__58244__auto__;
var map__59901__$1 = (((((!((map__59901 == null))))?(((((map__59901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59901):map__59901);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq59900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60856 = arguments.length;
var i__4731__auto___60857 = (0);
while(true){
if((i__4731__auto___60857 < len__4730__auto___60856)){
args__4736__auto__.push((arguments[i__4731__auto___60857]));

var G__60858 = (i__4731__auto___60857 + (1));
i__4731__auto___60857 = G__60858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59908 = conformed_args__58244__auto__;
var map__59908__$1 = (((((!((map__59908 == null))))?(((((map__59908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59908):map__59908);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq59906){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59906));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60859 = arguments.length;
var i__4731__auto___60860 = (0);
while(true){
if((i__4731__auto___60860 < len__4730__auto___60859)){
args__4736__auto__.push((arguments[i__4731__auto___60860]));

var G__60861 = (i__4731__auto___60860 + (1));
i__4731__auto___60860 = G__60861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59917 = conformed_args__58244__auto__;
var map__59917__$1 = (((((!((map__59917 == null))))?(((((map__59917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59917):map__59917);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq59914){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59914));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60862 = arguments.length;
var i__4731__auto___60863 = (0);
while(true){
if((i__4731__auto___60863 < len__4730__auto___60862)){
args__4736__auto__.push((arguments[i__4731__auto___60863]));

var G__60864 = (i__4731__auto___60863 + (1));
i__4731__auto___60863 = G__60864;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59930 = conformed_args__58244__auto__;
var map__59930__$1 = (((((!((map__59930 == null))))?(((((map__59930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59930):map__59930);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq59926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60865 = arguments.length;
var i__4731__auto___60866 = (0);
while(true){
if((i__4731__auto___60866 < len__4730__auto___60865)){
args__4736__auto__.push((arguments[i__4731__auto___60866]));

var G__60867 = (i__4731__auto___60866 + (1));
i__4731__auto___60866 = G__60867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59945 = conformed_args__58244__auto__;
var map__59945__$1 = (((((!((map__59945 == null))))?(((((map__59945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59945):map__59945);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq59943){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59943));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60868 = arguments.length;
var i__4731__auto___60869 = (0);
while(true){
if((i__4731__auto___60869 < len__4730__auto___60868)){
args__4736__auto__.push((arguments[i__4731__auto___60869]));

var G__60870 = (i__4731__auto___60869 + (1));
i__4731__auto___60869 = G__60870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59956 = conformed_args__58244__auto__;
var map__59956__$1 = (((((!((map__59956 == null))))?(((((map__59956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59956):map__59956);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq59954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59954));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60871 = arguments.length;
var i__4731__auto___60872 = (0);
while(true){
if((i__4731__auto___60872 < len__4730__auto___60871)){
args__4736__auto__.push((arguments[i__4731__auto___60872]));

var G__60873 = (i__4731__auto___60872 + (1));
i__4731__auto___60872 = G__60873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59968 = conformed_args__58244__auto__;
var map__59968__$1 = (((((!((map__59968 == null))))?(((((map__59968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59968):map__59968);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq59963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60874 = arguments.length;
var i__4731__auto___60875 = (0);
while(true){
if((i__4731__auto___60875 < len__4730__auto___60874)){
args__4736__auto__.push((arguments[i__4731__auto___60875]));

var G__60876 = (i__4731__auto___60875 + (1));
i__4731__auto___60875 = G__60876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59975 = conformed_args__58244__auto__;
var map__59975__$1 = (((((!((map__59975 == null))))?(((((map__59975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59975):map__59975);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq59971){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59971));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60877 = arguments.length;
var i__4731__auto___60878 = (0);
while(true){
if((i__4731__auto___60878 < len__4730__auto___60877)){
args__4736__auto__.push((arguments[i__4731__auto___60878]));

var G__60879 = (i__4731__auto___60878 + (1));
i__4731__auto___60878 = G__60879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59984 = conformed_args__58244__auto__;
var map__59984__$1 = (((((!((map__59984 == null))))?(((((map__59984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59984):map__59984);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq59980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60880 = arguments.length;
var i__4731__auto___60881 = (0);
while(true){
if((i__4731__auto___60881 < len__4730__auto___60880)){
args__4736__auto__.push((arguments[i__4731__auto___60881]));

var G__60882 = (i__4731__auto___60881 + (1));
i__4731__auto___60881 = G__60882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59990 = conformed_args__58244__auto__;
var map__59990__$1 = (((((!((map__59990 == null))))?(((((map__59990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59990):map__59990);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq59986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60883 = arguments.length;
var i__4731__auto___60884 = (0);
while(true){
if((i__4731__auto___60884 < len__4730__auto___60883)){
args__4736__auto__.push((arguments[i__4731__auto___60884]));

var G__60885 = (i__4731__auto___60884 + (1));
i__4731__auto___60884 = G__60885;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59994 = conformed_args__58244__auto__;
var map__59994__$1 = (((((!((map__59994 == null))))?(((((map__59994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59994):map__59994);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq59993){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59993));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60886 = arguments.length;
var i__4731__auto___60887 = (0);
while(true){
if((i__4731__auto___60887 < len__4730__auto___60886)){
args__4736__auto__.push((arguments[i__4731__auto___60887]));

var G__60888 = (i__4731__auto___60887 + (1));
i__4731__auto___60887 = G__60888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59998 = conformed_args__58244__auto__;
var map__59998__$1 = (((((!((map__59998 == null))))?(((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59998):map__59998);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq59997){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59997));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60889 = arguments.length;
var i__4731__auto___60890 = (0);
while(true){
if((i__4731__auto___60890 < len__4730__auto___60889)){
args__4736__auto__.push((arguments[i__4731__auto___60890]));

var G__60891 = (i__4731__auto___60890 + (1));
i__4731__auto___60890 = G__60891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60001 = conformed_args__58244__auto__;
var map__60001__$1 = (((((!((map__60001 == null))))?(((((map__60001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60001):map__60001);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq60000){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60892 = arguments.length;
var i__4731__auto___60893 = (0);
while(true){
if((i__4731__auto___60893 < len__4730__auto___60892)){
args__4736__auto__.push((arguments[i__4731__auto___60893]));

var G__60894 = (i__4731__auto___60893 + (1));
i__4731__auto___60893 = G__60894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60004 = conformed_args__58244__auto__;
var map__60004__$1 = (((((!((map__60004 == null))))?(((((map__60004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60004):map__60004);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq60003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60003));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60895 = arguments.length;
var i__4731__auto___60896 = (0);
while(true){
if((i__4731__auto___60896 < len__4730__auto___60895)){
args__4736__auto__.push((arguments[i__4731__auto___60896]));

var G__60897 = (i__4731__auto___60896 + (1));
i__4731__auto___60896 = G__60897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60015 = conformed_args__58244__auto__;
var map__60015__$1 = (((((!((map__60015 == null))))?(((((map__60015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60015):map__60015);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq60010){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60898 = arguments.length;
var i__4731__auto___60899 = (0);
while(true){
if((i__4731__auto___60899 < len__4730__auto___60898)){
args__4736__auto__.push((arguments[i__4731__auto___60899]));

var G__60900 = (i__4731__auto___60899 + (1));
i__4731__auto___60899 = G__60900;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60041 = conformed_args__58244__auto__;
var map__60041__$1 = (((((!((map__60041 == null))))?(((((map__60041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60041):map__60041);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq60035){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60035));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60901 = arguments.length;
var i__4731__auto___60902 = (0);
while(true){
if((i__4731__auto___60902 < len__4730__auto___60901)){
args__4736__auto__.push((arguments[i__4731__auto___60902]));

var G__60903 = (i__4731__auto___60902 + (1));
i__4731__auto___60902 = G__60903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60068 = conformed_args__58244__auto__;
var map__60068__$1 = (((((!((map__60068 == null))))?(((((map__60068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60068):map__60068);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq60058){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60904 = arguments.length;
var i__4731__auto___60905 = (0);
while(true){
if((i__4731__auto___60905 < len__4730__auto___60904)){
args__4736__auto__.push((arguments[i__4731__auto___60905]));

var G__60906 = (i__4731__auto___60905 + (1));
i__4731__auto___60905 = G__60906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60077 = conformed_args__58244__auto__;
var map__60077__$1 = (((((!((map__60077 == null))))?(((((map__60077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60077):map__60077);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq60075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60907 = arguments.length;
var i__4731__auto___60908 = (0);
while(true){
if((i__4731__auto___60908 < len__4730__auto___60907)){
args__4736__auto__.push((arguments[i__4731__auto___60908]));

var G__60909 = (i__4731__auto___60908 + (1));
i__4731__auto___60908 = G__60909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60087 = conformed_args__58244__auto__;
var map__60087__$1 = (((((!((map__60087 == null))))?(((((map__60087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60087):map__60087);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq60080){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60910 = arguments.length;
var i__4731__auto___60911 = (0);
while(true){
if((i__4731__auto___60911 < len__4730__auto___60910)){
args__4736__auto__.push((arguments[i__4731__auto___60911]));

var G__60912 = (i__4731__auto___60911 + (1));
i__4731__auto___60911 = G__60912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60098 = conformed_args__58244__auto__;
var map__60098__$1 = (((((!((map__60098 == null))))?(((((map__60098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60098):map__60098);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq60091){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60091));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60913 = arguments.length;
var i__4731__auto___60914 = (0);
while(true){
if((i__4731__auto___60914 < len__4730__auto___60913)){
args__4736__auto__.push((arguments[i__4731__auto___60914]));

var G__60915 = (i__4731__auto___60914 + (1));
i__4731__auto___60914 = G__60915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60128 = conformed_args__58244__auto__;
var map__60128__$1 = (((((!((map__60128 == null))))?(((((map__60128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60128):map__60128);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq60125){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60916 = arguments.length;
var i__4731__auto___60917 = (0);
while(true){
if((i__4731__auto___60917 < len__4730__auto___60916)){
args__4736__auto__.push((arguments[i__4731__auto___60917]));

var G__60918 = (i__4731__auto___60917 + (1));
i__4731__auto___60917 = G__60918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60138 = conformed_args__58244__auto__;
var map__60138__$1 = (((((!((map__60138 == null))))?(((((map__60138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60138):map__60138);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60138__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60138__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60138__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq60131){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60131));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60919 = arguments.length;
var i__4731__auto___60920 = (0);
while(true){
if((i__4731__auto___60920 < len__4730__auto___60919)){
args__4736__auto__.push((arguments[i__4731__auto___60920]));

var G__60921 = (i__4731__auto___60920 + (1));
i__4731__auto___60920 = G__60921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60142 = conformed_args__58244__auto__;
var map__60142__$1 = (((((!((map__60142 == null))))?(((((map__60142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60142):map__60142);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq60140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60140));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60922 = arguments.length;
var i__4731__auto___60923 = (0);
while(true){
if((i__4731__auto___60923 < len__4730__auto___60922)){
args__4736__auto__.push((arguments[i__4731__auto___60923]));

var G__60924 = (i__4731__auto___60923 + (1));
i__4731__auto___60923 = G__60924;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60156 = conformed_args__58244__auto__;
var map__60156__$1 = (((((!((map__60156 == null))))?(((((map__60156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60156):map__60156);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq60148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60148));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60925 = arguments.length;
var i__4731__auto___60926 = (0);
while(true){
if((i__4731__auto___60926 < len__4730__auto___60925)){
args__4736__auto__.push((arguments[i__4731__auto___60926]));

var G__60927 = (i__4731__auto___60926 + (1));
i__4731__auto___60926 = G__60927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60164 = conformed_args__58244__auto__;
var map__60164__$1 = (((((!((map__60164 == null))))?(((((map__60164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60164):map__60164);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq60161){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60161));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60928 = arguments.length;
var i__4731__auto___60929 = (0);
while(true){
if((i__4731__auto___60929 < len__4730__auto___60928)){
args__4736__auto__.push((arguments[i__4731__auto___60929]));

var G__60930 = (i__4731__auto___60929 + (1));
i__4731__auto___60929 = G__60930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60172 = conformed_args__58244__auto__;
var map__60172__$1 = (((((!((map__60172 == null))))?(((((map__60172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60172):map__60172);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq60169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60931 = arguments.length;
var i__4731__auto___60932 = (0);
while(true){
if((i__4731__auto___60932 < len__4730__auto___60931)){
args__4736__auto__.push((arguments[i__4731__auto___60932]));

var G__60933 = (i__4731__auto___60932 + (1));
i__4731__auto___60932 = G__60933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60182 = conformed_args__58244__auto__;
var map__60182__$1 = (((((!((map__60182 == null))))?(((((map__60182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60182):map__60182);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq60178){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60178));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60934 = arguments.length;
var i__4731__auto___60935 = (0);
while(true){
if((i__4731__auto___60935 < len__4730__auto___60934)){
args__4736__auto__.push((arguments[i__4731__auto___60935]));

var G__60936 = (i__4731__auto___60935 + (1));
i__4731__auto___60935 = G__60936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60191 = conformed_args__58244__auto__;
var map__60191__$1 = (((((!((map__60191 == null))))?(((((map__60191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60191):map__60191);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq60187){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60187));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60937 = arguments.length;
var i__4731__auto___60938 = (0);
while(true){
if((i__4731__auto___60938 < len__4730__auto___60937)){
args__4736__auto__.push((arguments[i__4731__auto___60938]));

var G__60939 = (i__4731__auto___60938 + (1));
i__4731__auto___60938 = G__60939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60194 = conformed_args__58244__auto__;
var map__60194__$1 = (((((!((map__60194 == null))))?(((((map__60194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60194):map__60194);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq60193){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60193));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60940 = arguments.length;
var i__4731__auto___60941 = (0);
while(true){
if((i__4731__auto___60941 < len__4730__auto___60940)){
args__4736__auto__.push((arguments[i__4731__auto___60941]));

var G__60942 = (i__4731__auto___60941 + (1));
i__4731__auto___60941 = G__60942;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60198 = conformed_args__58244__auto__;
var map__60198__$1 = (((((!((map__60198 == null))))?(((((map__60198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60198):map__60198);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq60196){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60196));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60943 = arguments.length;
var i__4731__auto___60944 = (0);
while(true){
if((i__4731__auto___60944 < len__4730__auto___60943)){
args__4736__auto__.push((arguments[i__4731__auto___60944]));

var G__60945 = (i__4731__auto___60944 + (1));
i__4731__auto___60944 = G__60945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60205 = conformed_args__58244__auto__;
var map__60205__$1 = (((((!((map__60205 == null))))?(((((map__60205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60205):map__60205);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq60200){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60200));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60946 = arguments.length;
var i__4731__auto___60947 = (0);
while(true){
if((i__4731__auto___60947 < len__4730__auto___60946)){
args__4736__auto__.push((arguments[i__4731__auto___60947]));

var G__60948 = (i__4731__auto___60947 + (1));
i__4731__auto___60947 = G__60948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60208 = conformed_args__58244__auto__;
var map__60208__$1 = (((((!((map__60208 == null))))?(((((map__60208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60208):map__60208);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq60207){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60949 = arguments.length;
var i__4731__auto___60950 = (0);
while(true){
if((i__4731__auto___60950 < len__4730__auto___60949)){
args__4736__auto__.push((arguments[i__4731__auto___60950]));

var G__60951 = (i__4731__auto___60950 + (1));
i__4731__auto___60950 = G__60951;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60215 = conformed_args__58244__auto__;
var map__60215__$1 = (((((!((map__60215 == null))))?(((((map__60215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60215):map__60215);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq60214){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60952 = arguments.length;
var i__4731__auto___60953 = (0);
while(true){
if((i__4731__auto___60953 < len__4730__auto___60952)){
args__4736__auto__.push((arguments[i__4731__auto___60953]));

var G__60954 = (i__4731__auto___60953 + (1));
i__4731__auto___60953 = G__60954;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60225 = conformed_args__58244__auto__;
var map__60225__$1 = (((((!((map__60225 == null))))?(((((map__60225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60225):map__60225);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq60221){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60955 = arguments.length;
var i__4731__auto___60956 = (0);
while(true){
if((i__4731__auto___60956 < len__4730__auto___60955)){
args__4736__auto__.push((arguments[i__4731__auto___60956]));

var G__60957 = (i__4731__auto___60956 + (1));
i__4731__auto___60956 = G__60957;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60242 = conformed_args__58244__auto__;
var map__60242__$1 = (((((!((map__60242 == null))))?(((((map__60242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60242):map__60242);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq60237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60237));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60958 = arguments.length;
var i__4731__auto___60959 = (0);
while(true){
if((i__4731__auto___60959 < len__4730__auto___60958)){
args__4736__auto__.push((arguments[i__4731__auto___60959]));

var G__60960 = (i__4731__auto___60959 + (1));
i__4731__auto___60959 = G__60960;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60252 = conformed_args__58244__auto__;
var map__60252__$1 = (((((!((map__60252 == null))))?(((((map__60252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60252):map__60252);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq60249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60249));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60961 = arguments.length;
var i__4731__auto___60962 = (0);
while(true){
if((i__4731__auto___60962 < len__4730__auto___60961)){
args__4736__auto__.push((arguments[i__4731__auto___60962]));

var G__60963 = (i__4731__auto___60962 + (1));
i__4731__auto___60962 = G__60963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60276 = conformed_args__58244__auto__;
var map__60276__$1 = (((((!((map__60276 == null))))?(((((map__60276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60276):map__60276);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq60263){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60263));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60964 = arguments.length;
var i__4731__auto___60965 = (0);
while(true){
if((i__4731__auto___60965 < len__4730__auto___60964)){
args__4736__auto__.push((arguments[i__4731__auto___60965]));

var G__60966 = (i__4731__auto___60965 + (1));
i__4731__auto___60965 = G__60966;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60300 = conformed_args__58244__auto__;
var map__60300__$1 = (((((!((map__60300 == null))))?(((((map__60300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60300):map__60300);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq60293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60293));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60967 = arguments.length;
var i__4731__auto___60968 = (0);
while(true){
if((i__4731__auto___60968 < len__4730__auto___60967)){
args__4736__auto__.push((arguments[i__4731__auto___60968]));

var G__60969 = (i__4731__auto___60968 + (1));
i__4731__auto___60968 = G__60969;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60305 = conformed_args__58244__auto__;
var map__60305__$1 = (((((!((map__60305 == null))))?(((((map__60305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60305):map__60305);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq60303){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60970 = arguments.length;
var i__4731__auto___60971 = (0);
while(true){
if((i__4731__auto___60971 < len__4730__auto___60970)){
args__4736__auto__.push((arguments[i__4731__auto___60971]));

var G__60972 = (i__4731__auto___60971 + (1));
i__4731__auto___60971 = G__60972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60313 = conformed_args__58244__auto__;
var map__60313__$1 = (((((!((map__60313 == null))))?(((((map__60313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60313):map__60313);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq60312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60312));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60973 = arguments.length;
var i__4731__auto___60974 = (0);
while(true){
if((i__4731__auto___60974 < len__4730__auto___60973)){
args__4736__auto__.push((arguments[i__4731__auto___60974]));

var G__60975 = (i__4731__auto___60974 + (1));
i__4731__auto___60974 = G__60975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60320 = conformed_args__58244__auto__;
var map__60320__$1 = (((((!((map__60320 == null))))?(((((map__60320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60320):map__60320);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq60315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60976 = arguments.length;
var i__4731__auto___60977 = (0);
while(true){
if((i__4731__auto___60977 < len__4730__auto___60976)){
args__4736__auto__.push((arguments[i__4731__auto___60977]));

var G__60978 = (i__4731__auto___60977 + (1));
i__4731__auto___60977 = G__60978;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60326 = conformed_args__58244__auto__;
var map__60326__$1 = (((((!((map__60326 == null))))?(((((map__60326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60326):map__60326);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq60322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60322));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60979 = arguments.length;
var i__4731__auto___60980 = (0);
while(true){
if((i__4731__auto___60980 < len__4730__auto___60979)){
args__4736__auto__.push((arguments[i__4731__auto___60980]));

var G__60981 = (i__4731__auto___60980 + (1));
i__4731__auto___60980 = G__60981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60331 = conformed_args__58244__auto__;
var map__60331__$1 = (((((!((map__60331 == null))))?(((((map__60331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60331):map__60331);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq60328){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60328));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60982 = arguments.length;
var i__4731__auto___60983 = (0);
while(true){
if((i__4731__auto___60983 < len__4730__auto___60982)){
args__4736__auto__.push((arguments[i__4731__auto___60983]));

var G__60984 = (i__4731__auto___60983 + (1));
i__4731__auto___60983 = G__60984;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60337 = conformed_args__58244__auto__;
var map__60337__$1 = (((((!((map__60337 == null))))?(((((map__60337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60337):map__60337);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq60336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60336));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60985 = arguments.length;
var i__4731__auto___60986 = (0);
while(true){
if((i__4731__auto___60986 < len__4730__auto___60985)){
args__4736__auto__.push((arguments[i__4731__auto___60986]));

var G__60987 = (i__4731__auto___60986 + (1));
i__4731__auto___60986 = G__60987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60340 = conformed_args__58244__auto__;
var map__60340__$1 = (((((!((map__60340 == null))))?(((((map__60340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60340):map__60340);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq60339){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60339));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60988 = arguments.length;
var i__4731__auto___60989 = (0);
while(true){
if((i__4731__auto___60989 < len__4730__auto___60988)){
args__4736__auto__.push((arguments[i__4731__auto___60989]));

var G__60990 = (i__4731__auto___60989 + (1));
i__4731__auto___60989 = G__60990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60350 = conformed_args__58244__auto__;
var map__60350__$1 = (((((!((map__60350 == null))))?(((((map__60350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60350):map__60350);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq60344){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60344));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60991 = arguments.length;
var i__4731__auto___60992 = (0);
while(true){
if((i__4731__auto___60992 < len__4730__auto___60991)){
args__4736__auto__.push((arguments[i__4731__auto___60992]));

var G__60993 = (i__4731__auto___60992 + (1));
i__4731__auto___60992 = G__60993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60355 = conformed_args__58244__auto__;
var map__60355__$1 = (((((!((map__60355 == null))))?(((((map__60355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60355):map__60355);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq60353){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60353));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60994 = arguments.length;
var i__4731__auto___60995 = (0);
while(true){
if((i__4731__auto___60995 < len__4730__auto___60994)){
args__4736__auto__.push((arguments[i__4731__auto___60995]));

var G__60996 = (i__4731__auto___60995 + (1));
i__4731__auto___60995 = G__60996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60365 = conformed_args__58244__auto__;
var map__60365__$1 = (((((!((map__60365 == null))))?(((((map__60365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60365):map__60365);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq60361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60361));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60997 = arguments.length;
var i__4731__auto___60998 = (0);
while(true){
if((i__4731__auto___60998 < len__4730__auto___60997)){
args__4736__auto__.push((arguments[i__4731__auto___60998]));

var G__60999 = (i__4731__auto___60998 + (1));
i__4731__auto___60998 = G__60999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60368 = conformed_args__58244__auto__;
var map__60368__$1 = (((((!((map__60368 == null))))?(((((map__60368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60368):map__60368);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq60367){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60367));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61000 = arguments.length;
var i__4731__auto___61001 = (0);
while(true){
if((i__4731__auto___61001 < len__4730__auto___61000)){
args__4736__auto__.push((arguments[i__4731__auto___61001]));

var G__61002 = (i__4731__auto___61001 + (1));
i__4731__auto___61001 = G__61002;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60371 = conformed_args__58244__auto__;
var map__60371__$1 = (((((!((map__60371 == null))))?(((((map__60371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60371):map__60371);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq60370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61003 = arguments.length;
var i__4731__auto___61004 = (0);
while(true){
if((i__4731__auto___61004 < len__4730__auto___61003)){
args__4736__auto__.push((arguments[i__4731__auto___61004]));

var G__61005 = (i__4731__auto___61004 + (1));
i__4731__auto___61004 = G__61005;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60383 = conformed_args__58244__auto__;
var map__60383__$1 = (((((!((map__60383 == null))))?(((((map__60383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60383):map__60383);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq60374){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60374));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61006 = arguments.length;
var i__4731__auto___61007 = (0);
while(true){
if((i__4731__auto___61007 < len__4730__auto___61006)){
args__4736__auto__.push((arguments[i__4731__auto___61007]));

var G__61008 = (i__4731__auto___61007 + (1));
i__4731__auto___61007 = G__61008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60389 = conformed_args__58244__auto__;
var map__60389__$1 = (((((!((map__60389 == null))))?(((((map__60389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60389):map__60389);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq60387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60387));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61009 = arguments.length;
var i__4731__auto___61010 = (0);
while(true){
if((i__4731__auto___61010 < len__4730__auto___61009)){
args__4736__auto__.push((arguments[i__4731__auto___61010]));

var G__61011 = (i__4731__auto___61010 + (1));
i__4731__auto___61010 = G__61011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60393 = conformed_args__58244__auto__;
var map__60393__$1 = (((((!((map__60393 == null))))?(((((map__60393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60393):map__60393);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60393__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60393__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq60392){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60392));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61012 = arguments.length;
var i__4731__auto___61013 = (0);
while(true){
if((i__4731__auto___61013 < len__4730__auto___61012)){
args__4736__auto__.push((arguments[i__4731__auto___61013]));

var G__61014 = (i__4731__auto___61013 + (1));
i__4731__auto___61013 = G__61014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60397 = conformed_args__58244__auto__;
var map__60397__$1 = (((((!((map__60397 == null))))?(((((map__60397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60397):map__60397);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq60395){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60395));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61015 = arguments.length;
var i__4731__auto___61016 = (0);
while(true){
if((i__4731__auto___61016 < len__4730__auto___61015)){
args__4736__auto__.push((arguments[i__4731__auto___61016]));

var G__61017 = (i__4731__auto___61016 + (1));
i__4731__auto___61016 = G__61017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60400 = conformed_args__58244__auto__;
var map__60400__$1 = (((((!((map__60400 == null))))?(((((map__60400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60400):map__60400);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq60399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61018 = arguments.length;
var i__4731__auto___61019 = (0);
while(true){
if((i__4731__auto___61019 < len__4730__auto___61018)){
args__4736__auto__.push((arguments[i__4731__auto___61019]));

var G__61020 = (i__4731__auto___61019 + (1));
i__4731__auto___61019 = G__61020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60403 = conformed_args__58244__auto__;
var map__60403__$1 = (((((!((map__60403 == null))))?(((((map__60403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60403):map__60403);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq60402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60402));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61021 = arguments.length;
var i__4731__auto___61022 = (0);
while(true){
if((i__4731__auto___61022 < len__4730__auto___61021)){
args__4736__auto__.push((arguments[i__4731__auto___61022]));

var G__61023 = (i__4731__auto___61022 + (1));
i__4731__auto___61022 = G__61023;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60407 = conformed_args__58244__auto__;
var map__60407__$1 = (((((!((map__60407 == null))))?(((((map__60407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60407):map__60407);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq60405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60405));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61024 = arguments.length;
var i__4731__auto___61025 = (0);
while(true){
if((i__4731__auto___61025 < len__4730__auto___61024)){
args__4736__auto__.push((arguments[i__4731__auto___61025]));

var G__61026 = (i__4731__auto___61025 + (1));
i__4731__auto___61025 = G__61026;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60410 = conformed_args__58244__auto__;
var map__60410__$1 = (((((!((map__60410 == null))))?(((((map__60410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60410):map__60410);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq60409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61027 = arguments.length;
var i__4731__auto___61028 = (0);
while(true){
if((i__4731__auto___61028 < len__4730__auto___61027)){
args__4736__auto__.push((arguments[i__4731__auto___61028]));

var G__61029 = (i__4731__auto___61028 + (1));
i__4731__auto___61028 = G__61029;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60413 = conformed_args__58244__auto__;
var map__60413__$1 = (((((!((map__60413 == null))))?(((((map__60413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60413):map__60413);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq60412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60412));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61030 = arguments.length;
var i__4731__auto___61031 = (0);
while(true){
if((i__4731__auto___61031 < len__4730__auto___61030)){
args__4736__auto__.push((arguments[i__4731__auto___61031]));

var G__61032 = (i__4731__auto___61031 + (1));
i__4731__auto___61031 = G__61032;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60417 = conformed_args__58244__auto__;
var map__60417__$1 = (((((!((map__60417 == null))))?(((((map__60417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60417):map__60417);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq60416){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60416));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61033 = arguments.length;
var i__4731__auto___61034 = (0);
while(true){
if((i__4731__auto___61034 < len__4730__auto___61033)){
args__4736__auto__.push((arguments[i__4731__auto___61034]));

var G__61035 = (i__4731__auto___61034 + (1));
i__4731__auto___61034 = G__61035;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60420 = conformed_args__58244__auto__;
var map__60420__$1 = (((((!((map__60420 == null))))?(((((map__60420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60420):map__60420);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq60419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60419));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61036 = arguments.length;
var i__4731__auto___61037 = (0);
while(true){
if((i__4731__auto___61037 < len__4730__auto___61036)){
args__4736__auto__.push((arguments[i__4731__auto___61037]));

var G__61038 = (i__4731__auto___61037 + (1));
i__4731__auto___61037 = G__61038;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60423 = conformed_args__58244__auto__;
var map__60423__$1 = (((((!((map__60423 == null))))?(((((map__60423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60423):map__60423);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60423__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60423__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60423__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq60422){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60422));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61039 = arguments.length;
var i__4731__auto___61040 = (0);
while(true){
if((i__4731__auto___61040 < len__4730__auto___61039)){
args__4736__auto__.push((arguments[i__4731__auto___61040]));

var G__61041 = (i__4731__auto___61040 + (1));
i__4731__auto___61040 = G__61041;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60426 = conformed_args__58244__auto__;
var map__60426__$1 = (((((!((map__60426 == null))))?(((((map__60426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60426):map__60426);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq60425){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60425));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61042 = arguments.length;
var i__4731__auto___61043 = (0);
while(true){
if((i__4731__auto___61043 < len__4730__auto___61042)){
args__4736__auto__.push((arguments[i__4731__auto___61043]));

var G__61044 = (i__4731__auto___61043 + (1));
i__4731__auto___61043 = G__61044;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60429 = conformed_args__58244__auto__;
var map__60429__$1 = (((((!((map__60429 == null))))?(((((map__60429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60429):map__60429);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60429__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60429__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq60428){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60428));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61045 = arguments.length;
var i__4731__auto___61046 = (0);
while(true){
if((i__4731__auto___61046 < len__4730__auto___61045)){
args__4736__auto__.push((arguments[i__4731__auto___61046]));

var G__61047 = (i__4731__auto___61046 + (1));
i__4731__auto___61046 = G__61047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60432 = conformed_args__58244__auto__;
var map__60432__$1 = (((((!((map__60432 == null))))?(((((map__60432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60432):map__60432);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq60431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60431));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61048 = arguments.length;
var i__4731__auto___61049 = (0);
while(true){
if((i__4731__auto___61049 < len__4730__auto___61048)){
args__4736__auto__.push((arguments[i__4731__auto___61049]));

var G__61050 = (i__4731__auto___61049 + (1));
i__4731__auto___61049 = G__61050;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60435 = conformed_args__58244__auto__;
var map__60435__$1 = (((((!((map__60435 == null))))?(((((map__60435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60435):map__60435);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60435__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq60434){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60434));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61051 = arguments.length;
var i__4731__auto___61052 = (0);
while(true){
if((i__4731__auto___61052 < len__4730__auto___61051)){
args__4736__auto__.push((arguments[i__4731__auto___61052]));

var G__61053 = (i__4731__auto___61052 + (1));
i__4731__auto___61052 = G__61053;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60438 = conformed_args__58244__auto__;
var map__60438__$1 = (((((!((map__60438 == null))))?(((((map__60438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60438):map__60438);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq60437){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60437));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61054 = arguments.length;
var i__4731__auto___61055 = (0);
while(true){
if((i__4731__auto___61055 < len__4730__auto___61054)){
args__4736__auto__.push((arguments[i__4731__auto___61055]));

var G__61056 = (i__4731__auto___61055 + (1));
i__4731__auto___61055 = G__61056;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60441 = conformed_args__58244__auto__;
var map__60441__$1 = (((((!((map__60441 == null))))?(((((map__60441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60441):map__60441);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq60440){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60440));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61057 = arguments.length;
var i__4731__auto___61058 = (0);
while(true){
if((i__4731__auto___61058 < len__4730__auto___61057)){
args__4736__auto__.push((arguments[i__4731__auto___61058]));

var G__61059 = (i__4731__auto___61058 + (1));
i__4731__auto___61058 = G__61059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60444 = conformed_args__58244__auto__;
var map__60444__$1 = (((((!((map__60444 == null))))?(((((map__60444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60444):map__60444);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq60443){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60443));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61060 = arguments.length;
var i__4731__auto___61061 = (0);
while(true){
if((i__4731__auto___61061 < len__4730__auto___61060)){
args__4736__auto__.push((arguments[i__4731__auto___61061]));

var G__61062 = (i__4731__auto___61061 + (1));
i__4731__auto___61061 = G__61062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60447 = conformed_args__58244__auto__;
var map__60447__$1 = (((((!((map__60447 == null))))?(((((map__60447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60447):map__60447);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq60446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60446));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61063 = arguments.length;
var i__4731__auto___61064 = (0);
while(true){
if((i__4731__auto___61064 < len__4730__auto___61063)){
args__4736__auto__.push((arguments[i__4731__auto___61064]));

var G__61065 = (i__4731__auto___61064 + (1));
i__4731__auto___61064 = G__61065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60450 = conformed_args__58244__auto__;
var map__60450__$1 = (((((!((map__60450 == null))))?(((((map__60450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60450):map__60450);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq60449){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60449));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61066 = arguments.length;
var i__4731__auto___61067 = (0);
while(true){
if((i__4731__auto___61067 < len__4730__auto___61066)){
args__4736__auto__.push((arguments[i__4731__auto___61067]));

var G__61068 = (i__4731__auto___61067 + (1));
i__4731__auto___61067 = G__61068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60453 = conformed_args__58244__auto__;
var map__60453__$1 = (((((!((map__60453 == null))))?(((((map__60453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60453):map__60453);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq60452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60452));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61069 = arguments.length;
var i__4731__auto___61070 = (0);
while(true){
if((i__4731__auto___61070 < len__4730__auto___61069)){
args__4736__auto__.push((arguments[i__4731__auto___61070]));

var G__61071 = (i__4731__auto___61070 + (1));
i__4731__auto___61070 = G__61071;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60456 = conformed_args__58244__auto__;
var map__60456__$1 = (((((!((map__60456 == null))))?(((((map__60456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60456):map__60456);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq60455){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61072 = arguments.length;
var i__4731__auto___61073 = (0);
while(true){
if((i__4731__auto___61073 < len__4730__auto___61072)){
args__4736__auto__.push((arguments[i__4731__auto___61073]));

var G__61074 = (i__4731__auto___61073 + (1));
i__4731__auto___61073 = G__61074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60459 = conformed_args__58244__auto__;
var map__60459__$1 = (((((!((map__60459 == null))))?(((((map__60459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60459):map__60459);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq60458){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60458));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61075 = arguments.length;
var i__4731__auto___61076 = (0);
while(true){
if((i__4731__auto___61076 < len__4730__auto___61075)){
args__4736__auto__.push((arguments[i__4731__auto___61076]));

var G__61077 = (i__4731__auto___61076 + (1));
i__4731__auto___61076 = G__61077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60462 = conformed_args__58244__auto__;
var map__60462__$1 = (((((!((map__60462 == null))))?(((((map__60462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60462):map__60462);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq60461){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61078 = arguments.length;
var i__4731__auto___61079 = (0);
while(true){
if((i__4731__auto___61079 < len__4730__auto___61078)){
args__4736__auto__.push((arguments[i__4731__auto___61079]));

var G__61080 = (i__4731__auto___61079 + (1));
i__4731__auto___61079 = G__61080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60465 = conformed_args__58244__auto__;
var map__60465__$1 = (((((!((map__60465 == null))))?(((((map__60465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60465):map__60465);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60465__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60465__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60465__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq60464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60464));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61081 = arguments.length;
var i__4731__auto___61082 = (0);
while(true){
if((i__4731__auto___61082 < len__4730__auto___61081)){
args__4736__auto__.push((arguments[i__4731__auto___61082]));

var G__61083 = (i__4731__auto___61082 + (1));
i__4731__auto___61082 = G__61083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60468 = conformed_args__58244__auto__;
var map__60468__$1 = (((((!((map__60468 == null))))?(((((map__60468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60468):map__60468);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq60467){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61084 = arguments.length;
var i__4731__auto___61085 = (0);
while(true){
if((i__4731__auto___61085 < len__4730__auto___61084)){
args__4736__auto__.push((arguments[i__4731__auto___61085]));

var G__61086 = (i__4731__auto___61085 + (1));
i__4731__auto___61085 = G__61086;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60471 = conformed_args__58244__auto__;
var map__60471__$1 = (((((!((map__60471 == null))))?(((((map__60471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60471):map__60471);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq60470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60470));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61087 = arguments.length;
var i__4731__auto___61088 = (0);
while(true){
if((i__4731__auto___61088 < len__4730__auto___61087)){
args__4736__auto__.push((arguments[i__4731__auto___61088]));

var G__61089 = (i__4731__auto___61088 + (1));
i__4731__auto___61088 = G__61089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60474 = conformed_args__58244__auto__;
var map__60474__$1 = (((((!((map__60474 == null))))?(((((map__60474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60474):map__60474);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq60473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60473));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61090 = arguments.length;
var i__4731__auto___61091 = (0);
while(true){
if((i__4731__auto___61091 < len__4730__auto___61090)){
args__4736__auto__.push((arguments[i__4731__auto___61091]));

var G__61092 = (i__4731__auto___61091 + (1));
i__4731__auto___61091 = G__61092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60477 = conformed_args__58244__auto__;
var map__60477__$1 = (((((!((map__60477 == null))))?(((((map__60477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60477):map__60477);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq60476){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60476));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61093 = arguments.length;
var i__4731__auto___61094 = (0);
while(true){
if((i__4731__auto___61094 < len__4730__auto___61093)){
args__4736__auto__.push((arguments[i__4731__auto___61094]));

var G__61095 = (i__4731__auto___61094 + (1));
i__4731__auto___61094 = G__61095;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60480 = conformed_args__58244__auto__;
var map__60480__$1 = (((((!((map__60480 == null))))?(((((map__60480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60480):map__60480);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq60479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60479));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61096 = arguments.length;
var i__4731__auto___61097 = (0);
while(true){
if((i__4731__auto___61097 < len__4730__auto___61096)){
args__4736__auto__.push((arguments[i__4731__auto___61097]));

var G__61098 = (i__4731__auto___61097 + (1));
i__4731__auto___61097 = G__61098;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60483 = conformed_args__58244__auto__;
var map__60483__$1 = (((((!((map__60483 == null))))?(((((map__60483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60483):map__60483);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq60482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60482));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61099 = arguments.length;
var i__4731__auto___61100 = (0);
while(true){
if((i__4731__auto___61100 < len__4730__auto___61099)){
args__4736__auto__.push((arguments[i__4731__auto___61100]));

var G__61101 = (i__4731__auto___61100 + (1));
i__4731__auto___61100 = G__61101;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60486 = conformed_args__58244__auto__;
var map__60486__$1 = (((((!((map__60486 == null))))?(((((map__60486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60486):map__60486);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq60485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61102 = arguments.length;
var i__4731__auto___61103 = (0);
while(true){
if((i__4731__auto___61103 < len__4730__auto___61102)){
args__4736__auto__.push((arguments[i__4731__auto___61103]));

var G__61104 = (i__4731__auto___61103 + (1));
i__4731__auto___61103 = G__61104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60489 = conformed_args__58244__auto__;
var map__60489__$1 = (((((!((map__60489 == null))))?(((((map__60489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60489):map__60489);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq60488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60488));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61105 = arguments.length;
var i__4731__auto___61106 = (0);
while(true){
if((i__4731__auto___61106 < len__4730__auto___61105)){
args__4736__auto__.push((arguments[i__4731__auto___61106]));

var G__61107 = (i__4731__auto___61106 + (1));
i__4731__auto___61106 = G__61107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60492 = conformed_args__58244__auto__;
var map__60492__$1 = (((((!((map__60492 == null))))?(((((map__60492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60492):map__60492);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq60491){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60491));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61108 = arguments.length;
var i__4731__auto___61109 = (0);
while(true){
if((i__4731__auto___61109 < len__4730__auto___61108)){
args__4736__auto__.push((arguments[i__4731__auto___61109]));

var G__61110 = (i__4731__auto___61109 + (1));
i__4731__auto___61109 = G__61110;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60495 = conformed_args__58244__auto__;
var map__60495__$1 = (((((!((map__60495 == null))))?(((((map__60495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60495):map__60495);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq60494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60494));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61111 = arguments.length;
var i__4731__auto___61112 = (0);
while(true){
if((i__4731__auto___61112 < len__4730__auto___61111)){
args__4736__auto__.push((arguments[i__4731__auto___61112]));

var G__61113 = (i__4731__auto___61112 + (1));
i__4731__auto___61112 = G__61113;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60498 = conformed_args__58244__auto__;
var map__60498__$1 = (((((!((map__60498 == null))))?(((((map__60498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60498):map__60498);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq60497){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60497));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61114 = arguments.length;
var i__4731__auto___61115 = (0);
while(true){
if((i__4731__auto___61115 < len__4730__auto___61114)){
args__4736__auto__.push((arguments[i__4731__auto___61115]));

var G__61116 = (i__4731__auto___61115 + (1));
i__4731__auto___61115 = G__61116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60501 = conformed_args__58244__auto__;
var map__60501__$1 = (((((!((map__60501 == null))))?(((((map__60501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60501):map__60501);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq60500){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60500));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61117 = arguments.length;
var i__4731__auto___61118 = (0);
while(true){
if((i__4731__auto___61118 < len__4730__auto___61117)){
args__4736__auto__.push((arguments[i__4731__auto___61118]));

var G__61119 = (i__4731__auto___61118 + (1));
i__4731__auto___61118 = G__61119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60504 = conformed_args__58244__auto__;
var map__60504__$1 = (((((!((map__60504 == null))))?(((((map__60504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60504):map__60504);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq60503){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61120 = arguments.length;
var i__4731__auto___61121 = (0);
while(true){
if((i__4731__auto___61121 < len__4730__auto___61120)){
args__4736__auto__.push((arguments[i__4731__auto___61121]));

var G__61122 = (i__4731__auto___61121 + (1));
i__4731__auto___61121 = G__61122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60507 = conformed_args__58244__auto__;
var map__60507__$1 = (((((!((map__60507 == null))))?(((((map__60507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60507):map__60507);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq60506){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60506));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61123 = arguments.length;
var i__4731__auto___61124 = (0);
while(true){
if((i__4731__auto___61124 < len__4730__auto___61123)){
args__4736__auto__.push((arguments[i__4731__auto___61124]));

var G__61125 = (i__4731__auto___61124 + (1));
i__4731__auto___61124 = G__61125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60510 = conformed_args__58244__auto__;
var map__60510__$1 = (((((!((map__60510 == null))))?(((((map__60510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60510):map__60510);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq60509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61126 = arguments.length;
var i__4731__auto___61127 = (0);
while(true){
if((i__4731__auto___61127 < len__4730__auto___61126)){
args__4736__auto__.push((arguments[i__4731__auto___61127]));

var G__61128 = (i__4731__auto___61127 + (1));
i__4731__auto___61127 = G__61128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60513 = conformed_args__58244__auto__;
var map__60513__$1 = (((((!((map__60513 == null))))?(((((map__60513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60513):map__60513);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq60512){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60512));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61129 = arguments.length;
var i__4731__auto___61130 = (0);
while(true){
if((i__4731__auto___61130 < len__4730__auto___61129)){
args__4736__auto__.push((arguments[i__4731__auto___61130]));

var G__61131 = (i__4731__auto___61130 + (1));
i__4731__auto___61130 = G__61131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60516 = conformed_args__58244__auto__;
var map__60516__$1 = (((((!((map__60516 == null))))?(((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60516):map__60516);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq60515){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61132 = arguments.length;
var i__4731__auto___61133 = (0);
while(true){
if((i__4731__auto___61133 < len__4730__auto___61132)){
args__4736__auto__.push((arguments[i__4731__auto___61133]));

var G__61134 = (i__4731__auto___61133 + (1));
i__4731__auto___61133 = G__61134;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60519 = conformed_args__58244__auto__;
var map__60519__$1 = (((((!((map__60519 == null))))?(((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60519):map__60519);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq60518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60518));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61135 = arguments.length;
var i__4731__auto___61136 = (0);
while(true){
if((i__4731__auto___61136 < len__4730__auto___61135)){
args__4736__auto__.push((arguments[i__4731__auto___61136]));

var G__61137 = (i__4731__auto___61136 + (1));
i__4731__auto___61136 = G__61137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60522 = conformed_args__58244__auto__;
var map__60522__$1 = (((((!((map__60522 == null))))?(((((map__60522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60522):map__60522);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq60521){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60521));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61138 = arguments.length;
var i__4731__auto___61139 = (0);
while(true){
if((i__4731__auto___61139 < len__4730__auto___61138)){
args__4736__auto__.push((arguments[i__4731__auto___61139]));

var G__61140 = (i__4731__auto___61139 + (1));
i__4731__auto___61139 = G__61140;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60525 = conformed_args__58244__auto__;
var map__60525__$1 = (((((!((map__60525 == null))))?(((((map__60525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60525):map__60525);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq60524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60524));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61141 = arguments.length;
var i__4731__auto___61142 = (0);
while(true){
if((i__4731__auto___61142 < len__4730__auto___61141)){
args__4736__auto__.push((arguments[i__4731__auto___61142]));

var G__61143 = (i__4731__auto___61142 + (1));
i__4731__auto___61142 = G__61143;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60528 = conformed_args__58244__auto__;
var map__60528__$1 = (((((!((map__60528 == null))))?(((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60528):map__60528);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq60527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61144 = arguments.length;
var i__4731__auto___61145 = (0);
while(true){
if((i__4731__auto___61145 < len__4730__auto___61144)){
args__4736__auto__.push((arguments[i__4731__auto___61145]));

var G__61146 = (i__4731__auto___61145 + (1));
i__4731__auto___61145 = G__61146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60531 = conformed_args__58244__auto__;
var map__60531__$1 = (((((!((map__60531 == null))))?(((((map__60531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60531):map__60531);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq60530){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60530));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61147 = arguments.length;
var i__4731__auto___61148 = (0);
while(true){
if((i__4731__auto___61148 < len__4730__auto___61147)){
args__4736__auto__.push((arguments[i__4731__auto___61148]));

var G__61149 = (i__4731__auto___61148 + (1));
i__4731__auto___61148 = G__61149;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60534 = conformed_args__58244__auto__;
var map__60534__$1 = (((((!((map__60534 == null))))?(((((map__60534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60534):map__60534);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq60533){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60533));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61150 = arguments.length;
var i__4731__auto___61151 = (0);
while(true){
if((i__4731__auto___61151 < len__4730__auto___61150)){
args__4736__auto__.push((arguments[i__4731__auto___61151]));

var G__61152 = (i__4731__auto___61151 + (1));
i__4731__auto___61151 = G__61152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60537 = conformed_args__58244__auto__;
var map__60537__$1 = (((((!((map__60537 == null))))?(((((map__60537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60537):map__60537);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq60536){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60536));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61153 = arguments.length;
var i__4731__auto___61154 = (0);
while(true){
if((i__4731__auto___61154 < len__4730__auto___61153)){
args__4736__auto__.push((arguments[i__4731__auto___61154]));

var G__61155 = (i__4731__auto___61154 + (1));
i__4731__auto___61154 = G__61155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60540 = conformed_args__58244__auto__;
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq60539){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61156 = arguments.length;
var i__4731__auto___61157 = (0);
while(true){
if((i__4731__auto___61157 < len__4730__auto___61156)){
args__4736__auto__.push((arguments[i__4731__auto___61157]));

var G__61158 = (i__4731__auto___61157 + (1));
i__4731__auto___61157 = G__61158;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60543 = conformed_args__58244__auto__;
var map__60543__$1 = (((((!((map__60543 == null))))?(((((map__60543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60543):map__60543);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq60542){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60542));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61159 = arguments.length;
var i__4731__auto___61160 = (0);
while(true){
if((i__4731__auto___61160 < len__4730__auto___61159)){
args__4736__auto__.push((arguments[i__4731__auto___61160]));

var G__61161 = (i__4731__auto___61160 + (1));
i__4731__auto___61160 = G__61161;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60546 = conformed_args__58244__auto__;
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq60545){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60545));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61162 = arguments.length;
var i__4731__auto___61163 = (0);
while(true){
if((i__4731__auto___61163 < len__4730__auto___61162)){
args__4736__auto__.push((arguments[i__4731__auto___61163]));

var G__61164 = (i__4731__auto___61163 + (1));
i__4731__auto___61163 = G__61164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60549 = conformed_args__58244__auto__;
var map__60549__$1 = (((((!((map__60549 == null))))?(((((map__60549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60549):map__60549);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq60548){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60548));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61165 = arguments.length;
var i__4731__auto___61166 = (0);
while(true){
if((i__4731__auto___61166 < len__4730__auto___61165)){
args__4736__auto__.push((arguments[i__4731__auto___61166]));

var G__61167 = (i__4731__auto___61166 + (1));
i__4731__auto___61166 = G__61167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60552 = conformed_args__58244__auto__;
var map__60552__$1 = (((((!((map__60552 == null))))?(((((map__60552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60552):map__60552);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq60551){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61168 = arguments.length;
var i__4731__auto___61169 = (0);
while(true){
if((i__4731__auto___61169 < len__4730__auto___61168)){
args__4736__auto__.push((arguments[i__4731__auto___61169]));

var G__61170 = (i__4731__auto___61169 + (1));
i__4731__auto___61169 = G__61170;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60555 = conformed_args__58244__auto__;
var map__60555__$1 = (((((!((map__60555 == null))))?(((((map__60555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60555):map__60555);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq60554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60554));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61171 = arguments.length;
var i__4731__auto___61172 = (0);
while(true){
if((i__4731__auto___61172 < len__4730__auto___61171)){
args__4736__auto__.push((arguments[i__4731__auto___61172]));

var G__61173 = (i__4731__auto___61172 + (1));
i__4731__auto___61172 = G__61173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60558 = conformed_args__58244__auto__;
var map__60558__$1 = (((((!((map__60558 == null))))?(((((map__60558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60558):map__60558);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq60557){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61174 = arguments.length;
var i__4731__auto___61175 = (0);
while(true){
if((i__4731__auto___61175 < len__4730__auto___61174)){
args__4736__auto__.push((arguments[i__4731__auto___61175]));

var G__61176 = (i__4731__auto___61175 + (1));
i__4731__auto___61175 = G__61176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60561 = conformed_args__58244__auto__;
var map__60561__$1 = (((((!((map__60561 == null))))?(((((map__60561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60561):map__60561);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq60560){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61177 = arguments.length;
var i__4731__auto___61178 = (0);
while(true){
if((i__4731__auto___61178 < len__4730__auto___61177)){
args__4736__auto__.push((arguments[i__4731__auto___61178]));

var G__61179 = (i__4731__auto___61178 + (1));
i__4731__auto___61178 = G__61179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60564 = conformed_args__58244__auto__;
var map__60564__$1 = (((((!((map__60564 == null))))?(((((map__60564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60564):map__60564);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq60563){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60563));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61180 = arguments.length;
var i__4731__auto___61181 = (0);
while(true){
if((i__4731__auto___61181 < len__4730__auto___61180)){
args__4736__auto__.push((arguments[i__4731__auto___61181]));

var G__61182 = (i__4731__auto___61181 + (1));
i__4731__auto___61181 = G__61182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60567 = conformed_args__58244__auto__;
var map__60567__$1 = (((((!((map__60567 == null))))?(((((map__60567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60567):map__60567);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq60566){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60566));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61183 = arguments.length;
var i__4731__auto___61184 = (0);
while(true){
if((i__4731__auto___61184 < len__4730__auto___61183)){
args__4736__auto__.push((arguments[i__4731__auto___61184]));

var G__61185 = (i__4731__auto___61184 + (1));
i__4731__auto___61184 = G__61185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60570 = conformed_args__58244__auto__;
var map__60570__$1 = (((((!((map__60570 == null))))?(((((map__60570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60570):map__60570);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq60569){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61186 = arguments.length;
var i__4731__auto___61187 = (0);
while(true){
if((i__4731__auto___61187 < len__4730__auto___61186)){
args__4736__auto__.push((arguments[i__4731__auto___61187]));

var G__61188 = (i__4731__auto___61187 + (1));
i__4731__auto___61187 = G__61188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60573 = conformed_args__58244__auto__;
var map__60573__$1 = (((((!((map__60573 == null))))?(((((map__60573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60573):map__60573);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq60572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60572));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61189 = arguments.length;
var i__4731__auto___61190 = (0);
while(true){
if((i__4731__auto___61190 < len__4730__auto___61189)){
args__4736__auto__.push((arguments[i__4731__auto___61190]));

var G__61191 = (i__4731__auto___61190 + (1));
i__4731__auto___61190 = G__61191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60576 = conformed_args__58244__auto__;
var map__60576__$1 = (((((!((map__60576 == null))))?(((((map__60576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60576):map__60576);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq60575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60575));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61192 = arguments.length;
var i__4731__auto___61193 = (0);
while(true){
if((i__4731__auto___61193 < len__4730__auto___61192)){
args__4736__auto__.push((arguments[i__4731__auto___61193]));

var G__61194 = (i__4731__auto___61193 + (1));
i__4731__auto___61193 = G__61194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60579 = conformed_args__58244__auto__;
var map__60579__$1 = (((((!((map__60579 == null))))?(((((map__60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60579):map__60579);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq60578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60578));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61195 = arguments.length;
var i__4731__auto___61196 = (0);
while(true){
if((i__4731__auto___61196 < len__4730__auto___61195)){
args__4736__auto__.push((arguments[i__4731__auto___61196]));

var G__61197 = (i__4731__auto___61196 + (1));
i__4731__auto___61196 = G__61197;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60582 = conformed_args__58244__auto__;
var map__60582__$1 = (((((!((map__60582 == null))))?(((((map__60582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60582):map__60582);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq60581){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60581));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61198 = arguments.length;
var i__4731__auto___61199 = (0);
while(true){
if((i__4731__auto___61199 < len__4730__auto___61198)){
args__4736__auto__.push((arguments[i__4731__auto___61199]));

var G__61200 = (i__4731__auto___61199 + (1));
i__4731__auto___61199 = G__61200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60585 = conformed_args__58244__auto__;
var map__60585__$1 = (((((!((map__60585 == null))))?(((((map__60585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60585):map__60585);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq60584){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60584));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61201 = arguments.length;
var i__4731__auto___61202 = (0);
while(true){
if((i__4731__auto___61202 < len__4730__auto___61201)){
args__4736__auto__.push((arguments[i__4731__auto___61202]));

var G__61203 = (i__4731__auto___61202 + (1));
i__4731__auto___61202 = G__61203;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60588 = conformed_args__58244__auto__;
var map__60588__$1 = (((((!((map__60588 == null))))?(((((map__60588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60588):map__60588);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq60587){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60587));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61204 = arguments.length;
var i__4731__auto___61205 = (0);
while(true){
if((i__4731__auto___61205 < len__4730__auto___61204)){
args__4736__auto__.push((arguments[i__4731__auto___61205]));

var G__61206 = (i__4731__auto___61205 + (1));
i__4731__auto___61205 = G__61206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60591 = conformed_args__58244__auto__;
var map__60591__$1 = (((((!((map__60591 == null))))?(((((map__60591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60591):map__60591);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq60590){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60590));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61207 = arguments.length;
var i__4731__auto___61208 = (0);
while(true){
if((i__4731__auto___61208 < len__4730__auto___61207)){
args__4736__auto__.push((arguments[i__4731__auto___61208]));

var G__61209 = (i__4731__auto___61208 + (1));
i__4731__auto___61208 = G__61209;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60594 = conformed_args__58244__auto__;
var map__60594__$1 = (((((!((map__60594 == null))))?(((((map__60594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60594):map__60594);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq60593){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61210 = arguments.length;
var i__4731__auto___61211 = (0);
while(true){
if((i__4731__auto___61211 < len__4730__auto___61210)){
args__4736__auto__.push((arguments[i__4731__auto___61211]));

var G__61212 = (i__4731__auto___61211 + (1));
i__4731__auto___61211 = G__61212;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60597 = conformed_args__58244__auto__;
var map__60597__$1 = (((((!((map__60597 == null))))?(((((map__60597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60597):map__60597);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq60596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60596));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61213 = arguments.length;
var i__4731__auto___61214 = (0);
while(true){
if((i__4731__auto___61214 < len__4730__auto___61213)){
args__4736__auto__.push((arguments[i__4731__auto___61214]));

var G__61215 = (i__4731__auto___61214 + (1));
i__4731__auto___61214 = G__61215;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60600 = conformed_args__58244__auto__;
var map__60600__$1 = (((((!((map__60600 == null))))?(((((map__60600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60600):map__60600);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq60599){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61216 = arguments.length;
var i__4731__auto___61217 = (0);
while(true){
if((i__4731__auto___61217 < len__4730__auto___61216)){
args__4736__auto__.push((arguments[i__4731__auto___61217]));

var G__61218 = (i__4731__auto___61217 + (1));
i__4731__auto___61217 = G__61218;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60603 = conformed_args__58244__auto__;
var map__60603__$1 = (((((!((map__60603 == null))))?(((((map__60603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60603):map__60603);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq60602){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61219 = arguments.length;
var i__4731__auto___61220 = (0);
while(true){
if((i__4731__auto___61220 < len__4730__auto___61219)){
args__4736__auto__.push((arguments[i__4731__auto___61220]));

var G__61221 = (i__4731__auto___61220 + (1));
i__4731__auto___61220 = G__61221;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60606 = conformed_args__58244__auto__;
var map__60606__$1 = (((((!((map__60606 == null))))?(((((map__60606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60606):map__60606);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq60605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61222 = arguments.length;
var i__4731__auto___61223 = (0);
while(true){
if((i__4731__auto___61223 < len__4730__auto___61222)){
args__4736__auto__.push((arguments[i__4731__auto___61223]));

var G__61224 = (i__4731__auto___61223 + (1));
i__4731__auto___61223 = G__61224;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60609 = conformed_args__58244__auto__;
var map__60609__$1 = (((((!((map__60609 == null))))?(((((map__60609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60609):map__60609);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq60608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60608));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61225 = arguments.length;
var i__4731__auto___61226 = (0);
while(true){
if((i__4731__auto___61226 < len__4730__auto___61225)){
args__4736__auto__.push((arguments[i__4731__auto___61226]));

var G__61227 = (i__4731__auto___61226 + (1));
i__4731__auto___61226 = G__61227;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60612 = conformed_args__58244__auto__;
var map__60612__$1 = (((((!((map__60612 == null))))?(((((map__60612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60612):map__60612);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq60611){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60611));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61228 = arguments.length;
var i__4731__auto___61229 = (0);
while(true){
if((i__4731__auto___61229 < len__4730__auto___61228)){
args__4736__auto__.push((arguments[i__4731__auto___61229]));

var G__61230 = (i__4731__auto___61229 + (1));
i__4731__auto___61229 = G__61230;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60615 = conformed_args__58244__auto__;
var map__60615__$1 = (((((!((map__60615 == null))))?(((((map__60615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60615):map__60615);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq60614){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60614));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61231 = arguments.length;
var i__4731__auto___61232 = (0);
while(true){
if((i__4731__auto___61232 < len__4730__auto___61231)){
args__4736__auto__.push((arguments[i__4731__auto___61232]));

var G__61233 = (i__4731__auto___61232 + (1));
i__4731__auto___61232 = G__61233;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60618 = conformed_args__58244__auto__;
var map__60618__$1 = (((((!((map__60618 == null))))?(((((map__60618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60618):map__60618);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq60617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61234 = arguments.length;
var i__4731__auto___61235 = (0);
while(true){
if((i__4731__auto___61235 < len__4730__auto___61234)){
args__4736__auto__.push((arguments[i__4731__auto___61235]));

var G__61236 = (i__4731__auto___61235 + (1));
i__4731__auto___61235 = G__61236;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60621 = conformed_args__58244__auto__;
var map__60621__$1 = (((((!((map__60621 == null))))?(((((map__60621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60621):map__60621);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq60620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60620));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61237 = arguments.length;
var i__4731__auto___61238 = (0);
while(true){
if((i__4731__auto___61238 < len__4730__auto___61237)){
args__4736__auto__.push((arguments[i__4731__auto___61238]));

var G__61239 = (i__4731__auto___61238 + (1));
i__4731__auto___61238 = G__61239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60624 = conformed_args__58244__auto__;
var map__60624__$1 = (((((!((map__60624 == null))))?(((((map__60624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60624):map__60624);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq60623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60623));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61240 = arguments.length;
var i__4731__auto___61241 = (0);
while(true){
if((i__4731__auto___61241 < len__4730__auto___61240)){
args__4736__auto__.push((arguments[i__4731__auto___61241]));

var G__61242 = (i__4731__auto___61241 + (1));
i__4731__auto___61241 = G__61242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60627 = conformed_args__58244__auto__;
var map__60627__$1 = (((((!((map__60627 == null))))?(((((map__60627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60627):map__60627);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq60626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60626));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61243 = arguments.length;
var i__4731__auto___61244 = (0);
while(true){
if((i__4731__auto___61244 < len__4730__auto___61243)){
args__4736__auto__.push((arguments[i__4731__auto___61244]));

var G__61245 = (i__4731__auto___61244 + (1));
i__4731__auto___61244 = G__61245;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60630 = conformed_args__58244__auto__;
var map__60630__$1 = (((((!((map__60630 == null))))?(((((map__60630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60630):map__60630);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq60629){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61246 = arguments.length;
var i__4731__auto___61247 = (0);
while(true){
if((i__4731__auto___61247 < len__4730__auto___61246)){
args__4736__auto__.push((arguments[i__4731__auto___61247]));

var G__61248 = (i__4731__auto___61247 + (1));
i__4731__auto___61247 = G__61248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60633 = conformed_args__58244__auto__;
var map__60633__$1 = (((((!((map__60633 == null))))?(((((map__60633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60633):map__60633);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq60632){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61249 = arguments.length;
var i__4731__auto___61250 = (0);
while(true){
if((i__4731__auto___61250 < len__4730__auto___61249)){
args__4736__auto__.push((arguments[i__4731__auto___61250]));

var G__61251 = (i__4731__auto___61250 + (1));
i__4731__auto___61250 = G__61251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60636 = conformed_args__58244__auto__;
var map__60636__$1 = (((((!((map__60636 == null))))?(((((map__60636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60636):map__60636);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq60635){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60635));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61252 = arguments.length;
var i__4731__auto___61253 = (0);
while(true){
if((i__4731__auto___61253 < len__4730__auto___61252)){
args__4736__auto__.push((arguments[i__4731__auto___61253]));

var G__61254 = (i__4731__auto___61253 + (1));
i__4731__auto___61253 = G__61254;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60639 = conformed_args__58244__auto__;
var map__60639__$1 = (((((!((map__60639 == null))))?(((((map__60639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60639):map__60639);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq60638){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60638));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61255 = arguments.length;
var i__4731__auto___61256 = (0);
while(true){
if((i__4731__auto___61256 < len__4730__auto___61255)){
args__4736__auto__.push((arguments[i__4731__auto___61256]));

var G__61257 = (i__4731__auto___61256 + (1));
i__4731__auto___61256 = G__61257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60642 = conformed_args__58244__auto__;
var map__60642__$1 = (((((!((map__60642 == null))))?(((((map__60642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60642):map__60642);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq60641){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61258 = arguments.length;
var i__4731__auto___61259 = (0);
while(true){
if((i__4731__auto___61259 < len__4730__auto___61258)){
args__4736__auto__.push((arguments[i__4731__auto___61259]));

var G__61260 = (i__4731__auto___61259 + (1));
i__4731__auto___61259 = G__61260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60645 = conformed_args__58244__auto__;
var map__60645__$1 = (((((!((map__60645 == null))))?(((((map__60645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60645):map__60645);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq60644){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60644));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61261 = arguments.length;
var i__4731__auto___61262 = (0);
while(true){
if((i__4731__auto___61262 < len__4730__auto___61261)){
args__4736__auto__.push((arguments[i__4731__auto___61262]));

var G__61263 = (i__4731__auto___61262 + (1));
i__4731__auto___61262 = G__61263;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60648 = conformed_args__58244__auto__;
var map__60648__$1 = (((((!((map__60648 == null))))?(((((map__60648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60648):map__60648);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq60647){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60647));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61264 = arguments.length;
var i__4731__auto___61265 = (0);
while(true){
if((i__4731__auto___61265 < len__4730__auto___61264)){
args__4736__auto__.push((arguments[i__4731__auto___61265]));

var G__61266 = (i__4731__auto___61265 + (1));
i__4731__auto___61265 = G__61266;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60651 = conformed_args__58244__auto__;
var map__60651__$1 = (((((!((map__60651 == null))))?(((((map__60651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60651):map__60651);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq60650){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60650));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61267 = arguments.length;
var i__4731__auto___61268 = (0);
while(true){
if((i__4731__auto___61268 < len__4730__auto___61267)){
args__4736__auto__.push((arguments[i__4731__auto___61268]));

var G__61269 = (i__4731__auto___61268 + (1));
i__4731__auto___61268 = G__61269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60654 = conformed_args__58244__auto__;
var map__60654__$1 = (((((!((map__60654 == null))))?(((((map__60654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60654):map__60654);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq60653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60653));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61270 = arguments.length;
var i__4731__auto___61271 = (0);
while(true){
if((i__4731__auto___61271 < len__4730__auto___61270)){
args__4736__auto__.push((arguments[i__4731__auto___61271]));

var G__61272 = (i__4731__auto___61271 + (1));
i__4731__auto___61271 = G__61272;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60657 = conformed_args__58244__auto__;
var map__60657__$1 = (((((!((map__60657 == null))))?(((((map__60657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60657):map__60657);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq60656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60656));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61273 = arguments.length;
var i__4731__auto___61274 = (0);
while(true){
if((i__4731__auto___61274 < len__4730__auto___61273)){
args__4736__auto__.push((arguments[i__4731__auto___61274]));

var G__61275 = (i__4731__auto___61274 + (1));
i__4731__auto___61274 = G__61275;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60660 = conformed_args__58244__auto__;
var map__60660__$1 = (((((!((map__60660 == null))))?(((((map__60660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60660):map__60660);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq60659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61276 = arguments.length;
var i__4731__auto___61277 = (0);
while(true){
if((i__4731__auto___61277 < len__4730__auto___61276)){
args__4736__auto__.push((arguments[i__4731__auto___61277]));

var G__61278 = (i__4731__auto___61277 + (1));
i__4731__auto___61277 = G__61278;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60663 = conformed_args__58244__auto__;
var map__60663__$1 = (((((!((map__60663 == null))))?(((((map__60663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60663):map__60663);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq60662){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60662));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61279 = arguments.length;
var i__4731__auto___61280 = (0);
while(true){
if((i__4731__auto___61280 < len__4730__auto___61279)){
args__4736__auto__.push((arguments[i__4731__auto___61280]));

var G__61281 = (i__4731__auto___61280 + (1));
i__4731__auto___61280 = G__61281;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60666 = conformed_args__58244__auto__;
var map__60666__$1 = (((((!((map__60666 == null))))?(((((map__60666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60666):map__60666);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq60665){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61282 = arguments.length;
var i__4731__auto___61283 = (0);
while(true){
if((i__4731__auto___61283 < len__4730__auto___61282)){
args__4736__auto__.push((arguments[i__4731__auto___61283]));

var G__61284 = (i__4731__auto___61283 + (1));
i__4731__auto___61283 = G__61284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60669 = conformed_args__58244__auto__;
var map__60669__$1 = (((((!((map__60669 == null))))?(((((map__60669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60669):map__60669);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq60668){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61285 = arguments.length;
var i__4731__auto___61286 = (0);
while(true){
if((i__4731__auto___61286 < len__4730__auto___61285)){
args__4736__auto__.push((arguments[i__4731__auto___61286]));

var G__61287 = (i__4731__auto___61286 + (1));
i__4731__auto___61286 = G__61287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60672 = conformed_args__58244__auto__;
var map__60672__$1 = (((((!((map__60672 == null))))?(((((map__60672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60672):map__60672);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq60671){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60671));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61288 = arguments.length;
var i__4731__auto___61289 = (0);
while(true){
if((i__4731__auto___61289 < len__4730__auto___61288)){
args__4736__auto__.push((arguments[i__4731__auto___61289]));

var G__61290 = (i__4731__auto___61289 + (1));
i__4731__auto___61289 = G__61290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60675 = conformed_args__58244__auto__;
var map__60675__$1 = (((((!((map__60675 == null))))?(((((map__60675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60675):map__60675);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq60674){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60674));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61291 = arguments.length;
var i__4731__auto___61292 = (0);
while(true){
if((i__4731__auto___61292 < len__4730__auto___61291)){
args__4736__auto__.push((arguments[i__4731__auto___61292]));

var G__61293 = (i__4731__auto___61292 + (1));
i__4731__auto___61292 = G__61293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60678 = conformed_args__58244__auto__;
var map__60678__$1 = (((((!((map__60678 == null))))?(((((map__60678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60678):map__60678);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq60677){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61294 = arguments.length;
var i__4731__auto___61295 = (0);
while(true){
if((i__4731__auto___61295 < len__4730__auto___61294)){
args__4736__auto__.push((arguments[i__4731__auto___61295]));

var G__61296 = (i__4731__auto___61295 + (1));
i__4731__auto___61295 = G__61296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60681 = conformed_args__58244__auto__;
var map__60681__$1 = (((((!((map__60681 == null))))?(((((map__60681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60681):map__60681);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq60680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61297 = arguments.length;
var i__4731__auto___61298 = (0);
while(true){
if((i__4731__auto___61298 < len__4730__auto___61297)){
args__4736__auto__.push((arguments[i__4731__auto___61298]));

var G__61299 = (i__4731__auto___61298 + (1));
i__4731__auto___61298 = G__61299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60684 = conformed_args__58244__auto__;
var map__60684__$1 = (((((!((map__60684 == null))))?(((((map__60684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60684):map__60684);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq60683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61300 = arguments.length;
var i__4731__auto___61301 = (0);
while(true){
if((i__4731__auto___61301 < len__4730__auto___61300)){
args__4736__auto__.push((arguments[i__4731__auto___61301]));

var G__61302 = (i__4731__auto___61301 + (1));
i__4731__auto___61301 = G__61302;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60687 = conformed_args__58244__auto__;
var map__60687__$1 = (((((!((map__60687 == null))))?(((((map__60687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60687):map__60687);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq60686){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61303 = arguments.length;
var i__4731__auto___61304 = (0);
while(true){
if((i__4731__auto___61304 < len__4730__auto___61303)){
args__4736__auto__.push((arguments[i__4731__auto___61304]));

var G__61305 = (i__4731__auto___61304 + (1));
i__4731__auto___61304 = G__61305;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60690 = conformed_args__58244__auto__;
var map__60690__$1 = (((((!((map__60690 == null))))?(((((map__60690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60690):map__60690);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq60689){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61306 = arguments.length;
var i__4731__auto___61307 = (0);
while(true){
if((i__4731__auto___61307 < len__4730__auto___61306)){
args__4736__auto__.push((arguments[i__4731__auto___61307]));

var G__61308 = (i__4731__auto___61307 + (1));
i__4731__auto___61307 = G__61308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60693 = conformed_args__58244__auto__;
var map__60693__$1 = (((((!((map__60693 == null))))?(((((map__60693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60693):map__60693);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq60692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60692));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61309 = arguments.length;
var i__4731__auto___61310 = (0);
while(true){
if((i__4731__auto___61310 < len__4730__auto___61309)){
args__4736__auto__.push((arguments[i__4731__auto___61310]));

var G__61311 = (i__4731__auto___61310 + (1));
i__4731__auto___61310 = G__61311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60696 = conformed_args__58244__auto__;
var map__60696__$1 = (((((!((map__60696 == null))))?(((((map__60696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60696):map__60696);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq60695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61312 = arguments.length;
var i__4731__auto___61313 = (0);
while(true){
if((i__4731__auto___61313 < len__4730__auto___61312)){
args__4736__auto__.push((arguments[i__4731__auto___61313]));

var G__61314 = (i__4731__auto___61313 + (1));
i__4731__auto___61313 = G__61314;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60699 = conformed_args__58244__auto__;
var map__60699__$1 = (((((!((map__60699 == null))))?(((((map__60699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60699):map__60699);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq60698){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61315 = arguments.length;
var i__4731__auto___61316 = (0);
while(true){
if((i__4731__auto___61316 < len__4730__auto___61315)){
args__4736__auto__.push((arguments[i__4731__auto___61316]));

var G__61317 = (i__4731__auto___61316 + (1));
i__4731__auto___61316 = G__61317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60702 = conformed_args__58244__auto__;
var map__60702__$1 = (((((!((map__60702 == null))))?(((((map__60702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60702):map__60702);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq60701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61318 = arguments.length;
var i__4731__auto___61319 = (0);
while(true){
if((i__4731__auto___61319 < len__4730__auto___61318)){
args__4736__auto__.push((arguments[i__4731__auto___61319]));

var G__61320 = (i__4731__auto___61319 + (1));
i__4731__auto___61319 = G__61320;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60705 = conformed_args__58244__auto__;
var map__60705__$1 = (((((!((map__60705 == null))))?(((((map__60705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60705):map__60705);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq60704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60704));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61321 = arguments.length;
var i__4731__auto___61322 = (0);
while(true){
if((i__4731__auto___61322 < len__4730__auto___61321)){
args__4736__auto__.push((arguments[i__4731__auto___61322]));

var G__61323 = (i__4731__auto___61322 + (1));
i__4731__auto___61322 = G__61323;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60708 = conformed_args__58244__auto__;
var map__60708__$1 = (((((!((map__60708 == null))))?(((((map__60708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60708):map__60708);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq60707){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61324 = arguments.length;
var i__4731__auto___61325 = (0);
while(true){
if((i__4731__auto___61325 < len__4730__auto___61324)){
args__4736__auto__.push((arguments[i__4731__auto___61325]));

var G__61326 = (i__4731__auto___61325 + (1));
i__4731__auto___61325 = G__61326;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60711 = conformed_args__58244__auto__;
var map__60711__$1 = (((((!((map__60711 == null))))?(((((map__60711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60711):map__60711);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq60710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60710));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61327 = arguments.length;
var i__4731__auto___61328 = (0);
while(true){
if((i__4731__auto___61328 < len__4730__auto___61327)){
args__4736__auto__.push((arguments[i__4731__auto___61328]));

var G__61329 = (i__4731__auto___61328 + (1));
i__4731__auto___61328 = G__61329;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60714 = conformed_args__58244__auto__;
var map__60714__$1 = (((((!((map__60714 == null))))?(((((map__60714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60714):map__60714);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq60713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61330 = arguments.length;
var i__4731__auto___61331 = (0);
while(true){
if((i__4731__auto___61331 < len__4730__auto___61330)){
args__4736__auto__.push((arguments[i__4731__auto___61331]));

var G__61332 = (i__4731__auto___61331 + (1));
i__4731__auto___61331 = G__61332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60717 = conformed_args__58244__auto__;
var map__60717__$1 = (((((!((map__60717 == null))))?(((((map__60717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60717):map__60717);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq60716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61333 = arguments.length;
var i__4731__auto___61334 = (0);
while(true){
if((i__4731__auto___61334 < len__4730__auto___61333)){
args__4736__auto__.push((arguments[i__4731__auto___61334]));

var G__61335 = (i__4731__auto___61334 + (1));
i__4731__auto___61334 = G__61335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60720 = conformed_args__58244__auto__;
var map__60720__$1 = (((((!((map__60720 == null))))?(((((map__60720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60720):map__60720);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq60719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61336 = arguments.length;
var i__4731__auto___61337 = (0);
while(true){
if((i__4731__auto___61337 < len__4730__auto___61336)){
args__4736__auto__.push((arguments[i__4731__auto___61337]));

var G__61338 = (i__4731__auto___61337 + (1));
i__4731__auto___61337 = G__61338;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60723 = conformed_args__58244__auto__;
var map__60723__$1 = (((((!((map__60723 == null))))?(((((map__60723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60723):map__60723);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq60722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61339 = arguments.length;
var i__4731__auto___61340 = (0);
while(true){
if((i__4731__auto___61340 < len__4730__auto___61339)){
args__4736__auto__.push((arguments[i__4731__auto___61340]));

var G__61341 = (i__4731__auto___61340 + (1));
i__4731__auto___61340 = G__61341;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60726 = conformed_args__58244__auto__;
var map__60726__$1 = (((((!((map__60726 == null))))?(((((map__60726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60726):map__60726);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq60725){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61342 = arguments.length;
var i__4731__auto___61343 = (0);
while(true){
if((i__4731__auto___61343 < len__4730__auto___61342)){
args__4736__auto__.push((arguments[i__4731__auto___61343]));

var G__61344 = (i__4731__auto___61343 + (1));
i__4731__auto___61343 = G__61344;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60729 = conformed_args__58244__auto__;
var map__60729__$1 = (((((!((map__60729 == null))))?(((((map__60729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60729):map__60729);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq60728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60728));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61345 = arguments.length;
var i__4731__auto___61346 = (0);
while(true){
if((i__4731__auto___61346 < len__4730__auto___61345)){
args__4736__auto__.push((arguments[i__4731__auto___61346]));

var G__61347 = (i__4731__auto___61346 + (1));
i__4731__auto___61346 = G__61347;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60732 = conformed_args__58244__auto__;
var map__60732__$1 = (((((!((map__60732 == null))))?(((((map__60732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60732):map__60732);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq60731){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60731));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61348 = arguments.length;
var i__4731__auto___61349 = (0);
while(true){
if((i__4731__auto___61349 < len__4730__auto___61348)){
args__4736__auto__.push((arguments[i__4731__auto___61349]));

var G__61350 = (i__4731__auto___61349 + (1));
i__4731__auto___61349 = G__61350;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60735 = conformed_args__58244__auto__;
var map__60735__$1 = (((((!((map__60735 == null))))?(((((map__60735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60735):map__60735);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq60734){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60734));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61351 = arguments.length;
var i__4731__auto___61352 = (0);
while(true){
if((i__4731__auto___61352 < len__4730__auto___61351)){
args__4736__auto__.push((arguments[i__4731__auto___61352]));

var G__61353 = (i__4731__auto___61352 + (1));
i__4731__auto___61352 = G__61353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60738 = conformed_args__58244__auto__;
var map__60738__$1 = (((((!((map__60738 == null))))?(((((map__60738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60738):map__60738);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq60737){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61354 = arguments.length;
var i__4731__auto___61355 = (0);
while(true){
if((i__4731__auto___61355 < len__4730__auto___61354)){
args__4736__auto__.push((arguments[i__4731__auto___61355]));

var G__61356 = (i__4731__auto___61355 + (1));
i__4731__auto___61355 = G__61356;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60741 = conformed_args__58244__auto__;
var map__60741__$1 = (((((!((map__60741 == null))))?(((((map__60741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60741):map__60741);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq60740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61357 = arguments.length;
var i__4731__auto___61358 = (0);
while(true){
if((i__4731__auto___61358 < len__4730__auto___61357)){
args__4736__auto__.push((arguments[i__4731__auto___61358]));

var G__61359 = (i__4731__auto___61358 + (1));
i__4731__auto___61358 = G__61359;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60744 = conformed_args__58244__auto__;
var map__60744__$1 = (((((!((map__60744 == null))))?(((((map__60744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60744):map__60744);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq60743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61360 = arguments.length;
var i__4731__auto___61361 = (0);
while(true){
if((i__4731__auto___61361 < len__4730__auto___61360)){
args__4736__auto__.push((arguments[i__4731__auto___61361]));

var G__61362 = (i__4731__auto___61361 + (1));
i__4731__auto___61361 = G__61362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60747 = conformed_args__58244__auto__;
var map__60747__$1 = (((((!((map__60747 == null))))?(((((map__60747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60747):map__60747);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq60746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61363 = arguments.length;
var i__4731__auto___61364 = (0);
while(true){
if((i__4731__auto___61364 < len__4730__auto___61363)){
args__4736__auto__.push((arguments[i__4731__auto___61364]));

var G__61365 = (i__4731__auto___61364 + (1));
i__4731__auto___61364 = G__61365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60750 = conformed_args__58244__auto__;
var map__60750__$1 = (((((!((map__60750 == null))))?(((((map__60750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60750):map__60750);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq60749){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61366 = arguments.length;
var i__4731__auto___61367 = (0);
while(true){
if((i__4731__auto___61367 < len__4730__auto___61366)){
args__4736__auto__.push((arguments[i__4731__auto___61367]));

var G__61368 = (i__4731__auto___61367 + (1));
i__4731__auto___61367 = G__61368;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60753 = conformed_args__58244__auto__;
var map__60753__$1 = (((((!((map__60753 == null))))?(((((map__60753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60753):map__60753);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq60752){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60752));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61369 = arguments.length;
var i__4731__auto___61370 = (0);
while(true){
if((i__4731__auto___61370 < len__4730__auto___61369)){
args__4736__auto__.push((arguments[i__4731__auto___61370]));

var G__61371 = (i__4731__auto___61370 + (1));
i__4731__auto___61370 = G__61371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60756 = conformed_args__58244__auto__;
var map__60756__$1 = (((((!((map__60756 == null))))?(((((map__60756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60756):map__60756);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq60755){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61372 = arguments.length;
var i__4731__auto___61373 = (0);
while(true){
if((i__4731__auto___61373 < len__4730__auto___61372)){
args__4736__auto__.push((arguments[i__4731__auto___61373]));

var G__61374 = (i__4731__auto___61373 + (1));
i__4731__auto___61373 = G__61374;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58244__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60759 = conformed_args__58244__auto__;
var map__60759__$1 = (((((!((map__60759 == null))))?(((((map__60759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60759):map__60759);
var css__58247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__58246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__58245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58246__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58246__auto__);
var attrs_value__58248__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__58245__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58248__auto__], null),children__58246__auto____$1),css__58247__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq60758){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60758));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
