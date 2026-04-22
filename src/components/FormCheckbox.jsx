import { ErrorMessage } from './ErrorMessage';

export const FormCheckbox = ({ id, label, registration, error }) => (
  <div className="pt-2">
    <label 
      htmlFor={id} 
      className={`flex items-start gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 group ${
        error 
          ? 'border-rose-200 bg-rose-50/50' 
          : 'border-transparent bg-slate-50 hover:bg-blue-50/50 hover:border-blue-100'
      } has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/30`}
    >
      <div className="relative flex items-center mt-0.5">
        <input
          type="checkbox"
          id={id}
          className="peer w-5 h-5 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500 focus:ring-offset-1 cursor-pointer transition-all"
          {...registration}
        />
      </div>
      <span className="text-sm font-medium text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
        {label}
      </span>
    </label>
    <ErrorMessage error={error} />
  </div>
);