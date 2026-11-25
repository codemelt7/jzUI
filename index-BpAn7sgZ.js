(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();var Gu={exports:{}},to={},Vu={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function o_(){if(lm)return Tt;lm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function v(D,Q,re){this.props=D,this.context=Q,this.refs=T,this.updater=re||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function S(){}S.prototype=v.prototype;function C(D,Q,re){this.props=D,this.context=Q,this.refs=T,this.updater=re||M}var U=C.prototype=new S;U.constructor=C,E(U,v.prototype),U.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,I={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(D,Q,re){var H,ge={},ye=null,Re=null;if(Q!=null)for(H in Q.ref!==void 0&&(Re=Q.ref),Q.key!==void 0&&(ye=""+Q.key),Q)F.call(Q,H)&&!w.hasOwnProperty(H)&&(ge[H]=Q[H]);var ve=arguments.length-2;if(ve===1)ge.children=re;else if(1<ve){for(var je=Array(ve),Mt=0;Mt<ve;Mt++)je[Mt]=arguments[Mt+2];ge.children=je}if(D&&D.defaultProps)for(H in ve=D.defaultProps,ve)ge[H]===void 0&&(ge[H]=ve[H]);return{$$typeof:r,type:D,key:ye,ref:Re,props:ge,_owner:I.current}}function J(D,Q){return{$$typeof:r,type:D.type,key:Q,ref:D.ref,props:D.props,_owner:D._owner}}function G(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function $(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(re){return Q[re]})}var ie=/\/+/g;function ce(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?$(""+D.key):Q.toString(36)}function j(D,Q,re,H,ge){var ye=typeof D;(ye==="undefined"||ye==="boolean")&&(D=null);var Re=!1;if(D===null)Re=!0;else switch(ye){case"string":case"number":Re=!0;break;case"object":switch(D.$$typeof){case r:case e:Re=!0}}if(Re)return Re=D,ge=ge(Re),D=H===""?"."+ce(Re,0):H,P(ge)?(re="",D!=null&&(re=D.replace(ie,"$&/")+"/"),j(ge,Q,re,"",function(Mt){return Mt})):ge!=null&&(G(ge)&&(ge=J(ge,re+(!ge.key||Re&&Re.key===ge.key?"":(""+ge.key).replace(ie,"$&/")+"/")+D)),Q.push(ge)),1;if(Re=0,H=H===""?".":H+":",P(D))for(var ve=0;ve<D.length;ve++){ye=D[ve];var je=H+ce(ye,ve);Re+=j(ye,Q,re,je,ge)}else if(je=x(D),typeof je=="function")for(D=je.call(D),ve=0;!(ye=D.next()).done;)ye=ye.value,je=H+ce(ye,ve++),Re+=j(ye,Q,re,je,ge);else if(ye==="object")throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Re}function oe(D,Q,re){if(D==null)return D;var H=[],ge=0;return j(D,H,"","",function(ye){return Q.call(re,ye,ge++)}),H}function fe(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(re){(D._status===0||D._status===-1)&&(D._status=1,D._result=re)},function(re){(D._status===0||D._status===-1)&&(D._status=2,D._result=re)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var Y={current:null},K={transition:null},V={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:K,ReactCurrentOwner:I};function q(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:oe,forEach:function(D,Q,re){oe(D,function(){Q.apply(this,arguments)},re)},count:function(D){var Q=0;return oe(D,function(){Q++}),Q},toArray:function(D){return oe(D,function(Q){return Q})||[]},only:function(D){if(!G(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Tt.Component=v,Tt.Fragment=t,Tt.Profiler=l,Tt.PureComponent=C,Tt.StrictMode=s,Tt.Suspense=h,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,Tt.act=q,Tt.cloneElement=function(D,Q,re){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var H=E({},D.props),ge=D.key,ye=D.ref,Re=D._owner;if(Q!=null){if(Q.ref!==void 0&&(ye=Q.ref,Re=I.current),Q.key!==void 0&&(ge=""+Q.key),D.type&&D.type.defaultProps)var ve=D.type.defaultProps;for(je in Q)F.call(Q,je)&&!w.hasOwnProperty(je)&&(H[je]=Q[je]===void 0&&ve!==void 0?ve[je]:Q[je])}var je=arguments.length-2;if(je===1)H.children=re;else if(1<je){ve=Array(je);for(var Mt=0;Mt<je;Mt++)ve[Mt]=arguments[Mt+2];H.children=ve}return{$$typeof:r,type:D.type,key:ge,ref:ye,props:H,_owner:Re}},Tt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},Tt.createElement=N,Tt.createFactory=function(D){var Q=N.bind(null,D);return Q.type=D,Q},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(D){return{$$typeof:p,render:D}},Tt.isValidElement=G,Tt.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:fe}},Tt.memo=function(D,Q){return{$$typeof:m,type:D,compare:Q===void 0?null:Q}},Tt.startTransition=function(D){var Q=K.transition;K.transition={};try{D()}finally{K.transition=Q}},Tt.unstable_act=q,Tt.useCallback=function(D,Q){return Y.current.useCallback(D,Q)},Tt.useContext=function(D){return Y.current.useContext(D)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(D){return Y.current.useDeferredValue(D)},Tt.useEffect=function(D,Q){return Y.current.useEffect(D,Q)},Tt.useId=function(){return Y.current.useId()},Tt.useImperativeHandle=function(D,Q,re){return Y.current.useImperativeHandle(D,Q,re)},Tt.useInsertionEffect=function(D,Q){return Y.current.useInsertionEffect(D,Q)},Tt.useLayoutEffect=function(D,Q){return Y.current.useLayoutEffect(D,Q)},Tt.useMemo=function(D,Q){return Y.current.useMemo(D,Q)},Tt.useReducer=function(D,Q,re){return Y.current.useReducer(D,Q,re)},Tt.useRef=function(D){return Y.current.useRef(D)},Tt.useState=function(D){return Y.current.useState(D)},Tt.useSyncExternalStore=function(D,Q,re){return Y.current.useSyncExternalStore(D,Q,re)},Tt.useTransition=function(){return Y.current.useTransition()},Tt.version="18.3.1",Tt}var cm;function vh(){return cm||(cm=1,Vu.exports=o_()),Vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function l_(){if(um)return to;um=1;var r=vh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,m){var y,_={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(y in h)s.call(h,y)&&!c.hasOwnProperty(y)&&(_[y]=h[y]);if(p&&p.defaultProps)for(y in h=p.defaultProps,h)_[y]===void 0&&(_[y]=h[y]);return{$$typeof:e,type:p,key:x,ref:M,props:_,_owner:l.current}}return to.Fragment=t,to.jsx=d,to.jsxs=d,to}var dm;function c_(){return dm||(dm=1,Gu.exports=l_()),Gu.exports}var a=c_(),Ue=vh(),Ml={},Wu={exports:{}},ni={},Xu={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function u_(){return hm||(hm=1,(function(r){function e(K,V){var q=K.length;K.push(V);e:for(;0<q;){var D=q-1>>>1,Q=K[D];if(0<l(Q,V))K[D]=V,K[q]=Q,q=D;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var V=K[0],q=K.pop();if(q!==V){K[0]=q;e:for(var D=0,Q=K.length,re=Q>>>1;D<re;){var H=2*(D+1)-1,ge=K[H],ye=H+1,Re=K[ye];if(0>l(ge,q))ye<Q&&0>l(Re,ge)?(K[D]=Re,K[ye]=q,D=ye):(K[D]=ge,K[H]=q,D=H);else if(ye<Q&&0>l(Re,q))K[D]=Re,K[ye]=q,D=ye;else break e}}return V}function l(K,V){var q=K.sortIndex-V.sortIndex;return q!==0?q:K.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var h=[],m=[],y=1,_=null,x=3,M=!1,E=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(K){for(var V=t(m);V!==null;){if(V.callback===null)s(m);else if(V.startTime<=K)s(m),V.sortIndex=V.expirationTime,e(h,V);else break;V=t(m)}}function P(K){if(T=!1,U(K),!E)if(t(h)!==null)E=!0,fe(F);else{var V=t(m);V!==null&&Y(P,V.startTime-K)}}function F(K,V){E=!1,T&&(T=!1,S(N),N=-1),M=!0;var q=x;try{for(U(V),_=t(h);_!==null&&(!(_.expirationTime>V)||K&&!$());){var D=_.callback;if(typeof D=="function"){_.callback=null,x=_.priorityLevel;var Q=D(_.expirationTime<=V);V=r.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(h)&&s(h),U(V)}else s(h);_=t(h)}if(_!==null)var re=!0;else{var H=t(m);H!==null&&Y(P,H.startTime-V),re=!1}return re}finally{_=null,x=q,M=!1}}var I=!1,w=null,N=-1,J=5,G=-1;function $(){return!(r.unstable_now()-G<J)}function ie(){if(w!==null){var K=r.unstable_now();G=K;var V=!0;try{V=w(!0,K)}finally{V?ce():(I=!1,w=null)}}else I=!1}var ce;if(typeof C=="function")ce=function(){C(ie)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,oe=j.port2;j.port1.onmessage=ie,ce=function(){oe.postMessage(null)}}else ce=function(){v(ie,0)};function fe(K){w=K,I||(I=!0,ce())}function Y(K,V){N=v(function(){K(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,fe(F))},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(K){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var q=x;x=V;try{return K()}finally{x=q}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(K,V){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var q=x;x=K;try{return V()}finally{x=q}},r.unstable_scheduleCallback=function(K,V,q){var D=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?D+q:D):q=D,K){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=q+Q,K={id:y++,callback:V,priorityLevel:K,startTime:q,expirationTime:Q,sortIndex:-1},q>D?(K.sortIndex=q,e(m,K),t(h)===null&&K===t(m)&&(T?(S(N),N=-1):T=!0,Y(P,q-D))):(K.sortIndex=Q,e(h,K),E||M||(E=!0,fe(F))),K},r.unstable_shouldYield=$,r.unstable_wrapCallback=function(K){var V=x;return function(){var q=x;x=V;try{return K.apply(this,arguments)}finally{x=q}}}})($u)),$u}var fm;function d_(){return fm||(fm=1,Xu.exports=u_()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function h_(){if(pm)return ni;pm=1;var r=vh(),e=d_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function x(n){return h.call(_,n)?!0:h.call(y,n)?!1:m.test(n)?_[n]=!0:(y[n]=!0,!1)}function M(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||M(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,f,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,C);v[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,C);v[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,C);v[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,o,u){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),I=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),$=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),K=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var q=Object.assign,D;function Q(n){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var re=!1;function H(n,i){if(!n||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){u=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}n()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),g=u.stack.split(`
`),b=f.length-1,O=g.length-1;1<=b&&0<=O&&f[b]!==g[O];)O--;for(;1<=b&&0<=O;b--,O--)if(f[b]!==g[O]){if(b!==1||O!==1)do if(b--,O--,0>O||f[b]!==g[O]){var z=`
`+f[b].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=b&&0<=O);break}}}finally{re=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Q(n):""}function ge(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=H(n.type,!1),n;case 11:return n=H(n.type.render,!1),n;case 1:return n=H(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case I:return"Portal";case J:return"Profiler";case N:return"StrictMode";case ce:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oe:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function Re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Mt(n){var i=je(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function qe(n){n._valueTracker||(n._valueTracker=Mt(n))}function At(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=je(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gt(n,i){var o=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ht(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function qt(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function Wt(n,i){qt(n,i);var o=ve(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Fn(n,i.type,o):i.hasOwnProperty("defaultValue")&&Fn(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Bt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Fn(n,i,o){(i!=="number"||yt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Gt=Array.isArray;function ln(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function hn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _t(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Gt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ve(o)}}function W(n,i){var o=ve(i.value),u=ve(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function mn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,ct=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function et(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),nt[i]=nt[n]})});function A(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||nt.hasOwnProperty(n)&&nt[n]?(""+i).trim():i+"px"}function ee(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=A(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var Ee=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(n,i){if(i){if(Ee[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ce(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var me=null,Me=null,k=null;function _e(n){if(n=ja(n)){if(typeof me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oo(i),me(n.stateNode,n.type,i))}}function he(n){Me?k?k.push(n):k=[n]:Me=n}function Ie(){if(Me){var n=Me,i=k;if(k=Me=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function be(n,i){return n(i)}function Ne(){}var Ke=!1;function ht(n,i,o){if(Ke)return n(i,o);Ke=!0;try{return be(n,i,o)}finally{Ke=!1,(Me!==null||k!==null)&&(Ne(),Ie())}}function we(n,i){var o=n.stateNode;if(o===null)return null;var u=Oo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Qe=!1;if(p)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){Qe=!0}}),window.addEventListener("test",ot,ot),window.removeEventListener("test",ot,ot)}catch{Qe=!1}function ke(n,i,o,u,f,g,b,O,z){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(Te){this.onError(Te)}}var Et=!1,Kt=null,Wn=!1,wr=null,is={onError:function(n){Et=!0,Kt=n}};function Ns(n,i,o,u,f,g,b,O,z){Et=!1,Kt=null,ke.apply(is,arguments)}function Ps(n,i,o,u,f,g,b,O,z){if(Ns.apply(this,arguments),Et){if(Et){var ue=Kt;Et=!1,Kt=null}else throw Error(t(198));Wn||(Wn=!0,wr=ue)}}function mi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function gi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function nr(n){if(mi(n)!==n)throw Error(t(188))}function rt(n){var i=n.alternate;if(!i){if(i=mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return nr(f),n;if(g===u)return nr(f),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=g;else{for(var b=!1,O=f.child;O;){if(O===o){b=!0,o=f,u=g;break}if(O===u){b=!0,u=f,o=g;break}O=O.sibling}if(!b){for(O=g.child;O;){if(O===o){b=!0,o=g,u=f;break}if(O===u){b=!0,u=g,o=f;break}O=O.sibling}if(!b)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function it(n){return n=rt(n),n!==null?Jt(n):null}function Jt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Jt(n);if(i!==null)return i;n=n.sibling}return null}var nn=e.unstable_scheduleCallback,Xn=e.unstable_cancelCallback,xi=e.unstable_shouldYield,wa=e.unstable_requestPaint,Xt=e.unstable_now,rs=e.unstable_getCurrentPriorityLevel,zi=e.unstable_ImmediatePriority,ss=e.unstable_UserBlockingPriority,ir=e.unstable_NormalPriority,as=e.unstable_LowPriority,R=e.unstable_IdlePriority,B=null,se=null;function te(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(B,n,void 0,(n.current.flags&128)===128)}catch{}}var Z=Math.clz32?Math.clz32:Fe,Oe=Math.log,Ge=Math.LN2;function Fe(n){return n>>>=0,n===0?32:31-(Oe(n)/Ge|0)|0}var Be=64,We=4194304;function lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,g=n.pingedLanes,b=o&268435455;if(b!==0){var O=b&~f;O!==0?u=lt(O):(g&=b,g!==0&&(u=lt(g)))}else b=o&~f,b!==0?u=lt(b):g!==0&&(u=lt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Z(i),f=1<<o,u|=n[o],i&=~f;return u}function Xe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-Z(g),O=1<<b,z=f[b];z===-1?((O&o)===0||(O&u)!==0)&&(f[b]=Xe(O,i)):z<=i&&(n.expiredLanes|=O),g&=~O}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jt(){var n=Be;return Be<<=1,(Be&4194240)===0&&(Be=64),n}function Ft(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function cn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Z(i),n[i]=o}function $e(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Z(o),g=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~g}}function _n(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Z(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var Je=0;function Hi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vn,Tr,bi,Gi,Rt,fn=!1,On=[],Dt=null,Vt=null,An=null,Ar=new Map,Ta=new Map,br=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(n,i){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Ar.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(i.pointerId)}}function Aa(n,i,o,u,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[f]},i!==null&&(i=ja(i),i!==null&&Tr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function N0(n,i,o,u,f){switch(i){case"focusin":return Dt=Aa(Dt,n,i,o,u,f),!0;case"dragenter":return Vt=Aa(Vt,n,i,o,u,f),!0;case"mouseover":return An=Aa(An,n,i,o,u,f),!0;case"pointerover":var g=f.pointerId;return Ar.set(g,Aa(Ar.get(g)||null,n,i,o,u,f)),!0;case"gotpointercapture":return g=f.pointerId,Ta.set(g,Aa(Ta.get(g)||null,n,i,o,u,f)),!0}return!1}function Wh(n){var i=os(n.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=gi(o),i!==null){n.blockedOn=i,Rt(n.priority,function(){bi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);De=u,o.target.dispatchEvent(u),De=null}else return i=ja(o),i!==null&&Tr(i),n.blockedOn=o,!1;i.shift()}return!0}function Xh(n,i,o){Eo(n)&&o.delete(i)}function P0(){fn=!1,Dt!==null&&Eo(Dt)&&(Dt=null),Vt!==null&&Eo(Vt)&&(Vt=null),An!==null&&Eo(An)&&(An=null),Ar.forEach(Xh),Ta.forEach(Xh)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,fn||(fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,P0)))}function Ra(n){function i(f){return ba(f,n)}if(0<On.length){ba(On[0],n);for(var o=1;o<On.length;o++){var u=On[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Dt!==null&&ba(Dt,n),Vt!==null&&ba(Vt,n),An!==null&&ba(An,n),Ar.forEach(i),Ta.forEach(i),o=0;o<br.length;o++)u=br[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<br.length&&(o=br[0],o.blockedOn===null);)Wh(o),o.blockedOn===null&&br.shift()}var Ls=P.ReactCurrentBatchConfig,wo=!0;function L0(n,i,o,u){var f=Je,g=Ls.transition;Ls.transition=null;try{Je=1,mc(n,i,o,u)}finally{Je=f,Ls.transition=g}}function D0(n,i,o,u){var f=Je,g=Ls.transition;Ls.transition=null;try{Je=4,mc(n,i,o,u)}finally{Je=f,Ls.transition=g}}function mc(n,i,o,u){if(wo){var f=gc(n,i,o,u);if(f===null)Dc(n,i,u,To,o),Vh(n,u);else if(N0(f,n,i,o,u))u.stopPropagation();else if(Vh(n,u),i&4&&-1<C0.indexOf(n)){for(;f!==null;){var g=ja(f);if(g!==null&&vn(g),g=gc(n,i,o,u),g===null&&Dc(n,i,u,To,o),g===f)break;f=g}f!==null&&u.stopPropagation()}else Dc(n,i,u,null,o)}}var To=null;function gc(n,i,o,u){if(To=null,n=pe(u),n=os(n),n!==null)if(i=mi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=gi(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return To=n,null}function $h(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rs()){case zi:return 1;case ss:return 4;case ir:case as:return 16;case R:return 536870912;default:return 16}default:return 16}}var Rr=null,xc=null,Ao=null;function Yh(){if(Ao)return Ao;var n,i=xc,o=i.length,u,f="value"in Rr?Rr.value:Rr.textContent,g=f.length;for(n=0;n<o&&i[n]===f[n];n++);var b=o-n;for(u=1;u<=b&&i[o-u]===f[g-u];u++);return Ao=f.slice(n,1<u?1-u:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function qh(){return!1}function ai(n){function i(o,u,f,g,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ro:qh,this.isPropagationStopped=qh,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=ai(Ds),Ca=q({},Ds,{view:0,detail:0}),I0=ai(Ca),vc,yc,Na,Co=q({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Na&&(Na&&n.type==="mousemove"?(vc=n.screenX-Na.screenX,yc=n.screenY-Na.screenY):yc=vc=0,Na=n),vc)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),Kh=ai(Co),U0=q({},Co,{dataTransfer:0}),F0=ai(U0),O0=q({},Ca,{relatedTarget:0}),Sc=ai(O0),k0=q({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=ai(k0),j0=q({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),z0=ai(j0),H0=q({},Ds,{data:0}),Zh=ai(H0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=W0[n])?!!i[n]:!1}function Mc(){return X0}var $0=q({},Ca,{key:function(n){if(n.key){var i=G0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?V0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Y0=ai($0),q0=q({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=ai(q0),K0=q({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Z0=ai(K0),Q0=q({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=ai(Q0),ex=q({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=ai(ex),nx=[9,13,27,32],Ec=p&&"CompositionEvent"in window,Pa=null;p&&"documentMode"in document&&(Pa=document.documentMode);var ix=p&&"TextEvent"in window&&!Pa,Jh=p&&(!Ec||Pa&&8<Pa&&11>=Pa),ef=" ",tf=!1;function nf(n,i){switch(n){case"keyup":return nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function rx(n,i){switch(n){case"compositionend":return rf(i);case"keypress":return i.which!==32?null:(tf=!0,ef);case"textInput":return n=i.data,n===ef&&tf?null:n;default:return null}}function sx(n,i){if(Is)return n==="compositionend"||!Ec&&nf(n,i)?(n=Yh(),Ao=xc=Rr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jh&&i.locale!=="ko"?null:i.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ax[n.type]:i==="textarea"}function af(n,i,o,u){he(u),i=Io(i,"onChange"),0<i.length&&(o=new _c("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var La=null,Da=null;function ox(n){wf(n,0)}function No(n){var i=Bs(n);if(At(i))return n}function lx(n,i){if(n==="change")return i}var of=!1;if(p){var wc;if(p){var Tc="oninput"in document;if(!Tc){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),Tc=typeof lf.oninput=="function"}wc=Tc}else wc=!1;of=wc&&(!document.documentMode||9<document.documentMode)}function cf(){La&&(La.detachEvent("onpropertychange",uf),Da=La=null)}function uf(n){if(n.propertyName==="value"&&No(Da)){var i=[];af(i,Da,n,pe(n)),ht(ox,i)}}function cx(n,i,o){n==="focusin"?(cf(),La=i,Da=o,La.attachEvent("onpropertychange",uf)):n==="focusout"&&cf()}function ux(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(Da)}function dx(n,i){if(n==="click")return No(i)}function hx(n,i){if(n==="input"||n==="change")return No(i)}function fx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ri=typeof Object.is=="function"?Object.is:fx;function Ia(n,i){if(Ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!Ri(n[f],i[f]))return!1}return!0}function df(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hf(n,i){var o=df(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=df(o)}}function ff(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ff(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function pf(){for(var n=window,i=yt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=yt(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function px(n){var i=pf(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&ff(o.ownerDocument.documentElement,o)){if(u!==null&&Ac(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(u.start,f);u=u.end===void 0?g:Math.min(u.end,f),!n.extend&&g>u&&(f=u,u=g,g=f),f=hf(o,g);var b=hf(o,u);f&&b&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mx=p&&"documentMode"in document&&11>=document.documentMode,Us=null,bc=null,Ua=null,Rc=!1;function mf(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rc||Us==null||Us!==yt(u)||(u=Us,"selectionStart"in u&&Ac(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ua&&Ia(Ua,u)||(Ua=u,u=Io(bc,"onSelect"),0<u.length&&(i=new _c("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Us)))}function Po(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Fs={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Cc={},gf={};p&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Lo(n){if(Cc[n])return Cc[n];if(!Fs[n])return n;var i=Fs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in gf)return Cc[n]=i[o];return n}var xf=Lo("animationend"),_f=Lo("animationiteration"),vf=Lo("animationstart"),yf=Lo("transitionend"),Sf=new Map,Mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,i){Sf.set(n,i),c(i,[n])}for(var Nc=0;Nc<Mf.length;Nc++){var Pc=Mf[Nc],gx=Pc.toLowerCase(),xx=Pc[0].toUpperCase()+Pc.slice(1);Cr(gx,"on"+xx)}Cr(xf,"onAnimationEnd"),Cr(_f,"onAnimationIteration"),Cr(vf,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(yf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function Ef(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Ps(u,i,void 0,n),n.currentTarget=null}function wf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var b=u.length-1;0<=b;b--){var O=u[b],z=O.instance,ue=O.currentTarget;if(O=O.listener,z!==g&&f.isPropagationStopped())break e;Ef(f,O,ue),g=z}else for(b=0;b<u.length;b++){if(O=u[b],z=O.instance,ue=O.currentTarget,O=O.listener,z!==g&&f.isPropagationStopped())break e;Ef(f,O,ue),g=z}}}if(Wn)throw n=wr,Wn=!1,wr=null,n}function Zt(n,i){var o=i[Bc];o===void 0&&(o=i[Bc]=new Set);var u=n+"__bubble";o.has(u)||(Tf(i,n,2,!1),o.add(u))}function Lc(n,i,o){var u=0;i&&(u|=4),Tf(o,n,u,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Oa(n){if(!n[Do]){n[Do]=!0,s.forEach(function(o){o!=="selectionchange"&&(_x.has(o)||Lc(o,!1,n),Lc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Lc("selectionchange",!1,i))}}function Tf(n,i,o,u){switch($h(i)){case 1:var f=L0;break;case 4:f=D0;break;default:f=mc}o=f.bind(null,i,o,n),f=void 0,!Qe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Dc(n,i,o,u,f){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var O=u.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(b===4)for(b=u.return;b!==null;){var z=b.tag;if((z===3||z===4)&&(z=b.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;b=b.return}for(;O!==null;){if(b=os(O),b===null)return;if(z=b.tag,z===5||z===6){u=g=b;continue e}O=O.parentNode}}u=u.return}ht(function(){var ue=g,Te=pe(o),Ae=[];e:{var Se=Sf.get(n);if(Se!==void 0){var He=_c,Ye=n;switch(n){case"keypress":if(bo(o)===0)break e;case"keydown":case"keyup":He=Y0;break;case"focusin":Ye="focus",He=Sc;break;case"focusout":Ye="blur",He=Sc;break;case"beforeblur":case"afterblur":He=Sc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=Z0;break;case xf:case _f:case vf:He=B0;break;case yf:He=J0;break;case"scroll":He=I0;break;case"wheel":He=tx;break;case"copy":case"cut":case"paste":He=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Qh}var Ze=(i&4)!==0,pn=!Ze&&n==="scroll",ne=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var X=ue,ae;X!==null;){ae=X;var Le=ae.stateNode;if(ae.tag===5&&Le!==null&&(ae=Le,ne!==null&&(Le=we(X,ne),Le!=null&&Ze.push(ka(X,Le,ae)))),pn)break;X=X.return}0<Ze.length&&(Se=new He(Se,Ye,null,o,Te),Ae.push({event:Se,listeners:Ze}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&o!==De&&(Ye=o.relatedTarget||o.fromElement)&&(os(Ye)||Ye[rr]))break e;if((He||Se)&&(Se=Te.window===Te?Te:(Se=Te.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(Ye=o.relatedTarget||o.toElement,He=ue,Ye=Ye?os(Ye):null,Ye!==null&&(pn=mi(Ye),Ye!==pn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=ue),He!==Ye)){if(Ze=Kh,Le="onMouseLeave",ne="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Qh,Le="onPointerLeave",ne="onPointerEnter",X="pointer"),pn=He==null?Se:Bs(He),ae=Ye==null?Se:Bs(Ye),Se=new Ze(Le,X+"leave",He,o,Te),Se.target=pn,Se.relatedTarget=ae,Le=null,os(Te)===ue&&(Ze=new Ze(ne,X+"enter",Ye,o,Te),Ze.target=ae,Ze.relatedTarget=pn,Le=Ze),pn=Le,He&&Ye)t:{for(Ze=He,ne=Ye,X=0,ae=Ze;ae;ae=Os(ae))X++;for(ae=0,Le=ne;Le;Le=Os(Le))ae++;for(;0<X-ae;)Ze=Os(Ze),X--;for(;0<ae-X;)ne=Os(ne),ae--;for(;X--;){if(Ze===ne||ne!==null&&Ze===ne.alternate)break t;Ze=Os(Ze),ne=Os(ne)}Ze=null}else Ze=null;He!==null&&Af(Ae,Se,He,Ze,!1),Ye!==null&&pn!==null&&Af(Ae,pn,Ye,Ze,!0)}}e:{if(Se=ue?Bs(ue):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var tt=lx;else if(sf(Se))if(of)tt=hx;else{tt=ux;var st=cx}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(tt=dx);if(tt&&(tt=tt(n,ue))){af(Ae,tt,o,Te);break e}st&&st(n,Se,ue),n==="focusout"&&(st=Se._wrapperState)&&st.controlled&&Se.type==="number"&&Fn(Se,"number",Se.value)}switch(st=ue?Bs(ue):window,n){case"focusin":(sf(st)||st.contentEditable==="true")&&(Us=st,bc=ue,Ua=null);break;case"focusout":Ua=bc=Us=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,mf(Ae,o,Te);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":mf(Ae,o,Te)}var at;if(Ec)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Is?nf(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Jh&&o.locale!=="ko"&&(Is||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Is&&(at=Yh()):(Rr=Te,xc="value"in Rr?Rr.value:Rr.textContent,Is=!0)),st=Io(ue,ut),0<st.length&&(ut=new Zh(ut,n,null,o,Te),Ae.push({event:ut,listeners:st}),at?ut.data=at:(at=rf(o),at!==null&&(ut.data=at)))),(at=ix?rx(n,o):sx(n,o))&&(ue=Io(ue,"onBeforeInput"),0<ue.length&&(Te=new Zh("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:ue}),Te.data=at))}wf(Ae,i)})}function ka(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Io(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=we(n,o),g!=null&&u.unshift(ka(n,g,f)),g=we(n,i),g!=null&&u.push(ka(n,g,f))),n=n.return}return u}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Af(n,i,o,u,f){for(var g=i._reactName,b=[];o!==null&&o!==u;){var O=o,z=O.alternate,ue=O.stateNode;if(z!==null&&z===u)break;O.tag===5&&ue!==null&&(O=ue,f?(z=we(o,g),z!=null&&b.unshift(ka(o,z,O))):f||(z=we(o,g),z!=null&&b.push(ka(o,z,O)))),o=o.return}b.length!==0&&n.push({event:i,listeners:b})}var vx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function bf(n){return(typeof n=="string"?n:""+n).replace(vx,`
`).replace(yx,"")}function Uo(n,i,o){if(i=bf(i),bf(n)!==i&&o)throw Error(t(425))}function Fo(){}var Ic=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(n){return Rf.resolve(null).then(n).catch(Ex)}:Oc;function Ex(n){setTimeout(function(){throw n})}function kc(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),Ra(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Ra(i)}function Nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Cf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Vi="__reactFiber$"+ks,Ba="__reactProps$"+ks,rr="__reactContainer$"+ks,Bc="__reactEvents$"+ks,wx="__reactListeners$"+ks,Tx="__reactHandles$"+ks;function os(n){var i=n[Vi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[rr]||o[Vi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Cf(n);n!==null;){if(o=n[Vi])return o;n=Cf(n)}return i}n=o,o=n.parentNode}return null}function ja(n){return n=n[Vi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oo(n){return n[Ba]||null}var jc=[],js=-1;function Pr(n){return{current:n}}function Qt(n){0>js||(n.current=jc[js],jc[js]=null,js--)}function $t(n,i){js++,jc[js]=n.current,n.current=i}var Lr={},kn=Pr(Lr),Zn=Pr(!1),ls=Lr;function zs(n,i){var o=n.type.contextTypes;if(!o)return Lr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Qn(n){return n=n.childContextTypes,n!=null}function ko(){Qt(Zn),Qt(kn)}function Nf(n,i,o){if(kn.current!==Lr)throw Error(t(168));$t(kn,i),$t(Zn,o)}function Pf(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,Re(n)||"Unknown",f));return q({},o,u)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,ls=kn.current,$t(kn,n),$t(Zn,Zn.current),!0}function Lf(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Pf(n,i,ls),u.__reactInternalMemoizedMergedChildContext=n,Qt(Zn),Qt(kn),$t(kn,n)):Qt(Zn),$t(Zn,o)}var sr=null,jo=!1,zc=!1;function Df(n){sr===null?sr=[n]:sr.push(n)}function Ax(n){jo=!0,Df(n)}function Dr(){if(!zc&&sr!==null){zc=!0;var n=0,i=Je;try{var o=sr;for(Je=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}sr=null,jo=!1}catch(f){throw sr!==null&&(sr=sr.slice(n+1)),nn(zi,Dr),f}finally{Je=i,zc=!1}}return null}var Hs=[],Gs=0,zo=null,Ho=0,_i=[],vi=0,cs=null,ar=1,or="";function us(n,i){Hs[Gs++]=Ho,Hs[Gs++]=zo,zo=n,Ho=i}function If(n,i,o){_i[vi++]=ar,_i[vi++]=or,_i[vi++]=cs,cs=n;var u=ar;n=or;var f=32-Z(u)-1;u&=~(1<<f),o+=1;var g=32-Z(i)+f;if(30<g){var b=f-f%5;g=(u&(1<<b)-1).toString(32),u>>=b,f-=b,ar=1<<32-Z(i)+f|o<<f|u,or=g+n}else ar=1<<g|o<<f|u,or=n}function Hc(n){n.return!==null&&(us(n,1),If(n,1,0))}function Gc(n){for(;n===zo;)zo=Hs[--Gs],Hs[Gs]=null,Ho=Hs[--Gs],Hs[Gs]=null;for(;n===cs;)cs=_i[--vi],_i[vi]=null,or=_i[--vi],_i[vi]=null,ar=_i[--vi],_i[vi]=null}var oi=null,li=null,tn=!1,Ci=null;function Uf(n,i){var o=Ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Ff(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,oi=n,li=Nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,oi=n,li=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=cs!==null?{id:ar,overflow:or}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ei(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,oi=n,li=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(tn){var i=li;if(i){var o=i;if(!Ff(n,i)){if(Vc(n))throw Error(t(418));i=Nr(o.nextSibling);var u=oi;i&&Ff(n,i)?Uf(u,o):(n.flags=n.flags&-4097|2,tn=!1,oi=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,tn=!1,oi=n}}}function Of(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function Go(n){if(n!==oi)return!1;if(!tn)return Of(n),tn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=li)){if(Vc(n))throw kf(),Error(t(418));for(;i;)Uf(n,i),i=Nr(i.nextSibling)}if(Of(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){li=Nr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}li=null}}else li=oi?Nr(n.stateNode.nextSibling):null;return!0}function kf(){for(var n=li;n;)n=Nr(n.nextSibling)}function Vs(){li=oi=null,tn=!1}function Xc(n){Ci===null?Ci=[n]:Ci.push(n)}var bx=P.ReactCurrentBatchConfig;function za(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var O=f.refs;b===null?delete O[g]:O[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Vo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Bf(n){var i=n._init;return i(n._payload)}function jf(n){function i(ne,X){if(n){var ae=ne.deletions;ae===null?(ne.deletions=[X],ne.flags|=16):ae.push(X)}}function o(ne,X){if(!n)return null;for(;X!==null;)i(ne,X),X=X.sibling;return null}function u(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function f(ne,X){return ne=zr(ne,X),ne.index=0,ne.sibling=null,ne}function g(ne,X,ae){return ne.index=ae,n?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<X?(ne.flags|=2,X):ae):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function b(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function O(ne,X,ae,Le){return X===null||X.tag!==6?(X=Ou(ae,ne.mode,Le),X.return=ne,X):(X=f(X,ae),X.return=ne,X)}function z(ne,X,ae,Le){var tt=ae.type;return tt===w?Te(ne,X,ae.props.children,Le,ae.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===fe&&Bf(tt)===X.type)?(Le=f(X,ae.props),Le.ref=za(ne,X,ae),Le.return=ne,Le):(Le=pl(ae.type,ae.key,ae.props,null,ne.mode,Le),Le.ref=za(ne,X,ae),Le.return=ne,Le)}function ue(ne,X,ae,Le){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=ku(ae,ne.mode,Le),X.return=ne,X):(X=f(X,ae.children||[]),X.return=ne,X)}function Te(ne,X,ae,Le,tt){return X===null||X.tag!==7?(X=_s(ae,ne.mode,Le,tt),X.return=ne,X):(X=f(X,ae),X.return=ne,X)}function Ae(ne,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ou(""+X,ne.mode,ae),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case F:return ae=pl(X.type,X.key,X.props,null,ne.mode,ae),ae.ref=za(ne,null,X),ae.return=ne,ae;case I:return X=ku(X,ne.mode,ae),X.return=ne,X;case fe:var Le=X._init;return Ae(ne,Le(X._payload),ae)}if(Gt(X)||V(X))return X=_s(X,ne.mode,ae,null),X.return=ne,X;Vo(ne,X)}return null}function Se(ne,X,ae,Le){var tt=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return tt!==null?null:O(ne,X,""+ae,Le);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:return ae.key===tt?z(ne,X,ae,Le):null;case I:return ae.key===tt?ue(ne,X,ae,Le):null;case fe:return tt=ae._init,Se(ne,X,tt(ae._payload),Le)}if(Gt(ae)||V(ae))return tt!==null?null:Te(ne,X,ae,Le,null);Vo(ne,ae)}return null}function He(ne,X,ae,Le,tt){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return ne=ne.get(ae)||null,O(X,ne,""+Le,tt);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case F:return ne=ne.get(Le.key===null?ae:Le.key)||null,z(X,ne,Le,tt);case I:return ne=ne.get(Le.key===null?ae:Le.key)||null,ue(X,ne,Le,tt);case fe:var st=Le._init;return He(ne,X,ae,st(Le._payload),tt)}if(Gt(Le)||V(Le))return ne=ne.get(ae)||null,Te(X,ne,Le,tt,null);Vo(X,Le)}return null}function Ye(ne,X,ae,Le){for(var tt=null,st=null,at=X,ut=X=0,Cn=null;at!==null&&ut<ae.length;ut++){at.index>ut?(Cn=at,at=null):Cn=at.sibling;var It=Se(ne,at,ae[ut],Le);if(It===null){at===null&&(at=Cn);break}n&&at&&It.alternate===null&&i(ne,at),X=g(It,X,ut),st===null?tt=It:st.sibling=It,st=It,at=Cn}if(ut===ae.length)return o(ne,at),tn&&us(ne,ut),tt;if(at===null){for(;ut<ae.length;ut++)at=Ae(ne,ae[ut],Le),at!==null&&(X=g(at,X,ut),st===null?tt=at:st.sibling=at,st=at);return tn&&us(ne,ut),tt}for(at=u(ne,at);ut<ae.length;ut++)Cn=He(at,ne,ut,ae[ut],Le),Cn!==null&&(n&&Cn.alternate!==null&&at.delete(Cn.key===null?ut:Cn.key),X=g(Cn,X,ut),st===null?tt=Cn:st.sibling=Cn,st=Cn);return n&&at.forEach(function(Hr){return i(ne,Hr)}),tn&&us(ne,ut),tt}function Ze(ne,X,ae,Le){var tt=V(ae);if(typeof tt!="function")throw Error(t(150));if(ae=tt.call(ae),ae==null)throw Error(t(151));for(var st=tt=null,at=X,ut=X=0,Cn=null,It=ae.next();at!==null&&!It.done;ut++,It=ae.next()){at.index>ut?(Cn=at,at=null):Cn=at.sibling;var Hr=Se(ne,at,It.value,Le);if(Hr===null){at===null&&(at=Cn);break}n&&at&&Hr.alternate===null&&i(ne,at),X=g(Hr,X,ut),st===null?tt=Hr:st.sibling=Hr,st=Hr,at=Cn}if(It.done)return o(ne,at),tn&&us(ne,ut),tt;if(at===null){for(;!It.done;ut++,It=ae.next())It=Ae(ne,It.value,Le),It!==null&&(X=g(It,X,ut),st===null?tt=It:st.sibling=It,st=It);return tn&&us(ne,ut),tt}for(at=u(ne,at);!It.done;ut++,It=ae.next())It=He(at,ne,ut,It.value,Le),It!==null&&(n&&It.alternate!==null&&at.delete(It.key===null?ut:It.key),X=g(It,X,ut),st===null?tt=It:st.sibling=It,st=It);return n&&at.forEach(function(a_){return i(ne,a_)}),tn&&us(ne,ut),tt}function pn(ne,X,ae,Le){if(typeof ae=="object"&&ae!==null&&ae.type===w&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:e:{for(var tt=ae.key,st=X;st!==null;){if(st.key===tt){if(tt=ae.type,tt===w){if(st.tag===7){o(ne,st.sibling),X=f(st,ae.props.children),X.return=ne,ne=X;break e}}else if(st.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===fe&&Bf(tt)===st.type){o(ne,st.sibling),X=f(st,ae.props),X.ref=za(ne,st,ae),X.return=ne,ne=X;break e}o(ne,st);break}else i(ne,st);st=st.sibling}ae.type===w?(X=_s(ae.props.children,ne.mode,Le,ae.key),X.return=ne,ne=X):(Le=pl(ae.type,ae.key,ae.props,null,ne.mode,Le),Le.ref=za(ne,X,ae),Le.return=ne,ne=Le)}return b(ne);case I:e:{for(st=ae.key;X!==null;){if(X.key===st)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){o(ne,X.sibling),X=f(X,ae.children||[]),X.return=ne,ne=X;break e}else{o(ne,X);break}else i(ne,X);X=X.sibling}X=ku(ae,ne.mode,Le),X.return=ne,ne=X}return b(ne);case fe:return st=ae._init,pn(ne,X,st(ae._payload),Le)}if(Gt(ae))return Ye(ne,X,ae,Le);if(V(ae))return Ze(ne,X,ae,Le);Vo(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(o(ne,X.sibling),X=f(X,ae),X.return=ne,ne=X):(o(ne,X),X=Ou(ae,ne.mode,Le),X.return=ne,ne=X),b(ne)):o(ne,X)}return pn}var Ws=jf(!0),zf=jf(!1),Wo=Pr(null),Xo=null,Xs=null,$c=null;function Yc(){$c=Xs=Xo=null}function qc(n){var i=Wo.current;Qt(Wo),n._currentValue=i}function Kc(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function $s(n,i){Xo=n,$c=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jn=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Xo===null)throw Error(t(308));Xs=n,Xo.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var ds=null;function Zc(n){ds===null?ds=[n]:ds.push(n)}function Hf(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Zc(i)):(o.next=f.next,f.next=o),i.interleaved=o,lr(n,u)}function lr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ir=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ur(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,lr(n,o)}return f=u.interleaved,f===null?(i.next=i,Zc(u)):(i.next=f.next,f.next=i),u.interleaved=i,lr(n,o)}function $o(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,_n(n,o)}}function Vf(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Yo(n,i,o,u){var f=n.updateQueue;Ir=!1;var g=f.firstBaseUpdate,b=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var z=O,ue=z.next;z.next=null,b===null?g=ue:b.next=ue,b=z;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==b&&(O===null?Te.firstBaseUpdate=ue:O.next=ue,Te.lastBaseUpdate=z))}if(g!==null){var Ae=f.baseState;b=0,Te=ue=z=null,O=g;do{var Se=O.lane,He=O.eventTime;if((u&Se)===Se){Te!==null&&(Te=Te.next={eventTime:He,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ye=n,Ze=O;switch(Se=i,He=o,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Ae=Ye.call(He,Ae,Se);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,Se=typeof Ye=="function"?Ye.call(He,Ae,Se):Ye,Se==null)break e;Ae=q({},Ae,Se);break e;case 2:Ir=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[O]:Se.push(O))}else He={eventTime:He,lane:Se,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(ue=Te=He,z=Ae):Te=Te.next=He,b|=Se;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Se=O,O=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Te===null&&(z=Ae),f.baseState=z,f.firstBaseUpdate=ue,f.lastBaseUpdate=Te,i=f.shared.interleaved,i!==null){f=i;do b|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);ps|=b,n.lanes=b,n.memoizedState=Ae}}function Wf(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Ha={},Wi=Pr(Ha),Ga=Pr(Ha),Va=Pr(Ha);function hs(n){if(n===Ha)throw Error(t(174));return n}function Jc(n,i){switch($t(Va,i),$t(Ga,n),$t(Wi,Ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xt(i,n)}Qt(Wi),$t(Wi,i)}function Ys(){Qt(Wi),Qt(Ga),Qt(Va)}function Xf(n){hs(Va.current);var i=hs(Wi.current),o=xt(i,n.type);i!==o&&($t(Ga,n),$t(Wi,o))}function eu(n){Ga.current===n&&(Qt(Wi),Qt(Ga))}var rn=Pr(0);function qo(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Ko=P.ReactCurrentDispatcher,iu=P.ReactCurrentBatchConfig,fs=0,sn=null,yn=null,bn=null,Zo=!1,Wa=!1,Xa=0,Rx=0;function Bn(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ri(n[o],i[o]))return!1;return!0}function su(n,i,o,u,f,g){if(fs=g,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ko.current=n===null||n.memoizedState===null?Lx:Dx,n=o(u,f),Wa){g=0;do{if(Wa=!1,Xa=0,25<=g)throw Error(t(301));g+=1,bn=yn=null,i.updateQueue=null,Ko.current=Ix,n=o(u,f)}while(Wa)}if(Ko.current=el,i=yn!==null&&yn.next!==null,fs=0,bn=yn=sn=null,Zo=!1,i)throw Error(t(300));return n}function au(){var n=Xa!==0;return Xa=0,n}function Xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?sn.memoizedState=bn=n:bn=bn.next=n,bn}function Si(){if(yn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=yn.next;var i=bn===null?sn.memoizedState:bn.next;if(i!==null)bn=i,yn=n;else{if(n===null)throw Error(t(310));yn=n,n={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},bn===null?sn.memoizedState=bn=n:bn=bn.next=n}return bn}function $a(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=Si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=yn,f=u.baseQueue,g=o.pending;if(g!==null){if(f!==null){var b=f.next;f.next=g.next,g.next=b}u.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,u=u.baseState;var O=b=null,z=null,ue=g;do{var Te=ue.lane;if((fs&Te)===Te)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:n(u,ue.action);else{var Ae={lane:Te,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(O=z=Ae,b=u):z=z.next=Ae,sn.lanes|=Te,ps|=Te}ue=ue.next}while(ue!==null&&ue!==g);z===null?b=u:z.next=O,Ri(u,i.memoizedState)||(Jn=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=z,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do g=f.lane,sn.lanes|=g,ps|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lu(n){var i=Si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do g=n(g,b.action),b=b.next;while(b!==f);Ri(g,i.memoizedState)||(Jn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function $f(){}function Yf(n,i){var o=sn,u=Si(),f=i(),g=!Ri(u.memoizedState,f);if(g&&(u.memoizedState=f,Jn=!0),u=u.queue,cu(Zf.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||bn!==null&&bn.memoizedState.tag&1){if(o.flags|=2048,Ya(9,Kf.bind(null,o,u,f,i),void 0,null),Rn===null)throw Error(t(349));(fs&30)!==0||qf(o,i,f)}return f}function qf(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Kf(n,i,o,u){i.value=o,i.getSnapshot=u,Qf(i)&&Jf(n)}function Zf(n,i,o){return o(function(){Qf(i)&&Jf(n)})}function Qf(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ri(n,o)}catch{return!0}}function Jf(n){var i=lr(n,1);i!==null&&Di(i,n,1,-1)}function ep(n){var i=Xi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},i.queue=n,n=n.dispatch=Px.bind(null,sn,n),[i.memoizedState,n]}function Ya(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function tp(){return Si().memoizedState}function Qo(n,i,o,u){var f=Xi();sn.flags|=n,f.memoizedState=Ya(1|i,o,void 0,u===void 0?null:u)}function Jo(n,i,o,u){var f=Si();u=u===void 0?null:u;var g=void 0;if(yn!==null){var b=yn.memoizedState;if(g=b.destroy,u!==null&&ru(u,b.deps)){f.memoizedState=Ya(i,o,g,u);return}}sn.flags|=n,f.memoizedState=Ya(1|i,o,g,u)}function np(n,i){return Qo(8390656,8,n,i)}function cu(n,i){return Jo(2048,8,n,i)}function ip(n,i){return Jo(4,2,n,i)}function rp(n,i){return Jo(4,4,n,i)}function sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ap(n,i,o){return o=o!=null?o.concat([n]):null,Jo(4,4,sp.bind(null,i,n),o)}function uu(){}function op(n,i){var o=Si();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ru(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function lp(n,i){var o=Si();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ru(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function cp(n,i,o){return(fs&21)===0?(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=o):(Ri(o,i)||(o=jt(),sn.lanes|=o,ps|=o,n.baseState=!0),i)}function Cx(n,i){var o=Je;Je=o!==0&&4>o?o:4,n(!0);var u=iu.transition;iu.transition={};try{n(!1),i()}finally{Je=o,iu.transition=u}}function up(){return Si().memoizedState}function Nx(n,i,o){var u=Br(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},dp(n))hp(i,o);else if(o=Hf(n,i,o,u),o!==null){var f=Yn();Di(o,n,u,f),fp(o,i,u)}}function Px(n,i,o){var u=Br(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(dp(n))hp(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,O=g(b,o);if(f.hasEagerState=!0,f.eagerState=O,Ri(O,b)){var z=i.interleaved;z===null?(f.next=f,Zc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}o=Hf(n,i,f,u),o!==null&&(f=Yn(),Di(o,n,u,f),fp(o,i,u))}}function dp(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function hp(n,i){Wa=Zo=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function fp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,_n(n,o)}}var el={readContext:yi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Lx={readContext:yi,useCallback:function(n,i){return Xi().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:np,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Qo(4194308,4,sp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var o=Xi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Xi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Nx.bind(null,sn,n),[u.memoizedState,n]},useRef:function(n){var i=Xi();return n={current:n},i.memoizedState=n},useState:ep,useDebugValue:uu,useDeferredValue:function(n){return Xi().memoizedState=n},useTransition:function(){var n=ep(!1),i=n[0];return n=Cx.bind(null,n[1]),Xi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=sn,f=Xi();if(tn){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Rn===null)throw Error(t(349));(fs&30)!==0||qf(u,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,np(Zf.bind(null,u,g,n),[n]),u.flags|=2048,Ya(9,Kf.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=Xi(),i=Rn.identifierPrefix;if(tn){var o=or,u=ar;o=(u&~(1<<32-Z(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Xa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Rx++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Dx={readContext:yi,useCallback:op,useContext:yi,useEffect:cu,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:ou,useRef:tp,useState:function(){return ou($a)},useDebugValue:uu,useDeferredValue:function(n){var i=Si();return cp(i,yn.memoizedState,n)},useTransition:function(){var n=ou($a)[0],i=Si().memoizedState;return[n,i]},useMutableSource:$f,useSyncExternalStore:Yf,useId:up,unstable_isNewReconciler:!1},Ix={readContext:yi,useCallback:op,useContext:yi,useEffect:cu,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:lu,useRef:tp,useState:function(){return lu($a)},useDebugValue:uu,useDeferredValue:function(n){var i=Si();return yn===null?i.memoizedState=n:cp(i,yn.memoizedState,n)},useTransition:function(){var n=lu($a)[0],i=Si().memoizedState;return[n,i]},useMutableSource:$f,useSyncExternalStore:Yf,useId:up,unstable_isNewReconciler:!1};function Ni(n,i){if(n&&n.defaultProps){i=q({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function du(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:q({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var tl={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Yn(),f=Br(n),g=cr(u,f);g.payload=i,o!=null&&(g.callback=o),i=Ur(n,g,f),i!==null&&(Di(i,n,f,u),$o(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Yn(),f=Br(n),g=cr(u,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=Ur(n,g,f),i!==null&&(Di(i,n,f,u),$o(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Yn(),u=Br(n),f=cr(o,u);f.tag=2,i!=null&&(f.callback=i),i=Ur(n,f,u),i!==null&&(Di(i,n,u,o),$o(i,n,u))}};function pp(n,i,o,u,f,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,b):i.prototype&&i.prototype.isPureReactComponent?!Ia(o,u)||!Ia(f,g):!0}function mp(n,i,o){var u=!1,f=Lr,g=i.contextType;return typeof g=="object"&&g!==null?g=yi(g):(f=Qn(i)?ls:kn.current,u=i.contextTypes,g=(u=u!=null)?zs(n,f):Lr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function gp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function hu(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Qc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=yi(g):(g=Qn(i)?ls:kn.current,f.context=zs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(du(n,i,g,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&tl.enqueueReplaceState(f,f.state,null),Yo(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,i){try{var o="",u=i;do o+=ge(u),u=u.return;while(u);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function fu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,o){o=cr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ll||(ll=!0,Cu=u),pu(n,i)},o}function _p(n,i,o){o=cr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){pu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){pu(n,i),typeof u!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function vp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Ux;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=qx.bind(null,n,i,o),i.then(n,n))}function yp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Sp(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=cr(-1,1),i.tag=2,Ur(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Fx=P.ReactCurrentOwner,Jn=!1;function $n(n,i,o,u){i.child=n===null?zf(i,null,o,u):Ws(i,n.child,o,u)}function Mp(n,i,o,u,f){o=o.render;var g=i.ref;return $s(i,f),u=su(n,i,o,u,g,f),o=au(),n!==null&&!Jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ur(n,i,f)):(tn&&o&&Hc(i),i.flags|=1,$n(n,i,u,f),i.child)}function Ep(n,i,o,u,f){if(n===null){var g=o.type;return typeof g=="function"&&!Fu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,wp(n,i,g,u,f)):(n=pl(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ia,o(b,u)&&n.ref===i.ref)return ur(n,i,f)}return i.flags|=1,n=zr(g,u),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,o,u,f){if(n!==null){var g=n.memoizedProps;if(Ia(g,u)&&n.ref===i.ref)if(Jn=!1,i.pendingProps=u=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Jn=!0);else return i.lanes=n.lanes,ur(n,i,f)}return mu(n,i,o,u,f)}function Tp(n,i,o){var u=i.pendingProps,f=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(Zs,ci),ci|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$t(Zs,ci),ci|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,$t(Zs,ci),ci|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,$t(Zs,ci),ci|=u;return $n(n,i,f,o),i.child}function Ap(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,o,u,f){var g=Qn(o)?ls:kn.current;return g=zs(i,g),$s(i,f),o=su(n,i,o,u,g,f),u=au(),n!==null&&!Jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ur(n,i,f)):(tn&&u&&Hc(i),i.flags|=1,$n(n,i,o,f),i.child)}function bp(n,i,o,u,f){if(Qn(o)){var g=!0;Bo(i)}else g=!1;if($s(i,f),i.stateNode===null)il(n,i),mp(i,o,u),hu(i,o,u,f),u=!0;else if(n===null){var b=i.stateNode,O=i.memoizedProps;b.props=O;var z=b.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=yi(ue):(ue=Qn(o)?ls:kn.current,ue=zs(i,ue));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ae||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==u||z!==ue)&&gp(i,b,u,ue),Ir=!1;var Se=i.memoizedState;b.state=Se,Yo(i,u,b,f),z=i.memoizedState,O!==u||Se!==z||Zn.current||Ir?(typeof Te=="function"&&(du(i,o,Te,u),z=i.memoizedState),(O=Ir||pp(i,o,O,u,Se,z,ue))?(Ae||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),b.props=u,b.state=z,b.context=ue,u=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,Gf(n,i),O=i.memoizedProps,ue=i.type===i.elementType?O:Ni(i.type,O),b.props=ue,Ae=i.pendingProps,Se=b.context,z=o.contextType,typeof z=="object"&&z!==null?z=yi(z):(z=Qn(o)?ls:kn.current,z=zs(i,z));var He=o.getDerivedStateFromProps;(Te=typeof He=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==Ae||Se!==z)&&gp(i,b,u,z),Ir=!1,Se=i.memoizedState,b.state=Se,Yo(i,u,b,f);var Ye=i.memoizedState;O!==Ae||Se!==Ye||Zn.current||Ir?(typeof He=="function"&&(du(i,o,He,u),Ye=i.memoizedState),(ue=Ir||pp(i,o,ue,u,Se,Ye,z)||!1)?(Te||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,Ye,z),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,Ye,z)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),b.props=u,b.state=Ye,b.context=z,u=ue):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),u=!1)}return gu(n,i,o,u,g,f)}function gu(n,i,o,u,f,g){Ap(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return f&&Lf(i,o,!1),ur(n,i,g);u=i.stateNode,Fx.current=i;var O=b&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Ws(i,n.child,null,g),i.child=Ws(i,null,O,g)):$n(n,i,O,g),i.memoizedState=u.state,f&&Lf(i,o,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Nf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Nf(n,i.context,!1),Jc(n,i.containerInfo)}function Cp(n,i,o,u,f){return Vs(),Xc(f),i.flags|=256,$n(n,i,o,u),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Np(n,i,o){var u=i.pendingProps,f=rn.current,g=!1,b=(i.flags&128)!==0,O;if((O=b)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),$t(rn,f&1),n===null)return Wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,g?(u=i.mode,g=i.child,b={mode:"hidden",children:b},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=ml(b,u,0,null),n=_s(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=_u(o),i.memoizedState=xu,n):vu(i,b));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return Ox(n,i,b,u,O,f,o);if(g){g=u.fallback,b=i.mode,f=n.child,O=f.sibling;var z={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=zr(f,z),u.subtreeFlags=f.subtreeFlags&14680064),O!==null?g=zr(O,g):(g=_s(g,b,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,b=n.child.memoizedState,b=b===null?_u(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~o,i.memoizedState=xu,u}return g=n.child,n=g.sibling,u=zr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function vu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,o,u){return u!==null&&Xc(u),Ws(i,n.child,null,o),n=vu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ox(n,i,o,u,f,g,b){if(o)return i.flags&256?(i.flags&=-257,u=fu(Error(t(422))),nl(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,f=i.mode,u=ml({mode:"visible",children:u.children},f,0,null),g=_s(g,f,b,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Ws(i,n.child,null,b),i.child.memoizedState=_u(b),i.memoizedState=xu,g);if((i.mode&1)===0)return nl(n,i,b,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var O=u.dgst;return u=O,g=Error(t(419)),u=fu(g,u,void 0),nl(n,i,b,u)}if(O=(b&n.childLanes)!==0,Jn||O){if(u=Rn,u!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|b))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,lr(n,f),Di(u,n,f,-1))}return Uu(),u=fu(Error(t(421))),nl(n,i,b,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Kx.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,li=Nr(f.nextSibling),oi=i,tn=!0,Ci=null,n!==null&&(_i[vi++]=ar,_i[vi++]=or,_i[vi++]=cs,ar=n.id,or=n.overflow,cs=i),i=vu(i,u.children),i.flags|=4096,i)}function Pp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Kc(n.return,i,o)}function yu(n,i,o,u,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=f)}function Lp(n,i,o){var u=i.pendingProps,f=u.revealOrder,g=u.tail;if($n(n,i,u.children,o),u=rn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pp(n,o,i);else if(n.tag===19)Pp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($t(rn,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&qo(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),yu(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&qo(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}yu(i,!0,o,null,g);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ur(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ps|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=zr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=zr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function kx(n,i,o){switch(i.tag){case 3:Rp(i),Vs();break;case 5:Xf(i);break;case 1:Qn(i.type)&&Bo(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;$t(Wo,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?($t(rn,rn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Np(n,i,o):($t(rn,rn.current&1),n=ur(n,i,o),n!==null?n.sibling:null);$t(rn,rn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Lp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$t(rn,rn.current),u)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,o)}return ur(n,i,o)}var Dp,Su,Ip,Up;Dp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Su=function(){},Ip=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,hs(Wi.current);var g=null;switch(o){case"input":f=gt(n,f),u=gt(n,u),g=[];break;case"select":f=q({},f,{value:void 0}),u=q({},u,{value:void 0}),g=[];break;case"textarea":f=hn(n,f),u=hn(n,u),g=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Fo)}xe(o,u);var b;o=null;for(ue in f)if(!u.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var O=f[ue];for(b in O)O.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(l.hasOwnProperty(ue)?g||(g=[]):(g=g||[]).push(ue,null));for(ue in u){var z=u[ue];if(O=f!=null?f[ue]:void 0,u.hasOwnProperty(ue)&&z!==O&&(z!=null||O!=null))if(ue==="style")if(O){for(b in O)!O.hasOwnProperty(b)||z&&z.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in z)z.hasOwnProperty(b)&&O[b]!==z[b]&&(o||(o={}),o[b]=z[b])}else o||(g||(g=[]),g.push(ue,o)),o=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(g=g||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(l.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Zt("scroll",n),g||O===z||(g=[])):(g=g||[]).push(ue,z))}o&&(g=g||[]).push("style",o);var ue=g;(i.updateQueue=ue)&&(i.flags|=4)}},Up=function(n,i,o,u){o!==u&&(i.flags|=4)};function qa(n,i){if(!tn)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function jn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Bx(n,i,o){var u=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(i),null;case 1:return Qn(i.type)&&ko(),jn(i),null;case 3:return u=i.stateNode,Ys(),Qt(Zn),Qt(kn),nu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Go(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(Lu(Ci),Ci=null))),Su(n,i),jn(i),null;case 5:eu(i);var f=hs(Va.current);if(o=i.type,n!==null&&i.stateNode!=null)Ip(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return jn(i),null}if(n=hs(Wi.current),Go(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[Vi]=i,u[Ba]=g,n=(i.mode&1)!==0,o){case"dialog":Zt("cancel",u),Zt("close",u);break;case"iframe":case"object":case"embed":Zt("load",u);break;case"video":case"audio":for(f=0;f<Fa.length;f++)Zt(Fa[f],u);break;case"source":Zt("error",u);break;case"img":case"image":case"link":Zt("error",u),Zt("load",u);break;case"details":Zt("toggle",u);break;case"input":Ht(u,g),Zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Zt("invalid",u);break;case"textarea":_t(u,g),Zt("invalid",u)}xe(o,g),f=null;for(var b in g)if(g.hasOwnProperty(b)){var O=g[b];b==="children"?typeof O=="string"?u.textContent!==O&&(g.suppressHydrationWarning!==!0&&Uo(u.textContent,O,n),f=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&Uo(u.textContent,O,n),f=["children",""+O]):l.hasOwnProperty(b)&&O!=null&&b==="onScroll"&&Zt("scroll",u)}switch(o){case"input":qe(u),Bt(u,g,!0);break;case"textarea":qe(u),mn(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Fo)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ut(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(o,{is:u.is}):(n=b.createElement(o),o==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,o),n[Vi]=i,n[Ba]=u,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ce(o,u),o){case"dialog":Zt("cancel",n),Zt("close",n),f=u;break;case"iframe":case"object":case"embed":Zt("load",n),f=u;break;case"video":case"audio":for(f=0;f<Fa.length;f++)Zt(Fa[f],n);f=u;break;case"source":Zt("error",n),f=u;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),f=u;break;case"details":Zt("toggle",n),f=u;break;case"input":Ht(n,u),f=gt(n,u),Zt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=q({},u,{value:void 0}),Zt("invalid",n);break;case"textarea":_t(n,u),f=hn(n,u),Zt("invalid",n);break;default:f=u}xe(o,f),O=f;for(g in O)if(O.hasOwnProperty(g)){var z=O[g];g==="style"?ee(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ct(n,z)):g==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&et(n,z):typeof z=="number"&&et(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Zt("scroll",n):z!=null&&U(n,g,z,b))}switch(o){case"input":qe(n),Bt(n,u,!1);break;case"textarea":qe(n),mn(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ve(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?ln(n,!!u.multiple,g,!1):u.defaultValue!=null&&ln(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Fo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jn(i),null;case 6:if(n&&i.stateNode!=null)Up(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=hs(Va.current),hs(Wi.current),Go(i)){if(u=i.stateNode,o=i.memoizedProps,u[Vi]=i,(g=u.nodeValue!==o)&&(n=oi,n!==null))switch(n.tag){case 3:Uo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Vi]=i,i.stateNode=u}return jn(i),null;case 13:if(Qt(rn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tn&&li!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kf(),Vs(),i.flags|=98560,g=!1;else if(g=Go(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Vi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jn(i),g=!1}else Ci!==null&&(Lu(Ci),Ci=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?Sn===0&&(Sn=3):Uu())),i.updateQueue!==null&&(i.flags|=4),jn(i),null);case 4:return Ys(),Su(n,i),n===null&&Oa(i.stateNode.containerInfo),jn(i),null;case 10:return qc(i.type._context),jn(i),null;case 17:return Qn(i.type)&&ko(),jn(i),null;case 19:if(Qt(rn),g=i.memoizedState,g===null)return jn(i),null;if(u=(i.flags&128)!==0,b=g.rendering,b===null)if(u)qa(g,!1);else{if(Sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=qo(n),b!==null){for(i.flags|=128,qa(g,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $t(rn,rn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Xt()>Qs&&(i.flags|=128,u=!0,qa(g,!1),i.lanes=4194304)}else{if(!u)if(n=qo(b),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!tn)return jn(i),null}else 2*Xt()-g.renderingStartTime>Qs&&o!==1073741824&&(i.flags|=128,u=!0,qa(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(o=g.last,o!==null?o.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Xt(),i.sibling=null,o=rn.current,$t(rn,u?o&1|2:o&1),i):(jn(i),null);case 22:case 23:return Iu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ci&1073741824)!==0&&(jn(i),i.subtreeFlags&6&&(i.flags|=8192)):jn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function jx(n,i){switch(Gc(i),i.tag){case 1:return Qn(i.type)&&ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ys(),Qt(Zn),Qt(kn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Qt(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qt(rn),null;case 4:return Ys(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var rl=!1,zn=!1,zx=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ks(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){un(n,i,u)}else o.current=null}function Mu(n,i,o){try{o()}catch(u){un(n,i,u)}}var Fp=!1;function Hx(n,i){if(Ic=wo,n=pf(),Ac(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,O=-1,z=-1,ue=0,Te=0,Ae=n,Se=null;t:for(;;){for(var He;Ae!==o||f!==0&&Ae.nodeType!==3||(O=b+f),Ae!==g||u!==0&&Ae.nodeType!==3||(z=b+u),Ae.nodeType===3&&(b+=Ae.nodeValue.length),(He=Ae.firstChild)!==null;)Se=Ae,Ae=He;for(;;){if(Ae===n)break t;if(Se===o&&++ue===f&&(O=b),Se===g&&++Te===u&&(z=b),(He=Ae.nextSibling)!==null)break;Ae=Se,Se=Ae.parentNode}Ae=He}o=O===-1||z===-1?null:{start:O,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uc={focusedElem:n,selectionRange:o},wo=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,pn=Ye.memoizedState,ne=i.stateNode,X=ne.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:Ni(i.type,Ze),pn);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){un(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Ye=Fp,Fp=!1,Ye}function Ka(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&Mu(i,o,g)}f=f.next}while(f!==u)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Eu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Op(n){var i=n.alternate;i!==null&&(n.alternate=null,Op(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Vi],delete i[Ba],delete i[Bc],delete i[wx],delete i[Tx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kp(n){return n.tag===5||n.tag===3||n.tag===4}function Bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Fo));else if(u!==4&&(n=n.child,n!==null))for(wu(n,i,o),n=n.sibling;n!==null;)wu(n,i,o),n=n.sibling}function Tu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Tu(n,i,o),n=n.sibling;n!==null;)Tu(n,i,o),n=n.sibling}var Pn=null,Pi=!1;function Fr(n,i,o){for(o=o.child;o!==null;)jp(n,i,o),o=o.sibling}function jp(n,i,o){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(B,o)}catch{}switch(o.tag){case 5:zn||Ks(o,i);case 6:var u=Pn,f=Pi;Pn=null,Fr(n,i,o),Pn=u,Pi=f,Pn!==null&&(Pi?(n=Pn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Pn.removeChild(o.stateNode));break;case 18:Pn!==null&&(Pi?(n=Pn,o=o.stateNode,n.nodeType===8?kc(n.parentNode,o):n.nodeType===1&&kc(n,o),Ra(n)):kc(Pn,o.stateNode));break;case 4:u=Pn,f=Pi,Pn=o.stateNode.containerInfo,Pi=!0,Fr(n,i,o),Pn=u,Pi=f;break;case 0:case 11:case 14:case 15:if(!zn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var g=f,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Mu(o,i,b),f=f.next}while(f!==u)}Fr(n,i,o);break;case 1:if(!zn&&(Ks(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(O){un(o,i,O)}Fr(n,i,o);break;case 21:Fr(n,i,o);break;case 22:o.mode&1?(zn=(u=zn)||o.memoizedState!==null,Fr(n,i,o),zn=u):Fr(n,i,o);break;default:Fr(n,i,o)}}function zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new zx),i.forEach(function(u){var f=Zx.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function Li(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var g=n,b=i,O=b;e:for(;O!==null;){switch(O.tag){case 5:Pn=O.stateNode,Pi=!1;break e;case 3:Pn=O.stateNode.containerInfo,Pi=!0;break e;case 4:Pn=O.stateNode.containerInfo,Pi=!0;break e}O=O.return}if(Pn===null)throw Error(t(160));jp(g,b,f),Pn=null,Pi=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ue){un(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Li(i,n),$i(n),u&4){try{Ka(3,n,n.return),sl(3,n)}catch(Ze){un(n,n.return,Ze)}try{Ka(5,n,n.return)}catch(Ze){un(n,n.return,Ze)}}break;case 1:Li(i,n),$i(n),u&512&&o!==null&&Ks(o,o.return);break;case 5:if(Li(i,n),$i(n),u&512&&o!==null&&Ks(o,o.return),n.flags&32){var f=n.stateNode;try{et(f,"")}catch(Ze){un(n,n.return,Ze)}}if(u&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,b=o!==null?o.memoizedProps:g,O=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&qt(f,g),Ce(O,b);var ue=Ce(O,g);for(b=0;b<z.length;b+=2){var Te=z[b],Ae=z[b+1];Te==="style"?ee(f,Ae):Te==="dangerouslySetInnerHTML"?ct(f,Ae):Te==="children"?et(f,Ae):U(f,Te,Ae,ue)}switch(O){case"input":Wt(f,g);break;case"textarea":W(f,g);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var He=g.value;He!=null?ln(f,!!g.multiple,He,!1):Se!==!!g.multiple&&(g.defaultValue!=null?ln(f,!!g.multiple,g.defaultValue,!0):ln(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ba]=g}catch(Ze){un(n,n.return,Ze)}}break;case 6:if(Li(i,n),$i(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(Ze){un(n,n.return,Ze)}}break;case 3:if(Li(i,n),$i(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ra(i.containerInfo)}catch(Ze){un(n,n.return,Ze)}break;case 4:Li(i,n),$i(n);break;case 13:Li(i,n),$i(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Ru=Xt())),u&4&&zp(n);break;case 22:if(Te=o!==null&&o.memoizedState!==null,n.mode&1?(zn=(ue=zn)||Te,Li(i,n),zn=ue):Li(i,n),$i(n),u&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Te&&(n.mode&1)!==0)for(Ve=n,Te=n.child;Te!==null;){for(Ae=Ve=Te;Ve!==null;){switch(Se=Ve,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ka(4,Se,Se.return);break;case 1:Ks(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=Se,o=Se.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ze){un(u,o,Ze)}}break;case 5:Ks(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Wp(Ae);continue}}He!==null?(He.return=Se,Ve=He):Wp(Ae)}Te=Te.sibling}e:for(Te=null,Ae=n;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{f=Ae.stateNode,ue?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Ae.stateNode,z=Ae.memoizedProps.style,b=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=A("display",b))}catch(Ze){un(n,n.return,Ze)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=ue?"":Ae.memoizedProps}catch(Ze){un(n,n.return,Ze)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Li(i,n),$i(n),u&4&&zp(n);break;case 21:break;default:Li(i,n),$i(n)}}function $i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(kp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(et(f,""),u.flags&=-33);var g=Bp(n);Tu(n,g,f);break;case 3:case 4:var b=u.stateNode.containerInfo,O=Bp(n);wu(n,O,b);break;default:throw Error(t(161))}}catch(z){un(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gx(n,i,o){Ve=n,Gp(n)}function Gp(n,i,o){for(var u=(n.mode&1)!==0;Ve!==null;){var f=Ve,g=f.child;if(f.tag===22&&u){var b=f.memoizedState!==null||rl;if(!b){var O=f.alternate,z=O!==null&&O.memoizedState!==null||zn;O=rl;var ue=zn;if(rl=b,(zn=z)&&!ue)for(Ve=f;Ve!==null;)b=Ve,z=b.child,b.tag===22&&b.memoizedState!==null?Xp(f):z!==null?(z.return=b,Ve=z):Xp(f);for(;g!==null;)Ve=g,Gp(g),g=g.sibling;Ve=f,rl=O,zn=ue}Vp(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Ve=g):Vp(n)}}function Vp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zn||sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!zn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Ni(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Wf(i,g,u);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Wf(i,b,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Te=ue.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Ra(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||i.flags&512&&Eu(i)}catch(Se){un(i,i.return,Se)}}if(i===n){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Wp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Xp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{sl(4,i)}catch(z){un(i,o,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(z){un(i,f,z)}}var g=i.return;try{Eu(i)}catch(z){un(i,g,z)}break;case 5:var b=i.return;try{Eu(i)}catch(z){un(i,b,z)}}}catch(z){un(i,i.return,z)}if(i===n){Ve=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ve=O;break}Ve=i.return}}var Vx=Math.ceil,al=P.ReactCurrentDispatcher,Au=P.ReactCurrentOwner,Mi=P.ReactCurrentBatchConfig,Lt=0,Rn=null,gn=null,Ln=0,ci=0,Zs=Pr(0),Sn=0,Za=null,ps=0,ol=0,bu=0,Qa=null,ei=null,Ru=0,Qs=1/0,dr=null,ll=!1,Cu=null,Or=null,cl=!1,kr=null,ul=0,Ja=0,Nu=null,dl=-1,hl=0;function Yn(){return(Lt&6)!==0?Xt():dl!==-1?dl:dl=Xt()}function Br(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Ln!==0?Ln&-Ln:bx.transition!==null?(hl===0&&(hl=jt()),hl):(n=Je,n!==0||(n=window.event,n=n===void 0?16:$h(n.type)),n)}function Di(n,i,o,u){if(50<Ja)throw Ja=0,Nu=null,Error(t(185));cn(n,o,u),((Lt&2)===0||n!==Rn)&&(n===Rn&&((Lt&2)===0&&(ol|=o),Sn===4&&jr(n,Ln)),ti(n,u),o===1&&Lt===0&&(i.mode&1)===0&&(Qs=Xt()+500,jo&&Dr()))}function ti(n,i){var o=n.callbackNode;wt(n,i);var u=vt(n,n===Rn?Ln:0);if(u===0)o!==null&&Xn(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Xn(o),i===1)n.tag===0?Ax(Yp.bind(null,n)):Df(Yp.bind(null,n)),Mx(function(){(Lt&6)===0&&Dr()}),o=null;else{switch(Hi(u)){case 1:o=zi;break;case 4:o=ss;break;case 16:o=ir;break;case 536870912:o=R;break;default:o=ir}o=nm(o,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function $p(n,i){if(dl=-1,hl=0,(Lt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Js()&&n.callbackNode!==o)return null;var u=vt(n,n===Rn?Ln:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=fl(n,u);else{i=u;var f=Lt;Lt|=2;var g=Kp();(Rn!==n||Ln!==i)&&(dr=null,Qs=Xt()+500,gs(n,i));do try{$x();break}catch(O){qp(n,O)}while(!0);Yc(),al.current=g,Lt=f,gn!==null?i=0:(Rn=null,Ln=0,i=Sn)}if(i!==0){if(i===2&&(f=en(n),f!==0&&(u=f,i=Pu(n,f))),i===1)throw o=Za,gs(n,0),jr(n,u),ti(n,Xt()),o;if(i===6)jr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!Wx(f)&&(i=fl(n,u),i===2&&(g=en(n),g!==0&&(u=g,i=Pu(n,g))),i===1))throw o=Za,gs(n,0),jr(n,u),ti(n,Xt()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:xs(n,ei,dr);break;case 3:if(jr(n,u),(u&130023424)===u&&(i=Ru+500-Xt(),10<i)){if(vt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Yn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Oc(xs.bind(null,n,ei,dr),i);break}xs(n,ei,dr);break;case 4:if(jr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var b=31-Z(u);g=1<<b,b=i[b],b>f&&(f=b),u&=~g}if(u=f,u=Xt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Vx(u/1960))-u,10<u){n.timeoutHandle=Oc(xs.bind(null,n,ei,dr),u);break}xs(n,ei,dr);break;case 5:xs(n,ei,dr);break;default:throw Error(t(329))}}}return ti(n,Xt()),n.callbackNode===o?$p.bind(null,n):null}function Pu(n,i){var o=Qa;return n.current.memoizedState.isDehydrated&&(gs(n,i).flags|=256),n=fl(n,i),n!==2&&(i=ei,ei=o,i!==null&&Lu(i)),n}function Lu(n){ei===null?ei=n:ei.push.apply(ei,n)}function Wx(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],g=f.getSnapshot;f=f.value;try{if(!Ri(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(n,i){for(i&=~bu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Z(i),u=1<<o;n[o]=-1,i&=~u}}function Yp(n){if((Lt&6)!==0)throw Error(t(327));Js();var i=vt(n,0);if((i&1)===0)return ti(n,Xt()),null;var o=fl(n,i);if(n.tag!==0&&o===2){var u=en(n);u!==0&&(i=u,o=Pu(n,u))}if(o===1)throw o=Za,gs(n,0),jr(n,i),ti(n,Xt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,xs(n,ei,dr),ti(n,Xt()),null}function Du(n,i){var o=Lt;Lt|=1;try{return n(i)}finally{Lt=o,Lt===0&&(Qs=Xt()+500,jo&&Dr())}}function ms(n){kr!==null&&kr.tag===0&&(Lt&6)===0&&Js();var i=Lt;Lt|=1;var o=Mi.transition,u=Je;try{if(Mi.transition=null,Je=1,n)return n()}finally{Je=u,Mi.transition=o,Lt=i,(Lt&6)===0&&Dr()}}function Iu(){ci=Zs.current,Qt(Zs)}function gs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Sx(o)),gn!==null)for(o=gn.return;o!==null;){var u=o;switch(Gc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ko();break;case 3:Ys(),Qt(Zn),Qt(kn),nu();break;case 5:eu(u);break;case 4:Ys();break;case 13:Qt(rn);break;case 19:Qt(rn);break;case 10:qc(u.type._context);break;case 22:case 23:Iu()}o=o.return}if(Rn=n,gn=n=zr(n.current,null),Ln=ci=i,Sn=0,Za=null,bu=ol=ps=0,ei=Qa=null,ds!==null){for(i=0;i<ds.length;i++)if(o=ds[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,g=o.pending;if(g!==null){var b=g.next;g.next=f,u.next=b}o.pending=u}ds=null}return n}function qp(n,i){do{var o=gn;try{if(Yc(),Ko.current=el,Zo){for(var u=sn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Zo=!1}if(fs=0,bn=yn=sn=null,Wa=!1,Xa=0,Au.current=null,o===null||o.return===null){Sn=1,Za=i,gn=null;break}e:{var g=n,b=o.return,O=o,z=i;if(i=Ln,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,Te=O,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Se=Te.alternate;Se?(Te.updateQueue=Se.updateQueue,Te.memoizedState=Se.memoizedState,Te.lanes=Se.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var He=yp(b);if(He!==null){He.flags&=-257,Sp(He,b,O,g,i),He.mode&1&&vp(g,ue,i),i=He,z=ue;var Ye=i.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(z),i.updateQueue=Ze}else Ye.add(z);break e}else{if((i&1)===0){vp(g,ue,i),Uu();break e}z=Error(t(426))}}else if(tn&&O.mode&1){var pn=yp(b);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),Sp(pn,b,O,g,i),Xc(qs(z,O));break e}}g=z=qs(z,O),Sn!==4&&(Sn=2),Qa===null?Qa=[g]:Qa.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ne=xp(g,z,i);Vf(g,ne);break e;case 1:O=z;var X=g.type,ae=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Or===null||!Or.has(ae)))){g.flags|=65536,i&=-i,g.lanes|=i;var Le=_p(g,O,i);Vf(g,Le);break e}}g=g.return}while(g!==null)}Qp(o)}catch(tt){i=tt,gn===o&&o!==null&&(gn=o=o.return);continue}break}while(!0)}function Kp(){var n=al.current;return al.current=el,n===null?el:n}function Uu(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),Rn===null||(ps&268435455)===0&&(ol&268435455)===0||jr(Rn,Ln)}function fl(n,i){var o=Lt;Lt|=2;var u=Kp();(Rn!==n||Ln!==i)&&(dr=null,gs(n,i));do try{Xx();break}catch(f){qp(n,f)}while(!0);if(Yc(),Lt=o,al.current=u,gn!==null)throw Error(t(261));return Rn=null,Ln=0,Sn}function Xx(){for(;gn!==null;)Zp(gn)}function $x(){for(;gn!==null&&!xi();)Zp(gn)}function Zp(n){var i=tm(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?Qp(n):gn=i,Au.current=null}function Qp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Bx(o,i,ci),o!==null){gn=o;return}}else{if(o=jx(o,i),o!==null){o.flags&=32767,gn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Sn=6,gn=null;return}}if(i=i.sibling,i!==null){gn=i;return}gn=i=n}while(i!==null);Sn===0&&(Sn=5)}function xs(n,i,o){var u=Je,f=Mi.transition;try{Mi.transition=null,Je=1,Yx(n,i,o,u)}finally{Mi.transition=f,Je=u}return null}function Yx(n,i,o,u){do Js();while(kr!==null);if((Lt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if($e(n,g),n===Rn&&(gn=Rn=null,Ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||cl||(cl=!0,nm(ir,function(){return Js(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Mi.transition,Mi.transition=null;var b=Je;Je=1;var O=Lt;Lt|=4,Au.current=null,Hx(n,o),Hp(o,n),px(Uc),wo=!!Ic,Uc=Ic=null,n.current=o,Gx(o),wa(),Lt=O,Je=b,Mi.transition=g}else n.current=o;if(cl&&(cl=!1,kr=n,ul=f),g=n.pendingLanes,g===0&&(Or=null),te(o.stateNode),ti(n,Xt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(ll)throw ll=!1,n=Cu,Cu=null,n;return(ul&1)!==0&&n.tag!==0&&Js(),g=n.pendingLanes,(g&1)!==0?n===Nu?Ja++:(Ja=0,Nu=n):Ja=0,Dr(),null}function Js(){if(kr!==null){var n=Hi(ul),i=Mi.transition,o=Je;try{if(Mi.transition=null,Je=16>n?16:n,kr===null)var u=!1;else{if(n=kr,kr=null,ul=0,(Lt&6)!==0)throw Error(t(331));var f=Lt;for(Lt|=4,Ve=n.current;Ve!==null;){var g=Ve,b=g.child;if((Ve.flags&16)!==0){var O=g.deletions;if(O!==null){for(var z=0;z<O.length;z++){var ue=O[z];for(Ve=ue;Ve!==null;){var Te=Ve;switch(Te.tag){case 0:case 11:case 15:Ka(8,Te,g)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Ve=Ae;else for(;Ve!==null;){Te=Ve;var Se=Te.sibling,He=Te.return;if(Op(Te),Te===ue){Ve=null;break}if(Se!==null){Se.return=He,Ve=Se;break}Ve=He}}}var Ye=g.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var pn=Ze.sibling;Ze.sibling=null,Ze=pn}while(Ze!==null)}}Ve=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Ve=b;else e:for(;Ve!==null;){if(g=Ve,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ka(9,g,g.return)}var ne=g.sibling;if(ne!==null){ne.return=g.return,Ve=ne;break e}Ve=g.return}}var X=n.current;for(Ve=X;Ve!==null;){b=Ve;var ae=b.child;if((b.subtreeFlags&2064)!==0&&ae!==null)ae.return=b,Ve=ae;else e:for(b=X;Ve!==null;){if(O=Ve,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:sl(9,O)}}catch(tt){un(O,O.return,tt)}if(O===b){Ve=null;break e}var Le=O.sibling;if(Le!==null){Le.return=O.return,Ve=Le;break e}Ve=O.return}}if(Lt=f,Dr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(B,n)}catch{}u=!0}return u}finally{Je=o,Mi.transition=i}}return!1}function Jp(n,i,o){i=qs(o,i),i=xp(n,i,1),n=Ur(n,i,1),i=Yn(),n!==null&&(cn(n,1,i),ti(n,i))}function un(n,i,o){if(n.tag===3)Jp(n,n,o);else for(;i!==null;){if(i.tag===3){Jp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Or===null||!Or.has(u))){n=qs(o,n),n=_p(i,n,1),i=Ur(i,n,1),n=Yn(),i!==null&&(cn(i,1,n),ti(i,n));break}}i=i.return}}function qx(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Yn(),n.pingedLanes|=n.suspendedLanes&o,Rn===n&&(Ln&o)===o&&(Sn===4||Sn===3&&(Ln&130023424)===Ln&&500>Xt()-Ru?gs(n,0):bu|=o),ti(n,i)}function em(n,i){i===0&&((n.mode&1)===0?i=1:(i=We,We<<=1,(We&130023424)===0&&(We=4194304)));var o=Yn();n=lr(n,i),n!==null&&(cn(n,i,o),ti(n,o))}function Kx(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),em(n,o)}function Zx(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),em(n,o)}var tm;tm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zn.current)Jn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Jn=!1,kx(n,i,o);Jn=(n.flags&131072)!==0}else Jn=!1,tn&&(i.flags&1048576)!==0&&If(i,Ho,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;il(n,i),n=i.pendingProps;var f=zs(i,kn.current);$s(i,o),f=su(null,i,u,n,f,o);var g=au();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qn(u)?(g=!0,Bo(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qc(i),f.updater=tl,i.stateNode=f,f._reactInternals=i,hu(i,u,n,o),i=gu(null,i,u,!0,g,o)):(i.tag=0,tn&&g&&Hc(i),$n(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(il(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Jx(u),n=Ni(u,n),f){case 0:i=mu(null,i,u,n,o);break e;case 1:i=bp(null,i,u,n,o);break e;case 11:i=Mp(null,i,u,n,o);break e;case 14:i=Ep(null,i,u,Ni(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Ni(u,f),mu(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Ni(u,f),bp(n,i,u,f,o);case 3:e:{if(Rp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,f=g.element,Gf(n,i),Yo(i,u,null,o);var b=i.memoizedState;if(u=b.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=qs(Error(t(423)),i),i=Cp(n,i,u,o,f);break e}else if(u!==f){f=qs(Error(t(424)),i),i=Cp(n,i,u,o,f);break e}else for(li=Nr(i.stateNode.containerInfo.firstChild),oi=i,tn=!0,Ci=null,o=zf(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Vs(),u===f){i=ur(n,i,o);break e}$n(n,i,u,o)}i=i.child}return i;case 5:return Xf(i),n===null&&Wc(i),u=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,b=f.children,Fc(u,f)?b=null:g!==null&&Fc(u,g)&&(i.flags|=32),Ap(n,i),$n(n,i,b,o),i.child;case 6:return n===null&&Wc(i),null;case 13:return Np(n,i,o);case 4:return Jc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ws(i,null,u,o):$n(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Ni(u,f),Mp(n,i,u,f,o);case 7:return $n(n,i,i.pendingProps,o),i.child;case 8:return $n(n,i,i.pendingProps.children,o),i.child;case 12:return $n(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,g=i.memoizedProps,b=f.value,$t(Wo,u._currentValue),u._currentValue=b,g!==null)if(Ri(g.value,b)){if(g.children===f.children&&!Zn.current){i=ur(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var O=g.dependencies;if(O!==null){b=g.child;for(var z=O.firstContext;z!==null;){if(z.context===u){if(g.tag===1){z=cr(-1,o&-o),z.tag=2;var ue=g.updateQueue;if(ue!==null){ue=ue.shared;var Te=ue.pending;Te===null?z.next=z:(z.next=Te.next,Te.next=z),ue.pending=z}}g.lanes|=o,z=g.alternate,z!==null&&(z.lanes|=o),Kc(g.return,o,i),O.lanes|=o;break}z=z.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=o,O=b.alternate,O!==null&&(O.lanes|=o),Kc(b,o,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}$n(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,$s(i,o),f=yi(f),u=u(f),i.flags|=1,$n(n,i,u,o),i.child;case 14:return u=i.type,f=Ni(u,i.pendingProps),f=Ni(u.type,f),Ep(n,i,u,f,o);case 15:return wp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Ni(u,f),il(n,i),i.tag=1,Qn(u)?(n=!0,Bo(i)):n=!1,$s(i,o),mp(i,u,f),hu(i,u,f,o),gu(null,i,u,!0,n,o);case 19:return Lp(n,i,o);case 22:return Tp(n,i,o)}throw Error(t(156,i.tag))};function nm(n,i){return nn(n,i)}function Qx(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,i,o,u){return new Qx(n,i,o,u)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jx(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===oe)return 14}return 2}function zr(n,i){var o=n.alternate;return o===null?(o=Ei(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function pl(n,i,o,u,f,g){var b=2;if(u=n,typeof n=="function")Fu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case w:return _s(o.children,f,g,i);case N:b=8,f|=8;break;case J:return n=Ei(12,o,i,f|2),n.elementType=J,n.lanes=g,n;case ce:return n=Ei(13,o,i,f),n.elementType=ce,n.lanes=g,n;case j:return n=Ei(19,o,i,f),n.elementType=j,n.lanes=g,n;case Y:return ml(o,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:b=10;break e;case $:b=9;break e;case ie:b=11;break e;case oe:b=14;break e;case fe:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ei(b,o,i,f),i.elementType=n,i.type=u,i.lanes=g,i}function _s(n,i,o,u){return n=Ei(7,n,u,i),n.lanes=o,n}function ml(n,i,o,u){return n=Ei(22,n,u,i),n.elementType=Y,n.lanes=o,n.stateNode={isHidden:!1},n}function Ou(n,i,o){return n=Ei(6,n,null,i),n.lanes=o,n}function ku(n,i,o){return i=Ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function e_(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ft(0),this.expirationTimes=Ft(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ft(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bu(n,i,o,u,f,g,b,O,z){return n=new e_(n,i,o,O,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ei(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(g),n}function t_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function im(n){if(!n)return Lr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Qn(o))return Pf(n,o,i)}return i}function rm(n,i,o,u,f,g,b,O,z){return n=Bu(o,u,!0,n,f,g,b,O,z),n.context=im(null),o=n.current,u=Yn(),f=Br(o),g=cr(u,f),g.callback=i??null,Ur(o,g,f),n.current.lanes=f,cn(n,f,u),ti(n,u),n}function gl(n,i,o,u){var f=i.current,g=Yn(),b=Br(f);return o=im(o),i.context===null?i.context=o:i.pendingContext=o,i=cr(g,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Ur(f,i,b),n!==null&&(Di(n,f,b,g),$o(n,f,b)),b}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function ju(n,i){sm(n,i),(n=n.alternate)&&sm(n,i)}function n_(){return null}var am=typeof reportError=="function"?reportError:function(n){console.error(n)};function zu(n){this._internalRoot=n}_l.prototype.render=zu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},_l.prototype.unmount=zu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ms(function(){gl(null,n,null,null)}),i[rr]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Gi();n={blockedOn:null,target:n,priority:i};for(var o=0;o<br.length&&i!==0&&i<br[o].priority;o++);br.splice(o,0,n),o===0&&Wh(n)}};function Hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function om(){}function i_(n,i,o,u,f){if(f){if(typeof u=="function"){var g=u;u=function(){var ue=xl(b);g.call(ue)}}var b=rm(i,u,n,0,null,!1,!1,"",om);return n._reactRootContainer=b,n[rr]=b.current,Oa(n.nodeType===8?n.parentNode:n),ms(),b}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var O=u;u=function(){var ue=xl(z);O.call(ue)}}var z=Bu(n,0,!1,null,null,!1,!1,"",om);return n._reactRootContainer=z,n[rr]=z.current,Oa(n.nodeType===8?n.parentNode:n),ms(function(){gl(i,z,o,u)}),z}function yl(n,i,o,u,f){var g=o._reactRootContainer;if(g){var b=g;if(typeof f=="function"){var O=f;f=function(){var z=xl(b);O.call(z)}}gl(i,b,n,f)}else b=i_(o,i,n,f,u);return xl(b)}vn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=lt(i.pendingLanes);o!==0&&(_n(i,o|1),ti(i,Xt()),(Lt&6)===0&&(Qs=Xt()+500,Dr()))}break;case 13:ms(function(){var u=lr(n,1);if(u!==null){var f=Yn();Di(u,n,1,f)}}),ju(n,1)}},Tr=function(n){if(n.tag===13){var i=lr(n,134217728);if(i!==null){var o=Yn();Di(i,n,134217728,o)}ju(n,134217728)}},bi=function(n){if(n.tag===13){var i=Br(n),o=lr(n,i);if(o!==null){var u=Yn();Di(o,n,i,u)}ju(n,i)}},Gi=function(){return Je},Rt=function(n,i){var o=Je;try{return Je=n,i()}finally{Je=o}},me=function(n,i,o){switch(i){case"input":if(Wt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=Oo(u);if(!f)throw Error(t(90));At(u),Wt(u,f)}}}break;case"textarea":W(n,o);break;case"select":i=o.value,i!=null&&ln(n,!!o.multiple,i,!1)}},be=Du,Ne=ms;var r_={usingClientEntryPoint:!1,Events:[ja,Bs,Oo,he,Ie,Du]},eo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s_={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=it(n),n===null?null:n.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||n_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{B=Sl.inject(s_),se=Sl}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_,ni.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(i))throw Error(t(200));return t_(n,i,null,o)},ni.createRoot=function(n,i){if(!Hu(n))throw Error(t(299));var o=!1,u="",f=am;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Bu(n,1,!1,null,null,o,!1,u,f),n[rr]=i.current,Oa(n.nodeType===8?n.parentNode:n),new zu(i)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=it(i),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return ms(n)},ni.hydrate=function(n,i,o){if(!vl(i))throw Error(t(200));return yl(null,n,i,!0,o)},ni.hydrateRoot=function(n,i,o){if(!Hu(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,g="",b=am;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=rm(i,null,n,1,o??null,f,!1,g,b),n[rr]=i.current,Oa(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new _l(i)},ni.render=function(n,i,o){if(!vl(i))throw Error(t(200));return yl(null,n,i,!1,o)},ni.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(ms(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},ni.unstable_batchedUpdates=Du,ni.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,o,!1,u)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var mm;function Mg(){if(mm)return Wu.exports;mm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wu.exports=h_(),Wu.exports}var gm;function f_(){if(gm)return Ml;gm=1;var r=Mg();return Ml.createRoot=r.createRoot,Ml.hydrateRoot=r.hydrateRoot,Ml}var p_=f_();const Yl=[{id:"null-field",name:"零空间原野",subtitle:"秩与行列式",level:10,topic:"行列式 · 秩 · 可逆性",x:29,y:62,color:"#67E8F9"},{id:"basis-corridor",name:"基与维数回廊",subtitle:"向量空间",level:12,topic:"基 · 维数 · 矩阵运算",x:54,y:47,color:"#C084FC"},{id:"eigen-abyss",name:"特征值深渊",subtitle:"特征系统",level:18,topic:"特征值 · 对角化 · 二次型",x:77,y:64,color:"#FBBF24",locked:!0}],m_={single:"choice",multiple:"choice",boolean:"judge",numeric:"handwritten",matrix:"handwritten",hotspot:"handwritten",order:"step",match:"step"},Td={choice:"选择",judge:"判断",handwritten:"手写计算",step:"证明步骤"};function ws(r){return r.category??m_[r.type]}function Ad(r){const e=r.knowledgeTag;return e&&e.length>0?[...new Set(e)]:r.topic?[r.topic]:[]}const g_={T1:0,T2:1,T3:2,T4:3,T5:4},x_=[{category:"judge",baseSec:25,perDifficultySec:5},{category:"choice",baseSec:30,perDifficultySec:5},{category:"step",baseSec:75,perDifficultySec:15},{category:"handwritten",baseSec:90,perDifficultySec:20}];function hr(r){if(typeof r.timeLimitSec=="number"&&r.timeLimitSec>0)return r.timeLimitSec;const e=x_.find(t=>t.category===ws(r));return e?e.baseSec+e.perDifficultySec*g_[r.difficulty]:r.timeLimit}const El={wrongThreshold:3,limitPerStage:2},wl={limitPerStage:3},bd=[{id:"neon-violet",name:"霓虹青紫（默认）",emphasis:"#7C3AED",background:"radial-gradient(ellipse at 15% 18%, rgba(124,58,237,.16), transparent 46%), radial-gradient(ellipse at 85% 20%, rgba(0,229,246,.14), transparent 44%), radial-gradient(ellipse at 50% 100%, rgba(255,46,154,.10), transparent 52%), linear-gradient(135deg, #eef3ff 0%, #f2e8ff 34%, #e4f7ff 68%, #efe6ff 100%)",colors:{text:"#16143C",textSoft:"#3A3F66",muted:"#5A6088",bg:"#EEF3FF",bgDeep:"#DFE8FF",panel:"#FFFFFF",panelSoft:"#F3F5FF",stroke:"#D9D6F2",strokeBright:"#B9B3E6",violet:"#7C3AED",violetLight:"#9B6BFF",pink:"#FF2E9A",cyan:"#00E5F6",gold:"#FFB300",danger:"#FF2E7E"}},{id:"neon-pink",name:"赛博粉蓝",emphasis:"#FF2E7E",background:"radial-gradient(ellipse at 15% 18%, rgba(255,46,126,.15), transparent 46%), radial-gradient(ellipse at 85% 22%, rgba(41,121,255,.14), transparent 44%), radial-gradient(ellipse at 50% 100%, rgba(0,229,255,.10), transparent 52%), linear-gradient(135deg, #fff0f6 0%, #eef2ff 34%, #e4f8ff 68%, #ffeef6 100%)",colors:{text:"#1A1A3A",textSoft:"#3A3F66",muted:"#5C5C78",bg:"#FFF0F6",bgDeep:"#F0E6FB",panel:"#FFFFFF",panelSoft:"#FFF5FA",stroke:"#F3D3E2",strokeBright:"#E6B3CE",violet:"#FF2E7E",violetLight:"#FF5C93",pink:"#00E5FF",cyan:"#2979FF",gold:"#FFC107",danger:"#FF1744"}},{id:"neon-green",name:"荧光绿橙",emphasis:"#00C853",background:"radial-gradient(ellipse at 15% 18%, rgba(0,200,83,.15), transparent 46%), radial-gradient(ellipse at 85% 22%, rgba(0,229,255,.13), transparent 44%), radial-gradient(ellipse at 50% 100%, rgba(255,145,0,.11), transparent 52%), linear-gradient(135deg, #f0ffe8 0%, #fff6e6 34%, #e4fdf6 68%, #f2ffe8 100%)",colors:{text:"#142B1A",textSoft:"#3A4A3E",muted:"#5A6A5E",bg:"#F0FFE8",bgDeep:"#DFF6D8",panel:"#FFFFFF",panelSoft:"#F4FFF0",stroke:"#DCE8D4",strokeBright:"#BBD4AE",violet:"#00C853",violetLight:"#3DDC84",pink:"#FF9100",cyan:"#00E5FF",gold:"#FFD600",danger:"#FF3D00"}},{id:"nebula",name:"星云（深色兜底）",emphasis:"#8B5CF6",background:"radial-gradient(ellipse at 70% 40%, rgba(124,58,237,.18), transparent 45%), linear-gradient(145deg, #080311, #07030f 50%, #030107)",colors:{text:"#F5F0FF",textSoft:"#C9BDDC",muted:"#887A9F",bg:"#07030F",bgDeep:"#040108",panel:"#140A26",panelSoft:"rgba(31,17,53,.58)",stroke:"rgba(192,132,252,.22)",strokeBright:"rgba(192,132,252,.52)",violet:"#8B5CF6",violetLight:"#C084FC",pink:"#F472D0",cyan:"#67E8F9",gold:"#FBBF24",danger:"#FB7185"}}];function Eg(r){return bd.find(e=>e.id===r)??bd[0]}const yh=[{id:"q-single-det",type:"single",difficulty:"T1",topic:"行列式",prompt:"计算矩阵 A 的行列式。",formula:"A = [[2, 3], [1, 4]]",options:[{id:"A",text:"5"},{id:"B",text:"−5"},{id:"C",text:"7"},{id:"D",text:"11"}],answer:"A",answerDisplay:"A · 5",explanation:"二阶行列式等于主对角线乘积减去副对角线乘积，因此 det(A)=2×4−3×1=5。",keyStep:"det(A)=2×4−3×1=8−3=5",pitfall:"不要把副对角线乘积与主对角线乘积相加。",timeLimit:20},{id:"q-boolean-identity",type:"boolean",difficulty:"T1",topic:"秩",prompt:"3 阶单位矩阵的秩为 3，这个命题是否成立？",formula:"I₃ = diag(1, 1, 1)",answer:!0,answerDisplay:"成立",explanation:"单位矩阵的三个列向量线性无关，因此列秩和行秩都为 3，即满秩。",keyStep:"单位矩阵的每个列向量都是标准基向量，彼此线性无关。",pitfall:"秩由线性无关的行或列的最大数量决定，不是元素之和。",timeLimit:20},{id:"q-numeric-rank",type:"numeric",difficulty:"T1",topic:"秩",prompt:"矩阵 A 的秩为多少？",formula:"A = [[1, 2], [2, 4]]",answer:1,answerDisplay:"1",suffix:"rank",placeholder:"输入整数",explanation:"第二行等于第一行的 2 倍，只有一个线性无关行，因此 rank(A)=1。",keyStep:"R₂ − 2R₁ = 0，只剩一个非零行。",pitfall:"矩阵不是零矩阵，所以秩不等于 0。",timeLimit:20},{id:"q-single-invertible",type:"single",difficulty:"T1",topic:"可逆性",prompt:"2×2 矩阵可逆的充要条件是？",formula:"A ∈ M₂(ℝ)",options:[{id:"A",text:"det(A) ≠ 0"},{id:"B",text:"tr(A) ≠ 0"},{id:"C",text:"所有元素非零"},{id:"D",text:"A 是对称矩阵"}],answer:"A",answerDisplay:"A · det(A) ≠ 0",explanation:"方阵可逆当且仅当行列式非零。迹、对称性或单个元素都不能保证可逆。",keyStep:"det(A) ≠ 0 ⇔ A 满秩 ⇔ A 可逆。",pitfall:"trace(A) ≠ 0 与可逆没有充分必要关系。",timeLimit:20},{id:"q-multiple-basis",type:"multiple",difficulty:"T2",topic:"基",prompt:"下列哪些集合是 ℝ² 的一组基？",formula:"dim ℝ² = 2",options:[{id:"A",text:"{(1, 0), (0, 1)}"},{id:"B",text:"{(1, 1), (2, 2)}"},{id:"C",text:"{(1, 2), (2, 1)}"},{id:"D",text:"{(0, 0), (1, 0)}"}],answer:["A","C"],answerDisplay:"A、C",explanation:"A 是标准基；C 中两个向量线性无关。B 中两向量成比例，D 含零向量，均不能构成基。",keyStep:"两个 ℝ² 向量构成基 ⇔ 行列式非零。",pitfall:"向量数量等于维数还不够，还必须线性无关。",timeLimit:25},{id:"q-match-properties",type:"match",difficulty:"T2",topic:"矩阵性质",prompt:"将左侧矩阵类型与右侧等价性质连线。",formula:"A ∈ Mₙ(ℝ)",left:[{id:"orthogonal",text:"正交矩阵"},{id:"singular",text:"奇异矩阵"},{id:"idempotent",text:"幂等矩阵"},{id:"symmetric",text:"对称矩阵"}],right:[{id:"det-zero",text:"det(A) = 0"},{id:"transpose-equal",text:"Aᵀ = A"},{id:"ata-identity",text:"AᵀA = I"},{id:"square-self",text:"A² = A"}],answer:{orthogonal:"ata-identity",singular:"det-zero",idempotent:"square-self",symmetric:"transpose-equal"},answerDisplay:"正交↔AᵀA=I；奇异↔det(A)=0；幂等↔A²=A；对称↔Aᵀ=A",explanation:"这四个等价关系分别来自矩阵的定义。正交矩阵保持内积，奇异矩阵行列式为零，幂等矩阵投影两次不变，对称矩阵转置不变。",keyStep:"先回忆定义，再用最简单对角矩阵检验性质。",pitfall:"不要把正交矩阵的 AᵀA 与 AAᵀ 混淆。",timeLimit:25},{id:"q-numeric-eigen",type:"numeric",difficulty:"T2",topic:"特征值",prompt:"矩阵 A 的较小特征值是多少？",formula:"A = [[3, 0], [0, −1]]",answer:-1,answerDisplay:"−1",suffix:"λ",placeholder:"输入数值",explanation:"对角矩阵的特征值就是主对角线元素，因此特征值为 3 和 −1，较小者为 −1。",keyStep:"det(A−λI)=(3−λ)(−1−λ)=0。",pitfall:"“较小”是比较数值大小，不是绝对值大小。",timeLimit:25},{id:"q-matrix-transpose",type:"matrix",difficulty:"T2",topic:"矩阵运算",prompt:"在方格中填写矩阵 A 的转置 Aᵀ。",formula:"A = [[1, 2], [3, 4]]",rows:2,cols:2,answer:[[1,3],[2,4]],answerDisplay:"[[1, 3], [2, 4]]",explanation:"转置会将第 i 行第 j 列的元素移动到第 j 行第 i 列。",keyStep:"(Aᵀ)ᵢⱼ = Aⱼᵢ。",pitfall:"只交换矩阵的两行或两列并不等于转置。",timeLimit:25},{id:"q-single-homogeneous",type:"single",difficulty:"T2",topic:"方程组",prompt:"A 为 3×3 矩阵且 det(A)=0，则齐次方程 Ax=0 的解的情况是？",formula:"A ∈ M₃(ℝ), det(A) = 0",options:[{id:"A",text:"只有零解"},{id:"B",text:"必有非零解"},{id:"C",text:"无解"},{id:"D",text:"无法判断"}],answer:"B",answerDisplay:"B · 必有非零解",explanation:"det(A)=0 说明 A 不满秩，零空间维数至少为 1，因此存在非零解。",keyStep:"dim N(A)=n−rank(A)≥1。",pitfall:"齐次方程永远有零解，因此不可能出现“无解”。",timeLimit:25},{id:"q-numeric-eigen-max",type:"numeric",difficulty:"T4",topic:"特征值",prompt:"求矩阵 A 的最大特征值。",formula:"A = [[2, 1], [1, 2]]",answer:3,answerDisplay:"3",suffix:"λmax",placeholder:"输入数值",explanation:"特征方程为 (2−λ)²−1=0，解得 λ=1 或 λ=3，因此最大特征值为 3。",keyStep:"det(A−λI)=(2−λ)²−1=(1−λ)(3−λ)。",pitfall:"不要只读取主对角线元素，非对角项会改变特征值。",timeLimit:45},{id:"q-order-diagonal",type:"order",difficulty:"T4",topic:"对角化",prompt:"将矩阵对角化的步骤排列为正确顺序。",formula:"A = PΛP⁻¹",items:[{id:"verify",text:"验证 P⁻¹AP = Λ"},{id:"vectors",text:"求各特征值对应的特征向量"},{id:"construct",text:"构造矩阵 P 与对角矩阵 Λ"},{id:"independent",text:"判断是否存在 n 个线性无关特征向量"},{id:"values",text:"求特征多项式的特征值"}],answer:["values","vectors","independent","construct","verify"],answerDisplay:"求特征值 → 求特征向量 → 判断线性无关 → 构造 P 与 Λ → 验证",explanation:"先得到特征值，再求对应特征向量；只有能找到 n 个线性无关特征向量时，才能构造可逆的 P。",keyStep:"特征值 → 特征向量 → 线性无关性 → 构造 → 验证。",pitfall:"求出重特征值后，仍必须检查特征向量是否张成整个空间。",timeLimit:45},{id:"q-matrix-power",type:"matrix",difficulty:"T4",topic:"矩阵幂",prompt:"填写矩阵 A² 的元素。",formula:"A = [[1, 1], [0, 1]]",rows:2,cols:2,answer:[[1,2],[0,1]],answerDisplay:"[[1, 2], [0, 1]]",explanation:"逐项计算 A·A，右上角为 1×1+1×1=2，其余元素保持不变。",keyStep:"A² = [[1,1],[0,1]] · [[1,1],[0,1]] = [[1,2],[0,1]]。",pitfall:"矩阵平方不是把每个元素分别平方。",timeLimit:45},{id:"q-multiple-diagonal",type:"multiple",difficulty:"T4",topic:"对角化",prompt:"选出所有正确命题。",formula:"A ∈ Mₙ(ℝ)",options:[{id:"A",text:"实对称矩阵一定可正交对角化"},{id:"B",text:"有 n 个互异特征值一定可对角化"},{id:"C",text:"有重特征值一定不可对角化"},{id:"D",text:"可对角化当且仅当特征向量张成整个空间"}],answer:["A","B","D"],answerDisplay:"A、B、D",explanation:"实对称矩阵可正交对角化；n 个互异特征值对应 n 个线性无关特征向量；重特征值也可能可对角化。",keyStep:"判断可对角化的核心是特征向量能否张成整个空间。",pitfall:"重特征值不是不可对角化的充分条件，例如单位矩阵。",timeLimit:45},{id:"q-hotspot-pivot",type:"hotspot",difficulty:"T3",topic:"秩",prompt:"点击行阶梯形矩阵中的所有主元位置。",formula:"R = [[1, 2, 0], [0, 1, 3], [0, 0, 0]]",rows:3,cols:3,cells:[["1","2","0"],["0","1","3"],["0","0","0"]],answer:["0-0","1-1"],answerDisplay:"(1,1)、(2,2)",explanation:"首元非零位置依次为第 1 行第 1 列和第 2 行第 2 列，因此矩阵的秩为 2。",keyStep:"从左到右扫描每一行，找到该行首个非零元素所在列。",pitfall:"第三行全零，没有主元；第二行第 3 列的 3 不是主元。",timeLimit:35},{id:"q-single-quadratic",type:"single",difficulty:"T5",topic:"二次型",prompt:"二次型 A=[[2,a],[a,2]] 正定时，a 的取值范围是？",formula:"f(x,y) = 2x² + 2axy + 2y²",options:[{id:"A",text:"−2 < a < 2"},{id:"B",text:"a > 2"},{id:"C",text:"a < −2"},{id:"D",text:"任意实数"}],answer:"A",answerDisplay:"A · −2 < a < 2",explanation:"实对称矩阵正定需要所有顺序主子式为正：2>0 且 det(A)=4−a²>0，因此 −2<a<2。",keyStep:"det(A)=4−a²>0 ⇒ a²<4。",pitfall:"只检查对角线元素为正不足以保证正定。",timeLimit:60},{id:"q-single-quadratic-matrix",type:"single",difficulty:"T4",topic:"二次型",prompt:"二次型 f=x²+2xy+y² 对应的实对称矩阵是？",formula:"f(x,y)=x²+2xy+y²",options:[{id:"A",text:"[[1, 1], [1, 1]]"},{id:"B",text:"[[1, 0], [0, 1]]"},{id:"C",text:"[[1, 2], [0, 1]]"},{id:"D",text:"[[2, 1], [1, 2]]"}],answer:"A",answerDisplay:"A · [[1, 1], [1, 1]]",explanation:"交叉项系数 2 要平均分给矩阵中的两个对称位置，因此 a₁₂=a₂₁=1。",keyStep:"f=xᵀAx，交叉项 2a₁₂xy 对应 a₁₂=a₂₁=1。",pitfall:"不要把交叉项系数 2 直接完整写入非对角元素。",timeLimit:45},{id:"q-sample-choice",type:"single",difficulty:"T1",topic:"行列式",category:"choice",knowledgeTag:["行列式","二阶行列式"],source:"示例题",year:2026,isMockExam:!1,reviveEligible:!0,prompt:"示例题｜正式题库接入中：二阶行列式 det([[a,b],[c,d]]) 的值为？",formula:"A = [[2, 3], [1, 4]]",options:[{id:"A",text:"ad − bc"},{id:"B",text:"ac − bd"},{id:"C",text:"ad + bc"},{id:"D",text:"a + d"}],answer:"A",answerDisplay:"A · ad − bc",explanation:"二阶行列式等于主对角线乘积减去副对角线乘积，即 ad − bc。",keyStep:"det(A) = ad − bc，主对角线减副对角线。",pitfall:"不要把两条对角线的乘积相加。",timeLimit:30,timeLimitSec:30},{id:"q-sample-handwritten",type:"numeric",difficulty:"T2",topic:"矩阵的迹",category:"handwritten",knowledgeTag:["矩阵的迹","矩阵运算"],source:"示例题",year:2026,isMockExam:!1,reviveEligible:!0,prompt:"示例题｜正式题库接入中：A=[[1,2],[3,4]]，求矩阵 A 的迹 tr(A)。",formula:"tr(A) = a₁₁ + a₂₂",answer:5,answerDisplay:"5",suffix:"trace",placeholder:"输入整数",explanation:"矩阵的迹等于主对角线元素之和：1 + 4 = 5。",keyStep:"tr(A) = 1 + 4 = 5。",pitfall:"迹只取主对角线元素，不含副对角线。",timeLimit:90,timeLimitSec:90},{id:"q-exam-2024-invertible",type:"single",difficulty:"T2",topic:"可逆性",category:"choice",knowledgeTag:["可逆性","行列式"],source:"2024级线性代数期末卷",year:2024,isMockExam:!0,reviveEligible:!1,prompt:"（往年模拟）设 A 为 n 阶方阵，下列条件中能推出 A 可逆的是？",formula:"A ∈ Mₙ(ℝ)",options:[{id:"A",text:"det(A) ≠ 0"},{id:"B",text:"A 有零行"},{id:"C",text:"tr(A) = 0"},{id:"D",text:"A 与零矩阵相似"}],answer:"A",answerDisplay:"A · det(A) ≠ 0",explanation:"方阵可逆当且仅当行列式非零，这是可逆的等价刻画之一。",keyStep:"det(A)≠0 ⇔ A 满秩 ⇔ A 可逆。",pitfall:"有零行则 det(A)=0，A 必奇异。",timeLimit:35,timeLimitSec:35},{id:"q-exam-2024-quadratic",type:"boolean",difficulty:"T3",topic:"二次型",category:"judge",knowledgeTag:["二次型","正定"],source:"2024级线性代数期末卷",year:2024,isMockExam:!0,reviveEligible:!1,prompt:"（往年模拟）实对称矩阵 A 正定，则 A 的所有顺序主子式都大于 0。此命题是否成立？",formula:"A = Aᵀ ≻ 0",answer:!0,answerDisplay:"成立",explanation:"正定实对称矩阵的所有顺序主子式为正（正定的主子式判别法）。",keyStep:"A≻0 ⇒ 所有顺序主子式 Δₖ > 0。",pitfall:"反过来所有顺序主子式为正才等价于正定。",timeLimit:40,timeLimitSec:40},{id:"q-exam-2025-det",type:"numeric",difficulty:"T2",topic:"行列式",category:"handwritten",knowledgeTag:["行列式","单位矩阵"],source:"2025级线性代数期末卷",year:2025,isMockExam:!0,reviveEligible:!1,prompt:"（往年模拟）计算三阶行列式 det(A)，其中 A 为单位矩阵 I₃。",formula:"A = I₃ = diag(1, 1, 1)",answer:1,answerDisplay:"1",suffix:"det",placeholder:"输入整数",explanation:"单位矩阵的行列式为 1，任何阶单位矩阵 det(I)=1。",keyStep:"det(I₃)=1×1×1=1。",pitfall:"不要把 det(I) 记为 0，它与零矩阵完全不同。",timeLimit:50,timeLimitSec:50}],__={"null-field":["q-single-det","q-boolean-identity","q-multiple-basis","q-matrix-transpose","q-order-diagonal"],"basis-corridor":["q-single-invertible","q-boolean-identity","q-numeric-eigen","q-matrix-transpose","q-single-quadratic-matrix"],"eigen-abyss":["q-single-det","q-boolean-identity","q-multiple-basis","q-numeric-eigen","q-order-diagonal"]},v_={"null-field":["q-numeric-rank","q-match-properties","q-hotspot-pivot","q-multiple-diagonal","q-single-quadratic"],"basis-corridor":["q-numeric-rank","q-match-properties","q-hotspot-pivot","q-matrix-power","q-single-quadratic"],"eigen-abyss":["q-numeric-rank","q-match-properties","q-hotspot-pivot","q-numeric-eigen-max","q-single-quadratic"]},y_=new Map(yh.map(r=>[r.id,r])),xm={id:"q-placeholder",type:"single",difficulty:"T1",topic:"示例题",category:"choice",knowledgeTag:["示例"],source:"占位",year:0,isMockExam:!1,reviveEligible:!1,prompt:"示例题｜正式题库接入中：本关题目正在同步，请先体验答题流程。",options:[{id:"A",text:"示例选项 A（占位，不计分）"},{id:"B",text:"示例选项 B（占位，不计分）"}],answer:"A",answerDisplay:"A · 示例选项 A",explanation:"这是占位示例题，正式题库接入后会自动替换。",keyStep:"无需计算，选择占位选项体验答题流程。",pitfall:"占位题不计入正式成绩。",timeLimit:30};function Sh(r){return{...r,category:ws(r),knowledgeTag:Ad(r)}}function S_(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function M_(r,e){const t=[...r],s=S_(e);for(let l=t.length-1;l>0;l--){const c=Math.floor(s()*(l+1));[t[l],t[c]]=[t[c],t[l]]}return t}function _m(r,e,t){const s=e==="standard"?__[r]:v_[r];if(!s)return[xm];const c=(typeof t=="number"?M_(s,t):[...s]).flatMap(d=>{const p=y_.get(d);return p?[Sh(p)]:[]});return c.length>0?c:[xm]}function E_(){return yh.filter(r=>r.isMockExam===!0).map(Sh)}function w_(r){const e=ws(r),t=Ad(r);return yh.filter(s=>s.id!==r.id).map(Sh).find(s=>{if(ws(s)!==e)return!1;const l=Ad(s);return t.some(c=>l.includes(c))})}const ma=[{id:"frostblade",name:"凛霜",title:"冰晶剑士",role:"FROSTBLADE",persona:"银白与冰蓝之间，只余剑与秩序。",quote:"剑身即法度，出鞘即唯一解。",accent:"#2EE6C8",mesh:"swordswoman",palette:{hair:"#E8EAF2",skin:"#F2E7DC",primary:"#1B2A5E",secondary:"#18D8C4",gem:"#3AE8D8",cloth:"#223072",metal:"#C9D1E3"}},{id:"nightmage",name:"夜珀",title:"紫袍法师",role:"NIGHTMAGE",persona:"在长袍与魔导书之间，藏着深不见底的法力。",quote:"答案不在纸页上，而在计算之中。",accent:"#A855F7",mesh:"mage",palette:{hair:"#C9C4DA",skin:"#F0E7DC",primary:"#3B1E6E",secondary:"#C084FC",gem:"#A855F7",cloth:"#2E1655",metal:"#D6CFE8"}}];function wg(r){return ma.find(e=>e.id===r)??ma[0]}const Tg="matrix-protocol:progress:v1",Ag="matrix-protocol:settings:v1",Oi={crystals:0,compute:500,maxCompute:500,insight:0,xp:0,level:1,bestRatings:{},totalRuns:0,correctAnswers:0},Gr={volume:65,reducedMotion:!1,quality:"high",palette:"neon-violet",characterId:"architect"};function Rd(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function T_(){try{const r=localStorage.getItem(Tg);if(!r)return Oi;const e=JSON.parse(r);return Rd(e)?{crystals:typeof e.crystals=="number"?e.crystals:Oi.crystals,compute:typeof e.compute=="number"?e.compute:Oi.compute,maxCompute:typeof e.maxCompute=="number"?e.maxCompute:Oi.maxCompute,insight:typeof e.insight=="number"?e.insight:Oi.insight,xp:typeof e.xp=="number"?e.xp:Oi.xp,level:typeof e.level=="number"?e.level:Oi.level,bestRatings:Rd(e.bestRatings)?Object.fromEntries(Object.entries(e.bestRatings).filter(t=>t[1]==="S"||t[1]==="A"||t[1]==="B"||t[1]==="C")):{},totalRuns:typeof e.totalRuns=="number"?e.totalRuns:0,correctAnswers:typeof e.correctAnswers=="number"?e.correctAnswers:0}:Oi}catch{return Oi}}function A_(r){try{localStorage.setItem(Tg,JSON.stringify(r))}catch{}}function b_(){try{const r=localStorage.getItem(Ag);if(!r)return Gr;const e=JSON.parse(r);return Rd(e)?{volume:typeof e.volume=="number"?Math.min(100,Math.max(0,e.volume)):Gr.volume,reducedMotion:typeof e.reducedMotion=="boolean"?e.reducedMotion:Gr.reducedMotion,quality:e.quality==="high"||e.quality==="balanced"||e.quality==="low"?e.quality:Gr.quality,palette:typeof e.palette=="string"&&e.palette.length>0?e.palette:Gr.palette,characterId:typeof e.characterId=="string"&&e.characterId.length>0?e.characterId:Gr.characterId}:Gr}catch{return Gr}}function R_(r){try{localStorage.setItem(Ag,JSON.stringify(r))}catch{}}function C_(r){return r.totalRuns>0||Object.keys(r.bestRatings).length>0}const bg="matrix-protocol:history:v1";function N_(){try{const r=localStorage.getItem(bg);if(!r)return[];const e=JSON.parse(r);return Array.isArray(e)?e:[]}catch{return[]}}function P_(r){try{localStorage.setItem(bg,JSON.stringify(r))}catch{}}const Mh="matrix-protocol:battle:v1";function L_(){try{const r=localStorage.getItem(Mh);if(!r)return null;const e=JSON.parse(r);return e&&typeof e=="object"&&"config"in e&&"snapshot"in e?e:null}catch{return null}}function D_(r){try{localStorage.setItem(Mh,JSON.stringify(r))}catch{}}function Yu(){try{localStorage.removeItem(Mh)}catch{}}let vm=null;function I_(){try{return vm??(vm=new AudioContext),vm}catch{return null}}function Ti(r,e){if(e<=0)return;const t=I_();if(!t)return;t.state==="suspended"&&t.resume();const s=t.createGain(),l=t.createOscillator(),c=t.currentTime;l.connect(s),s.connect(t.destination);const d=e/100*.08,h={click:{frequency:420,endFrequency:520,duration:.06,type:"sine"},correct:{frequency:520,endFrequency:880,duration:.22,type:"triangle"},wrong:{frequency:180,endFrequency:90,duration:.28,type:"sawtooth"},skill:{frequency:700,endFrequency:1100,duration:.18,type:"sine"},complete:{frequency:440,endFrequency:1320,duration:.55,type:"triangle"}}[r];s.gain.setValueAtTime(1e-4,c),s.gain.exponentialRampToValueAtTime(d,c+.015),s.gain.exponentialRampToValueAtTime(1e-4,c+h.duration),l.type=h.type,l.frequency.setValueAtTime(h.frequency,c),l.frequency.exponentialRampToValueAtTime(h.endFrequency,c+h.duration),l.start(c),l.stop(c+h.duration+.02)}function de({name:r,size:e=20,strokeWidth:t=1.5,...s}){const l={width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,...s};switch(r){case"play":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"m8 5 11 7-11 7V5Z"}),a.jsx("path",{d:"M5 7v10",opacity:".35"})]});case"rotate":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M20 7v5h-5"}),a.jsx("path",{d:"M18.5 16A8 8 0 1 1 20 12"}),a.jsx("path",{d:"M12 8v4l3 2"})]});case"settings":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"12",r:"3"}),a.jsx("path",{d:"M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.16.38.4.72.7 1 .3.25.7.4 1.1.4H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z"})]});case"book":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"}),a.jsx("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8M8 10h5"})]});case"user":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"8",r:"4"}),a.jsx("path",{d:"M4.5 21a7.5 7.5 0 0 1 15 0"})]});case"expand":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})});case"map":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Z"}),a.jsx("path",{d:"M9 3v16M15 5v16"})]});case"help":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M9.7 9a2.5 2.5 0 1 1 3.8 2.1c-.9.5-1.5 1.1-1.5 2.1"}),a.jsx("path",{d:"M12 17h.01"})]});case"menu":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"})});case"close":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m6 6 12 12M18 6 6 18"})});case"spark":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z"}),a.jsx("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"})]});case"cube":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"m12 2 8.5 5v10L12 22l-8.5-5V7L12 2Z"}),a.jsx("path",{d:"m3.5 7 8.5 5 8.5-5M12 22V12"})]});case"target":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"12",r:"8"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"}),a.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3"})]});case"lock":return a.jsxs("svg",{...l,children:[a.jsx("rect",{x:"5",y:"10",width:"14",height:"11",rx:"2"}),a.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3M12 14v3"})]});case"check":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m4 12 5 5L20 6"})});case"x":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m6 6 12 12M18 6 6 18"})});case"bolt":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m13 2-8 12h6l-1 8 9-13h-6V2Z"})});case"shield":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M12 3 20 6v5.5c0 5.1-3.4 8.2-8 9.5-4.6-1.3-8-4.4-8-9.5V6l8-3Z"}),a.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5"})]});case"time":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M12 7v5l3.5 2"})]});case"arrow-right":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M4 12h16M14 6l6 6-6 6"})});case"arrow-left":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M20 12H4M10 6l-6 6 6 6"})});case"chevron-up":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m6 15 6-6 6 6"})});case"chevron-down":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m6 9 6 6 6-6"})});case"plus":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M12 5v14M5 12h14"})});case"minus":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M5 12h14"})});case"volume":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M5 10H2v4h3l5 4V6l-5 4Z"}),a.jsx("path",{d:"M14 9a4 4 0 0 1 0 6M17 6a8 8 0 0 1 0 12"})]});case"eye":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M2.5 12S6 6 12 6s9.5 6 9.5 6S18 18 12 18 2.5 12 2.5 12Z"}),a.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"matrix":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M7 3H4v18h3M17 3h3v18h-3"}),a.jsx("circle",{cx:"10",cy:"8",r:".7",fill:"currentColor"}),a.jsx("circle",{cx:"14",cy:"8",r:".7",fill:"currentColor"}),a.jsx("circle",{cx:"10",cy:"12",r:".7",fill:"currentColor"}),a.jsx("circle",{cx:"14",cy:"12",r:".7",fill:"currentColor"}),a.jsx("circle",{cx:"10",cy:"16",r:".7",fill:"currentColor"}),a.jsx("circle",{cx:"14",cy:"16",r:".7",fill:"currentColor"})]});case"star":return a.jsx("svg",{...l,children:a.jsx("path",{d:"m12 3 2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.7L6.8 19l1-5.8-4.3-4.1 5.9-.8L12 3Z"})});case"compass":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"m15.5 8.5-2 5-5 2 2-5 5-2Z"})]});case"trash":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6"})});case"keyboard":return a.jsxs("svg",{...l,children:[a.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),a.jsx("path",{d:"M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 17h8"})]});case"pause":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M8 5v14M16 5v14"})});case"refresh":return a.jsx("svg",{...l,children:a.jsx("path",{d:"M20 11a8 8 0 1 0-2.3 6.3M20 4v7h-7"})});case"trophy":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"M8 4h8v4a4 4 0 0 1-8 0V4ZM12 12v5M8 21h8M9 17h6"}),a.jsx("path",{d:"M8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4"})]});case"crystal":return a.jsxs("svg",{...l,children:[a.jsx("path",{d:"m12 2 7 7-7 13L5 9l7-7Z"}),a.jsx("path",{d:"m5 9 7 3 7-3M12 2v10M12 12v10"})]});case"info":return a.jsxs("svg",{...l,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M12 11v6M12 7h.01"})]});default:return null}}function dn({variant:r="secondary",size:e="md",icon:t,trailingIcon:s,className:l="",children:c,...d}){return a.jsxs("button",{className:`ui-button ui-button--${r} ui-button--${e} ${l}`,...d,children:[t&&a.jsx("span",{className:"ui-button__icon",children:t}),a.jsx("span",{children:c}),s&&a.jsx("span",{className:"ui-button__icon",children:s})]})}function oo({label:r,icon:e,active:t=!1,className:s="",...l}){return a.jsx("button",{className:`icon-button ${t?"is-active":""} ${s}`,"aria-label":r,title:r,...l,children:a.jsx(de,{name:e,size:19})})}function Eh({count:r,color:e}){return a.jsx("span",{className:"stars",style:e?{color:e}:void 0,"aria-label":`${r} 星难度`,children:Array.from({length:5},(t,s)=>a.jsx("span",{className:s<r?"is-filled":"",children:"◆"},s))})}function Yt({children:r,tone:e="violet",className:t=""}){return a.jsx("span",{className:`tag tag--${e} ${t}`,children:r})}function U_({message:r}){return a.jsxs("div",{className:"toast",role:"status",children:[a.jsx("span",{className:"toast__icon",children:a.jsx(de,{name:"spark",size:17})}),a.jsx("span",{children:r})]})}function F_({hasSave:r,onStart:e,onContinue:t,onOpenSettings:s,onOpenExam:l,onNotify:c}){const[d,p]=Ue.useState(!1),h=Ue.useRef(null);Ue.useEffect(()=>()=>{h.current!==null&&window.clearTimeout(h.current)},[]);const m=()=>{d||(p(!0),h.current=window.setTimeout(e,800))},y=()=>{r?t():c("暂无存档")};return a.jsxs("main",{className:"title-screen screen-enter",children:[a.jsx("div",{className:"title-screen__aurora"}),a.jsx("div",{className:"title-screen__grid"}),a.jsx("div",{className:"title-screen__scan"}),a.jsx("header",{className:"title-topbar",children:a.jsx("div",{className:"title-topbar__brand",children:a.jsxs("span",{className:"mini-sigil","aria-label":"矩阵协议",children:["M",a.jsx("span",{children:"P"})]})})}),a.jsxs("div",{className:"title-layout",children:[a.jsxs("section",{className:"title-copy",children:[a.jsxs("div",{className:"title-copy__subline",children:[a.jsx("span",{className:"title-copy__subtitle",children:"线性代数解谜"}),a.jsx("em",{className:"title-copy__sep",children:"·"}),a.jsx("span",{className:"title-copy__tag",children:"秩 / 空间 / 唯一解"})]}),a.jsx("h1",{className:"title-copy__title",children:"矩阵协议"}),a.jsx("p",{className:"title-copy__slogan",children:"在秩与空间之间，寻找唯一解。"}),a.jsxs("div",{className:"title-actions",children:[a.jsx(dn,{variant:"primary",size:"lg",icon:a.jsx(de,{name:"play",size:20}),onClick:m,children:"开始游戏"}),a.jsxs("button",{type:"button",className:`ui-button ui-button--lg ui-button--secondary title-continue ${r?"":"is-disabled"}`,"aria-disabled":r?void 0:"true",title:r?void 0:"暂无存档",onClick:y,children:[a.jsx("span",{className:"ui-button__icon",children:a.jsx(de,{name:"rotate",size:20})}),a.jsx("span",{children:"继续游戏"})]}),a.jsx(dn,{variant:"ghost",size:"lg",icon:a.jsx(de,{name:"book",size:20}),onClick:l,children:"模拟考场"}),a.jsx(dn,{variant:"ghost",size:"lg",icon:a.jsx(de,{name:"settings",size:20}),onClick:s,children:"设置"})]})]}),a.jsxs("section",{className:"title-logo-stage","aria-label":"矩阵协议游戏标识",children:[a.jsx("div",{className:"title-logo-stage__glow"}),a.jsx("img",{src:"/assets/logo.png",alt:"矩阵协议 Logo",className:"title-logo"}),a.jsx("div",{className:"title-logo-stage__scanline"}),a.jsx("div",{className:"title-poster-formula",children:"rank(A) = n"})]})]}),d&&a.jsxs("div",{className:"loading-transition",role:"status","aria-live":"polite",children:[a.jsx("div",{className:"loading-transition__halo"}),a.jsxs("div",{className:"loading-transition__logo",children:["M",a.jsx("span",{children:"P"})]}),a.jsx("p",{children:"正在建立维度连接"}),a.jsx("div",{className:"loading-transition__bar",children:a.jsx("i",{})}),a.jsx("small",{children:"CALIBRATING VECTOR FIELD · PLEASE STAND BY"})]})]})}var O_=Mg();function ts({eyebrow:r,title:e,icon:t="spark",onClose:s,children:l,footer:c,className:d=""}){const p=Ue.useRef(null);return Ue.useEffect(()=>{var M;const h=document.body.style.overflow;document.body.style.overflow="hidden";const m=p.current,y='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',_=m==null?void 0:m.querySelectorAll(y);(M=_==null?void 0:_[0])==null||M.focus();const x=E=>{if(E.key==="Escape"){E.preventDefault(),s();return}if(E.key!=="Tab"||!m)return;const T=Array.from(m.querySelectorAll(y));if(T.length===0)return;const v=T[0],S=T[T.length-1];E.shiftKey&&document.activeElement===v?(E.preventDefault(),S.focus()):!E.shiftKey&&document.activeElement===S&&(E.preventDefault(),v.focus())};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x),document.body.style.overflow=h}},[s]),O_.createPortal(a.jsx("div",{className:"modal-layer",role:"presentation",onMouseDown:h=>{h.target===h.currentTarget&&s()},children:a.jsxs("div",{ref:p,className:`modal-panel cut-corners ${d}`,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[a.jsx("div",{className:"modal-panel__glow"}),a.jsxs("header",{className:"modal-panel__header",children:[a.jsxs("div",{className:"modal-panel__title-wrap",children:[a.jsx("span",{className:"modal-panel__gem",children:a.jsx("span",{children:t==="spark"?"◇":"◆"})}),a.jsxs("div",{children:[r&&a.jsx("p",{className:"eyebrow",children:r}),a.jsx("h2",{id:"modal-title",children:e})]})]}),a.jsx(oo,{label:"关闭",icon:"close",className:"modal-panel__close",onClick:s})]}),a.jsx("div",{className:"modal-panel__body",children:l}),c&&a.jsx("footer",{className:"modal-panel__footer",children:c})]})}),document.body)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="187",ga={ROTATE:0,DOLLY:1,PAN:2},fa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},k_=0,ym=1,B_=2,ql=1,j_=2,lo=3,Ts=0,si=1,vr=2,xa=0,uo=1,Sm=2,Mm=3,Em=4,z_=5,ha=100,H_=101,G_=102,V_=103,W_=104,X_=200,$_=201,Y_=202,q_=203,Rg=204,Cg=205,K_=206,Z_=207,Q_=208,J_=209,ev=210,tv=211,nv=212,iv=213,rv=214,Cd=0,Nd=1,Pd=2,ho=3,Ld=4,Dd=5,Id=6,Ud=7,Ng=0,sv=1,av=2,Sr=0,Pg=1,Lg=2,Dg=3,Th=4,Ig=5,Ug=6,Fg=7,Og=300,va=301,fo=302,qu=303,Ku=304,Fd=1e3,yr=1001,Od=1002,Dn=1003,ov=1004,Tl=1005,ri=1006,Zu=1007,Kr=1008,fi=1009,kg=1010,Bg=1011,po=1012,Ah=1013,er=1014,Zi=1015,tr=1016,bh=1017,Rh=1018,ya=1020,jg=35902,zg=35899,Hg=1021,Gg=1022,Qi=1023,Qr=1026,Zr=1027,Vg=1028,Ch=1029,As=1030,Nh=1031,Ph=1033,Kl=33776,Zl=33777,Ql=33778,Jl=33779,kd=35840,Bd=35841,jd=35842,zd=35843,Hd=36196,Gd=37492,Vd=37496,Wd=37488,Xd=37489,rc=37490,$d=37491,Yd=37808,qd=37809,Kd=37810,Zd=37811,Qd=37812,Jd=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,ah=37820,oh=37821,lh=36492,ch=36494,uh=36495,dh=36283,hh=36284,sc=36285,fh=36286,lv=3200,ph=0,cv=1,qr="",hi="srgb",ac="srgb-linear",oc="linear",zt="srgb",Qu=7680,uv=519,dv=512,hv=513,fv=514,Wg=515,pv=516,mv=517,Xg=518,$g=519,gv=35044,wm="300 es",ji=2e3,mo=2001;function xv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _v(){const r=lc("canvas");return r.style.display="block",r}const Tm={};function Am(...r){const e="THREE."+r.shift();console.log(e,...r)}function Yg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function dt(...r){r=Yg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ot(...r){r=Yg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ec(...r){const e=r.join(" ");e in Tm||(Tm[e]=!0,dt(...r))}function vv(r,e,t){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}const yv={[Cd]:Cd,[Pd]:Id,[Ld]:Ld,[ho]:Dd,[Nd]:Nd,[Id]:Pd,[Ud]:Ud,[Dd]:ho};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(t);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,mh=180/Math.PI;function vo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function Sv(r,e){return(r%e+e)%e}function Ju(r,e,t){return(1-t)*r+t*e}function Mv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ev(r,e){if(e.constructor===Float32Array)return r;const t=Lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function wv(r,e){if(e.constructor===Float32Array)return r;const t=Lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const Tv={DEG2RAD:tc},jh=class jh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6],this.y=l[1]*t+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),l=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jh.prototype.isVector2=!0;let pt=jh;class Jr{constructor(e=0,t=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=l}static slerpFlat(e,t,s,l,c,d,p){let h=s[l+0],m=s[l+1],y=s[l+2],_=s[l+3],x=c[d+0],M=c[d+1],E=c[d+2],T=c[d+3];if(_!==T||h!==x||m!==M||y!==E){let v=h*x+m*M+y*E+_*T;v<0&&(x=-x,M=-M,E=-E,T=-T,v=-v);let S=1-p;if(v<.9995){const C=Math.acos(v),U=Math.sin(C);S=Math.sin(S*C)/U,p=Math.sin(p*C)/U,h=h*S+x*p,m=m*S+M*p,y=y*S+E*p,_=_*S+T*p}else{h=h*S+x*p,m=m*S+M*p,y=y*S+E*p,_=_*S+T*p;const C=1/Math.sqrt(h*h+m*m+y*y+_*_);h*=C,m*=C,y*=C,_*=C}}e[t]=h,e[t+1]=m,e[t+2]=y,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,l,c,d){const p=s[l],h=s[l+1],m=s[l+2],y=s[l+3],_=c[d],x=c[d+1],M=c[d+2],E=c[d+3];return e[t]=p*E+y*_+h*M-m*x,e[t+1]=h*E+y*x+m*_-p*M,e[t+2]=m*E+y*M+p*x-h*_,e[t+3]=y*E-p*_-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,l){return this._x=e,this._y=t,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,h=Math.sin,m=p(s/2),y=p(l/2),_=p(c/2),x=h(s/2),M=h(l/2),E=h(c/2);switch(d){case"XYZ":this._x=x*y*_+m*M*E,this._y=m*M*_-x*y*E,this._z=m*y*E+x*M*_,this._w=m*y*_-x*M*E;break;case"YXZ":this._x=x*y*_+m*M*E,this._y=m*M*_-x*y*E,this._z=m*y*E-x*M*_,this._w=m*y*_+x*M*E;break;case"ZXY":this._x=x*y*_-m*M*E,this._y=m*M*_+x*y*E,this._z=m*y*E+x*M*_,this._w=m*y*_-x*M*E;break;case"ZYX":this._x=x*y*_-m*M*E,this._y=m*M*_+x*y*E,this._z=m*y*E-x*M*_,this._w=m*y*_+x*M*E;break;case"YZX":this._x=x*y*_+m*M*E,this._y=m*M*_+x*y*E,this._z=m*y*E-x*M*_,this._w=m*y*_-x*M*E;break;case"XZY":this._x=x*y*_-m*M*E,this._y=m*M*_-x*y*E,this._z=m*y*E+x*M*_,this._w=m*y*_+x*M*E;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],l=t[4],c=t[8],d=t[1],p=t[5],h=t[9],m=t[2],y=t[6],_=t[10],x=s+p+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-h)*M,this._y=(c-m)*M,this._z=(d-l)*M}else if(s>p&&s>_){const M=2*Math.sqrt(1+s-p-_);this._w=(y-h)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+m)/M}else if(p>_){const M=2*Math.sqrt(1+p-s-_);this._w=(c-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(h+y)/M}else{const M=2*Math.sqrt(1+_-s-p);this._w=(d-l)/M,this._x=(c+m)/M,this._y=(h+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,t/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,l=e._y,c=e._z,d=e._w,p=t._x,h=t._y,m=t._z,y=t._w;return this._x=s*y+d*p+l*m-c*h,this._y=l*y+d*h+c*p-s*m,this._z=c*y+d*m+s*h-l*p,this._w=d*y-s*p-l*h-c*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let h=1-t;if(p<.9995){const m=Math.acos(p),y=Math.sin(m);h=Math.sin(h*m)/y,t=Math.sin(t*m)/y,this._x=this._x*h+s*t,this._y=this._y*h+l*t,this._z=this._z*h+c*t,this._w=this._w*h+d*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+l*t,this._z=this._z*h+c*t,this._w=this._w*h+d*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zh=class zh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*l,this.y=c[1]*t+c[4]*s+c[7]*l,this.z=c[2]*t+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*t+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*t+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*t+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,h=e.w,m=2*(d*l-p*s),y=2*(p*t-c*l),_=2*(c*s-d*t);return this.x=t+h*m+d*_-p*y,this.y=s+h*y+p*m-c*_,this.z=l+h*_+c*y-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*l,this.y=c[1]*t+c[5]*s+c[9]*l,this.z=c[2]*t+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,l=e.y,c=e.z,d=t.x,p=t.y,h=t.z;return this.x=l*h-c*p,this.y=c*d-s*h,this.z=s*p-l*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return t*t+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const l=Math.sin(t)*e;return this.x=l*Math.sin(s),this.y=Math.cos(t)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=l,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;let le=zh;const ed=new le,bm=new Jr,Hh=class Hh{constructor(e,t,s,l,c,d,p,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,l,c,d,p,h,m)}set(e,t,s,l,c,d,p,h,m){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=t,y[4]=c,y[5]=h,y[6]=s,y[7]=d,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,l=t.elements,c=this.elements,d=s[0],p=s[3],h=s[6],m=s[1],y=s[4],_=s[7],x=s[2],M=s[5],E=s[8],T=l[0],v=l[3],S=l[6],C=l[1],U=l[4],P=l[7],F=l[2],I=l[5],w=l[8];return c[0]=d*T+p*C+h*F,c[3]=d*v+p*U+h*I,c[6]=d*S+p*P+h*w,c[1]=m*T+y*C+_*F,c[4]=m*v+y*U+_*I,c[7]=m*S+y*P+_*w,c[2]=x*T+M*C+E*F,c[5]=x*v+M*U+E*I,c[8]=x*S+M*P+E*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],h=e[6],m=e[7],y=e[8];return t*d*y-t*p*m-s*c*y+s*p*h+l*c*m-l*d*h}invert(){const e=this.elements,t=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],h=e[6],m=e[7],y=e[8],_=y*d-p*m,x=p*h-y*c,M=m*c-d*h,E=t*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(l*m-y*s)*T,e[2]=(p*s-l*d)*T,e[3]=x*T,e[4]=(y*t-l*h)*T,e[5]=(l*c-p*t)*T,e[6]=M*T,e[7]=(s*h-m*t)*T,e[8]=(d*t-s*c)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,l,c,d,p){const h=Math.cos(c),m=Math.sin(c);return this.set(s*h,s*m,-s*(h*d+m*p)+d+e,-l*m,l*h,-l*(-m*d+h*p)+p+t,0,0,1),this}scale(e,t){return ec("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(td.makeScale(e,t)),this}rotate(e){return ec("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(td.makeRotation(-e)),this}translate(e,t){return ec("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(td.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let l=0;l<9;l++)if(t[l]!==s[l])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;let ft=Hh;const td=new ft,Rm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){const r={enabled:!0,workingColorSpace:ac,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===zt&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qr?oc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ac]:{primaries:e,whitePoint:s,transfer:oc,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}const Pt=Av();function Mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ea;class bv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ea===void 0&&(ea=lc("canvas")),ea.width=e.width,ea.height=e.height;const l=ea.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ea}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Mr(c[d]/255)*255;return s.putImageData(l,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Mr(t[s]/255)*255):t[s]=Mr(t[s]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rv=0;class Dh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(nd(l[d].image)):c.push(nd(l[d]))}else c=nd(l);s.url=c}return t||(e.images[this.uuid]=s),s}}function nd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let Cv=0;const id=new le;class Kn extends ns{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,s=yr,l=yr,c=ri,d=Kr,p=Qi,h=fi,m=Kn.DEFAULT_ANISOTROPY,y=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=vo(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Og;Kn.DEFAULT_ANISOTROPY=1;const Gh=class Gh{constructor(e=0,t=0,s=0,l=1){this.x=e,this.y=t,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,l){return this.x=e,this.y=t,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*t+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*t+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*t+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,l,c;const h=e.elements,m=h[0],y=h[4],_=h[8],x=h[1],M=h[5],E=h[9],T=h[2],v=h[6],S=h[10];if(Math.abs(y-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-v)<.01){if(Math.abs(y+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+v)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(m+1)/2,P=(M+1)/2,F=(S+1)/2,I=(y+x)/4,w=(_+T)/4,N=(E+v)/4;return U>P&&U>F?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=w/s):P>F?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=I/l,c=N/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=w/c,l=N/c),this.set(s,l,c,t),this}let C=Math.sqrt((v-E)*(v-E)+(_-T)*(_-T)+(x-y)*(x-y));return Math.abs(C)<.001&&(C=1),this.x=(v-E)/C,this.y=(_-T)/C,this.z=(x-y)/C,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;let an=Gh;class Nv extends ns{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const l=s.count;for(let c=0;c<l;c++)this.textures[c]=new Kn({width:e,height:t,depth:s.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=t,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const l=Object.assign({},e.textures[t].image);this.textures[t].source=new Dh(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Nv{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class qg extends Kn{constructor(e=null,t=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pv extends Kn{constructor(e=null,t=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const uc=class uc{constructor(e,t,s,l,c,d,p,h,m,y,_,x,M,E,T,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,l,c,d,p,h,m,y,_,x,M,E,T,v)}set(e,t,s,l,c,d,p,h,m,y,_,x,M,E,T,v){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=l,S[1]=c,S[5]=d,S[9]=p,S[13]=h,S[2]=m,S[6]=y,S[10]=_,S[14]=x,S[3]=M,S[7]=E,S[11]=T,S[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,l=1/ta.setFromMatrixColumn(e,0).length(),c=1/ta.setFromMatrixColumn(e,1).length(),d=1/ta.setFromMatrixColumn(e,2).length();return t[0]=s[0]*l,t[1]=s[1]*l,t[2]=s[2]*l,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),h=Math.cos(l),m=Math.sin(l),y=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*y,M=d*_,E=p*y,T=p*_;t[0]=h*y,t[4]=-h*_,t[8]=m,t[1]=M+E*m,t[5]=x-T*m,t[9]=-p*h,t[2]=T-x*m,t[6]=E+M*m,t[10]=d*h}else if(e.order==="YXZ"){const x=h*y,M=h*_,E=m*y,T=m*_;t[0]=x+T*p,t[4]=E*p-M,t[8]=d*m,t[1]=d*_,t[5]=d*y,t[9]=-p,t[2]=M*p-E,t[6]=T+x*p,t[10]=d*h}else if(e.order==="ZXY"){const x=h*y,M=h*_,E=m*y,T=m*_;t[0]=x-T*p,t[4]=-d*_,t[8]=E+M*p,t[1]=M+E*p,t[5]=d*y,t[9]=T-x*p,t[2]=-d*m,t[6]=p,t[10]=d*h}else if(e.order==="ZYX"){const x=d*y,M=d*_,E=p*y,T=p*_;t[0]=h*y,t[4]=E*m-M,t[8]=x*m+T,t[1]=h*_,t[5]=T*m+x,t[9]=M*m-E,t[2]=-m,t[6]=p*h,t[10]=d*h}else if(e.order==="YZX"){const x=d*h,M=d*m,E=p*h,T=p*m;t[0]=h*y,t[4]=T-x*_,t[8]=E*_+M,t[1]=_,t[5]=d*y,t[9]=-p*y,t[2]=-m*y,t[6]=M*_+E,t[10]=x-T*_}else if(e.order==="XZY"){const x=d*h,M=d*m,E=p*h,T=p*m;t[0]=h*y,t[4]=-_,t[8]=m*y,t[1]=x*_+T,t[5]=d*y,t[9]=M*_-E,t[2]=E*_-M,t[6]=p*y,t[10]=T*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lv,e,Dv)}lookAt(e,t,s){const l=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Vr.crossVectors(s,ui),Vr.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Vr.crossVectors(s,ui)),Vr.normalize(),Al.crossVectors(ui,Vr),l[0]=Vr.x,l[4]=Al.x,l[8]=ui.x,l[1]=Vr.y,l[5]=Al.y,l[9]=ui.y,l[2]=Vr.z,l[6]=Al.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,l=t.elements,c=this.elements,d=s[0],p=s[4],h=s[8],m=s[12],y=s[1],_=s[5],x=s[9],M=s[13],E=s[2],T=s[6],v=s[10],S=s[14],C=s[3],U=s[7],P=s[11],F=s[15],I=l[0],w=l[4],N=l[8],J=l[12],G=l[1],$=l[5],ie=l[9],ce=l[13],j=l[2],oe=l[6],fe=l[10],Y=l[14],K=l[3],V=l[7],q=l[11],D=l[15];return c[0]=d*I+p*G+h*j+m*K,c[4]=d*w+p*$+h*oe+m*V,c[8]=d*N+p*ie+h*fe+m*q,c[12]=d*J+p*ce+h*Y+m*D,c[1]=y*I+_*G+x*j+M*K,c[5]=y*w+_*$+x*oe+M*V,c[9]=y*N+_*ie+x*fe+M*q,c[13]=y*J+_*ce+x*Y+M*D,c[2]=E*I+T*G+v*j+S*K,c[6]=E*w+T*$+v*oe+S*V,c[10]=E*N+T*ie+v*fe+S*q,c[14]=E*J+T*ce+v*Y+S*D,c[3]=C*I+U*G+P*j+F*K,c[7]=C*w+U*$+P*oe+F*V,c[11]=C*N+U*ie+P*fe+F*q,c[15]=C*J+U*ce+P*Y+F*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],h=e[9],m=e[13],y=e[2],_=e[6],x=e[10],M=e[14],E=e[3],T=e[7],v=e[11],S=e[15],C=h*M-m*x,U=p*M-m*_,P=p*x-h*_,F=d*M-m*y,I=d*x-h*y,w=d*_-p*y;return t*(T*C-v*U+S*P)-s*(E*C-v*F+S*I)+l*(E*U-T*F+S*w)-c*(E*P-T*I+v*w)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],h=e[2],m=e[6],y=e[10];return t*(d*y-p*m)-s*(c*y-p*h)+l*(c*m-d*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=t,l[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],h=e[6],m=e[7],y=e[8],_=e[9],x=e[10],M=e[11],E=e[12],T=e[13],v=e[14],S=e[15],C=t*p-s*d,U=t*h-l*d,P=t*m-c*d,F=s*h-l*p,I=s*m-c*p,w=l*m-c*h,N=y*T-_*E,J=y*v-x*E,G=y*S-M*E,$=_*v-x*T,ie=_*S-M*T,ce=x*S-M*v,j=C*ce-U*ie+P*$+F*G-I*J+w*N;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const oe=1/j;return e[0]=(p*ce-h*ie+m*$)*oe,e[1]=(l*ie-s*ce-c*$)*oe,e[2]=(T*w-v*I+S*F)*oe,e[3]=(x*I-_*w-M*F)*oe,e[4]=(h*G-d*ce-m*J)*oe,e[5]=(t*ce-l*G+c*J)*oe,e[6]=(v*P-E*w-S*U)*oe,e[7]=(y*w-x*P+M*U)*oe,e[8]=(d*ie-p*G+m*N)*oe,e[9]=(s*G-t*ie-c*N)*oe,e[10]=(E*I-T*P+S*C)*oe,e[11]=(_*P-y*I-M*C)*oe,e[12]=(p*J-d*$-h*N)*oe,e[13]=(t*$-s*J+l*N)*oe,e[14]=(T*U-E*F-v*C)*oe,e[15]=(y*F-_*U+x*C)*oe,this}scale(e){const t=this.elements,s=e.x,l=e.y,c=e.z;return t[0]*=s,t[4]*=l,t[8]*=c,t[1]*=s,t[5]*=l,t[9]*=c,t[2]*=s,t[6]*=l,t[10]*=c,t[3]*=s,t[7]*=l,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,l))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),l=Math.sin(t),c=1-s,d=e.x,p=e.y,h=e.z,m=c*d,y=c*p;return this.set(m*d+s,m*p-l*h,m*h+l*p,0,m*p+l*h,y*p+s,y*h-l*d,0,m*h-l*p,y*h+l*d,c*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,t,l,1,0,0,0,0,1),this}compose(e,t,s){const l=this.elements,c=t._x,d=t._y,p=t._z,h=t._w,m=c+c,y=d+d,_=p+p,x=c*m,M=c*y,E=c*_,T=d*y,v=d*_,S=p*_,C=h*m,U=h*y,P=h*_,F=s.x,I=s.y,w=s.z;return l[0]=(1-(T+S))*F,l[1]=(M+P)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(M-P)*I,l[5]=(1-(x+S))*I,l[6]=(v+C)*I,l[7]=0,l[8]=(E+U)*w,l[9]=(v-C)*w,l[10]=(1-(x+T))*w,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,t,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),t.identity(),this;let d=ta.set(l[0],l[1],l[2]).length();const p=ta.set(l[4],l[5],l[6]).length(),h=ta.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ii.copy(this);const m=1/d,y=1/p,_=1/h;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=y,Ii.elements[5]*=y,Ii.elements[6]*=y,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,t.setFromRotationMatrix(Ii),s.x=d,s.y=p,s.z=h,this}makePerspective(e,t,s,l,c,d,p=ji,h=!1){const m=this.elements,y=2*c/(t-e),_=2*c/(s-l),x=(t+e)/(t-e),M=(s+l)/(s-l);let E,T;if(h)E=c/(d-c),T=d*c/(d-c);else if(p===ji)E=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(p===mo)E=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=y,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,l,c,d,p=ji,h=!1){const m=this.elements,y=2/(t-e),_=2/(s-l),x=-(t+e)/(t-e),M=-(s+l)/(s-l);let E,T;if(h)E=1/(d-c),T=d/(d-c);else if(p===ji)E=-2/(d-c),T=-(d+c)/(d-c);else if(p===mo)E=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=y,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let l=0;l<16;l++)if(t[l]!==s[l])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};uc.prototype.isMatrix4=!0;let on=uc;const ta=new le,Ii=new on,Lv=new le(0,0,0),Dv=new le(1,1,1),Vr=new le,Al=new le,ui=new le,Nm=new on,Pm=new Jr;class es{constructor(e=0,t=0,s=0,l=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,l=this._order){return this._x=e,this._y=t,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],m=l[5],y=l[9],_=l[2],x=l[6],M=l[10];switch(t){case"XYZ":this._y=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class Kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iv=0;const Lm=new le,na=new Jr,fr=new on,bl=new le,no=new le,Uv=new le,Fv=new Jr,Dm=new le(1,0,0),Im=new le(0,1,0),Um=new le(0,0,1),Fm={type:"added"},Ov={type:"removed"},ia={type:"childadded",child:null},rd={type:"childremoved",child:null};class Vn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new le,t=new es,s=new Jr,l=new le(1,1,1);function c(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ft}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Um,e)}translateOnAxis(e,t){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?bl.copy(e):bl.set(e,t,s);const l=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(no,bl,this.up):fr.lookAt(bl,no,this.up),this.quaternion.setFromRotationMatrix(fr),l&&(fr.extractRotation(l.matrixWorld),na.setFromRotationMatrix(fr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fm),ia.child=e,this.dispatchEvent(ia),ia.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ov),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fm),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let s=0,l=t.length;s<l;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,l=t.length;s<l;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*s-c[8]*l,c[13]+=s-c[1]*t-c[5]*s-c[9]*l,c[14]+=l-c[2]*t-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,l=t.length;s<l;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,h){return p[h.uuid]===void 0&&(p[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const h=p.shapes;if(Array.isArray(h))for(let m=0,y=h.length;m<y;m++){const _=h[m];c(e.shapes,_)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let h=0,m=this.material.length;h<m;h++)p.push(c(e.materials,this.material[h]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const h=this.animations[p];l.animations.push(c(e.animations,h))}}if(t){const p=d(e.geometries),h=d(e.materials),m=d(e.textures),y=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),E=d(e.nodes);p.length>0&&(s.geometries=p),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),y.length>0&&(s.images=y),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(p){const h=[];for(const m in p){const y=p[m];delete y.metadata,h.push(y)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vn.DEFAULT_UP=new le(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pa extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let l=null,c=null,d=null;const p=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const v=t.getJointPose(T,s),S=this._getHandJoint(m,T);v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=v.radius),S.visible=v!==null}const y=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=y.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=t.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new pa;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function ad(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Nt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,l=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Pt.colorSpaceToWorking(this,l),this}setHSL(e,t,s,l=Pt.workingColorSpace){if(e=Sv(e,1),t=bt(t,0,1),s=bt(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,d=2*s-c;this.r=ad(d,c,e+1/3),this.g=ad(d,c,e),this.b=ad(d,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,t=hi){function s(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,t);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const s=Zg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Pt.workingToColorSpace(Gn.copy(this),e),Math.round(bt(Gn.r*255,0,255))*65536+Math.round(bt(Gn.g*255,0,255))*256+Math.round(bt(Gn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Gn.copy(this),t);const s=Gn.r,l=Gn.g,c=Gn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let h,m;const y=(p+d)/2;if(p===d)h=0,m=0;else{const _=d-p;switch(m=y<=.5?_/(d+p):_/(2-d-p),d){case s:h=(l-c)/_+(l<c?6:0);break;case l:h=(c-s)/_+2;break;case c:h=(s-l)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=y,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=hi){Pt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,s=Gn.g,l=Gn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,t,s){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Rl);const s=Ju(Wr.h,Rl.h,t),l=Ju(Wr.s,Rl.s,t),c=Ju(Wr.l,Rl.l,t);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*l,this.g=c[1]*t+c[4]*s+c[7]*l,this.b=c[2]*t+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Nt;Nt.NAMES=Zg;class Bv extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new le,pr=new le,od=new le,mr=new le,ra=new le,sa=new le,Om=new le,ld=new le,cd=new le,ud=new le,dd=new an,hd=new an,fd=new an;class Bi{constructor(e=new le,t=new le,s=new le){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,l){l.subVectors(s,t),Ui.subVectors(e,t),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,t,s,l,c){Ui.subVectors(l,t),pr.subVectors(s,t),od.subVectors(e,t);const d=Ui.dot(Ui),p=Ui.dot(pr),h=Ui.dot(od),m=pr.dot(pr),y=pr.dot(od),_=d*m-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*h-p*y)*x,E=(d*y-p*h)*x;return c.set(1-M-E,E,M)}static containsPoint(e,t,s,l){return this.getBarycoord(e,t,s,l,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,s,l,c,d,p,h){return this.getBarycoord(e,t,s,l,mr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,mr.x),h.addScaledVector(d,mr.y),h.addScaledVector(p,mr.z),h)}static getInterpolatedAttribute(e,t,s,l,c,d){return dd.setScalar(0),hd.setScalar(0),fd.setScalar(0),dd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,s),fd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(dd,c.x),d.addScaledVector(hd,c.y),d.addScaledVector(fd,c.z),d}static isFrontFacing(e,t,s,l){return Ui.subVectors(s,t),pr.subVectors(e,t),Ui.cross(pr).dot(l)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,l){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,t,s,l){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ui.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,t,s,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,l=this.b,c=this.c;let d,p;ra.subVectors(l,s),sa.subVectors(c,s),ld.subVectors(e,s);const h=ra.dot(ld),m=sa.dot(ld);if(h<=0&&m<=0)return t.copy(s);cd.subVectors(e,l);const y=ra.dot(cd),_=sa.dot(cd);if(y>=0&&_<=y)return t.copy(l);const x=h*_-y*m;if(x<=0&&h>=0&&y<=0&&h-y>0)return d=h/(h-y),t.copy(s).addScaledVector(ra,d);ud.subVectors(e,c);const M=ra.dot(ud),E=sa.dot(ud);if(E>=0&&M<=E)return t.copy(c);const T=M*m-h*E;if(T<=0&&m>=0&&E<=0)return p=m/(m-E),t.copy(s).addScaledVector(sa,p);const v=y*E-M*_;if(v<=0&&_-y>=0&&M-E>=0)return Om.subVectors(c,l),p=(_-y)/(_-y+(M-E)),t.copy(l).addScaledVector(Om,p);const S=1/(v+T+x);return d=T*S,p=x*S,t.copy(s).addScaledVector(ra,d).addScaledVector(sa,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yo{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Fi):Fi.fromBufferAttribute(c,d),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cl.copy(s.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Nl.subVectors(this.max,io),aa.subVectors(e.a,io),oa.subVectors(e.b,io),la.subVectors(e.c,io),Xr.subVectors(oa,aa),$r.subVectors(la,oa),vs.subVectors(aa,la);let t=[0,-Xr.z,Xr.y,0,-$r.z,$r.y,0,-vs.z,vs.y,Xr.z,0,-Xr.x,$r.z,0,-$r.x,vs.z,0,-vs.x,-Xr.y,Xr.x,0,-$r.y,$r.x,0,-vs.y,vs.x,0];return!pd(t,aa,oa,la,Nl)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,aa,oa,la,Nl))?!1:(Pl.crossVectors(Xr,$r),t=[Pl.x,Pl.y,Pl.z],pd(t,aa,oa,la,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new le,new le,new le,new le,new le,new le,new le,new le],Fi=new le,Cl=new yo,aa=new le,oa=new le,la=new le,Xr=new le,$r=new le,vs=new le,io=new le,Nl=new le,Pl=new le,ys=new le;function pd(r,e,t,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ys.fromArray(r,c);const p=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),h=e.dot(ys),m=t.dot(ys),y=s.dot(ys);if(Math.max(-Math.max(h,m,y),Math.min(h,m,y))>p)return!1}return!0}const xn=new le,Ll=new pt;let jv=0;class Es extends ns{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=gv,this.updateRanges=[],this.gpuType=Zi,this.version=0,this._normalizationScale=e!==void 0?Lh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=t.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,t,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,t,s,l,c){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),l=this._normalize(l),c=this._normalize(c)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ev(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):wv(e,this.array)}}class Qg extends Es{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Jg extends Es{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Er extends Es{constructor(e,t,s){super(new Float32Array(e),t,s)}}const zv=new yo,ro=new le,md=new le;class Ih{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):zv.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),l=(s-this.radius)*.5;this.center.addScaledVector(ro,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(md)),this.expandByPoint(ro.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hv=0;const wi=new on,gd=new Vn,ca=new le,di=new yo,so=new yo,Nn=new le;class Cs extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?Jg:Qg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,s){return wi.makeTranslation(e,t,s),this.applyMatrix4(wi),this}scale(e,t,s){return wi.makeScale(e,t,s),this.applyMatrix4(wi),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Er(s,3))}else{const s=Math.min(e.length,t.count);for(let l=0;l<s;l++){const c=e[l];t.setXYZ(l,c.x,c.y,c.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ih);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const p=t[c];so.setFromBufferAttribute(p),this.morphTargetsRelative?(Nn.addVectors(di.min,so.min),di.expandByPoint(Nn),Nn.addVectors(di.max,so.max),di.expandByPoint(Nn)):(di.expandByPoint(so.min),di.expandByPoint(so.max))}di.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Nn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Nn));if(t)for(let c=0,d=t.length;c<d;c++){const p=t[c],h=this.morphTargetsRelative;for(let m=0,y=p.count;m<y;m++)Nn.fromBufferAttribute(p,m),h&&(ca.fromBufferAttribute(e,m),Nn.add(ca)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,l=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Es(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],h=[],m=new Uint8Array(s.count);for(let J=0;J<s.count;J++)p[J]=new le,h[J]=new le;const y=new le,_=new le,x=new le,M=new pt,E=new pt,T=new pt,v=new le,S=new le;function C(J,G,$){m[J]=m[G]=m[$]=1,y.fromBufferAttribute(s,J),_.fromBufferAttribute(s,G),x.fromBufferAttribute(s,$),M.fromBufferAttribute(c,J),E.fromBufferAttribute(c,G),T.fromBufferAttribute(c,$),_.sub(y),x.sub(y),E.sub(M),T.sub(M);const ie=1/(E.x*T.y-T.x*E.y);isFinite(ie)&&(v.copy(_).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(ie),S.copy(x).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(ie),p[J].add(v),p[G].add(v),p[$].add(v),h[J].add(S),h[G].add(S),h[$].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let J=0,G=U.length;J<G;++J){const $=U[J],ie=$.start,ce=$.count;for(let j=ie,oe=ie+ce;j<oe;j+=3)C(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new le,F=new le,I=new le,w=new le;function N(J){I.fromBufferAttribute(l,J),w.copy(I);const G=p[J];P.copy(G),P.sub(I.multiplyScalar(I.dot(G))).normalize(),F.crossVectors(w,G);const ie=F.dot(h[J])<0?-1:1;d.setXYZW(J,P.x,P.y,P.z,ie)}for(let J=0,G=s.count;J<G;++J)m[J]&&N(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new Es(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new le,c=new le,d=new le,p=new le,h=new le,m=new le,y=new le,_=new le;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),v=e.getX(x+2);l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,T),d.fromBufferAttribute(t,v),y.subVectors(d,c),_.subVectors(l,c),y.cross(_),p.fromBufferAttribute(s,E),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,v),p.add(y),h.add(y),m.add(y),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=t.count;x<M;x+=3)l.fromBufferAttribute(t,x+0),c.fromBufferAttribute(t,x+1),d.fromBufferAttribute(t,x+2),y.subVectors(d,c),_.subVectors(l,c),y.cross(_),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(p,h){const m=p.array,y=p.itemSize,_=p.normalized,x=new m.constructor(h.length*y);let M=0,E=0;for(let T=0,v=h.length;T<v;T++){p.isInterleavedBufferAttribute?M=h[T]*p.data.stride+p.offset:M=h[T]*y;for(let S=0;S<y;S++)x[E++]=m[M++]}return new Es(x,y,_)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cs,s=this.index.array,l=this.attributes;for(const p in l){const h=l[p],m=e(h,s);t.setAttribute(p,m)}const c=this.morphAttributes;for(const p in c){const h=[],m=c[p];for(let y=0,_=m.length;y<_;y++){const x=m[y],M=e(x,s);h.push(M)}t.morphAttributes[p]=h}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,h=d.length;p<h;p++){const m=d[p];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const l={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],y=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];y.push(M.toJSON(e.data))}y.length>0&&(l[h]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const y=l[m];this.setAttribute(m,y.clone(t))}const c=e.morphAttributes;for(const m in c){const y=[],_=c[m];for(let x=0,M=_.length;x<M;x++)y.push(_[x].clone(t));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,y=d.length;m<y;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xd=new le,Gv=new le,Vv=new ft;class _r{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,l){return this.normal.set(e,t,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const l=xd.subVectors(s,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const l=e.delta(xd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Vv.getNormalMatrix(e),l=this.coplanarPoint(xd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wv=0;class So extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=uo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rg,this.blendDst=Cg,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qu,this.stencilZFail=Qu,this.stencilZPass=Qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const h=c[p];delete h.metadata,d.push(h)}return d}if(t){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new _r().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new pt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const l=t.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new le,_d=new le,Dl=new le,Il=new le;class e0{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,s,l){_d.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Il.copy(this.origin).sub(_d);const c=e.distanceTo(t)*.5,d=-this.direction.dot(Dl),p=Il.dot(this.direction),h=-Il.dot(Dl),m=Il.lengthSq(),y=Math.abs(1-d*d);let _,x,M,E;if(y>0)if(_=d*h-p,x=d*p-h,E=c*y,_>=0)if(x>=-E)if(x<=E){const T=1/y;_*=T,x*=T,M=_*(_+d*x+2*p)+x*(d*_+x+2*h)+m}else x=c,_=Math.max(0,-(d*x+p)),M=-_*_+x*(x+2*h)+m;else x=-c,_=Math.max(0,-(d*x+p)),M=-_*_+x*(x+2*h)+m;else x<=-E?(_=Math.max(0,-(-d*c+p)),x=_>0?-c:Math.min(Math.max(-c,-h),c),M=-_*_+x*(x+2*h)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-h),c),M=x*(x+2*h)+m):(_=Math.max(0,-(d*c+p)),x=_>0?c:Math.min(Math.max(-c,-h),c),M=-_*_+x*(x+2*h)+m);else x=d>0?-c:c,_=Math.max(0,-(d*x+p)),M=-_*_+x*(x+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(_d).addScaledVector(Dl,x),M}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);const s=xr.dot(this.direction),l=xr.dot(xr)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,h=s+d;return h<0?null:p<0?this.at(h,t):this.at(p,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,l,c,d,p,h;const m=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),y>=0?(c=(e.min.y-x.y)*y,d=(e.max.y-x.y)*y):(c=(e.max.y-x.y)*y,d=(e.min.y-x.y)*y),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),s>h||p>l)||((p>s||s!==s)&&(s=p),(h<l||l!==l)&&(l=h),l<0)?null:this.at(s>=0?s:l,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,s,l,c){const d=this.origin,p=this.direction,h=p.x,m=p.y,y=p.z,_=e.x-d.x,x=e.y-d.y,M=e.z-d.z,E=t.x-d.x,T=t.y-d.y,v=t.z-d.z,S=s.x-d.x,C=s.y-d.y,U=s.z-d.z,P=Math.abs(h),F=Math.abs(m),I=Math.abs(y);let w,N,J,G,$,ie,ce,j,oe,fe,Y,K;if(P>=F&&P>=I?(J=h,ie=_,oe=E,K=S,h>=0?(w=m,N=y,G=x,$=M,ce=T,j=v,fe=C,Y=U):(w=y,N=m,G=M,$=x,ce=v,j=T,fe=U,Y=C)):F>=I?(J=m,ie=x,oe=T,K=C,m>=0?(w=y,N=h,G=M,$=_,ce=v,j=E,fe=U,Y=S):(w=h,N=y,G=_,$=M,ce=E,j=v,fe=S,Y=U)):(J=y,ie=M,oe=v,K=U,y>=0?(w=h,N=m,G=_,$=x,ce=E,j=T,fe=S,Y=C):(w=m,N=h,G=x,$=_,ce=T,j=E,fe=C,Y=S)),J===0)return null;const V=w/J,q=N/J,D=1/J,Q=G-V*ie,re=$-q*ie,H=ce-V*oe,ge=j-q*oe,ye=fe-V*K,Re=Y-q*K,ve=ye*ge-Re*H,je=Q*Re-re*ye,Mt=H*re-ge*Q;if(l){if(ve<0||je<0||Mt<0)return null}else if((ve<0||je<0||Mt<0)&&(ve>0||je>0||Mt>0))return null;const qe=ve+je+Mt;if(qe===0)return null;const At=D*(ve*ie+je*oe+Mt*K);return(qe>0?At<0:At>0)?null:this.at(At/qe,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xv extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const km=new on,Ss=new e0,Ul=new Ih,Bm=new le,Fl=new le,Ol=new le,kl=new le,vd=new le,Bl=new le,jm=new le,jl=new le;class Ai extends Vn{constructor(e=new Cs,t=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const l=t[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,t){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const y=p[h],_=c[h];y!==0&&(vd.fromBufferAttribute(_,e),d?Bl.addScaledVector(vd,y):Bl.addScaledVector(vd.sub(t),y))}t.add(Bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ul.copy(s.boundingSphere),Ul.applyMatrix4(c),Ss.copy(e.ray).recast(e.near),!(Ul.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Ul,Bm)===null||Ss.origin.distanceToSquared(Bm)>(e.far-e.near)**2))&&(km.copy(c).invert(),Ss.copy(e.ray).applyMatrix4(km),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,s){let l;const c=this.geometry,d=this.material,p=c.index,h=c.attributes.position,m=c.attributes.uv,y=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let E=0,T=x.length;E<T;E++){const v=x[E],S=d[v.materialIndex],C=Math.max(v.start,M.start),U=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let P=C,F=U;P<F;P+=3){const I=p.getX(P),w=p.getX(P+1),N=p.getX(P+2);l=zl(this,S,e,s,m,y,_,I,w,N),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=v.materialIndex,t.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let v=E,S=T;v<S;v+=3){const C=p.getX(v),U=p.getX(v+1),P=p.getX(v+2);l=zl(this,d,e,s,m,y,_,C,U,P),l&&(l.faceIndex=Math.floor(v/3),t.push(l))}}else if(h!==void 0)if(Array.isArray(d))for(let E=0,T=x.length;E<T;E++){const v=x[E],S=d[v.materialIndex],C=Math.max(v.start,M.start),U=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let P=C,F=U;P<F;P+=3){const I=P,w=P+1,N=P+2;l=zl(this,S,e,s,m,y,_,I,w,N),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=v.materialIndex,t.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let v=E,S=T;v<S;v+=3){const C=v,U=v+1,P=v+2;l=zl(this,d,e,s,m,y,_,C,U,P),l&&(l.faceIndex=Math.floor(v/3),t.push(l))}}}}function $v(r,e,t,s,l,c,d,p){let h;if(e.side===si?h=s.intersectTriangle(d,c,l,!0,p):h=s.intersectTriangle(l,c,d,e.side===Ts,p),h===null)return null;jl.copy(p),jl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(jl);return m<t.near||m>t.far?null:{distance:m,point:jl.clone(),object:r}}function zl(r,e,t,s,l,c,d,p,h,m){r.getVertexPosition(p,Fl),r.getVertexPosition(h,Ol),r.getVertexPosition(m,kl);const y=$v(r,e,t,s,Fl,Ol,kl,jm);if(y){const _=new le;Bi.getBarycoord(jm,Fl,Ol,kl,_),l&&(y.uv=Bi.getInterpolatedAttribute(l,p,h,m,_,new pt)),c&&(y.uv1=Bi.getInterpolatedAttribute(c,p,h,m,_,new pt)),d&&(y.normal=Bi.getInterpolatedAttribute(d,p,h,m,_,new le),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:p,b:h,c:m,normal:new le,materialIndex:0};Bi.getNormal(Fl,Ol,kl,x.normal),y.face=x,y.barycoord=_}return y}class Yv extends Kn{constructor(e=null,t=1,s=1,l,c,d,p,h,m=Dn,y=Dn,_,x){super(null,d,p,h,m,y,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ms=new Ih,qv=new pt(.5,.5),Hl=new le;class go{constructor(e=new _r,t=new _r,s=new _r,l=new _r,c=new _r,d=new _r){this.planes=[e,t,s,l,c,d]}set(e,t,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=ji,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],h=c[2],m=c[3],y=c[4],_=c[5],x=c[6],M=c[7],E=c[8],T=c[9],v=c[10],S=c[11],C=c[12],U=c[13],P=c[14],F=c[15];if(l[0].setComponents(m-d,M-y,S-E,F-C).normalize(),l[1].setComponents(m+d,M+y,S+E,F+C).normalize(),l[2].setComponents(m+p,M+_,S+T,F+U).normalize(),l[3].setComponents(m-p,M-_,S-T,F-U).normalize(),s)l[4].setComponents(h,x,v,P).normalize(),l[5].setComponents(m-h,M-x,S-v,F-P).normalize();else if(l[4].setComponents(m-h,M-x,S-v,F-P).normalize(),t===ji)l[5].setComponents(m+h,M+x,S+v,F+P).normalize();else if(t===mo)l[5].setComponents(h,x,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=qv.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const l=t[s];if(Hl.x=l.normal.x>0?e.max.x:e.min.x,Hl.y=l.normal.y>0?e.max.y:e.min.y,Hl.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const zm=new on;class Uh{constructor(){this.coordinateSystem=ji,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,s=this._frustums;for(let l=0;l<t.length;l++){const c=t[l];zm.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),s[l]===void 0&&(s[l]=new go),s[l].setFromProjectionMatrix(zm,c.coordinateSystem,c.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,s=e._frustums;for(let l=0;l<e._count;l++)t[l]===void 0&&(t[l]=new go),t[l].copy(s[l]);return this._count=e._count,this}clone(){return new Uh().copy(this)}}class t0 extends Kn{constructor(e=[],t=va,s,l,c,d,p,h,m,y){super(e,t,s,l,c,d,p,h,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sa extends Kn{constructor(e,t,s=er,l,c,d,p=Dn,h=Dn,m,y=Qr,_=1){if(y!==Qr&&y!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,l,c,d,p,h,y,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class n0 extends Sa{constructor(e,t=er,s=va,l,c,d=Dn,p=Dn,h,m=Qr){const y={width:e,height:e,depth:1},_=[y,y,y,y,y,y];super(e,e,t,s,l,c,d,p,h,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class i0 extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mt extends Cs{constructor(e=1,t=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const h=[],m=[],y=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,t,e,d,c,0),E("z","y","x",1,-1,s,t,-e,d,c,1),E("x","z","y",1,1,e,s,t,l,d,2),E("x","z","y",1,-1,e,s,-t,l,d,3),E("x","y","z",1,-1,e,t,s,l,c,4),E("x","y","z",-1,-1,e,t,-s,l,c,5),this.setIndex(h),this.setAttribute("position",new Er(m,3)),this.setAttribute("normal",new Er(y,3)),this.setAttribute("uv",new Er(_,2));function E(T,v,S,C,U,P,F,I,w,N,J){const G=P/w,$=F/N,ie=P/2,ce=F/2,j=I/2,oe=w+1,fe=N+1;let Y=0,K=0;const V=new le;for(let q=0;q<fe;q++){const D=q*$-ce;for(let Q=0;Q<oe;Q++){const re=Q*G-ie;V[T]=re*C,V[v]=D*U,V[S]=j,m.push(V.x,V.y,V.z),V[T]=0,V[v]=0,V[S]=I>0?1:-1,y.push(V.x,V.y,V.z),_.push(Q/w),_.push(1-q/N),Y+=1}}for(let q=0;q<N;q++)for(let D=0;D<w;D++){const Q=x+D+oe*q,re=x+D+oe*(q+1),H=x+(D+1)+oe*(q+1),ge=x+(D+1)+oe*q;h.push(Q,re,ge),h.push(re,H,ge),K+=6}p.addGroup(M,K,J),M+=K,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dc extends Cs{constructor(e=1,t=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:l};const c=e/2,d=t/2,p=Math.floor(s),h=Math.floor(l),m=p+1,y=h+1,_=e/p,x=t/h,M=[],E=[],T=[],v=[];for(let S=0;S<y;S++){const C=S*x-d;for(let U=0;U<m;U++){const P=U*_-c;E.push(P,-C,0),T.push(0,0,1),v.push(U/p),v.push(1-S/h)}}for(let S=0;S<h;S++)for(let C=0;C<p;C++){const U=C+m*S,P=C+m*(S+1),F=C+1+m*(S+1),I=C+1+m*S;M.push(U,P,I),M.push(P,F,I)}this.setIndex(M),this.setAttribute("position",new Er(E,3)),this.setAttribute("normal",new Er(T,3)),this.setAttribute("uv",new Er(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ma(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const l=r[t][s];if(Hm(l))l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=l.clone();else if(Array.isArray(l))if(Hm(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[t][s]=c}else e[t][s]=l.slice();else e[t][s]=l}}return e}function qn(r){const e={};for(let t=0;t<r.length;t++){const s=Ma(r[t]);for(const l in s)e[l]=s[l]}return e}function Hm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Kv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function r0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Zv={clone:Ma,merge:qn};var Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bs extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?t.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[l]={type:"m4",value:d.toArray()}:t.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=t[l.value]||null;break;case"c":this.uniforms[s].value=new Nt().setHex(l.value);break;case"v2":this.uniforms[s].value=new pt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new le().fromArray(l.value);break;case"v4":this.uniforms[s].value=new an().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ey extends bs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ty extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iy extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class s0 extends Vn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const yd=new on,Gm=new le,Vm=new le;class ry{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gm),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,l){yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(yd,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=l?l.z/c.x:1,p=l?l.w/c.y:1,h=l?l.x/c.x:0,m=l?l.y/c.y:0;e.coordinateSystem===mo||e.reversedDepth?t.set(.5*d,0,0,.5*d+h,0,.5*p,0,.5*p+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+h,0,.5*p,0,.5*p+m,0,0,.5,.5,0,0,0,1),t.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new le,Vl=new Jr,Yi=new le;class a0 extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Vl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Gl,Vl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new le,Wm=new pt,Xm=new pt;class ki extends a0{constructor(e=50,t=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Wm,Xm),t.subVectors(Xm,Wm)}setViewOffset(e,t,s,l,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,s=2*t,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/h,t-=d.offsetY*s/m,l*=d.width/h,s*=d.height/m}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class o0 extends a0{constructor(e=-1,t=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+t,h=l-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,p-=y*this.view.offsetY,h=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sy extends ry{constructor(){super(new o0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sd extends s0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new sy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ay extends s0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ua=-90,da=1;class gh extends Vn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ki(ua,da,e,t);l.layers=this.layers,this.add(l);const c=new ki(ua,da,e,t);c.layers=this.layers,this.add(c);const d=new ki(ua,da,e,t);d.layers=this.layers,this.add(d);const p=new ki(ua,da,e,t);p.layers=this.layers,this.add(p);const h=new ki(ua,da,e,t);h.layers=this.layers,this.add(h);const m=new ki(ua,da,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,l,c,d,p,h]=t;for(const m of t)this.remove(m);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===mo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,h,m,y]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,1,l),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,2,l),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,3,l),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,l),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.mipmapsAutoUpdate=T,e.setRenderTarget(s,5,l),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(_,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class oy extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class ly{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class $m{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cy extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ym(r,e,t,s){const l=uy(s);switch(t){case Hg:return r*e;case Vg:return r*e/l.components*l.byteLength;case Ch:return r*e/l.components*l.byteLength;case As:return r*e*2/l.components*l.byteLength;case Nh:return r*e*2/l.components*l.byteLength;case Gg:return r*e*3/l.components*l.byteLength;case Qi:return r*e*4/l.components*l.byteLength;case Ph:return r*e*4/l.components*l.byteLength;case Kl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ql:case Jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bd:case zd:return Math.max(r,16)*Math.max(e,8)/4;case kd:case jd:return Math.max(r,8)*Math.max(e,8)/2;case Hd:case Gd:case Wd:case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vd:case rc:case $d:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lh:case ch:case uh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dh:case hh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sc:case fh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uy(r){switch(r){case fi:case kg:return{byteLength:1,components:1};case po:case Bg:case tr:return{byteLength:2,components:1};case bh:case Rh:return{byteLength:2,components:4};case er:case Ah:case Zi:return{byteLength:4,components:1};case jg:case zg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function l0(){let r=null,e=!1,t=null,s=null;function l(c,d){s=r.requestAnimationFrame(l),t(c,d)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){r=c}}}function dy(r){const e=new WeakMap;function t(p,h){const m=p.array,y=p.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,m,y),p.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=r.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,h,m){const y=h.array,_=h.updateRanges;if(r.bindBuffer(m,p),_.length===0)r.bufferSubData(m,0,y);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];r.bufferSubData(m,T.start*y.BYTES_PER_ELEMENT,y,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const h=e.get(p);h&&(r.deleteBuffer(h.buffer),e.delete(p))}function d(p,h){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,t(p,h));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,h),m.version=p.version}}return{get:l,remove:c,update:d}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ES=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,US=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:hy,alphahash_pars_fragment:fy,alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:xy,aomap_fragment:_y,aomap_pars_fragment:vy,batching_pars_vertex:yy,batching_vertex:Sy,begin_vertex:My,beginnormal_vertex:Ey,bsdfs:wy,iridescence_fragment:Ty,bumpmap_pars_fragment:Ay,clipping_planes_fragment:by,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ny,color_fragment:Py,color_pars_fragment:Ly,color_pars_vertex:Dy,color_vertex:Iy,common:Uy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:Oy,displacementmap_vertex:ky,emissivemap_fragment:By,emissivemap_pars_fragment:jy,colorspace_fragment:zy,colorspace_pars_fragment:Hy,envmap_fragment:Gy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:iS,envmap_vertex:$y,fog_vertex:Yy,fog_pars_vertex:qy,fog_fragment:Ky,fog_pars_fragment:Zy,gradientmap_pars_fragment:Qy,lightmap_pars_fragment:Jy,lights_lambert_fragment:eS,lights_lambert_pars_fragment:tS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:aS,lights_phong_pars_fragment:oS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:uS,lights_fragment_maps:dS,lights_fragment_end:hS,lightprobes_pars_fragment:fS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:xS,map_fragment:_S,map_pars_fragment:vS,map_particle_fragment:yS,map_particle_pars_fragment:SS,metalnessmap_fragment:MS,metalnessmap_pars_fragment:ES,morphinstance_vertex:wS,morphcolor_vertex:TS,morphnormal_vertex:AS,morphtarget_pars_vertex:bS,morphtarget_vertex:RS,normal_fragment_begin:CS,normal_fragment_maps:NS,normal_pars_fragment:PS,normal_pars_vertex:LS,normal_vertex:DS,normalmap_pars_fragment:IS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:OS,iridescence_pars_fragment:kS,opaque_fragment:BS,packing:jS,premultiplied_alpha_fragment:zS,project_vertex:HS,dithering_fragment:GS,dithering_pars_fragment:VS,roughnessmap_fragment:WS,roughnessmap_pars_fragment:XS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:YS,shadowmap_vertex:qS,shadowmask_pars_fragment:KS,skinbase_vertex:ZS,skinning_pars_vertex:QS,skinning_vertex:JS,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:rM,transmission_fragment:sM,transmission_pars_fragment:aM,uv_pars_fragment:oM,uv_pars_vertex:lM,uv_vertex:cM,worldpos_vertex:uM,background_vert:dM,background_frag:hM,backgroundCube_vert:fM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:xM,depth_frag:_M,distance_vert:vM,distance_frag:yM,equirect_vert:SM,equirect_frag:MM,linedashed_vert:EM,linedashed_frag:wM,meshbasic_vert:TM,meshbasic_frag:AM,meshlambert_vert:bM,meshlambert_frag:RM,meshmatcap_vert:CM,meshmatcap_frag:NM,meshnormal_vert:PM,meshnormal_frag:LM,meshphong_vert:DM,meshphong_frag:IM,meshphysical_vert:UM,meshphysical_frag:FM,meshtoon_vert:OM,meshtoon_frag:kM,points_vert:BM,points_frag:jM,shadow_vert:zM,shadow_frag:HM,sprite_vert:GM,sprite_frag:VM},ze={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ki={basic:{uniforms:qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:qn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:qn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:qn([ze.points,ze.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:qn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:qn([ze.common,ze.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:qn([ze.sprite,ze.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:qn([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:qn([ze.lights,ze.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ki.physical={uniforms:qn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Wl={r:0,b:0,g:0},WM=new on,c0=new ft;c0.set(-1,0,0,0,1,0,0,0,1);function XM(r,e,t,s,l,c){const d=new Nt(0);let p=l===!0?0:1,h,m,y=null,_=0,x=null;function M(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){const P=C.backgroundBlurriness>0;U=e.get(U,P)}return U}function E(C){let U=!1;const P=M(C);P===null?v(d,p):P&&P.isColor&&(v(P,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function T(C,U){const P=M(U);P&&P.isCubeTexture?(m===void 0&&(m=new Ai(new mt(1,1,1),new bs({name:"BackgroundCubeMaterial",uniforms:Ma(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(WM.makeRotationFromEuler(U.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(c0),m.material.toneMapped=Pt.getTransfer(P.colorSpace)!==zt,(y!==P||_!==P.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,y=P,_=P.version,x=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Ai(new dc(2,2),new bs({name:"BackgroundMaterial",uniforms:Ma(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(P.colorSpace)!==zt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||_!==P.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,y=P,_=P.version,x=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,U){C.getRGB(Wl,r0(r)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,U,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,U=1){d.set(C),p=U,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,v(d,p)},render:E,addToRenderList:T,dispose:S}}function $M(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,d=!1;function p($,ie,ce,j,oe){let fe=!1;const Y=_($,j,ce,ie);c!==Y&&(c=Y,m(c.object)),fe=M($,j,ce,oe),fe&&E($,j,ce,oe),oe!==null&&e.update(oe,r.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,P($,ie,ce,j),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return r.createVertexArray()}function m($){return r.bindVertexArray($)}function y($){return r.deleteVertexArray($)}function _($,ie,ce,j){const oe=j.wireframe===!0;let fe=s[ie.id];fe===void 0&&(fe={},s[ie.id]=fe);const Y=$.isInstancedMesh===!0?$.id:0;let K=fe[Y];K===void 0&&(K={},fe[Y]=K);let V=K[ce.id];V===void 0&&(V={},K[ce.id]=V);let q=V[oe];return q===void 0&&(q=x(h()),V[oe]=q),q}function x($){const ie=[],ce=[],j=[];for(let oe=0;oe<t;oe++)ie[oe]=0,ce[oe]=0,j[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:ce,attributeDivisors:j,object:$,attributes:{},index:null}}function M($,ie,ce,j){const oe=c.attributes,fe=ie.attributes;let Y=0;const K=ce.getAttributes();for(const V in K)if(K[V].location>=0){const D=oe[V];let Q=fe[V];if(Q===void 0&&(V==="instanceMatrix"&&$.instanceMatrix&&(Q=$.instanceMatrix),V==="instanceColor"&&$.instanceColor&&(Q=$.instanceColor)),D===void 0||D.attribute!==Q||Q&&D.data!==Q.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function E($,ie,ce,j){const oe={},fe=ie.attributes;let Y=0;const K=ce.getAttributes();for(const V in K)if(K[V].location>=0){let D=fe[V];D===void 0&&(V==="instanceMatrix"&&$.instanceMatrix&&(D=$.instanceMatrix),V==="instanceColor"&&$.instanceColor&&(D=$.instanceColor));const Q={};Q.attribute=D,D&&D.data&&(Q.data=D.data),oe[V]=Q,Y++}c.attributes=oe,c.attributesNum=Y,c.index=j}function T(){const $=c.newAttributes;for(let ie=0,ce=$.length;ie<ce;ie++)$[ie]=0}function v($){S($,0)}function S($,ie){const ce=c.newAttributes,j=c.enabledAttributes,oe=c.attributeDivisors;ce[$]=1,j[$]===0&&(r.enableVertexAttribArray($),j[$]=1),oe[$]!==ie&&(r.vertexAttribDivisor($,ie),oe[$]=ie)}function C(){const $=c.newAttributes,ie=c.enabledAttributes;for(let ce=0,j=ie.length;ce<j;ce++)ie[ce]!==$[ce]&&(r.disableVertexAttribArray(ce),ie[ce]=0)}function U($,ie,ce,j,oe,fe,Y){Y===!0?r.vertexAttribIPointer($,ie,ce,oe,fe):r.vertexAttribPointer($,ie,ce,j,oe,fe)}function P($,ie,ce,j){T();const oe=j.attributes,fe=ce.getAttributes(),Y=ie.defaultAttributeValues;for(const K in fe){const V=fe[K];if(V.location>=0){let q=oe[K];if(q===void 0&&(K==="instanceMatrix"&&$.instanceMatrix&&(q=$.instanceMatrix),K==="instanceColor"&&$.instanceColor&&(q=$.instanceColor)),q!==void 0){const D=q.normalized,Q=q.itemSize,re=e.get(q);if(re===void 0)continue;const H=re.buffer,ge=re.type,ye=re.bytesPerElement,Re=ge===r.INT||ge===r.UNSIGNED_INT||q.gpuType===Ah;if(q.isInterleavedBufferAttribute){const ve=q.data,je=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Mt=q.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let qe=0;qe<V.locationSize;qe++)S(V.location+qe,ve.meshPerAttribute);$.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<V.locationSize;qe++)v(V.location+qe);r.bindBuffer(r.ARRAY_BUFFER,H);for(let qe=0;qe<V.locationSize;qe++)U(V.location+qe,Q/V.locationSize,ge,D,je*ye,(Mt+Q/V.locationSize*qe)*ye,Re)}else{if(q.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)S(V.location+ve,q.meshPerAttribute);$.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ve=0;ve<V.locationSize;ve++)v(V.location+ve);r.bindBuffer(r.ARRAY_BUFFER,H);for(let ve=0;ve<V.locationSize;ve++)U(V.location+ve,Q/V.locationSize,ge,D,Q*ye,Q/V.locationSize*ve*ye,Re)}}else if(Y!==void 0){const D=Y[K];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}C()}function F(){J();for(const $ in s){const ie=s[$];for(const ce in ie){const j=ie[ce];for(const oe in j){const fe=j[oe];for(const Y in fe)y(fe[Y].object),delete fe[Y];delete j[oe]}}delete s[$]}}function I($){if(s[$.id]===void 0)return;const ie=s[$.id];for(const ce in ie){const j=ie[ce];for(const oe in j){const fe=j[oe];for(const Y in fe)y(fe[Y].object),delete fe[Y];delete j[oe]}}delete s[$.id]}function w($){for(const ie in s){const ce=s[ie];for(const j in ce){const oe=ce[j];if(oe[$.id]===void 0)continue;const fe=oe[$.id];for(const Y in fe)y(fe[Y].object),delete fe[Y];delete oe[$.id]}}}function N($){for(const ie in s){const ce=s[ie],j=$.isInstancedMesh===!0?$.id:0,oe=ce[j];if(oe!==void 0){for(const fe in oe){const Y=oe[fe];for(const K in Y)y(Y[K].object),delete Y[K];delete oe[fe]}delete ce[j],Object.keys(ce).length===0&&delete s[ie]}}}function J(){G(),d=!0,c!==l&&(c=l,m(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:J,resetDefaultState:G,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfObject:N,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:v,disableUnusedAttributes:C}}function YM(r,e,t){let s;function l(h){s=h}function c(h,m){r.drawArrays(s,h,m),t.update(m,s,1)}function d(h,m,y){y!==0&&(r.drawArraysInstanced(s,h,m,y),t.update(m,s,y))}function p(h,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,m,0,y);let x=0;for(let M=0;M<y;M++)x+=m[M];t.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function qM(r,e,t,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(w){return!(w!==Qi&&s.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(w){const N=w===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==fi&&w!==Zi&&!N&&s.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const y=h(m);y!==m&&(dt("WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:P,maxSamples:F,samples:I}}function KM(r){const e=this;let t=null,s=0,l=!1,c=!1;const d=new _r,p=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){t=y(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,T=_.clipIntersection,v=_.clipShadows,S=r.get(_);if(!l||E===null||E.length===0||c&&!v)c?y(null):m();else{const C=c?0:s,U=C*4;let P=S.clippingState||null;h.value=P,P=y(E,x,U,M);for(let F=0;F!==U;++F)P[F]=t[F];S.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(_,x,M,E){const T=_!==null?_.length:0;let v=null;if(T!==0){if(v=h.value,E!==!0||v===null){const S=M+T*4,C=x.matrixWorldInverse;p.getNormalMatrix(C),(v===null||v.length<S)&&(v=new Float32Array(S));for(let U=0,P=M;U!==T;++U,P+=4)d.copy(_[U]).applyMatrix4(C,p),d.normal.toArray(v,P),v[P+3]=d.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}class Fh extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new t0(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new mt(5,5,5),c=new bs({name:"CubemapFromEquirect",uniforms:Ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:xa});c.uniforms.tEquirect.value=t;const d=new Ai(l,c),p=t.minFilter;return t.minFilter===Kr&&(t.minFilter=ri),new gh(1,10,this).update(e,d),t.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,l);e.setRenderTarget(c)}}const qm=256,ZM=3,QM=20,u0=256,d0=16,JM=3,eE=new le,tE=new Nt;class cc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gh(1,10,null),this._boxMesh=new Ai(new mt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,s=.1,l=100,c={}){const{size:d=256,position:p=eE}=c,h=this._renderer;this._setSize(d);const m=this._allocateTarget(),y=this._getSourceTarget(!0);t>0&&(y.texture.mipmapsAutoUpdate=!1);const _=h.autoClear,x=h.autoClearColor,M=h.autoClearDepth,E=h.autoClearStencil,T=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,T===null&&(e.background=h.getClearColor(tE));const v=new gh(s,l,y);return v.position.copy(p),v.update(h,e),h.autoClear=_,h.autoClearColor=x,h.autoClearDepth=M,h.autoClearStencil=E,e.background=T,t>0&&(y.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qm,Mv(e))}_fromTexture(e,t){e.mapping===va||e.mapping===fo?this._setSize(e.image.length===0?qm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const s=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){const e=this._cubeSize,t=Km(e,!1,!1),s=Math.log2(e)-ZM;for(let l=0;l<=s;l++)t.texture.mipmaps.push({width:e>>l,height:e>>l});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==t||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=Km(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,s){const l=this._boxMesh,c=this._cubeCamera;l.material=s,c.renderTarget=e,c.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),c.update(this._renderer,l),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===va||e.mapping===fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nE(),this._integrationMaterial=iE());const t=this._cubeSize,s=e.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(t/d0);for(let d=0;d<=s;d++){const p=cc.lodToRoughness(d,s);if(d>s-JM)c.roughness.value=p,this._renderCube(e,d,this._integrationMaterial);else{const h=p>0?Math.log2(t)+.5*Math.log2(6/(u0*Math.pow(p,4)))+.5:0;l.roughness.value=p,l.lodBias.value=h,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rE());const s=this._blurMaterial,l=s.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(e,0,s),l.envMap.value=e.texture,this._renderCube(c,0,s)}}function Km(r,e,t){return new Fh(r,{minFilter:Kr,generateMipmaps:e,type:tr,colorSpace:ac,depthBuffer:t})}function Mo(r,e,t){return new bs({name:r,uniforms:e,vertexShader:St.cube_vert,fragmentShader:t,side:si,blending:xa,depthTest:!1,depthWrite:!1})}function nE(){return Mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${u0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iE(){return Mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:d0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rE(){return Mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${QM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zm(){return Mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qm(){return Mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sE(r){let e=new WeakMap,t=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?d(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===qu||M===Ku)if(e.has(x)){const E=e.get(x).texture;return p(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const T=new Fh(E.height);return T.fromEquirectangularTexture(r,x),e.set(x,T),x.addEventListener("dispose",m),p(T.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture&&x.isPMREMTexture!==!0){const M=x.mapping,E=M===qu||M===Ku,T=M===va||M===fo;if(E||T){let v=t.get(x);const S=v!==void 0?v.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==S)return s===null&&(s=new cc(r)),v=E?s.fromEquirectangular(x,v):s.fromCubemap(x,v),v.texture.pmremVersion=x.pmremVersion,t.set(x,v),v.texture;if(v!==void 0)return v.texture;{const C=x.image;return E&&C&&C.height>0||T&&C&&h(C)?(s===null&&(s=new cc(r)),v=E?s.fromEquirectangular(x):s.fromCubemap(x),v.texture.pmremVersion=x.pmremVersion,t.set(x,v),x.addEventListener("dispose",y),v.texture):null}}}return x}function p(x,M){return M===qu?x.mapping=va:M===Ku&&(x.mapping=fo),x}function h(x){let M=0;const E=6;for(let T=0;T<E;T++)x[T]!==void 0&&M++;return M===E}function m(x){const M=x.target;M.removeEventListener("dispose",m);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function aE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const l=t(s);return l===null&&ec("WebGLRenderer: "+s+" extension not supported."),l}}}function oE(r,e,t,s){const l={},c=new WeakMap,d=new FinalizationRegistry(E=>delete l[E]);function p(E){h(E.target)}function h(E){E.index!==null&&e.remove(E.index);for(const v in E.attributes)e.remove(E.attributes[v]);E.removeEventListener("dispose",p),delete l[E.id],d.unregister(E);const T=c.get(E);T&&(e.remove(T),c.delete(E)),s.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function m(E,T){return l[T.id]!==void 0||(T.addEventListener("dispose",p),l[T.id]=new WeakRef(T),d.register(T,T.id,T),t.memory.geometries++),T}function y(E){const T=E.attributes;for(const v in T)e.update(T[v],r.ARRAY_BUFFER)}function _(E){const T=E.index,v=E.attributes.position;let S=0;if(v===void 0)return;const C=T!==null?T.array.length:v.array.length/3-1,U=v.count>=65535?Jg:Qg,P=new U(Math.ceil(C/3)*6,1),F=P.array;if(T!==null){const w=T.array;S=T.version;for(let N=0,J=0;N<C;N+=3){const G=w[N+0],$=w[N+1],ie=w[N+2];F[J++]=G,F[J++]=$,F[J++]=$,F[J++]=ie,F[J++]=ie,F[J++]=G}}else{S=v.version;for(let w=0,N=0;w<C;w+=3){const J=w+0,G=w+1,$=w+2;F[N++]=J,F[N++]=G,F[N++]=G,F[N++]=$,F[N++]=$,F[N++]=J}}P.version=S;const I=c.get(E);I&&e.remove(I),c.set(E,P)}function x(E){const T=c.get(E);if(T){const v=E.index;v!==null&&T.version<v.version&&_(E)}else _(E);return c.get(E)}function M(){for(const E in l){const T=l[E].deref();T!==void 0&&h(T)}}return{get:m,update:y,getWireframeAttribute:x,dispose:M}}function lE(r,e,t){let s;function l(_){s=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function h(_,x){r.drawElements(s,x,c,_*d),t.update(x,s,1)}function m(_,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,_*d,M),t.update(x,s,M))}function y(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let T=0;for(let v=0;v<M;v++)T+=x[v];t.update(T,s,1)}this.setMode=l,this.setIndex=p,this.render=h,this.renderInstances=m,this.renderMultiDraw=y}function cE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=p*(c/3);break;case r.LINES:t.lines+=p*(c/2);break;case r.LINE_STRIP:t.lines+=p*(c-1);break;case r.LINE_LOOP:t.lines+=p*c;break;case r.POINTS:t.points+=p*c;break;default:Ot("WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:l,update:s}}function uE(r,e,t){const s=new WeakMap,l=new an;function c(d,p,h){const m=d.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=y!==void 0?y.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let G=function(){N.dispose(),s.delete(p),p.removeEventListener("dispose",G)};var M=G;x!==void 0&&x.texture.dispose();const E=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,v=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),v===!0&&(P=3);let F=p.attributes.position.count*P,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const w=new Float32Array(F*I*4*_),N=new qg(w,F,I,_);N.type=Zi,N.needsUpdate=!0;const J=P*4;for(let $=0;$<_;$++){const ie=S[$],ce=C[$],j=U[$],oe=F*I*4*$;for(let fe=0;fe<ie.count;fe++){const Y=fe*J;E===!0&&(l.fromBufferAttribute(ie,fe),w[oe+Y+0]=l.x,w[oe+Y+1]=l.y,w[oe+Y+2]=l.z,w[oe+Y+3]=0),T===!0&&(l.fromBufferAttribute(ce,fe),w[oe+Y+4]=l.x,w[oe+Y+5]=l.y,w[oe+Y+6]=l.z,w[oe+Y+7]=0),v===!0&&(l.fromBufferAttribute(j,fe),w[oe+Y+8]=l.x,w[oe+Y+9]=l.y,w[oe+Y+10]=l.z,w[oe+Y+11]=j.itemSize===4?l.w:1)}}x={count:_,texture:N,size:new pt(F,I)},s.set(p,x),p.addEventListener("dispose",G)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let E=0;for(let v=0;v<m.length;v++)E+=m[v];const T=p.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function dE(r,e,t,s,l){let c=new WeakMap;function d(m){const y=l.render.frame,_=m.geometry,x=e.get(m,_);if(c.get(x)!==y&&(e.update(x),c.set(x,y)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),c.get(m)!==y&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,y))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return x}function p(){c=new WeakMap}function h(m){const y=m.target;y.removeEventListener("dispose",h),s.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:d,dispose:p}}const hE={[Pg]:"LINEAR_TONE_MAPPING",[Lg]:"REINHARD_TONE_MAPPING",[Dg]:"CINEON_TONE_MAPPING",[Th]:"ACES_FILMIC_TONE_MAPPING",[Ug]:"AGX_TONE_MAPPING",[Fg]:"NEUTRAL_TONE_MAPPING",[Ig]:"CUSTOM_TONE_MAPPING"};function fE(r,e,t,s,l,c){const d=new Ji(e,t,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,h=null,m=null;const y=new Cs;y.setAttribute("position",new Er([-1,3,0,-1,-1,0,3,-1,0],3)),y.setAttribute("uv",new Er([0,2,0,0,2,0],2));const _=new ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Ai(y,_),M=new o0(-1,1,1,-1,0,1);let E=null,T=null,v=!1,S,C=null,U=[],P=!1;this.setSize=function(F,I){d.setSize(F,I),p!==null&&p.setSize(F,I),h!==null&&h.setSize(F,I);for(let w=0;w<U.length;w++){const N=U[w];N.setSize&&N.setSize(F,I)}},this.setEffects=function(F){U=F,P=U.length>0&&U[0].isRenderPass===!0;const I=d.width,w=d.height;U.length>0&&p===null&&(p=new Ji(I,w,{type:tr,depthBuffer:!1,stencilBuffer:!1}),h=new Ji(I,w,{type:tr,depthBuffer:!1,stencilBuffer:!1}));const N=l===!0&&U.some(J=>J.needsDepthTexture===!0);N!==(d.depthTexture!==null)&&(N===!0&&m===null&&(m=new Sa(I,w),c===!0&&(m.format=Zr,m.type=ya)),d.dispose(),d.depthTexture=N?m:null,d.resolveDepthBuffer=N,d.storeMultisampledDepthBuffer=N);for(let J=0;J<U.length;J++){const G=U[J];G.setSize&&G.setSize(I,w),N&&G.needsDepthTexture===!0&&G.setDepthTexture&&G.setDepthTexture(m)}},this.begin=function(F,I){if(v||F.toneMapping===Sr&&U.length===0)return!1;if(C=I,I!==null){const w=I.width,N=I.height;(d.width!==w||d.height!==N)&&this.setSize(w,N)}return P===!1&&F.setRenderTarget(d),S=F.toneMapping,F.toneMapping=Sr,!0},this.hasRenderPass=function(){return P},this.end=function(F,I){F.toneMapping=S,v=!0;let w=d,N=p;for(let J=0;J<U.length;J++){const G=U[J];G.enabled!==!1&&(G.render(F,N,w,I),G.needsSwap!==!1&&(w=N,N=N===p?h:p))}if(E!==F.outputColorSpace||T!==F.toneMapping){E=F.outputColorSpace,T=F.toneMapping,_.defines={},Pt.getTransfer(E)===zt&&(_.defines.SRGB_TRANSFER="");const J=hE[T];J&&(_.defines[J]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=w.texture,F.setRenderTarget(C),F.render(x,M),C=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){d.dispose(),p!==null&&p.dispose(),h!==null&&h.dispose(),y.dispose(),_.dispose()}}const h0=new Kn,f0=new Sa(1,1),p0=new n0(1),m0=new qg,g0=new Pv,x0=new t0,Jm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function Ea(r,e,t){const s=r[0];if(s<=0||s>0)return r;const l=e*t;let c=Jm[l];if(c===void 0&&(c=new Float32Array(l),Jm[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=t,r[d].toArray(c,p)}return c}function wn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Tn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function hc(r,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function pE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2fv(this.addr,e),Tn(t,e)}}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;r.uniform3fv(this.addr,e),Tn(t,e)}}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4fv(this.addr,e),Tn(t,e)}}function _E(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(wn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(wn(t,s))return;ig.set(s),r.uniformMatrix2fv(this.addr,!1,ig),Tn(t,s)}}function vE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(wn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(wn(t,s))return;ng.set(s),r.uniformMatrix3fv(this.addr,!1,ng),Tn(t,s)}}function yE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(wn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(wn(t,s))return;tg.set(s),r.uniformMatrix4fv(this.addr,!1,tg),Tn(t,s)}}function SE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2iv(this.addr,e),Tn(t,e)}}function EE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;r.uniform3iv(this.addr,e),Tn(t,e)}}function wE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4iv(this.addr,e),Tn(t,e)}}function TE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;r.uniform2uiv(this.addr,e),Tn(t,e)}}function bE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;r.uniform3uiv(this.addr,e),Tn(t,e)}}function RE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;r.uniform4uiv(this.addr,e),Tn(t,e)}}function fc(r){return r.version===0&&(r.compareFunction=$g,r.needsUpdate=!0),r}function CE(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?c=fc(f0):c=h0,t.setTexture2D(e||c,l)}function NE(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),t.setTexture3D(e||g0,l)}function PE(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_CUBE_SHADOW?c=fc(p0):c=x0,t.setTextureCube(e||c,l)}function LE(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),t.setTexture2DArray(e||m0,l)}function DE(r){switch(r){case 5126:return pE;case 35664:return mE;case 35665:return gE;case 35666:return xE;case 35674:return _E;case 35675:return vE;case 35676:return yE;case 5124:case 35670:return SE;case 35667:case 35671:return ME;case 35668:case 35672:return EE;case 35669:case 35673:return wE;case 5125:return TE;case 36294:return AE;case 36295:return bE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return LE}}function IE(r,e){r.uniform1fv(this.addr,e)}function UE(r,e){const t=Ea(e,this.size,2);r.uniform2fv(this.addr,t)}function FE(r,e){const t=Ea(e,this.size,3);r.uniform3fv(this.addr,t)}function OE(r,e){const t=Ea(e,this.size,4);r.uniform4fv(this.addr,t)}function kE(r,e){const t=Ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function BE(r,e){const t=Ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jE(r,e){const t=Ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zE(r,e){r.uniform1iv(this.addr,e)}function HE(r,e){r.uniform2iv(this.addr,e)}function GE(r,e){r.uniform3iv(this.addr,e)}function VE(r,e){r.uniform4iv(this.addr,e)}function WE(r,e){r.uniform1uiv(this.addr,e)}function XE(r,e){r.uniform2uiv(this.addr,e)}function $E(r,e){r.uniform3uiv(this.addr,e)}function YE(r,e){r.uniform4uiv(this.addr,e)}function qE(r,e,t){const s=this.cache,l=e.length,c=hc(t,l);wn(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=fc(f0):d=h0;for(let p=0;p!==l;++p)t.setTexture2D(e[p]||d,c[p])}function KE(r,e,t){const s=this.cache,l=e.length,c=hc(t,l);wn(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)t.setTexture3D(e[d]||g0,c[d])}function ZE(r,e,t){const s=this.cache,l=e.length,c=hc(t,l);wn(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));let d;this.type===r.SAMPLER_CUBE_SHADOW?d=fc(p0):d=x0;for(let p=0;p!==l;++p)t.setTextureCube(e[p]||d,c[p])}function QE(r,e,t){const s=this.cache,l=e.length,c=hc(t,l);wn(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)t.setTexture2DArray(e[d]||m0,c[d])}function JE(r){switch(r){case 5126:return IE;case 35664:return UE;case 35665:return FE;case 35666:return OE;case 35674:return kE;case 35675:return BE;case 35676:return jE;case 5124:case 35670:return zE;case 35667:case 35671:return HE;case 35668:case 35672:return GE;case 35669:case 35673:return VE;case 5125:return WE;case 36294:return XE;case 36295:return $E;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return ZE;case 36289:case 36303:case 36311:case 36292:return QE}}class e1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=DE(t.type)}}class t1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JE(t.type)}}class n1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,t[p.id],s)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function rg(r,e){r.seq.push(e),r.map[e.id]=e}function i1(r,e,t){const s=r.name,l=s.length;for(Md.lastIndex=0;;){const c=Md.exec(s),d=Md.lastIndex;let p=c[1];const h=c[2]==="]",m=c[3];if(h&&(p=p|0),m===void 0||m==="["&&d+2===l){rg(t,m===void 0?new e1(p,r,e):new t1(p,r,e));break}else{let _=t.map[p];_===void 0&&(_=new n1(p),rg(t,_)),t=_}}}class nc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(t,d),h=e.getUniformLocation(t,p.name);i1(p,h,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,t,s,l){const c=this.map[t];c!==void 0&&c.setValue(e,s,l)}setOptional(e,t,s){const l=t[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,t,s,l){for(let c=0,d=t.length;c!==d;++c){const p=t[c],h=s[p.id];h.needsUpdate!==!1&&p.setValue(e,h.value,l)}}static seqWithValue(e,t){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in t&&s.push(d)}return s}}function sg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const r1=37297;let s1=0;function a1(r,e){const t=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${t[d]}`)}return s.join(`
`)}const ag=new ft;function o1(r){Pt._getMatrix(ag,Pt.workingColorSpace,r);const e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case oc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function og(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+a1(r.getShaderSource(e),p)}else return c}function l1(r,e){const t=o1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const c1={[Pg]:"Linear",[Lg]:"Reinhard",[Dg]:"Cineon",[Th]:"ACESFilmic",[Ug]:"AgX",[Fg]:"Neutral",[Ig]:"Custom"};function u1(r,e){const t=c1[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xl=new le;function d1(){Pt.getLuminanceCoefficients(Xl);const r=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function f1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function p1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),t[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return t}function co(r){return r!==""}function lg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function cg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(r){return r.replace(m1,g1)}function g1(r,e){const t=St[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xh(t)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(r){return r.replace(x1,_1)}function _1(r,e,t,s){let l="";for(let c=parseInt(e);c<parseInt(t);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function dg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const v1={[ql]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function y1(r){return v1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S1={[fo]:"ENVMAP_MODE_REFRACTION"};function M1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E1={[Ng]:"ENVMAP_BLENDING_MULTIPLY",[sv]:"ENVMAP_BLENDING_MIX",[av]:"ENVMAP_BLENDING_ADD"};function w1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":E1[r.combine]||"ENVMAP_BLENDING_NONE"}function T1(r,e,t,s){const l=r.getContext(),c=t.defines;let d=t.vertexShader,p=t.fragmentShader;const h=y1(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",y=M1(t),_=w1(t),x=h1(t),M=f1(c),E=l.createProgram();let T,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(co).join(`
`),T.length>0&&(T+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(co).join(`
`),v.length>0&&(v+=`
`)):(T=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),v=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?St.tonemapping_pars_fragment:"",t.toneMapping!==Sr?u1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,l1("linearToOutputTexel",t.outputColorSpace),d1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),d=xh(d),d=lg(d,t),d=cg(d,t),p=xh(p),p=lg(p,t),p=cg(p,t),d=ug(d),p=ug(p),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,T=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,v=["#define varying in",t.glslVersion===wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=S+T+d,U=S+v+p,P=sg(l,l.VERTEX_SHADER,C),F=sg(l,l.FRAGMENT_SHADER,U);l.attachShader(E,P),l.attachShader(E,F),t.index0AttributeName!==void 0?l.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function I(G){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(E)||"",ie=l.getShaderInfoLog(P)||"",ce=l.getShaderInfoLog(F)||"",j=$.trim(),oe=ie.trim(),fe=ce.trim();let Y=!0,K=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,E,P,F);else{const V=og(l,P,"vertex"),q=og(l,F,"fragment");Ot("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+V+`
`+q)}else j!==""?dt("WebGLProgram: Program Info Log:",j):(oe===""||fe==="")&&(K=!1);K&&(G.diagnostics={runnable:Y,programLog:j,vertexShader:{log:oe,prefix:T},fragmentShader:{log:fe,prefix:v}})}l.deleteShader(P),l.deleteShader(F),w=new nc(l,E),N=p1(l,E)}let w;this.getUniforms=function(){return w===void 0&&I(this),w};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(E,r1)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=F,this}let A1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const l=this._getShaderCacheForMaterial(e);return l.has(t)===!1&&(l.add(t),t.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new R1(e),t.set(e,s)),s}}class R1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function C1(r){return r===As||r===rc||r===sc}function N1(r,e,t,s,l,c){const d=new Kg,p=new b1,h=new Set,m=[],y=new Map,_=s.logarithmicDepthBuffer,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function E(w,N,J,G,$,ie){const ce=G.fog,j=$.geometry,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||oe,fe),K=x[w.type];let V=s.precision;w.precision!==null&&(V=s.getMaxPrecision(w.precision),V!==w.precision&&dt("WebGLProgram.getParameters:",w.precision,"not supported, using",V,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,D=q!==void 0?q.length:0;let Q=0;j.morphAttributes.position!==void 0&&(Q=1),j.morphAttributes.normal!==void 0&&(Q=2),j.morphAttributes.color!==void 0&&(Q=3);let re,H,ge,ye;if(K){const ke=Ki[K];re=ke.vertexShader,H=ke.fragmentShader}else{re=w.vertexShader,H=w.fragmentShader;const ke=p.getVertexShaderStage(w),Et=p.getFragmentShaderStage(w);p.update(w,ke,Et),ge=ke.id,ye=Et.id}const Re=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),je=$.isInstancedMesh===!0,Mt=$.isBatchedMesh===!0,qe=!!w.map,At=!!w.matcap,yt=!!Y,gt=yt&&Y.isPMREMTexture===!0,Ht=!!w.aoMap,qt=!!w.lightMap,Wt=!!w.bumpMap&&w.wireframe===!1,Bt=!!w.normalMap,Fn=!!w.displacementMap,Gt=!!w.emissiveMap,ln=!!w.metalnessMap,hn=!!w.roughnessMap,_t=w.anisotropy>0,W=w.clearcoat>0,mn=w.diffuseRoughness>0,Ut=w.dispersion>0,xt=w.retroreflectivity>0,Pe=w.iridescence>0,ct=w.sheen>0,et=w.transmission>0,nt=_t&&!!w.anisotropyMap,L=W&&!!w.clearcoatMap,A=W&&!!w.clearcoatNormalMap,ee=W&&!!w.clearcoatRoughnessMap,Ee=mn&&!!w.diffuseRoughnessMap,xe=Pe&&!!w.iridescenceMap,Ce=Pe&&!!w.iridescenceThicknessMap,De=ct&&!!w.sheenColorMap,pe=ct&&!!w.sheenRoughnessMap,me=!!w.specularMap,Me=!!w.specularColorMap,k=!!w.specularIntensityMap,_e=et&&!!w.transmissionMap,he=et&&!!w.thicknessMap,Ie=!!w.gradientMap,be=!!w.alphaMap,Ne=w.alphaTest>0,Ke=!!w.alphaHash,ht=!!w.extensions;let we=Sr;w.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(we=r.toneMapping);const Qe=gt?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,ot={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:re,fragmentShader:H,defines:w.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:V,batching:Mt,batchingColor:Mt&&$._colorsTexture!==null,instancing:je,instancingColor:je&&$.instanceColor!==null,instancingMorph:je&&$.morphTexture!==null,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:At,envMap:yt,envMapMode:yt&&Y.mapping,envMapPMREM:gt,envMapMaxLod:gt?Qe.length-1:null,envMapSize:gt?Qe[0].width:null,aoMap:Ht,lightMap:qt,bumpMap:Wt,normalMap:Bt,displacementMap:Fn,emissiveMap:Gt,normalMapObjectSpace:Bt&&w.normalMapType===cv,normalMapTangentSpace:Bt&&w.normalMapType===ph,packedNormalMap:Bt&&w.normalMapType===ph&&C1(w.normalMap.format),metalnessMap:ln,roughnessMap:hn,anisotropy:_t,anisotropyMap:nt,clearcoat:W,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:mn,diffuseRoughnessMap:Ee,dispersion:Ut,retroreflection:xt,iridescence:Pe,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:ct,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:me,specularColorMap:Me,specularIntensityMap:k,transmission:et,transmissionMap:_e,thicknessMap:he,gradientMap:Ie,opaque:w.transparent===!1&&w.blending===uo&&w.alphaToCoverage===!1,alphaMap:be,alphaTest:Ne,alphaHash:Ke,combine:w.combine,mapUv:qe&&M(w.map.channel),aoMapUv:Ht&&M(w.aoMap.channel),lightMapUv:qt&&M(w.lightMap.channel),bumpMapUv:Wt&&M(w.bumpMap.channel),normalMapUv:Bt&&M(w.normalMap.channel),displacementMapUv:Fn&&M(w.displacementMap.channel),emissiveMapUv:Gt&&M(w.emissiveMap.channel),metalnessMapUv:ln&&M(w.metalnessMap.channel),roughnessMapUv:hn&&M(w.roughnessMap.channel),anisotropyMapUv:nt&&M(w.anisotropyMap.channel),clearcoatMapUv:L&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:A&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&M(w.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&M(w.sheenRoughnessMap.channel),specularMapUv:me&&M(w.specularMap.channel),specularColorMapUv:Me&&M(w.specularColorMap.channel),specularIntensityMapUv:k&&M(w.specularIntensityMap.channel),transmissionMapUv:_e&&M(w.transmissionMap.channel),thicknessMapUv:he&&M(w.thicknessMap.channel),alphaMapUv:be&&M(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Bt||_t),vertexNormals:!!j.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!j.attributes.uv&&(qe||be),fog:!!ce,useFog:w.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||j.attributes.normal===void 0&&Bt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ve,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Q,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ie.filter(ke=>ke.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&Pt.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vr,flipSided:w.side===si,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ht&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&w.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ot.vertexUv1s=h.has(1),ot.vertexUv2s=h.has(2),ot.vertexUv3s=h.has(3),h.clear(),ot}function T(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const J in w.defines)N.push(J),N.push(w.defines[J]);return w.isRawShaderMaterial===!1&&(v(N,w),S(N,w),N.push(r.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function v(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapPMREM),w.push(N.envMapMaxLod),w.push(N.envMapSize),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.diffuseRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.numLightProbeGrids),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function S(w,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.diffuseRoughness&&d.enable(25),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function C(w){const N=x[w.type];let J;if(N){const G=Ki[N];J=Zv.clone(G.uniforms)}else J=w.uniforms;return J}function U(w,N){let J=y.get(N);return J!==void 0?++J.usedTimes:(J=new T1(r,N,w,l),m.push(J),y.set(N,J)),J}function P(w){if(--w.usedTimes===0){const N=m.indexOf(w);m[N]=m[m.length-1],m.pop(),y.delete(w.cacheKey),w.destroy()}}function F(w){p.remove(w)}function I(){p.dispose()}return{getParameters:E,getProgramCacheKey:T,getUniforms:C,acquireProgram:U,releaseProgram:P,releaseShaderCache:F,programs:m,dispose:I}}function P1(){let r=new WeakMap;function e(d){return r.has(d)}function t(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,h){r.get(d)[p]=h}function c(){r=new WeakMap}return{has:e,get:t,remove:s,update:l,dispose:c}}function L1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fg(){const r=[];let e=0;const t=[],s=[],l=[];function c(){e=0,t.length=0,s.length=0,l.length=0}function d(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function p(x,M,E,T,v,S){let C=r[e];return C===void 0?(C={id:x.id,object:x,geometry:M,material:E,materialVariant:d(x),groupOrder:T,renderOrder:x.renderOrder,z:v,group:S},r[e]=C):(C.id=x.id,C.object=x,C.geometry=M,C.material=E,C.materialVariant=d(x),C.groupOrder=T,C.renderOrder=x.renderOrder,C.z=v,C.group=S),e++,C}function h(x,M,E,T,v,S,C){C.reversedDepth===!0&&(v=-v);const U=p(x,M,E,T,v,S);E.transmission>0?s.push(U):E.transparent===!0?l.push(U):t.push(U)}function m(x,M,E,T,v,S){const C=p(x,M,E,T,v,S);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):t.unshift(C)}function y(x,M){t.length>1&&t.sort(x||L1),s.length>1&&s.sort(M||hg),l.length>1&&l.sort(M||hg)}function _(){for(let x=e,M=r.length;x<M;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:y}}function D1(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new fg,r.set(s,[d])):l>=c.length?(d=new fg,c.push(d)):d=c[l],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function I1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new Nt};break;case"SpotLight":t={position:new le,direction:new le,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=t,t}}}function U1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let F1=0;function O1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function k1(r){const e=new I1,t=U1(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new le);const l=new le,c=new on,d=new on;function p(m){let y=0,_=0,x=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let M=0,E=0,T=0,v=0,S=0,C=0,U=0,P=0,F=0,I=0,w=0,N=0,J=0,G=0;m.sort(O1);for(let ie=0,ce=m.length;ie<ce;ie++){const j=m[ie],oe=j.color,fe=j.intensity,Y=j.distance;let K=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===As?K=j.shadow.map.texture:K=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)y+=oe.r*fe,_+=oe.g*fe,x+=oe.b*fe;else if(j.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(j.sh.coefficients[V],fe);G++}else if(j.isSunLight){const V=e.get(j);if(V.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const q=j.shadow,D=t.get(j);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),s.sunShadow[E]=D,s.sunShadowMap[E]=K;const Q=q.getViewportCount();for(let re=0;re<Q;re++)s.sunShadowMatrix[T+re]=q.getMatrix(re),s.sunShadowCascade[T+re]=q._cascadeData[re];T+=Q,E++}s.sun[M]=V,M++}else if(j.isDirectionalLight){const V=e.get(j);if(V.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const q=j.shadow,D=t.get(j);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,s.directionalShadow[v]=D,s.directionalShadowMap[v]=K,s.directionalShadowMatrix[v]=j.shadow.matrix,F++}s.directional[v]=V,v++}else if(j.isSpotLight){const V=e.get(j);V.position.setFromMatrixPosition(j.matrixWorld),V.color.copy(oe).multiplyScalar(fe),V.distance=Y,V.coneCos=Math.cos(j.angle),V.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),V.decay=j.decay,s.spot[C]=V;const q=j.shadow;if(j.map&&(s.spotLightMap[N]=j.map,N++,q.updateMatrices(j),j.castShadow&&J++),s.spotLightMatrix[C]=q.matrix,j.castShadow){const D=t.get(j);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,s.spotShadow[C]=D,s.spotShadowMap[C]=K,w++}C++}else if(j.isRectAreaLight){const V=e.get(j);V.color.copy(oe).multiplyScalar(fe),V.halfWidth.set(j.width*.5,0,0),V.halfHeight.set(0,j.height*.5,0),s.rectArea[U]=V,U++}else if(j.isPointLight){const V=e.get(j);if(V.color.copy(j.color).multiplyScalar(j.intensity),V.distance=j.distance,V.decay=j.decay,j.castShadow){const q=j.shadow,D=t.get(j);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,s.pointShadow[S]=D,s.pointShadowMap[S]=K,s.pointShadowMatrix[S]=j.shadow.matrix,I++}s.point[S]=V,S++}else if(j.isHemisphereLight){const V=e.get(j);V.skyColor.copy(j.color).multiplyScalar(fe),V.groundColor.copy(j.groundColor).multiplyScalar(fe),s.hemi[P]=V,P++}}U>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=_,s.ambient[2]=x;const $=s.hash;($.sunLength!==M||$.directionalLength!==v||$.pointLength!==S||$.spotLength!==C||$.rectAreaLength!==U||$.hemiLength!==P||$.numSunShadows!==E||$.numDirectionalShadows!==F||$.numPointShadows!==I||$.numSpotShadows!==w||$.numSpotMaps!==N||$.numLightProbes!==G)&&(s.sun.length=M,s.directional.length=v,s.spot.length=C,s.rectArea.length=U,s.point.length=S,s.hemi.length=P,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=T,s.sunShadowCascade.length=T,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.directionalShadowMatrix.length=F,s.pointShadow.length=I,s.pointShadowMap.length=I,s.pointShadowMatrix.length=I,s.spotShadow.length=w,s.spotShadowMap.length=w,s.spotLightMatrix.length=w+N-J,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=G,$.sunLength=M,$.directionalLength=v,$.pointLength=S,$.spotLength=C,$.rectAreaLength=U,$.hemiLength=P,$.numSunShadows=E,$.numDirectionalShadows=F,$.numPointShadows=I,$.numSpotShadows=w,$.numSpotMaps=N,$.numLightProbes=G,s.version=F1++)}function h(m,y){let _=0,x=0,M=0,E=0,T=0,v=0;const S=y.matrixWorldInverse;for(let C=0,U=m.length;C<U;C++){const P=m[C];if(P.isSunLight){const F=s.sun[_];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(S),_++}else if(P.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),x++}else if(P.isSpotLight){const F=s.spot[E];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),E++}else if(P.isRectAreaLight){const F=s.rectArea[T];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(S),d.identity(),c.copy(P.matrixWorld),c.premultiply(S),d.extractRotation(c),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const F=s.point[M];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(S),M++}else if(P.isHemisphereLight){const F=s.hemi[v];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(S),v++}}}return{setup:p,setupView:h,state:s}}function pg(r){const e=new k1(r),t=[],s=[],l=[];function c(_){y.camera=_,t.length=0,s.length=0,l.length=0}function d(_){_.isLightProbeGrid?l.push(_):t.push(_)}function p(_){s.push(_)}function h(){e.setup(t),l.sort((_,x)=>_.priority-x.priority||_.id-x.id)}function m(_){e.setupView(t,_)}const y={lightsArray:t,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:h,setupLightsView:m,pushLight:d,pushShadow:p}}function B1(r){let e=new WeakMap;function t(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new pg(r),e.set(l,[p])):c>=d.length?(p=new pg(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:t,dispose:s}}const j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H1=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],G1=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],mg=new on,ao=new le,Ed=new le;function V1(r,e,t){let s=new go;const l=new pt,c=new pt,d=new an,p=new ny,h=new iy,m={},y=t.maxTextureSize,_={[Ts]:si,[si]:Ts,[vr]:vr},x=new bs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:j1,fragmentShader:z1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Cs;E.setAttribute("position",new Es(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ai(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let S=this.type;this.render=function(I,w,N){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===j_&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ql);const J=r.getRenderTarget(),G=r.getActiveCubeFace(),$=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(xa),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ce=S!==this.type;ce&&w.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(oe=>oe.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,oe=I.length;j<oe;j++){const fe=I[j],Y=fe.shadow;if(Y===void 0){dt("WebGLShadowMap:",fe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const K=Y.getFrameExtents();l.multiply(K),c.copy(Y.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/K.x),l.x=c.x*K.x,Y.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/K.y),l.y=c.y*K.y,Y.mapSize.y=c.y));const V=r.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=V,Y.map===null||ce===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===lo){if(fe.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ji(l.x,l.y,{format:As,type:tr,minFilter:ri,magFilter:ri,generateMipmaps:!1}),Y.map.texture.name=fe.name+".shadowMap",Y.map.depthTexture=new Sa(l.x,l.y,Zi),Y.map.depthTexture.name=fe.name+".shadowMapDepth",Y.map.depthTexture.format=Qr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Dn,Y.map.depthTexture.magFilter=Dn}else fe.isPointLight?(Y.map=new Fh(l.x),Y.map.depthTexture=new n0(l.x,er)):(Y.map=new Ji(l.x,l.y),Y.map.depthTexture=new Sa(l.x,l.y,er)),Y.map.depthTexture.name=fe.name+".shadowMap",Y.map.depthTexture.format=Qr,this.type===ql?(Y.map.depthTexture.compareFunction=V?Xg:Wg,Y.map.depthTexture.minFilter=ri,Y.map.depthTexture.magFilter=ri):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Dn,Y.map.depthTexture.magFilter=Dn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==l.x||Y.map.height!==l.y)&&Y.map.setSize(l.x,l.y);const q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();fe.isPointLight!==!0&&Y.updateMatrices(fe,N);const D=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:N.layers;for(let Q=0;Q<q;Q++){const re=Y.getCamera(Q);if(fe.isPointLight){const H=Y.camera,ge=Y.matrix,ye=fe.distance||H.far;ye!==H.far&&(H.far=ye,H.updateProjectionMatrix()),ao.setFromMatrixPosition(fe.matrixWorld),H.position.copy(ao),Ed.copy(H.position),Ed.add(H1[Q]),H.up.copy(G1[Q]),H.lookAt(Ed),H.updateMatrixWorld(),ge.makeTranslation(-ao.x,-ao.y,-ao.z),mg.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(mg,H.coordinateSystem,H.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)r.setRenderTarget(Y.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(Y.map),r.clear());const H=Y.getViewport(Q);d.set(c.x*H.x,c.y*H.y,c.x*H.z,c.y*H.w),ie.viewport(d)}s=Y.getFrustum(Q),P(w,N,re,fe,D,this.type)}Y.isPointLightShadow!==!0&&this.type===lo&&C(Y,N),Y.needsUpdate=!1}S=this.type,v.needsUpdate=!1,r.setRenderTarget(J,G,$)};function C(I,w){const N=e.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null?I.mapPass=new Ji(l.x,l.y,{format:As,type:tr}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(w,null,N,x,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value.set(I.map.width,I.map.height),M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(w,null,N,M,T,null)}function U(I,w,N,J){let G=null;const $=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if($!==void 0)G=$;else if(G=N.isPointLight===!0?h:p,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const ie=G.uuid,ce=w.uuid;let j=m[ie];j===void 0&&(j={},m[ie]=j);let oe=j[ce];oe===void 0&&(oe=G.clone(),j[ce]=oe,w.addEventListener("dispose",F)),G=oe}if(G.visible=w.visible,G.wireframe=w.wireframe,J===lo?G.side=w.shadowSide!==null?w.shadowSide:w.side:G.side=w.shadowSide!==null?w.shadowSide:_[w.side],G.alphaMap=w.alphaMap,G.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,G.map=w.map,G.clipShadows=w.clipShadows,G.clippingPlanes=w.clippingPlanes,G.clipIntersection=w.clipIntersection,G.displacementMap=w.displacementMap,G.displacementScale=w.displacementScale,G.displacementBias=w.displacementBias,G.wireframeLinewidth=w.wireframeLinewidth,G.linewidth=w.linewidth,N.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const ie=r.properties.get(G);ie.light=N}return G}function P(I,w,N,J,G,$){if(I.visible===!1)return;if(I.layers.test(G)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&$===lo)&&(!I.frustumCulled||I.intersectsFrustum(s))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);const j=e.update(I),oe=I.material;if(Array.isArray(oe)){const fe=j.groups;for(let Y=0,K=fe.length;Y<K;Y++){const V=fe[Y],q=oe[V.materialIndex];if(q&&q.visible){const D=U(I,q,J,$);I.onBeforeShadow(r,I,w,N,j,D,V),r.renderBufferDirect(N,null,j,D,I,V),I.onAfterShadow(r,I,w,N,j,D,V)}}}else if(oe.visible){const fe=U(I,oe,J,$);I.onBeforeShadow(r,I,w,N,j,fe,null),r.renderBufferDirect(N,null,j,fe,I,null),I.onAfterShadow(r,I,w,N,j,fe,null)}}const ce=I.children;for(let j=0,oe=ce.length;j<oe;j++)P(ce[j],w,N,J,G,$)}function F(I){I.target.removeEventListener("dispose",F);for(const N in m){const J=m[N],G=I.target.uuid;G in J&&(J[G].dispose(),delete J[G])}}}function W1(r,e){function t(){let k=!1;const _e=new an;let he=null;const Ie=new an(0,0,0,0);return{setMask:function(be){he!==be&&!k&&(r.colorMask(be,be,be,be),he=be)},setLocked:function(be){k=be},setClear:function(be,Ne,Ke,ht,we){we===!0&&(be*=ht,Ne*=ht,Ke*=ht),_e.set(be,Ne,Ke,ht),Ie.equals(_e)===!1&&(r.clearColor(be,Ne,Ke,ht),Ie.copy(_e))},reset:function(){k=!1,he=null,Ie.set(-1,0,0,0)}}}function s(){let k=!1,_e=!1,he=null,Ie=null,be=null;return{setReversed:function(Ne){if(_e!==Ne){const Ke=e.get("EXT_clip_control");Ne?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),_e=Ne;const ht=be;be=null,this.setClear(ht)}},getReversed:function(){return _e},setTest:function(Ne){Ne?ve(r.DEPTH_TEST):je(r.DEPTH_TEST)},setMask:function(Ne){he!==Ne&&!k&&(r.depthMask(Ne),he=Ne)},setFunc:function(Ne){if(_e&&(Ne=yv[Ne]),Ie!==Ne){switch(Ne){case Cd:r.depthFunc(r.NEVER);break;case Nd:r.depthFunc(r.ALWAYS);break;case Pd:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Dd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case Ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=Ne}},setLocked:function(Ne){k=Ne},setClear:function(Ne){be!==Ne&&(be=Ne,_e&&(Ne=1-Ne),r.clearDepth(Ne))},reset:function(){k=!1,he=null,Ie=null,be=null,_e=!1}}}function l(){let k=!1,_e=null,he=null,Ie=null,be=null,Ne=null,Ke=null,ht=null,we=null;return{setTest:function(Qe){k||(Qe?ve(r.STENCIL_TEST):je(r.STENCIL_TEST))},setMask:function(Qe){_e!==Qe&&!k&&(r.stencilMask(Qe),_e=Qe)},setFunc:function(Qe,ot,ke){(he!==Qe||Ie!==ot||be!==ke)&&(r.stencilFunc(Qe,ot,ke),he=Qe,Ie=ot,be=ke)},setOp:function(Qe,ot,ke){(Ne!==Qe||Ke!==ot||ht!==ke)&&(r.stencilOp(Qe,ot,ke),Ne=Qe,Ke=ot,ht=ke)},setLocked:function(Qe){k=Qe},setClear:function(Qe){we!==Qe&&(r.clearStencil(Qe),we=Qe)},reset:function(){k=!1,_e=null,he=null,Ie=null,be=null,Ne=null,Ke=null,ht=null,we=null}}}const c=new t,d=new s,p=new l;let h={};const m=new WeakMap;let y={},_={},x={},M=new WeakMap,E=[],T=null,v=!1,S=null,C=null,U=null,P=null,F=null,I=null,w=null,N=new Nt(0,0,0),J=0,G=!1,$=null,ie=null,ce=null,j=null,oe=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=K>=2);let q=null,D={};const Q=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),H=new an().fromArray(Q),ge=new an().fromArray(re);function ye(k,_e,he,Ie){const be=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(k,Ne),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<he;Ke++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(_e,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(_e+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return Ne}const Re={};Re[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ve(r.DEPTH_TEST),d.setFunc(ho),Wt(!1),Bt(ym),ve(r.CULL_FACE),Ht(xa);function ve(k){y[k]!==!0&&(r.enable(k),y[k]=!0)}function je(k){y[k]!==!1&&(r.disable(k),y[k]=!1)}function Mt(k,_e){return x[k]!==_e?(r.bindFramebuffer(k,_e),x[k]=_e,k===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=_e),k===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=_e),!0):!1}function qe(k,_e){let he=E,Ie=!1;if(k){he=M.get(_e),he===void 0&&(he=[],M.set(_e,he));const be=k.textures;if(he.length!==be.length||he[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,Ke=be.length;Ne<Ke;Ne++)he[Ne]=r.COLOR_ATTACHMENT0+Ne;he.length=be.length,Ie=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(he)}function At(k){return T!==k?(r.useProgram(k),T=k,!0):!1}const yt={[ha]:r.FUNC_ADD,[H_]:r.FUNC_SUBTRACT,[G_]:r.FUNC_REVERSE_SUBTRACT};yt[V_]=r.MIN,yt[W_]=r.MAX;const gt={[X_]:r.ZERO,[$_]:r.ONE,[Y_]:r.SRC_COLOR,[Rg]:r.SRC_ALPHA,[ev]:r.SRC_ALPHA_SATURATE,[Q_]:r.DST_COLOR,[K_]:r.DST_ALPHA,[q_]:r.ONE_MINUS_SRC_COLOR,[Cg]:r.ONE_MINUS_SRC_ALPHA,[J_]:r.ONE_MINUS_DST_COLOR,[Z_]:r.ONE_MINUS_DST_ALPHA,[tv]:r.CONSTANT_COLOR,[nv]:r.ONE_MINUS_CONSTANT_COLOR,[iv]:r.CONSTANT_ALPHA,[rv]:r.ONE_MINUS_CONSTANT_ALPHA};function Ht(k,_e,he,Ie,be,Ne,Ke,ht,we,Qe){if(k===xa){v===!0&&(je(r.BLEND),v=!1);return}if(v===!1&&(ve(r.BLEND),v=!0),k!==z_){if(k!==S||Qe!==G){if((C!==ha||F!==ha)&&(r.blendEquation(r.FUNC_ADD),C=ha,F=ha),Qe)switch(k){case uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sm:r.blendFunc(r.ONE,r.ONE);break;case Mm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Em:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ot("WebGLState: Invalid blending: ",k);break}else switch(k){case uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mm:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",k);break}U=null,P=null,I=null,w=null,N.set(0,0,0),J=0,S=k,G=Qe}return}be=be||_e,Ne=Ne||he,Ke=Ke||Ie,(_e!==C||be!==F)&&(r.blendEquationSeparate(yt[_e],yt[be]),C=_e,F=be),(he!==U||Ie!==P||Ne!==I||Ke!==w)&&(r.blendFuncSeparate(gt[he],gt[Ie],gt[Ne],gt[Ke]),U=he,P=Ie,I=Ne,w=Ke),(ht.equals(N)===!1||we!==J)&&(r.blendColor(ht.r,ht.g,ht.b,we),N.copy(ht),J=we),S=k,G=!1}function qt(k,_e){k.side===vr?je(r.CULL_FACE):ve(r.CULL_FACE);let he=k.side===si;_e&&(he=!he),Wt(he),k.blending===uo&&k.transparent===!1?Ht(xa):Ht(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ie=k.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):je(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(k){$!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),$=k)}function Bt(k){k!==k_?(ve(r.CULL_FACE),k!==ie&&(k===ym?r.cullFace(r.BACK):k===B_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):je(r.CULL_FACE),ie=k}function Fn(k){k!==ce&&(Y&&r.lineWidth(k),ce=k)}function Gt(k,_e,he){k?(ve(r.POLYGON_OFFSET_FILL),(j!==_e||oe!==he)&&(j=_e,oe=he,d.getReversed()&&(_e=-_e,he=-he),r.polygonOffset(_e,he))):je(r.POLYGON_OFFSET_FILL)}function ln(k){k?ve(r.SCISSOR_TEST):je(r.SCISSOR_TEST)}function hn(k){k===void 0&&(k=r.TEXTURE0+fe-1),q!==k&&(r.activeTexture(k),q=k)}function _t(k,_e,he){he===void 0&&(q===null?he=r.TEXTURE0+fe-1:he=q);let Ie=D[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},D[he]=Ie),(Ie.type!==k||Ie.texture!==_e)&&(q!==he&&(r.activeTexture(he),q=he),r.bindTexture(k,_e||Re[k]),Ie.type=k,Ie.texture=_e)}function W(){const k=D[q];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function mn(){try{r.compressedTexImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ut(){try{r.compressedTexImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function xt(){try{r.texSubImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Pe(){try{r.texSubImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function et(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function nt(){try{r.texStorage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function L(){try{r.texStorage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function A(){try{r.texImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function ee(){try{r.texImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ee(k){return _[k]!==void 0?_[k]:r.getParameter(k)}function xe(k,_e){_[k]!==_e&&(r.pixelStorei(k,_e),_[k]=_e)}function Ce(k){H.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),H.copy(k))}function De(k){ge.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ge.copy(k))}function pe(k,_e){let he=m.get(_e);he===void 0&&(he=new WeakMap,m.set(_e,he));let Ie=he.get(k);Ie===void 0&&(Ie=r.getUniformBlockIndex(_e,k.name),r.uniformBlockBinding(_e,Ie,Ie),he.set(k,Ie))}function me(k,_e,he){const be=m.get(_e).get(k);h[be]!==he&&(r.bindBufferBase(r.UNIFORM_BUFFER,be,he),h[be]=he)}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},_={},q=null,D={},x={},h={},M=new WeakMap,E=[],T=null,v=!1,S=null,C=null,U=null,P=null,F=null,I=null,w=null,N=new Nt(0,0,0),J=0,G=!1,$=null,ie=null,ce=null,j=null,oe=null,H.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:ve,disable:je,bindFramebuffer:Mt,drawBuffers:qe,useProgram:At,setBlending:Ht,setMaterial:qt,setFlipSided:Wt,setCullFace:Bt,setLineWidth:Fn,setPolygonOffset:Gt,setScissorTest:ln,activeTexture:hn,bindTexture:_t,unbindTexture:W,compressedTexImage2D:mn,compressedTexImage3D:Ut,texImage2D:A,texImage3D:ee,pixelStorei:xe,getParameter:Ee,updateUBOMapping:pe,uniformBlockBinding:me,texStorage2D:nt,texStorage3D:L,texSubImage2D:xt,texSubImage3D:Pe,compressedTexSubImage2D:ct,compressedTexSubImage3D:et,scissor:Ce,viewport:De,reset:Me}}function X1(r,e,t,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,y=new WeakMap,_=new Set;let x;const M=new WeakMap,E=new Set,T=new FinalizationRegistry(L=>E.delete(L));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,A){return v?new OffscreenCanvas(L,A):lc("canvas")}function C(L,A,ee){let Ee=1;const xe=nt(L);if((xe.width>ee||xe.height>ee)&&(Ee=ee/Math.max(xe.width,xe.height)),Ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ce=Math.floor(Ee*xe.width),De=Math.floor(Ee*xe.height);x===void 0&&(x=S(Ce,De));const pe=A?S(Ce,De):x;return pe.width=Ce,pe.height=De,pe.getContext("2d").drawImage(L,0,0,Ce,De),dt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ce+"x"+De+")."),pe}else return"data"in L&&dt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function U(L){return L.generateMipmaps}function P(L){r.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(L,A,ee,Ee,xe,Ce=!1){if(L!==null){if(r[L]!==void 0)return r[L];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De;Ee&&(De=e.get("EXT_texture_norm16"),De||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8),ee===r.UNSIGNED_SHORT&&De&&(pe=De.R16_EXT),ee===r.SHORT&&De&&(pe=De.R16_SNORM_EXT)),A===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),A===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8),ee===r.UNSIGNED_SHORT&&De&&(pe=De.RG16_EXT),ee===r.SHORT&&De&&(pe=De.RG16_SNORM_EXT)),A===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),A===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),ee===r.UNSIGNED_INT&&(pe=r.RGB32UI),ee===r.BYTE&&(pe=r.RGB8I),ee===r.SHORT&&(pe=r.RGB16I),ee===r.INT&&(pe=r.RGB32I)),A===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),ee===r.UNSIGNED_INT&&(pe=r.RGBA32UI),ee===r.BYTE&&(pe=r.RGBA8I),ee===r.SHORT&&(pe=r.RGBA16I),ee===r.INT&&(pe=r.RGBA32I)),A===r.RGB&&(ee===r.UNSIGNED_SHORT&&De&&(pe=De.RGB16_EXT),ee===r.SHORT&&De&&(pe=De.RGB16_SNORM_EXT),ee===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),ee===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),A===r.RGBA){const me=Ce?oc:Pt.getTransfer(xe);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=me===zt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT&&De&&(pe=De.RGBA16_EXT),ee===r.SHORT&&De&&(pe=De.RGBA16_SNORM_EXT),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(L,A){let ee;return L?A===null||A===er||A===ya?ee=r.DEPTH24_STENCIL8:A===Zi?ee=r.DEPTH32F_STENCIL8:A===po&&(ee=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===er||A===ya?ee=r.DEPTH_COMPONENT24:A===Zi?ee=r.DEPTH_COMPONENT32F:A===po&&(ee=r.DEPTH_COMPONENT16),ee}function N(L,A){return U(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==ri?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function J(L){const A=new WeakRef(L);s.get(L).__ref=A,E.add(A),T.register(L,A,A)}function G(L){const A=s.get(L).__ref;A!==void 0&&(E.delete(A),T.unregister(A))}function $(L){ce(L.target)}function ie(L){j(L.target)}function ce(L){L.removeEventListener("dispose",$),G(L),fe(L),L.isVideoTexture&&y.delete(L),L.isHTMLTexture&&_.delete(L)}function j(L){L.removeEventListener("dispose",ie),G(L),K(L)}function oe(){for(const L of E){const A=L.deref();A!==void 0&&(A.isRenderTarget===!0?j(A):ce(A))}E.clear(),_.clear()}function fe(L){const A=s.get(L);if(A.__webglInit===void 0)return;const ee=L.source,Ee=M.get(ee);if(Ee){const xe=Ee[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&Y(L),Object.keys(Ee).length===0&&M.delete(ee)}s.remove(L)}function Y(L){const A=s.get(L);r.deleteTexture(A.__webglTexture);const ee=L.source,Ee=M.get(ee);delete Ee[A.__cacheKey],d.memory.textures--}function K(L){const A=s.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ee=L.depthTexture;if(ee&&ee.renderTarget===L&&ce(ee),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let Ce=0;Ce<A.__webglFramebuffer[xe].length;Ce++)r.deleteFramebuffer(A.__webglFramebuffer[xe][Ce]);else r.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)r.deleteFramebuffer(A.__webglFramebuffer[xe]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Ee=L.textures;for(let xe=0,Ce=Ee.length;xe<Ce;xe++){const De=s.get(Ee[xe]);De.__webglTexture&&(r.deleteTexture(De.__webglTexture),d.memory.textures--),s.remove(Ee[xe])}s.remove(L)}let V=0;function q(){V=0}function D(){return V}function Q(L){V=L}function re(){const L=V;return L>=l.maxTextures&&dt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function H(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ge(L,A){const ee=s.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ee.__version!==L.version){const Ee=L.image;if(Ee===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(ee,L,A);return}}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+A)}function ye(L,A){const ee=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){qt(ee,L,A);return}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+A)}function Re(L,A){const ee=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){qt(ee,L,A);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+A)}function ve(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){Wt(ee,L,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+A)}const je={[Fd]:r.REPEAT,[yr]:r.CLAMP_TO_EDGE,[Od]:r.MIRRORED_REPEAT},Mt={[Dn]:r.NEAREST,[ov]:r.NEAREST_MIPMAP_NEAREST,[Tl]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[Zu]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},qe={[dv]:r.NEVER,[$g]:r.ALWAYS,[hv]:r.LESS,[Wg]:r.LEQUAL,[fv]:r.EQUAL,[Xg]:r.GEQUAL,[pv]:r.GREATER,[mv]:r.NOTEQUAL};function At(L,A){if(A.type===Zi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ri||A.magFilter===Zu||A.magFilter===Tl||A.magFilter===Kr||A.minFilter===ri||A.minFilter===Zu||A.minFilter===Tl||A.minFilter===Kr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,je[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,je[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,je[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Mt[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,qe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Dn||A.minFilter!==Tl&&A.minFilter!==Kr||A.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function yt(L,A){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",$),J(A));const Ee=A.source;let xe=M.get(Ee);xe===void 0&&(xe={},M.set(Ee,xe));const Ce=H(A);if(Ce!==L.__cacheKey){xe[Ce]===void 0&&(xe[Ce]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),xe[Ce].usedTimes++;const De=xe[L.__cacheKey];De!==void 0&&(xe[L.__cacheKey].usedTimes--,De.usedTimes===0&&Y(A)),L.__cacheKey=Ce,L.__webglTexture=xe[Ce].texture}return ee}function gt(L,A,ee){return Math.floor(Math.floor(L/ee)/A)}function Ht(L,A,ee,Ee){const Ce=L.updateRanges;if(Ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,ee,Ee,A.data);else{Ce.sort((k,_e)=>k.start-_e.start);let De=0;for(let k=1;k<Ce.length;k++){const _e=Ce[De],he=Ce[k],Ie=_e.start+_e.count,be=gt(he.start,A.width,4),Ne=gt(_e.start,A.width,4);he.start<=Ie+1&&be===Ne&&gt(he.start+he.count-1,A.width,4)===be?_e.count=Math.max(_e.count,he.start+he.count-_e.start):(++De,Ce[De]=he)}Ce.length=De+1;const pe=t.getParameter(r.UNPACK_ROW_LENGTH),me=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let k=0,_e=Ce.length;k<_e;k++){const he=Ce[k],Ie=Math.floor(he.start/4),be=Math.ceil(he.count/4),Ne=Ie%A.width,Ke=Math.floor(Ie/A.width),ht=be,we=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(r.TEXTURE_2D,0,Ne,Ke,ht,we,ee,Ee,A.data)}L.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,pe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,me),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function qt(L,A,ee){let Ee=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ee=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ee=r.TEXTURE_3D);const xe=yt(L,A),Ce=A.source;t.bindTexture(Ee,L.__webglTexture,r.TEXTURE0+ee);const De=s.get(Ce);if(Ce.version!==De.__version||xe===!0){if(t.activeTexture(r.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const we=Pt.getPrimaries(Pt.workingColorSpace),Qe=A.colorSpace===qr?null:Pt.getPrimaries(A.colorSpace),ot=A.colorSpace===qr||we===Qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment);let me=C(A.image,!1,l.maxTextureSize);me=et(A,me);const Me=c.convert(A.format,A.colorSpace),k=c.convert(A.type);let _e=I(A.internalFormat,Me,k,A.normalized,A.colorSpace,A.isVideoTexture);At(Ee,A);let he;const Ie=A.mipmaps,be=A.isVideoTexture!==!0,Ne=De.__version===void 0||xe===!0,Ke=Ce.dataReady,ht=N(A,me);if(A.isDepthTexture)_e=w(A.format===Zr,A.type),Ne&&(be?t.texStorage2D(r.TEXTURE_2D,1,_e,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,_e,me.width,me.height,0,Me,k,null));else if(A.isDataTexture)if(Ie.length>0){be&&Ne&&t.texStorage2D(r.TEXTURE_2D,ht,_e,Ie[0].width,Ie[0].height);for(let we=0,Qe=Ie.length;we<Qe;we++)he=Ie[we],be?Ke&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,he.width,he.height,Me,k,he.data):t.texImage2D(r.TEXTURE_2D,we,_e,he.width,he.height,0,Me,k,he.data);A.generateMipmaps=!1}else be?(Ne&&t.texStorage2D(r.TEXTURE_2D,ht,_e,me.width,me.height),Ke&&Ht(A,me,Me,k)):t.texImage2D(r.TEXTURE_2D,0,_e,me.width,me.height,0,Me,k,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){be&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ht,_e,Ie[0].width,Ie[0].height,me.depth);for(let we=0,Qe=Ie.length;we<Qe;we++)if(he=Ie[we],A.format!==Qi)if(Me!==null)if(be){if(Ke)if(A.layerUpdates.size>0){const ot=Ym(he.width,he.height,A.format,A.type);for(const ke of A.layerUpdates){const Et=he.data.subarray(ke*ot/he.data.BYTES_PER_ELEMENT,(ke+1)*ot/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,ke,he.width,he.height,1,Me,Et)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,he.width,he.height,me.depth,Me,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,_e,he.width,he.height,me.depth,0,he.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Ke&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,he.width,he.height,me.depth,Me,k,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,_e,he.width,he.height,me.depth,0,Me,k,he.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{be&&Ne&&t.texStorage2D(r.TEXTURE_2D,ht,_e,Ie[0].width,Ie[0].height);for(let we=0,Qe=Ie.length;we<Qe;we++)he=Ie[we],A.format!==Qi?Me!==null?be?Ke&&t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,he.width,he.height,Me,he.data):t.compressedTexImage2D(r.TEXTURE_2D,we,_e,he.width,he.height,0,he.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Ke&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,he.width,he.height,Me,k,he.data):t.texImage2D(r.TEXTURE_2D,we,_e,he.width,he.height,0,Me,k,he.data)}else if(A.isDataArrayTexture)if(be){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ht,_e,me.width,me.height,me.depth),Ke)if(A.layerUpdates.size>0){const we=Ym(me.width,me.height,A.format,A.type);for(const Qe of A.layerUpdates){const ot=me.data.subarray(Qe*we/me.data.BYTES_PER_ELEMENT,(Qe+1)*we/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Qe,me.width,me.height,1,Me,k,ot)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,k,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,me.width,me.height,me.depth,0,Me,k,me.data);else if(A.isData3DTexture)be?(Ne&&t.texStorage3D(r.TEXTURE_3D,ht,_e,me.width,me.height,me.depth),Ke&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,k,me.data)):t.texImage3D(r.TEXTURE_3D,0,_e,me.width,me.height,me.depth,0,Me,k,me.data);else if(A.isFramebufferTexture){if(Ne)if(be)t.texStorage2D(r.TEXTURE_2D,ht,_e,me.width,me.height);else{let we=me.width,Qe=me.height;for(let ot=0;ot<ht;ot++)t.texImage2D(r.TEXTURE_2D,ot,_e,we,Qe,0,Me,k,null),we>>=1,Qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in r){const we=r.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),me.parentNode!==we){we.appendChild(me),_.add(A),we.onpaint=Qe=>{const ot=Qe.changedElements;for(const ke of _)ot.includes(ke.image)&&(ke.needsUpdate=!0)},we.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const ot=r.RGBA,ke=r.RGBA,Et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ot,ke,Et,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(be&&Ne){const we=nt(Ie[0]);t.texStorage2D(r.TEXTURE_2D,ht,_e,we.width,we.height)}for(let we=0,Qe=Ie.length;we<Qe;we++)he=Ie[we],be?Ke&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Me,k,he):t.texImage2D(r.TEXTURE_2D,we,_e,Me,k,he);A.generateMipmaps=!1}else if(be){if(Ne){const we=nt(me);t.texStorage2D(r.TEXTURE_2D,ht,_e,we.width,we.height)}Ke&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,k,me)}else t.texImage2D(r.TEXTURE_2D,0,_e,Me,k,me);U(A)&&A.mipmapsAutoUpdate===!0&&P(Ee),De.__version=Ce.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Wt(L,A,ee){if(A.image.length!==6)return;const Ee=yt(L,A),xe=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+ee);const Ce=s.get(xe);if(xe.version!==Ce.__version||Ee===!0){t.activeTexture(r.TEXTURE0+ee);const De=Pt.getPrimaries(Pt.workingColorSpace),pe=A.colorSpace===qr?null:Pt.getPrimaries(A.colorSpace),me=A.colorSpace===qr||De===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Me=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let ke=0;ke<6;ke++)!Me&&!k?_e[ke]=C(A.image[ke],!0,l.maxCubemapSize):_e[ke]=k?A.image[ke].image:A.image[ke],_e[ke]=et(A,_e[ke]);const he=_e[0],Ie=c.convert(A.format,A.colorSpace),be=c.convert(A.type);let Ne=I(A.internalFormat,Ie,be,A.normalized,A.colorSpace);const Ke=A.isVideoTexture!==!0,ht=Ce.__version===void 0||Ee===!0,we=xe.dataReady;let Qe=N(A,he);At(r.TEXTURE_CUBE_MAP,A);let ot;if(A.isDepthTexture){if(Ne=w(A.format===Zr,A.type),ht)if(Ke)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Ne,he.width,he.height);else for(let ke=0;ke<6;ke++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ne,he.width,he.height,0,Ie,be,null)}else if(Me){Ke&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Ne,he.width,he.height);for(let ke=0;ke<6;ke++){ot=_e[ke].mipmaps;for(let Et=0;Et<ot.length;Et++){const Kt=ot[Et];A.format!==Qi?Ie!==null?Ke?we&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et,0,0,Kt.width,Kt.height,Ie,Kt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et,Ne,Kt.width,Kt.height,0,Kt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et,0,0,Kt.width,Kt.height,Ie,be,Kt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et,Ne,Kt.width,Kt.height,0,Ie,be,Kt.data)}}}else{if(ot=A.mipmaps,Ke&&ht){ot.length>0&&Qe++;const ke=nt(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Ne,ke.width,ke.height)}for(let ke=0;ke<6;ke++)if(k){Ke?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,_e[ke].width,_e[ke].height,Ie,be,_e[ke].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ne,_e[ke].width,_e[ke].height,0,Ie,be,_e[ke].data);for(let Et=0;Et<ot.length;Et++){const Wn=ot[Et].image[ke].image;Ke?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et+1,0,0,Wn.width,Wn.height,Ie,be,Wn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et+1,Ne,Wn.width,Wn.height,0,Ie,be,Wn.data)}}else{Ke?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,Ie,be,_e[ke]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ne,Ie,be,_e[ke]);for(let Et=0;Et<ot.length;Et++){const Kt=ot[Et];Ke?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et+1,0,0,Ie,be,Kt.image[ke]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Et+1,Ne,Ie,be,Kt.image[ke])}}}U(A)&&A.mipmapsAutoUpdate===!0&&P(r.TEXTURE_CUBE_MAP),Ce.__version=xe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Bt(L,A,ee,Ee,xe,Ce){const De=c.convert(ee.format,ee.colorSpace),pe=c.convert(ee.type),me=I(ee.internalFormat,De,pe,ee.normalized,ee.colorSpace),Me=s.get(A),k=s.get(ee);if(k.__renderTarget=A,!Me.__hasExternalTextures){const _e=Math.max(1,A.width>>Ce),he=Math.max(1,A.height>>Ce);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ce,me,_e,he,A.depth,0,De,pe,null):t.texImage2D(xe,Ce,me,_e,he,0,De,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Pe(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,xe,k.__webglTexture,0,xt(A)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Ee,xe,k.__webglTexture,Ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fn(L,A,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer){const Ee=A.depthTexture,xe=Ee&&Ee.isDepthTexture?Ee.type:null,Ce=w(A.stencilBuffer,xe),De=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Pe(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt(A),Ce,A.width,A.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt(A),Ce,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,L)}else{const Ee=A.textures;for(let xe=0;xe<Ee.length;xe++){const Ce=Ee[xe],De=c.convert(Ce.format,Ce.colorSpace),pe=c.convert(Ce.type),me=I(Ce.internalFormat,De,pe,Ce.normalized,Ce.colorSpace);Pe(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt(A),me,A.width,A.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt(A),me,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,me,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(L,A,ee){const Ee=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=s.get(A.depthTexture);xe.__renderTarget=A;const Ce=Ee?A.depthTexture.image[0]:A.depthTexture.image;(!xe.__webglTexture||Ce.width!==A.width||Ce.height!==A.height)&&(Ce.width=A.width,Ce.height=A.height,A.depthTexture.needsUpdate=!0),Ee?ve(A.depthTexture,0):ge(A.depthTexture,0);const De=xe.__webglTexture,pe=xt(A),me=Ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+ee:r.TEXTURE_2D,Me=A.depthTexture.format===Zr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Qr)Pe(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,me,De,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,me,De,0);else if(A.depthTexture.format===Zr)Pe(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,me,De,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,me,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(L){const A=s.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const Ee=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Ee){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Ee.removeEventListener("dispose",xe)};Ee.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=Ee}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let Ee=0;Ee<6;Ee++)Gt(A.__webglFramebuffer[Ee],L,Ee);else L.texture.mipmaps.length>0?Gt(A.__webglFramebuffer[0],L,0):Gt(A.__webglFramebuffer,L,0);else if(ee){A.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Ee]),A.__webglDepthbuffer[Ee]===void 0)A.__webglDepthbuffer[Ee]=r.createRenderbuffer(),Fn(A.__webglDepthbuffer[Ee],L,!1);else{const xe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer[Ee];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ce)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Fn(A.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ce)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function hn(L,A,ee){const Ee=s.get(L);A!==void 0&&Bt(Ee.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ln(L)}function _t(L){const A=L.texture,ee=s.get(L),Ee=s.get(A);L.addEventListener("dispose",ie),J(L);const xe=L.textures,Ce=L.isWebGLCubeRenderTarget===!0,De=xe.length>1;if(De||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture()),Ee.__version=A.version,d.memory.textures++),Ce){ee.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps.length>0){ee.__webglFramebuffer[pe]=[];for(let me=0;me<A.mipmaps.length;me++)ee.__webglFramebuffer[pe][me]=r.createFramebuffer()}else ee.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)ee.__webglFramebuffer[pe]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(De)for(let pe=0,me=xe.length;pe<me;pe++){const Me=s.get(xe[pe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&Pe(L)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let pe=0;pe<xe.length;pe++){const me=xe[pe];ee.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]);const Me=c.convert(me.format,me.colorSpace),k=c.convert(me.type),_e=I(me.internalFormat,Me,k,me.normalized,me.colorSpace,L.isXRRenderTarget===!0),he=xt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,_e,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ee.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Fn(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),At(r.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)Bt(ee.__webglFramebuffer[pe][me],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Bt(ee.__webglFramebuffer[pe],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);U(A)?P(r.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(De){for(let pe=0,me=xe.length;pe<me;pe++){const Me=xe[pe],k=s.get(Me);let _e=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,k.__webglTexture),At(_e,Me),Bt(ee.__webglFramebuffer,L,Me,r.COLOR_ATTACHMENT0+pe,_e,0),U(Me)&&P(_e)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ee.__webglTexture),At(pe,A),A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)Bt(ee.__webglFramebuffer[me],L,A,r.COLOR_ATTACHMENT0,pe,me);else Bt(ee.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,pe,0);U(A)?P(pe):A.mipmaps.length>0&&r.texParameteri(pe,r.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&ln(L)}function W(L){const A=L.textures;for(let ee=0,Ee=A.length;ee<Ee;ee++){const xe=A[ee];if(U(xe)&&xe.mipmapsAutoUpdate===!0){const Ce=F(L),De=s.get(xe).__webglTexture;t.bindTexture(Ce,De),P(Ce),t.unbindTexture()}}}const mn=[];function Ut(L){if(L.samples>0){if(Pe(L)===!1){const A=L.textures,ee=L.width,Ee=L.height;let xe=r.COLOR_BUFFER_BIT;const Ce=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(L),pe=A.length>1;if(pe)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Me]);const k=s.get(A[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,k,0)}r.blitFramebuffer(0,0,ee,Ee,0,0,ee,Ee,xe,r.NEAREST),h===!0&&(mn.length=0,mn.push(r.COLOR_ATTACHMENT0+Me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&mn.push(Ce),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,De.__webglColorRenderbuffer[Me]);const k=s.get(A[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,k,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&h){const A=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function xt(L){return Math.min(l.maxSamples,L.samples)}function Pe(L){const A=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(L){const A=d.render.frame;y.get(L)!==A&&(y.set(L,A),L.update())}function et(L,A){const ee=L.colorSpace,Ee=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==ac&&ee!==qr&&(Pt.getTransfer(ee)===zt?(Ee!==Qi||xe!==fi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",ee)),A}function nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=q,this.getTextureUnits=D,this.setTextureUnits=Q,this.setTexture2D=ge,this.setTexture2DArray=ye,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=hn,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Pe,this.dispose=oe}function $1(r,e){function t(s,l=qr){let c;const d=Pt.getTransfer(l);if(s===fi)return r.UNSIGNED_BYTE;if(s===bh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Rh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===zg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===kg)return r.BYTE;if(s===Bg)return r.SHORT;if(s===po)return r.UNSIGNED_SHORT;if(s===Ah)return r.INT;if(s===er)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===tr)return r.HALF_FLOAT;if(s===Hg)return r.ALPHA;if(s===Gg)return r.RGB;if(s===Qi)return r.RGBA;if(s===Qr)return r.DEPTH_COMPONENT;if(s===Zr)return r.DEPTH_STENCIL;if(s===Vg)return r.RED;if(s===Ch)return r.RED_INTEGER;if(s===As)return r.RG;if(s===Nh)return r.RG_INTEGER;if(s===Ph)return r.RGBA_INTEGER;if(s===Kl||s===Zl||s===Ql||s===Jl)if(d===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Kl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ql)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Kl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ql)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kd||s===Bd||s===jd||s===zd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hd||s===Gd||s===Vd||s===Wd||s===Xd||s===rc||s===$d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hd||s===Gd)return d===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Vd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wd)return c.COMPRESSED_R11_EAC;if(s===Xd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===rc)return c.COMPRESSED_RG11_EAC;if(s===$d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Yd||s===qd||s===Kd||s===Zd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===ah||s===oh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jd)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===th)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ih)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ah)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lh||s===ch||s===uh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===lh)return d===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===uh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dh||s===hh||s===sc||s===fh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===dh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ya?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new i0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new bs({vertexShader:Y1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new dc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z1 extends ns{constructor(e,t){super();const s=this;let l=null,c=1,d=null,p="local-floor",h=1,m=null,y=null,_=null,x=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",v=new K1,S={},C=t.getContextAttributes();let U=null,P=null;const F=[],I=[],w=new pt;let N=null,J=null;const G=new ki;G.viewport=new an;const $=new ki;$.viewport=new an;const ie=[G,$],ce=new oy;let j=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ge=F[H];return ge===void 0&&(ge=new sd,F[H]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(H){let ge=F[H];return ge===void 0&&(ge=new sd,F[H]=ge),ge.getGripSpace()},this.getHand=function(H){let ge=F[H];return ge===void 0&&(ge=new sd,F[H]=ge),ge.getHandSpace()};function fe(H){const ge=I.indexOf(H.inputSource);if(ge===-1)return;const ye=F[ge];ye!==void 0&&(ye.update(H.inputSource,H.frame,m||d),ye.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",K);for(let H=0;H<F.length;H++){const ge=I[H];ge!==null&&(I[H]=null,F[H].disconnect(ge))}j=null,oe=null,v.reset();for(const H in S)delete S[H];if(e.setRenderTarget(U),M=null,x=null,_=null,l=null,P=null,re.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),J!==null){const H=J.camera;H.fov=J.fov,H.zoom=J.zoom,H.updateProjectionMatrix(),J=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){c=H,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){p=H,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(H){m=H},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,t)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",K),C.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,ve=null;C.depth&&(ve=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=C.stencil?Zr:Qr,Re=C.stencil?ya:er);const je={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(je),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Ji(x.textureWidth,x.textureHeight,{format:Qi,type:fi,depthTexture:new Sa(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,t,ye),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Ji(M.framebufferWidth,M.framebufferHeight,{format:Qi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await l.requestReferenceSpace(p),re.setContext(l),re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(H){for(let ge=0;ge<H.removed.length;ge++){const ye=H.removed[ge],Re=I.indexOf(ye);Re>=0&&(I[Re]=null,F[Re].disconnect(ye))}for(let ge=0;ge<H.added.length;ge++){const ye=H.added[ge];let Re=I.indexOf(ye);if(Re===-1){for(let je=0;je<F.length;je++)if(je>=I.length){I.push(ye),Re=je;break}else if(I[je]===null){I[je]=ye,Re=je;break}if(Re===-1)break}const ve=F[Re];ve&&ve.connect(ye)}}function V(H,ge){ge===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ge.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let ge=H.near,ye=H.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),ce.near=$.near=G.near=ge,ce.far=$.far=G.far=ye,(j!==ce.near||oe!==ce.far)&&(l.updateRenderState({depthNear:ce.near,depthFar:ce.far}),j=ce.near,oe=ce.far),ce.layers.mask=H.layers.mask|6,G.layers.mask=ce.layers.mask&-5,$.layers.mask=ce.layers.mask&-3;const Re=H.parent,ve=ce.cameras;V(ce,Re);for(let je=0;je<ve.length;je++)V(ve[je],Re);ce.projectionMatrix.copy(G.projectionMatrix),ce.projectionMatrixInverse.copy(G.projectionMatrixInverse),J===null&&H.isPerspectiveCamera&&(J={camera:H,fov:H.fov,zoom:H.zoom}),q(H,ce,Re)};function q(H,ge,ye){ye===null?H.matrix.copy(ge.matrixWorld):(H.matrix.copy(ye.matrixWorld),H.matrix.invert(),H.matrix.multiply(ge.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ge.projectionMatrix),H.projectionMatrixInverse.copy(ge.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=mh*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(H){h=H,x!==null&&(x.fixedFoveation=H),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(ce)},this.getCameraTexture=function(H){return S[H]};let D=null;function Q(H,ge){if(y=ge.getViewerPose(m||d),E=ge,y!==null){const ye=y.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Re=!1;ye.length!==ce.cameras.length&&(ce.cameras.length=0,Re=!0);for(let qe=0;qe<ye.length;qe++){const At=ye[qe];let yt=null;if(M!==null)yt=M.getViewport(At);else{const Ht=_.getViewSubImage(x,At);yt=Ht.viewport,qe===0&&(e.setRenderTargetTextures(P,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(P))}let gt=ie[qe];gt===void 0&&(gt=new ki,gt.layers.enable(qe),gt.viewport=new an,ie[qe]=gt),gt.matrix.fromArray(At.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(At.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(ce.matrix.copy(gt.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),Re===!0&&ce.cameras.push(gt)}const ve=l.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const qe=_.getDepthInformation(ye[0]);qe&&qe.isValid&&qe.texture&&v.init(qe,l.renderState)}if(ve&&ve.includes("camera-access")&&T){e.state.unbindTexture(),_=s.getBinding();for(let qe=0;qe<ye.length;qe++){const At=ye[qe].camera;if(At){let yt=S[At];yt||(yt=new i0,S[At]=yt);const gt=_.getCameraImage(At);yt.sourceTexture=gt}}}}for(let ye=0;ye<F.length;ye++){const Re=I[ye],ve=F[ye];Re!==null&&ve!==void 0&&ve.update(Re,ge,m||d)}D&&D(H,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),E=null}const re=new l0;re.setAnimationLoop(Q),this.setAnimationLoop=function(H){D=H},this.dispose=function(){}}}const Q1=new on,_0=new ft;_0.set(-1,0,0,0,1,0,0,0,1);function J1(r,e){function t(v,S){v.matrixAutoUpdate===!0&&v.updateMatrix(),S.value.copy(v.matrix)}function s(v,S){S.color.getRGB(v.fogColor.value,r0(r)),S.isFog?(v.fogNear.value=S.near,v.fogFar.value=S.far):S.isFogExp2&&(v.fogDensity.value=S.density)}function l(v,S,C,U,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(v,S):S.isMeshLambertMaterial?(c(v,S),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(v,S),_(v,S)):S.isMeshPhongMaterial?(c(v,S),y(v,S),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(v,S),x(v,S),S.isMeshPhysicalMaterial&&M(v,S,P)):S.isMeshMatcapMaterial?(c(v,S),E(v,S)):S.isMeshDepthMaterial?c(v,S):S.isMeshDistanceMaterial?(c(v,S),T(v,S)):S.isMeshNormalMaterial?c(v,S):S.isLineBasicMaterial?(d(v,S),S.isLineDashedMaterial&&p(v,S)):S.isPointsMaterial?h(v,S,C,U):S.isSpriteMaterial?m(v,S):S.isShadowMaterial?(v.color.value.copy(S.color),v.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(v,S){v.opacity.value=S.opacity,S.color&&v.diffuse.value.copy(S.color),S.emissive&&v.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(v.map.value=S.map,t(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.bumpMap&&(v.bumpMap.value=S.bumpMap,t(S.bumpMap,v.bumpMapTransform),v.bumpScale.value=S.bumpScale,S.side===si&&(v.bumpScale.value*=-1)),S.normalMap&&(v.normalMap.value=S.normalMap,t(S.normalMap,v.normalMapTransform),v.normalScale.value.copy(S.normalScale),S.side===si&&v.normalScale.value.negate()),S.displacementMap&&(v.displacementMap.value=S.displacementMap,t(S.displacementMap,v.displacementMapTransform),v.displacementScale.value=S.displacementScale,v.displacementBias.value=S.displacementBias),S.emissiveMap&&(v.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,v.emissiveMapTransform)),S.specularMap&&(v.specularMap.value=S.specularMap,t(S.specularMap,v.specularMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest);const C=e.get(S),U=C.envMap,P=C.envMapRotation;U&&(v.envMap.value=U,v.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(P)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(_0),v.reflectivity.value=S.reflectivity,v.ior.value=S.ior,v.refractionRatio.value=S.refractionRatio),S.lightMap&&(v.lightMap.value=S.lightMap,v.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,v.lightMapTransform)),S.aoMap&&(v.aoMap.value=S.aoMap,v.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,v.aoMapTransform))}function d(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,S.map&&(v.map.value=S.map,t(S.map,v.mapTransform))}function p(v,S){v.dashSize.value=S.dashSize,v.totalSize.value=S.dashSize+S.gapSize,v.scale.value=S.scale}function h(v,S,C,U){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.size.value=S.size*C,v.scale.value=U*.5,S.map&&(v.map.value=S.map,t(S.map,v.uvTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function m(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.rotation.value=S.rotation,S.map&&(v.map.value=S.map,t(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function y(v,S){v.specular.value.copy(S.specular),v.shininess.value=Math.max(S.shininess,1e-4)}function _(v,S){S.gradientMap&&(v.gradientMap.value=S.gradientMap)}function x(v,S){v.metalness.value=S.metalness,S.metalnessMap&&(v.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,v.metalnessMapTransform)),v.roughness.value=S.roughness,S.roughnessMap&&(v.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,v.roughnessMapTransform)),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)}function M(v,S,C){v.ior.value=S.ior,S.diffuseRoughness>0&&(v.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),S.sheen>0&&(v.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),v.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(v.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,v.sheenColorMapTransform)),S.sheenRoughnessMap&&(v.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,v.sheenRoughnessMapTransform))),S.clearcoat>0&&(v.clearcoat.value=S.clearcoat,v.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(v.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,v.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(v.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===si&&v.clearcoatNormalScale.value.negate())),S.dispersion>0&&(v.dispersion.value=S.dispersion),S.retroreflectivity>0&&(v.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(v.iridescence.value=S.iridescence,v.iridescenceIOR.value=S.iridescenceIOR,v.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(v.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,v.iridescenceMapTransform)),S.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),S.transmission>0&&(v.transmission.value=S.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(v.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,v.transmissionMapTransform)),v.thickness.value=S.thickness,S.thicknessMap&&(v.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=S.attenuationDistance,v.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(v.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(v.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=S.specularIntensity,v.specularColor.value.copy(S.specularColor),S.specularColorMap&&(v.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,v.specularColorMapTransform)),S.specularIntensityMap&&(v.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,S){S.matcap&&(v.matcap.value=S.matcap)}function T(v,S){const C=e.get(S).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ew(r,e,t,s){let l={},c={};function d(C,U){const P=U.program;s.uniformBlockBinding(C,P,l[C.id])}function p(C,U){let P=l[C.id];P===void 0&&(E(C),P=h(C),l[C.id]=P,C.addEventListener("dispose",v));const F=U.program;s.updateUBOMapping(C,F);const I=e.render.frame;c[C.id]!==I&&(m(C),c[C.id]=I)}function h(C){const U=r.createBuffer(),P=C.__size,F=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,P,F),r.bindBuffer(r.UNIFORM_BUFFER,null),U}function m(C){const U=l[C.id],P=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,w=P.length;I<w;I++){const N=P[I];if(Array.isArray(N))for(let J=0,G=N.length;J<G;J++)y(N[J],I,J,F);else y(N,I,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,U,P,F){if(x(C,U,P,F)===!0){const I=C.__offset,w=C.value;if(Array.isArray(w)){let N=0;for(let J=0;J<w.length;J++){const G=w[J],$=T(G,!0);_(G,C.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT}}else _(w,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,I,C.__data)}}function _(C,U,P){typeof C=="number"||typeof C=="boolean"?U[P]=C:C.isMatrix3?(U[P]=C.elements[0],U[P+1]=C.elements[1],U[P+2]=C.elements[2],U[P+3]=0,U[P+4]=C.elements[3],U[P+5]=C.elements[4],U[P+6]=C.elements[5],U[P+7]=0,U[P+8]=C.elements[6],U[P+9]=C.elements[7],U[P+10]=C.elements[8],U[P+11]=0):ArrayBuffer.isView(C)?U.set(C.subarray(0,U.length-P),P):C.toArray(U,P)}function x(C,U,P,F){const I=C.value,w=U+"_"+P;if(Array.isArray(I)){F[w]===void 0&&(F[w]=[]);const N=F[w];let J=!1;for(let G=0;G<I.length;G++)M(I[G],N,G)===!0&&(J=!0);return J}return M(I,F,w)}function M(C,U,P){if(U[P]===void 0)return typeof C=="number"||typeof C=="boolean"?U[P]=C:ArrayBuffer.isView(C)?U[P]=C.slice():U[P]=C.clone(),!0;{const F=U[P];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return U[P]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(F.equals(C)===!1)return F.copy(C),!0}}return!1}function E(C){const U=C.uniforms;let P=0;const F=16;for(let w=0,N=U.length;w<N;w++){const J=Array.isArray(U[w])?U[w]:[U[w]];for(let G=0,$=J.length;G<$;G++){const ie=J[G],ce=Array.isArray(ie.value)?ie.value:[ie.value],j=Array.isArray(U[w])||Array.isArray(ie.value);let oe=P;for(let Y=0,K=ce.length;Y<K;Y++){const V=ce[Y],q=T(V,j),D=P%F,Q=D%q.boundary,re=D+Q;P+=Q,re!==0&&F-re<q.storage&&(P+=F-re),Y===0&&(oe=P),P+=q.storage}const fe=ie.type==="int"?Int32Array:ie.type==="uint"?Uint32Array:Float32Array;ie.__data=new fe((P-oe)/Float32Array.BYTES_PER_ELEMENT),ie.__offset=oe}}const I=P%F;return I>0&&(P+=F-I),C.__size=P,C.__cache={},this}function T(C,U){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=16,P.storage=48):C.isMatrix4?(P.boundary=16,P.storage=64):C.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",C),U===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(C){const U=C.target;U.removeEventListener("dispose",v),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);l={},c={}}return{bind:d,update:p,dispose:S}}const tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function nw(){return qi===null&&(qi=new Yv(tw,16,16,As,tr),qi.name="DFG_LUT",qi.minFilter=ri,qi.magFilter=ri,qi.wrapS=yr,qi.wrapT=yr,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class iw{constructor(e={}){const{canvas:t=_v(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=fi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const T=M,v=new Set([Ph,Nh,Ch]),S=new Set([fi,er,po,ya,bh,Rh]),C=new Uint32Array(4),U=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let F=null,I=null;const w=[],N=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let $=!1,ie=null,ce=null,j=null,oe=null;this._outputColorSpace=hi;let fe=0,Y=0,K=null,V=-1,q=null;const D=new an,Q=new an;let re=null;const H=new Nt(0);let ge=0,ye=t.width,Re=t.height,ve=1,je=null,Mt=null;const qe=new an(0,0,ye,Re),At=new an(0,0,ye,Re);let yt=!1;const gt=new go,Ht=new Uh;let qt=!1,Wt=!1;const Bt=new on,Fn=new le,Gt=new an,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let hn=!1;function _t(){return K===null?ve:1}let W=s;function mn(R,B){return t.getContext(R,B)}let Ut,xt,Pe,ct,et,nt,L,A,ee,Ee,xe,Ce,De,pe,me,Me,k,_e,he,Ie,be,Ne,Ke;try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",ke,!1),W===null){const B="webgl2";if(W=mn(B,R),W===null)throw mn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(R){throw t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ot("WebGLRenderer: "+R.message),R}function ht(){Ut=new aE(W),Ut.init(),be=new $1(W,Ut),xt=new qM(W,Ut,e,be),Pe=new W1(W,Ut),xt.reversedDepthBuffer&&x&&Pe.buffers.depth.setReversed(!0),ce=W.createFramebuffer(),j=W.createFramebuffer(),oe=W.createFramebuffer(),ct=new cE(W),et=new P1,nt=new X1(W,Ut,Pe,et,xt,be,ct),L=new sE(G),A=new dy(W),Ne=new $M(W,A),ee=new oE(W,A,ct,Ne),Ee=new dE(W,ee,A,Ne,ct),_e=new uE(W,xt,nt),me=new KM(et),xe=new N1(G,L,Ut,xt,Ne,me),Ce=new J1(G,et),De=new D1,pe=new B1(Ut),k=new XM(G,L,Pe,Ee,E,h),Me=new V1(G,Ee,xt),Ke=new ew(W,ct,xt,Pe),he=new YM(W,Ut,ct),Ie=new lE(W,Ut,ct),ct.programs=xe.programs,G.capabilities=xt,G.extensions=Ut,G.properties=et,G.renderLists=De,G.shadowMap=Me,G.state=Pe,G.info=ct}T!==fi&&(J=new fE(T,t.width,t.height,p,l,c));const we=new Z1(G,W);this.xr=we,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(ye,Re,!1))},this.getSize=function(R){return R.set(ye,Re)},this.setSize=function(R,B,se=!0){if(we.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,Re=B,t.width=Math.floor(R*ve),t.height=Math.floor(B*ve),se===!0&&(t.style.width=R+"px",t.style.height=B+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(ye*ve,Re*ve).floor()},this.setDrawingBufferSize=function(R,B,se){ye=R,Re=B,ve=se,t.width=Math.floor(R*se),t.height=Math.floor(B*se),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(T===fi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(qe)},this.setViewport=function(R,B,se,te){R.isVector4?qe.set(R.x,R.y,R.z,R.w):qe.set(R,B,se,te),Pe.viewport(D.copy(qe).multiplyScalar(_t()).round())},this.getScissor=function(R){return R.copy(At)},this.setScissor=function(R,B,se,te){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,B,se,te),Pe.scissor(Q.copy(At).multiplyScalar(_t()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Pe.setScissorTest(yt=R)},this.setOpaqueSort=function(R){je=R},this.setTransparentSort=function(R){Mt=R},this.getClearColor=function(R){return R.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,se=!0){let te=0;if(R){let Z=!1;if(K!==null){const Oe=K.texture.format;Z=v.has(Oe)}if(Z){const Oe=K.texture.type,Ge=S.has(Oe),Fe=k.getClearColor(),Be=k.getClearAlpha(),We=Fe.r,lt=Fe.g,vt=Fe.b;Ge?(C[0]=We,C[1]=lt,C[2]=vt,C[3]=Be,W.clearBufferuiv(W.COLOR,0,C)):(U[0]=We,U[1]=lt,U[2]=vt,U[3]=Be,W.clearBufferiv(W.COLOR,0,U))}else te|=W.COLOR_BUFFER_BIT}B&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),ie=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),k.dispose(),De.dispose(),pe.dispose(),nt.dispose(),et.dispose(),L.dispose(),Ee.dispose(),ee.dispose(),Ne.dispose(),Ke.dispose(),xe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ps),we.removeEventListener("sessionend",mi),gi.stop()};function Qe(R){R.preventDefault(),Am("WebGLRenderer: Context Lost."),$=!0}function ot(){Am("WebGLRenderer: Context Restored."),$=!1;const R=ct.autoReset,B=Me.enabled,se=Me.autoUpdate,te=Me.needsUpdate,Z=Me.type;ht(),ct.autoReset=R,Me.enabled=B,Me.autoUpdate=se,Me.needsUpdate=te,Me.type=Z}function ke(R){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const B=R.target;B.removeEventListener("dispose",Et),Kt(B)}function Kt(R){Wn(R),et.remove(R)}function Wn(R){const B=et.get(R).programs;B!==void 0&&(B.forEach(function(se){xe.releaseProgram(se)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,se,te,Z,Oe){B===null&&(B=ln);const Ge=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Fe=zi(R,B,se,te,Z);Pe.setMaterial(te,Ge);let Be=se.index,We=1;if(te.wireframe===!0){if(Be=ee.getWireframeAttribute(se),Be===void 0)return;We=2}const lt=se.drawRange,vt=se.attributes.position;let Xe=lt.start*We,wt=(lt.start+lt.count)*We;Oe!==null&&(Xe=Math.max(Xe,Oe.start*We),wt=Math.min(wt,(Oe.start+Oe.count)*We)),Be!==null?(Xe=Math.max(Xe,0),wt=Math.min(wt,Be.count)):vt!=null&&(Xe=Math.max(Xe,0),wt=Math.min(wt,vt.count));const en=wt-Xe;if(en<0||en===1/0)return;Ne.setup(Z,te,Fe,se,Be);let jt,Ft=he;if(Be!==null&&(jt=A.get(Be),Ft=Ie,Ft.setIndex(jt)),Z.isMesh)te.wireframe===!0?(Pe.setLineWidth(te.wireframeLinewidth*_t()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(Z.isLine){let cn=te.linewidth;cn===void 0&&(cn=1),Pe.setLineWidth(cn*_t()),Z.isLineSegments?Ft.setMode(W.LINES):Z.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else Z.isPoints?Ft.setMode(W.POINTS):Z.isSprite&&Ft.setMode(W.TRIANGLES);if(Z.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const cn=Z._multiDrawStarts,$e=Z._multiDrawCounts,_n=Z._multiDrawCount,Je=Be?A.get(Be).bytesPerElement:1,Hi=et.get(te).currentProgram.getUniforms();for(let vn=0;vn<_n;vn++)Hi.setValue(W,"_gl_DrawID",vn),Ft.render(cn[vn]/Je,$e[vn])}else if(Z.isInstancedMesh)Ft.renderInstances(Xe,en,Z.count);else if(se.isInstancedBufferGeometry){const cn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,$e=Math.min(se.instanceCount,cn);Ft.renderInstances(Xe,en,$e)}else Ft.render(Xe,en)};function wr(R,B,se,te){ie!==null&&R.isNodeMaterial&&ie.setObject(te,R),qt===!0&&me.setState(R,se,!1),R.transparent===!0&&R.side===vr&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,xi(R,B,te),R.side=Ts,R.needsUpdate=!0,xi(R,B,te),R.side=vr):xi(R,B,te)}this.compile=function(R,B,se=null){se===null&&(se=R),ie!==null&&ie.renderStart(R,B,se),I=pe.get(se),I.init(B),N.push(I),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),R!==se&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights(),ie!==null&&ie.updateLights(I.state.lightsArray),Wt=this.localClippingEnabled,qt=me.init(this.clippingPlanes,Wt),qt===!0&&me.setGlobalState(this.clippingPlanes,B),ie!==null&&Me.render(I.state.shadowsArray,se,B);const te=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Oe=Z.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Fe=Oe[Ge];wr(Fe,se,B,Z),te.add(Fe)}else wr(Oe,se,B,Z),te.add(Oe)}),I=N.pop(),ie!==null&&ie.renderEnd(),te},this.compileAsync=function(R,B,se=null){const te=this.compile(R,B,se);return new Promise(Z=>{function Oe(){if(te.forEach(function(Ge){const Be=et.get(Ge).currentProgram;(Be===void 0||Be.isReady())&&te.delete(Ge)}),te.size===0){Z(R);return}setTimeout(Oe,10)}Ut.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let is=null;function Ns(R){is&&is(R)}function Ps(){gi.stop()}function mi(){gi.start()}const gi=new l0;gi.setAnimationLoop(Ns),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){is=R,we.setAnimationLoop(R),R===null?gi.stop():gi.start()},we.addEventListener("sessionstart",Ps),we.addEventListener("sessionend",mi),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;ie!==null&&ie.renderStart(R,B);const se=we.enabled===!0&&we.isPresenting===!0,te=J!==null&&(K===null||se)&&J.begin(G,K);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(B),B=we.getCamera()),R.isScene===!0&&R.onBeforeRender(G,R,B,K),I=pe.get(R,N.length),I.init(B),I.state.textureUnits=nt.getTextureUnits(),N.push(I),Bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Ht.setFromArrayCamera(B):gt.setFromProjectionMatrix(Bt,ji,B.reversedDepth),Wt=this.localClippingEnabled,qt=me.init(this.clippingPlanes,Wt),F=De.get(R,w.length),F.init(),w.push(F),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){const Ge=G.xr.getDepthSensingMesh();Ge!==null&&nr(Ge,B,-1/0,G.sortObjects)}nr(R,B,0,G.sortObjects),F.finish(),ie!==null&&ie.updateLights(I.state.lightsArray),G.sortObjects===!0&&F.sort(je,Mt),hn=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,hn&&k.addToRenderList(F,R),this.info.autoReset===!0&&this.info.reset(),qt===!0&&me.beginShadows();const Z=I.state.shadowsArray;if(Me.render(Z,R,B),qt===!0&&me.endShadows(),(te&&J.hasRenderPass())===!1){const Ge=F.opaque,Fe=F.transmissive;if(I.setupLights(),B.isArrayCamera){const Be=B.cameras;if(Fe.length>0)for(let We=0,lt=Be.length;We<lt;We++){const vt=Be[We];it(Ge,Fe,R,vt)}hn&&k.render(R);for(let We=0,lt=Be.length;We<lt;We++){const vt=Be[We];rt(F,R,vt,vt.viewport)}}else Fe.length>0&&it(Ge,Fe,R,B),hn&&k.render(R),rt(F,R,B)}K!==null&&Y===0&&(nt.updateMultisampleRenderTarget(K),nt.updateRenderTargetMipmap(K)),te&&J.end(G),R.isScene===!0&&R.onAfterRender(G,R,B),Ne.resetDefaultState(),V=-1,q=null,N.pop(),N.length>0?(I=N[N.length-1],nt.setTextureUnits(I.state.textureUnits),qt===!0&&me.setGlobalState(G.clippingPlanes,I.state.camera)):I=null,w.pop(),w.length>0?F=w[w.length-1]:F=null,ie!==null&&ie.renderEnd()};function nr(R,B,se,te){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){const Ge=B.isArrayCamera?Ht:gt;if(!R.frustumCulled||R.intersectsFrustum(Ge)){te&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Bt);const Fe=Ee.update(R),Be=R.material;Be.visible&&F.push(R,Fe,Be,se,Gt.z,null,B)}}else if(R.isMesh||R.isLine||R.isPoints){const Ge=B.isArrayCamera?Ht:gt;if(!R.frustumCulled||R.intersectsFrustum(Ge)){const Fe=Ee.update(R),Be=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Gt.copy(Fe.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(Bt)),Array.isArray(Be)){const We=Fe.groups;for(let lt=0,vt=We.length;lt<vt;lt++){const Xe=We[lt],wt=Be[Xe.materialIndex];wt&&wt.visible&&F.push(R,Fe,wt,se,Gt.z,Xe,B)}}else Be.visible&&F.push(R,Fe,Be,se,Gt.z,null,B)}}}const Oe=R.children;for(let Ge=0,Fe=Oe.length;Ge<Fe;Ge++)nr(Oe[Ge],B,se,te)}function rt(R,B,se,te){const{opaque:Z,transmissive:Oe,transparent:Ge}=R;I.setupLightsView(se),qt===!0&&me.setGlobalState(G.clippingPlanes,se),te&&Pe.viewport(D.copy(te)),Z.length>0&&Jt(Z,B,se),Oe.length>0&&Jt(Oe,B,se),Ge.length>0&&Jt(Ge,B,se),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function it(R,B,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[te.id]===void 0){const Xe=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[te.id]=new Ji(1,1,{generateMipmaps:!0,type:Xe?tr:fi,minFilter:Kr,samples:Math.max(4,xt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Oe=I.state.transmissionRenderTarget[te.id],Ge=te.viewport||D;Oe.setSize(Ge.z*G.transmissionResolutionScale,Ge.w*G.transmissionResolutionScale);const Fe=G.getRenderTarget(),Be=G.getActiveCubeFace(),We=G.getActiveMipmapLevel();G.setRenderTarget(Oe),G.getClearColor(H),ge=G.getClearAlpha(),ge<1&&G.setClearColor(16777215,.5),G.clear(),hn&&k.render(se);const lt=G.toneMapping;G.toneMapping=Sr;const vt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),I.setupLightsView(te),qt===!0&&me.setGlobalState(G.clippingPlanes,te),Jt(R,se,te),nt.updateMultisampleRenderTarget(Oe),nt.updateRenderTargetMipmap(Oe),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let wt=0,en=B.length;wt<en;wt++){const jt=B[wt],{object:Ft,geometry:cn,material:$e,group:_n}=jt;if($e.side===vr&&Ft.layers.test(te.layers)){const Je=$e.side;$e.side=si,$e.needsUpdate=!0,nn(Ft,se,te,cn,$e,_n),$e.side=Je,$e.needsUpdate=!0,Xe=!0}}Xe===!0&&(nt.updateMultisampleRenderTarget(Oe),nt.updateRenderTargetMipmap(Oe))}G.setRenderTarget(Fe,Be,We),G.setClearColor(H,ge),vt!==void 0&&(te.viewport=vt),G.toneMapping=lt}function Jt(R,B,se){const te=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Oe=R.length;Z<Oe;Z++){const Ge=R[Z],{object:Fe,geometry:Be,group:We}=Ge;let lt=Ge.material;lt.allowOverride===!0&&te!==null&&(lt=te),Fe.layers.test(se.layers)&&nn(Fe,B,se,Be,lt,We)}}function nn(R,B,se,te,Z,Oe){ie!==null&&Z.isNodeMaterial&&ie.setObject(R,Z),R.onBeforeRender(G,B,se,te,Z,Oe),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(G,B,se,te,R,Oe),Z.transparent===!0&&Z.side===vr&&Z.forceSinglePass===!1?(Z.side=si,Z.needsUpdate=!0,G.renderBufferDirect(se,B,te,Z,R,Oe),Z.side=Ts,Z.needsUpdate=!0,G.renderBufferDirect(se,B,te,Z,R,Oe),Z.side=vr):G.renderBufferDirect(se,B,te,Z,R,Oe),R.onAfterRender(G,B,se,te,Z,Oe)}function Xn(R){let B=0;for(const se of R)se.texture!==null&&B++;return B}function xi(R,B,se){B.isScene!==!0&&(B=ln);const te=et.get(R),Z=I.state.lights,Oe=I.state.shadowsArray,Ge=Z.state.version,Fe=xe.getParameters(R,Z.state,Oe,B,se,I.state.lightProbeGridArray),Be=xe.getProgramCacheKey(Fe);let We=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,te.fog=B.fog;const lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=L.get(R.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Et),We=new Map,te.programs=We,te.programVariants=new Map);let vt=We.get(Be);if(vt!==void 0){if(te.currentProgram===vt&&te.lightsStateVersion===Ge)return rs(R,Fe),vt}else Fe.uniforms=xe.getUniforms(R),ie!==null&&R.isNodeMaterial&&ie.build(R,se,Fe),R.onBeforeCompile(Fe,G),vt=xe.acquireProgram(Fe,Be),We.set(Be,vt),te.uniforms=Fe.uniforms;const Xe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=me.uniform),rs(R,Fe),te.needsLights=ir(R),te.lightsStateVersion=Ge,te.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.sunLights.value=Z.state.sun,Xe.sunLightShadows.value=Z.state.sunShadow,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Xe.sunShadowCascade.value=Z.state.sunShadowCascade,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.numLightProbeGrids=Xn(I.state.lightProbeGridArray),te.currentProgram=vt,te.uniformsList=null,vt}function wa(R,B,se,te,Z){const Oe=et.get(R),Ge=Oe.currentProgram.id+","+te+","+Z;let Fe=Oe.programVariants.get(Ge);return Fe===void 0?(Fe=xi(R,B,se),Oe.programVariants.set(Ge,Fe)):(Oe.currentProgram=Fe,Oe.uniformsList=null,Oe.outputColorSpace=te,Oe.toneMapping=Z),Fe}function Xt(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=nc.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function rs(R,B){const se=et.get(R);se.outputColorSpace=B.outputColorSpace,se.batching=B.batching,se.batchingColor=B.batchingColor,se.instancing=B.instancing,se.instancingColor=B.instancingColor,se.instancingMorph=B.instancingMorph,se.skinning=B.skinning,se.morphTargets=B.morphTargets,se.morphNormals=B.morphNormals,se.morphColors=B.morphColors,se.morphTargetsCount=B.morphTargetsCount,se.numClippingPlanes=B.numClippingPlanes,se.numIntersection=B.numClipIntersection,se.vertexAlphas=B.vertexAlphas,se.vertexTangents=B.vertexTangents,se.toneMapping=B.toneMapping}function zi(R,B,se,te,Z){B.isScene!==!0&&(B=ln),nt.resetTextureUnits();const Oe=B.fog,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?B.environment:null,Fe=K===null?G.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Pt.workingColorSpace,Be=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=L.get(te.envMap||Ge,Be),lt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,vt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,en=!!se.morphAttributes.color;let jt=Sr;te.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(jt=G.toneMapping);const Ft=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,cn=Ft!==void 0?Ft.length:0,$e=et.get(te),_n=I.state.lights;if(qt===!0&&(Wt===!0||R!==q)){const Dt=R===q&&te.id===V;me.setState(te,R,Dt)}let Je=!1,Hi=!1;te.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==_n.state.version||Z.isBatchedMesh&&$e.batching===!1||!Z.isBatchedMesh&&$e.batching===!0||Z.isBatchedMesh&&$e.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&$e.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&$e.instancing===!1||!Z.isInstancedMesh&&$e.instancing===!0||Z.isSkinnedMesh&&$e.skinning===!1||!Z.isSkinnedMesh&&$e.skinning===!0||Z.isInstancedMesh&&$e.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$e.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$e.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$e.instancingMorph===!1&&Z.morphTexture!==null||$e.envMap!==We||te.fog===!0&&$e.fog!==Oe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==me.numPlanes||$e.numIntersection!==me.numIntersection)||$e.vertexAlphas!==lt||$e.vertexTangents!==vt||$e.morphTargets!==Xe||$e.morphNormals!==wt||$e.morphColors!==en||$e.morphTargetsCount!==cn||$e.numLightProbeGrids!==Xn(I.state.lightProbeGridArray)?Je=!0:($e.outputColorSpace!==Fe||$e.toneMapping!==jt)&&(Hi=!0):(Je=!0,$e.__version=te.version);let vn=$e.currentProgram;(Je===!0||Hi===!0)&&(vn=Hi===!0?wa(te,B,Z,Fe,jt):xi(te,B,Z),ie&&te.isNodeMaterial&&ie.onUpdateProgram(te,vn,$e));let Tr=!1,bi=!1,Gi=!1;const Rt=vn.getUniforms(),fn=$e.uniforms;if(Pe.useProgram(vn.program)&&(Tr=!0,bi=!0,Gi=!0),te.id!==V&&(V=te.id,bi=!0),Tr||q!==R){Pe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(W,"projectionMatrix",R.projectionMatrix),Rt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Vt=Rt.map.cameraPosition;Vt!==void 0&&Vt.setValue(W,Fn.setFromMatrixPosition(R.matrixWorld)),xt.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,bi=!0,Gi=!0)}if($e.needsLights&&(_n.state.sunShadowMap.length>0&&Rt.setValue(W,"sunShadowMap",_n.state.sunShadowMap,nt),_n.state.directionalShadowMap.length>0&&Rt.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,nt),_n.state.spotShadowMap.length>0&&Rt.setValue(W,"spotShadowMap",_n.state.spotShadowMap,nt),_n.state.pointShadowMap.length>0&&Rt.setValue(W,"pointShadowMap",_n.state.pointShadowMap,nt)),Z.isSkinnedMesh){Rt.setOptional(W,Z,"bindMatrix"),Rt.setOptional(W,Z,"bindMatrixInverse");const Dt=Z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(W,"boneTexture",Dt.boneTexture,nt))}Z.isBatchedMesh&&(Rt.setOptional(W,Z,"batchingTexture"),Rt.setValue(W,"batchingTexture",Z._matricesTexture,nt),Rt.setOptional(W,Z,"batchingIdTexture"),Rt.setValue(W,"batchingIdTexture",Z._indirectTexture,nt),Rt.setOptional(W,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Rt.setValue(W,"batchingColorTexture",Z._colorsTexture,nt));const On=se.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&_e.update(Z,se,vn),(bi||$e.receiveShadow!==Z.receiveShadow)&&($e.receiveShadow=Z.receiveShadow,Rt.setValue(W,"receiveShadow",Z.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&B.environment!==null&&(fn.envMapIntensity.value=B.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=nw()),bi){if(Rt.setValue(W,"toneMappingExposure",G.toneMappingExposure),$e.needsLights&&ss(fn,Gi),Oe&&te.fog===!0&&Ce.refreshFogUniforms(fn,Oe),Ce.refreshMaterialUniforms(fn,te,ve,Re,I.state.transmissionRenderTarget[R.id]),$e.needsLights&&$e.numLightProbeGrids>0){const Dt=P;let Vt=0;for(const An of I.state.lightProbeGridArray)An.texture!==null&&(Dt.textures[Vt]=An.texture,Dt.min[Vt]=An.boundingBox.min,Dt.max[Vt]=An.boundingBox.max,Dt.resolution[Vt]=An.resolution,Vt++);for(const An in Dt)Dt[An].length=Vt;fn.probesSH.value=Dt.textures,fn.probesMin.value=Dt.min,fn.probesMax.value=Dt.max,fn.probesResolution.value=Dt.resolution}nc.upload(W,Xt($e),fn,nt)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(nc.upload(W,Xt($e),fn,nt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(W,"center",Z.center),Rt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(W,"normalMatrix",Z.normalMatrix),Rt.setValue(W,"modelMatrix",Z.matrixWorld),te.uniformsGroups!==void 0){const Dt=te.uniformsGroups;for(let Vt=0,An=Dt.length;Vt<An;Vt++){const Ar=Dt[Vt];Ke.update(Ar,vn),Ke.bind(Ar,vn)}}return vn}function ss(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.sunLights.needsUpdate=B,R.sunLightShadows.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function ir(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(R,B,se){const te=et.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),et.get(R.texture).__webglTexture=B,et.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){const se=et.get(R);se.__webglFramebuffer=B,se.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,se=0){K=R,fe=B,Y=se;let te=null,Z=!1,Oe=!1;if(R){const Fe=et.get(R);if(Fe.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(W.FRAMEBUFFER,Fe.__webglFramebuffer),D.copy(R.viewport),Q.copy(R.scissor),re=R.scissorTest,Pe.viewport(D),Pe.scissor(Q),Pe.setScissorTest(re),V=-1;return}else if(Fe.__webglFramebuffer===void 0)nt.setupRenderTarget(R);else if(Fe.__hasExternalTextures)nt.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const lt=R.depthTexture;if(Fe.__boundDepthTexture!==lt){if(lt!==null&&et.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Oe=!0);const We=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[B])?te=We[B][se]:te=We[B],Z=!0):R.samples>0&&nt.useMultisampledRTT(R)===!1?te=et.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[se]:te=We,D.copy(R.viewport),Q.copy(R.scissor),re=R.scissorTest}else D.copy(qe).multiplyScalar(ve).floor(),Q.copy(At).multiplyScalar(ve).floor(),re=yt;if(se!==0&&(te=ce),Pe.bindFramebuffer(W.FRAMEBUFFER,te)&&Pe.drawBuffers(R,te),Pe.viewport(D),Pe.scissor(Q),Pe.setScissorTest(re),Z){const Fe=et.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,se)}else if(Oe){const Fe=B;for(let Be=0;Be<R.textures.length;Be++){const We=et.get(R.textures[Be]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Be,We.__webglTexture,se,Fe)}}else if(R!==null&&se!==0){const Fe=et.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Fe.__webglTexture,se)}V=-1};function as(R){const B=et.get(R);return(B.__readFormat!==R.format||B.__readType!==R.type)&&(B.__readFormat=R.format,B.__readType=R.type,B.__formatReadable=xt.textureFormatReadable(R.format),B.__typeReadable=xt.textureTypeReadable(R.type)),B}this.readRenderTargetPixels=function(R,B,se,te,Z,Oe,Ge,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Be=Be[Ge],Array.isArray(Be)&&(Be=Be[0])),Be){Pe.bindFramebuffer(W.FRAMEBUFFER,Be);try{const We=R.textures[Fe],lt=We.format,vt=We.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe);const Xe=as(We);if(Xe.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-te&&se>=0&&se<=R.height-Z&&W.readPixels(B,se,te,Z,be.convert(lt),be.convert(vt),Oe)}finally{const We=K!==null?et.get(K).__webglFramebuffer:null;Pe.bindFramebuffer(W.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,B,se,te,Z,Oe,Ge,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Be=Be[Ge],Array.isArray(Be)&&(Be=Be[0])),Be)if(B>=0&&B<=R.width-te&&se>=0&&se<=R.height-Z){Pe.bindFramebuffer(W.FRAMEBUFFER,Be);const We=R.textures[Fe],lt=We.format,vt=We.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe);const Xe=as(We);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,wt),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),W.readPixels(B,se,te,Z,be.convert(lt),be.convert(vt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const en=K!==null?et.get(K).__webglFramebuffer:null;Pe.bindFramebuffer(W.FRAMEBUFFER,en);const jt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await vv(W,jt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,wt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(wt),W.deleteSync(jt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,se=0){const te=Math.pow(2,-se),Z=Math.floor(R.image.width*te),Oe=Math.floor(R.image.height*te),Ge=B!==null?B.x:0,Fe=B!==null?B.y:0;nt.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,Ge,Fe,Z,Oe),Pe.unbindTexture()},this.copyTextureToTexture=function(R,B,se=null,te=null,Z=0,Oe=0){let Ge,Fe,Be,We,lt,vt,Xe,wt,en;const jt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(se!==null)Ge=se.max.x-se.min.x,Fe=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,lt=se.min.y,vt=se.isBox3?se.min.z:0;else{const Rt=Math.pow(2,-Z);Ge=Math.floor(jt.width*Rt),Fe=Math.floor(jt.height*Rt),R.isDataArrayTexture?Be=jt.depth:R.isData3DTexture?Be=Math.floor(jt.depth*Rt):Be=1,We=0,lt=0,vt=0}te!==null?(Xe=te.x,wt=te.y,en=te.z):(Xe=0,wt=0,en=0);const Ft=be.convert(B.format),cn=be.convert(B.type);let $e;B.isData3DTexture?(nt.setTexture3D(B,0),$e=W.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(nt.setTexture2DArray(B,0),$e=W.TEXTURE_2D_ARRAY):(nt.setTexture2D(B,0),$e=W.TEXTURE_2D),Pe.activeTexture(W.TEXTURE0),Pe.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,B.flipY),Pe.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Pe.pixelStorei(W.UNPACK_ALIGNMENT,B.unpackAlignment);const _n=Pe.getParameter(W.UNPACK_ROW_LENGTH),Je=Pe.getParameter(W.UNPACK_IMAGE_HEIGHT),Hi=Pe.getParameter(W.UNPACK_SKIP_PIXELS),vn=Pe.getParameter(W.UNPACK_SKIP_ROWS),Tr=Pe.getParameter(W.UNPACK_SKIP_IMAGES);Pe.pixelStorei(W.UNPACK_ROW_LENGTH,jt.width),Pe.pixelStorei(W.UNPACK_IMAGE_HEIGHT,jt.height),Pe.pixelStorei(W.UNPACK_SKIP_PIXELS,We),Pe.pixelStorei(W.UNPACK_SKIP_ROWS,lt),Pe.pixelStorei(W.UNPACK_SKIP_IMAGES,vt);const bi=R.isDataArrayTexture||R.isData3DTexture,Gi=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){const Rt=et.get(R),fn=et.get(B),On=et.get(Rt.__renderTarget),Dt=et.get(fn.__renderTarget);Pe.bindFramebuffer(W.READ_FRAMEBUFFER,On.__webglFramebuffer),Pe.bindFramebuffer(W.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Vt=0;Vt<Be;Vt++)bi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,et.get(R).__webglTexture,Z,vt+Vt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,et.get(B).__webglTexture,Oe,en+Vt)),W.blitFramebuffer(We,lt,We+Ge,lt+Fe,Xe,wt,Xe+Ge,wt+Fe,W.DEPTH_BUFFER_BIT,W.NEAREST);Pe.bindFramebuffer(W.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||et.has(R)){const Rt=et.get(R),fn=et.get(B);Pe.bindFramebuffer(W.READ_FRAMEBUFFER,j),Pe.bindFramebuffer(W.DRAW_FRAMEBUFFER,oe);for(let On=0;On<Be;On++)bi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rt.__webglTexture,Z,vt+On):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Rt.__webglTexture,Z),Gi?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,fn.__webglTexture,Oe,en+On):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,fn.__webglTexture,Oe),Z!==0?W.blitFramebuffer(We,lt,We+Ge,lt+Fe,Xe,wt,Xe+Ge,wt+Fe,W.COLOR_BUFFER_BIT,W.NEAREST):Gi?W.copyTexSubImage3D($e,Oe,Xe,wt,en+On,We,lt,Ge,Fe):W.copyTexSubImage2D($e,Oe,Xe,wt,We,lt,Ge,Fe);Pe.bindFramebuffer(W.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Gi?R.isDataTexture||R.isData3DTexture?W.texSubImage3D($e,Oe,Xe,wt,en,Ge,Fe,Be,Ft,cn,jt.data):B.isCompressedArrayTexture?W.compressedTexSubImage3D($e,Oe,Xe,wt,en,Ge,Fe,Be,Ft,jt.data):W.texSubImage3D($e,Oe,Xe,wt,en,Ge,Fe,Be,Ft,cn,jt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,Xe,wt,Ge,Fe,Ft,cn,jt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,Xe,wt,jt.width,jt.height,Ft,jt.data):W.texSubImage2D(W.TEXTURE_2D,Oe,Xe,wt,Ge,Fe,Ft,cn,jt);Pe.pixelStorei(W.UNPACK_ROW_LENGTH,_n),Pe.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Je),Pe.pixelStorei(W.UNPACK_SKIP_PIXELS,Hi),Pe.pixelStorei(W.UNPACK_SKIP_ROWS,vn),Pe.pixelStorei(W.UNPACK_SKIP_IMAGES,Tr),Oe===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&W.generateMipmap($e),Pe.unbindTexture()},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&nt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?nt.setTextureCube(R,0):R.isData3DTexture?nt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?nt.setTexture2DArray(R,0):nt.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){fe=0,Y=0,K=null,Pe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const gg={type:"change"},Oh={type:"start"},v0={type:"end"},$l=new e0,xg=new _r,rw=Math.cos(70*Tv.DEG2RAD),Mn=new le,ii=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wd=1e-6;class sw extends cy{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new le,this.cursor=new le,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ga.ROTATE,MIDDLE:ga.DOLLY,RIGHT:ga.PAN},this.touches={ONE:fa.ROTATE,TWO:fa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new le,this._lastQuaternion=new Jr,this._lastTargetPosition=new le,this._quat=new Jr().setFromUnitVectors(e.up,new le(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $m,this._sphericalDelta=new $m,this._scale=1,this._panOffset=new le,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new le,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ow.bind(this),this._onPointerDown=aw.bind(this),this._onPointerUp=lw.bind(this),this._onContextMenu=mw.bind(this),this._onMouseWheel=dw.bind(this),this._onKeyDown=hw.bind(this),this._onTouchStart=fw.bind(this),this._onTouchMove=pw.bind(this),this._onMouseDown=cw.bind(this),this._onMouseMove=uw.bind(this),this._interceptControlDown=gw.bind(this),this._interceptControlUp=xw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=kt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gg),this.update(),this.state=kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ii:s>Math.PI&&(s-=ii),l<-Math.PI?l+=ii:l>Math.PI&&(l-=ii),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const p=Mn.length();d=this._clampDistance(p*this._scale);const h=p-d;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),c=!!h}else if(this.object.isOrthographicCamera){const p=new le(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=h!==this.object.zoom;const m=new le(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(p),this.object.updateMatrixWorld(),d=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):($l.origin.copy(this.object.position),$l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($l.direction))<rw?this.object.lookAt(this.target):(xg.setFromNormalAndCoplanarPoint(this.object.up,this.target),$l.intersectPlane(xg,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>wd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wd||this._lastTargetPosition.distanceToSquared(this.target)>wd?(this.dispatchEvent(gg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Mn.copy(l).sub(this.target);let c=Mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*t*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=t-s.top,d=s.width,p=s.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),l=.5*(e.pageY+t.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),l=.5*(e.pageY+t.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,l=e.pageY-t.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),l=.5*(e.pageY+t.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,l=e.pageY-t.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,p=(e.pageY+t.y)*.5;this._updateZoomParameters(d,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function aw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ow(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function lw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(v0),this.state=kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=kt.DOLLY;break;case ga.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=kt.ROTATE}break;case ga.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Oh)}function uw(r){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function dw(r){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(r.preventDefault(),this.dispatchEvent(Oh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(v0))}function hw(r){this.enabled!==!1&&this._handleKeyDown(r)}function fw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case fa.ROTATE:if(this.enableRotate===!1){this.state=kt.NONE;break}this._handleTouchStartRotate(r),this.state=kt.TOUCH_ROTATE;break;case fa.PAN:if(this.enablePan===!1){this.state=kt.NONE;break}this._handleTouchStartPan(r),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case fa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=kt.TOUCH_DOLLY_PAN;break;case fa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Oh)}function pw(r){switch(this._trackPointer(r),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=kt.NONE}}function mw(r){this.enabled!==!1&&r.preventDefault()}function gw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function En(r,e={}){return new ty({color:r,roughness:e.roughness??.55,metalness:e.metalness??0,emissive:e.emissive?new Nt(e.emissive):new Nt(0),emissiveIntensity:e.emissiveIntensity??0})}function Ct(r,e,t,s,l,c,d={}){const p=new Ai(e,t);return p.position.set(s,l,c),p.scale.set(d.sx??1,d.sy??1,d.sz??1),d.rotY&&(p.rotation.y=d.rotY),d.rotZ&&(p.rotation.z=d.rotZ),r.add(p),p}function y0(r,e){const t=En(e.skin,{roughness:.62});Ct(r,new mt(.46,.46,.46),t,0,1.85,0),Ct(r,new mt(.36,.58,.24),t,0,1.2,0);const s=.27;for(const p of[-1,1])Ct(r,new mt(.14,.58,.14),t,p*s,1.2,0);const l=.1;for(const p of[-1,1])Ct(r,new mt(.16,.56,.16),t,p*l,.5,0);const c=En("#ffffff",{roughness:.3}),d=En(e.gem,{roughness:.2,emissive:e.gem,emissiveIntensity:.7});for(const p of[-1,1])Ct(r,new mt(.1,.1,.02),c,p*.09,1.9,.23),Ct(r,new mt(.045,.045,.02),d,p*.09,1.9,.24);return Ct(r,new mt(.06,.05,.03),t,0,1.82,.24),Ct(r,new mt(.12,.025,.02),En("#c98a7a",{roughness:.5}),0,1.74,.24),{shoulderY:1.5,hipY:.95,chestY:1.35,side:s,legX:l}}function _w(r,e){const t=En(e.hair,{roughness:.5}),s=En(e.primary,{roughness:.5,metalness:.25}),l=En(e.secondary,{roughness:.5,emissive:e.secondary,emissiveIntensity:.2}),c=En(e.gem,{roughness:.3,emissive:e.gem,emissiveIntensity:.7}),d=En(e.metal,{roughness:.4,metalness:.6}),p=En(e.gem,{roughness:.2,metalness:.1,emissive:"#bfeeff",emissiveIntensity:.8}),h=En("#1a2030",{roughness:.6}),m=y0(r,e);Ct(r,new mt(.5,.14,.5),t,0,2.14,-.02),Ct(r,new mt(.44,.9,.16),t,0,1.45,-.28),Ct(r,new mt(.4,.14,.06),t,0,2.02,.22),Ct(r,new mt(.14,.1,.12),l,.24,2.14,-.08),Ct(r,new mt(.14,.1,.12),l,-.14,2.14,-.08),Ct(r,new mt(.4,.48,.28),s,0,1.22,.02),Ct(r,new mt(.2,.16,.28),s,-.3,1.5,0),Ct(r,new mt(.2,.16,.28),s,.3,1.5,0),Ct(r,new mt(.42,.5,.3),s,0,.78,0);for(const E of[-1,1])Ct(r,new mt(.2,.3,.2),s,E*m.legX,.18,0);Ct(r,new mt(.08,.08,.04),c,0,1.05,.16);const y=new pa,_=new Ai(new mt(.14,.03,1.5),p);_.position.y=.75,y.add(_);const x=new Ai(new mt(.36,.07,.08),d);y.add(x);const M=new Ai(new mt(.06,.4,.06),h);M.position.y=-.22,y.add(M),y.position.set(.5,.7,.08),y.rotation.z=-.15,r.add(y)}function vw(r,e){const t=En(e.hair,{roughness:.5}),s=En(e.primary,{roughness:.6}),l=En(e.cloth,{roughness:.6}),c=En(e.metal,{roughness:.4,metalness:.6}),d=En(e.gem,{roughness:.3,emissive:e.gem,emissiveIntensity:.8}),p=En(e.secondary,{roughness:.5,emissive:e.secondary,emissiveIntensity:.4}),h=y0(r,e);Ct(r,new mt(.3,.1,.16),t,0,1.95,-.24),Ct(r,new mt(.2,.75,.16),t,0,1.5,-.26),Ct(r,new mt(.46,1.05,.32),s,0,1.02,0),Ct(r,new mt(.52,.62,.36),s,0,.3,0),Ct(r,new mt(.2,.14,.2),s,0,1.78,0),Ct(r,new mt(.02,.44,.02),c,-.04,1.44,.18),Ct(r,new mt(.02,.44,.02),c,.04,1.44,.18),Ct(r,new mt(.08,.015,.02),c,0,1.55,.18),Ct(r,new mt(.09,.09,.04),c,0,1.66,.18),Ct(r,new mt(.05,.05,.03),d,0,1.66,.21),Ct(r,new mt(.07,.07,.04),d,0,1.2,.2);for(const _ of[-1,1])Ct(r,new mt(.18,.4,.18),l,_*h.legX,.22,0);Ct(r,new mt(.3,.32,.08),En("#2a1450",{roughness:.5}),0,1.28,.3),Ct(r,new mt(.26,.28,.02),En("#e8dcb8",{roughness:.7}),0,1.285,.35),Ct(r,new mt(.1,.1,.1),d,0,1.4,.36);const m=Ct(r,new mt(.09,.13,.015),p,-.12,1.46,.34);m.rotation.z=-.25;const y=Ct(r,new mt(.09,.13,.015),p,.12,1.5,.34);y.rotation.z=.25}function kh({accent:r,mesh:e,palette:t,height:s=300,autoRotate:l=!0}){const c=Ue.useRef(null);return Ue.useEffect(()=>{const d=c.current;if(!d)return;const p=d.clientWidth||260,h=d.clientHeight||s,m=new Bv,y=new ki(34,p/h,.1,100);y.position.set(0,1.15,5.2);const _=new iw({antialias:!0,alpha:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(p,h),_.outputColorSpace=hi,_.toneMapping=Th,_.toneMappingExposure=1.1,d.appendChild(_.domElement),m.add(new ay(16777215,1.5));const x=new Sd(16777215,2.4);x.position.set(3,4,3),m.add(x);const M=new Sd(16773856,1.2);M.position.set(-2,1,2),m.add(M);const E=new Sd(new Nt(r),1.8);E.position.set(-3,1.5,-2),m.add(E);const T=new pa;e==="swordswoman"?_w(T,t):vw(T,t),T.position.y=-.14,m.add(T);const v=new sw(y,_.domElement);v.target.set(0,1.1,0),v.enableZoom=!1,v.enablePan=!1,v.minPolarAngle=.9,v.maxPolarAngle=Math.PI-.5,v.autoRotate=l,v.autoRotateSpeed=1.2,v.enableDamping=!0,v.dampingFactor=.08,v.update();const S=new ly;let C=0;const U=()=>{C=requestAnimationFrame(U);const F=S.getElapsedTime();T.position.y=-.14+Math.sin(F*1.3)*.02,v.update(),_.render(m,y)};U();const P=()=>{if(!d)return;const F=d.clientWidth||260,I=d.clientHeight||s;y.aspect=F/I,y.updateProjectionMatrix(),_.setSize(F,I)};return window.addEventListener("resize",P),()=>{cancelAnimationFrame(C),window.removeEventListener("resize",P),v.dispose(),m.traverse(F=>{if(F instanceof Ai){F.geometry.dispose();const I=F.material;Array.isArray(I)?I.forEach(w=>w.dispose()):I.dispose()}}),_.dispose(),_.domElement.parentNode===d&&d.removeChild(_.domElement)}},[r,e,t,s,l]),a.jsx("div",{ref:c,className:"character-3d",style:{width:"100%",height:s},"aria-label":"3D 角色，可拖拽旋转"})}function yw({player:r,dungeons:e,activeDungeonId:t,character:s,onMove:l,onOpenDungeon:c}){const d=Ue.useRef(null),p=m=>{var M;if(m.target.closest("button"))return;const y=(M=d.current)==null?void 0:M.getBoundingClientRect();if(!y)return;const _=Math.min(93,Math.max(7,(m.clientX-y.left)/y.width*100)),x=Math.min(84,Math.max(28,(m.clientY-y.top)/y.height*100));l(_,x)},h=m=>{var M;const y=(M=d.current)==null?void 0:M.getBoundingClientRect();if(!y||!d.current)return;const _=((m.clientX-y.left)/y.width-.5)*12,x=((m.clientY-y.top)/y.height-.5)*8;d.current.style.setProperty("--parallax-x",`${_}px`),d.current.style.setProperty("--parallax-y",`${x}px`)};return a.jsxs("div",{ref:d,className:"world-scene",style:{"--px":`${r.x}%`,"--py":`${r.y}%`,"--parallax-x":"0px","--parallax-y":"0px","--char-accent":s.accent},onMouseMove:h,onClick:p,role:"presentation",children:[a.jsxs("div",{className:"world-sky",children:[a.jsx("div",{className:"world-nebula world-nebula--one"}),a.jsx("div",{className:"world-nebula world-nebula--two"}),a.jsx("div",{className:"world-stars"}),a.jsx("div",{className:"distant-moon"})]}),a.jsxs("svg",{className:"world-sculpture",viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:"monolithLine",x1:"0",y1:"0",x2:"1",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:"var(--violet-light)",stopOpacity:".65"}),a.jsx("stop",{offset:".55",stopColor:"var(--violet)",stopOpacity:".16"}),a.jsx("stop",{offset:"1",stopColor:"var(--cyan)",stopOpacity:".4"})]}),a.jsxs("linearGradient",{id:"islandFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:"var(--panel-solid)",stopOpacity:".94"}),a.jsx("stop",{offset:"1",stopColor:"#080311",stopOpacity:".98"})]}),a.jsx("filter",{id:"softGlow",children:a.jsx("feGaussianBlur",{stdDeviation:"4"})})]}),a.jsxs("g",{className:"parallax-layer parallax-layer--far",children:[a.jsx("path",{d:"M70 510 210 375l130 104 117-91 158 125-110 164-226 26Z",fill:"url(#islandFill)",stroke:"url(#monolithLine)"}),a.jsx("path",{d:"m956 460 115-148 143 63 155-39 112 159-128 125-204-22Z",fill:"url(#islandFill)",stroke:"url(#monolithLine)"}),a.jsx("path",{d:"m174 483 94-70 79 60 88-48 92 57",fill:"none",stroke:"var(--violet)",strokeOpacity:".28"}),a.jsx("path",{d:"m1002 451 73-91 100 37 107-30 94 98",fill:"none",stroke:"var(--violet)",strokeOpacity:".26"})]}),a.jsxs("g",{className:"parallax-layer parallax-layer--mid",children:[a.jsx("path",{d:"m220 305 37-117 78 37 58-91 75 117 47-39 22 133-129 66Z",fill:"var(--panel-solid)",stroke:"url(#monolithLine)"}),a.jsx("path",{d:"m1074 310 48-134 64 86 75-27 15 132-95 57Z",fill:"var(--panel-solid)",stroke:"url(#monolithLine)"}),a.jsx("path",{d:"m244 250 51 24 61-37 47 31 22-43",fill:"none",stroke:"var(--violet-light)",strokeOpacity:".4"}),a.jsx("path",{d:"m1115 247 49 55 57-21",fill:"none",stroke:"var(--cyan)",strokeOpacity:".3"}),a.jsx("path",{d:"M695 235 748 164l77 40 21 90-63 71-72-25Z",fill:"var(--panel-soft)",stroke:"var(--violet)",strokeOpacity:".45"}),a.jsx("path",{d:"m704 262 96-64 31 91-65 35Z",fill:"none",stroke:"var(--pink)",strokeOpacity:".25"})]}),a.jsxs("g",{className:"floating-relic floating-relic--one",children:[a.jsx("path",{d:"m210 690 80-80 80 80-80 80Z",fill:"none",stroke:"var(--cyan)",strokeOpacity:".4"}),a.jsx("path",{d:"m290 610v160M210 690h160",stroke:"var(--cyan)",strokeOpacity:".18"})]}),a.jsxs("g",{className:"floating-relic floating-relic--two",children:[a.jsx("path",{d:"m1170 220 68 49-67 51-69-50Z",fill:"none",stroke:"var(--violet-light)",strokeOpacity:".45"}),a.jsx("path",{d:"M1102 270h137M1170 220v100",stroke:"var(--violet-light)",strokeOpacity:".16"})]})]}),a.jsx("div",{className:"world-horizon-glow"}),a.jsxs("div",{className:"world-floor",children:[a.jsx("div",{className:"world-floor__grid"}),a.jsxs("div",{className:"world-floor__rings",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("div",{className:"world-platform world-platform--one"}),a.jsx("div",{className:"world-platform world-platform--two"})]}),a.jsx("div",{className:"world-path world-path--left"}),a.jsx("div",{className:"world-path world-path--right"}),e.map(m=>{const y=t===m.id,_={"--portal-color":m.color,left:`${m.x}%`,top:`${m.y}%`};return a.jsxs("button",{type:"button",className:`world-portal ${y?"is-active":""} ${m.locked?"is-locked":""}`,style:_,onClick:x=>{x.stopPropagation(),c(m)},"aria-label":`${m.name}${m.locked?"，等级不足":""}`,children:[a.jsx("span",{className:"world-portal__beam"}),a.jsx("span",{className:"world-portal__halo"}),a.jsxs("span",{className:"world-portal__ring",children:[a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("span",{className:"world-portal__core",children:a.jsx(de,{name:m.locked?"lock":"cube",size:21})}),a.jsx("span",{className:"world-portal__base",children:a.jsx("i",{})}),a.jsxs("span",{className:"world-portal__label",children:[a.jsx("small",{children:m.subtitle}),a.jsx("strong",{children:m.name}),a.jsx("em",{children:m.locked?`解析者 Lv.${m.level} 解锁`:`推荐 Lv.${m.level}`})]})]},m.id)}),a.jsxs("div",{className:"world-player","aria-label":`${s.name}当前位置`,style:{"--wp-primary":s.palette.primary,"--wp-metal":s.palette.metal,"--wp-gem":s.palette.gem,"--wp-accent":s.accent},children:[a.jsx("div",{className:"world-player__shadow"}),a.jsx("div",{className:"world-player__aura"}),a.jsx("div",{className:"world-player__model",children:a.jsx(kh,{accent:s.accent,mesh:s.mesh,palette:s.palette,height:150,autoRotate:!0})}),a.jsx("span",{className:"world-player__name",children:s.name})]}),a.jsxs("div",{className:"world-coordinates",children:[a.jsxs("span",{children:["X ",r.x.toFixed(1)]}),a.jsx("i",{}),a.jsxs("span",{children:["Y ",r.y.toFixed(1)]})]})]})}function Sw({progress:r,character:e,onOpenDungeon:t,onOpenPanel:s,onNotify:l,onToggleFullscreen:c,onReturnTitle:d,onSelectCharacter:p}){const[h,m]=Ue.useState({x:52,y:76}),[y,_]=Ue.useState(!1),[x,M]=Ue.useState(!1),E=Ue.useMemo(()=>{let S=null,C=Number.POSITIVE_INFINITY;for(const U of Yl){const P=Math.hypot(h.x-U.x,h.y-U.y);P<C&&(S=U,C=P)}return C<11?S:null},[h]);Ue.useEffect(()=>{const S=C=>{if(y)return;const U=C.target;if((U==null?void 0:U.tagName)==="INPUT"||(U==null?void 0:U.tagName)==="TEXTAREA")return;if(C.key.toLowerCase()==="e"&&E){C.preventDefault(),t(E);return}if(C.key==="Escape"){C.preventDefault(),_(!0);return}if(C.key.toLowerCase()==="m"){C.preventDefault(),s("map");return}if(C.key.toLowerCase()==="h"){C.preventDefault(),l("靠近任意传送门，按 E 查看副本协议");return}if(C.key.toLowerCase()==="c"){C.preventDefault(),s("character");return}if(C.key.toLowerCase()==="v"){C.preventDefault(),s("codex");return}const P={w:[0,-.9],ArrowUp:[0,-.9],s:[0,.9],ArrowDown:[0,.9],a:[-.9,0],ArrowLeft:[-.9,0],d:[.9,0],ArrowRight:[.9,0]},F=P[C.key]??P[C.key.toLowerCase()];F&&(C.preventDefault(),m(I=>({x:Math.min(93,Math.max(7,I.x+F[0])),y:Math.min(84,Math.max(28,I.y+F[1]))})))};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[y,E,l,t,s]);const T=S=>{_(!1),s(S)},v=()=>{M(!0),window.setTimeout(()=>M(!1),450),s("map")};return a.jsxs("main",{className:"world-screen screen-enter",children:[a.jsx(yw,{player:h,dungeons:Yl,activeDungeonId:(E==null?void 0:E.id)??null,character:e,onMove:(S,C)=>m({x:S,y:C}),onOpenDungeon:t}),a.jsx("div",{className:"world-vignette"}),a.jsxs("div",{className:"world-hud",children:[a.jsxs("section",{className:"hud-left",children:[a.jsxs("button",{type:"button",className:"world-back-home",onClick:d,"aria-label":"返回标题",children:[a.jsx(de,{name:"arrow-left",size:16}),a.jsx("span",{children:"返回标题"})]}),a.jsxs("div",{className:`minimap ${x?"is-pulsing":""}`,"aria-label":"矩阵大陆小地图",children:[a.jsxs("div",{className:"minimap__rings",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("span",{className:"minimap__north",children:"N"}),a.jsx("span",{className:"minimap__compass",children:a.jsx(de,{name:"compass",size:17})}),Yl.map(S=>a.jsx("span",{className:`minimap__dungeon ${S.locked?"is-locked":""}`,style:{left:`${S.x}%`,top:`${S.y}%`,"--dot-color":S.color}},S.id)),a.jsx("span",{className:"minimap__player",style:{left:`${h.x}%`,top:`${h.y}%`},children:a.jsx(de,{name:"target",size:11})}),a.jsx("span",{className:"minimap__orbit"})]}),a.jsxs("div",{className:"quest-tracker",children:[a.jsxs("div",{className:"quest-tracker__head",children:[a.jsx("span",{children:"主线 · 失衡的矩阵"}),a.jsx(Yt,{tone:"violet",children:"ACTIVE"})]}),a.jsx("p",{children:"前往「基与维数回廊」"}),a.jsxs("div",{className:"quest-tracker__objective",children:[a.jsx("i",{}),a.jsx("span",{children:"接近紫色传送门并进入副本"}),a.jsx("b",{children:"0/1"})]})]})]}),a.jsxs("section",{className:"hud-top-right",children:[a.jsxs("div",{className:"resource-cluster",children:[a.jsxs("div",{className:"resource-pill",children:[a.jsx("span",{className:"resource-pill__icon resource-pill__icon--power",children:a.jsx(de,{name:"bolt",size:16})}),a.jsxs("div",{children:[a.jsx("small",{children:"算力"}),a.jsxs("strong",{children:[r.compute,a.jsxs("em",{children:["/",r.maxCompute]})]})]}),a.jsx("i",{style:{"--fill":`${r.compute/r.maxCompute*100}%`}})]}),a.jsxs("div",{className:"resource-pill",children:[a.jsx("span",{className:"resource-pill__icon resource-pill__icon--crystal",children:a.jsx(de,{name:"crystal",size:16})}),a.jsxs("div",{children:[a.jsx("small",{children:"矩阵结晶"}),a.jsx("strong",{children:r.crystals.toLocaleString("zh-CN")})]})]})]}),a.jsxs("div",{className:"hud-quick-actions",children:[a.jsx(oo,{label:"答题记录",icon:"check",onClick:()=>s("history")}),a.jsx(oo,{label:"图鉴 V",icon:"book",onClick:()=>s("codex")}),a.jsx(oo,{label:"设置",icon:"settings",onClick:()=>s("settings")}),a.jsx(oo,{label:"全屏",icon:"expand",onClick:c})]})]}),a.jsx("aside",{className:"assist-modules","aria-label":"辅助模块",children:[{name:"高斯",code:"GAUSS",icon:"matrix",ready:!0},{name:"欧拉",code:"EULER",icon:"rotate",ready:!1},{name:"柯西",code:"CAUCHY",icon:"shield",ready:!0}].map((S,C)=>a.jsxs("button",{type:"button",className:`assist-module ${S.ready?"is-ready":""}`,onClick:()=>l(`${S.name}模块将在副本战斗中激活`),children:[a.jsx("span",{className:"assist-module__ring",style:{"--ring-progress":`${72-C*18}%`}}),a.jsx("span",{className:"assist-module__avatar",children:a.jsx(de,{name:S.icon,size:20})}),a.jsxs("span",{className:"assist-module__tooltip",children:[a.jsx("strong",{children:S.name}),a.jsxs("small",{children:[S.code," / ",S.ready?"待命":"冷却中"]})]})]},S.name))}),a.jsxs("button",{type:"button",className:"player-card",onClick:()=>s("character"),children:[a.jsxs("span",{className:"player-card__avatar",children:[a.jsxs("span",{className:"avatar-glyph",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("b",{children:r.level})]}),a.jsxs("span",{className:"player-card__copy",children:[a.jsxs("span",{className:"player-card__title",children:[a.jsx("strong",{children:e.name}),a.jsxs(Yt,{tone:"muted",children:["Lv.",r.level]})]}),a.jsxs("span",{className:"player-card__bar player-card__bar--hp",children:[a.jsx("i",{style:{width:"86%"}}),a.jsx("em",{children:"86 / 100"})]}),a.jsxs("span",{className:"player-card__bar player-card__bar--xp",children:[a.jsx("i",{style:{width:`${r.xp/10}%`}}),a.jsxs("em",{children:["秩能 ",r.xp," / 1,000"]})]})]}),a.jsx("span",{className:"player-card__key",children:"C"})]}),a.jsxs("div",{className:"world-actions",children:[a.jsxs("button",{type:"button",className:"world-action",onClick:()=>l("提示：WASD 移动，E 与传送门交互"),children:[a.jsx(de,{name:"help",size:20}),a.jsx("em",{children:"H"}),a.jsx("span",{children:"提示"})]}),a.jsxs("button",{type:"button",className:"world-action",onClick:v,children:[a.jsx(de,{name:"map",size:20}),a.jsx("em",{children:"M"}),a.jsx("span",{children:"地图"})]}),a.jsxs("button",{type:"button",className:"world-action",onClick:()=>_(!0),children:[a.jsx(de,{name:"menu",size:20}),a.jsx("em",{children:"ESC"}),a.jsx("span",{children:"菜单"})]})]}),a.jsxs("div",{className:`interaction-prompt ${E?"is-visible":""}`,children:[a.jsx("span",{className:"interaction-prompt__key",children:"E"}),a.jsxs("div",{children:[a.jsx("small",{children:E!=null&&E.locked?"权限不足":"副本入口已同步"}),a.jsx("strong",{children:E?`${E.locked?"查看":"进入"}「${E.name}」`:"探索矩阵大陆"})]})]}),a.jsxs("div",{className:"world-version",children:[a.jsx("span",{children:"BUILD 0.1.0"}),a.jsx("i",{}),a.jsx("span",{children:"MATRIX CONTINENT // 01"})]})]}),y&&a.jsx(ts,{title:"系统菜单",eyebrow:"WORLD PAUSE",icon:"menu",onClose:()=>_(!1),className:"menu-modal",children:a.jsxs("div",{className:"menu-list",children:[a.jsxs("button",{type:"button",onClick:()=>_(!1),children:[a.jsx(de,{name:"play",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"继续探索"}),a.jsx("small",{children:"返回矩阵大陆"})]}),a.jsx("em",{children:"ESC"})]}),a.jsxs("button",{type:"button",onClick:()=>T("character"),children:[a.jsx(de,{name:"user",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"角色档案"}),a.jsxs("small",{children:["查看",e.name,"属性与技能"]})]}),a.jsx("em",{children:"C"})]}),a.jsxs("button",{type:"button",onClick:()=>{_(!1),p()},children:[a.jsx(de,{name:"refresh",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"重新选择角色"}),a.jsx("small",{children:"切换解析者外观"})]})]}),a.jsxs("button",{type:"button",onClick:()=>T("codex"),children:[a.jsx(de,{name:"book",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"矩阵图鉴"}),a.jsx("small",{children:"定理、矩阵与敌人记录"})]}),a.jsx("em",{children:"V"})]}),a.jsxs("button",{type:"button",onClick:()=>T("settings"),children:[a.jsx(de,{name:"settings",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"系统设置"}),a.jsx("small",{children:"声音、动态效果与画质"})]})]})]})})]})}const _h={T1:{name:"入门",shortName:"入门",stars:1,timeLimit:20,damage:10,multiplier:1,color:"#67E8F9"},T2:{name:"普通",shortName:"普通",stars:2,timeLimit:25,damage:15,multiplier:1.2,color:"#C084FC"},T3:{name:"进阶",shortName:"进阶",stars:3,timeLimit:35,damage:20,multiplier:1.5,color:"#F472D0"},T4:{name:"困难",shortName:"困难",stars:4,timeLimit:45,damage:25,multiplier:1.8,color:"#FBBF24"},T5:{name:"精英",shortName:"精英",stars:5,timeLimit:60,damage:30,multiplier:2.2,color:"#FB7185"}},Bh={single:"单项选择",multiple:"多项选择",boolean:"判断",numeric:"数值填空",matrix:"矩阵填写",order:"流程排序",match:"概念连线",hotspot:"矩阵定位"},_g={standard:"简单 ×2 · 普通 ×2 · 困难 ×1",challenge:"简单 ×1 · 普通 ×1 · 进阶 ×1 · 困难 ×1 · 精英 ×1"};function Rs(r){return typeof r=="string"?r:""}function Mw(r){return typeof r=="boolean"?r:null}function pi(r){return Array.isArray(r)?r.filter(e=>typeof e=="string"):[]}function xo(r){return!Array.isArray(r)||r.length===0?[]:r.map(e=>Array.isArray(e)?e.map(t=>typeof t=="string"?t:""):[])}function pc(r){if(r&&typeof r=="object"&&!Array.isArray(r)){const e=Object.entries(r).filter(t=>typeof t[1]=="string");return Object.fromEntries(e)}return{}}function _o(r){const e=r.trim();if(!e)return Number.NaN;if(/^[-+]?\d+(\.\d+)?\/[-+]?\d+(\.\d+)?$/.test(e)){const[t,s]=e.split("/").map(Number);return s===0?Number.NaN:t/s}return Number(e.replace("−","-"))}function S0({question:r,value:e,onChange:t,disabled:s,reviewed:l,isCorrect:c}){const d=Mw(e),p=[{value:!0,label:"成立",hint:"命题在给定条件下恒真",icon:"check"},{value:!1,label:"不成立",hint:"存在反例或条件不足",icon:"x"}];return a.jsx("div",{className:"boolean-grid",role:"group","aria-label":"判断命题是否成立",children:p.map((h,m)=>{const y=d===h.value,_=l&&h.value===r.answer,x=l&&y&&!c;return a.jsxs("button",{type:"button",className:`boolean-card ${y?"is-selected":""} ${_?"is-correct":""} ${x?"is-wrong":""}`,"aria-pressed":y,disabled:s,onClick:()=>t(h.value),children:[a.jsx("span",{className:"boolean-card__signal",children:a.jsx(de,{name:h.icon,size:26})}),a.jsxs("span",{className:"boolean-card__copy",children:[a.jsx("strong",{children:h.label}),a.jsx("small",{children:h.hint})]}),a.jsx("span",{className:"boolean-card__key",children:m+1})]},h.label)})})}function M0({question:r,value:e,onChange:t,disabled:s,reviewed:l}){const c=pi(e),d=p=>{t(c.includes(p)?c.filter(h=>h!==p):[...c,p])};return a.jsxs("div",{className:"hotspot-answer",children:[a.jsxs("div",{className:"hotspot-answer__header",children:[a.jsxs("span",{children:[a.jsx(de,{name:"target",size:16})," 可多选目标格"]}),a.jsxs("span",{children:["已选 ",c.length," 格"]})]}),a.jsxs("div",{className:"hotspot-wrap",children:[a.jsx("div",{className:"hotspot-row-labels","aria-hidden":"true",children:Array.from({length:r.rows},(p,h)=>a.jsxs("span",{children:["R",h+1]},h))}),a.jsx("div",{className:"hotspot-grid",style:{gridTemplateColumns:`repeat(${r.cols}, minmax(64px, 1fr))`},children:r.cells.map((p,h)=>p.map((m,y)=>{const _=`${h}-${y}`,x=c.includes(_),M=r.answer.includes(_),E=l&&x&&M,T=l&&x&&!M,v=l&&!x&&M;return a.jsxs("button",{type:"button",className:`hotspot-cell ${x?"is-selected":""} ${E?"is-correct":""} ${T?"is-wrong":""} ${v?"is-missed":""}`,"aria-pressed":x,disabled:s,onClick:()=>d(_),children:[a.jsxs("span",{className:"hotspot-cell__position",children:[h+1,",",y+1]}),a.jsx("strong",{children:m}),x&&a.jsx("span",{className:"hotspot-cell__order",children:c.indexOf(_)+1}),l&&(E||v)&&a.jsx(de,{name:"check",size:15}),l&&T&&a.jsx(de,{name:"x",size:15})]},_)}))})]}),a.jsxs("div",{className:"hotspot-legend",children:[a.jsx("span",{className:"is-selected"})," 你的选择 ",a.jsx("span",{className:"is-target"})," 正确位置"]})]})}function E0({question:r,value:e,onChange:t,disabled:s,reviewed:l}){const c=pc(e),[d,p]=Ue.useState(null),h=new Map(r.left.map((x,M)=>[x.id,M])),m=new Map(r.right.map((x,M)=>[x.id,M])),y=x=>{if(!(s||l)){if(c[x]){const M={...c};delete M[x],t(M),p(null);return}p(M=>M===x?null:x)}},_=x=>{if(s||l)return;const M=Object.keys(c).find(E=>c[E]===x);if(M){const E={...c};delete E[M],t(E);return}d&&(t({...c,[d]:x}),p(null))};return a.jsxs("div",{className:"match-answer",children:[a.jsxs("div",{className:"match-answer__instructions",children:[a.jsx("span",{className:d?"is-active":"",children:d?"已选中左项，请点击右侧对应性质":"先点击左侧概念，再点击右侧性质"}),a.jsxs("span",{children:[Object.keys(c).length,"/",r.left.length," 已配对"]})]}),a.jsxs("div",{className:"match-answer__board",children:[a.jsx("svg",{className:"match-lines",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:Object.entries(c).map(([x,M])=>{const E=r.answer[x]===M,T=((h.get(x)??0)+.5)/r.left.length*100,v=((m.get(M)??0)+.5)/r.right.length*100;return a.jsx("path",{d:`M 41 ${T} C 49 ${T}, 51 ${v}, 59 ${v}`,className:l?E?"is-correct":"is-wrong":"is-pending"},`${x}-${M}`)})}),a.jsx("div",{className:"match-column",children:r.left.map((x,M)=>{const E=!!c[x.id],T=l&&E&&r.answer[x.id]===c[x.id];return a.jsxs("button",{type:"button",className:`match-item ${d===x.id?"is-selected":""} ${E?"is-connected":""} ${l?T?"is-correct":"is-wrong":""}`,disabled:s,onClick:()=>y(x.id),children:[a.jsx("span",{children:String.fromCharCode(65+M)}),x.text,E&&a.jsx("i",{})]},x.id)})}),a.jsx("div",{className:"match-column match-column--right",children:r.right.map((x,M)=>{const E=Object.keys(c).find(v=>c[v]===x.id),T=l&&E!==void 0&&r.answer[E]===x.id;return a.jsxs("button",{type:"button",className:`match-item match-item--right ${E?"is-connected":""} ${l?T?"is-correct":"is-wrong":""}`,disabled:s,onClick:()=>_(x.id),children:[a.jsx("i",{}),x.text,a.jsx("span",{children:M+1})]},x.id)})})]}),l&&a.jsxs("div",{className:"match-answer__solution",children:[a.jsx(de,{name:"info",size:16}),a.jsxs("span",{children:["正确配对：",r.answerDisplay]})]})]})}function w0({question:r,value:e,onChange:t,disabled:s,reviewed:l,isCorrect:c}){const d=Ue.useRef([]),p=xo(e),h=Array.from({length:r.rows},(x,M)=>Array.from({length:r.cols},(E,T)=>{var v;return((v=p[M])==null?void 0:v[T])??""})),m=(x,M,E)=>{const T=h.map(v=>[...v]);T[x][M]=E,t(T)},y=(x,M)=>{var E;x<0||M<0||x>=r.rows||M>=r.cols||(E=d.current[x*r.cols+M])==null||E.focus()},_=(x,M,E)=>{const v={ArrowUp:[-1,0],ArrowDown:[1,0],ArrowLeft:[0,-1],ArrowRight:[0,1]}[x.key];v&&(x.preventDefault(),y(M+v[0],E+v[1]))};return a.jsxs("div",{className:"matrix-answer",children:[a.jsxs("div",{className:"matrix-answer__toolbar",children:[a.jsxs("span",{children:[a.jsx(de,{name:"matrix",size:16})," ",r.rows," × ",r.cols," 矩阵"]}),a.jsxs("button",{type:"button",disabled:s||l,onClick:()=>t([]),children:[a.jsx(de,{name:"trash",size:15})," 清空"]})]}),a.jsxs("div",{className:"matrix-frame",children:[a.jsx("span",{className:"matrix-bracket matrix-bracket--left"}),a.jsx("div",{className:"matrix-grid",style:{gridTemplateColumns:`repeat(${r.cols}, minmax(58px, 1fr))`},children:h.map((x,M)=>x.map((E,T)=>{var C;const v=(C=r.answer[M])==null?void 0:C[T],S=l&&Math.abs(_o(E)-v)<=1e-6;return a.jsx("input",{ref:U=>{d.current[M*r.cols+T]=U},className:l?S?"is-correct":"is-wrong":"",value:E,disabled:s,inputMode:"decimal","aria-label":`第 ${M+1} 行第 ${T+1} 列`,onFocus:U=>U.currentTarget.select(),onChange:U=>m(M,T,U.target.value),onKeyDown:U=>_(U,M,T)},`${M}-${T}`)}))}),a.jsx("span",{className:"matrix-bracket matrix-bracket--right"})]}),l&&a.jsxs("p",{className:`matrix-answer__verdict ${c?"is-correct":"is-wrong"}`,children:[a.jsx(de,{name:c?"check":"x",size:16})," ",c?"矩阵元素全部正确":`正确结果为 ${r.answerDisplay}`]})]})}function T0({question:r,value:e,onChange:t,disabled:s,reviewed:l,hintOption:c}){const d=pi(e),p=h=>{t(d.includes(h)?d.filter(m=>m!==h):[...d,h])};return a.jsx("div",{className:"choice-grid",role:"group","aria-label":"选择所有正确答案",children:r.options.map((h,m)=>{const y=d.includes(h.id),_=r.answer.includes(h.id),x=l&&_,M=l&&y&&!_,E=l&&!y&&_,T=c===h.id;return a.jsxs("button",{type:"button",className:`choice-card choice-card--multiple ${y?"is-selected":""} ${x?"is-correct":""} ${M?"is-wrong":""} ${E?"is-missed":""} ${T?"is-eliminated":""}`,"aria-pressed":y,disabled:s||T,onClick:()=>p(h.id),children:[a.jsx("span",{className:`check-box ${y?"is-checked":""}`,children:y&&a.jsx(de,{name:"check",size:13})}),a.jsx("span",{className:"choice-card__text",children:h.text}),a.jsxs("span",{className:"choice-card__state",children:[x&&a.jsx(de,{name:"check",size:17}),M&&a.jsx(de,{name:"x",size:17}),E&&a.jsx("span",{className:"choice-card__missed",children:"漏选"}),!l&&a.jsx("span",{className:"choice-card__index",children:m+1})]})]},h.id)})})}const Ew=["7","8","9","4","5","6","1","2","3","-","0","."];function A0({question:r,value:e,onChange:t,disabled:s,reviewed:l,isCorrect:c}){const d=Rs(e),p=_=>{s||l||t(d.length>=16?d:`${d}${_}`)},h=()=>{s||l||t(d.slice(0,-1))},m=_=>{s||l||(/^[0-9./-]$/.test(_.key)?(_.preventDefault(),p(_.key)):_.key==="Backspace"?(_.preventDefault(),h()):_.key==="Delete"&&(_.preventDefault(),t("")))},y=(_,x,M)=>{_.currentTarget.blur(),M==="back"?h():M==="clear"?t(""):p(x)};return a.jsxs("div",{className:`numeric-answer ${l?c?"is-correct":"is-wrong":""}`,children:[a.jsxs("div",{className:"numeric-answer__field",children:[a.jsx("span",{className:"numeric-answer__prompt",children:"λ ="}),a.jsx("input",{className:"numeric-answer__input",value:d,readOnly:!0,disabled:s,onKeyDown:m,placeholder:r.placeholder??"输入数值","aria-label":"数值答案",inputMode:"none"}),r.suffix&&a.jsx("span",{className:"numeric-answer__suffix",children:r.suffix}),l&&a.jsx("span",{className:"numeric-answer__verdict",children:a.jsx(de,{name:c?"check":"x",size:18})})]}),a.jsx("p",{className:"input-note",children:"支持整数、小数与分数，例如 −1、0.5、1/2。可点击下方键盘输入。"}),a.jsxs("div",{className:"numeric-keypad","aria-label":"数字键盘",children:[Ew.map(_=>a.jsx("button",{type:"button",disabled:s||l,onClick:x=>y(x,_,"key"),children:_},_)),a.jsx("button",{type:"button",disabled:s||l,onClick:_=>y(_,"/","key"),children:"/"}),a.jsx("button",{type:"button",disabled:s||l,onClick:_=>y(_,"","clear"),children:"AC"}),a.jsx("button",{type:"button",className:"numeric-keypad__back",disabled:s||l,onClick:_=>y(_,"","back"),"aria-label":"退格",children:a.jsx(de,{name:"arrow-left",size:18})})]})]})}function b0({question:r,value:e,onChange:t,disabled:s,reviewed:l}){const c=pi(e),d=new Map(r.items.map(T=>[T.id,T])),p=c.length===r.items.length?c.map(T=>d.get(T)).filter(T=>!!T):r.items,[h,m]=Ue.useState(null),[y,_]=Ue.useState(null),x=T=>t(T.map(v=>v.id)),M=(T,v)=>{const S=T+v;if(S<0||S>=p.length||s||l)return;const C=[...p];[C[T],C[S]]=[C[S],C[T]],x(C)},E=(T,v)=>{if(T.preventDefault(),h===null||h===v||s||l)return;const S=[...p],[C]=S.splice(h,1);S.splice(v,0,C),x(S),m(null),_(null)};return a.jsx("div",{className:"order-list",role:"list","aria-label":"可排序步骤",children:p.map((T,v)=>{const S=l&&r.answer[v]===T.id;return a.jsxs("div",{role:"listitem",className:`order-item ${h===v?"is-dragging":""} ${y===v&&h!==v?"is-over":""} ${l?S?"is-correct":"is-wrong":""}`,draggable:!s&&!l,onDragStart:C=>{m(v),C.dataTransfer.effectAllowed="move",C.dataTransfer.setData("text/plain",T.id)},onDragOver:C=>{C.preventDefault(),_(v)},onDragLeave:()=>_(C=>C===v?null:C),onDrop:C=>E(C,v),onDragEnd:()=>{m(null),_(null)},children:[a.jsxs("span",{className:"order-item__grip","aria-hidden":"true",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("span",{className:"order-item__number",children:String(v+1).padStart(2,"0")}),a.jsx("span",{className:"order-item__text",children:T.text}),a.jsxs("span",{className:"order-item__controls",children:[a.jsx("button",{type:"button","aria-label":"上移",disabled:v===0||s||l,onClick:()=>M(v,-1),children:a.jsx(de,{name:"chevron-up",size:16})}),a.jsx("button",{type:"button","aria-label":"下移",disabled:v===p.length-1||s||l,onClick:()=>M(v,1),children:a.jsx(de,{name:"chevron-down",size:16})})]}),l&&a.jsx("span",{className:"order-item__mark",children:a.jsx(de,{name:S?"check":"x",size:16})})]},T.id)})})}function R0({question:r,value:e,onChange:t,disabled:s,reviewed:l,isCorrect:c,hintOption:d}){const p=Rs(e);return a.jsx("div",{className:"choice-grid",role:"group","aria-label":"选择一个答案",children:r.options.map((h,m)=>{const y=d===h.id,_=l&&h.id===r.answer,x=l&&p===h.id&&!c;return a.jsxs("button",{type:"button",className:`choice-card ${p===h.id?"is-selected":""} ${_?"is-correct":""} ${x?"is-wrong":""} ${y?"is-eliminated":""}`,"aria-pressed":p===h.id,disabled:s||y,onClick:()=>t(h.id),children:[a.jsx("span",{className:"choice-card__key",children:h.id}),a.jsx("span",{className:"choice-card__text",children:h.text}),a.jsxs("span",{className:"choice-card__state",children:[(_||x)&&a.jsx(de,{name:_?"check":"x",size:17}),y&&a.jsx("span",{className:"choice-card__eliminated",children:"排除"}),!l&&a.jsx("span",{className:"choice-card__index",children:m+1})]})]},h.id)})})}function ww(r,e){switch(r.type){case"single":return typeof e=="string"&&e.length>0;case"multiple":return pi(e).length>0;case"boolean":return typeof e=="boolean";case"numeric":return Number.isFinite(_o(Rs(e)));case"matrix":return xo(e).length===r.rows&&xo(e).every(t=>t.length===r.cols&&t.every(s=>s.trim()!==""&&Number.isFinite(_o(s))));case"order":return pi(e).length===r.items.length;case"match":return Object.keys(pc(e)).length===r.left.length;case"hotspot":return pi(e).length>0;default:return!1}}function Tw(r,e){switch(r.type){case"single":{const t=Rs(e),s=r.options.find(l=>l.id===t);return s?`${t} · ${s.text}`:"未作答"}case"multiple":{const t=pi(e);return t.length?t.join("、"):"未作答"}case"boolean":return e===!0?"成立":e===!1?"不成立":"未作答";case"numeric":return Rs(e)||"未作答";case"matrix":{const t=xo(e);return t.length?`[[${t.map(s=>s.join(", ")).join("], [")}]]`:"未作答"}case"order":return pi(e).map(l=>{var c;return((c=r.items.find(d=>d.id===l))==null?void 0:c.text)??l}).join(" → ");case"match":{const t=pc(e);return Object.entries(t).map(([s,l])=>{var p,h;const c=((p=r.left.find(m=>m.id===s))==null?void 0:p.text)??s,d=((h=r.right.find(m=>m.id===l))==null?void 0:h.text)??l;return`${c}↔${d}`}).join("；")}case"hotspot":{const t=pi(e);return t.length?t.map(s=>{const[l,c]=s.split("-").map(Number);return`(${l+1},${c+1})`}).join("、"):"未作答"}default:return"未作答"}}function Aw({question:r,reviewed:e,isCorrect:t,disabled:s=!1,hintOption:l,onSubmit:c}){const[d,p]=Ue.useState(null),h=ww(r,d),m=()=>{d===null||!h||e||s||c(d,Tw(r,d))};Ue.useEffect(()=>{const _=x=>{if(e||s||x.ctrlKey||x.metaKey||x.altKey)return;const M=x.target,E=(M==null?void 0:M.tagName)==="INPUT"||(M==null?void 0:M.tagName)==="TEXTAREA"||(M==null?void 0:M.tagName)==="SELECT";if(x.key==="Enter"){x.preventDefault(),m();return}if(E)return;const T=Number(x.key)-1;if(!(Number.isNaN(T)||T<0))if(r.type==="single"&&r.options[T])x.preventDefault(),p(r.options[T].id);else if(r.type==="multiple"&&r.options[T]){x.preventDefault();const v=pi(d);p(v.includes(r.options[T].id)?v.filter(S=>S!==r.options[T].id):[...v,r.options[T].id])}else r.type==="boolean"&&T<2&&(x.preventDefault(),p(T===0))};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)});const y=()=>{switch(r.type){case"single":return a.jsx(R0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t,hintOption:l});case"multiple":return a.jsx(T0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t,hintOption:l});case"boolean":return a.jsx(S0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t});case"numeric":return a.jsx(A0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t});case"matrix":return a.jsx(w0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t});case"order":return a.jsx(b0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t});case"match":return a.jsx(E0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t});case"hotspot":return a.jsx(M0,{question:r,value:d,onChange:p,disabled:s||e,reviewed:e,isCorrect:t});default:return null}};return a.jsxs("div",{className:"question-renderer",children:[y(),!e&&a.jsxs("div",{className:"question-actions",children:[a.jsxs("p",{className:"question-actions__hint",children:[a.jsx(de,{name:"keyboard",size:16}),r.type==="single"||r.type==="multiple"?"数字键选择 · Enter 提交":r.type==="boolean"?"1 / 2 选择 · Enter 提交":"Enter 提交"]}),a.jsx(dn,{variant:"primary",size:"lg",disabled:!h||s,onClick:m,trailingIcon:a.jsx(de,{name:"arrow-right",size:18}),children:r.type==="multiple"?"确认多选":"提交解析"})]})]})}function vg(r,e){return r.length===e.length&&r.every(t=>e.includes(t))}function ic(r,e){switch(r.type){case"single":return Rs(e)===r.answer;case"multiple":return vg(pi(e),r.answer);case"boolean":return e===r.answer;case"numeric":return Math.abs(_o(Rs(e))-r.answer)<=1e-6;case"matrix":{const t=xo(e);return t.length===r.rows&&t.every((s,l)=>s.length===r.cols&&s.every((c,d)=>Math.abs(_o(c)-r.answer[l][d])<=1e-6))}case"order":{const t=pi(e);return t.length===r.answer.length&&t.every((s,l)=>r.answer[l]===s)}case"match":{const t=pc(e);return r.left.every(s=>t[s.id]===r.answer[s.id])}case"hotspot":return vg(pi(e),r.answer);default:return!1}}function bw(r){return r>=5?"S":r>=4?"A":r>=3?"B":"C"}function Rw({config:r,settings:e,onFinish:t,onExit:s,onOpenSettings:l,onNotify:c,onRecord:d,onWithdrawRecord:p,resume:h=null,onSnapshot:m,level:y}){var nr;const _=r.questions,[x,M]=Ue.useState((h==null?void 0:h.questionIndex)??0),E=_[x]??_[0],[T,v]=Ue.useState((h==null?void 0:h.phase)==="feedback"?"feedback":"answering"),[S,C]=Ue.useState((h==null?void 0:h.remaining)??hr(E)),[U,P]=Ue.useState((h==null?void 0:h.currentLimit)??hr(E)),[F,I]=Ue.useState(null),[w,N]=Ue.useState(0),[J,G]=Ue.useState(!1),[$,ie]=Ue.useState(!1),[ce,j]=Ue.useState(h!=null&&h.feedback&&h.feedbackCountdown>0?h.feedbackCountdown:60),[oe,fe]=Ue.useState((h==null?void 0:h.reviveUsed)??0),[Y,K]=Ue.useState((h==null?void 0:h.rerunUsed)??0),[V,q]=Ue.useState(null),[D,Q]=Ue.useState(!1),[re,H]=Ue.useState((h==null?void 0:h.playerHp)??100),[ge,ye]=Ue.useState((h==null?void 0:h.bossHp)??100),[Re,ve]=Ue.useState((h==null?void 0:h.combo)??0),[je,Mt]=Ue.useState((h==null?void 0:h.maxCombo)??0),[qe,At]=Ue.useState((h==null?void 0:h.shield)??!1),[yt,gt]=Ue.useState((h==null?void 0:h.gaussUsed)??!1),[Ht,qt]=Ue.useState((h==null?void 0:h.eulerUsed)??!1),[Wt,Bt]=Ue.useState((h==null?void 0:h.cauchyUsed)??!1),[Fn,Gt]=Ue.useState(),[ln,hn]=Ue.useState(""),[_t,W]=Ue.useState((h==null?void 0:h.feedback)??null),[mn,Ut]=Ue.useState((h==null?void 0:h.results)??[]),[xt,Pe]=Ue.useState(!1),[ct,et]=Ue.useState(null),nt=Ue.useRef(!1),L=Ue.useRef((h==null?void 0:h.totalElapsed)??0),A=Ue.useRef((h==null?void 0:h.results)??[]),ee=Ue.useRef(0),Ee=Ue.useRef(null);Ue.useEffect(()=>{m&&m({questionIndex:x,results:mn,playerHp:re,bossHp:ge,combo:Re,maxCombo:je,shield:qe,gaussUsed:yt,eulerUsed:Ht,cauchyUsed:Wt,reviveUsed:oe,rerunUsed:Y,remaining:S,currentLimit:U,phase:T==="feedback"?"feedback":"answering",feedback:_t,feedbackCountdown:ce,pendingAnswer:null,totalElapsed:L.current})},[x,mn,re,ge,Re,je,qe,yt,Ht,Wt,oe,Y,S,U,T,_t,ce]);const xe=ge<50,Ce=U>0?Math.max(0,Math.min(1,S/U)):0,De=Math.min(2,1+Re*.2),pe=x>=_.length-1,me=re<=0||pe,Me=_h[E.difficulty],k=pe&&(xe||E.difficulty==="T4"||E.difficulty==="T5"),_e=E.prompt.length>60||(((nr=E.formula)==null?void 0:nr.length)??0)>40,he=re<=0&&!pe,Ie=mn.filter(rt=>!rt.correct).length,be=r.mode==="practice",Ne=wg(e.characterId);Ue.useEffect(()=>{C(hr(E)),P(hr(E)),nt.current=!1,I(null),N(0),v("answering")},[E]),Ue.useEffect(()=>{if(T!=="answering"||xt||be)return;const rt=window.setInterval(()=>C(it=>Math.max(0,it-.1)),100);return()=>window.clearInterval(rt)},[T,xt,be]),Ue.useEffect(()=>{T==="answering"&&S<=0&&!nt.current&&ot(null,"超时未作答",!0)}),Ue.useEffect(()=>{const rt=it=>{if(it.key==="Escape"){if(it.preventDefault(),T==="confirming"){ht();return}if(T==="submitting"){Qe();return}Pe(Jt=>!Jt)}if(it.key==="Enter"&&T==="confirming"){it.preventDefault(),we();return}it.key.toLowerCase()==="h"&&T==="answering"&&!xt&&(it.preventDefault(),hn(E.keyStep),c("提示已展开：优先回忆本题的关键定义"))};return document.addEventListener("keydown",rt),()=>document.removeEventListener("keydown",rt)},[c,xt,T,E.keyStep]);function Ke(rt,it){T!=="answering"||xt||nt.current||(I({value:rt,display:it}),v("confirming"),Ti("click",e.volume))}function ht(){T==="confirming"&&(I(null),v("answering"))}function we(){T!=="confirming"||!F||(v("submitting"),N(2))}function Qe(){T==="submitting"&&(I(null),N(0),v("answering"),c("已撤回提交，可继续修改答案"))}Ue.useEffect(()=>{if(T!=="submitting")return;if(w<=0){F&&ot(F.value,F.display);return}const rt=window.setTimeout(()=>N(it=>it-1),1e3);return()=>window.clearTimeout(rt)},[T,w,F]);function ot(rt,it,Jt=!1){if(nt.current)return;const nn=!Jt&&ic(E,rt),Xn=!nn&&qe;if(!nn&&!Jt&&!Xn&&Ie+1>=El.wrongThreshold&&oe<El.limitPerStage&&E.reviveEligible!==!1){const R=w_(E);if(R){q(R),I(null),N(0),v("answering"),Ti("skill",e.volume),c("触发复活任务：完成同类型例题学习即可继续本题");return}}nt.current=!0,Ee.current={playerHp:re,bossHp:ge,combo:Re,maxCombo:je,shield:qe};const xi=nn||Xn?0:Me.damage,wa=Math.max(0,re-xi),Xt=Math.max(0,ge-(nn?25:0)),rs=nn?Re+1:0,zi=Math.max(0,U-S),ss={questionId:E.id,type:E.type,difficulty:E.difficulty,topic:E.topic,correct:nn,elapsed:zi,selectedAnswer:it,correctAnswer:E.answerDisplay,timedOut:Jt},ir=[...mn,ss];A.current=ir,L.current+=zi,H(wa),ye(Xt),ve(rs),Mt(as=>Math.max(as,rs)),Ut(ir),Xn&&At(!1),W({correct:nn,timedOut:Jt,selected:it,playerDamage:xi,shieldBlocked:Xn,elapsed:zi,result:ss}),v("feedback"),j(60),d({id:`${E.id}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,questionId:E.id,snapshot:E,dungeonId:r.dungeonId,dungeonName:r.dungeonName,mode:r.mode,channel:"main",correct:nn,selectedAnswer:it,correctAnswer:E.answerDisplay,knowledgeTag:E.knowledgeTag??[E.topic],timestamp:Date.now(),elapsed:zi,withdrawn:!1,attemptIndex:0}),I(null),N(0),ee.current+=1,et({kind:nn?"hit":Xn?"blocked":"hurt",token:ee.current}),Ti(nn?"correct":"wrong",e.volume),window.setTimeout(()=>et(null),620)}function ke(rt){const it=rt.filter(xi=>xi.correct).length,Jt=ge===0&&re>0,nn=r.mode==="challenge"?1.5:1,Xn=r.mode==="practice"?0:nn;return{dungeonId:r.dungeonId,dungeonName:r.dungeonName,mode:r.mode,results:rt,rating:bw(it),victory:Jt,totalTime:L.current,maxCombo:je,bossHp:ge,playerHp:re,crystals:Math.round((it*82+(Jt?150:35))*Xn),insight:Math.round((it*46+(Jt?90:20))*Xn),xp:Math.round((it*72+(Jt?120:25))*Xn)}}const Et=()=>{const rt=A.current;if(he){Q(!0);return}if(!me&&x<_.length-1){M(Jt=>Jt+1),v("answering"),W(null),Gt(void 0),hn("");return}const it=ke(rt);Ti("complete",e.volume),t(it)};function Kt(){if(T!=="feedback")return;const rt=Ee.current,it=A.current.slice(0,-1);A.current=it,Ut(it),rt&&(H(rt.playerHp),ye(rt.bossHp),ve(rt.combo),Mt(rt.maxCombo),At(rt.shield));const Jt=(_t==null?void 0:_t.elapsed)??0;L.current=Math.max(0,L.current-Jt),Ee.current=null,nt.current=!1,W(null),j(0),p(E.id),v("answering"),C(hr(E)),P(hr(E)),Ti("click",e.volume),c("已撤回本题作答，可重新作答")}Ue.useEffect(()=>{if(T!=="feedback")return;const rt=window.setInterval(()=>j(it=>Math.max(0,it-1)),1e3);return()=>window.clearInterval(rt)},[T]),Ue.useEffect(()=>{T==="feedback"&&ce<=0&&Et()},[T,ce]);const Wn=()=>{if(!(yt||T!=="answering"||xt))if(gt(!0),Ti("skill",e.volume),E.type==="single"||E.type==="multiple"){const rt=E.options.find(it=>!E.answer.toString().includes(it.id));Gt(rt==null?void 0:rt.id),c(rt?`高斯消元已排除选项 ${rt.id}`:"高斯模块已分析本题")}else hn(E.keyStep),c("高斯模块已揭示一条关键步骤")},wr=()=>{Ht||T!=="answering"||xt||(qt(!0),C(rt=>rt+10),P(rt=>rt+10),Ti("skill",e.volume),c("欧拉延拓：本题剩余时间 +10 秒"))},is=()=>{Wt||T!=="answering"||xt||(Bt(!0),At(!0),Ti("skill",e.volume),c("柯西护盾已展开：可抵挡下一次错误损伤"))},Ns=()=>{M(0),v("answering"),C(hr(_[0])),P(hr(_[0])),I(null),N(0),G(!1),fe(0),q(null),Q(!1),H(100),ye(100),ve(0),Mt(0),At(!1),gt(!1),qt(!1),Bt(!1),Gt(void 0),hn(""),W(null),Ut([]),Pe(!1),L.current=0,A.current=[],nt.current=!1};function Ps(){q(null),fe(rt=>rt+1),c(`复活成功，剩余复活 ${El.limitPerStage-oe-1} 次`)}function mi(){K(rt=>rt+1),Ns()}function gi(){Q(!1),s()}return a.jsxs("main",{className:`battle-screen screen-enter ${xe?"is-berserk":""} ${$?"is-minimal":""} ${ct?`effect-${ct.kind} is-shaking`:""}`,children:[a.jsxs("div",{className:"battle-background",children:[a.jsx("div",{className:"battle-background__grid"}),a.jsx("div",{className:"battle-background__horizon"}),a.jsxs("div",{className:"battle-background__columns",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("div",{className:"battle-background__particles"})]}),a.jsxs("header",{className:"boss-header",children:[a.jsxs("div",{className:"boss-header__identity",children:[a.jsx("span",{className:"boss-header__emblem",children:a.jsx(de,{name:"cube",size:20})}),a.jsxs("div",{children:[a.jsx("small",{children:"ERROR MATRIX / BOSS"}),a.jsx("h2",{children:"错乱矩阵 · 秩之影"})]}),a.jsx(Yt,{tone:xe?"pink":"violet",children:xe?"BERSERK":"LV. 12"})]}),a.jsxs("div",{className:"boss-health",children:[a.jsxs("div",{className:"boss-health__meta",children:[a.jsx("span",{children:"维度稳定度"}),a.jsxs("b",{children:[ge," / 100"]})]}),a.jsx("div",{className:"boss-health__bar",children:Array.from({length:10},(rt,it)=>a.jsx("i",{className:ge>it*10?"is-filled":""},it))})]}),xe&&a.jsxs("div",{className:"boss-rage-label",children:[a.jsx(de,{name:"bolt",size:14})," 秩序崩溃 · 攻击形态重组"]})]}),a.jsxs("div",{className:"battle-progress",children:[a.jsx("div",{className:"battle-progress__nodes",children:_.map((rt,it)=>a.jsx("span",{className:it<x||it===x&&T==="feedback"?"is-complete":it===x?"is-current":"",children:it<x||it===x&&T==="feedback"?a.jsx(de,{name:"check",size:12}):it+1},rt.id))}),a.jsx("div",{className:"battle-timer",style:{"--timer-progress":`${Ce*360}deg`,"--timer-color":S<5?"#FB7185":Me.color},children:a.jsxs("div",{children:[a.jsx("strong",{children:Math.ceil(S)}),a.jsx("small",{children:"SEC"})]})}),a.jsxs("span",{className:"battle-progress__label",children:["第 ",x+1," / ",_.length," 题"]}),a.jsxs("button",{type:"button",className:`hud-toggle ${$?"is-active":""}`,onClick:()=>ie(rt=>!rt),"aria-pressed":$,children:[a.jsx(de,{name:"eye",size:14})," ",$?"展开完整 HUD":"精简 HUD"]})]}),a.jsxs("div",{className:"battle-arena",children:[a.jsxs("section",{className:`battle-question-card cut-corners ${k?"is-elite":""}`,style:{"--q-color":Me.color},children:[a.jsx("div",{className:"battle-question-card__scan"}),a.jsxs("header",{className:"battle-question-card__head",children:[a.jsxs("div",{className:"question-tags",children:[a.jsxs(Yt,{tone:Me.stars>=4?"gold":Me.stars===3?"pink":"cyan",children:[a.jsx(Eh,{count:Me.stars,color:Me.color})," ",Me.name]}),a.jsx(Yt,{tone:"violet",children:Td[ws(E)]}),a.jsx(Yt,{tone:"cyan",children:Bh[E.type]}),a.jsx(Yt,{tone:"muted",children:E.topic}),k&&a.jsx(Yt,{tone:"gold",children:"ELITE"})]}),a.jsxs("span",{className:"question-number",children:["Q.",String(x+1).padStart(2,"0")]})]}),a.jsxs("div",{className:"battle-question-card__content",children:[a.jsxs("div",{className:`battle-question-card__stem ${J?"is-expanded":""}`,children:[a.jsx("p",{className:"battle-question-card__prompt",children:E.prompt}),E.formula&&a.jsxs("div",{className:"formula-panel",children:[a.jsx("span",{children:"FORMULA"}),a.jsx("strong",{children:E.formula})]})]}),_e&&a.jsxs("button",{type:"button",className:"stem-toggle",onClick:()=>G(rt=>!rt),children:[a.jsx(de,{name:J?"chevron-up":"chevron-down",size:14}),J?"收起题干":"展开完整题干"]}),ln&&a.jsxs("div",{className:"hint-panel",children:[a.jsx(de,{name:"spark",size:16}),a.jsx("span",{children:ln})]}),a.jsx(Aw,{question:E,reviewed:T==="feedback",isCorrect:(_t==null?void 0:_t.correct)??!1,disabled:xt||T!=="answering",hintOption:Fn,onSubmit:(rt,it)=>Ke(rt,it)},E.id)]}),a.jsxs("footer",{className:"battle-question-card__foot",children:[a.jsxs("span",{children:["难度倍率 ×",Me.multiplier.toFixed(1)]}),a.jsx("i",{}),a.jsxs("span",{children:["答错损伤 ",Me.damage]}),a.jsx("i",{}),a.jsxs("span",{children:[hr(E),"s 基准时限"]})]})]}),a.jsxs("section",{className:"boss-stage","aria-label":"错乱矩阵 Boss",children:[a.jsx("div",{className:"boss-stage__orbit boss-stage__orbit--one"}),a.jsx("div",{className:"boss-stage__orbit boss-stage__orbit--two"}),a.jsxs("div",{className:"boss-stage__rings",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"boss-entity",children:[a.jsxs("svg",{viewBox:"0 0 360 360","aria-hidden":"true",children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:"bossGradient",x1:"0",y1:"0",x2:"1",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:"#F472D0"}),a.jsx("stop",{offset:".55",stopColor:"#8B5CF6"}),a.jsx("stop",{offset:"1",stopColor:"#67E8F9"})]}),a.jsxs("filter",{id:"bossGlow",children:[a.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),a.jsxs("feMerge",{children:[a.jsx("feMergeNode",{in:"blur"}),a.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),a.jsxs("g",{className:"boss-entity__outer",fill:"none",stroke:"url(#bossGradient)",strokeWidth:"1.2",children:[a.jsx("path",{d:"m180 24 124 66v124l-124 82L56 214V90Z",opacity:".32"}),a.jsx("path",{d:"m180 48 88 52v105l-88 59-88-59V100Z",opacity:".75",filter:"url(#bossGlow)"}),a.jsx("path",{d:"m180 93 51 29v66l-51 34-51-34v-66Z"}),a.jsx("path",{d:"m180 24 42 70-42 45-42-45Z",fill:"rgba(244,114,208,.08)"}),a.jsx("path",{d:"m304 90-82 28-42 45 82-22M56 90l82 28 42 45-82-22M180 328v-70l51-34 63-42M180 328v-70l-51-34-63-42",opacity:".42"})]}),a.jsx("g",{className:"boss-entity__matrix",fill:"#C084FC",children:Array.from({length:7},(rt,it)=>Array.from({length:5},(Jt,nn)=>a.jsx("circle",{cx:132+nn*24,cy:140+it*14,r:nn===it%5?2.4:1.3,opacity:nn===it%5?.95:.38},`${it}-${nn}`)))}),a.jsxs("g",{className:"boss-entity__shards",fill:"none",stroke:"#F472D0",opacity:".7",children:[a.jsx("path",{d:"m72 126 19 17-11 29-23-20Z"}),a.jsx("path",{d:"m293 132 20 24-21 20-16-27Z"}),a.jsx("path",{d:"m102 260 20 13-14 21-20-14Z"}),a.jsx("path",{d:"m269 265 13 21-21 14-14-20Z"})]})]}),a.jsx("span",{className:"boss-entity__core"}),a.jsx("span",{className:"boss-entity__eye"})]}),a.jsxs("div",{className:"boss-stage__caption",children:[a.jsx("span",{children:"ENTITY // RANK SHADOW"}),a.jsx("strong",{children:xe?"狂暴态 · 矩阵重组":"失衡态 · 维度侵蚀"}),a.jsx("small",{children:"RANK(A) ≠ dim(V)"})]}),ct&&a.jsxs("div",{className:`damage-number damage-number--${ct.kind}`,children:[ct.kind==="hit"?"−25":ct.kind==="hurt"?`−${Me.damage}`:"BLOCKED",a.jsx("small",{children:ct.kind==="hit"?"解析成功":ct.kind==="hurt"?"矩阵反噬":"柯西护盾"})]},ct.token),(ct==null?void 0:ct.kind)==="hit"&&a.jsx("div",{className:"particle-burst",children:Array.from({length:14},(rt,it)=>a.jsx("span",{style:{"--angle":`${it*(360/14)}deg`,"--distance":`${80+it%4*28}px`}},it))},`particle-${ct.token}`)]})]}),a.jsxs("aside",{className:"battle-player-status",children:[a.jsxs("div",{className:"battle-player-status__avatar",children:[a.jsxs("span",{className:"avatar-glyph",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("b",{children:y})]}),a.jsxs("div",{className:"battle-player-status__copy",children:[a.jsxs("span",{children:[a.jsx("strong",{children:Ne.name}),a.jsxs(Yt,{tone:"muted",children:["Lv.",y]})]}),a.jsxs("div",{className:"status-bar status-bar--hp",children:[a.jsx("i",{style:{width:`${re}%`}}),a.jsxs("em",{children:[re," / 100"]}),a.jsx(de,{name:"shield",size:13})]}),a.jsxs("div",{className:`battle-shield ${qe?"is-active":""}`,children:[a.jsx(de,{name:"shield",size:14}),a.jsx("span",{children:qe?"柯西护盾已就绪":"无护盾覆盖"})]})]}),a.jsxs("div",{className:"combo-meter",children:[a.jsx("span",{children:"COMBO"}),a.jsx("strong",{children:String(Re).padStart(2,"0")}),a.jsxs("em",{children:["×",De.toFixed(1)]})]})]}),a.jsxs("aside",{className:"skill-dock","aria-label":"辅助模块技能",children:[a.jsx("div",{className:"skill-dock__label",children:"AUX MODULES"}),a.jsxs("button",{type:"button",className:`skill-button ${yt?"is-used":""}`,disabled:yt||T!=="answering"||xt,onClick:Wn,children:[a.jsx("span",{className:"skill-button__ring",style:{"--skill-progress":yt?"100%":"0%"},children:a.jsx(de,{name:"matrix",size:22})}),a.jsxs("span",{children:[a.jsx("strong",{children:"高斯消元"}),a.jsx("small",{children:yt?"本场已使用":"排除错误项"})]}),a.jsx("em",{children:"1"})]}),a.jsxs("button",{type:"button",className:`skill-button ${Ht?"is-used":""}`,disabled:Ht||T!=="answering"||xt,onClick:wr,children:[a.jsx("span",{className:"skill-button__ring",style:{"--skill-progress":Ht?"100%":"0%"},children:a.jsx(de,{name:"rotate",size:22})}),a.jsxs("span",{children:[a.jsx("strong",{children:"欧拉延拓"}),a.jsx("small",{children:Ht?"本场已使用":"时间 +10 秒"})]}),a.jsx("em",{children:"2"})]}),a.jsxs("button",{type:"button",className:`skill-button ${Wt?"is-used":""} ${qe?"is-active":""}`,disabled:Wt||T!=="answering"||xt,onClick:is,children:[a.jsx("span",{className:"skill-button__ring",style:{"--skill-progress":Wt?"100%":"0%"},children:a.jsx(de,{name:"shield",size:22})}),a.jsxs("span",{children:[a.jsx("strong",{children:"柯西护盾"}),a.jsx("small",{children:qe?"护盾展开中":Wt?"本场已使用":"抵挡一次损伤"})]}),a.jsx("em",{children:"3"})]}),a.jsxs("div",{className:"skill-dock__hint",children:[a.jsx("kbd",{children:"H"})," 查看提示"]})]}),a.jsxs("div",{className:"battle-bottom-note",children:[a.jsx("span",{children:"ESC 暂停"}),a.jsx("i",{}),a.jsx("span",{children:"Enter 提交 · 结算前可撤回"}),a.jsx("i",{}),a.jsxs("span",{children:["复活 ×",El.limitPerStage," · 重刷 ×",wl.limitPerStage]}),a.jsx("i",{}),a.jsx("span",{children:r.mode==="challenge"?"挑战模式 · 奖励 ×1.5":"标准协议"})]}),T==="confirming"&&F&&a.jsxs("section",{className:"submit-confirm",role:"dialog","aria-live":"polite",children:[a.jsxs("div",{className:"submit-confirm__body",children:[a.jsx("span",{className:"submit-confirm__icon",children:a.jsx(de,{name:"help",size:22})}),a.jsxs("div",{className:"submit-confirm__copy",children:[a.jsx("small",{children:"CONFIRM SUBMIT"}),a.jsx("strong",{children:"确认提交此答案？"}),a.jsxs("p",{children:["你的答案：",F.display]})]})]}),a.jsxs("div",{className:"submit-confirm__actions",children:[a.jsx(dn,{variant:"ghost",onClick:ht,children:"返回修改"}),a.jsx(dn,{variant:"primary",onClick:we,children:"确认提交"})]})]}),T==="submitting"&&a.jsxs("section",{className:"submit-confirm is-withdraw",role:"dialog","aria-live":"polite",children:[a.jsxs("div",{className:"submit-confirm__body",children:[a.jsx("span",{className:"submit-confirm__icon",children:a.jsx(de,{name:"time",size:22})}),a.jsxs("div",{className:"submit-confirm__copy",children:[a.jsxs("small",{children:["SETTLING IN ",w,"s"]}),a.jsxs("strong",{children:["答案已锁定，",w," 秒内可撤回"]}),a.jsx("p",{children:"撤回后返回本关继续作答，不影响已过关卡。"})]})]}),a.jsx("div",{className:"submit-confirm__actions",children:a.jsx(dn,{variant:"ghost",onClick:Qe,children:"撤回修改"})})]}),_t&&a.jsxs("section",{className:`answer-feedback ${_t.correct?"is-correct":"is-wrong"} ${_t.shieldBlocked?"is-blocked":""}`,"aria-live":"polite",children:[a.jsx("div",{className:"answer-feedback__edge"}),a.jsxs("header",{className:"answer-feedback__header",children:[a.jsx("span",{className:"answer-feedback__icon",children:a.jsx(de,{name:_t.correct?"check":_t.shieldBlocked?"shield":"x",size:24})}),a.jsxs("div",{children:[a.jsx("small",{children:_t.timedOut?"TIME OUT // 解析中断":_t.correct?"PARSING SUCCESS":_t.shieldBlocked?"SHIELD ABSORBED":"PARSING FAILED"}),a.jsx("h3",{children:_t.correct?"解析成功":_t.shieldBlocked?"柯西护盾抵挡了反噬":_t.timedOut?"时间耗尽":"解析失败"})]}),a.jsxs("div",{className:"answer-feedback__outcome",children:[a.jsx("strong",{children:_t.correct?"−25":_t.playerDamage>0?`−${_t.playerDamage}`:"0"}),a.jsx("span",{children:_t.correct?"BOSS HP":"PLAYER HP"})]})]}),a.jsxs("div",{className:"answer-feedback__body",children:[a.jsxs("div",{className:"answer-feedback__facts",children:[a.jsxs("span",{children:[a.jsx("small",{children:"你的答案"}),a.jsx("b",{children:_t.selected})]}),a.jsxs("span",{children:[a.jsx("small",{children:"正确答案"}),a.jsx("b",{children:E.answerDisplay})]}),a.jsxs("span",{children:[a.jsx("small",{children:"本题用时"}),a.jsxs("b",{children:[_t.elapsed.toFixed(1),"s"]})]}),a.jsxs("span",{children:[a.jsx("small",{children:"连击倍率"}),a.jsxs("b",{children:["×",De.toFixed(1)]})]})]}),a.jsxs("div",{className:"answer-feedback__explain",children:[a.jsx("p",{children:E.explanation}),a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:15}),a.jsx("b",{children:"关键步骤"}),E.keyStep]}),a.jsxs("span",{children:[a.jsx(de,{name:"info",size:15}),a.jsx("b",{children:"易错点"}),E.pitfall]})]})]})]}),a.jsxs("footer",{className:"answer-feedback__footer",children:[a.jsxs("div",{className:"answer-feedback__countdown",children:[a.jsx("span",{className:"answer-feedback__countdown-num",children:ce}),a.jsx("span",{className:"answer-feedback__countdown-bar",children:a.jsx("i",{style:{width:`${ce/60*100}%`}})}),a.jsx("small",{children:"秒后自动下一题"})]}),a.jsxs("div",{className:"answer-feedback__actions",children:[a.jsx(dn,{variant:"ghost",onClick:Kt,icon:a.jsx(de,{name:"refresh",size:16}),children:"撤回题目"}),a.jsx(dn,{variant:"primary",onClick:Et,trailingIcon:a.jsx(de,{name:"arrow-right",size:18}),children:me?"查看结算":"直接下一题"})]})]})]}),((ct==null?void 0:ct.kind)==="hurt"||(ct==null?void 0:ct.kind)==="blocked")&&a.jsx("div",{className:`battle-vignette battle-vignette--${ct.kind}`},`vignette-${ct.token}`),(ct==null?void 0:ct.kind)==="hit"&&a.jsx("div",{className:"battle-hit-flash"},`flash-${ct.token}`),V&&a.jsx("section",{className:"revive-overlay",role:"dialog","aria-live":"polite","aria-modal":"true",children:a.jsxs("div",{className:"revive-card cut-corners",children:[a.jsxs("header",{className:"revive-card__head",children:[a.jsx("span",{className:"revive-card__icon",children:a.jsx(de,{name:"book",size:22})}),a.jsxs("div",{children:[a.jsx("small",{children:"REVIVE PROTOCOL"}),a.jsx("h3",{children:"复活任务 · 同类例题学习"})]})]}),a.jsx("div",{className:"revive-card__note",children:"答错达到阈值，学习下方同类型例题后即可返回本题重答（本次不计入错误）。"}),a.jsxs("div",{className:"revive-card__question",children:[a.jsxs("span",{className:"revive-card__tag",children:[Td[ws(V)]," · ",V.topic]}),a.jsx("p",{children:V.prompt}),V.formula&&a.jsxs("div",{className:"formula-panel",children:[a.jsx("span",{children:"FORMULA"}),a.jsx("strong",{children:V.formula})]}),a.jsxs("div",{className:"revive-card__answer",children:[a.jsx("span",{children:"正确答案"}),a.jsx("b",{children:V.answerDisplay})]}),a.jsx("p",{className:"revive-card__explain",children:V.explanation}),a.jsxs("div",{className:"revive-card__facts",children:[a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:14}),a.jsx("b",{children:"关键步骤"}),V.keyStep]}),a.jsxs("span",{children:[a.jsx(de,{name:"info",size:14}),a.jsx("b",{children:"易错点"}),V.pitfall]})]})]}),a.jsx("footer",{className:"revive-card__footer",children:a.jsx(dn,{variant:"primary",onClick:Ps,trailingIcon:a.jsx(de,{name:"arrow-right",size:18}),children:"完成学习，继续本题"})})]})}),D&&a.jsx("section",{className:"revive-overlay revive-overlay--defeat",role:"dialog","aria-live":"polite","aria-modal":"true",children:a.jsxs("div",{className:"revive-card cut-corners",children:[a.jsxs("header",{className:"revive-card__head",children:[a.jsx("span",{className:"revive-card__icon revive-card__icon--danger",children:a.jsx(de,{name:"x",size:22})}),a.jsxs("div",{children:[a.jsx("small",{children:"PARSING COLLAPSED"}),a.jsxs("h3",{children:[Ne.name,"生命归零"]})]})]}),a.jsx("div",{className:"revive-card__note",children:"本关解析中断。你可重刷本关继续挑战，重刷后本关进度重置、已获得的最高分保留。"}),a.jsxs("div",{className:"revive-card__facts",children:[a.jsxs("span",{children:[a.jsx(de,{name:"target",size:14}),a.jsxs("b",{children:["已答 ",x+1," / ",_.length," 题"]})]}),a.jsxs("span",{children:[a.jsx(de,{name:"refresh",size:14}),a.jsxs("b",{children:["剩余重刷 ",Math.max(0,wl.limitPerStage-Y)," 次"]})]})]}),a.jsxs("footer",{className:"revive-card__footer",children:[a.jsx(dn,{variant:"ghost",onClick:gi,children:"返回大世界"}),a.jsx(dn,{variant:"primary",disabled:Y>=wl.limitPerStage,onClick:mi,trailingIcon:a.jsx(de,{name:"refresh",size:18}),children:Y>=wl.limitPerStage?"重刷次数已用尽":"重刷本关"})]})]})}),xt&&a.jsxs(ts,{title:"战斗暂停",eyebrow:"PROTOCOL SUSPENDED",icon:"pause",onClose:()=>Pe(!1),className:"pause-modal",children:[a.jsxs("div",{className:"pause-summary",children:[a.jsxs("span",{children:[a.jsx("small",{children:"当前题目"}),a.jsxs("b",{children:[x+1," / ",_.length]})]}),a.jsxs("span",{children:[a.jsx("small",{children:"BOSS 稳定度"}),a.jsxs("b",{children:[ge,"%"]})]}),a.jsxs("span",{children:[a.jsx("small",{children:"当前连击"}),a.jsx("b",{children:Re})]})]}),a.jsxs("div",{className:"menu-list",children:[a.jsxs("button",{type:"button",onClick:()=>Pe(!1),children:[a.jsx(de,{name:"play",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"继续解析"}),a.jsx("small",{children:"返回当前题目"})]}),a.jsx("em",{children:"ESC"})]}),a.jsxs("button",{type:"button",onClick:Ns,children:[a.jsx(de,{name:"refresh",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"重新挑战"}),a.jsx("small",{children:"重置本题组与战斗状态"})]})]}),a.jsxs("button",{type:"button",onClick:()=>{Pe(!1),l()},children:[a.jsx(de,{name:"settings",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"系统设置"}),a.jsx("small",{children:"声音、动态与画质"})]})]}),a.jsxs("button",{type:"button",className:"is-danger",onClick:s,children:[a.jsx(de,{name:"arrow-left",size:19}),a.jsxs("span",{children:[a.jsx("strong",{children:"返回大世界"}),a.jsx("small",{children:"本次挑战进度不会结算"})]})]})]})]})]})}const Cw=["T1","T2","T3","T4","T5"],Nw=["single","multiple","boolean","numeric","matrix","order","match","hotspot"];function Pw({result:r,progress:e,onRetry:t,onReturnWorld:s}){const[l,c]=Ue.useState(!1),d=r.results.filter(E=>E.correct).length,p=r.results.length?Math.round(d/r.results.length*100):0,h=e.xp+r.xp,m=h>=1e3,y=Math.min(100,h%1e3/10),_=Math.floor(r.totalTime/60),x=Math.floor(r.totalTime%60),M=Array.from(new Set(r.results.filter(E=>!E.correct).map(E=>E.topic)));return Ue.useEffect(()=>{const E=window.setTimeout(()=>c(!0),250);return()=>window.clearTimeout(E)},[]),a.jsxs("main",{className:`result-screen screen-enter ${r.victory?"is-victory":"is-defeat"} rating-${r.rating}`,children:[a.jsxs("div",{className:"result-background",children:[a.jsx("div",{className:"result-background__rays"}),a.jsx("div",{className:"result-background__grid"}),a.jsx("div",{className:"result-particles",children:Array.from({length:28},(E,T)=>a.jsx("i",{style:{"--x":`${T*37%100}%`,"--delay":`${T%9*-.4}s`,"--size":`${2+T%4}px`}},T))})]}),a.jsxs("header",{className:"result-header",children:[a.jsxs("div",{className:"title-topbar__brand",children:[a.jsxs("span",{className:"mini-sigil",children:["M",a.jsx("span",{children:"P"})]}),a.jsxs("div",{children:[a.jsx("strong",{children:"PROTOCOL COMPLETE"}),a.jsx("small",{children:"DIMENSION REPORT"})]})]}),a.jsx(Yt,{tone:r.victory?"gold":"pink",children:r.victory?"副本已净化":"协议中断"})]}),a.jsxs("div",{className:"result-layout",children:[a.jsxs("section",{className:"result-rating",children:[a.jsx("p",{className:"eyebrow",children:"MISSION PERFORMANCE"}),a.jsxs("div",{className:"result-rating__ring",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("span",{children:r.rating})]}),a.jsx("h1",{children:r.victory?"解析完成":"解析失败"}),a.jsx("p",{children:r.victory?`矩阵稳定度已恢复，${r.dungeonName} 重新纳入秩序。`:"解析者生命归零或 BOSS 稳定度仍未清空，建议复盘错题后再次挑战。"}),a.jsxs("div",{className:"result-rating__meta",children:[a.jsx("span",{children:r.dungeonName}),a.jsx("i",{}),a.jsx("span",{children:r.mode==="challenge"?"挑战模式":"标准模式"})]}),m&&a.jsxs("div",{className:"level-up-banner",children:[a.jsx(de,{name:"spark",size:18}),a.jsxs("span",{children:[a.jsx("strong",{children:"解析者等级提升"}),a.jsxs("small",{children:["Lv.",e.level," → Lv.",e.level+1]})]})]})]}),a.jsxs("section",{className:"result-dashboard",children:[a.jsxs("div",{className:"result-stat-grid",children:[a.jsxs("div",{children:[a.jsx("span",{className:"result-stat-icon result-stat-icon--cyan",children:a.jsx(de,{name:"target",size:19})}),a.jsx("small",{children:"正确率"}),a.jsxs("strong",{children:[p,"%"]}),a.jsxs("em",{children:[d," / ",r.results.length," 题"]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"result-stat-icon result-stat-icon--violet",children:a.jsx(de,{name:"time",size:19})}),a.jsx("small",{children:"总用时"}),a.jsxs("strong",{children:[_,":",String(x).padStart(2,"0")]}),a.jsxs("em",{children:["平均 ",(r.totalTime/Math.max(1,r.results.length)).toFixed(1),"s"]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"result-stat-icon result-stat-icon--pink",children:a.jsx(de,{name:"bolt",size:19})}),a.jsx("small",{children:"最高连击"}),a.jsx("strong",{children:r.maxCombo}),a.jsxs("em",{children:["倍率 ×",Math.min(2,1+r.maxCombo*.2).toFixed(1)]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"result-stat-icon result-stat-icon--gold",children:a.jsx(de,{name:"trophy",size:19})}),a.jsx("small",{children:"BOSS 剩余"}),a.jsxs("strong",{children:[r.bossHp,"%"]}),a.jsx("em",{children:r.bossHp===0?"稳定度归零":"仍需继续解析"})]})]}),a.jsxs("div",{className:"result-rewards",children:[a.jsxs("div",{className:"result-rewards__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"crystal",size:18})," 协议奖励"]}),a.jsx(Yt,{tone:"gold",children:r.mode==="challenge"?"×1.5":"STANDARD"})]}),a.jsxs("div",{className:"result-rewards__items",children:[a.jsxs("span",{children:[a.jsx(de,{name:"crystal",size:22}),a.jsx("em",{children:"矩阵结晶"}),a.jsxs("b",{children:["+",r.crystals]})]}),a.jsxs("span",{children:[a.jsx(de,{name:"bolt",size:22}),a.jsx("em",{children:"秩能"}),a.jsxs("b",{children:["+",r.insight]})]}),a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:22}),a.jsx("em",{children:"解析者经验"}),a.jsxs("b",{children:["+",r.xp]})]})]}),a.jsxs("div",{className:"result-xp",children:[a.jsxs("span",{children:["Lv.",e.level+(m?1:0)]}),a.jsx("i",{children:a.jsx("u",{style:{width:l?`${y}%`:"0%"}})}),a.jsxs("em",{children:[m?h-1e3:h," / 1,000 XP"]})]})]})]})]}),a.jsxs("div",{className:"result-breakdown",children:[a.jsxs("section",{className:"result-breakdown__panel",children:[a.jsxs("div",{className:"result-breakdown__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"star",size:17})," 难度战绩"]}),a.jsx("small",{children:"按难度拆分"})]}),a.jsx("div",{className:"difficulty-breakdown",children:Cw.map(E=>{const T=r.results.filter(S=>S.difficulty===E);if(T.length===0)return null;const v=T.filter(S=>S.correct).length;return a.jsxs("span",{style:{"--break-color":_h[E].color},children:[a.jsx("i",{}),a.jsx("em",{children:_h[E].name}),a.jsxs("b",{children:[v,"/",T.length]}),a.jsx("u",{children:a.jsx("span",{style:{width:`${v/T.length*100}%`}})})]},E)})})]}),a.jsxs("section",{className:"result-breakdown__panel",children:[a.jsxs("div",{className:"result-breakdown__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"matrix",size:17})," 题型战绩"]}),a.jsx("small",{children:"掌握度分析"})]}),a.jsx("div",{className:"type-breakdown",children:Nw.filter(E=>r.results.some(T=>T.type===E)).map(E=>{const T=r.results.filter(S=>S.type===E),v=T.filter(S=>S.correct).length;return a.jsxs("span",{className:v===T.length?"is-perfect":"",children:[a.jsx("em",{children:Bh[E]}),a.jsxs("b",{children:[v,"/",T.length]}),a.jsx("i",{children:v===T.length?"掌握":"需复习"})]},E)})})]})]}),M.length>0&&a.jsxs("div",{className:"result-review",children:[a.jsx(de,{name:"info",size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"建议复盘知识点"}),a.jsx("p",{children:M.join(" · ")})]}),a.jsx("span",{children:"返回大世界后可再次进入副本"})]}),a.jsxs("footer",{className:"result-footer",children:[a.jsxs("div",{className:"result-footer__note",children:[a.jsx("i",{}),a.jsx("span",{children:"评级与最佳记录已写入本地存档"}),a.jsx("i",{})]}),a.jsxs("div",{className:"result-actions",children:[a.jsx(dn,{size:"lg",icon:a.jsx(de,{name:"rotate",size:18}),onClick:t,children:"再次挑战"}),a.jsx(dn,{variant:"primary",size:"lg",icon:a.jsx(de,{name:"arrow-left",size:18}),onClick:s,children:"返回大世界"})]}),a.jsxs("div",{className:"result-footer__build",children:[a.jsx("span",{children:"BUILD 0.1.0"}),a.jsx("i",{}),a.jsx("span",{children:"MATRIX PROTOCOL / RESULT TERMINAL"})]})]})]})}function Lw({onExit:r}){const e=Ue.useMemo(()=>E_(),[]),[t,s]=Ue.useState({}),[l,c]=Ue.useState(!1),d=e.filter(_=>t[_.id]!==void 0&&t[_.id]!==null).length,p=e.filter(_=>ic(_,t[_.id]??null)).length,h=e.length?Math.round(p/e.length*100):0,m=Array.from(new Set(e.map(_=>_.year).filter(_=>typeof _=="number"))).sort((_,x)=>_-x);function y(_,x){const M=l&&ic(_,x),E={value:x,onChange:T=>s(v=>({...v,[_.id]:T})),disabled:l,reviewed:l,isCorrect:M};switch(_.type){case"single":return a.jsx(R0,{question:_,...E});case"multiple":return a.jsx(T0,{question:_,...E});case"boolean":return a.jsx(S0,{question:_,...E});case"numeric":return a.jsx(A0,{question:_,...E});case"matrix":return a.jsx(w0,{question:_,...E});case"order":return a.jsx(b0,{question:_,...E});case"match":return a.jsx(E0,{question:_,...E});case"hotspot":return a.jsx(M0,{question:_,...E});default:return null}}return a.jsxs("main",{className:"exam-screen screen-enter",children:[a.jsx("div",{className:"exam-background",children:a.jsx("div",{className:"exam-background__grid"})}),a.jsxs("header",{className:"exam-header",children:[a.jsxs("div",{className:"exam-header__brand",children:[a.jsxs("span",{className:"mini-sigil",children:["M",a.jsx("span",{children:"P"})]}),a.jsxs("div",{children:[a.jsx("strong",{children:"MOCK EXAM"}),a.jsx("small",{children:"往年期末模拟考场"})]})]}),a.jsxs("div",{className:"exam-header__meta",children:[a.jsxs(Yt,{tone:e.length>0?"cyan":"muted",children:[e.length," 题"]}),a.jsxs("span",{children:["卷别 ",m.length?m.join(" / "):"—"," 级"]})]}),a.jsx("div",{className:"exam-header__actions",children:a.jsx(dn,{variant:"ghost",onClick:r,children:"退出考场"})})]}),e.length===0?a.jsxs("section",{className:"exam-empty",children:[a.jsx(de,{name:"book",size:40}),a.jsx("h2",{children:"模拟题库接入中"}),a.jsx("p",{children:"暂无往年期末模拟题（is_mock_exam=true）。请在题库中补充带有 source 与 year 的题目。"}),a.jsx(dn,{variant:"primary",onClick:r,trailingIcon:a.jsx(de,{name:"arrow-right",size:18}),children:"返回"})]}):a.jsxs("div",{className:"exam-body",children:[a.jsxs("section",{className:"exam-intro",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"线性代数 · 往年期末模拟"}),a.jsx("p",{children:"按年份组卷，交卷后即时出分并展示逐题解析；成绩仅供自测，不计入主线闯关进度。"})]}),a.jsxs("div",{className:"exam-intro__stats",children:[a.jsxs("span",{children:[a.jsx("small",{children:"已作答"}),a.jsxs("b",{children:[d," / ",e.length]})]}),l&&a.jsxs("span",{children:[a.jsx("small",{children:"得分"}),a.jsx("b",{children:h})]}),l&&a.jsxs("span",{children:[a.jsx("small",{children:"答对"}),a.jsxs("b",{children:[p," / ",e.length]})]})]})]}),a.jsx("section",{className:"exam-question-list",children:e.map((_,x)=>{const M=t[_.id]??null,E=l&&ic(_,M);return a.jsxs("article",{className:`exam-question ${l?E?"is-correct":"is-wrong":""}`,children:[a.jsxs("header",{className:"exam-question__head",children:[a.jsxs("span",{className:"exam-question__no",children:["第 ",x+1," 题"]}),a.jsxs("div",{className:"question-tags",children:[a.jsx(Yt,{tone:"violet",children:Td[ws(_)]}),a.jsx(Yt,{tone:"muted",children:_.topic}),a.jsxs(Yt,{tone:"cyan",children:[_.source??"往年卷"," · ",_.year??"—"]}),a.jsx(Eh,{count:_.difficulty==="T1"?1:_.difficulty==="T2"?2:_.difficulty==="T3"?3:_.difficulty==="T4"?4:5})]})]}),a.jsx("p",{className:"exam-question__prompt",children:_.prompt}),_.formula&&a.jsxs("div",{className:"formula-panel",children:[a.jsx("span",{children:"FORMULA"}),a.jsx("strong",{children:_.formula})]}),a.jsx("div",{className:"exam-question__input",children:y(_,M)}),l&&a.jsxs("div",{className:`exam-question__review ${E?"is-correct":"is-wrong"}`,children:[a.jsxs("div",{className:"exam-question__verdict",children:[a.jsx(de,{name:E?"check":"x",size:16}),a.jsx("b",{children:E?"作答正确":"作答有误"}),a.jsxs("em",{children:["正确答案：",_.answerDisplay]})]}),a.jsx("p",{children:_.explanation}),a.jsxs("div",{className:"exam-question__facts",children:[a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:14}),a.jsx("b",{children:"关键步骤"}),_.keyStep]}),a.jsxs("span",{children:[a.jsx(de,{name:"info",size:14}),a.jsx("b",{children:"易错点"}),_.pitfall]})]})]})]},_.id)})}),a.jsxs("footer",{className:"exam-footer",children:[a.jsx("span",{children:l?`本卷得分 ${h} 分，正确 ${p}/${e.length} 题。`:`已作答 ${d}/${e.length} 题。`}),l?a.jsx(dn,{variant:"primary",onClick:()=>{c(!1),s({})},trailingIcon:a.jsx(de,{name:"refresh",size:18}),children:"重做本卷"}):a.jsx(dn,{variant:"primary",disabled:d<e.length,onClick:()=>c(!0),trailingIcon:a.jsx(de,{name:"arrow-right",size:18}),children:d<e.length?`还有 ${e.length-d} 题未答`:"交卷"})]})]})]})}function Dw({initialId:r,onConfirm:e,onBack:t}){const[s,l]=Ue.useState(r),c=ma.find(d=>d.id===s)??ma[0];return a.jsxs("main",{className:"select-screen screen-enter",children:[a.jsx("div",{className:"select-background"}),a.jsxs("header",{className:"select-header",children:[a.jsxs("button",{type:"button",className:"select-header__back",onClick:t,children:[a.jsx(de,{name:"arrow-left",size:18})," 返回标题"]}),a.jsxs("div",{className:"select-header__title",children:[a.jsxs("span",{className:"mini-sigil",children:["M",a.jsx("span",{children:"P"})]}),a.jsxs("div",{children:[a.jsx("strong",{children:"SELECT ANALYST"}),a.jsx("small",{children:"选择你的解析者"})]})]}),a.jsx("div",{className:"select-header__spacer"})]}),a.jsxs("div",{className:"select-body",children:[a.jsx("div",{className:"select-grid",children:ma.map(d=>{const p=d.id===s;return a.jsxs("button",{type:"button",className:`select-card ${p?"is-active":""}`,onClick:()=>l(d.id),children:[a.jsx("div",{className:"select-card__stage",children:a.jsx(kh,{accent:d.accent,mesh:d.mesh,palette:d.palette,height:340,autoRotate:!0})}),a.jsxs("div",{className:"select-card__info",children:[a.jsx("span",{className:"select-card__name",children:d.name}),a.jsx(Yt,{tone:"muted",children:d.title}),a.jsx("p",{children:d.persona}),a.jsxs("em",{children:["“",d.quote,"”"]})]}),a.jsx("span",{className:`select-card__check ${p?"is-on":""}`,children:p?a.jsx(de,{name:"check",size:16}):"选择"})]},d.id)})}),a.jsxs("footer",{className:"select-footer",children:[a.jsxs("div",{className:"select-footer__hint",children:[a.jsx(de,{name:"spark",size:15}),a.jsxs("span",{children:["已选 ",a.jsx("b",{children:c.name})," · 进入后可在设置中重新选择"]})]}),a.jsxs("div",{className:"select-footer__actions",children:[a.jsx(dn,{variant:"ghost",onClick:t,children:"返回"}),a.jsx(dn,{variant:"primary",onClick:()=>e(c.id),trailingIcon:a.jsx(de,{name:"play",size:18}),children:"以此角色开始"})]})]})]})]})}function Iw({dungeon:r,mode:e,bestRating:t,onModeChange:s,onClose:l,onEnter:c}){const d=e==="standard"?20:e==="challenge"?30:0,p=e==="practice"?"不计分":e==="standard"?"320–480":"560–820",h=e==="practice"?"不计分":e==="standard"?"420":"680";return a.jsxs(ts,{title:r.name,eyebrow:`DOMAIN ${r.id.toUpperCase()}`,icon:r.locked?"lock":"cube",onClose:l,className:"dungeon-modal",footer:a.jsxs("div",{className:"dungeon-modal__footer",children:[a.jsxs("div",{className:"dungeon-modal__cost",children:[a.jsx(de,{name:"bolt",size:16}),a.jsx("span",{children:"消耗算力"}),a.jsx("strong",{children:d}),a.jsx("em",{children:"/ 110 可用"})]}),a.jsxs("div",{className:"dungeon-modal__footer-actions",children:[a.jsx(dn,{variant:"ghost",onClick:l,children:"返回"}),a.jsx(dn,{variant:"primary",disabled:r.locked,onClick:c,trailingIcon:a.jsx(de,{name:r.locked?"lock":"arrow-right",size:18}),children:r.locked?`等级 ${r.level} 解锁`:"进入副本"})]})]}),children:[a.jsxs("div",{className:"dungeon-hero",style:{"--dungeon-color":r.color},children:[a.jsxs("div",{className:"dungeon-hero__sigil",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"dungeon-hero__copy",children:[a.jsx(Yt,{tone:r.locked?"muted":"cyan",children:r.subtitle}),a.jsx("h3",{children:r.name}),a.jsx("p",{children:r.topic}),a.jsxs("div",{className:"dungeon-hero__meta",children:[a.jsxs("span",{children:[a.jsx(de,{name:"target",size:15})," 推荐等级 ",a.jsxs("b",{children:["Lv.",r.level]})]}),a.jsxs("span",{children:[a.jsx(de,{name:"time",size:15})," 预计用时 ",a.jsxs("b",{children:[e==="practice"?"不限时":e==="standard"?"6–8":"9–12"," 分钟"]})]}),a.jsxs("span",{children:[a.jsx(de,{name:"star",size:15})," 历史最佳 ",a.jsx("b",{className:`rating-text rating-text--${t??"none"}`,children:t??"—"})]})]})]})]}),a.jsxs("div",{className:"mode-switch",role:"radiogroup","aria-label":"副本模式",children:[a.jsxs("button",{type:"button",role:"radio","aria-checked":e==="standard",className:e==="standard"?"is-active":"",onClick:()=>s("standard"),children:[a.jsx("span",{className:"mode-switch__icon",children:a.jsx(de,{name:"cube",size:21})}),a.jsxs("span",{children:[a.jsx("strong",{children:"标准模式"}),a.jsx("small",{children:_g.standard})]}),a.jsx("em",{children:"推荐"})]}),a.jsxs("button",{type:"button",role:"radio","aria-checked":e==="challenge",className:e==="challenge"?"is-active":"",onClick:()=>s("challenge"),children:[a.jsx("span",{className:"mode-switch__icon",children:a.jsx(de,{name:"bolt",size:21})}),a.jsxs("span",{children:[a.jsx("strong",{children:"挑战模式"}),a.jsx("small",{children:_g.challenge})]}),a.jsx("em",{children:"×1.5 奖励"})]}),a.jsxs("button",{type:"button",role:"radio","aria-checked":e==="practice",className:e==="practice"?"is-active":"",onClick:()=>s("practice"),children:[a.jsx("span",{className:"mode-switch__icon",children:a.jsx(de,{name:"book",size:21})}),a.jsxs("span",{children:[a.jsx("strong",{children:"练习模式"}),a.jsx("small",{children:"不计时 · 不计分 · 可反复刷"})]}),a.jsx("em",{children:"不计时"})]})]}),a.jsxs("div",{className:"dungeon-info-grid",children:[a.jsxs("section",{className:"dungeon-info-card",children:[a.jsxs("div",{className:"dungeon-info-card__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"target",size:17})," 题目构成"]}),a.jsx(Eh,{count:e==="challenge"?5:4,color:r.color})]}),a.jsx("div",{className:"composition-list",children:(e==="challenge"?[["入门",1],["普通",1],["进阶",1],["困难",1],["精英",1]]:[["入门",2],["普通",2],["困难",1]]).map(([m,y])=>a.jsxs("span",{children:[a.jsx("i",{}),m,a.jsxs("b",{children:["×",y]})]},String(m)))}),a.jsx("p",{children:"共 5 题。答对造成 25 点矩阵损伤，答错或超时按难度扣除生命。"})]}),a.jsxs("section",{className:"dungeon-info-card",children:[a.jsxs("div",{className:"dungeon-info-card__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"crystal",size:17})," 协议奖励"]}),a.jsx(Yt,{tone:"gold",children:"PREVIEW"})]}),a.jsxs("div",{className:"reward-list",children:[a.jsxs("span",{children:[a.jsx(de,{name:"crystal",size:18}),a.jsx("em",{children:"矩阵结晶"}),a.jsx("b",{children:p})]}),a.jsxs("span",{children:[a.jsx(de,{name:"bolt",size:18}),a.jsx("em",{children:"秩能"}),a.jsx("b",{children:h})]}),a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:18}),a.jsx("em",{children:"解析者经验"}),a.jsx("b",{children:e==="standard"?"350":"525"})]})]}),t&&a.jsxs("p",{className:"best-record",children:["历史最佳评级 ",a.jsx("b",{className:`rating-text rating-text--${t}`,children:t})," · 继续保持解析效率。"]})]})]}),r.locked&&a.jsxs("div",{className:"locked-notice",children:[a.jsx(de,{name:"lock",size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:"该维度尚未解锁"}),a.jsxs("p",{children:["解析者等级达到 Lv.",r.level," 后可进入。继续完成现有副本以获取秩能。"]})]})]})]})}function Uw({progress:r,character:e,onClose:t}){return a.jsxs(ts,{title:`${e.name}档案`,eyebrow:"ARCHITECT PROFILE",icon:"user",onClose:t,className:"character-panel",children:[a.jsxs("div",{className:"character-hero",children:[a.jsxs("div",{className:"character-avatar-3d",children:[a.jsx(kh,{accent:e.accent,mesh:e.mesh,palette:e.palette,height:230}),a.jsx("b",{className:"character-avatar-3d__level",children:r.level})]}),a.jsxs("div",{className:"character-identity",children:[a.jsx(Yt,{tone:"cyan",children:"RANK II"}),a.jsxs("h3",{children:[e.name," ",a.jsxs("span",{children:["// ",e.role]})]}),a.jsx("p",{children:e.persona}),a.jsxs("p",{className:"character-quote",children:["“",e.quote,"”"]}),a.jsxs("div",{className:"character-points",children:[a.jsxs("span",{children:[a.jsx("small",{children:"秩阶"}),a.jsx("b",{children:e.title})]}),a.jsxs("span",{children:[a.jsx("small",{children:"解析力"}),a.jsx("b",{children:"1,842"})]}),a.jsxs("span",{children:[a.jsx("small",{children:"完成副本"}),a.jsx("b",{children:r.totalRuns})]})]})]})]}),a.jsxs("div",{className:"character-grid",children:[a.jsxs("section",{className:"panel-card",children:[a.jsx("div",{className:"panel-card__head",children:a.jsxs("span",{children:[a.jsx(de,{name:"target",size:17})," 核心属性"]})}),a.jsxs("div",{className:"stat-rows",children:[a.jsxs("span",{children:[a.jsx("em",{children:"生命上限"}),a.jsx("b",{children:"100"}),a.jsx("i",{children:a.jsx("u",{style:{width:"100%"}})})]}),a.jsxs("span",{children:[a.jsx("em",{children:"算力容量"}),a.jsx("b",{children:r.maxCompute}),a.jsx("i",{children:a.jsx("u",{style:{width:"74%"}})})]}),a.jsxs("span",{children:[a.jsx("em",{children:"解析精度"}),a.jsx("b",{children:"86%"}),a.jsx("i",{children:a.jsx("u",{style:{width:"86%"}})})]}),a.jsxs("span",{children:[a.jsx("em",{children:"连击稳定"}),a.jsx("b",{children:"72%"}),a.jsx("i",{children:a.jsx("u",{style:{width:"72%"}})})]})]})]}),a.jsxs("section",{className:"panel-card",children:[a.jsxs("div",{className:"panel-card__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"cube",size:17})," 矩阵装备"]}),a.jsx(Yt,{tone:"muted",children:"2 / 4"})]}),a.jsxs("div",{className:"equipment-grid",children:[a.jsxs("span",{className:"is-equipped",children:[a.jsx(de,{name:"matrix",size:23}),a.jsx("small",{children:"秩之棱镜"}),a.jsx("em",{children:"Lv.12"})]}),a.jsxs("span",{className:"is-equipped",children:[a.jsx(de,{name:"compass",size:23}),a.jsx("small",{children:"向量罗盘"}),a.jsx("em",{children:"Lv.10"})]}),a.jsxs("span",{children:[a.jsx(de,{name:"plus",size:20}),a.jsx("small",{children:"空槽位"}),a.jsx("em",{children:"未装配"})]}),a.jsxs("span",{children:[a.jsx(de,{name:"plus",size:20}),a.jsx("small",{children:"空槽位"}),a.jsx("em",{children:"未装配"})]})]})]})]}),a.jsxs("section",{className:"panel-card character-skills",children:[a.jsxs("div",{className:"panel-card__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"bolt",size:17})," 协议技能"]}),a.jsx(Yt,{tone:"violet",children:"3 SKILLS"})]}),a.jsxs("div",{className:"skill-list",children:[a.jsxs("div",{children:[a.jsx("span",{className:"skill-icon",children:a.jsx(de,{name:"matrix",size:20})}),a.jsxs("span",{children:[a.jsx("strong",{children:"高斯消元"}),a.jsx("small",{children:"排除一个错误选项，或揭示关键步骤"})]}),a.jsx("em",{children:"每场 1 次"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"skill-icon skill-icon--pink",children:a.jsx(de,{name:"rotate",size:20})}),a.jsxs("span",{children:[a.jsx("strong",{children:"欧拉延拓"}),a.jsx("small",{children:"当前题目剩余时间增加 10 秒"})]}),a.jsx("em",{children:"每场 1 次"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"skill-icon skill-icon--cyan",children:a.jsx(de,{name:"shield",size:20})}),a.jsxs("span",{children:[a.jsx("strong",{children:"柯西护盾"}),a.jsx("small",{children:"抵挡下一次答错造成的生命损伤"})]}),a.jsx("em",{children:"每场 1 次"})]})]})]})]})}const Fw=[{id:"theorem",label:"定理",code:"THEOREMS"},{id:"matrix",label:"矩阵",code:"MATRICES"},{id:"enemy",label:"敌人",code:"ENTITIES"}],yg={theorem:[{icon:"matrix",title:"秩—零化度定理",subtitle:"dim N(A) + rank(A) = n",locked:!1,rarity:"基础定理"},{icon:"spark",title:"谱定理",subtitle:"实对称矩阵可正交对角化",locked:!1,rarity:"核心定理"},{icon:"cube",title:"凯莱—哈密顿定理",subtitle:"矩阵满足自身特征多项式",locked:!0,rarity:"进阶定理"}],matrix:[{icon:"shield",title:"正交矩阵",subtitle:"AᵀA = AAᵀ = I",locked:!1,rarity:"矩阵原型"},{icon:"bolt",title:"幂等矩阵",subtitle:"A² = A",locked:!0,rarity:"矩阵原型"},{icon:"target",title:"正定矩阵",subtitle:"所有顺序主子式为正",locked:!0,rarity:"矩阵原型"}],enemy:[{icon:"cube",title:"错乱矩阵·秩之影",subtitle:"零空间原野的秩序侵蚀体",locked:!1,rarity:"首领"},{icon:"target",title:"缺失基向量",subtitle:"在回廊中游荡的维度残片",locked:!0,rarity:"精英"},{icon:"spark",title:"特征值幽灵",subtitle:"尚未观测到的深渊实体",locked:!0,rarity:"未知"}]};function Ow({onClose:r,onNotify:e}){const[t,s]=Ue.useState("theorem"),l=Object.values(yg).flat().filter(c=>!c.locked).length;return a.jsxs(ts,{title:"矩阵图鉴",eyebrow:"MATRIX ARCHIVE",icon:"book",onClose:r,className:"codex-panel",children:[a.jsxs("div",{className:"codex-summary",children:[a.jsxs("div",{children:[a.jsx("span",{className:"codex-summary__sigil",children:a.jsx(de,{name:"book",size:24})}),a.jsxs("p",{children:[a.jsxs("strong",{children:["已收录 ",l," / 9"]}),a.jsx("small",{children:"继续探索副本以补全矩阵大陆的解析记录"})]})]}),a.jsxs("div",{className:"codex-progress",children:[a.jsx("i",{style:{width:`${l/9*100}%`}}),a.jsxs("span",{children:[Math.round(l/9*100),"%"]})]})]}),a.jsx("div",{className:"codex-tabs",role:"tablist","aria-label":"图鉴分类",children:Fw.map(c=>a.jsxs("button",{type:"button",role:"tab","aria-selected":t===c.id,className:t===c.id?"is-active":"",onClick:()=>s(c.id),children:[a.jsx("span",{children:c.label}),a.jsx("small",{children:c.code})]},c.id))}),a.jsx("div",{className:"codex-grid",children:yg[t].map(c=>a.jsxs("button",{type:"button",className:`codex-card ${c.locked?"is-locked":""}`,onClick:()=>c.locked?e("该图鉴条目尚未解锁"):e(`已展开「${c.title}」档案预览`),children:[a.jsxs("span",{className:"codex-card__visual",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx(de,{name:c.locked?"lock":c.icon,size:36})]}),a.jsxs("span",{className:"codex-card__copy",children:[a.jsx(Yt,{tone:c.locked?"muted":"violet",children:c.rarity}),a.jsx("strong",{children:c.locked?"未知记录":c.title}),a.jsx("small",{children:c.locked?"在矩阵大陆中继续探索以解锁":c.subtitle})]}),a.jsx("span",{className:"codex-card__corner"})]},c.title))}),a.jsxs("p",{className:"codex-footnote",children:[a.jsx(de,{name:"info",size:15})," 图鉴内容会随版本更新扩展。当前原型展示基础档案结构。"]})]})}function kw(r){const e=new Date(r),t=s=>String(s).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}`}function Bw({records:r,onClose:e}){const[t,s]=Ue.useState("all"),[l,c]=Ue.useState("all"),d=Ue.useMemo(()=>Array.from(new Set(r.map(h=>h.dungeonId))),[r]),p=Ue.useMemo(()=>r.filter(h=>!(t==="correct"&&(!h.correct||h.withdrawn)||t==="wrong"&&(h.correct||h.withdrawn)||t==="withdrawn"&&!h.withdrawn||l!=="all"&&h.dungeonId!==l)),[r,t,l]);return a.jsxs(ts,{title:"答题记录",eyebrow:"ANSWER HISTORY",icon:"book",onClose:e,className:"history-panel",children:[a.jsxs("div",{className:"history-toolbar",children:[a.jsx("div",{className:"history-filters",role:"group","aria-label":"筛选正误",children:[{id:"all",label:"全部"},{id:"correct",label:"答对"},{id:"wrong",label:"答错"},{id:"withdrawn",label:"已撤回"}].map(h=>a.jsx("button",{type:"button",className:t===h.id?"is-active":"",onClick:()=>s(h.id),children:h.label},h.id))}),a.jsxs("select",{className:"history-dungeon-select",value:l,onChange:h=>c(h.target.value),"aria-label":"按副本筛选",children:[a.jsx("option",{value:"all",children:"全部副本"}),d.map(h=>{var m;return a.jsx("option",{value:h,children:((m=r.find(y=>y.dungeonId===h))==null?void 0:m.dungeonName)??h},h)})]}),a.jsxs("span",{className:"history-count",children:["共 ",p.length," 条"]})]}),p.length===0?a.jsxs("div",{className:"history-empty",children:[a.jsx(de,{name:"book",size:34}),a.jsx("p",{children:"暂无答题记录"})]}):a.jsx("div",{className:"history-list",children:p.map(h=>a.jsxs("article",{className:`history-item ${h.withdrawn?"is-withdrawn":h.correct?"is-correct":"is-wrong"}`,children:[a.jsxs("header",{className:"history-item__head",children:[a.jsxs("span",{className:"history-item__verdict",children:[a.jsx(de,{name:h.withdrawn?"refresh":h.correct?"check":"x",size:15}),a.jsx("b",{children:h.withdrawn?"已撤回":h.correct?"正确":"错误"})]}),a.jsxs("div",{className:"history-item__tags",children:[a.jsx(Yt,{tone:"violet",children:Bh[h.snapshot.type]}),a.jsx(Yt,{tone:"muted",children:h.snapshot.topic}),a.jsx(Yt,{tone:"cyan",children:h.dungeonName})]}),a.jsxs("span",{className:"history-item__time",children:[kw(h.timestamp)," · 第 ",h.attemptIndex+1," 次"]})]}),a.jsx("p",{className:"history-item__prompt",children:h.snapshot.prompt}),h.snapshot.formula&&a.jsxs("div",{className:"formula-panel",children:[a.jsx("span",{children:"FORMULA"}),a.jsx("strong",{children:h.snapshot.formula})]}),a.jsxs("div",{className:"history-item__answers",children:[a.jsxs("span",{children:[a.jsx("small",{children:"你的答案"}),a.jsx("b",{children:h.selectedAnswer||"—"})]}),a.jsxs("span",{children:[a.jsx("small",{children:"正确答案"}),a.jsx("b",{children:h.correctAnswer})]})]}),a.jsxs("div",{className:"history-item__explain",children:[a.jsx("p",{children:h.snapshot.explanation}),a.jsxs("div",{className:"history-item__facts",children:[a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:14}),a.jsx("b",{children:"关键步骤"}),h.snapshot.keyStep]}),a.jsxs("span",{children:[a.jsx(de,{name:"info",size:14}),a.jsx("b",{children:"易错点"}),h.snapshot.pitfall]})]})]})]},h.id))})]})}function jw({settings:r,onChange:e,onClose:t,onResetProgress:s}){return a.jsxs(ts,{title:"系统设置",eyebrow:"SYSTEM CONFIG",icon:"settings",onClose:t,className:"settings-panel",children:[a.jsxs("section",{className:"settings-section",children:[a.jsxs("div",{className:"settings-section__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"volume",size:18})," 声音"]}),a.jsxs("b",{children:[r.volume,"%"]})]}),a.jsxs("div",{className:"volume-control",children:[a.jsx(de,{name:"minus",size:16}),a.jsx("input",{type:"range",min:"0",max:"100",value:r.volume,"aria-label":"音量",style:{"--volume":`${r.volume}%`},onChange:l=>e({...r,volume:Number(l.target.value)})}),a.jsx(de,{name:"volume",size:18})]}),a.jsx("p",{children:"用于界面确认、答题判定与战斗反馈音效。当前原型使用浏览器合成音，不加载外部音频。"})]}),a.jsxs("section",{className:"settings-section",children:[a.jsxs("div",{className:"settings-section__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"eye",size:18})," 动态效果"]}),a.jsx("span",{className:`toggle-state ${r.reducedMotion?"is-on":""}`,children:r.reducedMotion?"已减少":"标准"})]}),a.jsxs("button",{type:"button",className:`settings-toggle-row ${r.reducedMotion?"is-on":""}`,role:"switch","aria-checked":r.reducedMotion,onClick:()=>e({...r,reducedMotion:!r.reducedMotion}),children:[a.jsxs("span",{children:[a.jsx("strong",{children:"减少动态效果"}),a.jsx("small",{children:"关闭页面切换、粒子和持续脉冲动画"})]}),a.jsx("i",{children:a.jsx("b",{})})]})]}),a.jsxs("section",{className:"settings-section",children:[a.jsxs("div",{className:"settings-section__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"spark",size:18})," 画面质量"]}),a.jsx("b",{children:"实时生效"})]}),a.jsx("div",{className:"quality-options",role:"radiogroup","aria-label":"画面质量",children:[{id:"high",label:"极致",note:"完整辉光与粒子"},{id:"balanced",label:"均衡",note:"推荐配置"},{id:"low",label:"节能",note:"减少背景特效"}].map(l=>a.jsxs("button",{type:"button",role:"radio","aria-checked":r.quality===l.id,className:r.quality===l.id?"is-active":"",onClick:()=>e({...r,quality:l.id}),children:[a.jsxs("span",{className:`quality-glyph quality-glyph--${l.id}`,children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("strong",{children:l.label}),a.jsx("small",{children:l.note})]},l.id))})]}),a.jsxs("section",{className:"settings-section",children:[a.jsxs("div",{className:"settings-section__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"eye",size:18})," 配色主题"]}),a.jsx("b",{children:"对比度 AA"})]}),a.jsx("div",{className:"quality-options",role:"radiogroup","aria-label":"配色主题",children:bd.map(l=>a.jsxs("button",{type:"button",role:"radio","aria-checked":r.palette===l.id,className:r.palette===l.id?"is-active":"",onClick:()=>e({...r,palette:l.id}),children:[a.jsx("span",{className:"palette-swatch",style:{background:`linear-gradient(135deg, ${l.colors.bg}, ${l.emphasis})`},children:a.jsx("i",{style:{color:l.colors.text},children:l.name.charAt(0)})}),a.jsx("strong",{children:l.name}),a.jsx("small",{children:l.id==="neon-violet"?"默认 · 霓虹青紫":l.id==="neon-pink"?"赛博粉蓝":l.id==="neon-green"?"荧光绿橙":"星云深色"})]},l.id))}),a.jsx("p",{children:"三套色板正文对比度均达 WCAG AA（≥4.5:1），切换后即时生效。"})]}),a.jsxs("section",{className:"settings-section",children:[a.jsxs("div",{className:"settings-section__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"user",size:18})," 解析者角色"]}),a.jsx("b",{children:"形象 / 文案风格"})]}),a.jsx("div",{className:"character-options",role:"radiogroup","aria-label":"解析者角色",children:ma.map(l=>a.jsxs("button",{type:"button",role:"radio","aria-checked":r.characterId===l.id,className:r.characterId===l.id?"is-active":"",onClick:()=>e({...r,characterId:l.id}),children:[a.jsxs("span",{className:"character-option__glyph",style:{"--char-accent":l.accent},children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("span",{children:[a.jsx("strong",{children:l.name}),a.jsx("small",{children:l.persona})]}),a.jsx("em",{children:l.title})]},l.id))}),a.jsx("p",{children:"角色仅改变名称与文案风格，不影响任何判题逻辑。"})]}),a.jsxs("section",{className:"settings-section settings-section--keys",children:[a.jsxs("div",{className:"settings-section__head",children:[a.jsxs("span",{children:[a.jsx(de,{name:"keyboard",size:18})," 键位说明"]}),a.jsx("b",{children:"可随时使用"})]}),a.jsxs("div",{className:"keybind-grid",children:[a.jsxs("span",{children:[a.jsx("em",{children:"移动"}),a.jsxs("b",{children:[a.jsx("kbd",{children:"W"}),a.jsx("kbd",{children:"A"}),a.jsx("kbd",{children:"S"}),a.jsx("kbd",{children:"D"})]})]}),a.jsxs("span",{children:[a.jsx("em",{children:"交互 / 提交"}),a.jsxs("b",{children:[a.jsx("kbd",{children:"E"}),a.jsx("kbd",{children:"Enter"})]})]}),a.jsxs("span",{children:[a.jsx("em",{children:"选择答案"}),a.jsxs("b",{children:[a.jsx("kbd",{children:"1"}),a.jsx("kbd",{children:"2"}),a.jsx("kbd",{children:"3"}),a.jsx("kbd",{children:"4"})]})]}),a.jsxs("span",{children:[a.jsx("em",{children:"角色 / 图鉴"}),a.jsxs("b",{children:[a.jsx("kbd",{children:"C"}),a.jsx("kbd",{children:"V"})]})]}),a.jsxs("span",{children:[a.jsx("em",{children:"地图 / 提示"}),a.jsxs("b",{children:[a.jsx("kbd",{children:"M"}),a.jsx("kbd",{children:"H"})]})]}),a.jsxs("span",{children:[a.jsx("em",{children:"暂停 / 关闭"}),a.jsx("b",{children:a.jsx("kbd",{children:"Esc"})})]})]})]}),a.jsxs("section",{className:"settings-section",children:[a.jsx("div",{className:"settings-section__head",children:a.jsxs("span",{children:[a.jsx(de,{name:"info",size:18})," 关于"]})}),a.jsxs("div",{className:"about-info",children:[a.jsx("p",{className:"about-info__name",children:"线性代数：矩阵协议"}),a.jsx("p",{className:"about-info__desc",children:"深空数学冒险解谜游戏原型。玩家扮演「解析者」，在矩阵大陆通过答题战斗修复崩解的维度秩序，以线性代数知识通关副本。"}),a.jsxs("div",{className:"about-info__meta",children:[a.jsx("span",{children:"BUILD 0.1.0"}),a.jsx("span",{children:"DESKTOP / MOBILE"}),a.jsx("span",{children:"© 2026 MATRIX PROTOCOL LAB"})]})]})]}),a.jsxs("section",{className:"settings-section",children:[a.jsx("div",{className:"settings-section__head",children:a.jsxs("span",{children:[a.jsx(de,{name:"refresh",size:18})," 重置进度"]})}),a.jsxs("button",{type:"button",className:"settings-danger-row",onClick:()=>{window.confirm("确定要重置所有进度吗？角色等级、算力、结晶、秩能与答题记录都将恢复为初始状态，且无法恢复。")&&s()},children:[a.jsxs("span",{children:[a.jsx("strong",{children:"重置所有进度"}),a.jsx("small",{children:"恢复为 1 级、算力 500 的初始状态"})]}),a.jsx(de,{name:"trash",size:18})]})]}),a.jsxs("p",{className:"settings-saved",children:[a.jsx(de,{name:"check",size:15})," 设置会自动保存在本地浏览器中。"]})]})}function zw({dungeons:r,onSelectDungeon:e,onClose:t}){return a.jsxs(ts,{title:"矩阵大陆",eyebrow:"WORLD MAP / SECTOR 01",icon:"map",onClose:t,className:"map-panel",children:[a.jsxs("div",{className:"world-map",children:[a.jsx("div",{className:"world-map__grid"}),a.jsx("div",{className:"world-map__terrain world-map__terrain--one"}),a.jsx("div",{className:"world-map__terrain world-map__terrain--two"}),a.jsx("div",{className:"world-map__river"}),a.jsx("div",{className:"world-map__route"}),a.jsx("span",{className:"world-map__label world-map__label--one",children:"零域边界"}),a.jsx("span",{className:"world-map__label world-map__label--two",children:"基向量回廊"}),a.jsx("span",{className:"world-map__label world-map__label--three",children:"特征值深渊"}),a.jsx("span",{className:"world-map__player",children:a.jsx(de,{name:"target",size:16})}),r.map(s=>a.jsxs("button",{type:"button",className:`world-map__portal ${s.locked?"is-locked":""}`,style:{left:`${s.x}%`,top:`${s.y}%`,"--map-color":s.color},onClick:()=>e(s),children:[a.jsx("span",{children:a.jsx(de,{name:s.locked?"lock":"cube",size:20})}),a.jsx("strong",{children:s.name}),a.jsx("small",{children:s.locked?`Lv.${s.level} 解锁`:s.subtitle})]},s.id)),a.jsxs("div",{className:"world-map__compass",children:[a.jsx("span",{children:"N"}),a.jsx(de,{name:"compass",size:22})]}),a.jsxs("div",{className:"world-map__scale",children:[a.jsx("i",{}),a.jsx("span",{children:"100 m"})]}),a.jsxs("div",{className:"world-map__legend",children:[a.jsx(Yt,{tone:"cyan",children:"已发现 2/3"}),a.jsx("span",{children:"当前区域：基与维数回廊"})]})]}),a.jsxs("div",{className:"map-footer-note",children:[a.jsx(de,{name:"info",size:16})," 点击副本标记查看详情。锁定区域会显示推荐等级与探索条件。"]})]})}const Sg={C:1,B:2,A:3,S:4};function Hw(r,e){return r?Sg[e]>Sg[r]?e:r:e}function Gw(){const[r,e]=Ue.useState("title"),[t,s]=Ue.useState(()=>T_()),[l,c]=Ue.useState(()=>b_()),[d,p]=Ue.useState(null),[h,m]=Ue.useState(null),[y,_]=Ue.useState("standard"),[x,M]=Ue.useState(null),[E,T]=Ue.useState(null),[v,S]=Ue.useState(t),[C,U]=Ue.useState(null),[P,F]=Ue.useState(()=>N_()),[I,w]=Ue.useState(()=>L_());Ue.useEffect(()=>{A_(t)},[t]),Ue.useEffect(()=>{R_(l),document.documentElement.dataset.reducedMotion=l.reducedMotion?"true":"false",document.documentElement.dataset.quality=l.quality;const re=Eg(l.palette),H=document.documentElement;H.style.setProperty("--screen-background",re.background),H.style.setProperty("--text",re.colors.text),H.style.setProperty("--text-soft",re.colors.textSoft),H.style.setProperty("--muted",re.colors.muted),H.style.setProperty("--bg",re.colors.bg),H.style.setProperty("--bg-deep",re.colors.bgDeep),H.style.setProperty("--panel",re.colors.panel),H.style.setProperty("--panel-solid",re.colors.panel),H.style.setProperty("--panel-soft",re.colors.panelSoft),H.style.setProperty("--stroke",re.colors.stroke),H.style.setProperty("--stroke-bright",re.colors.strokeBright),H.style.setProperty("--violet",re.colors.violet),H.style.setProperty("--violet-light",re.colors.violetLight),H.style.setProperty("--pink",re.colors.pink),H.style.setProperty("--cyan",re.colors.cyan),H.style.setProperty("--gold",re.colors.gold),H.style.setProperty("--danger",re.colors.danger)},[l]),Ue.useEffect(()=>{P_(P)},[P]),Ue.useEffect(()=>{I&&D_(I)},[I]),Ue.useEffect(()=>{if(!C)return;const re=window.setTimeout(()=>U(null),2800);return()=>window.clearTimeout(re)},[C]);const N=re=>U(re),J=re=>{Ti("click",l.volume),p(re)},G=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{N("当前浏览器不支持全屏显示")}},$=re=>{Ti("click",l.volume),_("standard"),m(re)},ie=re=>{const H=re.mode==="challenge"?30:re.mode==="practice"?0:20;if(t.compute<H){N(`算力不足，需要 ${H} 点算力`);return}s(ge=>({...ge,compute:Math.max(0,ge.compute-H)})),M(re),m(null),p(null),T(null),w(null),e("battle")},ce=()=>{if(!h||h.locked)return;const re=Math.floor(Math.random()*2147483647),H=_m(h.id,y,re);if(H.length===0){N("该副本题库正在同步，请稍后再试");return}ie({dungeonId:h.id,dungeonName:h.name,mode:y,seed:re,questions:H})},j=re=>{const H=re.results.filter(je=>je.correct).length,ge=t.xp+re.xp,ye=Math.floor(ge/1e3),Re=re.mode==="practice"?0:H*20+(re.victory?40:0),ve={...t,crystals:t.crystals+re.crystals,insight:t.insight+re.insight,compute:Math.min(t.maxCompute,t.compute+Re),xp:ge%1e3,level:t.level+ye,bestRatings:re.mode==="practice"?t.bestRatings:{...t.bestRatings,[re.dungeonId]:Hw(t.bestRatings[re.dungeonId],re.rating)},totalRuns:t.totalRuns+1,correctAnswers:t.correctAnswers+H};S(t),s(ve),T(re),Yu(),w(null),e("result")},oe=()=>{if(!x){e("world");return}const re=Math.floor(Math.random()*2147483647),H=_m(x.dungeonId,x.mode,re);ie({...x,seed:re,questions:H})},fe=()=>{T(null),M(null),Yu(),w(null),e("world")},Y=()=>{p(null),m(null),M(null),T(null),e("title")},K=wg(l.characterId),V=re=>{Ti("click",l.volume),c(H=>({...H,characterId:re})),e("world")},q=re=>{F(H=>{const ge=H.filter(ye=>ye.questionId===re.questionId).length;return[...H,{...re,attemptIndex:ge}]})},D=re=>{F(H=>{const ge=[...H].map(Re=>Re.questionId).lastIndexOf(re);if(ge<0)return H;const ye=[...H];return ye[ge]={...ye[ge],withdrawn:!0,correct:!1},ye})},Q=()=>{s(Oi),F([]),Yu(),w(null),T(null),S(Oi),N("进度已重置")};return a.jsxs("div",{className:`app-shell quality-${l.quality} ${l.reducedMotion?"reduced-motion":""}`,children:[r==="title"&&a.jsx(F_,{hasSave:C_(t),onStart:()=>e("select"),onContinue:()=>{I?(M(I.config),m(null),T(null),e("battle")):e("world")},onOpenSettings:()=>J("settings"),onOpenExam:()=>e("exam"),onNotify:N}),r==="world"&&a.jsx(Sw,{progress:t,character:K,onOpenDungeon:$,onOpenPanel:J,onNotify:N,onToggleFullscreen:()=>void G(),onReturnTitle:Y,onSelectCharacter:()=>e("select")}),r==="battle"&&x&&a.jsx(Rw,{config:x,settings:l,onFinish:j,onExit:fe,onOpenSettings:()=>p("settings"),onNotify:N,onRecord:q,onWithdrawRecord:D,resume:(I==null?void 0:I.snapshot)??null,onSnapshot:re=>w({config:x,snapshot:re,savedAt:Date.now()}),level:t.level},`${x.dungeonId}-${x.mode}-${x.seed}`),r==="result"&&E&&a.jsx(Pw,{result:E,progress:v,onRetry:oe,onReturnWorld:fe}),r==="exam"&&a.jsx(Lw,{onExit:()=>e("world")}),r==="select"&&a.jsx(Dw,{initialId:l.characterId,onConfirm:V,onBack:()=>e("title")}),h&&a.jsx(Iw,{dungeon:h,mode:y,bestRating:t.bestRatings[h.id],onModeChange:re=>{_(re),Ti("click",l.volume)},onClose:()=>m(null),onEnter:ce}),d==="character"&&a.jsx(Uw,{progress:t,character:K,onClose:()=>p(null)}),d==="codex"&&a.jsx(Ow,{onClose:()=>p(null),onNotify:N}),d==="history"&&a.jsx(Bw,{records:P,onClose:()=>p(null)}),d==="settings"&&a.jsx(jw,{settings:l,onChange:c,onClose:()=>p(null),onResetProgress:Q}),d==="map"&&a.jsx(zw,{dungeons:Yl,onClose:()=>p(null),onSelectDungeon:re=>{p(null),$(re)}}),C&&a.jsx(U_,{message:C},C)]})}const In=Eg("neon-violet"),Un=document.documentElement;Un.style.setProperty("--screen-background",In.background);Un.style.setProperty("--text",In.colors.text);Un.style.setProperty("--text-soft",In.colors.textSoft);Un.style.setProperty("--muted",In.colors.muted);Un.style.setProperty("--bg",In.colors.bg);Un.style.setProperty("--bg-deep",In.colors.bgDeep);Un.style.setProperty("--panel",In.colors.panel);Un.style.setProperty("--panel-solid",In.colors.panel);Un.style.setProperty("--panel-soft",In.colors.panelSoft);Un.style.setProperty("--stroke",In.colors.stroke);Un.style.setProperty("--stroke-bright",In.colors.strokeBright);Un.style.setProperty("--violet",In.colors.violet);Un.style.setProperty("--violet-light",In.colors.violetLight);Un.style.setProperty("--pink",In.colors.pink);Un.style.setProperty("--cyan",In.colors.cyan);Un.style.setProperty("--gold",In.colors.gold);Un.style.setProperty("--danger",In.colors.danger);p_.createRoot(document.getElementById("root")).render(a.jsx(Ue.StrictMode,{children:a.jsx(Gw,{})}));
