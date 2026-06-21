/* Residents grid — sponsorable resident cards. */
function ResidentsGrid({ onDonate }) {
  const { Card: RCard, Badge: RBadge, Button: RButton, SectionHeading: RHeading } = window.DesignSystem_5a631a;
  const residents = [
    { img: 'assets/images/bunny.png', name: 'Bunny', kind: 'Goat · arrived 2025',
      badge: <RBadge tone="warm">Needs a sponsor</RBadge>,
      text: 'A tiny, curious goat with the gentlest eyes. Bunny needs ongoing care as she grows up safe.' },
    { img: 'assets/images/lilah.png', name: 'Lilah', kind: 'Goat · rescued',
      badge: <RBadge tone="green">Resident</RBadge>,
      text: 'Lilah spent her young life with no other goats for company. Now she has a whole herd of friends.' },
    { img: 'assets/images/cranky-portrait.png', name: 'Cranky', kind: 'Steer · since 2010', bw: true,
      badge: <RBadge tone="neutral">Forever loved</RBadge>,
      text: 'The gentle soul our sanctuary is named after — and the reason every resident here has a home for life.' },
  ];
  return (
    <section className="ck-section ck-residents">
      <div className="ck-container">
        <RHeading eyebrow="Meet the residents" title="The Cranky Residents">
          Sponsor a resident and you'll cover their hay, vet care and daily comfort — and get updates on the friend you're helping.
        </RHeading>
        <div className="ck-residents__grid">
          {residents.map((r) => (
            <RCard key={r.name} image={r.img} imageAlt={r.name} badge={r.badge}
                   eyebrow={r.kind} title={r.name} interactive
                   className={r.bw ? 'ck-card-bw' : ''}
                   footer={<RButton size="sm" variant="donate" icon={<window.HeartIcon />} onClick={onDonate}>Sponsor {r.name}</RButton>}>
              {r.text}
            </RCard>
          ))}
        </div>
        <div className="ck-residents__more">
          <RButton variant="secondary" icon={<window.PawIcon />}>Meet all the residents</RButton>
        </div>
      </div>
    </section>
  );
}

window.ResidentsGrid = ResidentsGrid;
