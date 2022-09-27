function check() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var result = document.getElementById('result');
    var quiz = document.getElementById("quiz");
    if (q1 == "JAVASCRIPT") { c++ }
    if (q2 == "DELHI") { c++ }
    if (q3 == "4") { c++ }
    if (q4 == "HTML") { c++ }

    quiz.style.display = "none";
    if (c < 3) {
        result.textContent = `Your result is ${c}/4. It is not good work hard.`
    }
    else {
        result.textContent = `Your result is ${c}/4. Well done!.`

    }
   
}
