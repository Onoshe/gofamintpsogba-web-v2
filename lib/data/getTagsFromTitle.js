const TAG_RULES = [
  { tag: "Faith", keywords: ["faith", "believe", "belief", "trust"] },
  { tag: "Prayer", keywords: ["prayer", "pray", "prayers", "intercession"] },
  { tag: "Worship", keywords: ["worship", "praise", "adoration"] },
  { tag: "Grace", keywords: ["grace"] },
  { tag: "Mercy", keywords: ["mercy"] },
  { tag: "Strength", keywords: ["strength", "strong"] },
  { tag: "Victory", keywords: ["victory", "overcome", "conquer"] },
  { tag: "Covenant", keywords: ["covenant"] },
  { tag: "Love", keywords: ["love", "charity"] },
  { tag: "Wisdom", keywords: ["wisdom", "wise", "understanding"] },
  { tag: "Purpose", keywords: ["purpose", "calling", "destiny"] },
  { tag: "Success", keywords: ["success", "prosper", "prosperity", "abundance", "blessing"] },
  { tag: "Authority", keywords: ["authority", "dominion", "kingdom", "power"] },
  { tag: "Hope", keywords: ["hope"] },
  { tag: "Healing", keywords: ["healing", "heal"] },
  { tag: "Forgiveness", keywords: ["forgive", "forgiveness"] },
  { tag: "Joy", keywords: ["joy", "rejoice"] },
  { tag: "Righteousness", keywords: ["righteous", "holiness", "holy", "obedience"] },
  { tag: "Relationships", keywords: ["marriage", "family", "children", "neighbor", "relationship"] },
  { tag: "Leadership", keywords: ["leader", "leadership", "shepherd"] },
  { tag: "Service", keywords: ["service", "serve", "ministry"] },
  { tag: "Stewardship", keywords: ["steward", "stewardship", "treasure", "invest", "giving"] },
  { tag: "Words", keywords: ["word", "words", "tongue", "confess", "confession"] },
  { tag: "Provision", keywords: ["provision", "provide", "supply"] },
  { tag: "Guidance", keywords: ["guidance", "direction", "path", "way", "lead"] }
];

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalize = (title) =>
  String(title || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const getTagsFromTitle = (title, maxTags = 4) => {
  const normalized = normalize(title);
  if (!normalized) return ["Faith"];

  const tags = [];

  for (const rule of TAG_RULES) {
    if (tags.length >= maxTags) break;

    const hit = rule.keywords.some((kw) => {
      const re = new RegExp(`\\b${escapeRegExp(kw)}\\b`, "i");
      return re.test(normalized);
    });

    if (hit) tags.push(rule.tag);
  }

  return tags.length ? tags : ["Faith"];
};

