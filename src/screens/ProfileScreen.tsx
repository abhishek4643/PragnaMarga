import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import TopHeader from '../components/TopHeader';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const handleSettingsPress = (feature: string) => {
    if (feature === 'Privacy & Security') {
      navigation.navigate('PrivacySecurity');
    } else if (feature === 'Help & Support') {
      navigation.navigate('HelpSupport');
    } else {
      Alert.alert(
        feature,
        `The ${feature} settings panel will be available in the next release.`
      );
    }
  };

  const handleAccountPress = () => {
    navigation.navigate('AccountDetails');
  };

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out of your session?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Log Out', 
          style: 'destructive',
          onPress: () => navigation.navigate('Home') 
        }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <TopHeader />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primaryContainer }]}>
            <MaterialIcons name="person" size={48} color={colors.primary} />
          </View>
          <Text style={[styles.name, { color: colors.onSurface }]}>Alex Developer</Text>
          <Text style={[styles.headline, { color: colors.onSurfaceVariant }]}>AI & Software Engineer | B.Tech CS</Text>
        </View>

        {/* Applied Jobs Section */}
        <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="track-changes" size={20} color={colors.primary} />
            <Text style={[styles.cardTitle, { color: colors.onSurface }]}>Application Tracker</Text>
          </View>
          
          <View style={styles.appliedJobItem}>
            <View>
              <Text style={[styles.jobRole, { color: colors.onSurface }]}>AI Solutions Architect</Text>
              <Text style={[styles.jobCompany, { color: colors.onSurfaceVariant }]}>Google</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: '#dcfce7' }]}>
              <Text style={[styles.statusText, { color: colors.success }]}>Applied</Text>
            </View>
          </View>
          
          <View style={[styles.divider, { backgroundColor: colors.outline }]} />
          
          <View style={styles.appliedJobItem}>
            <View>
              <Text style={[styles.jobRole, { color: colors.onSurface }]}>Machine Learning Eng.</Text>
              <Text style={[styles.jobCompany, { color: colors.onSurfaceVariant }]}>Microsoft</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: '#fef3c7' }]}>
              <Text style={[styles.statusText, { color: '#d97706' }]}>In Review</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="settings" size={20} color={colors.primary} />
            <Text style={[styles.cardTitle, { color: colors.onSurface }]}>Settings</Text>
          </View>

          <TouchableOpacity style={styles.settingItem} onPress={handleAccountPress}>
            <MaterialIcons name="person-outline" size={24} color={colors.onSurfaceVariant} />
            <Text style={[styles.settingText, { color: colors.onSurface }]}>Account Details (Edit Profile)</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingsPress('Notification Preferences')}>
            <MaterialIcons name="notifications-none" size={24} color={colors.onSurfaceVariant} />
            <Text style={[styles.settingText, { color: colors.onSurface }]}>Notification Preferences</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingsPress('Privacy & Security')}>
            <MaterialIcons name="lock-outline" size={24} color={colors.onSurfaceVariant} />
            <Text style={[styles.settingText, { color: colors.onSurface }]}>Privacy & Security</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, { borderBottomWidth: 0 }]} onPress={() => handleSettingsPress('Help & Support')}>
            <MaterialIcons name="help-outline" size={24} color={colors.onSurfaceVariant} />
            <Text style={[styles.settingText, { color: colors.onSurface }]}>Help & Support</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutBtnText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
      <BottomNav activeTab="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headline: {
    fontSize: 14,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appliedJobItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  jobRole: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 13,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginVertical: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
  logoutBtn: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtnText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
