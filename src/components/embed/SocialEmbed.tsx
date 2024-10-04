import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Share2 } from "lucide-react";

const ImageEmbed: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex gap-2 items-start bg-white cursor-pointer hover:bg-[#E7F1E9] p-3">
          <Share2 size={20} />
          <div className="flex flex-col gap-1">
            <h1 className=" font-medium capitalize tracking-wider font-OpenSans text-base">
              Social
            </h1>
            <p className=" font-light font-OpenSans text-sm text-black/60">
              Embed a facebook link
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default ImageEmbed;
