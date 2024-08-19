import { StyleSheet, View } from "react-native";

import EmotionButton from "../Buttons/Emotion";

export default function Emotions({ emotions, baseHref }) {
  return(
    <View style={styles.emotionsWrapper}>
      {emotions?.map(emotion => (
        <EmotionButton emotion={emotion} key={emotion.text} baseHref={baseHref} />
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  emotionsWrapper: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    gap: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
});
