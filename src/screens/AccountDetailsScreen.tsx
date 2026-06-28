import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

export default function AccountDetailsScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  // Basic Info
  const [name, setName] = useState('Alex Developer');
  const [email, setEmail] = useState('alex.dev@example.com');
  const [location, setLocation] = useState('San Francisco, CA');
  
  // Phone & Demographics
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('555-123-4567');
  const [gender, setGender] = useState('Unspecified');

  // Links
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const handleSave = () => {
    Alert.alert('Success', 'Your personal information has been updated successfully.', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
        {/* Custom Header for Sub-screens */}
        <View style={[styles.header, { borderBottomColor: colors.outline }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <MaterialIcons name="arrow-back" size={24} color={colors.onSurface} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.onSurface }]}>Account Details</Text>
          <View style={{ width: 40 }} />
        </View>
        
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.avatarSection}>
            <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primaryContainer }]}>
              <MaterialIcons name="person" size={64} color={colors.primary} />
            </View>
            <TouchableOpacity>
              <Text style={[styles.changePhotoText, { color: colors.primary }]}>Change Photo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formSection}>
            <Text style={[styles.sectionTitle, { color: colors.onSurface }]}>Personal Information</Text>

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>Full Name</Text>
            <TextInput 
              style={[styles.input, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
              value={name}
              onChangeText={setName}
              placeholderTextColor={colors.textMuted}
            />

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>Email Address</Text>
            <TextInput 
              style={[styles.input, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholderTextColor={colors.textMuted}
            />

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>Phone Number</Text>
            <View style={styles.phoneContainer}>
              <TextInput 
                style={[styles.input, styles.countryCodeInput, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
                value={countryCode}
                onChangeText={setCountryCode}
                keyboardType="phone-pad"
                placeholder="+1"
                placeholderTextColor={colors.textMuted}
              />
              <TextInput 
                style={[styles.input, styles.phoneInput, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="000-000-0000"
                placeholderTextColor={colors.textMuted}
              />
            </View>

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>Gender</Text>
            <View style={styles.genderContainer}>
              {['Male', 'Female', 'Other'].map(g => (
                <TouchableOpacity 
                  key={g} 
                  style={[
                    styles.genderBtn, 
                    { borderColor: colors.outline, backgroundColor: colors.cardSurface },
                    gender === g && { backgroundColor: colors.primary, borderColor: colors.primary }
                  ]}
                  onPress={() => setGender(g)}
                >
                  <Text style={[
                    styles.genderText, 
                    { color: colors.onSurfaceVariant },
                    gender === g && { color: '#ffffff', fontWeight: 'bold' }
                  ]}>{g}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>Location</Text>
            <TextInput 
              style={[styles.input, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
              value={location}
              onChangeText={setLocation}
              placeholderTextColor={colors.textMuted}
            />

            <View style={[styles.divider, { backgroundColor: colors.outline }]} />

            <Text style={[styles.sectionTitle, { color: colors.onSurface }]}>Professional Links</Text>

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>LinkedIn Profile</Text>
            <View style={styles.iconInputContainer}>
              <FontAwesome5 name="linkedin" size={18} color="#0a66c2" style={styles.inputIcon} />
              <TextInput 
                style={[styles.iconInput, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
                value={linkedin}
                onChangeText={setLinkedin}
                placeholder="linkedin.com/in/username"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="none"
              />
            </View>

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>GitHub Profile</Text>
            <View style={styles.iconInputContainer}>
              <FontAwesome5 name="github" size={18} color={colors.onSurface} style={styles.inputIcon} />
              <TextInput 
                style={[styles.iconInput, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
                value={github}
                onChangeText={setGithub}
                placeholder="github.com/username"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="none"
              />
            </View>

            <Text style={[styles.label, { color: colors.onSurfaceVariant }]}>Portfolio / Website</Text>
            <View style={styles.iconInputContainer}>
              <MaterialIcons name="language" size={20} color={colors.onSurfaceVariant} style={styles.inputIcon} />
              <TextInput 
                style={[styles.iconInput, { backgroundColor: colors.cardSurface, borderColor: colors.outline, color: colors.onSurface }]}
                value={portfolio}
                onChangeText={setPortfolio}
                placeholder="yourwebsite.com"
                placeholderTextColor={colors.textMuted}
                keyboardType="url"
                autoCapitalize="none"
              />
            </View>

          </View>

          <TouchableOpacity 
            style={[styles.saveBtn, { backgroundColor: colors.primary }]}
            onPress={handleSave}
          >
            <Text style={styles.saveBtnText}>Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
  avatarSection: { alignItems: 'center', marginBottom: 32 },
  avatarPlaceholder: {
    width: 120, height: 120, borderRadius: 60,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 12,
  },
  changePhotoText: { fontWeight: 'bold', fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16, marginTop: 8 },
  formSection: { marginBottom: 32 },
  label: { fontSize: 13, fontWeight: 'bold', marginBottom: 8, marginLeft: 4 },
  input: {
    borderWidth: 1, borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 12,
    fontSize: 15, marginBottom: 20,
  },
  phoneContainer: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  countryCodeInput: { width: 80, marginBottom: 0 },
  phoneInput: { flex: 1, marginBottom: 0 },
  genderContainer: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  genderBtn: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
  },
  genderText: { fontSize: 14, fontWeight: '500' },
  divider: { height: 1, marginVertical: 24 },
  iconInputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
    zIndex: 1,
  },
  iconInput: {
    borderWidth: 1, borderRadius: 12,
    paddingLeft: 48, paddingRight: 16, paddingVertical: 12,
    fontSize: 15,
  },
  saveBtn: { paddingVertical: 16, borderRadius: 30, alignItems: 'center' },
  saveBtnText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});
