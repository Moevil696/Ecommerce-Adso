import { Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts/ShopLayaout'

export default function Home() {
  return (
    <>
      <ShopLayout tittle={'Ecommerce Sena - Home'} pageDescription={'Encuentra los mejores articulos para tu setup'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant ='h2' sx={{ mb: 1}}>Articulos</Typography>
      </ShopLayout>
    </>
  )
}
