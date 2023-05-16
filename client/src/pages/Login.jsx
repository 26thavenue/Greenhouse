import { Link } from 'react-router-dom'
export default function Login() {
    return(
    <div className=' flex flex-col m-6 w-full h-full self-center '>
        <Link to='/'><img src ='/Logo.svg' alt='The logo' className='w-40' /></Link>
      
      <div className='flex flex-col my-12 justify-center items-center gap-3'>
        <h1 className="font-bold text-4xl m-2">Login </h1>
       <div className='my-3 flex flex-col text-[#706A6A]'>
        <label htmlFor ='Email'>Email</label>
        <input placeholder="Enter your email" className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]'/>
       </div>
    
       <div className='my-3 flex flex-col text-[#706A6A] '>
        <label htmlFor ='Password'>Password</label>
        <input placeholder="Enter your email" className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]' type='password'/>
       </div>

       <button className='py-3 px-6 bg-[#48AF24]  my-6 text-white w-[400px]'>Login 😁</button>
       <p>Dont have an account ? <span className='text-[#48AF24] hover:text-green-900'><Link to='/register'> Sign up here</Link></span></p>
      </div>
       
       
    </div>
    )   
}