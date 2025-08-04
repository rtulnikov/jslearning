const displayRating = (rating) => {
  const good = '★'.repeat(rating);
  const bad = good.padEnd(5, '☆');
  return bad;
}

console.log(displayRating(5))