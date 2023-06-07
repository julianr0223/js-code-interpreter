export type SandboxBody = {
  files: {
    [key: string]: {
      content: string | { [key: string]: any }
      isBinary?: boolean;
    }
  }
}

export type SandboxResponse = {
  sandbox_id: string
}
