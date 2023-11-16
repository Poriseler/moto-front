import { useState } from 'react';
import { useLogin } from '../features/authentication/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-blue-300">
      <form className="bg-slate-100 p-5 opacity-80 border rounded-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Login</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md ps-2 py-1"
           />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-black rounded-md ps-2 py-1"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-3 py-2 text-base rounded-full border border-black mt-4 bg-white hover:bg-slate-200 transition-all duration-500"
        >
          Zaloguj
        </button>
      </form>
    </div>
  );
}

export default Login;
