import useGlobalContext from "../../context/globalContext";

function ByRatingButton() {
    var { sortByPopularity , selectRef, selectClickHandler } = useGlobalContext();

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
                <option value="popularity">popularity</option>
                <option value="relevance">relevance</option>
            </select>
        </div>
    )
}




export default ByRatingButton;