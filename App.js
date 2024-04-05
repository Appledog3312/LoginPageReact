import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View , Image, ImageBackground} from "react-native";
const App = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>
  {
    Alert.alert(`Dang nhap thanh cong voi user name = ${email} va password = ${password}` );
  }
  return(
    <ImageBackground 
        source={require("./assets/br1.jpg")}
        style={mystyle.container}>
        <View style={mystyle.container}>
            <Image
                style={mystyle.logo}
                source={require("./assets/logo_.png")}
            />
            <TextInput
                style={mystyle.textInput}
                onChangeText={setEmail}git
                placeholder="Nhap user name"
                placeholderTextColor="aqua"
                value={email}
                />
            <TextInput
                style={mystyle.textInput}
                onChangeText={setPassword}
                placeholder="Nhap password"
                placeholderTextColor="aqua"
                secureTextEntry
                value={password}
                />
            <TouchableHighlight
                style={mystyle.button}
                onPress={onPress}
            >
                <Text style={mystyle.buttonText}>
                    Login
                </Text>
            </TouchableHighlight>
        </View>
  </ImageBackground>
  )
}

export default App;
const mystyle = StyleSheet.create(
  {
    container: {
        padding: 10,
        flex: 1,
        width: null,
        height: null,
        justifyContent:"center",
        resizeMode: 'cover'
    },
    textInput: {
      borderWidth:1,
      borderColor: "blue",
      textAlign:"center",
      margin:5
    },
    button: {
      backgroundColor: "aqua",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "red",
      fontSize: 20,
      fontWeight: "bold"
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,   
        alignSelf:"center"     
    
  },
  imagebackground: {
    
  }
    
}

)