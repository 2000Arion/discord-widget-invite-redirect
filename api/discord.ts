import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // API-URL für Discord-Guild-Widget
    const { guildId = '831161440705839124' } = req.query;
    const apiUrl = `https://discord.com/api/guilds/${guildId}/widget.json`;

    // Die API abrufen
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data: any = await response.json(); // Hier wird "any" als Datentyp verwendet

    const instantInvite = data.instant_invite;

    // Weiterleitung zur Discord-Einladung
    res.writeHead(302, { Location: instantInvite });
    res.end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: {
        de: `Fehler beim Abrufen der API: ${error.message}`,
        en: `Error retrieving API: ${error.message}`
      },
    })

    }
  }
