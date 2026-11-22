# EDPay Agent Skills

Portable Agent Skills for building EDPay integrations. The skill works independently of MCP and applies to coding agents that support the open `SKILL.md` format.

### Supported agents

The Skills CLI supports the following agent names and IDs. Use an ID with the `--agent` option:

| Agent | CLI ID |
| --- | --- |
| AiderDesk | `aider-desk` |
| Amp | `amp` |
| Replit | `replit` |
| Universal | `universal` |
| Antigravity | `antigravity` |
| Antigravity CLI | `antigravity-cli` |
| AstrBot | `astrbot` |
| Autohand Code CLI | `autohand-code` |
| Augment | `augment` |
| IBM Bob | `bob` |
| Claude Code | `claude-code` |
| OpenClaw | `openclaw` |
| Cline | `cline` |
| Codex | `codex` |
| Dexto | `dexto` |
| fx | `fx` |
| Kimi Code CLI | `kimi-code-cli` |
| Loaf | `loaf` |
| Pi | `pi` |
| Sarvam Code | `sarvam-code` |
| Warp | `warp` |
| Zed | `zed` |
| CodeArts Agent | `codearts-agent` |
| CodeBuddy | `codebuddy` |
| Codemaker | `codemaker` |
| Code Studio | `codestudio` |
| Command Code | `command-code` |
| Continue | `continue` |
| Cortex Code | `cortex` |
| Crush | `crush` |
| Cursor | `cursor` |
| Deep Agents | `deepagents` |
| Devin for Terminal | `devin` |
| Droid | `droid` |
| Eve | `eve` |
| Firebender | `firebender` |
| ForgeCode | `forgecode` |
| Gemini CLI | `gemini-cli` |
| GitHub Copilot | `github-copilot` |
| Goose | `goose` |
| Grok Build | `grok` |
| Hermes Agent | `hermes-agent` |
| inference.sh | `inference-sh` |
| Jazz | `jazz` |
| Junie | `junie` |
| iFlow CLI | `iflow-cli` |
| Kilo Code | `kilo` |
| Kimchi | `kimchi` |
| Kiro CLI | `kiro-cli` |
| Kode | `kode` |
| Lingma | `lingma` |
| MCPJam | `mcpjam` |
| MiniMax Code | `minimax-code` |
| Mistral Vibe | `mistral-vibe` |
| Moxby | `moxby` |
| Mux | `mux` |
| OpenCode | `opencode` |
| OpenHands | `openhands` |
| Ona | `ona` |
| Posit Assistant | `posit-assistant` |
| Qoder | `qoder` |
| Qoder CN | `qoder-cn` |
| Qwen Code | `qwen-code` |
| Reasonix | `reasonix` |
| Rovo Dev | `rovodev` |
| Roo Code | `roo` |
| Tabnine CLI | `tabnine-cli` |
| Terramind | `terramind` |
| Tinycloud | `tinycloud` |
| Trae | `trae` |
| Trae CN | `trae-cn` |
| Windsurf | `windsurf` |
| ZCode | `zcode` |
| Zencoder | `zencoder` |
| Zenflow | `zenflow` |
| Neovate | `neovate` |
| Pochi | `pochi` |
| PromptScript | `promptscript` |
| AdaL | `adal` |

### Install with the CLI

Install with the official npm package in the current project:

```bash
npx --yes --package=@edutecka-mz/edpay-skills -- edpay-skills --agent '*'
```

Install globally for compatible agents in the current user account:

```bash
npx --yes --package=@edutecka-mz/edpay-skills -- edpay-skills --agent '*' --global
```

You can also install directly from the public repository with the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration
```

Install the skill into every compatible agent target supported by the CLI:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent '*'
```

Install globally for the current user account:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent '*' --global
```

To target one agent, replace `<agent-id>` with a supported CLI agent ID:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent <agent-id>
```

Without `--agent`, the CLI detects installed agents; if none are detected, it prompts you to select targets. Choose copy instead of symlink in the installer if needed. Run `skills add` again to update the skill.

### Manual installation

Download [`SKILL.md`](skills/edpay-integration/SKILL.md), place it in an `edpay-integration` folder, and follow the skills loading mechanism configured for your agent. Consult that agent's documentation for its supported skills location, then restart or reload the agent. The published download is also available at <https://docs-pay.edutecka.com/skills/edpay-integration/SKILL.md>.

### EDPay resources

- Skill source: [`skills/edpay-integration/SKILL.md`](skills/edpay-integration/SKILL.md)
- Documentation and OpenAPI: <https://docs-pay.edutecka.com> · <https://docs-pay.edutecka.com/openapi/v1.yaml>
- Optional MCP endpoint: <https://api-pay.edutecka.com/v1/mcp>
- Public MCP setup instructions: <https://api-pay.edutecka.com/v1/mcp/setup>

### Publishing the npm package (maintainers)

The EDPay MCP endpoint remains served by the API. Version `0.1.2` of the `@edutecka-mz/edpay-skills` npm package includes the executable CLI installer and English-only documentation. The package provides the EDPay Agent Skill installer.

To automate future releases with OIDC, configure npm Trusted Publishing with these package and workflow details:

| npm field | Value |
| --- | --- |
| Package | `@edutecka-mz/edpay-skills` |
| Organization or user | `edutecka` |
| Repository | `edpay-agent-skills` |
| Workflow filename | `publish.yml` |
| Environment name | *(none; the workflow does not use a GitHub Environment)* |

The workflow follows the same OIDC pattern as the JavaScript SDK. For each later release, update `version` in `package.json` and push the matching `v<version>` tag. GitHub Actions publishes through OIDC without an npm token stored in GitHub.

## Official references

- [Agent Skills specification](https://agentskills.io/specification)
- [skills CLI installation and command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md)
- [skills CLI supported agents and IDs](https://github.com/vercel-labs/skills/blob/main/docs/agents.md)
