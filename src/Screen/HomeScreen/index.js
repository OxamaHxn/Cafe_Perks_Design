import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView} from 'react-native'
import Header from '../../components/header'
import Feather from "react-native-vector-icons/Feather"
import { screenHeight } from '../../Config/screenRatio';
import { SliderBox } from "react-native-image-slider-box";
import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const images = [
    require('../../../Assets/slideimgone.png'),
    require('../../../Assets/slideimgone.png'),
    require('../../../Assets/slideimgone.png'),
  ];
import styles from "./style"
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active: 0,
          images: [
            require('../../../Assets/slideimgone.png'),
            require('../../../Assets/slideimgone.png'),
            require('../../../Assets/slideimgone.png'),
          ]
        };
      }
    handleBack = () => {
        this.props.navigation.pop();
      };
    render() {
        const {active} = this.state;
        return (
            <SafeAreaView
            style={{flex: 1}}
            >
            <View  style={styles.container}>
                <Header
                mid={
                  <View style={styles.mid}>
                    <Text style={styles.midText}>Welcome, Jeremy!</Text>
                    <View
                    style={styles.location}>
                    <Image source={require('../../../Assets/locationicon.png')} />
                    <Text
                      style={styles.midbottom}>
                      New York City
                    </Text>
                  </View>
                  </View>
                }
                left={
                    <TouchableOpacity
                    style={{alignItems: "center"}}
                    >
                        <Image
                        style={styles.imageStyle}
                        source={require("../../../Assets/chatimg.png")}
                        />
                    </TouchableOpacity>
                }
                right={
                    <TouchableOpacity
                    style={{alignItems: "center"}}
                    >
                      <View style={styles.badge}>
                        <Text style={styles.badgeNumber}>10</Text>
                        
                      </View>
                      <Image
                        // style={styles.imageStyle}
                        source={require("../../../Assets/cartRaw.png")}
                        />
                    </TouchableOpacity>
                }
                />
                <SliderBox
          images={this.state.images}
          sliderBoxHeight={hp('51')}
          ImageComponentStyle={{width: '96%',}}
          autoplay
          circleLoop
        />
        <View style={styles.bottomslider}>
            <View style={styles.leftBox}>
            <Image
                source={require('../../../Assets/threeicon.png')}
              />
              <Text style={styles.boxtxt}>SEE MENU</Text>
            </View>
            <View style={styles.rightBox}>
            <Image
                source={require('../../../Assets/boxtwo.png')}
              />
              <Text style={styles.secondtxt}>Place Order</Text>
            </View>
        </View>
            </View>
            </SafeAreaView>

        )
    }
}
