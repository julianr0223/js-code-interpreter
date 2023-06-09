import type { NextApiRequest, NextApiResponse } from 'next'
import { SandboxBody } from '@/services/model/SandboxModel'
import { getCodeSandbox } from '@/services/codeinterpreterService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {    
    const body = req.body
    const response = await getCodeSandbox(body)           
    res.status(200).json(response)
  } else {    
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
