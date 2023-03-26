import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'

export default function Details(params) {
    const router = useRouter()
    const username = router.query.username

    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full flex justify-center items-center mt-10">
                <div className="w-4/5 flex justify-between">
                    <div className="flex flex-col gap-9">
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink text-white">
                            <h1 className="text-2xl">{username}</h1>
                        </div>
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">

                        </div>
                    </div>
                    <div className="w-3/4 h-20 pb-4 ">
                        <h1 className="w-full text-center text-white text-4xl">
                           Their Wardrobe
                        </h1>
                        <h1 className="w-full text-center text-[#808080] text-3xl">
                            40 Outfits
                        </h1>
                        <div className=" mt-4 border w-full"></div>
                        <div className="grid grid-cols-3 grid-flow-row gap-9 mt-10">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
