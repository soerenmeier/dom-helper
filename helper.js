/*
@Author: Sören Meier <soerenmeier.ch>
@Created: 2019-05-22
@Version: 1.0 <2019-05-22>
*/

'use strict';

// id
const i = id => document.getElementById( id );

// el
const e = n => document.getElementsByTagName( n );

// single el (tag)
const se = n => document.getElementsByTagName( n )[0];

// single query
const s = q => document.querySelector( q );

// query all
const a = q => document.querySelectorAll( q );

// create Element
const ce = el => document.createElement( el );

// set innerHTML
const h = ( q, ht ) => s( q ).innerHTML = ht;

// addEventListener
const o = ( q, e, f ) => s( q ).addEventListener( e, f );

// ab insert html afterbegin
const ab = ( q, ht ) => s( q ).insertAdjacentHTML( 'afterbegin', ht );

// be insert html beforeend
const be = ( q, ht ) => s( q ).insertAdjacentHTML( 'beforeend', ht );


// convert element or singleQuery with converting
function c( el ) {

	el = typeof el === 'string' ? s( e ) : e;

	// element by tag
	el.e = n => el.getElementsByTagName( n );

	// single element by tag
	el.se = n => el.getElementsByTagName( n )[0];

	// single query
	el.s = q => el.querySelector( q );

	// query all
	el.a = q => el.querySelectorAll( q );

	// set innerHTML
	el.h = ht => el.innerHTML = ht;

	// a short version for addEventListener
	el.o = ( ev, fn ) => el.addEventListener( ev, e => fn( e, el ) );

	// ab insert html afterbegin
	const ab = ht => el.insertAdjacentHTML( 'afterbegin', ht );

	// be insert html beforeend
	const be = ht => el.insertAdjacentHTML( 'beforeend', ht );

	// short for classList
	el.c = el.classList;

	return el;

}


// convert nodeList
function ca( li ) {

	li = typeof li === 'string' ? a( li ) : li;

	// loop
	li.l = f => li.forEach( f );

	// loop convert
	li.c = f => li.forEach( el => f( c( el ) ) );

	// addEventListener for every element
	li.o = ( ev, fn ) => li.forEach( el => el.addEventListener( ev, e => fn( e, el ) ) );
	
	return li;

}
