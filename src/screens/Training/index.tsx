import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { TrainingData } from "../../../assets/data/data";

const video = "https://www.youtube.com/embed/SX3Eu5oHCY8";

export default function Treinos() {
  const video = React.useRef(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [status, setStatus] = React.useState({});

  return (
    <ScrollView style={{ backgroundColor: "#1E1E1E", flex: 1, padding: 20 }}>
      <View style={{ gap: 15, marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 12 }}>
          Níveis de Treino
        </Text>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/images/PhotoIniciante.png")} />
            <Text
              style={{
                fontWeight: "bold",
                color: "#FFF",
                fontSize: 12,
              }}
            >
              Iniciante
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/images/Intermediary.png")} />
            <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 12 }}>
              Intermediário
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/images/avanced.png")} />
            <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 12 }}>
              Avançado
            </Text>
          </View>
        </View>
      </View>
      {TrainingData.map((training) => (
        <View style={{ gap: 9, marginVertical: 20 }}>
          <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 14 }}>
            {training.title}
          </Text>
          <View>
            <ImageBackground
              style={{
                height: 153,
                justifyContent: "center",
                gap: 10,
                paddingLeft: 25,
              }}
              source={require("../../assets/images/imageInit.png")}
            >
              <Text
                style={{
                  color: "#CECECE",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {training.quantityTrainings}
              </Text>
              <Text style={{ color: "#FFF", fontSize: 14, fontWeight: "bold" }}>
                {training.level}
              </Text>
            </ImageBackground>
            {training?.dataTraining?.map((trainings) => (
              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={trainings.photo}></Image>
                  <View style={{ gap: 10, marginLeft: 14 }}>
                    <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                      {`${trainings.name} - ${trainings.level}`}
                    </Text>
                    <Text style={{ color: "#FFF" }}>{trainings.timer}</Text>
                  </View>
                </View>
                <Image source={require("../../assets/images/arrowRight.png")} />
              </View>
            ))}
          </View>
        </View>
      ))}
      <Modal animationType="slide" transparent={true} visible={modalOpen}>
        <View
          style={{
            backgroundColor: "#000",
            flex: 1,
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.65}
            onPress={() => setModalOpen(false)}
            style={{
              marginTop: 0,
              marginLeft: 10,
              width: 30,
              height: 30,
              justifyContent: "center",
              backgroundColor: "#3d3d3d",
              alignItems: "center",
              borderRadius: 100,
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>X</Text>
          </TouchableOpacity>
          <Video
            style={{ width: "100%", minHeight: 500 }}
            ref={video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      </Modal>
      <StatusBar style="light" translucent />
    </ScrollView>
  );
}
