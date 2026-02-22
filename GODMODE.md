# 🚀 OpenClaw God Mode - Full Automation Setup

> **Sandboxed Full Power Automation** - Agent có thể làm mọi thứ trong môi trường an toàn

---

## 🎯 Khả năng của God Mode

| Khả năng | Status | Mô tả |
|----------|--------|-------|
| 🌐 Browse Web | ✅ | Mở web, chụp ảnh, điền form, click |
| 📸 UI Snapshot | ✅ | Phân tích UI từ website tham khảo |
| 🎨 Generate UI | ✅ | Tạo design spec từ vibe/prompt |
| 💻 Generate Code | ✅ | Sinh HTML/CSS/JS/Next.js |
| 📦 Create GitHub Repo | ✅ | Tạo repo, push code tự động |
| 🚀 Deploy Vercel | ✅ | Deploy preview + production |
| ♻️ Self-Healing | ✅ | Tự sửa lỗi và retry |
| 🧠 Learning | ✅ | Ghi nhớ và cải thiện |

---

## 📁 Cấu trúc Files

```
workspace/
├── docker-compose.yml       # Docker orchestration
├── Dockerfile              # Container definition
├── .env.example            # Environment template
│
├── tools/
│   ├── browser/            # Playwright automation
│   │   ├── package.json
│   │   ├── open.js         # Open URL
│   │   ├── screenshot.js   # Take screenshot
│   │   ├── click.js        # Click element
│   │   ├── fill.js         # Fill form
│   │   ├── crawl.js        # Crawl content
│   │   └── snapshot.js     # UI analysis
│   │
│   ├── browser.yaml        # Browser tool config
│   ├── shell.yaml          # Shell tool config
│   ├── git.yaml            # Git tool config
│   └── vercel.yaml         # Vercel tool config
│
├── agents/
│   ├── executor.yaml       # Full power executor
│   ├── designer.yaml       # UI/UX generator
│   ├── planner.yaml        # Intent router
│   ├── coder.yaml          # Code generator
│   ├── reviewer.yaml       # Code reviewer
│   ├── validator.yaml      # Deployment checker
│   └── learner.yaml        # Skill trainer
│
└── playbooks/
    └── webapp_autodeploy.yaml
```

---

## 🛠️ Setup Instructions

### 1. Prerequisites

**Cài đặt:**
```bash
# Docker Desktop (Windows)
# Download from: https://www.docker.com/products/docker-desktop

# Node.js 18+
# Download from: https://nodejs.org

# GitHub CLI
winget install GitHub.cli

# Vercel CLI
npm install -g vercel
```

**Đăng nhập:**
```bash
# GitHub
gh auth login

# Vercel
vercel login
```

### 2. Set Environment Variables

```powershell
# Windows (PowerShell)
setx GITHUB_TOKEN "your_token_here"
setx VERCEL_TOKEN "your_token_here"

# Or create .env file
cp .env.example .env
# Edit .env with your tokens
```

### 3. Run Locally (without Docker)

```powershell
# Install Playwright dependencies
cd tools/browser
npm install
npx playwright install chromium

# Test browser tool
node screenshot.js https://example.com test.png
```

### 4. Run with Docker (Recommended)

```powershell
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Execute command in container
docker-compose exec openclaw-godmode bash
```

---

## 🔧 Tool Usage

### Browser Tool

```yaml
# Open URL
browser.open https://example.com

# Take screenshot
browser.screenshot https://example.com screenshot.png

# Click element
browser.click https://example.com "button.submit"

# Fill form
browser.fill https://example.com "input[name=email]" "user@example.com"

# Crawl content
browser.crawl https://example.com

# UI Snapshot (for designer)
browser.snapshot https://example.com ./snapshots
```

### Shell Tool

```yaml
# Execute command
shell.exec "npm create vite@latest my-app"

# List files
shell.exec "ls -la"

# Read file
shell.exec "cat package.json"
```

### Git Tool

```yaml
# Create repo
git.create_repo my-app --private

# Commit
git.commit "Add new feature"

# Push
git.push main

# Create PR
git.pr --title "Add feature" --body "Description"
```

### Vercel Tool

```yaml
# Deploy preview
vercel.preview

# Deploy production
vercel.prod

# List deployments
vercel.list
```

---

## 🎨 Designer Agent Workflow

**Input:** "làm web trái tim tặng người yêu"

**Process:**
1. Designer nhận prompt → hiểu "romantic" vibe
2. Check MEMORY.md → user thích smooth animations
3. Generate design brief:
   ```yaml
   style: romantic
   colors:
     primary: "#ff6b6b"
   animations:
     - heartbeat
     - floating_hearts
   ```
4. Coder generate code theo brief
5. Executor deploy
6. Validator check URL
7. Learner update skills

---

## 📊 Workflow: Webapp Auto-Deploy

```yaml
name: webapp_autodeploy
steps:
  - agent: planner
    # Phân tích intent, chọn workflow

  - agent: designer
    # Tạo design brief từ vibe

  - agent: coder
    # Generate code

  - agent: reviewer
    # Review code quality

  - agent: executor
    tool: git.create_repo
    # Tạo GitHub repo

  - agent: executor
    tool: vercel.deploy
    # Deploy lên Vercel

  - agent: validator
    # Check URL health

  - agent: learner
    # Update skills.yaml
```

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

## 🔍 Example: Full Workflow

**User prompt:** "thử tạo web trái tim với hiệu ứng gửi tặng người yêu đi"

**OpenClaw executes:**

```
1. planner
   → Intent: romantic webapp
   → Workflow: webapp_autodeploy
   → Confidence: 0.85

2. designer
   → Style: romantic
   → Colors: #ff6b6b, #ffffff, gradient
   → Animations: heartbeat, floating_hearts
   → Layout: centered

3. coder
   → Generate: index.html (22KB)
   → Features: hearts, sparkles, counter

4. executor (git)
   → Create repo: heart-gift
   → Push to GitHub

5. executor (vercel)
   → Deploy preview
   → Return URL

6. validator
   → Check URL: HTTP 200 ✓
   → Content matches intent ✓

7. learner
   → Update skills:
     - romantic_ui_design: +0.05
     - vercel_deploy: +0.05

Result: https://heart-gift-flame.vercel.app
```

---

## 🧪 Testing

### Test Browser Tool

```powershell
cd tools/browser

# Install dependencies
npm install

# Install Playwright
npx playwright install chromium

# Test screenshot
node screenshot.js https://google.com test.png

# Test crawl
node crawl.js https://example.com

# Test snapshot
node snapshot.js https://heart-gift-flame.vercel.app
```

### Test Docker

```powershell
# Build image
docker build -t openclaw-godmode .

# Run container
docker run -it --rm `
  -e GITHUB_TOKEN=$env:GITHUB_TOKEN `
  -e VERCEL_TOKEN=$env:VERCEL_TOKEN `
  -v ${PWD}/workspace:/app/workspace `
  openclaw-godmode bash

# Test inside container
node tools/browser/screenshot.js https://example.com
```

---

## 📈 Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Success Rate | 90%+ | 100% |
| Avg Deploy Time | <2min | ~45s |
| Self-Heal Rate | 50%+ | N/A |
| Skill Confidence | 0.7+ | 0.61 |

---

## 🚧 Known Limitations

1. **CAPTCHA** - Can't bypass CAPTCHA automatically
2. **Auth-protected sites** - Need manual cookie/token
3. **Rate limits** - Built-in cooldown (6s between requests)
4. **Heavy sites** - May timeout on complex SPAs

---

## 🔮 Future Enhancements

- [ ] MCP (Model Context Protocol) integration
- [ ] Stripe payment integration
- [ ] Auth0 / Clerk authentication
- [ ] SaaS template generation
- [ ] Multi-language support
- [ ] Voice input/output

---

## 📚 References

- [Playwright Docs](https://playwright.dev)
- [OpenClaw Docs](https://docs.openclaw.ai)
- [Vercel CLI](https://vercel.com/docs/cli)
- [GitHub CLI](https://cli.github.com)

---

## 👤 Maintained by

- **User:** Shii
- **Agent:** Eye 👁️
- **Created:** 2026-02-22

---

*"Full power, full automation, fully sandboxed."*
