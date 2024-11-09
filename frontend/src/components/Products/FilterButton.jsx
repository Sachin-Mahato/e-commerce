import {FilterIcon} from "../../img/icons/index.js"

function FilterButton() {
    return (
        <div className="flex justify-around py-2 items-center border-[#ebebeb] border-[1px] border-solid rounded-md ">
                <p className="font-semibold ">filter</p>
                <FilterIcon />
        </div>
    )
}

export default FilterButton