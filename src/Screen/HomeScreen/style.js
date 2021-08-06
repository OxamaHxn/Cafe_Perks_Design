import { Platform, StyleSheet } from "react-native";
import { fullWidth, screenHeight, screenWidth } from "../../Config/screenRatio";
import { Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
    },
    wrap: {
        marginHorizontal: 4,
      },
      bottomslider: {
        marginTop: Platform.OS === 'ios' ? 6 : 7,
        flexDirection: 'row',
        marginHorizontal: 5,
        flex:1,
      },
      leftBox: {
        width: wp('47.5'),
        // height: Platform.OS === "android" ? hp('23.5') : hp('21.2'),
        backgroundColor: '#FECF00',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        marginBottom: Platform.OS === "android" ? hp('4%') : hp('1.4%'),
        flex:1
      },
      boxtxt: {
        fontWeight: '600',
        fontSize: hp('2'),
        margin: 10,
      },
      rightBox: {
        width: wp('47.7'),
        backgroundColor: '#D60000',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        marginBottom: Platform.OS === "android" ? hp('4%') : hp('1.4%'),
        flex:1
      },
      secondtxt: {
        fontWeight: '600',
        fontSize: hp('2'),
        margin: 10,
        color: '#ffff',
      },
      imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
      },
      mid: {
        right: 35
      },
      midText: {
        color: "#D60000",
        fontSize: hp('2'),
        fontWeight: "600"
      },
      location: {
        flexDirection: 'row',
        marginTop: 8,
      },
      badge: {
        minHeight: hp('1'),
        minWidth: wp('2'),
        backgroundColor: "#D60000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        position: "absolute",
        right: -5,
        top: 0,
      },
      badgeNumber: {
        fontSize: 8 * screenHeight,
        color: "white",
        fontWeight: "bold",
        padding: 2,
      },
      midbottom: {color: '#0B0B0B', fontSize: 11, marginLeft: 5}
})