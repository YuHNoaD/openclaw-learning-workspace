# 🦞 OpenClaw Learning Workspace

> **Self-improving AI agent system** với khả năng học từ mỗi task, ghi nhớ lỗi, và tự nâng cấp skill confidence.

---

## 🎯 Mục tiêu

Biến OpenClaw thành một hệ thống AI tự học:
- ✅ Ghi nhớ lỗi và pattern fix hiệu quả
- ✅ Nâng confidence cho từng skill
- ✅ Tự cải thiện prompt và hành vi
- ✅ Hiểu "gu" của user và áp dụng vào lần sau

---

## 🔄 Learning Loop Architecture

```
Task → Planner → Designer → Coder → Reviewer → Executor → Validator → Learner
                                                                          │
                                                                          ▼
                                                        Update: skills.yaml + MEMORY.md
```

**Flow:**
1. **Planner** - Phân tích task, check skill history
2. **Designer** - Hiểu vibe/emotion, tạo design brief
3. **Coder** - Code theo design brief
4. **Reviewer** - Review code quality
5. **Executor** - Deploy/execute với self-healing
6. **Validator** - Check URL health, verify content
7. **Learner** - Học từ kết quả, update skills

---

## 📁 Cấu trúc thư mục

```
workspace/
├── agents/              # Agent definitions
│   ├── planner.yaml     # Workflow planner - đọc skills.yaml để tránh lỗi cũ
│   ├── designer.yaml    # Creative UI/UX Director - hiểu vibe, tạo design brief
│   ├── coder.yaml       # Code Generator
│   ├── reviewer.yaml    # Code Reviewer
│   ├── executor.yaml    # Tool Executor + Self-Healer
│   ├── validator.yaml   # Result Validator + URL Health Check
│   ├── learner.yaml     # Postmortem Analyst - học từ mỗi task
│   ├── metrics.yaml     # Performance Analyst - weekly KPIs
│   ├── crawler.yaml     # Web Crawler
│   └── infra_coder.yaml # Infrastructure Coder
│
├── playbooks/           # Workflow definitions
│   ├── _common.yaml     # Common settings (retry, self-heal)
│   ├── webapp_autodeploy.yaml  # Tạo + deploy webapp
│   ├── bugfix_pr.yaml          # Fix bug + tạo PR
│   ├── crawl_and_commit.yaml   # Crawl data + commit
│   └── devops_automation.yaml  # Infra + CI/CD
│
├── tools/               # Tool definitions
│   ├── vercel.yaml      # Vercel deploy commands
│   ├── git.yaml         # Git operations
│   ├── ci.yaml          # CI trigger
│   ├── observability.yaml # Prometheus/Grafana
│   ├── shell.yaml       # Shell commands
│   └── web.yaml         # Web tools
│
├── memory/              # Learning & memory
│   ├── skills.yaml      # Skill confidence registry
│   └── 2026-02-22.md    # Daily logs
│
├── projects/            # Generated projects
│   └── heart-gift/      # Example: Romantic heart webapp
│
├── MEMORY.md            # Long-term memory + user preferences
├── HEARTBEAT.md         # Periodic check tasks
├── SOUL.md              # Agent principles
├── IDENTITY.md          # Agent identity (Eye 👁️)
└── USER.md              # User profile
```

---

## 🤖 Agents

### Core Agents

| Agent | Role | Mô tả |
|-------|------|-------|
| `planner` | Workflow Planner | Phân tích task, check `skills.yaml`, tránh lỗi cũ |
| `coder` | Code Generator | Generate code theo design brief |
| `reviewer` | Code Reviewer | Review code quality |
| `executor` | Tool Executor + Self-Healer | Execute tools, tự sửa khi fail |
| `validator` | Result Validator | Check URL health, verify content |
| `learner` | Postmortem Analyst | Học từ mỗi task, update skills |

### Specialized Agents

| Agent | Role | Mô tả |
|-------|------|-------|
| `designer` | Creative UI/UX Director | Hiểu vibe/emotion, tạo design brief |
| `metrics` | Performance Analyst | Weekly KPI tracking |
| `crawler` | Web Crawler | Crawl data from web |
| `infra_coder` | Infrastructure Coder | Write infra code |

---

## 📋 Playbooks

### 1. `webapp_autodeploy`
**Workflow:**
```
planner → designer → coder → reviewer → executor(vercel) → validator → learner
```

**Use case:** Tạo webapp với UI đẹp, tự động deploy

**Features:**
- Designer hiểu vibe (romantic, cute, dark, minimal)
- Self-healing khi deploy fail
- URL health check sau deploy
- Ghi nhớ preferences cho lần sau

---

### 2. `bugfix_pr`
**Workflow:**
```
planner → coder → reviewer → executor(git.commit) → executor(git.pr) → validator → learner
```

**Use case:** Fix bug và tạo PR tự động

---

### 3. `crawl_and_commit`
**Workflow:**
```
planner → crawler → reviewer → executor(git.commit) → executor(git.push) → learner
```

**Use case:** Crawl data và push lên repo

---

### 4. `devops_automation`
**Workflow:**
```
planner → infra_coder → reviewer → executor(ci.trigger) → validator → learner
```

**Use case:** Infrastructure automation và CI/CD

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

  - name: romantic_ui_design
    confidence: 0.7
    last_used: 2026-02-22
    uses_count: 1
    common_failures:
      - animation_performance
```

**Cách hoạt động:**
- Mỗi task → Learner update confidence
- Success: confidence +0.05
- Fail: confidence -0.1 + add failure pattern
- Planner đọc để avoid lỗi cũ

---

### User Preferences (`MEMORY.md`)

```yaml
## UI/UX Preferences
- Romantic UI: Smooth animations, hearts
- Dark mode: Preferred for dashboards
- Animation style: Subtle to moderate

## Coding Preferences
- Clean, readable code
- Responsive design (mobile-first)
```

**Cách hoạt động:**
- Designer đọc preferences khi tạo design brief
- Lần sau chỉ cần nói "làm web tỏ tình" → tự chọn style đúng gu

---

## 🛡️ Self-Healing

**Executor với self-healing:**

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
| `VERCEL_TOKEN` | `tools/vercel.yaml` | Deploy to Vercel |
| `PROM_URL` | `tools/observability.yaml` | Prometheus metrics |
| `GRAFANA_URL` | `tools/observability.yaml` | Grafana logs |

**Note:** GitHub và Vercel CLI auth cần đư��c config locally.

---

## 🚀 Quick Start

### 1. Import config
```bash
# Copy toàn bộ thư mục này vào OpenClaw workspace
cp -r ./* ~/.openclaw/workspace/
```

### 2. Set secrets
```bash
# Set environment variables
export VERCEL_TOKEN="your-token"
export PROM_URL="https://prometheus.example.com"
export GRAFANA_URL="https://grafana.example.com"
```

### 3. Run playbook
```
# Via OpenClaw chat:
"làm web trái tim tặng người yêu đi"
```

---

## 📈 Example: "Web trái tim tặng người yêu"

**Input:** "làm web trái tim tặng người yêu đi"

**Flow:**
1. `planner` → Choose `webapp_autodeploy`
2. `designer` → Detect "romantic" vibe
   ```yaml
   style: romantic
   colors:
     primary: "#ff6b6b"
   animations:
     - heartbeat
     - floating_hearts
   ```
3. `coder` → Generate HTML/CSS/JS
4. `reviewer` → Check code quality
5. `executor` → `vercel --yes`
6. `validator` → Check https://heart-gift-flame.vercel.app (HTTP 200 ✓)
7. `learner` → Update skills:
   - `romantic_ui_design`: +0.05
   - `vercel_deploy`: +0.05

**Output:** https://heart-gift-flame.vercel.app

**Learned:** User likes romantic UI with smooth animations

---

## 🎓 Lessons Learned

*(Tự động populate bởi learner agent)*

| Date | Task | Lesson | Skill Updated |
|------|------|--------|---------------|
| 2026-02-22 | heart-gift webapp | Romantic UI + smooth animations works well | romantic_ui_design +0.05 |

---

## 🔄 Evolution Roadmap

### Month 1 - Automation Core ✅
- [x] Learner agent
- [x] Skill tracking
- [x] Basic workflows
- [x] Designer agent

### Month 2 - Codebase Understanding
- [ ] Code search tool
- [ ] Dependency graph
- [ ] Test generation

### Month 3 - Observability
- [ ] Prometheus integration
- [ ] Grafana dashboards
- [ ] Production debugging

---

## 📚 References

- [OpenClaw Docs](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [ClawHub Skills](https://clawhub.com)

---

## 👤 Maintained by

- **User:** Shii
- **Agent:** Eye 👁️
- **Created:** 2026-02-22

---

*"The more tasks it completes, the smarter it gets."*
