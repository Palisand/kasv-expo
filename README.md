_This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)._

### What?

How to scroll to inputs on Android when using [Expo](https://expo.io/) and [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view/) (KASV).

### Why?

- React Native's `KeyboardAvoidingView` is [generally unstable](https://github.com/facebook/react-native/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20keyboardavoidingview%20in%3Atitle%20).
- Android support was [recently added](https://github.com/APSL/react-native-keyboard-aware-scroll-view/pull/147) to KASV.
- Currently, `windowSoftInputMode` in `AndroidManifest.xml` [is set to `adjustResize`](https://forums.expo.io/t/how-to-set-android-windowsoftinputmode-adjustresize-in-android-manifest-file/587)
and cannot be changed without detaching from Expo (which you probably don't want to do).

#### If anyone knows a better way to accomplish this (with or without KASV) please let me know!
