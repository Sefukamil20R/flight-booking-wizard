import { useState } from 'react';
import Link from 'next/link';

export default function HelpPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent) => {
    if (selected === null) {
      setError("Please select a foundation to help.");
      e.preventDefault();
    } else {
      setError("");
    }
  };

  return (
    <div className="container">
      <h2>Search Flights, Cheapest Flights</h2>
      <p className="subtitle">All the plane tickets you are looking for together!</p>

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
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className={`foundation-card${selected === i ? ' selected' : ''}`}
            onClick={() => {
              setSelected(i);
              setError("");
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={`/foundation${i}.png`} alt="Foundation" className="foundation-img" />
            <div>Foundation</div>
          </div>
        ))}
      </div>
      {error && <span className="error-message">{error}</span>}

      <div className="buttons">
        <Link href="/miles">
          <button className="before-btn">Before</button>
        </Link>
        <Link href="/thankyou" onClick={handleSubmit}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
}