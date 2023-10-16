import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { lang = 'de' } = req.query;
  const startTime = process.hrtime();
  const endTime = process.hrtime(startTime);
  const durationInMilliseconds = endTime[0] * 1000 + endTime[1] / 1e6;
  if (lang == 'de') {
    return res.status(200).send(`Die Seite wurde in ${durationInMilliseconds}ms geladen.`)
  } else if (lang == 'en') {
    return res.status(200).send(`The page was loaded in ${durationInMilliseconds}ms.`)
  }
}
