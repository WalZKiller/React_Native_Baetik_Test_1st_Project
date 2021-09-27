import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert, Image } from 'react-native';

//Images
import HappyIcon from './image/happy-icon.svg';
import MoneyIcon from './image/money-icon.svg';
import EmailIcon from './image/email-icon.svg';

const HelloWorldApp = () => (
  
    <>
      <ScrollView style={styles.container}>
        {/* HEADER BAR*/}
        <View style={{
          backgroundColor: "#EE447D",
          padding: 20,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={styles.headerText}>SUPER BAE-TIK DISCOUNTS</Text>
          <Text style={styles.subText}>Up to 40% discounts on our kek batik, simply by signing up your email!</Text>
        </View>
        {/* END HEADER BAR*/}

        {/* EMAIL BAR */}
        <View style={{
          backgroundColor: "#F9D7DD",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}>
          <TextInput style={{
            backgroundColor: "white",
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            fontSize: 20,
            width: 300
          }} placeholder="Enter your email">
          </TextInput>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Join Now!</Text>
          </Pressable>
        </View>
        {/* END EMAIL BAR */}

        {/* PRODUCT PHOTO */}
        <View style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 40,
        }}>
          <Image source={require('./image/LogoBaetik.png')} style={{
            width: 150,
            height: 150,
          }}></Image>
        </View>
        {/* END PRODUCT PHOTO */}

        {/* TITLE BAR */}
        <View style={{
          flex: 4,
          justifyContent: "center",
          padding: 20,
          left: 70
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
            <HappyIcon width={30} height={30} marginRight={20}/>
            <Text style={styles.emojiTitle}>Free Cakes</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
            <MoneyIcon width={30} height={30} marginRight={20}/>
            <Text style={styles.emojiTitle}>Special Discounts</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
            <EmailIcon width={30} height={30} marginRight={20}/>
            <Text style={styles.emojiTitle}>New Flavour Updates</Text>
          </View>
        </View>
        {/* END TITLE BAR */}

        {/* DESCRIPTION BAR */}
        <View style={{
          flex: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}>
          {/* FREE CAKES  */}
          <View style={{
            paddingHorizontal: 10,
          }}>
            <Text style={styles.descriptionTitle}>Free Cakes</Text>
            <Text style={styles.descriptionText}>Grab your chance to win free bae-tik cakes by joining our monthly giveaway!</Text>
          </View>
          {/* SPECIAL DISCOUNTS */}
          <View style={{
            paddingHorizontal: 10,
            paddingTop: 30
          }}>
            <Text style={styles.descriptionTitle}>Special Discounts</Text>
            <Text style={styles.descriptionText}>Get bigger discounts the more you purchase, up to 40% off!</Text>
          </View>
          {/* NEW FLAVOUR UPDATES */}
          <View style={{
            paddingHorizontal: 10,
            paddingTop: 30
          }}>
            <Text style={styles.descriptionTitle}>New Flavour Updates</Text>
            <Text style={styles.descriptionText}>With many exclusive flavours waiting to be released, be the early birds to taste them.</Text>
          </View>
        </View>
        {/* END DESCRIPTION BAR */}

        {/* LOGO BAETIK */}
        <View style={{
          flex: 6,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}>
          <Image source={require('./image/TextBaetik.png')} style={{
            width: 100,
            height: 100,
          }}></Image>
        </View>
        
      </ScrollView>
    </>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    margin: 10,
  },

  subText: {
    color: "white",
    fontWeight: "300",
    fontSize: 20,
    textAlign: "center",
    margin: 0,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 0,
  },

  button: {
    backgroundColor: "#EE447D",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 300,
    marginTop: 15,
    marginBottom: 10,
    elevation: 7,
  },

  emojiTitle: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    textAlign: "left",
  },

  descriptionTitle: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 15,
  },

  descriptionText: {
    color: "black",
    fontWeight: "300",
    fontSize: 20,
    textAlign: "center",
    margin: 0,
  },
});

export default HelloWorldApp;


