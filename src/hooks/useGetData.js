import {useState,useEffect} from 'react';

const API =
// "https://raw.githubusercontent.com/enrique26/curriculumVitae/2089b312abea89d06ad10c00a6e58f58014a88e0/assets/content.json";
"https://raw.githubusercontent.com/enrique26/curriculumVitae/dev/assets/content.json";



const useGetData = () => {
  const [mydata,setData]=useState([]);

  useEffect( () => {

    fetch(API).then(response=>response.json())
    .then(data => setData(data))
  },[])

  return mydata;
}


export default useGetData;
