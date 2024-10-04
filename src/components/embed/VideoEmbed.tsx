import { FC, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Video, X } from "lucide-react";
import { useEditorContext } from "@/contexts";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { videoEmbedSchema } from "@/constants";

const VideoEmbed: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { insertVideoInContent } = useEditorContext();

  const form = useForm<z.infer<typeof videoEmbedSchema>>({
    resolver: zodResolver(videoEmbedSchema),
    defaultValues: {
      provider: "youtube",
      url: "",
    },
  });

  function onSubmit(values: z.infer<typeof videoEmbedSchema>) {
    // console.log(values);
    insertVideoInContent({
      // ...values,
      url: values.url,
      provider: values.provider,
    });
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className=" flex gap-2 items-start bg-white cursor-pointer hover:bg-[#E7F1E9] p-3">
          <Video size={20} />
          <div className="flex flex-col gap-1">
            <h1 className=" font-medium capitalize tracking-wider font-OpenSans text-base">
              Video
            </h1>
            <p className=" font-light font-OpenSans text-sm text-black/60">
              Embed a YouTube video
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
        <div className=" flex flex-col gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="provider"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-light text-[#333333] font-OpenSans uppercase text-xs">
                      Video Provider
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a video provider" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="vimeo">Vimeo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-light text-[#333333] font-OpenSans uppercase text-xs">
                      Video URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3 items-center">
                <Button
                  type="submit"
                  className=" bg-primary_green hover:bg-primary_green/90 text-white w-[78px] h-[35px] rounded-sm"
                >
                  Embed
                </Button>
                <DialogClose asChild>
                  <Button className=" border-primary_green/20 bg-transparent border hover:bg-transparent hover:border-primary_green/20 text-[#343E37] w-[78px] h-[35px] rounded-sm">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoEmbed;
