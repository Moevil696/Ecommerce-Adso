import NextLink from 'next/link'
import { Button, Card, CardContent, Divider, Grid, Typography, Link, Box } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

import { CartList, OrderSumary } from '../../components/cart'

const SummaryPage = () => {
    return (
        <ShopLayout title={'resumen de orden'} pageDescription={'Resumen de la orden'}>
        <Typography component='h1' variant='h1'>Resumen de la orden</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
            <CartList />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                     <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{my: 2}} />
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref legacyBehavior>
                                <Link underline='always'>
                                Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <Typography>Fabián Hernández</Typography>
                        <Typography>Carrera 2</Typography>
                        <Typography>Las Cruces</Typography>
                        <Typography>Colombia</Typography>
                        <Typography>+57 314 354 41 12</Typography>

                        <Divider sx={{my: 1}} />
                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link underline='always'>
                                Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSumary />

                        <Button color='secondary' className='circular-btn' fullWidth>
                            Confirmar Orden
                        </Button>
                    </CardContent>
                 </Card>
            </Grid>
        </Grid>
    </ShopLayout>
    )
 }

 export default SummaryPage