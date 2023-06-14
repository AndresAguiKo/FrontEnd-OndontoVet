

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

const activeClassName = 'active'

function removeClasss() {
    navlinks.forEach(link => {
        link.classList.remove(activeClassName)
    })
}

function handleClick(element) {
  removeClasss();
  element.classList.add(activeClassName)
}


const toggleClass = () => {
    navlinks.forEach(link => {
        link.addEventListener('click', () => handleClick(link));
    });
}

toggleClass();

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -  150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                link.classList.add('active');
            });
        };
    });
};