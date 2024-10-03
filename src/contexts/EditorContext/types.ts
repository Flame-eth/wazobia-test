export interface VideoEmbed {
  provider: string; // e.g., 'YouTube'
  url: string;
}

export interface SocialEmbed {
  platform: string; // e.g., 'Twitter'
  url: string;
  embedCode: string;
}

export interface EditorState {
  title: string;
  content: string;
  image: string;
  videoEmbed: VideoEmbed | null;
  socialEmbed: SocialEmbed | null;
}

export interface EditorContextType {
  editorState: EditorState;
  updateTitle: (title: string) => void;
  updateContent: (content: string) => void;
  updateImage: (imageUrl: string) => void;
  updateVideoEmbed: (embed: VideoEmbed) => void;
  updateSocialEmbed: (embed: SocialEmbed) => void;
  resetEditor: () => void;
}
