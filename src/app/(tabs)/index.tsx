'use client';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { getServerData } from '@/actions/getServerData';
import Counter from '@/components/Counter';
import { TextComponent } from '@/components/Text';

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chama a Server Function com segurança ao montar o componente
    getServerData()
      .then(res => {
        setData(res as string);
      })
      .catch(err => {
        console.error('Error fetching server data:', err);
        setData('Failed to fetch data from server.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white p-6">
      <TextComponent>Expo RSC & SSR Template</TextComponent>

      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <View className="items-center justify-center gap-2">
          <TextComponent className="text-center font-medium text-lg text-zinc-500">
            {data}
          </TextComponent>
          <Counter />
        </View>
      )}
    </View>
  );
}
