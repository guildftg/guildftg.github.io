import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import DiscordCTA from "../components/layout/DiscordCTA.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import { CURRENT_PROGRESSION } from "../data/config";
import { raidDays, raidTime } from "../data/schedule";
import { teams } from "../data/roster";

const listFormatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });

export default function Recruitment() {
  const teamText = listFormatter.format(
    teams.map((team) => `${team.name}, led by ${team.lead.characterName}`),
  );
  const teamCountText = teams.length === 2 ? "two" : String(teams.length);
  const raidDayText = listFormatter.format(raidDays);

  return (
    <>
      <PageHeader
        title="Join <FTG>"
        subtitle="What FTG offers, what we expect in return, and the fastest way to actually join."
      />
      <section className="page-section">
        <Container className="content-narrow">
          <div className="row g-4">
            <div className="col-lg-8">
              <h2>
                Tired of searching for a new guild every few months? You're looking for the right
                thing.
              </h2>
              <p>
                Most guild ads promise stability. &lt;FTG&gt; has actually delivered it - a year and a half of continuous raiding, two 
                active 25-man teams, and leadership that doesn't disappear when progression gets difficult. We have grown, 
                adapted, and rebuilt our rosters as circumstances changed without losing sight of the community behind them. 
                Now we are seeking more reliable players who want to be part of {CURRENT_PROGRESSION}.
              </p>
              <div className="my-4">
                <DiscordCTA size="lg" />
              </div>

              <h2 className="mt-5">The Honest Story</h2>
              <p>
                &lt;FTG&gt; has been raiding consistently for a year and a half - through
                multiple phases, roster changes, and everything that naturally comes with running
                a long-term raiding guild. Want the full version? See <Link to="/about">About</Link>.
              </p>
              <p>
                What's kept it going isn't just raid nights, but the community built around it.
                We take progression seriously, but we also value the social side of the game that
                keeps people logging in week after week - things like STV PvP fight nights, casual
                raid content, and fun alt runs (Karazhan and beyond) alongside our core progression
                teams.
              </p>
              <p>
                We're a guild that enjoys pushing content together, and enjoys playing the game
                together outside of raid too. That combination is what's kept &lt;FTG&gt; going
                this long, and it's what we want to continue to building on.
              </p>

              <h2 className="mt-5">Proof Over Promises</h2>
              <ul className="rules-list">
                <li>A year and a half of consistent raiding on Classic Anniversary Dreamscythe</li>
                <li>{teamCountText.charAt(0).toUpperCase() + teamCountText.slice(1)} active 25-man raid teams, {CURRENT_PROGRESSION}</li>
                <li>An established leadership structure - not a disappearing officer team</li>
                <li>Karazhan alt runs and an active Discord community of friends</li>
                <li>A long-term vision beyond the current game phase</li>
              </ul>

              <h2 className="mt-5">Two 25-Man Teams</h2>
              <p>
                <strong>{teamText}</strong>
              </p>
              <p>
                Both raiding {raidDayText},{" "} {raidTime.server} server / {raidTime.eastern} Eastern.
              </p>

              <h2 className="mt-5">Loot, Without the Drama</h2>
              <p>
                We run a personal loot list plus loot council. You maintain a ranked list of what
                you want through our loot tool; when an item drops, your priority follows your list, and
                loot council distributes big ticket items and handles first drop judgment calls like priortizing gear for tanks - using
                the same reasoning every time with no favoritism.{" "}
              </p>
              <p>
                <Link to="/raiding#loot-system">Read more about loot</Link>
              </p>

              <h2 className="mt-5">What We Expect</h2>
              <p>
                Show up prepared - consumables, repaired gear, and a working knowledge of the fight.
                Communicate if you're running late. Treat your raid team like people you'll be
                playing with for months, because you will.{" "}
              </p>
              <p>
                <Link to="/raiding#raid-readiness">Full expectations</Link>
              </p>

              <p className="lead mt-5">If that sounds like your kind of guild, come talk to us.</p>
              <DiscordCTA size="lg" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
