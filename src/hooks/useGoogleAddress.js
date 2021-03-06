import {useState, useEffect} from 'core-js/library/fn/reflect/es7/metadata'
import axios from 'axios'

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=TU_API_KEY` 
    useEffect( async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    },[]);
    return map
};

export default  useGoogleAddress;