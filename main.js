class Macro {
    constructor(protein, carbs, fat) {
        this.protein = protein
        this.carbs = carbs
        this.fat = fat
    }
    getSummary() {
        let summary
        Number(this.protein)
        Number(this.carbs)
        Number(this.fat)
        let total = (Number(this.protein) * 4) + (Number(this.carbs) * 4) + (Number(this.fat) * 9)
        if (this.protein && this.carbs && this.fat) {
            summary = `Protein: ${this.protein} g. Carb: ${this.carbs} g. Fat: ${this.fat} g.
            Your total daily calories are: ${total}`

            return summary
        }
        else {
            summary = 'fill out all text boxes for your macros.'
            return summary
        }

    }
}
let macros
// Creates a new macro object for the user to interact with
const getMacro = () => {
    macros = new Macro
    return macros
}

getMacro()

const foodInput = document.querySelector('#add-food')
const carbInput = document.querySelector('#add-carb')
const proteinInput = document.querySelector('#add-protein')
const fatInput = document.querySelector('#add-fat')
const carbButton = document.querySelector('.carb-button')
const proteinButton = document.querySelector('.protein-button')
const fatButton = document.querySelector('.fat-button')

const carbOutput = document.querySelector('.carb-output')
const proteinOutput = document.querySelector('.protein-output')
const fatOutput = document.querySelector('.fat-output')

const dailySummary = document.querySelector('.calorie-summary')
const foodItem = document.querySelector('#food-item')


//Add the food 
foodInput.addEventListener(keypress, (e) =>
    foodItem.innerHTML = e.target.value)

//Global variable conversions
//Conversion types
// 1 fat = 9 calories
// 1 carb = 4 calories
// 1 protein = 4 calories



//daily goal



//Conversion functions
function convertCarbs() {
    const input = carbInput.value
    macros.carbs = input
    carbOutput.innerHTML = `Calories: ${input * 4} `
    displayMacros()
}

function convertProteins() {
    const input = proteinInput.value
    macros.protein = input
    proteinOutput.innerHTML = `Calories: ${input * 4} `
    displayMacros()

}
function convertFats() {
    const input = fatInput.value
    macros.fat = input
    fatOutput.innerHTML = `Calories: ${input * 9} `
    displayMacros()

}


//Update macros and display function
const displayMacros = () => dailySummary.innerHTML = macros.getSummary()
// carbInput.addEventListener('input', (e) => {
//     console.log(carb * e.target.value)
//     carb = carb * e.target.value
//     return carb
// })


// // Add user input
// carbButton.addEventListener('click', (carb) => {
//     output.innerHTML = `Calories: ${carb}`
// })
// proteinButton.addEventListener('click', () => {
//     macro = protein
//     output.innerHTML = `Calories: ${macro} * 4`
// })
// fatButton.addEventListener('click', (calories) => {
//     output.innerHTML = 'Calories: ${calories}'
// })





//Summary: Protein, carbs, fats, total calories
