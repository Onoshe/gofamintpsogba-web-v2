export const pastorCornerImgs = [
    { tag: "Authority", url: "/images/pstCorner/authority.png" },
    { tag: "Breakthrough", url: "/images/pstCorner/breakthrough.png" },
    { tag: "Covenant", url: "/images/pstCorner/covenant.png" },
    { tag: "Faith", url: "/images/pstCorner/faith.png" },
    { tag: "Forgiveness", url: "/images/pstCorner/forgiveness.png" },
    { tag: "Grace", url: "/images/pstCorner/grace.png" },
    { tag: "Guidance", url: "/images/pstCorner/guidance.png" },
    { tag: "Healing", url: "/images/pstCorner/healing.png" },
    { tag: "Hope", url: "/images/pstCorner/hope.png" },
    { tag: "Joy", url: "/images/pstCorner/joy.png" },
    { tag: "Leadership", url: "/images/pstCorner/leadership.png" },
    { tag: "Love", url: "/images/pstCorner/love.png" },
    { tag: "Mercy", url: "/images/pstCorner/mercy.png" },
    { tag: "Power", url: "/images/pstCorner/power.png" },
    { tag: "Prayer", url: "/images/pstCorner/prayer.png" },
    { tag: "Provision", url: "/images/pstCorner/provision.png" },
    { tag: "Purpose", url: "/images/pstCorner/purpose.png" },
    { tag: "Relationship", url: "/images/pstCorner/relationship.png" },
    { tag: "Righteousness", url: "/images/pstCorner/righteousness.png" },
    { tag: "Service", url: "/images/pstCorner/service.png" },
    { tag: "Stewardship", url: "/images/pstCorner/stewardship.png" },
    { tag: "Strength", url: "/images/pstCorner/strength.png" },
    { tag: "Success", url: "/images/pstCorner/success.png" },
    { tag: "Victory", url: "/images/pstCorner/victory.png" },
    { tag: "Wisdom", url: "/images/pstCorner/wisdom.png" },
    { tag: "Word", url: "/images/pstCorner/word.png" },
    { tag: "Worship", url: "/images/pstCorner/worship.png" }
];

export const pastorCornerImgsMap = new Map<string, string>();
pastorCornerImgs.forEach((img) => {
    pastorCornerImgsMap.set(img.tag, img.url);
});