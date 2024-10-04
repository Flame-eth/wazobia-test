import { Content, Title } from "@/components";
import { useEditorContext } from "@/contexts";
import { FC, lazy, Suspense } from "react";

const EmbedOptions = lazy(() => import("@/components/embed/EmbedOptions"));

const Editor: FC = () => {
  const { editorState } = useEditorContext();

  return (
    <div className=" w-full h-screen py-5 md:py-10 bg-[#fafafa] ">
      <div className=" border border-gray-200 flex flex-col gap-5 md:gap-10 rounded-md w-full max-w-[80%] mx-auto md:max-w-xl lg:max-w-5xl h-full ">
        <div className=" mt-10 border border-gray-100"></div>
        <div className="flex flex-col gap-5 px-4  h-full ">
          <Title />
          <Content />
          {editorState.content.length > 0 && (
            <Suspense fallback={<div>Loading...</div>}>
              <EmbedOptions />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
