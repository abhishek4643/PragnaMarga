import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import TopHeader from '../components/TopHeader';
import BottomNav from '../components/BottomNav';

export default function RoadmapScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <TopHeader />
      
      <View style={styles.content}>
        <MaterialIcons name="route" size={64} color={colors.primary} style={{ opacity: 0.5, marginBottom: 20 }} />
        <Text style={[styles.title, { color: colors.onSurface }]}>Your Career Roadmap</Text>
        <Text style={[styles.subtitle, { color: colors.onSurfaceVariant }]}>
          This feature is currently under construction.
        </Text>
      </View>

      <BottomNav activeTab="Roadmap" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  }
});
