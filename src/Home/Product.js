import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [visiProduct, setVisiProduct] = useState(4);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, []);
    const handleLoadMore = () => {
        setVisiProduct((preValue) => preValue + 4)
    }
    return (
        <div>
            <div>

            </div>
            <div className='grid grid-cols-4 gap-5 mx-24'>
                {
                    products.slice(0, visiProduct).map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center my-8'>
                <button onClick={handleLoadMore} className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Load more</button>
            </div>
            
        </div>
    );
};

export default Product;