/**
 * KYE Protocol™ — public vocabulary constants.
 *
 * Mirrors `public/vocabulary/` in the spec repo. These values are
 * stable across the v1.x series and used as discriminators in every
 * KYE Protocol™ schema.
 */

export const EntityClass = {
  HUMAN:      'human',
  BUSINESS:   'business',
  AGENT:      'agent',
  SERVICE:    'service',
  MODEL:      'model',
  TOOL:       'tool',
  WORKFLOW:   'workflow',
  RESOURCE:   'resource',
  CAPABILITY: 'capability',
  CREDENTIAL: 'credential',
  TRUST:      'trust',
  CARD:       'card',
  WALLET:     'wallet',
} as const;
export type EntityClass = typeof EntityClass[keyof typeof EntityClass];

export const ENTITY_CLASSES: readonly EntityClass[] = Object.values(EntityClass);

/** The three canonical decision codes returned by `POST /v1/runtime/authorize`. */
export const DecisionCode = {
  ALLOW_WITH_CONSTRAINTS: 'allow_with_constraints',
  REQUIRE_APPROVAL:       'require_approval',
  DENY:                   'deny',
} as const;
export type DecisionCode = typeof DecisionCode[keyof typeof DecisionCode];

/** Signal types emitted on the cascade bus. */
export const SignalType = {
  STOP:       'stop',
  QUARANTINE: 'quarantine',
  REVOKE:     'revoke',
  RESTORE:    'restore',
  REPLAY:     'replay',
} as const;
export type SignalType = typeof SignalType[keyof typeof SignalType];

/** The six dimensions of state composed at every authorize call. */
export const StateDimension = {
  LIFECYCLE:  'lifecycle',
  AUTHORITY:  'authority',
  DELEGATION: 'delegation',
  CREDENTIAL: 'credential',
  RECOVERY:   'recovery',
  RISK:       'risk',
} as const;
export type StateDimension = typeof StateDimension[keyof typeof StateDimension];

/** Conformance ladder — the 5-tier badge programme. */
export const ConformanceLevel = {
  L0_DECLARED:       'L0_declared',
  L1_SELF_TESTED:    'L1_self_tested',
  L2_SELF_ATTESTED:  'L2_self_attested',
  L3_CONFORMANT:     'L3_conformant',
  L4_CERTIFIED:      'L4_certified',
} as const;
export type ConformanceLevel = typeof ConformanceLevel[keyof typeof ConformanceLevel];
