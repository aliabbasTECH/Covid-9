const INITIAL_STATE={
    data:[

    ],
    country:[

    ],
    
};

const AppReducer =(state = INITIAL_STATE,action)=>{
    console.log("this is reduser Action===>",action.country)
    // console.log("this is reduser Action country===>",action.country)
    switch (action.type){
        case "GETDATA":
            return{
                ...state,
                data:action.data
            }
        case "GETCOUNTRYDATA":
            return{
                ...state,
                country:action.country
            }
            default:
                return state
    }
    
}

export default AppReducer;