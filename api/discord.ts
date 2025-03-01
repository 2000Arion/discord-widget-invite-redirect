import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { guildId = '831161440705839124' } = req.query;
    const apiUrl = `https://discord.com/api/guilds/${guildId}/widget.json`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data: any = await response.json();

    const instantInvite = data.instant_invite;

    res.writeHead(302, { Location: instantInvite });
    res.end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: {
        de: `Fehler beim Abrufen der API: ${error.message}`,
        en: `Error retrieving API: ${error.message}`
      },
    });

    }
  }
