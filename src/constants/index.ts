import { z } from "zod";

export const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["link", "image"],
    [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
    ["bold", "italic"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
};

export const quillFormats = [
    "header",
    "link",
    "image",
  "bold",
  "italic",
  "list",
  "bullet",
];


export const videoEmbedSchema = z.object({
  provider: z.enum(["youtube", "vimeo"], {
    required_error: "Please select a video provider.",
  }),
  url: z.string().url("Please enter a valid URL."),
})


export const socialEmbedSchema = z.object({
  platform: z.enum(["instagram", "tiktok", "facebook", "twitter"], {
    required_error: "Please select a social media platform.",
  }),
  url: z.string().url("Please enter a valid URL."),
  embedCode: z.string().min(1, "Please enter the embed code."),
  disableCaptions: z.boolean().default(false),
})