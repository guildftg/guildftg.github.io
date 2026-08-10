import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import { lootChangeEntries } from "../data/lootChanges";

export default function RaidingLootChanges() {
  return (
    <>
      <PageHeader
        title="Loot System Changelog"
        subtitle="Historical record of FTG loot rule changes. The current system is documented on the Raiding page."
      />
      <section className="page-section">
        <Container>
          <Link to="/raiding" className="d-inline-block mb-4">
            Back to Raiding
          </Link>
          <div className="row g-4">
            {lootChangeEntries.map((entry) => (
              <div className="col-12" key={entry.version}>
                <article className="content-card">
                  <div className="utility-text muted">{entry.date}</div>
                  <h2 className="h3">
                    {entry.version} - {entry.title}
                  </h2>
                  <ul className="rules-list mb-0">
                    {entry.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
