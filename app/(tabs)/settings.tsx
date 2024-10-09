import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function Tab() {
  return (
      <View style={styles.container}>
        <Link href={"/(home)/privacidade"}>privacidade</Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
