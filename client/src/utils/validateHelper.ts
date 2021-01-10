export function getValidateStatus(value: string, isError: boolean): 'error' | 'success' | '' {
  return value? isError ? 'error' : 'success': ''
}

export function getHelp(value: string, message: string | undefined): string | undefined {
  return value? message : undefined
}
