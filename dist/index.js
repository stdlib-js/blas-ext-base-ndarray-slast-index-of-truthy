/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last truthy element in a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-slast-index-of-truthy
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var slastIndexOfTruthy = require( '@stdlib/blas-ext-base-ndarray-slast-index-of-truthy' );
*
* var x = new Float32Vector( [ 0.0, 1.0, 0.0, 2.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = slastIndexOfTruthy( [ x, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
