import { createSlice } from "@reduxjs/toolkit";

interface MenuBurgerState {
	isOpen: boolean;
}

const initialState: MenuBurgerState = {
	isOpen: false,
}

export const menuBurgerSlice = createSlice({
	name: 'menuBurger',
	initialState,
	reducers: {
		openMenu(state) {
			state.isOpen = true;
		},
		closeMenu(state) {
			state.isOpen = false;
		},
	}
})

export const {openMenu, closeMenu} = menuBurgerSlice.actions;

export default menuBurgerSlice.reducer;