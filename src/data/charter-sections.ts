import type { CharterSection } from "@/types";

export const charterSections: CharterSection[] = [
  {
    id: "s1",
    section: "s.1",
    title: "Reasonable Limits Clause",
    summary:
      "Section 1 is the limitations clause of the Charter. It acknowledges that Charter rights are not absolute and may be subject to reasonable limits prescribed by law, provided those limits can be demonstrably justified in a free and democratic society. This section is the government's primary tool for saving legislation that infringes a Charter right, and it places the burden of proof on the government to justify the infringement.",
    fullText:
      "The Canadian Charter of Rights and Freedoms guarantees the rights and freedoms set out in it subject only to such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society.",
    keyTests: [
      "Oakes Test (R v Oakes, 1986): (1) The objective of the law must be pressing and substantial; (2) The means chosen must be proportional, which requires: (a) a rational connection between the limit and the objective, (b) minimal impairment of the right — the limit must impair the right as little as reasonably possible, (c) proportionality between the deleterious effects and the salutary effects of the measure.",
      "Prescribed by law: The limit must have a basis in law (statute, regulation, or common law rule) and must not be arbitrary or vague.",
    ],
    keyCases: [
      "R v Oakes (1986) — Established the four-part Oakes test for s.1 justification; reverse onus provision in Narcotics Control Act failed the test.",
      "R v Big M Drug Mart (1985) — Lord's Day Act had a religious purpose and could not be saved under s.1 because the objective itself was unconstitutional.",
      "Irwin Toys v Quebec (1989) — Quebec's ban on advertising directed at children was a justified limit on s.2(b) expression under s.1.",
      "Harper v Canada (2004) — Third-party election spending limits upheld as a reasonable limit on s.2(b) expression to promote electoral fairness.",
      "Alberta v Hutterian Brethren (2009) — Mandatory photo requirement for driver's licences was a justified limit on s.2(a) freedom of religion; proportionality analysis was central.",
    ],
    keyConcepts: [
      "pressing and substantial objective",
      "rational connection",
      "minimal impairment",
      "proportionality of effects (salutary vs. deleterious)",
      "demonstrably justified",
      "free and democratic society",
      "burden on government",
      "prescribed by law",
      "Oakes test",
    ],
  },
  {
    id: "s2",
    section: "s.2",
    title: "Fundamental Freedoms",
    summary:
      "Section 2 protects four fundamental freedoms: freedom of conscience and religion (2(a)), freedom of thought, belief, opinion and expression including freedom of the press (2(b)), freedom of peaceful assembly (2(c)), and freedom of association (2(d)). These freedoms are broadly interpreted and protect against both purpose-based and effects-based infringements. Government restrictions on these freedoms must be justified under s.1.",
    fullText:
      "Everyone has the following fundamental freedoms: (a) freedom of conscience and religion; (b) freedom of thought, belief, opinion and expression, including freedom of the press and other media of communication; (c) freedom of peaceful assembly; (d) freedom of association.",
    keyTests: [
      "s.2(a) Religion Test: (1) Does the claimant sincerely hold a religious belief or practice? (2) Does the government action interfere with that belief or practice in a manner that is more than trivial or insubstantial?",
      "s.2(b) Expression Test (Irwin Toys): (1) Does the activity constitute expression (i.e., does it convey or attempt to convey meaning)? If yes, it is prima facie protected. (2) Does the government action restrict that expression in purpose or effect? Note: violence is excluded from s.2(b) protection.",
      "s.2(d) Association Test: Protects the right to form and join associations, and the right to exercise collectively any constitutional right that individuals could exercise alone.",
    ],
    keyCases: [
      "R v Big M Drug Mart (1985) — Freedom of religion means both the freedom to hold and manifest religious beliefs and freedom from compulsion by the state to act in conformity with a particular religion.",
      "Irwin Toys v Quebec (1989) — Established the framework for s.2(b) expression analysis; expression is any activity that conveys or attempts to convey meaning.",
      "Harper v Canada (2004) — Spending limits on third-party election advertising are a limit on s.2(b) expression but justified under s.1 to ensure electoral fairness.",
      "Alberta v Hutterian Brethren (2009) — Photo requirement for driver's licences infringed s.2(a) freedom of religion but was justified under s.1.",
    ],
    keyConcepts: [
      "sincere belief test",
      "more than trivial or insubstantial interference",
      "purpose and effects test for expression",
      "content neutrality",
      "commercial expression",
      "political expression",
      "freedom from state-compelled religion",
      "negative and positive dimensions of freedom",
      "violence exclusion from s.2(b)",
    ],
  },
  {
    id: "s3-5",
    section: "s.3–5",
    title: "Democratic Rights",
    summary:
      "Sections 3 through 5 protect the democratic process. Section 3 guarantees every citizen the right to vote and to be qualified for membership in federal and provincial legislatures. Section 4 sets a maximum five-year duration for the House of Commons and provincial legislatures (with an emergency exception). Section 5 requires that Parliament and legislatures sit at least once every twelve months. These rights ensure the continued democratic accountability of government.",
    fullText:
      "s.3: Every citizen of Canada has the right to vote in an election of members of the House of Commons or of a legislative assembly and to be qualified for membership therein. s.4: (1) No House of Commons and no legislative assembly shall continue for longer than five years from the date fixed for the return of the writs of a general election of its members. (2) In time of real or apprehended war, invasion or insurrection, a House of Commons may be continued by Parliament and a legislative assembly may be continued by the legislature beyond five years if such continuation is not opposed by the votes of more than one-third of the members of the House of Commons or the legislative assembly, as the case may be. s.5: There shall be a sitting of Parliament and of each legislature at least once every twelve months.",
    keyTests: [
      "s.3 Voting Rights Test (Sauvé): The right to vote is fundamental to democracy. Any restriction must be justified under s.1 with a particularly strong justification given the importance of the franchise.",
    ],
    keyCases: [
      "Sauvé v Canada (No. 2) (2002) — Blanket disenfranchisement of prisoners serving sentences of two years or more violates s.3; the government failed to justify the limit under s.1.",
    ],
    keyConcepts: [
      "universal suffrage",
      "right to vote",
      "right to stand for election",
      "democratic accountability",
      "maximum duration of legislatures",
      "annual sitting requirement",
      "prisoner voting rights",
      "meaningful participation in democracy",
    ],
  },
  {
    id: "s6",
    section: "s.6",
    title: "Mobility Rights",
    summary:
      "Section 6 guarantees the right of every citizen to enter, remain in, and leave Canada (s.6(1)), and the right of every citizen and permanent resident to move to and take up residence in any province and to pursue a livelihood in any province (s.6(2)). These rights are subject to laws of general application in a province that do not discriminate primarily on the basis of province of present or previous residence, and to reasonable residency requirements for social services (s.6(3)–(4)).",
    fullText:
      "s.6(1): Every citizen of Canada has the right to enter, remain in and leave Canada. s.6(2): Every citizen of Canada and every person who has the status of a permanent resident of Canada has the right (a) to move to and take up residence in any province; and (b) to pursue the gaining of a livelihood in any province. s.6(3): The rights specified in subsection (2) are subject to (a) any laws or practices of general application in force in a province other than those that discriminate among persons primarily on the basis of province of present or previous residence; and (b) any laws providing for reasonable residency requirements as a qualification for the receipt of publicly provided social services. s.6(4): Subsections (2) and (3) do not preclude any law, program or activity that has as its object the amelioration in a province of conditions of individuals in that province who are socially or economically disadvantaged if the rate of employment in that province is below the rate of employment in Canada.",
    keyTests: [
      "s.6(2) Mobility Test: (1) Has the claimant's right to move to or take up residence in a province, or to pursue a livelihood in any province, been limited? (2) Is the limitation justified under the s.6(3) exceptions or under s.1?",
    ],
    keyCases: [],
    keyConcepts: [
      "interprovincial mobility",
      "right to enter and leave Canada",
      "pursuit of livelihood",
      "residency requirements for social services",
      "laws of general application exception",
      "economic amelioration exception",
    ],
  },
  {
    id: "s7",
    section: "s.7",
    title: "Life, Liberty, and Security of the Person",
    summary:
      "Section 7 protects the right to life, liberty, and security of the person, and the right not to be deprived thereof except in accordance with the principles of fundamental justice. It is one of the most litigated Charter provisions. The analysis involves two steps: first, determining whether life, liberty, or security of the person is engaged; second, assessing whether the deprivation accords with the principles of fundamental justice. Laws that are arbitrary, overbroad, or grossly disproportionate violate these principles.",
    fullText:
      "Everyone has the right to life, liberty and security of the person and the right not to be deprived thereof except in accordance with the principles of fundamental justice.",
    keyTests: [
      "Two-Step s.7 Test: (1) Is there a deprivation of life, liberty, or security of the person? Life includes the right not to be exposed to increased risk of death by state action. Liberty includes physical liberty and the right to make fundamental personal choices. Security of the person includes protection from state-imposed serious psychological stress and bodily integrity. (2) Is the deprivation in accordance with the principles of fundamental justice?",
      "Principles of Fundamental Justice: (a) Arbitrariness — the law bears no rational connection to its objective; (b) Overbreadth — the law is broader than necessary to achieve its objective, capturing conduct with no connection to the legislative purpose; (c) Gross disproportionality — the effects of the law are so extreme as to be disproportionate to any legitimate government interest; (d) Vagueness — the law does not provide sufficient guidance for legal debate.",
    ],
    keyCases: [
      "R v Morgentaler (1988) — Criminal abortion provisions violated s.7 because the procedural requirements for obtaining a therapeutic abortion were arbitrary and created delays that endangered women's security of the person.",
      "Carter v Canada (2015) — Criminal prohibition on physician-assisted dying violated the s.7 rights of competent adults with grievous and irremediable medical conditions; the blanket prohibition was overbroad.",
      "Rodriguez v British Columbia (1993) — Criminal prohibition on assisted suicide upheld under s.1; the Court found s.7 was engaged but the limit was justified to protect vulnerable persons. Later effectively overruled by Carter.",
      "Canada (AG) v Bedford (2013) — Criminal laws around prostitution (bawdy houses, living on the avails, communicating) violated s.7 by imposing dangerous conditions on sex workers; laws were grossly disproportionate and overbroad.",
    ],
    keyConcepts: [
      "life, liberty, security of the person",
      "principles of fundamental justice",
      "arbitrariness",
      "overbreadth",
      "gross disproportionality",
      "vagueness",
      "bodily integrity",
      "state-imposed psychological stress",
      "fundamental personal choices",
      "deprivation",
      "not absolute — subject to principles of fundamental justice",
    ],
  },
  {
    id: "s8",
    section: "s.8",
    title: "Unreasonable Search and Seizure",
    summary:
      "Section 8 protects everyone from unreasonable search or seizure by the state. Its purpose is to protect a reasonable expectation of privacy. The analysis requires first establishing whether a search or seizure occurred (i.e., whether the state conduct interfered with a reasonable expectation of privacy), and second whether the search was reasonable (authorized by law, the law itself is reasonable, and the search was conducted in a reasonable manner). Privacy has three recognized dimensions: personal, territorial, and informational.",
    fullText:
      "Everyone has the right to be secure against unreasonable search or seizure.",
    keyTests: [
      "s.8 Reasonableness Test (Hunter v Southam): (1) Was there a search or seizure? Did state action interfere with a reasonable expectation of privacy? (2) If so, was the search or seizure reasonable? A search is reasonable if: (a) it was authorized by law, (b) the authorizing law is itself reasonable, and (c) the search was conducted in a reasonable manner.",
      "Reasonable Expectation of Privacy Test: Considers the totality of the circumstances, including: the subject matter of the alleged search, the claimant's interest in the subject matter, the claimant's subjective expectation of privacy, and whether that expectation is objectively reasonable.",
    ],
    keyCases: [
      "Hunter v Southam (1984) — Established that s.8 protects a reasonable expectation of privacy and requires prior judicial authorization (a warrant) as the default standard for searches.",
      "R v Patrick (2009) — Garbage placed at the curb for collection had a diminished expectation of privacy; abandonment of informational privacy in garbage bags at property line.",
      "R v Spencer (2014) — Police request to an ISP for subscriber information linked to an IP address constituted a search under s.8; informational privacy in internet usage is protected.",
      "R v Marakah (2017) — The sender of a text message retains a reasonable expectation of privacy in the message even after it is received on the recipient's device.",
    ],
    keyConcepts: [
      "reasonable expectation of privacy",
      "prior judicial authorization (warrant requirement)",
      "authorized by law",
      "law itself reasonable",
      "manner of search reasonable",
      "personal privacy (bodily integrity)",
      "territorial privacy (home and surroundings)",
      "informational privacy (biographical core data)",
      "totality of the circumstances",
      "warrantless search exceptions",
      "exclusion of evidence under s.24(2)",
    ],
  },
  {
    id: "s9",
    section: "s.9",
    title: "Arbitrary Detention or Imprisonment",
    summary:
      "Section 9 protects everyone from being arbitrarily detained or imprisoned. A detention is arbitrary if there is no lawful authority for it, or if the law authorizing detention is itself arbitrary. This section works closely with s.10 (rights on detention) and s.8 (search and seizure). Detention includes physical restraint and psychological compulsion where a reasonable person would not feel free to leave.",
    fullText:
      "Everyone has the right not to be arbitrarily detained or imprisoned.",
    keyTests: [
      "s.9 Arbitrary Detention Test: (1) Was the person detained? Detention can be physical (e.g., arrest) or psychological (a reasonable person in the claimant's circumstances would feel compelled to comply and not free to leave). (2) Was the detention arbitrary? A detention is arbitrary if it was not authorized by law or if the law itself grants unfettered discretion.",
    ],
    keyCases: [],
    keyConcepts: [
      "arbitrary detention",
      "physical detention",
      "psychological detention",
      "unfettered discretion",
      "lawful authority for detention",
      "reasonable person standard for detention",
    ],
  },
  {
    id: "s10",
    section: "s.10",
    title: "Rights on Arrest or Detention",
    summary:
      "Section 10 provides procedural rights upon arrest or detention. Section 10(a) guarantees the right to be informed promptly of the reasons for arrest or detention. Section 10(b) guarantees the right to retain and instruct counsel without delay and to be informed of that right, including the right to Legal Aid counsel. Section 10(c) guarantees the right to have the validity of detention determined by habeas corpus and to be released if the detention is unlawful.",
    fullText:
      "Everyone has the right on arrest or detention (a) to be informed promptly of the reasons therefor; (b) to retain and instruct counsel without delay and to be informed of that right; and (c) to have the validity of the detention determined by way of habeas corpus and to be released if the detention is not lawful.",
    keyTests: [
      "s.10(b) Right to Counsel Test: (1) Was the person detained or arrested? (2) Were they informed of their right to retain and instruct counsel? (3) Were they given a reasonable opportunity to exercise that right? Police have a duty to hold off questioning until the detainee has had a reasonable opportunity to consult counsel (implementational duty).",
    ],
    keyCases: [],
    keyConcepts: [
      "right to be informed of reasons for arrest",
      "right to counsel without delay",
      "duty to inform of right to counsel",
      "implementational duty (hold off questioning)",
      "habeas corpus",
      "Legal Aid duty to inform",
      "waiver of right to counsel",
    ],
  },
  {
    id: "s11",
    section: "s.11",
    title: "Legal Rights in Criminal Proceedings",
    summary:
      "Section 11 enumerates specific rights for persons charged with an offence. These include the right to be informed of the specific offence (11(a)), to be tried within a reasonable time (11(b)), not to be compelled to testify against oneself (11(c)), the presumption of innocence and the right to a fair and public hearing by an independent and impartial tribunal (11(d)), not to be denied reasonable bail without just cause (11(e)), trial by jury for serious offences (11(f)), protection from retroactive criminal offences (11(g)), double jeopardy protection (11(h)), and the right to the lesser punishment where punishment changes between offence and sentencing (11(i)).",
    fullText:
      "Any person charged with an offence has the right (a) to be informed without unreasonable delay of the specific offence; (b) to be tried within a reasonable time; (c) not to be compelled to be a witness in proceedings against that person in respect of the offence; (d) to be presumed innocent until proven guilty according to law in a fair and public hearing by an independent and impartial tribunal; (e) not to be denied reasonable bail without just cause; (f) except in the case of an offence under military law tried before a military tribunal, to the benefit of trial by jury where the maximum punishment for the offence is imprisonment for five years or a more severe punishment; (g) not to be found guilty on account of any act or omission unless, at the time of the act or omission, it constituted an offence under Canadian or international law or was criminal according to the general principles of law recognized by the community of nations; (h) if finally acquitted of the offence, not to be tried for it again and, if finally found guilty and punished for the offence, not to be tried or punished for it again; and (i) if found guilty of the offence and if the punishment for the offence has been varied between the time of commission and the time of sentencing, to the benefit of the lesser punishment.",
    keyTests: [
      "s.11(b) Trial Within Reasonable Time (R v Jordan, 2016): Presumptive ceilings for trial delay — 18 months for cases in provincial court, 30 months for cases in superior court (or cases in provincial court that proceed to preliminary inquiry). If the ceiling is exceeded, delay is presumptively unreasonable and the Crown must show exceptional circumstances. Below the ceiling, the defence must show the delay is unreasonable.",
    ],
    keyCases: [
      "R v Jordan (2016) — Established presumptive ceilings for s.11(b) trial delays, replacing the prior Morin framework. A case-changing decision that imposed strict timelines on the criminal justice system.",
    ],
    keyConcepts: [
      "presumption of innocence",
      "trial within a reasonable time",
      "presumptive ceilings (Jordan framework)",
      "right to a fair and public hearing",
      "independent and impartial tribunal",
      "protection against self-incrimination",
      "double jeopardy (autrefois acquit/convict)",
      "right to reasonable bail",
      "non-retroactivity of criminal offences",
      "right to lesser punishment",
    ],
  },
  {
    id: "s12",
    section: "s.12",
    title: "Cruel and Unusual Treatment or Punishment",
    summary:
      "Section 12 protects everyone from cruel and unusual treatment or punishment. The test asks whether the punishment or treatment is so excessive as to outrage standards of decency — that is, whether it is grossly disproportionate to what would be appropriate. This section most commonly arises in the context of mandatory minimum sentences and conditions of confinement. Both the nature of the punishment and its effect on the individual are considered.",
    fullText:
      "Everyone has the right not to be subjected to any cruel and unusual treatment or punishment.",
    keyTests: [
      "s.12 Gross Disproportionality Test: Is the treatment or punishment so excessive as to outrage standards of decency? The court considers whether the punishment is grossly disproportionate to the punishment that is appropriate, having regard to the nature of the offence, the personal circumstances of the offender, and the effect of the punishment on the offender. The court may use reasonable hypotheticals to test the provision.",
    ],
    keyCases: [],
    keyConcepts: [
      "cruel and unusual treatment or punishment",
      "gross disproportionality",
      "mandatory minimum sentences",
      "outrage standards of decency",
      "reasonable hypotheticals",
      "conditions of confinement",
      "human dignity",
    ],
  },
  {
    id: "s15",
    section: "s.15",
    title: "Equality Rights",
    summary:
      "Section 15 guarantees equality before and under the law and the right to equal protection and equal benefit of the law without discrimination. The modern test, refined in cases like Andrews and subsequent decisions, asks two questions: first, whether the law creates a distinction based on an enumerated or analogous ground; and second, whether that distinction imposes a burden or denies a benefit in a manner that has the effect of reinforcing, perpetuating, or exacerbating disadvantage. Section 15(2) permits affirmative action programs aimed at ameliorating conditions of disadvantaged groups.",
    fullText:
      "s.15(1): Every individual is equal before and under the law and has the right to the equal protection and equal benefit of the law without discrimination and, in particular, without discrimination based on race, national or ethnic origin, colour, religion, sex, age or mental or physical disability. s.15(2): Subsection (1) does not preclude any law, program or activity that has as its object the amelioration of conditions of disadvantaged individuals or groups including those that are disadvantaged because of race, national or ethnic origin, colour, religion, sex, age or mental or physical disability.",
    keyTests: [
      "Two-Step s.15(1) Test: (1) Does the law, on its face or in its impact, create a distinction based on an enumerated or analogous ground? Enumerated grounds: race, national or ethnic origin, colour, religion, sex, age, mental or physical disability. Analogous grounds include sexual orientation, citizenship, marital status, etc. (2) Does the distinction impose a burden or deny a benefit in a manner that has the effect of reinforcing, perpetuating, or exacerbating disadvantage?",
    ],
    keyCases: [
      "Andrews v Law Society of BC (1989) — First major s.15 case; citizenship requirement for practising law was discrimination on an analogous ground. Established the substantive equality approach and rejected the similarly situated test.",
      "Vriend v Alberta (1998) — Alberta's failure to include sexual orientation as a protected ground in its human rights legislation violated s.15; sexual orientation is an analogous ground. The Court read sexual orientation into the legislation as a remedy.",
    ],
    keyConcepts: [
      "substantive equality (not formal equality)",
      "enumerated grounds",
      "analogous grounds",
      "reinforcing, perpetuating, or exacerbating disadvantage",
      "distinction on a protected ground",
      "burden or denial of benefit",
      "systemic discrimination",
      "adverse impact discrimination",
      "ameliorative programs (s.15(2))",
      "reading in as a remedy",
      "similarly situated test (rejected)",
    ],
  },
  {
    id: "s24",
    section: "s.24",
    title: "Enforcement and Remedies",
    summary:
      "Section 24 provides the enforcement mechanism for Charter rights. Under s.24(1), anyone whose Charter rights have been infringed may apply to a court of competent jurisdiction for a remedy the court considers appropriate and just in the circumstances. Under s.24(2), evidence obtained in a manner that infringed Charter rights shall be excluded if its admission would bring the administration of justice into disrepute. The s.24(2) analysis uses the Grant framework, which weighs three factors to determine admissibility.",
    fullText:
      "s.24(1): Anyone whose rights or freedoms, as guaranteed by this Charter, have been infringed or denied may apply to a court of competent jurisdiction to obtain such remedy as the court considers appropriate and just in the circumstances. s.24(2): Where, in proceedings under subsection (1), a court concludes that evidence was obtained in a manner that infringed or denied any rights or freedoms guaranteed by this Charter, the evidence shall be excluded if it is established that, having regard to all the circumstances, the admission of it in the proceedings would bring the administration of justice into disrepute.",
    keyTests: [
      "s.24(2) Exclusion of Evidence (R v Grant, 2009): Three-line inquiry: (1) The seriousness of the Charter-infringing state conduct — was the breach serious, deliberate, or systemic, or was it minor and made in good faith? (2) The impact on the Charter-protected interests of the accused — was the intrusion serious or trivial? (3) Society's interest in adjudication on the merits — is the evidence reliable and important to the Crown's case? The court balances these three factors.",
    ],
    keyCases: [],
    keyConcepts: [
      "court of competent jurisdiction",
      "appropriate and just remedy",
      "exclusion of evidence",
      "bringing the administration of justice into disrepute",
      "Grant framework (three-line inquiry)",
      "seriousness of state conduct",
      "impact on accused's interests",
      "society's interest in adjudication on merits",
      "declarations of invalidity",
      "suspended declarations of invalidity",
      "constitutional exemptions",
      "damages as a Charter remedy",
    ],
  },
  {
    id: "s25",
    section: "s.25",
    title: "Aboriginal and Treaty Rights Protection",
    summary:
      "Section 25 acts as an interpretive shield, providing that the Charter's guarantee of rights and freedoms shall not be construed so as to abrogate or derogate from any Aboriginal, treaty, or other rights or freedoms pertaining to the Aboriginal peoples of Canada. It ensures that the Charter's individual rights framework does not override Indigenous collective rights, including those recognized by the Royal Proclamation of 1763 and those from land claims agreements. It is a shield, not a sword — it does not independently create rights.",
    fullText:
      "The guarantee in this Charter of certain rights and freedoms shall not be construed so as to abrogate or derogate from any aboriginal, treaty or other rights or freedoms that pertain to the aboriginal peoples of Canada including (a) any rights or freedoms that have been recognized by the Royal Proclamation of October 7, 1763; and (b) any rights or freedoms that now exist by way of land claims agreements or may be so acquired.",
    keyTests: [
      "s.25 Shield Test: When a Charter right (e.g., s.15 equality) is invoked to challenge an Indigenous right, s.25 may operate to shield the Indigenous right from being overridden. The analysis asks whether the impugned right or practice is an Aboriginal, treaty, or other right pertaining to Aboriginal peoples that should be protected from Charter scrutiny.",
    ],
    keyCases: [
      "Dickson v Vuntut Gwitchin First Nation (2024) — The Supreme Court upheld a residency requirement for band council candidacy, applying s.25 to shield the First Nation's governance practice from a s.15 equality challenge. Confirmed s.25 as an interpretive provision protecting Indigenous collective rights.",
    ],
    keyConcepts: [
      "interpretive shield (not a sword)",
      "collective vs. individual rights",
      "Aboriginal rights",
      "treaty rights",
      "Royal Proclamation of 1763",
      "land claims agreements",
      "abrogate or derogate",
      "Indigenous self-governance",
      "tension between Charter individual rights and Indigenous collective rights",
    ],
  },
  {
    id: "s33",
    section: "s.33",
    title: "Notwithstanding Clause (Override Power)",
    summary:
      "Section 33 allows Parliament or a provincial legislature to expressly declare that a law shall operate notwithstanding a provision of section 2 or sections 7 to 15 of the Charter. The declaration has a five-year sunset clause and must be re-enacted to remain in force. This provision reflects the compromise between parliamentary sovereignty and judicial review in the Charter's design. It cannot be used to override democratic rights (ss.3–5), mobility rights (s.6), or language rights (ss.16–23).",
    fullText:
      "s.33(1): Parliament or the legislature of a province may expressly declare in an Act of Parliament or of the legislature, as the case may be, that the Act or a provision thereof shall operate notwithstanding a provision included in section 2 or sections 7 to 15 of this Charter. s.33(2): An Act or a provision of an Act in respect of which a declaration made under this section is in effect shall have such operation as it would have but for the provision of this Charter referred to in the declaration. s.33(3): A declaration made under subsection (1) shall cease to have effect five years after it comes into force or on such earlier date as may be specified in the declaration. s.33(4): Parliament or the legislature of a province may re-enact a declaration made under subsection (1). s.33(5): Subsection (3) applies in respect of a re-enactment made under subsection (4).",
    keyTests: [
      "s.33 Requirements: (1) The declaration must be express — the legislature must specifically invoke s.33. (2) It must identify which Charter provisions (s.2 or ss.7–15) the law operates notwithstanding. (3) The declaration expires after five years (sunset clause) and must be re-enacted to continue. (4) It applies only to s.2 and ss.7–15, not to democratic rights, mobility rights, or language rights.",
    ],
    keyCases: [
      "Ford v Quebec (AG) (1988) — Quebec's blanket use of s.33 in all legislation was valid in form; the Court held that the override need not specify particular sections being overridden, though this was later seen as controversial. Established that s.33 has procedural but not substantive limitations.",
      "Quebec Bill 21 (An Act Respecting the Laicity of the State, 2019) — Quebec invoked s.33 to shield its ban on religious symbols worn by certain public servants from Charter challenges under ss.2 and 7–15, sparking national debate about the scope of the notwithstanding clause.",
    ],
    keyConcepts: [
      "notwithstanding clause",
      "legislative override",
      "five-year sunset clause",
      "parliamentary sovereignty vs. judicial review",
      "dialogue theory",
      "express declaration requirement",
      "limited to s.2 and ss.7–15",
      "political cost of invocation",
      "democratic accountability for override use",
      "pre-emptive vs. responsive use",
    ],
  },
  {
    id: "s35",
    section: "s.35 (Constitution Act, 1982)",
    title: "Recognition and Affirmation of Aboriginal and Treaty Rights",
    summary:
      "Section 35 of the Constitution Act, 1982 (outside the Charter itself) recognizes and affirms the existing Aboriginal and treaty rights of the Aboriginal peoples of Canada, defined to include Indian, Inuit, and Métis peoples. It provides constitutional protection for rights that existed in 1982, as well as rights arising from land claims agreements. The Sparrow test governs when the government may justifiably infringe Aboriginal rights. This section is the primary constitutional foundation for Indigenous rights in Canada.",
    fullText:
      "s.35(1): The existing aboriginal and treaty rights of the aboriginal peoples of Canada are hereby recognized and affirmed. s.35(2): In this Act, 'aboriginal peoples of Canada' includes the Indian, Inuit and Métis peoples of Canada. s.35(3): For greater certainty, in subsection (1) 'treaty rights' includes rights that now exist by way of land claims agreements or may be so acquired. s.35(4): Notwithstanding any other provision of this Act, the aboriginal and treaty rights referred to in subsection (1) are guaranteed equally to male and female persons.",
    keyTests: [
      "Sparrow Test for Justification of Infringement (R v Sparrow, 1990): (1) Is there an existing Aboriginal right? (2) Has the right been infringed (e.g., is the limitation unreasonable, does it impose undue hardship, does it deny the preferred means of exercising the right)? (3) Is the infringement justified? Justification requires: (a) a valid legislative objective, and (b) consistency with the Crown's fiduciary duty to Aboriginal peoples (priority of Aboriginal rights, minimal infringement, consultation).",
      "Haida Duty to Consult Test (Haida Nation v BC, 2004): The Crown has a duty to consult and, where appropriate, accommodate Aboriginal peoples when it contemplates conduct that might adversely affect their Aboriginal or treaty rights. The duty arises when the Crown has knowledge of an established or asserted Aboriginal right and contemplates conduct that may adversely affect it. The scope of consultation is proportionate to the strength of the claim and the seriousness of the potential impact.",
    ],
    keyCases: [
      "R v Sparrow (1990) — First major s.35 case; established the framework for determining whether an Aboriginal right exists and whether government infringement is justified. The right to fish for food was an existing Aboriginal right.",
      "Haida Nation v BC (2004) — Established the Crown's duty to consult and accommodate Aboriginal peoples before making decisions that could affect their rights, even where rights have not yet been proven in court.",
    ],
    keyConcepts: [
      "existing Aboriginal rights",
      "treaty rights",
      "recognition and affirmation",
      "Sparrow justification framework",
      "Crown fiduciary duty",
      "duty to consult and accommodate",
      "honour of the Crown",
      "Aboriginal title",
      "Indian, Inuit, and Métis peoples",
      "constitutional protection outside the Charter",
      "sui generis rights",
      "reconciliation",
    ],
  },
  {
    id: "bill-of-rights-1960",
    section: "Canadian Bill of Rights (1960)",
    title: "Canadian Bill of Rights",
    summary:
      "The Canadian Bill of Rights, enacted in 1960 under Prime Minister Diefenbaker, was Canada's first federal human rights document. However, it is a statutory enactment (an ordinary federal statute), not a constitutional document, which severely limits its effectiveness. It applies only to federal legislation (not provincial), courts were reluctant to use it to invalidate legislation, and it could be overridden by a later statute. Its inadequacies were a major impetus for the adoption of the constitutionally entrenched Charter of Rights and Freedoms in 1982.",
    fullText:
      "The Canadian Bill of Rights (S.C. 1960, c. 44) is a federal statute that recognizes and declares rights including the right of the individual to life, liberty, security of the person and enjoyment of property; the right to equality before the law and protection of the law; freedom of religion, speech, assembly, association, and the press. It provides that federal laws shall be construed and applied so as not to abrogate or infringe these rights unless a law expressly declares it operates notwithstanding the Bill of Rights.",
    keyTests: [
      "Bill of Rights Interpretation: Courts interpreted the Bill of Rights as merely an interpretive guide, not a basis for striking down legislation. The 'frozen concepts' doctrine held that rights were defined as they were understood in 1960, limiting their evolution.",
    ],
    keyCases: [
      "AG Canada v Lavell (1974) — The Supreme Court upheld provisions of the Indian Act that stripped Indigenous women (but not men) of Indian status upon marrying non-Indigenous men. The Court applied a narrow 'equality before the law' interpretation, finding no Bill of Rights violation. This case illustrated the Bill of Rights' weakness and the need for a constitutionally entrenched Charter.",
    ],
    keyConcepts: [
      "statutory vs. constitutional protection",
      "applies only to federal law (not provincial)",
      "judicial reluctance to invalidate legislation",
      "frozen concepts doctrine",
      "inadequacy as rights protection",
      "impetus for Charter adoption",
      "Diefenbaker Bill of Rights",
      "right to enjoyment of property (not in Charter)",
      "implied Bill of Rights (pre-1960 theory)",
      "comparison with Charter s.15 equality",
    ],
  },
  {
    id: "royal-proclamation-1763",
    section: "Royal Proclamation of 1763",
    title: "Royal Proclamation of 1763",
    summary:
      "The Royal Proclamation of 1763, issued by King George III after the Treaty of Paris, is a foundational document for Indigenous land rights in Canada. It recognized that Indigenous peoples held title to their lands and that only the Crown could acquire those lands through treaty. It established the principle that Indigenous land could not be taken without consent through a formal treaty process, creating the legal foundation for the treaty relationship between the Crown and Indigenous peoples. It is referenced in s.25 of the Charter and remains constitutionally significant.",
    fullText:
      "The Royal Proclamation of October 7, 1763, declared that Indigenous peoples 'should not be molested or disturbed in the Possession of such Parts of Our Dominions and Territories as, not having been ceded to or purchased by Us, are reserved to them.' It established that only the Crown could purchase Indigenous lands, prohibiting private purchases, and required that any land cession occur through a formal public process (treaty). It is referenced in s.25(a) of the Charter and recognized in the constitutional framework of Canada.",
    keyTests: [
      "The Royal Proclamation established the principle of Crown preemption in the acquisition of Indigenous lands: only the Crown could negotiate for the surrender of Indigenous territory, and this had to occur at a public meeting called for that purpose. This principle underlies the modern treaty process and the duty to consult.",
    ],
    keyCases: [],
    keyConcepts: [
      "Indigenous land title recognition",
      "Crown preemption of land purchases",
      "treaty process foundation",
      "fiduciary relationship origins",
      "referenced in Charter s.25(a)",
      "Magna Carta of Indian rights (historical characterization)",
      "nation-to-nation relationship",
      "territorial sovereignty of Indigenous peoples",
      "constitutional significance",
      "foundation for duty to consult",
    ],
  },
];
