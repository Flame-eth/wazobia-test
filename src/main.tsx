import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EditorProvider } from "./contexts";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EditorProvider>
      <App />
    </EditorProvider>
    <Toaster />
  </StrictMode>
);
