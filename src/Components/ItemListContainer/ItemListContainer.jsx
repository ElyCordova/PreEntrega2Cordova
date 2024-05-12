import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import arrayProductos from "../json/Productos.json";
import Loading from "../Loading/Loading";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";



const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve( arrayProductos )
        }, 2000)
    })
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItems (data);
            setLoading (false);
        };

        fetchData();
    }, []);

    return (
        <div className="container my-5">
            <div className="row">    
            {
                loading ? < Loading /> : <ItemList items={ items } />
            }
            <ItemDetailContainer/>
            </div>
        </div>
    )
};

export default ItemListContainer;