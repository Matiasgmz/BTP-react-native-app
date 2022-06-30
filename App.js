import Login from './src/view/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './src/view/HomeNavigation';
import EmployeeCard from './src/view/EmployeeCard';
import ArticleMenu from './src/view/ArticleMenu';
import ArticleCreation from './src/view/ArticleCreation';
import ArticleList from './src/view/ArticleList';
import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


const Stack = createStackNavigator();
export default function App() {

  return (
    // ApplicationProvider sert a utiliser les components de UI Kitten
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeNavigation'>
          <Stack.Screen options={{ title: 'Accueil' }} name='HomeNavigation' component={HomeNavigation} />
          <Stack.Screen options={{ title: 'Employer' }} name='EmployeeCard' component={EmployeeCard} />
          <Stack.Screen options={{ title: 'Login' }} name='Login' component={Login} />
          <Stack.Screen options={{ title: 'Article' }} name='ArticleMenu' component={ArticleMenu} />
          <Stack.Screen options={{ title: 'Ajouter' }} name='ArticleCreation' component={ArticleCreation} />
          <Stack.Screen options={{ title: 'Liste des articles' }} name='ArticleList' component={ArticleList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}