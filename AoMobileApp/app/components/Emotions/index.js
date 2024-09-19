import { StyleSheet, View, FlatList } from "react-native";

import EmotionButton from "../Buttons/Emotion";

export default function Emotions({ emotions, baseHref }) {
  return (
    <View style={styles.emotionsWrapper}>
      <FlatList
        data={emotions}
        numColumns={2}
        renderItem={emotion => <EmotionButton emotion={emotion.item} baseHref={baseHref} />}
        keyExtractor={item => item.text} />
    </View>
  );
};


const styles = StyleSheet.create({
  emotionsWrapper: {
   flex: 2
  },
});
