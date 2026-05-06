# KYE Protocol™ — TypeScript SDK

[![npm](https://img.shields.io/badge/npm-%40kye--protocol%2Fsdk-1A8754?style=flat-square)](https://www.npmjs.com/package/@kye-protocol/sdk)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square)](LICENSE)
[![Spec: v1.0](https://img.shields.io/badge/spec-v1.0-00838F?style=flat-square)](https://kye-protocol.github.io/whitepaper.html)
[![Schemas](https://img.shields.io/badge/schemas-57-1A73E8?style=flat-square)](https://kye-protocol.github.io/concepts.html)
[![Conformance: 38/38](https://img.shields.io/badge/conformance-38%2F38-1A8754?style=flat-square)](https://kye-protocol.github.io/compliance.html)

> The official TypeScript SDK for **KYE Protocol™** — the open Entity Authority Protocol for AI Governance.
>
> Implements the public-vocabulary surface today (URN parsing, type constants, schema types). The full runtime client (decision endpoint, signing helpers, evidence-pack builder) ships with v1.0 GA.

---

## Install

```bash
npm install @kye-protocol/sdk
# or
pnpm add @kye-protocol/sdk
# or
yarn add @kye-protocol/sdk
```

## What KYE Protocol™ does

KYE Protocol™ proves **who or what is acting, on behalf of whom, using which capability, under what authority, in what state, and with what audit trail** — for every action a human, service, or AI agent takes. The result is **Authority Finality™**: a replayable, signed proof layer for AI-agent actions.

```
Customer / Cardholder
        ↓ delegates authority
AI Agent
        ↓ requests purchase / payment / API call
KYE Authority Decision
        ↓ allow / deny / require_approval
Bank / Service / Resource
        ↓ executes
KYE Audit + Evidence Pack
```

## The six primitives

| Primitive | Question it answers | Schema |
|---|---|---|
| **Identity** | who or what is acting? | `entity.json` |
| **On-Behalf-Of** | on whose behalf? | `delegation.json` |
| **Authority** | under what authority? | `authority-grant.json` |
| **Scope** | within what scope? | `scope.json` |
| **State** | in what state? | `state-composition.json` |
| **Audit** | with what proof? | `audit-event.json` · `evidence-pack.json` |

Detailed reference: [kye-protocol.github.io/concepts](https://kye-protocol.github.io/concepts.html).

## Quickstart

```typescript
import {
  KyeUrn,
  EntityClass,
  DecisionCode,
  SignalType,
} from '@kye-protocol/sdk';

// 1. Parse a KYE URN
const urn = KyeUrn.parse('kye:agent:acme.eu:treasury:fx-router');
console.log(urn.entityClass);   // 'agent'
console.log(urn.trustDomain);   // 'acme.eu'
console.log(urn.subclass);      // 'treasury'
console.log(urn.local);         // 'fx-router'

// 2. Build a URN
const cardToken = KyeUrn.build({
  entityClass: EntityClass.CREDENTIAL,
  trustDomain: 'bank-z.eu',
  subclass:    'card-token',
  local:       'tok_abc123',
});
console.log(cardToken.toString()); // 'kye:credential:bank-z.eu:card-token:tok_abc123'

// 3. Decision codes — the canonical three
DecisionCode.ALLOW_WITH_CONSTRAINTS;
DecisionCode.REQUIRE_APPROVAL;
DecisionCode.DENY;

// 4. Signal types — every revocation/cascade carries one
SignalType.QUARANTINE;
SignalType.REVOKE;
SignalType.RESTORE;
```

## Runtime client (v1.0 GA)

The runtime client (`POST /v1/runtime/authorize`, `GET /v1/decisions/{id}/map`, signing/verification helpers, evidence-pack builder, audit-event emitter, OSCAL exporter, Compliance Card refresher) ships with the v1.0 GA tag. Today's repo holds the public-vocabulary surface so downstream tooling can validate URNs, build typed objects, and integrate into CI without waiting on the full runtime.

Status: see the [public roadmap](https://kye-protocol.github.io/roadmap.html).

## Compliance bindings

The SDK is shipped Apache 2.0 and used in production stacks aligned with:

- SOC 2 · ISO 27001:2022 · ISO 42001
- PCI DSS 4.0 · PSD2 / PSD3 · DORA · NIS2
- EU AI Act · NIST AI RMF · GDPR · NIST CSF · FedRAMP · NIST 800-207 · HIPAA

266 control mappings across 13 frameworks: [kye-protocol.github.io/frameworks](https://kye-protocol.github.io/frameworks.html).

## Conformance

```bash
npm run conformance
```

Runs the public 38-fixture black-box conformance pack against your KYE Protocol™ implementation. The reference Gateway passes 38/38.

## Project layout

```
sdk-typescript/
├── src/
│   ├── urn.ts           # KYE URN parser + builder (public vocabulary)
│   ├── vocabulary.ts    # Entity classes, decision codes, signal types
│   ├── types.ts         # TypeScript types for every public schema
│   └── index.ts         # Public entry point
├── test/                # vitest specs
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

## Documentation

- **Protocol overview** — https://kye-protocol.github.io/protocol.html
- **Six primitives** — https://kye-protocol.github.io/concepts.html
- **Open banking flow** — https://kye-protocol.github.io/open-banking.html
- **Use cases** — https://kye-protocol.github.io/usecases.html
- **Whitepaper** — https://kye-protocol.github.io/whitepaper.html
- **OSCAL compatibility** — https://kye-protocol.github.io/oscal.html
- **Threat model** — https://kye-protocol.github.io/risk.html
- **Readiness self-test** — https://kye-protocol.github.io/readiness.html

## Contributing

KYE Protocol™ is governed in the open. Six working groups meet on GitHub Discussions: Core, Open Banking, Agent Governance, Evidence & Audit, Capability Profile, Compliance Mapping. RFC contributions welcome via [KYE-Protocol/Discussions](https://github.com/KYE-Protocol/Discussions/discussions).

For SDK contributions specifically: open an issue or PR on this repo. CI runs the schema validator + conformance pack on every push.

## License

Apache License 2.0 — see [LICENSE](LICENSE).

KYE™, KYE Protocol™, Know Your Entity™, Authority Finality™, Authority Graph™, Decision Map™, Evidence Graph™, Blast Radius Map™, Compliance Map™, KYE Compliance Mapping Rail™, KYE Cloud™, KYE Conformant™, KYE Certified™, KYE Self-Tested™, and KYE Self-Attested™ are trademarks of the KYE Protocol™ project. See the [trademark policy](https://kye-protocol.github.io/legal.html).
