import { createHash } from 'crypto'
import { Lib, Plugin } from './client.enum';

export function generateID(key: string): string {
  return `${key}-${createHash('md5').update(`${key}-${new Date().toISOString()}`).digest('hex')}`
}

export function generatePluginVersion() {
  const version = Lib.Name + ";" + Lib.Version + ";" + Plugin.Name + ";" + Plugin.Version;
  return Buffer.from(version).toString('base64');
}

export type Constructor<T> = new (...args: any[]) => T;
