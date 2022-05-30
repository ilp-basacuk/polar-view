export interface RadioButtonProps {
  checked?: boolean;
  name: string;
  value?: string;
  labelText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
