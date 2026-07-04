/* 
 * AVIS-ARTIFACT
 * Filename: prime_consensus.c
 * ROLE: CONSENSUS SCORING MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

#include <stdio.h>
#include <stdlib.h>

/* ============================================================
 * Prime Agent Consensus Scoring
 * ============================================================
 * Aggregates scores from all agents.
 * Applies arbitration thresholds.
 * Produces final consensus decision.
 * ============================================================
 */

typedef struct {
    double stability;
    double coherence;
    double efficiency;
    double novelty;
    double conflict;
} AgentScores;

/* Calculate consensus as weighted aggregation */
double calculateConsensus(const AgentScores *scores) {
    double weightedSum = scores->stability * 0.25 +
                         scores->coherence * 0.25 +
                         scores->efficiency * 0.20 +
                         scores->novelty   * 0.20 -
                         scores->conflict  * 0.10;

    return weightedSum;
}

/* Print consensus report */
void printConsensusReport(const AgentScores *scores) {
    double consensusScore = calculateConsensus(scores);
    printf("Prime Consensus Report:\n");
    printf("  Stability: %.2f\n", scores->stability);
    printf("  Coherence: %.2f\n", scores->coherence);
    printf("  Efficiency: %.2f\n", scores->efficiency);
    printf("  Novelty: %.2f\n", scores->novelty);
    printf("  Conflict: %.2f\n", scores->conflict);
    printf("  Consensus Score: %.2f\n", consensusScore);

    if (consensusScore >= 70.0) {
        printf("  Decision: APPROVED\n");
    } else {
        printf("  Decision: REJECTED\n");
    }
}

/* Example main for testing */
int main() {
    AgentScores scores = {85.0, 90.0, 75.0, 60.0, 15.0};
    printConsensusReport(&scores);
    return 0;
}
