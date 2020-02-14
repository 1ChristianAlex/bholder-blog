import React from "react";
import { WithSideBar } from "containers";
import { SideBarDashboard, InfoBar } from "components";
import AdminRoutes from "routes/adminRoutes";

const Admin: React.FC = () => (
  <>
    <InfoBar />
    <WithSideBar
      SideBarComponent={SideBarDashboard}
      MainComponent={AdminRoutes}
    />
  </>
);

export default Admin;
