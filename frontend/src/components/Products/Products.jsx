import { useState, useEffect } from "react";
import { fetchAllProducts } from "../../utils/fetchData";
import HeartIcon from "./HeartIcon";
import useGlobalContext from "../../context/globalContext"

const Products = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { addToCart } = useGlobalContext();

    useEffect(() => {
        (async () => {
            try {
                const getAllItems = await fetchAllProducts();
                setItems(getAllItems);
            } catch (error) {
                setError("Failed to fetch products")
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    if (loading) {
        return <p>Loading products...</p>; // Loading state
    }

    if (error) {
        return <p>{error}</p>; // Error handling
    }



    return (
        <section className="grid grid-cols-2 gap-4 mt-[7.5em]">
            {items.length > 0 ? (
                items.slice(0, 8).map((item) => (
                    <div key={item.id} className="flex flex-col justify-around items-center  w-[162px] h-[352px] bg-[#F6F6F6]">
                        <div className="w-full flex justify-end mr-4 cursor-pointer">
                            <HeartIcon />
                        </div>
                        {item.image ? (
                            <img src={item.image} alt={`${item.title}`} className="w-24 h-28 bg-transparent block" />
                        ) : (
                            <p>No image available</p>
                        )}
                        <p>{item.title}</p>
                        <p>{`$ ${item.price}`}</p>
                        <button onClick={() => addToCart(item)} type="button" className="bg-black text-white capitalize w-32 h-12 rounded-md font-medium cursor-pointer">Buy Now</button>
                    </div>
                ))
            ) : (
                <p>No products available</p> // Fallback message if no items
            )}
        </section>
    );
}

export default Products;

