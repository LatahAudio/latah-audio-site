import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Latah Audio</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        Sound you can trust for weddings, parties, and corporate events across the Palouse.
      </p>
      <h2>💍 Wedding Sound Package</h2>
      <ul>
        <li>2 EV ELX200 speakers + 2 SBX220 subs</li>
        <li>2 Mackie 1400i amps (bridged mono)</li>
        <li>Yamaha 16ch mixer, 2 wireless mics + Beta 58A</li>
        <li>All stands, cables, and setup gear included</li>
      </ul>
      <p><strong>Power:</strong> Loud enough for up to 250 guests</p>
      <p><strong>Price:</strong> Starting at $350/event</p>

      <h2>🎉 Party Package</h2>
      <ul>
        <li>2 Yamaha DXR8 powered speakers</li>
        <li>1 wireless mic, Midas 12ch mixer</li>
        <li>All necessary cables and stands</li>
      </ul>
      <p><strong>Price:</strong> Starting at $200/event</p>

      <h2>👔 Corporate AV Package</h2>
      <ul>
        <li>2 EV ELX200 or DXR8 speakers</li>
        <li>1 wireless SM58, 1 SM57, Yamaha 16ch mixer</li>
        <li>Podium or lapel mic ready</li>
      </ul>
      <p><strong>Price:</strong> Starting at $250/event</p>

      <h2>📦 Add-On Services</h2>
      <ul>
        <li>Sound Technician – $40/hr (setup + ceremony or reception mixing)</li>
        <li>Delivery & Setup – Free in Moscow ID, $1/mile outside</li>
        <li>Custom packages available upon request</li>
      </ul>

      <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
        Ready to reserve? Contact us with your date, event type, and location for a fast quote.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
