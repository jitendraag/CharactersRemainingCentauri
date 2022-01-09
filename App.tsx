import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [charactersRemaining, setCharactersRemaining] = React.useState(280);
  const [textFontColor, setTextFontColor] = React.useState('black');
  const handleChangeText = currentText => {
    let currentLength = currentText.length;
    if (currentLength >= 280) {
      setTextFontColor('red');
    } else {
      setTextFontColor('black');
    }

    setCharactersRemaining(280 - currentText.length);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={handleChangeText}
          placeholder="Add up 280 characters"
        />
        <Text style={{color: textFontColor}}>
          {charactersRemaining} characters remaining!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 200,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    marginBottom: 20,
  },
});

export default App;
