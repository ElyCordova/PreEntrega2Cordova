import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import arrayProductos from "../json/Productos.json";
import ItemCount from "../ItemCount/ItemCount";



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
            <h1>Opciones naturales para ti</h1>
            {
                loading ? <div>Cargando...</div> : <ItemList items={ items } />
            }

            <ItemCount stock={10} />
            </div>
        </div>
    )
};

export default ItemListContainer;