// scroll smooth
const navbar = document.querySelector("nav");
let prevScroll = window.scrollY;

window.addEventListener('scroll', function (e) {
    let currentScroll = this.scrollY

    if (prevScroll > currentScroll) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
    prevScroll = currentScroll;
});

// typing
const typing = new Typed(".typing", {
    strings: ["student", "web developer", "designer", "content creator"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});

// show menu items / menu list
const menu = document.querySelector('nav .menu');
const menuToggle = document.querySelector('.menu-toggle input');
const otherMenuItems = document.querySelectorAll('nav .menu a:not(:first-child)');

menuToggle.addEventListener('click', function () {
    // delay awal
    let delay = 300;

    menu.classList.toggle('slide');

    otherMenuItems.forEach((menuItem, index) => {
        setTimeout(() => {
            menuItem.classList.toggle('slide');
        }, delay);
        delay += 200;
    });
});


// animate home section
const profileImg = document.querySelector('.home-content .profile-img');
const homeText = document.querySelector('.home-content .text-content');

window.addEventListener('DOMContentLoaded', (e) => {
    profileImg.style.opacity = '1';
    profileImg.style.transform = 'translateX(0)';

    homeText.style.opacity = '1';
    homeText.style.transform = 'translateX(0)';


    // function fadeInElement() {
    //     profileImg.style.transform = 'translateY(0)';
    // }
    // setTimeout(fadeInElement, 500);

    const url = 'https://counterpro.vercel.app/api/count/?id=hamdanzull-portfolio';
    const visits = document.getElementById('visits')

    // Get visitor counts
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                // console.log(response);
                visits.innerText = response.count;
            }
        }
    };
    xhr.send();
});





// // change bg color for item selected
// const menuItems = document.querySelectorAll('.menu a');

// menuItems.forEach(item => {
//     item.addEventListener('click', function () {
//         menuItems.forEach(item => {
//             item.style.backgroundColor = '';
//         });

//         this.style.backgroundColor = '#5d6581';

//         // close list menu item
//         // then click on mobile
//         menuToggle.click()

//     });
// });


// get all element menu
const menuItems = document.querySelectorAll('.menu a');

// auto close menu
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuToggle.click()
    });
});

// Buat fungsi untuk menangani perubahan warna saat scroll
function changeColorOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            menuItems.forEach(item => {
                item.style.backgroundColor = ''; // Reset warna menu
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.style.backgroundColor = '#39425c'; // Ubah warna menu saat scroll masuk ke bagian tertentu
                }
            });
        }
    });
}

window.addEventListener('scroll', changeColorOnScroll);

changeColorOnScroll();


