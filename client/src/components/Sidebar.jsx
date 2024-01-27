
const Sidebar = () => {
 
  return (
    <div className="w-[250px] h-[100vh] bg-white fixed top-0 left-0 p-6 flex flex-col gap-3 justify-center items-center">
        <img src ='/Logo.svg' alt='logo' className="w-[150px] "/>
        <div className="flex flex-col flex-1">
          <h1 className ='bg-green-800 text-white px-6 py-3 w-full '>Overview</h1>
        </div>
        <button  className='py-3 px-6 bg-[#48AF24] hover:bg-[#285d14]  my-6 text-white'>Logout</button> 
    </div>
  );
}

export default Sidebar;
