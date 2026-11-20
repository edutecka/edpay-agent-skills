# EDPay Agent Skills

Portable Agent Skills for building EDPay integrations. The skill works independently of MCP and applies to coding agents that support the open `SKILL.md` format.

## Português

### Instalação automática

Com o [CLI `skills`](https://github.com/vercel-labs/skills), instale no projecto actual:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration
```

Instale em todos os agentes compatíveis detectados:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent '*'
```

Para instalar globalmente, disponível nos projectos da sua conta:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent '*' --global
```

Depois da primeira publicação do pacote npm, também poderá instalar pelo atalho EDPay. Acrescente `--global` para disponibilizar a Skill nos projectos da conta do utilizador:

```bash
npx --yes @edutecka-mz/edpay-skills --agent '*'
npx --yes @edutecka-mz/edpay-skills --agent '*' --global
```

Para escolher um agente específico, substitua `<agent-id>` pelo identificador da lista abaixo:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent <agent-id>
```

Sem `--agent`, o CLI detecta os agentes instalados; se não detectar nenhum, pede para escolher. Pode escolher cópia em vez de symlink no assistente de instalação. Para actualizar, execute novamente o comando `skills add`.

### Instalação manual

Descarregue [`SKILL.md`](skills/edpay-integration/SKILL.md), coloque-o numa pasta `edpay-integration` e siga o mecanismo de skills configurado pelo seu agente. Consulte a documentação do agente para confirmar a pasta suportada e reinicie ou recarregue o agente. Também pode descarregar a versão publicada em <https://docs-pay.edutecka.com/skills/edpay-integration/SKILL.md>.

### Agentes compatíveis

O CLI oficial publica estes nomes e identificadores de agente. Os nomes servem para escolher um destino com `--agent`:

| Agente | ID do CLI |
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

### Integração EDPay

- Skill: [`skills/edpay-integration/SKILL.md`](skills/edpay-integration/SKILL.md)
- Documentação e OpenAPI: <https://docs-pay.edutecka.com> · <https://docs-pay.edutecka.com/openapi/v1.yaml>
- MCP opcional: <https://api-pay.edutecka.com/mcp>
- Instruções públicas para obter chaves: <https://api-pay.edutecka.com/mcp/setup>

### Publicação do atalho npm (maintainers)

O EDPay MCP continua servido pela API. O pacote npm `@edutecka-mz/edpay-skills` distribui apenas o instalador da Skill e usa Trusted Publishing/OIDC para as versões seguintes.

Para a primeira publicação, um maintainer com acesso ao âmbito npm `@edutecka-mz` autentica-se com `npm login` e publica `@edutecka-mz/edpay-skills` com `npm publish --access public`. Depois, configure Trusted Publishing OIDC na conta npm com os dados deste pacote e workflow:

| Campo npm | Valor |
| --- | --- |
| Package | `@edutecka-mz/edpay-skills` |
| Organization or user | `edutecka` |
| Repository | `edpay-agent-skills` |
| Workflow filename | `publish.yml` |
| Environment name | *(none; the workflow does not use a GitHub Environment)* |

O workflow segue o mesmo padrão OIDC do SDK JavaScript. Para cada versão seguinte, actualize `version` em `package.json`, faça push da tag correspondente (`v<version>`) ou execute manualmente o workflow `Publish npm package`; o GitHub Actions publica com OIDC, sem token npm guardado no GitHub.

## English

### Install with the CLI

Use the [`skills` CLI](https://github.com/vercel-labs/skills) to install for the current project:

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

After the first npm release, you can install with the EDPay shortcut. Add `--global` to make the skill available in all projects under the current user account:

```bash
npx --yes @edutecka-mz/edpay-skills --agent '*'
npx --yes @edutecka-mz/edpay-skills --agent '*' --global
```

To target one agent, replace `<agent-id>` with an ID from the list above:

```bash
npx skills add edutecka/edpay-agent-skills --skill edpay-integration --agent <agent-id>
```

Without `--agent`, the CLI detects installed agents; if none are detected, it prompts you to select targets. Choose copy instead of symlink in the installer if needed. Run `skills add` again to update the skill.

### Manual installation

Download [`SKILL.md`](skills/edpay-integration/SKILL.md), place it in an `edpay-integration` folder, and follow the skills loading mechanism configured for your agent. Consult that agent's documentation for its supported skills location, then restart or reload the agent. The published download is also available at <https://docs-pay.edutecka.com/skills/edpay-integration/SKILL.md>.

### EDPay resources

- Skill source: [`skills/edpay-integration/SKILL.md`](skills/edpay-integration/SKILL.md)
- Documentation and OpenAPI: <https://docs-pay.edutecka.com> · <https://docs-pay.edutecka.com/openapi/v1.yaml>
- Optional MCP endpoint: <https://api-pay.edutecka.com/mcp>
- Public API key setup instructions: <https://api-pay.edutecka.com/mcp/setup>

### Publishing the npm shortcut (maintainers)

EDPay MCP remains served by the API. The `@edutecka-mz/edpay-skills` npm package only installs the Skill and uses npm Trusted Publishing/OIDC for subsequent releases.

For the first release, a maintainer with access to the `@edutecka-mz` npm scope signs in with `npm login` and publishes `@edutecka-mz/edpay-skills` using `npm publish --access public`. Then configure npm Trusted Publishing with these package and workflow details:

| npm field | Value |
| --- | --- |
| Package | `@edutecka-mz/edpay-skills` |
| Organization or user | `edutecka` |
| Repository | `edpay-agent-skills` |
| Workflow filename | `publish.yml` |
| Environment name | *(none; the workflow does not use a GitHub Environment)* |

The workflow follows the same OIDC pattern as the JavaScript SDK. For later releases, update `version` in `package.json` and push the matching `v<version>` tag or run the `Publish npm package` workflow manually. GitHub Actions publishes through OIDC without an npm token stored in GitHub.

## Official references

- [Agent Skills specification](https://agentskills.io/specification)
- [skills CLI installation and command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md)
- [skills CLI supported agents and IDs](https://github.com/vercel-labs/skills/blob/main/docs/agents.md)
