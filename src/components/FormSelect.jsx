import { ErrorMessage } from './ErrorMessage';

export const FormSelect = ({ label, options, registration, error }) => (
  <div className="flex flex-col relative">
    <label className="text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
    <div className="relative">
      <select
        className={`w-full px-4 py-3 border bg-slate-50/50 rounded-xl appearance-none focus:bg-white focus:ring-4 focus:outline-none transition-all duration-200 cursor-pointer ${
          error 
            ? 'border-rose-400 focus:ring-rose-100 text-rose-900' 
            : 'border-slate-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-100/50'
        }`}
        {...registration}
      >
        <option value="" className="text-slate-400">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-500">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
    <ErrorMessage error={error} />
  </div>
);