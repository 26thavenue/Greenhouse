

const Hero = () => {
  return (
    <div className="grid grid-cols-8 px-8 py-16 bg-[#48AF24]  gap-16 justify-center align-center">
        <div  className=" col-span-4">
            <h1 className="text-5xl font-bold leading-[145%] text-white">Grow Smart with Greenery</h1>
            <p className="text-[#DFDFDF] text-[18px] py-6 leading-[153%]">Greenery is a cloud based platform designed for the monitoring, control and revolution of greenhouse operations</p>
            <button className="bg-white text-black hover:bg-[#f4f4f4] hover:transition-all ease-in delay-300 px-8 py-3 font-100 rounded-full">Start Now</button>
        </div>
        <img src='/img.png' alt='A man plowing field manually' className="w-[400px] col-span-3 col-start-6  "/>
        <div>

        </div>
    </div>
  )
}

export default Hero