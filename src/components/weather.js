import { useEffect, useState } from "react"
import axios from "axios";
import './weather.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import FlagIcon from '@mui/icons-material/Flag';
import DescriptionIcon from '@mui/icons-material/Description';
import CompressIcon from '@mui/icons-material/Compress';
import StreamIcon from '@mui/icons-material/Stream';

const Weather = () => {
    const [weatherdata, setweatherdata] = useState([]);
    const [weatherdata1, setweatherdata1] = useState([]);
    const [weatherdata2, setweatherdata2] = useState([]);
    const [weatherdata3, setweatherdata3] = useState([]);
    const [place, setplace] = useState([]);
    const [date, setdate] = useState("");


    useEffect(() => {
        setdate(String(new Date()).slice(0,15))
      });

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=58ce7e9150aeeef237f6809fcdd9050a`

    const fetchdata = () => {
        try {
            axios.get(url).then((res) => {
                console.log(res.data)
                setweatherdata(res.data.main)
                setweatherdata1(res.data.wind)
                setweatherdata2(res.data.sys)
                setweatherdata3(res.data.weather)
                console.log("Response :", res)
            })
        } catch (error) {
            console.log("Error Occured :", error)
        }

    }


    return (
        <>
            <center>
                <div className="weather-container">

                    <center><h1>WEATHER</h1>
                    <div >
                        <label>Enter City or Place </label><br></br>
                        <input placeholder="Enter City or Place name " onChange={(event) => { setplace(event.target.value) }}></input>
                        <button style={{width:"120px"}} onClick={fetchdata}>Find Weather</button><br></br>
                        <h1>Weather data for {place}</h1>
                    </div>
                    </center>
                    
                    {weatherdata ?
                    <div>
                        <center>
                        <div className="data">
                            <div className="weather-card"><FlagIcon /><h5>Country name  <br></br>{weatherdata2.country || "No Data"}</h5></div>
                            <div className="weather-card"><DescriptionIcon /><h5>Description   <br></br>{weatherdata3.description || "No Data"}</h5></div>
                            <div className="weather-card"><CompressIcon /><h5>Pressure  <br></br>{weatherdata.pressure || "No Data"}</h5></div>
                            <div className="weather-card"><StreamIcon /><h5>Feels Like  <br></br>{weatherdata.feels_like || "No Data"}</h5></div>
                            <div className="weather-card"><ThermostatIcon /><h5>Minimum Temperature  <br></br>{weatherdata.temp_min || "No Data"}</h5></div>
                            <div className="weather-card"><ThermostatIcon /><h5>Maximum Temperature  <br></br>{weatherdata.temp_max || "No Data"}</h5></div>
                            <div className="weather-card"><WbSunnyIcon /><h5>Humidity  <br></br>{weatherdata.humidity || "No Data"}</h5></div>
                            <div className="weather-card"><AirIcon /><h5>Wind Speed  <br></br>{weatherdata1.speed || "No Data"}</h5></div>
                            <div className="weather-card"><h5>Date <br />{date}</h5></div>
                        </div>
                        </center>
                        
                    </div>
                     
                        : <h1>Weather prediction for the given city is not available</h1>}

                </div>
            </center>


        </>

    );
}

export default Weather;