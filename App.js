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
  View,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Video from 'react-native-video';

const App: () => React$Node = () => {
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');

  const onLoadStart = () => {
    // alert('Start');
  };

  const onEnd = () => {
    alert('End');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Video
            source={require('./assets/1.mp4')}
            resizeMode="cover"
            style={{width, height: height}}
            controls={true}
            onLoadStart={onLoadStart}
            onEnd={onEnd}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
