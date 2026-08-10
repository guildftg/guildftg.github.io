import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import GuildEmblem from "../components/layout/GuildEmblem.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";

export default function UnderConstruction() {
  return (
    <>
      <PageHeader title="Under Construction" />
      <section className="page-section">
        <Container>
          <div className="external-panel utility-panel text-center mx-auto">
            <GuildEmblem size={58} decorative={false} />
            <p className="lead mt-3">
              This page isn't ready yet. Check back soon, or head back to the homepage.
            </p>
            <Button as={Link} to="/">
              Return Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
