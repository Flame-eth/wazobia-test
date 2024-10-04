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

  const insertImageInContent = useCallback((imageUrl: string) => {
    const imageEmbed = `<img src="${imageUrl}" alt="Embedded Image" />`;
    setEditorState((prevState) => ({
      ...prevState,
      content: prevState.content + imageEmbed, // Append image HTML to content
    }));
  }, []);

  const insertVideoInContent = useCallback((videoEmbed: VideoEmbed) => {
    const videoEmbedHTML = `<iframe src="${videoEmbed.url}" title="${videoEmbed.provider} Video"></iframe>`;
    setEditorState((prevState) => ({
      ...prevState,
      content: prevState.content + videoEmbedHTML, // Append video HTML to content
    }));
  }, []);

  const insertSocialEmbedInContent = useCallback((socialEmbed: SocialEmbed) => {
    setEditorState((prevState) => ({
      ...prevState,
      content: prevState.content + socialEmbed.embedCode, // Append social embed HTML to content
    }));
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
      insertImageInContent,
      insertVideoInContent,
      insertSocialEmbedInContent,
    }),
    [
      editorState,
      updateTitle,
      updateContent,
      updateImage,
      updateVideoEmbed,
      updateSocialEmbed,
      resetEditor,
      insertImageInContent,
      insertVideoInContent,
      insertSocialEmbedInContent,
    ]
  );

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorProvider;
