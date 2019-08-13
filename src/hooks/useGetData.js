import {useState,useEffect} from 'react';

const API = "https://raw.githubusercontent.com/enrique26/curriculumVitae/dev/assets/contentjson.json";


const useGetData = () => {
  const [mydata,setData]=useState([]);

  useEffect( () => {

    fetch(API).then(response=>response.json())
    .then(data => setData(data))
  },[])

  return mydata;
}


export default useGetData;
