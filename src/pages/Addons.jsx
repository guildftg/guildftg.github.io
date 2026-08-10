import Container from "react-bootstrap/Container";
import PageHeader from "../components/layout/PageHeader.jsx";
import { addonGroups } from "../data/addons";

export default function Addons() {
  return (
    <>
      <PageHeader
        title="Recommended Addons"
        subtitle="These aren't required to raid with FTG - but they'll make your life easier, especially if you're new or still tightening up your UI. Grouped by purpose, not priority."
      />
      <section className="page-section">
        <Container>
          <div className="row g-4">
            {addonGroups.map((group) => (
              <div className="col-lg-4" key={group.title}>
                <article className="content-card">
                  <h2 className="h3">{group.title}</h2>
                  <ul className="addon-list mb-0">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.name}
                        </a>
                      </li>
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
