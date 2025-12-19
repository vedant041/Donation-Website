import { Link } from "react-router-dom";
export default function LoginCard() {
  return (
    <div className="w-full max-w-[420px] bg-white border border-gray-300 rounded-xl shadow-md p-8">
      
      <div className="flex flex-col items-center mb-6">
        <div className="text-3xl mb-1">🫶</div>
        <h2 className="text-xl font-semibold">Charitifx</h2>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full mt-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:border-emerald-600"/>
      </div>

      <div className="mb-2">
        <div className="flex justify-between items-center">
          <label className="text-sm text-gray-600">Password</label>
          <Link to="/forgot-password" className="text-sm text-emerald-600 cursor-pointer">
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full mt-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:border-emerald-600" />
      </div>

      <button className="w-full mt-5 py-2.5 bg-emerald-600 text-white rounded-md font-medium">
        Login
      </button>

      <p className="text-sm text-center mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-emerald-600 cursor-pointer">Register</Link>
      </p>

      <button className="w-full mt-4 py-2 border rounded-md flex items-center justify-center gap-2 text-sm">
        <img src="G1.jpg" alt="Google"  className="w-4 h-4"/>
        Login with Google
      </button>
    </div>
  );
}
