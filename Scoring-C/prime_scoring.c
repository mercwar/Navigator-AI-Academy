/* 
 * AVIS-ARTIFACT
 * Filename: prime_scoring.c
 * ROLE: SCORING ENGINE CORE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

#include <stdio.h>
#include <stdlib.h>

/* ============================================================
 * Prime Agent Scoring Engine
 * ============================================================
 * Provides the core scoring functions for arbitration modules.
 * Each metric (stability, coherence, efficiency, novelty, conflict,
 * consensus) is calculated here and routed to evaluation.
 * ============================================================
 */

typedef struct {
    double stability;
    double coherence;
    double efficiency;
    double novelty;
    double conflict;
    double consensus;
} PrimeScores;

/* Initialize scores */
void initScores(PrimeScores *scores) {
    scores->stability = 0.0;
    scores->coherence = 0.0;
    scores->efficiency = 0.0;
    scores->novelty   = 0.0;
    scores->conflict  = 0.0;
    scores->consensus = 0.0;
}

/* Update scores with weighted values */
void updateScores(PrimeScores *scores, double s, double c, double e, double n, double f) {
    scores->stability += s;
    scores->coherence += c;
    scores->efficiency += e;
    scores->novelty   += n;
    scores->conflict  += f;

    /* Consensus is derived as weighted average */
    scores->consensus = (scores->stability + scores->coherence + scores->efficiency + scores->novelty - scores->conflict) / 5.0;
}

/* Print scores for debugging */
void printScores(const PrimeScores *scores) {
    printf("Prime Scoring Metrics:\n");
    printf("  Stability: %.2f\n", scores->stability);
    printf("  Coherence: %.2f\n", scores->coherence);
    printf("  Efficiency: %.2f\n", scores->efficiency);
    printf("  Novelty: %.2f\n", scores->novelty);
    printf("  Conflict: %.2f\n", scores->conflict);
    printf("  Consensus: %.2f\n", scores->consensus);
}

/* Example main for testing */
int main() {
    PrimeScores scores;
    initScores(&scores);

    updateScores(&scores, 0.8, 0.9, 0.7, 0.6, 0.2);
    printScores(&scores);

    return 0;
}
