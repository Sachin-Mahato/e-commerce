import useGlobalContext from "../../context/globalContext"
const Minus = () => {
    const {decreaseQuantity} = useGlobalContext();
    return (
        <div onClick={decreaseQuantity} >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>

        </div>
    )
}

export default Minus