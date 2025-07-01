import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from '../context/FormContext';

export default function Step2() {
  const router = useRouter();
  const { form, setForm } = useForm();
  const [selected, setSelected] = useState<'business' | 'economy' | null>(form.type as any);
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    if (!selected) {
      setError("Please select a flight type.");
      return;
    }
    setError("");
    setForm({ type: selected });
    router.push('/step3');
  };

  return (
    <div className="container">
      <h2>Choose Flight Type</h2>
      <p className="subtitle">Select your preferred class</p>

      {/* Progress Indicator */}
      <div className="progress-bar">
        <div className="progress-circle">
          <img src="/location.png" alt="Step 1" />
        </div>
        <div className="progress-circle active">
          <img src="/type.png" alt="Step 2" />
        </div>
        <div className="progress-circle">
          <img src="/plan.png" alt="Step 3" />
        </div>
        <div className="progress-circle">
          <img src="/bx_bx-detail.png" alt="Step 4" />
        </div>
        <div className="progress-circle">
          <img src="/love.png" alt="Step 5" />
        </div>
      </div>

      <div className="type-options">
        <div
          className={`type-card${selected === 'economy' ? ' selected' : ''}`}
          onClick={() => {
            setSelected('economy');
            setError("");
          }}
        >
          <img src="/economy.png" alt="Economy" />
          <span>Economy</span>
        </div>
        <div
          className={`type-card${selected === 'business' ? ' selected' : ''}`}
          onClick={() => {
            setSelected('business');
            setError("");
          }}
        >
          <img src="/business.png" alt="Business" />
          <span>Business</span>
        </div>
      </div>

      {error && <span className="error-message">{error}</span>}

      <div className="buttons">
        <button
          className="before-btn"
          type="button"
          onClick={() => router.back()}
        >
          Before
        </button>
        <button
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}