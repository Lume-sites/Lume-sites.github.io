document.addEventListener("DOMContentLoaded", () => {

    const header =
        document.getElementById("header");

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");

    const navLinks =
        document.querySelectorAll(".nav a");

    const faqItems =
        document.querySelectorAll(".faq-item");

    const revealElements =
        document.querySelectorAll(".reveal");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       ANO AUTOMÁTICO
    ====================================================== */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       HEADER
    ====================================================== */

    function updateHeader() {

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =====================================================
       MENU MOBILE
    ====================================================== */

    function openMenu() {

        nav.classList.add("active");

        menuButton.classList.add("active");

        document.body.classList.add(
            "menu-open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Fechar menu"
        );

    }


    function closeMenu() {

        nav.classList.remove("active");

        menuButton.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "menu-open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    }


    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    nav.classList.contains(
                        "active"
                    );

                if (isOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }

            }
        );

    }


    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <=
                    900
                ) {
                    closeMenu();
                }

            }
        );

    });


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth >
                900
            ) {
                closeMenu();
            }

        }
    );


    /* =====================================================
       FAQ
    ====================================================== */

    faqItems.forEach((item) => {

        const button =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );

        if (!button || !answer) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                faqItems.forEach(
                    (otherItem) => {

                        const otherButton =
                            otherItem.querySelector(
                                ".faq-question"
                            );

                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq-answer"
                            );

                        otherItem.classList.remove(
                            "active"
                        );


                        if (otherButton) {

                            otherButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                        if (otherAnswer) {

                            otherAnswer.style.maxHeight =
                                null;

                        }

                    }
                );


                if (!isActive) {

                    item.classList.add(
                        "active"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                }

            }
        );

    });


    /* =====================================================
       ANIMAÇÕES
    ====================================================== */

    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       SCROLL SUAVE
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        href
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target
                        .getBoundingClientRect()
                        .top
                    +
                    window.pageYOffset
                    -
                    headerHeight
                    +
                    1;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });

});