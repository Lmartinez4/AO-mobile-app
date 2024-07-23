import { Text } from "react-native";

import emotions from "../constants/emotions";
import Emotions from "../components/Emotions";
import PageWrapper from '../components/Wrappers/SubPage';

import styles from '../styles/page';

export default function EmotionWheelInner() {
  return(
    <PageWrapper>
      <Text style={styles.subtitle}>Select an emotion</Text>
      <Emotions emotions={emotions} baseHref="/EmotionWheel/" />
    </PageWrapper>
  );
};
