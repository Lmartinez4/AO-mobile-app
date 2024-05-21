import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({navigator}) => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Emotion Wheel" component={Emotion_Wheel_Screen} />
      </Tab.Navigator>
    </View>
  );
}

const Emotion_Wheel_Screen = ({navigator}) =>  {
  const Tab = createBottomTabNavigator();
  return (
    <View>
      <Text> Emotion Wheel </Text>
      <Text> Instruction/General Info </Text>
      <Button title="EmotionOne" onPress={() => navigator.push('Emotion1')}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Emotion Wheel" component={Emotion_Wheel_Screen} />
      </Tab.Navigator>
    </View>
    </View>
      
  );
}


const Emotion1 = ({navigator}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>Emotion Wheel Ring 1!</Text>
      <Button title="Emotion" onPress={() => navigator.push('Emotion2')}/>
    </View>
  );
}

const Emotion2 = ({navigator}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>Emotion Wheel Ring 2!</Text>
      <Button title="Emotion" onPress={() => navigator.push('Result')}/>
    </View>
  );
}

const Result = ({navigator}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>This is your emotion result.</Text>
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator title="root" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmotionWheelHome" component={Emotion_Wheel_Screen} />
        <Stack.Screen name="EmotionOne" component={Emotion1} />
        <Stack.Screen name="EmotionTwo" component={Emotion2} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}