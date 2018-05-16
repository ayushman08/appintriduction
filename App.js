// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
 
// const styles = StyleSheet.create({
//   image: {
//     width: 320,
//     height: 320,
//   }
// });
 
// const slides = [
//   {
//     key: 'somethun',
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('./assets/j.jpg'),
//     imageStyle: styles.image,
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 'somethun-dos',
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('./assets/j.jpg'),
//     imageStyle: styles.image,
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 'somethun1',
//     title: 'Rocket guy',
//     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//     image: require('./assets/j.jpg'),
//     imageStyle: styles.image,
//     backgroundColor: '#22bcb5',
//   }
// ];
 
// export default class App extends React.Component {
//   _onDone = () => {
//     // User finished the introduction. Show "real" app
//   }

//   showSkipButton=()=>{
//     alert("hello")
//   }
//   render() {
//     return (
//       <AppIntroSlider
//         slides={slides}
//         onDone={this._onDone}
//         showSkipButton={this.showSkipButton}
//       />
//     );
//   }
// }

import React from 'react';
import { StyleSheet ,View,Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  image: {
    width: "30%",
    height: 200,
    
  }
});
 
const slides = [
  {
    key: 'somethun',
   
    text: 'Description.\nSay something cool',
    image: require('./assets/j.jpg'),
    imageStyle: styles.image,
    backgroundColor: 'white',
  },
  {
    key: 'somethun-dos',
   
    text: 'Other cool stuff',
    image: require('./assets/j.jpg'),
    imageStyle: styles.image,
    backgroundColor: 'white',
  },
  {
    key: 'somethun1',

    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/j.jpg'),
    imageStyle: styles.image,
    backgroundColor: 'white',
  }
];
 
export default class App extends React.Component {
  _onDone = () => {
alert("hello")
    // User finished the introduction. Show "real" app
  }

  onSkip=()=>{
    alert("skip")
  }
  render() {
    return (
      <View style={{flex:1}}>
       <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showSkipButton
        onSkip={this.onSkip}
        />

          <View  style={{position:"absolute",bottom:100,left:0,right:0,justifyContent:"center",alignItems:"center"}}>
          <Text>Already have account ? Login</Text>  
          </View>

      </View>
    );
  }
}