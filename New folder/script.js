// var btn = document.getElementById("btn");

// btn.addEventListener('click',(e) => {
//          e.preventDefault();
//          var one = parseInt(document.getElementById("one").value);
//          var two = parseInt(document.getElementById("two").value);

//     var sum = one + two ;
//     console.log(sum);
// 

// tm.addEventListener('click', () => {

//     var hour = parseInt(document.getElementById("time").value);

//     if (hour >=6 && hour < 12){
//         alert('Good morning');
//     }
//     else if (hour >= 12 && hour < 18){
//         alert('Good Afternoon');
//     }
//     else
//     alert('Good evening');
// })



//     var i= parseInt(document.getElementById("one").value);
//     for(  i=0;i<=10;i++){
//     if(i == 4);
//     break;
//  }
    // FileSystem.out.println(i);
    
    //var p = document.createElement("root").value;

    // var myDiv = document.getElementById("root");
    // var p = document.createElement("p");

    // p.innerHTML = "Hello world";
    // p.classList = (" hello");
    // src=

    // myDiv.append(p);
    //  var btn = document.getElementById("btn-1");
    //  var nav = document.getElementById("nav");
    //   btn.addEventListener("click",(e) => {
    //     e.preventDefault();
    //     if(nav.style.visibility == "visible"){
    //         nav.style.visibility = "hidden";
    //     }
    //     else{
    //         nav.style.visibility = "visible"
    //     }
    //   })
    // FOR EMAIL AND PASSWORD 

    
const btn = document.getElementById('btn');
var email = document.getElementById("email");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    var email_value = document.getElementById('one').value;
    var length = email_value.length;
    if(length < 6) {
        email.classList.add("active");
    }
    if(length < 8){
        password.classList.add("active");
    }
})
var one = document.getElementById("one");
var label = document.getElementById("label");
var msg = document.getElementById("msg");
function validateEmail(){
    if(!one.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        msg.innerHTML = "Please enter a valid email";
        return false;
    }
    msg.innerHTML = "";
    return true;
}
    
``