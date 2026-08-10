import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/art/ftg_logo_128.png";
import { DISCORD_INVITE_URL, TMB_URL, WARCRAFTLOGS_URL } from "../../data/config";
import ThemeToggle from "./ThemeToggle.jsx";

export default function SiteNavBar() {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="ftg-navbar"
      expanded={expanded}
      onToggle={setExpanded}
      onKeyDown={(event) => {
        if (event.key === "Escape") setExpanded(false);
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} className="brand-logo" alt="FTG guild logo" />
          <span>FTG</span>
        </Navbar.Brand>

        <button
          type="button"
          className={`navbar-toggler ${expanded ? "" : "collapsed"}`}
          aria-controls="primary-navigation"
          aria-expanded={expanded}
          aria-label="Toggle main navigation"
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setExpanded((isExpanded) => !isExpanded);
            }
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link discord-link"
          >
            Discord
          </a>
        </div>

        <Navbar.Collapse id="primary-navigation">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/raiding">
              Raiding
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recruitment">
              Recruitment
            </Nav.Link>
            <Nav.Link as={NavLink} to="/rules">
              Rules
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/addons">
              Addons
            </Nav.Link>
            <Nav.Link href={WARCRAFTLOGS_URL} target="_blank" rel="noopener noreferrer">
              WarcraftLogs
            </Nav.Link>
            <Nav.Link href={TMB_URL} target="_blank" rel="noopener noreferrer">
              TMB
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
