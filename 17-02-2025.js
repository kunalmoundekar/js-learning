let profileImage = document.getElementById("profileImage");
let friendText = document.getElementById("Friend-text");



function addFrind() {
    profileImage.src = "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
    friendText.innerHTML = "Friend";
    friendText.style.color = "green";
}

function RemoveFrind() {
    profileImage.src = "https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-17.jpg";
    friendText.innerHTML = "Stranger";
    friendText.style.color = "red";
}



document.getElementById('addFrind').addEventListener("click", addFrind);
document.getElementById('RemoveFrind').addEventListener("click", RemoveFrind);



////////////////////////////////////{card2}///////////////////////////////////////////////////////// 


document.getElementById('toggle-btn').addEventListener("click", function () {
    let friendText = document.getElementById("F-text");
    let profileImage = document.getElementById("c2-profileImage");
    let buttonC2 = document.getElementById('toggle-btn')
    // 
    if (friendText.innerHTML === "Stranger") {
        friendText.innerHTML = "Friend";
        friendText.style.color = "green";
        profileImage.src = "https://www.w3schools.com/w3images/avatar2.png"; // Change image
        buttonC2.innerHTML = "Remove Friend"
        buttonC2.style.backgroundColor= 'red';
    } else {
        friendText.innerHTML = "Stranger";
        friendText.style.color = "red";
        profileImage.src = "https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-17.jpg"
        buttonC2.innerHTML = "Add Friend";
        buttonC2.style.backgroundColor= 'green';

    }
});













