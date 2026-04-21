import { ErrorMessage } from './ErrorMessage';

export const FormCheckbox = ({ id, label, registration, error }) => (
  <div className="pt-2">
    <label 
      htmlFor={id} 
      className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
        error 
          ? 'border-red-200 bg-red-50/30' 
          : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'
      }`}
    >
      <div className="relative flex items-center mt-0.5">
        <input
          type="checkbox"
          id={id}
          className="peer w-5 h-5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer transition-all"
          {...registration}
        />
      </div>
      <span className="text-sm text-slate-600 leading-relaxed select-none">
        {label}
      </span>
    </label>
    <ErrorMessage error={error} />
  </div>
);