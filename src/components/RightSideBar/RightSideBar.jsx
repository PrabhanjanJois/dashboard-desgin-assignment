import React from "react";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";
import { Splitter } from "antd";

const RightSideBar = () => {
  return (
    <div className="col-span-2 hidden xl:block h-screen p-5">
      <Splitter
        layout="vertical"
        style={{ height: "100%" }}
        min={50} // minimum height for each panel
        splitterSize={4} // thin line
        splitterClassName="bg-gray-300 dark:bg-gray-600 cursor-row-resize"
      >
        <Splitter.Panel
          className="overflow-hidden"
          defaultSize="27.5%"
          min={150}
        >
          <div className="h-full overflow-auto minimal-scrollbar">
            <Notifications />
          </div>
        </Splitter.Panel>

        <Splitter.Panel className="overflow-hidden" defaultSize="30%" min={150}>
          <div className="h-full overflow-auto minimal-scrollbar">
            <Activities />
          </div>
        </Splitter.Panel>

        <Splitter.Panel className="overflow-hidden" min={100}>
          <div className="h-full overflow-auto minimal-scrollbar">
            <Contacts />
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default RightSideBar;
