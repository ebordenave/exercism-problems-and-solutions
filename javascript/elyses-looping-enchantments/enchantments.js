// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardTypeCount = 0;

  stack.forEach((cardType) => {
    (cardType == card) ? cardTypeCount++ : 0;
  })
  return cardTypeCount
}


/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let evenCardTypeCount = 0;
  let oddCardTypeCount = 0;

  for (const card of stack) {
    (card % 2 === 0 && type === true) ? evenCardTypeCount += 1 : (card % 2 !== 0 && type === false) ? oddCardTypeCount += 1 : null
  }
  return (!!evenCardTypeCount) ? evenCardTypeCount : oddCardTypeCount
}
