// @ts-ignore
import * as React from "react";
// @ts-ignore
import { View, Text, StyleSheet } from "react-native";

type ViewStyle = any;
type TextStyle = any;

interface BadgeProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = "white",
  backgroundColor = "red",
  style,
  textStyle
}: BadgeProps) => {
  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      <Text style={[styles.text, { color }, textStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start"
  } as any,
  text: {
    fontSize: 12,
    fontWeight: "bold"
  } as any
});
