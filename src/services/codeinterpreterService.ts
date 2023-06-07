import { SandboxBody, SandboxResponse } from './model/SandboxModel'


export const getCodeSandbox: any = async(body: SandboxBody) => {
    const codeSandboxApiURL = 'https://codesandbox.io/api/v1/sandboxes/define?json=1'
    const response = await fetch(codeSandboxApiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if(!response.ok) {
        throw new Error(`Failed to create sandbox: ${response.statusText}`)
      }

      const data: SandboxResponse = await response.json()
      return { link: `https://codesandbox.io/s/${data.sandbox_id}` }
}