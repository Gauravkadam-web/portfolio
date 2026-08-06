export default function Boot({ lines, pct, done }) {
  return (
    <div id="boot" className={done ? 'done' : ''}>
      <div className="boot-box">
        <div className="boot-titlebar">
          <span className="dot r"></span>
          <span className="dot y"></span>
          <span className="dot g"></span>
          <span>gaurav@portfolio: ~</span>
        </div>
        <div className="boot-body">
          {lines.map((l, i) => (
            <div className="boot-line" key={i}>
              {l.tag && <span className={l.tag === 'OK' ? 'ok' : 'tag'}>[{l.tag}]</span>} {l.t}
            </div>
          ))}
          <div className="boot-progress">
            <i style={{ width: pct + '%' }}></i>
          </div>
          <div className="boot-pct">{pct}%</div>
        </div>
      </div>
    </div>
  );
}
