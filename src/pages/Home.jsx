import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import DiscordCTA from "../components/layout/DiscordCTA.jsx";
import GuildEmblem from "../components/layout/GuildEmblem.jsx";
import ResponsiveImage from "../components/layout/ResponsiveImage.jsx";
import { CURRENT_PROGRESSION } from "../data/config";
import { raidDays } from "../data/schedule";
import { teams } from "../data/roster";

const listFormatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });

export default function Home() {
  const teamNames = listFormatter.format(teams.map((team) => team.name));
  const teamCountText = teams.length === 2 ? "two" : String(teams.length);
  const raidDayText = listFormatter.format(raidDays);
  const features = [
    {
      title: "Community First",
      body: "FTG is more than a raid log. Respect, reliability, and a positive attitude matter as much as skill. Outside of raid nights, you'll find STV PvP fight nights, Kara alt runs, and a active Discord community. We're building something that lasts.",
      link: { to: "/about", label: "Learn more about us" },
    },
    {
      title: "Performance Driven",
      body: `We value preparation, execution, and steady improvement. Every raider is expected to contribute meaningfully to our success - that's what keeps ${teamCountText} 25-man teams progressing together on the same schedule, week after week.`,
      link: { to: "/raiding", label: "What are FTG raids like?" },
    },
    {
      title: "Fair & Transparent Loot",
      body: "Loot follows a documented system, not gut feeling. We use a personal Loot Lists for regular distribution alongside Loot Council for select high-value and strategic items, with clear expectations, consistent rules, and clear outcomes.",
      link: { to: "/raiding#loot-system", label: "Loot Summary and Changelog" },
    },
    {
      title: "Two Teams, One Standard",
      body: `${teamNames} both raid ${raidDayText} under their own raid leads, with the same expectations for preparation and attendance.`,
      link: { to: "/raiding#raid-teams", label: "Our Raid teams" },
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <ResponsiveImage baseName="splash" alt="" eager />
        </div>
        <div className="hero-content">
          <div className="d-flex align-items-center gap-3 mb-3">
            <GuildEmblem size={50} />
            <span className="utility-text text-uppercase">Dreamscythe Horde</span>
          </div>
          <h1>&lt;FTG &gt;</h1>
          <p className="lead my-4">
            Horde raiding guild on Dreamscythe running {teamCountText} 25-man
            progression teams. {CURRENT_PROGRESSION}.
          </p>
          <DiscordCTA size="lg" className="hero-discord-cta" />
        </div>
      </section>

      <section className="page-section">
        <Container>
          <div className="row g-4">
            {features.map((feature) => (
              <div className="col-md-6" key={feature.title}>
                <article className="content-card feature-card">
                  <GuildEmblem size={30} />
                  <h2 className="h3 mb-0">{feature.title}</h2>
                  <p className="mb-0">{feature.body}</p>
                  {feature.link ? <Link to={feature.link.to}>{feature.link.label}</Link> : null}
                </article>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
