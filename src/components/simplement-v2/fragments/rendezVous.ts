// Corps de page « rendez-vous.html » — maquette v2, liens/assets réécrits.
export const HTML = `<section class="phero">
        <div class="phero__aura" aria-hidden="true"></div>
        <span class="sh sh--sphere sh--pale" data-chrome="0.2" style="left:auto;right:6%;top:16%;width:clamp(6rem,10vw,10rem)"></span>
        <span class="sh sh--pill" data-chrome="-0.28" style="left:auto;right:20%;top:58%;width:clamp(3rem,4.5vw,4.5rem)"></span>
        <div class="shell">
          <p class="eyebrow eyebrow--light">30 min · Visio ou téléphone</p>
          <h1 class="phero__title" data-split>Réservez <span class="dim">un créneau.</span></h1>
          <p class="phero__lede">Un échange pour clarifier objectifs, audience et leviers. Vous repartez avec une proposition claire, un planning et un devis, souvent sous 24h.</p>
        </div>
      </section>
      <div class="act-light">
        <section class="sect" id="booking" aria-labelledby="booking-title">
          <div class="shell rdv-grid">
            <div>
              <h2 id="booking-title">Ce qui se passe ensuite</h2>
              <ol class="rdv-steps">
                <li><div><strong>Vous choisissez un créneau</strong><span>Visio ou téléphone, 30 minutes.</span></div></li>
                <li><div><strong>On prépare le cadrage</strong><span>Besoin, secteur, contraintes : on arrive prêts.</span></div></li>
                <li><div><strong>Vous repartez avec une suite claire</strong><span>Proposition, planning et devis sous 24h en général.</span></div></li>
              </ol>
              <p style="color:var(--text-muted);margin-bottom:0.75rem">Vous préférez écrire ou appeler ?</p>
              <div class="phero__actions" style="gap:0.6rem">
                <a class="btn btn--line" style="color:var(--ink)" href="/live/simplement/contact">Formulaire contact</a>
                <a class="btn btn--line" style="color:var(--ink)" href="tel:+33465845964" data-copy="0465845964" data-cursor="Copier le numéro">04 65 84 59 64</a>
              </div>
            </div>
            <div class="panel" id="wizard">
              <div class="wizard-progress" aria-label="Étapes de réservation">
                <button type="button" class="is-on" aria-current="step"><span>1</span> Besoin</button>
                <button type="button" disabled aria-current="false"><span>2</span> Créneau</button>
                <button type="button" disabled aria-current="false"><span>3</span> Coordonnées</button>
              </div>
              <div class="wpanel" data-step="1">
                <h3>Quel est votre besoin ?</h3>
                <p>Sélectionnez le sujet principal de l'échange.</p>
                <div class="needs" role="radiogroup" aria-label="Type de besoin">
                  <label class="need"><input type="radio" name="need" value="creation" required /><span><strong>Création de site</strong><em>Nouveau site vitrine ou e-commerce</em></span></label>
                  <label class="need"><input type="radio" name="need" value="refonte" /><span><strong>Refonte</strong><em>Moderniser et convertir davantage</em></span></label>
                  <label class="need"><input type="radio" name="need" value="seo" /><span><strong>SEO</strong><em>Visibilité Google &amp; trafic qualifié</em></span></label>
                  <label class="need"><input type="radio" name="need" value="ads" /><span><strong>Ads</strong><em>Google Ads / Meta Ads</em></span></label>
                  <label class="need"><input type="radio" name="need" value="ia" /><span><strong>Accompagnement IA</strong><em>Audit &amp; automatisation utile</em></span></label>
                  <label class="need"><input type="radio" name="need" value="autre" /><span><strong>Autre / conseil</strong><em>HubSpot, Shopify, maintenance…</em></span></label>
                </div>
                <div class="wizard-actions"><button type="button" class="btn btn--cta" data-next>Continuer</button></div>
              </div>
              <div class="wpanel" data-step="2" hidden>
                <h3>Choisissez un créneau</h3>
                <p>Semaine du 27 juil. 2026 · heure de Paris</p>
                <div class="days" role="tablist" aria-label="Jours disponibles"><button type="button" class="day is-on" aria-selected="true"><span>Lun</span> 27</button><button type="button" class="day" aria-selected="false"><span>Mar</span> 28</button><button type="button" class="day" aria-selected="false"><span>Mer</span> 29</button><button type="button" class="day" aria-selected="false"><span>Jeu</span> 30</button><button type="button" class="day" aria-selected="false"><span>Ven</span> 31</button></div>
                <div class="slots" aria-label="Horaires disponibles"><button type="button" class="slot" aria-pressed="false">09:30</button><button type="button" class="slot" aria-pressed="false">10:30</button><button type="button" class="slot" aria-pressed="false">11:30</button><button type="button" class="slot" aria-pressed="false">14:00</button><button type="button" class="slot" aria-pressed="false">15:00</button><button type="button" class="slot" aria-pressed="false">16:30</button></div>
                <div class="f"><label>Mode d'échange *</label>
                  <div class="days">
                    <label class="day" style="cursor:pointer"><input type="radio" name="mode" value="visio" style="margin-right:0.4rem" />Visio</label>
                    <label class="day" style="cursor:pointer"><input type="radio" name="mode" value="tel" style="margin-right:0.4rem" />Téléphone</label>
                  </div>
                </div>
                <div class="wizard-actions">
                  <button type="button" class="btn btn--line" style="color:var(--ink)" data-back>Retour</button>
                  <button type="button" class="btn btn--cta" data-next>Continuer</button>
                </div>
              </div>
              <div class="wpanel" data-step="3" hidden>
                <h3>Vos coordonnées</h3>
                <div class="recap" id="recap">Récap : —</div>
                <form id="wizard-form" action="#" method="post">
                  <div class="f"><label for="w-name">Nom / entreprise *</label><input id="w-name" required /></div>
                  <div class="f-row">
                    <div class="f"><label for="w-email">Email *</label><input id="w-email" type="email" required /></div>
                    <div class="f"><label for="w-tel">Téléphone *</label><input id="w-tel" type="tel" required /></div>
                  </div>
                  <div class="f"><label for="w-ctx">Contexte (optionnel)</label><textarea id="w-ctx" style="min-height:5rem"></textarea></div>
                  <div class="wizard-actions">
                    <button type="button" class="btn btn--line" style="color:var(--ink)" data-back>Retour</button>
                    <button type="submit" class="btn btn--cta">Confirmer le rendez-vous</button>
                  </div>
                  <p class="form-note">Maquette : la confirmation est simulée, aucun envoi réel.</p>
                </form>
              </div>
              <div class="wizard-ok" id="wizard-done" hidden>
                <span class="badge" aria-hidden="true">✓</span>
                <strong>Rendez-vous enregistré</strong>
                <p>Merci ! Vous recevrez un e-mail de confirmation avec le lien visio ou le rappel d'appel.</p>
                <div class="wizard-actions">
                  <a class="btn btn--cta" href="/live/simplement">Retour à l'accueil</a>
                  <a class="btn btn--line" style="color:var(--ink)" href="/live/simplement/case-studies">Voir nos cas clients</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="sect sect--soft" aria-label="Avis client">
          <div class="shell">
            <blockquote class="bigquote">
              « Merci à Jonathan pour ce service incroyablement rapide. À partir de maintenant je passe
              par vous pour mon site. »
              <cite>Yohann Pejon · avis Google</cite>
            </blockquote>
          </div>
        </section>
      </div>`;
