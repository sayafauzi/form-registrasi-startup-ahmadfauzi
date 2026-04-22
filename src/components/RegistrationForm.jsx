import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Rocket } from 'lucide-react';

import { validatePassword } from '../utils/validations';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Ahmad Fauzi",
      username: "ahmadfauzi_dev",
      email: "ahmad.fauzi.aziz825@gmail.com",
      password: "password@123",
      age: 21,
      ticketType: "Student", 
      websiteUrl: "", 
      agreeToTerms: false
    }
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const onSubmit = (data) => {
    console.log("🚀 Payload Registrasi Bootcamp:", data);
    setSubmittedName(data.fullName);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="relative">
      {/* Banner Sukses (Melayang/Absolute Style untuk kesan modern) */}
      {isSubmitted && (
        <div className="absolute -top-4 left-0 right-0 z-10 mb-6 p-4 bg-emerald-500 rounded-xl shadow-lg flex items-center gap-3 text-white animate-fade-in-down">
          <CheckCircle2 className="w-6 h-6 text-emerald-100" />
          <p className="font-medium">Registrasi Berhasil diamankan, {submittedName}! 🎉</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative mt-4">
        <FormInput 
          label="Nama Lengkap" 
          placeholder="John Doe"
          registration={register("fullName", { required: "Nama lengkap wajib diisi" })}
          error={errors.fullName}
        />

        <FormInput 
          label="Username" 
          placeholder="johndoe_dev"
          registration={register("username", { 
            required: "Username wajib diisi",
            minLength: { value: 6, message: "Username minimal 6 karakter" },
            maxLength: { value: 20, message: "Username maksimal 20 karakter" }
          })}
          error={errors.username}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput 
            label="Alamat Email" 
            type="email"
            placeholder="hello@startup.com"
            registration={register("email", { 
              required: "Email wajib diisi",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Format email tidak valid" }
            })}
            error={errors.email}
          />

          <FormInput 
            label="Password" 
            type="password"
            placeholder="••••••••"
            registration={register("password", { 
              required: "Password wajib diisi",
              validate: validatePassword
            })}
            error={errors.password}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput 
            label="Usia" 
            type="number"
            placeholder="18"
            registration={register("age", { 
              required: "Umur wajib diisi",
              min: { value: 18, message: "Peserta harus berusia 18-100 tahun" },
              max: { value: 100, message: "Peserta harus berusia 18-100 tahun" }
            })}
            error={errors.age}
          />

          <FormSelect 
            label="Tipe Tiket"
            options={[
              { value: 'General Access', label: 'General Access' },
              { value: 'VIP', label: 'VIP' },
              { value: 'Student', label: 'Student' }
            ]}
            registration={register("ticketType", { required: "Anda harus memilih tipe tiket" })}
            error={errors.ticketType}
          />
        </div>

        <FormInput 
          label="Situs Web Portfolio" 
          type="url"
          placeholder="https://github.com/..."
          optional={true}
          registration={register("websiteUrl", { 
            pattern: { value: /^https?:\/\/[^\s$.?#].[^\s]*$/, message: "Format URL tidak valid" }
          })}
          error={errors.websiteUrl}
        />

        <FormCheckbox 
          id="terms"
          label="Saya menyetujui Syarat & Ketentuan serta bersedia mengikuti budaya disiplin bootcamp."
          registration={register("agreeToTerms", { required: "Anda harus menyetujui syarat dan ketentuan" })}
          error={errors.agreeToTerms}
        />

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 active:scale-[0.98] mt-8"
        >
          <Rocket className="w-5 h-5" />
          Mulai Perjalanan Karir Saya
        </button>
      </form>
    </div>
  );
};