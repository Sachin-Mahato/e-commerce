import { useEffect, useState } from "react"
import useGlobalContext from "../../context/globalContext.jsx"
import { HeartIcon } from "../../img/icons/index.js"
import BuyButton from "./BuyButton.jsx"

function Products() {
    var { loading } = useGlobalContext()
    var [listProducts, setListProducts] = useState([]);


    useEffect(() => {
         ;(async () => {
            const url = 'https://fakestoreapi.com/products?limit=8'
            try {
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`error in getting response ${response}`)
                }
                let data = await response.json();
                setListProducts(data)
            } catch (error) {
                console.log(`error in fetching Homepage products: ${error}`)
            }
        })()
    }, [])

    if (loading) {
        return <p>Loading products...</p>; // Loading state
    }

    return (
        <section className="grid grid-cols-2 place-items-center desktop:grid-cols-4 gap-4 mt-[7.5em] mb-10 desktop:mx-40">
            {listProducts?.length > 0 ? (
                listProducts.map((item, idx) => (

                    <div key={idx} className="flex flex-col justify-around items-center desktop:justify-stretch  w-[162px] h-[352px] desktop:h-full  bg-[#F6F6F6] desktop:w-full desktop:rounded-lg">
                        <div className="w-full h-full flex justify-end mr-4 cursor-pointer">
                            <HeartIcon itemId={item.id} />
                        </div>
                        {item.image ? (
                            <div className="bg-[#F6F6F6]">
                                <img src={item.image} alt={`${item.title}`} className="w-24 h-28 desktop:w-40 desktop:h-40  block mix-blend-darken" />
                            </div>
                        ) : (
                            <p>No image available</p>
                        )}
                        <p className="">{item.title}</p>
                        <p>${item.price}</p>
                        <div className="mb-4">

                            <BuyButton itemId={item.id} />
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available</p> // Fallback message if no items
            )}
        </section>
    );

}



export default Products;