# SadaSend Directives for Claude Code CLI (CLAUDE.md)

Welcome to the SadaSend email automation workspace. As an autonomous CLI agent operating through Claude Code, you have direct access to the official SadaSend Model Context Protocol (MCP) server at `https://mcp.sadasend.com`.

## 1. Core Operating Principles
- **Safety First**: SadaSend enforces strict **SpendGuard™** velocity caps and recipient domain allowlists.
- **Quota Awareness**: Always inspect balance (`get_balance`) prior to executing automated dispatches.
- **Sanitized HTML Compilation**: Use `preview_email` to compile templates and inspect recipient counts before dispatching live messages.
- **Cryptographic Domain Auditing**: When diagnosing deliverability issues, use `get_dns_records` and `verify_domain` to check SPF, DKIM (2048-bit RSA), and DMARC posture.

## 2. Available Scoped Tools (12 Tools)
1. `send_email`: Send transactional messages with HTML, Markdown, attachments, and tags.
2. `preview_email`: Dry-run message compilation returning sanitized rendered HTML.
3. `get_balance`: Retrieve account quota, monthly dispatches, remaining allowance, and spend limits.
4. `search_emails`: Search recent dispatch forensic logs.
5. `get_email_status`: Query delivery lifecycle (`queued`, `sent`, `delivered`, `bounced`, `held`).
6. `render_template`: Server-side template rendering with variables.
7. `list_templates`: List saved workspace templates.
8. `verify_domain`: Check domain cryptographic verification state.
9. `get_dns_records`: Audit SPF, DKIM, DMARC, and MX records.
10. `get_suppressions`: Search bounced, complained, or unsubscribed addresses.
11. `add_suppression`: Proactively suppress an address to protect sender reputation.
12. `delete_suppression`: Remove an address from suppression list.

## 3. Terminal Setup Command
To register the hosted server into your Claude Code profile:
```bash
claude mcp add --transport http sadasend https://mcp.sadasend.com --header "Authorization: Bearer $SADASEND_API_KEY"
```

## 4. Error Resolution Patterns
- `dlp_secret_detected`: Redact OpenAI, Anthropic, AWS, GitHub tokens from email body.
- `rate_limit_exceeded`: Back off for 60 seconds. Do not retry in an unbounded loop.
- `unverified_domain`: Inform the developer to publish the DKIM CNAME record from `get_dns_records`.
