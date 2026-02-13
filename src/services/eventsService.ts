export interface EventData {
  id: string;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  date: string;
  channels: string[];
}

interface AirtableEventFields {
  "team-mandante"?: string;
  "team-visitante"?: string;
  "Logo (from team-mandante)"?: string;
  "Logo (from team-visitante)"?: string;
  "channel"?: string;
  "date-event"?: string;
  "sport"?: string;
  "Status"?: string;
}

interface AirtableRecord {
  id: string;
  fields: AirtableEventFields;
}

export async function fetchBasketballEvents(
  signal?: AbortSignal
): Promise<EventData[]> {
  const res = await fetch("/api/events?sport=basquete", { signal });
  const data = await res.json();

  return (data.records as AirtableRecord[])
    .filter(
      (r) =>
        r.fields["team-mandante"]?.trim() &&
        r.fields["team-visitante"]?.trim()
    )
    .map((r) => ({
      id: r.id,
      homeTeam: r.fields["team-mandante"]!,
      homeTeamLogo: r.fields["Logo (from team-mandante)"]?.trim() || "",
      awayTeam: r.fields["team-visitante"]!,
      awayTeamLogo: r.fields["Logo (from team-visitante)"]?.trim() || "",
      date: r.fields["date-event"] ?? "",
      channels: r.fields["channel"]
        ? r.fields["channel"].split(", ")
        : [],
    }));
}
