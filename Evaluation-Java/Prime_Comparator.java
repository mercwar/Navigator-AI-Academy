/* 
 * AVIS-ARTIFACT
 * Filename: PrimeComparator.java
 * ROLE: BRANCH COMPARATOR MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

import java.util.Comparator;

/* ============================================================
 * Prime Agent Comparator
 * ============================================================
 * Compares two branches based on evaluation scores.
 * Provides ordering logic for ranking engine.
 * ============================================================
 */

public class PrimeComparator implements Comparator<PrimeBranchEvaluator> {

    @Override
    public int compare(PrimeBranchEvaluator a, PrimeBranchEvaluator b) {
        double scoreA = a.calculateBranchScore();
        double scoreB = b.calculateBranchScore();

        return Double.compare(scoreB, scoreA); // Descending order
    }

    /* Example usage */
    public static void main(String[] args) {
        PrimeBranchEvaluator branch1 = new PrimeBranchEvaluator(85.0, 90.0, 75.0, 60.0, 15.0);
        PrimeBranchEvaluator branch2 = new PrimeBranchEvaluator(70.0, 80.0, 65.0, 55.0, 10.0);

        PrimeComparator comparator = new PrimeComparator();
        int result = comparator.compare(branch1, branch2);

        System.out.println("Comparison Result: " + result);
        if (result < 0) {
            System.out.println("Branch2 outranks Branch1");
        } else if (result > 0) {
            System.out.println("Branch1 outranks Branch2");
        } else {
            System.out.println("Branches are equal");
        }
    }
}
