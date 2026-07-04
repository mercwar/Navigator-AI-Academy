/* 
 * AVIS-ARTIFACT
 * Filename: prime_tests.c
 * ROLE: APPLICATION TEST MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

#include <stdio.h>
#include <assert.h>

/* ============================================================
 * Prime Agent Tests
 * ============================================================
 * Provides unit tests for core agent modules.
 * Validates scoring, evaluation, and synthesis logic.
 * ============================================================
 */

double calculateScore(double stability, double coherence, double efficiency, double novelty, double conflict) {
    return stability * 0.25 +
           coherence * 0.25 +
           efficiency * 0.20 +
           novelty   * 0.20 -
           conflict  * 0.10;
}

void testScoreCalculation() {
    double score = calculateScore(85.0, 90.0, 75.0, 60.0, 15.0);
    printf("Test Score: %.2f\n", score);
    assert(score > 70.0); // Expected APPROVED
}

void testConflictPenalty() {
    double score = calculateScore(85.0, 90.0, 75.0, 60.0, 50.0);
    printf("Test Conflict Penalty Score: %.2f\n", score);
    assert(score < 70.0); // Expected REJECTED due to high conflict
}

int main() {
    printf("Running Prime Agent Tests...\n");
    testScoreCalculation();
    testConflictPenalty();
    printf("All tests passed.\n");
    return 0;
}
