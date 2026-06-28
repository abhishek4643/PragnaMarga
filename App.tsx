import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AssessmentScreen from './src/screens/AssessmentScreen';
import ResultScreen from './src/screens/ResultScreen';
import RoadmapScreen from './src/screens/RoadmapScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AccountDetailsScreen from './src/screens/AccountDetailsScreen';
import PrivacyScreen from './src/screens/PrivacyScreen';
import HelpSupportScreen from './src/screens/HelpSupportScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Assessment" component={AssessmentScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Roadmap" component={RoadmapScreen} />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ animation: 'slide_from_bottom' }} 
        />
        <Stack.Screen 
          name="AccountDetails" 
          component={AccountDetailsScreen} 
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen 
          name="PrivacySecurity" 
          component={PrivacyScreen} 
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen 
          name="HelpSupport" 
          component={HelpSupportScreen} 
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
