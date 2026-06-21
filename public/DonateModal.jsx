/* Donate modal — interactive give flow using DS components. */
function DonateModal({ open, onClose }) {
  const { Button: MButton, Input: MInput, Checkbox: MCheck } = window.DesignSystem_5a631a;
  const [freq, setFreq] = React.useState('monthly');
  const [amount, setAmount] = React.useState(30);
  const [custom, setCustom] = React.useState('');
  const [done, setDone] = React.useState(false);
  const presets = [15, 30, 50, 100];

  React.useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  const value = custom ? Number(custom) : amount;

  return (
    <div className="ck-modal" onMouseDown={onClose}>
      <div className="ck-modal__panel" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label="Donate">
        <button className="ck-modal__close" aria-label="Close" onClick={onClose}><window.CloseIcon /></button>

        {done ? (
          <div className="ck-modal__thanks">
            <span className="ck-modal__thankicon"><window.HeartIcon /></span>
            <h2>Thank you{value ? `, that's $${value}` : ''} 💚</h2>
            <p>Your {freq === 'monthly' ? 'monthly ' : ''}gift helps keep our residents safe, fed and cared for. We'll send you updates from the farm.</p>
            <MButton variant="primary" onClick={onClose}>Back to the farm</MButton>
          </div>
        ) : (
          <React.Fragment>
            <p className="eyebrow">Make a donation</p>
            <h2 className="ck-modal__title">Give a gentle life a chance</h2>

            <div className="ck-seg" role="tablist">
              <button className={'ck-seg__opt' + (freq === 'once' ? ' is-on' : '')} onClick={() => setFreq('once')}>One-off</button>
              <button className={'ck-seg__opt' + (freq === 'monthly' ? ' is-on' : '')} onClick={() => setFreq('monthly')}>Monthly</button>
            </div>

            <div className="ck-amounts">
              {presets.map((p) => (
                <button key={p}
                  className={'ck-amt' + (!custom && amount === p ? ' is-on' : '')}
                  onClick={() => { setAmount(p); setCustom(''); }}>${p}</button>
              ))}
            </div>
            <MInput aria-label="Custom amount" placeholder="Other amount ($)" type="number" min="1"
                    value={custom} onChange={(e) => setCustom(e.target.value)} />

            <div className="ck-modal__fields">
              <MInput label="Your name" placeholder="Jane Appleseed" icon={<window.HeartIcon />} />
              <MInput label="Email" type="email" placeholder="you@example.com" icon={<window.MailIcon />} />
            </div>
            <div style={{ margin: '14px 0 18px' }}>
              <MCheck label="Send me rescue stories and updates from the residents" defaultChecked />
            </div>

            <MButton variant="donate" size="lg" icon={<window.HeartIcon />} onClick={() => setDone(true)} className="ck-modal__submit">
              Donate ${value || 0}{freq === 'monthly' ? ' / month' : ''}
            </MButton>
            <p className="ck-modal__fine">Secure demo form · 100% of your gift goes to animal care.</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

window.DonateModal = DonateModal;
