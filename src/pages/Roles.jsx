import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";

const roles = [
  {
    id: "quartermaster",
    name: "Quartermaster",
    purpose:
      "Runs and organizes the guild vault and keeps raid teams supplied with consumables, materials, and crafted gear, so no raider is blocked from a gearing requirement.",
    body:
      "They own the vault's organization, contents, and gold, guild quest contributions, raid consumable and material distribution, and crafting and purchasing for the guild. They decide routine distributions, withdrawals, and crafting or purchase orders within a spending limit set by officers, and escalate spending above that limit, disputes over requests, and changes to contribution rules. Expect about 2-3 hours a week, more in the week before a new phase. Good fit: organized, trustworthy with shared gold, comfortable saying no to a request.",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    purpose:
      "Keeps the roster deep enough to field every raid, closing class gaps before they cost a raid night. Leads a group of recruiters inside and outside leadership, since recruiting is too much for one person.",
    body:
      "They own the applicant pipeline, application review, trial tracking, the open-roles list, and coordinating the guild's recruiters. They decide which applicants move to trial and how recruiting work is split among recruiters, and escalate final acceptance, trial failures, and applicants with a history in the community. Expect about 3 hours a week, spread across most days. Good fit: friendly, responsive, a good judge of people, knows what each class and spec brings to a raid.",
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
      "Keeps the loot system running and its records correct, so the Loot Council and Loot Master can make and apply decisions without touching the tools themselves.",
    body:
      "They own That's My BIS (accounts, item lists, wishlists), loot history records, and the published loot rules page. They decide tool setup, wishlist deadlines and formatting, and record corrections with an audit note, and escalate disputes, rule interpretations, and any change to how awards are decided. Expect about 2 hours a week, plus 5-6 hours in the two weeks before a new phase. Good fit: detail-oriented, neutral on who gets what, comfortable with web tools, patient explaining the system to raiders.",
  },
  {
    id: "marketing",
    name: "Marketing",
    purpose: "Keeps FTG visible and accurately described to the players we want to recruit, every day, not only when we are short.",
    body:
      "They own recruitment ads and daily bumps, website copy, progression and kill posts, screenshots and clips, and FTG's public tone. They decide ad wording, where and when to post, and visuals, and escalate claims about guild policy or standards and anything that names other guilds or players. Expect about 10 minutes a day plus 1-2 hours a week. Good fit: writes well, has an eye for a good screenshot, keeps a consistent daily habit, understands what makes FTG different.",
  },
  {
    id: "community_events",
    name: "Community Events",
    purpose:
      "Runs the non-raid side of FTG, so members know each other beyond their raid group and have reasons to log in on off nights.",
    body:
      "They own the event calendar outside raids, social events in WoW and other games, guild traditions, and milestone celebrations. They decide what events to run, when, and who hosts, avoiding raid nights, and escalate prizes paid from the guild bank, events with other guilds, and conduct problems at events. Expect about 2 hours a week. Good fit: social, welcoming, good at getting people involved, reliable about showing up for events they announce.",
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
