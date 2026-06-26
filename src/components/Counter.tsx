'use client';

import React, { useState } from 'react';
import { Button, View } from 'react-native';

import { TextComponent } from './Text';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View className="mt-4 items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-100 p-4">
      <TextComponent>Client Counter: {count}</TextComponent>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
    </View>
  );
}
