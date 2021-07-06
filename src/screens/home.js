
import React  from 'react'
import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getdata,getContry} from '../Store/action'
import Header from '../components/header'
import Footer from '../components/footer'
import Chart from '../components/chart'


export default function Home() {
    // const [covid, setCovid]=useState([])
    // const [country, setCountry]=useState([])

 
    const state =useSelector(state =>state)
    const dispatch = useDispatch()
    

    useEffect(()=>{
      dispatch(getdata()) 
      dispatch(getContry())
      
      // setCovid(state.data)
      // setCountry(state.country)
      
   },[])
   const country = state.country.map((e,i)=>{return  e.name})
console.log("name of country",country)
    return (
      <div>
      <Header/>
      <Chart/>

        <div className="container">
      <div className="container mt-5">
  <div className="d-flex justify-content-center row">
    <div className="col-md-10">
      <div className="rounded">
        <div className="table-responsive table-borderd">
          <table className="table">
            <thead>
              <tr>
            <th className="text-center">Country</th>
            <th className="text-center" scope="col">positive</th>
            <th className="text-center" scope="col">hospitalizedCurrently</th>
            <th className="text-center" scope="col">death</th>
            <th className="text-center" scope="col">date</th>
            <th className="text-center" scope="col">totalTestResults</th>
                <th />
              </tr>
            </thead>
            <tbody className="table-body">
            
            {state.data.map((e, i) => {
             return (
                     <tr className="cell-1">
                       <td className="text-center">{e.state}</td>
                       <td className="text-center">{e.positive}</td>
                       <td className="text-center">{e.hospitalizedCurrently}</td>
                       <td className="text-center">{e.death}</td>
                       <td className="text-center">{e.dateModified}</td>
                       <td className="text-center">{e.totalTestResults}</td>
                       <td className="text-center"><i className="fa fa-ellipsis-h text-black-50" /></td>
                    </tr>)
             })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<Footer/>
      </div>
    )
}

