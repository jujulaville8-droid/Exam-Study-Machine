import type { Scenario } from "@/types";

export const scenarios: Scenario[] = [
  // ============================================================
  // THEME 1: The Section 1 Framework (3 scenarios)
  // ============================================================
  {
    id: "s1-framework-1",
    title: "Government Justification for Advertising Restrictions",
    difficulty: "beginner",
    description:
      "The federal government passes a law banning all tobacco advertising, including advertising at point of sale in convenience stores and gas stations. A major tobacco company challenges the ban, arguing it violates their s.2(b) freedom of expression under the Charter. The company contends that commercial advertising is a protected form of expression and that a total ban is excessive. The government responds that the ban is a reasonable limit under s.1 of the Charter, citing public health concerns about tobacco-related illness and death. As a constitutional advisor, walk through the full s.1 analysis and determine whether the government can justify this limitation on expression.",
    weekReference: "Week 2",
    relevantSections: ["s1", "s2b"],
    expectedKeywords: [
      { term: "section 1", category: "section", weight: 5, sectionId: "s1" },
      { term: "section 2(b)", category: "section", weight: 4, sectionId: "s2b" },
      { term: "Oakes test", category: "test", weight: 5 },
      { term: "prescribed by law", category: "concept", weight: 3 },
      { term: "pressing and substantial", category: "concept", weight: 4 },
      { term: "rational connection", category: "test", weight: 4 },
      { term: "minimal impairment", category: "test", weight: 4 },
      { term: "proportionality", category: "concept", weight: 3 },
      { term: "demonstrably justified", category: "concept", weight: 3 },
      { term: "free and democratic society", category: "concept", weight: 2 },
      { term: "R v Oakes", category: "case", weight: 5 },
      { term: "Irwin Toys", category: "case", weight: 3 },
    ],
    modelAnswer:
      "This scenario requires a full s.1 Charter analysis. First, it is important to establish that Charter rights are not absolute. Section 1 expressly states that rights are subject to 'such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society.' The government bears the burden of justifying any limitation on a Charter right.\n\nThe tobacco company's s.2(b) freedom of expression is infringed, as commercial advertising is protected expression under the broad interpretation established in Irwin Toys v Quebec. The question then moves to whether the government can justify this infringement under s.1 using the framework from R v Oakes.\n\nThe Oakes test requires the government to satisfy several criteria. First, the limit must be prescribed by law — a federal statute satisfies this. Second, the government must show a pressing and substantial objective. Reducing tobacco-related illness and death is clearly pressing and substantial. Third, the government must demonstrate proportionality through three sub-steps: (1) rational connection — banning advertising logically reduces tobacco consumption; (2) minimal impairment — this is where the government faces its greatest challenge, because a total ban, including point-of-sale advertising, may go further than necessary when less restrictive alternatives exist (such as restricting advertising to adults-only venues); and (3) proportionality of effects — the benefits of reduced tobacco harm must outweigh the severity of the expression limitation.\n\nA counterargument is that the government could achieve its public health objectives through partial restrictions rather than a complete ban. If the court finds that less restrictive measures could achieve the same objective, the total ban may fail at the minimal impairment stage. However, if the government provides strong evidence that partial bans have proven ineffective, the total ban could survive. The key insight is that the government cannot simply assert justification — it must provide evidence at each stage of the Oakes analysis.",
  },
  {
    id: "s1-framework-2",
    title: "COVID-Era Restrictions on Protest",
    difficulty: "intermediate",
    description:
      "During a public health emergency, a provincial government issues an order banning all outdoor gatherings of more than 10 people. The order is framed as a general public health measure, but its practical effect is to prevent public protests and demonstrations. Civil liberties organizations challenge the order, arguing it violates s.2(b) freedom of expression and s.2(c) freedom of peaceful assembly. The government argues the restriction is a reasonable limit under s.1, citing the need to prevent virus transmission. Analyze the constitutional validity of this restriction, paying particular attention to the government's evidentiary burden and whether less restrictive alternatives existed.",
    weekReference: "Week 2",
    relevantSections: ["s1", "s2b", "s2c"],
    expectedKeywords: [
      { term: "section 1", category: "section", weight: 5, sectionId: "s1" },
      { term: "section 2(b)", category: "section", weight: 4, sectionId: "s2b" },
      { term: "section 2(c)", category: "section", weight: 4, sectionId: "s2c" },
      { term: "Oakes test", category: "test", weight: 5 },
      { term: "minimal impairment", category: "test", weight: 5 },
      { term: "pressing and substantial objective", category: "concept", weight: 4 },
      { term: "proportionality", category: "concept", weight: 3 },
      { term: "prescribed by law", category: "concept", weight: 3 },
      { term: "demonstrably justified", category: "concept", weight: 3 },
      { term: "rational connection", category: "test", weight: 3 },
      { term: "evidentiary burden", category: "concept", weight: 4 },
      { term: "R v Oakes", category: "case", weight: 4 },
    ],
    modelAnswer:
      "The outdoor gathering ban engages both s.2(b) freedom of expression and s.2(c) freedom of peaceful assembly. Public protest is at the core of both protections, as it conveys meaning and constitutes collective assembly for political purposes. The infringement is clear: a blanket ban on gatherings over 10 people effectively eliminates the ability to protest.\n\nUnder s.1, the government must satisfy the Oakes test. The restriction is prescribed by law through the provincial order. The objective — preventing virus transmission during a pandemic — is undeniably pressing and substantial. There is also a rational connection between limiting gatherings and reducing transmission.\n\nHowever, the critical issue is minimal impairment. The government cannot simply assert that a blanket ban is necessary; it bears a heavy evidentiary burden to demonstrate that less restrictive alternatives would not achieve the same public health objective. Could the government have permitted outdoor protests with masking requirements, physical distancing, or capacity limits rather than an outright ban? The evidence matters enormously here. If public health data shows that outdoor transmission risk is significantly lower than indoor transmission, a blanket outdoor ban may be overbroad.\n\nOn proportionality of effects, the court must weigh the severity of suppressing core political expression and assembly against the public health benefits. A counterargument is that during a genuine emergency, courts should afford the government greater deference. However, even in emergencies, the government cannot bypass its evidentiary obligations. The more a restriction targets core democratic freedoms, the stronger the justification must be. A blanket ban that makes no accommodation for safe outdoor protest likely fails minimal impairment, because the government has not demonstrated that less restrictive measures were inadequate. The government must show, with evidence, why alternatives were insufficient — not merely claim that a total ban was convenient.",
  },
  {
    id: "s1-framework-3",
    title: "Election Spending Limits",
    difficulty: "advanced",
    description:
      "Parliament enacts legislation imposing strict monetary limits on third-party political advertising during federal election campaigns. The limits cap spending at $150,000 nationally and $3,000 per riding. A wealthy advocacy group that wants to run a national advertising campaign about climate policy during the election argues these limits violate their s.2(b) freedom of expression by preventing them from meaningfully participating in political discourse. The government contends the spending limits are necessary to ensure electoral fairness, prevent wealthy voices from dominating public debate, and maintain public confidence in the democratic process. Analyze this challenge with reference to the tension between expressive freedom and electoral fairness.",
    weekReference: "Week 2",
    relevantSections: ["s1", "s2b"],
    expectedKeywords: [
      { term: "section 1", category: "section", weight: 5, sectionId: "s1" },
      { term: "section 2(b)", category: "section", weight: 4, sectionId: "s2b" },
      { term: "Oakes test", category: "test", weight: 5 },
      { term: "Harper v Canada", category: "case", weight: 5 },
      { term: "electoral fairness", category: "concept", weight: 5 },
      { term: "reasonable limits", category: "concept", weight: 3 },
      { term: "demonstrably justified", category: "concept", weight: 3 },
      { term: "minimal impairment", category: "test", weight: 4 },
      { term: "pressing and substantial", category: "concept", weight: 4 },
      { term: "Irwin Toys", category: "case", weight: 2 },
      { term: "proportionality of effects", category: "test", weight: 4 },
      { term: "rational connection", category: "test", weight: 3 },
    ],
    modelAnswer:
      "This scenario directly engages the reasoning in Harper v Canada (2004), where the Supreme Court upheld third-party election spending limits. The spending limits infringe s.2(b) freedom of expression — spending money on political advertising is a form of political expression, which lies at the core of s.2(b) protection. The question is whether the infringement is justified under s.1.\n\nThe government's objective — ensuring electoral fairness and preventing wealthy interests from dominating democratic discourse — is pressing and substantial. This reflects an egalitarian model of democratic participation, where the quality of public debate depends on a diversity of voices rather than the depth of a few pocketbooks. The rational connection is clear: limiting spending prevents any single actor from saturating the airwaves.\n\nThe most contested issue is minimal impairment. The advocacy group would argue that the spending caps are so low they prevent meaningful participation entirely — $150,000 nationally cannot fund a serious advertising campaign. However, the court in Harper accepted that Parliament is entitled to choose an egalitarian model of elections over a libertarian one, and that some restriction on spending is necessary to give effect to that choice. The court afforded Parliament a measure of deference in setting the specific dollar amounts, recognizing that drawing the precise line involves policy judgments.\n\nOn proportionality of effects, the court must balance the restriction on individual expression against the broader democratic benefits. A strong counterargument is that limiting third-party spending actually enhances the s.2(b) rights of less wealthy citizens by ensuring their voices are not drowned out. This illustrates a critical insight about the s.1 framework: the balancing exercise sometimes involves competing Charter values on both sides. The government is not merely restricting rights — it is balancing one vision of expressive freedom against another. This is why the court moves from the rights stage to s.1 justification: rights analysis alone cannot resolve conflicts between competing democratic values.",
  },

  // ============================================================
  // THEME 2: Fundamental Freedoms & Their Protection (3 scenarios)
  // ============================================================
  {
    id: "freedoms-1",
    title: "Sunday Closing Laws",
    difficulty: "beginner",
    description:
      "A provincial legislature passes the Retail Business Holidays Act, which requires all retail businesses to close on Sundays. The legislation is framed as a secular 'day of rest' policy intended to promote family time and worker well-being. A non-Christian business owner who observes a different Sabbath day argues that the law infringes their s.2(a) freedom of religion and their s.2(b) freedom of expression by compelling them to observe what is effectively a Christian day of rest. The business owner contends that regardless of the stated secular purpose, the law's origin and practical effect impose a religious norm. Analyze whether this law infringes s.2(a) and whether the purpose or effect of the legislation is determinative.",
    weekReference: "Week 3",
    relevantSections: ["s2a", "s2b", "s1"],
    expectedKeywords: [
      { term: "section 2(a)", category: "section", weight: 5, sectionId: "s2a" },
      { term: "section 2(b)", category: "section", weight: 3, sectionId: "s2b" },
      { term: "R v Big M Drug Mart", category: "case", weight: 5 },
      { term: "freedom of religion", category: "concept", weight: 5 },
      { term: "purpose vs effect", category: "concept", weight: 4 },
      { term: "religious compulsion", category: "concept", weight: 4 },
      { term: "section 1", category: "section", weight: 3, sectionId: "s1" },
      { term: "reasonable limits", category: "concept", weight: 2 },
      { term: "broad interpretation", category: "concept", weight: 3 },
    ],
    modelAnswer:
      "This scenario is governed by the landmark decision in R v Big M Drug Mart (1985), which struck down the federal Lord's Day Act because its purpose was to compel observance of the Christian Sabbath. The key analytical question is whether the purpose or the effect of the law determines its constitutionality under s.2(a).\n\nFreedom of religion under s.2(a) is broadly interpreted. It protects not only the right to hold and manifest religious beliefs, but also the right to be free from religious compulsion by the state. The state cannot, through legislation, coerce individuals into observing religious practices — even indirectly. In Big M, the Court held that if the purpose of a law is to enforce a religious norm, the law is unconstitutional regardless of whether it can be reframed in secular terms.\n\nThe business owner's argument has force. Even though the province frames the law as a secular 'day of rest,' the historical origin of Sunday closing laws is explicitly Christian. If the court finds that the law's true purpose is to enforce observance of the Christian Sabbath, it will be struck down following Big M. A counterargument is that if the law has a genuinely secular purpose — promoting worker well-being and a common pause day — it might survive. The Supreme Court in Edwards Books (1986) accepted that a secular purpose could save a Sunday closing law, even if it had a disproportionate effect on non-Christian religious observers.\n\nHowever, even under a secular purpose, the law may still have a discriminatory effect on non-Christian business owners who observe different Sabbath days, placing them at a competitive disadvantage. This effect-based analysis could still ground an infringement of s.2(a). If the infringement is established, the government would need to justify the law under s.1, which requires demonstrating that the limit is reasonable and proportionate.",
  },
  {
    id: "freedoms-2",
    title: "Commercial Expression and Children",
    difficulty: "intermediate",
    description:
      "The province of Quebec enacts legislation that prohibits all commercial advertising directed at children under the age of 13. The ban covers television, print, online, and in-store advertising. A major toy company challenges the ban, arguing that it violates their s.2(b) freedom of expression. The company contends that commercial advertising conveys meaning and information to consumers, and that a total ban on advertising to an entire demographic is excessive. Quebec argues the ban protects a vulnerable group — children who lack the cognitive ability to critically evaluate advertising messages — and that the restriction is justified under s.1. Analyze whether commercial expression is protected under s.2(b) and whether the ban is justified.",
    weekReference: "Week 3",
    relevantSections: ["s2b", "s1"],
    expectedKeywords: [
      { term: "section 2(b)", category: "section", weight: 5, sectionId: "s2b" },
      { term: "section 1", category: "section", weight: 5, sectionId: "s1" },
      { term: "Irwin Toys v Quebec", category: "case", weight: 5 },
      { term: "commercial expression", category: "concept", weight: 5 },
      { term: "broad interpretation", category: "concept", weight: 4 },
      { term: "context", category: "concept", weight: 3 },
      { term: "minimal impairment", category: "test", weight: 4 },
      { term: "Oakes test", category: "test", weight: 4 },
      { term: "vulnerable groups", category: "concept", weight: 4 },
      { term: "demonstrably justified", category: "concept", weight: 3 },
      { term: "rational connection", category: "test", weight: 3 },
    ],
    modelAnswer:
      "This scenario is directly addressed by Irwin Toys v Quebec (1989), where the Supreme Court upheld Quebec's ban on advertising directed at children under 13. The starting point is that s.2(b) freedom of expression is interpreted very broadly — it protects any activity that conveys or attempts to convey meaning, including commercial advertising. This broad interpretation means that the toy company's advertising is protected expression, and the ban infringes s.2(b).\n\nHowever, this is precisely why courts move quickly from the rights stage to s.1 justification. Because expression is defined so broadly, many forms of expression will be caught — but that does not mean every restriction is unconstitutional. The real analytical work happens under s.1.\n\nApplying the Oakes test, the objective of protecting children from manipulative advertising is pressing and substantial. Children under 13 are a particularly vulnerable group who lack the cognitive capacity to distinguish advertising from information or to critically evaluate persuasive messaging. The rational connection is straightforward: banning advertising directed at children removes their exposure to such messaging. On minimal impairment, the court in Irwin Toys recognized that a total ban might seem broad, but given the difficulty of designing partial restrictions that would effectively protect young children, the legislature was entitled to choose a comprehensive approach. Context is crucial here — the vulnerability of the audience justifies a more restrictive measure than might be acceptable for adult-directed expression.\n\nA counterargument is that informational advertising (such as educational toy promotion) differs from manipulative advertising and should be permitted. However, the difficulty of drawing such distinctions for a child audience supports the legislature's choice of a blanket ban. The proportionality of effects favours the government: the benefit of protecting children from exploitation outweighs the commercial cost to advertisers. This scenario illustrates that the importance of context in s.1 analysis cannot be overstated — who the audience is shapes what counts as a reasonable limit.",
  },
  {
    id: "freedoms-3",
    title: "Religious Accommodation and Photo Requirements",
    difficulty: "advanced",
    description:
      "A provincial government requires all applicants for a driver's licence to have their photograph taken with their face fully uncovered and without any head covering. Members of a religious community whose faith requires them to wear head coverings at all times in public challenge this requirement as a violation of their s.2(a) freedom of religion. They argue the requirement forces them to choose between practising their faith and obtaining a licence, which is essential for daily life in rural areas. The government argues the photo requirement is necessary for accurate identification and public safety, and invokes s.1 to justify the limit. Analyze the constitutionality of this requirement, considering the competing interests at stake.",
    weekReference: "Week 3",
    relevantSections: ["s2a", "s1"],
    expectedKeywords: [
      { term: "section 2(a)", category: "section", weight: 5, sectionId: "s2a" },
      { term: "section 1", category: "section", weight: 5, sectionId: "s1" },
      { term: "Alberta v Hutterian Brethren", category: "case", weight: 5 },
      { term: "freedom of religion", category: "concept", weight: 4 },
      { term: "Oakes test", category: "test", weight: 4 },
      { term: "minimal impairment", category: "test", weight: 5 },
      { term: "proportionality of effects", category: "test", weight: 5 },
      { term: "pressing and substantial", category: "concept", weight: 3 },
      { term: "sincere belief", category: "concept", weight: 4 },
      { term: "context", category: "concept", weight: 3 },
      { term: "rational connection", category: "test", weight: 2 },
    ],
    modelAnswer:
      "This scenario closely mirrors Alberta v Hutterian Brethren (2009), where the Supreme Court upheld a universal photo requirement for driver's licences despite its impact on Hutterian Brethren who believed photographs violated the Second Commandment. The analysis begins with s.2(a): freedom of religion protects practices grounded in sincere religious belief. The claimants need not prove the belief is doctrinally mandatory — only that it is sincerely held and has a nexus to religion. The photo requirement clearly burdens their religious practice by forcing a choice between faith and a government benefit.\n\nMoving to s.1, the government's objective — maintaining the integrity of the driver's licence system as an identification tool and preventing identity fraud — is pressing and substantial. There is a rational connection between universal photo requirements and accurate identification. The contested issues are minimal impairment and proportionality of effects.\n\nOn minimal impairment, the claimants would argue that exemptions could be granted without undermining the system — the number of affected individuals is small, and alternative identification methods exist. The government counters that any exemption creates a gap in the identification system that could be exploited. The court in Hutterian Brethren accepted that the government need not demonstrate that an exemption would definitely cause harm, only that it could reasonably conclude that a universal requirement better serves its objective.\n\nThe proportionality of effects is where this case is most difficult. The impact on the religious community is severe — effectively excluding them from driving, which in rural areas is essential. However, the majority in Hutterian Brethren held that the systemic benefits of a universal photo database outweighed the impact on a small community. A strong dissent argued this analysis undervalued the religious freedom at stake and that the small number of affected individuals meant an exemption would have negligible impact on the system. This tension reveals the context-dependent nature of s.1 analysis — proportionality requires courts to make difficult value judgments about which costs a free and democratic society should tolerate.",
  },

  // ============================================================
  // THEME 3: Section 33 — Notwithstanding Clause (3 scenarios)
  // ============================================================
  {
    id: "s33-1",
    title: "Understanding the Scope of Section 33",
    difficulty: "beginner",
    description:
      "A provincial legislature passes the Labour Relations Reform Act, which severely restricts public sector workers' ability to strike and imposes binding arbitration in all labour disputes. Anticipating a Charter challenge, the legislature includes an express declaration invoking s.33 of the Charter to shield the law from judicial review. The declaration states that the Act shall operate notwithstanding sections 2 and 7 through 15 of the Charter. A public sector union challenges both the substance of the law and the validity of the s.33 declaration, arguing that the notwithstanding clause cannot be used to override all Charter rights and that its use here is an abuse of democratic power. Analyze the scope and limits of s.33.",
    weekReference: "Week 4",
    relevantSections: ["s33", "s2"],
    expectedKeywords: [
      { term: "section 33", category: "section", weight: 5, sectionId: "s33" },
      { term: "notwithstanding clause", category: "concept", weight: 5 },
      { term: "five-year sunset", category: "concept", weight: 5 },
      { term: "express declaration", category: "concept", weight: 4 },
      { term: "section 2", category: "section", weight: 3, sectionId: "s2" },
      { term: "sections 7-15", category: "section", weight: 3 },
      { term: "democratic rights", category: "concept", weight: 4 },
      { term: "democratic accountability", category: "concept", weight: 4 },
      { term: "transparency", category: "concept", weight: 3 },
      { term: "Ford v Quebec", category: "case", weight: 5 },
    ],
    modelAnswer:
      "Section 33 of the Charter allows a provincial legislature or Parliament to declare that legislation shall operate notwithstanding certain Charter provisions. However, s.33 has a carefully limited scope. It can only be invoked to override rights under s.2 (fundamental freedoms) and ss.7 through 15 (legal and equality rights). It cannot override democratic rights (ss.3-5), mobility rights (s.6), or language rights (ss.16-23). This means the legislature's declaration covering ss.2 and 7-15 falls within the permissible scope of s.33.\n\nThe formal requirements were clarified in Ford v Quebec (1988). The legislature must include an express declaration in the legislation that specifically invokes s.33. The declaration need not identify which specific Charter rights are being overridden, though the legislation here does specify them. Crucially, any s.33 declaration automatically expires after five years — the five-year sunset clause. This means the legislature must re-enact the declaration after each five-year period, forcing a renewed public debate about whether the override remains justified.\n\nThe union's argument that s.33 is an 'abuse of democratic power' raises an important but legally distinct point. The five-year sunset and the requirement for an express declaration are designed precisely to promote transparency and democratic accountability. The legislature must publicly declare that it is overriding Charter rights, which subjects it to political scrutiny and electoral consequences. The renewal requirement ensures the override cannot persist indefinitely without democratic endorsement.\n\nA counterargument is that s.33 undermines the purpose of having constitutionally entrenched rights. However, the framers of the Charter deliberately included s.33 as a compromise to maintain a dialogue between legislatures and courts. The clause reflects a view that in a democracy, elected representatives should retain the power to override judicial interpretations of rights — but only temporarily, transparently, and with democratic accountability.",
  },
  {
    id: "s33-2",
    title: "Ford Government and Election Advertising",
    difficulty: "intermediate",
    description:
      "The Ontario government passes legislation that reduces the number of Toronto city council wards from 47 to 25 in the middle of a municipal election campaign. When a court strikes the legislation down as a violation of s.2(b) freedom of expression, the Ontario government immediately introduces new legislation re-enacting the same provisions and invoking s.33 to override the court decision. Critics argue that using s.33 to override a court ruling that found a Charter violation undermines the rule of law and democratic accountability. Supporters argue the legislature is exercising its constitutional authority. Analyze whether the use of s.33 in this context is constitutionally valid and what accountability mechanisms exist.",
    weekReference: "Week 4",
    relevantSections: ["s33", "s2b"],
    expectedKeywords: [
      { term: "section 33", category: "section", weight: 5, sectionId: "s33" },
      { term: "section 2(b)", category: "section", weight: 4, sectionId: "s2b" },
      { term: "notwithstanding clause", category: "concept", weight: 5 },
      { term: "democratic accountability", category: "concept", weight: 5 },
      { term: "transparency", category: "concept", weight: 4 },
      { term: "five-year sunset", category: "concept", weight: 4 },
      { term: "Ford v Quebec", category: "case", weight: 4 },
      { term: "legislative override", category: "concept", weight: 4 },
      { term: "re-election", category: "concept", weight: 3 },
      { term: "public scrutiny", category: "concept", weight: 3 },
    ],
    modelAnswer:
      "From a strict constitutional standpoint, the Ontario government's use of s.33 is formally valid. Section 33 allows a legislature to declare that legislation operates notwithstanding s.2 (which includes s.2(b) freedom of expression). The legislature included an express declaration, which satisfies the procedural requirement established in Ford v Quebec. There is no constitutional requirement that s.33 be used only in certain circumstances or for particular reasons — it is a broad legislative power.\n\nHowever, constitutional validity and democratic legitimacy are distinct questions. The design of s.33 builds in accountability mechanisms that are meant to promote transparency and public scrutiny. First, the express declaration requirement forces the government to publicly acknowledge that it is overriding Charter rights. This is not a quiet manoeuvre — it invites media attention, public debate, and opposition criticism. The government must own its decision to override judicially recognized rights.\n\nSecond, the five-year sunset clause means the override expires automatically. If the government wishes to maintain it, it must re-enact the declaration — ideally after facing the electorate. This connects the override power to democratic accountability: voters have the opportunity to pass judgment on the government's use of s.33 at the next election.\n\nCritics raise a powerful counterargument: using s.33 to immediately override a court ruling that found a Charter violation turns the notwithstanding clause into a tool for avoiding judicial accountability rather than a mechanism for genuine democratic dialogue between courts and legislatures. The concern is that s.33 was intended for extraordinary circumstances where the legislature genuinely disagrees with a court's interpretation of rights — not as a routine mechanism to override inconvenient rulings. While there are no formal legal limits preventing this use, the political costs are the intended constraint. The legitimacy of s.33 ultimately depends on whether democratic processes — public debate, media scrutiny, and elections — function as effective checks on its use.",
  },
  {
    id: "s33-3",
    title: "Quebec Bill 21 and Religious Symbols",
    difficulty: "advanced",
    description:
      "The Quebec National Assembly passes Bill 21, An Act Respecting the Laicity of the State, which prohibits certain public sector workers — including teachers, police officers, judges, and prosecutors — from wearing religious symbols while exercising their functions. The law is pre-emptively shielded by an invocation of s.33 of the Charter. Critics argue that Bill 21 disproportionately affects Muslim women who wear hijabs, Sikh men who wear turbans, and Jewish men who wear kippas. They contend that s.33 should not be available to override s.15 equality rights in a way that targets religious minorities, and they invoke s.28 of the Charter, which guarantees that Charter rights apply equally to both sexes and which s.33 cannot override. Analyze the constitutional and normative questions raised by Bill 21's use of s.33.",
    weekReference: "Week 4",
    relevantSections: ["s33", "s2a", "s15", "s28"],
    expectedKeywords: [
      { term: "section 33", category: "section", weight: 5, sectionId: "s33" },
      { term: "section 2(a)", category: "section", weight: 4, sectionId: "s2a" },
      { term: "section 15", category: "section", weight: 4, sectionId: "s15" },
      { term: "section 28", category: "section", weight: 5 },
      { term: "Bill 21", category: "concept", weight: 5 },
      { term: "Ford v Quebec", category: "case", weight: 4 },
      { term: "notwithstanding clause", category: "concept", weight: 4 },
      { term: "religious symbols", category: "concept", weight: 4 },
      { term: "gender equality", category: "concept", weight: 4 },
      { term: "democratic accountability", category: "concept", weight: 3 },
      { term: "substantive limits", category: "concept", weight: 4 },
      { term: "five-year sunset", category: "concept", weight: 3 },
      { term: "transparency", category: "concept", weight: 2 },
    ],
    modelAnswer:
      "Bill 21 raises some of the most difficult questions about the scope and legitimacy of s.33. Formally, the s.33 invocation is constitutionally valid: the declaration covers ss.2 and 7-15, which is within s.33's permissible scope, and it satisfies the express declaration requirement from Ford v Quebec. The five-year sunset applies, requiring renewal after 2024.\n\nHowever, the substantive critique is powerful. Bill 21 primarily affects religious minorities — Muslim women, Sikh men, Jewish men — whose religious practices require visible symbols. Although the law is facially neutral (it bans all religious symbols), its real-world impact falls disproportionately on these communities. This engages s.15 equality rights and s.2(a) freedom of religion — both of which are shielded from judicial scrutiny by the s.33 invocation. Critics argue there should be substantive limits on s.33 that prevent its use to target the rights of vulnerable minorities, precisely the groups the Charter was designed to protect.\n\nThe s.28 argument adds complexity. Section 28 provides that Charter rights are 'guaranteed equally to male and female persons,' and s.33 does not list s.28 among the provisions it can override. If Bill 21 disproportionately affects women — particularly Muslim women who wear hijabs — the argument is that s.28 renders the s.33 override ineffective to the extent it permits sex-based inequality. This argument is legally untested and contested: some scholars argue s.28 is merely interpretive, while others contend it is a substantive guarantee that constrains s.33.\n\nThe deepest tension is normative. The five-year sunset is supposed to ensure democratic accountability — but what happens when a majority consistently votes to renew an override that targets a minority? The democratic check of re-election may be insufficient when the affected group is a politically marginalized minority. This suggests that the framers' assumption — that political accountability would constrain s.33 abuse — may not hold in all circumstances, and raises the question of whether judicial or constitutional limits beyond the current procedural requirements should exist.",
  },

  // ============================================================
  // THEME 4: Indigenous Rights in the Constitution (3 scenarios)
  // ============================================================
  {
    id: "indigenous-1",
    title: "Fishing Rights and Treaty Protection",
    difficulty: "beginner",
    description:
      "The federal government, citing declining fish populations and environmental concerns, enacts new regulations imposing strict conservation-based fishing quotas on several river systems in British Columbia. The regulations significantly limit the amount of salmon that First Nations communities can harvest, despite these communities holding constitutionally protected treaty rights and Aboriginal rights to fish for food, social, and ceremonial purposes. The affected First Nations challenge the regulations, arguing they infringe rights recognized under s.35 of the Constitution Act, 1982. The federal government claims the restrictions are justified by the need for conservation. Analyze the constitutional issues, including the framework for assessing whether the infringement is justified.",
    weekReference: "Week 5",
    relevantSections: ["s35", "s25"],
    expectedKeywords: [
      { term: "section 35", category: "section", weight: 5, sectionId: "s35" },
      { term: "section 25", category: "section", weight: 3, sectionId: "s25" },
      { term: "R v Sparrow", category: "case", weight: 5 },
      { term: "treaty rights", category: "concept", weight: 4 },
      { term: "Aboriginal rights", category: "concept", weight: 4 },
      { term: "duty to consult", category: "concept", weight: 4 },
      { term: "honour of the Crown", category: "concept", weight: 4 },
      { term: "Haida Nation", category: "case", weight: 3 },
      { term: "justified infringement", category: "test", weight: 5 },
      { term: "fiduciary duty", category: "concept", weight: 4 },
      { term: "conservation", category: "concept", weight: 3 },
      { term: "Sparrow test", category: "test", weight: 4 },
    ],
    modelAnswer:
      "Section 35 of the Constitution Act, 1982 recognizes and affirms existing Aboriginal and treaty rights. These rights are constitutionally protected, meaning they cannot be infringed without justification. Section 25 operates as a shield, preventing Charter rights from being used to diminish Aboriginal, treaty, or other rights of Indigenous peoples.\n\nThe leading framework for analyzing infringement of s.35 rights is from R v Sparrow (1990). Under the Sparrow test, the First Nations must first establish a prima facie infringement of their right to fish. The federal quotas clearly restrict their ability to harvest salmon for food, social, and ceremonial purposes, satisfying this threshold. The burden then shifts to the Crown to justify the infringement.\n\nThe Crown must demonstrate two things. First, it must show a valid legislative objective. Conservation of fish stocks is a valid objective that the Court in Sparrow recognized as capable of justifying infringement. Second, the Crown must show that its fiduciary duty to Indigenous peoples was respected in pursuing that objective. This includes several requirements: priority allocation of the resource to Indigenous fishing after conservation needs are met, minimal impairment of the Aboriginal or treaty right, and meaningful consultation with the affected communities before imposing restrictions.\n\nThe honour of the Crown, as elaborated in Haida Nation v BC (2004), requires the government to act honourably in all its dealings with Indigenous peoples. This includes a duty to consult and, where appropriate, accommodate Indigenous interests before taking action that may affect their rights.\n\nA counterargument is that conservation is so urgent it justifies immediate restrictions. However, even where conservation is the objective, the Crown cannot unilaterally impose quotas without consulting affected First Nations. If the government failed to consult meaningfully or did not give Indigenous fishing priority after conservation needs, the regulations will fail the Sparrow justification test and constitute an unjustified infringement of s.35 rights.",
  },
  {
    id: "indigenous-2",
    title: "Collective Rights vs Individual Charter Claims",
    difficulty: "intermediate",
    description:
      "The Vuntut Gwitchin First Nation, a self-governing Indigenous community in northern Yukon, has a citizenship code that requires all elected council members to reside on the settlement land. A member of the Vuntut Gwitchin who was born and raised on the settlement land but now lives in Whitehorse wants to run for council. She challenges the residency requirement under s.15 of the Charter, arguing it discriminates against off-reserve members based on residency and is analogous to discrimination on enumerated grounds. The First Nation responds that the requirement reflects Indigenous governance values and that s.25 of the Charter shields their collective decision-making from individual Charter challenges. Analyze the tension between individual Charter rights and Indigenous collective rights.",
    weekReference: "Week 5",
    relevantSections: ["s25", "s15"],
    expectedKeywords: [
      { term: "section 25", category: "section", weight: 5, sectionId: "s25" },
      { term: "section 15", category: "section", weight: 5, sectionId: "s15" },
      { term: "Dickson v Vuntut Gwitchin", category: "case", weight: 5 },
      { term: "collective rights", category: "concept", weight: 5 },
      { term: "individual rights", category: "concept", weight: 4 },
      { term: "Indigenous difference", category: "concept", weight: 5 },
      { term: "Indigenous governance", category: "concept", weight: 4 },
      { term: "self-determination", category: "concept", weight: 4 },
      { term: "irreconcilable conflict", category: "concept", weight: 3 },
      { term: "prior sovereignty", category: "concept", weight: 3 },
    ],
    modelAnswer:
      "This scenario directly engages the Supreme Court's decision in Dickson v Vuntut Gwitchin First Nation (2024), which addressed the tension between individual Charter equality rights and Indigenous collective governance rights. The core question is whether s.25 of the Charter shields the residency requirement from a s.15 challenge.\n\nSection 25 provides that Charter rights shall not be construed so as to abrogate or derogate from Aboriginal, treaty, or other rights of Indigenous peoples. The Vuntut Gwitchin argue that their citizenship code, including the residency requirement, is an exercise of their inherent right to self-governance — a right rooted in prior sovereignty and now recognized under their self-government agreement. The residency requirement reflects the community's values about the importance of on-the-land connection for governance decisions.\n\nThe concept of 'Indigenous difference' is central. The Constitution recognizes that Indigenous peoples occupy a unique position as prior sovereigns with collective rights that pre-date Confederation. These collective rights sometimes operate differently from individual Charter rights, and s.25 exists precisely to prevent the Charter from being used to undermine them. The question is whether the individual s.15 claim and the collective governance right are in irreconcilable conflict — if they are, s.25 shields the collective right.\n\nA counterargument is that individual equality rights should always prevail, particularly when an Indigenous person is being excluded from participation in their own community's governance. However, this argument applies a liberal-individualist framework that does not account for the distinct constitutional status of Indigenous governance. The court must recognize that Indigenous self-determination includes the right to establish governance structures that reflect community values, even when those structures differ from mainstream Canadian norms. The Constitution protects Indigenous decision-making from individual Charter challenges precisely because Indigenous governance arises from a different constitutional source — prior sovereignty — and serves collective purposes that s.15 was not designed to override.",
  },
  {
    id: "indigenous-3",
    title: "Resource Development and Duty to Consult",
    difficulty: "advanced",
    description:
      "A provincial government approves a major natural gas pipeline project that would cross through unceded Indigenous territory in northern British Columbia. The affected First Nations were notified of the project but allege that the consultation process was superficial — consisting of a few information sessions and written comment periods — and did not constitute meaningful consultation or accommodation of their concerns about environmental damage to their traditional territories. The First Nations seek an injunction to halt the project, arguing their s.35 Aboriginal rights and title have been infringed. The provincial government argues it met its consultation obligations and that the project serves the broader public interest. Analyze the duty to consult and its constitutional foundations.",
    weekReference: "Week 5",
    relevantSections: ["s35"],
    expectedKeywords: [
      { term: "section 35", category: "section", weight: 5, sectionId: "s35" },
      { term: "Haida Nation v BC", category: "case", weight: 5 },
      { term: "duty to consult", category: "concept", weight: 5 },
      { term: "duty to accommodate", category: "concept", weight: 5 },
      { term: "honour of the Crown", category: "concept", weight: 5 },
      { term: "Aboriginal title", category: "concept", weight: 4 },
      { term: "unceded territory", category: "concept", weight: 4 },
      { term: "R v Sparrow", category: "case", weight: 3 },
      { term: "justified infringement", category: "test", weight: 3 },
      { term: "meaningful consultation", category: "concept", weight: 4 },
      { term: "free prior and informed consent", category: "concept", weight: 3 },
    ],
    modelAnswer:
      "The duty to consult and accommodate is a constitutional obligation grounded in the honour of the Crown, as established in Haida Nation v BC (2004). The Crown must consult with Indigenous peoples whenever it contemplates conduct that might adversely affect established or asserted Aboriginal rights or title. This duty arises even before rights are formally proven — the mere assertion of a credible claim triggers the obligation.\n\nThe scope of the duty to consult exists on a spectrum. At one end, where the claim is weak or the potential impact minor, the duty may be satisfied by notice and an opportunity to comment. At the other end — where the claim is strong and the potential impact severe — the duty requires deep consultation and may require accommodation, meaning the government must actually modify its plans to address Indigenous concerns. Pipeline construction through unceded territory, where Aboriginal title is asserted, falls at the high end of this spectrum.\n\nThe province's consultation process — information sessions and written comment periods — appears wholly inadequate for a project of this magnitude through unceded territory. Meaningful consultation requires a genuine two-way dialogue, not merely information delivery. The honour of the Crown demands that the government approach consultation in good faith with the intention of substantially addressing Indigenous concerns, not simply checking procedural boxes.\n\nA counterargument is that the broader public interest in resource development must be balanced against Indigenous rights. However, the duty to consult does not permit the government to subordinate Indigenous rights to economic interests without proper engagement. Under R v Sparrow, even where infringement can be justified, the Crown must demonstrate that the honour of the Crown was upheld and that Aboriginal interests received priority consideration.\n\nThe emerging norm of free, prior, and informed consent, while not yet a strict legal requirement in Canadian law, reflects the direction of international standards and increasingly informs how courts evaluate the adequacy of consultation. The province's failure to engage in meaningful consultation likely constitutes a breach of its constitutional duty, and an injunction halting the project pending proper consultation would be an appropriate remedy.",
  },

  // ============================================================
  // THEME 5: Equality and Systemic Disadvantage (3 scenarios)
  // ============================================================
  {
    id: "equality-1",
    title: "Sexual Orientation and Reading In",
    difficulty: "beginner",
    description:
      "An employee at a private college in Alberta is terminated after his employer learns he is gay. He attempts to file a complaint under Alberta's Individual Rights Protection Act, but discovers that sexual orientation is not listed as a protected ground in the legislation. He argues that the omission of sexual orientation from the human rights code is itself a violation of s.15 of the Charter, because it denies gay and lesbian Albertans the equal protection and benefit of the law. The Alberta government argues that legislatures have discretion in drafting human rights codes and that the omission reflects a policy choice. The case reaches the Supreme Court. Analyze the s.15 issues and the appropriate remedy.",
    weekReference: "Week 6",
    relevantSections: ["s15"],
    expectedKeywords: [
      { term: "section 15", category: "section", weight: 5, sectionId: "s15" },
      { term: "Vriend v Alberta", category: "case", weight: 5 },
      { term: "analogous grounds", category: "concept", weight: 5 },
      { term: "enumerated grounds", category: "concept", weight: 4 },
      { term: "sexual orientation", category: "concept", weight: 4 },
      { term: "reading in", category: "concept", weight: 5 },
      { term: "section 24", category: "section", weight: 3 },
      { term: "substantive equality", category: "concept", weight: 4 },
      { term: "Andrews v Law Society of BC", category: "case", weight: 3 },
      { term: "discrimination", category: "concept", weight: 3 },
    ],
    modelAnswer:
      "This scenario is based on Vriend v Alberta (1998), a landmark s.15 equality case. The central issue is whether the deliberate exclusion of sexual orientation from a provincial human rights code violates s.15 of the Charter.\n\nSection 15(1) guarantees that every individual is equal before and under the law and has the right to equal protection and equal benefit of the law without discrimination based on enumerated grounds — race, national or ethnic origin, colour, religion, sex, age, or mental or physical disability. However, following Andrews v Law Society of BC (1989), the Supreme Court has recognized that s.15 also protects against discrimination on analogous grounds — characteristics that are analogous to the enumerated grounds. Sexual orientation is an analogous ground because, like the enumerated grounds, it is an immutable or deeply personal characteristic that has historically been the basis for disadvantage and stereotyping.\n\nThe Alberta government's argument that the omission is a mere policy choice fails. The Court in Vriend held that a government's failure to include a group in protective legislation can itself constitute discrimination. By excluding sexual orientation, Alberta denied gay and lesbian individuals the equal benefit of the law — the ability to seek a remedy for discrimination. This is not a neutral omission; it sends a message that discrimination against this group is acceptable, reinforcing their historical disadvantage.\n\nThe appropriate remedy is reading in — the court adds sexual orientation to the legislation rather than striking the entire Act down. Reading in is preferred when it is the remedy that best reflects legislative intent. Striking down the entire human rights code would harm everyone it protects, while reading in sexual orientation simply extends existing protections to a previously excluded group.\n\nA counterargument is that courts should defer to legislative choices about which groups to protect. However, substantive equality under s.15 means the Charter exists precisely to protect groups that the political process has failed. When the legislature's omission perpetuates the disadvantage of a historically marginalized group, judicial intervention through reading in is constitutionally required.",
  },
  {
    id: "equality-2",
    title: "Neutral Rules and Adverse Effects",
    difficulty: "intermediate",
    description:
      "The federal government introduces the 'Healthy Families Tax Credit,' which provides a $2,000 annual tax credit to individuals who work at least 35 hours per week and take no more than 5 sick days per year. The credit is framed as an incentive for workforce participation and healthy living. A coalition of disabled workers challenges the tax credit under s.15 of the Charter, arguing that the eligibility requirements systematically exclude Canadians with disabilities. Many disabled individuals cannot work 35 hours per week due to medical limitations, and many require significantly more than 5 sick days annually for treatment, recovery, or disability-related absences. The coalition argues the law creates a distinction based on disability that reinforces existing disadvantage. The government contends the law is facially neutral and applies equally to everyone.",
    weekReference: "Week 6",
    relevantSections: ["s15", "s1"],
    expectedKeywords: [
      { term: "section 15", category: "section", weight: 5, sectionId: "s15" },
      { term: "adverse-effects discrimination", category: "concept", weight: 5 },
      { term: "substantive equality", category: "concept", weight: 5 },
      { term: "formal equality", category: "concept", weight: 4 },
      { term: "enumerated grounds", category: "concept", weight: 3 },
      { term: "disability", category: "concept", weight: 4 },
      { term: "reinforcing disadvantage", category: "concept", weight: 5 },
      { term: "social context", category: "concept", weight: 4 },
      { term: "real-world impact", category: "concept", weight: 4 },
      { term: "section 15(2)", category: "section", weight: 2 },
      { term: "section 1", category: "section", weight: 3, sectionId: "s1" },
      { term: "Oakes test", category: "test", weight: 3 },
    ],
    modelAnswer:
      "The government's argument that the law is 'facially neutral' reflects a formal equality approach — treating everyone the same. However, s.15 of the Charter demands substantive equality, which requires examining the real-world impact of laws on disadvantaged groups. A law that applies identically to everyone can still be discriminatory if it disproportionately burdens a group defined by an enumerated or analogous ground.\n\nThis is a textbook case of adverse-effects discrimination. Disability is an enumerated ground under s.15. The tax credit's eligibility requirements — 35 hours per week and no more than 5 sick days — are criteria that many disabled Canadians cannot meet, not because of personal choice, but because of their disabilities. The law creates a distinction that correlates with disability: it distributes a government benefit in a way that systematically excludes disabled people.\n\nThe critical question under s.15 is whether this distinction reinforces, perpetuates, or exacerbates disadvantage. Disabled Canadians already face significant economic disadvantage — higher costs of living, lower employment rates, and workplace barriers. A tax credit that rewards full-time work with minimal sick days compounds this disadvantage by funnelling government benefits exclusively to those who can meet an able-bodied standard of workforce participation. The social context makes clear that this law reinforces the existing marginalization of disabled people.\n\nThe government might argue under s.1 that promoting workforce participation is a pressing and substantial objective. However, the law would likely fail the Oakes test at the minimal impairment stage. Less restrictive alternatives exist — the government could provide the tax credit with modified eligibility criteria for disabled workers, or it could decouple the credit from sick-day requirements. A counterargument that the law merely fails to benefit disabled people (rather than actively harming them) does not withstand scrutiny: when the government creates a benefit and designs its criteria in a way that systematically excludes a protected group, the exclusion is itself the discrimination. Substantive equality requires asking not whether the rule looks neutral on paper, but whether its real-world impact perpetuates the disadvantage of those already marginalized.",
  },
  {
    id: "equality-3",
    title: "Systemic Disadvantage in Sentencing",
    difficulty: "advanced",
    description:
      "Parliament enacts the Safe Communities Act, which introduces mandatory minimum sentences of three years imprisonment for possession of certain controlled substances for the purpose of trafficking. Indigenous advocacy organizations challenge the law under s.15 of the Charter, arguing that it disproportionately affects Indigenous peoples, who are already dramatically overrepresented in the criminal justice system. They present evidence that Indigenous people make up approximately 5% of Canada's population but over 30% of the federal prison population, and that this overrepresentation is the result of systemic factors including the legacy of residential schools, intergenerational trauma, poverty, and systemic racism in policing and prosecution. They argue the mandatory minimums will deepen this crisis by removing judicial discretion to consider these factors at sentencing. Analyze the s.15 challenge and the broader context of systemic disadvantage.",
    weekReference: "Week 6",
    relevantSections: ["s15", "s1"],
    expectedKeywords: [
      { term: "section 15", category: "section", weight: 5, sectionId: "s15" },
      { term: "adverse-effects discrimination", category: "concept", weight: 5 },
      { term: "systemic disadvantage", category: "concept", weight: 5 },
      { term: "substantive equality", category: "concept", weight: 4 },
      { term: "Indigenous peoples", category: "concept", weight: 4 },
      { term: "overrepresentation", category: "concept", weight: 5 },
      { term: "social context", category: "concept", weight: 4 },
      { term: "real-world impact", category: "concept", weight: 4 },
      { term: "enumerated grounds", category: "concept", weight: 3 },
      { term: "analogous grounds", category: "concept", weight: 3 },
      { term: "reinforcing disadvantage", category: "concept", weight: 5 },
      { term: "section 1", category: "section", weight: 3, sectionId: "s1" },
      { term: "Oakes test", category: "test", weight: 3 },
    ],
    modelAnswer:
      "This scenario requires analysing how a facially neutral sentencing law can constitute adverse-effects discrimination under s.15 when viewed in its full social context. The mandatory minimum applies to everyone convicted of the offence, regardless of race or background. But substantive equality under s.15 demands that we look beyond formal neutrality to examine the law's real-world impact on groups already experiencing systemic disadvantage.\n\nIndigenous peoples in Canada are dramatically overrepresented in the criminal justice system — a fact the Supreme Court has acknowledged repeatedly. This overrepresentation is not the result of higher rates of criminality but of systemic factors: the intergenerational effects of colonialism, residential schools, the Sixties Scoop, poverty, inadequate housing, and systemic racism in policing, prosecution, and sentencing. Race and Indigeneity are enumerated or analogous grounds under s.15, and the mandatory minimums create a distinction that correlates with these grounds because they disproportionately affect Indigenous people.\n\nThe key question is whether the law reinforces, perpetuates, or exacerbates disadvantage. Mandatory minimums remove judicial discretion to consider the unique circumstances of Indigenous offenders — including the systemic and background factors recognized in Gladue principles. By imposing a uniform sentence floor, the law ensures that the systemic disadvantage that funnels Indigenous peoples into the justice system is compounded by inflexible sentencing that ignores that very disadvantage. The social context is critical: when a group is overrepresented because of historical injustice, and a law removes the flexibility needed to account for that injustice, the law perpetuates the cycle of disadvantage.\n\nA counterargument is that mandatory minimums serve a pressing and substantial objective — public safety and deterrence. Under s.1, the government would argue these are legitimate goals. However, the evidence that mandatory minimums actually deter crime is weak, and the law would likely fail the proportionality analysis given its devastating impact on an already marginalized population. The disproportionate real-world effects on Indigenous communities — deepening overincarceration, separating families, and compounding intergenerational trauma — are severe. Courts must assess not just what the law says, but what it does, and to whom. When a facially neutral law systematically deepens the disadvantage of those the Constitution is meant to protect, it is discriminatory regardless of its neutral framing.",
  },
];
