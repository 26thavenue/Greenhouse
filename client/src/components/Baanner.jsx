import { Link } from 'react-router-dom'


const Baanner = () => {
  return (
    <div className="p-8 bg-[#48AF24] w-[90%] h-[300px] m-auto flex gap-12 justify-center items-center ">
            <h1 className='text-4xl flex-wrap text-white font-bold basis-1/3 leading-[155%]'> Sign Up Now to get Started </h1>
            <Link><button className='bg-white text-black py-[8px] px-6 hover:bg-[#f4f4f4] hover:transition-all ease-in delay-300 rounded-sm basis-1/2 text-[20px]'>Signup</button></Link>
    </div>
  )
}

export default Baanner