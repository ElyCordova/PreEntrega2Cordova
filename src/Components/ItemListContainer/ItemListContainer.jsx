import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import arrayProductos from "../json/Productos.json";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";



const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayProductos)
        }, 2000)
    })
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems(id);
            setItems(id ? data.filter(item => item.category == id) : data);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row">    
            {
                loading ? < Loading /> : <ItemList items={ items } />
            }
            </div>
        </div>
    )
};

export default ItemListContainer;