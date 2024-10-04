import { FC } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Share2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { socialEmbedSchema } from "@/constants";
import { useEditorContext } from "@/contexts";

const ImageEmbed: FC = () => {
  const { updateSocialEmbed } = useEditorContext();

  const form = useForm<z.infer<typeof socialEmbedSchema>>({
    resolver: zodResolver(socialEmbedSchema),
    defaultValues: {
      platform: "facebook",
      url: "",
      embedCode: "",
      disableCaptions: true,
    },
  });

  function onSubmit(values: z.infer<typeof socialEmbedSchema>) {
    console.log(values);
    updateSocialEmbed({
      ...values,
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex gap-2 items-start bg-white cursor-pointer hover:bg-[#E7F1E9] p-3">
          <Share2 size={20} />
          <div className="flex flex-col gap-1">
            <h1 className=" font-medium capitalize tracking-wider font-OpenSans text-base">
              Social
            </h1>
            <p className=" font-light font-OpenSans text-sm text-black/60">
              Embed a facebook link
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel className="font-light text-[#333333] font-OpenSans uppercase text-xs">Social Media Platform</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a platform" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
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
                    <FormLabel className="font-light text-[#333333] font-OpenSans uppercase text-xs"> URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.faceboom.com/p/XXXXXXX/"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="embedCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-light text-[#333333] font-OpenSans uppercase text-xs"> Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Paste the embed code provided by the social media platform here"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="disableCaptions"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel className="font-light text-[#333333] font-OpenSans text-xs">
                        Disable Captions
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-primary_green h-3 shrink"
                      />
                    </FormControl>
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

export default ImageEmbed;
