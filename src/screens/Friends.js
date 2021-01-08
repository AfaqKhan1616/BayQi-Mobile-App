//
import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Transfer from "../assets/transfer";
import ProfileImage from "../assets/icons/Profile-Male.png";
import SendMoney from "../assets/svg/sendMoneyBackground";


export default class Friends extends React.Component {

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

          <View //Header
            style={{
              width: "93%",
              height: "10%",
              alignSelf: "center",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>

            <Text //Friends  Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
              }}>
              Friends</Text>
            <TouchableOpacity>
              <Text // History
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#039eff",
                }}>History</Text>
            </TouchableOpacity>

          </View>


          <View // Tiles Container Layout View
            style={{
              flexDirection: "row",
              width: "93%",
              //backgroundColor: "red",
              alignSelf: "center",
              justifyContent: "space-around",
              // height: "30%"
            }}>


            <TouchableOpacity // Left Tile
              style={{
                width: "48%",
                backgroundColor: "#039eff",
                borderRadius: 12,
                overflow: "hidden",

              }}>
              <ImageBackground source={require("../assets/icons/group9.png")} style={{
                padding: 20,
                resizeMode: "cover",
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}>

                <View //SVG
                  style={{ alignSelf: "flex-start", width: "100%", height: "20%" }}>
                  <Transfer />
                </View>


                <View style={{ flexDirection: "column" }}>
                  <Text style={{
                    marginBottom: 7,
                    fontSize: 19,
                    fontWeight: "bold",
                    color: "white",
                  }}>Send Money</Text>
                  <Text style={{ fontSize: 12, color: "white" }}>Transfer money to requested
                    fellowss</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <View // Spacer
              style={{ flex: 1 }} />

            <TouchableOpacity // Right Tile
              style={{
                width: "48%",
                backgroundColor: "#039eff",
                borderRadius: 12,
                padding: 20,
                justifyContent: "space-between",
                flexDirection: "column",
                overflow: "hidden",

              }}>
              {/*<ImageBackground source={require("../assets/icons/group11.png")} style={{*/}
              {/*    padding: 20,*/}

              {/*    flexDirection: "column",*/}
              {/*    justifyContent: "space-between"*/}
              {/*}}>*/}

              <View //SVG
                style={{ alignSelf: "flex-start", width: "100%", height: "20%" }}>
                <Transfer />
              </View>


              <View style={{ flexDirection: "column" }}>
                <Text style={{
                  marginBottom: 7,
                  fontSize: 19,
                  fontWeight: "bold",
                  color: "white",
                }}>Request</Text>
                <Text style={{ fontSize: 12, color: "white" }}>Request for money for your wallet</Text>
              </View>
              {/*</ImageBackground>*/}
            </TouchableOpacity>


          </View>

          <View style={{ width: "100%", height: "2%" }} />

          <View // New Request Container
            style={{
              width: "93%",
              height: "7%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
            }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,

              }}>
              New Requests
            </Text>

            <TouchableOpacity // New Message Container
              style={{
                borderRadius: 19,
                backgroundColor: "#f36105",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text
                style={{
                  marginHorizontal: 15,
                  marginVertical: 6,
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}>
                2 New
              </Text>
            </TouchableOpacity>

          </View>

          <Text // Some of your......
            style={{
              flexDirection: "row",
              marginLeft: 15,
              fontSize: 16,
              marginRight: 75,
              color: "#666666",

            }}>Some of your friends in circle has requested for his / her wallet</Text>

          <View //black bar
            style={{
              borderRadius: 10,
              width: "10%",
              height: "1%",
              backgroundColor: "black",
              margin: "4%",
            }} />

          <ScrollView showsVerticalScrollIndicator={false}
                      contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}>

            <View // Requests Container
              style={{
                marginBottom: 10,
                alignSelf: "center",
                flexDirection: "column",
                width: wp("93%"),
                height: hp("27%"),
                borderRadius: 10,
                backgroundColor: "#f2f2f2",
                overflow: "hidden",

              }}>
              <TouchableOpacity //Profile Detail Container
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderBottomWidth: 0.5,
                }}>

                <View //profile Image
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>

                  <Image  //Image
                    style={{ width: 50, height: 50 }} source={ProfileImage} />


                </View>

                <View
                  style={{

                    flex: 2.5,

                    // backgroundColor: "yellow",
                    flexDirection: "column",
                    justifyContent: "space-evenly",


                  }}>
                  <Text  //Person Name

                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                    }}>Monica Florencio</Text>

                  <View
                    style={{
                      alignSelf: "flex-start",
                      flexDirection: "row",
                      width: "100%",

                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "bold",
                        color: "grey",
                        marginRight: 9,
                      }}>ID
                      :
                      3452 |</Text>
                    <Text style={{ fontSize: 13, fontWeight: "bold", color: "grey" }}>20
                      November</Text>
                  </View>
                </View>


                <View
                  style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16, color: "grey" }}>></Text>
                </View>


              </TouchableOpacity>


              <View
                style={{
                  flex: 1,
                  borderBottomWidth: 0.5,
                  paddingLeft: "22%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}>
                <Text

                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                  }}>165.314,00 AZK</Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "grey",
                  }}>Requested Amount</Text>


              </View>


              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}>


                <TouchableOpacity // Reject Container
                  style={{
                    backgroundColor: "#cccccc",
                    marginRight: 5,
                    borderRadius: 10,
                  }}>


                  <Text style={{
                    color: "grey",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginVertical: 8,
                    marginHorizontal: 12,
                  }}>Reject</Text>

                </TouchableOpacity>


                <TouchableOpacity // Accept Request Container


                  style={{
                    backgroundColor: "#bde0ff",

                    marginLeft: 5, borderRadius: 10,
                  }}>


                  <Text style={{
                    color: "#039eff",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginVertical: 8,
                    marginHorizontal: 12,
                  }}>Accept Request </Text>


                </TouchableOpacity>
              </View>
            </View>

          </ScrollView>


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
