// app/components/ScreenContainer.tsx
import { View, ViewProps } from 'react-native';

export function ScreenContainer({ children, style, ...rest }: ViewProps) {
  return (
    <View
      style={[{ flex: 1, padding: 16, backgroundColor: '#fff', alignContent: 'center', alignItems: 'center', marginTop: 20}, style]}
      {...rest}
    >
      {children}
    </View>
  );
}