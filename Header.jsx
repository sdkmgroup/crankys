/* Cranky's FARM — site header / nav. Exports Header to window. */
function Header({ onDonate }) {
  const { Button, IconButton } = window.DesignSystem_5a631a;
  const [open, setOpen] = React.useState(false);
  const links = ['Home', 'About', 'Our Residents', 'Adopt', 'News', 'Events', 'Shop'];
  return (
    <header className="ck-header">
      <div className="ck-header__inner">
        <a className="ck-brand" href="#top" aria-label="Cranky's FARM home">
          <img src="../../assets/logo-mark-green.png" alt="" className="ck-brand__mark" />
          <span className="ck-brand__word">
            <span className="ck-brand__name">Cranky's</span>
            <span className="ck-brand__sub">Farm Animal Rescue Mission</span>
          </span>
        </a>

        <nav className="ck-nav" aria-label="Primary">
          {links.map((l, i) => (
            <a key={l} href="#" className={'ck-nav__link' + (i === 0 ? ' is-active' : '')}
               onClick={(e) => e.preventDefault()}>{l}</a>
          ))}
        </nav>

        <div className="ck-header__actions">
          <Button variant="donate" icon={<window.HeartIcon />} onClick={onDonate} className="ck-header__donate">Donate</Button>
          <IconButton label={open ? 'Close menu' : 'Open menu'} variant="outline" className="ck-menu-toggle"
                      onClick={() => setOpen(o => !o)}>
            {open ? <window.CloseIcon /> : <window.MenuIcon />}
          </IconButton>
        </div>
      </div>

      {open && (
        <div className="ck-mobile-nav">
          {links.map((l, i) => (
            <a key={l} href="#" className={'ck-mobile-nav__link' + (i === 0 ? ' is-active' : '')}
               onClick={(e) => { e.preventDefault(); setOpen(false); }}>{l}</a>
          ))}
          <Button variant="donate" icon={<window.HeartIcon />} onClick={() => { setOpen(false); onDonate(); }}>Donate</Button>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
