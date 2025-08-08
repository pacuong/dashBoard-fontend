import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChipLogo from "../ChipLogo";
import FormInput from "../Inputs/FormInputProps";
import SubmitButton from "../Buttons/SubmitButton";
import AuthLinkButton from "../Buttons/AuthLinkButton";
import { login } from "../../scripts/authApi";
import type { FormError } from "../../interfaces/FormError";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<FormError>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const { email, password } = formData;
    if (!email || !password) {
      setErrors({ err: "Vui lòng nhập đầy đủ thông tin" });
      return;
    }

    setIsLoading(true);
    try {
      const data = await login(email, password);
      console.log("✅ Đăng nhập thành công:", data);
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log("❌ Lỗi đăng nhập:", msg);
      setErrors({ err: msg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-20 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white-100 rounded-2xl shadow-lg p-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <ChipLogo size={48} fillColor="#313b6c" text="B" />
            <h1 className="text-2xl font-bold text-gray-100">kripton</h1>
          </div>

          <h2 className="text-center text-xl font-semibold text-gray-100 mb-6">
            Sign in your account
          </h2>

          <div className="space-y-6">
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="hello@example.com"
              onChange={handleInputChange}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              placeholder="••••••••"
              onChange={handleInputChange}
              textColor="text-gray-700"
              placeholderColor="placeholder-gray-400"
              borderColor="border-gray-200"
            />

            {/* Error message */}
            {errors.err && (
              <p className="text-red-500 text-sm text-center -mt-2">
                {errors.err}
              </p>
            )}

            {/* Submit Button */}
            <SubmitButton
              label={isLoading ? "Đang xử lý..." : "Sign Me In"}
              onClick={handleSubmit}
              disabled={isLoading}
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-100">
              Don’t have an account?{" "}
              <AuthLinkButton
                label="Sign up"
                onClick={() => navigate("/register")}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
