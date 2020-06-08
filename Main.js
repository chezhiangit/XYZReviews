/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginPage from './src/Screens/login/LoginPage';
// import MenuIcon from './src/common/UIComponents/DrawerMenu/HamburgerMenu';
// import DrawerComponent from './src/common/UIComponents/DrawerMenu/drawerComponent';
// import FAQPage from './src/faq/faq';
import Colors from './src/Utils/colors';
import FontsSize from './src/Utils/fontSizes';
import FontsWeight from './src/Utils/fontWeights';
import FontFamily from './src/Utils/fontFamilys';
import I18n from './src/Localization/i18n';

import ErrorBoundary from './src/CommonComponents/ErrorBoundaries/ErrorBoundaries';

const Stack = createStackNavigator();

class Main extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primaryAppColor,
              },
              headerTintColor: Colors.primaryFontColor,
              headerTitleStyle: {
                fontSize: FontsSize.headerName,
                fontWeight: FontsWeight.header,
                color: Colors.primaryFontColor,
                fontFamily: FontFamily.primaryFontFamily,
              },
            }}>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{
                title: I18n.t('login.headerTitle'),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => {
  console.log('state values from app component....', state);
  return {
    userLoggedIn: state.login.userLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Main);
