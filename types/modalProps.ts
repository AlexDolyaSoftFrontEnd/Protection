export interface FormInModalProps {
  notificationHandler: (_submitFn: SubmitFnType) => Promise<void>;
}
export type SubmitFnType = () => Promise<void>;

export type InputProps = {
  id: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};
type Option = { value: string; label: string };

export type SelectProps = {
  id: string;
  value: string;
  options: Option[];
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

export type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string | React.ReactNode;
  className?: string;
};
