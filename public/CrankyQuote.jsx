/* Meet Cranky — emotive B&W portrait + pull quote. */
function CrankyQuote() {
  const { Button: CqButton } = window.DesignSystem_5a631a;
  return (
    <section className="ck-section ck-cranky">
      <div className="ck-container ck-cranky__inner">
        <div className="ck-cranky__media">
          <img src="assets/images/cranky-portrait.png" alt="Cranky, the steer the sanctuary is named after" />
          <span className="ck-cranky__caption script">…the one who started it all</span>
        </div>
        <div className="ck-cranky__copy">
          <p className="eyebrow">Meet Cranky</p>
          <span className="ck-cranky__qmark" aria-hidden="true"><window.Quote /></span>
          <blockquote className="ck-cranky__quote">He would change our lives forever.</blockquote>
          <p className="ck-cranky__text">
            Cranky arrived at our property with two other dairy steers in February 2010.
            They had spent the first three months of their lives as part of a mobile petting
            zoo. What people don't realise — just like we didn't — is that the lives of those
            cute baby animals are typically very short.
          </p>
          <CqButton variant="warm" icon={<window.ArrowRight />} iconRight>Read Cranky's story</CqButton>
        </div>
      </div>
    </section>
  );
}

window.CrankyQuote = CrankyQuote;
