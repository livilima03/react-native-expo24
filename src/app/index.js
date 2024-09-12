import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';

export default function App() {
  const {signIn, SignOut} = useAuth();
  return (
    <View style={styles.container}>
      <Text>Aplicativo pronto para usar!</Text>
      <Button title="Signin Super" 
      onPress={() =>
        signIn({email: "super@email.com", password: "Super123!"})
    }
    />
      <Button
      title="Signin Adm"
      onPress={() =>
        signIn({ email: "adm@email.com", password: "Adm123!"})
      }
      />
      <Button
      title="Signin User"
      onPress={() => 
        signIn({ email: "user@email.com", password: "User123!"})
      } 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    fontFamily: "bold",
    fontSize: 20,
  },
});
