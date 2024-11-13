import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#131016",
      padding: 24
    }}>
      <Text key="1" style={{
        color: '#fdfdfd',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 48,
      }}>
        Nome do evento
      </Text>
      <Text key="2" style={{
        color: '#6b6b6b',
        fontSize: 16,
      }}>
        Quarta-feira, 13 de novembro de 2022
      </Text>
    </View>
  );
}