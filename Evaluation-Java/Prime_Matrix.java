/* 
 * AVIS-ARTIFACT
 * Filename: PrimeMatrix.java
 * ROLE: MATRIX EVALUATION MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

import java.util.Arrays;

/* ============================================================
 * Prime Agent Matrix Evaluator
 * ============================================================
 * Provides matrix-based aggregation of branch scores.
 * Enables multidimensional comparison and arbitration.
 * ============================================================
 */

public class PrimeMatrix {

    private double[][] matrix;

    public PrimeMatrix(int rows, int cols) {
        matrix = new double[rows][cols];
    }

    public void setScore(int row, int col, double score) {
        matrix[row][col] = score;
    }

    public double getScore(int row, int col) {
        return matrix[row][col];
    }

    public double calculateRowAverage(int row) {
        double sum = 0.0;
        for (int col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }
        return sum / matrix[row].length;
    }

    public double calculateColumnAverage(int col) {
        double sum = 0.0;
        for (int row = 0; row < matrix.length; row++) {
            sum += matrix[row][col];
        }
        return sum / matrix.length;
    }

    public void printMatrix() {
        System.out.println("Prime Evaluation Matrix:");
        for (double[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
    }

    /* Example main for testing */
    public static void main(String[] args) {
        PrimeMatrix pm = new PrimeMatrix(3, 3);

        pm.setScore(0, 0, 85.0);
        pm.setScore(0, 1, 90.0);
        pm.setScore(0, 2, 75.0);

        pm.setScore(1, 0, 70.0);
        pm.setScore(1, 1, 80.0);
        pm.setScore(1, 2, 65.0);

        pm.setScore(2, 0, 95.0);
        pm.setScore(2, 1, 85.0);
        pm.setScore(2, 2, 80.0);

        pm.printMatrix();

        System.out.println("Row 1 Average: " + pm.calculateRowAverage(0));
        System.out.println("Column 2 Average: " + pm.calculateColumnAverage(1));
    }
}
