goog.provide('com.fulcrologic.fulcro.algorithms.normalize');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
goog.require('com.fulcrologic.fulcro.components');
com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR_(query,data,refs,union_seen,transform){
var data__$1 = (cljs.core.truth_((function (){var and__4109__auto__ = transform;
if(cljs.core.truth_(and__4109__auto__)){
return (!(cljs.core.vector_QMARK_(data)));
} else {
return and__4109__auto__;
}
})())?(transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(query,data) : transform.call(null,query,data)):data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data__$1);
if((!((ident == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__57123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__57124 = data__$1;
var G__57125 = refs;
var G__57126 = union_seen;
var G__57127 = transform;
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(G__57123,G__57124,G__57125,G__57126,G__57127) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,G__57123,G__57124,G__57125,G__57126,G__57127));
})(),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.normalize","tag","com.fulcrologic.fulcro.algorithms.normalize/tag",313912943),cljs.core.first(ident));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Union components must have an ident",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_(data__$1)){
return data__$1;
} else {
var q = cljs.core.seq(query);
var ret = data__$1;
while(true){
if((!((q == null)))){
var expr = cljs.core.first(q);
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(expr)){
var vec__57143 = com.fulcrologic.fulcro.algorithms.do_not_use.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(1),null);
var recursive_QMARK_ = com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(sel);
var union_entry = ((com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?(((!((union_seen == null))))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if(((recursive_QMARK_) && (edn_query_language.core.ident_QMARK_(v)))){
var G__57163 = cljs.core.next(q);
var G__57164 = ret;
q = G__57163;
ret = G__57164;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,v,refs,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,sel__$1,v,refs,union_entry,transform));
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.components.has_ident_QMARK_(class$)))))))){
var i = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,x);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__57165 = cljs.core.next(q);
var G__57166 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__57165;
ret = G__57166;
continue;
} else {
var G__57167 = cljs.core.next(q);
var G__57168 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__57167;
ret = G__57168;
continue;
}
} else {
if(((cljs.core.vector_QMARK_(v)) && ((!(edn_query_language.core.ident_QMARK_(v)))) && ((!(edn_query_language.core.ident_QMARK_(cljs.core.first(v))))))){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__57121_SHARP_){
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,p1__57121_SHARP_,refs,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,sel__$1,p1__57121_SHARP_,refs,union_entry,transform));
});})(q,ret,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),v);
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.components.has_ident_QMARK_(class$)))))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__57122_SHARP_){
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,p1__57122_SHARP_);
});})(q,ret,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (m,p__57147){
var vec__57148 = p__57147;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57148,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57148,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (ret__$1,p__57151){
var vec__57152 = p__57151;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57152,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57152,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__57143,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}

var G__57170 = cljs.core.next(q);
var G__57171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__57170;
ret = G__57171;
continue;
} else {
var G__57172 = cljs.core.next(q);
var G__57173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__57172;
ret = G__57173;
continue;
}
} else {
if((v == null)){
var G__57174 = cljs.core.next(q);
var G__57175 = ret;
q = G__57174;
ret = G__57175;
continue;
} else {
var G__57176 = cljs.core.next(q);
var G__57177 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__57176;
ret = G__57177;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if((v == null)){
var G__57178 = cljs.core.next(q);
var G__57179 = ret;
q = G__57178;
ret = G__57179;
continue;
} else {
var G__57181 = cljs.core.next(q);
var G__57182 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__57181;
ret = G__57182;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db = (function com$fulcrologic$fulcro$algorithms$normalize$tree__GT_db(var_args){
var G__57156 = arguments.length;
switch (G__57156) {
case 2:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(x,data,merge_idents,null);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4 = (function (x,data,merge_idents,transform){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(x,data));
var ret = com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_(x__$1,data,refs,null,transform);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref(refs);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,refs_SINGLEQUOTE_], 0));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(refs));
}
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.normalize.js.map
