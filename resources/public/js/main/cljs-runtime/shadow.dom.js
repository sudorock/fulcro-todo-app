goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61925 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_61925(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61926 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_61926(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61467 = coll;
var G__61468 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61467,G__61468) : shadow.dom.lazy_native_coll_seq.call(null,G__61467,G__61468));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61523 = arguments.length;
switch (G__61523) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61549 = arguments.length;
switch (G__61549) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61573 = arguments.length;
switch (G__61573) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61590 = arguments.length;
switch (G__61590) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61612 = arguments.length;
switch (G__61612) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61622 = arguments.length;
switch (G__61622) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61630){if((e61630 instanceof Object)){
var e = e61630;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61630;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61631 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61632 = null;
var count__61633 = (0);
var i__61634 = (0);
while(true){
if((i__61634 < count__61633)){
var el = chunk__61632.cljs$core$IIndexed$_nth$arity$2(null,i__61634);
var handler_61933__$1 = ((function (seq__61631,chunk__61632,count__61633,i__61634,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61631,chunk__61632,count__61633,i__61634,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61933__$1);


var G__61934 = seq__61631;
var G__61935 = chunk__61632;
var G__61936 = count__61633;
var G__61937 = (i__61634 + (1));
seq__61631 = G__61934;
chunk__61632 = G__61935;
count__61633 = G__61936;
i__61634 = G__61937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61631);
if(temp__5735__auto__){
var seq__61631__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61631__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61631__$1);
var G__61938 = cljs.core.chunk_rest(seq__61631__$1);
var G__61939 = c__4550__auto__;
var G__61940 = cljs.core.count(c__4550__auto__);
var G__61941 = (0);
seq__61631 = G__61938;
chunk__61632 = G__61939;
count__61633 = G__61940;
i__61634 = G__61941;
continue;
} else {
var el = cljs.core.first(seq__61631__$1);
var handler_61942__$1 = ((function (seq__61631,chunk__61632,count__61633,i__61634,el,seq__61631__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61631,chunk__61632,count__61633,i__61634,el,seq__61631__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61942__$1);


var G__61943 = cljs.core.next(seq__61631__$1);
var G__61944 = null;
var G__61945 = (0);
var G__61946 = (0);
seq__61631 = G__61943;
chunk__61632 = G__61944;
count__61633 = G__61945;
i__61634 = G__61946;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61641 = arguments.length;
switch (G__61641) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61647 = cljs.core.seq(events);
var chunk__61649 = null;
var count__61650 = (0);
var i__61651 = (0);
while(true){
if((i__61651 < count__61650)){
var vec__61665 = chunk__61649.cljs$core$IIndexed$_nth$arity$2(null,i__61651);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61665,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61950 = seq__61647;
var G__61951 = chunk__61649;
var G__61952 = count__61650;
var G__61953 = (i__61651 + (1));
seq__61647 = G__61950;
chunk__61649 = G__61951;
count__61650 = G__61952;
i__61651 = G__61953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61647);
if(temp__5735__auto__){
var seq__61647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61647__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61647__$1);
var G__61954 = cljs.core.chunk_rest(seq__61647__$1);
var G__61955 = c__4550__auto__;
var G__61956 = cljs.core.count(c__4550__auto__);
var G__61957 = (0);
seq__61647 = G__61954;
chunk__61649 = G__61955;
count__61650 = G__61956;
i__61651 = G__61957;
continue;
} else {
var vec__61668 = cljs.core.first(seq__61647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61668,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61958 = cljs.core.next(seq__61647__$1);
var G__61959 = null;
var G__61960 = (0);
var G__61961 = (0);
seq__61647 = G__61958;
chunk__61649 = G__61959;
count__61650 = G__61960;
i__61651 = G__61961;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__61671 = cljs.core.seq(styles);
var chunk__61672 = null;
var count__61673 = (0);
var i__61674 = (0);
while(true){
if((i__61674 < count__61673)){
var vec__61687 = chunk__61672.cljs$core$IIndexed$_nth$arity$2(null,i__61674);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61687,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61962 = seq__61671;
var G__61963 = chunk__61672;
var G__61964 = count__61673;
var G__61965 = (i__61674 + (1));
seq__61671 = G__61962;
chunk__61672 = G__61963;
count__61673 = G__61964;
i__61674 = G__61965;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61671);
if(temp__5735__auto__){
var seq__61671__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61671__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61671__$1);
var G__61966 = cljs.core.chunk_rest(seq__61671__$1);
var G__61967 = c__4550__auto__;
var G__61968 = cljs.core.count(c__4550__auto__);
var G__61969 = (0);
seq__61671 = G__61966;
chunk__61672 = G__61967;
count__61673 = G__61968;
i__61674 = G__61969;
continue;
} else {
var vec__61690 = cljs.core.first(seq__61671__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61690,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61970 = cljs.core.next(seq__61671__$1);
var G__61971 = null;
var G__61972 = (0);
var G__61973 = (0);
seq__61671 = G__61970;
chunk__61672 = G__61971;
count__61673 = G__61972;
i__61674 = G__61973;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__61694_61975 = key;
var G__61694_61976__$1 = (((G__61694_61975 instanceof cljs.core.Keyword))?G__61694_61975.fqn:null);
switch (G__61694_61976__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_61979 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_61979,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_61979,"aria-");
}
})())){
el.setAttribute(ks_61979,value);
} else {
(el[ks_61979] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61696){
var map__61697 = p__61696;
var map__61697__$1 = (((((!((map__61697 == null))))?(((((map__61697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61697):map__61697);
var props = map__61697__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61697__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61699 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61699,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61699,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61699,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61702 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61702,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61702;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61708 = arguments.length;
switch (G__61708) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61726){
var vec__61727 = p__61726;
var seq__61728 = cljs.core.seq(vec__61727);
var first__61729 = cljs.core.first(seq__61728);
var seq__61728__$1 = cljs.core.next(seq__61728);
var nn = first__61729;
var first__61729__$1 = cljs.core.first(seq__61728__$1);
var seq__61728__$2 = cljs.core.next(seq__61728__$1);
var np = first__61729__$1;
var nc = seq__61728__$2;
var node = vec__61727;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61735 = nn;
var G__61736 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61735,G__61736) : create_fn.call(null,G__61735,G__61736));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61737 = nn;
var G__61738 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61737,G__61738) : create_fn.call(null,G__61737,G__61738));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61739 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61739,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61739,(1),null);
var seq__61742_61990 = cljs.core.seq(node_children);
var chunk__61743_61991 = null;
var count__61744_61992 = (0);
var i__61745_61993 = (0);
while(true){
if((i__61745_61993 < count__61744_61992)){
var child_struct_61994 = chunk__61743_61991.cljs$core$IIndexed$_nth$arity$2(null,i__61745_61993);
var children_61995 = shadow.dom.dom_node(child_struct_61994);
if(cljs.core.seq_QMARK_(children_61995)){
var seq__61764_61996 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61995));
var chunk__61766_61997 = null;
var count__61767_61998 = (0);
var i__61768_61999 = (0);
while(true){
if((i__61768_61999 < count__61767_61998)){
var child_62000 = chunk__61766_61997.cljs$core$IIndexed$_nth$arity$2(null,i__61768_61999);
if(cljs.core.truth_(child_62000)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62000);


var G__62001 = seq__61764_61996;
var G__62002 = chunk__61766_61997;
var G__62003 = count__61767_61998;
var G__62004 = (i__61768_61999 + (1));
seq__61764_61996 = G__62001;
chunk__61766_61997 = G__62002;
count__61767_61998 = G__62003;
i__61768_61999 = G__62004;
continue;
} else {
var G__62006 = seq__61764_61996;
var G__62007 = chunk__61766_61997;
var G__62008 = count__61767_61998;
var G__62009 = (i__61768_61999 + (1));
seq__61764_61996 = G__62006;
chunk__61766_61997 = G__62007;
count__61767_61998 = G__62008;
i__61768_61999 = G__62009;
continue;
}
} else {
var temp__5735__auto___62010 = cljs.core.seq(seq__61764_61996);
if(temp__5735__auto___62010){
var seq__61764_62012__$1 = temp__5735__auto___62010;
if(cljs.core.chunked_seq_QMARK_(seq__61764_62012__$1)){
var c__4550__auto___62013 = cljs.core.chunk_first(seq__61764_62012__$1);
var G__62015 = cljs.core.chunk_rest(seq__61764_62012__$1);
var G__62016 = c__4550__auto___62013;
var G__62017 = cljs.core.count(c__4550__auto___62013);
var G__62018 = (0);
seq__61764_61996 = G__62015;
chunk__61766_61997 = G__62016;
count__61767_61998 = G__62017;
i__61768_61999 = G__62018;
continue;
} else {
var child_62019 = cljs.core.first(seq__61764_62012__$1);
if(cljs.core.truth_(child_62019)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62019);


var G__62020 = cljs.core.next(seq__61764_62012__$1);
var G__62021 = null;
var G__62022 = (0);
var G__62023 = (0);
seq__61764_61996 = G__62020;
chunk__61766_61997 = G__62021;
count__61767_61998 = G__62022;
i__61768_61999 = G__62023;
continue;
} else {
var G__62024 = cljs.core.next(seq__61764_62012__$1);
var G__62025 = null;
var G__62026 = (0);
var G__62027 = (0);
seq__61764_61996 = G__62024;
chunk__61766_61997 = G__62025;
count__61767_61998 = G__62026;
i__61768_61999 = G__62027;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61995);
}


var G__62028 = seq__61742_61990;
var G__62029 = chunk__61743_61991;
var G__62030 = count__61744_61992;
var G__62031 = (i__61745_61993 + (1));
seq__61742_61990 = G__62028;
chunk__61743_61991 = G__62029;
count__61744_61992 = G__62030;
i__61745_61993 = G__62031;
continue;
} else {
var temp__5735__auto___62032 = cljs.core.seq(seq__61742_61990);
if(temp__5735__auto___62032){
var seq__61742_62033__$1 = temp__5735__auto___62032;
if(cljs.core.chunked_seq_QMARK_(seq__61742_62033__$1)){
var c__4550__auto___62034 = cljs.core.chunk_first(seq__61742_62033__$1);
var G__62035 = cljs.core.chunk_rest(seq__61742_62033__$1);
var G__62036 = c__4550__auto___62034;
var G__62037 = cljs.core.count(c__4550__auto___62034);
var G__62038 = (0);
seq__61742_61990 = G__62035;
chunk__61743_61991 = G__62036;
count__61744_61992 = G__62037;
i__61745_61993 = G__62038;
continue;
} else {
var child_struct_62039 = cljs.core.first(seq__61742_62033__$1);
var children_62040 = shadow.dom.dom_node(child_struct_62039);
if(cljs.core.seq_QMARK_(children_62040)){
var seq__61770_62041 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62040));
var chunk__61772_62042 = null;
var count__61773_62043 = (0);
var i__61774_62044 = (0);
while(true){
if((i__61774_62044 < count__61773_62043)){
var child_62045 = chunk__61772_62042.cljs$core$IIndexed$_nth$arity$2(null,i__61774_62044);
if(cljs.core.truth_(child_62045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62045);


var G__62046 = seq__61770_62041;
var G__62047 = chunk__61772_62042;
var G__62048 = count__61773_62043;
var G__62049 = (i__61774_62044 + (1));
seq__61770_62041 = G__62046;
chunk__61772_62042 = G__62047;
count__61773_62043 = G__62048;
i__61774_62044 = G__62049;
continue;
} else {
var G__62050 = seq__61770_62041;
var G__62051 = chunk__61772_62042;
var G__62052 = count__61773_62043;
var G__62053 = (i__61774_62044 + (1));
seq__61770_62041 = G__62050;
chunk__61772_62042 = G__62051;
count__61773_62043 = G__62052;
i__61774_62044 = G__62053;
continue;
}
} else {
var temp__5735__auto___62054__$1 = cljs.core.seq(seq__61770_62041);
if(temp__5735__auto___62054__$1){
var seq__61770_62055__$1 = temp__5735__auto___62054__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61770_62055__$1)){
var c__4550__auto___62056 = cljs.core.chunk_first(seq__61770_62055__$1);
var G__62057 = cljs.core.chunk_rest(seq__61770_62055__$1);
var G__62058 = c__4550__auto___62056;
var G__62059 = cljs.core.count(c__4550__auto___62056);
var G__62060 = (0);
seq__61770_62041 = G__62057;
chunk__61772_62042 = G__62058;
count__61773_62043 = G__62059;
i__61774_62044 = G__62060;
continue;
} else {
var child_62064 = cljs.core.first(seq__61770_62055__$1);
if(cljs.core.truth_(child_62064)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62064);


var G__62065 = cljs.core.next(seq__61770_62055__$1);
var G__62066 = null;
var G__62067 = (0);
var G__62068 = (0);
seq__61770_62041 = G__62065;
chunk__61772_62042 = G__62066;
count__61773_62043 = G__62067;
i__61774_62044 = G__62068;
continue;
} else {
var G__62069 = cljs.core.next(seq__61770_62055__$1);
var G__62070 = null;
var G__62071 = (0);
var G__62072 = (0);
seq__61770_62041 = G__62069;
chunk__61772_62042 = G__62070;
count__61773_62043 = G__62071;
i__61774_62044 = G__62072;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62040);
}


var G__62073 = cljs.core.next(seq__61742_62033__$1);
var G__62074 = null;
var G__62075 = (0);
var G__62076 = (0);
seq__61742_61990 = G__62073;
chunk__61743_61991 = G__62074;
count__61744_61992 = G__62075;
i__61745_61993 = G__62076;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61777 = cljs.core.seq(node);
var chunk__61778 = null;
var count__61779 = (0);
var i__61780 = (0);
while(true){
if((i__61780 < count__61779)){
var n = chunk__61778.cljs$core$IIndexed$_nth$arity$2(null,i__61780);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62081 = seq__61777;
var G__62082 = chunk__61778;
var G__62083 = count__61779;
var G__62084 = (i__61780 + (1));
seq__61777 = G__62081;
chunk__61778 = G__62082;
count__61779 = G__62083;
i__61780 = G__62084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61777);
if(temp__5735__auto__){
var seq__61777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61777__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61777__$1);
var G__62085 = cljs.core.chunk_rest(seq__61777__$1);
var G__62086 = c__4550__auto__;
var G__62087 = cljs.core.count(c__4550__auto__);
var G__62088 = (0);
seq__61777 = G__62085;
chunk__61778 = G__62086;
count__61779 = G__62087;
i__61780 = G__62088;
continue;
} else {
var n = cljs.core.first(seq__61777__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62089 = cljs.core.next(seq__61777__$1);
var G__62090 = null;
var G__62091 = (0);
var G__62092 = (0);
seq__61777 = G__62089;
chunk__61778 = G__62090;
count__61779 = G__62091;
i__61780 = G__62092;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61782 = arguments.length;
switch (G__61782) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61784 = arguments.length;
switch (G__61784) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61786 = arguments.length;
switch (G__61786) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62103 = arguments.length;
var i__4731__auto___62104 = (0);
while(true){
if((i__4731__auto___62104 < len__4730__auto___62103)){
args__4736__auto__.push((arguments[i__4731__auto___62104]));

var G__62105 = (i__4731__auto___62104 + (1));
i__4731__auto___62104 = G__62105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61788_62106 = cljs.core.seq(nodes);
var chunk__61789_62107 = null;
var count__61790_62108 = (0);
var i__61791_62109 = (0);
while(true){
if((i__61791_62109 < count__61790_62108)){
var node_62110 = chunk__61789_62107.cljs$core$IIndexed$_nth$arity$2(null,i__61791_62109);
fragment.appendChild(shadow.dom._to_dom(node_62110));


var G__62111 = seq__61788_62106;
var G__62112 = chunk__61789_62107;
var G__62113 = count__61790_62108;
var G__62114 = (i__61791_62109 + (1));
seq__61788_62106 = G__62111;
chunk__61789_62107 = G__62112;
count__61790_62108 = G__62113;
i__61791_62109 = G__62114;
continue;
} else {
var temp__5735__auto___62118 = cljs.core.seq(seq__61788_62106);
if(temp__5735__auto___62118){
var seq__61788_62119__$1 = temp__5735__auto___62118;
if(cljs.core.chunked_seq_QMARK_(seq__61788_62119__$1)){
var c__4550__auto___62120 = cljs.core.chunk_first(seq__61788_62119__$1);
var G__62121 = cljs.core.chunk_rest(seq__61788_62119__$1);
var G__62122 = c__4550__auto___62120;
var G__62123 = cljs.core.count(c__4550__auto___62120);
var G__62124 = (0);
seq__61788_62106 = G__62121;
chunk__61789_62107 = G__62122;
count__61790_62108 = G__62123;
i__61791_62109 = G__62124;
continue;
} else {
var node_62125 = cljs.core.first(seq__61788_62119__$1);
fragment.appendChild(shadow.dom._to_dom(node_62125));


var G__62126 = cljs.core.next(seq__61788_62119__$1);
var G__62127 = null;
var G__62128 = (0);
var G__62129 = (0);
seq__61788_62106 = G__62126;
chunk__61789_62107 = G__62127;
count__61790_62108 = G__62128;
i__61791_62109 = G__62129;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61787){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61787));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61792_62130 = cljs.core.seq(scripts);
var chunk__61793_62131 = null;
var count__61794_62132 = (0);
var i__61795_62133 = (0);
while(true){
if((i__61795_62133 < count__61794_62132)){
var vec__61802_62134 = chunk__61793_62131.cljs$core$IIndexed$_nth$arity$2(null,i__61795_62133);
var script_tag_62135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61802_62134,(0),null);
var script_body_62136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61802_62134,(1),null);
eval(script_body_62136);


var G__62137 = seq__61792_62130;
var G__62138 = chunk__61793_62131;
var G__62139 = count__61794_62132;
var G__62140 = (i__61795_62133 + (1));
seq__61792_62130 = G__62137;
chunk__61793_62131 = G__62138;
count__61794_62132 = G__62139;
i__61795_62133 = G__62140;
continue;
} else {
var temp__5735__auto___62141 = cljs.core.seq(seq__61792_62130);
if(temp__5735__auto___62141){
var seq__61792_62142__$1 = temp__5735__auto___62141;
if(cljs.core.chunked_seq_QMARK_(seq__61792_62142__$1)){
var c__4550__auto___62143 = cljs.core.chunk_first(seq__61792_62142__$1);
var G__62144 = cljs.core.chunk_rest(seq__61792_62142__$1);
var G__62145 = c__4550__auto___62143;
var G__62146 = cljs.core.count(c__4550__auto___62143);
var G__62147 = (0);
seq__61792_62130 = G__62144;
chunk__61793_62131 = G__62145;
count__61794_62132 = G__62146;
i__61795_62133 = G__62147;
continue;
} else {
var vec__61805_62148 = cljs.core.first(seq__61792_62142__$1);
var script_tag_62149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61805_62148,(0),null);
var script_body_62150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61805_62148,(1),null);
eval(script_body_62150);


var G__62154 = cljs.core.next(seq__61792_62142__$1);
var G__62155 = null;
var G__62156 = (0);
var G__62157 = (0);
seq__61792_62130 = G__62154;
chunk__61793_62131 = G__62155;
count__61794_62132 = G__62156;
i__61795_62133 = G__62157;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61808){
var vec__61809 = p__61808;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61809,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61809,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61813 = arguments.length;
switch (G__61813) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61814 = cljs.core.seq(style_keys);
var chunk__61815 = null;
var count__61816 = (0);
var i__61817 = (0);
while(true){
if((i__61817 < count__61816)){
var it = chunk__61815.cljs$core$IIndexed$_nth$arity$2(null,i__61817);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62159 = seq__61814;
var G__62160 = chunk__61815;
var G__62161 = count__61816;
var G__62162 = (i__61817 + (1));
seq__61814 = G__62159;
chunk__61815 = G__62160;
count__61816 = G__62161;
i__61817 = G__62162;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61814);
if(temp__5735__auto__){
var seq__61814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61814__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61814__$1);
var G__62163 = cljs.core.chunk_rest(seq__61814__$1);
var G__62164 = c__4550__auto__;
var G__62165 = cljs.core.count(c__4550__auto__);
var G__62166 = (0);
seq__61814 = G__62163;
chunk__61815 = G__62164;
count__61816 = G__62165;
i__61817 = G__62166;
continue;
} else {
var it = cljs.core.first(seq__61814__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62167 = cljs.core.next(seq__61814__$1);
var G__62168 = null;
var G__62169 = (0);
var G__62170 = (0);
seq__61814 = G__62167;
chunk__61815 = G__62168;
count__61816 = G__62169;
i__61817 = G__62170;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k61819,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__61823 = k61819;
var G__61823__$1 = (((G__61823 instanceof cljs.core.Keyword))?G__61823.fqn:null);
switch (G__61823__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61819,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__61824){
var vec__61825 = p__61824;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61825,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61825,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61818){
var self__ = this;
var G__61818__$1 = this;
return (new cljs.core.RecordIter((0),G__61818__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61820,other61821){
var self__ = this;
var this61820__$1 = this;
return (((!((other61821 == null)))) && ((this61820__$1.constructor === other61821.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61820__$1.x,other61821.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61820__$1.y,other61821.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61820__$1.__extmap,other61821.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__61818){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__61828 = cljs.core.keyword_identical_QMARK_;
var expr__61829 = k__4382__auto__;
if(cljs.core.truth_((pred__61828.cljs$core$IFn$_invoke$arity$2 ? pred__61828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61829) : pred__61828.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61829)))){
return (new shadow.dom.Coordinate(G__61818,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61828.cljs$core$IFn$_invoke$arity$2 ? pred__61828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61829) : pred__61828.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61829)))){
return (new shadow.dom.Coordinate(self__.x,G__61818,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__61818),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__61818){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61818,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61822){
var extmap__4413__auto__ = (function (){var G__61831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61822,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61822)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61831);
} else {
return G__61831;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61822),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61822),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k61833,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__61837 = k61833;
var G__61837__$1 = (((G__61837 instanceof cljs.core.Keyword))?G__61837.fqn:null);
switch (G__61837__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61833,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__61838){
var vec__61839 = p__61838;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61839,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61839,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61832){
var self__ = this;
var G__61832__$1 = this;
return (new cljs.core.RecordIter((0),G__61832__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61834,other61835){
var self__ = this;
var this61834__$1 = this;
return (((!((other61835 == null)))) && ((this61834__$1.constructor === other61835.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61834__$1.w,other61835.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61834__$1.h,other61835.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61834__$1.__extmap,other61835.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__61832){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__61842 = cljs.core.keyword_identical_QMARK_;
var expr__61843 = k__4382__auto__;
if(cljs.core.truth_((pred__61842.cljs$core$IFn$_invoke$arity$2 ? pred__61842.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61843) : pred__61842.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61843)))){
return (new shadow.dom.Size(G__61832,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61842.cljs$core$IFn$_invoke$arity$2 ? pred__61842.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61843) : pred__61842.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61843)))){
return (new shadow.dom.Size(self__.w,G__61832,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__61832),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__61832){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61832,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61836){
var extmap__4413__auto__ = (function (){var G__61845 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61836,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61836)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61845);
} else {
return G__61845;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61836),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61836),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__62197 = (i + (1));
var G__62198 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62197;
ret = G__62198;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61850){
var vec__61851 = p__61850;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61851,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61855 = arguments.length;
switch (G__61855) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__62203 = ps;
var G__62204 = (i + (1));
el__$1 = G__62203;
i = G__62204;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61856 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61856,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61856,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61856,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61859_62205 = cljs.core.seq(props);
var chunk__61860_62206 = null;
var count__61861_62207 = (0);
var i__61862_62208 = (0);
while(true){
if((i__61862_62208 < count__61861_62207)){
var vec__61869_62210 = chunk__61860_62206.cljs$core$IIndexed$_nth$arity$2(null,i__61862_62208);
var k_62211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61869_62210,(0),null);
var v_62212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61869_62210,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_62211);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62211),v_62212);


var G__62214 = seq__61859_62205;
var G__62215 = chunk__61860_62206;
var G__62216 = count__61861_62207;
var G__62217 = (i__61862_62208 + (1));
seq__61859_62205 = G__62214;
chunk__61860_62206 = G__62215;
count__61861_62207 = G__62216;
i__61862_62208 = G__62217;
continue;
} else {
var temp__5735__auto___62218 = cljs.core.seq(seq__61859_62205);
if(temp__5735__auto___62218){
var seq__61859_62219__$1 = temp__5735__auto___62218;
if(cljs.core.chunked_seq_QMARK_(seq__61859_62219__$1)){
var c__4550__auto___62220 = cljs.core.chunk_first(seq__61859_62219__$1);
var G__62222 = cljs.core.chunk_rest(seq__61859_62219__$1);
var G__62223 = c__4550__auto___62220;
var G__62224 = cljs.core.count(c__4550__auto___62220);
var G__62225 = (0);
seq__61859_62205 = G__62222;
chunk__61860_62206 = G__62223;
count__61861_62207 = G__62224;
i__61862_62208 = G__62225;
continue;
} else {
var vec__61872_62226 = cljs.core.first(seq__61859_62219__$1);
var k_62227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61872_62226,(0),null);
var v_62228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61872_62226,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_62227);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62227),v_62228);


var G__62229 = cljs.core.next(seq__61859_62219__$1);
var G__62230 = null;
var G__62231 = (0);
var G__62232 = (0);
seq__61859_62205 = G__62229;
chunk__61860_62206 = G__62230;
count__61861_62207 = G__62231;
i__61862_62208 = G__62232;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61876 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61876,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61876,(1),null);
var seq__61879_62238 = cljs.core.seq(node_children);
var chunk__61881_62239 = null;
var count__61882_62240 = (0);
var i__61883_62241 = (0);
while(true){
if((i__61883_62241 < count__61882_62240)){
var child_struct_62242 = chunk__61881_62239.cljs$core$IIndexed$_nth$arity$2(null,i__61883_62241);
if((!((child_struct_62242 == null)))){
if(typeof child_struct_62242 === 'string'){
var text_62243 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62243),child_struct_62242].join(''));
} else {
var children_62244 = shadow.dom.svg_node(child_struct_62242);
if(cljs.core.seq_QMARK_(children_62244)){
var seq__61897_62245 = cljs.core.seq(children_62244);
var chunk__61899_62246 = null;
var count__61900_62247 = (0);
var i__61901_62248 = (0);
while(true){
if((i__61901_62248 < count__61900_62247)){
var child_62249 = chunk__61899_62246.cljs$core$IIndexed$_nth$arity$2(null,i__61901_62248);
if(cljs.core.truth_(child_62249)){
node.appendChild(child_62249);


var G__62251 = seq__61897_62245;
var G__62252 = chunk__61899_62246;
var G__62253 = count__61900_62247;
var G__62254 = (i__61901_62248 + (1));
seq__61897_62245 = G__62251;
chunk__61899_62246 = G__62252;
count__61900_62247 = G__62253;
i__61901_62248 = G__62254;
continue;
} else {
var G__62255 = seq__61897_62245;
var G__62256 = chunk__61899_62246;
var G__62257 = count__61900_62247;
var G__62258 = (i__61901_62248 + (1));
seq__61897_62245 = G__62255;
chunk__61899_62246 = G__62256;
count__61900_62247 = G__62257;
i__61901_62248 = G__62258;
continue;
}
} else {
var temp__5735__auto___62259 = cljs.core.seq(seq__61897_62245);
if(temp__5735__auto___62259){
var seq__61897_62260__$1 = temp__5735__auto___62259;
if(cljs.core.chunked_seq_QMARK_(seq__61897_62260__$1)){
var c__4550__auto___62261 = cljs.core.chunk_first(seq__61897_62260__$1);
var G__62262 = cljs.core.chunk_rest(seq__61897_62260__$1);
var G__62263 = c__4550__auto___62261;
var G__62264 = cljs.core.count(c__4550__auto___62261);
var G__62265 = (0);
seq__61897_62245 = G__62262;
chunk__61899_62246 = G__62263;
count__61900_62247 = G__62264;
i__61901_62248 = G__62265;
continue;
} else {
var child_62266 = cljs.core.first(seq__61897_62260__$1);
if(cljs.core.truth_(child_62266)){
node.appendChild(child_62266);


var G__62267 = cljs.core.next(seq__61897_62260__$1);
var G__62268 = null;
var G__62269 = (0);
var G__62270 = (0);
seq__61897_62245 = G__62267;
chunk__61899_62246 = G__62268;
count__61900_62247 = G__62269;
i__61901_62248 = G__62270;
continue;
} else {
var G__62275 = cljs.core.next(seq__61897_62260__$1);
var G__62276 = null;
var G__62277 = (0);
var G__62278 = (0);
seq__61897_62245 = G__62275;
chunk__61899_62246 = G__62276;
count__61900_62247 = G__62277;
i__61901_62248 = G__62278;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62244);
}
}


var G__62279 = seq__61879_62238;
var G__62280 = chunk__61881_62239;
var G__62281 = count__61882_62240;
var G__62282 = (i__61883_62241 + (1));
seq__61879_62238 = G__62279;
chunk__61881_62239 = G__62280;
count__61882_62240 = G__62281;
i__61883_62241 = G__62282;
continue;
} else {
var G__62283 = seq__61879_62238;
var G__62284 = chunk__61881_62239;
var G__62285 = count__61882_62240;
var G__62286 = (i__61883_62241 + (1));
seq__61879_62238 = G__62283;
chunk__61881_62239 = G__62284;
count__61882_62240 = G__62285;
i__61883_62241 = G__62286;
continue;
}
} else {
var temp__5735__auto___62287 = cljs.core.seq(seq__61879_62238);
if(temp__5735__auto___62287){
var seq__61879_62288__$1 = temp__5735__auto___62287;
if(cljs.core.chunked_seq_QMARK_(seq__61879_62288__$1)){
var c__4550__auto___62289 = cljs.core.chunk_first(seq__61879_62288__$1);
var G__62290 = cljs.core.chunk_rest(seq__61879_62288__$1);
var G__62291 = c__4550__auto___62289;
var G__62292 = cljs.core.count(c__4550__auto___62289);
var G__62293 = (0);
seq__61879_62238 = G__62290;
chunk__61881_62239 = G__62291;
count__61882_62240 = G__62292;
i__61883_62241 = G__62293;
continue;
} else {
var child_struct_62294 = cljs.core.first(seq__61879_62288__$1);
if((!((child_struct_62294 == null)))){
if(typeof child_struct_62294 === 'string'){
var text_62295 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62295),child_struct_62294].join(''));
} else {
var children_62296 = shadow.dom.svg_node(child_struct_62294);
if(cljs.core.seq_QMARK_(children_62296)){
var seq__61903_62297 = cljs.core.seq(children_62296);
var chunk__61905_62298 = null;
var count__61906_62299 = (0);
var i__61907_62300 = (0);
while(true){
if((i__61907_62300 < count__61906_62299)){
var child_62301 = chunk__61905_62298.cljs$core$IIndexed$_nth$arity$2(null,i__61907_62300);
if(cljs.core.truth_(child_62301)){
node.appendChild(child_62301);


var G__62302 = seq__61903_62297;
var G__62303 = chunk__61905_62298;
var G__62304 = count__61906_62299;
var G__62305 = (i__61907_62300 + (1));
seq__61903_62297 = G__62302;
chunk__61905_62298 = G__62303;
count__61906_62299 = G__62304;
i__61907_62300 = G__62305;
continue;
} else {
var G__62306 = seq__61903_62297;
var G__62307 = chunk__61905_62298;
var G__62308 = count__61906_62299;
var G__62309 = (i__61907_62300 + (1));
seq__61903_62297 = G__62306;
chunk__61905_62298 = G__62307;
count__61906_62299 = G__62308;
i__61907_62300 = G__62309;
continue;
}
} else {
var temp__5735__auto___62310__$1 = cljs.core.seq(seq__61903_62297);
if(temp__5735__auto___62310__$1){
var seq__61903_62311__$1 = temp__5735__auto___62310__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61903_62311__$1)){
var c__4550__auto___62312 = cljs.core.chunk_first(seq__61903_62311__$1);
var G__62313 = cljs.core.chunk_rest(seq__61903_62311__$1);
var G__62314 = c__4550__auto___62312;
var G__62315 = cljs.core.count(c__4550__auto___62312);
var G__62316 = (0);
seq__61903_62297 = G__62313;
chunk__61905_62298 = G__62314;
count__61906_62299 = G__62315;
i__61907_62300 = G__62316;
continue;
} else {
var child_62317 = cljs.core.first(seq__61903_62311__$1);
if(cljs.core.truth_(child_62317)){
node.appendChild(child_62317);


var G__62318 = cljs.core.next(seq__61903_62311__$1);
var G__62319 = null;
var G__62320 = (0);
var G__62321 = (0);
seq__61903_62297 = G__62318;
chunk__61905_62298 = G__62319;
count__61906_62299 = G__62320;
i__61907_62300 = G__62321;
continue;
} else {
var G__62322 = cljs.core.next(seq__61903_62311__$1);
var G__62323 = null;
var G__62324 = (0);
var G__62325 = (0);
seq__61903_62297 = G__62322;
chunk__61905_62298 = G__62323;
count__61906_62299 = G__62324;
i__61907_62300 = G__62325;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62296);
}
}


var G__62326 = cljs.core.next(seq__61879_62288__$1);
var G__62327 = null;
var G__62328 = (0);
var G__62329 = (0);
seq__61879_62238 = G__62326;
chunk__61881_62239 = G__62327;
count__61882_62240 = G__62328;
i__61883_62241 = G__62329;
continue;
} else {
var G__62330 = cljs.core.next(seq__61879_62288__$1);
var G__62331 = null;
var G__62332 = (0);
var G__62333 = (0);
seq__61879_62238 = G__62330;
chunk__61881_62239 = G__62331;
count__61882_62240 = G__62332;
i__61883_62241 = G__62333;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62334 = arguments.length;
var i__4731__auto___62335 = (0);
while(true){
if((i__4731__auto___62335 < len__4730__auto___62334)){
args__4736__auto__.push((arguments[i__4731__auto___62335]));

var G__62336 = (i__4731__auto___62335 + (1));
i__4731__auto___62335 = G__62336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61909){
var G__61910 = cljs.core.first(seq61909);
var seq61909__$1 = cljs.core.next(seq61909);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61910,seq61909__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__61912 = arguments.length;
switch (G__61912) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__52287__auto___62341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_61917){
var state_val_61918 = (state_61917[(1)]);
if((state_val_61918 === (1))){
var state_61917__$1 = state_61917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61917__$1,(2),once_or_cleanup);
} else {
if((state_val_61918 === (2))){
var inst_61914 = (state_61917[(2)]);
var inst_61915 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61917__$1 = (function (){var statearr_61919 = state_61917;
(statearr_61919[(7)] = inst_61914);

return statearr_61919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61917__$1,inst_61915);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__51239__auto__ = null;
var shadow$dom$state_machine__51239__auto____0 = (function (){
var statearr_61920 = [null,null,null,null,null,null,null,null];
(statearr_61920[(0)] = shadow$dom$state_machine__51239__auto__);

(statearr_61920[(1)] = (1));

return statearr_61920;
});
var shadow$dom$state_machine__51239__auto____1 = (function (state_61917){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_61917);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e61921){var ex__51242__auto__ = e61921;
var statearr_61922_62343 = state_61917;
(statearr_61922_62343[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_61917[(4)]))){
var statearr_61923_62344 = state_61917;
(statearr_61923_62344[(1)] = cljs.core.first((state_61917[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62346 = state_61917;
state_61917 = G__62346;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
shadow$dom$state_machine__51239__auto__ = function(state_61917){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51239__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51239__auto____1.call(this,state_61917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51239__auto____0;
shadow$dom$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51239__auto____1;
return shadow$dom$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_61924 = f__52288__auto__();
(statearr_61924[(6)] = c__52287__auto___62341);

return statearr_61924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
