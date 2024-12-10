import { Twitter, Facebook, Instagram, Tiktok } from "../icons/index";
function SocialMedia() {
  return (
    <div className="flex justify-center  items-center gap-4 mt-8 mb-12 cursor-pointer">
      <Twitter />
      <Facebook />
      <Instagram />
      <Tiktok />
    </div>
  );
}

export default SocialMedia;
