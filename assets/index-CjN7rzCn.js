(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const A of g.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&r(A)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();var xf={exports:{}},Ou={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function U0(){if(Ud)return Ou;Ud=1;var c=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(r,d,g){var A=null;if(g!==void 0&&(A=""+g),d.key!==void 0&&(A=""+d.key),"key"in d){g={};for(var _ in d)_!=="key"&&(g[_]=d[_])}else g=d;return d=g.ref,{$$typeof:c,type:r,key:A,ref:d!==void 0?d:null,props:g}}return Ou.Fragment=s,Ou.jsx=o,Ou.jsxs=o,Ou}var Cd;function C0(){return Cd||(Cd=1,xf.exports=U0()),xf.exports}var D=C0(),Tf={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function H0(){if(Hd)return it;Hd=1;var c=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),A=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,J={};function Q(v,j,X){this.props=v,this.context=j,this.refs=J,this.updater=X||F}Q.prototype.isReactComponent={},Q.prototype.setState=function(v,j){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,j,"setState")},Q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function q(){}q.prototype=Q.prototype;function W(v,j,X){this.props=v,this.context=j,this.refs=J,this.updater=X||F}var w=W.prototype=new q;w.constructor=W,K(w,Q.prototype),w.isPureReactComponent=!0;var et=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},ut=Object.prototype.hasOwnProperty;function dt(v,j,X,Y,P,vt){return X=vt.ref,{$$typeof:c,type:v,key:j,ref:X!==void 0?X:null,props:vt}}function pt(v,j){return dt(v.type,j,void 0,void 0,void 0,v.props)}function ht(v){return typeof v=="object"&&v!==null&&v.$$typeof===c}function jt(v){var j={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(X){return j[X]})}var wt=/\/+/g;function H(v,j){return typeof v=="object"&&v!==null&&v.key!=null?jt(""+v.key):j.toString(36)}function V(){}function $(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(V,V):(v.status="pending",v.then(function(j){v.status==="pending"&&(v.status="fulfilled",v.value=j)},function(j){v.status==="pending"&&(v.status="rejected",v.reason=j)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function rt(v,j,X,Y,P){var vt=typeof v;(vt==="undefined"||vt==="boolean")&&(v=null);var nt=!1;if(v===null)nt=!0;else switch(vt){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(v.$$typeof){case c:case s:nt=!0;break;case R:return nt=v._init,rt(nt(v._payload),j,X,Y,P)}}if(nt)return P=P(v),nt=Y===""?"."+H(v,0):Y,et(P)?(X="",nt!=null&&(X=nt.replace(wt,"$&/")+"/"),rt(P,j,X,"",function(Ie){return Ie})):P!=null&&(ht(P)&&(P=pt(P,X+(P.key==null||v&&v.key===P.key?"":(""+P.key).replace(wt,"$&/")+"/")+nt)),j.push(P)),1;nt=0;var ae=Y===""?".":Y+":";if(et(v))for(var Mt=0;Mt<v.length;Mt++)Y=v[Mt],vt=ae+H(Y,Mt),nt+=rt(Y,j,X,vt,P);else if(Mt=B(v),typeof Mt=="function")for(v=Mt.call(v),Mt=0;!(Y=v.next()).done;)Y=Y.value,vt=ae+H(Y,Mt++),nt+=rt(Y,j,X,vt,P);else if(vt==="object"){if(typeof v.then=="function")return rt($(v),j,X,Y,P);throw j=String(v),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return nt}function M(v,j,X){if(v==null)return v;var Y=[],P=0;return rt(v,Y,"","",function(vt){return j.call(X,vt,P++)}),Y}function L(v){if(v._status===-1){var j=v._result;j=j(),j.then(function(X){(v._status===0||v._status===-1)&&(v._status=1,v._result=X)},function(X){(v._status===0||v._status===-1)&&(v._status=2,v._result=X)}),v._status===-1&&(v._status=0,v._result=j)}if(v._status===1)return v._result.default;throw v._result}var lt=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function At(){}return it.Children={map:M,forEach:function(v,j,X){M(v,function(){j.apply(this,arguments)},X)},count:function(v){var j=0;return M(v,function(){j++}),j},toArray:function(v){return M(v,function(j){return j})||[]},only:function(v){if(!ht(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},it.Component=Q,it.Fragment=o,it.Profiler=d,it.PureComponent=W,it.StrictMode=r,it.Suspense=p,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,it.__COMPILER_RUNTIME={__proto__:null,c:function(v){return G.H.useMemoCache(v)}},it.cache=function(v){return function(){return v.apply(null,arguments)}},it.cloneElement=function(v,j,X){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Y=K({},v.props),P=v.key,vt=void 0;if(j!=null)for(nt in j.ref!==void 0&&(vt=void 0),j.key!==void 0&&(P=""+j.key),j)!ut.call(j,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&j.ref===void 0||(Y[nt]=j[nt]);var nt=arguments.length-2;if(nt===1)Y.children=X;else if(1<nt){for(var ae=Array(nt),Mt=0;Mt<nt;Mt++)ae[Mt]=arguments[Mt+2];Y.children=ae}return dt(v.type,P,void 0,void 0,vt,Y)},it.createContext=function(v){return v={$$typeof:A,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:g,_context:v},v},it.createElement=function(v,j,X){var Y,P={},vt=null;if(j!=null)for(Y in j.key!==void 0&&(vt=""+j.key),j)ut.call(j,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=j[Y]);var nt=arguments.length-2;if(nt===1)P.children=X;else if(1<nt){for(var ae=Array(nt),Mt=0;Mt<nt;Mt++)ae[Mt]=arguments[Mt+2];P.children=ae}if(v&&v.defaultProps)for(Y in nt=v.defaultProps,nt)P[Y]===void 0&&(P[Y]=nt[Y]);return dt(v,vt,void 0,void 0,null,P)},it.createRef=function(){return{current:null}},it.forwardRef=function(v){return{$$typeof:_,render:v}},it.isValidElement=ht,it.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:L}},it.memo=function(v,j){return{$$typeof:h,type:v,compare:j===void 0?null:j}},it.startTransition=function(v){var j=G.T,X={};G.T=X;try{var Y=v(),P=G.S;P!==null&&P(X,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(At,lt)}catch(vt){lt(vt)}finally{G.T=j}},it.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},it.use=function(v){return G.H.use(v)},it.useActionState=function(v,j,X){return G.H.useActionState(v,j,X)},it.useCallback=function(v,j){return G.H.useCallback(v,j)},it.useContext=function(v){return G.H.useContext(v)},it.useDebugValue=function(){},it.useDeferredValue=function(v,j){return G.H.useDeferredValue(v,j)},it.useEffect=function(v,j,X){var Y=G.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(v,j)},it.useId=function(){return G.H.useId()},it.useImperativeHandle=function(v,j,X){return G.H.useImperativeHandle(v,j,X)},it.useInsertionEffect=function(v,j){return G.H.useInsertionEffect(v,j)},it.useLayoutEffect=function(v,j){return G.H.useLayoutEffect(v,j)},it.useMemo=function(v,j){return G.H.useMemo(v,j)},it.useOptimistic=function(v,j){return G.H.useOptimistic(v,j)},it.useReducer=function(v,j,X){return G.H.useReducer(v,j,X)},it.useRef=function(v){return G.H.useRef(v)},it.useState=function(v){return G.H.useState(v)},it.useSyncExternalStore=function(v,j,X){return G.H.useSyncExternalStore(v,j,X)},it.useTransition=function(){return G.H.useTransition()},it.version="19.1.0",it}var jd;function Uf(){return jd||(jd=1,Tf.exports=H0()),Tf.exports}var z=Uf(),Af={exports:{}},Du={},Rf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function j0(){return Bd||(Bd=1,function(c){function s(M,L){var lt=M.length;M.push(L);t:for(;0<lt;){var At=lt-1>>>1,v=M[At];if(0<d(v,L))M[At]=L,M[lt]=v,lt=At;else break t}}function o(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var L=M[0],lt=M.pop();if(lt!==L){M[0]=lt;t:for(var At=0,v=M.length,j=v>>>1;At<j;){var X=2*(At+1)-1,Y=M[X],P=X+1,vt=M[P];if(0>d(Y,lt))P<v&&0>d(vt,Y)?(M[At]=vt,M[P]=lt,At=P):(M[At]=Y,M[X]=lt,At=X);else if(P<v&&0>d(vt,lt))M[At]=vt,M[P]=lt,At=P;else break t}}return L}function d(M,L){var lt=M.sortIndex-L.sortIndex;return lt!==0?lt:M.id-L.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;c.unstable_now=function(){return g.now()}}else{var A=Date,_=A.now();c.unstable_now=function(){return A.now()-_}}var p=[],h=[],R=1,C=null,B=3,F=!1,K=!1,J=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function et(M){for(var L=o(h);L!==null;){if(L.callback===null)r(h);else if(L.startTime<=M)r(h),L.sortIndex=L.expirationTime,s(p,L);else break;L=o(h)}}function G(M){if(J=!1,et(M),!K)if(o(p)!==null)K=!0,ut||(ut=!0,H());else{var L=o(h);L!==null&&rt(G,L.startTime-M)}}var ut=!1,dt=-1,pt=5,ht=-1;function jt(){return Q?!0:!(c.unstable_now()-ht<pt)}function wt(){if(Q=!1,ut){var M=c.unstable_now();ht=M;var L=!0;try{t:{K=!1,J&&(J=!1,W(dt),dt=-1),F=!0;var lt=B;try{e:{for(et(M),C=o(p);C!==null&&!(C.expirationTime>M&&jt());){var At=C.callback;if(typeof At=="function"){C.callback=null,B=C.priorityLevel;var v=At(C.expirationTime<=M);if(M=c.unstable_now(),typeof v=="function"){C.callback=v,et(M),L=!0;break e}C===o(p)&&r(p),et(M)}else r(p);C=o(p)}if(C!==null)L=!0;else{var j=o(h);j!==null&&rt(G,j.startTime-M),L=!1}}break t}finally{C=null,B=lt,F=!1}L=void 0}}finally{L?H():ut=!1}}}var H;if(typeof w=="function")H=function(){w(wt)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,$=V.port2;V.port1.onmessage=wt,H=function(){$.postMessage(null)}}else H=function(){q(wt,0)};function rt(M,L){dt=q(function(){M(c.unstable_now())},L)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(M){M.callback=null},c.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pt=0<M?Math.floor(1e3/M):5},c.unstable_getCurrentPriorityLevel=function(){return B},c.unstable_next=function(M){switch(B){case 1:case 2:case 3:var L=3;break;default:L=B}var lt=B;B=L;try{return M()}finally{B=lt}},c.unstable_requestPaint=function(){Q=!0},c.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var lt=B;B=M;try{return L()}finally{B=lt}},c.unstable_scheduleCallback=function(M,L,lt){var At=c.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?At+lt:At):lt=At,M){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=lt+v,M={id:R++,callback:L,priorityLevel:M,startTime:lt,expirationTime:v,sortIndex:-1},lt>At?(M.sortIndex=lt,s(h,M),o(p)===null&&M===o(h)&&(J?(W(dt),dt=-1):J=!0,rt(G,lt-At))):(M.sortIndex=v,s(p,M),K||F||(K=!0,ut||(ut=!0,H()))),M},c.unstable_shouldYield=jt,c.unstable_wrapCallback=function(M){var L=B;return function(){var lt=B;B=L;try{return M.apply(this,arguments)}finally{B=lt}}}}(zf)),zf}var qd;function B0(){return qd||(qd=1,Rf.exports=j0()),Rf.exports}var Mf={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function q0(){if(Yd)return Wt;Yd=1;var c=Uf();function s(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)h+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(p,h,R){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:""+C,children:p,containerInfo:h,implementation:R}}var A=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wt.createPortal=function(p,h){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return g(p,h,null,R)},Wt.flushSync=function(p){var h=A.T,R=r.p;try{if(A.T=null,r.p=2,p)return p()}finally{A.T=h,r.p=R,r.d.f()}},Wt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Wt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Wt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var R=h.as,C=_(R,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,F=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;R==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:C,integrity:B,fetchPriority:F}):R==="script"&&r.d.X(p,{crossOrigin:C,integrity:B,fetchPriority:F,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Wt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var R=_(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Wt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var R=h.as,C=_(R,h.crossOrigin);r.d.L(p,R,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Wt.preloadModule=function(p,h){if(typeof p=="string")if(h){var R=_(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Wt.requestFormReset=function(p){r.d.r(p)},Wt.unstable_batchedUpdates=function(p,h){return p(h)},Wt.useFormState=function(p,h,R){return A.H.useFormState(p,h,R)},Wt.useFormStatus=function(){return A.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var Ld;function Y0(){if(Ld)return Mf.exports;Ld=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(s){console.error(s)}}return c(),Mf.exports=q0(),Mf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function L0(){if(wd)return Du;wd=1;var c=B0(),s=Uf(),o=Y0();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function A(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(g(t)!==t)throw Error(r(188))}function p(t){var e=t.alternate;if(!e){if(e=g(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===l)return _(u),t;if(n===a)return _(u),e;n=n.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=n;else{for(var i=!1,f=u.child;f;){if(f===l){i=!0,l=u,a=n;break}if(f===a){i=!0,a=u,l=n;break}f=f.sibling}if(!i){for(f=n.child;f;){if(f===l){i=!0,l=n,a=u;break}if(f===a){i=!0,a=n,l=u;break}f=f.sibling}if(!i)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,C=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),w=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),ht=Symbol.for("react.activity"),jt=Symbol.for("react.memo_cache_sentinel"),wt=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=wt&&t[wt]||t["@@iterator"],typeof t=="function"?t:null)}var V=Symbol.for("react.client.reference");function $(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===V?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case Q:return"Profiler";case J:return"StrictMode";case G:return"Suspense";case ut:return"SuspenseList";case ht:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case w:return(t.displayName||"Context")+".Provider";case W:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dt:return e=t.displayName||null,e!==null?e:$(t.type)||"Memo";case pt:e=t._payload,t=t._init;try{return $(t(e))}catch{}}return null}var rt=Array.isArray,M=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},At=[],v=-1;function j(t){return{current:t}}function X(t){0>v||(t.current=At[v],At[v]=null,v--)}function Y(t,e){v++,At[v]=t.current,t.current=e}var P=j(null),vt=j(null),nt=j(null),ae=j(null);function Mt(t,e){switch(Y(nt,e),Y(vt,t),Y(P,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?id(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=id(e),t=cd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(P),Y(P,t)}function Ie(){X(P),X(vt),X(nt)}function ii(t){t.memoizedState!==null&&Y(ae,t);var e=P.current,l=cd(e,t.type);e!==l&&(Y(vt,t),Y(P,l))}function Yu(t){vt.current===t&&(X(P),X(vt)),ae.current===t&&(X(ae),Tu._currentValue=lt)}var ci=Object.prototype.hasOwnProperty,fi=c.unstable_scheduleCallback,ri=c.unstable_cancelCallback,sh=c.unstable_shouldYield,oh=c.unstable_requestPaint,Re=c.unstable_now,dh=c.unstable_getCurrentPriorityLevel,Lf=c.unstable_ImmediatePriority,wf=c.unstable_UserBlockingPriority,Lu=c.unstable_NormalPriority,hh=c.unstable_LowPriority,Gf=c.unstable_IdlePriority,mh=c.log,vh=c.unstable_setDisableYieldValue,Na=null,ue=null;function tl(t){if(typeof mh=="function"&&vh(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(Na,t)}catch{}}var ne=Math.clz32?Math.clz32:ph,yh=Math.log,gh=Math.LN2;function ph(t){return t>>>=0,t===0?32:31-(yh(t)/gh|0)|0}var wu=256,Gu=4194304;function Rl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~n,a!==0?u=Rl(a):(i&=f,i!==0?u=Rl(i):l||(l=f&~t,l!==0&&(u=Rl(l))))):(f=a&~n,f!==0?u=Rl(f):i!==0?u=Rl(i):l||(l=a&~t,l!==0&&(u=Rl(l)))),u===0?0:e!==0&&e!==u&&(e&n)===0&&(n=u&-u,l=e&-e,n>=l||n===32&&(l&4194048)!==0)?e:u}function Ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function bh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(){var t=wu;return wu<<=1,(wu&4194048)===0&&(wu=256),t}function Qf(){var t=Gu;return Gu<<=1,(Gu&62914560)===0&&(Gu=4194304),t}function si(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ca(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sh(t,e,l,a,u,n){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,m=t.expirationTimes,E=t.hiddenUpdates;for(l=i&~l;0<l;){var O=31-ne(l),U=1<<O;f[O]=0,m[O]=-1;var x=E[O];if(x!==null)for(E[O]=null,O=0;O<x.length;O++){var T=x[O];T!==null&&(T.lane&=-536870913)}l&=~U}a!==0&&Zf(t,a,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~e))}function Zf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ne(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Vf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ne(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function oi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function di(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kf(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:zd(t.type))}function Eh(t,e){var l=L.p;try{return L.p=t,e()}finally{L.p=l}}var el=Math.random().toString(36).slice(2),kt="__reactFiber$"+el,Pt="__reactProps$"+el,Zl="__reactContainer$"+el,hi="__reactEvents$"+el,xh="__reactListeners$"+el,Th="__reactHandles$"+el,Jf="__reactResources$"+el,Ha="__reactMarker$"+el;function mi(t){delete t[kt],delete t[Pt],delete t[hi],delete t[xh],delete t[Th]}function Vl(t){var e=t[kt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Zl]||l[kt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=od(t);t!==null;){if(l=t[kt])return l;t=od(t)}return e}t=l,l=t.parentNode}return null}function Kl(t){if(t=t[kt]||t[Zl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ja(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Jl(t){var e=t[Jf];return e||(e=t[Jf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[Ha]=!0}var kf=new Set,$f={};function zl(t,e){kl(t,e),kl(t+"Capture",e)}function kl(t,e){for($f[t]=e,t=0;t<e.length;t++)kf.add(e[t])}var Ah=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wf={},Ff={};function Rh(t){return ci.call(Ff,t)?!0:ci.call(Wf,t)?!1:Ah.test(t)?Ff[t]=!0:(Wf[t]=!0,!1)}function Qu(t,e,l){if(Rh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Zu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function je(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var vi,Pf;function $l(t){if(vi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);vi=e&&e[1]||"",Pf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vi+t+Pf}var yi=!1;function gi(t,e){if(!t||yi)return"";yi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(T){var x=T}Reflect.construct(t,[],U)}else{try{U.call()}catch(T){x=T}t.call(U.prototype)}}else{try{throw Error()}catch(T){x=T}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(T){if(T&&x&&typeof T.stack=="string")return[T.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],f=n[1];if(i&&f){var m=i.split(`
`),E=f.split(`
`);for(u=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(a===m.length||u===E.length)for(a=m.length-1,u=E.length-1;1<=a&&0<=u&&m[a]!==E[u];)u--;for(;1<=a&&0<=u;a--,u--)if(m[a]!==E[u]){if(a!==1||u!==1)do if(a--,u--,0>u||m[a]!==E[u]){var O=`
`+m[a].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=a&&0<=u);break}}}finally{yi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?$l(l):""}function zh(t){switch(t.tag){case 26:case 27:case 5:return $l(t.type);case 16:return $l("Lazy");case 13:return $l("Suspense");case 19:return $l("SuspenseList");case 0:case 15:return gi(t.type,!1);case 11:return gi(t.type.render,!1);case 1:return gi(t.type,!0);case 31:return $l("Activity");default:return""}}function If(t){try{var e="";do e+=zh(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function he(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mh(t){var e=tr(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,n=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(i){a=""+i,n.call(this,i)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vu(t){t._valueTracker||(t._valueTracker=Mh(t))}function er(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=tr(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oh=/[\n"\\]/g;function me(t){return t.replace(Oh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function pi(t,e,l,a,u,n,i,f){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+he(e)):t.value!==""+he(e)&&(t.value=""+he(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?bi(t,i,he(e)):l!=null?bi(t,i,he(l)):a!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+he(f):t.removeAttribute("name")}function lr(t,e,l,a,u,n,i,f){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||e!=null))return;l=l!=null?""+he(l):"",e=e!=null?""+he(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i)}function bi(t,e,l){e==="number"&&Ku(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Wl(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+he(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function ar(t,e,l){if(e!=null&&(e=""+he(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+he(l):""}function ur(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(rt(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=he(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Fl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Dh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nr(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Dh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ir(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&nr(t,u,a)}else for(var n in e)e.hasOwnProperty(n)&&nr(t,n,e[n])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ju(t){return Nh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ei=null;function xi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pl=null,Il=null;function cr(t){var e=Kl(t);if(e&&(t=e.stateNode)){var l=t[Pt]||null;t:switch(t=e.stateNode,e.type){case"input":if(pi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+me(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[Pt]||null;if(!u)throw Error(r(90));pi(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&er(a)}break t;case"textarea":ar(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Wl(t,!!l.multiple,e,!1)}}}var Ti=!1;function fr(t,e,l){if(Ti)return t(e,l);Ti=!0;try{var a=t(e);return a}finally{if(Ti=!1,(Pl!==null||Il!==null)&&(Cn(),Pl&&(e=Pl,t=Il,Il=Pl=null,cr(e),t)))for(e=0;e<t.length;e++)cr(t[e])}}function Ba(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Pt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=!1;if(Be)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{Ai=!1}var ll=null,Ri=null,ku=null;function rr(){if(ku)return ku;var t,e=Ri,l=e.length,a,u="value"in ll?ll.value:ll.textContent,n=u.length;for(t=0;t<l&&e[t]===u[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===u[n-a];a++);return ku=u.slice(t,1<a?1-a:void 0)}function $u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wu(){return!0}function sr(){return!1}function It(t){function e(l,a,u,n,i){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(n):n[f]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Wu:sr,this.isPropagationStopped=sr,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wu)},persist:function(){},isPersistent:Wu}),e}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=It(Ml),Ya=R({},Ml,{view:0,detail:0}),Uh=It(Ya),zi,Mi,La,Pu=R({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(zi=t.screenX-La.screenX,Mi=t.screenY-La.screenY):Mi=zi=0,La=t),zi)},movementY:function(t){return"movementY"in t?t.movementY:Mi}}),or=It(Pu),Ch=R({},Pu,{dataTransfer:0}),Hh=It(Ch),jh=R({},Ya,{relatedTarget:0}),Oi=It(jh),Bh=R({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=It(Bh),Yh=R({},Ml,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lh=It(Yh),wh=R({},Ml,{data:0}),dr=It(wh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qh[t])?!!e[t]:!1}function Di(){return Zh}var Vh=R({},Ya,{key:function(t){if(t.key){var e=Gh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(t){return t.type==="keypress"?$u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kh=It(Vh),Jh=R({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hr=It(Jh),kh=R({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),$h=It(kh),Wh=R({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=It(Wh),Ph=R({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=It(Ph),tm=R({},Ml,{newState:0,oldState:0}),em=It(tm),lm=[9,13,27,32],_i=Be&&"CompositionEvent"in window,wa=null;Be&&"documentMode"in document&&(wa=document.documentMode);var am=Be&&"TextEvent"in window&&!wa,mr=Be&&(!_i||wa&&8<wa&&11>=wa),vr=" ",yr=!1;function gr(t,e){switch(t){case"keyup":return lm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ta=!1;function um(t,e){switch(t){case"compositionend":return pr(e);case"keypress":return e.which!==32?null:(yr=!0,vr);case"textInput":return t=e.data,t===vr&&yr?null:t;default:return null}}function nm(t,e){if(ta)return t==="compositionend"||!_i&&gr(t,e)?(t=rr(),ku=Ri=ll=null,ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mr&&e.locale!=="ko"?null:e.data;default:return null}}var im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function br(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!im[t.type]:e==="textarea"}function Sr(t,e,l,a){Pl?Il?Il.push(a):Il=[a]:Pl=a,e=Ln(e,"onChange"),0<e.length&&(l=new Fu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ga=null,Xa=null;function cm(t){ed(t,0)}function Iu(t){var e=ja(t);if(er(e))return t}function Er(t,e){if(t==="change")return e}var xr=!1;if(Be){var Ni;if(Be){var Ui="oninput"in document;if(!Ui){var Tr=document.createElement("div");Tr.setAttribute("oninput","return;"),Ui=typeof Tr.oninput=="function"}Ni=Ui}else Ni=!1;xr=Ni&&(!document.documentMode||9<document.documentMode)}function Ar(){Ga&&(Ga.detachEvent("onpropertychange",Rr),Xa=Ga=null)}function Rr(t){if(t.propertyName==="value"&&Iu(Xa)){var e=[];Sr(e,Xa,t,xi(t)),fr(cm,e)}}function fm(t,e,l){t==="focusin"?(Ar(),Ga=e,Xa=l,Ga.attachEvent("onpropertychange",Rr)):t==="focusout"&&Ar()}function rm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(Xa)}function sm(t,e){if(t==="click")return Iu(e)}function om(t,e){if(t==="input"||t==="change")return Iu(e)}function dm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ie=typeof Object.is=="function"?Object.is:dm;function Qa(t,e){if(ie(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!ci.call(e,u)||!ie(t[u],e[u]))return!1}return!0}function zr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mr(t,e){var l=zr(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=zr(l)}}function Or(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Or(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ku(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ku(t.document)}return e}function Ci(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var hm=Be&&"documentMode"in document&&11>=document.documentMode,ea=null,Hi=null,Za=null,ji=!1;function _r(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ji||ea==null||ea!==Ku(a)||(a=ea,"selectionStart"in a&&Ci(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Qa(Za,a)||(Za=a,a=Ln(Hi,"onSelect"),0<a.length&&(e=new Fu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ea)))}function Ol(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var la={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionrun:Ol("Transition","TransitionRun"),transitionstart:Ol("Transition","TransitionStart"),transitioncancel:Ol("Transition","TransitionCancel"),transitionend:Ol("Transition","TransitionEnd")},Bi={},Nr={};Be&&(Nr=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Dl(t){if(Bi[t])return Bi[t];if(!la[t])return t;var e=la[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Nr)return Bi[t]=e[l];return t}var Ur=Dl("animationend"),Cr=Dl("animationiteration"),Hr=Dl("animationstart"),mm=Dl("transitionrun"),vm=Dl("transitionstart"),ym=Dl("transitioncancel"),jr=Dl("transitionend"),Br=new Map,qi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qi.push("scrollEnd");function xe(t,e){Br.set(t,e),zl(e,[t])}var qr=new WeakMap;function ve(t,e){if(typeof t=="object"&&t!==null){var l=qr.get(t);return l!==void 0?l:(e={value:t,source:e,stack:If(e)},qr.set(t,e),e)}return{value:t,source:e,stack:If(e)}}var ye=[],aa=0,Yi=0;function tn(){for(var t=aa,e=Yi=aa=0;e<t;){var l=ye[e];ye[e++]=null;var a=ye[e];ye[e++]=null;var u=ye[e];ye[e++]=null;var n=ye[e];if(ye[e++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&Yr(l,u,n)}}function en(t,e,l,a){ye[aa++]=t,ye[aa++]=e,ye[aa++]=l,ye[aa++]=a,Yi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Li(t,e,l,a){return en(t,e,l,a),ln(t)}function ua(t,e){return en(t,null,null,e),ln(t)}function Yr(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,n=t.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&e!==null&&(u=31-ne(l),t=n.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),n):null}function ln(t){if(50<vu)throw vu=0,Vc=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var na={};function gm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ce(t,e,l,a){return new gm(t,e,l,a)}function wi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qe(t,e){var l=t.alternate;return l===null?(l=ce(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Lr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function an(t,e,l,a,u,n){var i=0;if(a=t,typeof t=="function")wi(t)&&(i=1);else if(typeof t=="string")i=b0(t,l,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ht:return t=ce(31,l,e,u),t.elementType=ht,t.lanes=n,t;case K:return _l(l.children,u,n,e);case J:i=8,u|=24;break;case Q:return t=ce(12,l,e,u|2),t.elementType=Q,t.lanes=n,t;case G:return t=ce(13,l,e,u),t.elementType=G,t.lanes=n,t;case ut:return t=ce(19,l,e,u),t.elementType=ut,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:case w:i=10;break t;case W:i=9;break t;case et:i=11;break t;case dt:i=14;break t;case pt:i=16,a=null;break t}i=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=ce(i,l,e,u),e.elementType=t,e.type=a,e.lanes=n,e}function _l(t,e,l,a){return t=ce(7,t,a,e),t.lanes=l,t}function Gi(t,e,l){return t=ce(6,t,null,e),t.lanes=l,t}function Xi(t,e,l){return e=ce(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ia=[],ca=0,un=null,nn=0,ge=[],pe=0,Nl=null,Ye=1,Le="";function Ul(t,e){ia[ca++]=nn,ia[ca++]=un,un=t,nn=e}function wr(t,e,l){ge[pe++]=Ye,ge[pe++]=Le,ge[pe++]=Nl,Nl=t;var a=Ye;t=Le;var u=32-ne(a)-1;a&=~(1<<u),l+=1;var n=32-ne(e)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,Ye=1<<32-ne(e)+u|l<<u|a,Le=n+t}else Ye=1<<n|l<<u|a,Le=t}function Qi(t){t.return!==null&&(Ul(t,1),wr(t,1,0))}function Zi(t){for(;t===un;)un=ia[--ca],ia[ca]=null,nn=ia[--ca],ia[ca]=null;for(;t===Nl;)Nl=ge[--pe],ge[pe]=null,Le=ge[--pe],ge[pe]=null,Ye=ge[--pe],ge[pe]=null}var Ft=null,Nt=null,gt=!1,Cl=null,ze=!1,Vi=Error(r(519));function Hl(t){var e=Error(r(418,""));throw Ja(ve(e,t)),Vi}function Gr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[kt]=t,e[Pt]=a,l){case"dialog":ot("cancel",e),ot("close",e);break;case"iframe":case"object":case"embed":ot("load",e);break;case"video":case"audio":for(l=0;l<gu.length;l++)ot(gu[l],e);break;case"source":ot("error",e);break;case"img":case"image":case"link":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"input":ot("invalid",e),lr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Vu(e);break;case"select":ot("invalid",e);break;case"textarea":ot("invalid",e),ur(e,a.value,a.defaultValue,a.children),Vu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||nd(e.textContent,l)?(a.popover!=null&&(ot("beforetoggle",e),ot("toggle",e)),a.onScroll!=null&&ot("scroll",e),a.onScrollEnd!=null&&ot("scrollend",e),a.onClick!=null&&(e.onclick=wn),e=!0):e=!1,e||Hl(t)}function Xr(t){for(Ft=t.return;Ft;)switch(Ft.tag){case 5:case 13:ze=!1;return;case 27:case 3:ze=!0;return;default:Ft=Ft.return}}function Va(t){if(t!==Ft)return!1;if(!gt)return Xr(t),gt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||ff(t.type,t.memoizedProps)),l=!l),l&&Nt&&Hl(t),Xr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Nt=Ae(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Nt=null}}else e===27?(e=Nt,pl(t.type)?(t=df,df=null,Nt=t):Nt=e):Nt=Ft?Ae(t.stateNode.nextSibling):null;return!0}function Ka(){Nt=Ft=null,gt=!1}function Qr(){var t=Cl;return t!==null&&(le===null?le=t:le.push.apply(le,t),Cl=null),t}function Ja(t){Cl===null?Cl=[t]:Cl.push(t)}var Ki=j(null),jl=null,we=null;function al(t,e,l){Y(Ki,e._currentValue),e._currentValue=l}function Ge(t){t._currentValue=Ki.current,X(Ki)}function Ji(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function ki(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var f=n;n=u;for(var m=0;m<e.length;m++)if(f.context===e[m]){n.lanes|=l,f=n.alternate,f!==null&&(f.lanes|=l),Ji(n.return,l,t),a||(i=null);break t}n=f.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(r(341));i.lanes|=l,n=i.alternate,n!==null&&(n.lanes|=l),Ji(i,l,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ka(t,e,l,a){t=null;for(var u=e,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var f=u.type;ie(u.pendingProps.value,i.value)||(t!==null?t.push(f):t=[f])}}else if(u===ae.current){if(i=u.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Tu):t=[Tu])}u=u.return}t!==null&&ki(e,t,l,a),e.flags|=262144}function cn(t){for(t=t.firstContext;t!==null;){if(!ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bl(t){jl=t,we=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return Zr(jl,t)}function fn(t,e){return jl===null&&Bl(t),Zr(t,e)}function Zr(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},we===null){if(t===null)throw Error(r(308));we=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else we=we.next=e;return l}var pm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},bm=c.unstable_scheduleCallback,Sm=c.unstable_NormalPriority,Yt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new pm,data:new Map,refCount:0}}function $a(t){t.refCount--,t.refCount===0&&bm(Sm,function(){t.controller.abort()})}var Wa=null,Wi=0,fa=0,ra=null;function Em(t,e){if(Wa===null){var l=Wa=[];Wi=0,fa=Pc(),ra={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Wi++,e.then(Vr,Vr),e}function Vr(){if(--Wi===0&&Wa!==null){ra!==null&&(ra.status="fulfilled");var t=Wa;Wa=null,fa=0,ra=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function xm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Kr=M.S;M.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Em(t,e),Kr!==null&&Kr(t,e)};var ql=j(null);function Fi(){var t=ql.current;return t!==null?t:zt.pooledCache}function rn(t,e){e===null?Y(ql,ql.current):Y(ql,e.pool)}function Jr(){var t=Fi();return t===null?null:{parent:Yt._currentValue,pool:t}}var Fa=Error(r(460)),kr=Error(r(474)),sn=Error(r(542)),Pi={then:function(){}};function $r(t){return t=t.status,t==="fulfilled"||t==="rejected"}function on(){}function Wr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(on,on),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Pr(t),t;default:if(typeof e.status=="string")e.then(on,on);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Pr(t),t}throw Pa=e,Fa}}var Pa=null;function Fr(){if(Pa===null)throw Error(r(459));var t=Pa;return Pa=null,t}function Pr(t){if(t===Fa||t===sn)throw Error(r(483))}var ul=!1;function Ii(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function nl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function il(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(bt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=ln(t),Yr(t,null,l),e}return en(t,a,e,l),ln(t)}function Ia(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Vf(t,l)}}function ec(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,l=l.next}while(l!==null);n===null?u=n=e:n=n.next=e}else u=n=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var lc=!1;function tu(){if(lc){var t=ra;if(t!==null)throw t}}function eu(t,e,l,a){lc=!1;var u=t.updateQueue;ul=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,f=u.shared.pending;if(f!==null){u.shared.pending=null;var m=f,E=m.next;m.next=null,i===null?n=E:i.next=E,i=m;var O=t.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==i&&(f===null?O.firstBaseUpdate=E:f.next=E,O.lastBaseUpdate=m))}if(n!==null){var U=u.baseState;i=0,O=E=m=null,f=n;do{var x=f.lane&-536870913,T=x!==f.lane;if(T?(mt&x)===x:(a&x)===x){x!==0&&x===fa&&(lc=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var at=t,I=f;x=e;var Tt=l;switch(I.tag){case 1:if(at=I.payload,typeof at=="function"){U=at.call(Tt,U,x);break t}U=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=I.payload,x=typeof at=="function"?at.call(Tt,U,x):at,x==null)break t;U=R({},U,x);break t;case 2:ul=!0}}x=f.callback,x!==null&&(t.flags|=64,T&&(t.flags|=8192),T=u.callbacks,T===null?u.callbacks=[x]:T.push(x))}else T={lane:x,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(E=O=T,m=U):O=O.next=T,i|=x;if(f=f.next,f===null){if(f=u.shared.pending,f===null)break;T=f,f=T.next,T.next=null,u.lastBaseUpdate=T,u.shared.pending=null}}while(!0);O===null&&(m=U),u.baseState=m,u.firstBaseUpdate=E,u.lastBaseUpdate=O,n===null&&(u.shared.lanes=0),ml|=i,t.lanes=i,t.memoizedState=U}}function Ir(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function ts(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Ir(l[t],e)}var sa=j(null),dn=j(0);function es(t,e){t=ke,Y(dn,t),Y(sa,e),ke=t|e.baseLanes}function ac(){Y(dn,ke),Y(sa,sa.current)}function uc(){ke=dn.current,X(sa),X(dn)}var cl=0,ct=null,Et=null,Bt=null,hn=!1,oa=!1,Yl=!1,mn=0,lu=0,da=null,Tm=0;function Ct(){throw Error(r(321))}function nc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ie(t[l],e[l]))return!1;return!0}function ic(t,e,l,a,u,n){return cl=n,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?Ys:Ls,Yl=!1,n=l(a,u),Yl=!1,oa&&(n=as(e,l,a,u)),ls(t),n}function ls(t){M.H=Sn;var e=Et!==null&&Et.next!==null;if(cl=0,Bt=Et=ct=null,hn=!1,lu=0,da=null,e)throw Error(r(300));t===null||Xt||(t=t.dependencies,t!==null&&cn(t)&&(Xt=!0))}function as(t,e,l,a){ct=t;var u=0;do{if(oa&&(da=null),lu=0,oa=!1,25<=u)throw Error(r(301));if(u+=1,Bt=Et=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}M.H=_m,n=e(l,a)}while(oa);return n}function Am(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?au(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(ct.flags|=1024),e}function cc(){var t=mn!==0;return mn=0,t}function fc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function rc(t){if(hn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hn=!1}cl=0,Bt=Et=ct=null,oa=!1,lu=mn=0,da=null}function te(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?ct.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function qt(){if(Et===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Bt===null?ct.memoizedState:Bt.next;if(e!==null)Bt=e,Et=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Bt===null?ct.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function au(t){var e=lu;return lu+=1,da===null&&(da=[]),t=Wr(da,t,e),e=ct,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?Ys:Ls),t}function vn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return au(t);if(t.$$typeof===w)return $t(t)}throw Error(r(438,String(t)))}function oc(t){var e=null,l=ct.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=ct.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=sc(),ct.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=jt;return e.index++,l}function Xe(t,e){return typeof e=="function"?e(t):e}function yn(t){var e=qt();return dc(e,Et,t)}function dc(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}e.baseQueue=u=n,a.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{e=u.next;var f=i=null,m=null,E=e,O=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(mt&U)===U:(cl&U)===U){var x=E.revertLane;if(x===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===fa&&(O=!0);else if((cl&x)===x){E=E.next,x===fa&&(O=!0);continue}else U={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(f=m=U,i=n):m=m.next=U,ct.lanes|=x,ml|=x;U=E.action,Yl&&l(n,U),n=E.hasEagerState?E.eagerState:l(n,U)}else x={lane:U,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(f=m=x,i=n):m=m.next=x,ct.lanes|=U,ml|=U;E=E.next}while(E!==null&&E!==e);if(m===null?i=n:m.next=f,!ie(n,t.memoizedState)&&(Xt=!0,O&&(l=ra,l!==null)))throw l;t.memoizedState=n,t.baseState=i,t.baseQueue=m,a.lastRenderedState=n}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function hc(t){var e=qt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,n=e.memoizedState;if(u!==null){l.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);ie(n,e.memoizedState)||(Xt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),l.lastRenderedState=n}return[n,a]}function us(t,e,l){var a=ct,u=qt(),n=gt;if(n){if(l===void 0)throw Error(r(407));l=l()}else l=e();var i=!ie((Et||u).memoizedState,l);i&&(u.memoizedState=l,Xt=!0),u=u.queue;var f=cs.bind(null,a,u,t);if(uu(2048,8,f,[t]),u.getSnapshot!==e||i||Bt!==null&&Bt.memoizedState.tag&1){if(a.flags|=2048,ha(9,gn(),is.bind(null,a,u,l,e),null),zt===null)throw Error(r(349));n||(cl&124)!==0||ns(a,e,l)}return l}function ns(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=ct.updateQueue,e===null?(e=sc(),ct.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function is(t,e,l,a){e.value=l,e.getSnapshot=a,fs(e)&&rs(t)}function cs(t,e,l){return l(function(){fs(e)&&rs(t)})}function fs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ie(t,l)}catch{return!0}}function rs(t){var e=ua(t,2);e!==null&&de(e,t,2)}function mc(t){var e=te();if(typeof t=="function"){var l=t;if(t=l(),Yl){tl(!0);try{l()}finally{tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:t},e}function ss(t,e,l,a){return t.baseState=l,dc(t,Et,typeof a=="function"?a:Xe)}function Rm(t,e,l,a,u){if(bn(t))throw Error(r(485));if(t=e.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};M.T!==null?l(!0):n.isTransition=!1,a(n),l=e.pending,l===null?(n.next=e.pending=n,os(e,n)):(n.next=l.next,e.pending=l.next=n)}}function os(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var n=M.T,i={};M.T=i;try{var f=l(u,a),m=M.S;m!==null&&m(i,f),ds(t,e,f)}catch(E){vc(t,e,E)}finally{M.T=n}}else try{n=l(u,a),ds(t,e,n)}catch(E){vc(t,e,E)}}function ds(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){hs(t,e,a)},function(a){return vc(t,e,a)}):hs(t,e,l)}function hs(t,e,l){e.status="fulfilled",e.value=l,ms(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,os(t,l)))}function vc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,ms(e),e=e.next;while(e!==a)}t.action=null}function ms(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function vs(t,e){return e}function ys(t,e){if(gt){var l=zt.formState;if(l!==null){t:{var a=ct;if(gt){if(Nt){e:{for(var u=Nt,n=ze;u.nodeType!==8;){if(!n){u=null;break e}if(u=Ae(u.nextSibling),u===null){u=null;break e}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){Nt=Ae(u.nextSibling),a=u.data==="F!";break t}}Hl(a)}a=!1}a&&(e=l[0])}}return l=te(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},l.queue=a,l=js.bind(null,ct,a),a.dispatch=l,a=mc(!1),n=Sc.bind(null,ct,!1,a.queue),a=te(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Rm.bind(null,ct,u,n,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function gs(t){var e=qt();return ps(e,Et,t)}function ps(t,e,l){if(e=dc(t,e,vs)[0],t=yn(Xe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=au(e)}catch(i){throw i===Fa?sn:i}else a=e;e=qt();var u=e.queue,n=u.dispatch;return l!==e.memoizedState&&(ct.flags|=2048,ha(9,gn(),zm.bind(null,u,l),null)),[a,n,t]}function zm(t,e){t.action=e}function bs(t){var e=qt(),l=Et;if(l!==null)return ps(e,l,t);qt(),e=e.memoizedState,l=qt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ha(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=ct.updateQueue,e===null&&(e=sc(),ct.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function gn(){return{destroy:void 0,resource:void 0}}function Ss(){return qt().memoizedState}function pn(t,e,l,a){var u=te();a=a===void 0?null:a,ct.flags|=t,u.memoizedState=ha(1|e,gn(),l,a)}function uu(t,e,l,a){var u=qt();a=a===void 0?null:a;var n=u.memoizedState.inst;Et!==null&&a!==null&&nc(a,Et.memoizedState.deps)?u.memoizedState=ha(e,n,l,a):(ct.flags|=t,u.memoizedState=ha(1|e,n,l,a))}function Es(t,e){pn(8390656,8,t,e)}function xs(t,e){uu(2048,8,t,e)}function Ts(t,e){return uu(4,2,t,e)}function As(t,e){return uu(4,4,t,e)}function Rs(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zs(t,e,l){l=l!=null?l.concat([t]):null,uu(4,4,Rs.bind(null,e,t),l)}function yc(){}function Ms(t,e){var l=qt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&nc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Os(t,e){var l=qt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&nc(e,a[1]))return a[0];if(a=t(),Yl){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a}function gc(t,e,l){return l===void 0||(cl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Uo(),ct.lanes|=t,ml|=t,l)}function Ds(t,e,l,a){return ie(l,e)?l:sa.current!==null?(t=gc(t,l,a),ie(t,e)||(Xt=!0),t):(cl&42)===0?(Xt=!0,t.memoizedState=l):(t=Uo(),ct.lanes|=t,ml|=t,e)}function _s(t,e,l,a,u){var n=L.p;L.p=n!==0&&8>n?n:8;var i=M.T,f={};M.T=f,Sc(t,!1,e,l);try{var m=u(),E=M.S;if(E!==null&&E(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var O=xm(m,a);nu(t,e,O,oe(t))}else nu(t,e,a,oe(t))}catch(U){nu(t,e,{then:function(){},status:"rejected",reason:U},oe())}finally{L.p=n,M.T=i}}function Mm(){}function pc(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=Ns(t).queue;_s(t,u,e,lt,l===null?Mm:function(){return Us(t),l(a)})}function Ns(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:lt},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Us(t){var e=Ns(t).next.queue;nu(t,e,{},oe())}function bc(){return $t(Tu)}function Cs(){return qt().memoizedState}function Hs(){return qt().memoizedState}function Om(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=oe();t=nl(l);var a=il(e,t,l);a!==null&&(de(a,e,l),Ia(a,e,l)),e={cache:$i()},t.payload=e;return}e=e.return}}function Dm(t,e,l){var a=oe();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},bn(t)?Bs(e,l):(l=Li(t,e,l,a),l!==null&&(de(l,t,a),qs(l,e,a)))}function js(t,e,l){var a=oe();nu(t,e,l,a)}function nu(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(bn(t))Bs(e,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var i=e.lastRenderedState,f=n(i,l);if(u.hasEagerState=!0,u.eagerState=f,ie(f,i))return en(t,e,u,0),zt===null&&tn(),!1}catch{}finally{}if(l=Li(t,e,u,a),l!==null)return de(l,t,a),qs(l,e,a),!0}return!1}function Sc(t,e,l,a){if(a={lane:2,revertLane:Pc(),action:a,hasEagerState:!1,eagerState:null,next:null},bn(t)){if(e)throw Error(r(479))}else e=Li(t,l,a,2),e!==null&&de(e,t,2)}function bn(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Bs(t,e){oa=hn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function qs(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Vf(t,l)}}var Sn={readContext:$t,use:vn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},Ys={readContext:$t,use:vn,useCallback:function(t,e){return te().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Es,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,pn(4194308,4,Rs.bind(null,e,t),l)},useLayoutEffect:function(t,e){return pn(4194308,4,t,e)},useInsertionEffect:function(t,e){pn(4,2,t,e)},useMemo:function(t,e){var l=te();e=e===void 0?null:e;var a=t();if(Yl){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=te();if(l!==void 0){var u=l(e);if(Yl){tl(!0);try{l(e)}finally{tl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Dm.bind(null,ct,t),[a.memoizedState,t]},useRef:function(t){var e=te();return t={current:t},e.memoizedState=t},useState:function(t){t=mc(t);var e=t.queue,l=js.bind(null,ct,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:yc,useDeferredValue:function(t,e){var l=te();return gc(l,t,e)},useTransition:function(){var t=mc(!1);return t=_s.bind(null,ct,t.queue,!0,!1),te().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=ct,u=te();if(gt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),zt===null)throw Error(r(349));(mt&124)!==0||ns(a,e,l)}u.memoizedState=l;var n={value:l,getSnapshot:e};return u.queue=n,Es(cs.bind(null,a,n,t),[t]),a.flags|=2048,ha(9,gn(),is.bind(null,a,n,l,e),null),l},useId:function(){var t=te(),e=zt.identifierPrefix;if(gt){var l=Le,a=Ye;l=(a&~(1<<32-ne(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=mn++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Tm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:bc,useFormState:ys,useActionState:ys,useOptimistic:function(t){var e=te();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Sc.bind(null,ct,!0,l),l.dispatch=e,[t,e]},useMemoCache:oc,useCacheRefresh:function(){return te().memoizedState=Om.bind(null,ct)}},Ls={readContext:$t,use:vn,useCallback:Ms,useContext:$t,useEffect:xs,useImperativeHandle:zs,useInsertionEffect:Ts,useLayoutEffect:As,useMemo:Os,useReducer:yn,useRef:Ss,useState:function(){return yn(Xe)},useDebugValue:yc,useDeferredValue:function(t,e){var l=qt();return Ds(l,Et.memoizedState,t,e)},useTransition:function(){var t=yn(Xe)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:au(t),e]},useSyncExternalStore:us,useId:Cs,useHostTransitionStatus:bc,useFormState:gs,useActionState:gs,useOptimistic:function(t,e){var l=qt();return ss(l,Et,t,e)},useMemoCache:oc,useCacheRefresh:Hs},_m={readContext:$t,use:vn,useCallback:Ms,useContext:$t,useEffect:xs,useImperativeHandle:zs,useInsertionEffect:Ts,useLayoutEffect:As,useMemo:Os,useReducer:hc,useRef:Ss,useState:function(){return hc(Xe)},useDebugValue:yc,useDeferredValue:function(t,e){var l=qt();return Et===null?gc(l,t,e):Ds(l,Et.memoizedState,t,e)},useTransition:function(){var t=hc(Xe)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:au(t),e]},useSyncExternalStore:us,useId:Cs,useHostTransitionStatus:bc,useFormState:bs,useActionState:bs,useOptimistic:function(t,e){var l=qt();return Et!==null?ss(l,Et,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:oc,useCacheRefresh:Hs},ma=null,iu=0;function En(t){var e=iu;return iu+=1,ma===null&&(ma=[]),Wr(ma,t,e)}function cu(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function xn(t,e){throw e.$$typeof===C?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ws(t){var e=t._init;return e(t._payload)}function Gs(t){function e(b,y){if(t){var S=b.deletions;S===null?(b.deletions=[y],b.flags|=16):S.push(y)}}function l(b,y){if(!t)return null;for(;y!==null;)e(b,y),y=y.sibling;return null}function a(b){for(var y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function u(b,y){return b=qe(b,y),b.index=0,b.sibling=null,b}function n(b,y,S){return b.index=S,t?(S=b.alternate,S!==null?(S=S.index,S<y?(b.flags|=67108866,y):S):(b.flags|=67108866,y)):(b.flags|=1048576,y)}function i(b){return t&&b.alternate===null&&(b.flags|=67108866),b}function f(b,y,S,N){return y===null||y.tag!==6?(y=Gi(S,b.mode,N),y.return=b,y):(y=u(y,S),y.return=b,y)}function m(b,y,S,N){var Z=S.type;return Z===K?O(b,y,S.props.children,N,S.key):y!==null&&(y.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===pt&&ws(Z)===y.type)?(y=u(y,S.props),cu(y,S),y.return=b,y):(y=an(S.type,S.key,S.props,null,b.mode,N),cu(y,S),y.return=b,y)}function E(b,y,S,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Xi(S,b.mode,N),y.return=b,y):(y=u(y,S.children||[]),y.return=b,y)}function O(b,y,S,N,Z){return y===null||y.tag!==7?(y=_l(S,b.mode,N,Z),y.return=b,y):(y=u(y,S),y.return=b,y)}function U(b,y,S){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Gi(""+y,b.mode,S),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case B:return S=an(y.type,y.key,y.props,null,b.mode,S),cu(S,y),S.return=b,S;case F:return y=Xi(y,b.mode,S),y.return=b,y;case pt:var N=y._init;return y=N(y._payload),U(b,y,S)}if(rt(y)||H(y))return y=_l(y,b.mode,S,null),y.return=b,y;if(typeof y.then=="function")return U(b,En(y),S);if(y.$$typeof===w)return U(b,fn(b,y),S);xn(b,y)}return null}function x(b,y,S,N){var Z=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:f(b,y,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case B:return S.key===Z?m(b,y,S,N):null;case F:return S.key===Z?E(b,y,S,N):null;case pt:return Z=S._init,S=Z(S._payload),x(b,y,S,N)}if(rt(S)||H(S))return Z!==null?null:O(b,y,S,N,null);if(typeof S.then=="function")return x(b,y,En(S),N);if(S.$$typeof===w)return x(b,y,fn(b,S),N);xn(b,S)}return null}function T(b,y,S,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return b=b.get(S)||null,f(y,b,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case B:return b=b.get(N.key===null?S:N.key)||null,m(y,b,N,Z);case F:return b=b.get(N.key===null?S:N.key)||null,E(y,b,N,Z);case pt:var ft=N._init;return N=ft(N._payload),T(b,y,S,N,Z)}if(rt(N)||H(N))return b=b.get(S)||null,O(y,b,N,Z,null);if(typeof N.then=="function")return T(b,y,S,En(N),Z);if(N.$$typeof===w)return T(b,y,S,fn(y,N),Z);xn(y,N)}return null}function at(b,y,S,N){for(var Z=null,ft=null,k=y,tt=y=0,Zt=null;k!==null&&tt<S.length;tt++){k.index>tt?(Zt=k,k=null):Zt=k.sibling;var yt=x(b,k,S[tt],N);if(yt===null){k===null&&(k=Zt);break}t&&k&&yt.alternate===null&&e(b,k),y=n(yt,y,tt),ft===null?Z=yt:ft.sibling=yt,ft=yt,k=Zt}if(tt===S.length)return l(b,k),gt&&Ul(b,tt),Z;if(k===null){for(;tt<S.length;tt++)k=U(b,S[tt],N),k!==null&&(y=n(k,y,tt),ft===null?Z=k:ft.sibling=k,ft=k);return gt&&Ul(b,tt),Z}for(k=a(k);tt<S.length;tt++)Zt=T(k,b,tt,S[tt],N),Zt!==null&&(t&&Zt.alternate!==null&&k.delete(Zt.key===null?tt:Zt.key),y=n(Zt,y,tt),ft===null?Z=Zt:ft.sibling=Zt,ft=Zt);return t&&k.forEach(function(Tl){return e(b,Tl)}),gt&&Ul(b,tt),Z}function I(b,y,S,N){if(S==null)throw Error(r(151));for(var Z=null,ft=null,k=y,tt=y=0,Zt=null,yt=S.next();k!==null&&!yt.done;tt++,yt=S.next()){k.index>tt?(Zt=k,k=null):Zt=k.sibling;var Tl=x(b,k,yt.value,N);if(Tl===null){k===null&&(k=Zt);break}t&&k&&Tl.alternate===null&&e(b,k),y=n(Tl,y,tt),ft===null?Z=Tl:ft.sibling=Tl,ft=Tl,k=Zt}if(yt.done)return l(b,k),gt&&Ul(b,tt),Z;if(k===null){for(;!yt.done;tt++,yt=S.next())yt=U(b,yt.value,N),yt!==null&&(y=n(yt,y,tt),ft===null?Z=yt:ft.sibling=yt,ft=yt);return gt&&Ul(b,tt),Z}for(k=a(k);!yt.done;tt++,yt=S.next())yt=T(k,b,tt,yt.value,N),yt!==null&&(t&&yt.alternate!==null&&k.delete(yt.key===null?tt:yt.key),y=n(yt,y,tt),ft===null?Z=yt:ft.sibling=yt,ft=yt);return t&&k.forEach(function(N0){return e(b,N0)}),gt&&Ul(b,tt),Z}function Tt(b,y,S,N){if(typeof S=="object"&&S!==null&&S.type===K&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case B:t:{for(var Z=S.key;y!==null;){if(y.key===Z){if(Z=S.type,Z===K){if(y.tag===7){l(b,y.sibling),N=u(y,S.props.children),N.return=b,b=N;break t}}else if(y.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===pt&&ws(Z)===y.type){l(b,y.sibling),N=u(y,S.props),cu(N,S),N.return=b,b=N;break t}l(b,y);break}else e(b,y);y=y.sibling}S.type===K?(N=_l(S.props.children,b.mode,N,S.key),N.return=b,b=N):(N=an(S.type,S.key,S.props,null,b.mode,N),cu(N,S),N.return=b,b=N)}return i(b);case F:t:{for(Z=S.key;y!==null;){if(y.key===Z)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){l(b,y.sibling),N=u(y,S.children||[]),N.return=b,b=N;break t}else{l(b,y);break}else e(b,y);y=y.sibling}N=Xi(S,b.mode,N),N.return=b,b=N}return i(b);case pt:return Z=S._init,S=Z(S._payload),Tt(b,y,S,N)}if(rt(S))return at(b,y,S,N);if(H(S)){if(Z=H(S),typeof Z!="function")throw Error(r(150));return S=Z.call(S),I(b,y,S,N)}if(typeof S.then=="function")return Tt(b,y,En(S),N);if(S.$$typeof===w)return Tt(b,y,fn(b,S),N);xn(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,y!==null&&y.tag===6?(l(b,y.sibling),N=u(y,S),N.return=b,b=N):(l(b,y),N=Gi(S,b.mode,N),N.return=b,b=N),i(b)):l(b,y)}return function(b,y,S,N){try{iu=0;var Z=Tt(b,y,S,N);return ma=null,Z}catch(k){if(k===Fa||k===sn)throw k;var ft=ce(29,k,null,b.mode);return ft.lanes=N,ft.return=b,ft}finally{}}}var va=Gs(!0),Xs=Gs(!1),be=j(null),Me=null;function fl(t){var e=t.alternate;Y(Lt,Lt.current&1),Y(be,t),Me===null&&(e===null||sa.current!==null||e.memoizedState!==null)&&(Me=t)}function Qs(t){if(t.tag===22){if(Y(Lt,Lt.current),Y(be,t),Me===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Me=t)}}else rl()}function rl(){Y(Lt,Lt.current),Y(be,be.current)}function Qe(t){X(be),Me===t&&(Me=null),X(Lt)}var Lt=j(0);function Tn(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||of(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Ec(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var xc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=oe(),u=nl(a);u.payload=e,l!=null&&(u.callback=l),e=il(t,u,a),e!==null&&(de(e,t,a),Ia(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=oe(),u=nl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=il(t,u,a),e!==null&&(de(e,t,a),Ia(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=oe(),a=nl(l);a.tag=2,e!=null&&(a.callback=e),e=il(t,a,l),e!==null&&(de(e,t,l),Ia(e,t,l))}};function Zs(t,e,l,a,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,i):e.prototype&&e.prototype.isPureReactComponent?!Qa(l,a)||!Qa(u,n):!0}function Vs(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function Ll(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var An=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ks(t){An(t)}function Js(t){console.error(t)}function ks(t){An(t)}function Rn(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function $s(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tc(t,e,l){return l=nl(l),l.tag=3,l.payload={element:null},l.callback=function(){Rn(t,e)},l}function Ws(t){return t=nl(t),t.tag=3,t}function Fs(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;t.payload=function(){return u(n)},t.callback=function(){$s(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){$s(e,l,a),typeof u!="function"&&(vl===null?vl=new Set([this]):vl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Nm(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ka(e,l,u,!0),l=be.current,l!==null){switch(l.tag){case 13:return Me===null?Jc():l.alternate===null&&Ut===0&&(Ut=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===Pi?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),$c(t,a,u)),!1;case 22:return l.flags|=65536,a===Pi?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),$c(t,a,u)),!1}throw Error(r(435,l.tag))}return $c(t,a,u),Jc(),!1}if(gt)return e=be.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Vi&&(t=Error(r(422),{cause:a}),Ja(ve(t,l)))):(a!==Vi&&(e=Error(r(423),{cause:a}),Ja(ve(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=ve(a,l),u=Tc(t.stateNode,a,u),ec(t,u),Ut!==4&&(Ut=2)),!1;var n=Error(r(520),{cause:a});if(n=ve(n,l),mu===null?mu=[n]:mu.push(n),Ut!==4&&(Ut=2),e===null)return!0;a=ve(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Tc(l.stateNode,a,t),ec(l,t),!1;case 1:if(e=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(vl===null||!vl.has(n))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Ws(u),Fs(u,t,l,a),ec(l,u),!1}l=l.return}while(l!==null);return!1}var Ps=Error(r(461)),Xt=!1;function Vt(t,e,l,a){e.child=t===null?Xs(e,null,l,a):va(e,t.child,l,a)}function Is(t,e,l,a,u){l=l.render;var n=e.ref;if("ref"in a){var i={};for(var f in a)f!=="ref"&&(i[f]=a[f])}else i=a;return Bl(e),a=ic(t,e,l,i,n,u),f=cc(),t!==null&&!Xt?(fc(t,e,u),Ze(t,e,u)):(gt&&f&&Qi(e),e.flags|=1,Vt(t,e,a,u),e.child)}function to(t,e,l,a,u){if(t===null){var n=l.type;return typeof n=="function"&&!wi(n)&&n.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=n,eo(t,e,n,a,u)):(t=an(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!Nc(t,u)){var i=n.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(i,a)&&t.ref===e.ref)return Ze(t,e,u)}return e.flags|=1,t=qe(n,a),t.ref=e.ref,t.return=e,e.child=t}function eo(t,e,l,a,u){if(t!==null){var n=t.memoizedProps;if(Qa(n,a)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=a=n,Nc(t,u))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,Ze(t,e,u)}return Ac(t,e,l,a,u)}function lo(t,e,l){var a=e.pendingProps,u=a.children,n=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=n!==null?n.baseLanes|l:l,t!==null){for(u=e.child=t.child,n=0;u!==null;)n=n|u.lanes|u.childLanes,u=u.sibling;e.childLanes=n&~a}else e.childLanes=0,e.child=null;return ao(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&rn(e,n!==null?n.cachePool:null),n!==null?es(e,n):ac(),Qs(e);else return e.lanes=e.childLanes=536870912,ao(t,e,n!==null?n.baseLanes|l:l,l)}else n!==null?(rn(e,n.cachePool),es(e,n),rl(),e.memoizedState=null):(t!==null&&rn(e,null),ac(),rl());return Vt(t,e,u,l),e.child}function ao(t,e,l,a){var u=Fi();return u=u===null?null:{parent:Yt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&rn(e,null),ac(),Qs(e),t!==null&&ka(t,e,a,!0),null}function zn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Ac(t,e,l,a,u){return Bl(e),l=ic(t,e,l,a,void 0,u),a=cc(),t!==null&&!Xt?(fc(t,e,u),Ze(t,e,u)):(gt&&a&&Qi(e),e.flags|=1,Vt(t,e,l,u),e.child)}function uo(t,e,l,a,u,n){return Bl(e),e.updateQueue=null,l=as(e,a,l,u),ls(t),a=cc(),t!==null&&!Xt?(fc(t,e,n),Ze(t,e,n)):(gt&&a&&Qi(e),e.flags|=1,Vt(t,e,l,n),e.child)}function no(t,e,l,a,u){if(Bl(e),e.stateNode===null){var n=na,i=l.contextType;typeof i=="object"&&i!==null&&(n=$t(i)),n=new l(a,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xc,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=a,n.state=e.memoizedState,n.refs={},Ii(e),i=l.contextType,n.context=typeof i=="object"&&i!==null?$t(i):na,n.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(Ec(e,l,i,a),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&xc.enqueueReplaceState(n,n.state,null),eu(e,a,n,u),tu(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){n=e.stateNode;var f=e.memoizedProps,m=Ll(l,f);n.props=m;var E=n.context,O=l.contextType;i=na,typeof O=="object"&&O!==null&&(i=$t(O));var U=l.getDerivedStateFromProps;O=typeof U=="function"||typeof n.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,O||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f||E!==i)&&Vs(e,n,a,i),ul=!1;var x=e.memoizedState;n.state=x,eu(e,a,n,u),tu(),E=e.memoizedState,f||x!==E||ul?(typeof U=="function"&&(Ec(e,l,U,a),E=e.memoizedState),(m=ul||Zs(e,l,m,a,x,E,i))?(O||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),n.props=a,n.state=E,n.context=i,a=m):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{n=e.stateNode,tc(t,e),i=e.memoizedProps,O=Ll(l,i),n.props=O,U=e.pendingProps,x=n.context,E=l.contextType,m=na,typeof E=="object"&&E!==null&&(m=$t(E)),f=l.getDerivedStateFromProps,(E=typeof f=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==U||x!==m)&&Vs(e,n,a,m),ul=!1,x=e.memoizedState,n.state=x,eu(e,a,n,u),tu();var T=e.memoizedState;i!==U||x!==T||ul||t!==null&&t.dependencies!==null&&cn(t.dependencies)?(typeof f=="function"&&(Ec(e,l,f,a),T=e.memoizedState),(O=ul||Zs(e,l,O,a,x,T,m)||t!==null&&t.dependencies!==null&&cn(t.dependencies))?(E||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,T,m),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,T,m)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),n.props=a,n.state=T,n.context=m,a=O):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),a=!1)}return n=a,zn(t,e),a=(e.flags&128)!==0,n||a?(n=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&a?(e.child=va(e,t.child,null,u),e.child=va(e,null,l,u)):Vt(t,e,l,u),e.memoizedState=n.state,t=e.child):t=Ze(t,e,u),t}function io(t,e,l,a){return Ka(),e.flags|=256,Vt(t,e,l,a),e.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zc(t){return{baseLanes:t,cachePool:Jr()}}function Mc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Se),t}function co(t,e,l){var a=e.pendingProps,u=!1,n=(e.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),i&&(u=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(gt){if(u?fl(e):rl(),gt){var f=Nt,m;if(m=f){t:{for(m=f,f=ze;m.nodeType!==8;){if(!f){f=null;break t}if(m=Ae(m.nextSibling),m===null){f=null;break t}}f=m}f!==null?(e.memoizedState={dehydrated:f,treeContext:Nl!==null?{id:Ye,overflow:Le}:null,retryLane:536870912,hydrationErrors:null},m=ce(18,null,null,0),m.stateNode=f,m.return=e,e.child=m,Ft=e,Nt=null,m=!0):m=!1}m||Hl(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return of(f)?e.lanes=32:e.lanes=536870912,null;Qe(e)}return f=a.children,a=a.fallback,u?(rl(),u=e.mode,f=Mn({mode:"hidden",children:f},u),a=_l(a,u,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,u=e.child,u.memoizedState=zc(l),u.childLanes=Mc(t,i,l),e.memoizedState=Rc,a):(fl(e),Oc(e,f))}if(m=t.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(n)e.flags&256?(fl(e),e.flags&=-257,e=Dc(t,e,l)):e.memoizedState!==null?(rl(),e.child=t.child,e.flags|=128,e=null):(rl(),u=a.fallback,f=e.mode,a=Mn({mode:"visible",children:a.children},f),u=_l(u,f,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,va(e,t.child,null,l),a=e.child,a.memoizedState=zc(l),a.childLanes=Mc(t,i,l),e.memoizedState=Rc,e=u);else if(fl(e),of(f)){if(i=f.nextSibling&&f.nextSibling.dataset,i)var E=i.dgst;i=E,a=Error(r(419)),a.stack="",a.digest=i,Ja({value:a,source:null,stack:null}),e=Dc(t,e,l)}else if(Xt||ka(t,e,l,!1),i=(l&t.childLanes)!==0,Xt||i){if(i=zt,i!==null&&(a=l&-l,a=(a&42)!==0?1:oi(a),a=(a&(i.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,ua(t,a),de(i,t,a),Ps;f.data==="$?"||Jc(),e=Dc(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Nt=Ae(f.nextSibling),Ft=e,gt=!0,Cl=null,ze=!1,t!==null&&(ge[pe++]=Ye,ge[pe++]=Le,ge[pe++]=Nl,Ye=t.id,Le=t.overflow,Nl=e),e=Oc(e,a.children),e.flags|=4096);return e}return u?(rl(),u=a.fallback,f=e.mode,m=t.child,E=m.sibling,a=qe(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,E!==null?u=qe(E,u):(u=_l(u,f,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,f=t.child.memoizedState,f===null?f=zc(l):(m=f.cachePool,m!==null?(E=Yt._currentValue,m=m.parent!==E?{parent:E,pool:E}:m):m=Jr(),f={baseLanes:f.baseLanes|l,cachePool:m}),u.memoizedState=f,u.childLanes=Mc(t,i,l),e.memoizedState=Rc,a):(fl(e),l=t.child,t=l.sibling,l=qe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function Oc(t,e){return e=Mn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Mn(t,e){return t=ce(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Dc(t,e,l){return va(e,t.child,null,l),t=Oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fo(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ji(t.return,e,l)}function _c(t,e,l,a,u){var n=t.memoizedState;n===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(n.isBackwards=e,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=l,n.tailMode=u)}function ro(t,e,l){var a=e.pendingProps,u=a.revealOrder,n=a.tail;if(Vt(t,e,a.children,l),a=Lt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fo(t,l,e);else if(t.tag===19)fo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Y(Lt,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&Tn(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),_c(e,!1,u,l,n);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&Tn(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}_c(e,!0,l,null,n);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ze(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ml|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ka(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=qe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=qe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Nc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&cn(t)))}function Um(t,e,l){switch(e.tag){case 3:Mt(e,e.stateNode.containerInfo),al(e,Yt,t.memoizedState.cache),Ka();break;case 27:case 5:ii(e);break;case 4:Mt(e,e.stateNode.containerInfo);break;case 10:al(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?co(t,e,l):(fl(e),t=Ze(t,e,l),t!==null?t.sibling:null);fl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ka(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return ro(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Y(Lt,Lt.current),a)break;return null;case 22:case 23:return e.lanes=0,lo(t,e,l);case 24:al(e,Yt,t.memoizedState.cache)}return Ze(t,e,l)}function so(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!Nc(t,l)&&(e.flags&128)===0)return Xt=!1,Um(t,e,l);Xt=(t.flags&131072)!==0}else Xt=!1,gt&&(e.flags&1048576)!==0&&wr(e,nn,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")wi(a)?(t=Ll(a,t),e.tag=1,e=no(null,e,a,t,l)):(e.tag=0,e=Ac(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===et){e.tag=11,e=Is(null,e,a,t,l);break t}else if(u===dt){e.tag=14,e=to(null,e,a,t,l);break t}}throw e=$(a)||a,Error(r(306,e,""))}}return e;case 0:return Ac(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=Ll(a,e.pendingProps),no(t,e,a,u,l);case 3:t:{if(Mt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var n=e.memoizedState;u=n.element,tc(t,e),eu(e,a,null,l);var i=e.memoizedState;if(a=i.cache,al(e,Yt,a),a!==n.cache&&ki(e,[Yt],l,!0),tu(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=io(t,e,a,l);break t}else if(a!==u){u=ve(Error(r(424)),e),Ja(u),e=io(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Nt=Ae(t.firstChild),Ft=e,gt=!0,Cl=null,ze=!0,l=Xs(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ka(),a===u){e=Ze(t,e,l);break t}Vt(t,e,a,l)}e=e.child}return e;case 26:return zn(t,e),t===null?(l=vd(e.type,null,e.pendingProps,null))?e.memoizedState=l:gt||(l=e.type,t=e.pendingProps,a=Gn(nt.current).createElement(l),a[kt]=e,a[Pt]=t,Jt(a,l,t),Gt(a),e.stateNode=a):e.memoizedState=vd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ii(e),t===null&&gt&&(a=e.stateNode=dd(e.type,e.pendingProps,nt.current),Ft=e,ze=!0,u=Nt,pl(e.type)?(df=u,Nt=Ae(a.firstChild)):Nt=u),Vt(t,e,e.pendingProps.children,l),zn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&gt&&((u=a=Nt)&&(a=i0(a,e.type,e.pendingProps,ze),a!==null?(e.stateNode=a,Ft=e,Nt=Ae(a.firstChild),ze=!1,u=!0):u=!1),u||Hl(e)),ii(e),u=e.type,n=e.pendingProps,i=t!==null?t.memoizedProps:null,a=n.children,ff(u,n)?a=null:i!==null&&ff(u,i)&&(e.flags|=32),e.memoizedState!==null&&(u=ic(t,e,Am,null,null,l),Tu._currentValue=u),zn(t,e),Vt(t,e,a,l),e.child;case 6:return t===null&&gt&&((t=l=Nt)&&(l=c0(l,e.pendingProps,ze),l!==null?(e.stateNode=l,Ft=e,Nt=null,t=!0):t=!1),t||Hl(e)),null;case 13:return co(t,e,l);case 4:return Mt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=va(e,null,a,l):Vt(t,e,a,l),e.child;case 11:return Is(t,e,e.type,e.pendingProps,l);case 7:return Vt(t,e,e.pendingProps,l),e.child;case 8:return Vt(t,e,e.pendingProps.children,l),e.child;case 12:return Vt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,al(e,e.type,a.value),Vt(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,Bl(e),u=$t(u),a=a(u),e.flags|=1,Vt(t,e,a,l),e.child;case 14:return to(t,e,e.type,e.pendingProps,l);case 15:return eo(t,e,e.type,e.pendingProps,l);case 19:return ro(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=Mn(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=qe(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return lo(t,e,l);case 24:return Bl(e),a=$t(Yt),t===null?(u=Fi(),u===null&&(u=zt,n=$i(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=l),u=n),e.memoizedState={parent:a,cache:u},Ii(e),al(e,Yt,u)):((t.lanes&l)!==0&&(tc(t,e),eu(e,null,null,l),tu()),u=t.memoizedState,n=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),al(e,Yt,a)):(a=n.cache,al(e,Yt,a),a!==u.cache&&ki(e,[Yt],l,!0))),Vt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Ve(t){t.flags|=4}function oo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sd(e)){if(e=be.current,e!==null&&((mt&4194048)===mt?Me!==null:(mt&62914560)!==mt&&(mt&536870912)===0||e!==Me))throw Pa=Pi,kr;t.flags|=8192}}function On(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Qf():536870912,t.lanes|=e,ba|=e)}function fu(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Cm(t,e,l){var a=e.pendingProps;switch(Zi(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ge(Yt),Ie(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Va(e)?Ve(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Qr())),Dt(e),null;case 26:return l=e.memoizedState,t===null?(Ve(e),l!==null?(Dt(e),oo(e,l)):(Dt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Ve(e),Dt(e),oo(e,l)):(Dt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Ve(e),Dt(e),e.flags&=-16777217),null;case 27:Yu(e),l=nt.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ve(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Dt(e),null}t=P.current,Va(e)?Gr(e):(t=dd(u,a,l),e.stateNode=t,Ve(e))}return Dt(e),null;case 5:if(Yu(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ve(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Dt(e),null}if(t=P.current,Va(e))Gr(e);else{switch(u=Gn(nt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[kt]=e,t[Pt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(Jt(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ve(e)}}return Dt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ve(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=nt.current,Va(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=Ft,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[kt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||nd(t.nodeValue,l)),t||Hl(e)}else t=Gn(t).createTextNode(a),t[kt]=e,e.stateNode=t}return Dt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Va(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[kt]=e}else Ka(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),u=!1}else u=Qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(Qe(e),e):(Qe(e),null)}if(Qe(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var n=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),On(e,e.updateQueue),Dt(e),null;case 4:return Ie(),t===null&&lf(e.stateNode.containerInfo),Dt(e),null;case 10:return Ge(e.type),Dt(e),null;case 19:if(X(Lt),u=e.memoizedState,u===null)return Dt(e),null;if(a=(e.flags&128)!==0,n=u.rendering,n===null)if(a)fu(u,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=Tn(t),n!==null){for(e.flags|=128,fu(u,!1),t=n.updateQueue,e.updateQueue=t,On(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Lr(l,t),l=l.sibling;return Y(Lt,Lt.current&1|2),e.child}t=t.sibling}u.tail!==null&&Re()>Nn&&(e.flags|=128,a=!0,fu(u,!1),e.lanes=4194304)}else{if(!a)if(t=Tn(n),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,On(e,t),fu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!gt)return Dt(e),null}else 2*Re()-u.renderingStartTime>Nn&&l!==536870912&&(e.flags|=128,a=!0,fu(u,!1),e.lanes=4194304);u.isBackwards?(n.sibling=e.child,e.child=n):(t=u.last,t!==null?t.sibling=n:e.child=n,u.last=n)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Re(),e.sibling=null,t=Lt.current,Y(Lt,a?t&1|2:t&1),e):(Dt(e),null);case 22:case 23:return Qe(e),uc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),l=e.updateQueue,l!==null&&On(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&X(ql),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ge(Yt),Dt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Hm(t,e){switch(Zi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ge(Yt),Ie(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Yu(e),null;case 13:if(Qe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Ka()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Lt),null;case 4:return Ie(),null;case 10:return Ge(e.type),null;case 22:case 23:return Qe(e),uc(),t!==null&&X(ql),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ge(Yt),null;case 25:return null;default:return null}}function ho(t,e){switch(Zi(e),e.tag){case 3:Ge(Yt),Ie();break;case 26:case 27:case 5:Yu(e);break;case 4:Ie();break;case 13:Qe(e);break;case 19:X(Lt);break;case 10:Ge(e.type);break;case 22:case 23:Qe(e),uc(),t!==null&&X(ql);break;case 24:Ge(Yt)}}function ru(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var n=l.create,i=l.inst;a=n(),i.destroy=a}l=l.next}while(l!==u)}}catch(f){Rt(e,e.return,f)}}function sl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&t)===t){var i=a.inst,f=i.destroy;if(f!==void 0){i.destroy=void 0,u=e;var m=l,E=f;try{E()}catch(O){Rt(u,m,O)}}}a=a.next}while(a!==n)}}catch(O){Rt(e,e.return,O)}}function mo(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{ts(e,l)}catch(a){Rt(t,t.return,a)}}}function vo(t,e,l){l.props=Ll(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Rt(t,e,a)}}function su(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Rt(t,e,u)}}function Oe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Rt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Rt(t,e,u)}else l.current=null}function yo(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Rt(t,t.return,u)}}function Uc(t,e,l){try{var a=t.stateNode;e0(a,t.type,l,e),a[Pt]=e}catch(u){Rt(t,t.return,u)}}function go(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pl(t.type)||t.tag===4}function Cc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||go(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=wn));else if(a!==4&&(a===27&&pl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Hc(t,e,l),t=t.sibling;t!==null;)Hc(t,e,l),t=t.sibling}function Dn(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&pl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Dn(t,e,l),t=t.sibling;t!==null;)Dn(t,e,l),t=t.sibling}function po(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);Jt(e,a,l),e[kt]=t,e[Pt]=l}catch(n){Rt(t,t.return,n)}}var Ke=!1,Ht=!1,jc=!1,bo=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function jm(t,e){if(t=t.containerInfo,nf=Jn,t=Dr(t),Ci(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var i=0,f=-1,m=-1,E=0,O=0,U=t,x=null;e:for(;;){for(var T;U!==l||u!==0&&U.nodeType!==3||(f=i+u),U!==n||a!==0&&U.nodeType!==3||(m=i+a),U.nodeType===3&&(i+=U.nodeValue.length),(T=U.firstChild)!==null;)x=U,U=T;for(;;){if(U===t)break e;if(x===l&&++E===u&&(f=i),x===n&&++O===a&&(m=i),(T=U.nextSibling)!==null)break;U=x,x=U.parentNode}U=T}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(cf={focusedElem:t,selectionRange:l},Jn=!1,Qt=e;Qt!==null;)if(e=Qt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Qt=t;else for(;Qt!==null;){switch(e=Qt,n=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,l=e,u=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var at=Ll(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(at,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(I){Rt(l,l.return,I)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)sf(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Qt=t;break}Qt=e.return}}function So(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ol(t,l),a&4&&ru(5,l);break;case 1:if(ol(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){Rt(l,l.return,i)}else{var u=Ll(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){Rt(l,l.return,i)}}a&64&&mo(l),a&512&&su(l,l.return);break;case 3:if(ol(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{ts(t,e)}catch(i){Rt(l,l.return,i)}}break;case 27:e===null&&a&4&&po(l);case 26:case 5:ol(t,l),e===null&&a&4&&yo(l),a&512&&su(l,l.return);break;case 12:ol(t,l);break;case 13:ol(t,l),a&4&&To(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Zm.bind(null,l),f0(t,l))));break;case 22:if(a=l.memoizedState!==null||Ke,!a){e=e!==null&&e.memoizedState!==null||Ht,u=Ke;var n=Ht;Ke=a,(Ht=e)&&!n?dl(t,l,(l.subtreeFlags&8772)!==0):ol(t,l),Ke=u,Ht=n}break;case 30:break;default:ol(t,l)}}function Eo(t){var e=t.alternate;e!==null&&(t.alternate=null,Eo(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&mi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,ee=!1;function Je(t,e,l){for(l=l.child;l!==null;)xo(t,e,l),l=l.sibling}function xo(t,e,l){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(Na,l)}catch{}switch(l.tag){case 26:Ht||Oe(l,e),Je(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ht||Oe(l,e);var a=Ot,u=ee;pl(l.type)&&(Ot=l.stateNode,ee=!1),Je(t,e,l),bu(l.stateNode),Ot=a,ee=u;break;case 5:Ht||Oe(l,e);case 6:if(a=Ot,u=ee,Ot=null,Je(t,e,l),Ot=a,ee=u,Ot!==null)if(ee)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(l.stateNode)}catch(n){Rt(l,e,n)}else try{Ot.removeChild(l.stateNode)}catch(n){Rt(l,e,n)}break;case 18:Ot!==null&&(ee?(t=Ot,sd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Mu(t)):sd(Ot,l.stateNode));break;case 4:a=Ot,u=ee,Ot=l.stateNode.containerInfo,ee=!0,Je(t,e,l),Ot=a,ee=u;break;case 0:case 11:case 14:case 15:Ht||sl(2,l,e),Ht||sl(4,l,e),Je(t,e,l);break;case 1:Ht||(Oe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&vo(l,e,a)),Je(t,e,l);break;case 21:Je(t,e,l);break;case 22:Ht=(a=Ht)||l.memoizedState!==null,Je(t,e,l),Ht=a;break;default:Je(t,e,l)}}function To(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mu(t)}catch(l){Rt(e,e.return,l)}}function Bm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new bo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new bo),e;default:throw Error(r(435,t.tag))}}function Bc(t,e){var l=Bm(t);e.forEach(function(a){var u=Vm.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function fe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],n=t,i=e,f=i;t:for(;f!==null;){switch(f.tag){case 27:if(pl(f.type)){Ot=f.stateNode,ee=!1;break t}break;case 5:Ot=f.stateNode,ee=!1;break t;case 3:case 4:Ot=f.stateNode.containerInfo,ee=!0;break t}f=f.return}if(Ot===null)throw Error(r(160));xo(n,i,u),Ot=null,ee=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Ao(e,t),e=e.sibling}var Te=null;function Ao(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fe(e,t),re(t),a&4&&(sl(3,t,t.return),ru(3,t),sl(5,t,t.return));break;case 1:fe(e,t),re(t),a&512&&(Ht||l===null||Oe(l,l.return)),a&64&&Ke&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Te;if(fe(e,t),re(t),a&512&&(Ht||l===null||Oe(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ha]||n[kt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),Jt(n,a,l),n[kt]=t,Gt(n),a=n;break t;case"link":var i=pd("link","href",u).get(a+(l.href||""));if(i){for(var f=0;f<i.length;f++)if(n=i[f],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(f,1);break e}}n=u.createElement(a),Jt(n,a,l),u.head.appendChild(n);break;case"meta":if(i=pd("meta","content",u).get(a+(l.content||""))){for(f=0;f<i.length;f++)if(n=i[f],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(f,1);break e}}n=u.createElement(a),Jt(n,a,l),u.head.appendChild(n);break;default:throw Error(r(468,a))}n[kt]=t,Gt(n),a=n}t.stateNode=a}else bd(u,t.type,t.stateNode);else t.stateNode=gd(u,a,t.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?bd(u,t.type,t.stateNode):gd(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Uc(t,t.memoizedProps,l.memoizedProps)}break;case 27:fe(e,t),re(t),a&512&&(Ht||l===null||Oe(l,l.return)),l!==null&&a&4&&Uc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(fe(e,t),re(t),a&512&&(Ht||l===null||Oe(l,l.return)),t.flags&32){u=t.stateNode;try{Fl(u,"")}catch(T){Rt(t,t.return,T)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Uc(t,u,l!==null?l.memoizedProps:u)),a&1024&&(jc=!0);break;case 6:if(fe(e,t),re(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(T){Rt(t,t.return,T)}}break;case 3:if(Zn=null,u=Te,Te=Xn(e.containerInfo),fe(e,t),Te=u,re(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Mu(e.containerInfo)}catch(T){Rt(t,t.return,T)}jc&&(jc=!1,Ro(t));break;case 4:a=Te,Te=Xn(t.stateNode.containerInfo),fe(e,t),re(t),Te=a;break;case 12:fe(e,t),re(t);break;case 13:fe(e,t),re(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Xc=Re()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Bc(t,a)));break;case 22:u=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,E=Ke,O=Ht;if(Ke=E||u,Ht=O||m,fe(e,t),Ht=O,Ke=E,re(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||m||Ke||Ht||wl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(n=m.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{f=m.stateNode;var U=m.memoizedProps.style,x=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(T){Rt(m,m.return,T)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(T){Rt(m,m.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Bc(t,l))));break;case 19:fe(e,t),re(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Bc(t,a)));break;case 30:break;case 21:break;default:fe(e,t),re(t)}}function re(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(go(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,n=Cc(t);Dn(t,n,u);break;case 5:var i=l.stateNode;l.flags&32&&(Fl(i,""),l.flags&=-33);var f=Cc(t);Dn(t,f,i);break;case 3:case 4:var m=l.stateNode.containerInfo,E=Cc(t);Hc(t,E,m);break;default:throw Error(r(161))}}catch(O){Rt(t,t.return,O)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ro(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ro(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ol(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)So(t,e.alternate,e),e=e.sibling}function wl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:sl(4,e,e.return),wl(e);break;case 1:Oe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&vo(e,e.return,l),wl(e);break;case 27:bu(e.stateNode);case 26:case 5:Oe(e,e.return),wl(e);break;case 22:e.memoizedState===null&&wl(e);break;case 30:wl(e);break;default:wl(e)}t=t.sibling}}function dl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,n=e,i=n.flags;switch(n.tag){case 0:case 11:case 15:dl(u,n,l),ru(4,n);break;case 1:if(dl(u,n,l),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){Rt(a,a.return,E)}if(a=n,u=a.updateQueue,u!==null){var f=a.stateNode;try{var m=u.shared.hiddenCallbacks;if(m!==null)for(u.shared.hiddenCallbacks=null,u=0;u<m.length;u++)Ir(m[u],f)}catch(E){Rt(a,a.return,E)}}l&&i&64&&mo(n),su(n,n.return);break;case 27:po(n);case 26:case 5:dl(u,n,l),l&&a===null&&i&4&&yo(n),su(n,n.return);break;case 12:dl(u,n,l);break;case 13:dl(u,n,l),l&&i&4&&To(u,n);break;case 22:n.memoizedState===null&&dl(u,n,l),su(n,n.return);break;case 30:break;default:dl(u,n,l)}e=e.sibling}}function qc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&$a(l))}function Yc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$a(t))}function De(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zo(t,e,l,a),e=e.sibling}function zo(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:De(t,e,l,a),u&2048&&ru(9,e);break;case 1:De(t,e,l,a);break;case 3:De(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$a(t)));break;case 12:if(u&2048){De(t,e,l,a),t=e.stateNode;try{var n=e.memoizedProps,i=n.id,f=n.onPostCommit;typeof f=="function"&&f(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Rt(e,e.return,m)}}else De(t,e,l,a);break;case 13:De(t,e,l,a);break;case 23:break;case 22:n=e.stateNode,i=e.alternate,e.memoizedState!==null?n._visibility&2?De(t,e,l,a):ou(t,e):n._visibility&2?De(t,e,l,a):(n._visibility|=2,ya(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&qc(i,e);break;case 24:De(t,e,l,a),u&2048&&Yc(e.alternate,e);break;default:De(t,e,l,a)}}function ya(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var n=t,i=e,f=l,m=a,E=i.flags;switch(i.tag){case 0:case 11:case 15:ya(n,i,f,m,u),ru(8,i);break;case 23:break;case 22:var O=i.stateNode;i.memoizedState!==null?O._visibility&2?ya(n,i,f,m,u):ou(n,i):(O._visibility|=2,ya(n,i,f,m,u)),u&&E&2048&&qc(i.alternate,i);break;case 24:ya(n,i,f,m,u),u&&E&2048&&Yc(i.alternate,i);break;default:ya(n,i,f,m,u)}e=e.sibling}}function ou(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:ou(l,a),u&2048&&qc(a.alternate,a);break;case 24:ou(l,a),u&2048&&Yc(a.alternate,a);break;default:ou(l,a)}e=e.sibling}}var du=8192;function ga(t){if(t.subtreeFlags&du)for(t=t.child;t!==null;)Mo(t),t=t.sibling}function Mo(t){switch(t.tag){case 26:ga(t),t.flags&du&&t.memoizedState!==null&&E0(Te,t.memoizedState,t.memoizedProps);break;case 5:ga(t);break;case 3:case 4:var e=Te;Te=Xn(t.stateNode.containerInfo),ga(t),Te=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=du,du=16777216,ga(t),du=e):ga(t));break;default:ga(t)}}function Oo(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Qt=a,_o(a,t)}Oo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Do(t),t=t.sibling}function Do(t){switch(t.tag){case 0:case 11:case 15:hu(t),t.flags&2048&&sl(9,t,t.return);break;case 3:hu(t);break;case 12:hu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_n(t)):hu(t);break;default:hu(t)}}function _n(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Qt=a,_o(a,t)}Oo(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:sl(8,e,e.return),_n(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,_n(e));break;default:_n(e)}t=t.sibling}}function _o(t,e){for(;Qt!==null;){var l=Qt;switch(l.tag){case 0:case 11:case 15:sl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$a(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Qt=a;else t:for(l=t;Qt!==null;){a=Qt;var u=a.sibling,n=a.return;if(Eo(a),a===l){Qt=null;break t}if(u!==null){u.return=n,Qt=u;break t}Qt=n}}}var qm={getCacheForType:function(t){var e=$t(Yt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Ym=typeof WeakMap=="function"?WeakMap:Map,bt=0,zt=null,st=null,mt=0,St=0,se=null,hl=!1,pa=!1,Lc=!1,ke=0,Ut=0,ml=0,Gl=0,wc=0,Se=0,ba=0,mu=null,le=null,Gc=!1,Xc=0,Nn=1/0,Un=null,vl=null,Kt=0,yl=null,Sa=null,Ea=0,Qc=0,Zc=null,No=null,vu=0,Vc=null;function oe(){if((bt&2)!==0&&mt!==0)return mt&-mt;if(M.T!==null){var t=fa;return t!==0?t:Pc()}return Kf()}function Uo(){Se===0&&(Se=(mt&536870912)===0||gt?Xf():536870912);var t=be.current;return t!==null&&(t.flags|=32),Se}function de(t,e,l){(t===zt&&(St===2||St===9)||t.cancelPendingCommit!==null)&&(xa(t,0),gl(t,mt,Se,!1)),Ca(t,l),((bt&2)===0||t!==zt)&&(t===zt&&((bt&2)===0&&(Gl|=l),Ut===4&&gl(t,mt,Se,!1)),_e(t))}function Co(t,e,l){if((bt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Ua(t,e),u=a?Gm(t,e):kc(t,e,!0),n=a;do{if(u===0){pa&&!a&&gl(t,e,0,!1);break}else{if(l=t.current.alternate,n&&!Lm(l)){u=kc(t,e,!1),n=!1;continue}if(u===2){if(n=e,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var f=t;u=mu;var m=f.current.memoizedState.isDehydrated;if(m&&(xa(f,i).flags|=256),i=kc(f,i,!1),i!==2){if(Lc&&!m){f.errorRecoveryDisabledLanes|=n,Gl|=n,u=4;break t}n=le,le=u,n!==null&&(le===null?le=n:le.push.apply(le,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){xa(t,0),gl(t,e,0,!0);break}t:{switch(a=t,n=u,n){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:gl(a,e,Se,!hl);break t;case 2:le=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Xc+300-Re(),10<u)){if(gl(a,e,Se,!hl),Xu(a,0,!0)!==0)break t;a.timeoutHandle=fd(Ho.bind(null,a,l,le,Un,Gc,e,Se,Gl,ba,hl,n,2,-0,0),u);break t}Ho(a,l,le,Un,Gc,e,Se,Gl,ba,hl,n,0,-0,0)}}break}while(!0);_e(t)}function Ho(t,e,l,a,u,n,i,f,m,E,O,U,x,T){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(xu={stylesheets:null,count:0,unsuspend:S0},Mo(e),U=x0(),U!==null)){t.cancelPendingCommit=U(Go.bind(null,t,e,n,l,a,u,i,f,m,O,1,x,T)),gl(t,n,i,!E);return}Go(t,e,n,l,a,u,i,f,m)}function Lm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],n=u.getSnapshot;u=u.value;try{if(!ie(n(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gl(t,e,l,a){e&=~wc,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var n=31-ne(u),i=1<<n;a[n]=-1,u&=~i}l!==0&&Zf(t,l,e)}function Cn(){return(bt&6)===0?(yu(0),!1):!0}function Kc(){if(st!==null){if(St===0)var t=st.return;else t=st,we=jl=null,rc(t),ma=null,iu=0,t=st;for(;t!==null;)ho(t.alternate,t),t=t.return;st=null}}function xa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,a0(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Kc(),zt=t,st=l=qe(t.current,null),mt=e,St=0,se=null,hl=!1,pa=Ua(t,e),Lc=!1,ba=Se=wc=Gl=ml=Ut=0,le=mu=null,Gc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-ne(a),n=1<<u;e|=t[u],a&=~n}return ke=e,tn(),l}function jo(t,e){ct=null,M.H=Sn,e===Fa||e===sn?(e=Fr(),St=3):e===kr?(e=Fr(),St=4):St=e===Ps?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,se=e,st===null&&(Ut=1,Rn(t,ve(e,t.current)))}function Bo(){var t=M.H;return M.H=Sn,t===null?Sn:t}function qo(){var t=M.A;return M.A=qm,t}function Jc(){Ut=4,hl||(mt&4194048)!==mt&&be.current!==null||(pa=!0),(ml&134217727)===0&&(Gl&134217727)===0||zt===null||gl(zt,mt,Se,!1)}function kc(t,e,l){var a=bt;bt|=2;var u=Bo(),n=qo();(zt!==t||mt!==e)&&(Un=null,xa(t,e)),e=!1;var i=Ut;t:do try{if(St!==0&&st!==null){var f=st,m=se;switch(St){case 8:Kc(),i=6;break t;case 3:case 2:case 9:case 6:be.current===null&&(e=!0);var E=St;if(St=0,se=null,Ta(t,f,m,E),l&&pa){i=0;break t}break;default:E=St,St=0,se=null,Ta(t,f,m,E)}}wm(),i=Ut;break}catch(O){jo(t,O)}while(!0);return e&&t.shellSuspendCounter++,we=jl=null,bt=a,M.H=u,M.A=n,st===null&&(zt=null,mt=0,tn()),i}function wm(){for(;st!==null;)Yo(st)}function Gm(t,e){var l=bt;bt|=2;var a=Bo(),u=qo();zt!==t||mt!==e?(Un=null,Nn=Re()+500,xa(t,e)):pa=Ua(t,e);t:do try{if(St!==0&&st!==null){e=st;var n=se;e:switch(St){case 1:St=0,se=null,Ta(t,e,n,1);break;case 2:case 9:if($r(n)){St=0,se=null,Lo(e);break}e=function(){St!==2&&St!==9||zt!==t||(St=7),_e(t)},n.then(e,e);break t;case 3:St=7;break t;case 4:St=5;break t;case 7:$r(n)?(St=0,se=null,Lo(e)):(St=0,se=null,Ta(t,e,n,7));break;case 5:var i=null;switch(st.tag){case 26:i=st.memoizedState;case 5:case 27:var f=st;if(!i||Sd(i)){St=0,se=null;var m=f.sibling;if(m!==null)st=m;else{var E=f.return;E!==null?(st=E,Hn(E)):st=null}break e}}St=0,se=null,Ta(t,e,n,5);break;case 6:St=0,se=null,Ta(t,e,n,6);break;case 8:Kc(),Ut=6;break t;default:throw Error(r(462))}}Xm();break}catch(O){jo(t,O)}while(!0);return we=jl=null,M.H=a,M.A=u,bt=l,st!==null?0:(zt=null,mt=0,tn(),Ut)}function Xm(){for(;st!==null&&!sh();)Yo(st)}function Yo(t){var e=so(t.alternate,t,ke);t.memoizedProps=t.pendingProps,e===null?Hn(t):st=e}function Lo(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=uo(l,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=uo(l,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:rc(e);default:ho(l,e),e=st=Lr(e,ke),e=so(l,e,ke)}t.memoizedProps=t.pendingProps,e===null?Hn(t):st=e}function Ta(t,e,l,a){we=jl=null,rc(e),ma=null,iu=0;var u=e.return;try{if(Nm(t,u,e,l,mt)){Ut=1,Rn(t,ve(l,t.current)),st=null;return}}catch(n){if(u!==null)throw st=u,n;Ut=1,Rn(t,ve(l,t.current)),st=null;return}e.flags&32768?(gt||a===1?t=!0:pa||(mt&536870912)!==0?t=!1:(hl=t=!0,(a===2||a===9||a===3||a===6)&&(a=be.current,a!==null&&a.tag===13&&(a.flags|=16384))),wo(e,t)):Hn(e)}function Hn(t){var e=t;do{if((e.flags&32768)!==0){wo(e,hl);return}t=e.return;var l=Cm(e.alternate,e,ke);if(l!==null){st=l;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Ut===0&&(Ut=5)}function wo(t,e){do{var l=Hm(t.alternate,t);if(l!==null){l.flags&=32767,st=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=l}while(t!==null);Ut=6,st=null}function Go(t,e,l,a,u,n,i,f,m){t.cancelPendingCommit=null;do jn();while(Kt!==0);if((bt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(n=e.lanes|e.childLanes,n|=Yi,Sh(t,l,n,i,f,m),t===zt&&(st=zt=null,mt=0),Sa=e,yl=t,Ea=l,Qc=n,Zc=u,No=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Km(Lu,function(){return Ko(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,u=L.p,L.p=2,i=bt,bt|=4;try{jm(t,e,l)}finally{bt=i,L.p=u,M.T=a}}Kt=1,Xo(),Qo(),Zo()}}function Xo(){if(Kt===1){Kt=0;var t=yl,e=Sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=L.p;L.p=2;var u=bt;bt|=4;try{Ao(e,t);var n=cf,i=Dr(t.containerInfo),f=n.focusedElem,m=n.selectionRange;if(i!==f&&f&&f.ownerDocument&&Or(f.ownerDocument.documentElement,f)){if(m!==null&&Ci(f)){var E=m.start,O=m.end;if(O===void 0&&(O=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(O,f.value.length);else{var U=f.ownerDocument||document,x=U&&U.defaultView||window;if(x.getSelection){var T=x.getSelection(),at=f.textContent.length,I=Math.min(m.start,at),Tt=m.end===void 0?I:Math.min(m.end,at);!T.extend&&I>Tt&&(i=Tt,Tt=I,I=i);var b=Mr(f,I),y=Mr(f,Tt);if(b&&y&&(T.rangeCount!==1||T.anchorNode!==b.node||T.anchorOffset!==b.offset||T.focusNode!==y.node||T.focusOffset!==y.offset)){var S=U.createRange();S.setStart(b.node,b.offset),T.removeAllRanges(),I>Tt?(T.addRange(S),T.extend(y.node,y.offset)):(S.setEnd(y.node,y.offset),T.addRange(S))}}}}for(U=[],T=f;T=T.parentNode;)T.nodeType===1&&U.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var N=U[f];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Jn=!!nf,cf=nf=null}finally{bt=u,L.p=a,M.T=l}}t.current=e,Kt=2}}function Qo(){if(Kt===2){Kt=0;var t=yl,e=Sa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=L.p;L.p=2;var u=bt;bt|=4;try{So(t,e.alternate,e)}finally{bt=u,L.p=a,M.T=l}}Kt=3}}function Zo(){if(Kt===4||Kt===3){Kt=0,oh();var t=yl,e=Sa,l=Ea,a=No;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Kt=5:(Kt=0,Sa=yl=null,Vo(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(vl=null),di(l),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=M.T,u=L.p,L.p=2,M.T=null;try{for(var n=t.onRecoverableError,i=0;i<a.length;i++){var f=a[i];n(f.value,{componentStack:f.stack})}}finally{M.T=e,L.p=u}}(Ea&3)!==0&&jn(),_e(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===Vc?vu++:(vu=0,Vc=t):vu=0,yu(0)}}function Vo(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,$a(e)))}function jn(t){return Xo(),Qo(),Zo(),Ko()}function Ko(){if(Kt!==5)return!1;var t=yl,e=Qc;Qc=0;var l=di(Ea),a=M.T,u=L.p;try{L.p=32>l?32:l,M.T=null,l=Zc,Zc=null;var n=yl,i=Ea;if(Kt=0,Sa=yl=null,Ea=0,(bt&6)!==0)throw Error(r(331));var f=bt;if(bt|=4,Do(n.current),zo(n,n.current,i,l),bt=f,yu(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(Na,n)}catch{}return!0}finally{L.p=u,M.T=a,Vo(t,e)}}function Jo(t,e,l){e=ve(l,e),e=Tc(t.stateNode,e,2),t=il(t,e,2),t!==null&&(Ca(t,2),_e(t))}function Rt(t,e,l){if(t.tag===3)Jo(t,t,l);else for(;e!==null;){if(e.tag===3){Jo(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vl===null||!vl.has(a))){t=ve(l,t),l=Ws(2),a=il(e,l,2),a!==null&&(Fs(l,a,e,t),Ca(a,2),_e(a));break}}e=e.return}}function $c(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Ym;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Lc=!0,u.add(l),t=Qm.bind(null,t,e,l),e.then(t,t))}function Qm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,zt===t&&(mt&l)===l&&(Ut===4||Ut===3&&(mt&62914560)===mt&&300>Re()-Xc?(bt&2)===0&&xa(t,0):wc|=l,ba===mt&&(ba=0)),_e(t)}function ko(t,e){e===0&&(e=Qf()),t=ua(t,e),t!==null&&(Ca(t,e),_e(t))}function Zm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),ko(t,l)}function Vm(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),ko(t,l)}function Km(t,e){return fi(t,e)}var Bn=null,Aa=null,Wc=!1,qn=!1,Fc=!1,Xl=0;function _e(t){t!==Aa&&t.next===null&&(Aa===null?Bn=Aa=t:Aa=Aa.next=t),qn=!0,Wc||(Wc=!0,km())}function yu(t,e){if(!Fc&&qn){Fc=!0;do for(var l=!1,a=Bn;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,f=a.pingedLanes;n=(1<<31-ne(42|t)+1)-1,n&=u&~(i&~f),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Po(a,n))}else n=mt,n=Xu(a,a===zt?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Ua(a,n)||(l=!0,Po(a,n));a=a.next}while(l);Fc=!1}}function Jm(){$o()}function $o(){qn=Wc=!1;var t=0;Xl!==0&&(l0()&&(t=Xl),Xl=0);for(var e=Re(),l=null,a=Bn;a!==null;){var u=a.next,n=Wo(a,e);n===0?(a.next=null,l===null?Bn=u:l.next=u,u===null&&(Aa=l)):(l=a,(t!==0||(n&3)!==0)&&(qn=!0)),a=u}yu(t)}function Wo(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-ne(n),f=1<<i,m=u[i];m===-1?((f&l)===0||(f&a)!==0)&&(u[i]=bh(f,e)):m<=e&&(t.expiredLanes|=f),n&=~f}if(e=zt,l=mt,l=Xu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(St===2||St===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ri(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ua(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ri(a),di(l)){case 2:case 8:l=wf;break;case 32:l=Lu;break;case 268435456:l=Gf;break;default:l=Lu}return a=Fo.bind(null,t),l=fi(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ri(a),t.callbackPriority=2,t.callbackNode=null,2}function Fo(t,e){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(jn()&&t.callbackNode!==l)return null;var a=mt;return a=Xu(t,t===zt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Co(t,a,e),Wo(t,Re()),t.callbackNode!=null&&t.callbackNode===l?Fo.bind(null,t):null)}function Po(t,e){if(jn())return null;Co(t,e,!0)}function km(){u0(function(){(bt&6)!==0?fi(Lf,Jm):$o()})}function Pc(){return Xl===0&&(Xl=Xf()),Xl}function Io(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ju(""+t)}function td(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function $m(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var n=Io((u[Pt]||null).action),i=a.submitter;i&&(e=(e=i[Pt]||null)?Io(e.formAction):i.getAttribute("formAction"),e!==null&&(n=e,i=null));var f=new Fu("action","action",null,a,u);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xl!==0){var m=i?td(u,i):new FormData(u);pc(l,{pending:!0,data:m,method:u.method,action:n},null,m)}}else typeof n=="function"&&(f.preventDefault(),m=i?td(u,i):new FormData(u),pc(l,{pending:!0,data:m,method:u.method,action:n},n,m))},currentTarget:u}]})}}for(var Ic=0;Ic<qi.length;Ic++){var tf=qi[Ic],Wm=tf.toLowerCase(),Fm=tf[0].toUpperCase()+tf.slice(1);xe(Wm,"on"+Fm)}xe(Ur,"onAnimationEnd"),xe(Cr,"onAnimationIteration"),xe(Hr,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(mm,"onTransitionRun"),xe(vm,"onTransitionStart"),xe(ym,"onTransitionCancel"),xe(jr,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zl("onBeforeInput",["compositionend","keypress","textInput","paste"]),zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gu));function ed(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var n=void 0;if(e)for(var i=a.length-1;0<=i;i--){var f=a[i],m=f.instance,E=f.currentTarget;if(f=f.listener,m!==n&&u.isPropagationStopped())break t;n=f,u.currentTarget=E;try{n(u)}catch(O){An(O)}u.currentTarget=null,n=m}else for(i=0;i<a.length;i++){if(f=a[i],m=f.instance,E=f.currentTarget,f=f.listener,m!==n&&u.isPropagationStopped())break t;n=f,u.currentTarget=E;try{n(u)}catch(O){An(O)}u.currentTarget=null,n=m}}}}function ot(t,e){var l=e[hi];l===void 0&&(l=e[hi]=new Set);var a=t+"__bubble";l.has(a)||(ld(e,t,2,!1),l.add(a))}function ef(t,e,l){var a=0;e&&(a|=4),ld(l,t,a,e)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function lf(t){if(!t[Yn]){t[Yn]=!0,kf.forEach(function(l){l!=="selectionchange"&&(Pm.has(l)||ef(l,!1,t),ef(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yn]||(e[Yn]=!0,ef("selectionchange",!1,e))}}function ld(t,e,l,a){switch(zd(e)){case 2:var u=R0;break;case 8:u=z0;break;default:u=gf}l=u.bind(null,e,l,t),u=void 0,!Ai||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function af(t,e,l,a,u){var n=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var f=a.stateNode.containerInfo;if(f===u)break;if(i===4)for(i=a.return;i!==null;){var m=i.tag;if((m===3||m===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;f!==null;){if(i=Vl(f),i===null)return;if(m=i.tag,m===5||m===6||m===26||m===27){a=n=i;continue t}f=f.parentNode}}a=a.return}fr(function(){var E=n,O=xi(l),U=[];t:{var x=Br.get(t);if(x!==void 0){var T=Fu,at=t;switch(t){case"keypress":if($u(l)===0)break t;case"keydown":case"keyup":T=Kh;break;case"focusin":at="focus",T=Oi;break;case"focusout":at="blur",T=Oi;break;case"beforeblur":case"afterblur":T=Oi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=or;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=$h;break;case Ur:case Cr:case Hr:T=qh;break;case jr:T=Fh;break;case"scroll":case"scrollend":T=Uh;break;case"wheel":T=Ih;break;case"copy":case"cut":case"paste":T=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=hr;break;case"toggle":case"beforetoggle":T=em}var I=(e&4)!==0,Tt=!I&&(t==="scroll"||t==="scrollend"),b=I?x!==null?x+"Capture":null:x;I=[];for(var y=E,S;y!==null;){var N=y;if(S=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||S===null||b===null||(N=Ba(y,b),N!=null&&I.push(pu(y,N,S))),Tt)break;y=y.return}0<I.length&&(x=new T(x,at,null,l,O),U.push({event:x,listeners:I}))}}if((e&7)===0){t:{if(x=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",x&&l!==Ei&&(at=l.relatedTarget||l.fromElement)&&(Vl(at)||at[Zl]))break t;if((T||x)&&(x=O.window===O?O:(x=O.ownerDocument)?x.defaultView||x.parentWindow:window,T?(at=l.relatedTarget||l.toElement,T=E,at=at?Vl(at):null,at!==null&&(Tt=g(at),I=at.tag,at!==Tt||I!==5&&I!==27&&I!==6)&&(at=null)):(T=null,at=E),T!==at)){if(I=or,N="onMouseLeave",b="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(I=hr,N="onPointerLeave",b="onPointerEnter",y="pointer"),Tt=T==null?x:ja(T),S=at==null?x:ja(at),x=new I(N,y+"leave",T,l,O),x.target=Tt,x.relatedTarget=S,N=null,Vl(O)===E&&(I=new I(b,y+"enter",at,l,O),I.target=S,I.relatedTarget=Tt,N=I),Tt=N,T&&at)e:{for(I=T,b=at,y=0,S=I;S;S=Ra(S))y++;for(S=0,N=b;N;N=Ra(N))S++;for(;0<y-S;)I=Ra(I),y--;for(;0<S-y;)b=Ra(b),S--;for(;y--;){if(I===b||b!==null&&I===b.alternate)break e;I=Ra(I),b=Ra(b)}I=null}else I=null;T!==null&&ad(U,x,T,I,!1),at!==null&&Tt!==null&&ad(U,Tt,at,I,!0)}}t:{if(x=E?ja(E):window,T=x.nodeName&&x.nodeName.toLowerCase(),T==="select"||T==="input"&&x.type==="file")var Z=Er;else if(br(x))if(xr)Z=om;else{Z=rm;var ft=fm}else T=x.nodeName,!T||T.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?E&&Si(E.elementType)&&(Z=Er):Z=sm;if(Z&&(Z=Z(t,E))){Sr(U,Z,l,O);break t}ft&&ft(t,x,E),t==="focusout"&&E&&x.type==="number"&&E.memoizedProps.value!=null&&bi(x,"number",x.value)}switch(ft=E?ja(E):window,t){case"focusin":(br(ft)||ft.contentEditable==="true")&&(ea=ft,Hi=E,Za=null);break;case"focusout":Za=Hi=ea=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,_r(U,l,O);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":_r(U,l,O)}var k;if(_i)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else ta?gr(t,l)&&(tt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(mr&&l.locale!=="ko"&&(ta||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ta&&(k=rr()):(ll=O,Ri="value"in ll?ll.value:ll.textContent,ta=!0)),ft=Ln(E,tt),0<ft.length&&(tt=new dr(tt,t,null,l,O),U.push({event:tt,listeners:ft}),k?tt.data=k:(k=pr(l),k!==null&&(tt.data=k)))),(k=am?um(t,l):nm(t,l))&&(tt=Ln(E,"onBeforeInput"),0<tt.length&&(ft=new dr("onBeforeInput","beforeinput",null,l,O),U.push({event:ft,listeners:tt}),ft.data=k)),$m(U,t,E,l,O)}ed(U,e)})}function pu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ln(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Ba(t,l),u!=null&&a.unshift(pu(t,u,n)),u=Ba(t,e),u!=null&&a.push(pu(t,u,n))),t.tag===3)return a;t=t.return}return[]}function Ra(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ad(t,e,l,a,u){for(var n=e._reactName,i=[];l!==null&&l!==a;){var f=l,m=f.alternate,E=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||E===null||(m=E,u?(E=Ba(l,n),E!=null&&i.unshift(pu(l,E,m))):u||(E=Ba(l,n),E!=null&&i.push(pu(l,E,m)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var Im=/\r\n?/g,t0=/\u0000|\uFFFD/g;function ud(t){return(typeof t=="string"?t:""+t).replace(Im,`
`).replace(t0,"")}function nd(t,e){return e=ud(e),ud(t)===e}function wn(){}function xt(t,e,l,a,u,n){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Fl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Fl(t,""+a);break;case"className":Zu(t,"class",a);break;case"tabIndex":Zu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Zu(t,l,a);break;case"style":ir(t,a,n);break;case"data":if(e!=="object"){Zu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ju(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(e!=="input"&&xt(t,e,"name",u.name,u,null),xt(t,e,"formEncType",u.formEncType,u,null),xt(t,e,"formMethod",u.formMethod,u,null),xt(t,e,"formTarget",u.formTarget,u,null)):(xt(t,e,"encType",u.encType,u,null),xt(t,e,"method",u.method,u,null),xt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ju(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=wn);break;case"onScroll":a!=null&&ot("scroll",t);break;case"onScrollEnd":a!=null&&ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Ju(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":ot("beforetoggle",t),ot("toggle",t),Qu(t,"popover",a);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=_h.get(l)||l,Qu(t,l,a))}}function uf(t,e,l,a,u,n){switch(l){case"style":ir(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Fl(t,a):(typeof a=="number"||typeof a=="bigint")&&Fl(t,""+a);break;case"onScroll":a!=null&&ot("scroll",t);break;case"onScrollEnd":a!=null&&ot("scrollend",t);break;case"onClick":a!=null&&(t.onclick=wn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$f.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),n=t[Pt]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(e,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Qu(t,l,a)}}}function Jt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var a=!1,u=!1,n;for(n in l)if(l.hasOwnProperty(n)){var i=l[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:xt(t,e,n,i,l,null)}}u&&xt(t,e,"srcSet",l.srcSet,l,null),a&&xt(t,e,"src",l.src,l,null);return;case"input":ot("invalid",t);var f=n=i=u=null,m=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":u=O;break;case"type":i=O;break;case"checked":m=O;break;case"defaultChecked":E=O;break;case"value":n=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:xt(t,e,a,O,l,null)}}lr(t,n,f,m,E,i,u,!1),Vu(t);return;case"select":ot("invalid",t),a=i=n=null;for(u in l)if(l.hasOwnProperty(u)&&(f=l[u],f!=null))switch(u){case"value":n=f;break;case"defaultValue":i=f;break;case"multiple":a=f;default:xt(t,e,u,f,l,null)}e=n,l=i,t.multiple=!!a,e!=null?Wl(t,!!a,e,!1):l!=null&&Wl(t,!!a,l,!0);return;case"textarea":ot("invalid",t),n=u=a=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":a=f;break;case"defaultValue":u=f;break;case"children":n=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:xt(t,e,i,f,l,null)}ur(t,a,u,n),Vu(t);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xt(t,e,m,a,l,null)}return;case"dialog":ot("beforetoggle",t),ot("toggle",t),ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(a=0;a<gu.length;a++)ot(gu[a],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:xt(t,e,E,a,l,null)}return;default:if(Si(e)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&uf(t,e,O,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&xt(t,e,f,a,l,null))}function e0(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,f=null,m=null,E=null,O=null;for(T in l){var U=l[T];if(l.hasOwnProperty(T)&&U!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":m=U;default:a.hasOwnProperty(T)||xt(t,e,T,null,a,U)}}for(var x in a){var T=a[x];if(U=l[x],a.hasOwnProperty(x)&&(T!=null||U!=null))switch(x){case"type":n=T;break;case"name":u=T;break;case"checked":E=T;break;case"defaultChecked":O=T;break;case"value":i=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==U&&xt(t,e,x,T,a,U)}}pi(t,i,f,m,E,O,n,u);return;case"select":T=i=f=x=null;for(n in l)if(m=l[n],l.hasOwnProperty(n)&&m!=null)switch(n){case"value":break;case"multiple":T=m;default:a.hasOwnProperty(n)||xt(t,e,n,null,a,m)}for(u in a)if(n=a[u],m=l[u],a.hasOwnProperty(u)&&(n!=null||m!=null))switch(u){case"value":x=n;break;case"defaultValue":f=n;break;case"multiple":i=n;default:n!==m&&xt(t,e,u,n,a,m)}e=f,l=i,a=T,x!=null?Wl(t,!!l,x,!1):!!a!=!!l&&(e!=null?Wl(t,!!l,e,!0):Wl(t,!!l,l?[]:"",!1));return;case"textarea":T=x=null;for(f in l)if(u=l[f],l.hasOwnProperty(f)&&u!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:xt(t,e,f,null,a,u)}for(i in a)if(u=a[i],n=l[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":x=u;break;case"defaultValue":T=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==n&&xt(t,e,i,u,a,n)}ar(t,x,T);return;case"option":for(var at in l)if(x=l[at],l.hasOwnProperty(at)&&x!=null&&!a.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:xt(t,e,at,null,a,x)}for(m in a)if(x=a[m],T=l[m],a.hasOwnProperty(m)&&x!==T&&(x!=null||T!=null))switch(m){case"selected":t.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:xt(t,e,m,x,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in l)x=l[I],l.hasOwnProperty(I)&&x!=null&&!a.hasOwnProperty(I)&&xt(t,e,I,null,a,x);for(E in a)if(x=a[E],T=l[E],a.hasOwnProperty(E)&&x!==T&&(x!=null||T!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,e));break;default:xt(t,e,E,x,a,T)}return;default:if(Si(e)){for(var Tt in l)x=l[Tt],l.hasOwnProperty(Tt)&&x!==void 0&&!a.hasOwnProperty(Tt)&&uf(t,e,Tt,void 0,a,x);for(O in a)x=a[O],T=l[O],!a.hasOwnProperty(O)||x===T||x===void 0&&T===void 0||uf(t,e,O,x,a,T);return}}for(var b in l)x=l[b],l.hasOwnProperty(b)&&x!=null&&!a.hasOwnProperty(b)&&xt(t,e,b,null,a,x);for(U in a)x=a[U],T=l[U],!a.hasOwnProperty(U)||x===T||x==null&&T==null||xt(t,e,U,x,a,T)}var nf=null,cf=null;function Gn(t){return t.nodeType===9?t:t.ownerDocument}function id(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rf=null;function l0(){var t=window.event;return t&&t.type==="popstate"?t===rf?!1:(rf=t,!0):(rf=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(t){return rd.resolve(null).then(t).catch(n0)}:fd;function n0(t){setTimeout(function(){throw t})}function pl(t){return t==="head"}function sd(t,e){var l=e,a=0,u=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(0<a&&8>a){l=a;var i=t.ownerDocument;if(l&1&&bu(i.documentElement),l&2&&bu(i.body),l&4)for(l=i.head,bu(l),i=l.firstChild;i;){var f=i.nextSibling,m=i.nodeName;i[Ha]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=f}}if(u===0){t.removeChild(n),Mu(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=n}while(l);Mu(e)}function sf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":sf(l),mi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function i0(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ha])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Ae(t.nextSibling),t===null)break}return null}function c0(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ae(t.nextSibling),t===null))return null;return t}function of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function f0(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ae(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var df=null;function od(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function dd(t,e,l){switch(e=Gn(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);mi(t)}var Ee=new Map,hd=new Set;function Xn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $e=L.d;L.d={f:r0,r:s0,D:o0,C:d0,L:h0,m:m0,X:y0,S:v0,M:g0};function r0(){var t=$e.f(),e=Cn();return t||e}function s0(t){var e=Kl(t);e!==null&&e.tag===5&&e.type==="form"?Us(e):$e.r(t)}var za=typeof document>"u"?null:document;function md(t,e,l){var a=za;if(a&&typeof e=="string"&&e){var u=me(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),hd.has(u)||(hd.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),Jt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function o0(t){$e.D(t),md("dns-prefetch",t,null)}function d0(t,e){$e.C(t,e),md("preconnect",t,e)}function h0(t,e,l){$e.L(t,e,l);var a=za;if(a&&t&&e){var u='link[rel="preload"][as="'+me(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+me(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+me(l.imageSizes)+'"]')):u+='[href="'+me(t)+'"]';var n=u;switch(e){case"style":n=Ma(t);break;case"script":n=Oa(t)}Ee.has(n)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ee.set(n,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(Su(n))||e==="script"&&a.querySelector(Eu(n))||(e=a.createElement("link"),Jt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function m0(t,e){$e.m(t,e);var l=za;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+me(a)+'"][href="'+me(t)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Oa(t)}if(!Ee.has(n)&&(t=R({rel:"modulepreload",href:t},e),Ee.set(n,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Eu(n)))return}a=l.createElement("link"),Jt(a,"link",t),Gt(a),l.head.appendChild(a)}}}function v0(t,e,l){$e.S(t,e,l);var a=za;if(a&&t){var u=Jl(a).hoistableStyles,n=Ma(t);e=e||"default";var i=u.get(n);if(!i){var f={loading:0,preload:null};if(i=a.querySelector(Su(n)))f.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ee.get(n))&&hf(t,l);var m=i=a.createElement("link");Gt(m),Jt(m,"link",t),m._p=new Promise(function(E,O){m.onload=E,m.onerror=O}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Qn(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:f},u.set(n,i)}}}function y0(t,e){$e.X(t,e);var l=za;if(l&&t){var a=Jl(l).hoistableScripts,u=Oa(t),n=a.get(u);n||(n=l.querySelector(Eu(u)),n||(t=R({src:t,async:!0},e),(e=Ee.get(u))&&mf(t,e),n=l.createElement("script"),Gt(n),Jt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function g0(t,e){$e.M(t,e);var l=za;if(l&&t){var a=Jl(l).hoistableScripts,u=Oa(t),n=a.get(u);n||(n=l.querySelector(Eu(u)),n||(t=R({src:t,async:!0,type:"module"},e),(e=Ee.get(u))&&mf(t,e),n=l.createElement("script"),Gt(n),Jt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function vd(t,e,l,a){var u=(u=nt.current)?Xn(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ma(l.href),l=Jl(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ma(l.href);var n=Jl(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(Su(t)))&&!n._p&&(i.instance=n,i.state.loading=5),Ee.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ee.set(t,l),n||p0(u,t,l,i.state))),e&&a===null)throw Error(r(528,""));return i}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Oa(l),l=Jl(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ma(t){return'href="'+me(t)+'"'}function Su(t){return'link[rel="stylesheet"]['+t+"]"}function yd(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function p0(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Jt(e,"link",l),Gt(e),t.head.appendChild(e))}function Oa(t){return'[src="'+me(t)+'"]'}function Eu(t){return"script[async]"+t}function gd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+me(l.href)+'"]');if(a)return e.instance=a,Gt(a),a;var u=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Gt(a),Jt(a,"style",u),Qn(a,l.precedence,t),e.instance=a;case"stylesheet":u=Ma(l.href);var n=t.querySelector(Su(u));if(n)return e.state.loading|=4,e.instance=n,Gt(n),n;a=yd(l),(u=Ee.get(u))&&hf(a,u),n=(t.ownerDocument||t).createElement("link"),Gt(n);var i=n;return i._p=new Promise(function(f,m){i.onload=f,i.onerror=m}),Jt(n,"link",a),e.state.loading|=4,Qn(n,l.precedence,t),e.instance=n;case"script":return n=Oa(l.src),(u=t.querySelector(Eu(n)))?(e.instance=u,Gt(u),u):(a=l,(u=Ee.get(n))&&(a=R({},l),mf(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),Gt(u),Jt(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Qn(a,l.precedence,t));return e.instance}function Qn(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var f=a[i];if(f.dataset.precedence===e)n=f;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function hf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function mf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zn=null;function pd(t,e,l){if(Zn===null){var a=new Map,u=Zn=new Map;u.set(l,a)}else u=Zn,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var n=l[u];if(!(n[Ha]||n[kt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(e)||"";i=t+i;var f=a.get(i);f?f.push(n):a.set(i,[n])}}return a}function bd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function b0(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Sd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xu=null;function S0(){}function E0(t,e,l){if(xu===null)throw Error(r(475));var a=xu;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=Ma(l.href),n=t.querySelector(Su(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Vn.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=n,Gt(n);return}n=t.ownerDocument||t,l=yd(l),(u=Ee.get(u))&&hf(l,u),n=n.createElement("link"),Gt(n);var i=n;i._p=new Promise(function(f,m){i.onload=f,i.onerror=m}),Jt(n,"link",l),e.instance=n}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Vn.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function x0(){if(xu===null)throw Error(r(475));var t=xu;return t.stylesheets&&t.count===0&&vf(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&vf(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Vn(){if(this.count--,this.count===0){if(this.stylesheets)vf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kn=null;function vf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kn=new Map,e.forEach(T0,t),Kn=null,Vn.call(t))}function T0(t,e){if(!(e.state.loading&4)){var l=Kn.get(t);if(l)var a=l.get(null);else{l=new Map,Kn.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}u=e.instance,i=u.getAttribute("data-precedence"),n=l.get(i)||a,n===a&&l.set(null,u),l.set(i,u),this.count++,a=Vn.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Tu={$$typeof:w,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function A0(t,e,l,a,u,n,i,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.hiddenUpdates=si(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Ed(t,e,l,a,u,n,i,f,m,E,O,U){return t=new A0(t,e,l,i,f,m,E,U),e=1,n===!0&&(e|=24),n=ce(3,null,null,e),t.current=n,n.stateNode=t,e=$i(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:e},Ii(n),t}function xd(t){return t?(t=na,t):na}function Td(t,e,l,a,u,n){u=xd(u),a.context===null?a.context=u:a.pendingContext=u,a=nl(e),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=il(t,a,e),l!==null&&(de(l,t,e),Ia(l,t,e))}function Ad(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function yf(t,e){Ad(t,e),(t=t.alternate)&&Ad(t,e)}function Rd(t){if(t.tag===13){var e=ua(t,67108864);e!==null&&de(e,t,67108864),yf(t,67108864)}}var Jn=!0;function R0(t,e,l,a){var u=M.T;M.T=null;var n=L.p;try{L.p=2,gf(t,e,l,a)}finally{L.p=n,M.T=u}}function z0(t,e,l,a){var u=M.T;M.T=null;var n=L.p;try{L.p=8,gf(t,e,l,a)}finally{L.p=n,M.T=u}}function gf(t,e,l,a){if(Jn){var u=pf(a);if(u===null)af(t,e,a,kn,l),Md(t,a);else if(O0(u,t,e,l,a))a.stopPropagation();else if(Md(t,a),e&4&&-1<M0.indexOf(t)){for(;u!==null;){var n=Kl(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Rl(n.pendingLanes);if(i!==0){var f=n;for(f.pendingLanes|=2,f.entangledLanes|=2;i;){var m=1<<31-ne(i);f.entanglements[1]|=m,i&=~m}_e(n),(bt&6)===0&&(Nn=Re()+500,yu(0))}}break;case 13:f=ua(n,2),f!==null&&de(f,n,2),Cn(),yf(n,2)}if(n=pf(a),n===null&&af(t,e,a,kn,l),n===u)break;u=n}u!==null&&a.stopPropagation()}else af(t,e,a,null,l)}}function pf(t){return t=xi(t),bf(t)}var kn=null;function bf(t){if(kn=null,t=Vl(t),t!==null){var e=g(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=A(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return kn=t,null}function zd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dh()){case Lf:return 2;case wf:return 8;case Lu:case hh:return 32;case Gf:return 268435456;default:return 32}default:return 32}}var Sf=!1,bl=null,Sl=null,El=null,Au=new Map,Ru=new Map,xl=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Md(t,e){switch(t){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":El=null;break;case"pointerover":case"pointerout":Au.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ru.delete(e.pointerId)}}function zu(t,e,l,a,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},e!==null&&(e=Kl(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function O0(t,e,l,a,u){switch(e){case"focusin":return bl=zu(bl,t,e,l,a,u),!0;case"dragenter":return Sl=zu(Sl,t,e,l,a,u),!0;case"mouseover":return El=zu(El,t,e,l,a,u),!0;case"pointerover":var n=u.pointerId;return Au.set(n,zu(Au.get(n)||null,t,e,l,a,u)),!0;case"gotpointercapture":return n=u.pointerId,Ru.set(n,zu(Ru.get(n)||null,t,e,l,a,u)),!0}return!1}function Od(t){var e=Vl(t.target);if(e!==null){var l=g(e);if(l!==null){if(e=l.tag,e===13){if(e=A(l),e!==null){t.blockedOn=e,Eh(t.priority,function(){if(l.tag===13){var a=oe();a=oi(a);var u=ua(l,a);u!==null&&de(u,l,a),yf(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $n(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=pf(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Ei=a,l.target.dispatchEvent(a),Ei=null}else return e=Kl(l),e!==null&&Rd(e),t.blockedOn=l,!1;e.shift()}return!0}function Dd(t,e,l){$n(t)&&l.delete(e)}function D0(){Sf=!1,bl!==null&&$n(bl)&&(bl=null),Sl!==null&&$n(Sl)&&(Sl=null),El!==null&&$n(El)&&(El=null),Au.forEach(Dd),Ru.forEach(Dd)}function Wn(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,D0)))}var Fn=null;function _d(t){Fn!==t&&(Fn=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Fn===t&&(Fn=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(bf(a||l)===null)continue;break}var n=Kl(l);n!==null&&(t.splice(e,3),e-=3,pc(n,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function Mu(t){function e(m){return Wn(m,t)}bl!==null&&Wn(bl,t),Sl!==null&&Wn(Sl,t),El!==null&&Wn(El,t),Au.forEach(e),Ru.forEach(e);for(var l=0;l<xl.length;l++){var a=xl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)Od(l),l.blockedOn===null&&xl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],n=l[a+1],i=u[Pt]||null;if(typeof n=="function")i||_d(l);else if(i){var f=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Pt]||null)f=i.formAction;else if(bf(u)!==null)continue}else f=i.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),_d(l)}}}function Ef(t){this._internalRoot=t}Pn.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=oe();Td(l,a,t,e,null,null)},Pn.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Td(t.current,2,null,t,null,null),Cn(),e[Zl]=null}};function Pn(t){this._internalRoot=t}Pn.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<xl.length&&e!==0&&e<xl[l].priority;l++);xl.splice(l,0,t),l===0&&Od(t)}};var Nd=s.version;if(Nd!=="19.1.0")throw Error(r(527,Nd,"19.1.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var _0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var In=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!In.isDisabled&&In.supportsFiber)try{Na=In.inject(_0),ue=In}catch{}}return Du.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=Ks,n=Js,i=ks,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Ed(t,1,!1,null,null,l,a,u,n,i,f,null),t[Zl]=e.current,lf(t),new Ef(e)},Du.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",n=Ks,i=Js,f=ks,m=null,E=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(E=l.formState)),e=Ed(t,1,!0,e,l??null,a,u,n,i,f,m,E),e.context=xd(null),l=e.current,a=oe(),a=oi(a),u=nl(a),u.callback=null,il(l,u,a),l=a,e.current.lanes=l,Ca(e,l),_e(e),t[Zl]=e.current,lf(t),new Pn(e)},Du.version="19.1.0",Du}var Gd;function w0(){if(Gd)return Af.exports;Gd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(s){console.error(s)}}return c(),Af.exports=L0(),Af.exports}var G0=w0();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xd="popstate";function X0(c={}){function s(r,d){let{pathname:g,search:A,hash:_}=r.location;return _f("",{pathname:g,search:A,hash:_},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(r,d){return typeof d=="string"?d:Hu(d)}return Z0(s,o,null,c)}function _t(c,s){if(c===!1||c===null||typeof c>"u")throw new Error(s)}function Ue(c,s){if(!c){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Q0(){return Math.random().toString(36).substring(2,10)}function Qd(c,s){return{usr:c.state,key:c.key,idx:s}}function _f(c,s,o=null,r){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof s=="string"?Da(s):s,state:o,key:s&&s.key||r||Q0()}}function Hu({pathname:c="/",search:s="",hash:o=""}){return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),o&&o!=="#"&&(c+=o.charAt(0)==="#"?o:"#"+o),c}function Da(c){let s={};if(c){let o=c.indexOf("#");o>=0&&(s.hash=c.substring(o),c=c.substring(0,o));let r=c.indexOf("?");r>=0&&(s.search=c.substring(r),c=c.substring(0,r)),c&&(s.pathname=c)}return s}function Z0(c,s,o,r={}){let{window:d=document.defaultView,v5Compat:g=!1}=r,A=d.history,_="POP",p=null,h=R();h==null&&(h=0,A.replaceState({...A.state,idx:h},""));function R(){return(A.state||{idx:null}).idx}function C(){_="POP";let Q=R(),q=Q==null?null:Q-h;h=Q,p&&p({action:_,location:J.location,delta:q})}function B(Q,q){_="PUSH";let W=_f(J.location,Q,q);h=R()+1;let w=Qd(W,h),et=J.createHref(W);try{A.pushState(w,"",et)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;d.location.assign(et)}g&&p&&p({action:_,location:J.location,delta:1})}function F(Q,q){_="REPLACE";let W=_f(J.location,Q,q);h=R();let w=Qd(W,h),et=J.createHref(W);A.replaceState(w,"",et),g&&p&&p({action:_,location:J.location,delta:0})}function K(Q){return V0(Q)}let J={get action(){return _},get location(){return c(d,A)},listen(Q){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(Xd,C),p=Q,()=>{d.removeEventListener(Xd,C),p=null}},createHref(Q){return s(d,Q)},createURL:K,encodeLocation(Q){let q=K(Q);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:B,replace:F,go(Q){return A.go(Q)}};return J}function V0(c,s=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),_t(o,"No window.location.(origin|href) available to create URL");let r=typeof c=="string"?c:Hu(c);return r=r.replace(/ $/,"%20"),!s&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function Jd(c,s,o="/"){return K0(c,s,o,!1)}function K0(c,s,o,r){let d=typeof s=="string"?Da(s):s,g=Pe(d.pathname||"/",o);if(g==null)return null;let A=kd(c);J0(A);let _=null;for(let p=0;_==null&&p<A.length;++p){let h=uv(g);_=lv(A[p],h,r)}return _}function kd(c,s=[],o=[],r=""){let d=(g,A,_)=>{let p={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:A,route:g};p.relativePath.startsWith("/")&&(_t(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let h=Fe([r,p.relativePath]),R=o.concat(p);g.children&&g.children.length>0&&(_t(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),kd(g.children,s,R,h)),!(g.path==null&&!g.index)&&s.push({path:h,score:tv(h,g.index),routesMeta:R})};return c.forEach((g,A)=>{if(g.path===""||!g.path?.includes("?"))d(g,A);else for(let _ of $d(g.path))d(g,A,_)}),s}function $d(c){let s=c.split("/");if(s.length===0)return[];let[o,...r]=s,d=o.endsWith("?"),g=o.replace(/\?$/,"");if(r.length===0)return d?[g,""]:[g];let A=$d(r.join("/")),_=[];return _.push(...A.map(p=>p===""?g:[g,p].join("/"))),d&&_.push(...A),_.map(p=>c.startsWith("/")&&p===""?"/":p)}function J0(c){c.sort((s,o)=>s.score!==o.score?o.score-s.score:ev(s.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var k0=/^:[\w-]+$/,$0=3,W0=2,F0=1,P0=10,I0=-2,Zd=c=>c==="*";function tv(c,s){let o=c.split("/"),r=o.length;return o.some(Zd)&&(r+=I0),s&&(r+=W0),o.filter(d=>!Zd(d)).reduce((d,g)=>d+(k0.test(g)?$0:g===""?F0:P0),r)}function ev(c,s){return c.length===s.length&&c.slice(0,-1).every((r,d)=>r===s[d])?c[c.length-1]-s[s.length-1]:0}function lv(c,s,o=!1){let{routesMeta:r}=c,d={},g="/",A=[];for(let _=0;_<r.length;++_){let p=r[_],h=_===r.length-1,R=g==="/"?s:s.slice(g.length)||"/",C=ai({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},R),B=p.route;if(!C&&h&&o&&!r[r.length-1].route.index&&(C=ai({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},R)),!C)return null;Object.assign(d,C.params),A.push({params:d,pathname:Fe([g,C.pathname]),pathnameBase:fv(Fe([g,C.pathnameBase])),route:B}),C.pathnameBase!=="/"&&(g=Fe([g,C.pathnameBase]))}return A}function ai(c,s){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[o,r]=av(c.path,c.caseSensitive,c.end),d=s.match(o);if(!d)return null;let g=d[0],A=g.replace(/(.)\/+$/,"$1"),_=d.slice(1);return{params:r.reduce((h,{paramName:R,isOptional:C},B)=>{if(R==="*"){let K=_[B]||"";A=g.slice(0,g.length-K.length).replace(/(.)\/+$/,"$1")}const F=_[B];return C&&!F?h[R]=void 0:h[R]=(F||"").replace(/%2F/g,"/"),h},{}),pathname:g,pathnameBase:A,pattern:c}}function av(c,s=!1,o=!0){Ue(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let r=[],d="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(A,_,p)=>(r.push({paramName:_,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return c.endsWith("*")?(r.push({paramName:"*"}),d+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":c!==""&&c!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),r]}function uv(c){try{return c.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Ue(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),c}}function Pe(c,s){if(s==="/")return c;if(!c.toLowerCase().startsWith(s.toLowerCase()))return null;let o=s.endsWith("/")?s.length-1:s.length,r=c.charAt(o);return r&&r!=="/"?null:c.slice(o)||"/"}function nv(c,s="/"){let{pathname:o,search:r="",hash:d=""}=typeof c=="string"?Da(c):c;return{pathname:o?o.startsWith("/")?o:iv(o,s):s,search:rv(r),hash:sv(d)}}function iv(c,s){let o=s.replace(/\/+$/,"").split("/");return c.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Of(c,s,o,r){return`Cannot include a '${c}' character in a manually specified \`to.${s}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cv(c){return c.filter((s,o)=>o===0||s.route.path&&s.route.path.length>0)}function Wd(c){let s=cv(c);return s.map((o,r)=>r===s.length-1?o.pathname:o.pathnameBase)}function Fd(c,s,o,r=!1){let d;typeof c=="string"?d=Da(c):(d={...c},_t(!d.pathname||!d.pathname.includes("?"),Of("?","pathname","search",d)),_t(!d.pathname||!d.pathname.includes("#"),Of("#","pathname","hash",d)),_t(!d.search||!d.search.includes("#"),Of("#","search","hash",d)));let g=c===""||d.pathname==="",A=g?"/":d.pathname,_;if(A==null)_=o;else{let C=s.length-1;if(!r&&A.startsWith("..")){let B=A.split("/");for(;B[0]==="..";)B.shift(),C-=1;d.pathname=B.join("/")}_=C>=0?s[C]:"/"}let p=nv(d,_),h=A&&A!=="/"&&A.endsWith("/"),R=(g||A===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(h||R)&&(p.pathname+="/"),p}var Fe=c=>c.join("/").replace(/\/\/+/g,"/"),fv=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),rv=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,sv=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function ov(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Pd=["POST","PUT","PATCH","DELETE"];new Set(Pd);var dv=["GET",...Pd];new Set(dv);var _a=z.createContext(null);_a.displayName="DataRouter";var ui=z.createContext(null);ui.displayName="DataRouterState";z.createContext(!1);var Id=z.createContext({isTransitioning:!1});Id.displayName="ViewTransition";var hv=z.createContext(new Map);hv.displayName="Fetchers";var mv=z.createContext(null);mv.displayName="Await";var Ce=z.createContext(null);Ce.displayName="Navigation";var ju=z.createContext(null);ju.displayName="Location";var He=z.createContext({outlet:null,matches:[],isDataRoute:!1});He.displayName="Route";var Cf=z.createContext(null);Cf.displayName="RouteError";function vv(c,{relative:s}={}){_t(Bu(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=z.useContext(Ce),{hash:d,pathname:g,search:A}=qu(c,{relative:s}),_=g;return o!=="/"&&(_=g==="/"?o:Fe([o,g])),r.createHref({pathname:_,search:A,hash:d})}function Bu(){return z.useContext(ju)!=null}function Al(){return _t(Bu(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(ju).location}var th="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function eh(c){z.useContext(Ce).static||z.useLayoutEffect(c)}function lh(){let{isDataRoute:c}=z.useContext(He);return c?Dv():yv()}function yv(){_t(Bu(),"useNavigate() may be used only in the context of a <Router> component.");let c=z.useContext(_a),{basename:s,navigator:o}=z.useContext(Ce),{matches:r}=z.useContext(He),{pathname:d}=Al(),g=JSON.stringify(Wd(r)),A=z.useRef(!1);return eh(()=>{A.current=!0}),z.useCallback((p,h={})=>{if(Ue(A.current,th),!A.current)return;if(typeof p=="number"){o.go(p);return}let R=Fd(p,JSON.parse(g),d,h.relative==="path");c==null&&s!=="/"&&(R.pathname=R.pathname==="/"?s:Fe([s,R.pathname])),(h.replace?o.replace:o.push)(R,h.state,h)},[s,o,g,d,c])}z.createContext(null);function gv(){let{matches:c}=z.useContext(He),s=c[c.length-1];return s?s.params:{}}function qu(c,{relative:s}={}){let{matches:o}=z.useContext(He),{pathname:r}=Al(),d=JSON.stringify(Wd(o));return z.useMemo(()=>Fd(c,JSON.parse(d),r,s==="path"),[c,d,r,s])}function pv(c,s){return ah(c,s)}function ah(c,s,o,r){_t(Bu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=z.useContext(Ce),{matches:g}=z.useContext(He),A=g[g.length-1],_=A?A.params:{},p=A?A.pathname:"/",h=A?A.pathnameBase:"/",R=A&&A.route;{let q=R&&R.path||"";uh(p,!R||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let C=Al(),B;if(s){let q=typeof s=="string"?Da(s):s;_t(h==="/"||q.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${q.pathname}" was given in the \`location\` prop.`),B=q}else B=C;let F=B.pathname||"/",K=F;if(h!=="/"){let q=h.replace(/^\//,"").split("/");K="/"+F.replace(/^\//,"").split("/").slice(q.length).join("/")}let J=Jd(c,{pathname:K});Ue(R||J!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Ue(J==null||J[J.length-1].route.element!==void 0||J[J.length-1].route.Component!==void 0||J[J.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Tv(J&&J.map(q=>Object.assign({},q,{params:Object.assign({},_,q.params),pathname:Fe([h,d.encodeLocation?d.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?h:Fe([h,d.encodeLocation?d.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),g,o,r);return s&&Q?z.createElement(ju.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},Q):Q}function bv(){let c=Ov(),s=ov(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),o=c instanceof Error?c.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},g={padding:"2px 4px",backgroundColor:r},A=null;return console.error("Error handled by React Router default ErrorBoundary:",c),A=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:g},"ErrorBoundary")," or"," ",z.createElement("code",{style:g},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},s),o?z.createElement("pre",{style:d},o):null,A)}var Sv=z.createElement(bv,null),Ev=class extends z.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?z.createElement(He.Provider,{value:this.props.routeContext},z.createElement(Cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xv({routeContext:c,match:s,children:o}){let r=z.useContext(_a);return r&&r.static&&r.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=s.route.id),z.createElement(He.Provider,{value:c},o)}function Tv(c,s=[],o=null,r=null){if(c==null){if(!o)return null;if(o.errors)c=o.matches;else if(s.length===0&&!o.initialized&&o.matches.length>0)c=o.matches;else return null}let d=c,g=o?.errors;if(g!=null){let p=d.findIndex(h=>h.route.id&&g?.[h.route.id]!==void 0);_t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,p+1))}let A=!1,_=-1;if(o)for(let p=0;p<d.length;p++){let h=d[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(_=p),h.route.id){let{loaderData:R,errors:C}=o,B=h.route.loader&&!R.hasOwnProperty(h.route.id)&&(!C||C[h.route.id]===void 0);if(h.route.lazy||B){A=!0,_>=0?d=d.slice(0,_+1):d=[d[0]];break}}}return d.reduceRight((p,h,R)=>{let C,B=!1,F=null,K=null;o&&(C=g&&h.route.id?g[h.route.id]:void 0,F=h.route.errorElement||Sv,A&&(_<0&&R===0?(uh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,K=null):_===R&&(B=!0,K=h.route.hydrateFallbackElement||null)));let J=s.concat(d.slice(0,R+1)),Q=()=>{let q;return C?q=F:B?q=K:h.route.Component?q=z.createElement(h.route.Component,null):h.route.element?q=h.route.element:q=p,z.createElement(xv,{match:h,routeContext:{outlet:p,matches:J,isDataRoute:o!=null},children:q})};return o&&(h.route.ErrorBoundary||h.route.errorElement||R===0)?z.createElement(Ev,{location:o.location,revalidation:o.revalidation,component:F,error:C,children:Q(),routeContext:{outlet:null,matches:J,isDataRoute:!0}}):Q()},null)}function Hf(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Av(c){let s=z.useContext(_a);return _t(s,Hf(c)),s}function Rv(c){let s=z.useContext(ui);return _t(s,Hf(c)),s}function zv(c){let s=z.useContext(He);return _t(s,Hf(c)),s}function jf(c){let s=zv(c),o=s.matches[s.matches.length-1];return _t(o.route.id,`${c} can only be used on routes that contain a unique "id"`),o.route.id}function Mv(){return jf("useRouteId")}function Ov(){let c=z.useContext(Cf),s=Rv("useRouteError"),o=jf("useRouteError");return c!==void 0?c:s.errors?.[o]}function Dv(){let{router:c}=Av("useNavigate"),s=jf("useNavigate"),o=z.useRef(!1);return eh(()=>{o.current=!0}),z.useCallback(async(d,g={})=>{Ue(o.current,th),o.current&&(typeof d=="number"?c.navigate(d):await c.navigate(d,{fromRouteId:s,...g}))},[c,s])}var Vd={};function uh(c,s,o){!s&&!Vd[c]&&(Vd[c]=!0,Ue(!1,o))}z.memo(_v);function _v({routes:c,future:s,state:o}){return ah(c,void 0,o,s)}function Cu(c){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Nv({basename:c="/",children:s=null,location:o,navigationType:r="POP",navigator:d,static:g=!1}){_t(!Bu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=c.replace(/^\/*/,"/"),_=z.useMemo(()=>({basename:A,navigator:d,static:g,future:{}}),[A,d,g]);typeof o=="string"&&(o=Da(o));let{pathname:p="/",search:h="",hash:R="",state:C=null,key:B="default"}=o,F=z.useMemo(()=>{let K=Pe(p,A);return K==null?null:{location:{pathname:K,search:h,hash:R,state:C,key:B},navigationType:r}},[A,p,h,R,C,B,r]);return Ue(F!=null,`<Router basename="${A}"> is not able to match the URL "${p}${h}${R}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:z.createElement(Ce.Provider,{value:_},z.createElement(ju.Provider,{children:s,value:F}))}function Uv({children:c,location:s}){return pv(Nf(c),s)}function Nf(c,s=[]){let o=[];return z.Children.forEach(c,(r,d)=>{if(!z.isValidElement(r))return;let g=[...s,d];if(r.type===z.Fragment){o.push.apply(o,Nf(r.props.children,g));return}_t(r.type===Cu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let A={id:r.props.id||g.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(A.children=Nf(r.props.children,g)),o.push(A)}),o}var ei="get",li="application/x-www-form-urlencoded";function ni(c){return c!=null&&typeof c.tagName=="string"}function Cv(c){return ni(c)&&c.tagName.toLowerCase()==="button"}function Hv(c){return ni(c)&&c.tagName.toLowerCase()==="form"}function jv(c){return ni(c)&&c.tagName.toLowerCase()==="input"}function Bv(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function qv(c,s){return c.button===0&&(!s||s==="_self")&&!Bv(c)}var ti=null;function Yv(){if(ti===null)try{new FormData(document.createElement("form"),0),ti=!1}catch{ti=!0}return ti}var Lv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Df(c){return c!=null&&!Lv.has(c)?(Ue(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`),null):c}function wv(c,s){let o,r,d,g,A;if(Hv(c)){let _=c.getAttribute("action");r=_?Pe(_,s):null,o=c.getAttribute("method")||ei,d=Df(c.getAttribute("enctype"))||li,g=new FormData(c)}else if(Cv(c)||jv(c)&&(c.type==="submit"||c.type==="image")){let _=c.form;if(_==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=c.getAttribute("formaction")||_.getAttribute("action");if(r=p?Pe(p,s):null,o=c.getAttribute("formmethod")||_.getAttribute("method")||ei,d=Df(c.getAttribute("formenctype"))||Df(_.getAttribute("enctype"))||li,g=new FormData(_,c),!Yv()){let{name:h,type:R,value:C}=c;if(R==="image"){let B=h?`${h}.`:"";g.append(`${B}x`,"0"),g.append(`${B}y`,"0")}else h&&g.append(h,C)}}else{if(ni(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=ei,r=null,d=li,A=c}return g&&d==="text/plain"&&(A=g,g=void 0),{action:r,method:o.toLowerCase(),encType:d,formData:g,body:A}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bf(c,s){if(c===!1||c===null||typeof c>"u")throw new Error(s)}function Gv(c,s,o){let r=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return r.pathname==="/"?r.pathname=`_root.${o}`:s&&Pe(r.pathname,s)==="/"?r.pathname=`${s.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function Xv(c,s){if(c.id in s)return s[c.id];try{let o=await import(c.module);return s[c.id]=o,o}catch(o){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qv(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function Zv(c,s,o){let r=await Promise.all(c.map(async d=>{let g=s.routes[d.route.id];if(g){let A=await Xv(g,o);return A.links?A.links():[]}return[]}));return kv(r.flat(1).filter(Qv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Kd(c,s,o,r,d,g){let A=(p,h)=>o[h]?p.route.id!==o[h].route.id:!0,_=(p,h)=>o[h].pathname!==p.pathname||o[h].route.path?.endsWith("*")&&o[h].params["*"]!==p.params["*"];return g==="assets"?s.filter((p,h)=>A(p,h)||_(p,h)):g==="data"?s.filter((p,h)=>{let R=r.routes[p.route.id];if(!R||!R.hasLoader)return!1;if(A(p,h)||_(p,h))return!0;if(p.route.shouldRevalidate){let C=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Vv(c,s,{includeHydrateFallback:o}={}){return Kv(c.map(r=>{let d=s.routes[r.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Kv(c){return[...new Set(c)]}function Jv(c){let s={},o=Object.keys(c).sort();for(let r of o)s[r]=c[r];return s}function kv(c,s){let o=new Set;return new Set(s),c.reduce((r,d)=>{let g=JSON.stringify(Jv(d));return o.has(g)||(o.add(g),r.push({key:g,link:d})),r},[])}function nh(){let c=z.useContext(_a);return Bf(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function $v(){let c=z.useContext(ui);return Bf(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var qf=z.createContext(void 0);qf.displayName="FrameworkContext";function ih(){let c=z.useContext(qf);return Bf(c,"You must render this element inside a <HydratedRouter> element"),c}function Wv(c,s){let o=z.useContext(qf),[r,d]=z.useState(!1),[g,A]=z.useState(!1),{onFocus:_,onBlur:p,onMouseEnter:h,onMouseLeave:R,onTouchStart:C}=s,B=z.useRef(null);z.useEffect(()=>{if(c==="render"&&A(!0),c==="viewport"){let J=q=>{q.forEach(W=>{A(W.isIntersecting)})},Q=new IntersectionObserver(J,{threshold:.5});return B.current&&Q.observe(B.current),()=>{Q.disconnect()}}},[c]),z.useEffect(()=>{if(r){let J=setTimeout(()=>{A(!0)},100);return()=>{clearTimeout(J)}}},[r]);let F=()=>{d(!0)},K=()=>{d(!1),A(!1)};return o?c!=="intent"?[g,B,{}]:[g,B,{onFocus:_u(_,F),onBlur:_u(p,K),onMouseEnter:_u(h,F),onMouseLeave:_u(R,K),onTouchStart:_u(C,F)}]:[!1,B,{}]}function _u(c,s){return o=>{c&&c(o),o.defaultPrevented||s(o)}}function Fv({page:c,...s}){let{router:o}=nh(),r=z.useMemo(()=>Jd(o.routes,c,o.basename),[o.routes,c,o.basename]);return r?z.createElement(Iv,{page:c,matches:r,...s}):null}function Pv(c){let{manifest:s,routeModules:o}=ih(),[r,d]=z.useState([]);return z.useEffect(()=>{let g=!1;return Zv(c,s,o).then(A=>{g||d(A)}),()=>{g=!0}},[c,s,o]),r}function Iv({page:c,matches:s,...o}){let r=Al(),{manifest:d,routeModules:g}=ih(),{basename:A}=nh(),{loaderData:_,matches:p}=$v(),h=z.useMemo(()=>Kd(c,s,p,d,r,"data"),[c,s,p,d,r]),R=z.useMemo(()=>Kd(c,s,p,d,r,"assets"),[c,s,p,d,r]),C=z.useMemo(()=>{if(c===r.pathname+r.search+r.hash)return[];let K=new Set,J=!1;if(s.forEach(q=>{let W=d.routes[q.route.id];!W||!W.hasLoader||(!h.some(w=>w.route.id===q.route.id)&&q.route.id in _&&g[q.route.id]?.shouldRevalidate||W.hasClientLoader?J=!0:K.add(q.route.id))}),K.size===0)return[];let Q=Gv(c,A,"data");return J&&K.size>0&&Q.searchParams.set("_routes",s.filter(q=>K.has(q.route.id)).map(q=>q.route.id).join(",")),[Q.pathname+Q.search]},[A,_,r,d,h,s,c,g]),B=z.useMemo(()=>Vv(R,d),[R,d]),F=Pv(R);return z.createElement(z.Fragment,null,C.map(K=>z.createElement("link",{key:K,rel:"prefetch",as:"fetch",href:K,...o})),B.map(K=>z.createElement("link",{key:K,rel:"modulepreload",href:K,...o})),F.map(({key:K,link:J})=>z.createElement("link",{key:K,...J})))}function ty(...c){return s=>{c.forEach(o=>{typeof o=="function"?o(s):o!=null&&(o.current=s)})}}var ch=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ch&&(window.__reactRouterVersion="7.7.1")}catch{}function ey({basename:c,children:s,window:o}){let r=z.useRef();r.current==null&&(r.current=X0({window:o,v5Compat:!0}));let d=r.current,[g,A]=z.useState({action:d.action,location:d.location}),_=z.useCallback(p=>{z.startTransition(()=>A(p))},[A]);return z.useLayoutEffect(()=>d.listen(_),[d,_]),z.createElement(Nv,{basename:c,children:s,location:g.location,navigationType:g.action,navigator:d})}var fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=z.forwardRef(function({onClick:s,discover:o="render",prefetch:r="none",relative:d,reloadDocument:g,replace:A,state:_,target:p,to:h,preventScrollReset:R,viewTransition:C,...B},F){let{basename:K}=z.useContext(Ce),J=typeof h=="string"&&fh.test(h),Q,q=!1;if(typeof h=="string"&&J&&(Q=h,ch))try{let ht=new URL(window.location.href),jt=h.startsWith("//")?new URL(ht.protocol+h):new URL(h),wt=Pe(jt.pathname,K);jt.origin===ht.origin&&wt!=null?h=wt+jt.search+jt.hash:q=!0}catch{Ue(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=vv(h,{relative:d}),[w,et,G]=Wv(r,B),ut=ny(h,{replace:A,state:_,target:p,preventScrollReset:R,relative:d,viewTransition:C});function dt(ht){s&&s(ht),ht.defaultPrevented||ut(ht)}let pt=z.createElement("a",{...B,...G,href:Q||W,onClick:q||g?s:dt,ref:ty(F,et),target:p,"data-discover":!J&&o==="render"?"true":void 0});return w&&!J?z.createElement(z.Fragment,null,pt,z.createElement(Fv,{page:W})):pt});Ne.displayName="Link";var ly=z.forwardRef(function({"aria-current":s="page",caseSensitive:o=!1,className:r="",end:d=!1,style:g,to:A,viewTransition:_,children:p,...h},R){let C=qu(A,{relative:h.relative}),B=Al(),F=z.useContext(ui),{navigator:K,basename:J}=z.useContext(Ce),Q=F!=null&&sy(C)&&_===!0,q=K.encodeLocation?K.encodeLocation(C).pathname:C.pathname,W=B.pathname,w=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;o||(W=W.toLowerCase(),w=w?w.toLowerCase():null,q=q.toLowerCase()),w&&J&&(w=Pe(w,J)||w);const et=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let G=W===q||!d&&W.startsWith(q)&&W.charAt(et)==="/",ut=w!=null&&(w===q||!d&&w.startsWith(q)&&w.charAt(q.length)==="/"),dt={isActive:G,isPending:ut,isTransitioning:Q},pt=G?s:void 0,ht;typeof r=="function"?ht=r(dt):ht=[r,G?"active":null,ut?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let jt=typeof g=="function"?g(dt):g;return z.createElement(Ne,{...h,"aria-current":pt,className:ht,ref:R,style:jt,to:A,viewTransition:_},typeof p=="function"?p(dt):p)});ly.displayName="NavLink";var ay=z.forwardRef(({discover:c="render",fetcherKey:s,navigate:o,reloadDocument:r,replace:d,state:g,method:A=ei,action:_,onSubmit:p,relative:h,preventScrollReset:R,viewTransition:C,...B},F)=>{let K=fy(),J=ry(_,{relative:h}),Q=A.toLowerCase()==="get"?"get":"post",q=typeof _=="string"&&fh.test(_),W=w=>{if(p&&p(w),w.defaultPrevented)return;w.preventDefault();let et=w.nativeEvent.submitter,G=et?.getAttribute("formmethod")||A;K(et||w.currentTarget,{fetcherKey:s,method:G,navigate:o,replace:d,state:g,relative:h,preventScrollReset:R,viewTransition:C})};return z.createElement("form",{ref:F,method:Q,action:J,onSubmit:r?p:W,...B,"data-discover":!q&&c==="render"?"true":void 0})});ay.displayName="Form";function uy(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rh(c){let s=z.useContext(_a);return _t(s,uy(c)),s}function ny(c,{target:s,replace:o,state:r,preventScrollReset:d,relative:g,viewTransition:A}={}){let _=lh(),p=Al(),h=qu(c,{relative:g});return z.useCallback(R=>{if(qv(R,s)){R.preventDefault();let C=o!==void 0?o:Hu(p)===Hu(h);_(c,{replace:C,state:r,preventScrollReset:d,relative:g,viewTransition:A})}},[p,_,h,o,r,s,c,d,g,A])}var iy=0,cy=()=>`__${String(++iy)}__`;function fy(){let{router:c}=rh("useSubmit"),{basename:s}=z.useContext(Ce),o=Mv();return z.useCallback(async(r,d={})=>{let{action:g,method:A,encType:_,formData:p,body:h}=wv(r,s);if(d.navigate===!1){let R=d.fetcherKey||cy();await c.fetch(R,o,d.action||g,{preventScrollReset:d.preventScrollReset,formData:p,body:h,formMethod:d.method||A,formEncType:d.encType||_,flushSync:d.flushSync})}else await c.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:p,body:h,formMethod:d.method||A,formEncType:d.encType||_,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[c,s,o])}function ry(c,{relative:s}={}){let{basename:o}=z.useContext(Ce),r=z.useContext(He);_t(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),g={...qu(c||".",{relative:s})},A=Al();if(c==null){g.search=A.search;let _=new URLSearchParams(g.search),p=_.getAll("index");if(p.some(R=>R==="")){_.delete("index"),p.filter(C=>C).forEach(C=>_.append("index",C));let R=_.toString();g.search=R?`?${R}`:""}}return(!c||c===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(g.pathname=g.pathname==="/"?o:Fe([o,g.pathname])),Hu(g)}function sy(c,{relative:s}={}){let o=z.useContext(Id);_t(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=rh("useViewTransitionState"),d=qu(c,{relative:s});if(!o.isTransitioning)return!1;let g=Pe(o.currentLocation.pathname,r)||o.currentLocation.pathname,A=Pe(o.nextLocation.pathname,r)||o.nextLocation.pathname;return ai(d.pathname,A)!=null||ai(d.pathname,g)!=null}const We={引越集:`
        浣溪沙
听雨未眠自抚琴，听风断送苦蝉吟，听人恶语渐沉沉。
喝退泥涂须臾我，延来命驾万古身。旧晨破晓御六军。

浣溪沙
索句天凉抱板砖，闲情要事两无关，只将落叶御新寒。
手选绝活零杠五，拳打野怪一威三。至今猛犸不上班。

定风波
乱云暝、只坐吹烟，匆匆作了叹永。梦里淮南，冥冥遽去，谁管千山冷。
袖中词，旧机警。黄叶殷勤抱铜井。
无定。忝笑呼岁晚，仓皇流景。故山再整。步长川、磊落谁言病。眇晴空响雁，崇门老树，高意从头领。子闲敲，日移影。同谢西风世间请。清迥。月下攀摘，云帆交映。

鹧鸪天
寒起清晨一半枝，乱红斜下日何其。难翻旧曲成新调，未免天涯冷故知。
风瑟瑟，雨施施。人间步步至于斯。道爷不到腥膻地，便遣行云就作梯。

相见欢
一勤天下何难，雁朝南。好是那池池水水山山。
词笔劲，迷魂醒，赋安澜。抖落些尘尘土土般般。

偶占
赵璧非为宝，
隋珠未足珍。
拂雪一笑去，
本是上清人。

浣溪沙
漉漉流光过竹蹊，故园灯影亚门枝，人间最是苦长离。巧手有缘传鸩饮，机心无怍捋鬣髭。当初素面欲颦时。

六州歌头
残垣飞起，浩荡复神京。身虽莽，心犹壮，气填膺。日东升！照表里州郡，自无恙，三边静，着鹰犬，呼从骑，一川平。戴雪千岩，迢递通云路，汉使曾经。虏运如草偃，饮马过龙城。蔚蔚中庭，万朝听。
叹风云旧，沉疴久，生涯迫，岁徒增。楚歌乱，山海断，叱追兵。岂偷生！空教年华损，进无道，退难成。时不利，骓不逝，一番名。漫说着施妙手，见奇迹，隔岸光明。立谈春秋梦，俯刈拊风茎。令鬼神惊！

正月十九偶记
西去连山披暗雪，来时微雨泛星舟。
僧房岑寂风烛晚，佛国蒸腾火树流。
忝向一畦称江海，辄从半榻梦春秋。
东君何日吹杨柳，照水鸳鸯自在游。

无题
几经遭逢更摇首，七窍犹欠些灵通。
仰面尝是来时雨，蓦地人间一阵风。

行记
嫩寒天气小半春，
罗帕挥成柳色新。
忽去忽来雀摇树，
如常如是岁惘人。

无题
芸芸半是穿凿辈，春过南山未见耕。
呵殿马疾闲投令，呼拉草动紧奔寻。
肯綮不解雄经纬，涸辙引竿傲古今。
痛觉书中真兴味，难抵菜市一串银。

树下即兴
枯藤北面亦沾春，
雨浥柳尘远随人。
江湖看去多无识，
只怪忘川少舟津。

鹧鸪天
执剑低头虑虑然，皇州气胜去方还。数丛碧绾春云乱，一片红抛黛瓦间。
当立断，莫迁延。人生能复几今天。偶从今向儿曹盼，亦是当初盼我颜。

摊破浣溪沙
万象飘乎一点鸥，人间行迈竟何由。晴雨无凭佛光小，百层楼。
国步日艰当丕变，禁宫立定傲潮流。揽月九天宣宇宙，为谁谋？

无题
任风擒我追拿我，病我穷我看笑着。
辛苦说换来日景，来日一向可领了。
五味不觉和水进，悲欢具下同泪抹。
我是后山斤柴客，懒卧青崖云起落。
鼠辈摇旗称神圣，尔看佛面可动过？

浣溪沙
元佑碑旁海陆沉，二桃三士祭维新，千秋王土乱飞尘。
犬逐恶风飚奋响，鸮含淫唳摄心魂。原来东渡为避秦。

如梦令
灵隐飞来曾到，一涧分明昏晓。幽径入书房，浅笑不言神妙。时早，时早，月上草侵官道。

喷人后记
再取杯名振林莽，延风引月事花朝。
但凡点金续一秒，从不委身折节操。
输赢看淡本空妄，鞍尘本已添劬劳。
我今骂尔乃缘分，何必砸盘怒火烧。
更有远志拔线去，卷它一卷又何妨。
黄金屋里颜如玉，国士不嫌添一双。
千古一变你来造，儿孙落下笑满堂。
老子泉水观你相，似是狗命剩半条。

鹤冲天
眉暗敛，酒微酲，随处鼓蝉声。
月残云绌远山青，潮起又潮平。
奇策出，春秋固，笑指上林熊虎。
市桥烟火夜空明，嘉梦莫相惊。

妄语
东西升降本一圆，南北炎凉至两端。
或循旧路梦全盛，或推远景领波前。
苍鹰避驱魍魉境，雄鸡难白不晓天。
醉里见问崖山降，似是弓骑又入关。

时雨
黑云急走呼一舸，想是天街亦浮沉。
试借熹微抚残卷，偶怀暮想对枯琴。
泥尘时怪佛无渡，溺色轻言道枉人。
万叶流光按蝉翼，还来四海寸晌真。

无题
一江云气青峰晚，树树澄明挂浅滴。
绽影挥形非所趣，抛身命意是爰归。
万斛急下增宁静，诸境芜颓更致知。
酡面当时金樽侧，山川几送丁令威。

感西乡隆盛
日出忽日落，成败一剑彰。
梦里徂东国，平生慕西乡。

无题
南渡不知败耶成，半生梦觉落花声。
一番名刺如川逝，驻语归尘载波行。

雨中
又批几度风，又支几度雨。
抢地先蒸蔚，扬却半生灰。
走走且停停，逢人恭笑语。
何似雨无尽，怒扫此间世。
太公一觉醒，功垂末化成。
芷兰渐离黍，招隐亦飨鱼。
王气悬一绪，君臣劫未易。
开市礼南北，节杖静东西。
盛时我天下，哀时天下我。
芸芸间关者，泯然笑忘机。

望海潮 亚运会
狸奴分草，寒山照面，阶前数笔青黄。嘉会遏云，高朋曲水，繁华到底钱塘。莲帐竞辉煌。正鳌背风劲，楼外歌扬。一线潮来，五洲声势，更同光。
晴湖望眼琳琅。杳双双舴艋，隐隐宫阆。逋客梦惊，朱墙瓦落，蘧蘧四极重张。中酒问新凉。堕叶纷不扫，犹带脂香。船系人归鹤睡，明月卸时妆。

浣溪沙
驿路飞尘数片山，蛾黄蚁绿未招安，乱凫摇起晚秋天。
役事多颓君莫叹，游心自省更何言。扶桑此去几旬船。

怀古
青山争赴波行处，
金乌懒摇水皱中。
澄庐不居贼臣志，
小窗冷看半湖红。

点绛唇 次韵静安
雪扫沙穿，阵里马头无右左。黄流飞舸。进退回旋可？
燕子梁间，随处一个我。思量着。春风满坐，不觉樱花堕。

拟古
北风三日雪，浮泛一夜灯。
各遣飞花令，同闻裂竹声。
玉壶冲近炫，尘澥旷远听。
御道归来晚，将军在龙城。

晚坐
从我观物皆吾色，
从物观我未合衷。
自在拓天溶溶月，
可怜拂面煦煦风。

疏影
平生坦荡。过阵头冷雁，山下晴浪。客里胡笳，一绪春风，新词付与谁赏。十年呕下凡余血，并蜡泪、堆成云壤。偶梦回、散发结舟，自在纵天疏放。
何惧龙门铁槛，送荧火夜去，驱日横杖。翠甸流莺，画角迎光，素面行歌川上。神宫浅草近畿道，遍记取、旧时回响。载酒归、君问名前，莫怪此公多忘。

浣溪沙
雨泛秋光起画屏，残蜩三两罢歌声，簟枕难收梦魂久，雁孤行。
无限江山驰远望，一番清赏系东瀛。前度革新多巨子，冷飘零。

怀古
欲拼一醉问莺莺，
当时隔江乞却兵。
若无闲着推日月，
怎奈立将判死生。

无题
半道苍黄依晚照，人间至此亦何伤。
清风曾比鱼龙起，浅水未谙鳌背长。
买醉日攀闲岁月，钩沉每作碎词章。
忽而遐思追渔父，便掬一捧就沧浪。


忆江南双调
年将半，明柳入波旋。也效李陵一振臂，终随陶令两无言。翠盖正清圆。
风不待，玉斧破婵娟。云底已催千箭雨，潮头继起万竿船。泪眼向湖山。

六州歌头平仄韵互叶
后山拍马，抆血一时风。秋露重，云月弄。电声嗡，炮声隆，扰了羊倌梦。把残勇，稍鼓动，钧座令，儿女命，塞边鸿。炙货分来，就酒急相送，浮橹应同。十载击敌寇，万一养蛇龙，今巧遭逢，势如洪。
赤旗潮涌，灌长垄，冲暗洞，剪高峰。铁桥冷，沙洲静，看金城，泪痕中。天道曾何应，胡虏逞，竟无明。昔呕咏，责工整，及苍生，遗训谆谆，克与文明井，广驿交通。顾生非我意，便死忝居雄，飨此河灵。

朝中措
九霄一板万行经，做戏是生平。端坐皆称罗汉，抬头尽属高僧。
仓皇误了，似竹清瘦，流水柔情。双燕来时言语，彩云隐后区明。

唐多令
往事坠云头，抛身入道流。要有光、透照春秋。崖上鹤来天上请，踏白玉、取银钩。
多少瓮中猴，一般跑马楼。启吾皇、四海无忧。百越嚣氛篱外草，齐宣也、望同仇。

菩萨蛮
瀛洲有栈询船价，泰山无路邀车马。白鹭掠千崖，回头则是家。
来时衣冠整，红叶谙名姓，流水换秋风，王业今何踪。

随占
夏未待消梦已阑，家中尚有几声蝉。
涉险勿怪人轻慢，穿花犹闻铃音寒。
诸君承幸应戮力，遍地搜略或龙蟠。
诚如来日折太半，立捐尘芜向忘川。

立秋
仰看绿窗跃黄耳，一叶启后并承前。
人神同浴存真火，日月何曾作假眠。
堕泥方知须摇尾，衔草无暇自正冠。
只消狂蝉烧成烬，清华洗净露白天。

有感
落叶与人言，
小路分两边。
世上有万难，
抬头是高天。

千秋岁
转身无累，月上青青陂。门未锁，舟横水。秋千划野草，木叶纷纷坠。苔径暗，当时素袜姗姗至。
雪落溪山寂，万象皆交识。琴柱转，深深拜。闲烧鸽底信，笑煮鱼中契。天不许，斜河耿耿空相对。

人民广场
睡去老和几秋天，几度春来又明年。
春风于此多际会，落日且今一挥弹。
呷烟遇人只比火，下机返路与谁言。
无尽闭包旋逝梦，留三两树起奇观。

八月廿九悼金老师
束脩前度顽石去，立雪迄今化雨来。
腹笥千岩松为赋，索琴一顾日同辉。
杏坛作育人间已，王孙闻召化蝶归。
常叹漂泊久未器，时听流水寄追思。

诉衷情
每从故纸立新椽，发复发荒寒。
风来左右抟转，表里戏河山。
时去后、恨空前，变局焉。
且出门看，一线潮流，口月行天。

扬州慢
江左移都，断桥悬处，弃车醉步初程。浸湖山表里，更几度回青。自弓骑南来散射，汉功唐业，差借援兵。叹神风、吹覆千帆，才到空城。
里邻错赏，盼刘郎、蛩起雷惊。纵五彩词成，三潭匠巧，难复垂情。北伐众星仍在，澄庐外、白日无声。照池边春草，年年折却还生。

解语花
霜红欲下，是处分携，遥看南山月。旧窗今夜，乡人去，玉屑寒光相射。槐根槐叶，具入梦，参差摇曳。何以堪，儿女天涯，各自知凉薄。
极柱纽解，扶桑悬澥，虽千里，况味冷成殊别。曾操大业，谈笑下，分疆划野。也问花，继辞萧郎，底事年年雪?

冬月
三十余年长短志，
两千里地前后因。
总是名胜绾旧绪，
无尽区脱抱新坟。
春秋鼎固判词稳，
轮回不羁龙马沉。
泥台昨日悔一子，
乡书此夜抵北辰。
查氏遽从上帝教，
田野几曾弃家神。
或归观宇强索票，
怒延雷电向公人。
本来眼底无常物，
更有何物出此心。
如光逐影转一念，
如水适器换此身。
从生入死旁人见，
从死起生复焉寻。
即在近前又无界，
只闻童子说云深。

浣溪沙
数团晴凫尾人行，三山步水证空明，钱塘门外扫秋声。
进一步前扶汉策，再无柳下梦梅情。道流且去赴平生。

又
事柄垂成未璧完，残辕阙帜鼓风前，恨中宫柳捋春烟。
忠勇既多沉菜市，僭名何必弄潮尖。愚民一度思可汗。

又
太上挥兵美利坚，八旗渡海力伐元，忽然幕落入尘烟。
自来厚生多出产，未闻焦土换平安。遥思前代砍奇观。

又
半式功夫趁酒挥，周身毛病应春来，狸奴月下唤高才。
他日膝儿嫌矫作，此时情绪入谁怀。东风暗放一枝开。

又
巷陌寻常继踵行，楼阁早旧掩花灯，时惊桥上铁轮声。
未见机关随处设，常羞敬语欠回呈。千年道统在此京。

又
春意包藏数折间，凭空一雁响寒山，中堂默踞慢焚烟。
猛进如潮环宇事，直下飞流水帘天。先生遗恨未收编。

又
向晚驱车上故原，一围春色锁阑干，烟花残照旧王川。
茶盏每倾名利事，清谈不过种树篇。身世眼底万重山。

又
小小方开半仄间，流澌凌乱不构连，标格自峭莫来攀。
偶入相机拼一笑，浅得风月似无关。曾今吹笛在谁边。

又
近点忽发祖鲁矛，投石急策意愁牢，邻儿鼓噪不曾饶。
猛忆沙间执手笑，几生月下看山遥。且今跳水再图辽。

又
惊梦从来撞此钟，半山云攒玉皇宫，坐中老道笑穷通。
些个猢狲摇野树，怎生鸿雁落樊笼。清华就地月行空。

又
拂菻余光铁幕横，躬逢绥靖又陈兵。半边萧瑟半河清。
诸法载空忧乐美，报身换域谷峰平。偷得来日一番名。

又
世态仓皇看不清，秋风动荡乱陈兵，笙歌尤是奏升平。
便取孤蓬划永夜，待觉大梦断澄明。小山尽处抚琴声。

晴日
看水山显豁，看山水澄明。
拾物能自富，何事顾虚名。

菩萨蛮
喧腾竟夜平芜雪，合帷映画再一折。五色射残躯，道流随处居。
山川殊远地，起念旦夕至。万叶皆春天，不拘名胜间。

又
老和低起随云势，宝阁曾恃千钧力。扶笔问迷津，殷殷一片心。
流风摧久病，暗雨更相惩。波粒二象间，测得准与偏。

又
随畋放猎南山下，暮云偶入清凉榻。白马过行宫，骎骎一世风。
春来池水皱，欢会何年又。杯酒意难平，银河同与倾。

又
一城风絮织春意，时时散作潇湘泪。羞向北穹凭，天涯剩独行。
残霞浇宿醉，便就合衣睡。人世各奔忙，银釭照夜长。

柳梢青 过富士山记
小雪随来，流云俯就，照面眉低。
四境苍岩，五湖行客，动荡襟怀。
一般风月别裁，快晴日、神山幸哉。
裹汉时服，按西洋乐，侘寂如埃。

无题
风片雨丝暮，梦里落花枝。
翩翩旧日裳，浅浅入时眉。
乡园并路走，软语一笑来。
乘境三千界，褪隐何所依。

无题
定海针旋瀛澥转，
各家敛色平秤盘。
我自坐中怀不乱，
从来立命岂由天。
    `,洗练集:`
夜兴偶题

四海兄弟皆醉肠，十年行走岂寻常！

总将绮语妆末世，每临晚镜诉悲凉。

与我何关山河恙，各自为些碎银忙。

一畦春风燕来早，柴门不锁日月长。



浣溪沙

暗里天门一隙开，山山隐翠正春回，城中车马入云来。

亡我还须风借力，升仙辄是病侵怀。且任钩月扫灵台。



又

巷陌人稀花自开，芳菲次第跃楼台，头沉梦里问春回。

湖上鸳鸯知水暖，世间儿女各怀才。呼谁月下传杯来。



孤山公园

东风又过处士楼，带过青春带女游。

鹤作高鸢渐无影，梅乘微漪入斗牛。



浣溪沙

家在天涯月在空，鞍前尘土地底风，新愁勾兑酒瓶中。

圣训听来忽有获，命轮转过不由衷。年年春草盼归鸿。



春晚

有时梦起在侬边，

忆念终成辣眼烟。

人世霓灯常亮灭，

玉扇疏光贴晚天。



解笑

欲将毫末起春风，三纸浮华不饰穷。

智虑再遭亭头斩，生涯多困药瓶中。

湖山冷鉴十年梦，江月独承一镜空。

旧志惊弦成死嗓，故国漫衍掷离宫。



浣溪沙

云在青山水在天，涌金门外雨连绵，阶前野鹤枕风眠。

万世太平归黍末，百年兴国举牛肩。且听春去莫迁延。



又

报有雨来雨或知，几人着眼量云移，生逢何处灭何时？

混沌荡开形乃定，梦魂归去劫难离。翠禽鸣遍日横西。



索居

卧向破天听隐雷，醉征前事卜晴曦。

犬巡毒夜无时吠，鸟怯重云不敢啼。

千秋幻丽在头顶，四方扰攘遍目极。

或如地底通瑶阙，浮世往来一层灰。



浣溪沙

听雨去来月失花，夜半思量昼无暇，只自饮醉送年华。

乳子呼着人间话，病鸿忘了云上家。不过捉影捕风罢。



喝火令

驯笔从八股，成书调略同。

转头南雁已秋风。

岂教一流清致，混入乱泥中。



问我何朝醒？孤山觅鹤踪。

把波心坠月叠重。

寄与高天，寄与广寒宫。

寄与故人难到，且自罚三盅。



偶题

梦里有山多延绵，世间无事起丝澜。

拾笔将题意难定，秋风晚送半壁天。



秋夜

启书片顷心猿舞，万般辛苦又逢秋。

屏前逐影挥刀客，月下吹烟覆叶舟。

虑较白头多一缕，智从总角逊半筹。

青山惘顾浮云去，赤胆何辜戏末流。



浣溪沙

有些风划一径秋，谁邀明月共登楼，斜河无梦效庄周。

逐往争来衡宇雁，逆天改命破云舟。偶乘黄叶到沃州。



六州歌头

苔砖水径，近日暮斜阳。

晴入岫，波分桨，卸时妆。

甚轻扬。

想晚宋行步，北戎叩，钱塘里，膻腥味，中廷泪，洒南洋。

草掩石墙，放一湖明月，数点荧煌。

问家山故业，竟那曹重光？

大势汤汤，夜犹长。



待禳瘟祸，扶民力，操行列，毓锋芒。

大道警，时易去，势难藏。

改新张。

俟海清河晏，礼乐继，彩云祥。

神兵到，天师按，九龙翔。

四海莫非知遇，向星宇、起汉追唐。

乍层林染黛，收逸绪苍茫。

说是秋凉。



志梦

错错流澌下，缓缓景行升。

感圣从时变，闻道偶化成。

掷子九州牧，挥毫五岳生。

提裾袖明月，寂然两无声。

振振孤飞去，心绪暗交横。

胶胶鸡鸣处，汇身第几层？



八声甘州 元日

又一年缆系晚霞天，凉月透窗纱。

待灯前戏罢，床头歌偃，梦入清嘉。

数语温存在耳，奉赦换生涯。

笑起人间世，浮泛星槎。



闻召离宫钟动，驿马纷驰骛，边事稍暇。

放关扑三日，执手看银花。

壮词成、红云倾酒，舞扇低、烂烂醉朝华。

身何处？欲流奔侧，擎火归家。



岁末

黄云杂沓摆一窗，行影叆叇入烟光。

十里荒甸化雪夜，半月草成结绳章。

每将辛苦见肥瘦，惘闻人语飞短长。

道是有心天不负，何怕春来绿尤藏？



浣溪纱 除夕

虎啸龙吟在此今，千家炮杖抖星尘，山河挺势照新寅。

少小憨颜添暖绪，玲珑秀句甚清亲。无须更向避秦寻。



鹧鸪天 怀人

一棹春回半镜天，并禽踩日过游船。

对花倾酒红颜赧，向晚归山玉扇寒。



从孽海，起安澜。犹闻召唤在人间。

曾批雨令兼风券，便纵凡身狂与癫。



春日

步步沉吟捻断须，偶听花落春之余。

侵窗树色变明暗，浸耳鸟声换疾徐。

斗米有求倾腹笥，寸心无路入灵区。

岁岁东风来复去，借来往日一面欤？



感花落

一夜玉兰折英气，几只蝴蝶觅余馨。

春风得意春风事，莫遣凡间困觉人。



有感

丈夫生于天地间，何必郁郁不得欢。

春红泻泻春水浅，东风煦煦东山见。

闷坐咖啡一肆隅，罗刹攻略已班师。

对镜伤叹燕回旋，鼠标点击落花声。

延驻周折志遂未，偶问前程银丝生。

喜我孩儿唇齿巧，辄遣暗怍为父心。

退为忧怀建方舟，系于尘世之中流。

湖山雾里增秀色，台阶断处多转头。

再启书看颜色旧，浩荡情采接前篇。

何必郁郁且为欢，丈夫游于天地间。



清明

料知清明近，江左半入春。

纸上情思旧，楼头绿意新。

浮沉两间梦，坐卧一世人。

陇次青烟起，孤鸿泪不禁。



偶见

叶逐琴音落，人披月色归。

凭空一声喝，万象入幽微。



无题

镇日尘氛恶，月出遁小瓮。

累积无妄业，勾兑有用功。

撼岳三通鼓，惊潮八面风。

先人时感念，竹外暗铮琮。



双双燕

信风误尽，过春色成泥，一池光景。

流禽落树，倦看月迎归影。

还喜邻儿入静，把骨气、窗前立定。

山河北去难平，世路南来谁并。



清冷，无明醉醒。

任浪逐波推，棒横讥警。

偏安成矣，笑送马蹄辞境。

留下丹青烛炳，更莫论、昭昭天命。

堤上绿柳逢人，认得尔忠我佞？



偶记

疫氛淹忽时易逝，儿郎远隔半岁迟。

雨后芭蕉空贮泪，风前柳絮不忍飞。

每乘迩志投破庙，长记青云是吾归。

胸次无墨脸独黑，箧中百卷谁识我？



暗香 六月初二闷坐

前驱后赴。者无涯欲海，迷虹幻雾。又是夏深，记少年轻诺难付。领了城南晚景，缓缓绕、老蝉高树。先生志、淡宕随云，到永夜清苦。

骤雨。忽来去。湿万陌流光，一间愁绪。苟安岁久，只把闲钱遗南顾。日日仓皇营计，揶揄些、搜肠言语。也怀想、凭鹤信，棹舟同渡。



疏影

那时怪力，把浮生寄了，一轮游戏。天造行舟，人赐虚名，至此还余凡几？长沙遣羽橱间语，壁上月、无心闻记。水西去、遍绿区脱，旧侣如常称意。

尔后从流下降，见山中斧烂，墟里烟起。华盖纷驰，宝马长驱 ，偶入前村评议。荣枯尽处丘边草，年年和、春风词笔。更何叹、仰对清虚，白玉楼中帘启。



偶题-Idaaliur

山溪急下绰约风，

晚潮带雨自西东。

凭人说道浪漫气，

合是沙场半从容。



坠蝉

不解人间苦，喁喁向谁诉。

时时争高第，振翅可一翥。

忽然树杪下，缄口荫凉处。

东来雀留喙，西去蚁延驻。

四围声愈震，暑气浑似煮。

只待秋风起，寥落入江渚。



无题

往来唯有月相迎，寂寞中庭此无声。

多少人间一笑晚，时常窗外两三更。

风从海上推云至，水发穷极洗练呈。

作茧而今空自缚，样貌消得愈狰狞。



满江红 赠老屈用鄂王韵

剑饮胡沙，燕然勒、江流未歇。

西北望、几回山势，电寒云烈。

辕下累经尘与土，人间不许风和月。

蛩吟晚、曾力劝使君，休悲切。



少年志，光照雪。

将暗恨，擎灯灭。

取冰心一片，补金瓯缺。

矮纸闲书平戎策，长针笑任饥餐血。

待秋来、把酒共登临，何来阕？



浣溪沙

谁手凭空转地球，漕河运火障三州，夙池自奏第一流，

至死聒蝉歌主义，笑呼弱子取灯油。魂捉天定起金牛。



新凉

索落秋风注，鲸波顿交横。

长车徂北境，孤辇滞龙城。

心欠三分定，志期一夜成。

狷狂如阮籍，林樾措此生。
    `,潜用集:`
    赴滨江考公经转塘

三潭尽隐云中月，六军忽来浪里灯。

一片丹心洙泗上，零丁遽去不改名。



六州歌头

沉疴久矣，尤是爱新晴。

荷尖露，沙间路，两相迎。

甚垂情！

念越梁吴井，多明胜，烽燧后，今何许？姮娥冷，黍离萦。

王气都收，剩岳坟孤楚，逋鹤灵冥。

自窥江马去，问匣剑谁横？

怜我中华，道难行。



一夕回梦，红尘过，妃子笑，九州平。

待撒豆，云中发，万行兵。

虏弦惊！

莫教金瓯缺，五泉咽，纵躯形。黄流注，闻潮起，犹噤声？

前度丝绸远引，遣天使、百岁终成。

看须臾海陆，大计与时兴。

归雁来凭。



偶识

忽而入夏泽尘转，数度云狂雨乱时。

为取鳌头轻墨末，且收意马纵词虱。

钱门隐秀期新迈，铁槛高横壮旧识。

夜放边声悄然去，东风来看第一枝。



无题

失雁从风初矫翼，蓬蒿十里一盘桓。

山扶槁木怀柔远，水送迷旌节制前。

苟向秦王献奇险，怒敲龙骨镇安澜。

弹冠且徂东山去，自是西行几岁还？



口占

有心拈花去，无力制新词。

知了可知了，茱萸遍插时。



暗香

柳明竹暗，想几程送往，空疏班扇。

只坐似僧，耳热前番细提点。

究竟忡忡意绪，争误了、孤山颜面。

渐日暮、一脉清晖，谁记得云乱？



闻唤！梦又魇。

谢巷陌旧邀，太子迟愿。

就樱把酒，应是莺莺懒相见。

车过长安气壮，灯火外、秦娥泪泫。

遍饮恨、终自取，莫推鱼雁。



浣溪沙

总总林林误旧颜，婷婷袅袅入阑珊，

斜阳院外一弯间。



世事筹棋长变换，生涯纵马忘归栏。

西湖岁岁画春山。



永遇乐

徂也萧萧，弹眉纷霰，方逸时愤。

血马收蹄，燕然倒戟，看佞员传信。

拊衣振臂，陵余一死，汉帜侧飞鸿阵。

凤池归、葡萄杯里，谩听金缕圆稳。



沙遗旧漏，鸡催残梦，借问银河谁引？

宝塔横湖，柳丝鞭晓，春色延霜鬓。

棣棠尘隔，乳儿笑与，毕竟人间浸浸。

诸天启、晨昏未定，数神显隐。



忆少年

山形狸梦，山房藉枕，山僧曾识。

桃根唤欲去，怅回云征辔。



半醉浮生欺病我，抱焦琴、领奴幽意。

他年猛回看，把琅玕笑掷。



云胡不喜

黄龙乍起满尘埃，

泻下窥天几眼来。

古柳不绝雄关月，

长缨携递尔炘才。



沁园春 自题

乳子投名，老大余诗，竟岁未成。

亦乘槎上汉，攀云挂笏，声驰宇内，气贯丹青。

万里黄流，一滩银月，玉碎冰壶同酒倾。

仙宫冷，数苔梅几点，照水香凝。



吩咐下世愁形，待他日池塘春草生。

便交还旧梦，具来燕雁，携呼亲党，买醉新征。

莺啼晨曦，霞呈暮锈，尽是乘肩儿女情。

风荷起，看波光互隐，出落娉婷。



苏幕遮

正春归，朝又暮。

何处吾家，数一窗烟树。

怎耐瘟神穈四处！

晴雨西湖，惹几多人驻。



少经年，蒙世路。

收就青云，造百千星露。

借问忧欢曾何度？

已是中途，左右驰三五。



莺啼序

瘟邪克禳未竟，正春归几处？

冻川解、千里银盘，又陨星子无数。

贯州县、山河落魄，笙歌隐没朱阁阒。

想当时，黄鹤雄楼，望中荆楚。



蔽乱前朝，鬻国卖地，病夫流笑语。

待更替、饥馑吹来，废炉余烬妖句。

岁长倏，兴亡百姓，命难改，辛酸谁续？

看搔头，庚子诸君，火雷神谕。



云山吐故，燕泥翻新，卧窗凭九曲。

便如此、速传佳酿，宛唤飞琼，潋滟凌波，一番清晤。

无殃里巷，何妨乡禁，悠然如到蓬莱地，醉冲冲、问药师何去？

何堪梦醒，沙风裹月敲门，转霓带影临幕。



生何一渺，聚以相依，或乱生冷独。

齐奋起、长歌当哭，义理亭天，浩怒当宣，秉仁多助。

门前雪扫，枝头花放，人间离久重契阔，各欢欣、回首同来路。

搴帘吩咐东君，任那熏风，久些转驻。



怀旧

又到赏花时，匆匆岁不支。

湖光空变幻，塔影旧栖迟。

命数多难覆，人间少逆知。

鼓机逐梦起，谁教恨如斯。



与烟君同登白塔山

神驰白塔南北山，笑掷前程意渐宽。

万尾银蛇桥下过，一轮红日水上淹。

生涯跑马无时定，尘梦漂萍未顷安。

不如提帚拂明月，且荡丹心竹影间。



喝火令

一骑征尘后，千山坠鸟闻。

把鱼笺雁信轻分。

槐下旧萦言语，槐也久移根。



食罢金瓯饼，呕来桂斧心。

竟端然命里无门。

偶自抓栏，偶自向枯琴，

偶自倚声填阙，待到雨霖霖。



无题

叶迎轻飒雨回旋，醉里春深烛影阑。

曾掷焦琴共闻唤，偶听末世误偏安。

万军过处湖山裂，三圣降时海天燃。

梦醒时撷西楼月，仿佛亭下旧嫣然。



看笑

江左四时多疾雨，阶前半曲少故人。

总将一点无用志，捏作十分愁病身。



无题

世路鞍尘并无新，

我心安处是隐沦。

倦听烟雨门开半，

原来开宝时年人。



无题

也似当年噎此声，也怜眉眼微光横。

远近华灯争分色，百千苦雨已赋成。

功开末造希神启，业契新天照宇清。

浩荡潮流听月相，孤帆飘摇看九星。



偶忆

风送魂幡与鹤扬，无声抚念绕中堂。

西山携手夕阳道，曾奉有司一柱香。



无题

道是杭州无故人，

共此连环要妙音。

末世一瞥成永世，

云上寒衣千里尘。



夜兴

一念沉时雨打窗，银灯远照细影长。

不堪前梦风流地，别引新愁落魄郎。

几册闲书邀夏至，满屏鏖战待夜凉。

急急办了黑头事，忍看各人扫雪忙。



暗香

数云过往，换一年夏意，勾闲蝉唱。

术业两空，总把卜居作韬养。

将欲观书岁晚，争竞事、追踪沉响。

且罢去、巧算机营，前禀本虚枉。



疏放，气自莽。

效阮籍傲矜，白石清量。

借来竹杖，行遍人间啸何亮！

多少江湖旧恨，都付与、钱塘风浪。

酒病起、方拭镜，者般面相。



雨后Eldamar

似开云隙一道光，

散作叶尖万点黄。

顿处危岑疑无路，

激流乍起贯八荒。



目及

散漫穈云暗四围，

心灯衍照意垂垂。

世相欢奢人竞走，

天涯寥阔鸟飞回。



书愤

丈夫生时多遭际，

总将眉敛意驰驰。

敢问江南何所有？

十年烟雨一栖迟。



扬州慢

羌笛敲边，戍楼镖月，虎旗猎猎寒疆。

趁天人不管，取鞑虏肝肠。

遣冠盖、驰驱万里，凤池颜色，宛转飞扬。

至清宵、红烛高标，为谢贤良。



绿窗一梦，乱消磨、溽热汤汤。

自铁骑南来，山河代谢，凭望钱塘。

故垒百般陈迹，中兴业，具锁僧房。

怕离宫秋草，萋萋和恨般长。



哂之

天垂雨幕山失色，人落棋台梦不周。

云有去时春有夏，虑无穷处作无休。

常怀帐里千军想，总任车前一马由。

饮笑冲然蝗众后，那间呼唤与夷犹。



闲题

曾扶短棹过湖心，眉山淡扫入鬓云。

叶叶春花和细雨，丝丝玉露下轻尘。

忆随三生罗裙远，曲逐九畹雁羽沉。

永夜愁病多星子，此间风致少一人。



六州歌头

骄阳远下，晚树渐秋声。

残梦起，诸天隐，万千星。

照平生。

遥想当时勇，乘风势，纵马力，临丘壑，张云翼，展虹旌。

一夕奔回，廿载音容逝，雪落边城。

昨日游冶处，恍似绿蛾横。

业障牵萦，道难行。



不如长醉，结庐宇，逋客路，遁膻腥。

弃圣谓，抛智虑，罔心灵，

塞闻听。

倏忽年华损，寒蝉切，问归程。

身贫技，期再续，更经营。

北望乡中父老，殷殷盼、到底何成？

这池池山水，终百转迎迎。

暗自销凝。



清平乐

乌云长短，门外春秋换。

对镜轻妆心不乱，豆蔻又添一段。



红衣拂了时迎，青山留住还行。

岁岁今夕风致，生生此岁衷情。



桂花

鹅黄簇簇别轻枝，

占尽人间好节时。

须酿银河几秋梦，

凭风贻与行客痴。



鹧鸪天

月下蛩吟断续听，隔楼人语未消停。

头沉攲枕泥砖远，意乱翻帘玉宇横。



迢递路，短长亭。

马蹄方按望神京。

几家春色连芳草，没入摇窗电钻声。



喝火令

一病千年短，前朝醒睡身。

任花开叶落城沉。

长戴雪披霜去，笑水险山深。



世运多移动，天涯不改心。

看尘来冠往争银。

道也无明，道也似难亲。

道也远居云外，怕扰梦中人。



洞仙歌

枝枝暗雨，把流光轻洗。

唤起悲蛩饮残泣。

夜沉沉、陌路谁与相扶，风厌厌、山海迢遥难寄。



卅余年举步，未惯人间，自命壶中掌天地。

正荡恨浇愁，翦叶旋花，延三五、西楼雅集。

又点滴侵窗晓寒催，剩两径衰黄，踵游轮戏。



无题

偶将旧事入歌中，

偶误罗裙与叶红。

偶点三颗伤心泪，

合添雪夜酒一盅。



浣溪沙

蒿里病鸿雀哗腾，犹思前度万千程。

几曾着眼羡荣宁。



或有高天遗罅隙，再无下贱造孑茕。

人间行役太匆匆。



暗香

乱红影日，看乳儿效句，人间如是。

市相厌闻，旧曲新班作长计。

些个勾闲末造，搜锦绣、延绵三纸。

更莫怪、写字楼头，多舍命君子。



回避，奉帝敕。

令景业再光，克续英气。

佩环夜起，千树齐舒拏云臂。

春草从今不负，青眼下、鱼虫游戏。

岁又少、灯火烂，把孤馆闭。



Bann

岁华锈去十年没，烟嗓绵延万境生。

曲水回环浅属意，流风飒沓细陈情。

人间梦影无穷替，下界婴灵偶驻听。

莫向虚空深处看，多少白骨地上行。
    `,存续集:`
    无题

龙飞不见龙鳞伤，龙战在野殁玄黄。

世人空仰龙袍色，可怜衰草一径霜。

我为哀来谁哀我，等闲刘郎作江郎。

风急天高残蝉泣，灯尽茶凉旧慨慷。

牵怀只馀后山月，夜来阶前走霸王。



西湖渡头遇方丈

西湖三月暮，杨柳照苏堤。

忘蜀逡巡处，听花葳蕤时。

生涯多落魄，心性入险奇。

天地胸头转，洪荒掌上知。

抛亲复辞爱，碧阙俟我归。

雾散游人集，旭日挂东枝。

黄袍二三士，灰衫五六随。

未谢俗人请，气度似云低。

恨其堕泥淖，哀彼与道违。

扶杖我前过，三喝接噫唏。

众僧回头看，长者独向西。

属曰同远客，何必不相惜？

杖敲石板路，令行莫栖迟。

遂登乌篷船，渐去渐迷离。

隐隐晴岚出，曳曳白鹭飞。

独坐心惶恐，自辩已无词。

唯见头顶日，辉煌笑愚痴。



寄明镜道人

自笑当年力满弓，人间毕竟太匆匆。

秋风吹冷残蝉调，孤雁惊飞拱月星。

醉里十三栏凭遍，梦觉廿七岁无声。

送君词笔春来请，剩我诗囊过一冬。



西湖N题

谪人谁与共秋光，放鹤亭边自在郎。

照日流云波明暗，盈堤风物草青黄。

酒翁瓶仄知天大，弈士斧枯忘岁长。

些个尘间梦游罢，有时归去一径霜。



相见欢 路遇周董演唱会

一掬凉玉楼头，万千秋。四面香车宝马向何流？

称戏子，绾情意，弄新愁。明日各人依旧稻粮谋。



六州歌头

蛩眠月落，欹枕满窗风。

秋已深，天将白，梦无踪。

意难通。

自鹤随人去，燕梁老，诗斋寂，城头换，庭前柳，愈葱葱。

霾里相逢，问这一湖水，馀下几盅？

看香车宝马，碌碌竟何终！

楼外青山，颂昌隆。



怕钻营久，齑尘惯，拆故业，撞新钟。

镜中色，徒消损，半从容。

望青空。

伫立栏杆湿，红日上，小楼东。

词笔瘦，歌扇冷，剩情衷。

遥念乡园旧老，嘱清愿、隔着千重。

使游子北顾，漫寻觅归鸿。

底事匆匆？



有感

岁底萧条树树弓，推愁助怨贱民风。

雁失行列千里路，雀得渊薮三尺空。

莫若运来寻翻转，或因时易变穷通。

捐罢鸿才捐鸿祚，万军阵内一骑冲。



凄凉犯

云愁雨乱，惊坐起，流光一霎照面。

甚多岐路，几番曲意，于今何怨？

旧游尽散，想明月、当时款款。

可记得、清谈论调，摇首出烟馆。

渐渐风波寂，自去孤山，四年如换。

盟鸥在否，念红衣、老来鱼雁。

且挂银钩，待来年、人谋天算。

怕匆匆、凉了心绪，空抱憾。



雨后新晴

久卧风雨撤，新阳傍树生。

猫出轮毂望，犬趋健步行。

人间一苑内，岁月两行凝。

欲海多争竞，归园若留情。

泛兮三十年，嗟乎无所成。

幸有石湖赏，篱下存芳名。

削笔搏刀剑，挫骨赋流形。

病加意遂远，时舛神以灵。

不必羡富贵，富贵羡清平。



鹧鸪天

风絮粘天落日横，登临欲啸忘挥形。

生涯跌宕终须惯，世路曲直且独行。



辞壮志，把闲情，萧萧乱木卷荒城。

十年一梦腰间剑，冷看笙歌奏太平。



无题

百死成盒月当空，心头万绪乱枪中。

士极夷乐焉思蜀，权步秦规为好龙。

南冠风摧亭前柳，北伐雨打帐外松。

收拾旧梦拼一笑，向谁吩咐阿房宫？



译词：Ashen cold—灰冷（佛多老爷之礼赞）

笑齿微言价几何？

等身利市自兹得。

身虽短小志似薄，

名共青山誉满河。

烽燧起自惊涛外，

碧血溅落沙场间。

扬帆远去幽胜境，

九死一生驻永年。

议程复启时将嬗，

魔君威势暗迭换。

黑塔崩坍始吾手，

邪眼重张无再又。

（采样：寰宇暗，山石冷，熔炉之火，灰白如冰。）



元日

辚辚车马瑟瑟风，楼影变幻霓灯中。

当时呼衣乘醉起，似笑眼前月明空。



无题

安非他命多巴胺，

帕罗西汀配盐酸。

铁阵森严偏攘袖，

碎鬼拥趸不招安。

曾问三生石上草，

忽然半世闷无端。

露白荒山风斜看，

酒童归去野鹤天。



自嘲

踯躅接彷徨，泽国雪浅深。

湖山锁日月，啼鸟结春心。

旧案翻如昨，前路觑未真。

萧萧车与马，落落六弦音。

欲向桃源访，鹤笑兼云嗔。

所求无一物，所念竟何寻。

明镜甩袖去，小红方掩门。

不如委运命，放荡逐肉身。

从此归乡路，点检数梅阴。



元月

午睡醒来愁未醒，十年沉潜梦栖迟。

却笑明月清风骨，负尽黄沙醉卧时。

烟华世里跑毒客，圣明门下吮墨虱。

残雪才惊南来燕，枝头又见春万丝。



夜闻召唤

一春颜色半忡忡，夜雨落花遍地风。

遥闻鸣佩灵铃响，万水千山正遭逢。



醉和明镜道人

百死钻营一缕灰，炙冷烟销却是非。

承情许它跌更进，卖笑谁见堕犹飞。

三山日落藏春晚，四壁光悬待我归。

搂起神态到云上，斜河荡漾半月微。



无题

十年游历半袭灰，世事不堪日月追。

细按新词花徒落，懒寻旧路燕惊飞。

春山有意随云去，垂柳无心与客归。

看了人间百般好，白玉楼上饮一杯？



春问

向疏晴日壶间坐，东君引路到湖中。

好花好色堪留醉，惊时惊春竟谁同。

国步伤残山凌乱，文心抖落水空濛。

若真明圣开新业，孤山鹤来闻一声。
    `,废名集:`
    无题

无奈春来事事哀，可怜衰鬓对明台。

不闻晨鸟千山梦，但见暮鸦一径霾。

胡马飞尘中原恨，黔驴换骨大将才。

许多故事成绝唱，米酒半坛且释怀？



无题

黑头不解春拍岸，梅花闲伴老来身。

孔门闭馆苹尖露，高僧开钵化外音。

烟波过尽眉不展，风骨独存意犹真。

可怜乘肩合肥女，一半红云一半嗔。



无题

劳形苦役年复年，槽中日月金银山。

梦里跳出三界外，榻上合眼不看天。



感遇

阳生朱楼春日骄，池泮青芜鸳鸯巢。

琴剑都疏空余响，生营不得与比高。

我主端持荣光照，谁人断拒富贵邀。

自古多见书生泪，烟花巷里盛名销。



自述

渔父摇出白云外，欸乃声中把酒听。

空山野鹤起残雪，曲径孤鸢下响晴。

旗背一方风物冷，门开三面水禅清。

实无纬世经天略，不必放竿渭水东。



感俄国歌曲

飞雁落雨鼓成风，一嗓幽微松林中。

坦克洪流千军进，镰刀旗帜百代隆。

国破山河续英脉，士死魂魄为鬼雄。

不见极光尽折转，兵出焉须卜吉凶。



无题

宿雨不绝晨鸟音，绿茵百转枕边人。

明日梦觉花可落，余生路远看未真。



清明

雨粘春光鸟试音，梦回前朝唤禁军。

雾锁三吴楼船隐，云吞百越牙帐深。

子推肉落绵山火，少卿书成汉室心。

多少英杰英魂逝，不尽长江长自喑。



自嘲

十年学剑意难通，昨日西楼废武功。

树树落花春近晚，张张笑面梦相逢。

钱塘潮举唐时月，西子柳摇宋地风。

削笔成刀搏一役，黄金台上谢恩公。



自嘲二

学文学理学难工，学儒学佛学不通。

学棋只知看一步，万仞悬崖向前冲。



无题

一念未落春将过，繁华乡内砍柴声。

人事荒疏三更后，江湖迷梦万灯中。

辞别顿感山寂寞，送远方知水长情。

若非百般嚣尘扰，落雁峰上第几程？



无题

一念未落春将过，繁华乡内砍柴声。

人事荒疏三更后，江湖迷梦万灯中。

辞别顿感山寂寞，送远方知水长情。

若非百般嚣尘扰，落雁峰上第几程？



自嘲三

怒辞佛面毁道行，本是岘子砍柴郎。

三十年来人间世，八千里路富贵乡。

冷眼高头马儿过，摇首宝袖月牙藏。

愤将腹中新填调，换做欲海烂皮囊。



绝句

鲈鱼新添酒，蝴蝶去年尘。

红尘泅渡客，清凉殿上人。



感人机大战

智虑森严旷世殊，脚踩卧龙笑凤雏。

万册经纶弹指阅，百步局态立马出。

黑白灵感有无处，是非电流纵横驱。

半着败走君莫叹，像素境外存真吾。



调笑令

归雁，归雁，故垒天高梦浅。

花瞋鸟怨春寒，灯黄月冷雨绵。

听取，听取，云外霓裳半曲。



鹧鸪天

病笑人穷智笑昏，荒城一梦过三春。

无边苦海干为敬，有限红尘患不均。



须妙手，盼仙军。何妨块垒点成金？

何妨共与春风老，吹到乡园如遇君。



鹧鸪天 寄沪上道友

总是风波意难平，欲添红烛小山重。

事多幻灭因生果，心自高凌雀笑鹏。



愁已半，夜将浓。天涯何处不相逢。

为君借得吴刚斧，守到云开看玲珑。
    `,无雪集:`
    新职即兴

鸟怯薄寒挂林间，楼拥细日几行烟。

焉得带剑机关场，不妨鼓舌楚汉前。

高士从来抛尘志，愚人亦有步云天。

此去初心千万里，初心带翼一线牵。



西湖其一

一带秋云迢递峰，几点画船自在风。

心中多少不平事，散入清波明灭中。



无题

路远风来知巷深，敝帚常恐不自珍。

且将千金不换志，来怼十年潦倒身。



寄洋哥

人生八九不如意，玉老田荒更不堪。

洋哥借我五百块，向天再借满一千。

青山朝吟渔父调，篝火夜醉太白篇。

放下经年忧心事，炭房徐吐两缕烟。



点绛唇

    甚矣吾归，乱红一瞥江南路。

    抱怀三楚，凭问沙间路。



    晏起推门，竹外谁幽独。

    谁相与，慢斟清露？耳热忽迟暮。



满江红

    缝里浮生，如花落、参差复起。

    诗梦冷、帚仙词稳，百年如是。

    眼底繁华风卷去，小楼明月当空意。

    莫搴帘、纵万户鸡啼，白也未？



    骑牛去，关山滞。

    驾鹤返，亭榭寂。

    问章台诸客，几成名利？

    顶戴昏昏车前土，摇尾切切眉间字。

    谁见了、铜雀与金屋，风流地？



如梦令

    夜半杯中明月，难认昔年高节。

    颜色恰枯荷，又被北风吹落。

    反侧，反侧，梦里若能酬和。



感怀


冬至既至雪未行，暗雨歇时忆平生。

遭际荒芜一地草，抱怀疏放满天星。

老鱼出水疑春早，新燕盘还待山青。

留得宝剑闻鸡舞，莫使孤臣泪心惊。



六州歌头

    层叠寒彻，是驻马分携。

    西湖晚，千山月，露当阶。

    恨犹缺。

    忆往昔风度，橘灯下，波粒象，电磁谱，腰间剑，厕中歌。

    莫笑年深，莫笑韶光迅，筑梦南柯。

    竹间长啸也，恁老却廉颇？

    独步钱塘，数风波。



    算年来事，人谋力，天不允，奈如何？

    高堂愿，坟头许，剩咨嗟。

    泪无多。

    把箧中诗赋，遗鼠齿，任消磨。

    强心意，空做缚，守心魔。

    遍地龙蛇齐舞，墙头草、留待谁折？

    帚仙曾由此，帝命入云车。

    胡不归耶？



为友作情诗一首

花羡佳人闭，燕比良辰飞。

携手人间路，风雨亦同归。

梦梅柳意永，思君红豆稀。

当年遗簪处，渐渐满芳菲。



无题

天赐风流骨，人间覆水舟。

进德智有拙，退耕力不周。

陷溺像素境，超然凌九秋。

亢龙虽有晦，驽马则无忧？

平生好舞剑，杯中斩蚩尤。

莫问身后事，空空不可留。

造化多舛厄，云散接风收。

不知明日我，更为何日愁。

何日无明日，万象共我俦。



错韵

地僻得天高一丈，沟深不压鸦阵轻。

藕非无肉泥中骨，人若有心座上春。

守拙岂因冯唐老，率性独揽大王风。

燕来我去恐同路，权向东风试乡音。



西湖其二

偶见斜曛挂林间，偶得浮生半日闲。

偶感醉后乾坤大，遍寻浅草一偈禅。



无题

陷构逐争到几时，匆匆不见杨柳枝。

可堪日月如轮转，眼底春秋与燕飞。

近卅风吹红烛泪，经年雨打绿蓑衣。

须知旧事槐间梦，何况来者无可追。
    `,哀秋集:`
   洞仙歌

浮生一梦，问何时归咏？纸上灯花镜中影。料时来、宝马谙尽春光，及运去、落日飘蓬无定。

记阿房一炬，垓下重围，夜鼓寒鸦几声应？且把酒调弦，慢诉衷肠，山门锁、流云一径。放眼底红尘丈千深，并扫入秋风，莫来相请。



拟辞职

马失前蹄复起迟，且温旧业固新知。

人生何处无风景，未必一槽终老食。



声声慢

床横树影，月下银钩，晨鸡破晓梦。乱整衣冠慵顾，积愁青镜。驱驰紫陌日上，日中天，日垂西泠。苦坐也，似泥僧、怒啸一声谁应？

厄难蹉跎难省，逋客泪、游丝只今不定。老子平生，问卜问医问病。都言死生事大，死而生、可谓化境？恨歇矣，看落木飞度藻井。



自况其一

鸟梦高枝虫儿噤，久坐窗前月满襟。

一身浩气积成病，二锅头酒伤了心。

念及春风来时路，送得秋雨入空林。

壮志贱作青楼调，吩咐韩白北抗金。



喝火令

恨别西湖水，来鞭北国风。绿蛾垂泪小桥东。家国三千里地，尽在梦魂中。

始怍岳王案，隔朝辨奸忠。将才能顶万书生。转眼烟消，转眼换王公。转眼夷来夷往，谁复皇汉宗？



浣溪沙

北望幽云十二州，王师磨剑又一秋。艳曲轻埋靖康耻，乱啁啾。

梦里钓鱼城下鼓，眼前伶仃洋上鸥。恨我中华何日复，盼金瓯。



忆王孙 大理文庙

廊阴坐念宋唐风，圣化无心道有松。五百年间梦大同。梦真龙，梦醒中华谁主宗？



遥致王钢兄弟一百字

十年如骓逝，虞兮奈若何。

格致一团屎，春秋入臼窠。

想我钻营苦，只今咨嗟多。

忆君一方纸，淡淡罗山河。

横眉笑竖子，搦笔种烟萝。

玉骨何纯净，侠风一快活。

子在陈时叹，佛坐树下思。

天涯莫念远，千里共月明。

唯乞多文章，谨祝永康宁。

相逢一杯酒，咏而归时情。



自况其二

回首往日萦纡路，检点年来落魄身。

岳王坟前暮云乱，欲昭天日共一心。



九月九日忆毒瘤兄弟

闲窗花落两无知，意逐秋风著雨迟。

啸聚天辉鸡鸣处，开拔夜魇月升时。

何惜万死轻一笑，且放三生满十杯。

人世枯荣休来问，看了温酒超神归。



病中自况

曾驭苍龙落叶刀，万里长云意矜骄。

人间世里不我惯，太液池边待魂招。

暗雨有怨泣凋树，高鹤无心落碧霄。

须教冰心尽作水，始信玉壶火上烧。 
    `,春日集:`
   喝火令

堕落街头柳，蓝田梦里花。
甚萧凋岁暮还家。
天命已成悲唱，落日入烟霞。

冷眼千山老，横眉半月斜。
藉谁分落寞天涯？
酒也无多，酒也谅人些。
酒也荡然无味，只剩下咨嗟。



无题

搴起画帘几洞天，晴曦初照紫陌间。

欲寻故老皆高卧，不若新茶伴细喧。

昔日去乡尊前泪，今朝下马石外烟。

功名已是槐边梦，梦到醒时月色寒。



浣溪沙

几处黄沙几处风，
新来宿醉不由衷，
堪怜素面半花红。

移木若真能立信，
拾鞋未必便成功。
人间到底太匆匆。



西江月

一望晴川高月，再斟关外浓醅。
更深扶醉各家回，试问何间谶纬。

细数神仙风味，堪寻梦里天随。
明朝西子雪初煨，正好鲈鱼一尾。



鹊桥仙

雕栏玉砌，蟠桃翠柏，黄鹤去时痕迹。
气吞云梦峙中天，正对着、江山入画。

揽虹阁里，瞰川亭下，道是千秋气脉。
谪仙先自不吟诗，倩谁写、西楼寒碧？



过江城有感

去年山城归，今日江城客。
江山渐似锦，朋党不复多。
樱下素颜少，楼外尘霾遮。
伦常无人省，媚词滥电波。
鹜趋圆方孔，鲸吞饕餮锅。
同窗竟陌路，同床几贞洁？
朱门过一年，炕头年一过。
文人贵格致，格致舞文墨。
逆流寻真理，悖天粉靡乐。
不知海峡外，方乃汉唐脉。
今我歌一曲，何惧黑头落？
且看日西沉，且看中天月！



喝火令

素帐荧灯彻，金樽玉液平。
晓来骑射御林东。
傍日一行归雁，芳草马蹄轻。

撼岳三通鼓，惊风一碗兵。
梦中曾到汉家营。
梦也无多，梦也甚飘零。
梦也有时不做，愁与月亏盈。



醉花阴

忘了几朝梅鹤令，往事般般映。
渐喜雨沾襟，坐啸空林，四面风初定。

人间几度耽流景，藉洞箫吹醒。
待鹊上低檐，翠浪排窗，莫教银钩冷。



怀人

又是钱塘三月天，春潮淡宕眉眼间。
慢斟一碗竹青酒，小坐千年梅鹤轩。
鸟怯轻寒喑旧梦，月随细雾入空山。
若问赏花人何在，花亦羞得不开颜。



点绛唇

试药升仙，人间谁道堪淹滞？

百年如掷，几度烽烟事。



隔代呼携，玉老田荒矣。

成追忆，六朝陈迹，杨柳垂新碧。



无题

东风愁过灞岸枝，柳笑花讥我不知。

平生气运消磨尽，只余肩上一袋诗。



无题

搖轡作長征，路遠且歲凶。

南浦餞別酒，長亭側帽風。

鴻才莫用盡，壯志宜合衷。

他日若復見，明月在青空。



中山陵

北来寒送清明晓，细雨如雾罩钟山。

阶沿百岁开天梦，松挺千秋易帜篇。

薄祚一生尽忠骨，厚造三民启新元。

青鸟为眼云为驾，遥望故国海一边。



扬州慢

花事都荒，麝香些许，雨疏雨驻无言。

怕春深岁老，慢把酒调弦。

渐斜日、萧然半壁，看云来去，共影凭栏。

过平芜、潋滟鳞波，迟暮江南。



六年一梦，算生涯、不似前般。

是病急投医，心灰问药，兵败操拳。

怎奈旧游都散，沉舟侧、过尽千帆。

问江东犀甲，何时图雪昭天？



无题

且向金缸洒玉醅，龙台百战几人回？

亭天浩气充山野，蔽日黄沙下曲湄。

碧血倘能延国运，黄花忽梦到深帏。

可怜日日凭栏处，笼鸟不知唤阿谁？



西湖还题



其一

万橹流光春入浪，一爿飞榭草初长。

定有钱岳二王在，才教游子不断肠。



其二

飞来春色满轩窗，远去白云带雁行。

新阳湖畔笙歌骤，故绪桥边灞岸长。

片刻清眠思蝶梦，一年风致坠花光。

遥望孤山归隐地，半生泥泞入沧浪。 
    `,归来集:`
    天仙子 次韵旧作

衔杯自叹梦难圆，天涯何处话婵娟？乱里操戈猛成鬼。黄泉路，佛道禅，破碎支离又一年。
晏起谁人苦揭帘？镜中损去是朱颜。攘攘熙熙偷一闲。诗不就，词难填，明夏西湖赏田田。



少年游

晴园小雪树头钗，离梦两无猜。香炉添火，明几摆酒，棋子落泥台。

清谈上溯开元事，化鹤到蓬莱。山外白云，村前流水，随处是君怀。



暗香

梨花吹霰，伴月白鸡远，晨来小院。墙外熹微，渐渐穿帘到睡面。怕是西楼梦好，和燕燕，断桥初见。待惊起，童子相呼，山外雪落遍。

初见。蛾眉倩。映流水青山，丹心一片。离宫幽殿，魂逐兰舟系冰泮。别后天涯两地，各为饮，凭说聚散。采薇去，溪日暖，春风来看。



谒金门

想燕燕，绿杨阴里重见。朔漠黄风吹紫练，石头城外宴。楼头娇莺泪泫，桃花沾水媚面。别后千山休点检，明月已照遍。



志怀

一凭剩勇过江东，岭上桃花别样红。

塞外寒烟扶柳立，南冠紫雾沾水生。
倩谁买醉合衣睡，携子乘风傍日兴。
此世几遭廿五岁，且将杯酒进功名。



浣溪沙

拍岸黄涛侧帽风，经年旧恨悄无踪，凭栏人在海天中。
曾是孤山花下客，今犹板嶂梦边鸿。南冠意绪与谁同？



莺啼序 寄友人

春来点红拂绿，赏樱吴楚地。
算心动、盈岁交游，锦瑟流水心迹。
少年路、声光酒色，鱼龙宝马相替。
是当时，一曲云门，两厢心意。

红叶题书，青鸟唱晚，入云千万里。
酒当尽、含笑南冠，玉龙金缕应记。
劝君歌、阳春白雪，遍吹起、西湖寒碧。
莫蒙尘，踏浪追虹，潮平雨霁。

红尘休问，挂笏封候，新人演旧戏。
狂啸也、盟鸥都在，五柳庭前，春色三分，百年如寄。
清凉殿外，平芜顿老，凤凰亭上吹箫女，把纤腰，照入花丛立。
定心笃志，他年火箭抟空，鸿蒙略展铁翼。

春秋代序，日月分辉，九畹稍游历。
数嘉美、梅竹靓影，虎豹雄图，蝶梦翻墙，松风穿隙。
流年不见，穹庐千转，生来何息岂长郁，待晴天，向日花开季。
几世第四桥边，明月半轮，清茶初沏。



点绛唇

踏浪轻踪，英雄自古无归路。忘川泅渡，醉里拈花处。
几世三生，零落如丝缕。一抔土，一行白鹭，一带桃花树。



无题

扑窗暗雨如人语，话到青衫染泪时。
醉后管它千尺浪，尊前剩有一句诗。
浮沉总是江湖客，肥瘦不过杨柳枝。
伶仃洋里何须叹，岳王庙前已自知。



过西泠

四照葱茏曲径深，壁题苍劲叶含熏。
碧树高低轻莺闹，湖山远近老妪吟。
肯随青云先移步，不教东风滞归心。
小坐花间无一语，只听流水送光阴。



或许


偷生戏里万年龟，闻道王孙归不归？
一夜蛙声满池淖，半床月影照葳蕤。
追求还须本身觅，失意难免他人随。
城门前头喋血处，坦克来去又几回？



虞美人

层林暗暗春波绿，竹下初相遇。倦听流水送花期，最是画中人去恨晨鸡。
家山已远南冠意，载酒烟波里。湖心亭上看茶时，拟共帚仙骑鹤到瑶池。



减字木兰花

云垂溽热，倦卷珠帘欹枕卧。
梦绕兰州，明月荒山照客愁。

窗前鸟落，酒尽诗残春又过。
白发封侯，道是红尘第几流？



六州歌头

疏星瘦月，万叶动凄凉。忽凝睇，花无力，酒翻肠。影成双。已自多风雨，南冠客，西湖水，故园泪，尽尘掩，入微茫。抆血独行，宝剑腰间挂，几过余杭。

暗想当年事，酲醉卧高堂。草寂川长，雁三行。小山庭院，槐阴下，棋子落，最悠扬。论古今，笑神鬼，道家常。故人亡。舛讹如云布，靡靡者，乱穿膛。终四载，如梦影，恨难偿。幸有小红依傍，寄篱下、稍觅稻粮。念乡国父老，恻落魄儿郎。
何日高翔？



即兴三首



一

我落人中然自在，本是天上逍遥仙。

烹茶煮雪松林赋，把酒吞云凤凰篇。

笑看浮萍因风动，白眼猢狲为食攀。

自从奥斯维辛后，写诗何曾不野蛮！

二

玉皇山上听雨眠，人间意兴半阑珊。

偶通天眼觑三界，常逢闯将过五关。

炼金炉边白玉殿，水帘洞外花果山。

些个肖小不自量，不识爷是万三千。

三

太液池上众神仙，天安门下设玄关。

甲午败绩一甲子，二战凯旋七十年。

酒肉林里升平乐，坦克轮下谁鸣冤？

若把西湖比西子，不如同去试衣间。



相见欢 黑金属

灼岩沸铁熔金，炼魂音。
万骑银蛇摇尾过波心。

鼓声定，六弦静，夜沉沉。
蓦地不知身是眼中人。



光明引

期冀光华不见火，

静待万道朝阳射。

冷月清辉斜入目，

扬手戚戚向碧落。



夜色如瀑倾前路，

星光穿云独照我。

亦步亦趋恒久远，

群狼奔驰在吾侧。



眼中满月白如死，
虬枝纷乱攫天际。

兽铤夤夜霜风度，

喁喁低吟我姓字。



振翅飞越夜暗暗，

肝肠寸断赴黄泉。

漆漆未曾睹天日，

垂死世界渐无感。



惶惶永夜遗世立，

洞口无神通地狱。

眼见楼门徐升起，

步入亡者之领域。

翳昧如云映入目，

和谐曲中伤残舞。



且随阵风入夜深，

拟向万象立吾身。

灵歌穿耳唤我心，

伴我蛇行一霾阴。

夜神双目长颙望，

灵魂轻舞落红尘。



玉轮清，映我眸。

期冀光华不见火，

静待万道朝阳射。

生命之光粲然时，

振臂熠熠向碧落。



雨霖铃

先生孤介，病琴分酒，冷炙吞月。
华阴露重难觅，西宫旧宴，南山游冶。
已惯蒙尘世路，并刀破霜雪。
梦既死、何用挥形，且就云门舞香榭。

人间几度风流夜，续前缘、锦字凉初彻。
钱塘一舸摇浪，环佩响、数星明灭。
带翼幽情，争奈风高水长天阔。
雁不到、衣带尤宽，日日思量着。



如梦令

绿了几厢情愿，黄了几编书卷。
高树伴寒蝉，梦里泪人谁伴？
云散，云散，莫误鹊桥一面。



偶得

惶惶劳力复劳心，偶梦儿童笑未真。
偶就黄花成痛饮，偶隔万水试仙音。
偶约发小开黑夜，偶上孤山啸绿筠。
偶打烟灰一寸泪，偶思画下四座春。
偶逢群儒分人血，偶见苍蝇噬儒身。
偶向神灵求好卦，偶凭只手覆红尘。
偶闻伊笑同一笑，遂道人间是可亲。



无题

将军百战力不怠，大王城头弯刀旗。
生死自古依命数，胜败兵家未可期。
退耕骐骥同驴唤，卸甲青龙与虫齐。
日日窗前山远近，年年塔下月高低。
宝剑徒悬光无力，银钩空挂尘有衣。
小园自养升天犬，黄鹂会鸣阆苑词。
百般故事不成阅，千树桃花人只一。
名来利往倏为幻，酒肉相交尽似齑。
不若推心二三士，剪烛共话到晨鸡。
文学白石清凉骨，第四桥边有梅知。
武尊岳王冲冠怒，西子湖畔立宗祠。
廿五不知世路险，犹效少年狂不羁。
从此青天共一笑，莫教竖子道我痴。


解连环



故人重见，清风认我，少年颜面。忆往事，刀塔何欺，翘课与重修，毁人不倦。算稳平生，归命数，人随天愿。纵杏坛众老，布道今朝，百口难辩。
且就淡啤饮怨，是江南一梦，珠网三面。趁醉填，诗稳词平，数明日黄花，他山石片。点检西风，大鸡腿，凉了几串。独归去，无声冷月，栏杆拍遍。



将进烟



寂寞城西山头草，斜阳低照陌上尘。
伤心年少徒三叹，摇首平生第一根。
借火楼深天不管，分烟巷窄鬼难寻。
红梅浸雪犹含笑，真龙卧田岂无鳞？
气壮同吹八碗酒，才高独进半壶春。

一心敬你章台乐，四季红来魏阙临。

七巧端时星河灿，八仙到后便超神。
吞云共遣千秋事，架雾放逐百岁身。

塞外黄沙空缱绻，江南细雨小横陈。

遮风曾道兄和弟，酒散谁识肉与林。

星火炽当舟顺水，指尖烫道车滞云。

昔年垮掉人何在，没入红尘不复闻。



浣溪沙 桂香


不爱烟华落世间，
鹅黄偏在市桥边，
白云共与荡悠然。

一夜西风收艳骨，
满城秋雨带香甜。
几时入梦到婵娟？



喝火令



旧曲浑翻遍，初心未觅寻。夺魂双踩断弦音。下马石边秋风冷，曲径尽苔侵。
人去江湖老，茶凉夜色深。剪灯拭剑复孤吟。也罢人老，也罢情浅深，也罢一一远去。只是泪沾襟。



又

肇有鸿蒙辟，欻欻亿万年。自传荧惑几朝天。水火毓精涵气，何啻在人间。
漠漠巉岩阒，熙熙地府喧。意图他日远乔迁？怕是风高，怕是梦魂颠，
怕是亦怀斯志，相遇月桥边。



苏幕遮

水纹青，山色杳。柳岸低平，远近楼船悄。且放流云追逝鸟。点浪蜻蜓，三两围兰桡。
岁无声，人静好。风景年来，梦与青丝老。本是昆仑山上草。误入尘寰，心迹谁知了？



减字木兰花

第一推动，七色光悬极宴盛。
第二清流，月色横烟两处愁。
第三世界，地远天高情更怯。
最是分携，金谷而今人迹绝。



喝火令

无那轻薄久，楚女抛掷时。不和俗士论闲机。梦死弦崩烟尽，到处乱凄迷。
老驴力不怠，恐难抵山西。人间别久不成悲。谁与共舞，谁与赴花期，谁与点检秋风，拾掇亚门枝？



暗香

凛冬溘至，看老鱼入浪，重云留渍。一枕陆离，梦罢临歧梦生死。生死元来事大，应算稳、炎凉疏契。最可笑、饮恨牵情，光景漫虚掷。

惊起，月满地。料鹤度水寒，木谢烟霁。遍翻旧字，冲雪披霜惯相忆。扶醉城南引啸，君亦笑、清欢天地。逐客驾、青女泪，一时凝寂。



寻酒吧不遇

结课休来问，起意到下沙。
彩云飞暮鸟，芳草梦昔嘉。
路远人不至，巷深酒两家。
只言时未到，夜色尚浮夸。



捣练子 两仪和干也

天欲雪，剑留人。只为檀郎拭血痕。来世情仇君莫问，一夕同醉笑红尘。



画堂春

浮生走马袖生风，盟鸥子鹤无踪。卧槽泥马谢恩公，根正苗红。
犀甲三千何在，六军尚滞云中。小红细剪入时工，心字能重？



调笑令 思乡

沙漏，沙漏，锁住残阳影瘦。山山自在呼携，莺莺相与转折。折转，折转，棋子闲敲老砚。



贺新郎

为阳洼窑远亲先祖父杨清汉记。东洋留学生，初学法学，后事教育，老归乡梓。旅日期间加入同盟会，曾与黄兴等人合影。清廉耿介，乐善好施，诗书才学俱有大成。有“两袖清风人不信，一身辛苦我独知”之联。

一去东瀛路。正风华、拟师夷制，振兴王土。砥志精研穷法理，岂意虬蛇割据。当革鼎、同盟贤聚。誓以三民开天地，使九州再造蒙清绪。龙庭暗，兼风雨。
幸逢十岁无兵黩。化春风，杏坛播种，育人无数。为俟河清其有极？夫子曾言归欤。三碗饭、两颗蛋足。乡里情长烟一袋，况避秦何止桃花渡？千秋事，慢吩咐。



好事近 bann

死嗓半婴吟，自有标格清迥。木剑泥兵铁阵，守王冠一顶。
人间凉薄古今同，末世暗流景。甩起一头怒发，乱千山月影。



忆王孙

小红棉袄雪初消，醉笑眉山入月桥。一别秋风第几朝？
水迢迢，明日黄花隔梦娇。


声声慢

龙城运脉，虎落飞沙，将军百战气魄。
帐外寒烟清角，笑谈分炙。
银钩醉卧夜雪，莫负它、壮怀千尺。
铁阵下，万军中、放教死生天借。

望眼平林如画，争似我、青天振衣挥戟。
碧血随风，点染故山老柏。
佳人下帘颙望，绣春衫、别泪暗积。
落日里，两两燕、昨日巷陌。



浣溪沙

延步芙蕖四面风，王权代谢已无踪，盟鸥矫翼并从容。
剩把余身抛暗世，肯将残笑对苍龙。当初何必到隆中？



无题

残荷碎雨落魄天，侧帽青云共一帆。
词章难解鲈鱼味，琴瑟平分夜露寒。
壮志消磨将进酒，鸿图不再且加餐。
人间世里不我惯，风尘恶处坐听禅。



蝶恋花

淫雨轻飙寒意骤。
落木萧萧，几点黄花瘦。
满目枯荷如铁锈，小楼灯火阑珊后。

蓦自披衣幽坐久。
浮世情怀，一半风吹走。
一半高悬参北斗，忽闻川上西风吼。



八声甘州

把一团浩气放胸间，款款入烟华。
换平生书剑，城南买酒，梦里胡笳。
天数孤高难问，廿载漏中沙。
遥想当年志，铁树生花。

何意穷游南北，只是心未定，愿逐星槎。
借春风妙笔，慢煮雪烹茶。
且安之、细营生计，待他年、儿女共分瓜。
阳关远、雁行回转，催我还家。



汉宫春 lacrimosa现场

雨乱云狂，顶西风十里，沪上来寻。
燃情廿五，四度涉远光临。
霓灯灿烂，照玄衣、水袖山襟。
乘醉看、蟠龙舞凤，晨曦初撒空林。

玉落银盘微响，伴晴溪脆浪，古木流阴。
俄而万钧扫地，炼日穿针。
人间一瞥，是孤清、泪眼伤心。
应记省、槐宫前度，仙歌妙处长喑。



清平乐

一年辛苦，簌簌眉尖土。
夜雨湿窗光陆陆，到处丹巾玉树。

遥闻驯鹿呦呦，童心袜里能留？
炉上梅青竹酒，人间自在风流。
    `,机变集:`
    百鬼夜行



般若

为君别恋为君死，人间别久不成悲。
野草因夺牡丹色，玉碎石沉又何惜？



骨女

贫贱夫妻百岁少，金玉良盟一夕多。
已把旧情了新恨，红颜白骨轻轻说。



酒吞童子

喋血唯吞处女泪，青丝善掩妖魔身。
醉里不知神兵至，一剑封喉谢世人。



雪女

霰雪纷纷欲夺魂，天涯尽处不归人。
人鬼本非同舟渡，弑君岂为情浅深。



杀生石

曾扮红颜魅王土，亦作顽石祸众生。

一朝身碎五毒散，四海皆为唱清平。



光电情

神州一梦越千年，光电传情弹指间。

为继绝学兼济世，因寻奥义步峰巅。

春风四载常如沐，秋月半轮竟可圆。

逐日岂独凭夸父，山魂海魄复开元。



西湖重题

白堤绿水映天光，半湖薰风送画舫。
粉汗轻抛麴尘梦，罗袜飞蹈柳叶乡。
欲凭只手生风雨，难借寸心寄愁肠。
想来刘郎重到处，清欢不必问元芳。



暗香 友人寿

槐乡归处，正千帆去也，美人迟暮。往事无端，独自夜凉甚情绪。记得城南把酒，都认作，拚心俦侣。竟东翥，两地营营，遽几岁风雨。
凝伫，星河路。是宿命难寻， 梅开二度。长安宜住，纵雄关漫道无数。只恐乡国梦远，待寄与，相思犹阻。春归后，应惜取，一花一木。



法博激光

岂无揭天拔石力，本是昆仑山下人。
三星耿耿凭空去，一剑潇潇划海沉。
黄卷青灯虽得道，迷金醉纸竟失群。
生涯已自多风雨，温酒余音谢超神。



回乡偶题

平生负债诗酒茶，零落三吴到帝家。
朝露平江空锁梦，晚蝉高树尽飞花。
江湖半是争逐客，朋辈忽传各天涯。
摇首红尘拼一醉，当时月色与星槎。



情诗一首

第一要闭关，摈却狂与狷。
溪流相交会，根柢共盘旋。
昔时勤亦敏，笃志步先贤。
反观年来我，切切逐烟岚。
画皮失真爱，蜃景隔市廛。
日日约走你，王孙不归还。
白玉楼未到，鸡犬俱升天。
锦囊锁一世，道法自天然。
雄才通三界，奇策际云寰。
笑居上流末，游戏下江南。
青龙抬头日，可续前世缘？



回岘子老院

人间别久泪成书，草阵蛛丝又盈门。
老树昏鸦哭浪子，绿窗新燕怯人伦。
凭说聚散生金谷，怎奈生死越三春。
平川焉得驭宝马，永夜擎灯过昆仑。



西湖再题

压堤白露锁画船，一片秋声入鸣蝉。
湖天黯黯歌吹寂，柳叶潇潇蝶翼翻。
寄意前生孤山鹤，难寻来世篱下禅。
稻粮难觅居不易，半年风雨到尊前。



自况

樊笼旷日如狼虎，撇尽清流向蜃楼。
梦涌黄河千层浪，犹记垮掉路边愁？



思姗

红衣渐随秋风远，山城无处不销魂。
相思难抵云中雁，牵手已是梦中人。



重阳感怀

一点秋风万叶愁，恼人风景怕登楼。
湖山长负功名客，诗酒不因冷落酬。
此际但能多营计，平生岂止为封侯。
从今旧梦和云散，日日清风照水流。



公交车上即兴友人寿

犹记那年初相遇，红颜笑对少年郎。
京杭运河若无阻，红叶题诗友谊长。



仙人寿

偶念当时雨，君笑我狂狷。
敌法出支配，小黑入血泉。
摇得来妹纸，喝不下阳关。
夜寒风欲紧，匆匆又一年。



鹤冲天 次韵柳永

一觥满上，莫对西南望。山外复青山，风何向？醉看龙蛇舞，冷笑芦花荡。年来思得丧。洗尽轻狂，进马自先飞相。

窗前树影，几度莺屏燕障。一夜与秋亡，谁寻访？自是门前各扫，各家雪，各欢畅。平生赊一饷。剩有君怀，卧把云门轻唱。



东风第一枝

漠漠垂烟，熏熏坠日，归心忽抵银月。酒壶浅挂平生，鱼书静邀夤夜。床头欹枕，旋生死，几重结界。是琐窗深院吟魂，独抱星天飞雪。 出六道、剑心抆血，分五色，柔肠泣决。太极图里独行，两仪弦上一跃。依约竹下，有檀郎，浅窥珠箔。恁料得、细沥冰刀，难写心字两叶。



圣诞

未必看透便是真，未必祸去福临门。
日日白眼百千遍，夜夜青楼倾一身。
人面桃花隔梦见，乌云黄日廉价春。
若问春去春何在，不如自问瘦几斤。



又

百米长鲸穿耳过，此生合是落魄春。
朱门自有松竹酒，蓬庐不过磨驴神。
御柳淡扫功名客，粪池暖照屌丝身。
胯下当时虽三尺，他年海魄壮千寻。



又

百米长鲸穿耳过，此生合是落魄春。
朱门自有松竹酒，蓬庐不过磨驴神。
御柳淡扫功名客，粪池暖照屌丝身。
胯下当时虽三尺，他年海魄壮千寻。



又

指点江山今何在，甲子六十一升平。
东南礁侧风波变，西北界边狼烟行。
抬眼嫦娥新得宠，耳闻燕赵久尘蒙。
海峡轻划中国梦，百年或能开光明。



想

想对春花献秋月，想由无物索真情。

想来事事皆虚妄，不如绕道南山行。



午后

开宗明义第一章，不惮日日纵恣狂。

玉肱新笋淡淡彩， 明眸旧竹清清妆。
照水芙蓉迎笑面，扶风蝴蝶绕轩窗。
容与平生复能几，且将哀愁付花光。



致姗

最是寒去日忽长，枯木未死人未亡。

些个闲情装酒袋，一缕春风入诗囊。



沁园春

竹抱松怀，触目十年，底事嗟吁？记平川擎炬，空山乂草，无邪童梦，毕竟奢娱。铁柱石墙，顽童劣主，跋扈一时孰不服？杏坛内，纵匣床虎凳，舍命争逐。

交亲散去如云，到此际、相知几人余？看同窗戏子，技惊四座；烟枪酒袋，声震一隅。阡陌拾荒，章台走马，壮志当时共衔壶。十年后，设群贤再会，谁笑谁哭？



如梦令

一梦而今何处，空剩幽禽半树。梦醒病难医，岂在一朝一暮。留住，留住，门外彩云无数。



蝶恋花

门外千山如涌浪。意尽尊前，一半浮夸样。廛市烟华今照亮，梁间燕子曾疏放。

些个情怀愁惨状。几度春风，吹绿芦花荡。愿与帚仙松下唱，那堪鹤去梅花忘。



无题

自从花谢花飞后，几重绿叶为花红。
青山系马华盖去，紫日寻梅鹤声中。
斗米若夺五味腹，秋水难得寂寞春。
高山流水如云散，流水高山如燕同。



志梦

最当甲子两重天，红日平江无处还。

夸父追逐竟何去？钟馗占道几梦延？
打牌声里云烟散，沉舟侧畔又一年。
西湖自是风流处，西溪依旧堪流连。



西湖又题

烟波冥渺锁流光，回首青山掷淹狂。
驴友一夕花下客，船工几点水中舫。
若无淬火出炼狱，何来玩笑滞天堂？
前事浮沉君莫问，苏堤依旧忆刘郎。



陌上花 致姗

魂销两处，轻莺明燕、夏来情事。寂寞湖山，望眼断桥留迹。别来困顿无心算，一剪熏风吹碧。是钱塘旧梦，嘉陵江畔，待重逢日。

记伊来时候，悠游吴越，倒凤颠鸾心意。郁郁盆栽，耿耿到今相忆。千帆看取君飞笑，孤馆清凉一季。有檀郎，夜夜当歌思忖，恋君一世。



醉花阴

一夏熏风当快意，几处莺啼起。愿把酒凭风，暖照人间，明月青云寄。

一头失意风吹去，淡定眠此季。若检点秋风，落叶堆愁，肠断谁人记？



鹧鸪天

落魄清明捱到今，病梅久未沐春霖。举杯莫问诗中鬼，扬袖犹怜梦里人。

风带恨，雨衔云。西湖落日数流银。玉清榻下清凉枕，睡去安知浮与沉？



洞仙歌

凭花倩笑，已留幽情住。别后烟波送春去。雨丝丝、忽近还远形容，风片片、乍暖尤寒意绪。叹湖山气魄，龙马精神，醉里玄谈醒时误。

籍一枕清凉，好梦青云，舒卷处、佳媛献舞。有日月边山下逡巡，看滚滚红尘，可齐肩欤？



蝶恋花

垂碧香帷人去后，几片熏风，吹起鳞波皱。小院秋千花依旧，记得当日欢歌骤。
浅醉挑灯穿细柳，电话他乡，一二飘蓬友。举剑轻分星月瘦，黄粱梦外鸡声昼。



喝火令

一望江南水，浮生几梦留？断桥横跨百年愁。想是寺寒山冷，白眼看封候。前度悠游后，轻狂锁小楼。

待君心付与风流。世上孤清，也不过斗牛。正点滴潇湘泪，滴尽又凝眸。



临别

一橹残阳小，

荷叶满汀洲。

渐渐满湖水，

摇起许多愁。



自况

不为尘泥动真心，只合烟水送流云。

而今百味临岐泪，当日千枝寂寞春。

岂意浮沉如作戏，终识淡宕是为人。

偶开天眼通三世，便向荒山尽处寻。



沁园春

半壁斜阳，一枕香云，午睡觉时。向燕明莺暖，树高蝉切，韶华两处，浅淡相知。都会三吴，钱塘一梦，重举玉龙尤未迟。朱楼外，小艇逐星月，思与云齐。

青牛文梓难敌，底事草尖沙上骤驰？笑三星殿上，诸仙失措，凤池亭外，鸡犬争食。偶落尘寰，摸爬滚打，铜臭流言两不识。从今后，往事休再问，且自修持。



长相思

风一丝，雨一丝。打落梨花碎一池，窗前柳一枝。

笑侬痴，笑我痴。九曲阑干泪欲湿，相思有梦知。



调笑令

相忆，无力，雁脚斜飞泪字。秋千摇落斜阳，银钩深锁花事。心迹，难寄，听罢平林鹤唳。



满江红

逋客红尘，挥不去、许多风雨。孤馆闭、旧书尘掩，故人难遇。日暮千山斜照里，朱楼百尺登临处。正寂寂、看万户炊烟，成丝缕。

春风笔，明月句。折柳意，芊芊絮。握西湖寒碧，蜜烛难续。梦绕青芜成两段，拍堤白浪和尘土。归来后、待走马章台，休辜负。



蝶恋花

一念成尘吟啸后。雾锁嘉陵，万户灯如豆。入眼三川渔火骤，忧思零落人依旧。

愿把浮生拼一宿。逋客红尘，梦剪黄花瘦。偶问青天犹垂佑？灵歌暂向清魂奏。



醉花阴

万叶夕熏人未定，向晚听钟磬。是遗恨湖山，逸彩芳云，心事归清净。

千秋大梦何年醒？暗暗尘寰冷。待煮雪听箫，折柳逢君，一片风流影。



如梦令

往事轻轻滑过，梦里城南旧客。如纸是人情，岁月无声吹破。零落，零落，淡了当初颜色。
    `,拭镜集:`
初雪

银针动地起，寒意沥沥回。

背井飘摇久，招魂转宕迟。

有情翻作泪，无处不清白。

忽教车轮继，旋成笔下词。



暗香

流飔回霰，入楼头木杪，千家庭院。虎落冰销，溅起萤光照红面。懒向西厢索句，呵玉屑，伊人如见。裂竹响，斧烂流年，芳草渐寻遍。

如见。绿云倩。正簌漉扑窗，素颜一片。梦驰越殿，解缆湖心雪亭泮。惆怅冰肌玉骨，交臂饮，幽欢离散。晏起处，晴日暖，侧帘偷看。



指环王国服停运

长须杜林今已矣，夏尔烟水渐凄迷。

侧帽布雷砖石冷，策马萝林草树齐。

惘费心机刀剑场，虚掷光景少年时。

至今二十一号厅，长歌当哭无人识。



杂兴

深山变神鬼，歧路多悲风。

狐魅通三穴，蛇行绕九峰。

复褥寻日颓，单车坐云生。

极宴娱心意，醉客问东城。

岂为名缰缚，但因利锁同。

瀛寰皮影后，宇宙龟背承。

服食药所误，秉烛叹孤穷。

不如乘槎去，相见月波中。



无题

青空一际过眉梢，山前山后雪未消。

梦远平川梨花笑，身轻曲院秋千摇。

聊寄狂形逐兽豸，不变幽情侍词藻。

如何情深便是泪，偶见苦海泛微涛。



敌法师

结发当年燕赵客，弯刀如月落潭渊。

削魔如水法师颤，幻影凭风草木迁。

绿林狼嗥三刻后，天灾首落一念间。

待到狂战蝴蝶在，挂机超神泉水边。



聚会即事

师恩悬盅酒，欢聚橘灯前。

挥形末世舞，心迹隔三山。



莺啼序

寻花更兼问柳，众亲皆退避。

冷风笑、灯底黄昏，远上斜日无稽。

晚归处，凄凄惨惨，星光似醉寒烟霁。

恨无声，抛尽情丝，几回独自。

　　

廿载荒山，故事忘却，落花流水意。

踏歌舞、烛影摇红，素颜和梦堆砌。

起幽思、寻寻觅觅，断桥下、轻鸥抬翼。

是清欢，衔盏流言，少年心计。

　　

凭说聚散，点检形骸，后来又底事？

按玉龙、凤凰台上，绕指青烟，断续吟魂，潜虬交替。

扑扑乳燕，梁间辗转，谁知明日分飞去，看人间、几度春秋易。

悲欢未稳，阶前月满中天，炮竹朵朵着迹。

　　

流云意绪，踏雪情怀，渐渐成记忆。

哪里卖、销忧萱草，岁月如歌，湖海扬帆，汴梁佳地。

鱼书破浪，扣扣频响，相知朋友倾笑语，记青春、疯傻皆相宜。

而今推塔争逐，呵雪裁冰，淡然两笔。



戏作



一

人渐酲也酒已空，去时何似来时同。

他人说我是菜逼，谁人懂我是真龙。



二

偶送招魂雨，偶拼落魄词。

偶闻隔帘笑，欲醉非醉时。



一剪梅

帐下蠡尘锁玉龙。

穿耳胡笳，动地霜风。

拟将碧血换三州，冠盖纠纷，紫陌迭重。


北望家山何日同？

清角烟消，虎落冰溶。

鱼书竟劝莫言兵，当日后庭，两处遭逢。



点绛唇

永夜如牢，银灯浅照云中镜。围城心境，渐渐谁相并。逐日争流，时蹇合知命。般般映，流年寂静，知止而后定。



为友寿

一椽曾把三生笑，廿岁而今半点头。

剩把浮名换低唱，肯为木蠹坐方舟。

拔剑何必闻鸡舞，欲死安待上姜钩。

且举大白成痛饮，管他春夏与冬秋。



无题

齐宴耽安乐，荒城岂莫为？

如影遁形迹，如形竟采薇。



寄明镜道友

了去无痕迹，重来亦盍为？

平川多落雁，斜汉起幽辉。

斗室悲清迥，复牍满玄灰。

提携城南客，夜来共一杯？



谒金门

梁间燕，岁岁而今又见。烟树排川云如练，前村昨日宴。阶下层芜露泫，绿窗隔照人面。往事初心羞点检，向沙间寻遍。



点绛唇

卜归口占谢神恩并次韵白石

一是随心，今朝盍举大白去。思君楚苦，梦尽江南雨。道海无边，法喜随春住。君还处，侬心如古，红袖江边舞。



无闷

缘起西栅，影度官桥，仿佛绿云初见。魂梦绕千番，他乡一面。点乱西湖愁水，点不动，是君心一片。长亭有别，孤山无鹤，胡女心愿。

光景，遽如换。待归省时节，落红溪泮。误几度归帆，村前凝盼。短信去如投海，扣扣上，又长年离线。临街角，弹指泫然，浑听取、声声慢。



末世

草际分星火，沙间陨慧光。

山崩及地陷，逝电与飞霜。

时势多伏蹇，恶灵岂易匡。

岁寒拥破立，万世继隆昌。



无题

莼乡一夜凄风雨，塞上排雁已秋声。

及皋浊水随云去，浮蚁青卮带恨停。

云鬓无心花无力，蜜烛有泪月有情。

若非当日别金谷，此身合为千岁冰。



八声甘州

剩扑窗暗雨泣秋风，独立意沉沉。乱东山兽舞，西楼鹤渐，万象纠纷。一段秦腔入夜，悲喜遏长云。宿酒怀中暖，不念离人。

今古炎凉休判，漫销磨玉斧，难补桂轮。韶华如斯去，卧疴对空林。想当时，立马扬鞭，更几番，刺骨求经纶。今何许？刘郎来矣，谁与为伦？



遣怀

一处伤怀竟成双，关山远去意茫茫。

不定枝雀随心转，有情秋水映叶黄。



寄友人

手足廿载茱萸味，此间故里更遭逢。
斗室经营烟与火，青春变卖傻和疯。
扬袖频把一心敬，架手便识四季红。
若解金斯伯格意，而今恨把垮掉重。



双双燕

渐秋叶坠，过街角生风，小窗含雨。油灯半盏，照破客中情绪。放眼平江浪去，去不了，一襟愁予。曾言不负东君，怎奈时薄西陆。

相聚，轻约一句。待执手湖风，点滴吹与。断桥归晚，应记眉间流絮。暗自吹香呵玉，忘不掉，小红初遇。颠倒金雀无多，世事终究难住。



闷

新阳陌上风，杨柳郁青葱。

无处寻秋意，有时见雁重。

醉生离梦里，老死客乡中。

滚滚缁尘事，浊流日日东。



镇江草莓

霓色匆匆斩六音，晓月如歌帐如云。
遍览今朝挥形客，不知昨夜夺梦人。



摸鱼儿

嫩寒天、桂香飘醉，梧桐残碧云浅。鹅黄一径含烟缀，人静日圆风软。鸥欲举，鱼欲潜，只形不定随流转。尘怀渐懒。纵十万繁华，腥膻北顾，负胡女清愿。
黄河岸，绝地罡风峭险。经秋霜叶飞泫。山光草色依如旧，朋党昔游都散。堪记省，折柳地，忽来晚照皆销黯。青春谁换。是落拓江湖，淡然一笔，向冷月凝盼。



永遇乐

一带湖山，渐疏秋讯，蝉泣新冷。寂寞红衣，合欢桂树，杨柳垂清镜。老和山上，画图西子，望眼自随流景。乡国远，忽然北顾，云间雁字谁省。
临窗徙倚，悲歌翻尽，落魄形骸慵整。廿岁浮云，一夕抱恨，已惯听运命。漆漆末世，王孙归去，草院泥窗醉醒。待来年、秋深如此，槐花满径。



黑金属

兵车十万雄旌展，踏月银骖动地临。
擎空高树蟠根错，破海长鲸逆水深。
沉吟不为凄凉久，长啸只缘意态真。
雨夜摇头篷莱境，红尘相忘一摔琴。



怀人兼自况

别后音书长契阔，江南一滞逾三年。
留香鸢尾空传恨，略影鸳鸯若衔言。
买醉曾轻封候事，借梦今逐稻粱圆。
不知明岁身何向，且与长风共窗前。



怀旧

往事侵怀复乱心，离愁长伴多病身。
荒山岂易闲丘垄，草陌同携月夜深。
笑靥忽随春梦远，醉言能待醒时真？
流年已剩嗟吁矣，归去桃源甚处寻？



仙人寿

龙涎香转弦歌脆，橘里思书更不堪。
念我别来无半字，听君客久添新颜。
曾披流霰山前坐，今共长风月下谈。
或有飞琼池畔住，折梅为舞起幽澜。



扬州慢

冻雨时飞，酸风初度，朱楼过眼迷踪。剩湖天寂远，残枝入孤蓬。自别后、鱼沉雁杳，山光水态，渐失从容。向波心，一舸独泛，橘灯万重。
阡陌纵赏，记当时，众里相逢。是少小轻约，四年一梦，何日来同。遍负荒山逝景，书生泪，零落江东。且邀城南客，猜拳共饮云中。



莺啼序 感末日事兼怀友人

琴书一夕抛掷，剩投壶意绪。

堕红泣、平扫江天，逝影摇乱孤树。

踏新雪、山前故榻，当时不记分携句。

叹余生，才尽江郎，断肠南浦。

　　

冻月粘窗，宿雨打砚，剪枯灯凝驻。

指间火、成片经风，顷时如散如聚。

问朱衣，文章易改，对金镜、风华难住。

最无情，瓶里陈沙，梦中残顾。

　　

城南冾饮，岭下欢谈，是柯本旧曲。

沪上见、老鱼推浪，放啸高低；桂叶流莺，醉颜横竖。

匆匆换了，飘摇情绪，凭谁说与汪伦听，恨潭水、涨落十千度。

君应更健，拏云意气当发，怒将命运拨取。

　　

归期何待？末日来耶？又萧凋岁暮。

更须掌、雄兵十万，涤荡诸天；虎贲三千，掩杀王土。

操韩白韬，明夷齐志，营营缁尘何由怜，尽抛别、潇洒星天去。

清江江上白云，淡抹平生，幽情几许。



咏自来水

自来水，自来水，经年长自悲。
头饮黄河头，尾住管陌尾。
回首难寻觅，盈盈两行泪。
汤汤千重雪，湉湉一湖璧。
忽然堕市廛，纤纤如玉椎。
白日何繁华，永夜何幽昧。
匆匆人影斜，都为稻米追。
杂沓红复绿，茅里尽黄黑。
杯中注我影，桶里是我勤。
智械诚翘楚，德行长退步。
坏我三重皮，换我九回骨。
恍然一梦间，无隙叫辛苦。
骊歌逐波尽，又吟登楼赋。
仲宣若有情，为我鸣冤曲。
昔日诗中意，今朝管里魂。
国朝文学苑，沉沉比残舂。
人间勾留日，云阙是何年。
幸自盛暑临，扶我上九天。
流眄云霭重，俯瞰九畹小。
歘然雷霆动，遣我登碧霄。
帝问人间事，秉实相上告。
峨眉颤然蹙，复入紫簟觉。
青牛出文梓，白鹿憩贞松。
遥想市衢上，应已风雨中。



吊拿破仑

倥偬半世戎马名，攘尽诸蕃真逆雄。
马踏疾风穿九畹，戈向斗柄挑长星。
土伦揭竿炮爦焱，铁卢楚歌吹弦惊。
亦曾秉烛緗帙侣，缘何异域试膻腥？
边声离离征人醉，戍鼓萧萧梦绕城。
既有拔杰若韩白，且看参差六国旌。
虏志千夫似恶虎，扯云万戟连长鲸。
逶逦共图高卢地，不料怪杰已出生。
帷帐杯盏犹蒸汽，沙场归来信点兵。
倭夷小生骨摧折，列国群英俯伏臣。
操定吴戈被犀甲，笑谈鸿绪共升平。
他日平刈欧罗巴，放教黔首把生营。
热酒三白剐肠过，挥鞭直走朔北征。
无奈霰雪凄凉地，蹉跌锐气八九成。
滑铁卢亦滑英雄，伏尸曝野玉枹斜。
一霎霜风卷残月，雁垂横宇猿啸哀。
归为贱俘流放地，沧海一夜鬓毛衰。
因忆当年重耳事，何况天骄铁甲师？
卷土刘郎又来也，欲学句践嗫胆时。
白发廉颇终齿至，难扶清雄旧日威。
美人迟暮诚可叹，硕星陨没亦孔悲。
绩业凿凿丹青载，功过无知闲云推。
扣灯启户对天笑，昙花丛里走马灯。



咏雪二首



一

欲妆枯峦荣萧树，已剪琼花烛太清。
无限流光湿灯底，几队寒玑影长亭。
锁窗偷放微凉入，河山新描淡幅成。
何事坏我玉洁体？因作琉璃惩顽童。



二

飞澌狂鞭人间愁，地衢天街两勾留。
壮心欲隐千般怨，反被众生问罪尤。
    `,槁木集:`
    祭祖父

院外槐残雪未消，牖边烛暗泪飘摇。

朝菌旦暮成别世，逸士百岁竟逍遥。

昔逢清化出行伍，今把平生励儿曹。

风絮明年倩谁扫，自随鹏鸟比天高。



无题

独夜接漫纪，纷絮过灵溪。

垂云折雁羽，冷飒入寒枝。

临海觉川小，去乡知母慈。

浮情稍纵逝，刻意维新之。



自度

晴也是,雨也是,粘天飞雪遮眼絮。断影余篇何处寄,斜照如烟驰半壁。

歌特寂,旋死寂, 沉香静绕漏壶隙。端是后庭旧光景,拼作浮生乱离意。



无眠



一

驰尘千壑,墨守一渊。 ­

风华争茂,老玉荒田。 ­

凭风领意,拜月言欢。­

三军易孚,独骑难安。 ­

潜虬夕寐,如缕如烟。 ­

潜龙旦徙,如漪如澜。­

毁规弃矩,圆以成方。 ­

毁尽弃遍,方以成圆。



二­

无据无据,有期有期?

强电强兮,弱电弱兮?

若问来路,信马纵躯。

若问去处,从流听时。

泛彼蓝田,游彼荷池。

食彼沧月,织彼长丝。

强电弱兮,弱电强兮。

有据无期,无据有期。



无题

金甲照青空，壮士佩良玉。

逶迤河畔路，葳蕤花间词。

栏杆凝露冷，彩鸾魂梦惊。

魔王摇大旗，广厦列化机。

桥边熏风动，儿童时候思。

毕竟南冠客，无关采薇时。



河滨柳

垂云衔残暑, 斜影送风清。

浊水难为鉴, 回眸若为情。



自度

雨声斜,仙音叠,尺八弦裂黑死绝。夜永更兼汽笛冷, 无语心自警。

剑气堪消酒,故园依旧少年游。轻狂而今只解道,塔难倒,情易老。



点绛唇

雨寂蛙喧, 似知欹枕人眠未。流云自卷,寸心忽如坠。

垮掉路边, 冷月相扶醉。久无味。流年只解, 此际抛人去。



永夜自况兼寄仙人

仙去松石老，梦回尘陌非。

将雨枝头立，缘何檐下飞。



惜红衣

还掉空调，唯余电扇，殷勤夜半。半载蹉跎，平生争如换。匆匆两岁，呼拉来也呼拉散。君看、几树莺啼，弹指蝉声占。

浮光蜃景，逐浪形骸，何曾洙泗见？拟向静安归处，成一念。云云旧梦弃遍，书到卖时知贱。当时心曲起，秋千芍药深院。



槁木

槁木停新风，琼流革旧绪。

西陆凋云梦，乌雀咏清平。



浣溪沙

秋雨经风寒蝉息，梧桐浸露无凤栖。行迈至此唯戚戚。

肥水东流何日西，昨夜梦稳当年枝。彩云化泪几人知。



醉花间

片影浮光著意临，炭笔绘轻云。相忆久无凭，盟鸥入空林。江汉抛别路，天涯念归人。长夜徒将诗余抹，梦深易断魂。有微月，伴清吟。



点绛唇

秋雨齐帘，平分夜色青灯底。愁云添几，锁客怀寸尺。

寄意孤星，一阙清歌里。平生事，都知不易。偏又逢独自。



苏幕遮

雨天低，烟树杳。若即弦歌，曲罢人犹少。迢递荒山接远道。梦绕乡国，曾望南飞鸟。

又萋萋，秋意老。池上红衣，断续星灯照。拟把斗柄成一棹。去去寒星，晴雪小园到。



点绛唇 广场舞者

雾手揉灯，星河隐隐隔云隙。轻歌慢舞，长袂连虹系。

白日生涯，到此端如戏。若离即。浮光碎影，惹客愁扬抑。



疏影

迷柯梦久,馀残怀浪荡,清思罔有。旧业重操，心岸支离，无言自树新柳。此间空念胡沙远。记当日，雨侵南牖。唤狂朋、市酒桥边，点检黄河肥瘦。

半曲夷歌斥吼，泻千里愤气，留向空漏。堪怨王孙，心迹清迥，不与烟华同俦。亭亭浩气向天塞，却淹滞，苦移别后。徐徐歇，江左银雾，似醉晴光照透。



少年游

梧桐渐瘦挂连云，树下夜归人。银灯分影，西风摇落，情怀逐叶沉。 老和山下，教七楼前，何处置孤吟。记得放啸故园时，沙间月、又照临。



谒金门

层云暗，心绪零落孤馆。百草千花乘醉绾，摇摇风露晚。

别后萧萧袖管，空忆别时针线。红叶封题遗彩笺，何日闻归雁。



临江仙

楼外轻烟描画境，暖风迟日飞来。欲凭闲草释孤怀，朱衣频错意，青镜竟难开。

锦瑟年光流水去，故园又树新槐。梦携塞雁浅飞回。荒城馀怅望，摇辔向章台。



残荷

几夜西风兼细雨，红衣带恨尽凋零。

枯钟满目听风泣，残碧点滴映日晴。

断枝空拦鸳鸯梦，飘叶剩与蝴蝶行。

去国经岁飘蓬意，水色烟光两相迎。



暗香

彩云浸月，照当时游冶，步随烟霞。执手山山，千万重斜日天涯。随意春衫淡著，忽浅笑，秀蛾如画。漫说与，草际沙间，共煮雪烹茶。

雨天。章台下。叹卷地流光，世路分携。指尖沙漏，岁月无声代为挂。告与南回雁雁，应记省，来年归驾。算三载，空肠断，千般无那。



蝶恋花

寒雨危楼独倚处，恨语飞来，又与流光去。青女不谙桃叶路，情投荡子缘轻负。

无那金风摇玉露，百种相思，付与前般苦。情深飞雪拥凋树，情浅乱红秋千暮。



扬州慢

冷句轻抛,，沉疴久住，依约暗雨扑窗。枯骸如病酒，赋笔纳新凉。纸间泪、流澌吹遍，清平又皱，浇向愁肠。近中宵，院宇层楼，烟水茫茫。

余杭淹滞，恨平生、争似江郎。换书剑生涯，别梦堆积，眼里斜阳。睡馀还无气力，花朝忆，聚散无常。愿闻乡国雪，乘风初上榆杨。



八声甘州 指环王

泻扑天暗影向中洲，铁骑过烟河。正苹苹青野，歌亭舞树，晴日悠国。浅字斑斑重映，底事锁邪魔？林谷诚安乐，苦旅嵯峨。

纵赤脚微躯短，剑指魔都去，舍我谁何。雾山别群豸，壮志未消磨。战白城，烽燧未竟，度危崖，殷血溅泥柯。小环一旦成灰烬，白树清和。





多丽 西湖

暮烟暝，鳞波淡远山青。正一一，兰舟次第，湖光断处鸥迎。映夕晴，琼楼高峙，逢暇日，柳岸低平。侧帽凭风，残怀病酒，入歌台舞榭吹酲。问湖上，逋仙何处，梅鹤笑高城。花间客，缁尘意绪，暂锁危亭。

记西溪，临别一梦，残荷芦荡经行。醉魂痴，践灯市酒，重帘闭，踩月挥形。粉墨还销，蜃光难驻，离魂还处芷兰清。望喷泉，疏音隔岸，光采两三星。流风晚，归思无计，聆尽涛声。



无题

薄宵光转觳尘渐，勾月如银照北星。

积岁荒芜齐越殿，盈池幽叶绕吴亭。

空凭潘岳识来路，难觅山水慰去情。

拾掇词章延苦旅，肯将波粒二象轻。



点绛唇 为人寿

秋月别云，千山皓色两间映。佳期重又，云鬓催流景。

一曲平湖，惊起鸳鸯梦。应记省，花朝酒醒。还向蟾宫请。



老和山

欲藉登临展客怀，云阶流曲缀苍苔。

冷笑青峰多侧目，薄情烟草暗高台。

临风西子揭绡幕，遁水黄龙锁尘骸。

斜照松涛拦北望，小亭幽径独徘徊。



风入松 跳楼

忧思逐月共登楼，正侧影凝愁。斜河忽碎孤星泪，平生事，些个情仇。露冷阑干欲裂，抛身一梦难留。

风翻天地四合幽，万象坠离眸。西园昨日黄花径，映新红，一夜为俦。莫问晨来谁见，忽然散发昔游。



永遇乐 Mantus新歌

雁去云平，寒侵窗小，山气初举。旧梦赊欢，新词买恨，心事寂如水。临屏一曲，引怀三叹，隔见舞低吟袂。回环际，仙音落落，瑶池慢盈秋雨。

烟横古堡，风穿槁树，斜月初临暗域。一苇从流，忘川执手，笑问红尘路。人间天上，山遥水远，围火漫说离聚。今提剑，关山策马，玉龙醉去。



昼夜乐 镜像

龙涎光转蟠烟聚，算况景，初相遇。六弦触电来时，惊作隔云雁语。镜像折音七色举，展轻躯，漫舒狂绪。座下客千千，忘形槐宫去。

一团骤雨忽歇处，伶俜事，轻轻诉。生涯蜜剑难抵，此际空馀寂阒。猛士何辜桃下死，恨流言，自来无据。拚了此生欢，尽翻尊前曲。



双双燕

坠花引月，叹金镜年年，慢磨如许。玉醅空冷，冷笺静陈霜句。长记西楼侧顾，送暖语，轻轻延伫。斜阳眷眷初拥，短景平分岁暮。

携手，沙间旧路。燕子空飞去，唤卿卿处。自习归晚，有洛女逐华胥。桃浪吹舟烟缕，恰是那，青青蘋渚。应念梦远江南，画里无端情绪。



河传

莼乡橘里，倩秦筝吹烂，流年消息。琴瑟日疏，浮梦编织鱼尾。望归帆，空烟水。

西溪云翳拼红紫，落日桥头，燕子纷扑地。酒入病怀，摇醉桂花影外。恨无声，愁带翼。



无题

即刻思如缕，倾言莫负心。

雨空飞彩翼，谁道不如春。



再登老和山感怀口占

袖手牵云曳乱苍，晴峦照影带蓝光。

长阶虬蟠迎凤起，浅枝露冷侍龙藏。

别开千榭凝醅绿，忽转一荫窜雀黄。

乡妪凭说儿女事，村鸡啼老云外郎。



无题

异域抛奇梦，流景殊不同。

六军拥十万，吟客笑云中。

光衍鲸楼裂，杖曳龙庭空。

泪洇庠中纸，缁尘散几重。

忽又抟空起，起落复和同。

斯本非吾地，况又轻遭逢。

来去皆蚋蚁，左右虑鱼熊。

智用捐纯粹，器械饰愚形。

何似行星外，去此万万年。

翠羽传深土，灵迹延九山。

智械曷无用，点化灵犀边。

扑忽燕燕起，潇洒过林泉。

转又为鱼龙，嬉戏倾青澜。

太古之常乐，幻境之延绵。

错游到罪国，梦魇不能翻。

且掷书与剑，于此顽世间。

故山多少梦，空空不复言。



苏幕遮 为人寿

柳烟垂，花入户。淡抹娥眉，翠色临风树。瘦尽寒枝千里度。芳草流年，照眼飞琼妒。

煮相思，红豆句。幽影娉婷，一梦桃根渡。明月遗簪羞月女。笑对朱衣，须向蟾宫住。
    `,荒山集:`
    【2007】



念奴娇



重云横竖，弹指外、吹落江山几簇。漫作西墙昨夜雨，觉是风尘无数。老去寒鸦，别来旧馆，醉后长亭路。画帘淡掩，听风涂抹诗余。

寂寞日暮斜阳，节序似水，已送舟西陆。独锁寸心飞叶下，故事一一远去。又见白石，波心冷月，次韵清凉句。落英一院，添来可作衣物。



长相思



云外天，楼外天。黯然一瞥已秋天，未闻孤曲翻。

眼里山，眉里山。夜半惊觉是眉山，月落黄花间。



青玉案



风流自古谁吩咐，不忍问，云飞处。彩笔香尘凉夜露，丹青欲罢，君山何处？冷落胡沙雨。

偶然邂遇秋千树，流燕交飞旧时路。秋梦惊秋唯阒阒，岭天寂寂，阿房一炬。此身何处去！



秋皋



斜照千山如病狗，扯命狂嘶欲破喉。

负却东皇几行泪，欠得芳草一叶愁。

小驴倦系秋千树，落日圆栖洒笑楼。

劝君莫学白石老，春风一卷伴穷游。



临窗拟古



延目接穷北，归思正渺茫。

乡书和昼短，浅恨逐夜长。

鸟铤长亭路，兽追曲回肠。

卜书明复暗，秋气横大江。



六州歌头



记得旧梦，也只是恍然。曾说与，长相许，枕江南，碧胡山。一点秋风落，倚栏望，双双燕，轻盈过，逐风去，浅勾连。夷曲吹心，隆隆机器林，海啸山颠。正天高雁远，翠霭下河滩。魔戒何在？落人间。
气洒川岳，志无限，鲲鹏愿，燕雀间。方醒梦，物华换，暗尘寰，净风烟。呛酒畴昔句，故人望，泪丝涟。血翻沸，滚雷电，曜长天。谁解冻云夜路，雨打遍，犬声一片。想近来疏放，投笔探新晴，冷落翩跹。



新年



蜀女汉中寄殷殷，瑟鼓击破彩云深。

御沟红叶今何在，离宫秋月和梦沉。

清光宛转年少意，胡尘散作千古心。

荷影碎失凤箫骨，春风又慕岸柳生。

柳生燕回人不见，雁去石凉虏弦惊。

一片雪衣护层楼，一度梦远鸡塞愁。

天涯已为文章近，天山流水送节候。

去年明月今年看，昨朝细雨今打头。

渐失终成一声笑，摇首步出春风来。

朔上寒沙混紫雾，朔漠红衣傍日栽。

云开金光满天地，黄河孤舟忆蓬莱。

事隔三朝废诗酒，南柯一梦落尘埃。

我辈自无太白意，何况斗酒诗千杯。

空将笺上几行书，弃与落花一处埋。

落花又化蝶飞去，但余寂寂旧慷慨。

岂宜从今长睡去，一任日月照陋体。

何欢欣，风波里。万叶战，清虎啼。

形骸暂与东风垮，只待春雷掀云起。

震碎冰崖连江雪，吹开荒野弥望火。

城中频复爆竹声，披衣喜送新年过。



遣墨



南唐细草宋时辉，空林无道寻采薇。

想来释儒分云渡，一叶桃根缓缓归。

居人闲坐倚寒霜，少女盈盈淡花光。

欲雨啼乌集无处，比比燕尾过长堤。

花径昨夜梦临地，忘记对面是郎行。

剑入诗斋滴云根，宝盖叮叮铁鞭声。

晨鸡自随旭阳落，珠玑还远草木沉。

赤县神州起精神，改革开放送春风。

可堪二十四桥月，夜夜马瘦孤山梅。

乱石横出红尘路，诗人载酒白浪内。

辛苦东风饮冰雪，可怜残雪落星槎。

层林片片浅红阵，大道井井逢圣人。

相逢笑随欢颜尽，冷风吹过小径来。

畴昔片语今成笑，末处神随苍林边。

素骨端合天上殿，底事落下云泥来？

玉宫冬冷光阴渡，泥墙粪臭金银缸。

舟车铁甲共寂寞，智械芸芸一脉承。

工业农神亘古来，心上形外何相通？

君须铁记圣人训，不必削头挤浪尖。

归去王孙南北路，东西三面蛛丝空。

桃坞云乱寒林鸦，末处江南烟几家。

浅棹移梦过江左，浅恨与月共晴缺。

忽随东风来朔北，高唐寸语心上秋。

云外桑榆日远大，沙吹残清故老诗。

常携春草登古崖，南望春秋万代云。

西风时穿冷街过，断雨偶打破窗声。

网络已和摇滚来，得见文章天涯客。

天涯酒醒解情味，阶草冷翠记红颜。

小窗时起南来兴，纸上草草明暗成。

若把相逢换一笑，此身前后何寄凭？

常拟浩瀚登云志，归来垮掉一行诗。

命教东君宽来限，七月冰山解未迟。

且留茫茫天地在，骋怀放目摩太空。

故国一一夜半来，黄发垂髫齐出门。

齐出门，满江红。梁上日升月落间。

便有情分又如何，便得相守又如何。

若无些个小生闹，春风何曾不烦怨。

尽栽修竹倩谁倚，到处清平岂空虚？

帝业时兴土膏中，群臣相顾银汉里。

一日随风来溟漠，清魂散去九秋天。



错韵浣溪沙



一


浅绿无端挂新红，

冰皮未解琐窗东，

夕阳扫落轻尘中。


无语又见友人题，

有情总系明月生。

醉后也曾唤卿卿。


二


桂轮几转已新春，

冻云时响雁行中，

爆竹次第扶小城。


去年酒化今夕泪，

人间故事太匆匆。

几时真有六军来？


三


万径酸风扬轻寒，

日影重叠云波间。

谁散胭脂堆枯山。


照见何必冷笑去，

去去行迈逾年关。

却愿凭栏误千帆。


四


天门半掩收云回，

群山纷驰月上时，

暗禽已宿明寒枝。


一径昏黄无人扫，

到处学子切切归。

古城一片浴清辉。



解颐


停歌复长啸，展转唯此身。

侧身请不就，望野春潮生。
青云扶壮志，河山亦豪雄。

阅遍邑井喧，独来邀月明。
弦破清风底，笔落自恐惊。

狂笑倚剑气，流诗锦障倾。
闲结二三子，臭气落松针。

仍思汉唐时，凤凰宇内清。

绝句两首



一


过清明来夏气浓，城居犹绝一梦中。
野径处处花喧沸，迟日山山玉玲珑。



二


黄昏渐下长竿头，燕雁环旋韶华收。
西风频问墙外草，孤城何处卖风流？

自度两首


帘雨


漏壶天，酩酊地，烂醉花伞如许。凭栏处，晚风急，关河云烟里。 看骑蹇李贺，叮当过，险峻天宇。正易安，细嚼梅花，慢赋情绪。云光十万变化，转瞬又是苍茫。

无觅。荒山渐湿黛色，断桥横截樵歌地。把愁阵恨兵，挥旗只向天际。化作驰辉共晚照，一并儿将苍山割取。



南望


荒山如屏，草尖沙浪，酲醉淹狂。念徽宗当年，细磨金甲，琢砌玉章。小红调弦最妙，清风台上画鹅黄。少年曾疏放，众般宠辱偕忘。

挑球过市，梦醒昏黄，独上高楼南望。交翼燕儿外，十万云光，红旗懒背斜阳。消磨也，而今谁问，好男儿志在四方？



过陕西





适从泽国返，四望蓦然尘。

尘缘今已矣，相思几尺深。



为树新苗伐旧树有感



荡荡岭上风，摇摇路边松。

亭亭骨初就，怎堪利斧锋？

去年春上栽，经秋蔚成林。

依依往来人，照面不可见。

清寒立霜雪，幽煌接夜灯。

而今落泥土，半被黄沙埋。

燕雀飞来问，高鸿传语哀。

参差欹影乱，绵连似初栽。

一夜风吹去，呼啸灭残迹。

新枝次第见，又作一年春。

料应一载后，还复斧下魂。

问树原何罪，但坐遮望眼。

楼阁多林立，蔽日亦久焉。

灵台忘扫净，呼唤拆绡帘。

今日戕长松，明朝平东山？

东山望不尽，何况接苍天。

仰面嗟韩信，翠色和仲宣。

城中多少人，都作吏役看。

我今歌一曲，为尔鸣幽暗。

他年返太真，傍日笼青云。



落沙



欲起青青陇，凡夫识得未？
搓成一缕恨，摇落春风里。



雨霖铃 中秋



风吹故事，销魂新曲，雨洗中秋。徘徊深院无据，烟头落，似笑夷犹。近来云深三尺，朵朵不识愁。清寒没，买醉登楼，念姮娥月宫在否？

想当年玉宴歌稠，听箫鼓，几度笑封侯。拟按潇洒云头，御东风，江左来游。而今谁问！但清风明月住身后，忍割爱，浩荡从流。又时时扯袖。



天仙子 戏言



层楼兀兀月清圆，不见玉兔共婵娟。醉眼迷离搔首去。书中义，梦里禅，依旧荒山滞流年。

归来秋风信翻帘，合肥女见每开颜。欲支尘外三分闲。花间词，奉旨填，只愿饮共张玉田。



鹊桥仙



孤城云堆，佳期雨砌，猛忆来路千百。细柳每当离恨寄，怎敌它塞上风急。

秋叶还飞，春红仍在，不知词笔哪里。偶然著问携手处，三言两语杜宇归。



又



积凉偶发，细雨时来，疑在江左游历。只是未见雁儿来，无言每送他去去。

故人初遇，奈何分离，残恨摇摇烛蜜。展卷万里惊鸿起，停笔如烟一影立。



念奴娇 怀古



菩萨西去，未换来，清平治盛世一许。但见神州，烽燧里，乱舞春秋如雨。才子歌人，后庭花树，甚匆忙匿迹。而今江河，依旧迤逦涛积。

暗想国朝初立，草草争割据，龙蛇并起。不见三民，谈笑间，换了满地红旗。黄公不见，拾鞋子多矣，犹待鸡啼。何妨吟啸，一尊稳泛华胥。



又



梦里吴越，恍然换，惊飞一窗夜雨。依依孤山，浑看似，数片荒山月底。俊游巷陌，千树曾压，纵横寒波里。坡仙老矣，几曾泛舟赤壁？

风潮浩荡霜集，裹悲欢种种，隔岸啸聚。旧盟都在，算年来，心绪蹉跎无据。从来清秋，惹闲愁草句，英雄无觅。目尽冥池，扶摇正欲飞举。



扬州慢



隔梦高台，竹锁微月，马蹄去后春风。蝴蝶都飞倦，随意捉窗帘。自夷歌逐浪吹来，流云意绪，恨失清平。折霜枝，苔梅小小，清寒谁凭！

江山依旧，年年冷月宿波心。纵笛声暗远，素抱如雪，无惹飘萍。北随胡虏曾到，荒山客，羁旅无声。念更深梦稳，一曲知向谁听。



雪中曲



一

春讯欲磅礴，星天沸清声。

进身岂风待，风生送雪来。

万点灯如豆，点乱乾坤中。

可怜书生气，滞与烟酒轻。

二

云中不闻鸡犬吠，巷尾唯有雪飞声。

流光看似数卷落，惊起古泪浅深生。

三

岁寒转峻切，孤塔泊日昏。

辍耕因时令，投笔复何驱。

四海若有意，高月送相知。

可堪冻土外，流水与驰云。

四

短步复长奔，一周又一圈。

日月经行色，四顾重唧唧。

玉泪消磨久，不堪领命飞。

飞时花睡晚，黑发或已眠。

五

片片丝丝切切催，北风经夜经年吹。

无叶藤条盼之久，多病荒山随意披。

夜稳合灯知一梦，日永启书觅光辉。

亿万星光照衡宇，宇宙顷刻在耳内。

六

晓雾灿烂照高墙，新年何事无歌扬？

寒陌参差断炮响，东山依旧乱影藏。

小睡如经隔世梦，揭帘却生来岁凉。

借问陆逊笛何许，欹枕宇宙变短长。

七

病首却飞晨露急，路上不知身何许。

唯见荒坡沉残月，无觅精灵在大荒。

今岁去年复何年，匆匆星露与冰凌。

欲遣六军来护驾，错迎太古鹅羽至。

五百年外此身事，只与尘埃聚散同。

八

旧年浑忘却，野火又熊熊。

万径鱼龙跃，冷月独自凭。

九

牵红挂绿闻断竹，探得春心半缕无。

梅花似忘节令久，恁将残笑谢空庑。



【2008】



月夜



扶醉垮掉路上风，解道明照映面红。
可惜丹青失颜色，滴成别泪寄游鸿。



春至



闻讯春至竟草草，

北风传语到晴晓。

荒山戴月空四围，

归梦随云入九霄。

半夜孤灯诗难成，

一片丹心倩谁了。

瓶中沙伴酒中影，

莫道杜郎仍年少。



无题



玉树残雪尽，征鸿次第临。

芳草隔几夏，落花吟一春。

摇荡冰壶上，错落彩莲深。

天涯倦不扫，随意放行云。



暗香



余废辞章久矣。近翻看旧部，于绰约之外，更兼己身之叹。比对词余，窃制诗格，聊以自娱，亦为白石仙添笑耳！


旧月照我梅边笛，玉人拈花清寒里。

老却何逊春风笔，冷香一叶入瑶席。

江国夜寂初积雪，无言有思红萼低。

长记西湖携手处，吹尽寒碧几曾识？



绝句



一



乱云塞日下，狂风卷城倾。

将军卷帘卧，笼鸟唤卿卿。



二



飞蝗接云日，桃李暗芳菲。

此夕洙泗上，谁不念采薇。



三



盛世浩劫至，弹泪复摧心。

郁郁三百年，尽在此一声。



四



杨柳又随清风绿，岭下残阳唤云心。

依依故园蛛丝后，隐隐笙歌舞袖深。



回乡路上偶得



摔却桃花扇，横剑向榆关。

梦醒胡尘远，冷月暗千山。



自度



林鸟双飞孤馆凉，谁解笑语易荒唐。百种千般媚，一日惊风流。岁月光，映空堂。今只把盏笑，何以破栖惶。花散，晚景换，旧业忽然转愁肠。

江上。明月千里送舟行，梅竹草草埋仙阆。无语钟声频响，念小红此夕那厢。斜阳空照，群山影长。且自洗尘囊，邀取白石仙，幽香共一晌。



笼鸟逸后作



断续笼中三两声，遁去何处寻山林。

梦里百啭交彩翼，窗外连日火炉倾。



近日三首



一



北地冰风卷草回，留得沙头柳一枝。

披衣仰向星月看，敛眉慵教桃李知。

细笔承欢堪解笑，轻舟载酒气力微。

王去一时三边静，丽日穿蝶起窗灰。



二



可堪游雁宿冷月，岁岁年年圆与缺。

玉兔不知何处去，人间唯闻恋恋歌。

苔梅深藏人不见，浅香只许远人呵。

何若化作春风雨，息却莺燕乱啁哳。



三



枯木天风寸尺间，游鸿偏向暗波潜。

万军阵内斩尘落，三生石畔信花传。

铁血曾向苍生祭，柔情一缕若缠绵。

雄鸡三声犹不见，昆仑山上笑饮还。



唐多令



钗凤隔梦吟，怅怀中酒沉。临风人，渐去无痕。不怨西风吹雁过，怨卿卿，随浮云。 ­

朱阁野草侵，落絮又春深。旧风流，锁尽重门。弄外风铃破晓处，玲珑意，付桃根。







【2009】



惜红衣



梦觉吟鸾，环珮声里，故人依稀。拟相存问，银汉差隔鸿字。细梳情绪，但惊飞一窗夜雨。
历历。青镜今开，无朱衣消息。少年几许。断桥残雪，休负林生句。摇首歌特一曲，渺云路，何时玉龙铸成？一骑天南天北。随意星汉槎，不问钱塘浪疾。



陇北二首



车行


连峰无心随云去，
枯杨有意护穷田。
烽烟塞上千秋事，
颠簸窗下一刻眠。

踏沙行 风


过玉门风力电站，机组林立，其臂迎风旋动，甚雄伟，有感。


玉门关外，戈壁滩中，猛起千杆擒劲风。回旋平沙岂无影，尽向旋叶展轻踪。
芭蕉扇在，无此神功，一线千里送灵通。才卷尘埃迷千古，又入彩厦幻霓虹。





无题



身后荒山锁冰魂，眼底春风绿杨柳。

­聚散千古人在否，歌特一曲任淹留。



走之



醉字连连眉心上，雷声碎碎夜凄惶。我自朔北归，君心应未回。

先得镜台秋月明，鞭炮声声昼玲珑。尽了此一杯，相扶谁与归。
    `};function Yf(){const s=Al().pathname.split("/")[1];return D.jsx(D.Fragment,{children:D.jsx("div",{className:"w-full fixed left-1/2 -translate-x-1/2 z-100 wave-container",children:D.jsxs("header",{className:"max-w-4xl mx-auto mb-0 flex justify-start px-3 font-bold bg-gray-100/70 text-opacity-80 shadow",children:[D.jsx(Ne,{to:"/",className:"pb-1 text-2xl text-gray-600 hover:text-gray-800 text-bold",children:"宋词札记"}),D.jsxs("nav",{className:"flex self-end",children:[D.jsx("div",{className:s==="poems"?"pb-1 ml-4 border-b-2 border-gray-800":"pb-1 ml-4",children:D.jsx(Ne,{to:"/poems",className:"text-gray-600 hover:text-gray-800",children:"词集索引"})}),D.jsx("div",{className:s==="tools"?"pb-1 ml-4 border-b-2 border-gray-800":"pb-1 ml-4",children:D.jsx(Ne,{to:"/tools",className:"text-gray-600 hover:text-gray-800",children:"词牌助手"})})]})]})})})}function oy({text:c,width:s,height:o}){return D.jsx("div",{className:"visual-card",style:{width:`${s}`,height:`${o}`},children:D.jsx("p",{className:"heading",children:c})})}const Nu=[{title:"《菩萨蛮》",content:`海连时浊时清水，推移爱恨扶一醉。自傲五千年，吹呵障眼前。
始知夷狄昧，泫下秦王泪。何日九州平，匏瓜悬中庭。`},{title:"《浣溪沙》",content:`霸业浇离五丈原，龙吟星野按烽烟，碣石西去魏武鞭。
烂煮兵戈邀琼露，不辞明主落玉盘。月缘涩谷入蜀天。`},{title:"《踏莎行》",content:`月系高枝，花含早露。两三宿鸟逢人语。逢人语道圣明朝，一团红日凭空举。
具遣风云，随支天物。仰兹民力开今古。古今时变汇于兹，任君南北东西路。`}];function dy(){const[c,s]=z.useState([]),[o,r]=z.useState(0);z.useEffect(()=>{const A=localStorage.getItem("bingWallpapers"),_=localStorage.getItem("bingWallpapers:staleAt"),p=Date.now();if(A&&_&&p<Number(_)){const h=JSON.parse(A);s(h),h.forEach(R=>{const C=new Image;C.src=R});return}fetch("http://localhost:3001/api/bing-image").then(h=>h.json()).then(h=>{const R=h.images.map(C=>"https://www.bing.com"+C.url);s(R),localStorage.setItem("bingWallpapers",JSON.stringify(R)),localStorage.setItem("bingWallpapers:staleAt",String(p+1440*60*1e3)),R.forEach(C=>{const B=new Image;B.src=C})}).catch(h=>{const R=["/assets/img1.jpg","/assets/img2.jpg","/assets/img3.jpg"];s(R),localStorage.setItem("bingWallpapers",JSON.stringify(R)),localStorage.setItem("bingWallpapers:staleAt",String(p+1440*60*1e3)),window.__bingWallpapers=R,R.forEach(C=>{const B=new Image;B.src=C}),console.error("壁纸加载失败",h)})},[]);const d=(o+Nu.length-1)%Nu.length,g=(o+1)%Nu.length;return D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden z-[-1]",children:[D.jsx("div",{className:"absolute top-0 left-0 w-1/3 h-full bg-cover bg-center blur-sm opacity-30",style:c[d]?{backgroundImage:`url(${c[d]})`}:void 0}),D.jsx("div",{className:"absolute top-0 left-1/3 w-1/3 h-full bg-cover bg-center opacity-30",style:c[o]?{backgroundImage:`url(${c[o]})`}:void 0}),D.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-cover bg-center blur-sm opacity-30",style:c[g]?{backgroundImage:`url(${c[g]})`}:void 0}),D.jsx("div",{className:"absolute inset-0 bg-black/30"})]}),D.jsx("div",{onClick:()=>r(d),className:"fixed left-0 top-0 w-1/5 h-full z-0 cursor-pointer"}),D.jsx("div",{onClick:()=>r(g),className:"fixed right-0 top-0 w-1/5 h-full z-0 cursor-pointer"}),D.jsxs("div",{className:"flex items-center justify-center min-h-screen",children:[D.jsxs("main",{className:"relative z-100 overflow-hidden min-h-[80vh] max-w-[60vw] w-full bg-[rgba(253,253,245,0.5)] backdrop-blur-md shadow-xl rounded-xl px-6 py-10",children:[D.jsxs("header",{className:"text-center mb-12",children:[D.jsx("h1",{className:"text-5xl font-bold mb-2",children:"宋词札记"}),D.jsx("p",{className:"text-base text-gray-500 tracking-wide",children:"记忆与感知的流动"})]}),D.jsx("section",{className:"mb-12",children:D.jsxs("article",{className:"relative bg-[#fefcf7] border border-gray-300 shadow-inner rounded-xl p-6 md:p-8 transition-opacity duration-700 ease-in-out",style:c[o]?{backgroundImage:`url(${c[o]})`}:void 0,children:[D.jsx("div",{onClick:()=>r(d),className:"absolute left-4 top-1/2 -translate-y-1/2 z-20",children:D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-10 h-10 text-white/80 hover:text-white cursor-pointer",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),D.jsx("div",{onClick:()=>r(g),className:"absolute right-4 top-1/2 -translate-y-1/2 z-20",children:D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-10 h-10 text-white/80 hover:text-white cursor-pointer",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),D.jsx("div",{className:"absolute inset-0 bg-black/40 z-0 rounded-xl"}),D.jsxs("div",{className:"relative flex items-center justify-center flex-col z-90 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-4 animate-fadeIn",children:[D.jsx("h3",{className:"text-xl font-bold mb-4 text-gray-200/50 text-center",children:Nu[o].title}),D.jsx("p",{className:"whitespace-pre-line text-lg leading-loose text-gray-200/50 text-center",children:Nu[o].content})]},o)]},o)}),D.jsxs("section",{className:"mb-12",children:[D.jsxs(Ne,{to:"/poems",className:"inline-flex items-center gap-1 text-inherit no-underline text-2xl font-semibold",children:["词集索引",D.jsx("svg",{className:"w-4 h-4 mt-[2px]",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),D.jsx("div",{className:"mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-900",children:Object.keys(We).map((A,_)=>_<9?D.jsx(Ne,{to:`/poems/${A}`,className:"mx-auto",children:D.jsx(oy,{text:A,width:"250px",height:"55px"})},_):null)})]}),D.jsxs("section",{className:"mb-16 mb-10 text-center z-100",children:[D.jsx("h2",{className:"text-xl font-semibold mb-2",children:"✍️ 想试试自己填一首词？"}),D.jsx(Ne,{to:"/tools",className:"inline-block mt-2 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition",children:"打开填词助手"})]})]}),D.jsx("footer",{className:"fixed z-200 bottom-4 text-center text-sm text-gray-500  pt-6",children:"© 2025 Eliot Hongtuo · 以词为舟，泛古今之思。"})]})]})}const hy={浣溪沙:`中仄平平仄仄平（韵），中平中仄仄平平（韵），中平中仄仄平平（韵）。
   中仄中平平仄仄，中平中仄仄平平（韵）。中平中仄仄平平（韵）。`,暗香:`仄平仄仄（韵），仄仄平仄仄，平平平仄（韵）。
仄仄仄平，仄仄平平仄平仄（韵）。
平仄平平仄仄，平仄仄、平平平仄（韵）。
仄仄仄、仄仄平平，平仄仄平仄（韵）。
平仄（韵），仄仄仄（韵）。
仄仄仄仄平，仄仄平仄（韵）。
仄平仄仄（韵），平仄平平仄平仄（韵）。
平仄平平仄仄，平仄仄、平平平仄（韵）。
仄仄仄、平仄仄，仄平仄仄（韵）。`},my=`一东，东同铜桐筒童僮瞳中衷忠虫终戎崇嵩弓躬宫融雄熊穹穷冯风枫丰充隆空公功工攻蒙笼聋珑洪红鸿虹丛翁聪通蓬烘潼胧砻峒螽梦讧冻忡酆恫总侗窿懵庞种盅芎倥艨绒葱匆骢
二冬，冬农宗钟龙舂松冲容蓉庸封胸雍浓重从逢缝踪茸峰锋烽蛩慵恭供淙侬松凶墉镛佣溶邛共憧喁邕壅纵龚枞脓淞匈汹禺蚣榕彤
三江，江扛窗邦缸降双庞逄腔撞幢桩淙豇
四支，支枝移为垂吹陂碑奇宜仪皮儿离施知驰池规危夷师姿迟眉悲之芝时诗棋旗辞词期祠基疑姬丝司葵医帷思滋持随痴维卮麋螭麾墀弥慈遗肌脂雌披嬉尸狸炊篱兹差疲茨卑亏蕤陲骑曦歧岐谁斯私窥熙欺疵赀笞羁彝颐资糜饥衰锥姨楣夔涯伊蓍追
四缁，缁箕椎罴篪萎匙脾坻嶷治骊尸綦怡尼漪累牺饴而鸱推縻璃祁绥逵羲羸肢骐訾狮奇嗤咨堕其睢漓蠡噫馗辎胝鳍蛇陴淇淄丽筛厮氏痍貔比僖贻祺嘻鹂瓷琦嵋怩熹孜台蚩罹魑丕琪耆衰惟剂提禧居栀戏畸椅磁痿离佳虽仔寅委崎隋逶倭黎犁郦
五微，微薇晖徽挥韦围帏违霏菲妃绯飞非扉肥腓威畿机几讥矶稀希衣依沂巍归诽痱欷葳颀圻
六鱼，鱼渔初书舒居裾车渠余予誉舆胥狙锄疏蔬梳虚嘘徐猪闾庐驴诸除储如墟与畲疽苴于茹蛆且沮祛蜍榈淤好雎纾躇趄滁屠据匹咀衙涂虑
七虞，虞愚娱隅刍无芜巫于盂衢儒濡襦须株诛蛛殊瑜榆谀愉腴区驱躯朱珠趋扶符凫雏敷夫肤纡输枢厨俱驹模谟蒲胡湖瑚乎壶狐弧孤辜姑觚菰徒途涂荼图屠奴呼吾七虞，梧吴租卢鲈苏酥乌枯都铺禺诬竽吁瞿劬需俞逾觎揄萸臾渝岖镂娄夫孚桴俘迂姝拘摹糊鸪沽呱蛄驽逋舻垆徂孥泸栌嚅蚨诹扶母毋芙喁颅轳句邾洙麸机膜瓠恶芋呕驺喻枸侏龉葫懦帑拊
八齐，齐蛴脐黎犁梨黧妻萋凄堤低氐诋题提荑缔折篦鸡稽兮奚嵇蹊倪霓西栖犀嘶撕梯鼙批挤迷泥溪圭闺睽奎携畦骊鹂儿
九佳，佳街鞋牌柴钗差涯阶偕谐骸排乖怀淮豺侪埋霾斋娲蜗娃哇皆喈揩蛙楷槐俳
十灰，灰恢魁隈回徊枚梅媒煤瑰雷催摧堆陪杯醅嵬推开哀埃台苔该才材财裁来莱栽哉灾猜胎孩虺崔裴培坏垓陔徕皑傀崃诙煨桅唉颏能茴酶偎隗咳
十一真，真因茵辛新薪晨辰臣人仁神亲申伸绅身宾滨邻鳞麟珍尘陈春津秦频苹颦银垠筠巾民珉缗贫淳醇纯唇伦纶轮沦匀旬巡驯钧均臻榛姻寅彬鹑皴遵循振甄岷谆椿询恂峋莘堙屯呻粼磷辚濒闽豳逡填狺泯洵溱夤荀竣娠纫鄞抡畛嶙斌氤
十二文，文闻纹云氛分纷芬焚坟群裙君军勤斤筋勋薰曛熏荤耘芸汾氲员欣芹殷昕贲郧雯蕲
十三元，元原源园猿辕坦烦繁蕃樊翻萱喧冤言轩藩魂浑温孙门尊存蹲敦墩暾屯豚村盆奔论坤昏婚阍痕根恩吞沅媛援爰幡番反埙鸳宛掀昆琨鲲扪荪髡跟垠抡蕴犍袁怨蜿溷昆炖饨臀喷纯
十四寒，寒韩翰丹殚单安难餐滩坛檀弹残干肝竿乾阑栏澜兰看刊丸桓纨端湍酸团抟攒官观冠鸾銮栾峦欢宽盘蟠漫汗郸叹摊奸剜棺钻瘢谩瞒潘胖弁拦完莞獾拌掸萑倌繁曼馒鳗谰洹滦
十五删，删潸关弯湾还环鹌鬟寰班斑颁般蛮颜菅攀顽山鳏艰闲娴悭孱潺殷扳讪患`,vy=`一先，先前千阡笺天坚肩贤弦烟燕莲怜田填钿年颠巅牵妍研眠渊涓蠲编玄县泉迁仙鲜钱煎然延筵禅蝉缠连联涟篇偏便全宣镌穿川缘鸢铅捐旋娟船涎鞭专圆员乾虔愆骞权拳椽传焉跹溅舷咽零骈阗鹃翩扁平沿诠痊悛荃遄卷挛戋佃滇婵颛犍搴嫣癣澶单竣鄢扇键蜷棉
二萧，萧箫挑貂刁凋雕迢条跳苕调枭浇聊辽寥撩僚寮尧幺宵消霄绡销超朝潮嚣樵谯骄娇焦蕉椒饶烧遥姚摇谣瑶韶昭招飚标杓镳瓢苗描猫要腰邀乔桥侨妖夭漂飘翘祧佻徼侥哨娆陶橇劭潇骁獠料硝灶鹞钊蛲峤轿荞嘹逍燎憔剽
三肴，肴巢交郊茅嘲钞包胶爻苞梢蛟庖匏坳敲胞抛鲛崤铙炮哮捎茭淆泡跑咬啁教咆鞘剿刨佼抓姣唠
四豪，豪毫操髦刀萄猱桃糟漕旄袍挠蒿涛皋号陶翱敖遭篙羔高嘈搔毛艘滔骚韬缫膏牢醪逃槽劳洮叨绸饕骜熬臊涝淘尻挑嚣捞嗥薅咎谣
五歌，歌多罗河戈阿和波科柯陀娥蛾鹅萝荷过磨螺禾哥娑驼佗沱峨那苛诃珂轲莎蓑梭婆摩魔讹坡颇俄哦呵皤么涡窝茄迦伽磋跎番蹉搓驮献蝌箩锅倭罗嵯锣
六麻，麻花霞家茶华沙车牙蛇瓜斜邪芽嘉瑕纱鸦遮叉葩奢楂琶衙赊涯夸巴加耶嗟遐笳差蟆蛙虾拿葭茄挝呀枷哑娲爬杷蜗爷芭鲨珈骅娃哇洼畲丫夸裟瘕些桠杈痂哆爹椰咤笆桦划迦揶吾佘
七阳，阳杨扬香乡光昌堂章张王房芳长塘妆常凉霜藏场央泱鸯秧嫱床方浆觞梁娘庄黄仓皇装殇襄骧相湘箱缃创忘芒望尝偿樯枪坊囊郎唐狂强肠康冈苍匡荒遑行妨棠翔良航倡伥羌庆姜僵缰疆粮穰将墙桑刚祥详洋徉佯粱量羊伤汤鲂樟彰漳璋猖商防
七筐，筐煌隍凰蝗惶璜廊浪裆沧纲亢吭潢钢丧盲簧忙茫傍汪臧琅当庠裳昂障糖疡锵杭邙赃滂禳攘瓤抢螳踉眶炀阊彭蒋亡殃蔷镶孀搪彷胱磅膀螃
八庚，庚更羹盲横觥彭棚亨英瑛烹平评京惊荆明盟鸣荣莹兵卿生甥笙牲檠擎鲸迎行衡耕萌氓宏闳茎莺樱泓橙筝争清情晴精睛菁旌晶盈瀛嬴营婴缨贞成盛城诚呈程声征正轻名令并倾萦琼赓撑瞠枪伧峥猩珩蘅铿嵘丁嘤鹦铮砰绷轰訇瞪侦顷榜抨趟坪请
九青，青经泾形刑邢型陉亭庭廷霆蜓停丁宁钉仃馨星腥醒惺娉灵棂龄铃苓伶零玲翎瓴囹聆听厅汀冥溟螟铭瓶屏萍荧萤荥扃町瞑暝
十蒸，蒸承丞惩陵凌绫冰膺鹰应蝇绳渑乘升胜兴缯凭仍兢矜征凝称登灯僧增曾憎层能棱朋鹏弘肱腾滕藤恒冯瞢扔誊
十一尤，尤邮优忧流留榴骝刘由油游猷悠攸牛修羞秋周州洲舟酬仇柔俦畴筹稠邱抽湫遒收鸠不愁休囚求裘球浮谋牟眸矛侯猴喉讴沤鸥瓯楼娄陬偷头投钩沟幽彪疣绸浏瘤犹啾酋售蹂揉搜叟邹貅泅球逑俅蜉桴罘欧搂抠髅蝼兜句妯惆呕缪繇偻篓馗区
十二侵，侵寻浔林霖临针箴斟沈深淫心琴禽擒钦衾吟今襟金音阴岑簪琳琛椹谌忱壬任黔歆禁喑森参淋郴妊湛
十三覃，覃潭谭参骖南男谙庵含涵函岚蚕探贪耽龛堪戡谈甘三酣篮柑惭蓝郯婪庵颔褴澹
十四盐，盐檐廉帘嫌严占髯谦奁纤签瞻蟾炎添兼缣尖潜阎镰粘淹箝甜恬拈暹詹渐歼黔沾苫占崦阉砭
十五咸，咸缄谗衔岩帆衫杉监凡馋芟喃嵌掺搀严`,yy=`一董，董懂动孔总笼[东韵同]拢桶捅蓊蠓汞
二肿，肿种踵宠垅陇拥冗重冢捧勇甬踊涌俑蛹恐拱竦悚耸巩怂奉
三讲，讲港棒蚌项耩
四纸，纸只咫是靡彼毁委诡髓累技绮觜此泚蕊徙尔弭婢侈弛豕紫旨指视美否[否泰]痞兕几姊比水轨止徴市喜己纪跪妓蚁鄙晷子仔梓矢雉死履垒癸趾址以已似耜祀史驶耳使[使令]里理李起杞圯跂士仕俟始齿矣耻麂枳峙鲤迩氏玺巳[辰巳]滓苡倚匕迤逦旖旎舣蚍秕芷拟你企诔捶屣棰揣豸祉恃
五尾，尾苇鬼岂卉几[几多]伟斐菲[菲薄]匪篚娓悱榧韪炜虺玮虮
六语，语[语言]圉圄吕侣旅杼伫与[给予]予[赐予]渚煮暑鼠汝茹[食也]黍杵处[居住、处理]贮女许拒炬距所楚础阻俎沮叙绪序屿墅巨去[除也]苣举讵溆浒钜醑咀诅苎抒楮
七麌，麌雨宇舞府鼓虎古股贾[商贾]估土吐圃庾户树[种植,动词]煦诩努辅组乳弩补鲁橹睹腐数[动词]簿竖普侮斧聚午伍釜缕部柱矩武五苦取抚浦主杜坞祖愈堵扈父甫禹羽怒[遇韵同]腑拊俯罟赌卤姥鹉拄莽[养韵同]栩窭脯妩庑否[是否]麈褛篓偻酤牡谱怙肚踽虏孥诂瞽羖祜沪雇仵缶母某亩蛊琥
八荠，荠礼体米启陛洗邸底抵弟坻柢涕悌济[水名]澧醴诋眯娣棨递昵睨蠡
九蟹，蟹解洒楷[佳韵同]拐矮摆买骇
十贿，贿悔罪馁每块汇猥璀磊蕾傀儡腿海改采彩在宰醢铠恺待殆怠乃载[岁也]凯闿倍蓓迨亥
十一轸，轸敏允引尹尽忍准隼笋盾[阮韵同]闵悯菌[真韵同]蚓牝殒紧蠢陨哂诊疹赈肾蜃膑黾泯窘吮缜
十二吻，吻粉蕴愤隐谨近忿抆刎揾槿瑾恽韫
十三阮，阮远[远近]晚苑返反饭[动词]偃蹇琬沅宛婉畹菀蜿绻巘挽堰混棍阃悃捆衮滚鲧稳本畚笨损忖囤遁很沌恳垦龈
十四旱，旱暖管琯满短馆[翰韵同]缓盥[翰韵同]碗懒伞伴卵散[散布]伴诞罕瀚[浣]断[断绝]侃算[动词]款但坦袒纂缎拌懑谰莞
十五潸，潸眼简版板阪盏产限绾柬拣撰馔赧皖汕铲羼见楝栈
十六铣，铣善[善恶]遣[遣送]浅典转[霰韵同]衍犬选冕辇免展茧辨篆勉剪卷显饯[霰韵同]践喘藓软蹇[阮韵同]演兖件腆跣缅缱鲜[少也]殄扁匾蚬岘畎燹隽键变泫癣阐颤膳鳝舛娩辗邅[先韵同]脔辫捻
十七筱，筱小表鸟了晓少[多少]扰绕绍杪沼眇矫皎杳窈窕袅挑[挑拨]掉[啸韵同]肇缥缈渺淼茑赵兆缴缭[萧韵同]夭[夭折]悄舀侥蓼娆硗剿晁藐秒殍了<了望>
十八巧，巧饱卯狡爪鲍挠[豪韵同]搅绞拗咬炒吵佼姣[肴韵同]昴茆獠[萧韵同]
十九皓，皓宝藻早枣老好[好丑]道稻造[造作]脑恼岛倒[跌到]祷[号韵同]捣抱讨考燥扫[号韵同]嫂保鸨稿草昊浩镐杲缟槁堡皂瑙媪燠袄懊葆褓芼澡套涝蚤拷栲
二十哿，哿火舸亸舵我拖娜荷[负荷]可左果裹朵锁琐堕惰妥坐[坐立]裸跛颇[稍也]夥颗祸桠婀逻卵那坷爹[麻韵同]簸叵垛哆硪么[歌韵同]峨[歌韵同]
二十一马，马下[上下]者野雅瓦寡社写泻夏[华夏]也把厦惹冶贾[姓贾]假[真假]且玛姐舍喏赭洒嘏剐打耍那
二十二养，养痒象像橡仰朗桨奖蒋敞氅厂枉往颡强[勉强]惘两曩丈杖仗[漾韵同]响掌党想鲞榜爽广享向飨幌莽纺长[长幼]网荡上[上升]壤赏仿罔谠倘魍魉谎蟒漭嗓盎恍脏<肮脏>吭沆慷襁镪抢肮犷
二十三梗，梗影景井岭领境警请饼永骋逞颖颍顷整静省幸颈郢猛丙炳杏秉耿矿冷靖哽绠荇艋蜢皿儆悻婧阱狰[庚韵同]靓惺打瘿并<合并>犷眚憬鲠
二十四迥，迥炯茗挺艇梃醒[青韵同]酩酊并<并行,并且>等鼎顶肯拯謦刭溟
二十五有，有酒首口母[麌韵同]妇[麌韵同]後柳友斗狗久负[麌韵同]厚手叟守否[麌韵同]右受牖偶走阜[麌韵同]九后咎薮吼帚垢舅纽藕朽臼肘韭亩[麌韵同]剖诱牡[麌韵同]缶酉苟丑糗扣叩某莠寿绶玖授蹂[尤韵同]揉[尤韵同]溲纣钮扭呕殴纠耦掊瓿拇姆擞绺抖陡蚪篓黝赳取[麌韵同]
二十六寝，寝饮[饮食]锦品枕[枕衾]审甚[沁韵同]廪衽稔凛懔沈[姓氏]朕荏婶沈<沈阳>葚禀噤谂怎恁饪覃
二十七感，感览揽胆澹[淡,勘韵同]啖坎惨敢颔[覃韵同]撼毯糁湛菡萏罱椠喊嵌[咸韵同]橄榄
二十八琰，琰俭焰敛[艳韵同]险检脸染掩点簟贬冉苒陕谄俨闪剡忝[艳韵同]奄歉芡崭堑渐[盐韵同]罨捡弇崦玷
二十九豏，豏槛范减舰犯湛巉[咸韵同]斩黯范`,gy=`一送，送梦凤洞众弄贡冻痛栋仲中讽恸空控赣砻哄衷
二宋，宋重用颂诵统纵讼种综俸共供从缝雍封恐
三绛，绛降巷撞虹洚淙
四置，置事地意志治思泪吏赐字义利器位戏至次累伪寺瑞智记异致肆翠骑使试类弃饵媚鼻易辔坠醉议翅避粹侍谊帅厕寄睡忌萃穗臂嗣吹遂恣四骥季刺驷识痣志寐魅
四邃，邃燧隧谥植织饲食积被芰懿悸觊冀暨匮馈篑比庇畀痹毖泌鸷贽挚渍迟祟豉珥示伺嗜自詈痢莉譬肄惴劓啻企腻施遗值柴出萎司诿陂二近始术瑟德
五未，未味气贵费沸尉畏慰蔚魏胃渭谓讳卉毅溉既衣忾诽痱蜚翡
六御，御处去虑誉署据驭曙助絮著豫翥恕与遽疏庶诅预茹语踞狙沮除如女讵欤楚嘘
七遇，遇路赂露鹭树度渡赋布步固素具数怒务雾鹜骛附兔故顾雇句墓暮慕募注驻祚裕误悟寤住戍库护诉蠹妒惧趣娶铸傅付谕妪捕哺忤措错醋赴恶互孺怖煦寓酤瓠输吐屡塑捂瞿驱讣属作酗雨获镀圃驸足播苦铺姹
八霁，霁制计势世丽岁卫济第艺惠慧币桂滞际厉涕契毙帝蔽敝锐戾裔袂系祭隶闭逝缀替细税例誓蕙偈诣砺励噬继谛系剂曳睇憩彗逮芮掣蓟妻挤弟题鳜蹶齐棣说彘离荔泥蜕赘揭唳泄娣薜呓濞捩羿谜缔切医
九泰，泰会带外盖大濑赖蔡害最贝霭沛艾兑奈绘桧脍会太汰癞粝蜕酹狈
十卦，卦挂懈隘卖画派债怪坏诫戒界介芥械拜快迈话败稗噫疥瀣湃聩惫杀喝解祭蒯喟呗寨
十一队，队内塞爱辈佩代退载碎背秽菜对废诲晦昧戴贷配妹溃黛赉吠逮岱肺溉耒慨块赛刈耐悖淬敦铠焙在再孛柿睐裁采回粹栽北劾悔
十二震，震信印进润阵镇填刃顺慎鬓晋骏闰峻衅振舜吝烬讯胤殡迅瞬谆馑蔺徇赈觐摈仅认衬瑾趁韧汛磷躏浚缙娠引诊蜃亲
十三问，问闻运晕韵训粪奋忿郡分紊汶愠靳近斤郓员拚隐
十四愿，愿论怨恨万饭献健寸困顿建宪劝蔓券钝闷逊嫩贩溷远曼喷艮敦郾褪堰圈
十五翰，翰岸汉难断乱叹干观散奈旦算玩烂贯半案按炭汗赞漫冠灌窜幔灿璨换焕唤悍弹惮段看判叛腕涣绊惋钻缦锻瀚胖谰蒜泮谩摊侃馆滩盥
十六谏，谏雁患涧闲宦晏慢盼豢栈惯串苋绽幻讪绾谩汕疝瓣篡铲栅扮
十七霰，霰殿面县变箭战扇煽膳传见砚选院练燕宴贱电荐绢彦甸便眷线倦羡堰奠遍恋眩钏倩卞汴弁拚咽片禅谴谚缘颤擅援媛瑗佃钿淀狷煎悬袖穿茜溅拣缠牵先炫善缱遣研衍辗转饯
十八啸，啸笑照庙窍妙诏召邵要曜耀调钓吊叫燎峤少眺诮料肖尿剽掉鹞粜轿烧疗漂醮骠绕娆摇哨约嘹裱
十九效，效教貌校孝闹淖豹爆罩拗窖酵稍乐较钞敲觉
二十号，号帽报导盗操噪灶奥告诰暴好到蹈劳傲躁涝漕造冒悼倒骜缟懊澳膏犒郜瀑旄靠糙
二十一个，个贺佐作逻坷轲大饿奈那些过和挫课唾簸磨座坐破卧货左惰
二十二驾，驾夜下谢榭罢夏暇霸灞嫁赦借藉炙蔗假化舍价射骂稼架诈亚罅跨麝咤怕讶诧迓胯柘卸泻靶乍桦杷
二十三漾，漾上望相将状帐浪唱让旷壮放向仗畅量葬匠障谤尚涨饷样藏舫访养酱嶂抗当酿亢况脏瘴王谅亮妄丧怅两圹宕忘傍砀恙吭炀张行广汤炕长创诳掠妨旺荡防怏偿荡盎仰挡傥
二十四敬，敬命正令政性镜盛行圣咏姓庆映病柄郑劲竞净竟孟聘诤泳请倩硬檠晟更横榜迎娉轻评证侦并盟
二十五径，径定听胜磬应乘媵赠佞称罄邓胫莹证孕兴经醒廷锭庭钉暝剩凭凝橙凳蹬
二十六宥，宥候就授售寿秀绣宿奏富兽斗漏陋守狩昼寇茂懋旧胃宙袖岫柚覆复救臭幼佑右侑囿豆窦逗溜瘤留构遘媾购透瘦漱镂鹫走副诟究凑谬缪疚灸畜柩骤首皱绉戊句鼬蹂沤又逅蔻伏收犹油后厚扣吼读
二十七沁，沁饮禁任荫谶浸鸩枕衽赁临渗妊吟深甚沈
二十八勘，勘暗滥担憾缆瞰三暂参澹淡憨淦
二十九艳，艳剑念验赡店占敛厌滟垫欠僭砭餍殓苫盐沾兼念埝俺潜忝
三十陷，陷鉴监汛梵帆忏赚蘸谗剑欠淹站`,py=`一屋，屋木竹目服福禄熟谷肉咒鹿腹菊陆轴逐牧伏宿读犊渎牍椟黩毂复粥肃育六缩哭幅斛戮仆畜蓄叔淑菽独卡馥沐速祝麓镞蹙筑穆睦啄覆鹜秃扑鬻辐瀑竺簇暴掬濮郁矗复塾朴蹴煜谡碌毓舳柚蝠辘夙蝮匐觫囿苜茯髑副孰谷
二沃，沃俗玉足曲粟烛属录辱狱绿毒局欲束鹄蜀促触续督赎浴酷瞩躅褥旭欲渌逯告仆
三觉，觉角桷较岳乐捉朔数卓汲琢剥趵爆驳邈雹璞朴确浊擢镯濯幄喔药握搦学
四质，质日笔出室实疾术一乙壹吉秩密率律逸佚失漆栗毕恤蜜橘溢瑟膝匹黜弼七叱卒虱悉谧轶诘戌佶栉昵窒必侄蛭泌秫蟀嫉唧怵帅聿郅桎茁汨尼蒺
五物，物佛拂屈郁乞掘讫吃绂弗诎崛勿熨厥迄不屹芴倔尉蔚
六月，月骨发阙越谒没伐罚卒竭窟笏钺歇突忽勃蹶筏厥蕨掘阀讷殁粤悖兀碣猝樾羯汨咄渤凸滑孛纥核饽垡阏堀曰讦
七曷，曷达末阔活钵脱夺褐割沫拔葛渴拨豁括聒抹秣遏挞萨掇喝跋獭撮剌泼斡捋袜适咄妲
八黠，黠札拔猾八察杀刹轧刖戛秸嘎瞎刮刷滑
九屑，屑节雪绝列烈结穴说血舌洁别裂热决铁灭折拙切悦辙诀泄咽噎杰彻别哲设劣碣掣谲窃缀阅抉挈捩楔蹩亵蔑捏竭契疖涅颉撷撤跌蔑浙澈蛭揭啜辍迭呐侄冽掇批橇
十药，药薄恶略作乐落阁鹤爵若约脚雀幕洛壑索郭博错跃若缚酌托削铎灼凿却络鹊度诺橐漠钥著虐掠获泊搏勺酪谑廓绰霍烁莫铄缴谔鄂亳恪箔攫涸疟郝骆膜粕礴拓蠖鳄格昨柝摸貉愕柞寞膊魄烙焯厝噩泽矍各猎昔芍踱迮
十一陌，陌石客白泽伯迹宅席策碧籍格役帛戟璧驿麦额柏魄积脉夕液册尺隙逆画百辟赤易革脊获翮屐适剧碛隔益栅窄核掷责惜僻癖辟掖腋释舶拍择摘射斥弈奕迫疫译昔瘠赫炙谪虢腊硕螫藉翟亦鬲骼鲫借啧蜴帼席貊汐摭咋吓剌百莫蝈绎霸霹
十二锡，锡壁历枥击绩笛敌滴镝檄激寂翟逖籴析晰溺觅摘狄荻戚涤的吃霹沥惕踢剔砾栎适嫡阋觋淅晰吊霓倜
十三职，职国德食蚀色力翼墨极息直得北黑侧饰贼刻则塞式轼域殖植敕饬棘惑默织匿亿忆特勒劾仄稷识逼克蜮唧即拭弋陟测冒抑恻肋亟殛忒嶷熄穑啬匐鲫或愎翌
十四缉，缉辑立集邑急入泣湿习给十拾什袭及级涩粒揖汁蛰笠执隰汲吸熠岌歙熠挹
十五合，合塔答纳榻杂腊蜡匝阖蛤衲沓鸽踏飒拉盍搭溘嗑
十六叶，叶帖贴牒接猎妾蝶箧涉捷颊楫摄蹑谍协侠荚睫慑蹀挟喋燮褶靥烨摺辄捻婕聂霎
十七洽，洽狭峡法甲业邺匣压鸭乏怯劫胁插押狎掐夹恰眨呷喋札钾`;var Uu=c=>c.split(`
`).map((s,o)=>({index:o,name:s.split("，")[0],word:s.split("，")[1].replace(/\[[^\]]*?\]/g,"").replace(/\<[^\>]*?\>/g,"")}));const Ql={shangping:Uu(my),xiaping:Uu(vy),shangsheng:Uu(yy),qusheng:Uu(gy),rusheng:Uu(py)};function by({ciPais:c,currentCiPai:s,setCurrentCiPai:o}){function r(d){o(d)}return D.jsx("div",{className:"px-5 mt-3 h-[9rem] overflow-y-auto",children:D.jsx("ul",{className:"grid grid-cols-4 gap-4",children:c.map((d,g)=>D.jsx("li",{className:"text-center bg-white shadow rounded px-4 py-3 hover:bg-gray-100 text-gray-800 hover:text-gray-600 cursor-pointer",onClick:()=>r(d),children:d},g))})})}function Sy(){const c=["浣溪沙","暗香","菩萨蛮","蝶恋花","如梦令","忆江南","清平乐","虞美人","临江仙","西江月","水调歌头"],[s,o]=z.useState("浣溪沙"),r=hy[s]||"",[d,g]=z.useState({}),[A,_]=z.useState({}),[p,h]=z.useState({}),[R,C]=z.useState(1),[B,F]=z.useState([]),K=(W,w)=>{const et=w.target.value;g(G=>({...G,[W]:et})),J(et,W)},J=(W,w)=>{const et=r.split(`
`)[w];if(!et)return;const G=W.trim().split(""),dt=et.replace(/（.*?）/g,"").trim().split(""),pt=[],ht=[],jt=et.trim().split("");for(let H=0;H<jt.length;H++){const V=jt[H];jt.slice(H+1,H+4).join("")==="（韵）"?(ht.push(!0),H+=3):V==="（"&&jt.slice(H,H+3).join("")==="（韵）"?H+=2:ht.push(!1)}const wt=[];for(let H=0;H<ht.length;H++)ht[H]&&W[H]&&wt.push(W[H]);wt.length>0&&F(H=>({...H,[w]:wt}));for(let H=0;H<dt.length;H++){const V=dt[H],$=G[H];if(!$){pt.push(!1);continue}q($,V)?pt.push(!1):pt.push(!0)}_(H=>({...H,[w]:pt})),h(H=>({...H,[w]:ht}))};z.useEffect(()=>{console.log("总韵字数组:",B)},[B]);const Q=(W,w)=>{const et=B[w]?.[0];if(!et)return!0;for(const G in Ql){const ut=Ql[G],dt=ut.some(ht=>ht.word.includes(et)),pt=ut.some(ht=>ht.word.includes(W));if(dt&&pt)return!0}return!1},q=(W,w)=>{if(w!=="平"&&w!=="仄")return!0;let et=!1;for(const G in Ql)w==="平"&&(G==="shangping"||G==="xiaping")&&Ql[G].some(ut=>ut.word.includes(W))&&(et=!0),w==="仄"&&(G==="qusheng"||G==="shangsheng"||G==="rusheng")&&Ql[G].some(ut=>ut.word.includes(W))&&(et=!0);if(et===!1){let G=0;for(const ut in Ql)Ql[ut].some(dt=>dt.word.includes(W))||G++;G===5&&(et=!0)}return et};return D.jsxs(D.Fragment,{children:[D.jsx(Yf,{}),D.jsxs("div",{className:"max-w-4xl mx-auto",children:[D.jsx("div",{className:"pt-20 flex justify-center font-noto text-xl",children:"选择词牌以开始"}),D.jsx(by,{ciPais:c,currentCiPai:s,setCurrentCiPai:o}),D.jsxs("div",{className:"px-4 py-8",children:[D.jsxs("h2",{className:"text-2xl font-semibold mb-4",children:["当前词牌：",s]}),typeof r=="string"&&r.trim()!==""?D.jsx("div",{className:"bg-white shadow p-6 rounded leading-loose",children:r.split(`
`).map((W,w)=>{const et=W,G=[];for(let ut=0;ut<et.length;ut++){const dt=et[ut];if(dt==="（"&&et.slice(ut,ut+3)==="（韵）")continue;const pt=et.slice(ut+1,ut+4)==="（韵）";G.push(D.jsx("span",{className:pt?"text-blue-600":"",children:dt},ut)),pt&&(ut+=3)}return D.jsxs("div",{className:"line-container mb-6",children:[D.jsx("div",{className:"whitespace-pre-line",children:G}),D.jsx("div",{children:D.jsx("input",{type:"text",value:d[w]||"",onChange:ut=>K(w,ut),className:"w-full mt-2 px-3 py-2 border rounded focus:outline-none focus:ring bg-gray-50"})}),D.jsx("div",{className:"mt-2 text-lg tracking-wide",children:(d[w]||"").split("").map((ut,dt)=>D.jsx("span",{className:A[w]?.[dt]?"text-red-600":p[w]?.[dt]&&Q(ut,w)?"text-green-600":"",children:ut},dt))})]},w)})}):D.jsx("p",{className:"text-gray-500",children:"暂无内容"})]}),D.jsx("footer",{className:"w-screen fixed bottom-7 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-500 pt-6",children:"© 2025 Eliot Hongtuo · 以词为舟，泛古今"})]})]})}function Ey({color:c,content:s}){const o=[],r=s.split(`
`).join("").trim();for(let d=0;d<r.length;d+=60)o.push(r.slice(d,d+60));return z.useEffect(()=>{document.querySelectorAll(".matrix-column").forEach((g,A)=>{const _=Math.floor(Math.random()*o.length);g.setAttribute("data-content",o[_]??"")})},[s]),D.jsx("div",{className:"matrix-container",style:{background:c},children:D.jsxs("div",{className:"matrix-pattern",children:[D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"}),D.jsx("div",{className:"matrix-column"})]})})}function xy(){const c=["142, 249, 252","142, 252, 204","142, 252, 157","215, 252, 142","252, 252, 142","252, 208, 142","252, 142, 142","252, 142, 239","204, 142, 252","142, 202, 252"],[s,o]=z.useState(We&&Object.keys(We).length>0?Object.keys(We).map((H,V)=>({title:H,content:We[H],color:c[V%c.length]})):[]),[r,d]=z.useState(0),g=lh(),[A,_]=z.useState(null),[p,h]=z.useState(null),R=z.useRef(p),C=s.length>10?s.length:10,B=()=>{const H=document.querySelector(".inner");H&&(H.style.animation="none"),h(V=>V===null?0:V+1)},F=()=>{const H=document.querySelector(".inner");H&&(H.style.animation="none"),h(V=>V===null?0:V-1)};function K(H,V){if(!Array.isArray(H)||H.length===0)return H;const $=H.length,rt=(V%$+$)%$;return H.slice(-rt).concat(H.slice(0,-rt))}z.useEffect(()=>{let H=p%C;if(Math.abs(H/C)>.2&&Math.abs(H/C)<.3){console.log("Point reached a special position!",p,Math.abs(p%C/C));let V=0;if(console.log("prev",R.current,"current",p),R.current<p){for(;Math.abs(H/C)<.3;)H>0?H++:H--,V++,d($=>$+V);if(H!==p){let $=K(s,V);console.log($),o($),h(rt=>rt+V)}}else{for(console.log("reversed");Math.abs(H/C)>.2;)H>0?H--:H++,V++,d($=>$-V);if(H!==p){let $=K(s,-V);console.log($),o($),h(rt=>rt-V)}}}else if(Math.abs(H/C)>.7&&Math.abs(H/C)<.8){console.log("Point reached a special position!",p,Math.abs(p%C/C));let V=0,$=p%C;if(console.log("prev",R.current,"current",p),R.current<p){for(;Math.abs($/C)<.8;)$>0?$++:$--,V++;if(d(rt=>rt+V),$!==p){let rt=K(s,V);console.log(rt),o(rt),h(M=>M+V)}}else{for(console.log("reversed");Math.abs($/C)>.7;)$>0?$--:$++,V++,d(rt=>rt-V);if($!==p){let rt=K(s,-V);console.log(rt),o(rt),h(M=>M-V)}}}},[p,r,s]);const J=H=>{const V=document.querySelector(".inner");V&&(V.style.animation="none"),console.log("index",H,"cardOffset",r),h($=>{let M=H+r-$;return M>C/2&&(M-=C),M<-C/2&&(M+=C),console.log("offset",M),$+M})};z.useEffect(()=>{console.log("prev",R.current,"current",p,"offset",r),R.current=p},[p,r]);const Q=z.useRef({x:0,y:0,locked:null}),q=z.useRef(!1),W=z.useRef(!1),w=z.useRef("-"),et=z.useRef(null),G=2,ut=(H,V)=>Math.abs(H)<G&&Math.abs(V)<G?null:Math.abs(H)>Math.abs(V)?H>0?"right":"left":V>0?"down":"up",dt=(H,V)=>{W.current=!1;try{H.currentTarget.setPointerCapture&&H.currentTarget.setPointerCapture(H.pointerId)}catch($){console.warn("setPointerCapture failed:",$)}Q.current={x:H.clientX,y:H.clientY,locked:null},q.current=!0,w.current="-",et.current=V},pt=H=>{if(Q.current.x===0&&Q.current.y===0)return;const V=H.clientX-Q.current.x,$=H.clientY-Q.current.y,rt=ut(V,$);rt&&(w.current=rt),(Math.abs(V)>G||Math.abs($)>G)&&(W.current=!0)},ht=H=>{if(q.current){if((p%C+C)%C===H){console.log("current selected"),g(`/poems/${encodeURIComponent(s[H].title)}`);return}W.current?w.current==="left"?B():w.current==="right"&&F():et.current!=null&&J(et.current-r),q.current=!1,Q.current={x:0,y:0,locked:null},w.current="-",W.current=!1,et.current=null}},jt=()=>{const H=document.querySelector(".inner");H&&(H.style.animationPlayState="paused")},wt=()=>{const H=document.querySelector(".inner");H&&(H.style.animationPlayState="running")};return D.jsxs(D.Fragment,{children:[D.jsx(Yf,{}),D.jsxs("div",{className:"wrapper",style:{},children:[D.jsx("div",{className:"inner",style:{"--quantity":C,transform:`perspective(1000px) rotateX(-15deg) rotateY(${-p*360/C}deg)`},children:s.map((H,V)=>D.jsx("div",{className:"card",style:{"--index":V,"--color-card":H.color,touchAction:"none"},onMouseEnter:()=>{jt(),_(V)},onMouseLeave:()=>{wt(),_(null)},onPointerDown:$=>dt($,V),onPointerMove:$=>pt($),onPointerUp:()=>ht(V),onPointerCancel:()=>ht(),children:D.jsx(Ne,{to:`/poems/${encodeURIComponent(H.title)}`,className:"text-blue-500",onClick:$=>{W.current&&($.preventDefault(),W.current=!1)},children:D.jsxs("div",{className:"img relative text-[#355c7d]",children:[H.title,A===V&&D.jsx("div",{className:"pointer-events-none absolute inset-0",children:D.jsx(Ey,{color:`rgb(${H.color})`,content:H.content})})]})})},V))}),D.jsx("div",{onClick:F,className:"absolute left-[25vw]",children:D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#355c7d",className:"w-10 h-10 text-white/80 hover:text-white cursor-pointer",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),D.jsx("div",{onClick:B,className:"absolute right-[25vw]",children:D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#355c7d",className:"w-10 h-10 text-white/80 hover:text-white cursor-pointer",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),D.jsx("div",{className:"relative max-w-4xl mx-auto p-4 mt-20 z-100",children:D.jsx("ul",{className:" flex justify-center items-start space-x-4",children:We&&Object.keys(We).length>0?Object.keys(We).map((H,V)=>D.jsx(Ne,{className:`flex items-center h-[75px] hover:h-[90px] py-2 bg-[url(assets/bamboo-surface.jpg)] \r
                            bg-cover hover:no-underline border-[#355c7d] border border-solid shadow rounded`,to:`/poems/${encodeURIComponent(H)}`,onMouseEnter:$=>{$.currentTarget.style.backgroundImage="none",$.currentTarget.style.backgroundColor=`rgb(${c[V%c.length]})`,J(V)},onMouseLeave:$=>{$.currentTarget.style.backgroundImage="url(assets/bamboo-surface.jpg)"},children:D.jsx("li",{className:" text-center text-[#355c7d] bg-sky-500/20",style:{writingMode:"vertical-rl",textOrientation:"upright"},children:H})},V)):D.jsx("li",{children:"暂无词集数据"})})})]})}function Ty(){const{title:c}=gv(),s=We[c],o=s?s.split(`

`):[];return s?D.jsxs(D.Fragment,{children:[D.jsx(Yf,{}),D.jsxs("div",{className:"max-w-[60vw] mx-auto p-4 pt-20",children:[D.jsx("h1",{className:"text-center text-2xl font-bold mb-4",children:c}),D.jsx("div",{className:"space-y-6",children:o.map((r,d)=>D.jsx("div",{className:"leading-relaxed",children:r.split(`
`).map((g,A)=>D.jsx("p",{children:g},A))},d))})]})]}):D.jsxs("div",{children:["未找到对应词集：",c]})}function Ay(){return D.jsxs(Uv,{children:[D.jsx(Cu,{path:"/",element:D.jsx(dy,{})}),D.jsx(Cu,{path:"/tools",element:D.jsx(Sy,{})}),D.jsx(Cu,{path:"/poems",element:D.jsx(xy,{})}),D.jsx(Cu,{path:"/poems/:title",element:D.jsx(Ty,{})})]})}G0.createRoot(document.getElementById("root")).render(D.jsx(z.StrictMode,{children:D.jsx(ey,{children:D.jsx(Ay,{})})}));
