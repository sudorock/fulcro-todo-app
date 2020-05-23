goog.provide('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('clojure.string');
goog.require('edn_query_language.core');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('goog.crypt.base64');
goog.require('cljs.spec.alpha');
com.fulcrologic.fulcro.algorithms.do_not_use.atom_QMARK_ = (function com$fulcrologic$fulcro$algorithms$do_not_use$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
com.fulcrologic.fulcro.algorithms.do_not_use.join_entry = (function com$fulcrologic$fulcro$algorithms$do_not_use$join_entry(expr){
var vec__53198 = ((cljs.core.seq_QMARK_(expr))?cljs.core.ffirst(expr):cljs.core.first(expr));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53198,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.list_QMARK_(k))?cljs.core.first(k):k),v], null);
});
com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_ = (function com$fulcrologic$fulcro$algorithms$do_not_use$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_ = (function com$fulcrologic$fulcro$algorithms$do_not_use$recursion_QMARK_(x){
return ((cljs.core.symbol_identical_QMARK_(new cljs.core.Symbol(null,"...","...",-1926939749,null),x)) || (typeof x === 'number'));
});
com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_ = (function com$fulcrologic$fulcro$algorithms$do_not_use$union_QMARK_(expr){
var expr__$1 = (function (){var G__53216 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__53216);
} else {
return G__53216;
}
})();
return ((cljs.core.map_QMARK_(expr__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(expr__$1)))));
});
com.fulcrologic.fulcro.algorithms.do_not_use.join_key = (function com$fulcrologic$fulcro$algorithms$do_not_use$join_key(expr){
if(cljs.core.map_QMARK_(expr)){
var k = cljs.core.ffirst(expr);
if(cljs.core.list_QMARK_(k)){
return cljs.core.first(k);
} else {
return cljs.core.ffirst(expr);
}
} else {
if(cljs.core.seq_QMARK_(expr)){
var G__53222 = cljs.core.first(expr);
return (com.fulcrologic.fulcro.algorithms.do_not_use.join_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.do_not_use.join_key.cljs$core$IFn$_invoke$arity$1(G__53222) : com.fulcrologic.fulcro.algorithms.do_not_use.join_key.call(null,G__53222));
} else {
return expr;

}
}
});
com.fulcrologic.fulcro.algorithms.do_not_use.join_value = (function com$fulcrologic$fulcro$algorithms$do_not_use$join_value(join){
return cljs.core.second(com.fulcrologic.fulcro.algorithms.do_not_use.join_entry(join));
});
com.fulcrologic.fulcro.algorithms.do_not_use.mutation_join_QMARK_ = (function com$fulcrologic$fulcro$algorithms$do_not_use$mutation_join_QMARK_(expr){
return ((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(expr)) && ((com.fulcrologic.fulcro.algorithms.do_not_use.join_key(expr) instanceof cljs.core.Symbol)));
});
/**
 * Returns current time in ms.
 */
com.fulcrologic.fulcro.algorithms.do_not_use.now = (function com$fulcrologic$fulcro$algorithms$do_not_use$now(){
return (new Date());
});
com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge = (function com$fulcrologic$fulcro$algorithms$do_not_use$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53271 = arguments.length;
var i__4731__auto___53272 = (0);
while(true){
if((i__4731__auto___53272 < len__4730__auto___53271)){
args__4736__auto__.push((arguments[i__4731__auto___53272]));

var G__53273 = (i__4731__auto___53272 + (1));
i__4731__auto___53272 = G__53273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
}));

(com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$lang$applyTo = (function (seq53228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53228));
}));

com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_ = (function com$fulcrologic$fulcro$algorithms$do_not_use$conform_BANG_(spec,x){
var rt = cljs.spec.alpha.conform(spec,x);
if(cljs.spec.alpha.invalid_QMARK_(rt)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_str(spec,x),cljs.spec.alpha.explain_data(spec,x));
} else {
}

return rt;
});
/**
 * Calculates the keys that are being extracted in a legal map destructuring expression.
 * 
 *   - `m`: A map containing legal CLJ destructurings, like `{:keys [a] x :x ::keys [y]}`
 * 
 *   Returns a set of all keywords that are destructured in the map.
 * 
 *   Example:
 * 
 *   ```
 *   (destructured-keys {:a/keys [v] sym :other-key}) => #{:a/v :other-key}
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.do_not_use.destructured_keys = (function com$fulcrologic$fulcro$algorithms$do_not_use$destructured_keys(m){
var regular_destructurings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keys",cljs.core.name(k))))){
var simple_syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var included_ns = cljs.core.namespace(k);
var source_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (s){
if(cljs.core.truth_(included_ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(included_ns,cljs.core.name(s));
} else {
if(cljs.core.truth_((((s instanceof cljs.core.Keyword))?cljs.core.namespace(s):false))){
return s;
} else {
if(cljs.core.truth_(cljs.core.namespace(s))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(s),cljs.core.name(s));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);

}
}
}
})),simple_syms);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,source_keys);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(m));
var symbol_destructrings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
if((k instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(m));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(regular_destructurings,symbol_destructrings);
});
/**
 * Convert char to int
 */
com.fulcrologic.fulcro.algorithms.do_not_use.char_code = (function com$fulcrologic$fulcro$algorithms$do_not_use$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
/**
 * Encode a string to UTF-8 and encode the result to base 64
 */
com.fulcrologic.fulcro.algorithms.do_not_use.base64_encode = (function com$fulcrologic$fulcro$algorithms$do_not_use$base64_encode(str){
var bytes = goog.crypt.stringToUtf8ByteArray(cljs.core.clj__GT_js(str));
return goog.crypt.base64.encodeString(clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,bytes)));
});
com.fulcrologic.fulcro.algorithms.do_not_use.base64_decode = (function com$fulcrologic$fulcro$algorithms$do_not_use$base64_decode(str){
var bytes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.do_not_use.char_code,cljs.core.vec(goog.crypt.base64.decodeString(str)));
return goog.crypt.utf8ByteArrayToString(cljs.core.clj__GT_js(bytes));
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.do_not_use.js.map
