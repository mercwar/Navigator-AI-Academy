/* 
 * AVIS-ARTIFACT
 * Filename: README.md
 * ROLE: MAIN REPOSITORY README
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

# Prime Agent Repository

## Overview
The Prime Agent repository is a modular framework designed to evaluate, arbitrate, and synthesize agent behaviors.  
It integrates multiple languages — **C, Java, PHP, JSON, ASM** — to provide a cross-platform system for runtime execution, scoring, synthesis, and governance.

---

## Repository Structure

### Core Agent Control
Contains configuration and control files for the agent runtime:
- `agent.md` — Agent overview  
- `llm.txt` — Language model notes  
- `AGENTS.md` — Agent definitions  
- `NEXT.md` — Roadmap  
- `CONFIG.md` — Configuration details  
- `VERSION.md` — Version history  

### Kernel Runtime ASM
Low-level assembly modules for kernel and runtime operations:
- `prime_kernel.asm`  
- `prime_loop.asm`  
- `prime_state.asm`  
- `prime_runtime.asm`  
- `prime_debug.asm`  

### Scoring (C)
Implements metric scoring logic:
- `prime_scoring.c`  
- `prime_stability.c`  
- `prime_coherence.c`  
- `prime_efficiency.c`  
- `prime_novelty.c`  
- `prime_conflict.c`  
- `prime_consensus.c`  

### Evaluation (Java)
Java modules for evaluation and symbolic compilation:
- `Prime_BranchEvaluator.java`  
- `Prime_RankingEngine.java`  
- `Prime_Comparator.java`  
- `Prime_Matrix.java`  
- `Prime_SymbolicCompiler.java`  

### Synthesis (PHP)
PHP modules for branch selection, arbitration, and synthesis:
- `prime_selector.php`  
- `prime_arbitration.php`  
- `prime_synthesis.php`  
- `prime_patterns.php`  
- `prime_personality.php`  

### Application
Runtime and utility modules:
- `prime_agent.c`  
- `prime_core.c`  
- `prime_ai.java`  
- `prime_utils.php`  
- `prime_tests.c`  

### Resources
JSON resources defining metrics, profiles, rules, dependencies, and response formats:
- `prime_metrics.json`  
- `prime_profiles.json`  
- `prime_rules.json`  
- `prime_dependencies.json`  
- `prime_ResponseFormat.json`  

### Docs
Documentation for architecture, execution, API, security, and tutorials:
- `prime_readme.md`  
- `prime_architecture.md`  
- `prime_execution.md`  
- `prime_api.md`  
- `prime_security.md`  
- `prime_tutorial.md`  

---

## Workflow
1. **Initialize** — Load profiles, metrics, governance rules, and dependencies.  
2. **Evaluate** — Apply scoring via Java modules.  
3. **Select** — Choose best branch with PHP selector.  
4. **Arbitrate** — Resolve conflicts with arbitration logic.  
5. **Synthesize** — Produce final output.  
6. **Run** — Execute runtime agent in C.  
7. **Test** — Validate with unit tests.  
8. **Audit** — Log decisions for transparency and compliance.  

---

## Governance
- **Consensus Enforcement** — Majority rules in arbitration.  
- **Conflict Minimization** — High-conflict branches deprioritized.  
- **Threshold Compliance** — Approval ≥ 70.0, rejection ≤ 50.0.  
- **Transparency Logging** — All decisions logged daily.  
- **Security Validation** — Inputs/outputs validated against AVIS policies.  

---

## Getting Started
```bash
# Compile evaluation modules
javac Evaluation-Java/*.java

# Run synthesis scripts
php Synthesis-PHP/prime_selector.php

# Execute runtime agent
gcc Application/prime_agent.c -o prime_agent
./prime_agent
