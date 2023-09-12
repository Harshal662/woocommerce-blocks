/**
 * External dependencies
 */
import { Page } from '@playwright/test';
import { EditorUtils, FrontendUtils } from '@woocommerce/e2e-utils';
import { Editor } from '@wordpress/e2e-test-utils-playwright';

const selectors = {
	editor: {
		zoomWhileHoveringSetting:
			"xpath=//label[contains(text(), 'Zoom while hovering')]/preceding-sibling::span/input",
		fullScreenOnClickSetting:
			"xpath=//label[contains(text(), 'Full-screen when clicked')]/preceding-sibling::span/input",
	},
};

export class ProductGalleryPage {
	editor: Editor;
	page: Page;
	frontendUtils: FrontendUtils;
	editorUtils: EditorUtils;
	constructor( {
		editor,
		page,
		frontendUtils,
		editorUtils,
	}: {
		editor: Editor;
		page: Page;
		frontendUtils: FrontendUtils;
		editorUtils: EditorUtils;
	} ) {
		this.editor = editor;
		this.page = page;
		this.frontendUtils = frontendUtils;
		this.editorUtils = editorUtils;
	}

	async addProductGalleryBlock( { cleanContent = true } ) {
		if ( cleanContent ) {
			await this.editor.setContent( '' );
		}
		await this.editor.insertBlock( {
			name: 'woocommerce/product-gallery',
		} );
	}

	getZoomWhileHoveringSetting() {
		return this.page.locator( selectors.editor.zoomWhileHoveringSetting );
	}

	getFullScreenOnClickSetting() {
		return this.page.locator( selectors.editor.fullScreenOnClickSetting );
	}

	async toggleFullScreenOnClickSetting( enable: boolean ) {
		const button = this.page.locator(
			selectors.editor.fullScreenOnClickSetting
		);
		const isChecked = await button.isChecked();

		// Toggle the checkbox if it's not in the desired state.
		if ( enable && ! isChecked ) {
			await button.click();
		} else if ( ! enable && isChecked ) {
			await button.click();
		}
	}

	async toggleZoomWhileHoveringSetting( enable: boolean ) {
		const button = this.page.locator(
			selectors.editor.zoomWhileHoveringSetting
		);
		const isChecked = await button.isChecked();

		// Toggle the checkbox if it's not in the desired state.
		if ( enable && ! isChecked ) {
			await button.click();
		} else if ( ! enable && isChecked ) {
			await button.click();
		}
	}

	getMainImageBlock( { page }: { page: 'frontend' | 'editor' } ) {
		const blockName = 'woocommerce/product-gallery-large-image';
		if ( page === 'frontend' ) {
			return this.frontendUtils.getBlockByName( blockName );
		}
		return this.editorUtils.getBlockByName( blockName );
	}

	getThumbnailsBlock( { page }: { page: 'frontend' | 'editor' } ) {
		const blockName = 'woocommerce/product-gallery-thumbnails';
		if ( page === 'frontend' ) {
			return this.frontendUtils.getBlockByName( blockName );
		}
		return this.editorUtils.getBlockByName( blockName );
	}

	getBlock( { page }: { page: 'frontend' | 'editor' } ) {
		const blockName = 'woocommerce/product-gallery';
		if ( page === 'frontend' ) {
			return this.frontendUtils.getBlockByName( blockName );
		}
		return this.editorUtils.getBlockByName( blockName );
	}
}
