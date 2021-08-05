import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {screenHeight, screenWidth} from '../Config/screenRatio';
const HeaderHeight = 86 * screenHeight;
const Header = ({left, mid, right, title}) => {
  return (
    <>
      <View
      //   style={
      //   {height: StatusBar.currentHeight}
      //   }
      />
      <View style={styles.container}>
        <View style={styles.left}>{left && left}</View>
        <View style={styles.mid}>
          {title !== undefined ? (
            <Text style={styles.title}>{title}</Text>
          ) : (
            mid && mid
          )}
        </View>
        <View style={styles.right}>{right && right}</View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    minHeight: HeaderHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {position: 'absolute', left: 20 * screenWidth},
  right: {position: 'absolute', right: 15 * screenWidth},
  mid: {
    flex: 1,
    paddingHorizontal: 20 * screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24 * screenHeight,
    fontWeight: '500',
    color: '#D60000',
    //backgroundColor: 'red',
  },
});
export default Header;
