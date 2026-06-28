import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

export default function PrivacyScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [visibility, setVisibility] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const SettingToggle = ({ title, description, value, onValueChange }: any) => (
    <View style={[styles.settingRow, { borderBottomColor: colors.outline }]}>
      <View style={styles.settingTextContainer}>
        <Text style={[styles.settingTitle, { color: colors.onSurface }]}>{title}</Text>
        <Text style={[styles.settingDesc, { color: colors.onSurfaceVariant }]}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.outline, true: colors.primary }}
        thumbColor="#ffffff"
      />
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={[styles.header, { borderBottomColor: colors.outline }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <MaterialIcons name="arrow-back" size={24} color={colors.onSurface} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.onSurface }]}>Privacy & Security</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: colors.primary }]}>Profile Privacy</Text>
          <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
            <SettingToggle 
              title="Public Profile Visibility"
              description="Allow recruiters to find your profile even when you are not actively applying."
              value={visibility}
              onValueChange={setVisibility}
            />
            <SettingToggle 
              title="Resume Data Sharing"
              description="Share anonymized resume data to improve PragnaMarga's matching algorithms."
              value={dataSharing}
              onValueChange={setDataSharing}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: colors.primary }]}>Account Security</Text>
          <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
            <SettingToggle 
              title="Two-Factor Authentication"
              description="Require an extra code when logging in from unrecognized devices."
              value={twoFactor}
              onValueChange={setTwoFactor}
            />
            <TouchableOpacity style={styles.actionRow}>
              <Text style={[styles.actionText, { color: colors.onSurface }]}>Change Password</Text>
              <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.actionText, { color: '#ef4444' }]}>Delete Account</Text>
              <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  backBtn: { width: 40 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  section: { marginBottom: 24 },
  sectionHeader: { fontSize: 14, fontWeight: 'bold', marginBottom: 8, marginLeft: 4, textTransform: 'uppercase' },
  card: { borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  settingTextContainer: { flex: 1, paddingRight: 16 },
  settingTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  settingDesc: { fontSize: 13, lineHeight: 18 },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9'
  },
  actionText: { fontSize: 16, fontWeight: 'bold' }
});
