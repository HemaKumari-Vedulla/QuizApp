const questions = {
    os: [
        { q: "Which is not an OS?", o: ["Windows", "Linux", "Oracle"], a: 2 },
        { q: "Which is a real-time OS?", o: ["Windows", "RTOS", "DOS"], a: 1 },
        { q: "Which manages resources?", o: ["Compiler", "OS", "Browser"], a: 1 },
        { q: "Linux is a?", o: ["Operating System", "Game", "Software"], a: 0 },
        { q: "Process is?", o: ["Program in execution", "App", "Database"], a: 0 }
    ],

    cn: [
        { q: "TCP stands for?", o: ["Transfer Control Protocol", "Transmission Control Protocol", "Transport Control Process"], a: 1 },
        { q: "HTTP works on?", o: ["Network Layer", "Transport Layer", "Application Layer"], a: 2 },
        { q: "Router works on?", o: ["Data Link", "Network", "Physical"], a: 1 },
        { q: "IPV4 size?", o: ["64 bit", "32 bit", "16 bit"], a: 1 },
        { q: "Protocol for email?", o: ["SMTP", "FTP", "SSH"], a: 0 }
    ],

    dbms: [
        { q: "DBMS means?", o: ["Data Base Management System", "Data Block Model System", "Data Backup System"], a: 0 },
        { q: "SQL stands for?", o: ["Structured Query Language", "Simple Query Language", "Standard Question Language"], a: 0 },
        { q: "Father of DBMS?", o: ["Codd", "Newton", "Charles"], a: 0 },
        { q: "Which is a key?", o: ["Primary Key", "Excel Key", "Chrome Key"], a: 0 },
        { q: "DBMS relation is a?", o: ["Table", "Column", "Form"], a: 0 }
    ],

    java: [
        { q: "Java is?", o: ["Compiled", "Interpreted", "Both"], a: 2 },
        { q: "JVM stands for?", o: ["Java Virtual Machine", "Java Version Model", "Java View Manager"], a: 0 },
        { q: "OOP full form?", o: ["Object Oriented Programming", "Ordered Object Process", "Open Object Protocol"], a: 0 },
        { q: "Java is developed by?", o: ["Google", "Microsoft", "Sun Microsystems"], a: 2 },
        { q: "Constructor is?", o: ["Method", "Variable", "Class"], a: 0 }
    ]
};
let selectedSubject = "";
let currentIndex = 0;
let score = 0;
function startQuiz()
{
    selectedSubject = document.getElementById("subject-select").value;
    if(selectedSubject==="")
    {
        alert("Please select a subject first!");
        return;
    }
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    currentIndex = 0;
    score=0;
    loadQuestion();
}
function loadQuestion()
{
    const qdata = questions[selectedSubject][currentIndex];
    document.getElementById("question").innerText = qdata.q;
    let optionsHTML = "";
    qdata.o.forEach((option,i)=>{
        optionsHTML += `<div class='option' onclick="selectOption(this,${i})">${option}</div>`
    });
    document.getElementById("options").innerHTML=optionsHTML;
}
let selectedOption = -1;
function selectOption(element,index)
{
    selectedOption = index;
    document.querySelectorAll(".option").forEach(opt=>{
        opt.classList.remove("selected");
    });
    element.classList.add("selected");
}
function endQuiz()
{
    if(selectedOption === questions[selectedSubject][currentIndex].a) score++;
    currentIndex++;
    if(currentIndex<5)
    {
        selectedOption=-1;
        loadQuestion();
    }
    else
    {
        document.getElementById("quiz-screen").classList.add("hidden");
        document.getElementById("result-screen").classList.remove("hidden");
        document.getElementById("score").innerText = `Your Score : ${score}/5`;
    }
}
function goHome()
{
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}
