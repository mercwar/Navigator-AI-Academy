?php
/* 
 * AVIS-ARTIFACT
 * Filename: prime_utils.php
 * ROLE: UTILITY FUNCTIONS MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

/* ============================================================
 * Prime Agent Utilities
 * ============================================================
 * Provides helper functions for agent execution.
 * Includes math, string, and logging utilities.
 * ============================================================
 */

class PrimeUtils {

    public static function normalizeScore($score, $max = 100.0) {
        return ($score / $max) * 100.0;
    }

    public static function clamp($value, $min, $max) {
        if ($value < $min) return $min;
        if ($value > $max) return $max;
        return $value;
    }

    public static function logMessage($message) {
        $timestamp = date("Y-m-d H:i:s");
        echo "[LOG $timestamp] $message\n";
    }

    public static function formatReportLine($label, $value) {
        return sprintf("%-15s : %.2f", $label, $value);
    }
}

/* Example usage */
PrimeUtils::logMessage("Prime Agent Utilities initialized.");
echo PrimeUtils::formatReportLine("Stability", PrimeUtils::normalizeScore(85.0));
?>
