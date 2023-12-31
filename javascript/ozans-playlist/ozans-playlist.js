// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { forEach } from "core-js/core/array";

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return new Array(...new Set([...playlist]));
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return new Set([...playlist]).has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const uniqueSet = new Set([...playlist]);
  return new Array(...uniqueSet.add(track));
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const newSet = new Set(playlist);
  newSet.delete(track);
  return [...newSet];
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const newSet = new Set();

  for (const item of playlist) {
    const artistName = item.split(" ").slice(-2).join(" ");
    newSet.add(artistName);
  }
  return [...newSet];
}
// Alternative solution ----------------------->
// export function listArtists(playlist) {
//   const artistSet = new Set(playlist.map(item => item.split(" ").slice(-2).join(" ")));
//   return [...artistSet];
// }
