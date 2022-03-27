import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios"? 0 : 50,
  },
  title: {
    fontSize: 48,
    color: "#111111",
    marginBottom: 10,
    fontFamily: "MontserratRegular"
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#111111",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4d5156",
    
  },
  buttonRegister: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
    borderRadius: 50,
    marginTop: 30,
    fontFamily: "MontserratBold"
  },
  textButtonRegister: {
    color: "white",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },
  login: {
    fontSize: 16,
    color: "#4d5156",
  },
  linkLogin: {
    color: "#1877f2",
    fontSize: 16,
    marginLeft: 10
  }
});

export default styles