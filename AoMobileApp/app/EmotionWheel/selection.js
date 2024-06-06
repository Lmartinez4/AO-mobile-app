import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router'

export default function EmotionWheelSelection() {
    return(
        <View style={styles.main}> 
        {/* TODO we should seperate these to style sheet and probably seperate file for each screen as well */}
          <Text style={styles.title}>Emotional Intelligence</Text>
          <Text style={styles.subtitle}>You selected your emotion.</Text>
          <Link href="/AONest/content">See available content here</Link> 
        </View>
      );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});