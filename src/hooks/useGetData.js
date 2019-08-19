import {useState,useEffect} from 'react';

const API = "https://github.com/enrique26/curriculumVitae/blob/dev/assets/content.json"
// "https://raw.githubusercontent.com/enrique26/curriculumVitae/8162143ee7ca5661bc95d120f41dee9a709bfcb9/assets/content.json";


const useGetData = () => {
  const [mydata,setData]=useState([]);

  useEffect( () => {

    fetch(API).then(response=>response.json())
    .then(data => setData(data))
  },[])

  return mydata;
}


export default useGetData;
