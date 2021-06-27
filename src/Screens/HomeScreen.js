import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.navigateBtn} onPress={() => navigation.navigate('Worker')}>
        <View style={styles.circleShape} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Test Mobile Index ALL</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigateBtn: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#fff'
  },
  circleShape: {
    width: 170,
    height: 170,
    position: 'absolute',
    top: -50,
    left: -50,
    backgroundColor: '#FF0000',
    borderRadius: 170 / 2,
    transform: [{ scaleX: 1.4 }, { rotate: '45deg' }],
  },
  textWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 75,
    color: '#319795',
    width: 240
  }
})
export default HomeScreen
