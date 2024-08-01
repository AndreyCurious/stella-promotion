export interface IProduct {
	id: number,
	title: string,
	fetch_title: string,
	category: string,
	old_price: number,
	new_price: number,
	count: number,
	discount_percent: string,
	product_imgs: product_imgs[] | [],
	information: information,
	countbasket: number
}

export interface product_imgs {
	id: number,
	img: string
}

interface information {
	title: string,
	description: string,
	pragraph: string,
	title_advantages: string,
	advantages: [],
	company_information: string,
	ending: string
}