import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="dashboard">
      <header className="header">
        <nav className="nav">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Donations</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="welcome-section">
          <h1>Welcome, [User Name]</h1>
          <p>Your church's activity dashboard is below.</p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <h3>Members</h3>
            <div className="counter">250</div>
          </div>
          <div className="stat-card">
            <h3>Donations</h3>
            <div className="counter">$5,000</div>
          </div>
          <div className="stat-card">
            <h3>Upcoming Events</h3>
            <div className="counter">5</div>
          </div>
        </section>

        <section className="updates">
          <h2>Recent Updates</h2>
          <div className="update">
            <h4>Community Outreach Event</h4>
            <p>We've just launched a new community outreach initiative.</p>
          </div>
          <div className="update">
            <h4>New Donation Goal</h4>
            <p>We're aiming for $10,000 this month!</p>
          </div>
        </section>

        <section className="alerts">
          <h2>Alerts</h2>
          <div className="alert">
            <p>Event registration ends soon! Make sure to sign up.</p>
          </div>
          <div className="alert">
            <p>New volunteer opportunities are available.</p>
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event">
            <h3>Community Outreach</h3>
            <p>March 25, 2025</p>
          </div>
          <div className="event">
            <h3>Charity Run</h3>
            <p>April 10, 2025</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
