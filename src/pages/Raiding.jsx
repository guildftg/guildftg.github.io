import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import PersonAvatar from "../components/layout/PersonAvatar.jsx";
import { CURRENT_PROGRESSION, WARCRAFTLOGS_URL } from "../data/config";
import { raidLead } from "../data/roster";
import { raidDays, raidTime, readyBy, supplementalScheduleNote } from "../data/schedule";

export default function Raiding() {
  return (
    <>
      <PageHeader
        title="Raiding"
        subtitle={`How raiding works in <FTG> - our schedule, raid team, current prog, loot system, attendance expectations, standards, and what we expect from you.`}
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
            Raid Team
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <article className="content-card" aria-labelledby="raid-lead">
                <div className="team-card-layout">
                  <PersonAvatar
                    filename={raidLead.avatar}
                    alt={`${raidLead.name} character avatar`}
                  />
                  <div>
                    <h3 className="mb-2" id="raid-lead">
                      Raid Lead
                    </h3>
                    <dl className="mb-0 team-meta">
                      <dt>Character</dt>
                      <dd>{raidLead.characterName}</dd>
                      <dt>Class / Spec / Role</dt>
                      <dd>
                        {raidLead.class} - {raidLead.spec} - {raidLead.role}
                      </dd>
                    </dl>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="raider-expectations">
            Raider Role &amp; Expectations
          </h2>
          <p>
            Raiders are FTG's established core raiders. They are expected to be dependable, prepared, capable of fulfilling their assigned role, receptive to feedback, and committed to the
            success of the team.
          </p>
          <p>
            FTG is a focused-but-fun progression guild, not a hardcore, speedrunning, or parse-oriented guild. We expect players to learn mechanics, improve over time, and carry their share of
            the responsibility, not to play perfectly or top the meters every fight. Raiders are expected to:
          </p>
          <ul className="rules-list">
            <li>
              <strong>Be reliable:</strong> Sign up consistently, arrive ready, communicate schedule conflicts, and respect the time of the team.
            </li>
            <li>
              <strong>Come prepared:</strong> Maintain appropriate gear, enchants, and consumables; understand encounters and assigned responsibilities before progression attempts.
            </li>
            <li>
              <strong>Prioritize the team:</strong> Follow raid strategies, handle mechanics and assignments, and adapt when the raid needs something different, even when it comes at the expense
              of personal performance.
            </li>
            <li>
              <strong>Learn and improve:</strong> Accept constructive feedback, take responsibility for mistakes, and make a reasonable effort to correct recurring problems.
            </li>
            <li>
              <strong>Work well with others:</strong> Communicate respectfully, contribute to a focused and enjoyable environment, and handle disagreements or roster decisions constructively.
            </li>
          </ul>
          <p>
            Holding a core role does not guarantee a spot in every encounter or raid. Composition, attendance, performance, encounter requirements, and the needs of the team may affect roster
            decisions. Being benched is part of raiding; how a player responds matters.
          </p>

          <h2 className="mb-3 mt-5" id="trial-raiders">
            Trial Raiders &amp; Core Status
          </h2>
          <p>
            New raiders complete FTG's <strong>three-week Trial Raider Evaluation Process</strong>. The trial assesses reliability, communication, preparation, performance, coachability, teamwork,
            and compatibility with FTG's approach to progression.
          </p>
          <p>
            Completing the trial does not automatically guarantee a core spot. Leadership will review the player's overall readiness and determine whether to grant Raider status, extend the trial
            where appropriate, or conclude that the core role is not the right fit.
          </p>
          <p className="mb-0">
            <strong>Existing raiders:</strong> Players who were raiding with FTG before this evaluation process was introduced will not be required to repeat a trial solely because the process is
            new. Leadership will establish their Raider status based on their demonstrated reliability, preparation, performance, teamwork, and overall contribution. Existing membership or tenure
            alone does not guarantee permanent core status, but the new process is intended to clarify expectations, not retroactively penalize players for rules that did not previously exist.
          </p>
          <p className="mb-0">
            <Link to="/trials">See the full trial standards</Link>.
          </p>
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
              historical record of how we're performing. If you want to see raid history, how consistently we are, or dig into the numbers, that's the place to look.
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
                    using the same reasoning every time, documented so decisions are consistent across the raid.
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
