/**
 * KYE Protocol™ — TypeScript SDK public entry point.
 *
 * The v0.1.0 public-skeleton release exposes the URN parser/builder
 * and the public vocabulary constants. The runtime client (decision
 * endpoint, signing helpers, evidence-pack builder, OSCAL exporter)
 * ships with v1.0 GA.
 *
 *   import { KyeUrn, EntityClass, DecisionCode } from '@kye-protocol/sdk';
 *
 * Documentation: https://kye-protocol.github.io/concepts.html
 */

export { KyeUrn } from './urn.js';
export type { KyeUrnParts } from './urn.js';
export {
  EntityClass,
  ENTITY_CLASSES,
  DecisionCode,
  SignalType,
  StateDimension,
  ConformanceLevel,
} from './vocabulary.js';

/** Spec version this SDK targets. */
export const SPEC_VERSION = 'kye-protocol-1.0';
/** Public SDK release. The runtime client ships at v1.0 GA. */
export const SDK_VERSION  = '0.1.0-public-skeleton';
