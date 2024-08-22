import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/toplogo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../../assets/Group 393.png')} style={styles.threeline} />
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Dashboard</Text>a
      <Text style={styles.subheader}>Tamlin Roberts</Text>

      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/Frame 322.png')} style={styles.logo} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EFF1F8',
  },
  poweredby: {
    width: 211,
    height: 26.67,
    opacity: 50,
    alignSelf: 'center',
    marginTop: 15
  },
  container1: {
    height: 520,
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    height: 75
  },
  threeline: {
    width: 25,
    height: 17,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10
  },
  logo: {
    flex: 1,
    width: 352,
    height: 75,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Dashboard;
