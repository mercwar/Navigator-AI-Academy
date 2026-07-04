/* 
 * AVIS-ARTIFACT
 * Filename: prime_novelty.c
 * ROLE: NOVELTY SCORING MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

#include <stdio.h>
#include <string.h>

/* ============================================================
 * Prime Agent Novelty Scoring
 * ============================================================
 * Identifies unique or innovative branches.
 * Scores originality against baseline patterns.
 * Balances novelty with conflict risk.
 * ============================================================
 */

/* Calculate novelty based on difference ratio */
double calculateNovelty(const char *branch, const char *baseline) {
    int lenBranch = strlen(branch);
    int lenBase   = strlen(baseline);
    int minLen    = (lenBranch < lenBase) ? lenBranch : lenBase;

    int differences = 0;
    for (int i = 0; i < minLen; i++) {
        if (branch[i] != baseline[i]) {
            differences++;
        }
    }

    differences += abs(lenBranch - lenBase);

    return (double)differences / (double)(lenBranch + lenBase) * 100.0; /* Novelty percentage */
}

/* Print novelty report */
void printNoveltyReport(const char *branch, const char *baseline) {
    double noveltyScore = calculateNovelty(branch, baseline);
    printf("Prime Novelty Report:\n");
    printf("  Branch: %s\n", branch);
    printf("  Baseline: %s\n", baseline);
    printf("  Novelty Score: %.2f%%\n", noveltyScore);
}

/* Example main for testing */
int main() {
    const char *branch   = "OptimizeKernelExecution";
    const char *baseline = "InitializeKernelExecution";

    printNoveltyReport(branch, baseline);

    return 0;
}
