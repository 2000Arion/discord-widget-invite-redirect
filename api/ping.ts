import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const startTime = process.hrtime();
  const endTime = process.hrtime(startTime);
  const durationInMilliseconds = endTime[0] * 1000 + endTime[1] / 1e6;
  return res.json({
    message: `Die Seite wurde in ${durationInMilliseconds} ms geladen.`,
  })
}
