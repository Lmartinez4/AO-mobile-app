import { Text } from "react-native";
import { useLocalSearchParams  } from 'expo-router'

import emotions from "../../constants/emotions";
import Emotions from "../../components/Emotions";
import PageWrapper from '../../components/Wrappers/SubPage';


import styles from '../../styles/page';

export default function EmotionWheelInner() {
  const { secondary } = useLocalSearchParams();
  const emotion = secondary ? emotions.find(el => el.text === secondary) : {};
  return(
    <PageWrapper>
      <Text style={styles.subtitle}>Select a more specific emotion</Text>
      <Emotions emotions={emotion?.secondary || []} baseHref={`/EmotionWheel/${emotion.text}/`} />
    </PageWrapper>
  );
};
