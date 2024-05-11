import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";



const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
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
        <div className="item-list-container">
            <h1>Opciones naturales para ti</h1>
            {
                loading
                ? <div>Cargando...</div>
                : <ItemList items={ items } />
            }
        </div>
    )
};

export default ItemListContainer;