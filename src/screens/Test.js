//
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default class Test extends React.Component {

    // State
    state = {
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

                    <Text style={{
                        fontSize: 12,
                    }}>FAQ detail screen</Text>

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
        flexDirection: "column",
        backgroundColor: "white",
    },
});
