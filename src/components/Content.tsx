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

  const handleBlur = () => {
    // Hide the toolbar if there's no content
    if (!editorState.content.trim()) {
      setIsFocused(false);
    }
  };
  return (
    <div className="editor-container">
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
          onBlur={handleBlur}
          placeholder="Write your content here..."
        />
      )}
    </div>
  );
};

export default Content;
