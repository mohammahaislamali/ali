import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Share
  } from 'react-native';
  import React, {useState} from 'react';
  import VideoPlayer from 'react-native-video-player';
  import ViewContainer from '../components/HOC/ViewContainer';
  import Colors from '../constants/Colors';
  import FocusAwareStatusBar from '../components/UI/FocusAwareStatusBar';
  import Paragraph from '../components/UI/Paragraph';
  import { Imagepath } from '../constants/image';
import Card from '../components/UI/Card';
  const Video = () => {
    return (
      <View style={styles.main}>
         <ViewContainer style={styles.secoundview}>
         <Card>
            <View style={styles.flex}>
            <Image source={Imagepath.voctar6}/>
            <Paragraph size={20} color='#fff' style={styles.refer}>Refer & Earn</Paragraph>
            </View>
         </Card>


         </ViewContainer>
        <ScrollView>
          <View>
            
            <VideoPlayer
              style={styles.hit}
              video={require('../assest/Video/fresh.mp4')}
              videoHeight={1000}
              showDuration={true}
              cantrolsTimeout={600}
              disableControlsAutoHide={true}
              poseOnPress={true}
              autoPlay={true}
            />
          </View>
  
          <View></View>
         
  
          
          
        </ScrollView>
      </View>
    );
  };
  
  
  export default Video;
  const styles = StyleSheet.create({
   secoundview:{
        backgroundColor:Colors.green,
        flex:0.1
    },
    Input: {
      width: 270,
      fontSize: 15,
    },
    ser: {
      width: 25,
      height: 25,
      marginHorizontal: 5,
      tintColor: '#000',
    },
    ser1: {
      width: 30,
      height: 30,
      tintColor: '#000',
    },
    ser2: {
      width: 30,
      height: 30,
      marginHorizontal: 10,
      tintColor: '#000',
    },
    flex2: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'grey',
      width: 300,
      backgroundColor: '#fff',
      marginLeft: 5,
      height: 40,
      marginVertical: 10,
      borderRadius: 10,
    },
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    Text1: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
    },
    hrt: {
      width: 35,
      height: 35,
      marginLeft: 10,
      marginVertical: 10,
    },
   
    ui: {
      flexDirection: 'row',
    },
    main: {
      flex: 1,
      backgroundColor: '#fff',
    },
    hit: {
      backgroundColor: '#000',
    },
    refer:{
        marginHorizontal:20,
        fontWeight:"bold"
    }
  });
  