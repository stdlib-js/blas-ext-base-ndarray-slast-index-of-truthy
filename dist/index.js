"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=n(function(m,t){
var s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),v=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-clip-upper-index/dist'),q=require('@stdlib/ndarray-base-stride/dist'),f=require('@stdlib/ndarray-base-offset/dist'),x=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/blas-ext-base-slast-index-of-truthy/dist').ndarray;function l(i){var r,e,a;return a=i[0],r=s(i[1]),e=v(a,0),r=d(r,r<0?e:e-1),r<0?-1:c(r+1,x(a),q(a,0),f(a))}t.exports=l
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
