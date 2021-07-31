import * as React from 'react';
import Navigation from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import './src/i18n';

import Styles from '@styles';
import store from '@my-store';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.body}>
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: Styles.backgroundPaper,
  },
  body: {
    flex: 1,
    backgroundColor: Styles.backgroundPaper,
  },
});

export default App;
