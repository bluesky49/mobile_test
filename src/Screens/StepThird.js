import React, { useState } from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StepFirst = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient colors={['#319795', '#3182CE']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#EBF4FF', '#E6FFFA']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={styles.backImg}
        >
          <Text style={styles.text}>Deine Job website</Text>
          <Image source={require('../assets/agree.png')} style={styles.agreeImg} />
        </LinearGradient>
        <View style={styles.registerContainer}>
          <TouchableOpacity style={styles.registerBtn}>
            <LinearGradient colors={['#319795', '#3182CE']}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.regGrad}>
              <Text style={styles.registerText}>Kostenlos Registrieren</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={[styles.btn, {borderTopLeftRadius: 12, borderBottomLeftRadius: 12}]} onPress={() => navigation.navigate('Worker')}>
              <Text style={styles.btnTxt}>Arbeitnehmer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Employer')}>
              <Text style={styles.btnTxt}>Arbeitgeber</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.selected]}>
              <Text
                style={[styles.selectedbtnTxt, { borderTopRightRadius: 12, borderBottomRightRadius: 12 }]}
              >
                Temporärbüro
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.subtitle}>
              Drei einfache Schritte zur Vermittlung neuer Mitarbeiter
            </Text>
          </View>
          <Image source={require('../assets/profile.png')} style={styles.profileImg} />
          <View style={styles.item}>
            <Text style={styles.number}>1.</Text>
            <Text style={styles.stepDesc}>Erstellen dein{"\n"}Unternehmensprofil</Text>
          </View>
          <View style={styles.step2}>
            <ImageBackground source={require('../assets/back.png')} style={styles.stepImg}>
            <View style={styles.item}>
            <Text style={styles.number}>2.</Text>
            <Text style={styles.stepDesc}>Erhalte Vermittlungs-{"\n"}angebot von Arbeitgeber</Text>
            </View>
            <Image source={require('../assets/offer.png')} style={styles.profileImg} />
            </ImageBackground>
          </View>
          <View style={styles.step2}>
            <View style={styles.item}>
            <Text style={styles.number}>3.</Text>
            <Text style={styles.stepDesc}>Vermittlung nach Provision{"\n"}oder Stundenlohn</Text>
            </View>
            <Image source={require('../assets/business.png')} style={styles.profileImg} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  headerContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 67,
    shadowColor: '#00000029',
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.85,
    elevation: 5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  header: {
    backgroundColor: '#fff',
    width: '100%',
    height: 62,
    marginTop: 5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flex: 1,
    justifyContent: 'center',
    padding: 17
  },
  loginBtnTxt: {
    color: '#319795',
    fontSize: 14,
    marginLeft: 'auto',
    letterSpacing: 0.84
  },
  backImg: {
    marginTop: 67,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 18,
    fontSize: 42,
    letterSpacing: 1.26,
    width: 320,
    textAlign: 'center',
    lineHeight: 50,
    color: '#2D3748'
  },
  agreeImg: {
    width: '100%',
    height: 410
  },
  registerContainer: {
    height: 128,
    width: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginTop: -40,
  },
  registerBtn: {
    height: 40,
    width: 320,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 24,
  },
  registerText: {
    textAlign: 'center',
    color: '#E6FFFA',
    letterSpacing: 0.84,
    fontSize: 14,
    lineHeight: 17
  },
  regGrad: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    paddingBottom: 140
  },
  btnGroup: {
    marginTop: 25,
    marginLeft: -95,
    marginBottom: 30,
    flexDirection: 'row'
  },
  btn: {
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E0'
  },
  selected: {
    backgroundColor: '#81E6D9',
    borderWidth: 0,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12
  },
  selectedbtnTxt: {
    fontSize: 14,
    color: '#E6FFFA'
  },
  btnTxt: {
    color: '#319795',
    fontSize: 14
  },
  subtitle: {
    width: 280,
    fontSize: 21,
    margin: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 25,
    color: '#4A5568',
    display: 'flex'
  },
  txtContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileImg: {
    width: 220,
    height: 150,
    marginLeft: 130,
    marginTop: 20
  },
  number: {
    color: '#718096',
    fontSize: 130,
    marginLeft: 30
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: -50
  },
  stepDesc: {
    color: '#718096',
    fontSize: 15.75,
    lineHeight: 19,
    marginTop: 123,
    marginLeft: 50
  },
  step2: {
    marginTop: 22
  },
  stepImg: {
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    height: 490
  }
})
export default StepFirst;
