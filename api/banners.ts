import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_BASE = "https://api.airtable.com/v0/appFzpEcAata6XxpD/banner";

const SPORT_FILTERS: Record<string, string> = {
  futebol:
    "AND(FIND('futebol',LOWER(ARRAYJOIN(sport))),NOT(FIND('americano',LOWER(ARRAYJOIN(sport)))))",
  basquete: "FIND('basquete',LOWER(ARRAYJOIN(sport)))",
  "futebol-americano": "FIND('futebol americano',LOWER(ARRAYJOIN(sport)))",
  automobilismo: "FIND('automobilismo',LOWER(ARRAYJOIN(sport)))",
  beisebol: "FIND('beisebol',LOWER(ARRAYJOIN(sport)))",
  hoquei: "FIND('hóquei',LOWER(ARRAYJOIN(sport)))",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing API token" });

  const sport = req.query.sport as string | undefined;
  const params = new URLSearchParams({ view: "Grid view" });

  if (sport && SPORT_FILTERS[sport]) {
    params.set("filterByFormula", SPORT_FILTERS[sport]);
  }

  const response = await fetch(`${AIRTABLE_BASE}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(response.status).json(data);
}
