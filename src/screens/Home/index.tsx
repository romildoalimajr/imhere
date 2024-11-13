import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text>
      <Text key="2" style={styles.eventDate}>
        Quarta-feira, 13 de novembro de 2022
      </Text>
    </View>
  );
}