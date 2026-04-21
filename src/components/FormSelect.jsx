import { ErrorMessage } from './ErrorMessage';

export const FormSelect = ({ label, options, registration, error }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    <div className="relative">
      <select
        className={`w-full px-4 py-2.5 border rounded-lg bg-white appearance-none focus:ring-2 focus:outline-none transition-all cursor-pointer ${
          error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-slate-300 focus:ring-indigo-200 focus:border-indigo-500'
        }`}
        {...registration}
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
    <ErrorMessage error={error} />
  </div>
);