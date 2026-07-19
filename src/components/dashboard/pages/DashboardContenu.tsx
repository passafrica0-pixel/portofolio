"use client";

import { useDashboardRuntime } from "../useDashboardRuntime";

export default function DashboardContenu() {
  useDashboardRuntime();
  return (
    <>
      <div className="backdrop" id="backdrop" aria-hidden="true"></div>
          <div className="app">
            <aside className="sidebar" id="sidebar">
              <a className="brand" href="/live/dashboard">
                <span className="brand__mark">R</span>
                <span>
                  <span className="brand__name">Relais<span>.</span></span>
                  <span className="brand__tag">Voice · Content ops</span>
                </span>
              </a>
              <nav className="side-nav" aria-label="Principal">
                <a href="/live/dashboard">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>
                  Dashboard
                </a>
                <a href="/live/dashboard/appels">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10a7 7 0 0 1-14 0M12 17v4M8 21h8"/></svg>
                  File &amp; appels
                  <span className="count">9</span>
                </a>
                <a className="is-active" href="/live/dashboard/contenu" aria-current="page">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></svg>
                  Contenu live
                </a>
              </nav>
              <div className="sidebar__foot">
                <div className="workspace">
                  <div className="workspace__avatar">LN</div>
                  <div><strong>Léa N.</strong><span>Ops Call Center</span></div>
                </div>
              </div>
            </aside>
      
            <div className="main">
              <header className="topbar">
                <div className="topbar__left">
                  <button className="menu-btn" id="menu-btn" type="button" aria-label="Menu">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                  </button>
                  <div className="page-label">Contenu live<small>Scripts · FAQ · prompts · conformité</small></div>
                </div>
                <div className="topbar__right">
                  <span className="badge badge--content">3 à valider</span>
                  <span className="clock" id="clock">--:--:--</span>
                </div>
              </header>
      
              <main className="content">
                <div className="page-toolbar">
                  <div>
                    <h1>Studio contenu — ce que l’IA dit à voix haute</h1>
                    <p>Pipeline éditorial lié aux agents vocaux · validation avant injection</p>
                  </div>
                  <div className="btn-row">
                    <button className="btn btn--ghost" type="button" data-action="import-faq">Importer FAQ</button>
                    <button className="btn btn--ghost" type="button" data-action="generate-script">Générer un script</button>
                    <button className="btn btn--primary" type="button" data-action="publish-selection">Publier la sélection</button>
                  </div>
                </div>
      
                <section className="metric-tiles" aria-label="Métriques contenu">
                  <article className="metric-tile">
                    <span>Citations aujourd’hui</span>
                    <strong>214</strong>
                  </article>
                  <article className="metric-tile">
                    <span>Drafts en revue</span>
                    <strong>3</strong>
                  </article>
                  <article className="metric-tile">
                    <span>Taux conformité prompts</span>
                    <strong>96%</strong>
                  </article>
                </section>
      
                {/* Kanban pipeline */}
                <section className="kanban" aria-label="Pipeline contenu" id="kanban">
                  <div className="kanban-col">
                    <div className="kanban-col__head">Draft <span className="badge badge--content" data-count="">2</span></div>
                    <div className="kanban-col__body" data-column="draft">
                      <article className="k-card is-on" draggable="true" data-doc="faq-retours">
                        <h3>FAQ · Retours 30 jours</h3>
                        <p>Paragraphe international généré par Helix — à relire.</p>
                        <div className="k-card__foot">
                          <span className="badge badge--warn">Revue</span>
                          <span className="badge">Score 82</span>
                        </div>
                      </article>
                      <article className="k-card" draggable="true" data-doc="macro-excuse">
                        <h3>Macro · Excuse courte</h3>
                        <p>Variante A/B pour sav émotionnel.</p>
                        <div className="k-card__foot"><span className="badge badge--content">Draft</span></div>
                      </article>
                    </div>
                  </div>
                  <div className="kanban-col">
                    <div className="kanban-col__head">En revue <span className="badge badge--warn" data-count="">1</span></div>
                    <div className="kanban-col__body" data-column="review">
                      <article className="k-card" draggable="true" data-doc="script-cb">
                        <h3>Script · Litige CB v2</h3>
                        <p>QA : empathie trop basse sur Helix.</p>
                        <div className="k-card__foot"><span className="badge badge--warn">Léa</span></div>
                      </article>
                    </div>
                  </div>
                  <div className="kanban-col">
                    <div className="kanban-col__head">Publié <span className="badge badge--ok" data-count="">4</span></div>
                    <div className="kanban-col__body" data-column="published">
                      <article className="k-card" draggable="true" data-doc="delay-v3">
                        <h3>Script · Delay v3</h3>
                        <p>71 citations · Nova Shipping.</p>
                        <div className="k-card__foot"><span className="badge badge--ok">Live</span></div>
                      </article>
                      <article className="k-card" draggable="true" data-doc="geste">
                        <h3>Macro · Geste ≤ 15€</h3>
                        <p>Conformité 94 · tous agents.</p>
                        <div className="k-card__foot"><span className="badge badge--ok">Live</span></div>
                      </article>
                      <article className="k-card" draggable="true" data-doc="colissimo">
                        <h3>FAQ · Suivi Colissimo</h3>
                        <p>44 citations · tracking.</p>
                        <div className="k-card__foot"><span className="badge badge--ok">Live</span></div>
                      </article>
                    </div>
                  </div>
                  <div className="kanban-col">
                    <div className="kanban-col__head">Déprécié <span className="badge badge--warn" data-count="">1</span></div>
                    <div className="kanban-col__body" data-column="deprecated">
                      <article className="k-card" draggable="true" data-doc="promo-ete">
                        <h3>Script · Promo été</h3>
                        <p>Encore lu 14× — à retirer des prompts.</p>
                        <div className="k-card__foot"><span className="badge badge--warn">Urgent</span></div>
                      </article>
                    </div>
                  </div>
                </section>
      
                {/* Editor */}
                <section className="editor" aria-label="Éditeur">
                  <div className="editor-pane">
                    <div className="editor-pane__bar">
                      <h2 id="editor-title">FAQ · Retours 30 jours</h2>
                      <span className="badge badge--warn">Draft</span>
                      <button className="btn btn--ghost" type="button" data-action="compare-v1">Comparer v1</button>
                      <button className="btn btn--primary" type="button" data-action="approve-doc">Approuver</button>
                    </div>
                    <div className="editor-body" id="editor-body">
                      <p className="line"><strong>Ouverture (voix)</strong> — « Bien sûr, notre politique de retours couvre 30 jours après réception. »</p>
                      <p className="line line--ai">
                        <strong>Nouveau · international</strong> — « Pour les commandes hors UE, les frais de retour restent à la charge du client, sauf défaut produit constaté. Le délai part à la date de livraison confirmée par le transporteur. »
                      </p>
                      <p className="line">« Je peux vous envoyer l’étiquette par SMS — vous préférez ça ? »</p>
                      <p className="line line--warn">
                        <strong>Alerte conformité</strong> — Ne jamais promettre un remboursement sous 24h : Délai réel 5–7 jours ouvrés.
                      </p>
                    </div>
                  </div>
                  <div className="editor-pane">
                    <div className="editor-pane__bar">
                      <h2>Contrôles &amp; injection</h2>
                    </div>
                    <div className="panel__body" style={{padding: "1rem"}}>
                      <ul className="hint-list">
                        <li>
                          <strong>Agents ciblés</strong>
                          Atlas Retours · Nova (fallback) · pas Helix
                        </li>
                        <li>
                          <strong>Score clarté</strong>
                          82 / 100 — phrases &lt; 20 mots recommandées sur le § international
                        </li>
                        <li>
                          <strong>Risque hallucination</strong>
                          Faible — ancré sur KB #retours-2026
                        </li>
                        <li>
                          <strong>Test voix</strong>
                          Écouter le TTS (fr-FR · voix Léa) avant publish
                        </li>
                      </ul>
                      <div className="btn-row" style={{marginTop: "1rem"}}>
                        <button className="btn btn--ghost" type="button" data-action="tts-editor">Écouter TTS</button>
                        <button className="btn btn--danger" type="button" data-action="reject-doc">Rejeter</button>
                        <button className="btn btn--primary" type="button" data-action="publish-doc">Publier → agents</button>
                      </div>
                    </div>
                  </div>
                </section>
      
                <section className="grid-2">
                  <div className="panel">
                    <div className="panel__head">
                      <div>
                        <h2>A/B scripts — ouverture SAV</h2>
                        <span className="sub">7 derniers jours · 1 240 appels</span>
                      </div>
                    </div>
                    <div className="panel__body">
                      <div className="ab-row">
                        <article className="ab-card is-winner">
                          <h3>Variante A — Empathie d’abord</h3>
                          <p className="big">4.7</p>
                          <p style={{margin: 0, fontSize: "0.8rem", color: "var(--ink-muted)"}}>CSAT · 58% de trafic · gagnante</p>
                        </article>
                        <article className="ab-card">
                          <h3>Variante B — Solution d’abord</h3>
                          <p className="big">4.3</p>
                          <p style={{margin: 0, fontSize: "0.8rem", color: "var(--ink-muted)"}}>CSAT · 42% de trafic</p>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel__head">
                      <div>
                        <h2>Citations par contenu</h2>
                        <span className="sub">Aujourd’hui</span>
                      </div>
                    </div>
                    <div className="panel__body">
                      <div className="cite-bars">
                        <div className="cite-row"><span>Delay v3</span><span className="track"><i style={{width: "92%"}}></i></span><strong>71</strong></div>
                        <div className="cite-row"><span>Geste ≤ 15€</span><span className="track"><i style={{width: "68%"}}></i></span><strong>44</strong></div>
                        <div className="cite-row"><span>FAQ Colissimo</span><span className="track"><i style={{width: "55%"}}></i></span><strong>31</strong></div>
                        <div className="cite-row"><span>Promo été ⚠</span><span className="track"><i style={{width: "28%"}}></i></span><strong>14</strong></div>
                        <div className="cite-row"><span>Litige CB v1</span><span className="track"><i style={{width: "22%"}}></i></span><strong>11</strong></div>
                      </div>
                    </div>
                  </div>
                </section>
      
                <section className="grid-3">
                  <div className="panel">
                    <div className="panel__head"><div><h2>Mots interdits</h2><span className="sub">Filtre conformité</span></div></div>
                    <div className="panel__body">
                      <div className="forbid">
                        <span>remboursement immédiat</span>
                        <span>garanti demain</span>
                        <span>c’est la faute de…</span>
                        <span>promo été</span>
                        <span>officiellement cassé</span>
                        <span>je vous jure</span>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel__head"><div><h2>Versions prompt</h2><span className="sub">Nova Shipping</span></div></div>
                    <div className="panel__body">
                      <table className="data">
                        <thead><tr><th>Ver.</th><th>Date</th><th>Statut</th></tr></thead>
                        <tbody>
                          <tr><td>v3.4</td><td>17 juil.</td><td><span className="badge badge--ok">Live</span></td></tr>
                          <tr><td>v3.3</td><td>12 juil.</td><td><span className="badge">Archivé</span></td></tr>
                          <tr><td>v3.2</td><td>3 juil.</td><td><span className="badge">Archivé</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel__head"><div><h2>File de validation</h2><span className="sub">Assigné à Léa</span></div></div>
                    <div className="panel__body">
                      <div className="qa-list">
                        <div className="qa-item"><strong>FAQ retours international</strong><p>Approuver ou renvoyer à Copy Desk</p></div>
                        <div className="qa-item"><strong>Script litige CB v2</strong><p>Corriger l’ouverture empathique</p></div>
                        <div className="qa-item"><strong>Retrait Promo été</strong><p>Purger des prompts Nova + Atlas</p></div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
    </>
  );
}
