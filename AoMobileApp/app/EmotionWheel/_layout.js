import { Stack } from 'expo-router/stack';

import styles from '../styles/page';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
        contentStyle: styles.container
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Emotional Intelligence'
        }}
      />
      <Stack.Screen
        name="outer"
        options={{
          title: 'Emotional Intelligence'
        }}
      />
      <Stack.Screen
        name="[secondary]/index"
        options={({ route }) => ({
          title: `${route.params.secondary} - Level 2`
        })}
      />
      <Stack.Screen
        name="[secondary]/[selection]"
        options={({ route }) => ({
          title: `${route.params.secondary} / ${route.params.selection}`
        })}
      />
    </Stack>
  );
};
