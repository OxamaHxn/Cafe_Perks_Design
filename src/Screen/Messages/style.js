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
    width: '90%',
    minHeight: 140 * screenHeight,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 11,
    marginVertical: 5,
    padding: 15 * screenWidth,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15 * screenHeight,
  },
  tableText: {
    fontSize: 13 * screenHeight,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 10 * screenHeight,
    fontWeight: 'normal',
  },
  btn: {
    width: '100%',
    height: 30 * screenHeight,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btnText: color => ({
    fontSize: 12 * screenHeight,
    fontWeight: 'bold',
    color,
  }),
  msgImageView: {
    height: 30 * screenHeight,
    width: 30 * screenHeight,
  },
  msgImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  badge: {
    minHeight: 14 * screenHeight,
    minWidth: 14 * screenHeight,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: -5,
    top: 0,
  },
  badgeNumber: {
    fontSize: 8 * screenHeight,
    color: 'white',
    fontWeight: 'bold',
    padding: 2,
  },
  completedCard: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    padding: 15 * screenWidth,
    justifyContent: 'space-between',
  },
  completeBtn: {
    width: 160 * screenWidth,
    height: 30 * screenHeight,
    backgroundColor: '#FECF00',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
