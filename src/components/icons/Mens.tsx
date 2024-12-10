import Image from "next/image";
import MenImage from "../../../public/shirt.png";

const Mens = () => {
  return <Image src={MenImage} alt="shirt icon" className="w-12 h-12" />;
};

export default Mens;
