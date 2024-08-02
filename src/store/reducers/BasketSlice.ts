import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface MenuBurgerState {
	isOpen: boolean;
	basket: IProduct[];
	totalPrice: number;
}

const initialState: MenuBurgerState = {
	isOpen: false,
	basket: [],
	totalPrice: 0
}

export const menuBurgerSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		openBasket(state) {
			state.isOpen = true;
		},
		closeBasket(state) {
			state.isOpen = false;
		},
		addProduct(state, action: PayloadAction<{product: IProduct, countbasket: number}>) {
			if (state.basket.filter((item) => item.id === action.payload.product.id).length !== 0) {
				state.basket = state.basket.map((item) => {
					if (item.id === action.payload.product.id) {
						return {...item, countbasket: item.countbasket + action.payload.countbasket}
					}
					return item;
				})
			} else {
				state.basket.push({...action.payload.product, countbasket: action.payload.countbasket})
			}
			state.totalPrice += action.payload.product.new_price * action.payload.countbasket;
		},
		removeProduct(state, action: PayloadAction<IProduct>) {
			state.basket = state.basket.filter((item: IProduct) => action.payload.id !== item.id);
			state.totalPrice -= action.payload.new_price * action.payload.countbasket;
		},
		addOneProduct(state, action: PayloadAction<IProduct>) {
			state.basket = state.basket.map((item) => {
				if (item.id === action.payload.id) {
					state.totalPrice += action.payload.new_price;
					return {...item, countbasket: item.countbasket + 1}
				}
				return item;
			})
		},
		removeOneProduct(state, action: PayloadAction<IProduct>) {
			state.basket = state.basket.map((item) => {
				if (item.id === action.payload.id) {
					state.totalPrice -= action.payload.new_price;
					return {...item, countbasket: item.countbasket - 1}
				}
				return item;
			})
		}
	}
})

export const {openBasket, closeBasket, addProduct, removeProduct, addOneProduct, removeOneProduct} = menuBurgerSlice.actions;

export default menuBurgerSlice.reducer;