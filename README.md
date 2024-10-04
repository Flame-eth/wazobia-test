# Mini Website Editor

This project is a simple website editor that allows users to create content, embed images, videos, and social media posts dynamically. It uses `React`, `TypeScript`, `ReactQuill`, and `Context API` for state management, offering a clean and user-friendly interface for creating and editing web content.

## Live Demo

You can view the live version of this project here:

[Live Demo](https://wazobia-test-five.vercel.app/)

## Features

- **Rich Text Editor**: Allows users to format text, add headings, and more using the `ReactQuill` rich text editor.
- **Embed Options**: Users can embed videos, images, and social media posts directly into the content.
- **Responsive Design**: The editor layout is responsive and works across multiple screen sizes.
- **Context API**: The state of the editor (title, content, image, video, social embeds) is managed using the `React Context API` for a consistent global state.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: For type safety and better developer experience.
- **ReactQuill**: For rich text editing functionality.
- **Context API**: For state management across components.
- **CSS/SCSS**: For styling the components.

## Folder Structure

```
.
├── public/               # Static files
├── src/
│   ├── components/       # Reusable UI components
│   ├── constants/        # Constant values (e.g., Quill modules and formats)
│   ├── contexts/         # Context API state and provider
│   ├── pages/            # Main page components
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   └── index.tsx         # Entry point
├── README.md             # Project documentation
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
└── tailwind.config.js    # Tailwind configuration

```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mini-website-editor.git
```

2. Navigate to the project directory:

```bash
cd mini-website-editor
```

3. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Running the Project

To start the development server, run the following command:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

This will start the project at `http://localhost:5173` (or the specified port). Open your browser and navigate to the local server URL to view the app.

### Build for Production

To build the project for production, use the following command:

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

The output will be available in the `dist/` directory.

### Running Tests

If you have tests configured for your project, you can run them using:

```bash
# Using npm
npm run test

# Using yarn
yarn test
```

### Environment Variables

This project uses three environments: `development`, `staging`, and `production`. Ensure to configure the appropriate environment files:

1. **`.env.development`**: For development.
2. **`.env.staging`**: For staging.
3. **`.env.production`**: For production.

### Deployment

You can deploy this project on platforms like **Firebase**, **Vercel**, or **Netlify**. Ensure to configure environment variables and appropriate build steps as per the platform requirements.

## How to Use

### Editing Content

- To add text content, click on the editor area, and a rich text editor will appear.
- You can format text, add headings, and more using the rich text editor toolbar.
- Use the **embed options** to add videos, images, or social media embeds by providing the required URLs.

### Managing Content

- **Title**: You can edit the page title at the top of the editor.
- **Video Embeds**: Supports YouTube and other video platforms.
- **Image Embeds**: Add images by providing an image URL.
- **Social Media Embeds**: Embed posts from Twitter, Instagram, etc., using embed code or URLs.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:

- **Author**: Ephraim Oladepo
- **Email**: theflamepen@gmail.com
