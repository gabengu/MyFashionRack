import Navbar from '../components/Navbar'


export default function create(params) {
    return(
        <div className="w-full h-screen">
            <Navbar/>

            <div className="w-full flex flex-col justify-center items-center mt-10 text-white">
                <div className='text-4xl tracking-widest flex gap-x-8'>
                    Create Post
                </div>
                <div className="relative flex items-center justify-center mt-6 border border-t w-[65%]">
                    <div className="absolute px-5 bg-darkGrey text-white"></div>
                </div>

                <div className='w-[65%] mt-16'>
                    <div className=' border-2 border-dashed w-1/2 h-1/2 border-pink '>
                            
                    </div>

                </div>
            </div>
        </div>
    )
}

