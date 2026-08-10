import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../assets/images/art/ftg_logo_128.png";
import PageHeader from "../components/layout/PageHeader.jsx";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" />
      <section className="page-section">
        <Container>
          <div className="external-panel utility-panel text-center mx-auto">
            <img src={logo} alt="FTG guild emblem" className="utility-icon" />
            <p className="lead mt-3">This page doesn't exist, moved, or got renamed.</p>
            <Button as={Link} to="/">
              Return Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
