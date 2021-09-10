import { TextBase, View, TextInput, Button } from "react-native";
import style from "../style/styles";
import { getAstroid, getRandomAstroid } from "../redux/action";
import React, { useState } from "react";
import { connect } from "react-redux";

type Props={
    getAstroid:Function;
    getRandomAstroid:Function;
    navigation:{
        navigate:Function;
    }
}

const Home = ({getRandomAstroid, getAstroid, navigation}:Props) => {
    const [id,setId]=useState("")
    const handleTextChange= (val:string)=>{
        setId(val)
    }

    const submit = () =>{
        getAstroid(id, navigation)
    }

    const RandomAstroid = () =>{
        getRandomAstroid(navigation)
    }

    return(
        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder="Enter Astroid Id"
                onChangeText={handleTextChange}
            />
            <View style={style.buttons}>
                <Button title="Submit" onPress={submit} disabled={false}/>
                <Button title="Random Astroid" onPress={RandomAstroid}/>
            </View>
        </View>
        
    )
}

export default connect(null, {getAstroid, getRandomAstroid})(Home)