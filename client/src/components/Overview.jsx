import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import {auth} from '../config/firebase.js'
import {signOut} from 'firebase/auth'

const server_address ='ny3.blynk.cloud'
const token = 'NEHehKR8oYUbvY88vy7NRpkBUlF7h0QW'

const checkDeviceStatus = `https://${server_address}/external/api/isHardwareConnected?token=${token}`
const getVirtualPin = `https://${server_address}/external/api/get?token=${token}`
const updateVirtualPin = `https://${server_address}/external/api/update?token=${token}`
const getMultipleVirtualPin = `https://${server_address}/external/api/get?token=${token}&{pin}&{pinX}`

const pumpPin = 'v12'
const fanPin = 'v13'
const LEDPin ='v11'
const LDRPin ='v3'
const temperaturePin = 'v0'
const humidityPin = 'v1'
const soilMoisturePin = 'v2'





const Overview = () => {
    const [getData, setGetData] = useState(null);
    const [pumpData, setPumpData] = useState(null);
    const [tempData, setTempData] = useState(null);
    const [humData, setHumData] = useState(null);
    const [moistureData, setMoistureData] = useState(null);
    const [ldrData, setldrData] = useState(null);
    const [ledData, setLedData] = useState(null);
    const [fanData, setFanData] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [status, setStatus] = useState('Off');
    // const [multipleData, setMultipleData] = useState(null);

     const logout = async() => {
      try{
        await signOut(auth)
        return <Navigate to="/" />;
      }catch(err){
        console.error(err)
      }     
    }

    useEffect(() => {
    const fetchData = async() =>{
        try {
            const response = await axios.get(`${checkDeviceStatus}`);
            setGetData(response.data.toString());

            const getPumpPinResponse = await axios.get(`${getVirtualPin}&${pumpPin}`);
            setPumpData(getPumpPinResponse.data.toString());

            const getTempPinResponse = await axios.get(`${getVirtualPin}&${temperaturePin}`);
            setTempData(getTempPinResponse.data.toString());

            const getHumidityPinResponse = await axios.get(`${getVirtualPin}&${humidityPin}`);
            setHumData(getHumidityPinResponse.data.toString());

            const getMoisturePinResponse = await axios.get(`${getVirtualPin}&${soilMoisturePin}`);
            setMoistureData(getMoisturePinResponse.data.toString());

            const getLDRPinResponse = await axios.get(`${getVirtualPin}&${LDRPin}`);
            setldrData(getLDRPinResponse.data.toString());

            const getLEDPinResponse = await axios.get(`${getVirtualPin}&${LEDPin}`);
            setLedData(getLEDPinResponse.data.toString());

            const getFanPinResponse = await axios.get(`${getVirtualPin}&${fanPin}`);
            setFanData(getFanPinResponse.data.toString());
           
            const updateVirtualPinResponse = await axios.get(`https://${server_address}/external/api/get?token=${token}`);
            setUpdateData(updateVirtualPinResponse.data.toString());
            

            const getMultipleVirtualPinResponse = await axios.get(`https://${server_address}/external/api/get?token=${token}&pin={pin}&pinX={pinX}`);
            setMultipleData(getMultipleVirtualPinResponse.data.toString());
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }

}

    fetchData();
  }, [checkDeviceStatus]);

 

//   const setStatusValue = (value) => {
//     if (value === 0) {
//       setStatus('Off');
//     } else if (value === 1) {
//       setStatus('On');
//     }
//   };
    return(
        <div>
            <div className='w-[100vw] flex bg-white px-6 py-6 justify-between items-center '>
                <Link to='/'><img src ='/Logo.svg' alt='The logo' className='w-40 flex-1' /></Link>
                <button className='text-white bg-black px-3 py-2 rounded-md'>Logout</button>
            </div>
        <div className='bg-[#EEEDED] h-[100%] p-6 grid grid-cols-3 gap-6'>
            
            {getData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Device Status</p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(getData).slice(1, -1).toUpperCase()}</p>
            </div>
      ) : (
        <p>Loading...</p>)}


            {tempData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Temperature</p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(tempData).slice(1, -1).toUpperCase()} C</p>
            </div>
      ) : (
        <p>Loading...</p>)}


            {humData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Humidity</p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(humData).slice(1, -1).toUpperCase()}</p>
            </div>
      ) : (
        <p>Loading...</p>)}


            {moistureData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Soil Moisture</p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(moistureData).slice(1, -1).toUpperCase()}</p>
            </div>
      ) : (
        <p>Loading...</p>)}


            {ldrData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>LDR</p>
                <p className = 'text-3xl font-bold text-[#656363] '> {JSON.stringify(ldrData).slice(1, -1).toUpperCase()} </p>
            </div>
      ) : (
        <p>Loading...</p>)}


            {ledData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>LED </p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(ledData).slice(1, -1).toUpperCase()}</p>
                <button className='text-white bg-black px-3 py-2 rounded-md'>ON</button>
            </div>
      ) : (
        <p>Loading...</p>)}

            {fanData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Fan </p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(fanData).slice(1, -1).toUpperCase()}</p>
                <button className='text-white bg-black px-3 py-2 rounded-md'>ON</button>
            </div>
      ) : (
        <p>Loading...</p>)}

        {pumpData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Pump Status</p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(pumpData).slice(1, -1).toUpperCase()}</p>
                <button className='text-white bg-black px-3 py-2 rounded-md'>ON</button>
            </div>
      ) : (
        <p>Loading...</p>)}


{/* 
            {getData ? (
            <div className = 'bg-white w-[300px] h-[300px] shadow-sm justify-center items-center px-6 py-6 gap-6 flex flex-col'>
                <p className='text-xl '>Device Status</p>
                <p className = 'text-3xl font-bold text-[#656363] '>{JSON.stringify(getData).slice(1, -1).toUpperCase()}</p>
            </div>
      ) : (
        <p>Loading...</p>)} */}

        </div>
    </div>
    )
}

export default Overview

