import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DataLevelTraining, TrainingData } from "../../../assets/data/data";
import { GenericModal } from "../../components/Modal";

export default function Treinos() {
  const video = React.useRef(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [status, setStatus] = React.useState({});
  const [videoTraining, setVideoTraining] = useState();
  const [levelTraining, setLevelTraining] = useState("Iniciante");

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
          {DataLevelTraining.map((data) => (
            <TouchableOpacity
              activeOpacity={0.65}
              onPress={() => setLevelTraining(data.level)}
            >
              <View style={{ alignItems: "center" }}>
                <Image source={data.image} />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#FFF",
                    fontSize: 12,
                  }}
                >
                  {data.level}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {TrainingData.filter((training) => training.level === levelTraining).map(
        (training) => (
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
                source={training.image}
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
                <Text
                  style={{ color: "#FFF", fontSize: 14, fontWeight: "bold" }}
                >
                  {training.level}
                </Text>
              </ImageBackground>
              {training?.dataTraining?.map((dataTrainings) => (
                <TouchableOpacity
                  activeOpacity={0.65}
                  onPress={() => {
                    setModalOpen(true);
                    setVideoTraining(dataTrainings.videoSource);
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image source={dataTrainings.image}></Image>
                      <View style={{ gap: 10, marginLeft: 14 }}>
                        <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                          {`${dataTrainings.name} - ${dataTrainings.level}`}
                        </Text>
                        <Text style={{ color: "#FFF" }}>
                          {dataTrainings.timer}
                        </Text>
                      </View>
                    </View>
                    <Image
                      source={require("../../assets/images/arrowRight.png")}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )
      )}
      <GenericModal
        modalOpen={modalOpen}
        setOpenModal={() => setModalOpen(false)}
        statusVideo={(status: object) => setStatus(() => status)}
        videoRef={video}
        videoSource={videoTraining}
      />
      <StatusBar style="light" translucent />
    </ScrollView>
  );
}
