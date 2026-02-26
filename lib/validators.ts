export const validateEmail = (email: string) => {
  // Email validation logic
  return /\S+@\S+\.\S+/.test(email);
}