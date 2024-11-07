import { Arrow } from "../../img/icons/index.js"
import { CategoryTitle } from "./CategoryTitle"
import CategoryIcons from "./CategoryIcons"

function Category(){
    return (
        <>
            <section className="flex justify-between">
                <CategoryTitle />
                <Arrow />
            </section>
            <CategoryIcons />
        </>
    )
}

export default Category