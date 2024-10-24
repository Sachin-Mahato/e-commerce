import { useState, useEffect } from "react";
import { fetchAllProducts } from "../../utils/fetchData";

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const getAllItems = await fetchAllProducts();
                setItems(getAllItems); 
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        })();
    }, []);

    return (
        <section className="grid grid-cols-2 gap-4">
            {items.length > 0 ? (
                items.slice(0, 8).map((item, idx) => ( 
                    <div key={idx} className="flex justify-center items-center">
                        {item.image ? (
                            <img src={item.image} alt={`Product ${idx}`} className="w-24 h-24" />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No products available</p> // Fallback message if no items
            )}
        </section>
    );
};

export default Products;
