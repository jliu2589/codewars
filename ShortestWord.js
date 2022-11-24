// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let a = s.split(/[\b ]/g);
  let c = a.filter((word) => {
    return word !== ' ';
  });
  let b = Math.min(...c.map((el) => el.length));
  return b;
}
