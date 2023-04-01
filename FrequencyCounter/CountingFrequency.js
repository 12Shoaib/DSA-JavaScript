const arr = [12,34,56,34,12]

let frequency = {} 

for(let element of arr) {
    frequency[element] = (frequency[element] || 0) +1
}

console.log(frequency)