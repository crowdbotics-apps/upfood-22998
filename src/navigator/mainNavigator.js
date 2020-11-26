import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial178910Navigator from '../features/Tutorial178910/navigator';
import NotificationList178882Navigator from '../features/NotificationList178882/navigator';
import Settings178881Navigator from '../features/Settings178881/navigator';
import Settings178873Navigator from '../features/Settings178873/navigator';
import UserProfile178871Navigator from '../features/UserProfile178871/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial178910: { screen: Tutorial178910Navigator },
NotificationList178882: { screen: NotificationList178882Navigator },
Settings178881: { screen: Settings178881Navigator },
Settings178873: { screen: Settings178873Navigator },
UserProfile178871: { screen: UserProfile178871Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
