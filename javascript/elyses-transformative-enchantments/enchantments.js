/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubledDeck = deck.map((deck) => 2 * deck);
  return doubledDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  // Create a new array called newDeck using the reduce method
  const newDeck = deck.reduce((accumulator, currentValue) => {
    // If the current value is equal to 3, push three copies of the value into the accumulator array
    if (currentValue === 3) {
      accumulator.push(currentValue, currentValue, currentValue);
    }
    // Otherwise, push the currentValue into the accumulator array
    else {
      accumulator.push(currentValue);
    }
    // Return the accumulator array
    return accumulator;
  }, []);
  // Return the newDeck array
  return newDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */

export function middleTwo(deck) {
  return deck.slice(4, 6);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // Remove the first item from the deck and store it in a variable
  let rightMiddleItem = deck.shift();
  // Remove the last item from the deck and store it in a variable
  let leftMiddleItem = deck.pop();
  // Calculate the middle index of the deck
  let middleIndex = Math.floor(deck.length / 2);
  // Insert the left and right middle items at the middle index of the deck
  deck.splice(middleIndex, 0, leftMiddleItem, rightMiddleItem);
  // Return the modified deck
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */

export function twoIsSpecial(deck) {
  /**
   * Filters the given deck array and returns a new array containing only the elements that are equal to 2.
   * @param {number[]} deck - The array to filter.
   * @returns {number[]} - A new array containing only the elements that are equal to 2.
   */
  const result = deck.filter((currentNumber) => currentNumber === 2);
  return result;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */

export function perfectlyOrdered(deck) {
  // Sorts the deck array by comparing b from a and will sort the array in ascending order(if it doesn't contain NaN)
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */

/**
 * Reorders a deck of cards by moving the first card to the bottom of the deck and reversing the order of the remaining cards.
 * @param {Array} deck - An array of cards representing the deck to be reordered.
 * @returns {Array} - The reordered deck of cards.
 */
export function reorder(deck) {
  const firstCard = deck.shift();
  const reversedDeck = deck.reverse();
  deck.push(firstCard);
  return deck;
}
