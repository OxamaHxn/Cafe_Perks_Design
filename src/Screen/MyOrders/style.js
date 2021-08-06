import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../Config/screenRatio';
export default styles = StyleSheet.create({
  centerText: {
    color: '#D60000',
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  name: {
    fontSize: 20,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    width: '90%',
    minHeight: 160 * screenHeight,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 11,
    marginVertical: 5,
    padding: 15 * screenWidth,
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20 * screenHeight,
    alignSelf: 'center',
  },
  cardFirstCol: {
    flex: 1,
    // marginVertical: 20 * screenHeight,

    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardSecondCol: {
    flex: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 20 * screenHeight,
    height: '100%',
  },
  imageView: {
    height: 51 * screenHeight,
    width: 51 * screenHeight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tableBtn: {
    height: 23 * screenHeight,
    width: 62 * screenWidth,
    backgroundColor: '#D60000',
    borderRadius: 5,

    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  tableTextBtn: {
    height: 23 * screenHeight,
    alignSelf: 'flex-end',
  },
  btnText: (color, underlined) => ({
    textDecorationLine: underlined ? 'underline' : 'none',
    fontSize: 13 * screenHeight,
    fontWeight: 'bold',
    color,
    textAlign: 'center',
  }),
});
