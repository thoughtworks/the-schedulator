import React, { useState } from "react";
import {
  Menu,
  Responsive,
  Icon,
  Segment,
  Sidebar,
  Divider
} from "semantic-ui-react";
import { navigate, Link } from "@reach/router";

const NavBar = ({ cities }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleMenuClick = path => {
    setSidebarVisible(false);
    navigate(path);
  };
  const menuItems = cities.map(city => (
    <Menu.Item
      header
      key={city}
      onClick={() => handleMenuClick(`/city/${city}`)}
    >
      {city}
    </Menu.Item>
  ));

  return (
    <Menu attached="top">
      <Link to="/">
        <Menu.Item header>Xconf 2019</Menu.Item>
      </Link>
      <Responsive as={Menu.Menu} position="right" {...Responsive.onlyComputer}>
        {menuItems}
        <Menu.Item header>Venue</Menu.Item>
        <Menu.Item header>Feedback</Menu.Item>
      </Responsive>
      <Responsive as={Menu.Menu} position="right" {...Responsive.onlyMobile}>
        <Menu.Item onClick={() => setSidebarVisible(true)}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Sidebar
          as={Segment}
          animation={"scale down"}
          direction={"right"}
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
        >
          {menuItems}
          <Divider />
          <Menu.Item header onClick={() => handleMenuClick("/venue")}>
            Venue
          </Menu.Item>
          <Menu.Item header onClick={() => handleMenuClick("/feedback")}>
            Feedback
          </Menu.Item>
        </Sidebar>
      </Responsive>
    </Menu>
  );
};

export default NavBar;
