/* eslint-disable no-var */
import useGlobalContext from "@/context/useGlobalContext";

function SortByOptions() {
  var { sortByPopularity, selectRef, selectClickHandler } = useGlobalContext();

  function handleSelectChange() {
    if (selectRef.current) {
      console.log(`selectRef: ${selectRef.current.value}`);
      selectClickHandler(selectRef);
      sortByPopularity(selectRef.current.value);
    } else {
      console.log(`error in ${selectRef}`);
    }
  }

  return (
    <div className="flex justify-around py-2 rounded-md border-[#ebebeb] border-[1px] border-solid">
      <p className="font-semibold ">By rating</p>

      <select
        ref={selectRef}
        onChange={(e) => {
          e.stopPropagation();
          // selectClickHandler(selectRef);
          // sortByPopularity(selectRef.current.value);
          handleSelectChange();
        }}
      >
        <option value="">please select </option>
        <option className="capitalize" value="popularity">
          popularity
        </option>
        <option className="capitalize" value="relevance">
          relevance
        </option>
        <option className="capitalize" value="high-to-low">
          high to low
        </option>
        <option className="capitalize" value="low-to-high">
          low to high
        </option>
      </select>
    </div>
  );
}

export default SortByOptions;
