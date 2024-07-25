import React, { useCallback, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { JitsiMeeting } from '@jitsi/react-native-sdk';
import { useNavigation } from '@react-navigation/native';

const Meeting = () => {
  const jitsiMeeting = useRef(null);
  const navigation = useNavigation();
  const onReadyToClose = useCallback(() => {
    if (jitsiMeeting.current) {
      jitsiMeeting.current.close();
    }
    navigation.navigate('Home');
  }, [navigation]);
  const eventListeners = {
    onReadyToClose,
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
