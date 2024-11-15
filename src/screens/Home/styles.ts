import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fdfdfd',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    marginBottom: 10,
    flexDirection: 'row'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRemove: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  flatlist: {
    marginBottom: 10
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }

});
