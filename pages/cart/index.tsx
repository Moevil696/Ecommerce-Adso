import React, { constructor } from 'react';
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { CartList } from '../../components/cart/CartList';
import { OrderSumary } from '../../components/cart/OrderSumary';


const CartPage = () => {
    return (
        <ShopLayout title={'Carrito'} pageDescription={'Carrito de compras de la tienda'}>
            <Typography component='h1' variant='h1'>Carrito</Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                <CartList editable />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                         <Typography variant='h2'>Orden</Typography>
                            <Divider sx={{my: 2}} />
                            <OrderSumary />
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Pagar
                            </Button>
                        </CardContent>
                     </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default CartPage