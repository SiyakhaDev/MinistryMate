import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="dashboard-container">
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#members">Members</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#donations">Donations</a></li>
          <li><a href="#volunteers">Volunteers</a></li>
        </ul>
      </nav>
    </aside>
    
    <main className="main-content">
      <header>
        <h1>MinistryMate Dashboard</h1>
      </header>

      <section className="stats-section">
        <div className="stat-card">
          <h3>Total Members</h3>
          <p className="counter">200</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <p className="counter">5</p>
        </div>
        <div className="stat-card">
          <h3>Donations This Week</h3>
          <p className="counter">$500</p>
        </div>
      </section>

      <section className="updates-section">
        <h2>Recent Updates</h2>
        <div className="update">
          <h4>New Member Registration</h4>
          <p>John Doe has registered as a new member.</p>
        </div>
        <div className="update">
          <h4>Event Confirmation</h4>
          <p>The Community Outreach event has been confirmed for next Saturday.</p>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event">
          <h3>Community Outreach</h3>
          <p>Saturday, May 5th at 2:00 PM</p>
        </div>
        <div className="event">
          <h3>Church Picnic</h3>
          <p>Sunday, May 12th at 11:00 AM</p>
        </div>
      </section>

      <section className="table-section">
        <h2>Recent Donations</h2>
        <table>
          <thead>
            <tr>
              <th>Donor</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>$100</td>
              <td>2025-04-25</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>$50</td>
              <td>2025-04-23</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
  );
}

export default App
