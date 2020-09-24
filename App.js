import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo'
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [loaded, setLoaded] = React.useState(false)
  return loaded ? (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        App is loaded
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  ) : <AppLoading startAsync={() => new Promise((resolve) => {setTimeout(() => {resolve()}, 5 * 1000 )})} onFinish={() => {setLoaded(true)}}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
