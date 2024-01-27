import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className=" flex bg-[#EEEDED] h-[100vh] text-center items-center gap-24">
      <Sidebar />
      
            {/* LED */}
          <div className="bg-white w-[300px] h-[300px]">
              <h1 className ='text-black'>LED</h1>
          </div>
       
       
    </div>
  )
}

export default Dashboard