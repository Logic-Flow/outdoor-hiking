import { v4 as uuidV4 } from 'uuid'

export function createUuid(): string {
  return uuidV4()
}
