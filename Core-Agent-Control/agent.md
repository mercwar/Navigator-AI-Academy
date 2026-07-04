# AVIS-ARTIFACT
Filename: agent.md
ROLE: CORE AGENT DOC
ENGINE: AVIS
STATUS: ACTIVE

## Prime Agent Identity
The Prime Agent is the orchestration layer of the AVIS system. It defines:
- Control flow between kernel runtime and scoring modules
- Arbitration rules for evaluation and synthesis
- Integration points for external modules

## Control Directives
- Maintain stability across runtime states
- Enforce coherence between evaluation outputs
- Apply efficiency filters to reduce redundant execution
- Balance novelty against conflict
- Route consensus decisions to synthesis stage

## Execution Flow
1. Initialize kernel runtime
2. Load scoring modules
3. Evaluate branches
4. Rank and compile symbolic graphs
5. Synthesize final decision
6. Output to application layer

## Integration
- Kernel Runtime ASM for low-level execution
- Scoring C modules for arbitration metrics
- Evaluation Java for branch ranking
- Synthesis PHP for final decision logic
- Application layer for runtime deployment
