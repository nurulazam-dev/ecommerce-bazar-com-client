/* import React, { useState, useEffect } from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = asyne() => {
    setLoading(true);
    const response = await fetch('https://fakestoreapi.com/products');
    if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
    }
    return ()=>{
        componentMounted=false;
    }
}
    getProducts();
}, [])


return (
    <div>
        <h1>products</h1>
    </div>
);
};

export default Products; */