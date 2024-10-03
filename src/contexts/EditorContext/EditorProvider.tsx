import React, { useState, useCallback, useMemo } from "react";
import EditorContext from "./EditorContext";
import { EditorState, VideoEmbed, SocialEmbed } from "./types";

interface EditorProviderProps {
  children: React.ReactNode;
}
const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [editorState, setEditorState] = useState<EditorState>({
    title: "",
    content: "",
    image: "",
    videoEmbed: null,
    socialEmbed: null,
  });

  const updateTitle = useCallback((title: string) => {
    setEditorState((prev) => ({ ...prev, title }));
  }, []);

  const updateContent = useCallback((content: string) => {
    setEditorState((prev) => ({ ...prev, content }));
  }, []);

  const updateImage = useCallback((imageUrl: string) => {
    setEditorState((prev) => ({ ...prev, image: imageUrl }));
  }, []);

  const updateVideoEmbed = useCallback((embed: VideoEmbed) => {
    setEditorState((prev) => ({ ...prev, videoEmbed: embed }));
  }, []);

  const updateSocialEmbed = useCallback((embed: SocialEmbed) => {
    setEditorState((prev) => ({ ...prev, socialEmbed: embed }));
  }, []);

  const resetEditor = useCallback(() => {
    setEditorState({
      title: "",
      content: "",
      image: "",
      videoEmbed: null,
      socialEmbed: null,
    });
  }, []);

  const value = useMemo(
    () => ({
      editorState,
      updateTitle,
      updateContent,
      updateImage,
      updateVideoEmbed,
      updateSocialEmbed,
      resetEditor,
    }),
    [
      editorState,
      updateTitle,
      updateContent,
      updateImage,
      updateVideoEmbed,
      updateSocialEmbed,
      resetEditor,
    ]
  );

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorProvider;
