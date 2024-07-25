import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text } from "react-native";
import { Link } from 'expo-router'
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const Emotion = ({ text, icon, href }) => {
  return (
    <Link style={styles.container} href={href}>
      <FontAwesome size={28} name={icon} color={colors.primaryButton} />
      <Text style={styles.text}>{text}</Text>
    </Link>
  )
}

export default Emotion;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  text: {
    fontSize: fonts.textSize
  }
});
