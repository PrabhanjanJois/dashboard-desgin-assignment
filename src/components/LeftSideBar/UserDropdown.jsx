import { Dropdown } from "antd";
import {
  UserOutlined,
  LinkedinOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const UserDropdown = ({ userProfile, theme }) => {
  const items = [
    {
      key: "profile",
      disabled: true,
      label: (
        <span className="flex items-center gap-2">
          <UserOutlined />
          Profile
        </span>
      ),
    },
    {
      key: "portfolio",
      label: (
        <a
          href="https://jois-folio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-purple-500 hover:translate-x-1"
        >
          <GlobalOutlined />
          Portfolio
        </a>
      ),
    },
    {
      key: "linkedin",
      label: (
        <a
          href="https://www.linkedin.com/in/prabhanjanjois/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-sky-600 hover:translate-x-1"
        >
          <LinkedinOutlined />
          LinkedIn
        </a>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        className: "rounded-md overflow-hidden",
      }}
      trigger={["hover"]}
      placement="bottomLeft"
    >
      <div className="flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80">
        <img
          src={userProfile}
          alt="user profile"
          className="w-[24px] h-[24px] rounded-full"
        />
        <h1
          className={`text-sm font-normal ps-2 transition-colors duration-300 ${
            theme ? "text-white" : "text-[#1C1C1C]"
          }`}
        >
          Jois Prabhanjan
        </h1>
      </div>
    </Dropdown>
  );
};

export default UserDropdown;
