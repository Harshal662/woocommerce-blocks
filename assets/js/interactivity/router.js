import { hydrate, render } from 'preact';
import { toVdom, hydratedIslands } from './vdom';
import { createRootFragment } from './utils';
import { csnMetaTagItemprop, directivePrefix } from './constants';

// The root to render the vdom (document.body).
let rootFragment;

// The cache of visited and prefetched pages.
const pages = new Map();

// Helper to remove domain and hash from the URL. We are only interesting in
// caching the path and the query.
const cleanUrl = ( url ) => {
	const u = new URL( url, window.location );
	return u.pathname + u.search;
};

// Fetch a new page and convert it to a static virtual DOM.
const fetchPage = async ( url ) => {
	let dom;
	try {
		const res = await window.fetch( url );
		if ( res.status !== 200 ) return false;
		const html = await res.text();
		dom = new window.DOMParser().parseFromString( html, 'text/html' );
	} catch ( e ) {
		return false;
	}
	const regions = {};
	dom.querySelectorAll( '[data-wc-navigation-id]' ).forEach( ( region ) => {
		const id = region.attributes[ 'data-wc-navigation-id' ];
		regions[ id ] = toVdom( region );
	} );

	return { regions };
};

// Prefetch a page. We store the promise to avoid triggering a second fetch for
// a page if a fetching has already started.
export const prefetch = ( url ) => {
	url = cleanUrl( url );
	if ( ! pages.has( url ) ) {
		pages.set( url, fetchPage( url ) );
	}
};

// Render all interactive regions contained in the given page.
const renderRegions = ( page ) => {
	document
		.querySelectorAll( '[data-wc-navigation-id]' )
		.forEach( ( region ) => {
			const id = region.attributes[ 'data-wc-navigation-id' ];
			const fragment = createRootFragment( region.parentElement, region );
			render( page.regions[ id ], fragment );
		} );
};

// Navigate to a new page.
export const navigate = async ( href, { replace = false } = {} ) => {
	const url = cleanUrl( href );
	prefetch( url );
	const page = await pages.get( url );
	if ( page ) {
		renderRegions( page );
		window.history[ replace ? 'replaceState' : 'pushState' ](
			{},
			'',
			href
		);
	} else {
		window.location.assign( href );
	}
};

// Listen to the back and forward buttons and restore the page if it's in the
// cache.
window.addEventListener( 'popstate', async () => {
	const url = cleanUrl( window.location ); // Remove hash.
	const page = pages.has( url ) && ( await pages.get( url ) );
	if ( page ) {
		renderRegions( page );
	} else {
		window.location.reload();
	}
} );

// Initialize the router with the initial DOM.
export const init = async () => {
	document
		.querySelectorAll( `[data-${ directivePrefix }-interactive]` )
		.forEach( ( node ) => {
			if ( ! hydratedIslands.has( node ) ) {
				const fragment = createRootFragment( node.parentNode, node );
				const vdom = toVdom( node );
				hydrate( vdom, fragment );
			}
		} );
};
