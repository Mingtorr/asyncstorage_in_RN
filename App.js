/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      admin:false
    }
  }
  componentDidMount(){
    AsyncStorage.getItem('admin', (err, result) => {
      if(result === 'true'){
        console.log("인증 성공");
      }else{
        console.log("인증 실패");
      }
    });
  }
  onpress =()=>{
    AsyncStorage.setItem('admin','true', () => {
      console.log('인증 저장 완료')
    });
  }
  onpress2 = async ()=>{
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
    AsyncStorage.setItem('admin','false', () => {
      console.log('로그아웃'); // User1 출력
    });
    

  }
  render(){
    return(
      <View style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:100}}>
        <Button title="로그인하기" color="#841584" onPress={this.onpress}/>
        <Button title="로그아웃하기" color="#841584" onPress={this.onpress2}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
