import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import GuildEmblem from "./GuildEmblem.jsx";
import PageHeader from "./PageHeader.jsx";

export default function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <>
      <PageHeader title="Redirecting..." />
      <section className="page-section">
        <Container>
          <div className="external-panel utility-panel text-center mx-auto">
            <GuildEmblem size={58} decorative={false} />
            <p className="lead mt-3">
              Taking you to {to} - if nothing happens, <a href={to}>click here</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
