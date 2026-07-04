/* 
 * AVIS-ARTIFACT
 * Filename: prime_architecture.md
 * ROLE: ARCHITECTURE DOCUMENT
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

# Prime Agent Architecture

## Layers
- **Evaluation Layer (Java)** — scoring and symbolic compilation.  
- **Synthesis Layer (PHP)** — branch selection, arbitration, synthesis.  
- **Application Layer (C/Java/PHP)** — runtime execution, utilities, tests.  
- **Resources Layer (JSON/Docs)** — metrics, profiles, governance, rules, dependencies, documentation.

---

## Flow
1. **Evaluation** — Metrics calculated via Java modules.  
2. **Selection** — Best branch chosen in PHP.  
3. **Arbitration** — Conflicts resolved with governance rules.  
4. **Synthesis** — Final output produced.  
5. **Application** — Runtime execution and testing.  
6. **Audit** — Logging for transparency and compliance.

---

## Notes
- All files must include **AVIS-ARTIFACT** headers.  
- Governance rules enforce consensus, conflict minimization, and transparency.  
- Dependencies tracked in `prime_dependencies.json`.
