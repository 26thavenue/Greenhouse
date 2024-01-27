import { Link } from 'react-router-dom'
import {auth} from '../config/firebase.js'
export default function Login() {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const login = async() => {
      const user = await auth.signInWithEmailAndPassword(email, password);
      return user
  }
  
  if (user) {
     <Navigate to="/dashboard" />;
  } else {
    <Navigate to="/login" />;
  }
    return(
    <div className=' flex flex-col m-6 w-full h-full self-center '>
        <Link to='/'><img src ='/Logo.svg' alt='The logo' className='w-40' /></Link>
      
      <div className='flex flex-col my-12 justify-center items-center gap-3'>
       ( if (!user || user === null) {
            <h1 className='text-red-700'>Invalid Credentials</h1>
        }
       )
        <h1 className="font-bold text-4xl m-2">Login </h1>
       <div className='my-3 flex flex-col text-[#706A6A]'>
        <label htmlFor ='Email'>Email</label>
        <input 
        placeholder="Enter your email" 
        className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]'
        onChange = {(e) => setEmail(e.target.value)}        
        />
       </div>
    
       <div className='my-3 flex flex-col text-[#706A6A] '>
        <label htmlFor ='Password'>Password</label>
        <input 
        onChange = {(e) => setPassword(e.target.value)}
        placeholder="Enter your email" 
        className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]' type='password'
        
        />
       </div>

       <button className='py-3 px-6 bg-[#48AF24]  my-6 text-white w-[400px]'
       
       >Login </button>
       <p>Dont have an account ? <span className='text-[#48AF24] hover:text-green-900'><Link to='/register'> Sign up here</Link></span></p>
      </div>
       
       
    </div>
    )   
}