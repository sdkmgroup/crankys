/* Latest news — SectionHeading + 3 Cards. */
function NewsGrid() {
  const { Card: NCard, Badge: NBadge, Button: NButton, SectionHeading: NHeading } = window.DesignSystem_5a631a;
  const posts = [
    {
      img: 'assets/images/cranky-portrait.png', bw: true,
      badge: <NBadge tone="urgent">Urgent appeal</NBadge>,
      eyebrow: 'Rescue appeal', title: 'Help save Ferdinand from the sales',
      meta: 'By Natalie · 12 Oct 2025',
      text: 'A gentle six-year-old bull came into our care facing the terrifying prospect of the cattle sales. Thanks to an incredible community, he is safe — but his recovery has only begun.',
    },
    {
      img: 'assets/images/bunny.png',
      badge: <NBadge tone="warm" icon={<window.PawIcon />}>New arrival</NBadge>,
      eyebrow: 'Rescue story', title: "Bunny's story",
      meta: 'By Natalie · 4 Oct 2025',
      text: 'We were contacted by friends who had taken in a tiny goat needing specialist care. Bunny is settling in beautifully — and learning that humans can be gentle.',
    },
    {
      img: 'assets/images/gloria.png',
      badge: <NBadge tone="sun" icon={<window.Calendar />}>Event</NBadge>,
      eyebrow: 'Save the date', title: 'Trivia Night 2025',
      meta: 'By Natalie · 6 Sep 2025',
      text: 'Join us Saturday 20 September from 6:30pm at the Northern Suburbs Bowls Club for a fun-filled night of trivia, prizes and food — all for a great cause.',
    },
  ];
  return (
    <section className="ck-section ck-news">
      <div className="ck-container">
        <div className="ck-section__head">
          <NHeading eyebrow="Latest news" title="Stories from the farm" align="start">
            Every rescue has a story. Here are the latest updates from our residents and our community.
          </NHeading>
          <NButton variant="ghost" icon={<window.ArrowRight />} iconRight className="ck-viewall">View all posts</NButton>
        </div>
        <div className="ck-news__grid">
          {posts.map((p) => (
            <NCard key={p.title} image={p.img} imageAlt={p.title} badge={p.badge}
                   eyebrow={p.eyebrow} title={p.title} meta={p.meta} interactive
                   className={p.bw ? 'ck-card-bw' : ''}
                   footer={<NButton size="sm" variant="secondary" icon={<window.ArrowRight />} iconRight>Read more</NButton>}>
              {p.text}
            </NCard>
          ))}
        </div>
      </div>
    </section>
  );
}

window.NewsGrid = NewsGrid;
