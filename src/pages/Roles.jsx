import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";

const roles = [
  {
    id: "quartermaster",
    name: "Quartermaster",
    purpose:
      "Runs and organizes the guild vault and keeps raid teams supplied with consumables, materials, and crafted gear.",
    body:
      "They are responsible for the guild vault's organization, contents, gold, guild quest contributions, raid consumables, material distribution, crafting and purchasing for the guild. They manage item distributions, crafting, purchasing. Expect higher workloads around the launch of a new raid phase. Good fit: organized, trustworthy, and comfortable saying no to a request.",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    purpose:
      "Maintains enough roster depth to ensure FTG raids keep running smoothly, recruiting for roster gaps proactively. Works with a group of guild recruiters inside and outside leadership, since recruiting is too much for one person.",
    body:
      "They are responsible for the guild's applicants, application review, tracking trial raiders, updating lists of priority needs, coordinating other recruiters and regular bumping of guild recruitment advertisements. They find PUGs for our raids, decide which applicants trial, and work with trial raiders who are failing to meet expectations. Good fit: available, friendly, responsive, a good judge of people, knows what each class and spec brings to a raid composition.",
    note: (
      <>
        Trial raiders are evaluated against the <Link to="/trials">published trial standards</Link>.
      </>
    ),
  },
  {
    id: "loot_systems_admin",
    name: "Loot Systems Admin",
    purpose:
      "Keeps loot systems running, maintains records, documentation, communicates any changes and answers questions members may have about our loot systems.",
    body:
      "They are responsible for making sure TMB (That's My BIS) and information about our loot systems are kept up to date, that loot council is functional, and that Loot Masters are knowledgeable and available for raids. They decide wishlist deadlines, record corrections, handle any disputes, rule interpretations, and any change to how loot is awarded. Good fit: detail-oriented, unbiased on who gets what, patient explaining the system to raiders and comfortable with web tools and addons.",
  },
  {
    id: "marketing",
    name: "Promoter",
    purpose:
      "Promotes FTG to the masses positively, aiming to build a strong image of the guild and attempts to attract players to join even when raids are full.",
    body:
      "They are responsible for website copy, progression and kill posts, screenshots and clips, and FTG's public tone. They advertise the guild, decide where and when to post, build visuals and media collection celebrating our wins. Good fit: consistent, writes well, has an eye for a good screenshot, and understands what makes FTG different from other guilds.",
  },
  {
    id: "community_events",
    name: "Community Events",
    purpose:
      "Responsible for the culture side of FTG, so members know each other beyond their raid group and have reasons to log in on off nights.",
    body:
      "They manage the event calendar outside raids, host social events in WoW twice a month, celebrate guild traditions, and milestone celebrations. They decide what events to run and when (avoiding raid times). Good fit: creative, social, welcoming, good at getting people involved, reliable about showing up for events they announce.",
  },
];

const expectations = [
  "Take responsibility for their role, not just help with them.",
  "Attend and participate in at least 75% or more of leadership meetings.",
  "Give a quick (five minutes or less) report at each meeting.",
  "Communicate to the guild through regular announcements by Discord and in raid when it helps.",
  "Communicate if you need to step back from leadership or your role. An early warning is always appreciated.",
];

export default function Roles() {
  return (
    <>
      <PageHeader
        title="Leadership Roles"
        subtitle={`Five leadership functions that keep <FTG> running: from organizing, distributing and purchasing materials from the guild vault, keeping the roster full with new players to keep raids running, making sure our loot systems run smoothly and fairly, advertising and promoting the guild, and bringing members together outside raid nights and across raid teams.`}
      />

      <section className="page-section">
        <Container>
          <h2 className="mb-3">Expectations</h2>
          <p>Members of FTG leadership agree to:</p>
          <ol className="rules-list mb-0">
            {expectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Container>
      </section>

      {roles.map((role) => (
        <section className="page-section" key={role.id}>
          <Container>
            <h2 className="mb-3" id={role.id}>
              {role.name}
            </h2>
            <p>{role.purpose}</p>
            <p className={role.note ? "" : "mb-0"}>{role.body}</p>
            {role.note && <p className="mb-0">{role.note}</p>}
          </Container>
        </section>
      ))}
    </>
  );
}
