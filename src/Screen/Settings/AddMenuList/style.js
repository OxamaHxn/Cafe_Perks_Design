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
  flatListHeaderView: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 20 * screenHeight,
  },
  btn: {
    height: 47 * screenHeight,
    backgroundColor: '#FECF00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10 * screenWidth,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btnText: {
    fontSize: 16 * screenHeight,
    fontWeight: 'bold',
  },
  image: {
    height: 50 * screenHeight,
    width: 60 * screenHeight,
    resizeMode: 'cover',
  },
  btnRow: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10 * screenHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
});
