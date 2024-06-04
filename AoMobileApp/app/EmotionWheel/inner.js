import { StyleSheet, Text, View } from "react-native";
import {Link} from 'expo-router'

export default function EmotionWheelInner() {
    return(
        <View style={styles.main}> 
        {/* TODO we should seperate these to style sheet and probably seperate file for each screen as well */}
          <Text style={styles.title}>Emotional Intelligence</Text>
          <Text style={styles.subtitle}>Select emotion</Text>
          <Link href="/EmotionWheel/outer">Emotion 1</Link> 
          <Link href="/EmotionWheel/outer">Emotion 2</Link> 
          <Link href="/EmotionWheel/outer">Emotion 3</Link> 
          <Link href="/EmotionWheel/outer">Emotion 4</Link> 
          <Link href="/EmotionWheel/outer">Emotion 5</Link> 
          <Link href="/EmotionWheel/outer">Emotion 6</Link> 
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