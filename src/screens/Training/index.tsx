import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function Treinos() {
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
      <View style={{ gap: 9, marginVertical: 20 }}>
        <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 14 }}>
          Clássico
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
              style={{ color: "#CECECE", fontSize: 14, fontWeight: "bold" }}
            >
              5 Treinos
            </Text>
            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: "bold" }}>
              Iniciante
            </Text>
          </ImageBackground>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </View>
      </View>
      <View style={{ gap: 9, marginVertical: 20 }}>
        <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 14 }}>
          Clássico
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
              style={{ color: "#CECECE", fontSize: 14, fontWeight: "bold" }}
            >
              5 Treinos
            </Text>
            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: "bold" }}>
              Iniciante
            </Text>
          </ImageBackground>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </View>
      </View>
      <View style={{ gap: 9, marginVertical: 20 }}>
        <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 14 }}>
          Clássico
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
              style={{ color: "#CECECE", fontSize: 14, fontWeight: "bold" }}
            >
              5 Treinos
            </Text>
            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: "bold" }}>
              Iniciante
            </Text>
          </ImageBackground>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
          <View
            style={{
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/Imagetreino.png")}
              ></Image>
              <View style={{ gap: 10, marginLeft: 14 }}>
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Abdômen - Iniciante
                </Text>
                <Text style={{ color: "#FFF" }}>18min</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
