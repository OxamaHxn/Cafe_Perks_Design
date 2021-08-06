import { Text, StyleSheet, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    messages: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 5,
      paddingBottom: 5,
      paddingStart: 15,
      paddingEnd: 15,
      borderRadius: 10,
      backgroundColor: "#FECF00",
      flexDirection: "row",
      margin: 3,
    },
    header: {
        backgroundColor: '#D60000',
        alignItems: 'center',
    justifyContent: 'center',
    height: hp('10')
    },
    headericon:{
        left: 20,
        position: 'absolute'
    },
    text: {
        color: 'white',
        fontSize: hp('2.7'),
        fontWeight: '600'
    },
    mid: {
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        flex:1
      },
      list:{
        paddingHorizontal: 17,
      },
      footer:{
        flexDirection: 'row',
        height:60,
        backgroundColor: '#eeeeee',
        paddingHorizontal:10,
        marginBottom: Platform.OS === "android" ? hp('2%') : hp('0%')
      },
      btnSend:{
        backgroundColor:"#D60000",
        width:40,
        height:40,
        borderRadius:360,
        alignItems:'center',
        justifyContent:'center',
      },
      iconSend:{
        width:30,
        height:30,
        alignSelf:'center',
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:40,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        marginRight:10,
      },
      inputs:{
        height:40,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },

      balloon: {
        maxWidth: 250,
        padding: 15,
        borderRadius: 20,
      },
      itemIn: {
        alignSelf: 'flex-end'
      },
      itemOut: {
        alignSelf: 'flex-start'
      },
      time: {
        alignSelf: 'flex-end',
        margin: 15,
        fontSize:12,
        color:"#808080",
      },
      item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        backgroundColor:"#eeeeee",
        borderRadius:300,
        padding:5,
      },
})
