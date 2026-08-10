export const guildRules = {
  title: "<FTG> Guild Rules",
  opening: {
    title: "Opening Remarks",
    paragraphs: [
      "Welcome to <FTG> - to ensure a fair, enjoyable, and organized experience for all members, we've established the following rules and responsibilities specific to members. These guidelines are designed to maintain balance, promote teamwork, and foster growth within the guild. Each section outlines specific expectations based on roles and responsibilities within the guild structure. Please review them carefully and refer back when needed.",
    ],
  },
  disclaimer: {
    title: "Disclaimer - Rules Subject to Change",
    paragraphs: [
      "Rules may change as the guild evolves and new situations arise. Members are responsible for staying familiar with the rules that apply to them, but we don't make changes silently - leadership will communicate updates.",
    ],
  },
  sections: [
    {
      title: "Conduct & Communication",
      numbered: true,
      items: [
        {
          label: "Respect Others",
          text: "Treat players with respect. Harassment, discrimination, or toxicity is not tolerated.",
        },
        {
          label: "Keep It Positive",
          text: "Avoid unnecessary negativity. Avoid sensitive topics; if conflict arises, move on.",
        },
        {
          label: "Fair Requests",
          text: "Occasional requests for gold, gear, or help are fine - don't exploit guild generosity.",
        },
        {
          label: "Follow Platform Rules",
          text: "Adhere to Blizzard's EULA and Discord's TOS at all times.",
          links: [
            {
              label: "Blizzard's EULA",
              url: "https://www.blizzard.com/en-us/legal/fba4d00f-c7e4-4883-b8b9-1b4500a402ea/blizzard-end-user-license-agreement",
            },
            { label: "Discord's TOS", url: "https://discord.com/terms" },
          ],
        },
      ],
    },
    {
      title: "Discord & Chat Etiquette",
      numbered: true,
      start: 5,
      items: [
        {
          label: "Voice Chat & Push to Talk",
          text: "Use push-to-talk when needed and mute yourself if there's background noise. During raids, keep voice comms clear. If spectating, remain silent when necessary to avoid disruptions.",
        },
        {
          label: "Excessive Yapping",
          text: "Be mindful of others' speaking time and be respectful in all discussions.",
        },
      ],
    },
    {
      title: "Gameplay & Activities",
      numbered: true,
      start: 7,
      items: [
        {
          label: "Loot Rules",
          text: "For a full overview, see Loot Systems. Ninja looting is not tolerated: this includes taking or rolling on items you're not eligible for, ignoring rules, or looting without permission (including the bank).",
          internalLink: { label: "Loot Systems", to: "/raiding#loot-system" },
        },
        {
          label: "Event Leadership",
          text: "Follow the raid leader's direction during events and give them the space to keep things moving. Questions and constructive feedback are welcome, but raise concerns privately afterward.",
        },
      ],
    },
    {
      title: "Enforcement",
      numbered: false,
      items: [
        {
          label: "Warnings",
          text: "Minor issues may result in warnings; repeated problems can lead to removal from the guild.",
        },
        {
          label: "Zero Tolerance",
          text: "Severe violations (harassment, cheating, hacking) may result in immediate expulsion.",
        },
        {
          label: "Appeals",
          text: "Members may appeal any disciplinary actions with <FTG> guild's officer team in private.",
        },
      ],
    },
  ],
  standards: {
    title: "Expectations & Standards",
    groups: [
      {
        title: "Atmosphere",
        items: [
          "Account sharing: you are always responsible for others playing on your account.",
          "Personal boundaries are to be respected - including use of ignore/block functions.",
          "Do not escalate personal conflicts publicly. When conflicts arises talk to an officer.",
          "Harassment is NOT acceptable.",
        ],
        closing:
          "If a situation impacts raid or guild function, bring it to an officer - we will handle it.",
      },
      {
        title: "Communication",
        items: [
          "Feedback, concerns, or criticism should be brought directly to an officer or guild master.",
          "Public escalation creates unnecessary complications. Contribute to solutions - not to problems.",
        ],
      },
    ],
  },
  finalNotes: [
    "These rules and guidelines are meant to create a positive and thriving guild environment. If you have questions, suggestions, or concerns, please reach out to an officer or guild master. We would love to hear your feedback.",
    "Being part of <FTG> is a shared effort. Our success depends on members who cooperate, treat each other with respect, and contribute to the community. We all can make the guild stronger, more enjoyable, and successful.",
  ],
  signoff: {
    greeting: "Happy adventuring,",
    name: "BathTissue (GM)",
  },
};
