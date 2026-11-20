---
name: edpay-integration
description: Integrate websites, apps, and backend services with the EDPay API. Use when adding or reviewing EDPay payments, invoices, payment links, API keys, or payment methods.
compatibility: Works with Agent Skills compatible coding agents and outbound HTTPS access. The EDPay MCP server is optional.
metadata:
  author: edutecka
  version: "1.0.0"
---

# EDPay Integration

Use this skill to implement EDPay integrations safely. Follow the user's language in explanations and generated project documentation.

## Start with the current contract

1. Inspect the target project's language, framework, existing payment flow, and secret-management approach before editing.
2. Read the current API contract at <https://docs-pay.edutecka.com/openapi/v1.yaml> and the relevant guide at <https://docs-pay.edutecka.com>.
3. If the EDPay MCP server is available, use `edpay_list_operations` and `edpay_get_operation` to inspect the exact request, authentication, and response schemas. Use `edpay_list_integration_guides` for maintained SDK and plugin guidance. MCP is optional; the public OpenAPI contract and guides remain the source of truth.
4. Do not invent routes, fields, payment methods, or response shapes. Match the documented API and the account's supported currency and methods.

## Credentials and environments

- Customers create their EDPay API key pair in the EDPay Dashboard at <https://pay.edutecka.com/dashboard/api-keys>, under **Developers → API Keys**. They select an account and environment when creating the pair.
- The private key is shown only once. Tell the user to save it directly into their MCP client's secure secret store or their server's secret manager. Never ask them to paste it into chat, prompts, tool arguments, code, URLs, browser storage, or logs.
- Use the pair together in HTTPS server-to-server request headers: `X-EDPay-Public-Key` and `X-EDPay-Private-Key`. Never send the private key from browser or mobile client code.
- `pk_test_` with `sk_test_` selects Sandbox. `pk_live_` with `sk_live_` selects Production. Reject mixed pairs. Let EDPay validate the actual key and its account environment; do not infer that a key is valid from its prefix.
- Read-only documentation and MCP discovery do not need customer keys. Invoice actions require a key with the `invoices:write` scope.
- Never request, configure, return, or expose payment-provider credentials. Customers integrate through EDPay; provider credentials remain in the private payment runtime.

## Implement the requested flow

- Keep payment requests server-to-server and use the existing API client or SDK where the project already has one.
- Handle success and error response schemas from the current OpenAPI operation. Preserve request IDs and safe error codes for support, but never log request headers, private keys, or full sensitive payment payloads.
- Use the account's supported currency and the payment methods exposed by EDPay. Do not assume conversion or change account settings as part of an integration task.
- Keep payment method selection in the EDPay hosted checkout. Do not collect card data in the merchant app unless the documented EDPay integration explicitly supports that flow.
- If the user asks to create an invoice or payment link and MCP write tools are available, first confirm the amount, currency, customer, and environment. Call the write tool only after the user explicitly requests the action. Use a stable idempotency key and reuse it for retries.
- A draft invoice does not email or charge anyone. Creating a payment link finalizes the invoice and makes an active hosted link that can accept payment when shared; it does not itself charge the customer or send email.
- Test the integration in Sandbox before Production. Do not submit a live payment, change gateway settings, or publish/deploy unless the user explicitly asks.

## Optional EDPay MCP server

- Remote endpoint: <https://api-pay.edutecka.com/mcp> using Streamable HTTP.
- Public key setup instructions, with no authentication and no key values: <https://api-pay.edutecka.com/mcp/setup>.
- The unauthenticated MCP tool `edpay_get_key_setup` returns the same safe instructions. Use it to tell the user where to create keys; it cannot retrieve an existing private key.
- Configure a matching pair in the MCP client's secure secret store as `X-EDPay-Public-Key` and `X-EDPay-Private-Key` headers. Read-only tools work without these headers; write tools require the user's own `invoices:write` pair.
- Treat MCP write actions like any other persistent payment action: explain the effect and environment, then wait for an explicit user request before calling them.

## Finish

Summarize the implementation, files changed, supported payment flow, and any setup the user must complete. Do not include credential values in the summary.
