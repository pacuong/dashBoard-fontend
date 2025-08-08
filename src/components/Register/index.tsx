import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChipLogo from "../ChipLogo";
import FormInput from "../Inputs/FormInputProps";
import SubmitButton from "../Buttons/SubmitButton";
import AuthLinkButton from "../Buttons/AuthLinkButton";
import type { FormError } from "../../interfaces/FormError";
import { register } from "../../scripts/authApi"; // chỉnh đường dẫn nếu cần

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword] = useState(false);
  const [errors, setErrors] = useState<FormError>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      setErrors({ err: "Vui lòng nhập đầy đủ thông tin" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ err: "Email không đúng định dạng" });
      return false;
    }
    if (password.length < 6) {
      setErrors({ err: "Mật khẩu tối thiểu 6 ký tự" });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      await register(formData);
      alert("Đăng ký thành công. Vui lòng đăng nhập.");
      navigate("/login");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log("Đăng ký lỗi:", msg);
      setErrors({ err: msg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border border-none rounded-2xl p-10 shadow-2xl bg-white-100"
      >
        {/* Logo & Title */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <ChipLogo size={48} fillColor="#313b6c" text="B" />
          <h1 className="text-2xl font-bold text-white">kripton</h1>
        </div>

        <h2 className="text-xl font-semibold text-white text-center pb-6">
          Sign up your account
        </h2>

        <div className="space-y-4">
          <FormInput
            label="UserName"
            name="name"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleInputChange}
          />
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
            type={showPassword ? "text" : "password"} // vẫn được nếu dùng show/hide tự động
            value={formData.password}
            placeholder="••••••••"
            onChange={handleInputChange}
          />

          {/* Agree checkbox */}

          {/* Error message */}
          {errors.err && (
            <p className="text-primary-red text-sm text-center -mt-2">
              {errors.err}
            </p>
          )}

          {/* Submit */}
          <SubmitButton
            label={isLoading ? "Đang xử lý..." : "Sign me up"}
            disabled={isLoading}
          />
        </div>

        <div className="mt-6 text-center text-sm text-gray-100">
          Already have an account?{" "}
          <AuthLinkButton label="Sign in" onClick={() => navigate("/login")} />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
