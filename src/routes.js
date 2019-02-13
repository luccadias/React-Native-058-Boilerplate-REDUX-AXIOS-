import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../src/screens/MainScreen'

const RootStack = createStackNavigator({
  Home: MainScreen
});

const Routes = createAppContainer(RootStack);

export default Routes;