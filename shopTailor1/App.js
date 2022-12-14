/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: 'black', paddingTop: 150}}>
      <View
        style={{
          backgroundColor: 'black',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'black',
            width: 344,
            height: 140,
            borderWidth: 5,
            borderColor: 'white',
          }}>
          <Text style={{color: 'white'}}>"PushNotification1"</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: 'black',
            width: 344,
            height: 140,
            borderColor: 'white',
            borderWidth: 5,
          }}>
          <Text style={{color: 'white'}}>"PushNotification1"</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;
