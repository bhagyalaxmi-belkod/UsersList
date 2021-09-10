
import axios from "axios";
import { Dispatch } from "react";




const http=axios.create({
    baseURL : "https://api.nasa.gov/neo/rest/v1/neo/",
});

const key = "3ZkmL0aPoEyqSIFR9akaMfJa9vfa865xBA1SJcNp";
const getAstroid=(id:number, navigation:any)=> (dispatch: Dispatch<any>)=>{
    return http.get(`${id}?api_key=${key}`).then((astroid:any)=>{
        dispatch({
            type:"SET_ASTROID",
            payload:astroid.data
        })
        navigation.navigate("Astroid")
    })

}

const getRandomAstroid=(navigation:any)=> (dispatch: Dispatch<any>)=>{
    return http.get(`browse?api_key=${key}`).then((res:any)=> {
        const RandomAstroidId= res.data.near_earth_objects[Math.floor(Math.random()*res.data.near_earth_objects.length)].id
       
        http.get(`${RandomAstroidId}?api_key=${key}`).then((res:any)=>{
            dispatch({
                type:"SET_ASTROID",
                payload:res.data
        })
        navigation.navigate("Astroid")
        });
    });
}

export {getAstroid, getRandomAstroid}

