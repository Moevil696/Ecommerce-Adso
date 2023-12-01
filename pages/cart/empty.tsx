import NextLink from "next/link"

import { Box, Typography, Link, Button, Divider} from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { Remove, RemoveShoppingCartOutlined } from "@mui/icons-material"


const EmptyPage = () => {
    return (
        <ShopLayout title='Carrito vació' pageDescription='Carrito de compras sin productos'>
            <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'sx={{flexDirection: { xs: 'column', sm: 'row' }}}>
        <RemoveShoppingCartOutlined sx={{ fontSize: 150 }} />
        <Box display='flex' alignItems='center' flexDirection='column'>
            <Typography variant='h1' component='h1'>Su carrito de compras está vació</Typography>
            <Typography variant='h6' component='h2'>¿Quiere volver a la pagína principal?</Typography>
            <Divider sx={{my: 1}} />
            <NextLink href='/' passHref legacyBehavior>
                <Button color="secondary" className='circular-btn'>
                <Link typography='h6' color='primary'>
                Volver
                </Link>
                </Button>
            </NextLink>
        </Box>
        </Box>
        </ShopLayout>
    )
}

export default EmptyPage