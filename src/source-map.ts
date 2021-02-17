import 'source-map-support/register';

export type blah = {
  a: number
}

export function bluf(): blah {
  return {a: 1}
}

export function blah() {
  throw new Error('bah')
}
