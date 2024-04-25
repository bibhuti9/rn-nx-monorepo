import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { store } from '@org/store';
import { observer } from 'mobx-react';

function App() {
  const count = store.counts.count;
  const onIncrement = () => {
    store.increment();
  };
  const onDecrement = () => {
    store.decrement();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>{JSON.stringify(count, null, 2)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onIncrement} style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDecrement} style={styles.button}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default observer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
  },
});
