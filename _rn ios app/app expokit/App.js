import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';



const SUPERMARIO_URL = "http://supermario.io"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>SUPERMARIO.io</Text>

        <Text>this app is airdropped by</Text>

        <Button
          title={"supermario.io"}
          onPress={() => Linking.openURL(SUPERMARIO_URL).catch(err => console.error('An error occurred', err))}
          style={styles.button}
        />

      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50
  }
});
