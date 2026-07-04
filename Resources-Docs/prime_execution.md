/* 
 * AVIS-ARTIFACT
 * Filename: prime_execution.md
 * ROLE: EXECUTION DOCUMENT
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

# Prime Agent Execution

## Workflow
1. **Initialize** — Load profiles, metrics, governance rules, and dependencies.  
2. **Evaluate** — Apply `PrimeMatrix` and `PrimeSymbolicCompiler`.  
3. **Select** — Use `prime_selector.php` to choose best branch.  
4. **Arbitrate** — Resolve conflicts with `prime_arbitration.php`.  
5. **Synthesize** — Produce final output via `prime_synthesis.php`.  
6. **Run** — Execute agent runtime (`prime_agent.c`, `prime_core.c`).  
7. **Test** — Validate with `prime_tests.c`.  
8. **Audit** — Log decisions for transparency.

---

## Example Run
```bash
javac PrimeMatrix.java PrimeSymbolicCompiler.java
php prime_selector.php
./prime_agent
