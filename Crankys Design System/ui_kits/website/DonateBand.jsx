/* Donate band — deep green CTA + ways to help. */
function DonateBand({ onDonate }) {
  const { Button: DButton, SectionHeading: DHeading } = window.DesignSystem_5a631a;
  const ways = [
    { icon: <window.HeartIcon />, title: 'Make a donation', text: 'One-off or monthly — every dollar feeds and treats a rescued animal.' },
    { icon: <window.PawIcon />, title: 'Sponsor a resident', text: 'Cover the ongoing care of a Cranky Resident and follow their journey.' },
    { icon: <window.ShieldHeart />, title: 'Adopt or foster', text: 'Give an animal needing a home a safe, loving place to land.' },
  ];
  return (
    <section className="ck-section ck-donate">
      <div className="ck-container ck-donate__inner">
        <DHeading eyebrow="Please help" title="Help us help them" onDark align="start" size="lg">
          We rely entirely on the kindness of our community. Choose the way that suits you — it all keeps these gentle animals safe.
        </DHeading>
        <div className="ck-donate__ways">
          {ways.map((w) => (
            <div className="ck-way" key={w.title}>
              <span className="ck-way__icon">{w.icon}</span>
              <h3 className="ck-way__title">{w.title}</h3>
              <p className="ck-way__text">{w.text}</p>
            </div>
          ))}
        </div>
        <div className="ck-donate__cta">
          <DButton variant="onGreen" size="lg" icon={<window.HeartIcon />} onClick={onDonate}>Donate now</DButton>
          <DButton variant="ghost" size="lg" className="ck-donate__ghost" icon={<window.ArrowRight />} iconRight>Other ways to give</DButton>
        </div>
      </div>
    </section>
  );
}

window.DonateBand = DonateBand;
