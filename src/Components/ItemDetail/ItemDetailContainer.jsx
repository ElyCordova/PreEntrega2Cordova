import { useEffect, useState } from "react";
import arrayProductos from "../json/Productos.json";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = arrayProductos.find(item => item.id === 1);
            resolve(producto);
        }, 2000)
    })
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItem(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            {
                loading ? <Loading /> : <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailContainer;