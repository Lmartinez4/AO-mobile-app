import { Text, View } from 'react-native';

export default function EmotionWheel() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        {/* TODO we should seperate these to style sheet and probably seperate file for each screen as well */}
          <Text>Emotion Wheel!</Text>
          <Text>Add image or clickable objects</Text>
        </View>
      );
}