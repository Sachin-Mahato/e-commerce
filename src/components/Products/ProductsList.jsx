import BuyButton from "./BuyButton"
import { HeartIcon } from "../../img/icons/index.js"

export default function ProductsList({idx, item}) {
    return (
        <div key={idx} className="flex flex-col justify-around items-center desktop:w-full  w-[162px] h-[352px] bg-[#F6F6F6] desktop:h-[400]">
            <div className="w-full flex justify-end mr-4 cursor-pointer">
                <HeartIcon itemId={item.id} />
            </div>
            {item.image ? (
                <div className="bg-[#F6F6F6]">
                    <img src={item.image} alt={`${item.title}`} className="w-24 h-28  block mix-blend-darken" />
                </div>
            ) : (
                <p>No image available</p>
            )}
            <p className="desktop:text-center">{item.title}</p>
            <p>${item.price}</p>
            <div>

                <BuyButton itemId={item.id} />
            </div>
        </div>
    )
}