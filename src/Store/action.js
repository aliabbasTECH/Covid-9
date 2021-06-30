// const [coviddata, getCovidData] = useState([]);
// import {  useDispatch } from 'react-redux';

// const url = 'https://api.covidtracking.com/v1/states/current.json';

// const getAllData=()=>{
//        axios.get(url)
//        .then( (res)=>{
//            const alldata = res.data
//            console.log(alldata)
//            getCovidData(alldata)
//        })
//        .catch(error => console.log(`Error: ${error}`));
//    }


//     useEffect(() => { 

//      getAllData();

//     }, []);

// let dispatch = useDispatch();
//     dispatch({type:"UPDATEDATA", username:"basit"})