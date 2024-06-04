import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router'

export default function EmotionWheelOuter() {
    return(
        <View style={styles.main}> 
        {/* TODO we should seperate these to style sheet and probably seperate file for each screen as well */}
          <Text style={styles.title}>Emotional Intelligence</Text>
          <Text style={styles.subtitle}>Select more specific emotion</Text>
          <Link href="/EmotionWheel/selection">Emotion 1</Link> 
          <Link href="/EmotionWheel/selection">Emotion 2</Link> 
          <Link href="/EmotionWheel/selection">Emotion 3</Link> 
          <Link href="/EmotionWheel/selection">Emotion 4</Link> 
          <Link href="/EmotionWheel/selection">Emotion 5</Link> 
          <Link href="/EmotionWheel/selection">Emotion 6</Link> 
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