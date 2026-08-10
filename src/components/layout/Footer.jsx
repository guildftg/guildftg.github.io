import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { DISCORD_INVITE_URL, TMB_URL, WARCRAFTLOGS_URL } from "../../data/config";
import logo from "../../assets/images/art/ftg_logo_128.png";

const footerLinks = [
  ["Home", "/"],
  ["Recruitment", "/recruitment"],
  ["Raiding", "/raiding"],
  ["About", "/about"],
  ["Rules", "/rules"],
  ["Addons", "/addons"],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={logo} alt="FTG guild emblem" className="footer-logo" />
              <strong>&lt;FTG&gt;</strong>
            </div>
            <p className="muted mb-0">
              Horde raiding guild on Classic Fresh Dreamscythe.
            </p>
          </div>
          <div className="col-lg-5">
            <ul className="footer-links">
              {footerLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className="footer-links justify-content-lg-end">
              <li>
                <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href={WARCRAFTLOGS_URL} target="_blank" rel="noopener noreferrer">
                  WarcraftLogs
                </a>
              </li>
              <li>
                <a href={TMB_URL} target="_blank" rel="noopener noreferrer">
                  TMB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-top muted small">
          &copy; {new Date().getFullYear()} &lt;FTG&gt;. World of Warcraft and related marks
          belong to{" "}
          <a href="https://www.blizzard.com/" target="_blank" rel="noopener noreferrer">
            Blizzard Entertainment
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}
