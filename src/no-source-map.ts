export type blah = {
  a: number
}

export function fluff(): number {
  return 3
}

export function bluf(): blah {
  return {a: 1}
}

export function blah() {
  throw new Error('bah')
}
