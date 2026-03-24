import type { QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  // ============================================================
  // 1. Royal Proclamation 1763 & Treaties (sectionId: "treaties")
  // ============================================================
  {
    id: "treaties-1",
    question:
      "What did the Royal Proclamation of 1763 establish regarding Indigenous lands west of the Appalachian Mountains?",
    options: [
      "It granted those lands to British settlers immediately",
      "It reserved those lands for Indigenous peoples and prohibited private purchase",
      "It divided the lands equally between France and Britain",
      "It declared the lands terra nullius and open to all",
    ],
    correctIndex: 1,
    explanation:
      "The Royal Proclamation of 1763 recognized Indigenous territorial rights and prohibited private individuals from purchasing Indigenous lands, requiring the Crown to negotiate any land surrenders.",
    sectionId: "treaties",
    difficulty: "easy",
  },
  {
    id: "treaties-2",
    question:
      "Why is the Royal Proclamation of 1763 sometimes called the 'Indian Magna Carta'?",
    options: [
      "It granted Indigenous peoples the right to vote in British elections",
      "It established the first Indigenous parliament in North America",
      "It recognized Indigenous land rights and set out a framework for Crown–Indigenous relations",
      "It abolished the French seigneurial system on Indigenous lands",
    ],
    correctIndex: 2,
    explanation:
      "The Proclamation is called the 'Indian Magna Carta' because it formally recognized pre-existing Indigenous rights to land and established that only the Crown could acquire Indigenous territory through treaty.",
    sectionId: "treaties",
    difficulty: "medium",
  },
  {
    id: "treaties-3",
    question:
      "The Williams Treaties of 1923 dealt primarily with which geographic area?",
    options: [
      "British Columbia's coastal territories",
      "The Prairie provinces",
      "Central Ontario, including areas north of Lake Ontario and Lake Simcoe",
      "The Maritime provinces and the Bay of Fundy",
    ],
    correctIndex: 2,
    explanation:
      "The Williams Treaties (1923) were negotiated to surrender Indigenous lands in central Ontario that had not been covered by earlier Upper Canada treaties, particularly areas around Lake Ontario and Lake Simcoe.",
    sectionId: "treaties",
    difficulty: "medium",
  },
  {
    id: "treaties-4",
    question:
      "Under the treaty-making process established by the Royal Proclamation, who had the exclusive right to purchase or acquire Indigenous land?",
    options: [
      "Private settlers with government permits",
      "The Hudson's Bay Company",
      "The Crown alone",
      "Provincial legislatures",
    ],
    correctIndex: 2,
    explanation:
      "The Royal Proclamation reserved the right to acquire Indigenous land exclusively to the Crown, meaning land could only be surrendered through a formal treaty process with the Crown, not through private sales.",
    sectionId: "treaties",
    difficulty: "easy",
  },
  {
    id: "treaties-5",
    question:
      "A key criticism of the Williams Treaties was that the Indigenous signatories:",
    options: [
      "Received too much compensation, causing public backlash",
      "Were not informed that they were surrendering harvesting rights and received inadequate compensation",
      "Voluntarily gave up all their treaty rights in writing",
      "Refused to negotiate and were forced into reserves by military action",
    ],
    correctIndex: 1,
    explanation:
      "A major criticism of the Williams Treaties is that the First Nations signatories were not clearly informed they were surrendering hunting and fishing rights, and the compensation they received was grossly inadequate.",
    sectionId: "treaties",
    difficulty: "hard",
  },

  // ============================================================
  // 2. Constitution Act 1867 & Confederation (sectionId: "confederation")
  // ============================================================
  {
    id: "confederation-1",
    question:
      "Under the Constitution Act, 1867, which level of government has jurisdiction over 'Indians, and Lands reserved for the Indians'?",
    options: [
      "Provincial governments under s.92",
      "Municipal governments",
      "The federal government under s.91(24)",
      "Indigenous self-governments exclusively",
    ],
    correctIndex: 2,
    explanation:
      "Section 91(24) of the Constitution Act, 1867 assigns exclusive legislative authority over 'Indians, and Lands reserved for the Indians' to the federal Parliament.",
    sectionId: "confederation",
    difficulty: "easy",
  },
  {
    id: "confederation-2",
    question:
      "The Persons Case (Edwards v Canada, 1929) decided that women:",
    options: [
      "Could vote in federal elections but not provincial ones",
      "Were 'qualified persons' eligible for appointment to the Senate",
      "Had the right to sit in the House of Commons but not the Senate",
      "Could own property independently for the first time",
    ],
    correctIndex: 1,
    explanation:
      "The Judicial Committee of the Privy Council ruled in the Persons Case that the word 'persons' in s.24 of the BNA Act included women, making them eligible for Senate appointment.",
    sectionId: "confederation",
    difficulty: "easy",
  },
  {
    id: "confederation-3",
    question:
      "Which interpretive approach did the Privy Council endorse in the Persons Case?",
    options: [
      "Strict originalism — the Constitution must be read as the framers intended in 1867",
      "The 'living tree' doctrine — the Constitution should be interpreted to evolve with society",
      "Parliamentary sovereignty — the legislature's intent is supreme",
      "Textualism — only the literal words of the Constitution matter",
    ],
    correctIndex: 1,
    explanation:
      "The Privy Council endorsed the 'living tree' doctrine, holding that the Constitution is a 'living tree capable of growth and expansion within its natural limits,' allowing it to adapt to changing social conditions.",
    sectionId: "confederation",
    difficulty: "medium",
  },
  {
    id: "confederation-4",
    question:
      "Under the Constitution Act, 1867, which of the following falls under provincial jurisdiction (s.92)?",
    options: [
      "Criminal law",
      "Banking and currency",
      "Property and civil rights",
      "National defence",
    ],
    correctIndex: 2,
    explanation:
      "Section 92(13) assigns 'property and civil rights in the province' to provincial legislatures. Criminal law (s.91(27)), banking (s.91(15)), and defence are all federal powers.",
    sectionId: "confederation",
    difficulty: "easy",
  },
  {
    id: "confederation-5",
    question:
      "The 'Peace, Order, and Good Government' (POGG) clause in the Constitution Act, 1867 grants residual powers to:",
    options: [
      "The provincial legislatures",
      "The federal Parliament",
      "The Governor General acting alone",
      "The Supreme Court of Canada",
    ],
    correctIndex: 1,
    explanation:
      "The POGG clause in s.91 grants the federal Parliament residual power to legislate on matters not exclusively assigned to the provinces, including matters of national concern and emergencies.",
    sectionId: "confederation",
    difficulty: "medium",
  },
  {
    id: "confederation-6",
    question:
      "Which body served as Canada's final court of appeal before the Supreme Court of Canada assumed that role in 1949?",
    options: [
      "The Federal Court of Appeal",
      "The British House of Lords",
      "The Judicial Committee of the Privy Council (JCPC)",
      "The Canadian Senate sitting as a court",
    ],
    correctIndex: 2,
    explanation:
      "Until 1949, the Judicial Committee of the Privy Council in London served as Canada's highest court of appeal. Many foundational constitutional decisions, including the Persons Case, were decided by the JCPC.",
    sectionId: "confederation",
    difficulty: "medium",
  },

  // ============================================================
  // 3. Repatriation & Constitutional History (sectionId: "repatriation")
  // ============================================================
  {
    id: "repatriation-1",
    question:
      "What did the Patriation Reference (1981) establish about the federal government's plan to repatriate the Constitution unilaterally?",
    options: [
      "It was both legal and constitutional in every respect",
      "It was legal but violated the constitutional convention of substantial provincial consent",
      "It was completely illegal and unconstitutional",
      "It required unanimous provincial consent to proceed",
    ],
    correctIndex: 1,
    explanation:
      "The Supreme Court ruled that while unilateral patriation would be legal in a strict sense, it would violate the constitutional convention requiring substantial (though not unanimous) provincial consent.",
    sectionId: "repatriation",
    difficulty: "hard",
  },
  {
    id: "repatriation-2",
    question: "The October Crisis of 1970 involved the invocation of:",
    options: [
      "The notwithstanding clause (s.33)",
      "The War Measures Act",
      "The Emergencies Act",
      "Section 1 of the Charter",
    ],
    correctIndex: 1,
    explanation:
      "During the October Crisis, Prime Minister Trudeau invoked the War Measures Act in response to kidnappings by the FLQ, allowing suspension of civil liberties. The Charter and its notwithstanding clause did not yet exist in 1970.",
    sectionId: "repatriation",
    difficulty: "medium",
  },
  {
    id: "repatriation-3",
    question:
      "Which province refused to sign the 1982 constitutional agreement?",
    options: ["Alberta", "British Columbia", "Ontario", "Quebec"],
    correctIndex: 3,
    explanation:
      "Quebec, under Premier René Lévesque, refused to sign the 1982 constitutional accord. Despite this, the Constitution Act, 1982 still applies to Quebec as a matter of law.",
    sectionId: "repatriation",
    difficulty: "easy",
  },
  {
    id: "repatriation-4",
    question:
      "The Constitution Act, 1982 introduced all of the following EXCEPT:",
    options: [
      "The Canadian Charter of Rights and Freedoms",
      "An amending formula for the Constitution",
      "Recognition and affirmation of Aboriginal and treaty rights (s.35)",
      "The division of powers between federal and provincial governments",
    ],
    correctIndex: 3,
    explanation:
      "The division of powers was established by the Constitution Act, 1867 (the BNA Act), not the 1982 Act. The 1982 Act introduced the Charter, the amending formula, and s.35 Indigenous rights provisions.",
    sectionId: "repatriation",
    difficulty: "medium",
  },
  {
    id: "repatriation-5",
    question:
      "The Meech Lake Accord (1987) ultimately failed because:",
    options: [
      "The Supreme Court struck it down as unconstitutional",
      "It was not ratified by all provincial legislatures within the required timeframe",
      "Quebec withdrew its support before the final vote",
      "The federal Parliament refused to vote on it",
    ],
    correctIndex: 1,
    explanation:
      "The Meech Lake Accord failed in 1990 because it was not ratified by all ten provincial legislatures within the required three-year deadline. Manitoba and Newfoundland did not ratify it in time.",
    sectionId: "repatriation",
    difficulty: "medium",
  },

  // ============================================================
  // 4. Canadian Bill of Rights (sectionId: "bill-of-rights")
  // ============================================================
  {
    id: "bill-of-rights-1",
    question:
      "What is the legal status of the Canadian Bill of Rights (1960)?",
    options: [
      "It is entrenched in the Constitution and cannot be amended by Parliament alone",
      "It is an ordinary federal statute, not constitutionally entrenched",
      "It was repealed and replaced entirely by the Charter in 1982",
      "It is a provincial statute applying only to Ontario and Quebec",
    ],
    correctIndex: 1,
    explanation:
      "The Canadian Bill of Rights is an ordinary federal statute enacted in 1960. Unlike the Charter, it is not constitutionally entrenched, which significantly limits its legal force.",
    sectionId: "bill-of-rights",
    difficulty: "easy",
  },
  {
    id: "bill-of-rights-2",
    question:
      "In R v Drybones (1970), the Supreme Court used the Canadian Bill of Rights to:",
    options: [
      "Uphold federal alcohol regulations on reserves",
      "Strike down a provision of the Indian Act as discriminatory",
      "Declare the entire Indian Act unconstitutional",
      "Establish the Oakes test for justifiable limits",
    ],
    correctIndex: 1,
    explanation:
      "Drybones was a rare case where the Supreme Court actually used the Bill of Rights to render inoperative a provision of the Indian Act that made it an offence for an 'Indian' to be intoxicated off reserve, finding it discriminatory on the basis of race.",
    sectionId: "bill-of-rights",
    difficulty: "medium",
  },
  {
    id: "bill-of-rights-3",
    question:
      "In AG Canada v Lavell (1974), the Supreme Court held that the Indian Act's differential treatment of Indigenous women who married non-Indigenous men was:",
    options: [
      "A violation of the Bill of Rights that rendered the provision inoperative",
      "Not a violation of the Bill of Rights because the Act applied equally to all 'Indians'",
      "A matter for provincial human rights legislation, not the federal Bill of Rights",
      "Unconstitutional under the newly enacted Charter",
    ],
    correctIndex: 1,
    explanation:
      "In Lavell, the Court retreated from Drybones and held that the Indian Act provision did not violate the Bill of Rights because it applied equally to all persons within the category of 'Indians,' adopting a formalistic approach to equality.",
    sectionId: "bill-of-rights",
    difficulty: "hard",
  },
  {
    id: "bill-of-rights-4",
    question:
      "A major weakness of the Canadian Bill of Rights compared to the Charter is that:",
    options: [
      "The Bill of Rights applies to both federal and provincial governments",
      "The Bill of Rights can only be used to interpret federal legislation, not invalidate it in practice",
      "The Bill of Rights contains stronger enforcement mechanisms",
      "The Bill of Rights covers more rights than the Charter",
    ],
    correctIndex: 1,
    explanation:
      "As an ordinary federal statute, the Bill of Rights only applies to federal laws. Courts were reluctant to use it to actually invalidate legislation, instead treating it mainly as an interpretive tool — a key weakness the Charter was designed to overcome.",
    sectionId: "bill-of-rights",
    difficulty: "medium",
  },
  {
    id: "bill-of-rights-5",
    question:
      "The Canadian Bill of Rights applies to:",
    options: [
      "All levels of government in Canada",
      "Only the federal government and federal legislation",
      "Only provincial governments",
      "Private individuals and corporations",
    ],
    correctIndex: 1,
    explanation:
      "The Canadian Bill of Rights is a federal statute and therefore applies only to federal laws and the federal government. It does not bind provincial legislatures or private actors.",
    sectionId: "bill-of-rights",
    difficulty: "easy",
  },

  // ============================================================
  // 5. s.1 Reasonable Limits (sectionId: "s1")
  // ============================================================
  {
    id: "s1-1",
    question: "Section 1 of the Charter states that rights are subject to:",
    options: [
      "Absolute protection with no exceptions",
      "Such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society",
      "Limits set by the Prime Minister through executive order",
      "Whatever restrictions Parliament deems necessary",
    ],
    correctIndex: 1,
    explanation:
      "Section 1 guarantees rights 'subject only to such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society,' establishing the framework for permissible limits on Charter rights.",
    sectionId: "s1",
    difficulty: "easy",
  },
  {
    id: "s1-2",
    question:
      "What is the correct order of the steps in the Oakes test for s.1 justification?",
    options: [
      "Minimal impairment → pressing objective → proportionality → rational connection",
      "Pressing and substantial objective → rational connection → minimal impairment → proportionality between effects and objective",
      "Rational connection → pressing objective → proportionality → minimal impairment",
      "Proportionality → minimal impairment → rational connection → pressing objective",
    ],
    correctIndex: 1,
    explanation:
      "The Oakes test requires: (1) a pressing and substantial objective, then under proportionality: (2) a rational connection between the law and the objective, (3) minimal impairment of the right, and (4) proportionality between the law's effects and its objective.",
    sectionId: "s1",
    difficulty: "medium",
  },
  {
    id: "s1-3",
    question:
      "In the Oakes test, who bears the burden of proving that a Charter limitation is justified under s.1?",
    options: [
      "The individual whose right was infringed",
      "The court on its own motion",
      "The government (Crown)",
      "Both parties share the burden equally",
    ],
    correctIndex: 2,
    explanation:
      "Once a Charter right violation is established, the burden shifts to the government to prove on a balance of probabilities that the limitation is justified under s.1 via the Oakes test.",
    sectionId: "s1",
    difficulty: "easy",
  },
  {
    id: "s1-4",
    question:
      "The 'prescribed by law' requirement in s.1 means that a limitation on a Charter right must be:",
    options: [
      "Approved by a national referendum",
      "Contained in or authorized by an accessible and sufficiently precise law",
      "Enacted only by the federal Parliament, not provincial legislatures",
      "Found in the text of the Charter itself",
    ],
    correctIndex: 1,
    explanation:
      "'Prescribed by law' requires that any limit on a Charter right must have a basis in law (statute, regulation, or common law rule) that is accessible to the public and provides sufficient guidance for legal debate.",
    sectionId: "s1",
    difficulty: "medium",
  },
  {
    id: "s1-5",
    question:
      "The 'minimal impairment' branch of the Oakes test asks whether:",
    options: [
      "The government's objective is pressing and substantial",
      "There is a rational connection between the law and the objective",
      "The law limits the right no more than is reasonably necessary to achieve the objective",
      "The overall benefits of the law outweigh its harmful effects",
    ],
    correctIndex: 2,
    explanation:
      "Minimal impairment asks whether the government has chosen a means that impairs the Charter right as little as reasonably possible. If less restrictive alternatives could achieve the same objective, the law may fail this step.",
    sectionId: "s1",
    difficulty: "medium",
  },

  // ============================================================
  // 6. s.2 Fundamental Freedoms (sectionId: "s2")
  // ============================================================
  {
    id: "s2-1",
    question:
      "In R v Big M Drug Mart (1985), the Supreme Court struck down the Lord's Day Act primarily because it violated:",
    options: [
      "Freedom of expression under s.2(b)",
      "Freedom of conscience and religion under s.2(a)",
      "The right to life, liberty, and security under s.7",
      "Equality rights under s.15",
    ],
    correctIndex: 1,
    explanation:
      "The Court held that the Lord's Day Act had a religious purpose — compelling observance of the Christian Sabbath — which violated freedom of conscience and religion under s.2(a) of the Charter.",
    sectionId: "s2",
    difficulty: "easy",
  },
  {
    id: "s2-2",
    question:
      "In Irwin Toy v Quebec (1989), the Supreme Court established that s.2(b) freedom of expression protects:",
    options: [
      "Only political speech",
      "All expressive activity that conveys meaning, except violence",
      "Only speech that the majority considers valuable",
      "Expression by adults only, not by corporations",
    ],
    correctIndex: 1,
    explanation:
      "In Irwin Toy, the Court held that s.2(b) protects any activity that conveys or attempts to convey meaning, with violence being the only categorical exclusion from the definition of expression.",
    sectionId: "s2",
    difficulty: "medium",
  },
  {
    id: "s2-3",
    question:
      "Harper v Canada (2004) upheld restrictions on third-party election spending. The Court's reasoning primarily relied on:",
    options: [
      "The restrictions violated s.2(b) but were justified under s.1 as protecting electoral fairness",
      "The restrictions did not infringe s.2(b) at all",
      "The notwithstanding clause had been invoked",
      "Third parties have no Charter rights during elections",
    ],
    correctIndex: 0,
    explanation:
      "In Harper, the Court found that spending limits on third parties during elections did infringe s.2(b) expression but were justified under s.1 as a reasonable means of ensuring fairness and equality in the electoral process.",
    sectionId: "s2",
    difficulty: "hard",
  },
  {
    id: "s2-4",
    question:
      "In Alberta v Hutterian Brethren of Wilson Colony (2009), the Supreme Court held that requiring a photo on a driver's licence:",
    options: [
      "Did not infringe freedom of religion under s.2(a)",
      "Infringed s.2(a) but was justified under s.1 for purposes of maintaining the integrity of the licensing system",
      "Was struck down as an unjustified infringement of s.2(a)",
      "Was a matter of provincial property rights, not the Charter",
    ],
    correctIndex: 1,
    explanation:
      "The Court acknowledged that the photo requirement infringed the Hutterites' freedom of religion under s.2(a) but held it was justified under s.1, as the universal photo requirement was necessary for the integrity of the driver's licensing system.",
    sectionId: "s2",
    difficulty: "hard",
  },
  {
    id: "s2-5",
    question:
      "Section 2(d) of the Charter protects freedom of association. The Supreme Court has interpreted this to include:",
    options: [
      "Only the right to form political parties",
      "The right to collective bargaining as part of a meaningful process of association",
      "An absolute right to strike that can never be limited",
      "Protection from being associated with unpopular views",
    ],
    correctIndex: 1,
    explanation:
      "In a series of decisions (notably Health Services, 2007), the Court recognized that s.2(d) protects the right to collective bargaining as an essential part of meaningful association for workers.",
    sectionId: "s2",
    difficulty: "medium",
  },

  // ============================================================
  // 7. s.7 Life Liberty Security (sectionId: "s7")
  // ============================================================
  {
    id: "s7-1",
    question:
      "Section 7 of the Charter protects the right to life, liberty, and security of the person, subject to:",
    options: [
      "The notwithstanding clause exclusively",
      "The principles of fundamental justice",
      "Whatever Parliament considers reasonable",
      "Judicial discretion without any specific standard",
    ],
    correctIndex: 1,
    explanation:
      "Section 7 guarantees that everyone has the right to life, liberty, and security of the person and the right not to be deprived thereof 'except in accordance with the principles of fundamental justice.'",
    sectionId: "s7",
    difficulty: "easy",
  },
  {
    id: "s7-2",
    question:
      "In Carter v Canada (2015), the Supreme Court struck down the criminal prohibition on physician-assisted dying because it was:",
    options: [
      "An arbitrary law with no connection to any government objective",
      "Overbroad — it caught people who were not within the law's intended scope (competent adults with grievous conditions)",
      "Grossly disproportionate to any government objective",
      "Not prescribed by law within the meaning of s.1",
    ],
    correctIndex: 1,
    explanation:
      "In Carter, the Court found the blanket prohibition on assisted dying was overbroad because it went further than necessary to protect vulnerable persons, catching competent adults with grievous and irremediable medical conditions who clearly consented.",
    sectionId: "s7",
    difficulty: "hard",
  },
  {
    id: "s7-3",
    question:
      "In Rodriguez v British Columbia (1993), the Supreme Court ruled on assisted suicide and held that:",
    options: [
      "The prohibition on assisted suicide violated s.7 and could not be saved under s.1",
      "The prohibition did not violate any Charter right",
      "The prohibition violated s.7 but was justified under s.1 — the sanctity of life was a pressing objective",
      "The case was dismissed on procedural grounds",
    ],
    correctIndex: 2,
    explanation:
      "In Rodriguez, the majority held that the prohibition on assisted suicide engaged s.7 but was ultimately justified under s.1 to protect the sanctity of life and vulnerable persons. This decision was effectively overturned by Carter in 2015.",
    sectionId: "s7",
    difficulty: "hard",
  },
  {
    id: "s7-4",
    question:
      "In R v Morgentaler (1988), the Supreme Court struck down Canada's abortion law primarily because:",
    options: [
      "The law violated women's equality rights under s.15",
      "The therapeutic abortion committee system was arbitrary and infringed security of the person under s.7",
      "Parliament lacked jurisdiction over abortion under the division of powers",
      "The law violated freedom of conscience under s.2(a)",
    ],
    correctIndex: 1,
    explanation:
      "The majority in Morgentaler found that the procedural requirements (therapeutic abortion committees) created arbitrary delays and unequal access, infringing women's right to security of the person under s.7 in a manner inconsistent with the principles of fundamental justice.",
    sectionId: "s7",
    difficulty: "medium",
  },
  {
    id: "s7-5",
    question:
      "Under s.7, 'arbitrariness' as a principle of fundamental justice means that a law is unconstitutional if:",
    options: [
      "It is too vague for citizens to understand",
      "It bears no rational connection to its own legislative objective",
      "It catches conduct beyond what is necessary to achieve its objective",
      "Its effects are grossly disproportionate to the state interest",
    ],
    correctIndex: 1,
    explanation:
      "A law is arbitrary under s.7 if there is no rational connection between its provisions and its own stated objective. This is distinct from overbreadth (option C) and gross disproportionality (option D).",
    sectionId: "s7",
    difficulty: "medium",
  },

  // ============================================================
  // 8. s.8 Search and Seizure (sectionId: "s8")
  // ============================================================
  {
    id: "s8-1",
    question:
      "In Hunter v Southam (1984), the Supreme Court held that the purpose of s.8 is to protect:",
    options: [
      "Property rights from government expropriation",
      "A reasonable expectation of privacy",
      "The right to bear arms in one's home",
      "Freedom of the press from police interference",
    ],
    correctIndex: 1,
    explanation:
      "Hunter v Southam established that s.8's protection against unreasonable search and seizure is grounded in the protection of a reasonable expectation of privacy, not merely property rights.",
    sectionId: "s8",
    difficulty: "easy",
  },
  {
    id: "s8-2",
    question:
      "In R v Patrick (2009), the Supreme Court held that garbage placed at the curb for collection:",
    options: [
      "Remains fully protected by s.8 because it was once inside the home",
      "Is not protected because the accused abandoned any reasonable expectation of privacy in it",
      "Can only be searched with a warrant due to its potential personal content",
      "Is protected by s.8 if it contains personal documents",
    ],
    correctIndex: 1,
    explanation:
      "In R v Patrick, the Court held that by placing garbage at the curb for collection, the accused had abandoned his privacy interest in its contents, meaning police could search it without a warrant or s.8 violation.",
    sectionId: "s8",
    difficulty: "medium",
  },
  {
    id: "s8-3",
    question:
      "Hunter v Southam established that, as a general rule, searches are reasonable under s.8 only if they are:",
    options: [
      "Conducted during business hours",
      "Authorized by a prior judicial warrant based on reasonable and probable grounds",
      "Approved by the Attorney General in writing",
      "Carried out by at least two officers",
    ],
    correctIndex: 1,
    explanation:
      "Hunter v Southam set the constitutional standard: a search is presumptively unreasonable unless authorized in advance by a warrant issued by a judicial officer on the basis of reasonable and probable grounds.",
    sectionId: "s8",
    difficulty: "medium",
  },
  {
    id: "s8-4",
    question:
      "Which of the following is a recognized exception to the general warrant requirement under s.8?",
    options: [
      "Searches conducted during a lawful arrest (search incident to arrest)",
      "Any search where the officer believes evidence will be found",
      "Searches authorized verbally by a police chief",
      "Searches of any vehicle at any time without cause",
    ],
    correctIndex: 0,
    explanation:
      "Search incident to arrest is a well-established common law exception to the warrant requirement. It allows police to search a person and their immediate surroundings upon a lawful arrest without obtaining a warrant.",
    sectionId: "s8",
    difficulty: "easy",
  },
  {
    id: "s8-5",
    question:
      "The 'reasonable expectation of privacy' analysis under s.8 considers the totality of circumstances. Which of the following is NOT typically a relevant factor?",
    options: [
      "The nature of the place searched",
      "Whether the information is biographical or personal",
      "The political affiliation of the person being searched",
      "Whether the subject matter of the search was in public view",
    ],
    correctIndex: 2,
    explanation:
      "The reasonable expectation of privacy analysis considers factors like the place, the subject matter, and whether the individual had a direct interest in the item. A person's political affiliation is not a factor in determining privacy expectations under s.8.",
    sectionId: "s8",
    difficulty: "medium",
  },

  // ============================================================
  // 9. s.9-14 Legal Rights (sectionId: "s9-14")
  // ============================================================
  {
    id: "s9-14-1",
    question: "Section 9 of the Charter protects against:",
    options: [
      "Unreasonable search and seizure",
      "Arbitrary detention or imprisonment",
      "Cruel and unusual punishment",
      "Self-incrimination",
    ],
    correctIndex: 1,
    explanation:
      "Section 9 specifically provides that everyone has the right not to be arbitrarily detained or imprisoned. Unreasonable search is s.8, cruel punishment is s.12, and self-incrimination is addressed in s.11(c) and s.13.",
    sectionId: "s9-14",
    difficulty: "easy",
  },
  {
    id: "s9-14-2",
    question:
      "Section 10(b) of the Charter guarantees the right to:",
    options: [
      "A trial by jury",
      "Retain and instruct counsel without delay upon arrest or detention",
      "Remain silent at trial",
      "Appeal any criminal conviction",
    ],
    correctIndex: 1,
    explanation:
      "Section 10(b) guarantees that everyone has the right on arrest or detention to retain and instruct counsel without delay and to be informed of that right.",
    sectionId: "s9-14",
    difficulty: "easy",
  },
  {
    id: "s9-14-3",
    question:
      "In R v Jordan (2016), the Supreme Court set presumptive ceilings for s.11(b) trial delay at:",
    options: [
      "12 months for all cases",
      "18 months for provincial court cases and 30 months for superior court cases",
      "24 months for all cases",
      "6 months for summary offences and 18 months for indictable offences",
    ],
    correctIndex: 1,
    explanation:
      "R v Jordan replaced the prior Morin framework with presumptive ceilings: 18 months from charge to trial in provincial court and 30 months in superior court. Exceeding these creates a presumption of unreasonable delay.",
    sectionId: "s9-14",
    difficulty: "medium",
  },
  {
    id: "s9-14-4",
    question:
      "Section 12 of the Charter protects against:",
    options: [
      "Unreasonable search and seizure",
      "Arbitrary detention",
      "Cruel and unusual treatment or punishment",
      "Compelled self-incrimination",
    ],
    correctIndex: 2,
    explanation:
      "Section 12 guarantees that everyone has the right not to be subjected to any cruel and unusual treatment or punishment. This provision applies to both criminal sentencing and conditions of confinement.",
    sectionId: "s9-14",
    difficulty: "easy",
  },
  {
    id: "s9-14-5",
    question:
      "A person is detained by police at a roadside spot check. Under the Charter, this detention is most likely to be challenged under:",
    options: [
      "Section 7 — principles of fundamental justice",
      "Section 8 — unreasonable search",
      "Section 9 — arbitrary detention",
      "Section 15 — equality rights",
    ],
    correctIndex: 2,
    explanation:
      "Roadside stops involve a deprivation of liberty (detention). The key Charter question is whether the detention is arbitrary under s.9. Courts have generally upheld random spot checks as justified under s.1 despite engaging s.9.",
    sectionId: "s9-14",
    difficulty: "medium",
  },

  // ============================================================
  // 10. s.15 Equality Rights (sectionId: "s15")
  // ============================================================
  {
    id: "s15-1",
    question:
      "Section 15(1) of the Charter guarantees equality on enumerated grounds. Which of the following is an enumerated ground?",
    options: [
      "Sexual orientation",
      "Citizenship",
      "Race",
      "Marital status",
    ],
    correctIndex: 2,
    explanation:
      "The enumerated grounds in s.15(1) are race, national or ethnic origin, colour, religion, sex, age, and mental or physical disability. Sexual orientation is an analogous ground recognized by the courts, not an enumerated one.",
    sectionId: "s15",
    difficulty: "easy",
  },
  {
    id: "s15-2",
    question:
      "What is the difference between formal equality and substantive equality?",
    options: [
      "Formal equality focuses on identical treatment; substantive equality focuses on equal outcomes and addressing systemic disadvantage",
      "Formal equality is found in s.15; substantive equality is found in s.7",
      "There is no difference; the terms are interchangeable",
      "Formal equality applies to government; substantive equality applies to private actors",
    ],
    correctIndex: 0,
    explanation:
      "Formal equality treats everyone identically regardless of circumstances. Substantive equality recognizes that identical treatment can perpetuate disadvantage and focuses on whether a law creates or reinforces systemic inequality for historically disadvantaged groups.",
    sectionId: "s15",
    difficulty: "medium",
  },
  {
    id: "s15-3",
    question:
      "In Vriend v Alberta (1998), the Supreme Court held that Alberta's failure to include sexual orientation in its human rights legislation:",
    options: [
      "Was a valid exercise of provincial jurisdiction with no Charter implications",
      "Violated s.15 because the legislative omission created a distinction based on an analogous ground",
      "Could only be addressed through a constitutional amendment",
      "Was justified under s.1 because human rights are a provincial matter",
    ],
    correctIndex: 1,
    explanation:
      "In Vriend, the Court held that the province's deliberate omission of sexual orientation from its human rights code constituted a distinction based on an analogous ground under s.15, and read sexual orientation into the legislation as a remedy.",
    sectionId: "s15",
    difficulty: "medium",
  },
  {
    id: "s15-4",
    question:
      "An 'analogous ground' under s.15 refers to:",
    options: [
      "A ground of discrimination explicitly listed in s.15(1)",
      "A personal characteristic not listed in s.15 but recognized by courts as similar to enumerated grounds in being immutable or constitutionally significant",
      "A ground that only applies in criminal law contexts",
      "A ground recognized exclusively by provincial human rights codes",
    ],
    correctIndex: 1,
    explanation:
      "Analogous grounds are characteristics not enumerated in s.15 but recognized by courts as deserving of similar protection because they are immutable or fundamental to personal identity, such as sexual orientation or citizenship status.",
    sectionId: "s15",
    difficulty: "medium",
  },
  {
    id: "s15-5",
    question:
      "Section 15(2) of the Charter addresses affirmative action programs. It provides that:",
    options: [
      "All affirmative action programs are unconstitutional",
      "Affirmative action programs aimed at ameliorating disadvantage for historically disadvantaged groups do not violate s.15(1)",
      "Affirmative action is only permitted for racial minorities",
      "Affirmative action programs require invocation of the notwithstanding clause",
    ],
    correctIndex: 1,
    explanation:
      "Section 15(2) protects laws, programs, or activities that have as their object the amelioration of conditions of disadvantaged individuals or groups, ensuring that such affirmative action measures are not struck down under s.15(1).",
    sectionId: "s15",
    difficulty: "medium",
  },

  // ============================================================
  // 11. s.24 Remedies (sectionId: "s24")
  // ============================================================
  {
    id: "s24-1",
    question:
      "Section 24(1) of the Charter provides that anyone whose rights are infringed may apply to a court for:",
    options: [
      "A monetary fine against the offending government official personally",
      "Such remedy as the court considers appropriate and just in the circumstances",
      "An automatic stay of proceedings",
      "A mandatory minimum sentence for the violator",
    ],
    correctIndex: 1,
    explanation:
      "Section 24(1) grants courts broad remedial discretion, allowing them to fashion 'such remedy as the court considers appropriate and just in the circumstances,' including declarations, injunctions, damages, and stays of proceedings.",
    sectionId: "s24",
    difficulty: "easy",
  },
  {
    id: "s24-2",
    question:
      "Under s.24(2), evidence obtained in a manner that infringed a Charter right shall be excluded if:",
    options: [
      "The accused requests it in all cases",
      "Its admission would bring the administration of justice into disrepute",
      "The evidence is hearsay",
      "The police officer acted in good faith",
    ],
    correctIndex: 1,
    explanation:
      "Section 24(2) requires exclusion of evidence obtained through a Charter breach only if admitting it would bring the administration of justice into disrepute, as assessed through the Grant framework.",
    sectionId: "s24",
    difficulty: "easy",
  },
  {
    id: "s24-3",
    question:
      "In R v Grant (2009), the Supreme Court established a revised test for excluding evidence under s.24(2). Which of the following is NOT one of the three lines of inquiry in the Grant framework?",
    options: [
      "The seriousness of the Charter-infringing state conduct",
      "The impact of the breach on the accused's Charter-protected interests",
      "Whether the accused has a prior criminal record",
      "Society's interest in adjudication of the case on its merits",
    ],
    correctIndex: 2,
    explanation:
      "The Grant framework considers: (1) seriousness of the state conduct, (2) impact on the accused's Charter-protected interests, and (3) society's interest in adjudication on the merits. The accused's criminal record is not one of the three inquiries.",
    sectionId: "s24",
    difficulty: "hard",
  },
  {
    id: "s24-4",
    question:
      "A declaration of invalidity under s.52(1) of the Constitution Act, 1982 differs from a s.24(1) remedy in that s.52(1):",
    options: [
      "Is only available to individuals, not organizations",
      "Strikes down the law itself as inconsistent with the Constitution, with effect for everyone",
      "Provides monetary damages to the claimant",
      "Can only be invoked by the federal government",
    ],
    correctIndex: 1,
    explanation:
      "Section 52(1) provides that any law inconsistent with the Constitution is of no force or effect — it invalidates the law itself with general (erga omnes) effect. Section 24(1) remedies, by contrast, are typically specific to the individual claimant.",
    sectionId: "s24",
    difficulty: "hard",
  },

  // ============================================================
  // 12. s.25 & s.35 Indigenous Rights (sectionId: "s25-35")
  // ============================================================
  {
    id: "s25-35-1",
    question:
      "Section 35(1) of the Constitution Act, 1982 provides that:",
    options: [
      "Indigenous peoples have a right to self-government without limitation",
      "The existing Aboriginal and treaty rights of the Aboriginal peoples of Canada are recognized and affirmed",
      "Aboriginal rights are subject to the notwithstanding clause",
      "Only rights that existed before 1763 are constitutionally protected",
    ],
    correctIndex: 1,
    explanation:
      "Section 35(1) recognizes and affirms the existing Aboriginal and treaty rights of the Aboriginal peoples of Canada, providing constitutional protection for these rights outside of the Charter.",
    sectionId: "s25-35",
    difficulty: "easy",
  },
  {
    id: "s25-35-2",
    question:
      "In R v Sparrow (1990), the Supreme Court established a test for determining whether government infringement of an Aboriginal right under s.35 is justified. The first question in the Sparrow test is:",
    options: [
      "Whether the infringement is prescribed by law",
      "Whether there is a valid legislative objective for the infringement",
      "Whether an existing Aboriginal right has been infringed",
      "Whether the duty to consult was fulfilled",
    ],
    correctIndex: 2,
    explanation:
      "The Sparrow test first asks whether an existing Aboriginal right has been infringed. If so, the court then asks whether the infringement can be justified by a valid legislative objective and whether the Crown's fiduciary duty has been respected.",
    sectionId: "s25-35",
    difficulty: "medium",
  },
  {
    id: "s25-35-3",
    question:
      "In Haida Nation v British Columbia (2004), the Supreme Court established that the Crown has a duty to consult with Indigenous peoples:",
    options: [
      "Only after Aboriginal rights have been definitively proven in court",
      "When the Crown contemplates conduct that might adversely affect potential or established Aboriginal rights",
      "Only when a formal treaty exists",
      "Only when the federal government is involved, not provincial governments",
    ],
    correctIndex: 1,
    explanation:
      "Haida Nation held that the duty to consult arises when the Crown has knowledge of a potential Aboriginal right or title and contemplates conduct that might adversely affect it. Rights need not be proven first; a credible claim is sufficient.",
    sectionId: "s25-35",
    difficulty: "medium",
  },
  {
    id: "s25-35-4",
    question:
      "Section 25 of the Charter provides that Charter rights shall not be construed so as to:",
    options: [
      "Extend Aboriginal rights beyond their original scope",
      "Abrogate or derogate from any Aboriginal, treaty, or other rights of Indigenous peoples",
      "Prevent the federal government from legislating on Indigenous matters",
      "Apply the notwithstanding clause to Indigenous rights",
    ],
    correctIndex: 1,
    explanation:
      "Section 25 is a shield provision ensuring that the Charter is not used to diminish Aboriginal, treaty, or other rights and freedoms of Indigenous peoples. It protects Indigenous rights from being overridden by Charter claims.",
    sectionId: "s25-35",
    difficulty: "medium",
  },
  {
    id: "s25-35-5",
    question:
      "In Dickson v Vuntut Gwitchin First Nation (2024), the Supreme Court addressed the relationship between the Charter and Indigenous self-governance. The case concerned:",
    options: [
      "Whether s.35 protects Indigenous hunting rights on Crown land",
      "A residency requirement for candidates in a First Nation election and whether the Charter applies to Indigenous governments",
      "The duty to consult regarding resource extraction on treaty land",
      "Whether the Canadian Bill of Rights applies to band councils",
    ],
    correctIndex: 1,
    explanation:
      "Dickson v Vuntut Gwitchin concerned a residency requirement for council candidates. The case explored how the Charter interacts with Indigenous self-governance rights, engaging the tension between individual Charter rights and collective Indigenous rights under s.25.",
    sectionId: "s25-35",
    difficulty: "hard",
  },

  // ============================================================
  // 13. s.33 Notwithstanding Clause (sectionId: "s33")
  // ============================================================
  {
    id: "s33-1",
    question:
      "The notwithstanding clause (s.33) allows a legislature to override which sections of the Charter?",
    options: [
      "Any section of the Charter without exception",
      "Section 2 and sections 7-15 only",
      "Only sections 7-14 (legal rights)",
      "Sections 2-33 in their entirety",
    ],
    correctIndex: 1,
    explanation:
      "Section 33 allows Parliament or a provincial legislature to declare that a law operates notwithstanding section 2 (fundamental freedoms) or sections 7 through 15 (legal and equality rights). It cannot override democratic rights (ss.3-5), mobility rights (s.6), or language rights.",
    sectionId: "s33",
    difficulty: "medium",
  },
  {
    id: "s33-2",
    question:
      "A declaration under the notwithstanding clause (s.33) expires after:",
    options: [
      "One year, and cannot be renewed",
      "Five years, but can be re-enacted",
      "Ten years",
      "It has no expiry and remains in effect permanently",
    ],
    correctIndex: 1,
    explanation:
      "A notwithstanding declaration has a five-year sunset clause, after which it ceases to have effect. However, the legislature can re-enact the declaration for further five-year periods indefinitely.",
    sectionId: "s33",
    difficulty: "easy",
  },
  {
    id: "s33-3",
    question:
      "In Ford v Quebec (1988), the Supreme Court held that Quebec's use of the notwithstanding clause:",
    options: [
      "Was unconstitutional because it violated the principle of the rule of law",
      "Was valid even though it was applied in an omnibus fashion to all Quebec legislation",
      "Required the legislature to identify the specific Charter right being overridden",
      "Could not be applied retroactively to legislation already in force",
    ],
    correctIndex: 1,
    explanation:
      "In Ford, the Court upheld Quebec's omnibus use of s.33, holding that a legislature need not specify which Charter right is being overridden. The clause could be invoked generally, though the Court noted that specificity was desirable.",
    sectionId: "s33",
    difficulty: "hard",
  },
  {
    id: "s33-4",
    question:
      "Quebec's Bill 21 (2019) invokes the notwithstanding clause to:",
    options: [
      "Prohibit all religious expression in the province",
      "Shield from Charter challenge a law prohibiting certain public servants from wearing religious symbols",
      "Override s.35 Aboriginal rights protections",
      "Opt out of the federal immigration system",
    ],
    correctIndex: 1,
    explanation:
      "Bill 21 invokes s.33 to pre-emptively shield from Charter challenge its prohibition on certain public servants (teachers, police officers, etc.) wearing religious symbols while exercising their functions.",
    sectionId: "s33",
    difficulty: "medium",
  },
  {
    id: "s33-5",
    question:
      "Which of the following Charter rights CANNOT be overridden by the notwithstanding clause?",
    options: [
      "Freedom of expression (s.2(b))",
      "Right to life, liberty, and security (s.7)",
      "Democratic rights, including the right to vote (s.3)",
      "Equality rights (s.15)",
    ],
    correctIndex: 2,
    explanation:
      "Democratic rights under sections 3-5 (including the right to vote and hold elections) are explicitly excluded from the scope of s.33 and cannot be overridden by the notwithstanding clause.",
    sectionId: "s33",
    difficulty: "easy",
  },

  // ============================================================
  // 14. Quebec Secession & Constitutional Conventions (sectionId: "conventions")
  // ============================================================
  {
    id: "conventions-1",
    question:
      "In the Reference re Secession of Quebec (1998), the Supreme Court identified four underlying constitutional principles. Which of the following is NOT one of them?",
    options: [
      "Federalism",
      "Democracy",
      "Parliamentary sovereignty",
      "Protection of minorities",
    ],
    correctIndex: 2,
    explanation:
      "The four principles identified were federalism, democracy, constitutionalism and the rule of law, and protection of minorities. Parliamentary sovereignty is a UK constitutional principle, not one of the four identified in the Secession Reference.",
    sectionId: "conventions",
    difficulty: "medium",
  },
  {
    id: "conventions-2",
    question:
      "According to the Secession Reference, if a clear majority of Quebecers voted 'yes' on a clear question on secession, what would be required?",
    options: [
      "Quebec could immediately declare independence unilaterally",
      "The rest of Canada would be constitutionally obligated to negotiate the terms of secession in good faith",
      "The federal government could simply ignore the referendum result",
      "A unanimous constitutional amendment by all provinces would be needed before any negotiations",
    ],
    correctIndex: 1,
    explanation:
      "The Court held that a clear majority on a clear question would give rise to an obligation on all parties to negotiate secession in good faith, though unilateral secession without negotiation would be unconstitutional.",
    sectionId: "conventions",
    difficulty: "medium",
  },
  {
    id: "conventions-3",
    question:
      "Constitutional conventions differ from constitutional laws in that conventions are:",
    options: [
      "Written into the text of the Constitution Act, 1982",
      "Legally enforceable by courts",
      "Politically binding but not legally enforceable by courts",
      "Only applicable to the federal government, not provinces",
    ],
    correctIndex: 2,
    explanation:
      "Constitutional conventions are unwritten political rules that are considered binding on political actors but are not enforceable by courts. As the Patriation Reference confirmed, courts can recognize conventions but cannot enforce them as law.",
    sectionId: "conventions",
    difficulty: "medium",
  },
  {
    id: "conventions-4",
    question:
      "The Reference re Secession of Quebec established that unilateral secession by a province would be:",
    options: [
      "Perfectly legal under Canadian constitutional law",
      "Illegal under both Canadian constitutional law and international law",
      "Illegal under Canadian law but potentially valid under international law's right of self-determination",
      "A purely political question that courts cannot address",
    ],
    correctIndex: 1,
    explanation:
      "The Court held that unilateral secession would be unconstitutional under Canadian law and that Quebec did not qualify for the international law right of self-determination for colonial or oppressed peoples.",
    sectionId: "conventions",
    difficulty: "hard",
  },
  {
    id: "conventions-5",
    question:
      "Which of the following is an example of a constitutional convention in Canada?",
    options: [
      "The division of powers between federal and provincial governments",
      "The requirement that the Governor General act on the advice of the Prime Minister and Cabinet",
      "The right to vote under s.3 of the Charter",
      "The amending formula in Part V of the Constitution Act, 1982",
    ],
    correctIndex: 1,
    explanation:
      "The convention that the Governor General acts on the advice of the Prime Minister and Cabinet is a key unwritten constitutional convention. It is not found in any constitutional text but is fundamental to responsible government.",
    sectionId: "conventions",
    difficulty: "easy",
  },

  // ============================================================
  // 15. Human Rights Codes (sectionId: "hrc")
  // ============================================================
  {
    id: "hrc-1",
    question:
      "A key difference between the Charter and provincial human rights codes is that:",
    options: [
      "The Charter applies to private actors; human rights codes apply only to government",
      "Human rights codes can regulate private conduct (employment, housing, services); the Charter applies only to government action",
      "Human rights codes are constitutionally entrenched; the Charter is not",
      "The Charter covers more grounds of discrimination than human rights codes",
    ],
    correctIndex: 1,
    explanation:
      "The Charter only applies to government action (s.32). Provincial human rights codes fill the gap by prohibiting discrimination by private actors in areas like employment, housing, and the provision of services.",
    sectionId: "hrc",
    difficulty: "easy",
  },
  {
    id: "hrc-2",
    question:
      "In Vriend v Alberta (1998), the Supreme Court's remedy for the province's failure to include sexual orientation in its human rights code was to:",
    options: [
      "Strike down the entire human rights code as unconstitutional",
      "Read sexual orientation into the legislation as a prohibited ground",
      "Order the province to hold a referendum on the issue",
      "Declare the matter outside the court's jurisdiction",
    ],
    correctIndex: 1,
    explanation:
      "Rather than striking down the entire statute, the Court used the remedy of 'reading in' — adding sexual orientation as a prohibited ground of discrimination to Alberta's human rights legislation to bring it into compliance with the Charter.",
    sectionId: "hrc",
    difficulty: "medium",
  },
  {
    id: "hrc-3",
    question:
      "Provincial human rights codes are considered 'quasi-constitutional' legislation, which means:",
    options: [
      "They are part of the Constitution and can only be changed by constitutional amendment",
      "They have a special status and take precedence over other ordinary provincial legislation in cases of conflict",
      "They have the same status as any other provincial statute",
      "They only apply when the Charter does not",
    ],
    correctIndex: 1,
    explanation:
      "Human rights codes are called 'quasi-constitutional' because courts have recognized their special importance and held that they take precedence over other ordinary provincial legislation in cases of conflict.",
    sectionId: "hrc",
    difficulty: "medium",
  },
  {
    id: "hrc-4",
    question:
      "The Ontario Human Rights Code prohibits discrimination in all of the following areas EXCEPT:",
    options: [
      "Employment",
      "Housing (accommodation)",
      "Federal government services",
      "Services, goods, and facilities",
    ],
    correctIndex: 2,
    explanation:
      "As a provincial statute, the Ontario Human Rights Code applies to matters within provincial jurisdiction — employment, housing, services, contracts, and union membership. Federal government services fall under the Canadian Human Rights Act instead.",
    sectionId: "hrc",
    difficulty: "medium",
  },
  {
    id: "hrc-5",
    question:
      "If a federally regulated employer discriminates on the basis of disability, the complaint would most appropriately be brought under:",
    options: [
      "The Ontario Human Rights Code",
      "The Canadian Human Rights Act",
      "Section 15 of the Charter directly",
      "The Canadian Bill of Rights",
    ],
    correctIndex: 1,
    explanation:
      "Federally regulated employers fall under federal jurisdiction and are governed by the Canadian Human Rights Act, not provincial human rights codes. The Charter applies to government action, not directly to private employment disputes.",
    sectionId: "hrc",
    difficulty: "hard",
  },
];
