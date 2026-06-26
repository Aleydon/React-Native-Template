import { Text } from 'react-native';

interface TextComponentProps {
  children: React.ReactNode;
  className?: string;
}

export function TextComponent({ children, className }: TextComponentProps) {
  return <Text className={className}>{children}</Text>;
}
