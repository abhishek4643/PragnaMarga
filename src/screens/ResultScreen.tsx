import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import TopHeader from '../components/TopHeader';
import BottomNav from '../components/BottomNav';

export default function ResultScreen({ route, navigation }: any) {
  const { colors } = useTheme();
  // Fallback skills if navigated directly without uploading
  const selectedSkills = route.params?.selectedSkills || ['Python', 'React']; 
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filters = ['All', 'Remote', 'Full-time', 'Senior Level', 'Tech Giants', 'Startups'];
  
  // Master Database of potential jobs
  const jobDatabase = [
    {
      id: 1,
      role: 'AI Solutions Architect',
      company: 'Google',
      location: 'Mountain View, CA (Hybrid)',
      matchScore: '92%',
      desc: 'Design and deploy scalable machine learning infrastructures for enterprise applications.',
      requiredSkills: ['Python', 'TensorFlow', 'Cloud Architecture'],
      url: 'https://careers.google.com'
    },
    {
      id: 2,
      role: 'Machine Learning Engineer',
      company: 'Microsoft',
      location: 'Remote',
      matchScore: '88%',
      desc: 'Build predictive models and integrate advanced AI capabilities into core Azure services.',
      requiredSkills: ['Python', 'Azure', 'Deep Learning'],
      url: 'https://careers.microsoft.com'
    },
    {
      id: 3,
      role: 'Data Scientist',
      company: 'OpenAI',
      location: 'San Francisco, CA',
      matchScore: '85%',
      desc: 'Analyze massive datasets to improve the safety and alignment of large language models.',
      requiredSkills: ['SQL', 'Data Analytics', 'Python'],
      url: 'https://openai.com/careers'
    },
    {
      id: 4,
      role: 'Cloud Engineer',
      company: 'Amazon Web Services',
      location: 'Seattle, WA (Remote)',
      matchScore: '81%',
      desc: 'Develop and maintain scalable cloud microservices for AI-driven enterprise clients.',
      requiredSkills: ['AWS', 'Docker', 'Kubernetes'],
      url: 'https://amazon.jobs'
    },
    {
      id: 5,
      role: 'Frontend Engineer',
      company: 'Meta',
      location: 'Menlo Park, CA (Hybrid)',
      matchScore: '89%',
      desc: 'Build highly scalable and responsive user interfaces for millions of users.',
      requiredSkills: ['React', 'UI/UX Design', 'JavaScript'],
      url: 'https://metacareers.com'
    }
  ];

  // Dynamic Matching Logic: Only show jobs where ALL required skills are present in the resume + Match Search Query
  const matches = jobDatabase.filter(job => {
    const matchesResume = job.requiredSkills.every(skill => selectedSkills.includes(skill));
    const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesResume && matchesSearch;
  });

  const toggleSave = (id: number) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter(jobId => jobId !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  const handleApply = async (id: number, url: string) => {
    try {
      // Mark as applied for the tracker
      if (!appliedJobs.includes(id)) {
        setAppliedJobs([...appliedJobs, id]);
      }
      
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Don't know how to open this URL: " + url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <TopHeader />
      
      <View style={[styles.searchContainer, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
        <MaterialIcons name="search" size={24} color={colors.onSurfaceVariant} style={styles.searchIcon} />
        <TextInput 
          style={[styles.searchInput, { color: colors.onSurface }]}
          placeholder="Search jobs or companies..."
          placeholderTextColor={colors.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <MaterialIcons name="close" size={20} color={colors.onSurfaceVariant} />
          </TouchableOpacity>
        )}
      </View>

      <View style={[styles.filterContainer, { borderBottomColor: colors.outline }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          {filters.map((filter, index) => (
            <TouchableOpacity 
              key={index}
              onPress={() => setActiveFilter(filter)}
              style={[
                styles.filterPill, 
                { backgroundColor: activeFilter === filter ? colors.primary : colors.surface, borderColor: activeFilter === filter ? colors.primary : colors.outline }
              ]}
            >
              <Text style={[
                styles.filterText, 
                { color: activeFilter === filter ? colors.white : colors.onSurfaceVariant }
              ]}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={[styles.title, { color: colors.onSurface }]}>Matches</Text>
              <Text style={[styles.subtitle, { color: colors.onSurfaceVariant }]}>
                {matches.length} roles found based on your resume
              </Text>
            </View>
            <TouchableOpacity 
              style={[styles.fineTuneBtn, { backgroundColor: colors.primaryContainer }]}
              onPress={() => navigation.navigate('Assessment')}
            >
              <MaterialIcons name="tune" size={16} color={colors.primary} />
              <Text style={[styles.fineTuneText, { color: colors.primary }]}>Fine-Tune</Text>
            </TouchableOpacity>
          </View>
        </View>

        {matches.length === 0 ? (
          <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline, alignItems: 'center' }]}>
            <MaterialIcons name="search-off" size={48} color={colors.onSurfaceVariant} style={{ marginBottom: 16 }} />
            <Text style={[styles.roleTitle, { color: colors.onSurface, textAlign: 'center' }]}>No Exact Matches</Text>
            <Text style={[styles.roleDesc, { color: colors.onSurfaceVariant, textAlign: 'center' }]}>
              Try fine-tuning your profile to add more skills!
            </Text>
          </View>
        ) : (
          matches.map((match, idx) => (
            <View key={match.id} style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
              <View style={styles.cardHeader}>
                <View style={styles.companyInfoRow}>
                  <View style={[styles.companyLogoPlaceholder, { backgroundColor: colors.primaryContainer }]}>
                    <MaterialIcons name="business" size={20} color={colors.primary} />
                  </View>
                  <View>
                    <Text style={[styles.companyName, { color: colors.onSurfaceVariant }]}>{match.company}</Text>
                    <Text style={[styles.locationText, { color: colors.textMuted }]}>{match.location}</Text>
                  </View>
                </View>

                <View style={[styles.progressCircle, { borderColor: idx === 0 ? colors.primary : colors.success, borderLeftColor: colors.outline }]}>
                  <Text style={[styles.progressText, { color: idx === 0 ? colors.primary : colors.success }]}>{match.matchScore}</Text>
                </View>
              </View>
              
              <Text style={[styles.roleTitle, { color: colors.onSurface }]}>{match.role}</Text>
              {idx === 0 && (
                <View style={[styles.badgeSuccess, { backgroundColor: '#dcfce7', alignSelf: 'flex-start', marginBottom: 8 }]}>
                  <Text style={[styles.badgeSuccessText, { color: colors.success }]}>Top Resume Match</Text>
                </View>
              )}
              
              <Text style={[styles.roleDesc, { color: colors.onSurfaceVariant }]}>
                {match.desc}
              </Text>
              
              <View style={styles.tagsContainer}>
                {match.requiredSkills.map((skill: string, index: number) => {
                  const isMatchingSkill = selectedSkills.includes(skill);
                  return (
                    <View key={index} style={[
                      styles.pill, 
                      { backgroundColor: isMatchingSkill ? colors.primaryContainer : colors.surface, borderColor: isMatchingSkill ? colors.primaryContainer : colors.outline }
                    ]}>
                      <Text style={[
                        styles.pillText, 
                        { color: isMatchingSkill ? colors.primary : colors.onSurfaceVariant, fontWeight: isMatchingSkill ? 'bold' : '600' }
                      ]}>
                        {skill}
                      </Text>
                    </View>
                  );
                })}
              </View>
              
              <View style={styles.actionRow}>
                <TouchableOpacity 
                  style={[styles.applyBtn, { backgroundColor: appliedJobs.includes(match.id) ? (colors.success || '#22c55e') : colors.primary }]}
                  onPress={() => handleApply(match.id, match.url)}
                >
                  <Text style={[styles.applyBtnText, { color: '#ffffff' }]}>
                    {appliedJobs.includes(match.id) ? 'Applied' : 'Apply Now'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.saveBtn, { borderColor: colors.outline }]}
                  onPress={() => toggleSave(match.id)}
                >
                  <MaterialIcons 
                    name={savedJobs.includes(match.id) ? "bookmark" : "bookmark-border"} 
                    size={24} 
                    color={savedJobs.includes(match.id) ? colors.primary : colors.onSurfaceVariant} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <BottomNav activeTab="Matches" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 12,
    height: 48,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 15 },
  filterContainer: { paddingVertical: 12, borderBottomWidth: 1 },
  filterScroll: { paddingHorizontal: 16, gap: 8 },
  filterPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1 },
  filterText: { fontSize: 13, fontWeight: '600' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  headerSection: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 14 },
  fineTuneBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, gap: 6 },
  fineTuneText: { fontWeight: 'bold', fontSize: 12 },
  card: { borderRadius: 16, padding: 20, borderWidth: 1, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  companyInfoRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  companyLogoPlaceholder: { width: 40, height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  companyName: { fontSize: 14, fontWeight: 'bold' },
  locationText: { fontSize: 12, marginTop: 2 },
  badgeSuccess: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeSuccessText: { fontSize: 11, fontWeight: 'bold' },
  progressCircle: { width: 44, height: 44, borderRadius: 22, borderWidth: 4, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-45deg' }] },
  progressText: { fontWeight: 'bold', fontSize: 13, transform: [{ rotate: '45deg' }] },
  roleTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  roleDesc: { fontSize: 14, lineHeight: 22, marginBottom: 16 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  pill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 16, borderWidth: 1 },
  pillText: { fontSize: 11 },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  applyBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtnText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  saveBtn: {
    width: 48,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
