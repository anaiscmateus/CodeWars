/* 8KYU - Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let dnaSequence = dna.split("") // split the string into an array
    let rnaSequence = [] // new empty array to push RNA sequence to
    
    // loop through the DNA sequence
    dnaSequence.forEach(base => {
        if (base === 'T') {
        // if the base is equal to T change it to U
            base = 'U'
            rnaSequence.push(base) // push the new base to rnaSequence
        } else {
        // if not, still push it to rnaSequence
            rnaSequence.push(base)
        }
    })
    return rnaSequence.join("") // return rnaSequence as a string
}

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))