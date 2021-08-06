import React, { Component } from 'react'
import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
  } from 'react-native';
import SecondButton from '../../../components/SecondButton';
import TextInputFields from '../../../components/TextInputFields';
import styles from "./style"
export default class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                source={require("../../../../Assets/subscribebg.png")}
                style={styles.bgImage}
                >
                    <ScrollView>
                        <Text style={styles.logintext}>SUBSCRIBE</Text>
                        <View style={styles.imputFields}>
                            <TextInputFields
                            placeholder={"Prenom"}
                            />
                            <TextInputFields
                            placeholder={"Nom"}
                            />
                            <TextInputFields
                            placeholder={"Email Address"}
                            />
                            <TextInputFields
                            placeholder={"Password"}
                            />
                            <TextInputFields
                            placeholder={"Confirm Password"}
                            />
                        </View>
                        <View style={styles.loginView}>
                        <SecondButton text={"SUBSCRIBE"} onPress={() => this.props.navigation.navigate('BottomNavigation')}/>
                        </View>
                        <Text style={styles.MiddleText}>Ou</Text>
                        <View style={styles.buttons}>
              <TouchableOpacity style={styles.firstbutton}>
                <View style={styles.btninside}>
                  <Image
                    style={styles.fbicon}
                    source={require('../../../../Assets/fbiconj.png')}
                  />
                  <Text style={styles.regText}>CONTINUER AVEC FACEBOOK</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondbutton}>
                <View style={styles.btninside}>
                  <Image
                    style={styles.fbiconb}
                    source={require('../../../../Assets/gmailicon.png')}
                  />
                  <Text style={styles.regTextb}>CONTINUER AVEC GOOGLE</Text>
                </View>
                {/* <Image source={require('./Image/rightarrow.png')} */}
              </TouchableOpacity>
            </View>
                    </ScrollView>
                    </ImageBackground>
            </View>
        )
    }
}
