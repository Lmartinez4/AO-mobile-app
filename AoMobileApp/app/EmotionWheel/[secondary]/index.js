import { Text, Platform, Dimensions, View } from "react-native";
import { useLocalSearchParams  } from 'expo-router'
import { WebView } from 'react-native-webview';

import emotions from "../../constants/emotions";
import Emotions from "../../components/Emotions";
import PageWrapper from '../../components/Wrappers/SubPage';

import styles from '../../styles/page';

const { width } = Dimensions.get('window');

export default function EmotionWheelLevel2() {
  const { secondary } = useLocalSearchParams();
  const emotion = secondary ? emotions.find(el => el.text === secondary) : {};

  return(
    <PageWrapper>
      {Platform.OS === 'web' ? (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%'}}>
          <View style={{ width: width / 2 }}>
            <Text style={styles.subtitle}>Select a more specific emotion</Text>
            <Emotions emotions={emotion?.secondary || []} baseHref={`/EmotionWheel/${emotion.text}/`} />
          </View>
          
            <div style={styles.iframeContainer}>
              <iframe
                src={emotion?.video}
                style={{
                    width: width / 2,
                    height: width * 0.5625 / 2,
                    border: "0px"
                }}
                allowFullScreen
              />
            </div>
        </View>
      ) : (
        <View style={{ flex: 0.75, alignItems: 'center' }}>
          <Text style={styles.subtitle}>Select a more specific emotion</Text>
          <Emotions emotions={emotion?.secondary || []} baseHref={`/EmotionWheel/${emotion.text}/`} />
          <WebView
              style={{
                top: '10%',
                flex: 0.8,
                width: width,
                height: width * 0.5625,
                border: "0px",
              }}
              source={{ uri: emotion?.video }}
            />
        </View>
      )}
    </PageWrapper>
  );
};
