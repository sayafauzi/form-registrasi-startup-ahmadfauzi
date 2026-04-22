import { RegistrationForm } from './components/RegistrationForm';

export default function App() {
  return (
    // Background Dark Theme (Modern Blue Gradient)
    <div className="min-h-screen py-10 px-4 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-sans selection:bg-blue-200">
      
      {/* Glass/Card Container dengan sudut besar khas UI Modern */}
      <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden border border-blue-500/20">
        
        {/* Header Section (Biru Terang / Cerah) */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-10 text-center relative overflow-hidden">
          {/* Aksesoris Pola Background di Header */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          
          <span className="inline-block py-1 px-3 rounded-full bg-blue-400/30 text-blue-50 font-semibold text-xs tracking-wider mb-3 uppercase backdrop-blur-sm">
            Batch 10 • 2026
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            Startup Dev Bootcamp
          </h1>
          <p className="text-blue-100 font-medium text-lg">
            Project Challenge: Advanced React Hook Form
          </p>
        </div>

        {/* Form Section (Light Theme Area) */}
        <div className="p-8 md:p-10 bg-white">
          <RegistrationForm />
        </div>
        
      </div>
    </div>
  );
}