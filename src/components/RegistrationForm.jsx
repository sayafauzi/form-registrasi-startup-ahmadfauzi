import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2 } from 'lucide-react';

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
    console.log("Data Registrasi (Task Infinite Learning):", data);
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
    <div>
      {/* Banner Sukses */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 animate-fade-in-down">
          <CheckCircle2 className="w-6 h-6" />
          <p className="font-medium">Registrasi Berhasil, {submittedName}!</p>
        </div>
      )}

      {/* Formulir */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormInput 
          label="Nama Lengkap" 
          placeholder="Masukkan nama"
          registration={register("fullName", { required: "Nama lengkap wajib diisi" })}
          error={errors.fullName}
        />

        <FormInput 
          label="Username" 
          placeholder="username Anda"
          registration={register("username", { 
            required: "Username wajib diisi",
            minLength: { value: 6, message: "Username minimal 6 karakter" },
            maxLength: { value: 20, message: "Username maksimal 20 karakter" }
          })}
          error={errors.username}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput 
            label="Email" 
            type="email"
            placeholder="nama@email.com"
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
            label="Umur" 
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
          label="Situs Web Pribadi" 
          type="url"
          placeholder="https://portfolio-anda.com"
          optional={true}
          registration={register("websiteUrl", { 
            pattern: { value: /^https?:\/\/[^\s$.?#].[^\s]*$/, message: "Format URL tidak valid" }
          })}
          error={errors.websiteUrl}
        />

        <FormCheckbox 
          id="terms"
          label="Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi dari Tech Conference."
          registration={register("agreeToTerms", { required: "Anda harus menyetujui syarat dan ketentuan" })}
          error={errors.agreeToTerms}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
        >
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
};