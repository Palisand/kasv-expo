import React, {Component} from 'react';
import ReactNative, { Animated, Keyboard, StyleSheet, Text, View, TextInput, ScrollView, Platform } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default class App extends Component {

  state = {
    keyboardHeight: new Animated.Value(0)
  };

  animateKeyboardHeight = (toValue, duration) => {
    Animated.timing(
      this.state.keyboardHeight,
      {toValue, duration},
    ).start();
  };

  /**
   * From https://facebook.github.io/react-native/docs/keyboard.html#addlistener
   * "Note that if you set android:windowSoftInputMode to adjustResize or adjustNothing,
   * only keyboardDidShow and keyboardDidHide events will available on Android."
   */
  componentWillMount() {
    if (Platform.OS === "android") {
      this.keyboardShowListener = Keyboard.addListener("keyboardDidShow", ({endCoordinates}) => {
        this.animateKeyboardHeight(endCoordinates.height, 0)
      });
      this.keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
        this.animateKeyboardHeight(0, 300)
      })
    }
  }

  scrollToInput = (reactNode) => {
    this.view.scrollToFocusedInput(reactNode)
  };

  handleOnFocus = (e) => {
    if (Platform.OS === "android") {
      this.scrollToInput(ReactNative.findNodeHandle(e.target))
    }
  };

  render() {
    const spacer = (
      <View style={styles.spacer}>
        <Text style={styles.text} numberOfLines={24}>
          {"All work and no play makes Jack a dull boy. ".repeat(30)}
        </Text>
      </View>
    );
    return (
      <KeyboardAwareScrollView
        ref={ref => this.view = ref}
        style={styles.container}
        enableOnAndroid
        extraHeight={Platform.OS === "android" ? 10 : undefined}
      >
        {spacer}
        <TextInput
          onFocus={this.handleOnFocus}
          style={styles.input}
        />
        {/*{spacer}*/}
        <Animated.View style={{height: this.state.keyboardHeight}}/>
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
  spacer: {
    minHeight: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Courier",
  },
  input: {
    borderColor: "grey",
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
  }
});
