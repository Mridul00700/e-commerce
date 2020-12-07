import React from 'react';

import Grid from '@material-ui/core';
import Product from './Product/Product';


const products = [
    {
        id:1,
        name: 'Shoes',
        description: 'running shoes'   
    },
    {
        id: 2,
        name: 'mac-book',
        description: 'Apple Macbook'
    }
]

const Products = () => {
    <main>
        <Grid container justify="center" space={4}>
            {products.map( product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product />
                </Grid>

            ))}
        </Grid>
    </main>
}


export default Products;