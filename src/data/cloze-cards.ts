import type { ClozeCard } from "@/types";

export const clozeCards: ClozeCard[] = [
  // ============================================================
  // Theme 1: s1-framework (~6 cards)
  // ============================================================
  {
    id: "cloze-s1-001",
    template:
      "The s.1 justification framework was established in {{}} (1986).",
    blanks: [
      {
        answer: "R v Oakes",
        hint: "Named after a drug trafficking case",
        acceptAlternatives: ["Oakes", "oakes", "R. v. Oakes"],
      },
    ],
    category: "test",
    themeId: "s1-framework",
  },
  {
    id: "cloze-s1-002",
    template:
      "The first step of the Oakes test asks whether the government objective is {{}}.",
    blanks: [
      {
        answer: "pressing and substantial",
        hint: "Two adjectives describing the importance of the objective",
        acceptAlternatives: [
          "sufficiently important",
          "pressing & substantial",
        ],
      },
    ],
    category: "test",
    themeId: "s1-framework",
  },
  {
    id: "cloze-s1-003",
    template:
      "The three parts of the proportionality stage of the Oakes test are: (1) {{}}, (2) {{}}, and (3) {{}}.",
    blanks: [
      {
        answer: "rational connection",
        hint: "The means must be logically connected to the objective",
        acceptAlternatives: ["rationally connected"],
      },
      {
        answer: "minimal impairment",
        hint: "The means should limit rights as little as reasonably possible",
        acceptAlternatives: [
          "least drastic means",
          "minimally impairing",
          "minimal impairment of the right",
        ],
      },
      {
        answer: "proportionality between effects and objective",
        hint: "Benefits must outweigh the deleterious effects",
        acceptAlternatives: [
          "overall proportionality",
          "proportionality of effects",
          "final balancing",
          "proportionality between the deleterious and salutary effects",
        ],
      },
    ],
    category: "test",
    themeId: "s1-framework",
  },
  {
    id: "cloze-s1-004",
    template:
      "Under s.1, the party that bears the burden of justifying a Charter limitation is the {{}}.",
    blanks: [
      {
        answer: "government",
        hint: "The party that enacted the impugned law",
        acceptAlternatives: [
          "Crown",
          "state",
          "government / Crown",
          "party seeking to uphold the limitation",
        ],
      },
    ],
    category: "concept",
    themeId: "s1-framework",
  },
  {
    id: "cloze-s1-005",
    template:
      'The standard of proof under s.1 is that the limit must be "{{}} in a free and democratic society."',
    blanks: [
      {
        answer: "demonstrably justified",
        hint: "More than just 'reasonable' — must be proven",
        acceptAlternatives: ["demonstrably justifiable"],
      },
    ],
    category: "concept",
    themeId: "s1-framework",
  },
  {
    id: "cloze-s1-006",
    template:
      'For a limitation to be saved under s.1, it must first be "{{}}" — meaning it must originate from a {{}}.',
    blanks: [
      {
        answer: "prescribed by law",
        hint: "The limit cannot be arbitrary executive action",
        acceptAlternatives: ["provided by law"],
      },
      {
        answer: "law or regulation",
        hint: "A binding rule of general application",
        acceptAlternatives: [
          "statute or regulation",
          "law",
          "statute",
          "rule of law",
        ],
      },
    ],
    category: "concept",
    themeId: "s1-framework",
  },

  // ============================================================
  // Theme 2: freedoms (~6 cards)
  // ============================================================
  {
    id: "cloze-freed-001",
    template:
      "In {{}}, the SCC held that s.2(b) protects any activity that {{}}.",
    blanks: [
      {
        answer: "Irwin Toy v Quebec",
        hint: "1989 case about advertising directed at children",
        acceptAlternatives: [
          "Irwin Toy",
          "Irwin Toy v. Quebec",
          "Irwin Toy v Quebec (AG)",
        ],
      },
      {
        answer: "conveys or attempts to convey meaning",
        hint: "Broad definition — content is irrelevant",
        acceptAlternatives: [
          "conveys meaning",
          "attempts to convey meaning",
          "conveys or attempts to convey a meaning",
          "has expressive content",
        ],
      },
    ],
    category: "case",
    themeId: "freedoms",
  },
  {
    id: "cloze-freed-002",
    template:
      "The only form of expression excluded from s.2(b) protection is {{}}.",
    blanks: [
      {
        answer: "violence",
        hint: "Physical force, not merely offensive or hateful speech",
        acceptAlternatives: [
          "violent expression",
          "threats of violence",
          "physical violence",
        ],
      },
    ],
    category: "concept",
    themeId: "freedoms",
  },
  {
    id: "cloze-freed-003",
    template:
      "The three core values underlying s.2(b) freedom of expression are: (1) {{}}, (2) {{}}, and (3) {{}}.",
    blanks: [
      {
        answer: "democratic self-governance",
        hint: "Informed citizenry participating in democracy",
        acceptAlternatives: [
          "democratic discourse",
          "democracy",
          "participation in democratic governance",
        ],
      },
      {
        answer: "truth-seeking",
        hint: "Marketplace of ideas rationale",
        acceptAlternatives: [
          "truth finding",
          "pursuit of truth",
          "attaining truth",
          "search for truth",
        ],
      },
      {
        answer: "individual self-fulfillment",
        hint: "Personal autonomy and self-realization",
        acceptAlternatives: [
          "self-fulfillment",
          "individual self-realization",
          "self-realization",
          "personal fulfillment",
        ],
      },
    ],
    category: "concept",
    themeId: "freedoms",
  },
  {
    id: "cloze-freed-004",
    template:
      "The s.2(a) test for freedom of religion requires (1) a {{}} and (2) that the interference is more than {{}}.",
    blanks: [
      {
        answer: "sincere belief",
        hint: "Subjective standard — not about objective validity of the belief",
        acceptAlternatives: [
          "sincerely held belief",
          "sincere religious belief",
        ],
      },
      {
        answer: "trivial or insubstantial",
        hint: "The burden must be meaningful, not minor",
        acceptAlternatives: [
          "trivial",
          "insubstantial",
          "de minimis",
          "trivial or insignificant",
        ],
      },
    ],
    category: "test",
    themeId: "freedoms",
  },
  {
    id: "cloze-freed-005",
    template:
      "In {{}}, the SCC struck down the federal Lord's Day Act, holding that the state cannot use its power to {{}}.",
    blanks: [
      {
        answer: "R v Big M Drug Mart",
        hint: "1985 Alberta case about Sunday closing laws",
        acceptAlternatives: [
          "Big M Drug Mart",
          "R. v. Big M Drug Mart",
          "Big M",
        ],
      },
      {
        answer: "compel religious observance",
        hint: "The purpose was to enforce a Christian sabbath",
        acceptAlternatives: [
          "impose religious observance",
          "compel observance of a religious practice",
          "enforce religious conformity",
        ],
      },
    ],
    category: "case",
    themeId: "freedoms",
  },
  {
    id: "cloze-freed-006",
    template:
      "Under the Irwin Toy framework, if the government purpose is to {{}} expression, the infringement of s.2(b) is made out without further analysis.",
    blanks: [
      {
        answer: "restrict the content of",
        hint: "Purpose-based restriction vs effects-based",
        acceptAlternatives: [
          "restrict content",
          "control the content of",
          "target the content of",
          "restrict the meaning of",
        ],
      },
    ],
    category: "test",
    themeId: "freedoms",
  },

  // ============================================================
  // Theme 3: s33-override (~4 cards)
  // ============================================================
  {
    id: "cloze-s33-001",
    template:
      "Section 33 allows legislatures to override sections {{}}, {{}}, and {{}} of the Charter.",
    blanks: [
      {
        answer: "2",
        hint: "Fundamental freedoms",
        acceptAlternatives: ["s.2", "section 2"],
      },
      {
        answer: "7-14",
        hint: "Legal rights",
        acceptAlternatives: ["s.7 to s.14", "7 to 14", "ss. 7-14"],
      },
      {
        answer: "15",
        hint: "Equality rights",
        acceptAlternatives: ["s.15", "section 15"],
      },
    ],
    category: "section",
    themeId: "s33-override",
  },
  {
    id: "cloze-s33-002",
    template:
      "A notwithstanding clause declaration automatically expires after {{}} years and must be {{}} to remain in effect.",
    blanks: [
      {
        answer: "five",
        hint: "Same as the maximum length of a parliamentary term",
        acceptAlternatives: ["5", "five (5)"],
      },
      {
        answer: "re-enacted",
        hint: "The legislature must affirmatively choose to continue the override",
        acceptAlternatives: ["renewed", "re-declared", "re-passed"],
      },
    ],
    category: "section",
    themeId: "s33-override",
  },
  {
    id: "cloze-s33-003",
    template:
      "In {{}}, the SCC held that s.33 only requires the legislature to {{}} — no substantive justification is needed.",
    blanks: [
      {
        answer: "Ford v Quebec",
        hint: "1988 Quebec sign-law case",
        acceptAlternatives: [
          "Ford v. Quebec",
          "Ford v Quebec (AG)",
          "Ford",
        ],
      },
      {
        answer: "expressly declare it is invoking s.33",
        hint: "A formal / procedural requirement only",
        acceptAlternatives: [
          "expressly declare",
          "make an express declaration",
          "use standard form of words",
          "expressly declare that the Act operates notwithstanding the Charter",
        ],
      },
    ],
    category: "case",
    themeId: "s33-override",
  },
  {
    id: "cloze-s33-004",
    template:
      "Quebec's Bill 21 uses s.33 to prohibit {{}} from wearing {{}} while exercising their functions.",
    blanks: [
      {
        answer: "public servants in positions of authority",
        hint: "Teachers, police, judges, etc.",
        acceptAlternatives: [
          "state employees in authority",
          "certain public sector workers",
          "persons in positions of authority",
        ],
      },
      {
        answer: "religious symbols",
        hint: "Hijabs, turbans, crosses, kippas, etc.",
        acceptAlternatives: [
          "religious symbols or clothing",
          "religious signs",
        ],
      },
    ],
    category: "concept",
    themeId: "s33-override",
  },

  // ============================================================
  // Theme 4: indigenous (~5 cards)
  // ============================================================
  {
    id: "cloze-indig-001",
    template:
      "In {{}}, the SCC established the test for justifying infringements of Aboriginal rights under s.35, requiring (1) a {{}} and (2) consistency with the {{}}.",
    blanks: [
      {
        answer: "R v Sparrow",
        hint: "1990 fishing rights case from BC",
        acceptAlternatives: ["Sparrow", "R. v. Sparrow"],
      },
      {
        answer: "valid legislative objective",
        hint: "The Crown must show a compelling and substantial purpose",
        acceptAlternatives: [
          "compelling and substantial objective",
          "valid governmental objective",
        ],
      },
      {
        answer: "honour of the Crown",
        hint: "Fiduciary obligation toward Indigenous peoples",
        acceptAlternatives: [
          "Crown's fiduciary duty",
          "fiduciary relationship",
          "honour of the Crown / fiduciary duty",
        ],
      },
    ],
    category: "case",
    themeId: "indigenous",
  },
  {
    id: "cloze-indig-002",
    template:
      "In {{}}, the SCC held that the duty to consult exists on a spectrum from {{}} for minor impacts to {{}} for serious impacts on established rights.",
    blanks: [
      {
        answer: "Haida Nation v BC",
        hint: "2004 forestry and tree farm licence case",
        acceptAlternatives: [
          "Haida Nation",
          "Haida Nation v. British Columbia",
          "Haida",
        ],
      },
      {
        answer: "notice and disclosure",
        hint: "Minimal end of the spectrum",
        acceptAlternatives: [
          "giving notice",
          "notice",
          "mere notice and information sharing",
        ],
      },
      {
        answer: "deep consultation and accommodation",
        hint: "Full end of the spectrum — may require changes to the proposed action",
        acceptAlternatives: [
          "deep consultation",
          "full consultation and possibly accommodation",
          "deep consultation with accommodation",
        ],
      },
    ],
    category: "case",
    themeId: "indigenous",
  },
  {
    id: "cloze-indig-003",
    template:
      'The word "existing" in s.35(1) means Aboriginal rights that are {{}}, not rights that are {{}}.',
    blanks: [
      {
        answer: "unextinguished",
        hint: "Still in force at the time of the Constitution Act, 1982",
        acceptAlternatives: [
          "not extinguished",
          "unextinguished as of 1982",
        ],
      },
      {
        answer: "frozen in their pre-contact form",
        hint: "Rights can evolve and are not fixed at a historical moment",
        acceptAlternatives: [
          "frozen",
          "frozen in time",
          "static",
          "frozen at a particular historical moment",
        ],
      },
    ],
    category: "concept",
    themeId: "indigenous",
  },
  {
    id: "cloze-indig-004",
    template:
      "Section 25 of the Charter provides that Charter rights shall not be construed so as to {{}} any Aboriginal, treaty, or other rights of the Indigenous peoples of Canada.",
    blanks: [
      {
        answer: "abrogate or derogate from",
        hint: "Two verbs meaning to diminish or nullify",
        acceptAlternatives: [
          "abrogate or derogate",
          "diminish",
          "abrogate",
          "derogate from",
        ],
      },
    ],
    category: "section",
    themeId: "indigenous",
  },
  {
    id: "cloze-indig-005",
    template:
      "In Dickson v Vuntut Gwitchin, the SCC framework for s.25 involves four steps: (1) identify the {{}} right; (2) identify the {{}} right; (3) determine if there is an irreconcilable {{}} between them; (4) if so, s.25 {{}} the collective right.",
    blanks: [
      {
        answer: "Charter",
        hint: "The individual right being claimed",
        acceptAlternatives: ["individual Charter", "individual"],
      },
      {
        answer: "Aboriginal or treaty",
        hint: "The collective/Indigenous right at issue",
        acceptAlternatives: [
          "Indigenous",
          "collective Indigenous",
          "s.25 protected",
          "Aboriginal",
        ],
      },
      {
        answer: "conflict",
        hint: "A genuine clash between the two sets of rights",
        acceptAlternatives: [
          "tension",
          "conflict or tension",
          "irreconcilable conflict",
        ],
      },
      {
        answer: "shields",
        hint: "The collective right prevails — a protective function",
        acceptAlternatives: ["protects", "preserves", "insulates"],
      },
    ],
    category: "case",
    themeId: "indigenous",
  },

  // ============================================================
  // Theme 5: equality (~5 cards)
  // ============================================================
  {
    id: "cloze-eq-001",
    template:
      "In {{}}, the SCC established the two-step test for s.15(1): (1) does the law create a {{}} on an enumerated or analogous ground? (2) does it impose a burden or deny a benefit in a manner that has the effect of {{}}?",
    blanks: [
      {
        answer: "Andrews v Law Society of BC",
        hint: "1989 case about citizenship requirement for lawyers",
        acceptAlternatives: [
          "Andrews",
          "Andrews v. Law Society of British Columbia",
          "Andrews v Law Society",
        ],
      },
      {
        answer: "distinction",
        hint: "A difference in treatment",
        acceptAlternatives: [
          "distinction based on an enumerated or analogous ground",
          "differential treatment",
        ],
      },
      {
        answer: "reinforcing disadvantage or perpetuating prejudice",
        hint: "Substantive inequality — not just formal difference",
        acceptAlternatives: [
          "reinforcing, perpetuating, or exacerbating disadvantage",
          "perpetuating disadvantage",
          "creating substantive inequality",
        ],
      },
    ],
    category: "case",
    themeId: "equality",
  },
  {
    id: "cloze-eq-002",
    template:
      "{{}} equality focuses on identical treatment regardless of circumstance, while {{}} equality examines real-world impact and systemic disadvantage.",
    blanks: [
      {
        answer: "Formal",
        hint: "Treating everyone the same",
        acceptAlternatives: ["formal"],
      },
      {
        answer: "Substantive",
        hint: "The approach the SCC actually uses under s.15",
        acceptAlternatives: ["substantive"],
      },
    ],
    category: "concept",
    themeId: "equality",
  },
  {
    id: "cloze-eq-003",
    template:
      "The enumerated grounds in s.15(1) are: race, national or ethnic origin, colour, religion, sex, age, and {{}}.",
    blanks: [
      {
        answer: "mental or physical disability",
        hint: "The last enumerated ground listed in the text",
        acceptAlternatives: [
          "disability",
          "mental and physical disability",
          "mental or physical disability",
        ],
      },
    ],
    category: "section",
    themeId: "equality",
  },
  {
    id: "cloze-eq-004",
    template:
      "An analogous ground is a personal characteristic that is {{}} or {{}} and is the basis for decisions that do not correspond to actual merit or circumstances.",
    blanks: [
      {
        answer: "immutable",
        hint: "Cannot be changed, like race",
        acceptAlternatives: ["unchangeable"],
      },
      {
        answer: "constructively immutable",
        hint: "Changeable only at unacceptable personal cost, like religion",
        acceptAlternatives: [
          "changeable only at unacceptable cost",
          "effectively immutable",
        ],
      },
    ],
    category: "concept",
    themeId: "equality",
  },
  {
    id: "cloze-eq-005",
    template:
      'In {{}}, the SCC remedied the exclusion of sexual orientation from Alberta\'s human rights legislation by {{}} the words "{{}}" into the statute.',
    blanks: [
      {
        answer: "Vriend v Alberta",
        hint: "1998 case about a teacher fired for being gay",
        acceptAlternatives: ["Vriend", "Vriend v. Alberta"],
      },
      {
        answer: "reading in",
        hint: "A remedy that adds words to a statute rather than striking it down",
        acceptAlternatives: ["reading-in", "reading into"],
      },
      {
        answer: "sexual orientation",
        hint: "The analogous ground at issue",
      },
    ],
    category: "case",
    themeId: "equality",
  },

  // ============================================================
  // Theme 6: privacy-police (~6 cards)
  // ============================================================
  {
    id: "cloze-priv-001",
    template:
      "In {{}}, the SCC established that s.8 protects a {{}} expectation of privacy, and a search must be authorized by {{}}, based on {{}}.",
    blanks: [
      {
        answer: "Hunter v Southam",
        hint: "1984 case about Combines Investigation Act searches",
        acceptAlternatives: [
          "Hunter v. Southam",
          "Hunter v Southam Inc",
          "Hunter",
        ],
      },
      {
        answer: "reasonable",
        hint: "An objective standard — not merely subjective",
        acceptAlternatives: ["objectively reasonable"],
      },
      {
        answer: "prior judicial authorization",
        hint: "A warrant requirement — before the search occurs",
        acceptAlternatives: ["a warrant", "prior authorization", "a judge"],
      },
      {
        answer: "reasonable and probable grounds",
        hint: "The standard for issuing the authorization",
        acceptAlternatives: [
          "reasonable grounds",
          "probable cause",
          "reasonable and probable grounds to believe an offence has been committed",
        ],
      },
    ],
    category: "case",
    themeId: "privacy-police",
  },
  {
    id: "cloze-priv-002",
    template:
      "In R v Grant, the SCC held that psychological detention under s.9 occurs when a reasonable person in the individual's circumstances would conclude that they {{}}.",
    blanks: [
      {
        answer: "had no choice but to comply",
        hint: "The key question is whether a reasonable person would feel free to leave",
        acceptAlternatives: [
          "were not free to leave",
          "had no choice but to comply with the police direction or demand",
          "were obliged to comply",
        ],
      },
    ],
    category: "case",
    themeId: "privacy-police",
  },
  {
    id: "cloze-priv-003",
    template:
      "Under R v Grant, the three factors for excluding evidence under s.24(2) are: (1) the seriousness of the {{}}, (2) the impact on the {{}}, and (3) society's interest in {{}}.",
    blanks: [
      {
        answer: "Charter-infringing state conduct",
        hint: "How egregious was the police misconduct?",
        acceptAlternatives: [
          "state conduct",
          "police misconduct",
          "Charter breach",
          "Charter-infringing conduct",
        ],
      },
      {
        answer: "Charter-protected interests of the accused",
        hint: "How deeply did the breach intrude on the individual's rights?",
        acceptAlternatives: [
          "accused's Charter-protected interests",
          "accused's rights",
          "impact on the accused",
        ],
      },
      {
        answer: "adjudication on the merits",
        hint: "Would excluding the evidence hurt the truth-seeking function of the trial?",
        acceptAlternatives: [
          "adjudicating the case on its merits",
          "the trial on the merits",
          "an adjudication on the merits",
        ],
      },
    ],
    category: "test",
    themeId: "privacy-police",
  },
  {
    id: "cloze-priv-004",
    template:
      "In {{}}, the SCC recognized that s.8 protects a right to {{}} in relation to subscriber information held by ISPs.",
    blanks: [
      {
        answer: "R v Spencer",
        hint: "2014 case about police requesting IP subscriber info from an ISP",
        acceptAlternatives: ["Spencer", "R. v. Spencer"],
      },
      {
        answer: "informational privacy as anonymity",
        hint: "The ability to act online without being identified",
        acceptAlternatives: [
          "anonymity",
          "online anonymity",
          "privacy in the form of anonymity",
          "informational privacy",
        ],
      },
    ],
    category: "case",
    themeId: "privacy-police",
  },
  {
    id: "cloze-priv-005",
    template:
      "In R v Patrick, the SCC held that garbage placed at the {{}} for collection is {{}} and thus attracts no reasonable expectation of privacy.",
    blanks: [
      {
        answer: "edge of one's property",
        hint: "At the boundary line, accessible to the public",
        acceptAlternatives: [
          "edge of the property",
          "curb",
          "property line",
          "perimeter of the property",
        ],
      },
      {
        answer: "abandoned",
        hint: "The individual has given up control over the items",
        acceptAlternatives: [
          "abandoned property",
          "considered abandoned",
        ],
      },
    ],
    category: "case",
    themeId: "privacy-police",
  },
  {
    id: "cloze-priv-006",
    template:
      "In {{}}, the SCC held that the {{}} of an electronic message retains a reasonable expectation of privacy in that message, even though it is stored on the recipient's device.",
    blanks: [
      {
        answer: "R v Marakah",
        hint: "2017 case about text messages found on a co-accused's phone",
        acceptAlternatives: ["Marakah", "R. v. Marakah"],
      },
      {
        answer: "sender",
        hint: "The person who originally transmitted the message",
        acceptAlternatives: ["author", "originator"],
      },
    ],
    category: "case",
    themeId: "privacy-police",
  },
];
