import { Arrow } from "@/components/icons/index";
import { CategoryIcons } from "@/components/icons/index";

function Category() {
  return (
    <>
      <section className="flex justify-between items-center lg:mx-40">
        <h2 className="capitalize text-xl font-semibold">browse by category</h2>
        <Arrow />
      </section>
      <CategoryIcons />
    </>
  );
}

export default Category;
