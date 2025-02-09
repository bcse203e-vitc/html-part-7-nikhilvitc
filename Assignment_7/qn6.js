function findDuplicates(arr) {
  let duplicates = [];
  let unique = new Set();

  arr.forEach(item => {
    if (unique.has(item)) {
      if (!duplicates.includes(item)) {
        duplicates.push(item);
      }
    } else {
      unique.add(item);
    }
  });

  console.log("Duplicates: " + duplicates.join(', '));
  return [...unique];
}
