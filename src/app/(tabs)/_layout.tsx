import { Tabs } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info-circle" color={color} />
          )
        }}
      />
    </Tabs>
  );
}
