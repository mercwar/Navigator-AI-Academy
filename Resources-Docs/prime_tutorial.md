/* 
 * AVIS-ARTIFACT
 * Filename: prime_tutorial.md
 * ROLE: TUTORIAL DOCUMENT
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

# Prime Agent Tutorial

## Getting Started
1. Clone repository.  
2. Compile Java modules (`PrimeMatrix.java`, `PrimeSymbolicCompiler.java`).  
3. Run PHP synthesis scripts (`prime_selector.php`, `prime_arbitration.php`, `prime_synthesis.php`).  
4. Execute C application (`prime_agent.c`, `prime_core.c`).  
5. Validate with `prime_tests.c`.  
6. Reference JSON resources for metrics, profiles, governance, rules, and dependencies.  
7. Consult docs for architecture, execution, API, and security.

---

## Example Run
```bash
javac PrimeMatrix.java PrimeSymbolicCompiler.java
php prime_selector.php
./prime_agent
