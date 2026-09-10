/**
 * KARAN PRATAP SINGH - PORTFOLIO CONTROLLER
 * Senior Automation Test Engineer | Intermediate Agentic AI Engineer | Foundational DevOps
 */

// ==========================================
// SCENARIO DEFINITIONS (QA, AGENTIC AI, DEVOPS)
// ==========================================
const SCENARIOS = {
  halliburton: {
    category: 'Automation BDD (Senior)',
    fileName: 'features/telemetry_auth.feature',
    tags: ['@halliburton', '@smoke', '@telemetry', '@playwright'],
    featureTitle: 'InnerVue Wellbore Telemetry Stream',
    scenarioTitle: 'Bypassing UI Auth & Validating Pressure Stream via Playwright API',
    arch: 'Playwright (TS) + Cucumber BDD',
    artifact: 'playwright-trace.zip',
    steps: [
      { kw: 'Given', text: 'technician is authenticated via Playwright APIRequestContext storageState', ms: 112 },
      { kw: 'When', text: 'telemetry stream is connected to wellbore sensor "WB-88201"', ms: 238 },
      { kw: 'Then', text: 'stream status must display "ACTIVE_NORMAL"', ms: 74 },
      { kw: 'And', text: 'response latency must not exceed 200 ms', ms: 61 }
    ],
    logs: [
      'Playwright: Launching Chromium [Headless: true, Channel: default]...',
      'BrowserContext: Injected pre-generated storageState.json session cookies',
      'APIRequestContext: Auth token verified (status 200 OK)',
      'Page: Navigated to https://innervue.halliburton.com/streams/WB-88201',
      'Locator: Auto-waiting for getByTestId("stream-status") to be visible...',
      'Assertion: expect(locator).toHaveText("ACTIVE_NORMAL") passed.',
      'Performance: Sensor latency measured at 146ms (Threshold: 200ms)',
      'Hook: Scenario passed. Trace recorded -> ./reports/traces/wb-88201.zip'
    ]
  },
  agentic: {
    category: 'Agentic AI (Intermediate)',
    fileName: 'agents/autonomous_test_repair.py',
    tags: ['@agentic-ai', '@langgraph', '@crewai', '@mcp', '@gemini-sdk'],
    featureTitle: 'LangGraph & Playwright MCP Multi-Agent Healing Graph',
    scenarioTitle: 'Autonomous DOM State Inspection & Self-Healing Selector Workflow',
    arch: 'LangGraph + CrewAI + Playwright MCP (Python)',
    artifact: 'agent_execution_graph.json',
    steps: [
      { kw: 'Step 1 [LangGraph Node]', text: 'PlannerAgent analyzes test objective and invokes Playwright MCP tool', ms: 140 },
      { kw: 'Step 2 [Playwright MCP]', text: 'Server inspects accessibility tree & detects drifted selector "#submit-btn-v2"', ms: 260 },
      { kw: 'Step 3 [CrewAI Agent]', text: 'LLM (Gemini SDK) proposes semantic locator: getByRole("button", { name: "Submit" })', ms: 310 },
      { kw: 'Step 4 [Verifier Agent]', text: 'VerificationAgent executes action via MCP tool with 100% confidence', ms: 95 }
    ],
    logs: [
      'LangGraph: Initializing StateGraph with memory checkpointing...',
      'Model Context Protocol: Connected to @modelcontextprotocol/server-playwright on stdio',
      'Playwright MCP: Fetched live DOM accessibility tree snapshot (1,248 nodes)',
      'CrewAI Agent [SelectorSpecialist]: Reasoning through prompt with Google Gemini 2.5 Flash SDK...',
      'Semantic Extraction: Discovered optimal role locator: getByRole("button", { name: "Submit" })',
      'MCP Execution: Executing click() via MCP tool interface -> Action status: SUCCESS',
      'StateGraph Transition: analyze_dom -> propose_locator -> verify_selector -> END',
      'Agentic Triage: Auto-generated Jira issue update [QA-4102: Drift self-healed]'
    ]
  },
  devops: {
    category: 'DevOps & Containers (Foundational)',
    fileName: '.github/workflows/sharded-tests.yml',
    tags: ['@devops', '@docker', '@k8s-basics', '@github-actions', '@ci-cd'],
    featureTitle: 'Containerized Sharded Test Execution Pipeline',
    scenarioTitle: 'Dockerized Parallel Shard Spin-Up & Status Quality Gate',
    arch: 'Docker + K8s Basics + GitHub Actions',
    artifact: 'allure-report-shard1.tar.gz',
    steps: [
      { kw: 'Step 1 [Docker Engine]', text: 'Pull base image mcr.microsoft.com/playwright:v1.45.0-jammy', ms: 120 },
      { kw: 'Step 2 [K8s Pod Check]', text: 'Validate runner resource limits (CPU: 2 cores, Memory: 4Gi)', ms: 85 },
      { kw: 'Step 3 [CI/CD Matrix]', text: 'Execute parallel test shard 1 of 4: npx cucumber-js --shard=1/4', ms: 320 },
      { kw: 'Step 4 [Quality Gate]', text: 'Publish Allure reports & set blocking PR status check to PASSED', ms: 110 }
    ],
    logs: [
      'GitHub Actions: Workflow dispatch triggered by push on main branch',
      'Docker: Spun up container 8f9b2a14 from multi-stage Dockerfile',
      'Kubernetes: Verified pod scheduling in dev-test namespace (basics verified)',
      'CI/CD Matrix Sharding: Distributing 150 feature scenarios across 4 runners',
      'Runner 1: Executed 38 scenarios in headless Chromium container (All 38 Passed)',
      'Quality Gate: Zero test regressions detected across PR #182',
      'Artifact Storage: Compressed traces & Allure report uploaded to cloud bucket'
    ]
  },
  mercedes: {
    category: 'Automation BDD (Senior)',
    fileName: 'features/basic_input_data.feature',
    tags: ['@mercedes', '@regression', '@rest-assured', '@k6'],
    featureTitle: 'Basic Input Data Multi-Tier Validation',
    scenarioTitle: 'Validate input parameter synchronization across QA and PROD',
    arch: 'REST Assured + Playwright UI + Grafana k6',
    artifact: 'bid_test_summary.html',
    steps: [
      { kw: 'Given', text: 'the QA application environment is healthy and accessible', ms: 95 },
      { kw: 'When', text: 'user submits batch configuration payload via REST Assured client', ms: 310 },
      { kw: 'Then', text: 'backend returns HTTP 201 with valid transaction token', ms: 88 },
      { kw: 'And', text: 'frontend dashboard reflects synced record within 300 ms', ms: 142 }
    ],
    logs: [
      'Playwright: Worker 2 spun up on shard 1/4',
      'Environment: Health check https://bid-qa.mercedes-benz.com/health returned 200',
      'REST Assured: POST /api/v2/config/batch payload size: 4.8 KB',
      'Response: HTTP 201 Created | TransactionID: MB-DE-892401',
      'Page: getByRole("table").getByText("MB-DE-892401") is visible',
      'Grafana k6 Check: Response p95 duration: 185ms',
      'Allure: Test step data attachments synced successfully'
    ]
  }
};

// ==========================================
// DOM ELEMENTS
// ==========================================
let currentScenarioKey = 'halliburton';
let isTestRunning = false;

const scenarioPicker = document.getElementById('scenarioPicker');
const featureFileName = document.getElementById('featureFileName');
const scenarioCategoryBadge = document.getElementById('scenarioCategoryBadge');
const gherkinContainer = document.getElementById('gherkinContainer');
const runScenarioBtn = document.getElementById('runScenarioBtn');
const runBtnText = document.getElementById('runBtnText');
const runBtnIcon = document.getElementById('runBtnIcon');
const terminalTitle = document.getElementById('terminalTitle');
const terminalConsole = document.getElementById('terminalConsole');
const runnerStatusChip = document.getElementById('runnerStatusChip');
const statStatus = document.getElementById('statStatus');
const statArch = document.getElementById('statArch');
const statArtifact = document.getElementById('statArtifact');
const statDuration = document.getElementById('statDuration');

// ==========================================
// RENDER SCENARIO IN VIEWER
// ==========================================
function renderScenario(key) {
  const data = SCENARIOS[key];
  if (!data) return;

  featureFileName.textContent = data.fileName;
  if (scenarioCategoryBadge) {
    scenarioCategoryBadge.textContent = data.category;
  }
  if (statArch) {
    statArch.textContent = data.arch;
  }
  if (statArtifact) {
    statArtifact.textContent = data.artifact;
  }
  if (terminalTitle) {
    terminalTitle.textContent = `Runtime Engine: [${data.category}]`;
  }

  let tagsHtml = data.tags.map(t => `<span class="g-tag">${t}</span>`).join(' ');

  let stepsHtml = data.steps.map((step, idx) => `
    <div class="g-step-row" id="step-${idx}">
      <div class="step-text">
        <span class="step-kw">${escapeHtml(step.kw)}</span>
        <span class="step-desc">${escapeHtml(step.text)}</span>
      </div>
      <span class="step-time" id="step-time-${idx}">pending</span>
    </div>
  `).join('');

  gherkinContainer.innerHTML = `
    <div style="margin-bottom: 0.8rem;">
      ${tagsHtml}
    </div>
    <div style="margin-bottom: 0.6rem;">
      <span class="g-kw">Workflow / Feature:</span> <strong>${escapeHtml(data.featureTitle)}</strong>
    </div>
    <div style="margin-bottom: 1rem; padding-left: 0.75rem;">
      <span class="g-kw">Execution Unit:</span> ${escapeHtml(data.scenarioTitle)}
    </div>
    <div class="steps-box" style="padding-left: 0.75rem;">
      ${stepsHtml}
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==========================================
// EXECUTE SCENARIO RUN SIMULATION
// ==========================================
async function executeScenarioRun() {
  if (isTestRunning) return;
  isTestRunning = true;

  const data = SCENARIOS[currentScenarioKey];

  // UI state: Running
  runScenarioBtn.disabled = true;
  scenarioPicker.disabled = true;
  runBtnText.textContent = 'Executing Scenario...';
  runnerStatusChip.textContent = 'RUNNING';
  runnerStatusChip.className = 'status-chip running';
  statStatus.textContent = 'Running';
  statStatus.className = 'pill-value text-cyan';

  // Reset steps & terminal
  terminalConsole.innerHTML = '';
  addTerminalLine(`$ exec: ${data.fileName} --tags "${data.tags.join(' ')}"`, 'sys');
  addTerminalLine(`[Runner Engine] Initialized runtime environment for ${data.category}...`, 'comment');

  for (let i = 0; i < data.steps.length; i++) {
    const stepEl = document.getElementById(`step-${i}`);
    const timeEl = document.getElementById(`step-time-${i}`);
    if (stepEl) {
      stepEl.className = 'g-step-row';
      timeEl.textContent = 'pending';
      timeEl.style.color = 'var(--text-muted)';
    }
  }

  let totalMs = 0;

  // Animate through each step
  for (let i = 0; i < data.steps.length; i++) {
    const step = data.steps[i];
    const stepEl = document.getElementById(`step-${i}`);
    const timeEl = document.getElementById(`step-time-${i}`);

    if (stepEl) {
      stepEl.className = 'g-step-row running';
      timeEl.textContent = 'executing...';
      timeEl.style.color = 'var(--accent-cyan)';
    }

    // Step duration delay simulation
    await sleep(step.ms * 2.5);
    totalMs += step.ms;

    if (stepEl) {
      stepEl.className = 'g-step-row passed';
      timeEl.innerHTML = `&#10003; ${step.ms}ms`;
      timeEl.style.color = 'var(--accent-emerald)';
    }

    addTerminalLine(`  ✔ ${step.kw} ${step.text} (${step.ms}ms)`, 'success');

    if (data.logs[i]) {
      addTerminalLine(`    ↳ ${data.logs[i]}`, 'comment');
    }
  }

  // Summary logs
  await sleep(200);
  addTerminalLine('', 'comment');
  addTerminalLine(`✔ All execution criteria passed successfully (100% Reliability)`, 'success');
  addTerminalLine(`Execution Architecture: ${data.arch}`, 'comment');
  addTerminalLine(`Total execution duration: ${totalMs}ms`, 'highlight');
  addTerminalLine(`Artifact generated: ${data.artifact}`, 'sys');

  // UI state: Completed
  runnerStatusChip.textContent = 'PASSED (100%)';
  runnerStatusChip.className = 'status-chip passed';
  statStatus.textContent = 'Passed';
  statStatus.className = 'pill-value text-success';
  statDuration.textContent = `${totalMs}ms`;

  runScenarioBtn.disabled = false;
  scenarioPicker.disabled = false;
  runBtnText.textContent = 'Run Scenario Again';
  isTestRunning = false;
}

function addTerminalLine(text, styleClass = '') {
  const line = document.createElement('div');
  line.className = `console-line ${styleClass}`;
  line.textContent = text;
  terminalConsole.appendChild(line);
  terminalConsole.scrollTop = terminalConsole.scrollHeight;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================================
// EVENT LISTENERS
// ==========================================
if (scenarioPicker) {
  scenarioPicker.addEventListener('change', (e) => {
    currentScenarioKey = e.target.value;
    renderScenario(currentScenarioKey);
    statStatus.textContent = 'Ready';
    statStatus.className = 'pill-value text-success';
    statDuration.textContent = '--';
    runnerStatusChip.textContent = 'IDLE';
    runnerStatusChip.className = 'status-chip';
    terminalConsole.innerHTML = `
      <div class="console-line sys">> Switched runtime context to [${currentScenarioKey}].</div>
      <div class="console-line comment">> Click "Run Scenario" to execute live simulation...</div>
    `;
  });
}

if (runScenarioBtn) {
  runScenarioBtn.addEventListener('click', executeScenarioRun);
}

// Architecture Tabs
const archTabBtns = document.querySelectorAll('.tab-btn');
archTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    archTabBtns.forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const targetTabId = `pane-${btn.getAttribute('data-tab')}`;
    const targetPane = document.getElementById(targetTabId);
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('kps_qa_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('kps_qa_theme', newTheme);
  });
}

// Quick Copy Email
const copyEmailBtn = document.getElementById('quickCopyEmail');
const copyEmailText = document.getElementById('copyEmailText');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('karanpratapsingh10001@gmail.com').then(() => {
      copyEmailText.textContent = 'Copied to Clipboard!';
      setTimeout(() => {
        copyEmailText.textContent = 'Copy Email';
      }, 2500);
    });
  });
}

// ==========================================
// ULTRA-MODERN NAVBAR & SLIDING PILL CONTROLLER
// ==========================================
const navLinksWrap = document.getElementById('navLinksWrap');
const navPillIndicator = document.getElementById('navPillIndicator');
const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');
const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerLinks = document.querySelectorAll('.drawer-link');

function movePillTo(linkEl) {
  if (!linkEl || !navPillIndicator) return;
  const rect = linkEl.getBoundingClientRect();
  const parentRect = navLinksWrap.getBoundingClientRect();

  const left = rect.left - parentRect.left;
  const width = rect.width;

  navPillIndicator.style.transform = `translateX(${left}px)`;
  navPillIndicator.style.width = `${width}px`;
  navPillIndicator.style.opacity = '1';
}

// Hover effects on nav links
desktopNavLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    movePillTo(link);
  });
});

if (navLinksWrap) {
  navLinksWrap.addEventListener('mouseleave', () => {
    const activeLink = document.querySelector('.nav-links .nav-link.active');
    if (activeLink) {
      movePillTo(activeLink);
    }
  });
}

// ScrollSpy with IntersectionObserver
const observedSectionIds = ['hero', 'specializations', 'runner', 'experience', 'architecture', 'skills', 'credentials'];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      desktopNavLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          desktopNavLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          movePillTo(link);
        }
      });
    }
  });
}, {
  root: null,
  rootMargin: '-20% 0px -60% 0px',
  threshold: 0
});

observedSectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// Window resize reposition
window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav-links .nav-link.active');
  if (activeLink) {
    movePillTo(activeLink);
  }
});

// Mobile Drawer Interaction
if (menuToggle && mobileDrawer) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('click', (e) => {
    if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !menuToggle.contains(e.target)) {
      closeDrawer();
    }
  });
}

function openDrawer() {
  menuToggle.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
  mobileDrawer.classList.add('open');
  mobileDrawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileDrawer.classList.remove('open');
  mobileDrawer.setAttribute('aria-hidden', 'true');
}

// Initialize default scenario & pill indicator
renderScenario(currentScenarioKey);
setTimeout(() => {
  const activeLink = document.querySelector('.nav-links .nav-link.active');
  if (activeLink) {
    movePillTo(activeLink);
  }
}, 150);

