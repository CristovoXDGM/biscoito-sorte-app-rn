import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';


export default function App() {

  const [frase, setFrase] = useState("Alguma frase aqui");

  var frases = [
    "Às vezes, quando você inova, você comete erros. É melhor admiti-los rapidamente, e seguir em frente para melhorar suas outras inovações", "Inovação distingue o líder de um seguidor.",
    "Esse tem sido um dos meus mantras – foco e simplicidade. Simples pode ser mais difícil de fazer do que complexo; você tem que trabalhar duro para clarear seu pensamento a fim de torná-lo simples.",
    "Seja um parâmetro de qualidade. Algumas pessoas não estão acostumadas a um ambiente onde a excelência é esperada.",
    "Eu estou convencido de que metade do que separa os empreendedores bem-sucedidos dos não sucedidos é pura perseverança."
  ];

  const [image, setImage] = useState(require('./src/biscoito.png'));

  function quebrarBiscoito() {
    let randomNumber = Math.floor(Math.random() * frases.length);
    setFrase(frases[randomNumber]);
    setImage(require("./src/biscoitoAberto.png"));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.textoFrase}>{frase}</Text>
      <TouchableOpacity style={styles.button} onPress={quebrarBiscoito} >
        <View style={styles.buttonView}>
          <Text style={styles.textButton}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  button: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    width: Dimensions.get("window").width / 2,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",

  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {

    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 4
  },
});
