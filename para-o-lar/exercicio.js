class dnaTransformacao {
       paraRna(dna){
        this.dna = dna.split("");
        this.rna = [];
    for (let sequencia of this.dna){
        if (sequencia.toLowerCase() == "g"){
            this.rna.push("C")
        }
       else if (sequencia.toLowerCase() == "c"){
            this.rna.push("G")
        }
        else if (sequencia.toLowerCase() == "t"){
            this.rna.push("A")
        }
        else if (sequencia.toLowerCase() == "a"){
            this.rna.push("U")
        }
          
        }
        return this.rna.join("");
    }
}

let teste = new dnaTransformacao();
console.log(teste.paraRna("C"));
console.log(teste.paraRna("G"));
console.log(teste.paraRna("A"));
console.log(teste.paraRna("T"));
console.log(teste.paraRna("ACGTGGTCTTAA"));



