export interface IBanner {
	id: number | null,
	title_banner: string | null,
	fetch_title: string,
	img_banner: string | null,
	title_product: string | null,
	discount_percent: string | null,
	discount_time: string | null,
	product: Product 
}

interface Product {
	name: string | null,
	form: string | null,
	collection: string | null,
	colors: string | null,
	size: string | null,
	old_price: string | null,
	new_price: string | null	
}