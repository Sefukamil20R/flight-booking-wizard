import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="container">
      <h2>Thank You!</h2>
      <p className="subtitle">Your registration has been received. We appreciate your support!</p>
      <div style={{ margin: "32px 0" }}>
        <img src="/love.png" alt="Thank you" style={{ width: 80, height: 80 }} />
      </div>
      <div className="buttons">
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}