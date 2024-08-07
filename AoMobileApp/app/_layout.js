import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="AONest" options={{ headerShown: false }} />
      <Stack.Screen name="EmotionWheel" options={{ headerShown: false }} />
    </Stack>
  );
}

