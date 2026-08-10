import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import PersonAvatar from "../components/layout/PersonAvatar.jsx";
import { guildMaster, officers } from "../data/leadership";

function PersonCard({ person, title }) {
  const details = [
    title ? ["Guild role", title] : null,
    person.characterName && person.characterName !== person.name
      ? ["Character", person.characterName]
      : null,
    person.also ? ["Also known as", person.also] : null,
    ["Class / Spec / Role", `${person.class} - ${person.spec} - ${person.role}`],
  ].filter(Boolean);

  return (
    <article className="content-card h-100">
      <div className="team-card-layout">
        <PersonAvatar filename={person.avatar} alt={`${person.name} character avatar`} />
        <div>
          <h3 className="h4 mb-1">{person.name}</h3>
          <dl className="team-meta mb-0">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        title="About <FTG>"
        subtitle="For The Guild - is a Horde raiding guild on Dreamscythe built around taking progression seriously and treating each other decently while we achieve it."
      />
      <section className="page-section">
        <Container>
          <div className="row g-5">
            <div className="col-lg-8">
              <p className="lead">
                &lt;FTG&gt; - For The Guild - is a Horde raiding guild on Dreamscythe built around two things 
                that don't always coexist in Classic guilds: taking progression seriously and treating each 
                other well while doing it. We're not a hardcore guild that happens to have a community, 
                and we're not a friend group that happens to raid. Both matter. When they genuinely 
                conflict, progression comes first - but we work hard to make sure they rarely have to.
              </p>
              <h2 className="mt-5">Our Story</h2>
              <p>
                &lt;FTG&gt; officially formed in late March 2025, but our story starts earlier. A core group - including Cashes, Molz, 
                Orcface, Stun, Desmo, Mairea, Elz, Hadus, and Corp - have been raiding together since early 2024. The group 
                began in Season of Discovery eventually becoming &lt;Immortal&gt; after a server transfer to Crusader Strike. When 
                Classic Fresh Anniversary launched on Dreamscythe in November 2024, the guild moved to start over on Horde.
              </p>
              <p>
                &lt;FTG&gt; is what eventually came out the other side: many of the same people, finally building the guild we all 
                want built. Several of our founding members had served as officers in &lt;Immortal&gt; and eventually reached an 
                impasse over the guild's direction. Rather than remain stuck, they broke away to build something new - and 
                much of the community followed. Cashes served as Guild Master from FTG's founding through early TBC. 
                BathTissue, who joined the guild in early 2025 and became an officer that July, took over as GM in March 2026.
              </p>
              <p>
                Officially, &lt;FTG&gt; stands for For The Guild. Ask anyone who's been around for a while, though, and they'll tell 
                you there's a second reading too. It's become enough of an inside joke that you'll probably hear it the moment 
                someone leaves the guild. We'll let you discover that one for yourself once you're on board and in guild chat.
              </p>
              <p>
                We raided throughout 2025 as a single 40-man team, reaching 12/15 in Naxxramas before our progression 
                ended at Four Horsemen. Going into TBC, we expanded into four 25-man teams and have consolidated as 
                rosters and circumstances changed. Today, FTG runs two balanced teams - Charlie and Delta - both 10/10 in 
                TBC Phase 2 and preparing to take on Black Temple and Mount Hyjal together in P3 starting on August 27th.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section section-alt">
        <Container>
          <h2>Leadership Structure</h2>
          <p>
            FTG is led by a Guild Master, an Officer team responsible for day-to-day operations,
            and a group of Advisors - trusted members who help guide guild culture without holding
            moderation authority. Loot decisions specifically go through a separate Loot Council,
            not directly through Officers or Advisors - see <Link to="/raiding#loot-system">Raiding</Link> for more details.
          </p>

          <h2 className="mt-5">Guild Master</h2>
          <div className="row g-4 mt-1">
            <div className="col-lg-7">
              <PersonCard person={guildMaster} title="Guild Master" />
            </div>
            <div className="col-lg-5">
              <p>
                Builder who Sets &lt;FTG&gt;'s direction, owns final decisions when they're needed, and is responsible
                for the guild's long-term stability. Bath prefers systems that are simple enough for
                anyone to follow consistently over rules that need a judgment call every single time.
              </p>
            </div>
          </div>

          <h2 className="mt-5">Officers</h2>
          <p>
            Officers have responsibility across raid leadership, recruitment, culture, communication, and operations. They're accountable for the health of the guild, solving problems, 
            maintaining systems the guild relies on, making difficult roster calls, handling issues fairly and with discretion. Being an Officer is a position of trust and service to the guild, 
            with an expectation of sound judgment, ownership, and a willingness to put the long-term interests of &lt;FTG&gt; ahead of individual preferences whenever necessary.
          </p>
          <div className="row g-4 mt-1">
            {officers.map((officer) => (
              <div className="col-lg-6" key={officer.name}>
                <PersonCard person={officer} title="Officer" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="row g-5">
            <div className="col-lg-6">
              <h2>Advisors</h2>
              <p>
                Advisors are trusted members who've earned the role through consistent effort, good
                judgment, and positive contributions to the guild - not tenure alone. They're not
                moderators and don't carry disciplinary authority. Their role is to model what FTG
                looks like at its best: by helping newer or struggling players, keeping the FTG community
                constructive, raising concerns, and giving leadership an honest read on guild morale.
                Advisors meet periodically to provide another perspective on the guild direction and
                serve as a bridge between the membership and leadership.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>How We Operate</h2>
              <p>
                We'd rather build simple systems that are understood and followed consistently 
                than complicated rules requiring a judgment call every time. That shapes how we 
                handle loot, how we build rosters, and how we resolve disagreements. Nothing is 
                meant to be permanent or perfect. When something stops serving the guild well, 
                we review it, learn from what happened, and make changes deliberately. The goal is 
                consistency without rigidity: enough structure to keep FTG predictable and fair, 
                with enough flexibility to adapt as the guild and the game and our needs change.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
