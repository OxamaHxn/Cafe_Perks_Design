import { StyleSheet } from "react-native"
import { screenHeight, screenWidth } from "../../Config/screenRatio"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default   styles = StyleSheet.create({
    centerText:{
        color: "#D60000",
        fontSize: hp('3'),
        fontWeight: "600"
    },
    container: {
        marginVertical: 20 * screenHeight, 
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    name: {
        fontSize: hp('3'),
        fontWeight: "600"
    },
    resturantimg: {
        width: wp('50'),
        height: hp('17'),
        marginTop: 10,
        resizeMode: "stretch",
        borderRadius: 10,
      },
      marginview: {
        marginTop: 10,
      },
      loginOuterView: {
        justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    alignSelf: 'center',
    width: wp('53%'),
    height: hp('6.9%'),
    backgroundColor: '#D60000',
    borderRadius: 42,
      },
})