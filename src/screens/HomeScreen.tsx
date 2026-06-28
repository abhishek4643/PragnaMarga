import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { useTheme } from '../theme/ThemeContext';
import TopHeader from '../components/TopHeader';
import BottomNav from '../components/BottomNav';

export default function HomeScreen({ navigation }: any) {
  const { colors, theme } = useTheme();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const [isExtracting, setIsExtracting] = useState(false);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedFile(result.assets[0].name);
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to pick document');
    }
  };

  const handleAction = () => {
    if (selectedFile) {
      setIsExtracting(true);
      
      // Simulate AI parsing delay on upload
      setTimeout(() => {
        setIsExtracting(false);
        // Go directly to matches upon upload
        navigation.navigate('Result', {
          selectedSkills: ['Python', 'React', 'UI/UX Design', 'TensorFlow', 'Cloud Architecture', 'JavaScript'] 
        });
      }, 1500);
    } else {
      pickDocument();
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <TopHeader />
      
      {/* Loading Overlay */}
      <Modal visible={isExtracting} transparent={true} animationType="fade">
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[styles.loadingText, { color: colors.primary }]}>PragnaMarga AI is parsing your resume...</Text>
            <Text style={styles.loadingSubtext}>Extracting skills, education, projects, and experience vectors.</Text>
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <Text style={[styles.title, { color: colors.onSurface }]}>Level Up Your{'\n'}Career</Text>
          <Text style={[styles.subtitle, { color: colors.onSurfaceVariant }]}>
            Drop your resume to unlock hyper-personalized matches and career roadmaps powered by PragnaMarga AI.
          </Text>
        </View>

        <TouchableOpacity 
          style={[
            styles.uploadCard, 
            { 
              backgroundColor: colors.cardSurface, 
              borderColor: selectedFile ? colors.success : colors.outline 
            }
          ]} 
          activeOpacity={0.8}
          onPress={pickDocument}
        >
          <View style={[styles.iconCircle, { backgroundColor: selectedFile ? '#dcfce7' : colors.primaryContainer }]}>
            <MaterialIcons 
              name={selectedFile ? "check-circle" : "cloud-upload"} 
              size={40} 
              color={selectedFile ? colors.success : colors.primary} 
            />
          </View>
          
          <Text style={[styles.cardTitle, { color: colors.onSurface }]}>
            {selectedFile ? 'File Ready' : 'Drag & Drop Resume'}
          </Text>
          
          <Text style={[styles.cardSubtitle, { color: colors.onSurfaceVariant }]}>
            {selectedFile ? selectedFile : 'or click to browse your device'}
          </Text>
          
          {!selectedFile && (
            <View style={styles.pillsContainer}>
              <View style={[styles.pill, { backgroundColor: colors.surface, borderColor: colors.outline }]}>
                <Text style={[styles.pillText, { color: colors.onSurfaceVariant }]}>PDF</Text>
              </View>
              <View style={[styles.pill, { backgroundColor: colors.surface, borderColor: colors.outline }]}>
                <Text style={[styles.pillText, { color: colors.onSurfaceVariant }]}>DOCX</Text>
              </View>
            </View>
          )}
          
          <TouchableOpacity 
            style={[styles.uploadButton, { backgroundColor: selectedFile ? colors.success : colors.primary }]}
            onPress={handleAction}
          >
            <Text style={[styles.uploadButtonText, { color: '#ffffff' }]}>
              {selectedFile ? 'Process Resume' : 'Quick Upload'}
            </Text>
            <MaterialIcons name="arrow-forward" size={16} color="#ffffff" />
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.securityNote}>
          <MaterialIcons name="lock-outline" size={14} color={colors.onSurfaceVariant} />
          <Text style={[styles.securityText, { color: colors.onSurfaceVariant }]}>
            Your data is encrypted and securely processed.
          </Text>
        </View>
      </ScrollView>

      <BottomNav activeTab="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    alignItems: 'center',
    paddingBottom: 40,
  },
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
  heroSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  uploadCard: {
    width: '100%',
    borderRadius: 24,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
  },
  pillsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  pillText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    gap: 8,
  },
  uploadButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 24,
  },
  securityText: {
    fontSize: 12,
  }
});
