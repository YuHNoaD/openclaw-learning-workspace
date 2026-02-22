# ROADMAP.md - OpenClaw Learning Evolution

## Mục tiêu
Biến OpenClaw thành hệ thống tự học, tự cải thiện:
- Ghi nhớ lỗi & pattern fix
- Nâng confidence cho từng skill
- Tự cải thiện prompt & hành vi

---

## 🔁 Learning Loop Architecture

```
Task → Result → Validator → Postmortem → Memory (RAG) → Update Skill → Update Soul
```

---

## 🧬 Skill Registry

File: `memory/skills.yaml`

```yaml
skills:
  - name: nextjs_codegen
    confidence: 0.6
    last_used: 2026-02-22
    common_failures:
      - missing_env_vars
      - build_cache_issue

  - name: vercel_deploy
    confidence: 0.7
    last_used: 2026-02-22
    common_failures:
      - wrong_project_link
      - missing_vercel_token

  - name: ci_github_actions
    confidence: 0.5
    common_failures:
      - secrets_not_set
```

---

## 📁 Agent Setup

### A. Learner Agent (Postmortem Analyst)

File: `agents/learner.yaml`

```yaml
name: learner
role: Postmortem Analyst
model: gpt-4.1
system_prompt: |
  You analyze completed workflows. Identify:
  - What worked
  - What failed
  - Root causes
  - Reusable patterns

  Update:
  - skills.yaml
  - soul.md guidelines

tools:
  - memory.read
  - memory.write

output_schema:
  lessons: list
  skill_updates:
    - name: string
      confidence_delta: number
      new_failures: list
  soul_patch: string
```

### B. Planner Agent Enhancement

Sửa `agents/planner.yaml`:

```yaml
name: planner
role: Workflow Planner
model: gpt-4.1
system_prompt: |
  You are OpenClaw Planner.
  Read past skills and failures.
  Prefer strategies with higher confidence.
  Avoid repeating known failure patterns.

tools:
  - memory.search
  - memory.read
  - memory.read_file: memory/skills.yaml
```

---

## 🎯 Skill Levels

### Level 1 – Core Automation
- Basic workflows
- Learner agent
- skills.yaml tracking

### Level 2 – Codebase Understanding
- code.search (ripgrep / AST)
- repo.graph (dependency)
- Skill: `codebase_understanding`

### Level 3 – Test & QA
- Test coverage tool
- Property-based testing
- Skill: `test_generation`

### Level 4 – Observability
- Prometheus / Grafana integration
- Skill: `prod_debugging`

---

## 📅 Timeline

### Tháng 1 – Automation Core
- [ ] Bật 4 workflow A/B/C/E
- [ ] Bật Learner agent
- [ ] Bắt đầu ghi skills.yaml

### Tháng 2 – Codebase + QA
- [ ] Thêm code search tool
- [ ] Thêm test generation
- [ ] OpenClaw fix bug phức tạp hơn

### Tháng 3 – Observability
- [ ] Kết nối log/metrics
- [ ] Debug issue prod

### Sau 3 tháng
- OpenClaw = junior engineer + oncall assistant
- Bắt đầu dùng cho backlog thật

---

## 📊 KPIs

| Metric | Target |
|--------|--------|
| % task hoàn thành không cần sửa tay | ↑ |
| % bug quay lại sau khi fix | ↓ |
| Thời gian TB fix 1 issue | ↓ |
| Confidence skill | ↑ |

---

## Next Actions

1. [ ] Tạo `memory/skills.yaml`
2. [ ] Tạo `agents/learner.yaml`
3. [ ] Update `agents/planner.yaml`
4. [ ] Test workflow đầu tiên với learner
