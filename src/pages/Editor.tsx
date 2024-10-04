import { Content, ContentCount, Footer, Title } from "@/components";
import { useEditorContext } from "@/contexts";
import { FC, lazy, Suspense } from "react";

const EmbedOptions = lazy(() => import("@/components/embed/EmbedOptions"));

const Editor: FC = () => {
  const { editorState } = useEditorContext();

  return (
    <div className="w-full h-screen bg-[#fafafa]">
      <div className=" w-full h-full flex flex-col max-w-[80%] mx-auto md:max-w-xl lg:max-w-5xl">
        <div className="flex-grow flex flex-col gap-5 md:gap-10 w-full  border border-gray-200 rounded-md mt-10">
          <div className="flex flex-col flex-grow py-5 md:py-10 gap-4">
            <div className="  border-gray-200 border-[0.5px]"></div>
            <div className="flex flex-col flex-grow px-4 gap-4">
              <Title />
              <Content />
              {editorState.content.length > 0 && (
                <Suspense fallback={<div>Loading...</div>}>
                  <EmbedOptions />
                </Suspense>
              )}
            </div>
          </div>
          <ContentCount />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Editor;
