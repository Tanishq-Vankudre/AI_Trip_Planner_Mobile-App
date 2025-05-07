import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => router.replace('../../auth/sign-in'))
      .catch((error) => console.error('Logout failed:', error));
  };

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        {/* <TouchableOpacity onPress={() => router.push('/profile/edit')}>
          <Ionicons name="settings-outline" size={28} color="black" />
        </TouchableOpacity> */}
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
          </Text>
        </View>
        
        <View style={styles.infoSection}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user.displayName || 'User'}</Text>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={22} color={Colors.WHITE} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 25,
    paddingTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 35,
    fontFamily: 'outfit-bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 40,
    color: Colors.WHITE,
    fontFamily: 'outfit-bold',
  },
  infoSection: {
    width: '100%',
  },
  infoContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: Colors.GRAY,
    marginBottom: 5,
    fontFamily: 'outfit-medium',
  },
  value: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'outfit-medium',
  },
  logoutButton: {
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  logoutText: {
    color: Colors.WHITE,
    fontSize: 18,
    marginLeft: 10,
    fontFamily: 'outfit-medium',
  },
});