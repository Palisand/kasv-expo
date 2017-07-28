import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default class App extends React.Component {
  render() {
    const spacer = (
      <View style={{minHeight: 500, justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.input} numberOfLines={24}>
          {"All work and no play makes Jack a dull boy. ".repeat(30)}
        </Text>
      </View>
    );
    return (
      <KeyboardAwareScrollView style={styles.container}>
        {spacer}
        <TextInput style={{borderRadius: 6, borderWidth: 1, padding: 10, borderColor: "grey"}}/>
        {spacer}
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    fontFamily: Platform.OS === "android" ? "monospace" : "courier"
  }
});
