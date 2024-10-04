export const quillModules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, false] }],
      ["link", "image"],
      [{ align: [] }],
      ["bold", "italic"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote"],
    ],
  },
};

export const quillFormats = [
  "header",
  "link",
  "image",
  "align",
  "bold",
  "italic",
  "list",
  "bullet",
  "blockquote",
];
