import { Link } from "react-router";
import { LogIn, UserPlus, Lock, Mail } from "lucide-react";
import type { FC, ReactElement } from "react";
import { ROUTES } from "@/entities/constants/routes";

export const Component: FC = (): ReactElement => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Vite React Starter Kit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A Complete Starter-KIT for React with Vite, React Router, Tailwind
            CSS, TypeScript, ESLint, Prettier, Stylelint, Jest, React Testing
            Library, React Query, Axios, Sonner, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link
            to={ROUTES.AUTH.LOGIN}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <LogIn className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Login</h3>
            <p className="text-gray-600 text-sm">
              Secure login page with email and password authentication
            </p>
          </Link>

          <Link
            to={ROUTES.AUTH.REGISTER}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <UserPlus className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Register
            </h3>
            <p className="text-gray-600 text-sm">
              Create new account with email verification and strong passwords
            </p>
          </Link>

          <Link
            to={ROUTES.AUTH.FORGOT}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Forgot Password
            </h3>
            <p className="text-gray-600 text-sm">
              Reset password with secure email verification process
            </p>
          </Link>

          <Link
            to={ROUTES.AUTH.RESET_PASSWORD}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1"
          >
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
              <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reset Password
            </h3>
            <p className="text-gray-600 text-sm">
              Set new password with confirmation and security validation
            </p>
          </Link>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                File Based Routing
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Form validation with zod & React Hook Form
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Fetching Data with React Query & Axios
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Secure patterns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
