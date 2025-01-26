// Game.jsx
import { useState, useEffect } from "react";
import { upgrades } from "../lib/data";
import Upgrades from "./Upgrades";

const Game = () => {
  // Track the total number of cookies the user has
  const [cookies, setCookies] = useState(0);
  // Track the number of cookies generated per second
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);

  // Walking skeleton code =====================================
  // Automatic cookies per second
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cookiesPerSecond);
    }, 1000);
    // Cleanup
    return () => clearInterval(interval);
  }, [cookiesPerSecond]);
  //============================================================

  // Manual cookie clicks
  const handleCookieClick = () => {
    setCookies((prev) => prev + 1);
  };

  // Purchasing an upgrade
  const handleUpgradePurchase = (upgrade) => {
    if (cookies >= upgrade.cost) {
      // Take away the upgrade cost from total cookies
      setCookies((prev) => prev - upgrade.cost);
      // Increase the cps by the upgrades cps value
      setCookiesPerSecond((prev) => prev + upgrade.cps);
    }
  };

  // HTML code
  return (
    <div>
      <h1>Cookie Clicker</h1>

      {/* Button for user to click to earn cookies */}
      <button onClick={handleCookieClick}>🍪 Click Me!</button>

      {/* Displays the number of cookies and the cps */}
      <p>Cookies: {cookies}</p>
      <p>Cookies Per Second: {cookiesPerSecond}</p>

      {/* Renders the upgrades and purchase handler as props */}
      <Upgrades upgrades={upgrades} purchaseUpgrade={handleUpgradePurchase} />
    </div>
  );
};

export default Game;
