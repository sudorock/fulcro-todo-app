goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63408){
var map__63409 = p__63408;
var map__63409__$1 = (((((!((map__63409 == null))))?(((((map__63409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63409):map__63409);
var m = map__63409__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63409__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63411_63512 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63412_63513 = null;
var count__63413_63514 = (0);
var i__63414_63515 = (0);
while(true){
if((i__63414_63515 < count__63413_63514)){
var f_63516 = chunk__63412_63513.cljs$core$IIndexed$_nth$arity$2(null,i__63414_63515);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63516], 0));


var G__63517 = seq__63411_63512;
var G__63518 = chunk__63412_63513;
var G__63519 = count__63413_63514;
var G__63520 = (i__63414_63515 + (1));
seq__63411_63512 = G__63517;
chunk__63412_63513 = G__63518;
count__63413_63514 = G__63519;
i__63414_63515 = G__63520;
continue;
} else {
var temp__5735__auto___63521 = cljs.core.seq(seq__63411_63512);
if(temp__5735__auto___63521){
var seq__63411_63522__$1 = temp__5735__auto___63521;
if(cljs.core.chunked_seq_QMARK_(seq__63411_63522__$1)){
var c__4550__auto___63523 = cljs.core.chunk_first(seq__63411_63522__$1);
var G__63524 = cljs.core.chunk_rest(seq__63411_63522__$1);
var G__63525 = c__4550__auto___63523;
var G__63526 = cljs.core.count(c__4550__auto___63523);
var G__63527 = (0);
seq__63411_63512 = G__63524;
chunk__63412_63513 = G__63525;
count__63413_63514 = G__63526;
i__63414_63515 = G__63527;
continue;
} else {
var f_63528 = cljs.core.first(seq__63411_63522__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63528], 0));


var G__63529 = cljs.core.next(seq__63411_63522__$1);
var G__63530 = null;
var G__63531 = (0);
var G__63532 = (0);
seq__63411_63512 = G__63529;
chunk__63412_63513 = G__63530;
count__63413_63514 = G__63531;
i__63414_63515 = G__63532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63533 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_63533], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_63533)))?cljs.core.second(arglists_63533):arglists_63533)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63415_63534 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63416_63535 = null;
var count__63417_63536 = (0);
var i__63418_63537 = (0);
while(true){
if((i__63418_63537 < count__63417_63536)){
var vec__63429_63538 = chunk__63416_63535.cljs$core$IIndexed$_nth$arity$2(null,i__63418_63537);
var name_63539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63429_63538,(0),null);
var map__63432_63540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63429_63538,(1),null);
var map__63432_63541__$1 = (((((!((map__63432_63540 == null))))?(((((map__63432_63540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63432_63540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63432_63540):map__63432_63540);
var doc_63542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432_63541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432_63541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63539], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63543], 0));

if(cljs.core.truth_(doc_63542)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63542], 0));
} else {
}


var G__63544 = seq__63415_63534;
var G__63545 = chunk__63416_63535;
var G__63546 = count__63417_63536;
var G__63547 = (i__63418_63537 + (1));
seq__63415_63534 = G__63544;
chunk__63416_63535 = G__63545;
count__63417_63536 = G__63546;
i__63418_63537 = G__63547;
continue;
} else {
var temp__5735__auto___63548 = cljs.core.seq(seq__63415_63534);
if(temp__5735__auto___63548){
var seq__63415_63549__$1 = temp__5735__auto___63548;
if(cljs.core.chunked_seq_QMARK_(seq__63415_63549__$1)){
var c__4550__auto___63550 = cljs.core.chunk_first(seq__63415_63549__$1);
var G__63551 = cljs.core.chunk_rest(seq__63415_63549__$1);
var G__63552 = c__4550__auto___63550;
var G__63553 = cljs.core.count(c__4550__auto___63550);
var G__63554 = (0);
seq__63415_63534 = G__63551;
chunk__63416_63535 = G__63552;
count__63417_63536 = G__63553;
i__63418_63537 = G__63554;
continue;
} else {
var vec__63434_63555 = cljs.core.first(seq__63415_63549__$1);
var name_63556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63434_63555,(0),null);
var map__63437_63557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63434_63555,(1),null);
var map__63437_63558__$1 = (((((!((map__63437_63557 == null))))?(((((map__63437_63557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63437_63557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63437_63557):map__63437_63557);
var doc_63559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63437_63558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63437_63558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63556], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63560], 0));

if(cljs.core.truth_(doc_63559)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63559], 0));
} else {
}


var G__63561 = cljs.core.next(seq__63415_63549__$1);
var G__63562 = null;
var G__63563 = (0);
var G__63564 = (0);
seq__63415_63534 = G__63561;
chunk__63416_63535 = G__63562;
count__63417_63536 = G__63563;
i__63418_63537 = G__63564;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__63439 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63440 = null;
var count__63441 = (0);
var i__63442 = (0);
while(true){
if((i__63442 < count__63441)){
var role = chunk__63440.cljs$core$IIndexed$_nth$arity$2(null,i__63442);
var temp__5735__auto___63565__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___63565__$1)){
var spec_63566 = temp__5735__auto___63565__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63566)], 0));
} else {
}


var G__63567 = seq__63439;
var G__63568 = chunk__63440;
var G__63569 = count__63441;
var G__63570 = (i__63442 + (1));
seq__63439 = G__63567;
chunk__63440 = G__63568;
count__63441 = G__63569;
i__63442 = G__63570;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__63439);
if(temp__5735__auto____$1){
var seq__63439__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__63439__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63439__$1);
var G__63571 = cljs.core.chunk_rest(seq__63439__$1);
var G__63572 = c__4550__auto__;
var G__63573 = cljs.core.count(c__4550__auto__);
var G__63574 = (0);
seq__63439 = G__63571;
chunk__63440 = G__63572;
count__63441 = G__63573;
i__63442 = G__63574;
continue;
} else {
var role = cljs.core.first(seq__63439__$1);
var temp__5735__auto___63575__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___63575__$2)){
var spec_63576 = temp__5735__auto___63575__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63576)], 0));
} else {
}


var G__63577 = cljs.core.next(seq__63439__$1);
var G__63578 = null;
var G__63579 = (0);
var G__63580 = (0);
seq__63439 = G__63577;
chunk__63440 = G__63578;
count__63441 = G__63579;
i__63442 = G__63580;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__63581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__63582 = cljs.core.ex_cause(t);
via = G__63581;
t = G__63582;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__63445 = datafied_throwable;
var map__63445__$1 = (((((!((map__63445 == null))))?(((((map__63445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63445):map__63445);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63445__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__63446 = cljs.core.last(via);
var map__63446__$1 = (((((!((map__63446 == null))))?(((((map__63446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63446):map__63446);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63446__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63446__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63447 = data;
var map__63447__$1 = (((((!((map__63447 == null))))?(((((map__63447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63447):map__63447);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63447__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63447__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63447__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__63448 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__63448__$1 = (((((!((map__63448 == null))))?(((((map__63448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63448):map__63448);
var top_data = map__63448__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__63453 = phase;
var G__63453__$1 = (((G__63453 instanceof cljs.core.Keyword))?G__63453.fqn:null);
switch (G__63453__$1) {
case "read-source":
var map__63454 = data;
var map__63454__$1 = (((((!((map__63454 == null))))?(((((map__63454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63454):map__63454);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63454__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63454__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__63456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__63456__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63456,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63456);
var G__63456__$2 = (cljs.core.truth_((function (){var fexpr__63457 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63457.cljs$core$IFn$_invoke$arity$1 ? fexpr__63457.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63457.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63456__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63456__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63456__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63456__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__63458 = top_data;
var G__63458__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63458,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63458);
var G__63458__$2 = (cljs.core.truth_((function (){var fexpr__63459 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63459.cljs$core$IFn$_invoke$arity$1 ? fexpr__63459.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63459.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63458__$1);
var G__63458__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63458__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63458__$2);
var G__63458__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63458__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63458__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63458__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63458__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__63460 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63460,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63460,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63460,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63460,(3),null);
var G__63463 = top_data;
var G__63463__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63463,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__63463);
var G__63463__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63463__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__63463__$1);
var G__63463__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63463__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__63463__$2);
var G__63463__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63463__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63463__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63463__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63463__$4;
}

break;
case "execution":
var vec__63464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63444_SHARP_){
var or__4120__auto__ = (p1__63444_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__63468 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63468.cljs$core$IFn$_invoke$arity$1 ? fexpr__63468.cljs$core$IFn$_invoke$arity$1(p1__63444_SHARP_) : fexpr__63468.call(null,p1__63444_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__63469 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__63469__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63469,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__63469);
var G__63469__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63469__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63469__$1);
var G__63469__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63469__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__63469__$2);
var G__63469__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63469__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__63469__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63469__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63469__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63453__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__63472){
var map__63473 = p__63472;
var map__63473__$1 = (((((!((map__63473 == null))))?(((((map__63473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63473):map__63473);
var triage_data = map__63473__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__63475 = phase;
var G__63475__$1 = (((G__63475 instanceof cljs.core.Keyword))?G__63475.fqn:null);
switch (G__63475__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__63476 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__63477 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63478 = loc;
var G__63479 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63480_63585 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63481_63586 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63482_63587 = true;
var _STAR_print_fn_STAR__temp_val__63483_63588 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63482_63587);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63483_63588);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63470_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63470_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63481_63586);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63480_63585);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63476,G__63477,G__63478,G__63479) : format.call(null,G__63476,G__63477,G__63478,G__63479));

break;
case "macroexpansion":
var G__63484 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__63485 = cause_type;
var G__63486 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63487 = loc;
var G__63488 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63484,G__63485,G__63486,G__63487,G__63488) : format.call(null,G__63484,G__63485,G__63486,G__63487,G__63488));

break;
case "compile-syntax-check":
var G__63489 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__63490 = cause_type;
var G__63491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63492 = loc;
var G__63493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63489,G__63490,G__63491,G__63492,G__63493) : format.call(null,G__63489,G__63490,G__63491,G__63492,G__63493));

break;
case "compilation":
var G__63494 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__63495 = cause_type;
var G__63496 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63497 = loc;
var G__63498 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63494,G__63495,G__63496,G__63497,G__63498) : format.call(null,G__63494,G__63495,G__63496,G__63497,G__63498));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__63499 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__63500 = symbol;
var G__63501 = loc;
var G__63502 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63503_63589 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63504_63590 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63505_63591 = true;
var _STAR_print_fn_STAR__temp_val__63506_63592 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63505_63591);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63506_63592);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63471_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63471_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63504_63590);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63503_63589);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63499,G__63500,G__63501,G__63502) : format.call(null,G__63499,G__63500,G__63501,G__63502));
} else {
var G__63507 = "Execution error%s at %s(%s).\n%s\n";
var G__63508 = cause_type;
var G__63509 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63510 = loc;
var G__63511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63507,G__63508,G__63509,G__63510,G__63511) : format.call(null,G__63507,G__63508,G__63509,G__63510,G__63511));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63475__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
