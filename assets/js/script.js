countEl = document.getElementById("count-down");
msg = document.getElementById("#msg");
function countdown() {
    var count = countEl.innerText;
    var timeInterval = setInterval(function () {

        if (count > 0) {
            countEl.textContent = count;
            count--;
        }
        else if (count === 0) {
            countEl.textContent = "Times up";
            clearInterval(timeInterval);
            //document.msg.innerHTML = `
            //<div class="alert alert-success col-lg-6 align-self-center container" role="alert">
            //    <h4 class="alert-heading">Well done!</h4>
             //   <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            //    <hr>
            //    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            //</div>`
        }
    }, 1000);
}

countdown()

var txt = `q-What is 2+50.
w-56.
w-25.
a-52.
w-48.
/
q-what is 2+2.
a-4.
w-3.
w-2.
w-1.
/
q-100 % 2.
w-56.
w-25.
a-50.
w-48.
/
this is just a test.
w-56.
w-25.
a-50.
w-48.
`
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")
let question = document.getElementById("question")
arr = txt.split("/");

button1.addEventListener('click', () => {
    update();
});

function update(){
    x = Math.floor(Math.random() * arr.length);
    let output = arr[x]
    arr.splice(x, 1)
    content = output.split(".")
    console.log(content)
    question.innerText = content[0];
    button1.innerText = content[1];
    button2.innerText = content[2]
    button3.innerText = content[3];
    button4.innerText = content[4];
    
}





