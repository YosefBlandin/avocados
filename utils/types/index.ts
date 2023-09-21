export type TProduct = {
	id: string,
	sku: string
	name: string,
	image: string,
	price: number,
	attributes: {
		description: string,
		shape: string,
		hardiness: string,
		taste: string
	}
}

export type TAPIAvoResponse = {
	data: TProduct[]
}

export type TAPIAvoDetailResponse = TProduct

export type TProductListProps = {
	products: TProduct[]
}