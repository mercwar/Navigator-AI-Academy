
---

### 🔹 `prime_api.md`

```markdown
/* 
 * AVIS-ARTIFACT
 * Filename: prime_api.md
 * ROLE: API DOCUMENT
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

# Prime Agent API

## Endpoints
- **/evaluate** — Submit metrics for scoring.  
- **/select** — Request branch selection.  
- **/arbitrate** — Resolve conflicts.  
- **/synthesize** — Generate final output.  
- **/status** — Retrieve agent runtime status.  
- **/audit** — Access decision logs.

---

## Request Format
```json
{
  "metrics": {
    "stability": 85,
    "coherence": 90,
    "efficiency": 75,
    "novelty": 60,
    "conflict": 15
  }
}
