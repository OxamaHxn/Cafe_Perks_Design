import { StyleSheet, Platform} from "react-native";
import {fonts }from "../../Config/Fonts"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
      },
      uppperText: {
        color: '#D60000',
        fontSize: 29,
        fontWeight: '700',
        fontFamily: 'Arial',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 130,
      },
      image: {
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttons: {
        flexDirection: 'row',
        marginHorizontal: 100,
        marginTop: Platform.OS === 'ios' ? 100 : 75,
        margin: 30,
        justifyContent: 'center',
      },
      registerButton: {
        width: 140,
        height: 50,
        borderRadius: 30,
        shadowColor: '#D60000',
        shadowOpacity: .9,
        shadowOffset: { width: -1, height: 4.4},
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#D60000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
    
      loginButton: {
        width: 140,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#ffff',
        borderColor: '#D60000',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      regText: {
        color: '#ffff',
        fontWeight: '700',
        fontSize: 16,
      },
      loginText: {
        color: '#D60000',
        fontWeight: '700',
        shadowRadius: 14,
        fontSize: 16,
      },
})