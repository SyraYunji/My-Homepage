import React from "react";
import { Link } from "react-router-dom";
import styles from "./SwAgentAction.module.css";

const metrics = [
  { value: "0.7923049787", label: "Final Macro-F1", note: "Public = Private" },
  { value: "31 / 269", label: "Final rank", note: "1st place was 0.79863" },
  { value: "+0.00165", label: "Gained in 3 days", note: "from 0.7906495409" },
  { value: "8m 31s", label: "Inference time", note: "10-minute hard limit" },
];

const actionGroups = [
  {
    group: "Explore",
    classes: ["read_file", "grep_search", "list_directory", "glob_pattern"],
    encoder: "0.48",
    sparseAdd: "+0.20",
    symbolic: "0.00",
  },
  {
    group: "Edit",
    classes: ["edit_file", "write_file", "apply_patch"],
    encoder: "0.30",
    sparseAdd: "+0.02",
    symbolic: "0.00",
  },
  {
    group: "Execute",
    classes: ["run_bash", "run_tests", "lint_or_typecheck"],
    encoder: "0.34",
    sparseAdd: "+0.06",
    symbolic: "0.16",
  },
  {
    group: "Dialog",
    classes: ["ask_user", "plan_task", "web_search", "respond_only"],
    encoder: "0.38",
    sparseAdd: "+0.10",
    symbolic: "0.12",
  },
];

const members = [
  {
    name: "tree",
    detail: "v8 ExtraTrees stack blend",
    oof: "0.7549",
    note: "Internal class order is alphabetical — must be permuted to contest order",
  },
  {
    name: "metaH",
    detail: "HistGradientBoosting meta-stack",
    oof: "0.7530",
    note: "Textbook stacking on out-of-fold probabilities",
  },
  {
    name: "encoder",
    detail: "klue/roberta-large v3",
    oof: "0.7498",
    note: "5 epochs, max_len 512, 6 history turns — weakest solo, most disagreement",
  },
  {
    name: "symbolic",
    detail: "Rule / transition residual",
    oof: "—",
    note: "Applied to Execute and Dialog groups only",
  },
];

const progression = [
  { zip: "v14", change: "Base ensemble (tree + 0.28·metaH + 0.28·enc)", score: 0.7906495409, delta: "—" },
  { zip: "probe_e32", change: "encoder 0.28 → 0.32", score: 0.7909817481, delta: "+0.00033" },
  { zip: "probe_j35", change: "metaH 0.28 → 0.35", score: 0.79055, delta: "−0.00010" },
  { zip: "v14_sym_g1", change: "Symbolic residual (exec 0.16 / dlg 0.12)", score: 0.7910176016, delta: "+0.00004" },
  { zip: "add006", change: "encoder effective 0.34", score: 0.7917459252, delta: "+0.00073" },
  { zip: "eff044_FIX", change: "encoder 0.44 globally — overshoot", score: 0.7915025192, delta: "−0.00024" },
  { zip: "grp044", change: "Per-group encoder weights (0.44/0.30/0.34/0.38)", score: 0.7921705904, delta: "+0.00042" },
  { zip: "exp048", change: "Explore raised to 0.48", score: 0.7923049787, delta: "+0.00013", final: true },
];

const BAR_MIN = 0.7903;
const BAR_MAX = 0.7925;

const rejected = [
  { idea: "Test-time count matching (Sinkhorn)", measured: "−0.033", verdict: "Rare classes were already count-calibrated" },
  { idea: "EM prior re-estimation (Saerens)", measured: "−0.435", verdict: "Collapsed into a degenerate solution" },
  { idea: "Hard count matching", measured: "−0.024", verdict: "Same failure mode, smaller magnitude" },
  { idea: "Class multiplier refit", measured: "+0.0001, 2/5 folds negative", verdict: "The earlier '+0.001' was a self-graded artifact" },
  { idea: "Next-step label reconstruction", measured: "86.5% train coverage, 100% accurate", verdict: "Test exposes one step per session — coverage 0, plus rule risk" },
  { idea: "metaE (extra GBDT)", measured: "88.9% agreement with metaH", verdict: "Weight converged to zero" },
  { idea: "LightGBM as a third GBDT", measured: "Not run", verdict: "0.9+ correlated, and not preinstalled on the server" },
  { idea: "Per-class 14 weights", measured: "Failed 2-way generalization", verdict: "Overfit the validation split" },
  { idea: "FGM encoder retraining", measured: "Not run", verdict: "6h left < training + OOF judgement + build" },
];

const safeguards = [
  {
    title: "Class-order permutation",
    body:
      "The tree member stores classes alphabetically. Skipping the permutation to contest order produces silently wrong labels — no log, no error, only a lower score.",
  },
  {
    title: "numpy pickle compatibility",
    body:
      "The evaluation server runs numpy 1.26.4. Pickles built on newer versions break at PCG64 unpickling, so every artifact was generated in a pinned 1.26.4 environment.",
  },
  {
    title: "Serialization version matching",
    body:
      "If the encoder's inference-time serialization differs from training, accuracy quietly collapses. The format is pinned through mdeb_ser_version in blend_weights.json.",
  },
  {
    title: "Preflight diff",
    body:
      "One build changed nothing and still consumed a submission slot. After that, every build was diffed against its parent — zero changed rows blocks submission, and the changed rows must land in the intended class group.",
  },
  {
    title: "Tuning on the deployed matrix",
    body:
      "The first group-weight fit ran on a score matrix without the symbolic member and pointed Execute in the wrong direction. Weight scans only count on the exact matrix that ships.",
  },
  {
    title: "Rehearsal scores are relative only",
    body:
      "Local rehearsal inflates absolute numbers because of memorization, so it was used strictly for comparison. Once public was confirmed to be final, the leaderboard itself became the objective.",
  },
];

const SwAgentAction = () => {
  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <Link to="/project" className={styles.backLink}>
          ← All projects
        </Link>

        <header className={styles.header}>
          <p className={styles.category}>AI &amp; Machine Learning · Competition</p>
          <h1 className={styles.title}>AI Agent Next-Action Prediction</h1>
          <p className={styles.subtitle}>
            Predicting what a coding agent does next across 14 actions — a
            group-weighted residual ensemble that finished 31st of 269 at the SW
            중심대학 디지털 경진대회.
          </p>

          <dl className={styles.meta}>
            <div>
              <dt>Role</dt>
              <dd>Ensemble design &amp; submission strategy</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>2026.07</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>4 members</dd>
            </div>
          </dl>

          <div className={styles.tags}>
            {["klue/roberta-large", "ExtraTrees", "HistGradientBoosting", "Stacking", "Macro-F1", "Offline inference"].map(
              (tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              )
            )}
          </div>
        </header>

        <section className={styles.metricSection}>
          <div className={styles.metricGrid}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metricCard}>
                <p className={styles.metricValue}>{m.value}</p>
                <p className={styles.metricLabel}>{m.label}</p>
                <p className={styles.metricNote}>{m.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>The problem</h2>
          <p>
            Given one moment inside an AI coding agent's session — the current
            prompt, up to 12 turns of history, and session metadata — predict
            which of 14 actions the agent takes next, scored by Macro-F1 over
            70,000 training rows and 30,000 private test rows.
          </p>
          <p>
            It was a code-submission competition: a zip containing{" "}
            <code>model/</code>, <code>script.py</code>, and{" "}
            <code>requirements.txt</code> had to produce{" "}
            <code>output/submission.csv</code> on a fully offline T4 with 3 vCPU
            and 12GB RAM, inside 10 minutes. The public leaderboard at the
            deadline became the final score, which made the leaderboard the real
            objective function rather than a proxy for it.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Final architecture</h2>
          <p>
            Four members are fused in row-wise standardized log-probability
            space. <code>zlog(P)</code> means log the probabilities, then
            z-score each row, so that a member with aggressive calibration
            cannot dominate the sum — only its relative class preference counts.
          </p>
          <pre className={styles.code}>
{`score[c] =        zlog(P_tree)[c]
          + 0.28 * zlog(P_metaH)[c]
          + w_enc[group(c)] * zlog(P_encoder)[c]
          + w_sym[group(c)] * zlog(P_symbolic)[c]

pred = argmax_c score[c]`}
          </pre>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Model</th>
                  <th className={styles.num}>Solo OOF</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.name}>
                    <td>
                      <code>{m.name}</code>
                    </td>
                    <td>
                      {m.detail}
                      <span className={styles.cellNote}>{m.note}</span>
                    </td>
                    <td className={styles.num}>{m.oof}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.caption}>
            Three-member combo OOF with a uniform 0.28 encoder weight: 0.7811.
          </p>
        </section>

        <section className={styles.section}>
          <h2>The core idea — a weak member deserves an uneven vote</h2>
          <p>
            The encoder was the weakest member on its own (0.7498), but it
            disagreed with the tree + metaH champion on 7.45% of rows. That
            makes it a residual expert: worthless as a champion, valuable
            exactly on boundary samples. So instead of one global weight, the 14
            actions were bucketed into four functional groups and the encoder
            was trusted differently in each.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Classes</th>
                  <th className={styles.num}>Encoder</th>
                  <th className={styles.num}>Sparse add</th>
                  <th className={styles.num}>Symbolic</th>
                </tr>
              </thead>
              <tbody>
                {actionGroups.map((g) => (
                  <tr key={g.group}>
                    <td>
                      <strong>{g.group}</strong>
                    </td>
                    <td className={styles.classCell}>
                      {g.classes.map((c) => (
                        <code key={c}>{c}</code>
                      ))}
                    </td>
                    <td className={styles.num}>{g.encoder}</td>
                    <td className={styles.num}>{g.sparseAdd}</td>
                    <td className={styles.num}>{g.symbolic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Execute carries symbolic weight and almost no encoder addition
            because the symbolic member already corrects that group — adding
            both would double-count the same signal. Nested validation agreed:
            all 5 folds independently chose an extra Execute offset of 0.00.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Score progression</h2>
          <p>
            Every number below is a measured public leaderboard score, not a
            local estimate.
          </p>
          <ul className={styles.progression}>
            {progression.map((p) => (
              <li
                key={p.zip}
                className={`${styles.progressionRow} ${p.final ? styles.progressionFinal : ""}`}
              >
                <div className={styles.progressionHead}>
                  <code className={styles.progressionZip}>{p.zip}</code>
                  <span className={styles.progressionScore}>
                    {p.score.toFixed(10)}
                  </span>
                  <span
                    className={
                      p.delta.startsWith("−")
                        ? styles.deltaDown
                        : styles.deltaUp
                    }
                  >
                    {p.delta}
                  </span>
                </div>
                <div className={styles.barTrack}>
                  <span
                    className={styles.barFill}
                    style={{
                      width: `${((p.score - BAR_MIN) / (BAR_MAX - BAR_MIN)) * 100}%`,
                    }}
                  />
                </div>
                <p className={styles.progressionChange}>{p.change}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>My contribution</h2>

          <h3 className={styles.subhead}>
            Firing the Explore 0.48 probe — the final score itself
          </h3>
          <p>
            The pre-submission read was <em>do not fire</em>. The OOF grid was
            open up to +0.14, yet all five folds picked +0.10 — an interior
            optimum, which normally means stop. Expected gain sat at +0.0001 to
            +0.0003 against a comparable downside, so the probe looked
            undecidable.
          </p>
          <div className={styles.callout}>
            <p>
              I overrode that read, because along this one axis I had counter
              evidence: OOF had already underestimated the leaderboard three
              times (0.28 → 0.34 gave +0.00073, grouping gave +0.00042), and the
              mechanism was structural — fold encoders are weaker than the final
              encoder, so grouped validation systematically undersells encoder
              weight.
            </p>
            <p className={styles.calloutResult}>
              Result: <strong>0.7921705904 → 0.7923049787</strong>, the fourth
              case of OOF underestimating the leaderboard, and the score the
              competition ended on.
            </p>
          </div>
          <p>
            The judgement I want credit for is narrow and deliberate: establish
            by observation that a local metric is structurally biased on one
            axis, then prefer the measured leaderboard over the validation gate{" "}
            <em>on that axis only</em>. I did not extend the exception anywhere
            else.
          </p>

          <h3 className={styles.subhead}>Killing low-expected-value directions first</h3>
          <p>
            I pushed back on adding LightGBM as a third GBDT — same feature
            family, 0.9+ correlation, extra requirements risk on an offline
            server — and it was dropped. I also let go of FGM encoder retraining
            once the arithmetic was clear: 6 hours left could not hold training,
            OOF judgement, and a build. A candidate that cannot be judged in
            time is not a candidate. With limited slots, closing open axes beat
            opening new bets.
          </p>

          <h3 className={styles.subhead}>Operational discipline</h3>
          <ul>
            <li>
              The selected zip was never once left below the leaderboard
              argmax across three days, with a hard freeze before the deadline.
            </li>
            <li>
              More than five directions were killed by measurement without
              spending a submission slot.
            </li>
            <li>
              The one real incident — a no-op build — was closed off with a
              process change rather than more care, and never recurred.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Rejected before spending a slot</h2>
          <p>
            Submission slots were the scarcest resource, so every candidate had
            to clear nested validation first: fit on 4 folds, judge on 1
            held-out fold, split by session so that adjacent steps sharing
            history cannot leak. The gate was a mean held-out delta of at least
            +0.0008, a minimum fold delta above −0.0005, and a stable sign.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Measured</th>
                  <th>Why it died</th>
                </tr>
              </thead>
              <tbody>
                {rejected.map((r) => (
                  <tr key={r.idea}>
                    <td>{r.idea}</td>
                    <td className={styles.num}>{r.measured}</td>
                    <td>{r.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Where the ceiling actually was</h2>
          <p>
            Per-class OOF F1 showed the edit, write, apply, and respond classes
            already saturated between 0.96 and 0.9997, with execute around 0.83
            to 0.84. Nearly all remaining loss sat in the four explore classes
            (0.52–0.67) and the middle three dialog classes (0.69–0.72).
          </p>
          <p>
            Those explore labels are generated probabilistically: identical
            context yields a consistent label only 66% of the time. That puts an
            optimistic ceiling near 0.80, which the 0.79863 first-place score
            supports. So the gap between 0.792 and the ceiling is mostly
            irreducible label noise — knowing that changed the strategy from
            chasing architecture to defending the leaderboard argmax.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Bugs that only show up as a lower score</h2>
          <div className={styles.cardGrid}>
            {safeguards.map((s) => (
              <div key={s.title} className={styles.card}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>What I took away</h2>
          <ul>
            <li>
              A member that is weak but decorrelated is worth more as a residual
              expert on specific classes than as a bigger slice of the average.
            </li>
            <li>
              Validation is not uniformly trustworthy. Knowing which axis your
              metric is biased on, and by what mechanism, is itself a result.
            </li>
            <li>
              With a fixed number of submissions, the discipline of measuring
              before firing produced more points than any single model change.
            </li>
            <li>
              Silent failures — class order, pickle versions, serialization
              formats, no-op builds — need process guards, because they never
              raise an error.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default SwAgentAction;
