import { Platform, StyleSheet } from "react-native"
import { Dimensions } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  const { width, height } = Dimensions.get('window');
export default  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
      },
    bgImage: {
        height: height,
        width: width,
        justifyContent: 'flex-start',
        position: "absolute",
        resizeMode: 'contain',
    },
    logintext: {
        color: '#ffff',
        fontWeight: '800',
        fontSize: 22,
        marginTop: Platform.OS === 'ios' ? 68 : 55,
        alignSelf: 'center',
        fontFamily: 'Arial',
      },
    imputFields: {
        marginTop: Platform.OS === 'ios' ? 25 : 21,
        justifyContent: 'center',
        alignItems: 'center',},
    loginView: {
        marginTop: Platform.OS === 'ios' ? 50 : 37,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('43%'),
    height: hp('6.9%'),
    backgroundColor: '#D60000',
    borderRadius: 42,
    },
    MiddleText: {
        alignSelf: 'center',
        margin: 15,
        fontWeight: '900',
        fontSize: 20,
        color: '#ffff',
      },
      buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      },
      firstbutton: {
        width: '95%',
        height: 50,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#3B5999',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btninside: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      fbicon: {
        width: 22,
        height: 22,
        borderRadius: 5,
        marginRight: 7,
      },
      regTextb: {
        color: '#FFFFFF',
        fontWeight: '600',
        shadowRadius: 14,
        fontSize: 16,
      },
      fbiconb: {
        width: 22,
        height: 22,
        borderRadius: 5,
        marginRight: 20,
      },
      regText: {
        color: '#ffff',
        fontWeight: '600',
        shadowRadius: 14,
        fontSize: 16,
      },
      secondbutton: {
        width: '95%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#D60000',
        justifyContent: 'center',
        alignItems: 'center',
      },
})