import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <p className="text-rose-500 text-sm mt-1.5 flex items-start gap-1.5 animate-fade-in-down">
      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
      <span className="font-medium">{error.message}</span>
    </p>
  );
};