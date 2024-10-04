import { quillFormats, quillModules } from "@/constants";
import { useEditorContext } from "@/contexts";
import { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Content: FC = () => {
  const { editorState, updateContent } = useEditorContext();

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  
  return (
    <div className="">
      {!isFocused && !editorState.content.length ? (
        <p
          onClick={() => handleFocus()}
          className=" text-gray-300 font-Poppins text-base font-light leading-5"
        >
          Add content
        </p>
      ) : (
        <ReactQuill
          value={editorState.content}
          onChange={(e: string) => {
            updateContent(e);
          }}
          modules={quillModules}
          formats={quillFormats}
          onFocus={handleFocus}
          theme="snow"
          placeholder="Add content"
          className=" text-gray-600 font-Poppins text-lg font-medium leading-5"
        />
      )}
    </div>
  );
};

export default Content;
