"use client";

import { useDashboardRuntime } from "../useDashboardRuntime";

export default function DashboardHome() {
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
                <a className="is-active" href="/live/dashboard" aria-current="page">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>
                  Dashboard
                </a>
                <a href="/live/dashboard/appels">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10a7 7 0 0 1-14 0M12 17v4M8 21h8"/></svg>
                  File &amp; appels
                  <span className="count">9</span>
                </a>
                <a href="/live/dashboard/contenu">
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
                  <div className="page-label">Dashboard<small>Vue de pilotage · synthèse ops</small></div>
                </div>
                <div className="topbar__right">
                  <span className="live-chip">Live</span>
                  <span className="clock" id="clock">--:--:--</span>
                </div>
              </header>
      
              <main className="content">
                <div className="page-toolbar">
                  <div>
                    <h1>Pilot de service — 18 juil.</h1>
                    <p>Centre Marseille Nord · 3 agents vocaux · 1 desk contenu · sync 8 s</p>
                  </div>
                  <div className="btn-row">
                    <a className="btn btn--ghost" href="/live/dashboard/appels">Ouvrir la file</a>
                    <a className="btn btn--primary" href="/live/dashboard/contenu">Valider 3 contenus</a>
                  </div>
                </div>
      
                <section className="alert-strip" aria-label="Alertes prioritaires">
                  <article className="alert-card alert-card--danger">
                    <strong>3 escalades &gt; 12 min</strong>
                    <p>SLA voix en danger sur la file VIP — intervention humaine requise.</p>
                  </article>
                  <article className="alert-card alert-card--warn">
                    <strong>Script « Promo été » encore cité</strong>
                    <p>14 lectures orales aujourd’hui alors que l’offre est close.</p>
                  </article>
                  <article className="alert-card alert-card--ok">
                    <strong>Décroché IA 94%</strong>
                    <p>ASA 18 s — sous le seuil de 25 s sur les 2 dernières heures.</p>
                  </article>
                </section>
      
                <section className="kpi-row" aria-label="KPIs">
                  <article className="kpi">
                    <div className="kpi__label">Appels / heure</div>
                    <div className="kpi__value">38</div>
                    <div className="kpi__meta"><span className="up">+6</span> vs moyenne 7j</div>
                    <div className="ring ring--ok" aria-hidden="true"><svg viewBox="0 0 36 36"><circle className="track" cx="18" cy="18" r="15"/><circle className="val" cx="18" cy="18" r="15" strokeDasharray="78 100"/></svg></div>
                  </article>
                  <article className="kpi">
                    <div className="kpi__label">AHT moyen</div>
                    <div className="kpi__value">2:14</div>
                    <div className="kpi__meta">Objectif &lt; 2:30</div>
                    <div className="ring" aria-hidden="true"><svg viewBox="0 0 36 36"><circle className="track" cx="18" cy="18" r="15"/><circle className="val" cx="18" cy="18" r="15" strokeDasharray="70 100"/></svg></div>
                  </article>
                  <article className="kpi">
                    <div className="kpi__label">Contenus cités / appel</div>
                    <div className="kpi__value">71%</div>
                    <div className="kpi__meta">Scripts + FAQ injectés</div>
                    <div className="ring" aria-hidden="true"><svg viewBox="0 0 36 36"><circle className="track" cx="18" cy="18" r="15"/><circle className="val" cx="18" cy="18" r="15" strokeDasharray="71 100"/></svg></div>
                  </article>
                  <article className="kpi">
                    <div className="kpi__label">CSAT voix</div>
                    <div className="kpi__value">4.5</div>
                    <div className="kpi__meta"><span className="up">+0.2</span> cette semaine</div>
                    <div className="ring ring--ok" aria-hidden="true"><svg viewBox="0 0 36 36"><circle className="track" cx="18" cy="18" r="15"/><circle className="val" cx="18" cy="18" r="15" strokeDasharray="90 100"/></svg></div>
                  </article>
                </section>
      
                <section className="hero-strip">
                  <article className="hero-card">
                    <p className="hero-card__eyebrow">Synthèse ops</p>
                    <h1>La voix tient · le contenu freine encore 2 scripts.</h1>
                    <p>Priorité du shift : vider les escalades VIP, retirer « Promo été », publier la FAQ retours.</p>
                    <div className="hero-stats">
                      <div><strong>9</strong><span>en file</span></div>
                      <div><strong>3</strong><span>en appel IA</span></div>
                      <div><strong>2</strong><span>humains</span></div>
                      <div><strong>3</strong><span>drafts contenu</span></div>
                    </div>
                  </article>
      
                  <article className="call-live">
                    <div className="call-live__head">
                      <div>
                        <h2>Aperçu appel live</h2>
                        <p>Nova Shipping · détail dans File &amp; appels</p>
                      </div>
                      <span className="badge badge--live">● LIVE</span>
                    </div>
                    <div className="caller">
                      <div className="caller__av">MR</div>
                      <div>
                        <strong>Marc Renaud</strong>
                        <span>Colis #FR-88421 · 03:42</span>
                      </div>
                    </div>
                    <div className="voice-bar">
                      <strong>Aperçu audio</strong>
                      <span className="muted">Écoute courte de Nova</span>
                      <button className="btn btn--primary" type="button" data-action="play-preview" style={{padding: "0.4rem 0.7rem", fontSize: "0.8rem"}}>▶ Écouter</button>
                    </div>
                    <div className="wave is-muted" id="preview-wave" aria-hidden="true">
                      <span></span><span></span><span></span><span></span><span></span><span></span>
                      <span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <p className="transcript"><em>Nova :</em> Script delay v3 — relance Chronopost proposée.</p>
                    <a className="btn btn--primary" href="/live/dashboard/appels" style={{width: "100%", marginTop: "0.25rem"}}>Monitorer l’appel →</a>
                  </article>
                </section>
      
                <section className="grid-2">
                  <div className="panel">
                    <div className="panel__head">
                      <div>
                        <h2>Charge journée</h2>
                        <span className="sub">Appels traités (IA + humain)</span>
                      </div>
                    </div>
                    <div className="panel__body">
                      <div className="spark" aria-hidden="true">
                        <i style={{height: "35%"}}></i><i style={{height: "48%"}}></i><i style={{height: "42%"}}></i>
                        <i style={{height: "60%"}}></i><i style={{height: "55%"}}></i><i style={{height: "78%"}}></i>
                        <i style={{height: "70%"}}></i><i style={{height: "88%"}}></i><i style={{height: "65%"}}></i>
                        <i style={{height: "52%"}}></i><i style={{height: "58%"}}></i><i style={{height: "45%"}}></i>
                      </div>
                      <div className="spark-labels"><span>08h</span><span>Pic 14h–16h</span><span>19h</span></div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel__head">
                      <div>
                        <h2>Top contenus du jour</h2>
                        <span className="sub">Citations en conversation</span>
                      </div>
                      <a className="btn btn--ghost" href="/live/dashboard/contenu" style={{padding: "0.35rem 0.6rem", fontSize: "0.78rem"}}>Studio</a>
                    </div>
                    <div className="panel__body">
                      <div className="cite-bars">
                        <div className="cite-row">
                          <span>Script delay v3</span>
                          <span className="track"><i style={{width: "92%"}}></i></span>
                          <strong>71</strong>
                        </div>
                        <div className="cite-row">
                          <span>Macro geste commercial</span>
                          <span className="track"><i style={{width: "68%"}}></i></span>
                          <strong>44</strong>
                        </div>
                        <div className="cite-row">
                          <span>FAQ retours 30j</span>
                          <span className="track"><i style={{width: "55%"}}></i></span>
                          <strong>31</strong>
                        </div>
                        <div className="cite-row">
                          <span>Promo été ⚠</span>
                          <span className="track"><i style={{width: "28%"}}></i></span>
                          <strong>14</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
      
                <section className="grid-3">
                  <div className="panel">
                    <div className="panel__head"><div><h2>Agents</h2><span className="sub">État maintenant</span></div></div>
                    <div className="panel__body">
                      <div className="agents" style={{gridTemplateColumns: "1fr"}}>
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#0f766e"}}>N</span>
                            <div><strong>Nova</strong><span className="role">Livraison</span></div>
                            <span className="status-dot status-dot--busy">Appel</span>
                          </div>
                        </article>
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#0e7490"}}>A</span>
                            <div><strong>Atlas</strong><span className="role">SAV</span></div>
                            <span className="status-dot status-dot--ready">Prêt</span>
                          </div>
                        </article>
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#b45309"}}>H</span>
                            <div><strong>Helix</strong><span className="role">Paiements</span></div>
                            <span className="status-dot status-dot--wrap">Wrap</span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel__head"><div><h2>Sentiment 4h</h2><span className="sub">Après-appel</span></div></div>
                    <div className="panel__body">
                      <div className="sentiment">
                        <div className="sent-row"><span>Positif</span><div className="sent-track sent-track--pos"><i></i></div><strong>72%</strong></div>
                        <div className="sent-row"><span>Neutre</span><div className="sent-track sent-track--neu"><i></i></div><strong>18%</strong></div>
                        <div className="sent-row"><span>Négatif</span><div className="sent-track sent-track--neg"><i></i></div><strong>10%</strong></div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel__head"><div><h2>À faire (toi)</h2><span className="sub">Shift actuel</span></div></div>
                    <div className="panel__body">
                      <div className="qa-list">
                        <div className="qa-item"><strong>1. Reprendre escalade VIP #4821</strong><p>File appels · confiance 39%</p></div>
                        <div className="qa-item"><strong>2. Dépublier Promo été</strong><p>Studio contenu · 14 lectures</p></div>
                        <div className="qa-item"><strong>3. Valider FAQ retours</strong><p>Draft Copy Desk · score 82</p></div>
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
