import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { RocketOutlined } from "@ant-design/icons";

const ComingSoon = () => {
  const theme = useSelector((state) => state.theme.theme);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 transition-colors duration-500 ${
        theme ? "bg-[#1C1C1C]" : "bg-[#F7F9FB]"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center w-full max-w-md p-10 rounded-3xl shadow-xl transition-colors duration-500 ${
          theme ? "bg-[#2A2A2A]" : "bg-white"
        }`}
      >
        {/* Animated Rocket */}
        <RocketOutlined
          className="text-6xl mb-6 animate-bounce text-yellow-400"
          style={{
            color: theme ? "#FACC15" : "#1890FF",
          }}
        />

        {/* Title */}
        <h1
          className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
            theme ? "text-white" : "text-gray-900"
          }`}
        >
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p
          className={`text-center mb-6 text-sm transition-colors duration-500 ${
            theme ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We’re working hard to bring this feature to you. Stay tuned!
        </p>

        {/* Animated Dots */}
        <div className="flex gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping"></span>
          <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping animation-delay-200"></span>
          <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping animation-delay-400"></span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button type="primary" onClick={() => navigate("/")}>
            Go Home
          </Button>
          <Button
            type={theme ? "default" : "ghost"}
            onClick={() => alert("Stay tuned!")}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes ping {
            0% { transform: scale(0.8); opacity: 0.6; }
            50% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.8); opacity: 0.6; }
          }

          .animate-ping {
            animation: ping 1s infinite ease-in-out;
          }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }

          .animate-bounce {
            animation: bounce 1.5s infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
