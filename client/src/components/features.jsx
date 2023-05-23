const Features = () => {
    return (
        <div className="p-8 grid gap-8">
            <h1 className="py-3 text-4xl text-center font-bold"> Our technology includes</h1>
            <div className='flex gap-6 justify-center items-center '>
                <img src='Hero2.png' alt='greenhouse_picture' className='w-[350px] ' />
                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-[22px]'>Powered by complex technology and AI</h1>
                    <p>The Greenery AI runs on complex algorithms to maximize plants produce </p>
                </div>
                
            </div>
            <div className='flex gap-6 justify-center items-center'>
                <img src='plant.svg' alt='greenhouse_picture' className='w-[350px]' />
                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-[22px]'>Flexibility is the Key</h1>
                    <p>With Greenery you can cultivate any plant from tomatoes to corn,the sky is the limit. </p>
                </div>
                
            </div>
        </div>
    )
}

export default Features