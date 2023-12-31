import { CardActionArea, Card, CardMedia, Grid, Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts/ShopLayout'

import { initialData } from '../database/products'
import { ProductList } from '../components/products';

export default function Home() {
  return (
    <>
      <ShopLayout title={'Ecommerce Sena - Home'} pageDescription={'Encuentra los mejores articulos'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Articulos</Typography>

      <ProductList products={initialData.products as any} />
      </ShopLayout>
    </>
  );
}