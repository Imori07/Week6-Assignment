// Renders the list of available upgrades and allows the user to purchase them.
// The props used:
// - upgrades: Array of upgrades, each including an id, name, cost and cps
// - purchaseUpgrade: A function to handle the purchasing of an upgrade
import "./Upgrades.css";

const Upgrades = ({ upgrades, purchaseUpgrade }) => (
  <div>
    <h2>Upgrades</h2>

    {/* List of upgrades */}
    <ul>
      {upgrades.map((upgrade) => (
        <li key={upgrade.id}>
          {/* Display the upgrade name */}
          <span>{upgrade.name}</span>
          <button onClick={() => purchaseUpgrade(upgrade)}>
            Buy ({upgrade.cost} cookies)
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Upgrades;
