import { Text } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import styles from '../../styles/page';
import PageWrapper from '../../components/Wrappers/SubPage';

export default function EmotionWheelSelection() {
  const { selection } = useLocalSearchParams();
  return(
    <PageWrapper> 
      <Text style={styles.title}>Emotional Intelligence</Text>
      <Text style={styles.subtitle}>You selected {selection}.</Text>
      <Link href="/AONest/content">See available content here</Link> 
    </PageWrapper>
  );
}