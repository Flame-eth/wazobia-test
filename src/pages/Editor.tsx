import { Content, Title } from '@/components'
import { FC } from 'react'

const Editor: FC = () => {
  


  return (
    <div className=' w-full h-screen py-5 md:py-10 bg-white '>
        <div className=" border border-gray-200 flex flex-col gap-5 md:gap-10 rounded-md w-full max-w-[80%] mx-auto md:max-w-md lg:max-w-5xl h-full ">
            <div className=" mt-10 border border-gray-100"></div>
            <div className="flex flex-col gap-5 px-4 ">
              <Title />
              <Content />
            </div>
        </div>
    </div>
  )
}

export default Editor