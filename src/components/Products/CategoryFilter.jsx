import { useState } from "react";
import useGlobalContext from "../../context/globalContext.jsx"
import { ChevronDownIcon } from "../../img/icons/index.js";
function CategoryFilter() {
    var {selectCategory} = useGlobalContext();
    var [cateToggle, setCatToggle] = useState(false)

    function cateToggleClickHandler() {
        setCatToggle((prev) => !prev)
    }
    return (
        <div className="desktop:w-full desktop:flex desktop:flex-col desktop:gap-4">
            <div className="desktop:flex desktop:gap-4">

                <p className="capitalize font-semibold">

                    category
                </p>
                <div className="cursor-pointer" onClick={cateToggleClickHandler}>
                    <ChevronDownIcon />
                </div>
            </div>
            {(cateToggle &&

                <section className="">
                    <div className="grid sm:grid-cols-5 gap-4">
                        {/* All Category */}
                        <div className="flex flex-col items-start" onClick={selectCategory}>
                            <p className="text-sm font-semibold text-gray-800">All</p>
                        </div>

                        {/* Electronics Category */}
                        <div className="flex flex-col items-start" onClick={selectCategory}>
                            <p className="text-sm font-semibold text-gray-800">Electronics</p>
                        </div>

                        {/* Jewelry Category */}
                        <div className="flex flex-col items-start" onClick={selectCategory}>
                            <p className="text-sm font-semibold text-gray-800">Jewelery</p>
                        </div>

                        {/* Men's Clothing Category */}
                        <div className="flex flex-col items-start" onClick={selectCategory}>
                            <p className="text-sm font-semibold text-gray-800">Men&apos;s Clothing</p>
                        </div>

                        {/* Women's Clothing Category */}
                        <div className="flex flex-col items-start" onClick={selectCategory}>
                            <p className="text-sm font-semibold text-gray-800">Women&apos;s Clothing</p>
                        </div>
                    </div>
                </section>

            )
            }



        </div>
    )
}

export default CategoryFilter;