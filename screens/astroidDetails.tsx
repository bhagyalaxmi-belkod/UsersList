import React from "react";
import {View, Text, TextInput} from "react-native";

import { connect } from "react-redux";
import style from "../style/styles";

const AstroidDetails= (astroid:any) => {
    return(
        <View style={style.astroidDetails}>
            <View>
                <Text>
                    <Text style={style.btext}>Name: </Text>
                    <Text>{astroid.astroid.name}</Text>
                </Text>
            </View>
            <View>
                <Text>
                    <Text style={style.btext}>Nasa JPL Url: </Text>
                    <Text>{astroid.astroid.nasa_jpl_url}</Text>
                </Text>
            </View>
            <View>
                <Text>
                    <Text style={style.btext}>is_potentially_hazardous_astroid: </Text>
                    <Text>{astroid.astroid.is_potentially_hazardous_astroid?"YES":"NO"}</Text>
                </Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => ({astroid:state.reducer.astroid})

export default connect(mapStateToProps)(AstroidDetails)