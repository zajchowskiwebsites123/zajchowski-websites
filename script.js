const elements = document.querySelectorAll(
    ".section, .card, .cta, .process div, .page-header"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach(element => {
    element.classList.add("fade-in");
    observer.observe(element);
});

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", function(){
        document.body.style.opacity = "0.95";
    });
});
const year = new Date().getFullYear();
const footerYear = document.querySelector("footer p");
if(footerYear){
    footerYear.innerHTML = 
    '&copy; 2026 Zajchowski Websites. Wszystkie prawa zastrzeżone.';
}
