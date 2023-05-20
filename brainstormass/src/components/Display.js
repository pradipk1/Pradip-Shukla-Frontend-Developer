import React,{useEffect,useState} from 'react'
import getData from './getData'
import './display.css';

function Display() {
    let [state,setState]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            let data= await getData();
            setState(data);
            // console.log(data);
        }
        fetchData();
    },[]);
    // console.log(state)

  return (
    <div className='display-container'>
        {
            state.map((ele)=>{
                return (
                    <div className='card-container'>
                        <h4>Capsule Serial: <span className='span-tag'>{ele.capsule_serial}</span></h4>
                        <h4>Staus: <span className='span-tag'>{ele.status}</span></h4>
                        <h4>Deatils: <span className='span-tag'>{ele.details}</span></h4>
                        <h4>Type: <span className='span-tag'>{ele.type}</span></h4>
                        <h4>Reuse Count: <span className='span-tag'>{ele.reuse_count}</span></h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Display;