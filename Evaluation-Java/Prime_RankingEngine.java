/* 
 * AVIS-ARTIFACT
 * Filename: PrimeRankingEngine.java
 * ROLE: RANKING ENGINE CORE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

import java.util.ArrayList;
import java.util.List;

/* ============================================================
 * Prime Agent Ranking Engine
 * ============================================================
 * Aggregates branch evaluations and produces ranked order.
 * Applies consensus thresholds and arbitration rules.
 * ============================================================
 */

public class PrimeRankingEngine {

    private List<PrimeBranchEvaluator> branches;

    public PrimeRankingEngine() {
        branches = new ArrayList<>();
    }

    public void addBranch(PrimeBranchEvaluator branch) {
        branches.add(branch);
    }

    public void rankBranches() {
        branches.sort((a, b) -> Double.compare(b.calculateBranchScore(), a.calculateBranchScore()));
    }

    public void printRanking() {
        System.out.println("Prime Branch Ranking:");
        int rank = 1;
        for (PrimeBranchEvaluator branch : branches) {
            System.out.println("Rank " + rank + ": Score = " + branch.calculateBranchScore());
            rank++;
        }
    }

    /* Example main for testing */
    public static void main(String[] args) {
        PrimeBranchEvaluator branch1 = new PrimeBranchEvaluator(85.0, 90.0, 75.0, 60.0, 15.0);
        PrimeBranchEvaluator branch2 = new PrimeBranchEvaluator(70.0, 80.0, 65.0, 55.0, 10.0);
        PrimeBranchEvaluator branch3 = new PrimeBranchEvaluator(95.0, 85.0, 80.0, 70.0, 20.0);

        PrimeRankingEngine engine = new PrimeRankingEngine();
        engine.addBranch(branch1);
        engine.addBranch(branch2);
        engine.addBranch(branch3);

        engine.rankBranches();
        engine.printRanking();
    }
}
