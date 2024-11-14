import useGlobalContext from "../../context/globalContext.jsx";

function ByRatingButton() {
    var { sortByPopularity, selectRef, selectClickHandler } = useGlobalContext();

    return (
        <div className="flex justify-around py-2 rounded-md border-[#ebebeb] border-[1px] border-solid">
            <p className="font-semibold ">By rating</p>

            <select
                ref={selectRef}
                onChange={(e) => {
                    e.preventDefault();
                    selectClickHandler();
                    // console.log(selectRef.current.value)
                    sortByPopularity(selectRef.current.value);

                }}>
                <option value="">please select </option>
                <option className="capitalize" value="popularity">popularity</option>
                <option className="capitalize" value="relevance">relevance</option>
                <option className="capitalize" value="high-to-low">high to low</option>
                <option className="capitalize" value="low-to-high">low to  high</option>
            </select>
        </div>
    )
}




export default ByRatingButton;