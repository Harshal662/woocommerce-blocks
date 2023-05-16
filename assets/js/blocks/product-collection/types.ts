export interface ProductCollectionAttributes {
	query: ProductCollectionQuery;
	queryId: number;
	queryContext: [
		{
			page: number;
		}
	];
	templateSlug: string;
	displayLayout: {
		type: string;
		columns: number;
	};
}

export interface ProductCollectionQuery {
	author: string;
	exclude: string[];
	inherit: boolean;
	offset: number;
	order: 'asc' | 'desc';
	orderBy: 'date' | 'relevance' | 'title';
	pages: number;
	parents: number[];
	perPage: number;
	postType: string;
	search: string;
	sticky: string;
	taxQuery: string;
}
