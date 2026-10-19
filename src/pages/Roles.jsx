import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";

const roles = [
  {
    id: "quartermaster",
    name: "Quartermaster",
    purpose:
      "Runs and organizes the guild vault and keeps raid teams supplied with consumables, materials, and crafted gear, so no raider is blocked from a gearing requirement.",
    owns: "Guild vault organization, contents, and gold; guild quest contributions; raid consumables and materials distribution; crafting and purchasing for the guild.",
    doesNotOwn: "Loot awards, who gets raid drops, raid strategy.",
    decides: "Routine distributions, withdrawals, and crafting or purchase orders within a spending limit set by officers.",
    escalates: "Spending above the limit, disputes over requests, changes to contribution rules.",
    time: "About 2-3 hours a week; more in the week before a new phase.",
    worksWith: "Raid Coordinator, crafters and enchanters, Guild Master.",
    goodFit: "Organized, trustworthy with shared gold, comfortable saying no to a request.",
  },
  {
    id: "raid-coordinator",
    name: "Raid Coordinator",
    purpose:
      "The impartial middleman between raid leaders. Runs signups and rosters, and brokers the week-to-week give and take between teams so each raid gets what it needs. Filling short rosters is shared work with Recruitment.",
    owns: "Event signups, roster assembly, mediating player swaps between teams, bench rotation, attendance records, inactivity checks.",
    doesNotOwn: "In-raid calls and strategy (Raid Leader), invites and group setup (Raid Manager), sourcing new players (Recruitment), loot, discipline.",
    decides: "Weekly roster and bench within the officer-approved roster policy.",
    escalates: "Unresolved disagreements between raid leaders, removals, rank changes, repeated no-shows.",
    time: "About 3 hours a week, mostly on signup-deadline days.",
    worksWith: "Raid Leaders, Raid Manager, Recruitment and other recruiters, Tooling (roster pipeline).",
    goodFit: "Reliable, knows class roles and comp, comfortable with spreadsheets or signup tools, fair under pressure.",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    purpose:
      "Keeps the roster deep enough to field every raid, closing class gaps before they cost a raid night. Leads a group of recruiters inside and outside leadership, since recruiting is too much for one person.",
    owns: "Applicant pipeline, application review, trial tracking, the open-roles list, coordinating the guild's recruiters.",
    doesNotOwn: "Ads and public copy (Marketing), final accept or reject on raiders (Officer Team), roster placement (Raid Coordinator).",
    decides: "Which applicants move to trial, and how recruiting work is split among recruiters.",
    escalates: "Final acceptance, trial failures, applicants with history in the community.",
    time: "About 3 hours a week, spread across most days.",
    worksWith: "Recruiters in and out of leadership, Raid Coordinator and Raid Leaders, Marketing.",
    goodFit: "Friendly, responsive, a good judge of people, knows what each class and spec brings to a raid.",
    note: (
      <>
        Trial raiders are evaluated against the <Link to="/trials">published trial standards</Link>.
      </>
    ),
  },
  {
    id: "loot-systems-admin",
    name: "Loot Systems Admin",
    purpose:
      "Keeps the loot system running and its records correct, so the Loot Council and Loot Master can make and apply decisions without touching the tools themselves.",
    owns: "That's My BIS (accounts, item lists, wishlists), loot history records, and the published loot rules page.",
    doesNotOwn: "Who receives an item (Loot Council), handing out loot in raid (Loot Master), loot policy (Officer Team).",
    decides: "Tool setup, wishlist deadlines and formatting, record corrections with an audit note.",
    escalates: "Disputes, rule interpretations, any change to how awards are decided.",
    time: "About 2 hours a week; 5-6 hours in the two weeks before a new phase.",
    worksWith: "Loot Council, Loot Master, Tooling, Raid Coordinator.",
    goodFit: "Detail-oriented, neutral on who gets what, comfortable with web tools, patient explaining the system to raiders.",
  },
  {
    id: "marketing",
    name: "Marketing",
    purpose: "Keeps FTG visible and accurately described to the players we want to recruit, every day, not only when we are short.",
    owns: "Recruitment ads and daily bumps, website copy, progression and kill posts, screenshots and clips, FTG's public tone.",
    doesNotOwn: "Applicant handling (Recruitment), website code and hosting (Tooling), internal guild announcements.",
    decides: "Ad wording, where and when to post, visuals.",
    escalates: "Claims about guild policy or standards, anything that names other guilds or players.",
    time: "About 10 minutes a day, plus 1-2 hours a week.",
    worksWith: "Recruitment (open roles), Raid Leaders (kills and screenshots), Tooling (website updates).",
    goodFit: "Writes well, has an eye for a good screenshot, keeps a consistent daily habit, understands what makes FTG different.",
  },
  {
    id: "tooling",
    name: "Tooling",
    purpose:
      "Keeps FTG's software running on raid night and makes sure no tool depends on a single person or a single computer.",
    owns: "Roster pipeline and Discord bot, That's My BIS hosting, ftgguild.com code and hosting, Warcraft Logs tools, Raid-Helper setup, and Discord and website access.",
    doesNotOwn: "What the tools are used to decide (loot, roster, recruits), website copy (Marketing), loot records (Loot Systems Admin).",
    decides: "How tools are built, hosted, and deployed, and who holds admin access within an officer-approved list.",
    escalates: "Paid services, new tools that replace existing ones, any access removal for a leader.",
    time: "About 2 hours a week; more during a tool change or a new phase.",
    worksWith: "Every other role, since each one depends on at least one tool.",
    goodFit: "Comfortable with code, Discord bots, and web hosting; documents as they go; careful with permissions.",
  },
  {
    id: "community-events",
    name: "Community Events",
    purpose:
      "Runs the non-raid side of FTG, so members know each other beyond their raid group and have reasons to log in on off nights.",
    owns: "Event calendar outside raids, social events in WoW and other games, guild traditions, and milestone celebrations.",
    doesNotOwn: "Raid scheduling (Raid Coordinator), external promotion (Marketing), conduct enforcement.",
    decides: "What events to run, when, and who hosts, avoiding raid nights.",
    escalates: "Prizes paid from the guild bank, events with other guilds, conduct problems at events.",
    time: "About 2 hours a week.",
    worksWith: "Quartermaster (prizes), Marketing (screenshots), members who want to host.",
    goodFit: "Social, welcoming, good at getting people involved, reliable about showing up for events they announce.",
  },
];

const agreements = [
  "Own the outcomes listed for the role, not just help with them.",
  "Name one backup and keep them able to cover a raid week without you.",
  "Attend at least 75% of officer meetings and take part in them.",
  "Report your role's numbers at each biweekly officer meeting in five minutes or less.",
  "Keep the guild informed about your area through regular announcements in Discord, and in raid when it helps.",
  "Write down how you do the job, so the next person can pick it up.",
  "Say clearly if you need to step back. A quiet warning beats an unseen absence.",
];

export default function Roles() {
  return (
    <>
      <PageHeader
        title="Leadership Roles"
        subtitle="The seven recurring jobs that run FTG, each owned end to end, so the Guild Master is not the default for any of them."
      />

      <section className="page-section">
        <Container>
          <h2 className="mb-3">How These Roles Work</h2>
          <p>
            Each role owns one recurring area of guild work, end to end. These are jobs, not ranks: none requires officer rank, and an officer may hold none. Last updated October 19, 2026.
          </p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Role</th>
                  <th scope="col">Owns</th>
                  <th scope="col">Busiest when</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quartermaster</td>
                  <td>Guild bank, materials, consumables</td>
                  <td>Phase start, weekly reset</td>
                </tr>
                <tr>
                  <td>Raid Coordinator</td>
                  <td>Signups, roster, attendance, bench</td>
                  <td>Every raid week</td>
                </tr>
                <tr>
                  <td>Recruitment</td>
                  <td>Sourcing, applicants, trials</td>
                  <td>Continuous</td>
                </tr>
                <tr>
                  <td>Loot Systems Admin</td>
                  <td>Loot tools, wishlists, loot records</td>
                  <td>Phase start, raid nights</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Public face: ads, website copy, social posts</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Tooling</td>
                  <td>Bots, website, raid software, access</td>
                  <td>Raid nights, tool changes</td>
                </tr>
                <tr>
                  <td>Community Events</td>
                  <td>Non-raid events that bring members together</td>
                  <td>Weekly or biweekly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3">Shared Agreements</h2>
          <p>Every role holder agrees to:</p>
          <ol className="rules-list">
            {agreements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            <strong>The Guild Master agrees to</strong> hand over the work, teach it during a 30-day handoff, then stop doing it, even if quality dips while the new owner learns.
          </p>
          <p className="mb-0">Each role is reviewed at the end of every phase: keep, adjust, or hand off.</p>
        </Container>
      </section>

      {roles.map((role) => (
        <section className="page-section" key={role.id}>
          <Container>
            <h2 className="mb-3" id={role.id}>
              {role.name}
            </h2>
            <p>{role.purpose}</p>
            <dl className="team-meta">
              <dt>Owns</dt>
              <dd>{role.owns}</dd>
              <dt>Does not own</dt>
              <dd>{role.doesNotOwn}</dd>
              <dt>Decides</dt>
              <dd>{role.decides}</dd>
              <dt>Escalates</dt>
              <dd>{role.escalates}</dd>
              <dt>Time</dt>
              <dd>{role.time}</dd>
              <dt>Works with</dt>
              <dd>{role.worksWith}</dd>
              <dt>Good fit</dt>
              <dd>{role.goodFit}</dd>
            </dl>
            {role.note && <p className="mt-3 mb-0">{role.note}</p>}
          </Container>
        </section>
      ))}
    </>
  );
}
