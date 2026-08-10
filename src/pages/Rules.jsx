import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import { guildRules } from "../data/guildRules";

function itemText(item) {
  if (item.internalLink) {
    const [before, after] = item.text.split(item.internalLink.label);
    return (
      <>
        {before}
        <Link to={item.internalLink.to}>{item.internalLink.label}</Link>
        {after}
      </>
    );
  }

  if (item.links) {
    return (
      <>
        Adhere to{" "}
        <a href={item.links[0].url} target="_blank" rel="noopener noreferrer">
          {item.links[0].label}
        </a>{" "}
        and{" "}
        <a href={item.links[1].url} target="_blank" rel="noopener noreferrer">
          {item.links[1].label}
        </a>{" "}
        at all times.
      </>
    );
  }

  return item.text;
}

export default function Rules() {
  return (
    <>
      <PageHeader
        title={guildRules.title}
        subtitle="Conduct, communication, enforcement, and standards for our members."
      />
      <section className="page-section">
        <Container>
          <div className="row g-5">
            <div className="col-lg-8">
              <h2>{guildRules.opening.title}</h2>
              {guildRules.opening.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h2 className="mt-5">{guildRules.disclaimer.title}</h2>
              {guildRules.disclaimer.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {guildRules.sections.map((section) => {
                const ListTag = section.numbered ? "ol" : "ul";
                return (
                  <section className="mt-5" key={section.title}>
                    <h2>{section.title}</h2>
                    <ListTag className="rules-list" start={section.start}>
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <strong>{item.label}</strong>: {itemText(item)}
                        </li>
                      ))}
                    </ListTag>
                  </section>
                );
              })}

              <section className="mt-5">
                <h2>{guildRules.standards.title}</h2>
                {guildRules.standards.groups.map((group) => (
                  <div className="mt-4" key={group.title}>
                    <h3 className="h4">{group.title}</h3>
                    <ul className="rules-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {group.closing ? <p>{group.closing}</p> : null}
                  </div>
                ))}
              </section>

              <section className="mt-5">
                <h2>Final Notes</h2>
                {guildRules.finalNotes.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="signoff mt-4">
                  <p className="mb-1">{guildRules.signoff.greeting}</p>
                  <strong>{guildRules.signoff.name}</strong>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
