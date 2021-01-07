//
import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import Profile from "../assets/images/probileQR.png"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import QRCode from 'react-native-qrcode-svg';

export default class QRScreen extends React.Component {

    // State
    state = {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/320px-QR_code_for_mobile_English_Wikipedia.svg.png?1610011879167"
        //
    };

    // Properties

    // Constructor
    constructor(props) {
        super();
    }

    // Lifecycle
    componentDidMount() {
        //
    }

    componentWillUnmount() {
        //
    }

    // Render
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.rootContainer}>

                    <Image //Profile Image
                        source={Profile}
                        style={{
                            width: undefined,
                            aspectRatio: 1,
                            height: ("10%"),
                        }}/>

                    <Text // User Name
                        style={{
                            fontSize: 19,
                            fontWeight: "bold",
                            marginTop: 10
                        }}>
                        Florebela Espanca
                    </Text>

                    <Text //H2 text
                        style={{fontSize: 15, marginTop: 10}}>
                        QR Code By BayQi
                    </Text>


                    <View style={{flex: 0.5}}/>


                    <Image //QR Code Image
                        style={{aspectRatio: 1, height: "40%"}} source={{uri: this.state.image}}/>

                    <View style={{flex: 0.2, backgroundColor: "red"}}/>


                    <Text // Center Text

                        style={{
                            fontSize: 15,
                            color: "grey",
                            textAlign: "center",
                            marginVertical: hp("5%"),
                            fontWeight: "bold",
                            marginHorizontal: 25
                        }}>Show the above QR Code to recive money
                        via BayQi or share your receipt link</Text>


                    <View // Bottom Grey Container
                        style={{
                            borderRadius: 10,
                            flexDirection: "row",
                            backgroundColor: "#333333",
                            alignSelf: "center",
                            aspectRatio: 2.5,
                            width: undefined,
                            height: hp("13%")
                        }}>


                        <TouchableOpacity //Scan QR Conainer
                            style={{
                                flexDirection: "column",
                                width: "50%",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "space-around",
                                paddingVertical: 15,
                            }}>
                            <Image //QR Image
                                style={{width: undefined, height: wp("6%"), aspectRatio: 1}}
                                source={require("../../src/assets/icons/cameraAlt24Px.png")}/>

                            <Text //Scan Text
                                style={{fontSize: 11, color: "white"}}>Scan QR</Text>
                        </TouchableOpacity>


                        <TouchableOpacity // Share QR Container
                            style={{
                                flexDirection: "column",
                                width: "50%",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "space-around",
                                paddingVertical: 15,
                            }}>


                            <Image// Share Image
                                style={{width: undefined, height: wp("6%"), aspectRatio: 1}}
                                source={require("../assets/icons/saveAlt24Px.png")}/>
                            <Text // Share Text
                                style={{fontSize: 11, color: "white"}}>Share QR</Text>


                        </TouchableOpacity>

                    </View>


                </View>
            </SafeAreaView>
        );
    }


    // Handlers


    // Helpers

}


//
const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },
    rootContainer: {
        width: "100%",
        height: "100%",
        paddingVertical: "5%",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
    },
});
