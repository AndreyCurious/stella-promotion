import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBanner } from "../../models/IBanner";
import { fetchBanner} from "./ActionCreators";


interface bannersSlice {
	banners: banner;
	refBanners: refBanners;
	isLoading: boolean;
	errors: error;
}

interface refBanners {
	[index: string]: string | HTMLDivElement | null; 
	classic: HTMLDivElement | null,
	dune: HTMLDivElement | null,
	slats: HTMLDivElement | null,
}

interface banner {
	[index: string]: string | IBanner | null;
	classic: IBanner | null;
	dune: IBanner | null;
	slats: IBanner | null;
}


interface error {
	[index: string]: string | bannerError; 
	banners: bannerError;
}
interface bannerError {
	classic: string;
	dune: string;
	slats: string;
}


const initialState: bannersSlice = {
	banners: {
		classic: null,
		dune: null,
		slats: null,
	},
	refBanners: {
		classic: null,
		dune: null,
		slats: null,
	},
	isLoading: false,
	errors: {
		banners: {
			classic: '',
			dune: '',
			slats: ''
		},
	},

}

export const bannersSlice = createSlice({
	name: 'banners',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBanner.fulfilled.type, (state, action: PayloadAction<IBanner[]>) => {
			state.isLoading = false;
			const banner = action.payload[0].fetch_title;
			state.errors[banner] = '';
			state.banners[banner] = action.payload[0];
		})
		builder.addCase(fetchBanner.pending.type, (state) => {
			state.isLoading = true;
		})
		builder.addCase(fetchBanner.rejected.type, (state, action: PayloadAction<{fetch_title: string, value: string}>) => {
			state.isLoading = false;
			state.errors[action.payload.fetch_title] = action.payload.value;
		})
	}
})

export const {} = bannersSlice.actions;

export default bannersSlice.reducer;