import { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Plus } from "lucide-react";

const EmbedOptions: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Plus size={35} className=" bg-gray-200 rounded-full p-1" />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        className=" flex flex-col gap-10 justify-start bg-white rounded-md  "
      >
        <h1 className=" font-light uppercase tracking-wider font-Poppins text-base">
          EMBEDS
        </h1>
        <div className="flex flex-col gap-5"></div>
      </PopoverContent>
    </Popover>
  );
};

export default EmbedOptions;
