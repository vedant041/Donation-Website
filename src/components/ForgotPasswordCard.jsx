import { Link } from "react-router-dom";

export default function ForgotPasswordCard() {
  return (
    <div className="w-full max-w-[420px] bg-white border border-gray-300 rounded-xl shadow-md p-8">
      <div className="flex flex-col items-center mb-6">
        <div className="text-3xl mb-1">🫶</div>
        <h2 className="text-xl font-semibold">Charitix</h2>
      </div>

      <p className="text-sm text-gray-600 text-center mb-6">
        Enter your registered email address. We'll send you a link to reset your password.
      </p>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full mt-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:border-emerald-600"
        />
      </div>

      <button className="w-full mt-5 py-2.5 bg-emerald-600 text-white rounded-md font-medium">
        Send Reset Link
      </button>

      <p className="text-sm text-center mt-4 text-gray-600">
        Remember your password?{" "}
        <Link to="/login" className="text-emerald-600">
          Login
        </Link>
      </p>
    </div>
  );
}
