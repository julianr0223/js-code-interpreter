import type { NextApiRequest, NextApiResponse } from 'next'
import { SandboxBody  } from '../../services/model/SandboxModel'
import { getCodeSandbox } from '../../services/codeinterpreterService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const code = 'console.log("Código de prueba")'
    // const body = req.body.content

    // TODO: verificar si chatgpt puede crear este body
    const body: SandboxBody = {
        files: {
          'index.js': {
            content: code,
            isBinary: false,
          },
          'package.json': {
            content: {
              dependencies: {}
            },
          },
        },
      }
      
    const response = await getCodeSandbox(body)           
    res.status(200).json(response)
  } else {    
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
