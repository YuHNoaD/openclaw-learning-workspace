# Stack Intelligence Upgrade - OpenClaw v2

## 🎯 What's New

OpenClaw now **automatically selects optimal tech stacks** based on:
- Project type detection
- Success rate history from `skills.yaml`
- Feature requirements (auth, realtime, payments)

---

## 🆕 New Agents

| Agent | Role | Purpose |
|-------|------|---------|
| `stack_selector` | Library & Stack Chooser | Selects optimal UI + backend stack |
| `backend` | Backend Architect | Designs DB schema + API routes |

---

## 🔄 Updated Workflow

```
User: "làm MVP quản lý task cho team nhỏ"
         │
         ▼
    ┌─────────┐
    │ planner │ → Detect: SaaS MVP, needs auth + realtime
    └─────────┘
         │
         ▼
    ┌──────────────┐
    │stack_selector│ → Recommend: tailwind_shadcn_supabase_prisma_vercel (0.82)
    └──────────────┘
         │
         ▼
    ┌──────────┐
    │ designer │ → UI spec + UI libraries
    └──────────┘
         │
         ▼
    ┌─────────┐
    │ backend │ → DB schema (User, Task, Project)
    └─────────┘
         │
         ▼
    ┌───────┐
    │ coder │ → Generate Next.js + Tailwind + Supabase app
    └───────┘
         │
         ▼
    ┌──────────┐
    │ executor │ → Deploy to Vercel
    └──────────┘
         │
         ▼
    ┌─────────┐
    │ learner │ → Update stack success rate: +0.05
    └─────────┘
```

---

## 📚 Stack Recommendations

| Project Type | Recommended Stack | Success Rate |
|--------------|-------------------|--------------|
| Landing Page | `tailwind_framer_vercel` | 0.95 ✅ |
| Dashboard | `tailwind_shadcn_supabase_vercel` | 0.88 |
| SaaS MVP | `tailwind_shadcn_supabase_prisma_vercel` | 0.82 |
| Blog | `tailwind_mdx_vercel` | 0.90 |
| Simple Webapp | `html_css_vercel` | 0.90 ✅ |
| E-commerce | `tailwind_shadcn_stripe_supabase_vercel` | 0.75 |

---

## 🔧 Stack Components

### UI Stack
- **Tailwind CSS** - Styling (default)
- **shadcn/ui** - Components (dashboards/SaaS)
- **Framer Motion** - Animations (landing pages)
- **Lucide Icons** - Icon library

### Backend Stack
- **Supabase** - Auth + DB + Realtime + Storage (recommended)
- **Prisma** - ORM
- **SQLite** - Local development
- **Postgres** - Production DB

### Hosting
- **Vercel** - Default hosting platform

---

## 📊 Stack Tracking

`memory/skills.yaml` now tracks stack performance:

```yaml
stacks:
  - name: tailwind_shadcn_supabase_vercel
    success_rate: 0.88
    uses_count: 5
    best_for:
      - dashboard
      - admin_panel
    failures: []
```

**Learning:**
- Success → `success_rate + 0.05`
- Failure → `success_rate - 0.15` + add failure pattern

---

## 🎮 New Playbook

### `fullstack_from_idea.yaml`

Complete workflow for fullstack apps:

```yaml
steps:
  - planner           # Analyze intent
  - stack_selector    # Choose stack
  - designer          # Design UI + select libraries
  - backend           # Design DB + API
  - coder             # Generate code
  - reviewer          # Quality check
  - executor (git)    # Create repo
  - executor (vercel) # Deploy
  - validator         # Health check
  - learner           # Track performance
```

---

## 🔐 Required Environment Variables

When using Supabase stack:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
DATABASE_URL=postgresql://...
```

When using Stripe:

```bash
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## 📝 Example Usage

### Before (Manual Stack Selection)
```
User: "làm web task manager bằng Next.js và Supabase"
            ↑ User must specify stack
```

### After (Automatic Stack Selection)
```
User: "làm MVP quản lý task cho team nhỏ"
            ↑ OpenClaw auto-selects optimal stack

Output:
- Detected: SaaS MVP
- Stack: tailwind_shadcn_supabase_prisma_vercel
- Success rate: 0.82
- Deployed: https://task-manager.vercel.app
```

---

## 🧠 Smart Defaults

OpenClaw learns from deployments:

1. **First deployment** → Use highest success rate stack
2. **If success** → Increase stack confidence
3. **If failure** → Decrease confidence + remember failure
4. **Next time** → Prefer higher confidence stacks

---

## ⚠️ Important Notes

1. **"Hot" ≠ "Best fit"** - Stack selection considers use-case, not just trends
2. **Env vars required** - Will prompt user for missing credentials
3. **Alternative stacks** - Always provides fallback option
4. **Transparency** - Explains why each stack was chosen

---

## 📁 Files Updated

```
agents/
├── stack_selector.yaml  ← NEW
├── backend.yaml         ← NEW
├── designer.yaml        ← UPDATED (library selection)
├── planner.yaml         ← UPDATED (stack recommendation)
└── learner.yaml         ← UPDATED (stack tracking)

playbooks/
└── fullstack_from_idea.yaml  ← NEW

memory/
└── skills.yaml         ← UPDATED (stack tracking)
```

---

**Stack Intelligence is live!** 🚀

Now OpenClaw can automatically choose the best tech stack for your project based on proven success rates.
