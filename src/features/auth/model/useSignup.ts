// features/auth/model/useSignup.ts
export const useSignup = () => {
  return async (data: { email: string; password: string }) => {
    console.log("🧾 Signup data", data);
    // Здесь может быть вызов API: await fetch(...)
    return { success: true };
  };
};
