goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52354 = arguments.length;
switch (G__52354) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52355 = (function (f,blockable,meta52356){
this.f = f;
this.blockable = blockable;
this.meta52356 = meta52356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52357,meta52356__$1){
var self__ = this;
var _52357__$1 = this;
return (new cljs.core.async.t_cljs$core$async52355(self__.f,self__.blockable,meta52356__$1));
}));

(cljs.core.async.t_cljs$core$async52355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52357){
var self__ = this;
var _52357__$1 = this;
return self__.meta52356;
}));

(cljs.core.async.t_cljs$core$async52355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async52355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async52355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52356","meta52356",1768295011,null)], null);
}));

(cljs.core.async.t_cljs$core$async52355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52355");

(cljs.core.async.t_cljs$core$async52355.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52355.
 */
cljs.core.async.__GT_t_cljs$core$async52355 = (function cljs$core$async$__GT_t_cljs$core$async52355(f__$1,blockable__$1,meta52356){
return (new cljs.core.async.t_cljs$core$async52355(f__$1,blockable__$1,meta52356));
});

}

return (new cljs.core.async.t_cljs$core$async52355(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__52371 = arguments.length;
switch (G__52371) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__52376 = arguments.length;
switch (G__52376) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52382 = arguments.length;
switch (G__52382) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_54406 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54406) : fn1.call(null,val_54406));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54406) : fn1.call(null,val_54406));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52384 = arguments.length;
switch (G__52384) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___54412 = n;
var x_54413 = (0);
while(true){
if((x_54413 < n__4607__auto___54412)){
(a[x_54413] = x_54413);

var G__54414 = (x_54413 + (1));
x_54413 = G__54414;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52389 = (function (flag,meta52390){
this.flag = flag;
this.meta52390 = meta52390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52391,meta52390__$1){
var self__ = this;
var _52391__$1 = this;
return (new cljs.core.async.t_cljs$core$async52389(self__.flag,meta52390__$1));
}));

(cljs.core.async.t_cljs$core$async52389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52391){
var self__ = this;
var _52391__$1 = this;
return self__.meta52390;
}));

(cljs.core.async.t_cljs$core$async52389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async52389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52390","meta52390",-1634511764,null)], null);
}));

(cljs.core.async.t_cljs$core$async52389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52389");

(cljs.core.async.t_cljs$core$async52389.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52389.
 */
cljs.core.async.__GT_t_cljs$core$async52389 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52389(flag__$1,meta52390){
return (new cljs.core.async.t_cljs$core$async52389(flag__$1,meta52390));
});

}

return (new cljs.core.async.t_cljs$core$async52389(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52394 = (function (flag,cb,meta52395){
this.flag = flag;
this.cb = cb;
this.meta52395 = meta52395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52396,meta52395__$1){
var self__ = this;
var _52396__$1 = this;
return (new cljs.core.async.t_cljs$core$async52394(self__.flag,self__.cb,meta52395__$1));
}));

(cljs.core.async.t_cljs$core$async52394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52396){
var self__ = this;
var _52396__$1 = this;
return self__.meta52395;
}));

(cljs.core.async.t_cljs$core$async52394.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async52394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52395","meta52395",-93944122,null)], null);
}));

(cljs.core.async.t_cljs$core$async52394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52394");

(cljs.core.async.t_cljs$core$async52394.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52394.
 */
cljs.core.async.__GT_t_cljs$core$async52394 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52394(flag__$1,cb__$1,meta52395){
return (new cljs.core.async.t_cljs$core$async52394(flag__$1,cb__$1,meta52395));
});

}

return (new cljs.core.async.t_cljs$core$async52394(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52398_SHARP_){
var G__52401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52398_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52401) : fret.call(null,G__52401));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52399_SHARP_){
var G__52403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52399_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52403) : fret.call(null,G__52403));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__54429 = (i + (1));
i = G__54429;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54432 = arguments.length;
var i__4731__auto___54433 = (0);
while(true){
if((i__4731__auto___54433 < len__4730__auto___54432)){
args__4736__auto__.push((arguments[i__4731__auto___54433]));

var G__54436 = (i__4731__auto___54433 + (1));
i__4731__auto___54433 = G__54436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52410){
var map__52411 = p__52410;
var map__52411__$1 = (((((!((map__52411 == null))))?(((((map__52411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52411):map__52411);
var opts = map__52411__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52406){
var G__52407 = cljs.core.first(seq52406);
var seq52406__$1 = cljs.core.next(seq52406);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52407,seq52406__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52417 = arguments.length;
switch (G__52417) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__52287__auto___54444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52476){
var state_val_52477 = (state_52476[(1)]);
if((state_val_52477 === (7))){
var inst_52470 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52487_54447 = state_52476__$1;
(statearr_52487_54447[(2)] = inst_52470);

(statearr_52487_54447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (1))){
var state_52476__$1 = state_52476;
var statearr_52488_54448 = state_52476__$1;
(statearr_52488_54448[(2)] = null);

(statearr_52488_54448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (4))){
var inst_52439 = (state_52476[(7)]);
var inst_52439__$1 = (state_52476[(2)]);
var inst_52451 = (inst_52439__$1 == null);
var state_52476__$1 = (function (){var statearr_52489 = state_52476;
(statearr_52489[(7)] = inst_52439__$1);

return statearr_52489;
})();
if(cljs.core.truth_(inst_52451)){
var statearr_52491_54450 = state_52476__$1;
(statearr_52491_54450[(1)] = (5));

} else {
var statearr_52492_54451 = state_52476__$1;
(statearr_52492_54451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (13))){
var state_52476__$1 = state_52476;
var statearr_52494_54453 = state_52476__$1;
(statearr_52494_54453[(2)] = null);

(statearr_52494_54453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (6))){
var inst_52439 = (state_52476[(7)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52476__$1,(11),to,inst_52439);
} else {
if((state_val_52477 === (3))){
var inst_52472 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52476__$1,inst_52472);
} else {
if((state_val_52477 === (12))){
var state_52476__$1 = state_52476;
var statearr_52496_54456 = state_52476__$1;
(statearr_52496_54456[(2)] = null);

(statearr_52496_54456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (2))){
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52476__$1,(4),from);
} else {
if((state_val_52477 === (11))){
var inst_52462 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
if(cljs.core.truth_(inst_52462)){
var statearr_52498_54459 = state_52476__$1;
(statearr_52498_54459[(1)] = (12));

} else {
var statearr_52499_54460 = state_52476__$1;
(statearr_52499_54460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (9))){
var state_52476__$1 = state_52476;
var statearr_52500_54461 = state_52476__$1;
(statearr_52500_54461[(2)] = null);

(statearr_52500_54461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (5))){
var state_52476__$1 = state_52476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52501_54462 = state_52476__$1;
(statearr_52501_54462[(1)] = (8));

} else {
var statearr_52502_54463 = state_52476__$1;
(statearr_52502_54463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (14))){
var inst_52468 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52503_54464 = state_52476__$1;
(statearr_52503_54464[(2)] = inst_52468);

(statearr_52503_54464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (10))){
var inst_52459 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52504_54465 = state_52476__$1;
(statearr_52504_54465[(2)] = inst_52459);

(statearr_52504_54465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (8))){
var inst_52455 = cljs.core.async.close_BANG_(to);
var state_52476__$1 = state_52476;
var statearr_52505_54466 = state_52476__$1;
(statearr_52505_54466[(2)] = inst_52455);

(statearr_52505_54466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_52506 = [null,null,null,null,null,null,null,null];
(statearr_52506[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_52506[(1)] = (1));

return statearr_52506;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_52476){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52476);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52507){var ex__51242__auto__ = e52507;
var statearr_52508_54467 = state_52476;
(statearr_52508_54467[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52476[(4)]))){
var statearr_52509_54468 = state_52476;
(statearr_52509_54468[(1)] = cljs.core.first((state_52476[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54471 = state_52476;
state_52476 = G__54471;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_52476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_52476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52510 = f__52288__auto__();
(statearr_52510[(6)] = c__52287__auto___54444);

return statearr_52510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__52515){
var vec__52516 = p__52515;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52516,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52516,(1),null);
var job = vec__52516;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__52287__auto___54474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52523){
var state_val_52524 = (state_52523[(1)]);
if((state_val_52524 === (1))){
var state_52523__$1 = state_52523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52523__$1,(2),res,v);
} else {
if((state_val_52524 === (2))){
var inst_52520 = (state_52523[(2)]);
var inst_52521 = cljs.core.async.close_BANG_(res);
var state_52523__$1 = (function (){var statearr_52525 = state_52523;
(statearr_52525[(7)] = inst_52520);

return statearr_52525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52523__$1,inst_52521);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0 = (function (){
var statearr_52526 = [null,null,null,null,null,null,null,null];
(statearr_52526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__);

(statearr_52526[(1)] = (1));

return statearr_52526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1 = (function (state_52523){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52523);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52527){var ex__51242__auto__ = e52527;
var statearr_52528_54482 = state_52523;
(statearr_52528_54482[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52523[(4)]))){
var statearr_52529_54483 = state_52523;
(statearr_52529_54483[(1)] = cljs.core.first((state_52523[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54484 = state_52523;
state_52523 = G__54484;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = function(state_52523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1.call(this,state_52523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52530 = f__52288__auto__();
(statearr_52530[(6)] = c__52287__auto___54474);

return statearr_52530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__52531){
var vec__52536 = p__52531;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52536,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52536,(1),null);
var job = vec__52536;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___54487 = n;
var __54488 = (0);
while(true){
if((__54488 < n__4607__auto___54487)){
var G__52540_54489 = type;
var G__52540_54490__$1 = (((G__52540_54489 instanceof cljs.core.Keyword))?G__52540_54489.fqn:null);
switch (G__52540_54490__$1) {
case "compute":
var c__52287__auto___54494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54488,c__52287__auto___54494,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async){
return (function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = ((function (__54488,c__52287__auto___54494,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async){
return (function (state_52553){
var state_val_52554 = (state_52553[(1)]);
if((state_val_52554 === (1))){
var state_52553__$1 = state_52553;
var statearr_52556_54497 = state_52553__$1;
(statearr_52556_54497[(2)] = null);

(statearr_52556_54497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (2))){
var state_52553__$1 = state_52553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52553__$1,(4),jobs);
} else {
if((state_val_52554 === (3))){
var inst_52551 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52553__$1,inst_52551);
} else {
if((state_val_52554 === (4))){
var inst_52543 = (state_52553[(2)]);
var inst_52544 = process(inst_52543);
var state_52553__$1 = state_52553;
if(cljs.core.truth_(inst_52544)){
var statearr_52561_54500 = state_52553__$1;
(statearr_52561_54500[(1)] = (5));

} else {
var statearr_52562_54501 = state_52553__$1;
(statearr_52562_54501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (5))){
var state_52553__$1 = state_52553;
var statearr_52563_54502 = state_52553__$1;
(statearr_52563_54502[(2)] = null);

(statearr_52563_54502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (6))){
var state_52553__$1 = state_52553;
var statearr_52564_54503 = state_52553__$1;
(statearr_52564_54503[(2)] = null);

(statearr_52564_54503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (7))){
var inst_52549 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
var statearr_52565_54504 = state_52553__$1;
(statearr_52565_54504[(2)] = inst_52549);

(statearr_52565_54504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54488,c__52287__auto___54494,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async))
;
return ((function (__54488,switch__51238__auto__,c__52287__auto___54494,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0 = (function (){
var statearr_52566 = [null,null,null,null,null,null,null];
(statearr_52566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__);

(statearr_52566[(1)] = (1));

return statearr_52566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1 = (function (state_52553){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52553);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52567){var ex__51242__auto__ = e52567;
var statearr_52568_54509 = state_52553;
(statearr_52568_54509[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52553[(4)]))){
var statearr_52569_54510 = state_52553;
(statearr_52569_54510[(1)] = cljs.core.first((state_52553[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54513 = state_52553;
state_52553 = G__54513;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = function(state_52553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1.call(this,state_52553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__;
})()
;})(__54488,switch__51238__auto__,c__52287__auto___54494,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async))
})();
var state__52289__auto__ = (function (){var statearr_52570 = f__52288__auto__();
(statearr_52570[(6)] = c__52287__auto___54494);

return statearr_52570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
});})(__54488,c__52287__auto___54494,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async))
);


break;
case "async":
var c__52287__auto___54516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54488,c__52287__auto___54516,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async){
return (function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = ((function (__54488,c__52287__auto___54516,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async){
return (function (state_52583){
var state_val_52584 = (state_52583[(1)]);
if((state_val_52584 === (1))){
var state_52583__$1 = state_52583;
var statearr_52585_54517 = state_52583__$1;
(statearr_52585_54517[(2)] = null);

(statearr_52585_54517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (2))){
var state_52583__$1 = state_52583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52583__$1,(4),jobs);
} else {
if((state_val_52584 === (3))){
var inst_52581 = (state_52583[(2)]);
var state_52583__$1 = state_52583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52583__$1,inst_52581);
} else {
if((state_val_52584 === (4))){
var inst_52573 = (state_52583[(2)]);
var inst_52574 = async(inst_52573);
var state_52583__$1 = state_52583;
if(cljs.core.truth_(inst_52574)){
var statearr_52589_54522 = state_52583__$1;
(statearr_52589_54522[(1)] = (5));

} else {
var statearr_52590_54523 = state_52583__$1;
(statearr_52590_54523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (5))){
var state_52583__$1 = state_52583;
var statearr_52591_54524 = state_52583__$1;
(statearr_52591_54524[(2)] = null);

(statearr_52591_54524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (6))){
var state_52583__$1 = state_52583;
var statearr_52592_54525 = state_52583__$1;
(statearr_52592_54525[(2)] = null);

(statearr_52592_54525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (7))){
var inst_52579 = (state_52583[(2)]);
var state_52583__$1 = state_52583;
var statearr_52593_54526 = state_52583__$1;
(statearr_52593_54526[(2)] = inst_52579);

(statearr_52593_54526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54488,c__52287__auto___54516,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async))
;
return ((function (__54488,switch__51238__auto__,c__52287__auto___54516,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0 = (function (){
var statearr_52594 = [null,null,null,null,null,null,null];
(statearr_52594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__);

(statearr_52594[(1)] = (1));

return statearr_52594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1 = (function (state_52583){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52583);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52595){var ex__51242__auto__ = e52595;
var statearr_52596_54529 = state_52583;
(statearr_52596_54529[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52583[(4)]))){
var statearr_52597_54530 = state_52583;
(statearr_52597_54530[(1)] = cljs.core.first((state_52583[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54531 = state_52583;
state_52583 = G__54531;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = function(state_52583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1.call(this,state_52583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__;
})()
;})(__54488,switch__51238__auto__,c__52287__auto___54516,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async))
})();
var state__52289__auto__ = (function (){var statearr_52599 = f__52288__auto__();
(statearr_52599[(6)] = c__52287__auto___54516);

return statearr_52599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
});})(__54488,c__52287__auto___54516,G__52540_54489,G__52540_54490__$1,n__4607__auto___54487,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52540_54490__$1)].join('')));

}

var G__54532 = (__54488 + (1));
__54488 = G__54532;
continue;
} else {
}
break;
}

var c__52287__auto___54533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52627){
var state_val_52628 = (state_52627[(1)]);
if((state_val_52628 === (7))){
var inst_52622 = (state_52627[(2)]);
var state_52627__$1 = state_52627;
var statearr_52633_54534 = state_52627__$1;
(statearr_52633_54534[(2)] = inst_52622);

(statearr_52633_54534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52628 === (1))){
var state_52627__$1 = state_52627;
var statearr_52634_54535 = state_52627__$1;
(statearr_52634_54535[(2)] = null);

(statearr_52634_54535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52628 === (4))){
var inst_52606 = (state_52627[(7)]);
var inst_52606__$1 = (state_52627[(2)]);
var inst_52607 = (inst_52606__$1 == null);
var state_52627__$1 = (function (){var statearr_52635 = state_52627;
(statearr_52635[(7)] = inst_52606__$1);

return statearr_52635;
})();
if(cljs.core.truth_(inst_52607)){
var statearr_52636_54537 = state_52627__$1;
(statearr_52636_54537[(1)] = (5));

} else {
var statearr_52637_54538 = state_52627__$1;
(statearr_52637_54538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52628 === (6))){
var inst_52606 = (state_52627[(7)]);
var inst_52612 = (state_52627[(8)]);
var inst_52612__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52614 = [inst_52606,inst_52612__$1];
var inst_52615 = (new cljs.core.PersistentVector(null,2,(5),inst_52613,inst_52614,null));
var state_52627__$1 = (function (){var statearr_52638 = state_52627;
(statearr_52638[(8)] = inst_52612__$1);

return statearr_52638;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52627__$1,(8),jobs,inst_52615);
} else {
if((state_val_52628 === (3))){
var inst_52624 = (state_52627[(2)]);
var state_52627__$1 = state_52627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52627__$1,inst_52624);
} else {
if((state_val_52628 === (2))){
var state_52627__$1 = state_52627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52627__$1,(4),from);
} else {
if((state_val_52628 === (9))){
var inst_52619 = (state_52627[(2)]);
var state_52627__$1 = (function (){var statearr_52639 = state_52627;
(statearr_52639[(9)] = inst_52619);

return statearr_52639;
})();
var statearr_52640_54542 = state_52627__$1;
(statearr_52640_54542[(2)] = null);

(statearr_52640_54542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52628 === (5))){
var inst_52609 = cljs.core.async.close_BANG_(jobs);
var state_52627__$1 = state_52627;
var statearr_52641_54544 = state_52627__$1;
(statearr_52641_54544[(2)] = inst_52609);

(statearr_52641_54544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52628 === (8))){
var inst_52612 = (state_52627[(8)]);
var inst_52617 = (state_52627[(2)]);
var state_52627__$1 = (function (){var statearr_52642 = state_52627;
(statearr_52642[(10)] = inst_52617);

return statearr_52642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52627__$1,(9),results,inst_52612);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0 = (function (){
var statearr_52643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__);

(statearr_52643[(1)] = (1));

return statearr_52643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1 = (function (state_52627){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52627);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52644){var ex__51242__auto__ = e52644;
var statearr_52645_54547 = state_52627;
(statearr_52645_54547[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52627[(4)]))){
var statearr_52648_54548 = state_52627;
(statearr_52648_54548[(1)] = cljs.core.first((state_52627[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54549 = state_52627;
state_52627 = G__54549;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = function(state_52627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1.call(this,state_52627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52650 = f__52288__auto__();
(statearr_52650[(6)] = c__52287__auto___54533);

return statearr_52650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


var c__52287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52689){
var state_val_52690 = (state_52689[(1)]);
if((state_val_52690 === (7))){
var inst_52684 = (state_52689[(2)]);
var state_52689__$1 = state_52689;
var statearr_52692_54550 = state_52689__$1;
(statearr_52692_54550[(2)] = inst_52684);

(statearr_52692_54550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (20))){
var state_52689__$1 = state_52689;
var statearr_52693_54551 = state_52689__$1;
(statearr_52693_54551[(2)] = null);

(statearr_52693_54551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (1))){
var state_52689__$1 = state_52689;
var statearr_52695_54552 = state_52689__$1;
(statearr_52695_54552[(2)] = null);

(statearr_52695_54552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (4))){
var inst_52653 = (state_52689[(7)]);
var inst_52653__$1 = (state_52689[(2)]);
var inst_52654 = (inst_52653__$1 == null);
var state_52689__$1 = (function (){var statearr_52697 = state_52689;
(statearr_52697[(7)] = inst_52653__$1);

return statearr_52697;
})();
if(cljs.core.truth_(inst_52654)){
var statearr_52698_54553 = state_52689__$1;
(statearr_52698_54553[(1)] = (5));

} else {
var statearr_52699_54554 = state_52689__$1;
(statearr_52699_54554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (15))){
var inst_52666 = (state_52689[(8)]);
var state_52689__$1 = state_52689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52689__$1,(18),to,inst_52666);
} else {
if((state_val_52690 === (21))){
var inst_52679 = (state_52689[(2)]);
var state_52689__$1 = state_52689;
var statearr_52700_54555 = state_52689__$1;
(statearr_52700_54555[(2)] = inst_52679);

(statearr_52700_54555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (13))){
var inst_52681 = (state_52689[(2)]);
var state_52689__$1 = (function (){var statearr_52701 = state_52689;
(statearr_52701[(9)] = inst_52681);

return statearr_52701;
})();
var statearr_52702_54556 = state_52689__$1;
(statearr_52702_54556[(2)] = null);

(statearr_52702_54556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (6))){
var inst_52653 = (state_52689[(7)]);
var state_52689__$1 = state_52689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52689__$1,(11),inst_52653);
} else {
if((state_val_52690 === (17))){
var inst_52674 = (state_52689[(2)]);
var state_52689__$1 = state_52689;
if(cljs.core.truth_(inst_52674)){
var statearr_52703_54557 = state_52689__$1;
(statearr_52703_54557[(1)] = (19));

} else {
var statearr_52704_54558 = state_52689__$1;
(statearr_52704_54558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (3))){
var inst_52686 = (state_52689[(2)]);
var state_52689__$1 = state_52689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52689__$1,inst_52686);
} else {
if((state_val_52690 === (12))){
var inst_52663 = (state_52689[(10)]);
var state_52689__$1 = state_52689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52689__$1,(14),inst_52663);
} else {
if((state_val_52690 === (2))){
var state_52689__$1 = state_52689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52689__$1,(4),results);
} else {
if((state_val_52690 === (19))){
var state_52689__$1 = state_52689;
var statearr_52706_54561 = state_52689__$1;
(statearr_52706_54561[(2)] = null);

(statearr_52706_54561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (11))){
var inst_52663 = (state_52689[(2)]);
var state_52689__$1 = (function (){var statearr_52713 = state_52689;
(statearr_52713[(10)] = inst_52663);

return statearr_52713;
})();
var statearr_52714_54562 = state_52689__$1;
(statearr_52714_54562[(2)] = null);

(statearr_52714_54562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (9))){
var state_52689__$1 = state_52689;
var statearr_52717_54563 = state_52689__$1;
(statearr_52717_54563[(2)] = null);

(statearr_52717_54563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (5))){
var state_52689__$1 = state_52689;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52718_54564 = state_52689__$1;
(statearr_52718_54564[(1)] = (8));

} else {
var statearr_52719_54565 = state_52689__$1;
(statearr_52719_54565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (14))){
var inst_52666 = (state_52689[(8)]);
var inst_52666__$1 = (state_52689[(2)]);
var inst_52667 = (inst_52666__$1 == null);
var inst_52668 = cljs.core.not(inst_52667);
var state_52689__$1 = (function (){var statearr_52724 = state_52689;
(statearr_52724[(8)] = inst_52666__$1);

return statearr_52724;
})();
if(inst_52668){
var statearr_52725_54569 = state_52689__$1;
(statearr_52725_54569[(1)] = (15));

} else {
var statearr_52726_54570 = state_52689__$1;
(statearr_52726_54570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (16))){
var state_52689__$1 = state_52689;
var statearr_52727_54571 = state_52689__$1;
(statearr_52727_54571[(2)] = false);

(statearr_52727_54571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (10))){
var inst_52660 = (state_52689[(2)]);
var state_52689__$1 = state_52689;
var statearr_52728_54573 = state_52689__$1;
(statearr_52728_54573[(2)] = inst_52660);

(statearr_52728_54573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (18))){
var inst_52671 = (state_52689[(2)]);
var state_52689__$1 = state_52689;
var statearr_52733_54574 = state_52689__$1;
(statearr_52733_54574[(2)] = inst_52671);

(statearr_52733_54574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52690 === (8))){
var inst_52657 = cljs.core.async.close_BANG_(to);
var state_52689__$1 = state_52689;
var statearr_52734_54576 = state_52689__$1;
(statearr_52734_54576[(2)] = inst_52657);

(statearr_52734_54576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0 = (function (){
var statearr_52735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__);

(statearr_52735[(1)] = (1));

return statearr_52735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1 = (function (state_52689){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52689);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52739){var ex__51242__auto__ = e52739;
var statearr_52740_54584 = state_52689;
(statearr_52740_54584[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52689[(4)]))){
var statearr_52741_54586 = state_52689;
(statearr_52741_54586[(1)] = cljs.core.first((state_52689[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54587 = state_52689;
state_52689 = G__54587;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__ = function(state_52689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1.call(this,state_52689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52745 = f__52288__auto__();
(statearr_52745[(6)] = c__52287__auto__);

return statearr_52745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));

return c__52287__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52754 = arguments.length;
switch (G__52754) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52769 = arguments.length;
switch (G__52769) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52786 = arguments.length;
switch (G__52786) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__52287__auto___54599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52812){
var state_val_52813 = (state_52812[(1)]);
if((state_val_52813 === (7))){
var inst_52808 = (state_52812[(2)]);
var state_52812__$1 = state_52812;
var statearr_52814_54600 = state_52812__$1;
(statearr_52814_54600[(2)] = inst_52808);

(statearr_52814_54600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (1))){
var state_52812__$1 = state_52812;
var statearr_52816_54602 = state_52812__$1;
(statearr_52816_54602[(2)] = null);

(statearr_52816_54602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (4))){
var inst_52789 = (state_52812[(7)]);
var inst_52789__$1 = (state_52812[(2)]);
var inst_52790 = (inst_52789__$1 == null);
var state_52812__$1 = (function (){var statearr_52824 = state_52812;
(statearr_52824[(7)] = inst_52789__$1);

return statearr_52824;
})();
if(cljs.core.truth_(inst_52790)){
var statearr_52825_54606 = state_52812__$1;
(statearr_52825_54606[(1)] = (5));

} else {
var statearr_52826_54607 = state_52812__$1;
(statearr_52826_54607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (13))){
var state_52812__$1 = state_52812;
var statearr_52828_54608 = state_52812__$1;
(statearr_52828_54608[(2)] = null);

(statearr_52828_54608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (6))){
var inst_52789 = (state_52812[(7)]);
var inst_52795 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52789) : p.call(null,inst_52789));
var state_52812__$1 = state_52812;
if(cljs.core.truth_(inst_52795)){
var statearr_52840_54614 = state_52812__$1;
(statearr_52840_54614[(1)] = (9));

} else {
var statearr_52841_54615 = state_52812__$1;
(statearr_52841_54615[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (3))){
var inst_52810 = (state_52812[(2)]);
var state_52812__$1 = state_52812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52812__$1,inst_52810);
} else {
if((state_val_52813 === (12))){
var state_52812__$1 = state_52812;
var statearr_52842_54619 = state_52812__$1;
(statearr_52842_54619[(2)] = null);

(statearr_52842_54619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (2))){
var state_52812__$1 = state_52812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52812__$1,(4),ch);
} else {
if((state_val_52813 === (11))){
var inst_52789 = (state_52812[(7)]);
var inst_52799 = (state_52812[(2)]);
var state_52812__$1 = state_52812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52812__$1,(8),inst_52799,inst_52789);
} else {
if((state_val_52813 === (9))){
var state_52812__$1 = state_52812;
var statearr_52843_54621 = state_52812__$1;
(statearr_52843_54621[(2)] = tc);

(statearr_52843_54621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (5))){
var inst_52792 = cljs.core.async.close_BANG_(tc);
var inst_52793 = cljs.core.async.close_BANG_(fc);
var state_52812__$1 = (function (){var statearr_52844 = state_52812;
(statearr_52844[(8)] = inst_52792);

return statearr_52844;
})();
var statearr_52845_54623 = state_52812__$1;
(statearr_52845_54623[(2)] = inst_52793);

(statearr_52845_54623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (14))){
var inst_52806 = (state_52812[(2)]);
var state_52812__$1 = state_52812;
var statearr_52846_54625 = state_52812__$1;
(statearr_52846_54625[(2)] = inst_52806);

(statearr_52846_54625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (10))){
var state_52812__$1 = state_52812;
var statearr_52847_54627 = state_52812__$1;
(statearr_52847_54627[(2)] = fc);

(statearr_52847_54627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52813 === (8))){
var inst_52801 = (state_52812[(2)]);
var state_52812__$1 = state_52812;
if(cljs.core.truth_(inst_52801)){
var statearr_52848_54628 = state_52812__$1;
(statearr_52848_54628[(1)] = (12));

} else {
var statearr_52849_54629 = state_52812__$1;
(statearr_52849_54629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_52850 = [null,null,null,null,null,null,null,null,null];
(statearr_52850[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_52850[(1)] = (1));

return statearr_52850;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_52812){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52812);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52851){var ex__51242__auto__ = e52851;
var statearr_52855_54632 = state_52812;
(statearr_52855_54632[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52812[(4)]))){
var statearr_52856_54633 = state_52812;
(statearr_52856_54633[(1)] = cljs.core.first((state_52812[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54634 = state_52812;
state_52812 = G__54634;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_52812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_52812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52857 = f__52288__auto__();
(statearr_52857[(6)] = c__52287__auto___54599);

return statearr_52857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__52287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52880){
var state_val_52881 = (state_52880[(1)]);
if((state_val_52881 === (7))){
var inst_52876 = (state_52880[(2)]);
var state_52880__$1 = state_52880;
var statearr_52885_54637 = state_52880__$1;
(statearr_52885_54637[(2)] = inst_52876);

(statearr_52885_54637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (1))){
var inst_52858 = init;
var inst_52859 = inst_52858;
var state_52880__$1 = (function (){var statearr_52888 = state_52880;
(statearr_52888[(7)] = inst_52859);

return statearr_52888;
})();
var statearr_52889_54638 = state_52880__$1;
(statearr_52889_54638[(2)] = null);

(statearr_52889_54638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (4))){
var inst_52863 = (state_52880[(8)]);
var inst_52863__$1 = (state_52880[(2)]);
var inst_52864 = (inst_52863__$1 == null);
var state_52880__$1 = (function (){var statearr_52890 = state_52880;
(statearr_52890[(8)] = inst_52863__$1);

return statearr_52890;
})();
if(cljs.core.truth_(inst_52864)){
var statearr_52891_54642 = state_52880__$1;
(statearr_52891_54642[(1)] = (5));

} else {
var statearr_52892_54643 = state_52880__$1;
(statearr_52892_54643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (6))){
var inst_52859 = (state_52880[(7)]);
var inst_52863 = (state_52880[(8)]);
var inst_52867 = (state_52880[(9)]);
var inst_52867__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52859,inst_52863) : f.call(null,inst_52859,inst_52863));
var inst_52868 = cljs.core.reduced_QMARK_(inst_52867__$1);
var state_52880__$1 = (function (){var statearr_52893 = state_52880;
(statearr_52893[(9)] = inst_52867__$1);

return statearr_52893;
})();
if(inst_52868){
var statearr_52894_54645 = state_52880__$1;
(statearr_52894_54645[(1)] = (8));

} else {
var statearr_52895_54647 = state_52880__$1;
(statearr_52895_54647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (3))){
var inst_52878 = (state_52880[(2)]);
var state_52880__$1 = state_52880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52880__$1,inst_52878);
} else {
if((state_val_52881 === (2))){
var state_52880__$1 = state_52880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52880__$1,(4),ch);
} else {
if((state_val_52881 === (9))){
var inst_52867 = (state_52880[(9)]);
var inst_52859 = inst_52867;
var state_52880__$1 = (function (){var statearr_52896 = state_52880;
(statearr_52896[(7)] = inst_52859);

return statearr_52896;
})();
var statearr_52897_54652 = state_52880__$1;
(statearr_52897_54652[(2)] = null);

(statearr_52897_54652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (5))){
var inst_52859 = (state_52880[(7)]);
var state_52880__$1 = state_52880;
var statearr_52899_54656 = state_52880__$1;
(statearr_52899_54656[(2)] = inst_52859);

(statearr_52899_54656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (10))){
var inst_52874 = (state_52880[(2)]);
var state_52880__$1 = state_52880;
var statearr_52900_54657 = state_52880__$1;
(statearr_52900_54657[(2)] = inst_52874);

(statearr_52900_54657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52881 === (8))){
var inst_52867 = (state_52880[(9)]);
var inst_52870 = cljs.core.deref(inst_52867);
var state_52880__$1 = state_52880;
var statearr_52902_54658 = state_52880__$1;
(statearr_52902_54658[(2)] = inst_52870);

(statearr_52902_54658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__51239__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51239__auto____0 = (function (){
var statearr_52903 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52903[(0)] = cljs$core$async$reduce_$_state_machine__51239__auto__);

(statearr_52903[(1)] = (1));

return statearr_52903;
});
var cljs$core$async$reduce_$_state_machine__51239__auto____1 = (function (state_52880){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52880);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52904){var ex__51242__auto__ = e52904;
var statearr_52905_54665 = state_52880;
(statearr_52905_54665[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52880[(4)]))){
var statearr_52906_54666 = state_52880;
(statearr_52906_54666[(1)] = cljs.core.first((state_52880[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54667 = state_52880;
state_52880 = G__54667;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51239__auto__ = function(state_52880){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51239__auto____1.call(this,state_52880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51239__auto____0;
cljs$core$async$reduce_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51239__auto____1;
return cljs$core$async$reduce_$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52907 = f__52288__auto__();
(statearr_52907[(6)] = c__52287__auto__);

return statearr_52907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));

return c__52287__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__52287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52913){
var state_val_52914 = (state_52913[(1)]);
if((state_val_52914 === (1))){
var inst_52908 = cljs.core.async.reduce(f__$1,init,ch);
var state_52913__$1 = state_52913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52913__$1,(2),inst_52908);
} else {
if((state_val_52914 === (2))){
var inst_52910 = (state_52913[(2)]);
var inst_52911 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52910) : f__$1.call(null,inst_52910));
var state_52913__$1 = state_52913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52913__$1,inst_52911);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__51239__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51239__auto____0 = (function (){
var statearr_52915 = [null,null,null,null,null,null,null];
(statearr_52915[(0)] = cljs$core$async$transduce_$_state_machine__51239__auto__);

(statearr_52915[(1)] = (1));

return statearr_52915;
});
var cljs$core$async$transduce_$_state_machine__51239__auto____1 = (function (state_52913){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52913);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52916){var ex__51242__auto__ = e52916;
var statearr_52917_54676 = state_52913;
(statearr_52917_54676[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52913[(4)]))){
var statearr_52918_54677 = state_52913;
(statearr_52918_54677[(1)] = cljs.core.first((state_52913[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54678 = state_52913;
state_52913 = G__54678;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51239__auto__ = function(state_52913){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51239__auto____1.call(this,state_52913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51239__auto____0;
cljs$core$async$transduce_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51239__auto____1;
return cljs$core$async$transduce_$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52920 = f__52288__auto__();
(statearr_52920[(6)] = c__52287__auto__);

return statearr_52920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));

return c__52287__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52923 = arguments.length;
switch (G__52923) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__52287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_52950){
var state_val_52951 = (state_52950[(1)]);
if((state_val_52951 === (7))){
var inst_52932 = (state_52950[(2)]);
var state_52950__$1 = state_52950;
var statearr_52956_54690 = state_52950__$1;
(statearr_52956_54690[(2)] = inst_52932);

(statearr_52956_54690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (1))){
var inst_52926 = cljs.core.seq(coll);
var inst_52927 = inst_52926;
var state_52950__$1 = (function (){var statearr_52959 = state_52950;
(statearr_52959[(7)] = inst_52927);

return statearr_52959;
})();
var statearr_52960_54691 = state_52950__$1;
(statearr_52960_54691[(2)] = null);

(statearr_52960_54691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (4))){
var inst_52927 = (state_52950[(7)]);
var inst_52930 = cljs.core.first(inst_52927);
var state_52950__$1 = state_52950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52950__$1,(7),ch,inst_52930);
} else {
if((state_val_52951 === (13))){
var inst_52944 = (state_52950[(2)]);
var state_52950__$1 = state_52950;
var statearr_52961_54695 = state_52950__$1;
(statearr_52961_54695[(2)] = inst_52944);

(statearr_52961_54695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (6))){
var inst_52935 = (state_52950[(2)]);
var state_52950__$1 = state_52950;
if(cljs.core.truth_(inst_52935)){
var statearr_52962_54696 = state_52950__$1;
(statearr_52962_54696[(1)] = (8));

} else {
var statearr_52963_54698 = state_52950__$1;
(statearr_52963_54698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (3))){
var inst_52948 = (state_52950[(2)]);
var state_52950__$1 = state_52950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52950__$1,inst_52948);
} else {
if((state_val_52951 === (12))){
var state_52950__$1 = state_52950;
var statearr_52964_54701 = state_52950__$1;
(statearr_52964_54701[(2)] = null);

(statearr_52964_54701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (2))){
var inst_52927 = (state_52950[(7)]);
var state_52950__$1 = state_52950;
if(cljs.core.truth_(inst_52927)){
var statearr_52965_54702 = state_52950__$1;
(statearr_52965_54702[(1)] = (4));

} else {
var statearr_52970_54703 = state_52950__$1;
(statearr_52970_54703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (11))){
var inst_52941 = cljs.core.async.close_BANG_(ch);
var state_52950__$1 = state_52950;
var statearr_52971_54704 = state_52950__$1;
(statearr_52971_54704[(2)] = inst_52941);

(statearr_52971_54704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (9))){
var state_52950__$1 = state_52950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52972_54715 = state_52950__$1;
(statearr_52972_54715[(1)] = (11));

} else {
var statearr_52973_54716 = state_52950__$1;
(statearr_52973_54716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (5))){
var inst_52927 = (state_52950[(7)]);
var state_52950__$1 = state_52950;
var statearr_52978_54717 = state_52950__$1;
(statearr_52978_54717[(2)] = inst_52927);

(statearr_52978_54717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (10))){
var inst_52946 = (state_52950[(2)]);
var state_52950__$1 = state_52950;
var statearr_52979_54718 = state_52950__$1;
(statearr_52979_54718[(2)] = inst_52946);

(statearr_52979_54718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52951 === (8))){
var inst_52927 = (state_52950[(7)]);
var inst_52937 = cljs.core.next(inst_52927);
var inst_52927__$1 = inst_52937;
var state_52950__$1 = (function (){var statearr_52980 = state_52950;
(statearr_52980[(7)] = inst_52927__$1);

return statearr_52980;
})();
var statearr_52981_54720 = state_52950__$1;
(statearr_52981_54720[(2)] = null);

(statearr_52981_54720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_52982 = [null,null,null,null,null,null,null,null];
(statearr_52982[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_52982[(1)] = (1));

return statearr_52982;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_52950){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_52950);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e52983){var ex__51242__auto__ = e52983;
var statearr_52984_54722 = state_52950;
(statearr_52984_54722[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_52950[(4)]))){
var statearr_52985_54723 = state_52950;
(statearr_52985_54723[(1)] = cljs.core.first((state_52950[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54724 = state_52950;
state_52950 = G__54724;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_52950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_52950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_52990 = f__52288__auto__();
(statearr_52990[(6)] = c__52287__auto__);

return statearr_52990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));

return c__52287__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_54732 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_54732(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_54741 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_54741(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_54742 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_54742(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_54748 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_54748(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53000 = (function (ch,cs,meta53001){
this.ch = ch;
this.cs = cs;
this.meta53001 = meta53001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53002,meta53001__$1){
var self__ = this;
var _53002__$1 = this;
return (new cljs.core.async.t_cljs$core$async53000(self__.ch,self__.cs,meta53001__$1));
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53002){
var self__ = this;
var _53002__$1 = this;
return self__.meta53001;
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async53000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53001","meta53001",1018173034,null)], null);
}));

(cljs.core.async.t_cljs$core$async53000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53000");

(cljs.core.async.t_cljs$core$async53000.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53000.
 */
cljs.core.async.__GT_t_cljs$core$async53000 = (function cljs$core$async$mult_$___GT_t_cljs$core$async53000(ch__$1,cs__$1,meta53001){
return (new cljs.core.async.t_cljs$core$async53000(ch__$1,cs__$1,meta53001));
});

}

return (new cljs.core.async.t_cljs$core$async53000(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__52287__auto___54781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_53145){
var state_val_53147 = (state_53145[(1)]);
if((state_val_53147 === (7))){
var inst_53141 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53152_54782 = state_53145__$1;
(statearr_53152_54782[(2)] = inst_53141);

(statearr_53152_54782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (20))){
var inst_53042 = (state_53145[(7)]);
var inst_53058 = cljs.core.first(inst_53042);
var inst_53059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53058,(0),null);
var inst_53060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53058,(1),null);
var state_53145__$1 = (function (){var statearr_53153 = state_53145;
(statearr_53153[(8)] = inst_53059);

return statearr_53153;
})();
if(cljs.core.truth_(inst_53060)){
var statearr_53157_54790 = state_53145__$1;
(statearr_53157_54790[(1)] = (22));

} else {
var statearr_53159_54791 = state_53145__$1;
(statearr_53159_54791[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (27))){
var inst_53090 = (state_53145[(9)]);
var inst_53009 = (state_53145[(10)]);
var inst_53088 = (state_53145[(11)]);
var inst_53095 = (state_53145[(12)]);
var inst_53095__$1 = cljs.core._nth(inst_53088,inst_53090);
var inst_53096 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_53095__$1,inst_53009,done);
var state_53145__$1 = (function (){var statearr_53160 = state_53145;
(statearr_53160[(12)] = inst_53095__$1);

return statearr_53160;
})();
if(cljs.core.truth_(inst_53096)){
var statearr_53161_54792 = state_53145__$1;
(statearr_53161_54792[(1)] = (30));

} else {
var statearr_53162_54793 = state_53145__$1;
(statearr_53162_54793[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (1))){
var state_53145__$1 = state_53145;
var statearr_53163_54794 = state_53145__$1;
(statearr_53163_54794[(2)] = null);

(statearr_53163_54794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (24))){
var inst_53042 = (state_53145[(7)]);
var inst_53065 = (state_53145[(2)]);
var inst_53066 = cljs.core.next(inst_53042);
var inst_53019 = inst_53066;
var inst_53020 = null;
var inst_53021 = (0);
var inst_53022 = (0);
var state_53145__$1 = (function (){var statearr_53164 = state_53145;
(statearr_53164[(13)] = inst_53019);

(statearr_53164[(14)] = inst_53022);

(statearr_53164[(15)] = inst_53020);

(statearr_53164[(16)] = inst_53065);

(statearr_53164[(17)] = inst_53021);

return statearr_53164;
})();
var statearr_53165_54799 = state_53145__$1;
(statearr_53165_54799[(2)] = null);

(statearr_53165_54799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (39))){
var state_53145__$1 = state_53145;
var statearr_53171_54800 = state_53145__$1;
(statearr_53171_54800[(2)] = null);

(statearr_53171_54800[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (4))){
var inst_53009 = (state_53145[(10)]);
var inst_53009__$1 = (state_53145[(2)]);
var inst_53011 = (inst_53009__$1 == null);
var state_53145__$1 = (function (){var statearr_53172 = state_53145;
(statearr_53172[(10)] = inst_53009__$1);

return statearr_53172;
})();
if(cljs.core.truth_(inst_53011)){
var statearr_53173_54801 = state_53145__$1;
(statearr_53173_54801[(1)] = (5));

} else {
var statearr_53174_54802 = state_53145__$1;
(statearr_53174_54802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (15))){
var inst_53019 = (state_53145[(13)]);
var inst_53022 = (state_53145[(14)]);
var inst_53020 = (state_53145[(15)]);
var inst_53021 = (state_53145[(17)]);
var inst_53037 = (state_53145[(2)]);
var inst_53038 = (inst_53022 + (1));
var tmp53166 = inst_53019;
var tmp53167 = inst_53020;
var tmp53168 = inst_53021;
var inst_53019__$1 = tmp53166;
var inst_53020__$1 = tmp53167;
var inst_53021__$1 = tmp53168;
var inst_53022__$1 = inst_53038;
var state_53145__$1 = (function (){var statearr_53175 = state_53145;
(statearr_53175[(13)] = inst_53019__$1);

(statearr_53175[(14)] = inst_53022__$1);

(statearr_53175[(15)] = inst_53020__$1);

(statearr_53175[(18)] = inst_53037);

(statearr_53175[(17)] = inst_53021__$1);

return statearr_53175;
})();
var statearr_53176_54807 = state_53145__$1;
(statearr_53176_54807[(2)] = null);

(statearr_53176_54807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (21))){
var inst_53069 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53180_54808 = state_53145__$1;
(statearr_53180_54808[(2)] = inst_53069);

(statearr_53180_54808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (31))){
var inst_53095 = (state_53145[(12)]);
var inst_53099 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_53095);
var state_53145__$1 = state_53145;
var statearr_53181_54809 = state_53145__$1;
(statearr_53181_54809[(2)] = inst_53099);

(statearr_53181_54809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (32))){
var inst_53089 = (state_53145[(19)]);
var inst_53087 = (state_53145[(20)]);
var inst_53090 = (state_53145[(9)]);
var inst_53088 = (state_53145[(11)]);
var inst_53101 = (state_53145[(2)]);
var inst_53102 = (inst_53090 + (1));
var tmp53177 = inst_53089;
var tmp53178 = inst_53087;
var tmp53179 = inst_53088;
var inst_53087__$1 = tmp53178;
var inst_53088__$1 = tmp53179;
var inst_53089__$1 = tmp53177;
var inst_53090__$1 = inst_53102;
var state_53145__$1 = (function (){var statearr_53182 = state_53145;
(statearr_53182[(19)] = inst_53089__$1);

(statearr_53182[(20)] = inst_53087__$1);

(statearr_53182[(9)] = inst_53090__$1);

(statearr_53182[(21)] = inst_53101);

(statearr_53182[(11)] = inst_53088__$1);

return statearr_53182;
})();
var statearr_53183_54812 = state_53145__$1;
(statearr_53183_54812[(2)] = null);

(statearr_53183_54812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (40))){
var inst_53114 = (state_53145[(22)]);
var inst_53118 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_53114);
var state_53145__$1 = state_53145;
var statearr_53184_54813 = state_53145__$1;
(statearr_53184_54813[(2)] = inst_53118);

(statearr_53184_54813[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (33))){
var inst_53105 = (state_53145[(23)]);
var inst_53107 = cljs.core.chunked_seq_QMARK_(inst_53105);
var state_53145__$1 = state_53145;
if(inst_53107){
var statearr_53185_54815 = state_53145__$1;
(statearr_53185_54815[(1)] = (36));

} else {
var statearr_53186_54816 = state_53145__$1;
(statearr_53186_54816[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (13))){
var inst_53031 = (state_53145[(24)]);
var inst_53034 = cljs.core.async.close_BANG_(inst_53031);
var state_53145__$1 = state_53145;
var statearr_53189_54817 = state_53145__$1;
(statearr_53189_54817[(2)] = inst_53034);

(statearr_53189_54817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (22))){
var inst_53059 = (state_53145[(8)]);
var inst_53062 = cljs.core.async.close_BANG_(inst_53059);
var state_53145__$1 = state_53145;
var statearr_53190_54819 = state_53145__$1;
(statearr_53190_54819[(2)] = inst_53062);

(statearr_53190_54819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (36))){
var inst_53105 = (state_53145[(23)]);
var inst_53109 = cljs.core.chunk_first(inst_53105);
var inst_53110 = cljs.core.chunk_rest(inst_53105);
var inst_53111 = cljs.core.count(inst_53109);
var inst_53087 = inst_53110;
var inst_53088 = inst_53109;
var inst_53089 = inst_53111;
var inst_53090 = (0);
var state_53145__$1 = (function (){var statearr_53191 = state_53145;
(statearr_53191[(19)] = inst_53089);

(statearr_53191[(20)] = inst_53087);

(statearr_53191[(9)] = inst_53090);

(statearr_53191[(11)] = inst_53088);

return statearr_53191;
})();
var statearr_53196_54821 = state_53145__$1;
(statearr_53196_54821[(2)] = null);

(statearr_53196_54821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (41))){
var inst_53105 = (state_53145[(23)]);
var inst_53120 = (state_53145[(2)]);
var inst_53121 = cljs.core.next(inst_53105);
var inst_53087 = inst_53121;
var inst_53088 = null;
var inst_53089 = (0);
var inst_53090 = (0);
var state_53145__$1 = (function (){var statearr_53197 = state_53145;
(statearr_53197[(19)] = inst_53089);

(statearr_53197[(20)] = inst_53087);

(statearr_53197[(9)] = inst_53090);

(statearr_53197[(25)] = inst_53120);

(statearr_53197[(11)] = inst_53088);

return statearr_53197;
})();
var statearr_53201_54825 = state_53145__$1;
(statearr_53201_54825[(2)] = null);

(statearr_53201_54825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (43))){
var state_53145__$1 = state_53145;
var statearr_53206_54826 = state_53145__$1;
(statearr_53206_54826[(2)] = null);

(statearr_53206_54826[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (29))){
var inst_53129 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53207_54827 = state_53145__$1;
(statearr_53207_54827[(2)] = inst_53129);

(statearr_53207_54827[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (44))){
var inst_53138 = (state_53145[(2)]);
var state_53145__$1 = (function (){var statearr_53209 = state_53145;
(statearr_53209[(26)] = inst_53138);

return statearr_53209;
})();
var statearr_53210_54829 = state_53145__$1;
(statearr_53210_54829[(2)] = null);

(statearr_53210_54829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (6))){
var inst_53079 = (state_53145[(27)]);
var inst_53078 = cljs.core.deref(cs);
var inst_53079__$1 = cljs.core.keys(inst_53078);
var inst_53080 = cljs.core.count(inst_53079__$1);
var inst_53081 = cljs.core.reset_BANG_(dctr,inst_53080);
var inst_53086 = cljs.core.seq(inst_53079__$1);
var inst_53087 = inst_53086;
var inst_53088 = null;
var inst_53089 = (0);
var inst_53090 = (0);
var state_53145__$1 = (function (){var statearr_53211 = state_53145;
(statearr_53211[(19)] = inst_53089);

(statearr_53211[(20)] = inst_53087);

(statearr_53211[(9)] = inst_53090);

(statearr_53211[(27)] = inst_53079__$1);

(statearr_53211[(11)] = inst_53088);

(statearr_53211[(28)] = inst_53081);

return statearr_53211;
})();
var statearr_53212_54844 = state_53145__$1;
(statearr_53212_54844[(2)] = null);

(statearr_53212_54844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (28))){
var inst_53105 = (state_53145[(23)]);
var inst_53087 = (state_53145[(20)]);
var inst_53105__$1 = cljs.core.seq(inst_53087);
var state_53145__$1 = (function (){var statearr_53213 = state_53145;
(statearr_53213[(23)] = inst_53105__$1);

return statearr_53213;
})();
if(inst_53105__$1){
var statearr_53214_54845 = state_53145__$1;
(statearr_53214_54845[(1)] = (33));

} else {
var statearr_53215_54846 = state_53145__$1;
(statearr_53215_54846[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (25))){
var inst_53089 = (state_53145[(19)]);
var inst_53090 = (state_53145[(9)]);
var inst_53092 = (inst_53090 < inst_53089);
var inst_53093 = inst_53092;
var state_53145__$1 = state_53145;
if(cljs.core.truth_(inst_53093)){
var statearr_53217_54850 = state_53145__$1;
(statearr_53217_54850[(1)] = (27));

} else {
var statearr_53218_54853 = state_53145__$1;
(statearr_53218_54853[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (34))){
var state_53145__$1 = state_53145;
var statearr_53219_54854 = state_53145__$1;
(statearr_53219_54854[(2)] = null);

(statearr_53219_54854[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (17))){
var state_53145__$1 = state_53145;
var statearr_53220_54855 = state_53145__$1;
(statearr_53220_54855[(2)] = null);

(statearr_53220_54855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (3))){
var inst_53143 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53145__$1,inst_53143);
} else {
if((state_val_53147 === (12))){
var inst_53074 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53221_54856 = state_53145__$1;
(statearr_53221_54856[(2)] = inst_53074);

(statearr_53221_54856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (2))){
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53145__$1,(4),ch);
} else {
if((state_val_53147 === (23))){
var state_53145__$1 = state_53145;
var statearr_53223_54859 = state_53145__$1;
(statearr_53223_54859[(2)] = null);

(statearr_53223_54859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (35))){
var inst_53127 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53224_54861 = state_53145__$1;
(statearr_53224_54861[(2)] = inst_53127);

(statearr_53224_54861[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (19))){
var inst_53042 = (state_53145[(7)]);
var inst_53050 = cljs.core.chunk_first(inst_53042);
var inst_53051 = cljs.core.chunk_rest(inst_53042);
var inst_53052 = cljs.core.count(inst_53050);
var inst_53019 = inst_53051;
var inst_53020 = inst_53050;
var inst_53021 = inst_53052;
var inst_53022 = (0);
var state_53145__$1 = (function (){var statearr_53225 = state_53145;
(statearr_53225[(13)] = inst_53019);

(statearr_53225[(14)] = inst_53022);

(statearr_53225[(15)] = inst_53020);

(statearr_53225[(17)] = inst_53021);

return statearr_53225;
})();
var statearr_53226_54862 = state_53145__$1;
(statearr_53226_54862[(2)] = null);

(statearr_53226_54862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (11))){
var inst_53019 = (state_53145[(13)]);
var inst_53042 = (state_53145[(7)]);
var inst_53042__$1 = cljs.core.seq(inst_53019);
var state_53145__$1 = (function (){var statearr_53227 = state_53145;
(statearr_53227[(7)] = inst_53042__$1);

return statearr_53227;
})();
if(inst_53042__$1){
var statearr_53229_54867 = state_53145__$1;
(statearr_53229_54867[(1)] = (16));

} else {
var statearr_53230_54868 = state_53145__$1;
(statearr_53230_54868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (9))){
var inst_53076 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53231_54871 = state_53145__$1;
(statearr_53231_54871[(2)] = inst_53076);

(statearr_53231_54871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (5))){
var inst_53017 = cljs.core.deref(cs);
var inst_53018 = cljs.core.seq(inst_53017);
var inst_53019 = inst_53018;
var inst_53020 = null;
var inst_53021 = (0);
var inst_53022 = (0);
var state_53145__$1 = (function (){var statearr_53232 = state_53145;
(statearr_53232[(13)] = inst_53019);

(statearr_53232[(14)] = inst_53022);

(statearr_53232[(15)] = inst_53020);

(statearr_53232[(17)] = inst_53021);

return statearr_53232;
})();
var statearr_53233_54872 = state_53145__$1;
(statearr_53233_54872[(2)] = null);

(statearr_53233_54872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (14))){
var state_53145__$1 = state_53145;
var statearr_53234_54873 = state_53145__$1;
(statearr_53234_54873[(2)] = null);

(statearr_53234_54873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (45))){
var inst_53135 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53235_54874 = state_53145__$1;
(statearr_53235_54874[(2)] = inst_53135);

(statearr_53235_54874[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (26))){
var inst_53079 = (state_53145[(27)]);
var inst_53131 = (state_53145[(2)]);
var inst_53132 = cljs.core.seq(inst_53079);
var state_53145__$1 = (function (){var statearr_53236 = state_53145;
(statearr_53236[(29)] = inst_53131);

return statearr_53236;
})();
if(inst_53132){
var statearr_53237_54875 = state_53145__$1;
(statearr_53237_54875[(1)] = (42));

} else {
var statearr_53238_54876 = state_53145__$1;
(statearr_53238_54876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (16))){
var inst_53042 = (state_53145[(7)]);
var inst_53048 = cljs.core.chunked_seq_QMARK_(inst_53042);
var state_53145__$1 = state_53145;
if(inst_53048){
var statearr_53240_54877 = state_53145__$1;
(statearr_53240_54877[(1)] = (19));

} else {
var statearr_53241_54878 = state_53145__$1;
(statearr_53241_54878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (38))){
var inst_53124 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53243_54879 = state_53145__$1;
(statearr_53243_54879[(2)] = inst_53124);

(statearr_53243_54879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (30))){
var state_53145__$1 = state_53145;
var statearr_53245_54880 = state_53145__$1;
(statearr_53245_54880[(2)] = null);

(statearr_53245_54880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (10))){
var inst_53022 = (state_53145[(14)]);
var inst_53020 = (state_53145[(15)]);
var inst_53030 = cljs.core._nth(inst_53020,inst_53022);
var inst_53031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53030,(0),null);
var inst_53032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53030,(1),null);
var state_53145__$1 = (function (){var statearr_53246 = state_53145;
(statearr_53246[(24)] = inst_53031);

return statearr_53246;
})();
if(cljs.core.truth_(inst_53032)){
var statearr_53247_54883 = state_53145__$1;
(statearr_53247_54883[(1)] = (13));

} else {
var statearr_53248_54884 = state_53145__$1;
(statearr_53248_54884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (18))){
var inst_53072 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53249_54885 = state_53145__$1;
(statearr_53249_54885[(2)] = inst_53072);

(statearr_53249_54885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (42))){
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53145__$1,(45),dchan);
} else {
if((state_val_53147 === (37))){
var inst_53105 = (state_53145[(23)]);
var inst_53009 = (state_53145[(10)]);
var inst_53114 = (state_53145[(22)]);
var inst_53114__$1 = cljs.core.first(inst_53105);
var inst_53115 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_53114__$1,inst_53009,done);
var state_53145__$1 = (function (){var statearr_53250 = state_53145;
(statearr_53250[(22)] = inst_53114__$1);

return statearr_53250;
})();
if(cljs.core.truth_(inst_53115)){
var statearr_53254_54888 = state_53145__$1;
(statearr_53254_54888[(1)] = (39));

} else {
var statearr_53255_54889 = state_53145__$1;
(statearr_53255_54889[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53147 === (8))){
var inst_53022 = (state_53145[(14)]);
var inst_53021 = (state_53145[(17)]);
var inst_53024 = (inst_53022 < inst_53021);
var inst_53025 = inst_53024;
var state_53145__$1 = state_53145;
if(cljs.core.truth_(inst_53025)){
var statearr_53256_54892 = state_53145__$1;
(statearr_53256_54892[(1)] = (10));

} else {
var statearr_53257_54893 = state_53145__$1;
(statearr_53257_54893[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__51239__auto__ = null;
var cljs$core$async$mult_$_state_machine__51239__auto____0 = (function (){
var statearr_53258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53258[(0)] = cljs$core$async$mult_$_state_machine__51239__auto__);

(statearr_53258[(1)] = (1));

return statearr_53258;
});
var cljs$core$async$mult_$_state_machine__51239__auto____1 = (function (state_53145){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_53145);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e53259){var ex__51242__auto__ = e53259;
var statearr_53260_54896 = state_53145;
(statearr_53260_54896[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_53145[(4)]))){
var statearr_53261_54897 = state_53145;
(statearr_53261_54897[(1)] = cljs.core.first((state_53145[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54898 = state_53145;
state_53145 = G__54898;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51239__auto__ = function(state_53145){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51239__auto____1.call(this,state_53145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51239__auto____0;
cljs$core$async$mult_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51239__auto____1;
return cljs$core$async$mult_$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_53262 = f__52288__auto__();
(statearr_53262[(6)] = c__52287__auto___54781);

return statearr_53262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__53264 = arguments.length;
switch (G__53264) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_54908 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_54908(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_54912 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_54912(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54914 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54914(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54916 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_54916(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54918 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54918(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54920 = arguments.length;
var i__4731__auto___54921 = (0);
while(true){
if((i__4731__auto___54921 < len__4730__auto___54920)){
args__4736__auto__.push((arguments[i__4731__auto___54921]));

var G__54923 = (i__4731__auto___54921 + (1));
i__4731__auto___54921 = G__54923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53300){
var map__53301 = p__53300;
var map__53301__$1 = (((((!((map__53301 == null))))?(((((map__53301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53301):map__53301);
var opts = map__53301__$1;
var statearr_53303_54930 = state;
(statearr_53303_54930[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_53304_54931 = state;
(statearr_53304_54931[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_53305_54932 = state;
(statearr_53305_54932[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53296){
var G__53297 = cljs.core.first(seq53296);
var seq53296__$1 = cljs.core.next(seq53296);
var G__53298 = cljs.core.first(seq53296__$1);
var seq53296__$2 = cljs.core.next(seq53296__$1);
var G__53299 = cljs.core.first(seq53296__$2);
var seq53296__$3 = cljs.core.next(seq53296__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53297,G__53298,G__53299,seq53296__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53310 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53311){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53311 = meta53311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53312,meta53311__$1){
var self__ = this;
var _53312__$1 = this;
return (new cljs.core.async.t_cljs$core$async53310(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53311__$1));
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53312){
var self__ = this;
var _53312__$1 = this;
return self__.meta53311;
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53311","meta53311",-156732730,null)], null);
}));

(cljs.core.async.t_cljs$core$async53310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53310");

(cljs.core.async.t_cljs$core$async53310.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53310.
 */
cljs.core.async.__GT_t_cljs$core$async53310 = (function cljs$core$async$mix_$___GT_t_cljs$core$async53310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53311){
return (new cljs.core.async.t_cljs$core$async53310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53311));
});

}

return (new cljs.core.async.t_cljs$core$async53310(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52287__auto___54949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_53420){
var state_val_53421 = (state_53420[(1)]);
if((state_val_53421 === (7))){
var inst_53333 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53422_54951 = state_53420__$1;
(statearr_53422_54951[(2)] = inst_53333);

(statearr_53422_54951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (20))){
var inst_53345 = (state_53420[(7)]);
var state_53420__$1 = state_53420;
var statearr_53427_54953 = state_53420__$1;
(statearr_53427_54953[(2)] = inst_53345);

(statearr_53427_54953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (27))){
var state_53420__$1 = state_53420;
var statearr_53429_54957 = state_53420__$1;
(statearr_53429_54957[(2)] = null);

(statearr_53429_54957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (1))){
var inst_53320 = (state_53420[(8)]);
var inst_53320__$1 = calc_state();
var inst_53322 = (inst_53320__$1 == null);
var inst_53323 = cljs.core.not(inst_53322);
var state_53420__$1 = (function (){var statearr_53436 = state_53420;
(statearr_53436[(8)] = inst_53320__$1);

return statearr_53436;
})();
if(inst_53323){
var statearr_53442_54961 = state_53420__$1;
(statearr_53442_54961[(1)] = (2));

} else {
var statearr_53443_54962 = state_53420__$1;
(statearr_53443_54962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (24))){
var inst_53369 = (state_53420[(9)]);
var inst_53393 = (state_53420[(10)]);
var inst_53378 = (state_53420[(11)]);
var inst_53393__$1 = (inst_53369.cljs$core$IFn$_invoke$arity$1 ? inst_53369.cljs$core$IFn$_invoke$arity$1(inst_53378) : inst_53369.call(null,inst_53378));
var state_53420__$1 = (function (){var statearr_53449 = state_53420;
(statearr_53449[(10)] = inst_53393__$1);

return statearr_53449;
})();
if(cljs.core.truth_(inst_53393__$1)){
var statearr_53450_54964 = state_53420__$1;
(statearr_53450_54964[(1)] = (29));

} else {
var statearr_53451_54965 = state_53420__$1;
(statearr_53451_54965[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (4))){
var inst_53336 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53336)){
var statearr_53456_54968 = state_53420__$1;
(statearr_53456_54968[(1)] = (8));

} else {
var statearr_53457_54969 = state_53420__$1;
(statearr_53457_54969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (15))){
var inst_53363 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53363)){
var statearr_53458_54971 = state_53420__$1;
(statearr_53458_54971[(1)] = (19));

} else {
var statearr_53459_54973 = state_53420__$1;
(statearr_53459_54973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (21))){
var inst_53368 = (state_53420[(12)]);
var inst_53368__$1 = (state_53420[(2)]);
var inst_53369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53368__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53368__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53368__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53420__$1 = (function (){var statearr_53461 = state_53420;
(statearr_53461[(9)] = inst_53369);

(statearr_53461[(12)] = inst_53368__$1);

(statearr_53461[(13)] = inst_53370);

return statearr_53461;
})();
return cljs.core.async.ioc_alts_BANG_(state_53420__$1,(22),inst_53371);
} else {
if((state_val_53421 === (31))){
var inst_53401 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53401)){
var statearr_53463_54979 = state_53420__$1;
(statearr_53463_54979[(1)] = (32));

} else {
var statearr_53464_54980 = state_53420__$1;
(statearr_53464_54980[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (32))){
var inst_53377 = (state_53420[(14)]);
var state_53420__$1 = state_53420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53420__$1,(35),out,inst_53377);
} else {
if((state_val_53421 === (33))){
var inst_53368 = (state_53420[(12)]);
var inst_53345 = inst_53368;
var state_53420__$1 = (function (){var statearr_53468 = state_53420;
(statearr_53468[(7)] = inst_53345);

return statearr_53468;
})();
var statearr_53469_54983 = state_53420__$1;
(statearr_53469_54983[(2)] = null);

(statearr_53469_54983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (13))){
var inst_53345 = (state_53420[(7)]);
var inst_53352 = inst_53345.cljs$lang$protocol_mask$partition0$;
var inst_53353 = (inst_53352 & (64));
var inst_53354 = inst_53345.cljs$core$ISeq$;
var inst_53355 = (cljs.core.PROTOCOL_SENTINEL === inst_53354);
var inst_53356 = ((inst_53353) || (inst_53355));
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53356)){
var statearr_53470_54984 = state_53420__$1;
(statearr_53470_54984[(1)] = (16));

} else {
var statearr_53471_54985 = state_53420__$1;
(statearr_53471_54985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (22))){
var inst_53377 = (state_53420[(14)]);
var inst_53378 = (state_53420[(11)]);
var inst_53376 = (state_53420[(2)]);
var inst_53377__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53376,(0),null);
var inst_53378__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53376,(1),null);
var inst_53379 = (inst_53377__$1 == null);
var inst_53380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53378__$1,change);
var inst_53382 = ((inst_53379) || (inst_53380));
var state_53420__$1 = (function (){var statearr_53472 = state_53420;
(statearr_53472[(14)] = inst_53377__$1);

(statearr_53472[(11)] = inst_53378__$1);

return statearr_53472;
})();
if(cljs.core.truth_(inst_53382)){
var statearr_53473_54994 = state_53420__$1;
(statearr_53473_54994[(1)] = (23));

} else {
var statearr_53474_54995 = state_53420__$1;
(statearr_53474_54995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (36))){
var inst_53368 = (state_53420[(12)]);
var inst_53345 = inst_53368;
var state_53420__$1 = (function (){var statearr_53475 = state_53420;
(statearr_53475[(7)] = inst_53345);

return statearr_53475;
})();
var statearr_53476_54997 = state_53420__$1;
(statearr_53476_54997[(2)] = null);

(statearr_53476_54997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (29))){
var inst_53393 = (state_53420[(10)]);
var state_53420__$1 = state_53420;
var statearr_53477_55002 = state_53420__$1;
(statearr_53477_55002[(2)] = inst_53393);

(statearr_53477_55002[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (6))){
var state_53420__$1 = state_53420;
var statearr_53480_55005 = state_53420__$1;
(statearr_53480_55005[(2)] = false);

(statearr_53480_55005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (28))){
var inst_53389 = (state_53420[(2)]);
var inst_53390 = calc_state();
var inst_53345 = inst_53390;
var state_53420__$1 = (function (){var statearr_53481 = state_53420;
(statearr_53481[(7)] = inst_53345);

(statearr_53481[(15)] = inst_53389);

return statearr_53481;
})();
var statearr_53482_55008 = state_53420__$1;
(statearr_53482_55008[(2)] = null);

(statearr_53482_55008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (25))){
var inst_53415 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53487_55009 = state_53420__$1;
(statearr_53487_55009[(2)] = inst_53415);

(statearr_53487_55009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (34))){
var inst_53413 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53488_55014 = state_53420__$1;
(statearr_53488_55014[(2)] = inst_53413);

(statearr_53488_55014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (17))){
var state_53420__$1 = state_53420;
var statearr_53489_55017 = state_53420__$1;
(statearr_53489_55017[(2)] = false);

(statearr_53489_55017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (3))){
var state_53420__$1 = state_53420;
var statearr_53490_55019 = state_53420__$1;
(statearr_53490_55019[(2)] = false);

(statearr_53490_55019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (12))){
var inst_53417 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53420__$1,inst_53417);
} else {
if((state_val_53421 === (2))){
var inst_53320 = (state_53420[(8)]);
var inst_53325 = inst_53320.cljs$lang$protocol_mask$partition0$;
var inst_53326 = (inst_53325 & (64));
var inst_53327 = inst_53320.cljs$core$ISeq$;
var inst_53328 = (cljs.core.PROTOCOL_SENTINEL === inst_53327);
var inst_53329 = ((inst_53326) || (inst_53328));
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53329)){
var statearr_53493_55027 = state_53420__$1;
(statearr_53493_55027[(1)] = (5));

} else {
var statearr_53494_55029 = state_53420__$1;
(statearr_53494_55029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (23))){
var inst_53377 = (state_53420[(14)]);
var inst_53384 = (inst_53377 == null);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53384)){
var statearr_53495_55030 = state_53420__$1;
(statearr_53495_55030[(1)] = (26));

} else {
var statearr_53496_55034 = state_53420__$1;
(statearr_53496_55034[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (35))){
var inst_53404 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53404)){
var statearr_53497_55036 = state_53420__$1;
(statearr_53497_55036[(1)] = (36));

} else {
var statearr_53498_55038 = state_53420__$1;
(statearr_53498_55038[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (19))){
var inst_53345 = (state_53420[(7)]);
var inst_53365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53345);
var state_53420__$1 = state_53420;
var statearr_53499_55042 = state_53420__$1;
(statearr_53499_55042[(2)] = inst_53365);

(statearr_53499_55042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (11))){
var inst_53345 = (state_53420[(7)]);
var inst_53349 = (inst_53345 == null);
var inst_53350 = cljs.core.not(inst_53349);
var state_53420__$1 = state_53420;
if(inst_53350){
var statearr_53501_55048 = state_53420__$1;
(statearr_53501_55048[(1)] = (13));

} else {
var statearr_53502_55049 = state_53420__$1;
(statearr_53502_55049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (9))){
var inst_53320 = (state_53420[(8)]);
var state_53420__$1 = state_53420;
var statearr_53503_55050 = state_53420__$1;
(statearr_53503_55050[(2)] = inst_53320);

(statearr_53503_55050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (5))){
var state_53420__$1 = state_53420;
var statearr_53504_55051 = state_53420__$1;
(statearr_53504_55051[(2)] = true);

(statearr_53504_55051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (14))){
var state_53420__$1 = state_53420;
var statearr_53505_55054 = state_53420__$1;
(statearr_53505_55054[(2)] = false);

(statearr_53505_55054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (26))){
var inst_53378 = (state_53420[(11)]);
var inst_53386 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_53378);
var state_53420__$1 = state_53420;
var statearr_53506_55057 = state_53420__$1;
(statearr_53506_55057[(2)] = inst_53386);

(statearr_53506_55057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (16))){
var state_53420__$1 = state_53420;
var statearr_53507_55058 = state_53420__$1;
(statearr_53507_55058[(2)] = true);

(statearr_53507_55058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (38))){
var inst_53409 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53508_55061 = state_53420__$1;
(statearr_53508_55061[(2)] = inst_53409);

(statearr_53508_55061[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (30))){
var inst_53369 = (state_53420[(9)]);
var inst_53378 = (state_53420[(11)]);
var inst_53370 = (state_53420[(13)]);
var inst_53396 = cljs.core.empty_QMARK_(inst_53369);
var inst_53397 = (inst_53370.cljs$core$IFn$_invoke$arity$1 ? inst_53370.cljs$core$IFn$_invoke$arity$1(inst_53378) : inst_53370.call(null,inst_53378));
var inst_53398 = cljs.core.not(inst_53397);
var inst_53399 = ((inst_53396) && (inst_53398));
var state_53420__$1 = state_53420;
var statearr_53509_55065 = state_53420__$1;
(statearr_53509_55065[(2)] = inst_53399);

(statearr_53509_55065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (10))){
var inst_53320 = (state_53420[(8)]);
var inst_53341 = (state_53420[(2)]);
var inst_53342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53341,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53341,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53341,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53345 = inst_53320;
var state_53420__$1 = (function (){var statearr_53510 = state_53420;
(statearr_53510[(16)] = inst_53342);

(statearr_53510[(7)] = inst_53345);

(statearr_53510[(17)] = inst_53343);

(statearr_53510[(18)] = inst_53344);

return statearr_53510;
})();
var statearr_53511_55068 = state_53420__$1;
(statearr_53511_55068[(2)] = null);

(statearr_53511_55068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (18))){
var inst_53360 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53516_55070 = state_53420__$1;
(statearr_53516_55070[(2)] = inst_53360);

(statearr_53516_55070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (37))){
var state_53420__$1 = state_53420;
var statearr_53517_55071 = state_53420__$1;
(statearr_53517_55071[(2)] = null);

(statearr_53517_55071[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (8))){
var inst_53320 = (state_53420[(8)]);
var inst_53338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53320);
var state_53420__$1 = state_53420;
var statearr_53520_55077 = state_53420__$1;
(statearr_53520_55077[(2)] = inst_53338);

(statearr_53520_55077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__51239__auto__ = null;
var cljs$core$async$mix_$_state_machine__51239__auto____0 = (function (){
var statearr_53521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53521[(0)] = cljs$core$async$mix_$_state_machine__51239__auto__);

(statearr_53521[(1)] = (1));

return statearr_53521;
});
var cljs$core$async$mix_$_state_machine__51239__auto____1 = (function (state_53420){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_53420);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e53522){var ex__51242__auto__ = e53522;
var statearr_53524_55080 = state_53420;
(statearr_53524_55080[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_53420[(4)]))){
var statearr_53525_55081 = state_53420;
(statearr_53525_55081[(1)] = cljs.core.first((state_53420[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55083 = state_53420;
state_53420 = G__55083;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51239__auto__ = function(state_53420){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51239__auto____1.call(this,state_53420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51239__auto____0;
cljs$core$async$mix_$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51239__auto____1;
return cljs$core$async$mix_$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_53527 = f__52288__auto__();
(statearr_53527[(6)] = c__52287__auto___54949);

return statearr_53527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_55089 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_55089(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_55092 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_55092(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_55098 = (function() {
var G__55099 = null;
var G__55099__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__55099__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__55099 = function(p,v){
switch(arguments.length){
case 1:
return G__55099__1.call(this,p);
case 2:
return G__55099__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55099.cljs$core$IFn$_invoke$arity$1 = G__55099__1;
G__55099.cljs$core$IFn$_invoke$arity$2 = G__55099__2;
return G__55099;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53537 = arguments.length;
switch (G__53537) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55098(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55098(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53542 = arguments.length;
switch (G__53542) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__53539_SHARP_){
if(cljs.core.truth_((p1__53539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53539_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53539_SHARP_.call(null,topic)))){
return p1__53539_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53539_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53546 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53547){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53547 = meta53547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53548,meta53547__$1){
var self__ = this;
var _53548__$1 = this;
return (new cljs.core.async.t_cljs$core$async53546(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53547__$1));
}));

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53548){
var self__ = this;
var _53548__$1 = this;
return self__.meta53547;
}));

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async53546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async53546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53547","meta53547",513389073,null)], null);
}));

(cljs.core.async.t_cljs$core$async53546.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53546");

(cljs.core.async.t_cljs$core$async53546.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53546");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53546.
 */
cljs.core.async.__GT_t_cljs$core$async53546 = (function cljs$core$async$__GT_t_cljs$core$async53546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53547){
return (new cljs.core.async.t_cljs$core$async53546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53547));
});

}

return (new cljs.core.async.t_cljs$core$async53546(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52287__auto___55122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_53626){
var state_val_53627 = (state_53626[(1)]);
if((state_val_53627 === (7))){
var inst_53622 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
var statearr_53629_55123 = state_53626__$1;
(statearr_53629_55123[(2)] = inst_53622);

(statearr_53629_55123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (20))){
var state_53626__$1 = state_53626;
var statearr_53630_55124 = state_53626__$1;
(statearr_53630_55124[(2)] = null);

(statearr_53630_55124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (1))){
var state_53626__$1 = state_53626;
var statearr_53631_55126 = state_53626__$1;
(statearr_53631_55126[(2)] = null);

(statearr_53631_55126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (24))){
var inst_53605 = (state_53626[(7)]);
var inst_53614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53605);
var state_53626__$1 = state_53626;
var statearr_53632_55127 = state_53626__$1;
(statearr_53632_55127[(2)] = inst_53614);

(statearr_53632_55127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (4))){
var inst_53556 = (state_53626[(8)]);
var inst_53556__$1 = (state_53626[(2)]);
var inst_53557 = (inst_53556__$1 == null);
var state_53626__$1 = (function (){var statearr_53635 = state_53626;
(statearr_53635[(8)] = inst_53556__$1);

return statearr_53635;
})();
if(cljs.core.truth_(inst_53557)){
var statearr_53636_55129 = state_53626__$1;
(statearr_53636_55129[(1)] = (5));

} else {
var statearr_53637_55130 = state_53626__$1;
(statearr_53637_55130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (15))){
var inst_53599 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
var statearr_53638_55131 = state_53626__$1;
(statearr_53638_55131[(2)] = inst_53599);

(statearr_53638_55131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (21))){
var inst_53619 = (state_53626[(2)]);
var state_53626__$1 = (function (){var statearr_53639 = state_53626;
(statearr_53639[(9)] = inst_53619);

return statearr_53639;
})();
var statearr_53640_55136 = state_53626__$1;
(statearr_53640_55136[(2)] = null);

(statearr_53640_55136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (13))){
var inst_53581 = (state_53626[(10)]);
var inst_53583 = cljs.core.chunked_seq_QMARK_(inst_53581);
var state_53626__$1 = state_53626;
if(inst_53583){
var statearr_53645_55137 = state_53626__$1;
(statearr_53645_55137[(1)] = (16));

} else {
var statearr_53646_55138 = state_53626__$1;
(statearr_53646_55138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (22))){
var inst_53611 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
if(cljs.core.truth_(inst_53611)){
var statearr_53647_55140 = state_53626__$1;
(statearr_53647_55140[(1)] = (23));

} else {
var statearr_53648_55141 = state_53626__$1;
(statearr_53648_55141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (6))){
var inst_53607 = (state_53626[(11)]);
var inst_53605 = (state_53626[(7)]);
var inst_53556 = (state_53626[(8)]);
var inst_53605__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53556) : topic_fn.call(null,inst_53556));
var inst_53606 = cljs.core.deref(mults);
var inst_53607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53606,inst_53605__$1);
var state_53626__$1 = (function (){var statearr_53649 = state_53626;
(statearr_53649[(11)] = inst_53607__$1);

(statearr_53649[(7)] = inst_53605__$1);

return statearr_53649;
})();
if(cljs.core.truth_(inst_53607__$1)){
var statearr_53650_55143 = state_53626__$1;
(statearr_53650_55143[(1)] = (19));

} else {
var statearr_53651_55144 = state_53626__$1;
(statearr_53651_55144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (25))){
var inst_53616 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
var statearr_53652_55145 = state_53626__$1;
(statearr_53652_55145[(2)] = inst_53616);

(statearr_53652_55145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (17))){
var inst_53581 = (state_53626[(10)]);
var inst_53590 = cljs.core.first(inst_53581);
var inst_53591 = cljs.core.async.muxch_STAR_(inst_53590);
var inst_53592 = cljs.core.async.close_BANG_(inst_53591);
var inst_53593 = cljs.core.next(inst_53581);
var inst_53566 = inst_53593;
var inst_53567 = null;
var inst_53568 = (0);
var inst_53569 = (0);
var state_53626__$1 = (function (){var statearr_53653 = state_53626;
(statearr_53653[(12)] = inst_53566);

(statearr_53653[(13)] = inst_53592);

(statearr_53653[(14)] = inst_53569);

(statearr_53653[(15)] = inst_53568);

(statearr_53653[(16)] = inst_53567);

return statearr_53653;
})();
var statearr_53654_55149 = state_53626__$1;
(statearr_53654_55149[(2)] = null);

(statearr_53654_55149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (3))){
var inst_53624 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53626__$1,inst_53624);
} else {
if((state_val_53627 === (12))){
var inst_53601 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
var statearr_53658_55152 = state_53626__$1;
(statearr_53658_55152[(2)] = inst_53601);

(statearr_53658_55152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (2))){
var state_53626__$1 = state_53626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53626__$1,(4),ch);
} else {
if((state_val_53627 === (23))){
var state_53626__$1 = state_53626;
var statearr_53660_55155 = state_53626__$1;
(statearr_53660_55155[(2)] = null);

(statearr_53660_55155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (19))){
var inst_53607 = (state_53626[(11)]);
var inst_53556 = (state_53626[(8)]);
var inst_53609 = cljs.core.async.muxch_STAR_(inst_53607);
var state_53626__$1 = state_53626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53626__$1,(22),inst_53609,inst_53556);
} else {
if((state_val_53627 === (11))){
var inst_53566 = (state_53626[(12)]);
var inst_53581 = (state_53626[(10)]);
var inst_53581__$1 = cljs.core.seq(inst_53566);
var state_53626__$1 = (function (){var statearr_53661 = state_53626;
(statearr_53661[(10)] = inst_53581__$1);

return statearr_53661;
})();
if(inst_53581__$1){
var statearr_53662_55164 = state_53626__$1;
(statearr_53662_55164[(1)] = (13));

} else {
var statearr_53663_55165 = state_53626__$1;
(statearr_53663_55165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (9))){
var inst_53603 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
var statearr_53664_55166 = state_53626__$1;
(statearr_53664_55166[(2)] = inst_53603);

(statearr_53664_55166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (5))){
var inst_53563 = cljs.core.deref(mults);
var inst_53564 = cljs.core.vals(inst_53563);
var inst_53565 = cljs.core.seq(inst_53564);
var inst_53566 = inst_53565;
var inst_53567 = null;
var inst_53568 = (0);
var inst_53569 = (0);
var state_53626__$1 = (function (){var statearr_53666 = state_53626;
(statearr_53666[(12)] = inst_53566);

(statearr_53666[(14)] = inst_53569);

(statearr_53666[(15)] = inst_53568);

(statearr_53666[(16)] = inst_53567);

return statearr_53666;
})();
var statearr_53667_55167 = state_53626__$1;
(statearr_53667_55167[(2)] = null);

(statearr_53667_55167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (14))){
var state_53626__$1 = state_53626;
var statearr_53671_55168 = state_53626__$1;
(statearr_53671_55168[(2)] = null);

(statearr_53671_55168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (16))){
var inst_53581 = (state_53626[(10)]);
var inst_53585 = cljs.core.chunk_first(inst_53581);
var inst_53586 = cljs.core.chunk_rest(inst_53581);
var inst_53587 = cljs.core.count(inst_53585);
var inst_53566 = inst_53586;
var inst_53567 = inst_53585;
var inst_53568 = inst_53587;
var inst_53569 = (0);
var state_53626__$1 = (function (){var statearr_53672 = state_53626;
(statearr_53672[(12)] = inst_53566);

(statearr_53672[(14)] = inst_53569);

(statearr_53672[(15)] = inst_53568);

(statearr_53672[(16)] = inst_53567);

return statearr_53672;
})();
var statearr_53673_55169 = state_53626__$1;
(statearr_53673_55169[(2)] = null);

(statearr_53673_55169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (10))){
var inst_53566 = (state_53626[(12)]);
var inst_53569 = (state_53626[(14)]);
var inst_53568 = (state_53626[(15)]);
var inst_53567 = (state_53626[(16)]);
var inst_53574 = cljs.core._nth(inst_53567,inst_53569);
var inst_53575 = cljs.core.async.muxch_STAR_(inst_53574);
var inst_53576 = cljs.core.async.close_BANG_(inst_53575);
var inst_53577 = (inst_53569 + (1));
var tmp53668 = inst_53566;
var tmp53669 = inst_53568;
var tmp53670 = inst_53567;
var inst_53566__$1 = tmp53668;
var inst_53567__$1 = tmp53670;
var inst_53568__$1 = tmp53669;
var inst_53569__$1 = inst_53577;
var state_53626__$1 = (function (){var statearr_53674 = state_53626;
(statearr_53674[(12)] = inst_53566__$1);

(statearr_53674[(17)] = inst_53576);

(statearr_53674[(14)] = inst_53569__$1);

(statearr_53674[(15)] = inst_53568__$1);

(statearr_53674[(16)] = inst_53567__$1);

return statearr_53674;
})();
var statearr_53680_55170 = state_53626__$1;
(statearr_53680_55170[(2)] = null);

(statearr_53680_55170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (18))){
var inst_53596 = (state_53626[(2)]);
var state_53626__$1 = state_53626;
var statearr_53684_55171 = state_53626__$1;
(statearr_53684_55171[(2)] = inst_53596);

(statearr_53684_55171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53627 === (8))){
var inst_53569 = (state_53626[(14)]);
var inst_53568 = (state_53626[(15)]);
var inst_53571 = (inst_53569 < inst_53568);
var inst_53572 = inst_53571;
var state_53626__$1 = state_53626;
if(cljs.core.truth_(inst_53572)){
var statearr_53685_55173 = state_53626__$1;
(statearr_53685_55173[(1)] = (10));

} else {
var statearr_53686_55175 = state_53626__$1;
(statearr_53686_55175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_53688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53688[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_53688[(1)] = (1));

return statearr_53688;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_53626){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_53626);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e53689){var ex__51242__auto__ = e53689;
var statearr_53690_55179 = state_53626;
(statearr_53690_55179[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_53626[(4)]))){
var statearr_53691_55180 = state_53626;
(statearr_53691_55180[(1)] = cljs.core.first((state_53626[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55183 = state_53626;
state_53626 = G__55183;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_53626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_53626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_53692 = f__52288__auto__();
(statearr_53692[(6)] = c__52287__auto___55122);

return statearr_53692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53699 = arguments.length;
switch (G__53699) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53717 = arguments.length;
switch (G__53717) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53721 = arguments.length;
switch (G__53721) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__52287__auto___55190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_53768){
var state_val_53769 = (state_53768[(1)]);
if((state_val_53769 === (7))){
var state_53768__$1 = state_53768;
var statearr_53770_55191 = state_53768__$1;
(statearr_53770_55191[(2)] = null);

(statearr_53770_55191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (1))){
var state_53768__$1 = state_53768;
var statearr_53781_55195 = state_53768__$1;
(statearr_53781_55195[(2)] = null);

(statearr_53781_55195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (4))){
var inst_53727 = (state_53768[(7)]);
var inst_53728 = (state_53768[(8)]);
var inst_53730 = (inst_53728 < inst_53727);
var state_53768__$1 = state_53768;
if(cljs.core.truth_(inst_53730)){
var statearr_53786_55199 = state_53768__$1;
(statearr_53786_55199[(1)] = (6));

} else {
var statearr_53787_55200 = state_53768__$1;
(statearr_53787_55200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (15))){
var inst_53754 = (state_53768[(9)]);
var inst_53759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53754);
var state_53768__$1 = state_53768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53768__$1,(17),out,inst_53759);
} else {
if((state_val_53769 === (13))){
var inst_53754 = (state_53768[(9)]);
var inst_53754__$1 = (state_53768[(2)]);
var inst_53755 = cljs.core.some(cljs.core.nil_QMARK_,inst_53754__$1);
var state_53768__$1 = (function (){var statearr_53788 = state_53768;
(statearr_53788[(9)] = inst_53754__$1);

return statearr_53788;
})();
if(cljs.core.truth_(inst_53755)){
var statearr_53789_55201 = state_53768__$1;
(statearr_53789_55201[(1)] = (14));

} else {
var statearr_53790_55203 = state_53768__$1;
(statearr_53790_55203[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (6))){
var state_53768__$1 = state_53768;
var statearr_53791_55204 = state_53768__$1;
(statearr_53791_55204[(2)] = null);

(statearr_53791_55204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (17))){
var inst_53761 = (state_53768[(2)]);
var state_53768__$1 = (function (){var statearr_53796 = state_53768;
(statearr_53796[(10)] = inst_53761);

return statearr_53796;
})();
var statearr_53797_55205 = state_53768__$1;
(statearr_53797_55205[(2)] = null);

(statearr_53797_55205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (3))){
var inst_53766 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53768__$1,inst_53766);
} else {
if((state_val_53769 === (12))){
var _ = (function (){var statearr_53798 = state_53768;
(statearr_53798[(4)] = cljs.core.rest((state_53768[(4)])));

return statearr_53798;
})();
var state_53768__$1 = state_53768;
var ex53795 = (state_53768__$1[(2)]);
var statearr_53799_55208 = state_53768__$1;
(statearr_53799_55208[(5)] = ex53795);


if((ex53795 instanceof Object)){
var statearr_53800_55209 = state_53768__$1;
(statearr_53800_55209[(1)] = (11));

(statearr_53800_55209[(5)] = null);

} else {
throw ex53795;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (2))){
var inst_53726 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53727 = cnt;
var inst_53728 = (0);
var state_53768__$1 = (function (){var statearr_53804 = state_53768;
(statearr_53804[(11)] = inst_53726);

(statearr_53804[(7)] = inst_53727);

(statearr_53804[(8)] = inst_53728);

return statearr_53804;
})();
var statearr_53805_55210 = state_53768__$1;
(statearr_53805_55210[(2)] = null);

(statearr_53805_55210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (11))){
var inst_53732 = (state_53768[(2)]);
var inst_53734 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53768__$1 = (function (){var statearr_53806 = state_53768;
(statearr_53806[(12)] = inst_53732);

return statearr_53806;
})();
var statearr_53807_55214 = state_53768__$1;
(statearr_53807_55214[(2)] = inst_53734);

(statearr_53807_55214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (9))){
var inst_53728 = (state_53768[(8)]);
var _ = (function (){var statearr_53808 = state_53768;
(statearr_53808[(4)] = cljs.core.cons((12),(state_53768[(4)])));

return statearr_53808;
})();
var inst_53740 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53728) : chs__$1.call(null,inst_53728));
var inst_53741 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53728) : done.call(null,inst_53728));
var inst_53742 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53740,inst_53741);
var ___$1 = (function (){var statearr_53809 = state_53768;
(statearr_53809[(4)] = cljs.core.rest((state_53768[(4)])));

return statearr_53809;
})();
var state_53768__$1 = state_53768;
var statearr_53810_55215 = state_53768__$1;
(statearr_53810_55215[(2)] = inst_53742);

(statearr_53810_55215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (5))){
var inst_53752 = (state_53768[(2)]);
var state_53768__$1 = (function (){var statearr_53811 = state_53768;
(statearr_53811[(13)] = inst_53752);

return statearr_53811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53768__$1,(13),dchan);
} else {
if((state_val_53769 === (14))){
var inst_53757 = cljs.core.async.close_BANG_(out);
var state_53768__$1 = state_53768;
var statearr_53812_55223 = state_53768__$1;
(statearr_53812_55223[(2)] = inst_53757);

(statearr_53812_55223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (16))){
var inst_53764 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53813_55225 = state_53768__$1;
(statearr_53813_55225[(2)] = inst_53764);

(statearr_53813_55225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (10))){
var inst_53728 = (state_53768[(8)]);
var inst_53745 = (state_53768[(2)]);
var inst_53746 = (inst_53728 + (1));
var inst_53728__$1 = inst_53746;
var state_53768__$1 = (function (){var statearr_53814 = state_53768;
(statearr_53814[(14)] = inst_53745);

(statearr_53814[(8)] = inst_53728__$1);

return statearr_53814;
})();
var statearr_53815_55226 = state_53768__$1;
(statearr_53815_55226[(2)] = null);

(statearr_53815_55226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (8))){
var inst_53750 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53816_55227 = state_53768__$1;
(statearr_53816_55227[(2)] = inst_53750);

(statearr_53816_55227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_53817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53817[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_53817[(1)] = (1));

return statearr_53817;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_53768){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_53768);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e53818){var ex__51242__auto__ = e53818;
var statearr_53819_55232 = state_53768;
(statearr_53819_55232[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_53768[(4)]))){
var statearr_53820_55233 = state_53768;
(statearr_53820_55233[(1)] = cljs.core.first((state_53768[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55236 = state_53768;
state_53768 = G__55236;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_53768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_53768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_53821 = f__52288__auto__();
(statearr_53821[(6)] = c__52287__auto___55190);

return statearr_53821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53824 = arguments.length;
switch (G__53824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52287__auto___55244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_53872){
var state_val_53873 = (state_53872[(1)]);
if((state_val_53873 === (7))){
var inst_53842 = (state_53872[(7)]);
var inst_53841 = (state_53872[(8)]);
var inst_53841__$1 = (state_53872[(2)]);
var inst_53842__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53841__$1,(0),null);
var inst_53843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53841__$1,(1),null);
var inst_53844 = (inst_53842__$1 == null);
var state_53872__$1 = (function (){var statearr_53877 = state_53872;
(statearr_53877[(9)] = inst_53843);

(statearr_53877[(7)] = inst_53842__$1);

(statearr_53877[(8)] = inst_53841__$1);

return statearr_53877;
})();
if(cljs.core.truth_(inst_53844)){
var statearr_53878_55247 = state_53872__$1;
(statearr_53878_55247[(1)] = (8));

} else {
var statearr_53879_55249 = state_53872__$1;
(statearr_53879_55249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (1))){
var inst_53831 = cljs.core.vec(chs);
var inst_53832 = inst_53831;
var state_53872__$1 = (function (){var statearr_53883 = state_53872;
(statearr_53883[(10)] = inst_53832);

return statearr_53883;
})();
var statearr_53884_55251 = state_53872__$1;
(statearr_53884_55251[(2)] = null);

(statearr_53884_55251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (4))){
var inst_53832 = (state_53872[(10)]);
var state_53872__$1 = state_53872;
return cljs.core.async.ioc_alts_BANG_(state_53872__$1,(7),inst_53832);
} else {
if((state_val_53873 === (6))){
var inst_53868 = (state_53872[(2)]);
var state_53872__$1 = state_53872;
var statearr_53886_55255 = state_53872__$1;
(statearr_53886_55255[(2)] = inst_53868);

(statearr_53886_55255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (3))){
var inst_53870 = (state_53872[(2)]);
var state_53872__$1 = state_53872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53872__$1,inst_53870);
} else {
if((state_val_53873 === (2))){
var inst_53832 = (state_53872[(10)]);
var inst_53834 = cljs.core.count(inst_53832);
var inst_53835 = (inst_53834 > (0));
var state_53872__$1 = state_53872;
if(cljs.core.truth_(inst_53835)){
var statearr_53891_55258 = state_53872__$1;
(statearr_53891_55258[(1)] = (4));

} else {
var statearr_53892_55261 = state_53872__$1;
(statearr_53892_55261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (11))){
var inst_53832 = (state_53872[(10)]);
var inst_53861 = (state_53872[(2)]);
var tmp53887 = inst_53832;
var inst_53832__$1 = tmp53887;
var state_53872__$1 = (function (){var statearr_53896 = state_53872;
(statearr_53896[(10)] = inst_53832__$1);

(statearr_53896[(11)] = inst_53861);

return statearr_53896;
})();
var statearr_53898_55265 = state_53872__$1;
(statearr_53898_55265[(2)] = null);

(statearr_53898_55265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (9))){
var inst_53842 = (state_53872[(7)]);
var state_53872__$1 = state_53872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53872__$1,(11),out,inst_53842);
} else {
if((state_val_53873 === (5))){
var inst_53866 = cljs.core.async.close_BANG_(out);
var state_53872__$1 = state_53872;
var statearr_53903_55270 = state_53872__$1;
(statearr_53903_55270[(2)] = inst_53866);

(statearr_53903_55270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (10))){
var inst_53864 = (state_53872[(2)]);
var state_53872__$1 = state_53872;
var statearr_53904_55276 = state_53872__$1;
(statearr_53904_55276[(2)] = inst_53864);

(statearr_53904_55276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53873 === (8))){
var inst_53832 = (state_53872[(10)]);
var inst_53843 = (state_53872[(9)]);
var inst_53842 = (state_53872[(7)]);
var inst_53841 = (state_53872[(8)]);
var inst_53852 = (function (){var cs = inst_53832;
var vec__53837 = inst_53841;
var v = inst_53842;
var c = inst_53843;
return (function (p1__53822_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53822_SHARP_);
});
})();
var inst_53857 = cljs.core.filterv(inst_53852,inst_53832);
var inst_53832__$1 = inst_53857;
var state_53872__$1 = (function (){var statearr_53905 = state_53872;
(statearr_53905[(10)] = inst_53832__$1);

return statearr_53905;
})();
var statearr_53906_55282 = state_53872__$1;
(statearr_53906_55282[(2)] = null);

(statearr_53906_55282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_53907 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53907[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_53907[(1)] = (1));

return statearr_53907;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_53872){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_53872);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e53908){var ex__51242__auto__ = e53908;
var statearr_53909_55287 = state_53872;
(statearr_53909_55287[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_53872[(4)]))){
var statearr_53910_55288 = state_53872;
(statearr_53910_55288[(1)] = cljs.core.first((state_53872[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55289 = state_53872;
state_53872 = G__55289;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_53872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_53872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_53915 = f__52288__auto__();
(statearr_53915[(6)] = c__52287__auto___55244);

return statearr_53915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53917 = arguments.length;
switch (G__53917) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52287__auto___55296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_53941){
var state_val_53942 = (state_53941[(1)]);
if((state_val_53942 === (7))){
var inst_53923 = (state_53941[(7)]);
var inst_53923__$1 = (state_53941[(2)]);
var inst_53924 = (inst_53923__$1 == null);
var inst_53925 = cljs.core.not(inst_53924);
var state_53941__$1 = (function (){var statearr_53944 = state_53941;
(statearr_53944[(7)] = inst_53923__$1);

return statearr_53944;
})();
if(inst_53925){
var statearr_53945_55299 = state_53941__$1;
(statearr_53945_55299[(1)] = (8));

} else {
var statearr_53946_55300 = state_53941__$1;
(statearr_53946_55300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (1))){
var inst_53918 = (0);
var state_53941__$1 = (function (){var statearr_53947 = state_53941;
(statearr_53947[(8)] = inst_53918);

return statearr_53947;
})();
var statearr_53948_55301 = state_53941__$1;
(statearr_53948_55301[(2)] = null);

(statearr_53948_55301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (4))){
var state_53941__$1 = state_53941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53941__$1,(7),ch);
} else {
if((state_val_53942 === (6))){
var inst_53936 = (state_53941[(2)]);
var state_53941__$1 = state_53941;
var statearr_53949_55302 = state_53941__$1;
(statearr_53949_55302[(2)] = inst_53936);

(statearr_53949_55302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (3))){
var inst_53938 = (state_53941[(2)]);
var inst_53939 = cljs.core.async.close_BANG_(out);
var state_53941__$1 = (function (){var statearr_53950 = state_53941;
(statearr_53950[(9)] = inst_53938);

return statearr_53950;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53941__$1,inst_53939);
} else {
if((state_val_53942 === (2))){
var inst_53918 = (state_53941[(8)]);
var inst_53920 = (inst_53918 < n);
var state_53941__$1 = state_53941;
if(cljs.core.truth_(inst_53920)){
var statearr_53951_55310 = state_53941__$1;
(statearr_53951_55310[(1)] = (4));

} else {
var statearr_53952_55311 = state_53941__$1;
(statearr_53952_55311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (11))){
var inst_53918 = (state_53941[(8)]);
var inst_53928 = (state_53941[(2)]);
var inst_53929 = (inst_53918 + (1));
var inst_53918__$1 = inst_53929;
var state_53941__$1 = (function (){var statearr_53954 = state_53941;
(statearr_53954[(8)] = inst_53918__$1);

(statearr_53954[(10)] = inst_53928);

return statearr_53954;
})();
var statearr_53955_55313 = state_53941__$1;
(statearr_53955_55313[(2)] = null);

(statearr_53955_55313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (9))){
var state_53941__$1 = state_53941;
var statearr_53956_55315 = state_53941__$1;
(statearr_53956_55315[(2)] = null);

(statearr_53956_55315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (5))){
var state_53941__$1 = state_53941;
var statearr_53959_55316 = state_53941__$1;
(statearr_53959_55316[(2)] = null);

(statearr_53959_55316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (10))){
var inst_53933 = (state_53941[(2)]);
var state_53941__$1 = state_53941;
var statearr_53960_55321 = state_53941__$1;
(statearr_53960_55321[(2)] = inst_53933);

(statearr_53960_55321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53942 === (8))){
var inst_53923 = (state_53941[(7)]);
var state_53941__$1 = state_53941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53941__$1,(11),out,inst_53923);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_53961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53961[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_53961[(1)] = (1));

return statearr_53961;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_53941){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_53941);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e53962){var ex__51242__auto__ = e53962;
var statearr_53963_55325 = state_53941;
(statearr_53963_55325[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_53941[(4)]))){
var statearr_53964_55326 = state_53941;
(statearr_53964_55326[(1)] = cljs.core.first((state_53941[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55327 = state_53941;
state_53941 = G__55327;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_53941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_53941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_53965 = f__52288__auto__();
(statearr_53965[(6)] = c__52287__auto___55296);

return statearr_53965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53971 = (function (f,ch,meta53972){
this.f = f;
this.ch = ch;
this.meta53972 = meta53972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53973,meta53972__$1){
var self__ = this;
var _53973__$1 = this;
return (new cljs.core.async.t_cljs$core$async53971(self__.f,self__.ch,meta53972__$1));
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53973){
var self__ = this;
var _53973__$1 = this;
return self__.meta53972;
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53974 = (function (f,ch,meta53972,_,fn1,meta53975){
this.f = f;
this.ch = ch;
this.meta53972 = meta53972;
this._ = _;
this.fn1 = fn1;
this.meta53975 = meta53975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53976,meta53975__$1){
var self__ = this;
var _53976__$1 = this;
return (new cljs.core.async.t_cljs$core$async53974(self__.f,self__.ch,self__.meta53972,self__._,self__.fn1,meta53975__$1));
}));

(cljs.core.async.t_cljs$core$async53974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53976){
var self__ = this;
var _53976__$1 = this;
return self__.meta53975;
}));

(cljs.core.async.t_cljs$core$async53974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__53966_SHARP_){
var G__53981 = (((p1__53966_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53966_SHARP_) : self__.f.call(null,p1__53966_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53981) : f1.call(null,G__53981));
});
}));

(cljs.core.async.t_cljs$core$async53974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53972","meta53972",-1822485000,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53971","cljs.core.async/t_cljs$core$async53971",-356516888,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53975","meta53975",-102848189,null)], null);
}));

(cljs.core.async.t_cljs$core$async53974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53974");

(cljs.core.async.t_cljs$core$async53974.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53974.
 */
cljs.core.async.__GT_t_cljs$core$async53974 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53974(f__$1,ch__$1,meta53972__$1,___$2,fn1__$1,meta53975){
return (new cljs.core.async.t_cljs$core$async53974(f__$1,ch__$1,meta53972__$1,___$2,fn1__$1,meta53975));
});

}

return (new cljs.core.async.t_cljs$core$async53974(self__.f,self__.ch,self__.meta53972,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53982 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53982) : self__.f.call(null,G__53982));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53972","meta53972",-1822485000,null)], null);
}));

(cljs.core.async.t_cljs$core$async53971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53971");

(cljs.core.async.t_cljs$core$async53971.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53971.
 */
cljs.core.async.__GT_t_cljs$core$async53971 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53971(f__$1,ch__$1,meta53972){
return (new cljs.core.async.t_cljs$core$async53971(f__$1,ch__$1,meta53972));
});

}

return (new cljs.core.async.t_cljs$core$async53971(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53984 = (function (f,ch,meta53985){
this.f = f;
this.ch = ch;
this.meta53985 = meta53985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53986,meta53985__$1){
var self__ = this;
var _53986__$1 = this;
return (new cljs.core.async.t_cljs$core$async53984(self__.f,self__.ch,meta53985__$1));
}));

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53986){
var self__ = this;
var _53986__$1 = this;
return self__.meta53985;
}));

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async53984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53985","meta53985",1104240726,null)], null);
}));

(cljs.core.async.t_cljs$core$async53984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53984");

(cljs.core.async.t_cljs$core$async53984.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53984.
 */
cljs.core.async.__GT_t_cljs$core$async53984 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53984(f__$1,ch__$1,meta53985){
return (new cljs.core.async.t_cljs$core$async53984(f__$1,ch__$1,meta53985));
});

}

return (new cljs.core.async.t_cljs$core$async53984(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53987 = (function (p,ch,meta53988){
this.p = p;
this.ch = ch;
this.meta53988 = meta53988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53989,meta53988__$1){
var self__ = this;
var _53989__$1 = this;
return (new cljs.core.async.t_cljs$core$async53987(self__.p,self__.ch,meta53988__$1));
}));

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53989){
var self__ = this;
var _53989__$1 = this;
return self__.meta53988;
}));

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53988","meta53988",-1345076577,null)], null);
}));

(cljs.core.async.t_cljs$core$async53987.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53987");

(cljs.core.async.t_cljs$core$async53987.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53987");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53987.
 */
cljs.core.async.__GT_t_cljs$core$async53987 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53987(p__$1,ch__$1,meta53988){
return (new cljs.core.async.t_cljs$core$async53987(p__$1,ch__$1,meta53988));
});

}

return (new cljs.core.async.t_cljs$core$async53987(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53991 = arguments.length;
switch (G__53991) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52287__auto___55336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_54012){
var state_val_54013 = (state_54012[(1)]);
if((state_val_54013 === (7))){
var inst_54008 = (state_54012[(2)]);
var state_54012__$1 = state_54012;
var statearr_54015_55337 = state_54012__$1;
(statearr_54015_55337[(2)] = inst_54008);

(statearr_54015_55337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (1))){
var state_54012__$1 = state_54012;
var statearr_54016_55338 = state_54012__$1;
(statearr_54016_55338[(2)] = null);

(statearr_54016_55338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (4))){
var inst_53994 = (state_54012[(7)]);
var inst_53994__$1 = (state_54012[(2)]);
var inst_53995 = (inst_53994__$1 == null);
var state_54012__$1 = (function (){var statearr_54017 = state_54012;
(statearr_54017[(7)] = inst_53994__$1);

return statearr_54017;
})();
if(cljs.core.truth_(inst_53995)){
var statearr_54018_55339 = state_54012__$1;
(statearr_54018_55339[(1)] = (5));

} else {
var statearr_54019_55340 = state_54012__$1;
(statearr_54019_55340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (6))){
var inst_53994 = (state_54012[(7)]);
var inst_53999 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53994) : p.call(null,inst_53994));
var state_54012__$1 = state_54012;
if(cljs.core.truth_(inst_53999)){
var statearr_54020_55342 = state_54012__$1;
(statearr_54020_55342[(1)] = (8));

} else {
var statearr_54021_55343 = state_54012__$1;
(statearr_54021_55343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (3))){
var inst_54010 = (state_54012[(2)]);
var state_54012__$1 = state_54012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54012__$1,inst_54010);
} else {
if((state_val_54013 === (2))){
var state_54012__$1 = state_54012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54012__$1,(4),ch);
} else {
if((state_val_54013 === (11))){
var inst_54002 = (state_54012[(2)]);
var state_54012__$1 = state_54012;
var statearr_54022_55348 = state_54012__$1;
(statearr_54022_55348[(2)] = inst_54002);

(statearr_54022_55348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (9))){
var state_54012__$1 = state_54012;
var statearr_54023_55349 = state_54012__$1;
(statearr_54023_55349[(2)] = null);

(statearr_54023_55349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (5))){
var inst_53997 = cljs.core.async.close_BANG_(out);
var state_54012__$1 = state_54012;
var statearr_54024_55350 = state_54012__$1;
(statearr_54024_55350[(2)] = inst_53997);

(statearr_54024_55350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (10))){
var inst_54005 = (state_54012[(2)]);
var state_54012__$1 = (function (){var statearr_54025 = state_54012;
(statearr_54025[(8)] = inst_54005);

return statearr_54025;
})();
var statearr_54026_55351 = state_54012__$1;
(statearr_54026_55351[(2)] = null);

(statearr_54026_55351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54013 === (8))){
var inst_53994 = (state_54012[(7)]);
var state_54012__$1 = state_54012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54012__$1,(11),out,inst_53994);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_54027 = [null,null,null,null,null,null,null,null,null];
(statearr_54027[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_54027[(1)] = (1));

return statearr_54027;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_54012){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_54012);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e54028){var ex__51242__auto__ = e54028;
var statearr_54029_55353 = state_54012;
(statearr_54029_55353[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_54012[(4)]))){
var statearr_54030_55354 = state_54012;
(statearr_54030_55354[(1)] = cljs.core.first((state_54012[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55355 = state_54012;
state_54012 = G__55355;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_54012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_54012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_54031 = f__52288__auto__();
(statearr_54031[(6)] = c__52287__auto___55336);

return statearr_54031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54033 = arguments.length;
switch (G__54033) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__52287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_54102){
var state_val_54103 = (state_54102[(1)]);
if((state_val_54103 === (7))){
var inst_54098 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
var statearr_54104_55361 = state_54102__$1;
(statearr_54104_55361[(2)] = inst_54098);

(statearr_54104_55361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (20))){
var inst_54068 = (state_54102[(7)]);
var inst_54079 = (state_54102[(2)]);
var inst_54080 = cljs.core.next(inst_54068);
var inst_54047 = inst_54080;
var inst_54048 = null;
var inst_54049 = (0);
var inst_54050 = (0);
var state_54102__$1 = (function (){var statearr_54105 = state_54102;
(statearr_54105[(8)] = inst_54050);

(statearr_54105[(9)] = inst_54048);

(statearr_54105[(10)] = inst_54049);

(statearr_54105[(11)] = inst_54079);

(statearr_54105[(12)] = inst_54047);

return statearr_54105;
})();
var statearr_54106_55363 = state_54102__$1;
(statearr_54106_55363[(2)] = null);

(statearr_54106_55363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (1))){
var state_54102__$1 = state_54102;
var statearr_54107_55364 = state_54102__$1;
(statearr_54107_55364[(2)] = null);

(statearr_54107_55364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (4))){
var inst_54036 = (state_54102[(13)]);
var inst_54036__$1 = (state_54102[(2)]);
var inst_54037 = (inst_54036__$1 == null);
var state_54102__$1 = (function (){var statearr_54108 = state_54102;
(statearr_54108[(13)] = inst_54036__$1);

return statearr_54108;
})();
if(cljs.core.truth_(inst_54037)){
var statearr_54109_55365 = state_54102__$1;
(statearr_54109_55365[(1)] = (5));

} else {
var statearr_54110_55366 = state_54102__$1;
(statearr_54110_55366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (15))){
var state_54102__$1 = state_54102;
var statearr_54114_55368 = state_54102__$1;
(statearr_54114_55368[(2)] = null);

(statearr_54114_55368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (21))){
var state_54102__$1 = state_54102;
var statearr_54115_55372 = state_54102__$1;
(statearr_54115_55372[(2)] = null);

(statearr_54115_55372[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (13))){
var inst_54050 = (state_54102[(8)]);
var inst_54048 = (state_54102[(9)]);
var inst_54049 = (state_54102[(10)]);
var inst_54047 = (state_54102[(12)]);
var inst_54063 = (state_54102[(2)]);
var inst_54064 = (inst_54050 + (1));
var tmp54111 = inst_54048;
var tmp54112 = inst_54049;
var tmp54113 = inst_54047;
var inst_54047__$1 = tmp54113;
var inst_54048__$1 = tmp54111;
var inst_54049__$1 = tmp54112;
var inst_54050__$1 = inst_54064;
var state_54102__$1 = (function (){var statearr_54116 = state_54102;
(statearr_54116[(14)] = inst_54063);

(statearr_54116[(8)] = inst_54050__$1);

(statearr_54116[(9)] = inst_54048__$1);

(statearr_54116[(10)] = inst_54049__$1);

(statearr_54116[(12)] = inst_54047__$1);

return statearr_54116;
})();
var statearr_54117_55373 = state_54102__$1;
(statearr_54117_55373[(2)] = null);

(statearr_54117_55373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (22))){
var state_54102__$1 = state_54102;
var statearr_54118_55374 = state_54102__$1;
(statearr_54118_55374[(2)] = null);

(statearr_54118_55374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (6))){
var inst_54036 = (state_54102[(13)]);
var inst_54045 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54036) : f.call(null,inst_54036));
var inst_54046 = cljs.core.seq(inst_54045);
var inst_54047 = inst_54046;
var inst_54048 = null;
var inst_54049 = (0);
var inst_54050 = (0);
var state_54102__$1 = (function (){var statearr_54119 = state_54102;
(statearr_54119[(8)] = inst_54050);

(statearr_54119[(9)] = inst_54048);

(statearr_54119[(10)] = inst_54049);

(statearr_54119[(12)] = inst_54047);

return statearr_54119;
})();
var statearr_54120_55376 = state_54102__$1;
(statearr_54120_55376[(2)] = null);

(statearr_54120_55376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (17))){
var inst_54068 = (state_54102[(7)]);
var inst_54072 = cljs.core.chunk_first(inst_54068);
var inst_54073 = cljs.core.chunk_rest(inst_54068);
var inst_54074 = cljs.core.count(inst_54072);
var inst_54047 = inst_54073;
var inst_54048 = inst_54072;
var inst_54049 = inst_54074;
var inst_54050 = (0);
var state_54102__$1 = (function (){var statearr_54121 = state_54102;
(statearr_54121[(8)] = inst_54050);

(statearr_54121[(9)] = inst_54048);

(statearr_54121[(10)] = inst_54049);

(statearr_54121[(12)] = inst_54047);

return statearr_54121;
})();
var statearr_54122_55378 = state_54102__$1;
(statearr_54122_55378[(2)] = null);

(statearr_54122_55378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (3))){
var inst_54100 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54102__$1,inst_54100);
} else {
if((state_val_54103 === (12))){
var inst_54088 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
var statearr_54123_55382 = state_54102__$1;
(statearr_54123_55382[(2)] = inst_54088);

(statearr_54123_55382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (2))){
var state_54102__$1 = state_54102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54102__$1,(4),in$);
} else {
if((state_val_54103 === (23))){
var inst_54096 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
var statearr_54124_55385 = state_54102__$1;
(statearr_54124_55385[(2)] = inst_54096);

(statearr_54124_55385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (19))){
var inst_54083 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
var statearr_54125_55387 = state_54102__$1;
(statearr_54125_55387[(2)] = inst_54083);

(statearr_54125_55387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (11))){
var inst_54047 = (state_54102[(12)]);
var inst_54068 = (state_54102[(7)]);
var inst_54068__$1 = cljs.core.seq(inst_54047);
var state_54102__$1 = (function (){var statearr_54126 = state_54102;
(statearr_54126[(7)] = inst_54068__$1);

return statearr_54126;
})();
if(inst_54068__$1){
var statearr_54127_55388 = state_54102__$1;
(statearr_54127_55388[(1)] = (14));

} else {
var statearr_54128_55389 = state_54102__$1;
(statearr_54128_55389[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (9))){
var inst_54090 = (state_54102[(2)]);
var inst_54091 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54102__$1 = (function (){var statearr_54129 = state_54102;
(statearr_54129[(15)] = inst_54090);

return statearr_54129;
})();
if(cljs.core.truth_(inst_54091)){
var statearr_54130_55394 = state_54102__$1;
(statearr_54130_55394[(1)] = (21));

} else {
var statearr_54131_55396 = state_54102__$1;
(statearr_54131_55396[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (5))){
var inst_54039 = cljs.core.async.close_BANG_(out);
var state_54102__$1 = state_54102;
var statearr_54134_55397 = state_54102__$1;
(statearr_54134_55397[(2)] = inst_54039);

(statearr_54134_55397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (14))){
var inst_54068 = (state_54102[(7)]);
var inst_54070 = cljs.core.chunked_seq_QMARK_(inst_54068);
var state_54102__$1 = state_54102;
if(inst_54070){
var statearr_54135_55398 = state_54102__$1;
(statearr_54135_55398[(1)] = (17));

} else {
var statearr_54136_55399 = state_54102__$1;
(statearr_54136_55399[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (16))){
var inst_54086 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
var statearr_54137_55401 = state_54102__$1;
(statearr_54137_55401[(2)] = inst_54086);

(statearr_54137_55401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54103 === (10))){
var inst_54050 = (state_54102[(8)]);
var inst_54048 = (state_54102[(9)]);
var inst_54061 = cljs.core._nth(inst_54048,inst_54050);
var state_54102__$1 = state_54102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54102__$1,(13),out,inst_54061);
} else {
if((state_val_54103 === (18))){
var inst_54068 = (state_54102[(7)]);
var inst_54077 = cljs.core.first(inst_54068);
var state_54102__$1 = state_54102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54102__$1,(20),out,inst_54077);
} else {
if((state_val_54103 === (8))){
var inst_54050 = (state_54102[(8)]);
var inst_54049 = (state_54102[(10)]);
var inst_54056 = (inst_54050 < inst_54049);
var inst_54059 = inst_54056;
var state_54102__$1 = state_54102;
if(cljs.core.truth_(inst_54059)){
var statearr_54138_55402 = state_54102__$1;
(statearr_54138_55402[(1)] = (10));

} else {
var statearr_54139_55403 = state_54102__$1;
(statearr_54139_55403[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51239__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51239__auto____0 = (function (){
var statearr_54140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54140[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51239__auto__);

(statearr_54140[(1)] = (1));

return statearr_54140;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51239__auto____1 = (function (state_54102){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_54102);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e54141){var ex__51242__auto__ = e54141;
var statearr_54142_55404 = state_54102;
(statearr_54142_55404[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_54102[(4)]))){
var statearr_54143_55405 = state_54102;
(statearr_54143_55405[(1)] = cljs.core.first((state_54102[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55406 = state_54102;
state_54102 = G__55406;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51239__auto__ = function(state_54102){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51239__auto____1.call(this,state_54102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51239__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51239__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_54144 = f__52288__auto__();
(statearr_54144[(6)] = c__52287__auto__);

return statearr_54144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));

return c__52287__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54147 = arguments.length;
switch (G__54147) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__54150 = arguments.length;
switch (G__54150) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__54152 = arguments.length;
switch (G__54152) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52287__auto___55417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_54176){
var state_val_54177 = (state_54176[(1)]);
if((state_val_54177 === (7))){
var inst_54171 = (state_54176[(2)]);
var state_54176__$1 = state_54176;
var statearr_54178_55419 = state_54176__$1;
(statearr_54178_55419[(2)] = inst_54171);

(statearr_54178_55419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (1))){
var inst_54153 = null;
var state_54176__$1 = (function (){var statearr_54179 = state_54176;
(statearr_54179[(7)] = inst_54153);

return statearr_54179;
})();
var statearr_54180_55425 = state_54176__$1;
(statearr_54180_55425[(2)] = null);

(statearr_54180_55425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (4))){
var inst_54156 = (state_54176[(8)]);
var inst_54156__$1 = (state_54176[(2)]);
var inst_54157 = (inst_54156__$1 == null);
var inst_54158 = cljs.core.not(inst_54157);
var state_54176__$1 = (function (){var statearr_54181 = state_54176;
(statearr_54181[(8)] = inst_54156__$1);

return statearr_54181;
})();
if(inst_54158){
var statearr_54182_55426 = state_54176__$1;
(statearr_54182_55426[(1)] = (5));

} else {
var statearr_54183_55427 = state_54176__$1;
(statearr_54183_55427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (6))){
var state_54176__$1 = state_54176;
var statearr_54184_55429 = state_54176__$1;
(statearr_54184_55429[(2)] = null);

(statearr_54184_55429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (3))){
var inst_54173 = (state_54176[(2)]);
var inst_54174 = cljs.core.async.close_BANG_(out);
var state_54176__$1 = (function (){var statearr_54185 = state_54176;
(statearr_54185[(9)] = inst_54173);

return statearr_54185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54176__$1,inst_54174);
} else {
if((state_val_54177 === (2))){
var state_54176__$1 = state_54176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54176__$1,(4),ch);
} else {
if((state_val_54177 === (11))){
var inst_54156 = (state_54176[(8)]);
var inst_54165 = (state_54176[(2)]);
var inst_54153 = inst_54156;
var state_54176__$1 = (function (){var statearr_54190 = state_54176;
(statearr_54190[(10)] = inst_54165);

(statearr_54190[(7)] = inst_54153);

return statearr_54190;
})();
var statearr_54191_55435 = state_54176__$1;
(statearr_54191_55435[(2)] = null);

(statearr_54191_55435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (9))){
var inst_54156 = (state_54176[(8)]);
var state_54176__$1 = state_54176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54176__$1,(11),out,inst_54156);
} else {
if((state_val_54177 === (5))){
var inst_54153 = (state_54176[(7)]);
var inst_54156 = (state_54176[(8)]);
var inst_54160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54156,inst_54153);
var state_54176__$1 = state_54176;
if(inst_54160){
var statearr_54193_55436 = state_54176__$1;
(statearr_54193_55436[(1)] = (8));

} else {
var statearr_54194_55437 = state_54176__$1;
(statearr_54194_55437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (10))){
var inst_54168 = (state_54176[(2)]);
var state_54176__$1 = state_54176;
var statearr_54195_55440 = state_54176__$1;
(statearr_54195_55440[(2)] = inst_54168);

(statearr_54195_55440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54177 === (8))){
var inst_54153 = (state_54176[(7)]);
var tmp54192 = inst_54153;
var inst_54153__$1 = tmp54192;
var state_54176__$1 = (function (){var statearr_54196 = state_54176;
(statearr_54196[(7)] = inst_54153__$1);

return statearr_54196;
})();
var statearr_54197_55441 = state_54176__$1;
(statearr_54197_55441[(2)] = null);

(statearr_54197_55441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_54198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54198[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_54198[(1)] = (1));

return statearr_54198;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_54176){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_54176);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e54199){var ex__51242__auto__ = e54199;
var statearr_54200_55444 = state_54176;
(statearr_54200_55444[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_54176[(4)]))){
var statearr_54201_55445 = state_54176;
(statearr_54201_55445[(1)] = cljs.core.first((state_54176[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55446 = state_54176;
state_54176 = G__55446;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_54176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_54176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_54203 = f__52288__auto__();
(statearr_54203[(6)] = c__52287__auto___55417);

return statearr_54203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54209 = arguments.length;
switch (G__54209) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52287__auto___55448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_54247){
var state_val_54248 = (state_54247[(1)]);
if((state_val_54248 === (7))){
var inst_54243 = (state_54247[(2)]);
var state_54247__$1 = state_54247;
var statearr_54249_55449 = state_54247__$1;
(statearr_54249_55449[(2)] = inst_54243);

(statearr_54249_55449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (1))){
var inst_54210 = (new Array(n));
var inst_54211 = inst_54210;
var inst_54212 = (0);
var state_54247__$1 = (function (){var statearr_54250 = state_54247;
(statearr_54250[(7)] = inst_54212);

(statearr_54250[(8)] = inst_54211);

return statearr_54250;
})();
var statearr_54251_55451 = state_54247__$1;
(statearr_54251_55451[(2)] = null);

(statearr_54251_55451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (4))){
var inst_54215 = (state_54247[(9)]);
var inst_54215__$1 = (state_54247[(2)]);
var inst_54216 = (inst_54215__$1 == null);
var inst_54217 = cljs.core.not(inst_54216);
var state_54247__$1 = (function (){var statearr_54252 = state_54247;
(statearr_54252[(9)] = inst_54215__$1);

return statearr_54252;
})();
if(inst_54217){
var statearr_54253_55452 = state_54247__$1;
(statearr_54253_55452[(1)] = (5));

} else {
var statearr_54254_55453 = state_54247__$1;
(statearr_54254_55453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (15))){
var inst_54237 = (state_54247[(2)]);
var state_54247__$1 = state_54247;
var statearr_54255_55455 = state_54247__$1;
(statearr_54255_55455[(2)] = inst_54237);

(statearr_54255_55455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (13))){
var state_54247__$1 = state_54247;
var statearr_54257_55456 = state_54247__$1;
(statearr_54257_55456[(2)] = null);

(statearr_54257_55456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (6))){
var inst_54212 = (state_54247[(7)]);
var inst_54233 = (inst_54212 > (0));
var state_54247__$1 = state_54247;
if(cljs.core.truth_(inst_54233)){
var statearr_54258_55458 = state_54247__$1;
(statearr_54258_55458[(1)] = (12));

} else {
var statearr_54259_55459 = state_54247__$1;
(statearr_54259_55459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (3))){
var inst_54245 = (state_54247[(2)]);
var state_54247__$1 = state_54247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54247__$1,inst_54245);
} else {
if((state_val_54248 === (12))){
var inst_54211 = (state_54247[(8)]);
var inst_54235 = cljs.core.vec(inst_54211);
var state_54247__$1 = state_54247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54247__$1,(15),out,inst_54235);
} else {
if((state_val_54248 === (2))){
var state_54247__$1 = state_54247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54247__$1,(4),ch);
} else {
if((state_val_54248 === (11))){
var inst_54227 = (state_54247[(2)]);
var inst_54228 = (new Array(n));
var inst_54211 = inst_54228;
var inst_54212 = (0);
var state_54247__$1 = (function (){var statearr_54264 = state_54247;
(statearr_54264[(7)] = inst_54212);

(statearr_54264[(8)] = inst_54211);

(statearr_54264[(10)] = inst_54227);

return statearr_54264;
})();
var statearr_54265_55461 = state_54247__$1;
(statearr_54265_55461[(2)] = null);

(statearr_54265_55461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (9))){
var inst_54211 = (state_54247[(8)]);
var inst_54225 = cljs.core.vec(inst_54211);
var state_54247__$1 = state_54247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54247__$1,(11),out,inst_54225);
} else {
if((state_val_54248 === (5))){
var inst_54220 = (state_54247[(11)]);
var inst_54212 = (state_54247[(7)]);
var inst_54211 = (state_54247[(8)]);
var inst_54215 = (state_54247[(9)]);
var inst_54219 = (inst_54211[inst_54212] = inst_54215);
var inst_54220__$1 = (inst_54212 + (1));
var inst_54221 = (inst_54220__$1 < n);
var state_54247__$1 = (function (){var statearr_54266 = state_54247;
(statearr_54266[(11)] = inst_54220__$1);

(statearr_54266[(12)] = inst_54219);

return statearr_54266;
})();
if(cljs.core.truth_(inst_54221)){
var statearr_54267_55465 = state_54247__$1;
(statearr_54267_55465[(1)] = (8));

} else {
var statearr_54268_55466 = state_54247__$1;
(statearr_54268_55466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (14))){
var inst_54240 = (state_54247[(2)]);
var inst_54241 = cljs.core.async.close_BANG_(out);
var state_54247__$1 = (function (){var statearr_54270 = state_54247;
(statearr_54270[(13)] = inst_54240);

return statearr_54270;
})();
var statearr_54271_55469 = state_54247__$1;
(statearr_54271_55469[(2)] = inst_54241);

(statearr_54271_55469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (10))){
var inst_54231 = (state_54247[(2)]);
var state_54247__$1 = state_54247;
var statearr_54272_55471 = state_54247__$1;
(statearr_54272_55471[(2)] = inst_54231);

(statearr_54272_55471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54248 === (8))){
var inst_54220 = (state_54247[(11)]);
var inst_54211 = (state_54247[(8)]);
var tmp54269 = inst_54211;
var inst_54211__$1 = tmp54269;
var inst_54212 = inst_54220;
var state_54247__$1 = (function (){var statearr_54273 = state_54247;
(statearr_54273[(7)] = inst_54212);

(statearr_54273[(8)] = inst_54211__$1);

return statearr_54273;
})();
var statearr_54274_55475 = state_54247__$1;
(statearr_54274_55475[(2)] = null);

(statearr_54274_55475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_54275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54275[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_54275[(1)] = (1));

return statearr_54275;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_54247){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_54247);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e54276){var ex__51242__auto__ = e54276;
var statearr_54277_55476 = state_54247;
(statearr_54277_55476[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_54247[(4)]))){
var statearr_54278_55478 = state_54247;
(statearr_54278_55478[(1)] = cljs.core.first((state_54247[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55479 = state_54247;
state_54247 = G__55479;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_54247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_54247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_54279 = f__52288__auto__();
(statearr_54279[(6)] = c__52287__auto___55448);

return statearr_54279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__54283 = arguments.length;
switch (G__54283) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52287__auto___55483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52288__auto__ = (function (){var switch__51238__auto__ = (function (state_54331){
var state_val_54332 = (state_54331[(1)]);
if((state_val_54332 === (7))){
var inst_54327 = (state_54331[(2)]);
var state_54331__$1 = state_54331;
var statearr_54339_55485 = state_54331__$1;
(statearr_54339_55485[(2)] = inst_54327);

(statearr_54339_55485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (1))){
var inst_54288 = [];
var inst_54289 = inst_54288;
var inst_54290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54331__$1 = (function (){var statearr_54340 = state_54331;
(statearr_54340[(7)] = inst_54290);

(statearr_54340[(8)] = inst_54289);

return statearr_54340;
})();
var statearr_54341_55488 = state_54331__$1;
(statearr_54341_55488[(2)] = null);

(statearr_54341_55488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (4))){
var inst_54293 = (state_54331[(9)]);
var inst_54293__$1 = (state_54331[(2)]);
var inst_54294 = (inst_54293__$1 == null);
var inst_54295 = cljs.core.not(inst_54294);
var state_54331__$1 = (function (){var statearr_54342 = state_54331;
(statearr_54342[(9)] = inst_54293__$1);

return statearr_54342;
})();
if(inst_54295){
var statearr_54343_55491 = state_54331__$1;
(statearr_54343_55491[(1)] = (5));

} else {
var statearr_54344_55492 = state_54331__$1;
(statearr_54344_55492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (15))){
var inst_54321 = (state_54331[(2)]);
var state_54331__$1 = state_54331;
var statearr_54345_55493 = state_54331__$1;
(statearr_54345_55493[(2)] = inst_54321);

(statearr_54345_55493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (13))){
var state_54331__$1 = state_54331;
var statearr_54347_55495 = state_54331__$1;
(statearr_54347_55495[(2)] = null);

(statearr_54347_55495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (6))){
var inst_54289 = (state_54331[(8)]);
var inst_54316 = inst_54289.length;
var inst_54317 = (inst_54316 > (0));
var state_54331__$1 = state_54331;
if(cljs.core.truth_(inst_54317)){
var statearr_54350_55496 = state_54331__$1;
(statearr_54350_55496[(1)] = (12));

} else {
var statearr_54352_55497 = state_54331__$1;
(statearr_54352_55497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (3))){
var inst_54329 = (state_54331[(2)]);
var state_54331__$1 = state_54331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54331__$1,inst_54329);
} else {
if((state_val_54332 === (12))){
var inst_54289 = (state_54331[(8)]);
var inst_54319 = cljs.core.vec(inst_54289);
var state_54331__$1 = state_54331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54331__$1,(15),out,inst_54319);
} else {
if((state_val_54332 === (2))){
var state_54331__$1 = state_54331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54331__$1,(4),ch);
} else {
if((state_val_54332 === (11))){
var inst_54293 = (state_54331[(9)]);
var inst_54297 = (state_54331[(10)]);
var inst_54307 = (state_54331[(2)]);
var inst_54308 = [];
var inst_54309 = inst_54308.push(inst_54293);
var inst_54289 = inst_54308;
var inst_54290 = inst_54297;
var state_54331__$1 = (function (){var statearr_54354 = state_54331;
(statearr_54354[(7)] = inst_54290);

(statearr_54354[(8)] = inst_54289);

(statearr_54354[(11)] = inst_54307);

(statearr_54354[(12)] = inst_54309);

return statearr_54354;
})();
var statearr_54355_55501 = state_54331__$1;
(statearr_54355_55501[(2)] = null);

(statearr_54355_55501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (9))){
var inst_54289 = (state_54331[(8)]);
var inst_54305 = cljs.core.vec(inst_54289);
var state_54331__$1 = state_54331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54331__$1,(11),out,inst_54305);
} else {
if((state_val_54332 === (5))){
var inst_54290 = (state_54331[(7)]);
var inst_54293 = (state_54331[(9)]);
var inst_54297 = (state_54331[(10)]);
var inst_54297__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54293) : f.call(null,inst_54293));
var inst_54298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54297__$1,inst_54290);
var inst_54299 = cljs.core.keyword_identical_QMARK_(inst_54290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54300 = ((inst_54298) || (inst_54299));
var state_54331__$1 = (function (){var statearr_54357 = state_54331;
(statearr_54357[(10)] = inst_54297__$1);

return statearr_54357;
})();
if(cljs.core.truth_(inst_54300)){
var statearr_54358_55505 = state_54331__$1;
(statearr_54358_55505[(1)] = (8));

} else {
var statearr_54359_55506 = state_54331__$1;
(statearr_54359_55506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (14))){
var inst_54324 = (state_54331[(2)]);
var inst_54325 = cljs.core.async.close_BANG_(out);
var state_54331__$1 = (function (){var statearr_54362 = state_54331;
(statearr_54362[(13)] = inst_54324);

return statearr_54362;
})();
var statearr_54365_55508 = state_54331__$1;
(statearr_54365_55508[(2)] = inst_54325);

(statearr_54365_55508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (10))){
var inst_54312 = (state_54331[(2)]);
var state_54331__$1 = state_54331;
var statearr_54366_55510 = state_54331__$1;
(statearr_54366_55510[(2)] = inst_54312);

(statearr_54366_55510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54332 === (8))){
var inst_54289 = (state_54331[(8)]);
var inst_54293 = (state_54331[(9)]);
var inst_54297 = (state_54331[(10)]);
var inst_54302 = inst_54289.push(inst_54293);
var tmp54360 = inst_54289;
var inst_54289__$1 = tmp54360;
var inst_54290 = inst_54297;
var state_54331__$1 = (function (){var statearr_54367 = state_54331;
(statearr_54367[(7)] = inst_54290);

(statearr_54367[(8)] = inst_54289__$1);

(statearr_54367[(14)] = inst_54302);

return statearr_54367;
})();
var statearr_54368_55513 = state_54331__$1;
(statearr_54368_55513[(2)] = null);

(statearr_54368_55513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51239__auto__ = null;
var cljs$core$async$state_machine__51239__auto____0 = (function (){
var statearr_54370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54370[(0)] = cljs$core$async$state_machine__51239__auto__);

(statearr_54370[(1)] = (1));

return statearr_54370;
});
var cljs$core$async$state_machine__51239__auto____1 = (function (state_54331){
while(true){
var ret_value__51240__auto__ = (function (){try{while(true){
var result__51241__auto__ = switch__51238__auto__(state_54331);
if(cljs.core.keyword_identical_QMARK_(result__51241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51241__auto__;
}
break;
}
}catch (e54371){var ex__51242__auto__ = e54371;
var statearr_54372_55514 = state_54331;
(statearr_54372_55514[(2)] = ex__51242__auto__);


if(cljs.core.seq((state_54331[(4)]))){
var statearr_54373_55515 = state_54331;
(statearr_54373_55515[(1)] = cljs.core.first((state_54331[(4)])));

} else {
throw ex__51242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55516 = state_54331;
state_54331 = G__55516;
continue;
} else {
return ret_value__51240__auto__;
}
break;
}
});
cljs$core$async$state_machine__51239__auto__ = function(state_54331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51239__auto____1.call(this,state_54331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51239__auto____0;
cljs$core$async$state_machine__51239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51239__auto____1;
return cljs$core$async$state_machine__51239__auto__;
})()
})();
var state__52289__auto__ = (function (){var statearr_54377 = f__52288__auto__();
(statearr_54377[(6)] = c__52287__auto___55483);

return statearr_54377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52289__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
