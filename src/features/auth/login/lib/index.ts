export const validateLogin = (p: { username: string; password: string }) => {
  if (!p.username.trim()) throw new Error("Username is required");
  if (p.password.length < 6) throw new Error("Password min 6 chars");
};
