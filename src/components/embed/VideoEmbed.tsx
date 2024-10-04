import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Video } from "lucide-react";

const VideoEmbed: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex gap-2 items-start bg-white cursor-pointer hover:bg-[#E7F1E9] p-3">
          <Video size={20} />
          <div className="flex flex-col gap-1">
            <h1 className=" font-medium capitalize tracking-wider font-OpenSans text-base">
              Video
            </h1>
            <p className=" font-light font-OpenSans text-sm text-black/60">
              Embed a YouTube video
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default VideoEmbed;
