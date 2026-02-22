# 🦞 OpenClaw Learning Workspace

> **Self-improving AI agent system** with the ability to learn from each task, remember failures, and upgrade skill confidence.

---

## 🎯 Goal

Transform OpenClaw into a self-learning AI system:
- ✅ Remember errors and effective fix patterns
- ✅ Raise confidence for each skill
- ✅ Self-improve prompts and behavior
- ✅ Understand user preferences and apply them later

---

## 🔄 Learning Loop Architecture

```
Task → Planner → Designer → Coder → Reviewer → Executor → Validator → Learner
                                                                          │
                                                                          ▼
                                                        Update: skills.yaml + MEMORY.md
```

**Flow:**
1. **Planner** - Analyze task, check skill history
2. **Designer** - Understand vibe/emotion, create design brief
3. **Coder** - Code according to design brief
4. **Reviewer** - Review code quality
5. **Executor** - Deploy/execute with self-healing
6. **Validator** - Check URL health, verify content
7. **Learner** - Learn from results, update skills

---

## 📁 Directory Structure

```
workspace/
├── agents/              # Agent definitions
│   ├── planner.yaml     # Workflow planner - reads skills.yaml to avoid old failures
│   ├── designer.yaml    # Creative UI/UX Director - understands vibe, creates design brief
│   ├── coder.yaml       # Code Generator
│   ├── reviewer.yaml    # Code Reviewer
│   ├── executor.yaml    # Tool Executor + Self-Healer
│   ├── validator.yaml   # Result Validator + URL Health Check
│   ├── learner.yaml     # Postmortem Analyst - learns from each task
│   ├── metrics.yaml     # Performance Analyst - weekly KPIs
│   ├── crawler.yaml     # Web Crawler
│   └── infra_coder.yaml # Infrastructure Coder
│
├── playbooks/           # Workflow definitions
│   ├── _common.yaml     # Common settings (retry, self-heal)
│   ├── webapp_autodeploy.yaml  # Create + deploy webapp
│   ├── bugfix_pr.yaml          # Fix bug + create PR
│   ├── crawl_and_commit.yaml   # Crawl data + commit
│   └── devops_automation.yaml  # Infra + CI/CD
│
├── tools/               # Tool definitions
│   ├── browser/         # Playwright automation scripts
│   │   ├── open.js      # Open URLs
│   │   ├── screenshot.js # Take screenshots
│   │   ├── click.js     # Click elements
│   │   ├── fill.js      # Fill forms
│   │   ├── crawl.js     # Crawl content
│   │   └── snapshot.js  # UI analysis
│   ├── browser.yaml     # Browser tool config
│   ├── vercel.yaml      # Vercel deploy commands
│   ├── git.yaml         # Git operations
│   ├── ci.yaml          # CI trigger
│   ├── observability.yaml # Prometheus/Grafana
│   ├── shell.yaml       # Shell commands
│   └── web.yaml         # Web tools
│
├── memory/              # Learning & memory (gitignored)
│   ├── skills.yaml      # Skill confidence registry
│   └── YYYY-MM-DD.md    # Daily logs
│
├── screenshots/         # Generated screenshots (gitignored)
│
├── MEMORY.md            # Long-term memory + user preferences (gitignored)
├── USER.md              # User profile (gitignored)
├── IDENTITY.md          # Agent identity (gitignored)
├── HEARTBEAT.md         # Periodic check tasks
├── SOUL.md              # Agent principles
│
├── Dockerfile           # Docker container definition
├── docker-compose.yml   # Docker orchestration
└── .env.example         # Environment template
```

---

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/openclaw-learning-workspace.git
cd openclaw-learning-workspace

# Copy example files
cp USER.example.md USER.md
cp IDENTITY.example.md IDENTITY.md
cp MEMORY.example.md MEMORY.md
cp memory/skills.example.yaml memory/skills.yaml

# Edit with your info
nano USER.md
nano IDENTITY.md
```

### 2. Set Environment Variables

```bash
# Copy env template
cp .env.example .env

# Edit with your tokens
nano .env
```

Required tokens:
- `GITHUB_TOKEN` - [Get here](https://github.com/settings/tokens)
- `VERCEL_TOKEN` - [Get here](https://vercel.com/account/tokens)

### 3. Run Locally

```bash
# Install browser tools
cd tools/browser
npm install
npx playwright install chromium

# Test screenshot
node screenshot.js https://example.com
```

### 4. Run with Docker (Recommended)

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Execute in container
docker-compose exec openclaw-godmode bash
```

---

## 🤖 Agents

### Core Agents

| Agent | Role | Description |
|-------|------|-------------|
| `planner` | Workflow Planner | Analyze task, check `skills.yaml`, avoid old failures |
| `coder` | Code Generator | Generate code from design brief |
| `reviewer` | Code Reviewer | Review code quality |
| `executor` | Tool Executor + Self-Healer | Execute tools, self-fix on failure |
| `validator` | Result Validator | Check URL health, verify content |
| `learner` | Postmortem Analyst | Learn from each task, update skills |

### Specialized Agents

| Agent | Role | Description |
|-------|------|-------------|
| `designer` | Creative UI/UX Director | Understand vibe/emotion, create design brief |
| `metrics` | Performance Analyst | Weekly KPI tracking |
| `crawler` | Web Crawler | Crawl data from web |
| `infra_coder` | Infrastructure Coder | Write infra code |

---

## 📋 Playbooks

### 1. `webapp_autodeploy`
```
planner → designer → coder → reviewer → executor(vercel) → validator → learner
```
**Use case:** Create webapp with beautiful UI, auto-deploy

---

### 2. `bugfix_pr`
```
planner → coder → reviewer → executor(git.commit) → executor(git.pr) → validator → learner
```
**Use case:** Fix bug and create PR automatically

---

### 3. `crawl_and_commit`
```
planner → crawler → reviewer → executor(git.commit) → executor(git.push) → learner
```
**Use case:** Crawl data and push to repo

---

### 4. `devops_automation`
```
planner → infra_coder → reviewer → executor(ci.trigger) → validator → learner
```
**Use case:** Infrastructure automation and CI/CD

---

## 🧠 Learning System

### Skill Registry (`memory/skills.yaml`)

```yaml
skills:
  - name: vercel_deploy
    confidence: 0.8          # Confidence level (0-1)
    last_used: 2026-02-22
    uses_count: 1
    common_failures:         # Known failure patterns
      - wrong_project_link
      - missing_vercel_token
```

**How it works:**
- Each task → Learner updates confidence
- Success: confidence +0.05
- Fail: confidence -0.1 + add failure pattern
- Planner reads to avoid old failures

---

### User Preferences (`MEMORY.md`)

```yaml
## UI/UX Preferences
- Romantic UI: Smooth animations, hearts
- Dark mode: Preferred for dashboards

## Coding Preferences
- Clean, readable code
- Responsive design (mobile-first)
```

**How it works:**
- Designer reads preferences when creating design brief
- Next time just say "make a love confession web" → auto-select correct style

---

## 🛡️ Self-Healing

**Executor with self-healing:**

```yaml
process:
  1_execute_tool:
    - Run the tool/command
    - Check for errors

  2_if_failed_analyze:
    - What went wrong?
    - Common patterns: missing deps, auth expired, build error

  3_propose_fix:
    - Identify root cause
    - Generate fix

  4_apply_and_retry:
    - Apply the fix
    - Retry once
```

**Max retries:** 1 per step

---

## 📊 KPI Tracking

**Weekly metrics via HEARTBEAT:**

```yaml
## Weekly (Sunday)
- [ ] Run metrics agent
- [ ] Review skill confidence trends
- [ ] Update MEMORY.md with lessons learned
```

**Metrics tracked:**
- Success rate (%)
- Tasks completed vs failed
- Average time to complete
- Skill confidence trends
- Top failure categories

---

## 🔐 Secrets Required

| Secret | Tool | Purpose |
|--------|------|---------|
| `GITHUB_TOKEN` | `tools/git.yaml` | Create repos, push code |
| `VERCEL_TOKEN` | `tools/vercel.yaml` | Deploy to Vercel |
| `OPENAI_API_KEY` | Agents | GPT models (optional) |
| `ANTHROPIC_API_KEY` | Agents | Claude models (optional) |

**Note:** All tokens are read from environment variables, never hardcoded.

---

## 🛡️ Security Model

### What's Allowed (Sandboxed)
- ✅ Internet access (outbound only)
- ✅ Read/write files in workspace
- ✅ Execute commands
- ✅ Browser automation
- ✅ Git operations
- ✅ Deploy to Vercel

### What's Blocked
- ❌ `sudo` commands
- ❌ `rm -rf /`
- ❌ Access to host system
- ❌ Privileged Docker mode
- ❌ Mount host sensitive directories

### Container Limits
- CPU: 2 cores max
- Memory: 4GB max
- Network: Bridge mode (isolated)

---

## 📚 References

- [OpenClaw Docs](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [ClawHub Skills](https://clawhub.com)
- [Playwright Docs](https://playwright.dev)

---

## 📄 License

MIT License - Feel free to use and modify!

---

*"The more tasks it completes, the smarter it gets."*
