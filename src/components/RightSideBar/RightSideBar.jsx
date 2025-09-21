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
        min={50}
        splitterSize={4}
        splitterClassName="bg-gray-300 dark:bg-gray-600 cursor-row-resize"
      >
        <Splitter.Panel className="overflow-hidden" defaultSize="25%" min={150}>
          <div
            className="h-full overflow-auto minimal-scrollbar"
            data-testid="panel-notifications"
          >
            <Notifications />
          </div>
        </Splitter.Panel>

        <Splitter.Panel className="overflow-hidden" defaultSize="31%" min={150}>
          <div
            className="h-full overflow-auto minimal-scrollbar"
            data-testid="panel-activities"
          >
            <Activities />
          </div>
        </Splitter.Panel>

        <Splitter.Panel className="overflow-hidden" min={100}>
          <div
            className="h-full overflow-auto minimal-scrollbar"
            data-testid="panel-contacts"
          >
            <Contacts />
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default RightSideBar;
