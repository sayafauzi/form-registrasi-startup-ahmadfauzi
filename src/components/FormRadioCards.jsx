import { ErrorMessage } from './ErrorMessage';
import { Code, Smartphone, Palette } from 'lucide-react'; // Menambahkan ikon agar lebih visual

export const FormRadioCards = ({ label, registration, error }) => {
  // Opsi jalur bootcamp dengan ikon masing-masing
  const tracks = [
    { id: 'track-web', value: 'Full-Stack Web', title: 'Full-Stack Web', icon: Code },
    { id: 'track-mobile', value: 'Mobile Engineering', title: 'Mobile Dev', icon: Smartphone },
    { id: 'track-uiux', value: 'UI/UX Design', title: 'UI/UX Design', icon: Palette },
  ];

  return (
    <div className="flex flex-col col-span-1 md:col-span-2">
      <label className="text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <label key={track.id} className="cursor-pointer group">
              <input
                type="radio"
                value={track.value}
                className="peer sr-only" // Sembunyikan bulatan asli
                {...registration}
              />
              <div className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all duration-200 
                bg-slate-50 border-slate-200 text-slate-500 hover:bg-blue-50/50 hover:border-blue-200
                peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-100/50
                ${error ? 'border-rose-200 bg-rose-50/50 peer-checked:border-rose-500 peer-checked:text-rose-700' : ''}`}
              >
                <Icon className="w-6 h-6 mb-2 transition-transform duration-200 group-hover:scale-110 peer-checked:scale-110" />
                <span className="text-sm font-bold text-center">{track.title}</span>
              </div>
            </label>
          );
        })}
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};