
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screen/SplashScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import AuthScreen from './src/screen/AuthScreen';
import LoadingScreen from './src/screen/LoadingScreen';
import HomeScreen from './src/screen/HomeScreen';
import ComponentsScreen from './src/screen/ComponentsScreen';
import ForgotScreen from './src/screen/ForgotScreen';
import FindSpaceScreen from './src/screen/FindSpaceScreen';
import GoogleSearchScreen from './src/screen/GoogleSearchScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Auth: AuthScreen,
    Loading: LoadingScreen,
    Home: HomeScreen,
    Forgot: ForgotScreen,
    FindSpace: FindSpaceScreen,
    GoogleSearch: GoogleSearchScreen,
    Components: ComponentsScreen
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      headerShown: false,
      // title: 'Home'
    }
  }
);

export default createAppContainer(navigator);