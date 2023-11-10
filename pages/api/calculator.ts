import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  log: string[]
}

let log: string[] = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { entry } = req.body
    log.push(entry)
    res.status(200).json({ log })
  } else {
    res.status(200).json({ log })
  }
}