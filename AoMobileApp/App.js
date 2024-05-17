import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Emotion_Wheel_Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
    {/* TODO we should seperate these to style sheet and probably seperate file for each screen as well */}
      <Text>Emotion Wheel!</Text>
      <Text>Add image or clickable objects</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Emotion Wheel" component={Emotion_Wheel_Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}