import { FC } from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Plus } from "lucide-react";

const EmbedOptions: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Plus size={24} className=" bg-gray-400 rounded-full p-2" />
      </PopoverTrigger>
    </Popover>
  );
};

export default EmbedOptions;
