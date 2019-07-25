class Macro {
    constructor(protein, carbs, fat) {
        this.protein = protein
        this.carbs = carbs
        this.fat = fat
    }
    getSummary() {
        let summary = `Protein: ${this.protein}. Carb: ${this.carbs}. Fat: ${this.fat}
        Your total daily calories are: ${this.protein + this.carbs + this.fat}`

        return summary


    }
}

const macros = new Macro(9, 10, 11)

console.log(macros.getSummary())

console.log(macros.protein)