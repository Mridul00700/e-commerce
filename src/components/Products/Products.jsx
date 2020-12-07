import React from 'react';

import { Grid }  from '@material-ui/core';
import Product from './Product/Product';


const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'running shoes',
        price: "10$",
        image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 2,
        name: 'mac-book',
        description: 'Apple Macbook',
        price: '125$',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000'
    }
]

const Products = () => {
    return(
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map( product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>

            ))}
        </Grid>
    </main>
    )
}


export default Products;