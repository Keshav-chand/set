let primes= new Set([2,4,6,8,10,12,14]);

console.log(primes.size);

primes.add(16);
console.log(primes);

primes.delete(16);
console.log(primes);

console.log(primes.has(8));
