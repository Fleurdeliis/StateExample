import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image, opacity } from "react-native";

const Flex = () => {
    const [opacity, setOpacity] = useState(0.0);
    const [count, setCount] = useState([]);
    const [string, setString] = useState("");
    const [countString, setCountString] = useState("");
    useEffect(() => { count.length == 0 ? setString((v) => "array empty") : setString((v) => "array not empty") });
    return (
        <View >
         <View style={[styles.top]}>
                <Pressable style={[styles.topButton, styles.darkBlue]} onPressIn={() => { setCount([...count, "deneme"]) }} onPressOut={() => {setCountString(count.toString()) }}>
                    <Text style={[styles.buttonText]}>{(count.length).toString()}</Text>
                </Pressable>

                    <Text style={[styles.label]}>DENEME</Text>

                <Pressable style={[styles.topButton, styles.darkBlue, { borderRadius: 100 }]}
                    onPress={() => { opacity == 0 ? setOpacity(1.0) : setOpacity(0.0) }}>
                    <Text style={{ color: "white", fontSize:15 }}>on/off</Text>
                </Pressable>
            </View>

            <View style={[styles.main]}>
                <View style={[styles.photoContainer]}>
                    <Image source={require('./assets/masterduel-7.08.2022 02_13_10.png')} style={[styles.photo]} />
                    <Text style={{ fontSize: 20}}>{string}</Text>
                </View>
                <Text style={{ opacity: opacity }}>{countString}</Text>
                <Pressable style={[styles.empty]} onPressIn={() => { setCount([])}} onPressOut={() => { setCountString(count.toString()) }}>
                    <Text style={{ fontWeight: "bold", fontSize:40 }}>Clear</Text>
                </Pressable>
            </View>

            <View style={[styles.bottom]}>
                <Pressable style={[styles.bottomButton, { backgroundColor: "lightyellow"}]}>
                    <Text style={[styles.buttonText]}>0</Text>
                </Pressable>
                <Pressable style={[styles.bottomButton, { backgroundColor: "yellow"}]}>
                    <Text style={[styles.buttonText]}>0</Text>
                </Pressable>
                <Pressable style={[styles.bottomButton, { backgroundColor: "orange"}]}>
                    <Text style={[styles.buttonText]}>0</Text>
                </Pressable>
                <Pressable style={[styles.bottomButton, { backgroundColor: "darkorange"}]}>
                    <Text style={[styles.buttonText]}>0</Text>
                </Pressable>
            </View>
      </View>

    );
};

const styles = StyleSheet.create({
    photoContainer: {
        flexDirection: "row",
        width: '100%',
        height: '37%',
        marginTop: '5%',
        alignItems: "center" 
    },
    darkBlue: {
        backgroundColor:"darkblue"
    },
    label: {
        fontSize: 25,
        color: "skyblue",
        fontWeight: "bold"
    },
    buttonText: {
        color: "red",
        fontSize: 30

    },
    topButton: {
        width: '13%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    bottomButton: {
        width:'25%',
        alignItems: "center",
        justifyContent: "center",
    },

    top: {
        width: '100%',
        height: '8%',
        flexDirection: "row",
        backgroundColor: "darkred",
        alignItems: "center",
        justifyContent: "space-between"
        
    },
    bottom: {
        width: '100%',
        height: '8%',
        flexDirection: "row",
        alignItems: "stretch",

    },
    main: {
        width: '100%',
        height: '84%',
        backgroundColor: "darkviolet",
        alignItems: "center",
        justifyContent: "space-between"

    },
    empty: {
        justifyContent:"center",
        alignItems: "center",
        borderRadius:30,
        width: '40%',
        height: '30%',
        backgroundColor: "red",
        marginBottom:'10%'
        
    },
    photo: {
        backgroundColor: "steelblue",
        borderRadius: 200,
        width: '50%',
        height: '100%',
        marginTop: 25,
        marginLeft: 15,
        marginRight: 25
    
    }

    }
);

export default Flex;