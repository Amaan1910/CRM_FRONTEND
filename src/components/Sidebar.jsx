import { CNavItem, CNavTitle, CSidebar, CSidebarNav } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success(
      "You have been logged out. Login with your credentials to continue!"
    );

    navigate("/");
  };

  return (
    <CSidebar>
      <CSidebarNav>
        <CNavItem href="#" className="bg-dark px-4">
          <i className="bi bi-bar-chart-fill text-white m-2"></i>
          <h5 className="text-white m-3 my-1 fw-bolder">TICKETEER</h5>
        </CNavItem>

        <CNavTitle className="text-light fw-normal m-2">
          A CRM APP for all your needs
        </CNavTitle>

        <CNavItem href="#" onClick={logout}>
          <i className="bi bi-box-arrow-left text-white m-2"></i>
          <div className="text-decoration-none text-white mx-3">Logout</div>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
