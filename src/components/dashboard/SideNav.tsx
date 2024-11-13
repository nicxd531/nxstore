import React from "react";
import { Box } from "@mui/material";
import { Sidenav, Nav } from "rsuite";
import Person2Icon from "@mui/icons-material/Person2";

function SideNav() {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  return (
    <Box
      sx={{
        width: { lg: "18%" },
        minHeight: "100vh",
        ml: { lg: 4 },
      }}
    >
      <Sidenav
        style={{
          backgroundColor: "none",
          borderRight: "0.5px solid grey",
          fontSize: "1rem",
        }}
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        appearance={"subtle"}
      >
        <Sidenav.Body>
          <Box
            sx={{
              p: { lg: 2 },
              borderRight: { lg: "1px solid grey" },
              borderBottomRightRadius: "25px",
              borderBottom: { lg: "1px solid grey" },
              overFlow: "hidden",
            }}
          >
            <img src="/images/logo-colored.png" />
          </Box>
          <Nav
            style={{
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
              borderBottom: "1px solid grey",
              borderRight: "1px solid grey",
              borderTop: "1px solid grey",
              marginBottom: "0",
              paddingBottom: "90px",
            }}
            activeKey={activeKey}
            onSelect={setActiveKey}
          >
            <Nav.Item
              className="nav-item"
              eventKey="1"
              icon={<Person2Icon sx={{ mr: 2 }} />}
            >
              My NX account
            </Nav.Item>
            <Nav.Item
              className="nav-item"
              eventKey="2"
              icon={<Person2Icon sx={{ mr: 2 }} />}
            >
              Orders
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="3" icon={<Person2Icon />}>
              Inbox
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="4" icon={<Person2Icon />}>
              Pending Reviews
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="5" icon={<Person2Icon />}>
              Vouchers
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="6" icon={<Person2Icon />}>
              Saved Items
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="7" icon={<Person2Icon />}>
              Followed Sellers
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="8" icon={<Person2Icon />}>
              Recently Viewed
            </Nav.Item>
          </Nav>
          <Nav
            style={{
              marginTop: "0",
              borderTopRightRadius: "25px",
              borderRight: "0.5px solid grey",
              borderTop: "1px solid grey",
              marginBottom: "0",
            }}
            activeKey={activeKey}
            onSelect={setActiveKey}
          >
            <Nav.Item className="nav-item" eventKey="1">
              Account Management
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="2">
              Adress Book
            </Nav.Item>
            <Nav.Item className="nav-item" eventKey="3">
              Close Account
            </Nav.Item>
            <Nav.Item
              className="sideBarLogOut nav-item"
              eventKey="4"
              icon={<Person2Icon />}
            >
              Log Out
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Box>
  );
}

export default SideNav;
