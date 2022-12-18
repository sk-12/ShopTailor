import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import Circle from './Components/Stepper/Circle';

export default function App() {
  const [state, setState] = useState(0);
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: '#FCFFE7',
      }}>
      <Circle state={state} />
      <Button title="click" onPress={() => setState(state + 1)} />
    </SafeAreaView>
  );
}
