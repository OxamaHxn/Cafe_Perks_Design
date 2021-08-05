import {Dimensions} from 'react-native';
const fullHeight = Dimensions.get('window').height;
const screenHeight = fullHeight / 812;
const fullWidth = Dimensions.get('window').width;
const screenWidth = fullWidth / 375;
export {fullWidth, fullHeight, screenHeight, screenWidth};
