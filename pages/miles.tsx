import Link from 'next/link';

export default function MilesPage() {
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
        <div className="progress-circle active">
          <img src="/bx_bx-detail.png" alt="Step 4" />
        </div>
        <div className="progress-circle">
          <img src="/love.png" alt="Step 5" />
        </div>
      </div>

      {/* Keep your existing content here */}
      <h3 className="section-title">Miles Responsibility</h3>
      <div className="card">
        <img src="/plane.png" alt="Plane" />
        <div className="card-text">
          <strong>May the miles be with you.</strong><br />
          <p>
            Throughout history, globalization and technological developments have always had a great effect on transportation. Today, everybody transports above the clouds and under the seas in more different ways and durations compared to past...
          </p>
        </div>
      </div>

      <div className="buttons">
        <Link href="/step3">
          <button className="before-btn">Before</button>
        </Link>
        <Link href="/help">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}