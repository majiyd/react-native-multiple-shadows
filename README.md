# react-native-multiple-shadows

A wrapper component to implement multiple shadows in react native.

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://github.com/expo/expo)


Os       | Ios | Android 
| ----------- | --------- | ---------------------------- | 
Supported | :ballot_box_with_check: | :x:

![react-native-multiple-shadows-example](https://res.cloudinary.com/duyrp9tbf/image/upload/c_scale,h_513/v1582816237/react-native-multiple-shadow-example_rh8x0d.png)

## Installation

```bash
# yarn
yarn add react-native-multiple-shadows

# npm
npm install react-native-multiple-shadows --save
```

Then, import with:

```js
import MultipleShadows from "react-native-multiple-shadows";
```


## Usage

Example:

```js
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import MultipleShadows from "react-native-multiple-shadows";

// Shadows may also be initialised in a stylesheet.
const shadows = [
  {
    shadowColor: 'red',
    shadowOffset: {width: 12, height: 12},
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  {
    shadowColor: 'green',
    shadowOffset: {width: -12, height: -12},
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  {
    shadowColor: '#252525',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },
];

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <MultipleShadows count={3} shadowStyles={shadows}>
          <View style={styles.outerShadow}>
            <MultipleShadows
              // additional styles can be added to the component
              style={styles.innerShadow} 
              count={3}
              shadowStyles={shadows}>
              <Text>Hello shadow</Text>
            </MultipleShadows>
          </View>
        </MultipleShadows>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4af7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerShadow: {
    width: 300,
    height: 450,
    backgroundColor: '#22abd3',
  },
  innerShadow: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
```

## Props

| Prop        | Required? | Type                         | Description                                                                                                                                     |
| ----------- | --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`   | false     | number                      | The number of shadows to be displayed.                                                                                                                  |
| `shadowStyles` | false     | array of objects                       | Must be an array of styles. The length of the array must be equal the `count`. |
| `style` | false     | object                       | Additional styles to be added to the component.|

