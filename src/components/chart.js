// import { DatasetController } from 'chart.js'
import React from 'react'
import {Bar} from 'react-chartjs-2'
import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'


export default function Chart() {

    const state =useSelector(state =>state)
    console.log( "barchart ==>",state.country)
    return (
        <div className="container">
            <Bar data={{
                 labels:state.data.map((e,i)=>{return  e.state}),
                 datasets:[{
                      data:state.data.map((e,i)=>{return  e.totalTestResults}),
                      backgroundColor:"orange"
                 }]
             }}>
             

            </Bar>
        </div>
    )
}
