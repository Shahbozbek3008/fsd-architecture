import { useLoginModel } from '../model';
export const LoginForm = () => {
  const { handleLogin, isLoading } = useLoginModel();
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm p-8 border rounded-xl shadow">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <input name="username" type="text"     placeholder="Username" className="border rounded px-3 py-2" required />
      <input name="password" type="password" placeholder="Password" className="border rounded px-3 py-2" required />
      <button type="submit" disabled={isLoading} className="bg-primary text-white rounded px-3 py-2 font-semibold">
        {isLoading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  );
};