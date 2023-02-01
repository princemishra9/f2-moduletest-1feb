document.getElementById("image2").disabled = true;
document.getElementById("image3").disabled = true;
document.getElementById("image4").disabled = true;
 
let displayArray = [];
let diceScore = [];
 


let at = 2;
let totalScore = 0;
let totaldikeClicked = 3;

 

function signupform() {
    document.getElementById('form').classList.remove('hidden');
}
 
//-----------------------------xxxxxxxxxxx--- formsubmitfunction()--------------------------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------
function signinForm() {
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    if (name && username && email) {
        let obj = {
            Name: name,
            UserName: username,
            Email: email,
        }
 
        displayArray.push(obj);
        document.getElementById("image2").disabled = false;
        document.getElementById("image1").disabled = true;
        alert('form is Submitted successfully!!! Click on  image2 to go next .')
        document.getElementById('form').classList.add('hidden');
       
    } else {
        alert('fill form correctly.')
    }
}
 
 
//-------------xxxxxxxxxxxxxxx--------- Image 2 Function()-----------------xxxxxxxx------------------xxxxxxxxxxxxxxxxxx-
function registrationform() {
    document.getElementById('info').innerText = `Name:${displayArray[0].Name}, User Name:${displayArray[0].UserName}, Email:${displayArray[0].Email}`
    document.getElementById('usernameinfo').classList.remove('hidden');
    document.getElementById("image3").disabled = false;
    document.getElementById("image2").disabled = true;
}
 
// Image 3-x-x-xxxxxxxxxxxxxxxx------Function()-----------------------------------------xxxxxxxxx------------------------------xxxxxx---------------------------------
function dicescore() {
    document.getElementById('usernameinfo').classList.add('hidden');
    at--;
    console.log(`attempt remaining= ${at}`);
    document.getElementById('attemptsLeft').innerText = at;
    document.getElementById('dice-Score').classList.remove('hidden');
    document.getElementById("").disabled = true;
 
}
 
//-------------------------xxxxxxxxxxxxxxxxxxx------------------- diceclick-----------------------xxxxxxxxx--------------------------------------------------- -function()
 
function diceClick() {
    totaldikeClicked --;
    document.getElementById('diceClicks').innerText = totaldikeClicked ;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;
  
    if (totaldikeClicked === 0 ) {
        document.getElementById("diceimage").disabled = true;
        document.getElementById('score').innerText = totalScore;
        if (totalScore >= 10) {
            alert('Congratulations. Your total score is more than 10/ Click on nxt image to secure coupon code');
            document.getElementById('dice-Score').classList.add('hidden');
            document.getElementById("image4").disabled = false;
        } else {
            if (at!= 0) {
               
                alert(' Your score is less than 10  Try again!');
                document.getElementById("image3").disabled = false;
                totaldikeClicked = 3;
                totalScore = 0;
                document.getElementById('diceimage').disabled = false;
                document.getElementById('dice-Score').classList.add('hidden');
                console.log('totaldikeClicked  = ${totaldikeClicked }');
                console.log('totalScore = ${totalScore}');
 
            } else {
                document.getElementById('score').innerText = totalScore;
                alert(' Bad--luck ! You have exausted all your attempts phir se try kr lr bhai');
            }
        }
    }
}
 
// -------image-4----------------------------------------------- Function()------------------------------------------------------
 
function generatecoupon() {
    document.getElementById("image4").disabled = true;
    var token = '';
    for (let i = 0; i < 12; i++) {
        token += Math.floor(Math.random() * 10);
    }
    alert('Congratulation You have successfully!! generated coupon. Your coupon code is ${token}')
}