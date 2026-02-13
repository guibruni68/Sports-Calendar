import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_BASE = "https://api.airtable.com/v0/appFzpEcAata6XxpD/event";

const SPORT_FILTERS: Record<string, string> = {
  basquete:
    "AND({Status}=TRUE(),FIND('basquete',LOWER(ARRAYJOIN(sport))))",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing API token" });

  const sport = (req.query.sport as string) ?? "basquete";
  const formula = SPORT_FILTERS[sport];
  if (!formula) return res.status(400).json({ error: "Unsupported sport" });

  const params = new URLSearchParams({
    view: "Grid view",
    cellFormat: "string",
    timeZone: "America/Sao_Paulo",
    userLocale: "pt-br",
    filterByFormula: formula,
  });

  const response = await fetch(`${AIRTABLE_BASE}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(response.status).json(data);
}
