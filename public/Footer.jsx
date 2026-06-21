/* Footer — newsletter + menu + brand. */
function Footer() {
  const { Button: FButton, Input: FInput, IconButton: FIcon } = window.DesignSystem_5a631a;
  return (
    <footer className="ck-footer">
      <div className="ck-container ck-footer__inner">
        <div className="ck-footer__brand">
          <img src="assets/logo-mark-white.png" alt="Cranky's FARM" className="ck-footer__logo" />
          <p className="ck-footer__about">
            Cranky's FARM is a registered charity which rescues and cares for abused,
            neglected and unwanted farm animals.
          </p>
          <div className="ck-footer__social">
            <FIcon label="Facebook" variant="outline" className="ck-social"><window.Facebook /></FIcon>
            <FIcon label="Instagram" variant="outline" className="ck-social"><window.Instagram /></FIcon>
          </div>
        </div>

        <div className="ck-footer__col">
          <h4 className="ck-footer__h">Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About &amp; Contact</a></li>
            <li><a href="#">Our Residents</a></li>
            <li><a href="#">Animals needing homes</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>

        <div className="ck-footer__news">
          <h4 className="ck-footer__h">Stay in the loop</h4>
          <p className="ck-footer__newscopy">Rescue stories and event news, straight to your inbox.</p>
          <div className="ck-footer__form">
            <FInput type="email" placeholder="you@example.com" aria-label="Email address" icon={<window.MailIcon />} />
            <FButton variant="onGreen" icon={<window.ArrowRight />} iconRight>Subscribe</FButton>
          </div>
        </div>
      </div>
      <div className="ck-footer__bottom">
        <div className="ck-container ck-footer__bottominner">
          <span>© 2026 Cranky's FARM Animal Rescue Mission Ltd</span>
          <span>Registered charity · Made with care</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
