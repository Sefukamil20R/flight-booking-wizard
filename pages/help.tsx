import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="container">
      <h2>Search Flights, Cheapest Flights</h2>
      <p className="subtitle">All the plane tickets you are looking for together!</p>

      {/* Progress Indicator */}
      <div className="progress-bar">
        <div className="progress-circle">
          <img src="/location.png" alt="Step 1" />
        </div>
        <div className="progress-circle">
          <img src="/type.png" alt="Step 2" />
        </div>
        <div className="progress-circle">
          <img src="/plan.png" alt="Step 3" />
        </div>
        <div className="progress-circle">
          <img src="/bx_bx-detail.png" alt="Step 4" />
        </div>
        <div className="progress-circle active">
          <img src="/love.png" alt="Step 5" />
        </div>
      </div>

      <h3 className="section-title">Who do you want to help?</h3>

      <div className="foundation-grid">
        <div className="foundation-card">
          <img src="/foundation1.png" alt="Foundation" className="foundation-img" />
          <div>Foundation</div>
        </div>
        <div className="foundation-card">
          <img src="/foundation2.png" alt="Foundation" className="foundation-img" />
          <div>Foundation</div>
        </div>
        <div className="foundation-card">
          <img src="/foundation3.png" alt="Foundation" className="foundation-img" />
          <div>Foundation</div>
        </div>
        <div className="foundation-card">
          <img src="/foundation4.png" alt="Foundation" className="foundation-img" />
          <div>Foundation</div>
        </div>
      </div>

      <div className="buttons">
        <Link href="/miles">
          <button className="before-btn">Before</button>
        </Link>
      </div>
    </div>
  );
}