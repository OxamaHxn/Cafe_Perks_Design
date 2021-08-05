import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
      },
      loginbg: {
        width: wp('100'),
        height: '100%',
        justifyContent: 'flex-start',
        position: "absolute",
        resizeMode: 'contain',
      },
      logintext: {
        color: '#ffff',
        fontWeight: '800',
        fontSize: 22,
        marginTop: Platform.OS === 'ios' ? 100 : 80,
        alignSelf: 'center',
        fontFamily: 'Arial',
      },
      inputView: {
        // marginTop: 120,
        marginTop: Platform.OS === 'ios' ? 120 : 65,
        // margin: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emailinput: {
        width: '70%',
        height: 38,
        marginVertical: 40,
        paddingHorizontal: 15,
        paddingVertical: 5,
    
        fontSize: 15,
        backgroundColor: '#ffff',
        borderRadius: 10,
        // color: '#ffff',
      },
      passwordinput: {
        width: '70%',
    
        height: 38,
        paddingHorizontal: 15,
    
        fontSize: 15,
        backgroundColor: '#ffff',
        borderRadius: 10,
      },
    
      loginbtntext: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 18,
        // marginTop: 50,
        alignSelf: 'center',
        marginLeft: 20,
        fontFamily: 'Arial',
      },
    
      lasttext: {
        color: '#D60000',
        fontSize: 14,
        fontWeight: '700',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
      },
    
      imgstyles: {
        marginTop: 35,
      },
    
      login: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#D60000',
        borderRadius: 42,
      },
      loginbt: {
        width: 142,
        height: 42,
        borderRadius: 42,
        // back: '#D60000',
        backgroundColor: '#D60000',
        // alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffff',
        borderWidth: 1.5,
      },
      arrow: {
        marginLeft: 18,
        marginRight: -5,
      },
      forgotxt: {
        alignSelf: 'center',
        margin: 11,
        fontWeight: '500',
      },
      or: {
        alignSelf: 'center',
        margin: 12,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
      },
      buttons: {
        // flexDirection: 'column',
        marginVertical: 8,
        alignItems: 'center',
        marginBottom: 3,
        // marginTop: 100,
        margin: 20,
        justifyContent: 'center',
      },
      firstbutton: {
        width: '95%',
        height: 50,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#3B5999',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 10,
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
    
      secondbutton: {
        width: '95%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#D60000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      gmailicon: {
        width: 22,
        height: 22,
        // paddingRight: 10,
        marginRight: 17,
        marginLeft: -5,
      },
      regText: {
        color: '#ffff',
        fontWeight: '700',
        shadowRadius: 14,
        fontSize: 16,
      },
      regTextb: {
        color: '#FFFFFF',
        fontWeight: '700',
        shadowRadius: 14,
        fontSize: 16,
      },
    
      imageWrapper: {
        height: 180,
        width: 180,
        overflow: 'hidden',
      },
      theImage: {
        width: '100%',
        height: '100%',
    
        // marginTop: 10,
        resizeMode: 'cover',
      },
})