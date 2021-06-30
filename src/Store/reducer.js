const INITIAL_STATE ={
    // users:
    // [
    //     {
    //         username:"ali",
    //     },
    //     {
    //         username:"hassan",
    //     },

    // ] ,
    username: "aliabbas"
}

export default (state = INITIAL_STATE,action) =>{
    // console.log("reducer Action==>",action.username)
    switch(action.type){
        case "UPDATEDATA":
            return({
                ...state,
                username: action.username
            })
            default:
                return state
    }
} 

