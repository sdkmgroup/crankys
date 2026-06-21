/* App — composes the refreshed Cranky's FARM homepage. */
function App() {
  const [donateOpen, setDonateOpen] = React.useState(false);
  const openDonate = React.useCallback(() => setDonateOpen(true), []);
  return (
    <React.Fragment>
      <window.Header onDonate={openDonate} />
      <main>
        <window.Hero onDonate={openDonate} />
        <window.ImpactStrip />
        <window.NewsGrid />
        <window.CrankyQuote />
        <window.ResidentsGrid onDonate={openDonate} />
        <window.DonateBand onDonate={openDonate} />
      </main>
      <window.Footer />
      <window.DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </React.Fragment>
  );
}

/* Wait for the compiled DS bundle to define its namespace before mounting,
   so timing between the plain bundle script and Babel's transform pass
   can never leave components reading an undefined namespace. */
(function mount() {
  if (!window.DesignSystem_5a631a) { setTimeout(mount, 20); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
