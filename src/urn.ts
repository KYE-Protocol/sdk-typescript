/**
 * KYE Protocol™ URN — public format.
 *
 *   kye:<entity-class>:<trust-domain>:<subclass>:<local>
 *
 * - <entity-class>  one of the public EntityClass values
 * - <trust-domain>  RFC 1035 / 5891 hostname owned by the issuing org
 * - <subclass>      organisation-defined sub-namespace (alphanum + hyphen)
 * - <local>         organisation-defined identifier (alphanum + hyphen)
 *
 * The full normative URN spec lives at:
 *   https://kye-protocol.github.io/protocol.html#urn-format
 *   https://github.com/KYE-Protocol/id-format
 */

import { EntityClass, ENTITY_CLASSES } from './vocabulary.js';

const URN_RE = /^kye:([a-z][a-z0-9-]*):([a-z0-9.-]+):([a-z0-9-]+):([a-zA-Z0-9_-]+)$/;

export interface KyeUrnParts {
  entityClass: EntityClass | string;
  trustDomain: string;
  subclass:    string;
  local:       string;
}

export class KyeUrn implements KyeUrnParts {
  readonly entityClass: EntityClass | string;
  readonly trustDomain: string;
  readonly subclass:    string;
  readonly local:       string;

  private constructor(parts: KyeUrnParts) {
    this.entityClass = parts.entityClass;
    this.trustDomain = parts.trustDomain;
    this.subclass    = parts.subclass;
    this.local       = parts.local;
  }

  /** Parse a URN string. Throws if the format is invalid. */
  static parse(urn: string): KyeUrn {
    if (typeof urn !== 'string') throw new TypeError('URN must be a string');
    const m = URN_RE.exec(urn);
    if (!m) throw new Error(`Invalid KYE URN: ${urn}`);
    return new KyeUrn({
      entityClass: m[1],
      trustDomain: m[2],
      subclass:    m[3],
      local:       m[4],
    });
  }

  /** Returns true if the URN is well-formed without throwing. */
  static isValid(urn: string): boolean {
    return typeof urn === 'string' && URN_RE.test(urn);
  }

  /** Returns true if the entity class is one of the public-vocabulary classes. */
  static isPublicClass(urn: string): boolean {
    if (!KyeUrn.isValid(urn)) return false;
    const cls = KyeUrn.parse(urn).entityClass as EntityClass;
    return ENTITY_CLASSES.includes(cls);
  }

  /** Build a URN from its parts. Validates each segment. */
  static build(parts: KyeUrnParts): KyeUrn {
    const candidate = `kye:${parts.entityClass}:${parts.trustDomain}:${parts.subclass}:${parts.local}`;
    return KyeUrn.parse(candidate); // re-parse to enforce the regex
  }

  /** String form: kye:<class>:<trust-domain>:<subclass>:<local>. */
  toString(): string {
    return `kye:${this.entityClass}:${this.trustDomain}:${this.subclass}:${this.local}`;
  }

  /** JSON form for serialisation. */
  toJSON(): string {
    return this.toString();
  }
}
