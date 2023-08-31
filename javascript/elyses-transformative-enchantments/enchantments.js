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
  // If the current value is equal to 3, push three copies of the value into the accumulator array
  // Otherwise, push the currentValue into the accumulator array
  // Return the accumulator array
  // Return the newDeck array
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */

export function middleTwo(deck) {}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // Remove the first item from the deck and store it in a variable
  // Remove the last item from the deck and store it in a variable
  // Calculate the middle index of the deck
  // Insert the left and right middle items at the middle index of the deck
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
export function reorder(deck) {}
