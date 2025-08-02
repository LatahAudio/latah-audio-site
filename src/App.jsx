import React from 'react'

const App = () => {
  return (
    <div className="page">
      <header>
        <h1>Latah Audio</h1>
        <p>Sound you can trust for weddings, parties, and corporate events across the Palouse.</p>
      </header>

      <section className="package">
        <h2>💍 Wedding Sound Package</h2>
        <p>2 EV ELX200 speakers, Yamaha 16ch mixer, 2 wireless mics + Beta 58A</p>
        <p>All stands, cables, and setup gear included</p>
        <p><strong>Power:</strong> Loud enough for up to 250 guests</p>
        <p><strong>Price:</strong> Starting at $300/event</p>
      </section>

      <section className="package">
        <h2>🎉 Party Package</h2>
        <p>2 Yamaha DXR8 powered speakers, 1 wireless mic, Midas 12ch mixer</p>
        <p><strong>Price:</strong> Starting at $200/event</p>
      </section>

      <section className="package">
        <h2>👔 Corporate AV Package</h2>
        <p>2 EV ELX200 or DXR8 speakers, 1 wireless SM58, Podium or lapel mic ready</p>
        <p><strong>Price:</strong> Starting at $250/event</p>
      </section>

      <section className="footer">
        <p>📦 Free Pickup/Dropoff in Moscow, ID</p>
        <p>Delivery & Setup – $100 in Moscow ID, +$1/mile outside</p>
        <p>SBX220 Subs. Up to 2800 watts available</p>
        <p>Custom packages available upon request.</p>
        <p>📧 <a href="mailto:info@latahaudio.com">Contact us</a> with your date, event type, and location for a fast quote.</p>
      </section>
    </div>
  )
}

export default App