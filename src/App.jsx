import { RegistrationForm } from './components/RegistrationForm';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="bg-indigo-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Tech Conference 2026</h1>
          <p className="text-indigo-100">Project Challenge - LMS Infinite Learning</p>
        </div>

        <div className="p-8">
          <RegistrationForm />
        </div>
        
      </div>
    </div>
  );
}