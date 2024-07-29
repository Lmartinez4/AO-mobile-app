import { Text } from "react-native";
import { useLocalSearchParams  } from 'expo-router'

import emotions from "../../../constants/emotions";
import Emotions from "../../../components/Emotions";
import PageWrapper from '../../../components/Wrappers/SubPage';


import styles from '../../../styles/page';

export default function EmotionWheelLevel3() {
  const { tertiary } = useLocalSearchParams();
  const full_emotion = tertiary ? emotions.find(el => el.secondary.find(innerEl => innerEl.text === tertiary) ) : {};
  const emotion = full_emotion.secondary.find(el => el.text === tertiary)
  return(
    <PageWrapper>
      <Text style={styles.subtitle}>Select a more specific emotion</Text>
      <Emotions emotions={emotion?.tertiary || []} baseHref={`/EmotionWheel/${emotion.from}/${emotion.text}/`} />
    </PageWrapper>
  );
};
