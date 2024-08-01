import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import { fetchSingleProduct } from "./ActionCreators";

interface MoreDetailsSlice {
	product: IProduct;
	isLoading: boolean;
	mainPhotoId: number;
	error: string | null;
}

const initialState: MoreDetailsSlice = {
	product: {
		id: 0,
		title: "",
		category: "",
		fetch_title: "",
		old_price: 0,
		new_price: 0,
		count: 0,
		discount_percent: "",
		product_imgs: [
			{id: 1, img: ''}
		],
		information: {
			title: "",
			description: "",
			pragraph: "",
			title_advantages: "",
			advantages: [],
			company_information: "",
			ending: ""
		},
		countbasket: 0
	},
	isLoading: false,
	mainPhotoId: 1,
	error: null,
}

export const moreDetailsSlice = createSlice({
	name: 'moreDetails',
	initialState,
	reducers: {
		setCurrentProduct(state, action: PayloadAction<IProduct>) {
			state.product = action.payload;
			state.mainPhotoId = 1;
		},
		setMainPhotoId(state, action: PayloadAction<number>) {
			state.mainPhotoId = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSingleProduct.fulfilled.type, (state, action: PayloadAction<IProduct[]>) => {
			state.isLoading = false;
			state.product = action.payload[0];
		})
		builder.addCase(fetchSingleProduct.pending.type, (state) => {
			state.isLoading = true;
		})
		builder.addCase(fetchSingleProduct.rejected.type, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
		})
	}
})

export const {setCurrentProduct, setMainPhotoId} = moreDetailsSlice.actions;

export default moreDetailsSlice.reducer;