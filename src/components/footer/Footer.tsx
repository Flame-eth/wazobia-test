import { FC } from "react";
import { Button } from "../ui/button";

const Footer: FC = () => {
  return (
    <Button
      type="submit"
      className=" bg-primary_green hover:bg-primary_green/90 text-white w-[78px] h-[35px] rounded-sm my-5 ml-auto "
    >
      Post
    </Button>
  );
};

export default Footer;
