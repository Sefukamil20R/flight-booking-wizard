import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from '../context/FormContext';

export default function Step1() {
  const router = useRouter();
  const { form, setForm } = useForm();
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validateAndNext = () => {
    const currentErrors: any = {};
    ['from', 'to', 'departDate', 'returnDate'].forEach((key) => {
      if (!form[key as keyof typeof form]) currentErrors[key] = true;
    });

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    router.push('/step2');
  };

  return (
    <div className="container">
      <h2>Search Flights, Cheapest Flights</h2>
      <p className="subtitle">All the plane tickets you are looking for together!</p>

      {/* Progress Indicator */}
      <div className="progress-bar">
        <div className="progress-circle active">
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
        <div className="progress-circle">
          <img src="/love.png" alt="Step 5" />
        </div>
      </div>

      {/* Form */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            id="from"
            placeholder="Country or City"
            value={form.from}
            onChange={(e) => setForm({ from: e.target.value })}
            className={`inputField ${errors.from ? 'error' : ''}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            id="to"
            placeholder="Country or City"
            value={form.to}
            onChange={(e) => setForm({ to: e.target.value })}
            className={`inputField ${errors.to ? 'error' : ''}`}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="departDate">Depart Date</label>
          <input
            id="departDate"
            type="date"
            value={form.departDate}
            onChange={(e) => setForm({ departDate: e.target.value })}
            className={`inputField ${errors.departDate ? 'error' : ''}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            id="returnDate"
            type="date"
            value={form.returnDate}
            onChange={(e) => setForm({ returnDate: e.target.value })}
            className={`inputField ${errors.returnDate ? 'error' : ''}`}
          />
        </div>
      </div>

      <div className="buttons">
        <button onClick={validateAndNext}>Next</button>
      </div>
    </div>
  );
}