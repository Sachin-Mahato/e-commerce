import { Arrow } from "./icons/index"
import { CategoryTitle } from "./CategoryTitle"
import CategoryIcons from "./CategoryIcons"

const Category = () => {
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