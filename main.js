let score = 0;

// function submitAnswers() {
    // How to make a function submit button that will loop through question answers below then display background color change
    // How to add a results feature to the top of the quiz using the results div
    const submitButton = document.getElementById('button')
    submitButton.addEventListener('click', () => {
        for (let i=0; i<questionTemplate.length; i++) {
            check(i)
        }
        const resultsPrint = document.getElementsByClassName('results')[0]
        // .querySelector('.results') === .getElementsByClassName('results')[0]
        resultsPrint.innerHTML = `
        <h2>Your Score:</h2>
        <br>
        <h4>${score} out of 14</h4>
    `
    })

function check(question){
    // Should I add a "for loop" to loop through these question answers?
    
        let answer = document.getElementById(`text-field${question + 1}`)
        const currentBoxEl = document.getElementById(`box${question + 1}`)
        if (answer.value === questionTemplate[question].answers) {
        console.log("Correct")
        currentBoxEl.style.backgroundColor = "rgba(43,174,40,0.5)";
        score += 1
        } else { 
        console.log("Incorrect")
        currentBoxEl.style.backgroundColor = 'rgba(186,33,33,0.5)';
        } 
}

const questionTemplate = [
    {
        "question": "1. Question One",
        "questionInfo": "What Pokemon does Pikachu evolve into?",
        "answers": "Raichu"
    },
    {
        "question": "2. Question Two",
        "questionInfo": "What is the most effective Poke Ball in the Pokemon games?",
        "answers": "Master Ball"
    },
    {
        "question": "3. Question Three",
        "questionInfo": "How many Gym Badges must a trainer collect before challenging the Elite Four?",
        "answers": "8"
    },
    {
        "question": "4. Question Four",
        "questionInfo": "What's the device trainers use to keep a record of their Pokemon encounters?",
        "answers": "Pokedex"
    },
    {
        "question": "5. Question Five",
        "questionInfo": "If you need to buy supplies in the Pokemon world, where do you go?",
        "answers": "Poke Mart"
    },
    {
        "question": "6. Question Six",
        "questionInfo": "If you need to revive your fainted Pokemon to full health, where do you go?",
        "answers": "Poke Center"
    },
    {
        "question": "7. Question Seven",
        "questionInfo": "What are the three types of starter Pokemon?",
        "answers": "Grass, Water, Fire"
    },
    {
        "question": "8. Question Eight",
        "questionInfo": "What Pokemon type has no effect on a Normal type?",
        "answers": "Ghost"
    },
    {
        "question": "9. Question Nine",
        "questionInfo": "What type of evolution stone evolves grass types?",
        "answers": "Leaf Stone"
    },
    {
        "question": "10. Question Ten",
        "questionInfo": "What type are Flying types immune to?",
        "answers": "Ground"
    },
    {
        "question": "11. Question Eleven",
        "questionInfo": "Who is the professor for the Kanto region?",
        "answers": "Professor Oak"
    },
    {
        "question": "12. Question Twelve",
        "questionInfo": "Who is the god of all Pokemon?",
        "answers": "Arceus"
    },
    {
        "question": "13. Question Thirteen",
        "questionInfo": "What does the ability Intimidate do in the Pokemon games?",
        "answers": "Lowers Attack"
    },
    {
        "question": "14. Question Fourteen",
        "questionInfo": "What held item in the Pokemon games allows your pokemon to recieve health every turn?",
        "answers": "Leftovers"
    }
]