export type SwitchProps = {
  onPress(value: boolean): void;
  value: boolean;
  disabled?: boolean;
};
