// ============================================================
// FILENAME: index.js
// AVIS-COMPONENT: MENU-BUILDER
// ARTIFACT-ID: AV-MENU-2026-JS
// STATE-MATRIX-REF: Version 1/STATE/global.state
// ============================================================

const files = [
  // Core Agent Control
  { name: "agent.md", source: "./Core-Agent-Control/agent.md", category: "Core Agent Control" },
  { name: "llm.txt", source: "./Core-Agent-Control/llm.txt", category: "Core Agent Control" },
  { name: "AGENTS.md", source: "./Core-Agent-Control/AGENTS.md", category: "Core Agent Control" },
  { name: "NEXT.md", source: "./Core-Agent-Control/NEXT.md", category: "Core Agent Control" },
  { name: "CONFIG.md", source: "./Core-Agent-Control/CONFIG.md", category: "Core Agent Control" },
  { name: "VERSION.md", source: "./Core-Agent-Control/VERSION.md", category: "Core Agent Control" },

  // Kernel + Runtime ASM
  { name: "prime_kernel.asm", source: "./Kernel-Runtime-ASM/prime_kernel.asm", category: "Kernel Runtime" },
  { name: "prime_loop.asm", source: "./Kernel-Runtime-ASM/prime_loop.asm", category: "Kernel Runtime" },
  { name: "prime_state.asm", source: "./Kernel-Runtime-ASM/prime_state.asm", category: "Kernel Runtime" },
  { name: "prime_runtime.asm", source: "./Kernel-Runtime-ASM/prime_runtime.asm", category: "Kernel Runtime" },
  { name: "prime_debug.asm", source: "./Kernel-Runtime-ASM/prime_debug.asm", category: "Kernel Runtime" },

  // Scoring C
  { name: "prime_scoring.c", source: "./Scoring-C/prime_scoring.c", category: "Scoring" },
  { name: "prime_stability.c", source: "./Scoring-C/prime_stability.c", category: "Scoring" },
  { name: "prime_coherence.c", source: "./Scoring-C/prime_coherence.c", category: "Scoring" },
  { name: "prime_efficiency.c", source: "./Scoring-C/prime_efficiency.c", category: "Scoring" },
  { name: "prime_novelty.c", source: "./Scoring-C/prime_novelty.c", category: "Scoring" },
  { name: "prime_conflict.c", source: "./Scoring-C/prime_conflict.c", category: "Scoring" },
  { name: "prime_consensus.c", source: "./Scoring-C/prime_consensus.c", category: "Scoring" },

  // Evaluation Java
  { name: "Prime_BranchEvaluator.java", source: "./Evaluation-Java/Prime_BranchEvaluator.java", category: "Evaluation" },
  { name: "Prime_RankingEngine.java", source: "./Evaluation-Java/Prime_RankingEngine.java", category: "Evaluation" },
  { name: "Prime_Comparator.java", source: "./Evaluation-Java/Prime_Comparator.java", category: "Evaluation" },
  { name: "Prime_Matrix.java", source: "./Evaluation-Java/Prime_Matrix.java", category: "Evaluation" },
  { name: "Prime_SymbolicCompiler.java", source: "./Evaluation-Java/Prime_SymbolicCompiler.java", category: "Evaluation" },

  // Synthesis PHP
  { name: "prime_selector.php", source: "./Synthesis-PHP/prime_selector.php", category: "Synthesis" },
  { name: "prime_arbitration.php", source: "./Synthesis-PHP/prime_arbitration.php", category: "Synthesis" },
  { name: "prime_synthesis.php", source: "./Synthesis-PHP/prime_synthesis.php", category: "Synthesis" },
  { name: "prime_patterns.php", source: "./Synthesis-PHP/prime_patterns.php", category: "Synthesis" },
  { name: "prime_personality.php", source: "./Synthesis-PHP/prime_personality.php", category: "Synthesis" },

  // Application
  { name: "prime_agent.c", source: "./Application/prime_agent.c", category: "Application" },
  { name: "prime_core.c", source: "./Application/prime_core.c", category: "Application" },
  { name: "prime_ai.java", source: "./Application/prime_ai.java", category: "Application" },
  { name: "prime_utils.php", source: "./Application/prime_utils.php", category: "Application" },
  { name: "prime_tests.c", source: "./Application/prime_tests.c", category: "Application" },

  // Resources 

  { name: "prime_metrics.json", source: "./Resources-DB/prime_metrics.json", category: "Resources" },
  { name: "prime_profiles.json", source: "./Resources-DB/prime_profiles.json", category: "Resources" },
  { name: "prime_rules.json", source: "./Resources-DB/prime_rules.json", category: "Resources" },
  { name: "prime_dependencies.json", source: "./Resources-DB/prime_dependencies.json", category: "Resources" },
  { name: "prime_ResponseFormat.json", source: "./Resources-DB/prime_ResponseFormat.json", category: "Resources" },
// + Docs
  { name: "prime_readme.md", source: "./Resources-Docs/prime_readme.md", category: "Docs" },
  { name: "prime_architecture.md", source: "./Resources-Docs/prime_architecture.md", category: "Docs" },
  { name: "prime_execution.md", source: "./Resources-Docs/prime_execution.md", category: "Docs" },
  { name: "prime_api.md", source: "./Resources-Docs/prime_api.md", category: "Docs" },
  { name: "prime_security.md", source: "./Resources-Docs/prime_security.md", category: "Docs" },
  { name: "prime_tutorial.md", source: "./Resources-Docs/prime_tutorial.md", category: "Docs" }
];


// Build collapsible sidebar menu
function buildMenu() {
  const menuContainer = document.getElementById("menuContainer");
  menuContainer.innerHTML = "";

  // Group files by category
  const grouped = {};
  files.forEach(file => {
    if (!grouped[file.category]) {
      grouped[file.category] = [];
    }
    grouped[file.category].push(file);
  });

  // Create collapsible sections
  for (const category in grouped) {
    const section = document.createElement("div");
    section.className = "menu-section";

    const header = document.createElement("div");
    header.className = "menu-header";
    header.textContent = category;
    header.onclick = () => {
      content.classList.toggle("collapsed");
    };

    const content = document.createElement("div");
    content.className = "menu-content collapsed";

    grouped[category].forEach(file => {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = file.name;
      link.onclick = () => loadFile("html_obj.html", file.source);
      content.appendChild(link);
    });

    section.appendChild(header);
    section.appendChild(content);
    menuContainer.appendChild(section);
  }
}



// Initialize menu on page load
document.addEventListener("DOMContentLoaded", buildMenu);
// ============================================================
// FILENAME: index.js
// AVIS-COMPONENT: MENU-BUILDER + PRISM RICH DISPLAY
// ARTIFACT-ID: AV-JS-2026-MENU
// STATE-MATRIX-REF: Version 1/STATE/global.state
// ============================================================

let activePath = null;
let lastFetchedFileContent = null;

function injectPrismDependencies() {
  if (document.getElementById("prism-core-lib")) return;

  const linkEl = document.createElement("link");
  linkEl.rel = "stylesheet";
  linkEl.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
  document.head.appendChild(linkEl);

  const scriptEl = document.createElement("script");
  scriptEl.id = "prism-core-lib";
  scriptEl.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";

  scriptEl.onload = () => {
    const langs = [
      "javascript","typescript","json","markdown","python",
      "css","c","cpp","bash","java","go","rust"
    ];
    langs.forEach(lang => {
      const s = document.createElement("script");
      s.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
      document.body.appendChild(s);
    });

    // Block PHP completely
    delete Prism.languages.php;
    Prism.hooks.add("before-highlight", env => {
      if (env.language === "php") env.language = "none";
    });
  };

  document.body.appendChild(scriptEl);
}

function getPrismLanguageClass(path) {
  const lower = path.toLowerCase();

  if (lower.endsWith(".js") || lower.endsWith(".jsx")) return "language-javascript";
  if (lower.endsWith(".ts") || lower.endsWith(".tsx")) return "language-typescript";
  if (lower.endsWith(".json")) return "language-json";
  if (lower.endsWith(".md")) return "language-markdown";
  if (lower.endsWith(".py")) return "language-python";
  if (lower.endsWith(".html") || lower.endsWith(".xml")) return "language-markup";
  if (lower.endsWith(".css")) return "language-css";
  if (lower.endsWith(".sh") || lower.endsWith(".bash")) return "language-bash";
  if (lower.endsWith(".c") || lower.endsWith(".h")) return "language-c";
  if (lower.endsWith(".cpp") || lower.endsWith(".hpp")) return "language-cpp";

  // NEW: Java support
  if (lower.endsWith(".java")) return "language-java";

  // NEW: ASM support (map to clike or custom)
  if (lower.endsWith(".asm")) return "language-clike"; // Prism doesn’t have native ASM, clike is closest

  // NEW: PHP support
  if (lower.endsWith(".php")) return "language-php";

  return "language-none";
}

function renderPrismCode(rawCode, path) {
  const langClass = getPrismLanguageClass(path);
  const safe = rawCode
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return `
    <pre class="${langClass}" style="margin:0; padding:1rem; background:transparent;">
      <code class="${langClass}">${safe}</code>
    </pre>
  `;
}

// Override loadFile to use Prism rendering
function loadFile(wrapperUrl, sourceUrl) {
  activePath = sourceUrl;
  fetch(wrapperUrl)
    .then(response => response.text())
    .then(wrapperHtml => {
      document.getElementById("fileContent").innerHTML = wrapperHtml;
      return fetch(sourceUrl);
    })
    .then(response => response.text())
    .then(sourceCode => {
      lastFetchedFileContent = sourceCode;
      const viewDiv = document.querySelector(".source-view");
      if (viewDiv) {
        viewDiv.innerHTML = renderPrismCode(sourceCode, sourceUrl);
        Prism.highlightAllUnder(viewDiv); // apply Prism highlighting
      }
    })
    .catch(err => {
      document.getElementById("fileContent").innerHTML =
        "<p style='color:red'>Error loading file.</p>";
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  injectPrismDependencies();
  buildMenu();
});
