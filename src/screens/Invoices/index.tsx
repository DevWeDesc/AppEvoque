import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function Invoices({ navigation}: any) {
  return (
    <ImageBackground source={require('../../assets/images/bg2.jpg')} style={styles.containerHeader}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PlanDetail')}>
        <View style={styles.cardLayout}>
          <Text style={styles.textStatus}>PLANO ATIVO</Text>
          <Text style={styles.textValue}>R$ 369,00</Text>
        </View>
          <Text style={styles.textPlan}>EVOKE PREMIUM</Text>
          <Text style={styles.textDate}>Termina em 27/08/2024</Text>
        </TouchableOpacity>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({

  containerHeader:{
    width: '100%',
    height: '100%',
  },

  card:{
    height: 110,
    backgroundColor: '#FF6900',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 4,
    },    
  },

  cardLayout:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textStatus:{
    color: '#01B519',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',

  },

  textValue:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textPlan:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textDate:{
    color: '#fff',
    fontSize: 16,
  },

});