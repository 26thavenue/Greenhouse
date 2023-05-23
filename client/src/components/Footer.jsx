import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="mx-8 my-12 h-[300px] flex flex-col justify-center align-center gap-">
       
        <img src='Logo.svg' alt='The logo' className='w-[300px] ' />
        <div>
          <h1>Created by <Link to='https://linktr.ee/26th_avenue'>Me!!!</Link></h1>
        </div>
    </div>
  )
}

export default Footer