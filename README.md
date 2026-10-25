# SadaSend Claude Code CLI Starter Kit 🤖

> Integrate Anthropic's **Claude Code CLI** terminal agent with **SadaSend** transactional email, SpendGuard™ budget controls, and hosted MCP tools.

[![Model Context Protocol](https://img.shields.io/badge/MCP-Registry%20Verified-blue)](https://registry.modelcontextprotocol.io/v0/servers?search=sadasend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ What's Included

- **`CLAUDE.md` Instruction File**: Pre-loaded system instructions teaching Claude Code CLI how to safely audit DNS, inspect suppressions, and dispatch transactional emails without runaway loops.
- **`.mcp.json` Manifest**: Connects Claude Code directly to `https://mcp.sadasend.com` over Streamable HTTP (no local daemon required).
- **Deliverability Verification Script (`src/verify-deliverability.ts`)**: Fast CLI tool to check SPF/DKIM health.

---

## 🚀 Setup in 2 Steps

### 1. Register SadaSend with Claude Code
In your terminal, run:
```bash
claude mcp add --transport http sadasend https://mcp.sadasend.com --header "Authorization: Bearer YOUR_SADASEND_API_KEY"
```

### 2. Launch Claude Code
```bash
claude
```
Once inside Claude Code, try prompts like:
> *"Audit my domain DNS records on SadaSend and check if DKIM is verified."*  
> *"Draft a release notification email to users, preview the HTML, and check my SpendGuard balance."*

---

## 📄 License
MIT © [SadaSend](https://www.sadasend.com)
