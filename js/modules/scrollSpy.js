export const scrollSpy = () => {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");

    const callback = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                document
                    .querySelector(`a[data-scroll-spy][href="#${id}"]`)
                    .classList.add("active");
            } else {
                document
                    .querySelector(`a[data-scroll-spy][href="#${id}"]`)
                    .classList.remove("active");
            }
        });
    };

    const options = {
        // root: null,
        // rootMargin: "0px",
        threshold: 1,
    };

    const observer = new IntersectionObserver(callback, options);
    $sections.forEach((el) => observer.observe(el));

};
