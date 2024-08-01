import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuBurgerReducer from './reducers/MenuBurgerSlice';
import bannersReducer from './reducers/BannersSlice'
import productsReducer from './reducers/ProductsSlice'
import moreDetailReducer from './reducers/MoreDetailsSlice'
import basketReducer from './reducers/BasketSlice'

const rootReducer = combineReducers({
	menuBurgerReducer,
	bannersReducer,
	productsReducer,
	moreDetailReducer,
	basketReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
