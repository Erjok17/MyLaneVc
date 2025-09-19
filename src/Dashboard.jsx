import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
  const [user] = useState({
    name: "DeepSeek",
    image: "/user-avatar.png" // Replace with actual path to user image
  });

  return (
    <div className="dashboard">
      {/* Header with enhanced navigation */}
      <header className="dashboard-header">
        <div className="header-left">
          <img src="/Lane_VC_Logo-13.png" alt="Logo" className="logo" />
          <h1>Dashboard</h1>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <input type="text" placeholder="Search anything..." />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        
        <div className="header-right">
          <span className="welcome-message">Welcome, {user.name}</span>
          
          <div className="header-icons">
            <button 
              className="icon-btn settings-btn"
              onClick={() => window.location.href = '/settings'}
              title="Settings"
            >
              ⚙️
            </button>
            
            <button 
              className="icon-btn notifications-btn"
              onClick={() => window.location.href = '/notifications'}
              title="Notifications"
            >
              🔔
              <span className="notification-badge">3</span>
            </button>
            
            <div className="user-profile">
              <img 
                src={user.image} 
                alt={user.name} 
                className="user-avatar"
              />
              <div className="user-dropdown">
                <span>Account Settings</span>
                {/* Dropdown content would go here */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li className="active">Dashboard</li>
              <li>Companies</li>
              <li>Documents</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <section className="companies-section">
            <h2>My companies</h2>
            <div className="companies-list">
              <div className="company-card">
                <h3>Entride Electric Care</h3>
                <p>Serial 1</p>
                <p>E-Bicycles</p>
              </div>
              <div className="company-card">
                <h3>XOS</h3>
                <p>XOS Electric trucks</p>
              </div>
              <div className="company-card">
                <h3>Sex More</h3>
              </div>
            </div>
          </section>

          <div className="dashboard-grid">
            {/* Expense Section */}
            <section className="expense-section">
              <h2>My Expense</h2>
              <div className="expense-chart">
                <div className="expense-amount">$12,500</div>
                <div className="expense-timeline">
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                </div>
              </div>
            </section>

            {/* Expense Statistics */}
            <section className="statistics-section">
              <h2>Expense Statistics</h2>
              <div className="statistics-list">
                <div className="statistic-item">
                  <span className="percentage">30%</span>
                  <span className="company-name">Serial 1</span>
                </div>
                <div className="statistic-item">
                  <span className="percentage">10%</span>
                  <span className="company-name">Vanderhaal</span>
                </div>
                <div className="statistic-item">
                  <span className="percentage">20%</span>
                  <span className="company-name">Entride</span>
                </div>
                <div className="statistic-item">
                  <span className="percentage">30%</span>
                  <span className="company-name">XOS</span>
                </div>
              </div>
            </section>
          </div>

          {/* Recent Documents */}
          <section className="documents-section">
            <h2>Recent Documents</h2>
            <div className="document-tabs">
              <button className="active">All Documents</button>
              <button>Cashflow</button>
              <button>Proposals</button>
              <button>Budgets</button>
              <button>Minutes</button>
              <button>Images</button>
            </div>
            <table className="documents-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>File</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Investment</td>
                  <td>Cashflow</td>
                  <td>sites</td>
                  <td>12:30 AM</td>
                  <td>28 Jan 2025</td>
                  <td>50kb</td>
                  <td><button className="download-btn">Download</button></td>
                </tr>
                <tr>
                  <td>Investor meeting minutes</td>
                  <td>Minutes</td>
                  <td>docs</td>
                  <td>10:40 PM</td>
                  <td>25 Jan 2025</td>
                  <td>53kb</td>
                  <td><button className="download-btn">Download</button></td>
                </tr>
                <tr>
                  <td>Senior I Project Proposal</td>
                  <td>Proposals</td>
                  <td>gist</td>
                  <td>10:40 PM</td>
                  <td>70 Jan 2025</td>
                  <td>5mb</td>
                  <td><button className="download-btn">Download</button></td>
                </tr>
                <tr>
                  <td>Year Budget</td>
                  <td>Budgets</td>
                  <td>dev</td>
                  <td>03:29 PM</td>
                  <td>15 Jan 2025</td>
                  <td>2mb</td>
                  <td><button className="download-btn">Download</button></td>
                </tr>
                <tr>
                  <td>Entride new model</td>
                  <td>Images</td>
                  <td>jpg</td>
                  <td>10:40 PM</td>
                  <td>14 Jan 2025</td>
                  <td>3.8mb</td>
                  <td><button className="download-btn">Download</button></td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <span>Legout</span>
          <button className="view-all-btn">View all</button>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard