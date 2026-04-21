export const validatePassword = (value) => {
  const hasNumber = /\d/.test(value);
  const hasSymbol = /[@#$%^&*]/.test(value);
  const isLongEnough = value.length >= 8;
  
  if (!hasNumber || !hasSymbol || !isLongEnough) {
    return "Password harus 8+ karakter, mengandung angka & simbol";
  }
  return true;
};