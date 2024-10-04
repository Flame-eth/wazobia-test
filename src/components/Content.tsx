import { quillModules } from "@/constants";
import { useEditorContext } from "@/contexts";
import { FC } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const Content: FC = () => {
  const { editorState, updateContent } = useEditorContext();
  return <ReactQuill 
  value={editorState.content} 
  onChange={updateContent} 
  modules={quillModules} 
  formats={[
    'header', 'font', 'list', 'bold', 'italic', 'underline',
    'align', 'image', 'link'
  ]} 
  placeholder="Add content"
/>

};

export default Content;
