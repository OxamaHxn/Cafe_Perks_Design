import React, { Component } from 'react'
import {Image, SafeAreaView, FlatList, TextInput, Text, TouchableOpacity, View} from 'react-native'
import Header from '../../components/header'
import Feather from "react-native-vector-icons/Feather"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from "./style"
const preDefinedMessages = [
  "Ready To Order",
  "Sentence 1",
  "Sentence 2",
  "Please Bring The Bill",
  "I Need Water",
  "I Need A Fork",
];
export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet", image: require('../../../Assets/chatimg.png')},
            {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet", image: require('../../../Assets/boliprofile.png')} ,
            {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met", image: require('../../../Assets/chatimg.png')}, 
            {id:4, date:"9:50 am", type:'out',  message: "Lorem ipsum dolor sit a met", image: require('../../../Assets/boliprofile.png')}, 
            {id:5, date:"9:50 am", type:'in', message: "Lorem ipsum dolor sit a met", image: require('../../../Assets/chatimg.png')}, 
            {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met", image: require('../../../Assets/boliprofile.png')}, 
            {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met", image: require('../../../Assets/chatimg.png')}, 
            {id:8, date:"9:50 am", type:'out',  message: "Lorem ipsum dolor sit a met", image: require('../../../Assets/boliprofile.png')},
          ]
        };
      }
      renderDate = (date) => {
        return(
          <Text style={styles.time}>
            {date}
          </Text>
        );
      }
      renderImage = (image) => {
        return(
          <Image
          source={image}
          />
        );
      }
    handleBack = () => {
        this.props.navigation.pop();
      };
    render() {
        return (
            <SafeAreaView
            style={styles.main}
            >
                <View
                style={styles.header}
                >
                    <TouchableOpacity
                    style={styles.headericon}
                    onPress={this.handleBack}
                    >
                        <Feather
                  name="x"
                  color="white"
                  size={wp('7')}
                />
                    </TouchableOpacity> 
                    <View style={styles.mid}>
                        <Text style={styles.text}>Dine-in</Text>
                        <Text style={styles.text}>Pizza-Boli</Text>
                    </View>
                </View>
                <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            const item = message.item;
            // const item = image.item;
            // console.log(item);
            let inMessage = item.type === 'in';
            let inImage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            let imageStyle = inImage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle, imageStyle]}>
                {!inImage && this.renderImage(item.image)}
                {/* {!inMessage && this.renderDate(item.date)} */}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inImage && this.renderImage(item.image)}
                {/* {inMessage && this.renderDate(item.date)} */}
              </View>
            )
          }}/>
          <View
          style={{ flexDirection: "row", flexWrap: "wrap", paddingBottom: 25 }}
        >
          {preDefinedMessages.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.messages}
              >
                <Text style={{ color: "black" }}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View>
            </SafeAreaView>
        )
    }
}

{/* <Image
source={item.image}
/> */}