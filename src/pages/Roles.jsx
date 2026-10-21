import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";

const roles = [
  {
    id: "quartermaster",
    name: "Quartermaster",
    purpose: "Runs the guild vault, keeping raid teams stocked with consumables, materials, and crafted gear.",
    body:
      "Responsible for organizing the vault, managing its gold, tracking guild quest contributions, distributing raid supplies, crafting, and purchasing on the guild's behalf. Expect a heavier workload around each new raid phase.",
    fit: "Organized, trustworthy, and comfortable saying no.",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    purpose:
      "Keeps the roster deep enough that FTG raids run smoothly, filling gaps before they become problems. Leads a team of recruiters from across the guild, since strong recruiting takes more than one person.",
    body:
      "Responsible for reviewing applications, tracking trial raiders, keeping the list of priority needs current, coordinating recruiters, and regularly bumping recruitment ads. Also finds PUGs for raids, decides which applicants trial, and works with trial raiders who aren't meeting expectations.",
    fit: "Available, friendly, responsive, a good judge of people, and knows what each spec brings to a raid.",
    note: (
      <>
        Trial raiders are evaluated against the <Link to="/trials">published trial standards</Link>.
      </>
    ),
  },
  {
    id: "loot_systems_admin",
    name: "Loot Systems Admin",
    purpose: "Keeps our loot systems running, maintains records, communicates changes, and answers members' loot questions.",
    body:
      "Responsible for keeping TMB (That's My BIS) up to date, maintaining loot documentation, supporting loot council, and making sure Loot Masters are prepared for every raid. Sets wishlist deadlines, corrects records, settles disputes, interprets rules, and manages any change to how loot is awarded.",
    fit: "Detail-oriented, impartial, comfortable using web tools or addons, and patient explaining the system to raiders.",
  },
  {
    id: "promoter",
    name: "Promoter",
    purpose: "Builds a strong public image for FTG and keeps players interested in joining, even when raids are full.",
    body:
      "Responsible for website content, progression posts, screenshots, clips, and FTG's public tone. Advertises the guild, schedules posts, and builds a media collection celebrating our wins.",
    fit: "Consistent, writes well, has an eye for a good screenshot, comfortable being FTG's voice online, and understands what sets FTG apart.",
  },
  {
    id: "community_events",
    name: "Community Events",
    purpose:
      "Leads FTG's culture outside of raids, helping members get to know each other beyond their raid group and giving them reasons to log in on off nights.",
    body:
      "Manages the event calendar outside raids, hosts social events in WoW twice a month, keeps guild traditions going, and celebrates milestones. Decides which events to run and when, avoiding raid times.",
    fit: "Creative, social, welcoming, good at getting people involved, and reliable about showing up for announced events.",
  },
];

const expectations = [
  "Take full responsibility for their role, not just help out.",
  "Attend and participate in at least 75% of leadership meetings.",
  "Give a short report (five minutes or less) at each meeting.",
  "Keep the guild informed with regular announcements on Discord, and in raid when helpful.",
  "Give early notice if they need to step back from their role or from leadership.",
];

export default function Roles() {
  return (
    <>
      <PageHeader
        title="Leadership Roles"
        subtitle={`The leadership roles that keep <FTG> running: stocking the guild vault, keeping the roster full, running fair loot systems, promoting the guild, and bringing members together outside of raids.`}
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
            <p>{role.body}</p>
            <p className={role.note ? "" : "mb-0"}>
              <strong>Good fit:</strong> {role.fit}
            </p>
            {role.note && <p className="mb-0">{role.note}</p>}
          </Container>
        </section>
      ))}
    </>
  );
}
