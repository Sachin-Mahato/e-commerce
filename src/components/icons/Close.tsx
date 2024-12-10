import useCartContext from "@/context/useCartContext";

const Close = ({ itemId }: { itemId: number }) => {
  const { removeItem } = useCartContext();
  return (
    <div className="cursor-pointer" onClick={() => removeItem(itemId)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Close;
