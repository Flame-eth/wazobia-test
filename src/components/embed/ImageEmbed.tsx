import { FC } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Image } from 'lucide-react'

const ImageEmbed: FC = () => {
  return (
   <Dialog>
    <DialogTrigger asChild>
        <div className=" flex gap-2 items-start bg-white cursor-pointer hover:bg-[#E7F1E9] p-3">
            <Image size={20} />
            <div className="flex flex-col gap-1">
                <h1 className=" font-medium capitalize tracking-wider font-Poppins text-base">
                    Picture
                </h1>
                <p className=" font-light font-Poppins text-sm text-black/60">
                    Jpeg, png
                </p>
            </div>
        </div>
    </DialogTrigger>
    <DialogContent>
        
    </DialogContent>
    </Dialog>
  )
}

export default ImageEmbed