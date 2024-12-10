"use client";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../public/Logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={LogoImage} alt="company logo" priority />
    </Link>
  );
}
