import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import Home from "./components/Home/Home";
import Status from "./components/Status/Status";
import Buy from "./components/Buy/Buy";
import Sell from "./components/Sell/Sell";
import { FaPhone, FaKey } from "react-icons/fa";
import OTPInput from "otp-input-react";

// Login Component
const Login = ({ user, setUser }) => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [mockOTP, setMockOTP] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (countdown > 0 && !canResend) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setCanResend(true);
      // Reset to phone number input after 1 minute
      setShowOTP(false);
      setOtp("");
      toast.error("OTP expired. Please request a new one.");
    }
    return () => clearInterval(timer);
  }, [countdown, canResend]);

  const onSignup = () => {
    setLoading(true);
    if (ph.length !== 12) {
      toast.error("Please enter a valid phone number");
        setLoading(false);
      return;
    }

    // Generate a random 6-digit OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setMockOTP(generatedOTP);
        setShowOTP(true);
    setCanResend(false);
    setCountdown(60);
    
    // Show OTP in toast for 1 minute
    const toastId = toast.success(`Your OTP is: ${generatedOTP}`, {
      duration: 60000,
      position: "top-center",
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontSize: "16px",
        padding: "16px",
      },
    });

    // Store toast ID to dismiss it later
    localStorage.setItem('otpToastId', toastId);
    
    setLoading(false);
  };

  const onOTPVerify = () => {
    setLoading(true);
    if (otp === mockOTP) {
      // Dismiss the OTP toast
      const toastId = localStorage.getItem('otpToastId');
      if (toastId) {
        toast.dismiss(toastId);
        localStorage.removeItem('otpToastId');
      }

      const newUser = { phone: ph };
      setUser(newUser);
      toast.success("OTP verified successfully!", {
        duration: 2000,
        onClose: () => {
          navigate("/dashboard", { replace: true });
        }
      });
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
    setLoading(false);
  };

  const resendOTP = () => {
    if (!canResend) return;
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setMockOTP(generatedOTP);
    setCanResend(false);
    setCountdown(60);
    
    // Dismiss previous OTP toast if exists
    const prevToastId = localStorage.getItem('otpToastId');
    if (prevToastId) {
      toast.dismiss(prevToastId);
      localStorage.removeItem('otpToastId');
    }
    
    // Show new OTP in toast for 1 minute
    const newToastId = toast.success(`Your new OTP is: ${generatedOTP}`, {
      duration: 60000,
      position: "top-center",
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontSize: "16px",
        padding: "16px",
      },
    });

    // Store new toast ID
    localStorage.setItem('otpToastId', newToastId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">GridShare</h1>
        {!showOTP ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-500" />
              <PhoneInput
                country={"in"}
                value={ph}
                onChange={setPh}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                }}
              />
            </div>
            <button
              onClick={onSignup}
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaKey className="text-gray-500" />
              <OTPInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                disabled={loading}
              />
            </div>
                <button
                  onClick={onOTPVerify}
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                >
              {loading ? "Verifying..." : "Verify OTP"}
                </button>
            <div className="text-center">
                <button
                onClick={resendOTP}
                disabled={!canResend}
                className="text-emerald-600 hover:text-emerald-700 disabled:opacity-50"
                >
                {canResend ? "Resend OTP" : `Resend OTP in ${countdown}s`}
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Update localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Toaster position="top-center" />
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login user={user} setUser={setUser} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/status"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Status />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Buy />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/sell"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Sell />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default App;
