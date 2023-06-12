/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import type { HTMLAttributes, CSSProperties } from 'react';
import { useProductDataContext } from '@woocommerce/shared-context';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';

/**
 * Internal dependencies
 */
import PriceBlock from './block';

interface Attributes {
	style: CSSProperties;
}

type Props = {
	attributes: Attributes;
	context?: { isDescendentOfSingleProductTemplate: boolean };
} & HTMLAttributes< HTMLDivElement >;

const CurrentPriceEdit = ( { attributes, context }: Props ): JSX.Element => {
	const blockProps = useBlockProps();
	const { product } = useProductDataContext();
	const { isDescendentOfSingleProductTemplate = false } = context || {};
	const currentPrice = product?.prices?.price;
	const currency = isDescendentOfSingleProductTemplate
		? getCurrencyFromPriceResponse()
		: getCurrencyFromPriceResponse( product?.prices );
	const blockAttrs = {
		attributes,
		currency,
		context,
		rawPrice: currentPrice,
		priceType: 'current',
	};
	return (
		<>
			<div { ...blockProps }>
				<PriceBlock { ...blockAttrs } />
			</div>
		</>
	);
};

export default CurrentPriceEdit;