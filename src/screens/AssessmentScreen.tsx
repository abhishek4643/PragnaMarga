import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, Modal } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import TopHeader from '../components/TopHeader';
import BottomNav from '../components/BottomNav';

export default function AssessmentScreen({ navigation }: any) {
  const { colors } = useTheme();

  // Initial State acts as the "Extracted" Data from the resume
  const [skills, setSkills] = useState([
    { id: 1, label: 'Python', selected: true },
    { id: 2, label: 'React', selected: true },
    { id: 3, label: 'UI/UX Design', selected: true },
    { id: 4, label: 'TensorFlow', selected: true },
    { id: 5, label: 'Cloud Architecture', selected: true },
    { id: 6, label: 'JavaScript', selected: true },
    { id: 7, label: 'SQL', selected: false },
    { id: 8, label: 'AWS', selected: false },
  ]);

  const [education, setEducation] = useState([
    { id: 1, title: 'B.Tech Computer Science', subtitle: 'National Institute of Technology • 2024 (GPA: 3.8)', selected: true },
    { id: 2, title: 'Cert. Advanced Machine Learning', subtitle: 'DeepLearning.AI • 2023', selected: true },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Emotion-Based Music Recognition', subtitle: 'Python, TensorFlow, Librosa, OpenCV', selected: true },
    { id: 2, title: 'DocuMind Neural RAG System', subtitle: 'LangChain, OpenAI, Streamlit, VectorDB', selected: true },
    { id: 3, title: 'EquityPulse Stock Screener', subtitle: 'React, Node.js, WebSockets', selected: false },
  ]);

  const [experience, setExperience] = useState([
    { id: 1, title: 'Software Engineer Intern', subtitle: 'Google • May 2023 - Aug 2023', selected: true },
    { id: 2, title: 'Frontend Developer', subtitle: 'TechNova Startup • Jan 2022 - Dec 2022', selected: true },
  ]);

  // Input States
  const [newSkill, setNewSkill] = useState('');
  const [newEduTitle, setNewEduTitle] = useState('');
  const [newEduSub, setNewEduSub] = useState('');
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjSub, setNewProjSub] = useState('');
  const [newExpTitle, setNewExpTitle] = useState('');
  const [newExpSub, setNewExpSub] = useState('');

  // Toggles
  const toggleSkill = (id: number) => setSkills(skills.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
  const toggleEducation = (id: number) => setEducation(education.map(e => e.id === id ? { ...e, selected: !e.selected } : e));
  const toggleProject = (id: number) => setProjects(projects.map(p => p.id === id ? { ...p, selected: !p.selected } : p));
  const toggleExperience = (id: number) => setExperience(experience.map(e => e.id === id ? { ...e, selected: !e.selected } : e));

  // Add & Remove
  const removeSkill = (id: number) => setSkills(skills.filter(s => s.id !== id));
  const addSkill = () => { 
    if(newSkill.trim()) { 
      setSkills([...skills, { id: Date.now(), label: newSkill.trim(), selected: true }]); 
      setNewSkill(''); 
    } 
  };

  const removeEducation = (id: number) => setEducation(education.filter(e => e.id !== id));
  const addEducation = () => { 
    if(newEduTitle.trim()) { 
      setEducation([...education, { id: Date.now(), title: newEduTitle.trim(), subtitle: newEduSub.trim(), selected: true }]); 
      setNewEduTitle(''); 
      setNewEduSub(''); 
    } 
  };

  const removeProject = (id: number) => setProjects(projects.filter(p => p.id !== id));
  const addProject = () => { 
    if(newProjTitle.trim()) { 
      setProjects([...projects, { id: Date.now(), title: newProjTitle.trim(), subtitle: newProjSub.trim(), selected: true }]); 
      setNewProjTitle(''); 
      setNewProjSub(''); 
    } 
  };

  const removeExperience = (id: number) => setExperience(experience.filter(e => e.id !== id));
  const addExperience = () => { 
    if(newExpTitle.trim()) { 
      setExperience([...experience, { id: Date.now(), title: newExpTitle.trim(), subtitle: newExpSub.trim(), selected: true }]); 
      setNewExpTitle(''); 
      setNewExpSub(''); 
    } 
  };

  const handleFindMatches = () => {
    const selectedSkills = skills.filter(s => s.selected).map(s => s.label);
    navigation.navigate('Result', { selectedSkills });
  };

  const SkillTag = ({ skill }: { skill: any }) => (
    <View style={[
      styles.skillTag, 
      { borderColor: colors.outline, backgroundColor: colors.cardSurface },
      skill.selected && { backgroundColor: colors.primaryContainer, borderColor: colors.primaryContainer }
    ]}>
      <TouchableOpacity onPress={() => toggleSkill(skill.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[
          styles.skillText, 
          { color: colors.onSurfaceVariant },
          skill.selected && { color: colors.primary, fontWeight: 'bold' }
        ]}>{skill.label}</Text>
        {skill.selected && <MaterialIcons name="check" size={14} color={colors.primary} style={styles.skillCheck} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeSkill(skill.id)} style={styles.removeIconBtn}>
        <MaterialIcons name="close" size={16} color={skill.selected ? colors.primary : colors.onSurfaceVariant} />
      </TouchableOpacity>
    </View>
  );

  const CheckItem = ({ item, onToggle, onRemove }: { item: any, onToggle: () => void, onRemove: () => void }) => (
    <View style={styles.eduItem}>
      <View style={styles.eduTextContainer}>
        <Text style={[styles.eduTitle, { color: colors.onSurface }]}>{item.title}</Text>
        <Text style={[styles.eduSubtitle, { color: colors.onSurfaceVariant }]}>{item.subtitle}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={onRemove} style={{ padding: 4 }}>
          <MaterialIcons name="delete-outline" size={20} color="#ef4444" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={onToggle}
          style={[
            styles.checkbox, 
            { borderColor: colors.outline },
            item.selected && { backgroundColor: colors.primary, borderColor: colors.primary }
          ]}
        >
          {item.selected && <MaterialIcons name="check" size={16} color={colors.white} />}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <TopHeader />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.headerSection}>
          <Text style={[styles.title, { color: colors.onSurface }]}>Fine-tune Your Profile</Text>
          <Text style={[styles.subtitle, { color: colors.onSurfaceVariant }]}>
            Review the extracted details from your resume. Select the ones you want to emphasize, or manually add new ones.
          </Text>
        </View>

        {/* Hard Skills Card */}
        <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleRow}>
              <MaterialIcons name="code" size={20} color={colors.onSurfaceVariant} />
              <Text style={[styles.cardTitle, { color: colors.onSurface }]}>Hard Skills</Text>
            </View>
          </View>
          <View style={styles.tagsContainer}>
            {skills.map(skill => <SkillTag key={skill.id} skill={skill} />)}
          </View>
          <View style={styles.addInputRow}>
            <TextInput 
              style={[styles.addInput, { borderColor: colors.outline, color: colors.onSurface }]}
              placeholder="Add new skill..."
              placeholderTextColor={colors.textMuted}
              value={newSkill}
              onChangeText={setNewSkill}
            />
            <TouchableOpacity onPress={addSkill} style={[styles.addBtn, { backgroundColor: colors.primary }]}>
              <MaterialIcons name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Experience Card */}
        <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleRow}>
              <MaterialIcons name="work-outline" size={20} color={colors.onSurfaceVariant} />
              <Text style={[styles.cardTitle, { color: colors.onSurface }]}>Experience / Internships</Text>
            </View>
          </View>
          {experience.length === 0 && (
            <Text style={[styles.emptyText, { color: colors.onSurfaceVariant }]}>No experience extracted yet.</Text>
          )}
          {experience.map((exp, index) => (
            <React.Fragment key={exp.id}>
              <CheckItem item={exp} onToggle={() => toggleExperience(exp.id)} onRemove={() => removeExperience(exp.id)} />
              {index < experience.length - 1 && <View style={[styles.divider, { backgroundColor: colors.surface }]} />}
            </React.Fragment>
          ))}
          <View style={[styles.divider, { backgroundColor: colors.surface, marginVertical: 12 }]} />
          <View style={styles.multiInputContainer}>
            <TextInput 
              style={[styles.addInputMulti, { borderColor: colors.outline, color: colors.onSurface, marginBottom: 8 }]}
              placeholder="Job Title..."
              placeholderTextColor={colors.textMuted}
              value={newExpTitle}
              onChangeText={setNewExpTitle}
            />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TextInput 
                style={[styles.addInputMulti, { flex: 1, borderColor: colors.outline, color: colors.onSurface }]}
                placeholder="Company & Dates..."
                placeholderTextColor={colors.textMuted}
                value={newExpSub}
                onChangeText={setNewExpSub}
              />
              <TouchableOpacity onPress={addExperience} style={[styles.addBtn, { backgroundColor: colors.primary, height: 42, width: 42 }]}>
                <MaterialIcons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Education Card */}
        <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleRow}>
              <FontAwesome5 name="graduation-cap" size={16} color={colors.onSurfaceVariant} />
              <Text style={[styles.cardTitle, { color: colors.onSurface, marginLeft: 8 }]}>Education</Text>
            </View>
          </View>
          {education.map((edu, index) => (
            <React.Fragment key={edu.id}>
              <CheckItem item={edu} onToggle={() => toggleEducation(edu.id)} onRemove={() => removeEducation(edu.id)} />
              {index < education.length - 1 && <View style={[styles.divider, { backgroundColor: colors.surface }]} />}
            </React.Fragment>
          ))}
          <View style={[styles.divider, { backgroundColor: colors.surface, marginVertical: 12 }]} />
          <View style={styles.multiInputContainer}>
            <TextInput 
              style={[styles.addInputMulti, { borderColor: colors.outline, color: colors.onSurface, marginBottom: 8 }]}
              placeholder="Degree or Certificate Title..."
              placeholderTextColor={colors.textMuted}
              value={newEduTitle}
              onChangeText={setNewEduTitle}
            />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TextInput 
                style={[styles.addInputMulti, { flex: 1, borderColor: colors.outline, color: colors.onSurface }]}
                placeholder="Institution & Year..."
                placeholderTextColor={colors.textMuted}
                value={newEduSub}
                onChangeText={setNewEduSub}
              />
              <TouchableOpacity onPress={addEducation} style={[styles.addBtn, { backgroundColor: colors.primary, height: 42, width: 42 }]}>
                <MaterialIcons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Projects Card */}
        <View style={[styles.card, { backgroundColor: colors.cardSurface, borderColor: colors.outline }]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleRow}>
              <MaterialIcons name="folder-open" size={20} color={colors.onSurfaceVariant} />
              <Text style={[styles.cardTitle, { color: colors.onSurface }]}>Projects</Text>
            </View>
          </View>
          {projects.map((proj, index) => (
            <React.Fragment key={proj.id}>
              <CheckItem item={proj} onToggle={() => toggleProject(proj.id)} onRemove={() => removeProject(proj.id)} />
              {index < projects.length - 1 && <View style={[styles.divider, { backgroundColor: colors.surface }]} />}
            </React.Fragment>
          ))}
          <View style={[styles.divider, { backgroundColor: colors.surface, marginVertical: 12 }]} />
          <View style={styles.multiInputContainer}>
            <TextInput 
              style={[styles.addInputMulti, { borderColor: colors.outline, color: colors.onSurface, marginBottom: 8 }]}
              placeholder="Project Name..."
              placeholderTextColor={colors.textMuted}
              value={newProjTitle}
              onChangeText={setNewProjTitle}
            />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TextInput 
                style={[styles.addInputMulti, { flex: 1, borderColor: colors.outline, color: colors.onSurface }]}
                placeholder="Tech Stack Used..."
                placeholderTextColor={colors.textMuted}
                value={newProjSub}
                onChangeText={setNewProjSub}
              />
              <TouchableOpacity onPress={addProject} style={[styles.addBtn, { backgroundColor: colors.primary, height: 42, width: 42 }]}>
                <MaterialIcons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: colors.primary }]}
          onPress={handleFindMatches}
        >
          <Text style={[styles.actionButtonText, { color: colors.white }]}>Find Matches</Text>
          <MaterialIcons name="auto-awesome" size={18} color={colors.white} />
        </TouchableOpacity>

      </ScrollView>

      <BottomNav activeTab="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingSubtext: {
    marginTop: 8,
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
  },
  headerSection: { marginBottom: 24 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 14, lineHeight: 20 },
  extractBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginBottom: 24,
    gap: 8,
  },
  extractBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  emptyText: {
    fontStyle: 'italic',
    fontSize: 13,
    marginBottom: 8,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 16 },
  skillTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 6,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  skillText: { fontSize: 13, fontWeight: '500' },
  skillCheck: { marginLeft: 6 },
  removeIconBtn: { padding: 4, marginLeft: 2 },
  addInputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  addInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 13,
  },
  addInputMulti: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
  },
  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  multiInputContainer: { width: '100%' },
  eduItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
  eduTextContainer: { flex: 1, paddingRight: 12 },
  eduTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  eduSubtitle: { fontSize: 12 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  divider: { height: 1, marginVertical: 8 },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 10,
    gap: 8,
  },
  actionButtonText: { fontWeight: 'bold', fontSize: 16 }
});
