import {db} from '../config/firebase'
import {getDocs,collection} from 'firebase/firestore'


const linkRef = collection(db,"link")

const checkDeviceStatus = 'https://ny3.blynk.cloud/external/api/isHardwareConnected?token=NEHehKR8oYUbvY88vy7NRpkBUlF7h0QW'
const getVirtualPin = 'https://ny3.blynk.cloud/external/api/update?token=NEHehKR8oYUbvY88vy7NRpkBUlF7h0QW&'
const updateVirtualPin = 'https://ny3.blynk.cloud/external/api/get?token=NEHehKR8oYUbvY88vy7NRpkBUlF7h0QW&'
const getMultipleVirtualPin = 'https://{server_address}/external/api/get?token={token}&{pin}&{pinX}'

const pumpPin = v12
const fanPin = v13
const LEDPin =v11
const LDRPin =v3
const temperaturePin = v0
const humidityPin = v1
const soilMoisturePin = v2


useEffect( () =>{
    const getBlynkLink = async() => {
        try{
            const data = await getDocs(linkRef)
        }catch(err){
            console.error(err)
        }
    }
    getBlynkLink();
},[])

