import { InputHTMLAttributes } from "react";

export interface ToggleTypes extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange: () => void;
  checked: boolean;
  id: string;
}
