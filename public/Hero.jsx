/* Hero — refreshed editorial hero with image + floating sponsor card. */
function Hero({ onDonate }) {
  const { Button: HButton } = window.DesignSystem_5a631a;
  return (
    <section className="ck-hero" id="top">
      <div className="ck-hero__blob" aria-hidden="true"></div>
      <div className="ck-hero__inner">
        <div className="ck-hero__copy">
          <p className="eyebrow ck-hero__eyebrow">Farm animal rescue · Est. 2010</p>
          <h1 className="ck-hero__title">Every animal deserves a <em>gentle</em> life.</h1>
          <p className="ck-hero__lead">
            Cranky's FARM is a registered charity caring for unwanted, neglected and
            abused farm animals. We give them safety, vet care and a home for life —
            and we need your help to keep going and growing.
          </p>
          <div className="ck-hero__cta">
            <HButton variant="donate" size="lg" icon={<window.HeartIcon />} onClick={onDonate}>Donate today</HButton>
            <HButton variant="secondary" size="lg" icon={<window.PawIcon />}>Meet the residents</HButton>
          </div>
          <p className="ck-hero__note">100% of donations go straight to animal care.</p>
        </div>

        <div className="ck-hero__media">
          <div className="ck-hero__frame">
            <img src="../../assets/images/bunny.png" alt="Bunny, a rescued goat kid, being cradled at Cranky's FARM" />
          </div>
          <div className="ck-hero__badge">
            <img src="../../assets/logo-mark-green.png" alt="Cranky's FARM seal" />
          </div>
          <div className="ck-hero__stat">
            <span className="ck-hero__stat-num">500+</span>
            <span className="ck-hero__stat-lab">animals rescued<br/>since 2010</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
