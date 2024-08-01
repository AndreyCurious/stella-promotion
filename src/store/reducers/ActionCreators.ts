import axios from "axios";
import { IBanner } from "../../models/IBanner";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface DataProducts {
	title: string;
	limit: number;
}
export const fetchBanner = createAsyncThunk(
	'banner/fetchTitle',
	async (title: string, thunkAPI) => {
		try {
			const res = await axios.get<IBanner[]>(`https://vercel-template-theta.vercel.app/banners/?fetch_title=${title}`);
			return res.data;
		} catch(e) {
			return thunkAPI.rejectWithValue({fetch_title: title, value: 'Не удалось загрузить данные баннера'})
		}
	}
)

export const fetchSingleProduct = createAsyncThunk(
	'product/fetchId',
	async (id: number, thunkAPI) => {
		try {
			const product = await axios.get<IProduct[]>(`https://vercel-template-theta.vercel.app/products/?id=${id}`);
			return product.data;
		} catch(e) {
			return thunkAPI.rejectWithValue({value: 'Не удалось загрузить данные товара'})
		}
	}
)


export const fetchProducts = createAsyncThunk(
	'products/fetchTitle',
	async ({title, limit}: DataProducts, thunkAPI) => {
		try {
			const products = await axios.get<IProduct[]>(`https://vercel-template-theta.vercel.app/products/?fetch_title=${title}&_limit=${limit}`);
			const counts = await axios.get<IProduct[]>(`https://vercel-template-theta.vercel.app/counts/?fetch_title=${title}`);
			return {products: products.data, counts: counts.data};
		} catch(e) {
			return thunkAPI.rejectWithValue({fetch_title: title, value: 'Не удалось загрузить данные категории товаров'})
		}
	}
)


