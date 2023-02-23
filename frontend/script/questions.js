let question_div = document.getElementById("question");
localStorage.setItem("question_id", "63f770317106ebe4aa985271")
let question_id = localStorage.getItem("question_id");

async function get_question(id){
    try {
        let question = await fetch(`http://localhost:8000/questions/${id}`);
        let res = await question.json();
        renderQuestion(res)
    } catch (error) {
        console.log(error)
    }
};

function renderQuestion(question){
    let name = document.createElement("p");
    name.innerText = question.name;
    let h1 = document.createElement("h1");
    h1.innerText = question.question.heading;
    let p = document.createElement("p");
    p.innerText = question.question.discreption;
    let posted = document.createElement("p");
    let date = new Date(question.posted)
    posted.innerText = `posted: ${date.toLocaleString()}`;
    question_div.append(name, h1, p, posted)

}

get_question(question_id)