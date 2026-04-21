import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
      <span>{error.message}</span>
    </p>
  );
};