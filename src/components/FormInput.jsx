import { ErrorMessage } from './ErrorMessage';

export const FormInput = ({ label, type = "text", placeholder, registration, error, optional }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-slate-700 mb-1.5">
      {label} {optional && <span className="text-slate-400 font-normal">(Opsional)</span>}
    </label>
    <input
      type={type}
      className={`w-full px-4 py-3 border bg-slate-50/50 rounded-xl focus:bg-white focus:ring-4 focus:outline-none transition-all duration-200 ${
        error 
          ? 'border-rose-400 focus:ring-rose-100 text-rose-900 placeholder-rose-300' 
          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-100/50'
      }`}
      placeholder={placeholder}
      {...registration}
    />
    <ErrorMessage error={error} />
  </div>
);