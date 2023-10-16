import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { IModalTraining } from "../../types/types";

export const GenericModal = ({
  modalOpen,
  setOpenModal,
  statusVideo,
  videoRef,
  videoSource,
}: IModalTraining) => {
  return (
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
          onPress={setOpenModal}
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
          ref={videoRef}
          source={videoSource}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={statusVideo}
        />
      </View>
    </Modal>
  );
};
