import { useEditorContext } from "@/contexts";
import { ChangeEvent, FC } from "react";
import { Input } from "./ui/input";

const Title: FC = () => {
  const { editorState, updateTitle } = useEditorContext();
  return (
    <Input
      placeholder="Add post title"
      value={editorState.title}
      className="text-4xl font-Poppins bg-transparent font-bold text-black placeholder:text-black/60 leading-10 outline-none border-none focus-visible:ring-transparent"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.value?.length >= 100) {
          return;
        }
        updateTitle(e.target.value);
      }}
    />
  );
};

export default Title;
