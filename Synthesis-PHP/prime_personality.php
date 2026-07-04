?php
/* 
 * AVIS-ARTIFACT
 * Filename: prime_personality.php
 * ROLE: PERSONALITY MODULE
 * ENGINE: AVIS
 * STATUS: ACTIVE
 */

/* ============================================================
 * Prime Agent Personality Engine
 * ============================================================
 * Defines personality traits for synthesized agents.
 * Applies tone, style, and behavioral modifiers.
 * ============================================================
 */

class PrimePersonality {

    private $traits;

    public function __construct() {
        $this->traits = [];
    }

    public function addTrait($name, $value) {
        $this->traits[$name] = $value;
    }

    public function getTrait($name) {
        return isset($this->traits[$name]) ? $this->traits[$name] : null;
    }

    public function printPersonality() {
        echo "Prime Personality Profile:\n";
        foreach ($this->traits as $name => $value) {
            echo "  Trait: $name => Value: $value\n";
        }
    }
}

/* Example usage */
$personality = new PrimePersonality();
$personality->addTrait("Tone", "Direct");
$personality->addTrait("Style", "Technical");
$personality->addTrait("Behavior", "Assertive");

$personality->printPersonality();
?>
