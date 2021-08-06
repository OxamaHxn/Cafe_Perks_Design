import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {screenHeight, screenWidth} from '../../../Config/screenRatio';
export default styles = StyleSheet.create({
  centerText: {
    color: '#D60000',
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    margin: 10,
    borderRadius: 10,
  },
  profileContainer: {
    height: 96 * screenHeight,
    width: 128 * screenHeight,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  profileImage: {
    height: 29 * screenHeight,
    width: 29 * screenHeight,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
  },
  text: {
    fontSize: 16 * screenHeight,
    fontWeight: '500',
  },
  btnContainer: {
    borderRadius: 42,

    height: hp('7%'),
    width: wp('53%'),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20 * screenHeight,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  qrCode: {
    height: 112 * screenHeight,
    width: 122 * screenWidth,
    resizeMode: 'contain',
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20 * screenHeight,
  },
});