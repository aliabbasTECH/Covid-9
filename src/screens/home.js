
import { useSelector, useDispatch } from 'react-redux'
import Parent from '../components/parent';
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function Home() {

    
    const [coviddata, getCovidData] = useState([]);


    const url = 'https://api.covidtracking.com/v1/states/current.json';

   const getAllData=()=>{
       axios.get(url)
       .then( (res)=>{
           const alldata = res.data
           console.log(alldata)
           getCovidData(alldata)
       })
       .catch(error => console.log(`Error: ${error}`));
   }


    useEffect(() => { 

     getAllData();

    }, []);

//    let state = useSelector(state => state);
//    let dispatch = useDispatch();

//    const updateData =()=>{
//           dispatch({type:"UPDATEDATA", username:"basit"})
//    }
//    console.log(state)
   

    return (
        <div className="container">





<table className="table ">
        <thead>
          <tr>
            <th scope="col">state</th>
            <th scope="col">positive</th>
            <th scope="col">totalTestResults</th>
            <th scope="col">hospitalizedCurrently</th>
            <th scope="col">dateModified</th>
            <th scope="col">death</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
        {coviddata.map((e, i) => {
                return <tr >
                <td >{e.state}</td>
                <td>{e.positive}</td>
                <td>{e.totalTestResults}</td>
                <td>{e.hospitalizedCurrently}</td>
                <td>{e.dateModified}</td>
                <td>{e.death}</td>
                <td>{e.date}</td>
              </tr>
            })}
            
           
       
        </tbody>
      </table>










            {/* <h1>
            Home
            </h1> */}
            {/* {state.users.map((v,i)=>
            
            <p> {v.username}</p>
            
            
            )} */}
            {/* <p>{state.username}</p>
            <button onClick={updateData}>update</button> */}

            
        </div>
    )
}
