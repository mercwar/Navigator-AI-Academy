/* 
 * AVIS-ARTIFACT
 * Filename: prime_conflict.c
 * ROLE: CONFLICT SCORING MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

#include <stdio.h>
#include <string.h>

/* ============================================================
 * Prime Agent Conflict Scoring
 * ============================================================
 * Detects contradictions between branches.
 * Quantifies severity of conflicts.
 * Penalizes unstable synthesis paths.
 * ============================================================
 */

/* Calculate conflict score based on mismatch ratio */
double calculateConflict(const char *branchA, const char *branchB) {
    int lenA = strlen(branchA);
    int lenB = strlen(branchB);
    int minLen = (lenA < lenB) ? lenA : lenB;

    int mismatches = 0;
    for (int i = 0; i < minLen; i++) {
        if (branchA[i] != branchB[i]) {
            mismatches++;
        }
    }

    mismatches += abs(lenA - lenB);

    return (double)mismatches / (double)(lenA + lenB) * 100.0; /* Conflict percentage */
}

/* Print conflict report */
void printConflictReport(const char *branchA, const char *branchB) {
    double conflictScore = calculateConflict(branchA, branchB);
    printf("Prime Conflict Report:\n");
    printf("  Branch A: %s\n", branchA);
    printf("  Branch B: %s\n", branchB);
    printf("  Conflict Score: %.2f%%\n", conflictScore);
}

/* Example main for testing */
int main() {
    const char *branchA = "InitializeKernel";
    const char *branchB = "ShutdownKernel";

    printConflictReport(branchA, branchB);

    return 0;
}
