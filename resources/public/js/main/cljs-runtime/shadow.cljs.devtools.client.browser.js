goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63250 = arguments.length;
var i__4731__auto___63251 = (0);
while(true){
if((i__4731__auto___63251 < len__4730__auto___63250)){
args__4736__auto__.push((arguments[i__4731__auto___63251]));

var G__63252 = (i__4731__auto___63251 + (1));
i__4731__auto___63251 = G__63252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63091){
var G__63093 = cljs.core.first(seq63091);
var seq63091__$1 = cljs.core.next(seq63091);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63093,seq63091__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63109 = cljs.core.seq(sources);
var chunk__63110 = null;
var count__63111 = (0);
var i__63112 = (0);
while(true){
if((i__63112 < count__63111)){
var map__63129 = chunk__63110.cljs$core$IIndexed$_nth$arity$2(null,i__63112);
var map__63129__$1 = (((((!((map__63129 == null))))?(((((map__63129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63129):map__63129);
var src = map__63129__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63129__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63129__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63129__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63129__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e63131){var e_63253 = e63131;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63253);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63253.message)].join('')));
}

var G__63254 = seq__63109;
var G__63255 = chunk__63110;
var G__63256 = count__63111;
var G__63257 = (i__63112 + (1));
seq__63109 = G__63254;
chunk__63110 = G__63255;
count__63111 = G__63256;
i__63112 = G__63257;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63109);
if(temp__5735__auto__){
var seq__63109__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63109__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63109__$1);
var G__63258 = cljs.core.chunk_rest(seq__63109__$1);
var G__63259 = c__4550__auto__;
var G__63260 = cljs.core.count(c__4550__auto__);
var G__63261 = (0);
seq__63109 = G__63258;
chunk__63110 = G__63259;
count__63111 = G__63260;
i__63112 = G__63261;
continue;
} else {
var map__63132 = cljs.core.first(seq__63109__$1);
var map__63132__$1 = (((((!((map__63132 == null))))?(((((map__63132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63132):map__63132);
var src = map__63132__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63132__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63132__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63132__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63132__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e63134){var e_63262 = e63134;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63262);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63262.message)].join('')));
}

var G__63263 = cljs.core.next(seq__63109__$1);
var G__63264 = null;
var G__63265 = (0);
var G__63266 = (0);
seq__63109 = G__63263;
chunk__63110 = G__63264;
count__63111 = G__63265;
i__63112 = G__63266;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63137 = cljs.core.seq(js_requires);
var chunk__63138 = null;
var count__63139 = (0);
var i__63140 = (0);
while(true){
if((i__63140 < count__63139)){
var js_ns = chunk__63138.cljs$core$IIndexed$_nth$arity$2(null,i__63140);
var require_str_63267 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63267);


var G__63268 = seq__63137;
var G__63269 = chunk__63138;
var G__63270 = count__63139;
var G__63271 = (i__63140 + (1));
seq__63137 = G__63268;
chunk__63138 = G__63269;
count__63139 = G__63270;
i__63140 = G__63271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63137);
if(temp__5735__auto__){
var seq__63137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63137__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63137__$1);
var G__63272 = cljs.core.chunk_rest(seq__63137__$1);
var G__63273 = c__4550__auto__;
var G__63274 = cljs.core.count(c__4550__auto__);
var G__63275 = (0);
seq__63137 = G__63272;
chunk__63138 = G__63273;
count__63139 = G__63274;
i__63140 = G__63275;
continue;
} else {
var js_ns = cljs.core.first(seq__63137__$1);
var require_str_63276 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63276);


var G__63277 = cljs.core.next(seq__63137__$1);
var G__63278 = null;
var G__63279 = (0);
var G__63280 = (0);
seq__63137 = G__63277;
chunk__63138 = G__63278;
count__63139 = G__63279;
i__63140 = G__63280;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__63143 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__63143) : callback.call(null,G__63143));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__63146){
var map__63147 = p__63146;
var map__63147__$1 = (((((!((map__63147 == null))))?(((((map__63147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63147):map__63147);
var msg = map__63147__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63147__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63147__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63149(s__63150){
return (new cljs.core.LazySeq(null,(function (){
var s__63150__$1 = s__63150;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63150__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__63155 = cljs.core.first(xs__6292__auto__);
var map__63155__$1 = (((((!((map__63155 == null))))?(((((map__63155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63155):map__63155);
var src = map__63155__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63155__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63155__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__63150__$1,map__63155,map__63155__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63147,map__63147__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63149_$_iter__63151(s__63152){
return (new cljs.core.LazySeq(null,((function (s__63150__$1,map__63155,map__63155__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63147,map__63147__$1,msg,info,reload_info){
return (function (){
var s__63152__$1 = s__63152;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63152__$1);
if(temp__5735__auto____$1){
var s__63152__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63152__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__63152__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__63154 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__63153 = (0);
while(true){
if((i__63153 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__63153);
cljs.core.chunk_append(b__63154,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63281 = (i__63153 + (1));
i__63153 = G__63281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63154),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63149_$_iter__63151(cljs.core.chunk_rest(s__63152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63154),null);
}
} else {
var warning = cljs.core.first(s__63152__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63149_$_iter__63151(cljs.core.rest(s__63152__$2)));
}
} else {
return null;
}
break;
}
});})(s__63150__$1,map__63155,map__63155__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63147,map__63147__$1,msg,info,reload_info))
,null,null));
});})(s__63150__$1,map__63155,map__63155__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63147,map__63147__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63149(cljs.core.rest(s__63150__$1)));
} else {
var G__63282 = cljs.core.rest(s__63150__$1);
s__63150__$1 = G__63282;
continue;
}
} else {
var G__63283 = cljs.core.rest(s__63150__$1);
s__63150__$1 = G__63283;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__63157_63284 = cljs.core.seq(warnings);
var chunk__63158_63285 = null;
var count__63159_63286 = (0);
var i__63160_63287 = (0);
while(true){
if((i__63160_63287 < count__63159_63286)){
var map__63165_63288 = chunk__63158_63285.cljs$core$IIndexed$_nth$arity$2(null,i__63160_63287);
var map__63165_63289__$1 = (((((!((map__63165_63288 == null))))?(((((map__63165_63288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63165_63288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63165_63288):map__63165_63288);
var w_63290 = map__63165_63289__$1;
var msg_63291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165_63289__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165_63289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165_63289__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165_63289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63294)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63292),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63293),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63291__$1)].join(''));


var G__63295 = seq__63157_63284;
var G__63296 = chunk__63158_63285;
var G__63297 = count__63159_63286;
var G__63298 = (i__63160_63287 + (1));
seq__63157_63284 = G__63295;
chunk__63158_63285 = G__63296;
count__63159_63286 = G__63297;
i__63160_63287 = G__63298;
continue;
} else {
var temp__5735__auto___63299 = cljs.core.seq(seq__63157_63284);
if(temp__5735__auto___63299){
var seq__63157_63300__$1 = temp__5735__auto___63299;
if(cljs.core.chunked_seq_QMARK_(seq__63157_63300__$1)){
var c__4550__auto___63301 = cljs.core.chunk_first(seq__63157_63300__$1);
var G__63302 = cljs.core.chunk_rest(seq__63157_63300__$1);
var G__63303 = c__4550__auto___63301;
var G__63304 = cljs.core.count(c__4550__auto___63301);
var G__63305 = (0);
seq__63157_63284 = G__63302;
chunk__63158_63285 = G__63303;
count__63159_63286 = G__63304;
i__63160_63287 = G__63305;
continue;
} else {
var map__63167_63306 = cljs.core.first(seq__63157_63300__$1);
var map__63167_63307__$1 = (((((!((map__63167_63306 == null))))?(((((map__63167_63306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63167_63306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63167_63306):map__63167_63306);
var w_63308 = map__63167_63307__$1;
var msg_63309__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167_63307__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167_63307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167_63307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167_63307__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63312)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63310),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63311),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63309__$1)].join(''));


var G__63313 = cljs.core.next(seq__63157_63300__$1);
var G__63314 = null;
var G__63315 = (0);
var G__63316 = (0);
seq__63157_63284 = G__63313;
chunk__63158_63285 = G__63314;
count__63159_63286 = G__63315;
i__63160_63287 = G__63316;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__63145_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63145_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__63171){
var map__63172 = p__63171;
var map__63172__$1 = (((((!((map__63172 == null))))?(((((map__63172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63172):map__63172);
var msg = map__63172__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63172__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63174 = cljs.core.seq(updates);
var chunk__63176 = null;
var count__63177 = (0);
var i__63178 = (0);
while(true){
if((i__63178 < count__63177)){
var path = chunk__63176.cljs$core$IIndexed$_nth$arity$2(null,i__63178);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63204_63317 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63207_63318 = null;
var count__63208_63319 = (0);
var i__63209_63320 = (0);
while(true){
if((i__63209_63320 < count__63208_63319)){
var node_63321 = chunk__63207_63318.cljs$core$IIndexed$_nth$arity$2(null,i__63209_63320);
var path_match_63322 = shadow.cljs.devtools.client.browser.match_paths(node_63321.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63322)){
var new_link_63323 = (function (){var G__63214 = node_63321.cloneNode(true);
G__63214.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63322),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63214;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63322], 0));

goog.dom.insertSiblingAfter(new_link_63323,node_63321);

goog.dom.removeNode(node_63321);


var G__63324 = seq__63204_63317;
var G__63325 = chunk__63207_63318;
var G__63326 = count__63208_63319;
var G__63327 = (i__63209_63320 + (1));
seq__63204_63317 = G__63324;
chunk__63207_63318 = G__63325;
count__63208_63319 = G__63326;
i__63209_63320 = G__63327;
continue;
} else {
var G__63328 = seq__63204_63317;
var G__63329 = chunk__63207_63318;
var G__63330 = count__63208_63319;
var G__63331 = (i__63209_63320 + (1));
seq__63204_63317 = G__63328;
chunk__63207_63318 = G__63329;
count__63208_63319 = G__63330;
i__63209_63320 = G__63331;
continue;
}
} else {
var temp__5735__auto___63332 = cljs.core.seq(seq__63204_63317);
if(temp__5735__auto___63332){
var seq__63204_63333__$1 = temp__5735__auto___63332;
if(cljs.core.chunked_seq_QMARK_(seq__63204_63333__$1)){
var c__4550__auto___63334 = cljs.core.chunk_first(seq__63204_63333__$1);
var G__63335 = cljs.core.chunk_rest(seq__63204_63333__$1);
var G__63336 = c__4550__auto___63334;
var G__63337 = cljs.core.count(c__4550__auto___63334);
var G__63338 = (0);
seq__63204_63317 = G__63335;
chunk__63207_63318 = G__63336;
count__63208_63319 = G__63337;
i__63209_63320 = G__63338;
continue;
} else {
var node_63339 = cljs.core.first(seq__63204_63333__$1);
var path_match_63340 = shadow.cljs.devtools.client.browser.match_paths(node_63339.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63340)){
var new_link_63341 = (function (){var G__63215 = node_63339.cloneNode(true);
G__63215.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63340),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63215;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63340], 0));

goog.dom.insertSiblingAfter(new_link_63341,node_63339);

goog.dom.removeNode(node_63339);


var G__63342 = cljs.core.next(seq__63204_63333__$1);
var G__63343 = null;
var G__63344 = (0);
var G__63345 = (0);
seq__63204_63317 = G__63342;
chunk__63207_63318 = G__63343;
count__63208_63319 = G__63344;
i__63209_63320 = G__63345;
continue;
} else {
var G__63346 = cljs.core.next(seq__63204_63333__$1);
var G__63347 = null;
var G__63348 = (0);
var G__63349 = (0);
seq__63204_63317 = G__63346;
chunk__63207_63318 = G__63347;
count__63208_63319 = G__63348;
i__63209_63320 = G__63349;
continue;
}
}
} else {
}
}
break;
}


var G__63350 = seq__63174;
var G__63351 = chunk__63176;
var G__63352 = count__63177;
var G__63353 = (i__63178 + (1));
seq__63174 = G__63350;
chunk__63176 = G__63351;
count__63177 = G__63352;
i__63178 = G__63353;
continue;
} else {
var G__63354 = seq__63174;
var G__63355 = chunk__63176;
var G__63356 = count__63177;
var G__63357 = (i__63178 + (1));
seq__63174 = G__63354;
chunk__63176 = G__63355;
count__63177 = G__63356;
i__63178 = G__63357;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63174);
if(temp__5735__auto__){
var seq__63174__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63174__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63174__$1);
var G__63358 = cljs.core.chunk_rest(seq__63174__$1);
var G__63359 = c__4550__auto__;
var G__63360 = cljs.core.count(c__4550__auto__);
var G__63361 = (0);
seq__63174 = G__63358;
chunk__63176 = G__63359;
count__63177 = G__63360;
i__63178 = G__63361;
continue;
} else {
var path = cljs.core.first(seq__63174__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63216_63362 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63219_63363 = null;
var count__63220_63364 = (0);
var i__63221_63365 = (0);
while(true){
if((i__63221_63365 < count__63220_63364)){
var node_63366 = chunk__63219_63363.cljs$core$IIndexed$_nth$arity$2(null,i__63221_63365);
var path_match_63367 = shadow.cljs.devtools.client.browser.match_paths(node_63366.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63367)){
var new_link_63368 = (function (){var G__63226 = node_63366.cloneNode(true);
G__63226.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63367),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63226;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63367], 0));

goog.dom.insertSiblingAfter(new_link_63368,node_63366);

goog.dom.removeNode(node_63366);


var G__63369 = seq__63216_63362;
var G__63370 = chunk__63219_63363;
var G__63371 = count__63220_63364;
var G__63372 = (i__63221_63365 + (1));
seq__63216_63362 = G__63369;
chunk__63219_63363 = G__63370;
count__63220_63364 = G__63371;
i__63221_63365 = G__63372;
continue;
} else {
var G__63373 = seq__63216_63362;
var G__63374 = chunk__63219_63363;
var G__63375 = count__63220_63364;
var G__63376 = (i__63221_63365 + (1));
seq__63216_63362 = G__63373;
chunk__63219_63363 = G__63374;
count__63220_63364 = G__63375;
i__63221_63365 = G__63376;
continue;
}
} else {
var temp__5735__auto___63377__$1 = cljs.core.seq(seq__63216_63362);
if(temp__5735__auto___63377__$1){
var seq__63216_63378__$1 = temp__5735__auto___63377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63216_63378__$1)){
var c__4550__auto___63379 = cljs.core.chunk_first(seq__63216_63378__$1);
var G__63380 = cljs.core.chunk_rest(seq__63216_63378__$1);
var G__63381 = c__4550__auto___63379;
var G__63382 = cljs.core.count(c__4550__auto___63379);
var G__63383 = (0);
seq__63216_63362 = G__63380;
chunk__63219_63363 = G__63381;
count__63220_63364 = G__63382;
i__63221_63365 = G__63383;
continue;
} else {
var node_63384 = cljs.core.first(seq__63216_63378__$1);
var path_match_63385 = shadow.cljs.devtools.client.browser.match_paths(node_63384.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63385)){
var new_link_63386 = (function (){var G__63227 = node_63384.cloneNode(true);
G__63227.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63385),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63227;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63385], 0));

goog.dom.insertSiblingAfter(new_link_63386,node_63384);

goog.dom.removeNode(node_63384);


var G__63387 = cljs.core.next(seq__63216_63378__$1);
var G__63388 = null;
var G__63389 = (0);
var G__63390 = (0);
seq__63216_63362 = G__63387;
chunk__63219_63363 = G__63388;
count__63220_63364 = G__63389;
i__63221_63365 = G__63390;
continue;
} else {
var G__63391 = cljs.core.next(seq__63216_63378__$1);
var G__63392 = null;
var G__63393 = (0);
var G__63394 = (0);
seq__63216_63362 = G__63391;
chunk__63219_63363 = G__63392;
count__63220_63364 = G__63393;
i__63221_63365 = G__63394;
continue;
}
}
} else {
}
}
break;
}


var G__63395 = cljs.core.next(seq__63174__$1);
var G__63396 = null;
var G__63397 = (0);
var G__63398 = (0);
seq__63174 = G__63395;
chunk__63176 = G__63396;
count__63177 = G__63397;
i__63178 = G__63398;
continue;
} else {
var G__63399 = cljs.core.next(seq__63174__$1);
var G__63400 = null;
var G__63401 = (0);
var G__63402 = (0);
seq__63174 = G__63399;
chunk__63176 = G__63400;
count__63177 = G__63401;
i__63178 = G__63402;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__63228){
var map__63229 = p__63228;
var map__63229__$1 = (((((!((map__63229 == null))))?(((((map__63229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63229):map__63229);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63229__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63229__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__63231,done){
var map__63232 = p__63231;
var map__63232__$1 = (((((!((map__63232 == null))))?(((((map__63232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63232):map__63232);
var msg = map__63232__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63234){
var map__63235 = p__63234;
var map__63235__$1 = (((((!((map__63235 == null))))?(((((map__63235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63235):map__63235);
var src = map__63235__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63235__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e63237){var e = e63237;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__63238,done){
var map__63239 = p__63238;
var map__63239__$1 = (((((!((map__63239 == null))))?(((((map__63239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63239):map__63239);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63239__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63239__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__63241){
var map__63242 = p__63241;
var map__63242__$1 = (((((!((map__63242 == null))))?(((((map__63242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63242):map__63242);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63242__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__63244,done){
var map__63245 = p__63244;
var map__63245__$1 = (((((!((map__63245 == null))))?(((((map__63245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63245):map__63245);
var msg = map__63245__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__63247_63403 = type;
var G__63247_63404__$1 = (((G__63247_63403 instanceof cljs.core.Keyword))?G__63247_63403.fqn:null);
switch (G__63247_63404__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__63248 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__63248.cljs$core$IFn$_invoke$arity$1 ? fexpr__63248.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__63248.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e63249){var e = e63249;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___63406 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___63406)){
var s_63407 = temp__5735__auto___63406;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_63407.onclose = (function (e){
return null;
}));

s_63407.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
