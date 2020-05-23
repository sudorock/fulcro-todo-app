goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4109__auto__ = c;
if(cljs.core.truth_(and__4109__auto__)){
return ident;
} else {
return and__4109__auto__;
}
})())){
var map__57840 = app__$1;
var map__57840__$1 = (((((!((map__57840 == null))))?(((((map__57840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57840):map__57840);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
}),null)),null,478011621);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState((function (s){
return ({"fulcro$value": new_props});
}));
} else {
return null;
}
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-375578928);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__57843 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__57844 = null;
var count__57845 = (0);
var i__57846 = (0);
while(true){
if((i__57846 < count__57845)){
var c = chunk__57844.cljs$core$IIndexed$_nth$arity$2(null,i__57846);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57978 = seq__57843;
var G__57979 = chunk__57844;
var G__57980 = count__57845;
var G__57981 = (i__57846 + (1));
seq__57843 = G__57978;
chunk__57844 = G__57979;
count__57845 = G__57980;
i__57846 = G__57981;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57843);
if(temp__5735__auto__){
var seq__57843__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57843__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57843__$1);
var G__57982 = cljs.core.chunk_rest(seq__57843__$1);
var G__57983 = c__4550__auto__;
var G__57984 = cljs.core.count(c__4550__auto__);
var G__57985 = (0);
seq__57843 = G__57982;
chunk__57844 = G__57983;
count__57845 = G__57984;
i__57846 = G__57985;
continue;
} else {
var c = cljs.core.first(seq__57843__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57986 = cljs.core.next(seq__57843__$1);
var G__57987 = null;
var G__57988 = (0);
var G__57989 = (0);
seq__57843 = G__57986;
chunk__57844 = G__57987;
count__57845 = G__57988;
i__57846 = G__57989;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__57852 = app__$1;
var map__57852__$1 = (((((!((map__57852 == null))))?(((((map__57852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57852):map__57852);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57852__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__57853 = cljs.core.deref(runtime_atom);
var map__57853__$1 = (((((!((map__57853 == null))))?(((((map__57853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57853):map__57853);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57853__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__57854 = indexes;
var map__57854__$1 = (((((!((map__57854 == null))))?(((((map__57854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57854):map__57854);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__57860 = cljs.core.seq(classes);
var chunk__57861 = null;
var count__57862 = (0);
var i__57863 = (0);
while(true){
if((i__57863 < count__57862)){
var class$ = chunk__57861.cljs$core$IIndexed$_nth$arity$2(null,i__57863);
var seq__57888_57994 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__57890_57995 = null;
var count__57891_57996 = (0);
var i__57892_57997 = (0);
while(true){
if((i__57892_57997 < count__57891_57996)){
var component_57998 = chunk__57890_57995.cljs$core$IIndexed$_nth$arity$2(null,i__57892_57997);
var component_ident_57999 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57998);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57999,component_57998);


var G__58000 = seq__57888_57994;
var G__58001 = chunk__57890_57995;
var G__58002 = count__57891_57996;
var G__58003 = (i__57892_57997 + (1));
seq__57888_57994 = G__58000;
chunk__57890_57995 = G__58001;
count__57891_57996 = G__58002;
i__57892_57997 = G__58003;
continue;
} else {
var temp__5735__auto___58004 = cljs.core.seq(seq__57888_57994);
if(temp__5735__auto___58004){
var seq__57888_58006__$1 = temp__5735__auto___58004;
if(cljs.core.chunked_seq_QMARK_(seq__57888_58006__$1)){
var c__4550__auto___58007 = cljs.core.chunk_first(seq__57888_58006__$1);
var G__58008 = cljs.core.chunk_rest(seq__57888_58006__$1);
var G__58009 = c__4550__auto___58007;
var G__58010 = cljs.core.count(c__4550__auto___58007);
var G__58011 = (0);
seq__57888_57994 = G__58008;
chunk__57890_57995 = G__58009;
count__57891_57996 = G__58010;
i__57892_57997 = G__58011;
continue;
} else {
var component_58012 = cljs.core.first(seq__57888_58006__$1);
var component_ident_58013 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58012);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58013,component_58012);


var G__58014 = cljs.core.next(seq__57888_58006__$1);
var G__58015 = null;
var G__58016 = (0);
var G__58017 = (0);
seq__57888_57994 = G__58014;
chunk__57890_57995 = G__58015;
count__57891_57996 = G__58016;
i__57892_57997 = G__58017;
continue;
}
} else {
}
}
break;
}


var G__58018 = seq__57860;
var G__58019 = chunk__57861;
var G__58020 = count__57862;
var G__58021 = (i__57863 + (1));
seq__57860 = G__58018;
chunk__57861 = G__58019;
count__57862 = G__58020;
i__57863 = G__58021;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57860);
if(temp__5735__auto__){
var seq__57860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57860__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57860__$1);
var G__58023 = cljs.core.chunk_rest(seq__57860__$1);
var G__58024 = c__4550__auto__;
var G__58025 = cljs.core.count(c__4550__auto__);
var G__58026 = (0);
seq__57860 = G__58023;
chunk__57861 = G__58024;
count__57862 = G__58025;
i__57863 = G__58026;
continue;
} else {
var class$ = cljs.core.first(seq__57860__$1);
var seq__57900_58027 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__57902_58028 = null;
var count__57903_58029 = (0);
var i__57904_58030 = (0);
while(true){
if((i__57904_58030 < count__57903_58029)){
var component_58031 = chunk__57902_58028.cljs$core$IIndexed$_nth$arity$2(null,i__57904_58030);
var component_ident_58032 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58031);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58032,component_58031);


var G__58033 = seq__57900_58027;
var G__58034 = chunk__57902_58028;
var G__58035 = count__57903_58029;
var G__58036 = (i__57904_58030 + (1));
seq__57900_58027 = G__58033;
chunk__57902_58028 = G__58034;
count__57903_58029 = G__58035;
i__57904_58030 = G__58036;
continue;
} else {
var temp__5735__auto___58037__$1 = cljs.core.seq(seq__57900_58027);
if(temp__5735__auto___58037__$1){
var seq__57900_58038__$1 = temp__5735__auto___58037__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57900_58038__$1)){
var c__4550__auto___58039 = cljs.core.chunk_first(seq__57900_58038__$1);
var G__58040 = cljs.core.chunk_rest(seq__57900_58038__$1);
var G__58041 = c__4550__auto___58039;
var G__58042 = cljs.core.count(c__4550__auto___58039);
var G__58043 = (0);
seq__57900_58027 = G__58040;
chunk__57902_58028 = G__58041;
count__57903_58029 = G__58042;
i__57904_58030 = G__58043;
continue;
} else {
var component_58044 = cljs.core.first(seq__57900_58038__$1);
var component_ident_58045 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58044);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58045,component_58044);


var G__58046 = cljs.core.next(seq__57900_58038__$1);
var G__58047 = null;
var G__58048 = (0);
var G__58049 = (0);
seq__57900_58027 = G__58046;
chunk__57902_58028 = G__58047;
count__57903_58029 = G__58048;
i__57904_58030 = G__58049;
continue;
}
} else {
}
}
break;
}


var G__58050 = cljs.core.next(seq__57860__$1);
var G__58051 = null;
var G__58052 = (0);
var G__58053 = (0);
seq__57860 = G__58050;
chunk__57861 = G__58051;
count__57862 = G__58052;
i__57863 = G__58053;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__57912 = app__$1;
var map__57912__$1 = (((((!((map__57912 == null))))?(((((map__57912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57912):map__57912);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__57913 = cljs.core.deref(runtime_atom);
var map__57913__$1 = (((((!((map__57913 == null))))?(((((map__57913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57913):map__57913);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57913__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__57914 = indexes;
var map__57914__$1 = (((((!((map__57914 == null))))?(((((map__57914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57914):map__57914);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__57908_SHARP_,p2__57909_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__57908_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__57909_SHARP_) : class__GT_components.call(null,p2__57909_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__57923 = app__$1;
var map__57923__$1 = (((((!((map__57923 == null))))?(((((map__57923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57923):map__57923);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57923__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57923__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__57924 = cljs.core.deref(runtime_atom);
var map__57924__$1 = (((((!((map__57924 == null))))?(((((map__57924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57924):map__57924);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__57925 = indexes;
var map__57925__$1 = (((((!((map__57925 == null))))?(((((map__57925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57925):map__57925);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57925__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57925__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57925__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57925__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__57932 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__57932__$1 = (((((!((map__57932 == null))))?(((((map__57932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57932):map__57932);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57932__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57932__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__57934_58065 = cljs.core.seq(limited_to_render);
var chunk__57936_58066 = null;
var count__57937_58067 = (0);
var i__57938_58068 = (0);
while(true){
if((i__57938_58068 < count__57937_58067)){
var c_58069 = chunk__57936_58066.cljs$core$IIndexed$_nth$arity$2(null,i__57938_58068);
var ident_58071 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58069);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58071,c_58069);


var G__58072 = seq__57934_58065;
var G__58073 = chunk__57936_58066;
var G__58074 = count__57937_58067;
var G__58075 = (i__57938_58068 + (1));
seq__57934_58065 = G__58072;
chunk__57936_58066 = G__58073;
count__57937_58067 = G__58074;
i__57938_58068 = G__58075;
continue;
} else {
var temp__5735__auto___58077 = cljs.core.seq(seq__57934_58065);
if(temp__5735__auto___58077){
var seq__57934_58078__$1 = temp__5735__auto___58077;
if(cljs.core.chunked_seq_QMARK_(seq__57934_58078__$1)){
var c__4550__auto___58079 = cljs.core.chunk_first(seq__57934_58078__$1);
var G__58080 = cljs.core.chunk_rest(seq__57934_58078__$1);
var G__58081 = c__4550__auto___58079;
var G__58082 = cljs.core.count(c__4550__auto___58079);
var G__58083 = (0);
seq__57934_58065 = G__58080;
chunk__57936_58066 = G__58081;
count__57937_58067 = G__58082;
i__57938_58068 = G__58083;
continue;
} else {
var c_58084 = cljs.core.first(seq__57934_58078__$1);
var ident_58085 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58084);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58085,c_58084);


var G__58086 = cljs.core.next(seq__57934_58078__$1);
var G__58087 = null;
var G__58088 = (0);
var G__58089 = (0);
seq__57934_58065 = G__58086;
chunk__57936_58066 = G__58087;
count__57937_58067 = G__58088;
i__57938_58068 = G__58089;
continue;
}
} else {
}
}
break;
}

var seq__57940 = cljs.core.seq(limited_idents);
var chunk__57941 = null;
var count__57942 = (0);
var i__57943 = (0);
while(true){
if((i__57943 < count__57942)){
var i = chunk__57941.cljs$core$IIndexed$_nth$arity$2(null,i__57943);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58090 = seq__57940;
var G__58091 = chunk__57941;
var G__58092 = count__57942;
var G__58093 = (i__57943 + (1));
seq__57940 = G__58090;
chunk__57941 = G__58091;
count__57942 = G__58092;
i__57943 = G__58093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57940);
if(temp__5735__auto__){
var seq__57940__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57940__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57940__$1);
var G__58094 = cljs.core.chunk_rest(seq__57940__$1);
var G__58095 = c__4550__auto__;
var G__58096 = cljs.core.count(c__4550__auto__);
var G__58097 = (0);
seq__57940 = G__58094;
chunk__57941 = G__58095;
count__57942 = G__58096;
i__57943 = G__58097;
continue;
} else {
var i = cljs.core.first(seq__57940__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58099 = cljs.core.next(seq__57940__$1);
var G__58100 = null;
var G__58101 = (0);
var G__58102 = (0);
seq__57940 = G__58099;
chunk__57941 = G__58100;
count__57942 = G__58101;
i__57943 = G__58102;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__57950 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__57950__$1 = (((((!((map__57950 == null))))?(((((map__57950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57950):map__57950);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57950__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57950__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__57952_58110 = cljs.core.seq(all_idents);
var chunk__57953_58111 = null;
var count__57954_58112 = (0);
var i__57955_58113 = (0);
while(true){
if((i__57955_58113 < count__57954_58112)){
var i_58114 = chunk__57953_58111.cljs$core$IIndexed$_nth$arity$2(null,i__57955_58113);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58114);


var G__58115 = seq__57952_58110;
var G__58116 = chunk__57953_58111;
var G__58117 = count__57954_58112;
var G__58118 = (i__57955_58113 + (1));
seq__57952_58110 = G__58115;
chunk__57953_58111 = G__58116;
count__57954_58112 = G__58117;
i__57955_58113 = G__58118;
continue;
} else {
var temp__5735__auto___58119 = cljs.core.seq(seq__57952_58110);
if(temp__5735__auto___58119){
var seq__57952_58120__$1 = temp__5735__auto___58119;
if(cljs.core.chunked_seq_QMARK_(seq__57952_58120__$1)){
var c__4550__auto___58121 = cljs.core.chunk_first(seq__57952_58120__$1);
var G__58122 = cljs.core.chunk_rest(seq__57952_58120__$1);
var G__58123 = c__4550__auto___58121;
var G__58124 = cljs.core.count(c__4550__auto___58121);
var G__58125 = (0);
seq__57952_58110 = G__58122;
chunk__57953_58111 = G__58123;
count__57954_58112 = G__58124;
i__57955_58113 = G__58125;
continue;
} else {
var i_58126 = cljs.core.first(seq__57952_58120__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58126);


var G__58127 = cljs.core.next(seq__57952_58120__$1);
var G__58128 = null;
var G__58129 = (0);
var G__58130 = (0);
seq__57952_58110 = G__58127;
chunk__57953_58111 = G__58128;
count__57954_58112 = G__58129;
i__57955_58113 = G__58130;
continue;
}
} else {
}
}
break;
}

var seq__57956 = cljs.core.seq(extra_to_force);
var chunk__57957 = null;
var count__57958 = (0);
var i__57959 = (0);
while(true){
if((i__57959 < count__57958)){
var c = chunk__57957.cljs$core$IIndexed$_nth$arity$2(null,i__57959);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__58134 = seq__57956;
var G__58135 = chunk__57957;
var G__58136 = count__57958;
var G__58137 = (i__57959 + (1));
seq__57956 = G__58134;
chunk__57957 = G__58135;
count__57958 = G__58136;
i__57959 = G__58137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57956);
if(temp__5735__auto__){
var seq__57956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57956__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57956__$1);
var G__58144 = cljs.core.chunk_rest(seq__57956__$1);
var G__58145 = c__4550__auto__;
var G__58146 = cljs.core.count(c__4550__auto__);
var G__58147 = (0);
seq__57956 = G__58144;
chunk__57957 = G__58145;
count__57958 = G__58146;
i__57959 = G__58147;
continue;
} else {
var c = cljs.core.first(seq__57956__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__58149 = cljs.core.next(seq__57956__$1);
var G__58150 = null;
var G__58151 = (0);
var G__58152 = (0);
seq__57956 = G__58149;
chunk__57957 = G__58150;
count__57958 = G__58151;
i__57959 = G__58152;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__57967 = arguments.length;
switch (G__57967) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__57968){
var map__57969 = p__57968;
var map__57969__$1 = (((((!((map__57969 == null))))?(((((map__57969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57969):map__57969);
var options = map__57969__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57969__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57969__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4120__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e57971){var e = e57971;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,548932155);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
