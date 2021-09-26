import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from 'react-native';
 
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

        {/* TITLE BAR */}
        <View style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}>
          <Text style={styles.descriptionTitle}>Free Cakes</Text>
          <Text style={styles.descriptionTitle}>Special Discounts</Text>
          <Text style={styles.descriptionTitle}>New Flavour Updates</Text>
        </View>
        {/* END TITLE BAR */}

        {/* DESCRIPTION BAR */}
        <View style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}>
          <View>
            <Text>Free Cakes</Text>
            <Text>Grab your chance to win free bae-tik cakes by joining our monthly giveaway!</Text>
          </View>
        </View>
        {/* END DESCRIPTION BAR */}
        
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

  descriptionTitle: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    margin: 5,
  },

  descriptionText: {

  },
});

export default HelloWorldApp;


