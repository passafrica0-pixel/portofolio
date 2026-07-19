"use client";

import { useDashboardRuntime } from "../useDashboardRuntime";

export default function DashboardAppels() {
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
                <a className="is-active" href="/live/dashboard/appels" aria-current="page">
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
                  <div className="page-label">File &amp; appels<small>Wallboard · monitoring · historique</small></div>
                </div>
                <div className="topbar__right">
                  <span className="live-chip">9 en file</span>
                  <span className="clock" id="clock">--:--:--</span>
                </div>
              </header>
      
              <main className="content">
                <div className="page-toolbar">
                  <div>
                    <h1>Centre d’appels — temps réel</h1>
                    <p>Skills : Livraison · SAV · Paiements · VIP · IVR FR/EN</p>
                  </div>
                  <div className="btn-row">
                    <button className="btn btn--ghost" type="button" data-action="pause-ivr">Pause IVR promo</button>
                    <button className="btn btn--danger" type="button" data-action="force-escalate">Forcer escalade</button>
                    <button className="btn btn--primary" type="button" data-action="takeover">Prendre la main</button>
                  </div>
                </div>
      
                {/* Kanban queues */}
                <section className="queues" aria-label="Files d'attente">
                  <div className="queue-col">
                    <div className="queue-col__head queue-col__head--wait">En attente <span className="n">4</span></div>
                    <div className="queue-col__body" data-queue="wait">
                      <button className="call-chip" type="button" data-call="c1">
                        <strong>Sophie L. · VIP</strong>
                        <div className="meta"><span>Skill SAV</span><span className="timer is-hot">11:40</span><span>FR</span></div>
                      </button>
                      <button className="call-chip" type="button" data-call="c2">
                        <strong>Inconnu · +33 6…</strong>
                        <div className="meta"><span>IVR → Livraison</span><span className="timer">04:12</span></div>
                      </button>
                      <button className="call-chip" type="button" data-call="c3">
                        <strong>ACME Corp · B2B</strong>
                        <div className="meta"><span>Paiements</span><span className="timer">02:55</span><span>EN</span></div>
                      </button>
                      <button className="call-chip" type="button" data-call="c4">
                        <strong>Nadia K.</strong>
                        <div className="meta"><span>SAV retours</span><span className="timer">01:08</span></div>
                      </button>
                    </div>
                  </div>
                  <div className="queue-col">
                    <div className="queue-col__head queue-col__head--ai">IA en ligne <span className="n">3</span></div>
                    <div className="queue-col__body">
                      <button className="call-chip is-on" type="button" data-call="live">
                        <strong>Marc Renaud</strong>
                        <div className="meta"><span>Nova</span><span>03:42</span><span>delay v3</span></div>
                      </button>
                      <button className="call-chip" type="button">
                        <strong>Julie P.</strong>
                        <div className="meta"><span>Atlas</span><span>01:55</span><span>retours</span></div>
                      </button>
                      <button className="call-chip" type="button">
                        <strong>Store Lyon</strong>
                        <div className="meta"><span>Helix</span><span>05:10</span><span>facture</span></div>
                      </button>
                    </div>
                  </div>
                  <div className="queue-col">
                    <div className="queue-col__head queue-col__head--esc">Escalade <span className="n">2</span></div>
                    <div className="queue-col__body">
                      <button className="call-chip" type="button">
                        <strong>#4821 Remboursement</strong>
                        <div className="meta"><span>Confiance 39%</span><span className="timer is-hot">16:02</span></div>
                      </button>
                      <button className="call-chip" type="button">
                        <strong>#4833 Litige CB</strong>
                        <div className="meta"><span>Helix → Léa</span><span className="timer is-hot">09:18</span></div>
                      </button>
                    </div>
                  </div>
                  <div className="queue-col">
                    <div className="queue-col__head queue-col__head--wrap">Wrap-up <span className="n">2</span></div>
                    <div className="queue-col__body">
                      <button className="call-chip" type="button">
                        <strong>Paul M. · clos</strong>
                        <div className="meta"><span>Résumé IA</span><span>CSAT ★★★★☆</span></div>
                      </button>
                      <button className="call-chip" type="button">
                        <strong>Clara D. · clos</strong>
                        <div className="meta"><span>Tag: shipping</span><span>2:48</span></div>
                      </button>
                    </div>
                  </div>
                </section>
      
                {/* Live monitor */}
                <section className="monitor" aria-label="Monitoring appel">
                  <div className="monitor-main">
                    <div className="call-live__head" style={{marginBottom: "0.85rem"}}>
                      <div>
                        <h2 style={{margin: 0, fontSize: "1.05rem"}}>Monitoring — Marc Renaud</h2>
                        <p style={{margin: "0.25rem 0 0", color: "var(--ink-faint)", fontSize: "0.82rem"}}>
                          Agent Nova Shipping · Skill Livraison · Canal voix FR
                        </p>
                      </div>
                      <div className="btn-row">
                        <button className="btn btn--ghost" type="button" data-action="whisper">Chuchoter</button>
                        <button className="btn btn--ghost" type="button" data-action="barge">Barge-in</button>
                        <button className="btn btn--primary" type="button" data-action="takeover">Prendre la main</button>
                      </div>
                    </div>
      
                    <div className="caller">
                      <div className="caller__av">MR</div>
                      <div>
                        <strong>Marc Renaud · +33 6 12 ··· ·· 84</strong>
                        <span>Commande #FR-88421 · Client depuis 2023 · Score risque faible</span>
                      </div>
                      <span className="badge badge--live" id="call-timer" style={{marginLeft: "auto"}}>● 03:42</span>
                    </div>
      
                    <div className="voice-bar" id="voice-bar">
                      <strong id="voice-status">Voix en pause</strong>
                      <span className="muted" id="voice-line">Cliquez « Écouter l’appel » pour entendre Nova + le client (synthèse vocale).</span>
                      <button className="btn btn--primary" type="button" data-action="play-call" id="btn-play-call">Écouter l’appel</button>
                      <button className="btn btn--ghost" type="button" data-action="stop-voice" hidden id="btn-stop-call">Stop</button>
                    </div>
      
                    <div className="wave is-muted" id="call-wave" aria-hidden="true" style={{margin: "0.85rem 0"}}>
                      <span></span><span></span><span></span><span></span><span></span><span></span>
                      <span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
      
                    <p style={{margin: "0 0 0.35rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink-faint)"}}>SENTIMENT (timeline)</p>
                    <div className="sent-timeline" aria-hidden="true">
                      <i className="p" style={{height: "40%"}}></i><i className="p" style={{height: "55%"}}></i><i className="n" style={{height: "35%"}}></i>
                      <i className="n" style={{height: "45%"}}></i><i className="g" style={{height: "70%"}}></i><i className="g" style={{height: "85%"}}></i>
                      <i className="n" style={{height: "50%"}}></i><i className="p" style={{height: "40%"}}></i><i className="p" style={{height: "60%"}}></i>
                      <i className="n" style={{height: "45%"}}></i><i className="g" style={{height: "65%"}}></i><i className="n" style={{height: "40%"}}></i>
                    </div>
      
                    <div className="transcript-feed" id="transcript">
                      <div className="bubble bubble--bot"><small>Nova · 00:12</small>Bonjour Marc, je suis Nova pour le suivi de votre colis. Vous appelez pour le #FR-88421, c’est bien ça ?</div>
                      <div className="bubble bubble--user"><small>Marc · 00:28</small>Oui — il est bloqué à Lyon depuis mardi, c’est n’importe quoi.</div>
                      <div className="bubble bubble--bot"><small>Nova · 00:41</small>Je regarde le tracking… Statut Chronopost : « en transit — hub Lyon ». D’après notre procédure, je lance une relance aujourd’hui.</div>
                      <div className="bubble bubble--user"><small>Marc · 01:10</small>Et si ça n’arrive pas demain ? Je veux un geste.</div>
                      <div className="bubble bubble--bot"><small>Nova · 01:22 · script delay v3</small>Si le colis n’est pas mis à jour sous 24h, je peux proposer un avoir de 10% — plafond geste commercial 15€. Je reste avec vous.</div>
                    </div>
      
                    <div className="call-meta">
                      <span><strong>Intention</strong> shipping_delay</span>
                      <span><strong>Confiance</strong> 81%</span>
                      <span><strong>Script</strong> delay v3</span>
                      <span><strong>Macro</strong> geste commercial</span>
                      <span className="badge badge--content">2 contenus liés</span>
                    </div>
                  </div>
      
                  <div className="monitor-side">
                    <div className="panel">
                      <div className="panel__head"><div><h2>Contexte client</h2></div></div>
                      <div className="panel__body" style={{fontSize: "0.84rem", color: "var(--ink-muted)"}}>
                        <p style={{margin: "0 0 0.5rem"}}><strong style={{color: "var(--ink)"}}>LTV</strong> 428€ · 6 commandes</p>
                        <p style={{margin: "0 0 0.5rem"}}><strong style={{color: "var(--ink)"}}>Dernier ticket</strong> Retour taille — clos 12j</p>
                        <p style={{margin: "0 0 0.5rem"}}><strong style={{color: "var(--ink)"}}>Transporteur</strong> Chronopost</p>
                        <p style={{margin: 0}}><strong style={{color: "var(--ink)"}}>Note CRM</strong> Préfère SMS aux emails</p>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel__head"><div><h2>Coach IA</h2><span className="sub">Suggestions live</span></div></div>
                      <div className="panel__body">
                        <ul className="hint-list">
                          <li><strong>Empathie</strong>Reformuler le blocage Lyon avant le geste commercial.</li>
                          <li><strong>Contenu</strong>Ne pas citer « Promo été » — déprécié.</li>
                          <li><strong>Escalade</strong>Si demande &gt; 15€ → basculer humain.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel__head"><div><h2>SLA heure</h2><span className="sub">ASA par tranche</span></div></div>
                      <div className="panel__body">
                        <div className="sla-grid" aria-label="Heatmap SLA" id="sla-grid"></div>
                        <div className="spark-labels" style={{marginTop: "0.5rem"}}><span>08h</span><span>vert = ok · jaune = limite · rouge = rupture</span><span>19h</span></div>
                      </div>
                    </div>
                  </div>
                </section>
      
                {/* Agents + history */}
                <section className="grid-2">
                  <div className="panel">
                    <div className="panel__head"><div><h2>Wallboard agents</h2><span className="sub">Charge &amp; états</span></div></div>
                    <div className="panel__body">
                      <div className="agents">
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#0f766e"}}>N</span>
                            <div><strong>Nova Shipping</strong><span className="role">3 skills</span></div>
                            <span className="status-dot status-dot--busy">En appel</span>
                          </div>
                          <div className="agent-card__stats">
                            <div><span>Appels</span><strong>47</strong></div>
                            <div><span>AHT</span><strong>2:08</strong></div>
                            <div><span>ASA</span><strong>14s</strong></div>
                            <div><span>Esc.</span><strong>3</strong></div>
                          </div>
                        </article>
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#0e7490"}}>A</span>
                            <div><strong>Atlas Retours</strong><span className="role">SAV</span></div>
                            <span className="status-dot status-dot--ready">Prêt</span>
                          </div>
                          <div className="agent-card__stats">
                            <div><span>Appels</span><strong>39</strong></div>
                            <div><span>AHT</span><strong>2:31</strong></div>
                            <div><span>ASA</span><strong>19s</strong></div>
                            <div><span>Esc.</span><strong>5</strong></div>
                          </div>
                        </article>
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#b45309"}}>H</span>
                            <div><strong>Helix Billing</strong><span className="role">Paiements</span></div>
                            <span className="status-dot status-dot--wrap">Wrap-up</span>
                          </div>
                          <div className="agent-card__stats">
                            <div><span>Appels</span><strong>22</strong></div>
                            <div><span>AHT</span><strong>3:05</strong></div>
                            <div><span>ASA</span><strong>27s</strong></div>
                            <div><span>Esc.</span><strong>8</strong></div>
                          </div>
                        </article>
                        <article className="agent-card">
                          <div className="agent-card__top">
                            <span className="agent-card__av" style={{background: "#334155"}}>L</span>
                            <div><strong>Léa N. (toi)</strong><span className="role">Humain · coach</span></div>
                            <span className="status-dot status-dot--ready">Dispo</span>
                          </div>
                          <div className="agent-card__stats">
                            <div><span>Prises</span><strong>6</strong></div>
                            <div><span>AHT</span><strong>4:12</strong></div>
                            <div><span>Coach</span><strong>11</strong></div>
                            <div><span>CSAT</span><strong>4.8</strong></div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
      
                  <div className="panel">
                    <div className="panel__head"><div><h2>Historique récent</h2><span className="sub">Dispositions</span></div></div>
                    <div className="panel__body table-wrap" style={{overflowX: "auto"}}>
                      <table className="data">
                        <thead>
                          <tr>
                            <th>Heure</th>
                            <th>Client</th>
                            <th>Agent</th>
                            <th>Durée</th>
                            <th>Disposition</th>
                            <th>CSAT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>16:58</td>
                            <td>Paul M.</td>
                            <td>Atlas</td>
                            <td>2:48</td>
                            <td><span className="badge badge--ok">Résolu</span></td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>16:41</td>
                            <td>Clara D.</td>
                            <td>Nova</td>
                            <td>1:55</td>
                            <td><span className="badge badge--ok">Résolu</span></td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>16:22</td>
                            <td>ACME #2</td>
                            <td>Helix → Léa</td>
                            <td>6:10</td>
                            <td><span className="badge badge--warn">Escalade</span></td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>15:58</td>
                            <td>Inconnu</td>
                            <td>IVR</td>
                            <td>0:22</td>
                            <td><span className="badge badge--voice">Abandon</span></td>
                            <td>—</td>
                          </tr>
                          <tr>
                            <td>15:40</td>
                            <td>Nadia K.</td>
                            <td>Atlas</td>
                            <td>3:33</td>
                            <td><span className="badge badge--ok">Résolu</span></td>
                            <td>5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
    </>
  );
}
