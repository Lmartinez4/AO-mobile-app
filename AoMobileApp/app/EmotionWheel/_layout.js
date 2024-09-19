import { Stack } from 'expo-router/stack';

import styles from '../styles/page';
import HeaderLogo from '../components/Logo';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
        headerRight: () => <HeaderLogo />,
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
          title: `${route.params.secondary} - Level 1`
        })}
      />
      <Stack.Screen
        name="[secondary]/[tertiary]/index"
        options={({ route }) => ({
          title: `${route.params.tertiary} - Level 2`
        })}
      />
      <Stack.Screen
        name="[secondary]/[tertiary]/[selection]"
        options={({ route }) => ({
          title: `${route.params.selection} - Level 3`
        })}
      />
    </Stack>
  );
};
