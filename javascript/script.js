// javascript responsive navigation
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// javascript form validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push('Name is required');
    }

    if(email.value === '' || email.value == null){
        messages.push('email is required');
    }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})

// javascript banner automatic slide
var i = 0;
var image = [];
var time = 3000;

image[0] = 'css/banner1.jpg';
image[1] = 'css/banner2.jpg';
image[2] = 'css/banner3.jpg';
image[3] = 'css/banner1.jpg';
image[4] = 'css/banner2.jpg';
image[5] = 'css/banner3.jpg';

function changeImg(){
    document.slide.src = image[i];

    if (i < image.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()",time);

}
window.onload = changeImg;