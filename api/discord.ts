import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // API-URL für Discord-Guild-Widget
    const { guildId = '831161440705839124' } = req.query;
    const apiUrl = `https://discord.com/api/guilds/${guildId}/widget.json`;

    // Die API abrufen
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Fehler beim Abrufen der API: ${response.status} ${response.statusText}`);
    }

    const data: any = await response.json(); // Hier wird "any" als Datentyp verwendet

    const instantInvite = data.instant_invite;

    // Weiterleitung zur Discord-Einladung
    res.writeHead(302, { Location: instantInvite });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).send(`Ein Fehler ist aufgetreten: ${error.message}`);
  }
}
