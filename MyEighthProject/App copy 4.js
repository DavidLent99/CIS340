import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'//import

export default function MyApp () {

  const [selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is required");
      return;

      

    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
      
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});


  };

  //display selected image
  if (selectedImage != null) {
    return(
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}} style={{styles.selImage}}/>
      </View>
    )
  }

  //end of the code

  return (
    <View style={styles.container}>
      <Image>
        source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Rams-Logo-Reversed-one-color-768x769.jpeg'}}
        style={styles.logo}
      </Image>

      <Text style={styles.insts}>
        Press the button below to select an image on your phone
      </Text>

      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>

        <Text style={styles.buttonText}>Pick Image</Text>

      </TouchableOpacity>

    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    
    backgroundColor: "green",
    padding: 20,
    borderRadius: 5

  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 310,
    height: 300,
    marginBotton: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  },

  selImage {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
