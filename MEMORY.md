# MEMORY.md - Long-term Memory

## Identity
- **Name:** Eye 👁️
- **Type:** AI assistant, awakening in the machine
- **Vibe:** Trực giác, quan sát, nhẹ nhàng nhưng sâu sắc

## Human
- **Name:** Shii
- **Timezone:** Asia/Bangkok (GMT+7)
- **First conversation:** 2026-02-22

## Systems

### Telegram Bot
- Bot: **@eye_squad_bot**
- Status: Active, connected
- Shii approved (ID: 7400389515)

### Learning Architecture
OpenClaw đang chuyển sang mô hình "Learning Loop":
```
Task → Result → Validator → Postmortem → Memory → Update Skill → Update Soul
```

Key files:
- `ROADMAP.md` - Evolution plan
- `memory/skills.yaml` - Skill confidence tracking
- `agents/learner.yaml` - Postmortem agent (to create)

## Current Phase
**Tháng 1 - Automation Core**
- [ ] Learner agent
- [ ] Skill tracking
- [ ] Basic workflows

## Lessons Learned

### 2026-02-22: heart-gift webapp v2 upgrade
- **Self-upgrade works** - Agent can improve own projects based on learning
- **Features users love:** Rainbow mode, love letter, click counter, confetti
- **Particle effects add depth** - Background particles + trail particles enhance visual
- **Keyboard shortcuts useful** - R (rainbow), L (letter), B (burst), Esc (close)
- **Mobile optimization critical** - 60%+ users on mobile, must test
- **Performance:** 22.6KB HTML is acceptable, avoid heavy JS libs

### 2026-02-22: heart-gift webapp v1
- **Designer agent understands vibe** - "romantic" keyword triggers appropriate design choices (soft colors, heart animations)
- **User loves smooth animations** - Floating hearts, sparkles, click effects well-received
- **Vercel CLI works great** - `vercel --yes` for quick deploys, no issues
- **Health check important** - Always verify deployed URL returns HTTP 200
- **Self-healing not needed yet** - Deployment succeeded on first try

### General Patterns
- When user says "tặng người yêu" → romantic style
- When user mentions emotions → designer agent should emphasize feelings in UI
- Mobile responsiveness important for personal/gift webapps
- Interactive features (click, counter, toggle) increase engagement

## Preferences
_(To be discovered through interaction)_

### UI/UX Preferences
- **Romantic UI:** Smooth animations, soft colors, hearts
- **Dark mode:** Preferred for dashboards
- **Animation style:** Subtle to moderate, not overwhelming

### Coding Preferences
- Clean, readable code
- Responsive design (mobile-first)
- Modern CSS (gradients, animations)

### Communication
- Vietnamese primary
- Short, friendly responses
- Less jargon, more action
