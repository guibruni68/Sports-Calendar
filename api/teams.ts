import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_BASE = "https://api.airtable.com/v0/appFzpEcAata6XxpD/team";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing API token" });

  const params = new URLSearchParams({
    view: "Grid view",
    filterByFormula: "AND({name-team}!='',{Logo}!='')",
  });

  const response = await fetch(`${AIRTABLE_BASE}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(response.status).json(data);
}
