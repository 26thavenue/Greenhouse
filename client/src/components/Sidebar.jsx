
const Sidebar = () => {
  return (
    <div className="w-[250px] h-[100vh] bg-white fixed top-0 left-0 p-6 flex flex-col gap-3 justify-center items-center">
        <img src ='/Logo.svg' alt='logo' className="w-[150px] "/>
        <h1>Overview</h1>
        <h1>Analysis</h1>
        <h1>Logout</h1>
        <h1>Settings</h1>
    </div>
  );
}

export default Sidebar;
