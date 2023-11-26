import { Props } from "next/script"
import { IProduct } from "../../interfaces"
import { ProductCard } from "./ProductCard"
import { Grid } from "@mui/material"
import { FC } from "react"

interface Props {
    products: IProduct[]
}
export const ProductList: FC<Props> = ({products}) => {
    return (
    <Grid container spacing={4}>
        {
            products.map((product) => (
                <ProductCard
                key={product.slug}
                    product={product}
                />
            ))
        }
    </Grid>
    )
}