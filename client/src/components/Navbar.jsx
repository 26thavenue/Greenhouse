import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between align-center bg-[#48AF24] py-8'>
        <div className='px-6'>
            <Link to='/'><img src ='/Logo.svg' alt='The logo' className='w-40 ' /></Link>
        </div>
        
        
        <div className='w-1/2 flex gap-10 align-center justify-end cursor-pointer px-12'>
            <Link><p className='text-white py-[6px]'>Pricing</p></Link>
            <Link><p className='text-white py-[6px]'>Contact Us</p></Link>
            <Link><p className='text-white py-[6px]'>About Us</p></Link>
        
            <Link><button className='bg-black hover:transition-all ease-in delay-300 text-white py-[6px] px-5 hover:bg-slate-600 rounded-sm'>Login</button></Link>
            <Link><button className='bg-white hover:transition-all ease-in delay-300 text-black py-[6px] px-5 hover:bg-[#f4f4f4] rounded-sm'>Signup</button></Link>
        
        </div>
       

    </div>
  )
}

export default Navbar