import { useEditorContext } from "@/contexts";
import { cn } from "@/lib/utils";
import { stripHtml } from "@/utils";
import { FC } from "react";

const ContentCount: FC = () => {
  const { editorState } = useEditorContext();
  return (
    <div className=" h-10 px-3 border-t bg-white mt-auto">
      <p
        className={cn(
          "flex justify-end",
          stripHtml(editorState.content)?.length > 1000
            ? "text-red-500"
            : " text-primary_green"
        )}
      >
        {stripHtml(editorState.content)?.length ?? 0} / 1000 words
      </p>
    </div>
  );
};

export default ContentCount;
