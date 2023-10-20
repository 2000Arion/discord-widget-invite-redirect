import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { lang = 'de' } = req.query;
  const start = Date.now();

  // Simuliere eine asynchrone Aufgabe (z.B. eine Datenbankabfrage oder eine API-Anfrage)
  // Du kannst diese Aufgabe durch eine echte Aufgabe ersetzen.
  await new Promise(resolve => setTimeout(resolve, 100));

  const end = Date.now();
  const loadingTime = end - start;
  if (lang == 'de' || lang != 'en') {
    return res.status(200).send(`Die Seite wurde in ${loadingTime}ms geladen.`)
  } else if (lang == 'en') {
    return res.status(200).send(`The page was loaded in ${loadingTime}ms.`)
  }
}
