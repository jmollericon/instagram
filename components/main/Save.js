import React from 'react'
import { View, TextInput, Image, Button } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
require('firebase/firebase-storage')

const Save = (props) => {
  const [caption, setCaption] = useState("")

  const uploadImage = async() => {
    const uri = props.route.params.image;
    const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase
      .storage()
      .ref()
      .child(childPath)
      .put(blob);
    const taskProgress = snapshot => {
      console.log(`trasnferred: ${snapshot.bytesTransferred}`)
    }
    const taskCompleted = snapshot => {
      snapshot.ref.getDownloadURL().then((snapshot) => {
        console.log(snapshot)
      })
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Image source={{uri: props.route.params.image}}>Save</Image>
      <TextInput
        placeholder='Write a Caption . . .'
        onChangeText={(caption) => setCaption(caption) }
      />
      <Button
        title="Save"
        onPress={() => uploadImage()}
      />
    </View>
  )
}

export default Save
