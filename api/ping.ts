import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { lang = 'de' } = req.query;
  const loadingTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  if (lang == 'de' || lang != 'en') {
    return res.status(200).send(`Die Seite wurde in ${loadingTime}ms geladen.`)
  } else if (lang == 'en') {
    return res.status(200).send(`The page was loaded in ${loadingTime}ms.`)
  }
}
