import { Text } from 'react-native';

interface TextComponentProps {
  children: React.ReactNode;
}

export function TextComponent({ children }: TextComponentProps) {
  return <Text className="font-medium text-2xl">{children}</Text>;
}
