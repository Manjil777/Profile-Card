const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const followButton = document.getElementById('follow-button');
const followerCount = document.getElementById('follower-count');
const body = document.body;

let followers = parseInt(localStorage.getItem('followers')) || 0;
followerCount.textContent = `Followers: ${followers}`;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
    } else {
        themeIcon.classList.remove('ri-moon-line');
        themeIcon.classList.add('ri-sun-line');
    }
});

followButton.addEventListener('click', () => {
    if (!localStorage.getItem('followed')) {
        followers++;
        localStorage.setItem('followers', followers);
        localStorage.setItem('followed', true);
        followerCount.textContent = `Followers: ${followers}`;

        let nickname = prompt("Enter your nickname:");
        if (nickname) {
            alert(`Thanks for following, ${nickname}!`);
        }
    } else {
        alert("You've already followed from this browser!");
    }
});