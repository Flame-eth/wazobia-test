import { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Plus } from "lucide-react";
import ImageEmbed from "./ImageEmbed";
import VideoEmbed from "./VideoEmbed";
import { SocialEmbed } from "..";

const EmbedOptions: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Plus size={35} className=" bg-[#E7F1E9] rounded-full p-1" />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        className=" flex flex-col justify-start bg-white rounded-md p-0 "
      >
        <h1 className=" p-3 font-light uppercase tracking-wider font-Poppins text-base">
          EMBEDS
        </h1>
        <div className="flex flex-col gap-2">
          <ImageEmbed />
          <VideoEmbed />
          <SocialEmbed />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EmbedOptions;
