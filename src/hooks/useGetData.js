import {useState,useEffect} from 'react';

const API = "https://raw.githubusercontent.com/enrique26/curriculumVitae/3a73409793ca7edb95bed007ef94af4f24cb732a/assets/content.json";


const useGetData = () => {
  const [mydata,setData]=useState([]);

  useEffect( () => {

    fetch(API).then(response=>response.json())
    .then(data => setData(data))
  },[])

  return mydata;
}


export default useGetData;
