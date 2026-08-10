import Container from "react-bootstrap/Container";
import GuildEmblem from "./GuildEmblem.jsx";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header">
      <Container>
        <div className="d-flex align-items-center gap-3 mb-3">
          <GuildEmblem size={42} />
          <span className="utility-text text-uppercase muted">FTG Guild</span>
        </div>
        <h1 className="display-4 mb-3">{title}</h1>
        {subtitle ? <p className="lead mb-0">{subtitle}</p> : null}
      </Container>
    </header>
  );
}
