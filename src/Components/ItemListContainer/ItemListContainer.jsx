import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";



const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                    {
                        id: 1,
                        imageUrl: "https://www.boticadejabon.com/cdn/shop/products/ChocolateMenta.png?v=1648695932",
                        name: 'Product 1',
                        categoria: "jabones",
                        description: "Jabón de Avena",
                        price: 25
                    },
                    {
                        id: 2,
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-evz3_JCT8D0gSPFCsTTZdqyQYwFqPadkayfty7OwbTkp6jIyGjICBj1fElMj95sB6M&usqp=CAU",
                        name: 'Product 2',
                        categoria: "aceites",
                        description: "Aceite de Romero",
                        price: 50
                    },
                    {
                        id: 3,
                        imageUrl: "https://imag.bonviveur.com/mermelada-de-frutos-rojos-sin-azucar.jpg",
                        name: 'Product 3',
                        categoria: "jaleas",
                        description: "Jalea de Moras",
                        price: 30
                    },
                    {
                        id: 4,
                        imageUrl: "https://www.boticadejabon.com/cdn/shop/products/ChocolateMenta.png?v=1648695932",
                        name: 'Product 4',
                        categoria: "jabones",
                        description: "Jabón de Leche y Miel",
                        price: 25
                    },
                    {
                        id: 5,
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-evz3_JCT8D0gSPFCsTTZdqyQYwFqPadkayfty7OwbTkp6jIyGjICBj1fElMj95sB6M&usqp=CAU",
                        name: 'Product 5',
                        categoria: "aceites",
                        description: "Aceite de Rosas",
                        price: 50
                    },
                    {
                        id: 6,
                        imageUrl: "https://imag.bonviveur.com/mermelada-de-frutos-rojos-sin-azucar.jpg",
                        name: 'Product 6',
                        categoria: "jaleas",
                        description: "Jalea de Fresas",
                        price: 30
                    },
                    {
                        id: 7,
                        imageUrl: "https://www.boticadejabon.com/cdn/shop/products/ChocolateMenta.png?v=1648695932",
                        name: 'Product 7',
                        categoria: "jabones",
                        description: "Jabón de Pepino",
                        price: 25
                    },
                    {
                        id: 8,
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-evz3_JCT8D0gSPFCsTTZdqyQYwFqPadkayfty7OwbTkp6jIyGjICBj1fElMj95sB6M&usqp=CAU",
                        name: 'Product 8',
                        categoria: "aceites",
                        description: "Aceite de Almendras",
                        price: 50
                    },
                    {
                        id: 9,
                        imageUrl: "https://imag.bonviveur.com/mermelada-de-frutos-rojos-sin-azucar.jpg",
                        name: 'Product 9',
                        categoria: "jaleas",
                        description: "Jalea de Duraznos",
                        price: 30
                    },
            ])
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