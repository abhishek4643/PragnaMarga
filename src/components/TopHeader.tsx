import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';

export default function TopHeader() {
  const insets = useSafeAreaInsets();
  const { colors, theme, toggleTheme } = useTheme();
  
  const [logoModalVisible, setLogoModalVisible] = useState(false);

  return (
    <>
      <View style={[
        styles.header, 
        { 
          paddingTop: insets.top + 10,
          backgroundColor: colors.surface,
          borderBottomColor: colors.outline,
        }
      ]}>
        <TouchableOpacity 
          style={styles.leftSection} 
          onPress={() => setLogoModalVisible(true)}
        >
          <Image source={require('../../assets/logo.png')} style={styles.logoImage} />
        </TouchableOpacity>
        
        <Text style={[styles.title, { color: colors.primary }]}>PragnaMarga</Text>
        
        <View style={styles.rightSection}>
          <TouchableOpacity 
            onPress={toggleTheme} 
            style={[styles.toggleBtn, { borderColor: colors.outline, backgroundColor: colors.surface }]}
          >
            <MaterialIcons 
              name={theme === 'light' ? "dark-mode" : "light-mode"} 
              size={16} 
              color={theme === 'light' ? '#64748b' : '#fcd34d'} 
            />
            <Text style={[styles.toggleText, { color: colors.onSurfaceVariant }]}>
              {theme === 'light' ? 'DARK' : 'LIGHT'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconBtn}
            onPress={() => Alert.alert("Notifications", "You have no new notifications.")}
          >
            <MaterialIcons name="notifications-none" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={logoModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setLogoModalVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay} 
          onPress={() => setLogoModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Image 
              source={require('../../assets/logo.png')} 
              style={styles.fullScreenLogo} 
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    zIndex: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftSection: {
    width: 40,
  },
  logoImage: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    justifyContent: 'flex-end',
    gap: 12,
  },
  toggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconBtn: {
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    padding: 10,
  },
  fullScreenLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  }
});
