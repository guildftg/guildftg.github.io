import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import PersonAvatar from "../components/layout/PersonAvatar.jsx";
import { CURRENT_PROGRESSION, WARCRAFTLOGS_URL } from "../data/config";
import { teams } from "../data/roster";
import { raidDays, raidTime, readyBy, supplementalScheduleNote } from "../data/schedule";

export default function Raiding() {
  const teamCountText = teams.length === 2 ? "two" : String(teams.length);

  return (
    <>
      <PageHeader
        title="Raiding"
        subtitle={`How raiding works in <FTG> - our schedule, two-team structure, current prog, loot system, attendance expectations, standards, and what we expect from you.`}
      />

      <section className="page-section">
        <Container>
          <h2 className="mb-3">Raid Schedule</h2>
          <div className="external-panel">
            <h3 className="h4">{raidDays.join(", ")}</h3>
            <p className="schedule-time fs-4">
              {raidTime.server} Server / {raidTime.eastern} Eastern
            </p>
            <p>
              Invites go out early. Be online and ready before <strong>{readyBy}</strong>, or notify
              an officer if you're running late.
            </p>
            <h3 className="h4 mt-4">Beyond the core schedule</h3>
            <p className="mb-0">{supplementalScheduleNote}</p>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="raid-teams">
            Raid Teams
          </h2>
          <div className="row g-4">
            {teams.map((team) => (
              <div className="col-md-6" key={team.name}>
                <article className="content-card" aria-labelledby={`team-${team.name}`}>
                  <div className="team-card-layout">
                    <PersonAvatar
                      filename={team.lead.avatar}
                      alt={`${team.lead.name} character avatar`}
                    />
                    <div>
                      <h3 className="mb-2" id={`team-${team.name}`}>
                        Team: {team.name}
                      </h3>
                      <dl className="mb-0 team-meta">
                        <dt>Raid Lead</dt>
                        <dd>{team.lead.characterName}</dd>
                        <dt>Class / Spec / Role</dt>
                        <dd>
                          {team.lead.class} - {team.lead.spec} - {team.lead.role}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3">Current Progress</h2>
          <div className="external-panel">
            <p className="lead success-text fw-semibold">{CURRENT_PROGRESSION}.</p>
            <p>
              For boss-by-boss progression, individual and team parses, kill history, compositions, and detailed raid performance, see our Warcraft Logs guild page. WCL is the 
              evidence for our raid history and results; we keep this page updated with our current progression and major milestones each tier, while WCL acts as the complete 
              historical record of how Charlie and Delta are performing. If you want to see raid history, how consistently we are, or dig into the numbers, that's the place to look.
            </p>
            <Button as="a" href={WARCRAFTLOGS_URL} target="_blank" rel="noopener noreferrer">
              View WarcraftLogs
            </Button>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="row g-5">
            <div className="col-lg-8">
              <section id="loot-system">
                <h2>Loot System</h2>
                <p>
                  FTG uses a <strong>personal loot list plus loot council</strong>, managed through&nbsp;
                  <Link to="/tmb">our TMB (thatsmybis)</Link>, loot list tool.
                </p>
                <ul className="rules-list">
                  <li>You maintain a ranked list of items you want, per phase.</li>
                  <li>When an item drops, priority follows collective priority based off everyones lists.</li>
                  <li>
                    Loot council manages distribution of big ticket items, first-drop judgment calls like priortizing gear for tanks, 
                    using the same reasoning every time, documented so decisions are consistent across both our teams.
                  </li>
                </ul>
                <p>
                  We previously ran an EP/GP points system. That system has been temporarily retired in favor of exploring
                  the list-and-council approach above - see the{" "}
                  <Link to="/raiding/loot-changes">loot changelog</Link> for the full history of how
                  our loot rules have evolved.
                </p>
              </section>

              <section className="mt-5" id="attendance">
                <h2>Attendance &amp; Reliability</h2>
                <p>
                  Roster is posted ahead of each raid. Sign up if you plan to attend, and notify an
                  officer if you're running late or need to drop. We don't track a rigid attendance
                  percentage - but repeated no-call/no-shows or early leaves do affect roster priority
                  over time. Be online and ready <strong>15 minutes</strong> before (raid starts
                  6:30 PM ST / 8:30 PM EST).
                </p>
              </section>

              <section className="mt-5" id="raid-readiness">
                <h2>Raid Readiness</h2>
                <p>
                  Come prepared: consumables, fully repaired gear, and a working knowledge of the fight before you're in it. If 
                  you're unsure, ask - preparation is required, we spend a great deal of time preparing and you should too. 
                </p>
                <p>
                  Not required, but useful, especially if you're new or still dialing in your UI: see our <Link to="/addons">recommended addons</Link> page.
                </p>
              </section>

              <section className="mt-5">
                <h2>Conduct</h2>
                <p>
                  Loot, attendance, and prep are covered above - for how members are expected to
                  treat each other, communicate, and what happens when that doesn't go well, please see our{" "}
                  <Link to="/rules">Guild Rules</Link> for more info.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
