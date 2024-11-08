import { Mens, Women, Electronics, Necklace } from "../../img/icons/index.js";

function CategoryIcons() {
    return (
        <div className="grid grid-cols-2 desktop:flex desktop:justify-center  place-items-center gap-4 mt-12">

            <div className="w-[162px] h-32 bg-[#EDEDED] flex justify-center items-center rounded-lg">
                <Mens />
            </div>
            <div className="w-[162px] h-32 bg-[#EDEDED] flex justify-center items-center rounded-lg">
                <Women />
            </div>
            <div className="w-[162px] h-32 bg-[#EDEDED] flex justify-center items-center rounded-lg">
                <Electronics />
            </div>
            <div className="w-[162px] h-32 bg-[#EDEDED] flex justify-center items-center rounded-lg">
                <Necklace />
            </div>

        </div>
    );
};

export default CategoryIcons;
