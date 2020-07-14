const quiz = document.getElementById("quiz")
const results = document.getElementById("results")
const correct = [
    "Fountain Pen",
    "Leg"
]

let total = 0

quiz.onsubmit = function(e) {
    // Reset total to 0
    total = 0
    
    // Prevent the page from refreshing
    e.preventDefault()
    
    // Get all of the answers
    let answers = quiz.children
    
    // Find which answers are correct
    for (let i = 0; i < answers.length; i++) {
        // If the answer we're looking at is correct and checked,
        // Change the total (score) by 1
        if (correct.includes(answers[i].value) && answers[i].checked) {
            total += 1
        }
        
        // If the answer we're looking at is correct, change color
        if (correct.includes(answers[i].value)) {
            let answer = document.querySelector("label[for="+answers[i].id+"]")
            answer.style.color = "red"
            answer.style.fontWeight = "bold"
        }
        
    }
    
    // Display their total score in the results
    results.innerHTML = "Number correct: " + total
}