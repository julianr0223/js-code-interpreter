import type { NextApiRequest, NextApiResponse } from 'next'
import { SandboxBody } from '@/services/model/SandboxModel'
import { getCodeSandbox } from '@/services/codeinterpreterService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {        
    res.status(200).json('this is a chat GPT plugin to create code sanboxes ...')
  } else {    
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }
}
