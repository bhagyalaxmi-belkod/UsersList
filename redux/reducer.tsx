const initialState={
    astroid:{
        name:"",
        nasa_jpl_url:"",
        is_potentially_hazardous_astroid:""
    }
}

const Reducer=(state=initialState, action:any)=>{
    switch(action.type){
        case "SET_ASTROID":
            return {...state,astroid:action.payload}
            break
        default:
            return state
            break
    }
}

export default Reducer