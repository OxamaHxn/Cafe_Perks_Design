import { StyleSheet } from "react-native";
import { fullWidth, screenHeight, screenWidth } from "../../Config/screenRatio";
import { Dimensions } from "react-native";

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
      },
      leftBox: {
        width: '50%',
        height: 176 * screenHeight,
        backgroundColor: '#FECF00',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
      },
      boxtxt: {
        fontWeight: '600',
        fontSize: 22,
        margin: 10,
      },
      rightBox: {
        width: '50%',
        height: 176 * screenHeight,
        backgroundColor: '#FECF00',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
      },
      secondtxt: {
        fontWeight: '600',
        fontSize: 22,
        margin: 10,
        color: '#ffff',
      },
      imageStyle: {
        height: 51 * screenHeight,
        width: 51 * screenWidth,
      },
      mid: {
        flexDirection: "column"
      },
      midText: {
        color: "#D60000",
        fontSize: 20,
        fontWeight: "600"
      },
      location: {
        flexDirection: 'row',
        marginTop: 8,
      },
      midbottom: {color: '#0B0B0B', fontSize: 11, marginLeft: 5}
})