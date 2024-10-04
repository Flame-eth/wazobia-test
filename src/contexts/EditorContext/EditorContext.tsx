import { createContext } from "react";
import { EditorContextType } from "./types";

// Initial state for the editor
const defaultEditorState: EditorContextType = {
  editorState: {
    title: "",
    content: "",
    image: "",
    videoEmbed: null,
    socialEmbed: null,
  },
  updateTitle: () => { },
  updateContent: () => { },
  updateImage: () => { },
  updateVideoEmbed: () => { },
  updateSocialEmbed: () => { },

  resetEditor: () => { },
  insertImageInContent: () => {},
  insertVideoInContent: () => {},
  insertSocialEmbedInContent: () => {}
};

const EditorContext = createContext<EditorContextType>(defaultEditorState);

export default EditorContext;
