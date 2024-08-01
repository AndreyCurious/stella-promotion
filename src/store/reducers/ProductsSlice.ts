import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import { fetchProducts } from "./ActionCreators";

interface productsSlice {
	products: product;
	isLoading: boolean;
	limit: limits;
	counts: counts;
	errors: error;
}

interface limitProducts {
	[index: string]: number;
	products: number
	start_finish: number
	corners: number
}

interface limits {
	[index: string]: limitProducts
	panels_classic: limitProducts;
	panels_dune: limitProducts;
}

interface counts {
	[index: string]: string | number | ICount;
	panels_classic: ICount;
	panels_dune: ICount;
	panels_start_finish: ICount;
	corners_dune: ICount;
	slats: ICount;
}

interface ICount {
	fetch_title: string,
	count: number
}

interface product {
	[index: string]: string | IProduct[];
	panels_classic: IProduct[];
	panels_dune: IProduct[];
	panels_start_finish: IProduct[];
	corners_dune: IProduct[];
	slats: IProduct[];
}

interface error {
	[index: string]: string | errorsCategories;
	products: errorsCategories;
}

interface errorsCategories {
	panels_classic: string;
	panels_dune: string;
	panels_start_finish: string;
	corners_dune: string;
	slats: string;
}

const initialState: productsSlice = {
	products: {
		panels_classic: [],
		panels_dune: [],
		panels_start_finish: [],
		corners_dune: [],
		slats: [],
	},
	isLoading: false,
	limit: {
		panels_classic: {
			products: 8,
			start_finish: 8,
			corners: 8
		},
		panels_dune: {
			products: 8,
			start_finish: 8,
			corners: 8
		},
		slats: {
			products: 8,
			start_finish: 8,
			corners: 8
		}
	},
	counts: {
		panels_classic: {
			fetch_title: '',
			count: 0
		},
		panels_dune: {
			fetch_title: '',
			count: 0
		},
		panels_start_finish: {
			fetch_title: '',
			count: 0
		},
		corners_dune: {
			fetch_title: '',
			count: 0
		},
		slats: {
			fetch_title: '',
			count: 0
		}
	},
	errors: {
		products: {
			corners_dune: '',
			panels_classic: '',
			panels_dune: '',
			panels_start_finish: '',
			slats: ''
		},
	},
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		moreProducts(state, action: PayloadAction<{collection: string, products: string}>) {
			state.limit[action.payload.collection][action.payload.products] += 8;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled.type, (state, action: PayloadAction<{products: IProduct[], counts: ICount[]}>) => {
			state.isLoading = false
			const products = action.payload.products[0].fetch_title;
			const count = action.payload.counts[0].fetch_title;
			state.errors[products] = '';
			state.products[products] = action.payload.products;
			state.counts[count] = action.payload.counts[0];
		})
		builder.addCase(fetchProducts.pending.type, (state) => {
			state.isLoading = true;
		})
		builder.addCase(fetchProducts.rejected.type, (state, action: PayloadAction<{fetch_title: string, value: string}>) => {
				state.isLoading = false;
				state.errors[action.payload.fetch_title] = action.payload.fetch_title;
		})
	}
})

export const {moreProducts} = productsSlice.actions;

export default productsSlice.reducer;