import React, { Component } from 'react'
import {
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import styles from "./style"
  import TextInputFields from '../../../components/TextInputFields';
import PrimaryButton from '../../../components/PrimaryButton';
export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                source={require("../../../../Assets/loginbg.png")}
                style={styles.loginbg}
                >
                    <Text style={styles.logintext}>LOGIN</Text>
                    <View style={styles.inputView}>
                      <TextInputFields
                      placeholder={"Email"}
                      />
                      <TextInputFields
                      placeholder={"Password"}
                      />
                    </View>
                    <View style={styles.login}>
                    <TouchableOpacity
              style={styles.loginbt}
              >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <PrimaryButton text={"Login"} onPress={() => this.props.navigation.navigate('SignUpScreen')}/>
              </View>
            </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
            <Text style={styles.forgotxt}>Password forgotten?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.or}>Ou</Text>
          </TouchableOpacity>
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
                  style={styles.gmailicon}
                  source={require('../../../../Assets/gmailicon.png')}
                />
                <Text style={styles.regTextb}>CONTINUER AVEC GOOGLE</Text>
              </View>
              {/* <Image source={require('./Image/rightarrow.png')} */}
            </TouchableOpacity>
          </View>
                </ImageBackground>
            </View>
        )
    }
}
