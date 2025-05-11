let header = document.querySelector("header");

window.onscroll = handleHeaderScroll;


function handleHeaderScroll() {
    const scrollY = window.scrollY;
    if (scrollY >= 200) {
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
};


const video = document.getElementById('myVideo');
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
  });



   