import React, { useCallback, useEffect, useRef } from 'react';
import { View, StyleSheet, BackHandler, Platform, PermissionsAndroid, LogBox } from 'react-native';
import { JitsiMeeting } from '@jitsi/react-native-sdk';
import { useNavigation } from '@react-navigation/native';
import PipHandler ,{usePipModeListener} from 'react-native-pip-android'

const Meeting = () => {
  LogBox.ignoreAllLogs(true);
  const jitsiMeeting = useRef(null);
  const navigation = useNavigation();
  const isInPipMode = usePipModeListener();
  const eventPictureInPictureMode = useCallback(()=>{
    if(!isInPipMode){
      PipHandler.enterPipMode(500,500);
    }else{
      console.log('Already in PIP Mode')
    }
  },[isInPipMode]);


  useEffect(()=>{
    const backhandler = BackHandler.addEventListener('hardwareBackPress',()=>{
      console.log('PipModeEnter')
      eventPictureInPictureMode();
      return true;
    })

    return ()=>{
      backhandler.remove();
    } 

  },[eventPictureInPictureMode])
  
  const onReadyToClose = useCallback(() => {
    eventPictureInPictureMode();
    navigation.navigate('Home');
  }, [navigation]);

  const eventListeners = {
    onReadyToClose,
    onEnterPictureInPicture:(e)=>{
      eventPictureInPictureMode();
      console.log('Conference in PIP mode',e)  
    },
    onConferenceTerminated: (e) => {
      console.log('Conference terminated: ', e);
      navigation.navigate('Home');
    },
    onConferenceJoined: (e) => {
      console.log('Conference joined: ', e);
    },
    onConferenceWillJoin: (e) => {
      console.log('Conference will join: ', e);
    },
  };

  return (
    <View style={styles.container}>
      <JitsiMeeting
        config={{
          hideConferenceTimer: true,
          subject: 'Meeting',
          customToolbarButtons: [
            {
              icon: 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png',
              id: 'btn1',
              text: 'Button one',
            },
            {
              icon: 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png',
              id: 'btn2',
              text: 'Button two',
            },
          ],
        }}
        eventListeners={eventListeners}
        flags={{
          'invite.enabled': true,
        }}
        ref={jitsiMeeting}
        style={styles.meeting}
        room={'DemoMeet8'}
        serverURL="https://meet.jit.si/"
        userInfo={{
          displayName: 'Test User',
          email: 'sangeeeta8@gmail.com',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meeting: {
    flex: 1,
  },
});

export default Meeting;
