import { FC, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Image, Trash2, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEditorContext } from "@/contexts";
import { useToast } from "@/hooks/use-toast";

const ImageEmbed: FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { updateImage } = useEditorContext();

  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  function handleEmbed() {
    if (!imagePreview) {
      return toast({
        title: "No image found!",
        description: "You need to select a valid image file before submitting.",
      });
    }
    updateImage(imagePreview);
    setImagePreview(null)
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className=" flex gap-2 items-start bg-white cursor-pointer hover:bg-[#E7F1E9] p-3">
          <Image size={20} />
          <div className="flex flex-col gap-1">
            <h1 className=" font-medium capitalize tracking-wider font-OpenSans text-base">
              Picture
            </h1>
            <p className=" font-light font-OpenSans text-sm text-black/60">
              Jpeg, png
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className=" flex flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <h1 className=" text-base font-bold capitalize font-OpenSans text-[#010E05]">
            Embed
          </h1>
          <DialogClose asChild>
            <X />
          </DialogClose>
        </div>
        <h1 className=" font-semibold text-base capitalize font-OpenSans text-[#343E37]">
          Upload Image
        </h1>
        <div className=" flex flex-col gap-3">
          <p className=" font-light text-[#333333] font-OpenSans uppercase text-xs">
            File upload
          </p>
          <div className=" w-full h-[150px] border border-dashed rounded-sm bg-white_shade border-primary_green flex justify-center items-center">
            {imagePreview ? (
              <div className=" w-full h-full relative">
                <img
                  src={imagePreview}
                  alt="preview"
                  className=" w-full h-full object-contain"
                />
                <Trash2
                  onClick={() => setImagePreview(null)}
                  className=" cursor-pointer absolute top-0 right-0 m-3 text-red-600"
                />
              </div>
            ) : (
              <Button
                variant={"outline"}
                className=" bg-transparent border-primary_green "
              >
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className=" hidden"
                />
                <label htmlFor="image-upload" className="upload-button">
                  Import Image from Device
                </label>
              </Button>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() => handleEmbed()}
              className=" bg-primary_green hover:bg-primary_green/90 text-white w-[78px] h-[35px] rounded-sm"
            >
              Embed
            </Button>
            <DialogClose asChild>
              <Button
                onClick={() => setImagePreview(null)}
                className=" border-primary_green/20 bg-transparent border hover:bg-transparent hover:border-primary_green/20 text-[#343E37] w-[78px] h-[35px] rounded-sm"
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageEmbed;
