// export const quillModules = {
//   toolbar: {
//     container: [
//       [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, false] }],
//       ["link", "image"],
//       [{ align: [] }],
//       ["bold", "italic"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["blockquote"],
//     ],
//   },
// };

// export const quillFormats = [
//   "header",
//   "link",
//   "image",
//   "align",
//   "bold",
//   "italic",
//   "list",
//   "bullet",
//   "blockquote",
// ];

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
