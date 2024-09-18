import { StyleSheet, Text } from "react-native";
import { Link } from 'expo-router'
import fonts from '../../constants/fonts';

const Emotion = ({ emotion, baseHref }) => {
  return (
    <Link style={styles.container} href={`${baseHref}${emotion?.text}`}>
      <Text style={styles.emoji}>{String.fromCodePoint(emotion?.emoji)}</Text>
      <Text style={styles.text}>{emotion?.text}</Text>
    </Link>
  )
}

export default Emotion;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%'
  },
  text: {
    fontSize: fonts.textSize
  },
  emoji: {
    fontSize: fonts.emoji
  }
});
