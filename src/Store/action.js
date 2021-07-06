import axios from "axios"

 const getdata=()=>{
    return(dispatch)=>{  
        
    axios.get('https://api.covidtracking.com/v1/states/current.json')
    .then(function (response) { dispatch({type:"GETDATA", data:response.data})  })   
    }}

const getContry=()=>{
    return(dispatch)=>{  
         
axios.get("https://restcountries.eu/rest/v2/all")
    .then(function (response) { dispatch({type:"GETCOUNTRYDATA", country:response.data})  })
    }}    

export {
    getdata,
    getContry,
}





