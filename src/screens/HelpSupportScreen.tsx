import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

export default function HelpSupportScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleContact = () => {
    Alert.alert('Contact Support', 'Our support team will reach out to your registered email within 24 hours.');
  };

  const faqs = [
    {
      q: 'How does PragnaMarga parse my resume?',
      a: 'We use advanced NLP models to extract skills, experience, and education, mapping them to real-time market data to find the best career vectors.'
    },
    {
      q: 'Are the job matches real?',
      a: 'Yes, the matches reflect real, active roles from top companies. Tapping "Apply" redirects you directly to the official company career portal.'
    },
    {
      q: 'How do I update my skills?',
      a: 'Go to your Profile, tap "Account Details", and you will be taken to the Assessment tuning screen where you can add or remove skills.'
    }
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={[styles.header, { borderBottomColor: colors.outline }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <MaterialIcons name="arrow-back" size={24} color={colors.onSurface} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.onSurface }]}>Help & Support</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Contact Support Card */}
        <View style={[styles.contactCard, { backgroundColor: colors.primaryContainer, borderColor: colors.primaryContainer }]}>
          <MaterialIcons name="support-agent" size={48} color={colors.primary} style={{ marginBottom: 16 }} />
          <Text style={[styles.contactTitle, { color: colors.onPrimaryContainer }]}>Need direct assistance?</Text>
          <Text style={[styles.contactDesc, { color: colors.onPrimaryContainer }]}>Our AI career experts are standing by to help you debug your career trajectory.</Text>
          <TouchableOpacity 
            style={[styles.contactBtn, { backgroundColor: colors.primary }]}
            onPress={handleContact}
          >
            <Text style={styles.contactBtnText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.onSurface }]}>Frequently Asked Questions</Text>
        
        {faqs.map((faq, index) => (
          <View key={index} style={[styles.faqCard, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
            <Text style={[styles.faqQ, { color: colors.onSurface }]}>{faq.q}</Text>
            <Text style={[styles.faqA, { color: colors.onSurfaceVariant }]}>{faq.a}</Text>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={[styles.versionText, { color: colors.textMuted }]}>PragnaMarga v1.0.0 (Build 42)</Text>
          <Text style={[styles.versionText, { color: colors.textMuted }]}>© 2026 PragnaMarga AI</Text>
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
  contactCard: {
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 32,
  },
  contactTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  contactDesc: { fontSize: 14, textAlign: 'center', marginBottom: 20, lineHeight: 22 },
  contactBtn: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  contactBtnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  faqCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  faqQ: { fontSize: 15, fontWeight: 'bold', marginBottom: 8 },
  faqA: { fontSize: 14, lineHeight: 20 },
  footer: { alignItems: 'center', marginTop: 32 },
  versionText: { fontSize: 12, marginBottom: 4 }
});
