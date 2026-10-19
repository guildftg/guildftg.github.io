import Container from "react-bootstrap/Container";
import PageHeader from "../components/layout/PageHeader.jsx";

export default function Trials() {
  return (
    <>
      <PageHeader
        title="Trial Raider Program"
        subtitle="The three-week evaluation FTG uses to decide who earns a core raider spot on the progression team."
      />

      <section className="page-section">
        <Container>
          <h2 className="mb-3">Purpose</h2>
          <p>
            The three-week trial determines whether a player consistently meets the expectations of an FTG core raider, and whether FTG is the right environment for them. A core spot is
            earned through reliability, preparation, performance, teamwork, coachability, and guild fit.
          </p>
          <p>
            FTG is a focused-but-fun progression guild, not a hardcore, speedrunning, or parse-oriented guild. The goal is raid success and a positive team environment, not perfect play or
            the highest meters. Mistakes are expected; repeatedly failing to learn from them is the concern.
          </p>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="attendance">
            1. Attendance &amp; Reliability
          </h2>
          <p>Core raiders must be dependable and ready to fulfill their role.</p>
          <ul className="rules-list">
            <li>Sign up consistently, arrive on time and ready, and remain for the majority of each raid.</li>
            <li>
              Maintain greater than <strong>80% attendance/duration participation</strong> during the trial, excluding approved absences or circumstances outside the player's control.
            </li>
            <li>Notify leadership as early as reasonably possible about absences, lateness, or early departures.</li>
            <li>If benched, generally remain available in case a spot opens, unless there is another legitimate obligation.</li>
            <li>Maintain a reliable computer, connection, and peripherals. Recurring technical issues may require a temporary bench until resolved.</li>
          </ul>
          <p>
            Serious concerns include repeated unexplained absences, late arrivals or early departures without notice, signing up and not attending, and unresolved reliability problems.
            Technical difficulties are not automatically a character flaw; repeatedly failing to address a known issue is.
          </p>
          <p className="mb-0">
            <strong>A no-show without communication, absent a genuine emergency, is an automatic failure of the attendance expectation.</strong> No core spot will be granted at the end of
            the trial.
          </p>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="communication">
            2. Communication
          </h2>
          <p>Players should communicate clearly with leadership and the guild without needing to be constantly online or talking.</p>
          <ul className="rules-list">
            <li>Communicate schedule conflicts, absences, late arrivals, and early departures as early as possible.</li>
            <li>Read relevant Discord announcements and acknowledge or respond to important messages.</li>
            <li>Listen to raid instructions, ask for clarification when needed, and promptly communicate information that affects the raid.</li>
            <li>
              Use voice comms appropriately: avoid unnecessary chatter during critical moments and do not disrupt important raid discussions.
            </li>
          </ul>
          <p>
            Asking a question is better than silently misunderstanding an assignment. Serious concerns include repeatedly ignoring messages, failing to communicate schedule conflicts,
            disregarding instructions through inattention, or creating disruptive voice or Discord clutter.
          </p>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="performance">
            3. Performance &amp; Preparation
          </h2>
          <p>
            Players are expected to arrive prepared and make a reasonable effort to perform their assigned role. Performance is evaluated in context: mechanics, assignments, role
            responsibilities, encounter difficulty, and raid needs, not meters alone.
          </p>

          <h3 className="h4 mt-4">Character and consumable preparation</h3>
          <ul className="rules-list">
            <li>Bring appropriate gear, enchants, required consumables, and class or spec-specific items for the role.</li>
            <li>Use consumables appropriately during encounters.</li>
            <li>
              Minimum standards: at least <strong>80% consume uptime</strong> and at least <strong>80% enchant coverage</strong>. Exceptions may be considered for legitimate circumstances or
              where a metric is not meaningful for a particular item or spec.
            </li>
          </ul>
          <p>These are minimum preparation standards, not a demand for perfection. They show that players take reasonable responsibility for their characters.</p>

          <h3 className="h4 mt-4">Encounter knowledge and assignments</h3>
          <ul className="rules-list">
            <li>Before progression, review encounter mechanics, relevant strategies, assignment diagrams, personal responsibilities, and role expectations.</li>
            <li>Ask questions before or during the raid if an assignment or mechanic is unclear.</li>
            <li>Follow assigned roles, perform required mechanics, and follow raid-lead instructions.</li>
            <li>Maintain raid awareness: watch mechanics and positioning, recognize when others need help, and adapt when plans change.</li>
          </ul>
          <p>
            Repeatedly entering progression fights unprepared, requiring the group to carry the player through basic mechanics, or frequently ignoring assignments does not meet core
            expectations.
          </p>

          <h3 className="h4 mt-4">Raid success over parses</h3>
          <p>
            FTG is not parse-oriented. DPS, HPS, and logs can inform evaluation, but they are not the primary measure of a successful raider. Mechanics, positioning, survival, assignments, and
            encounter strategy come before personal meters.
          </p>
          <ul className="rules-list mb-0">
            <li>Do not ignore mechanics to keep attacking, remain in danger to maximize damage, or refuse an assignment because it lowers DPS.</li>
            <li>Adapt to strategy or assignment changes, group composition, positioning changes, and temporary role adjustments.</li>
            <li>A lower parse earned while correctly completing an important assignment is better than a higher parse that harms the team.</li>
          </ul>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="coachability">
            4. Coachability &amp; Improvement
          </h2>
          <p>Trial raiders are not expected to know everything on arrival. They are expected to learn, take ownership, and improve.</p>
          <ul className="rules-list">
            <li>Accept constructive feedback in good faith; ask questions when something is unclear.</li>
            <li>
              Take responsibility for mistakes, review logs or performance when useful, identify problems proactively, and make a reasonable effort to correct them.
            </li>
            <li>
              Show meaningful improvement across the trial, including correcting repeated mistakes and applying prior feedback without constant reminders.
            </li>
            <li>
              Explain relevant circumstances when needed, but do not use them to avoid responsibility or to blame others instead of addressing legitimate concerns.
            </li>
          </ul>
          <p className="mb-0">
            A mistake alone is not a reason to fail a trial. Leadership considers whether the player understood it, accepted feedback, tried to correct it, and repeated it. Occasional mistakes
            followed by learning are acceptable; the same avoidable mistake continuing after clear feedback is a concern. Persistent defensiveness, excuses, or requiring leadership to repeatedly
            identify and solve basic problems indicates poor core readiness.
          </p>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="team-behavior">
            5. Team Behavior
          </h2>
          <p>Progression is a team activity. Core raiders must contribute to a respectful, cooperative, focused, and enjoyable raid environment.</p>
          <ul className="rules-list">
            <li>Treat guild members and leadership respectfully; cooperate with others and be willing to take less glamorous assignments when the team needs them.</li>
            <li>Understand that not every decision will personally benefit you. Put raid success ahead of individual preference when appropriate.</li>
            <li>
              Jokes and banter are welcome, but are not an excuse for repeated disruption. Do not derail discussions, distract players during encounters, interrupt important calls, or continue
              disruptive behavior after being asked to stop.
            </li>
            <li>Help the team succeed through awareness, flexibility, and appropriate support for other players.</li>
          </ul>

          <h3 className="h4 mt-4">Drama, conflict &amp; public complaints</h3>
          <p>
            Disagreements are inevitable. Raise legitimate concerns through appropriate channels, discuss them respectfully, and allow leadership to make decisions without creating unnecessary
            conflict.
          </p>
          <ul className="rules-list">
            <li>Loot disagreements may be discussed through the appropriate channel, but should not become public arguments or recurring complaints.</li>
            <li>
              Do not turn individual disagreements into guild-wide drama, repeatedly make public negative comments about FTG or the raid team, or rally others against raid decisions.
            </li>
            <li>
              Handle roster decisions, including being benched, professionally. Healthy responses include remaining available when appropriate, supporting the active group, asking what can
              improve, and recognizing that roster decisions serve the team.
            </li>
          </ul>
          <p className="mb-0">
            The standard is not "never complain." It is to bring problems forward constructively rather than turn them into recurring public conflict. Persistent hostility, resentment, or
            disengagement around benching, loot, or leadership decisions may indicate a team-behavior or guild-fit issue.
          </p>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <h2 className="mb-3" id="guild-fit">
            6. Guild Fit
          </h2>
          <p>
            FTG aims to clear content efficiently, improve continuously, learn from mistakes, maintain a focused raid environment, have fun while progressing, and work as a team. FTG is not a
            hardcore progression, speedrunning, or parse-oriented guild, and personal DPS or HPS does not take priority over mechanics or raid strategy.
          </p>
          <ul className="rules-list">
            <li>
              Players whose primary goal is maximizing parses, speedrunning, or pushing personal performance at all costs may be better suited to a guild built around those goals.
            </li>
            <li>Core spots are earned, not guaranteed by joining the guild or completing three weeks of trial.</li>
            <li>
              Be willing to make team-first sacrifices when appropriate: perform lower-DPS assignments, help another player survive, adjust positioning, change talents or specs when needed, or sit
              an encounter when composition requires it.
            </li>
            <li>
              Being quiet or socially reserved is not a negative. Positive contributions outside raids, such as helping members, answering questions, sharing information, or joining guild
              activities, are welcome but are not a requirement to be socially active.
            </li>
          </ul>
          <p className="mb-0">
            Leadership evaluates overall compatibility, including how the player handles feedback, changing strategies, different assignments, and benching. The central question is whether they
            can be a reliable, cooperative addition to FTG's progression team without requiring disproportionate leadership attention.
          </p>
        </Container>
      </section>
    </>
  );
}
