import { ErrorMessage } from './ErrorMessage';

export const FormInput = ({ label, type = "text", placeholder, registration, error, optional }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
      {label} {optional && <span className="text-slate-400 font-normal">(Opsional)</span>}
    </label>
    <input
      type={type}
      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
        error ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-indigo-200 focus:border-indigo-500'
      }`}
      placeholder={placeholder}
      {...registration}
    />
    <ErrorMessage error={error} />
  </div>
);