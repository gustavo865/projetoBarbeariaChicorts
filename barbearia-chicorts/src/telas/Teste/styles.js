import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  title: {
    //backgroundColor: "red",
    top: 10,
    position:"absolute",
    fontSize: 20,
    color: "#111111",
    marginBottom: 50,
    fontWeight: "bold",
  },
  buttonImageBarber: {
    padding: 40,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  buttonBarber: {
    top: 100,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'red',
    borderWidth: 1.0,
    borderColor: 'black',
    height: 100,
    width: 300,
    borderRadius: 5,
    margin: 5,
    //marginTop:  
  },

  buttonTextStyle: {
    //backgroundColor: "red",
    width: 300,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  buttonRegister: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
    borderRadius: 50,
    marginTop: 30,
  },
  buttonMeusAgendamentos: {
    backgroundColor: "white",
    borderColor: 'black',
    borderWidth: 1.0,
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
    marginTop: 300,
    height: 50,
    width: 300
  },
  buttonLogout: {
    backgroundColor: "white",
    bottom: 10,
    borderColor: 'black',
    borderWidth: 1.0,
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    height: 50,
    width: 300,
    
  }


});

export default styles