import { Link,Navigate } from 'react-router-dom'
import {auth} from '../config/firebase.js'
import {createUserWithEmailAndPassword,signOut} from 'firebase/auth'
import {useState,useEffect} from 'react'

const Register = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  if (user) {
    return <Navigate to="/dashboard" />;
  } else {
     <Navigate to ='/register' />;
  }

  const signIn = async() => {
    try{
        await createUserWithEmailAndPassword(auth,email,password)
      }catch(err){
        console.error(err)
      }
    }

    


  return (
    <div className='flex flex-col m-6 w-full h-full self-center '>
       <Link to='/'><img src ='/Logo.svg' alt='The logo' className='w-40' /></Link>
       <div className=' flex flex-col m-6   justify-center items-center gap-3 '>
        <h1 className="font-bold text-4xl m-2">Signup✨ </h1>

       {/* Input field for Email */}

       <div className='my-3 flex flex-col text-[#706A6A]'>
        <label htmlFor ='Name'>Email</label>
        <input placeholder="Enter your name" 
        onChange = {(e) => setEmail(e.target.value)}
        className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]'/>
       </div>

       {/* Input field for Password */}
    
       <div className='my-3 flex flex-col text-[#706A6A] '>
        <label htmlFor ='Password'>Password</label>
        <input 
        onChange = {(e) => setPassword(e.target.value)}
        className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]' type='password'/>
       </div>

       {/* Input field for Confirm Password */}

       

        <button 
         onClick = {signIn}
         className='py-3 px-6 bg-[#48AF24]  my-6 text-white w-[400px]'>SignUp</button>

        
        <p>Have you created an account already? <span className='text-[#48AF24]'><Link to='/login'> Login </Link></span></p>
       
    </div>
  </div>
  )  }
export default Register