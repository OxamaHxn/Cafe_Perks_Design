import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native'

import Header from '../../components/header';

export default class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    renderItem = ({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    render() {
        return (
            <SafeAreaView
            style={{flex: 1}}
            >
                <View style={styles.container}>
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
                </View>
            </SafeAreaView>
        )
    }
}
