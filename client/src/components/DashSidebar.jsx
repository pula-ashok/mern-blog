import { Sidebar } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              className="cursor-pointer"
              icon={HiUser}
              label={"User"}
              labelColor="dark"
              active={tab === "profile"}
              as={"div"}
            >
              Profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item className="cursor-pointer" icon={HiArrowSmRight}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
