import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_BASE = "https://api.airtable.com/v0/appFzpEcAata6XxpD/team";

const SPORT_NAMES: Record<string, string> = {
  futebol: "FUTEBOL",
  basquete: "BASQUETE",
  "futebol-americano": "FUTEBOL AMERICANO",
  automobilismo: "AUTOMOBILISMO",
  beisebol: "BEISEBOL",
  hoquei: "HÓQUEI",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing API token" });

  const sport = req.query.sport as string | undefined;
  let filter = "AND({name-team}!='',{Logo}!='')";
  if (sport && SPORT_NAMES[sport]) {
    filter = `AND({name-team}!='',{Logo}!='',{Esporte}='${SPORT_NAMES[sport]}')`;
  }

  const params = new URLSearchParams({
    view: "Grid view",
    filterByFormula: filter,
  });

  const response = await fetch(`${AIRTABLE_BASE}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(response.status).json(data);
}
