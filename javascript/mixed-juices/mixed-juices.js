// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let duration = 0;

  switch (name) {
    case "Pure Strawberry Joy":
      duration = 0.5;
      break;
    case "Energizer":
      duration = 1.5;
      break;
    case "Green Garden":
      duration = 1.5;
      break;
    case "Tropical Island":
      duration = 3;
      break;
    case "All or Nothing":
      duration = 5;
      break;
    default:
      duration = 2.5;
  }
  return duration;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let currentTotalWedges = 0;
  let wedgeCount = 0;
  let index = 0;

  while (index < limes.length && currentTotalWedges <= wedgesNeeded) {
    switch (limes[index]) {
      case "small":
        wedgeCount = 6;
        break;
      case "medium":
        wedgeCount = 8;
        break;
      case "large":
        wedgeCount = 10;
        break;
      default:
        wedgeCount = 0;
    }
    currentTotalWedges += wedgeCount;
    if (wedgesNeeded !== 0) {
      index++;
    }
  }
  return index;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let totalTime = 0;

  do {
    totalTime += timeToMixJuice(orders[0]);
    orders.shift();
  } while (timeLeft < totalTime);

  return orders;
}