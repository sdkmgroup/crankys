/* Impact strip — green band of Stats. */
function ImpactStrip() {
  const { Stat } = window.DesignSystem_5a631a;
  const items = [
    { value: '500+', label: 'Animals rescued', sub: 'since 2010' },
    { value: '15 yrs', label: 'Caring for farm animals', sub: 'and counting' },
    { value: '30+', label: 'Permanent residents', sub: 'safe for life' },
    { value: '100%', label: 'Of donations to care', sub: 'every cent' },
  ];
  return (
    <section className="ck-impact">
      <div className="ck-impact__inner">
        {items.map((it) => (
          <Stat key={it.label} value={it.value} label={it.label} sublabel={it.sub} tone="onDeep" />
        ))}
      </div>
    </section>
  );
}

window.ImpactStrip = ImpactStrip;
