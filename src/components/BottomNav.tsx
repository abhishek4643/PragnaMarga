import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

interface BottomNavProps {
  activeTab: 'Home' | 'Matches' | 'Roadmap' | 'Profile';
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Matches', icon: 'auto-awesome' }, 
    { name: 'Roadmap', icon: 'route' },
    { name: 'Profile', icon: 'person' },
  ];

  const handlePress = (tabName: string) => {
    switch (tabName) {
      case 'Home': navigation.navigate('Home'); break;
      case 'Matches': navigation.navigate('Result'); break;
      case 'Roadmap': navigation.navigate('Roadmap'); break;
      case 'Profile': navigation.navigate('Profile'); break;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardSurface, borderTopColor: colors.outline }]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity 
            key={tab.name} 
            onPress={() => handlePress(tab.name)}
            style={[styles.tab, isActive && { backgroundColor: colors.primaryContainer }]}
          >
            <MaterialIcons 
              name={tab.icon as any} 
              size={24} 
              color={isActive ? colors.primary : colors.onSurfaceVariant} 
            />
            <Text style={[
              styles.tabText, 
              { color: isActive ? colors.primary : colors.onSurfaceVariant },
              isActive && styles.activeTabText
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    paddingBottom: 25, // safe area approx
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
  },
  tabText: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
});
