import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_BASE = "https://api.airtable.com/v0/appFzpEcAata6XxpD/event";

const SPORT_FILTERS: Record<string, string> = {
  futebol:
    "AND({Status}=TRUE(),FIND('futebol',LOWER(ARRAYJOIN(sport))),NOT(FIND('americano',LOWER(ARRAYJOIN(sport)))))",
  basquete:
    "AND({Status}=TRUE(),FIND('basquete',LOWER(ARRAYJOIN(sport))))",
  "futebol-americano":
    "AND({Status}=TRUE(),FIND('futebol americano',LOWER(ARRAYJOIN(sport))))",
  automobilismo:
    "AND({Status}=TRUE(),FIND('automobilismo',LOWER(ARRAYJOIN(sport))))",
  beisebol:
    "AND({Status}=TRUE(),FIND('beisebol',LOWER(ARRAYJOIN(sport))))",
  hoquei:
    "AND({Status}=TRUE(),FIND('hóquei',LOWER(ARRAYJOIN(sport))))",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing API token" });

  const sport = req.query.sport as string | undefined;

  const params = new URLSearchParams({
    view: "Grid view",
    cellFormat: "string",
    timeZone: "America/Sao_Paulo",
    userLocale: "pt-br",
  });

  if (sport) {
    const formula = SPORT_FILTERS[sport];
    if (!formula) return res.status(400).json({ error: "Unsupported sport" });
    params.set("filterByFormula", formula);
  } else {
    params.set("filterByFormula", "{Status}=TRUE()");
  }

  const response = await fetch(`${AIRTABLE_BASE}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(response.status).json(data);
}
