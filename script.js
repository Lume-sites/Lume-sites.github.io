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

    const trackedWhatsappLinks =
        document.querySelectorAll(
            '[data-track="whatsapp"]'
        );


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

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

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

        if (!nav || !menuButton) {
            return;
        }

        nav.classList.add(
            "active"
        );

        menuButton.classList.add(
            "active"
        );

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

        if (!nav || !menuButton) {
            return;
        }

        nav.classList.remove(
            "active"
        );

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


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {

                closeMenu();

            }

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (
                !nav ||
                !menuButton ||
                !nav.classList.contains(
                    "active"
                )
            ) {

                return;

            }

            if (
                !nav.contains(
                    event.target
                ) &&
                !menuButton.contains(
                    event.target
                )
            ) {

                closeMenu();

            }

        }
    );


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

    faqItems.forEach(
        (item, index) => {

            const button =
                item.querySelector(
                    ".faq-question"
                );

            const answer =
                item.querySelector(
                    ".faq-answer"
                );

            if (
                !button ||
                !answer
            ) {

                return;

            }


            const answerId =
                `faq-answer-${index + 1}`;


            answer.id =
                answerId;


            button.setAttribute(
                "aria-controls",
                answerId
            );


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


                            if (
                                otherButton
                            ) {

                                otherButton.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }


                            if (
                                otherAnswer
                            ) {

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

        }
    );


    /* =====================================================
       ANIMAÇÕES
    ====================================================== */

    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

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


    internalLinks.forEach(
        (link) => {

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


                    const prefersReducedMotion =
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            prefersReducedMotion
                                ? "auto"
                                : "smooth"

                    });

                }
            );

        }
    );


    /* =====================================================
       CLIQUES NO WHATSAPP

       Cada botão pode ter:
       data-track="whatsapp"
       data-placement="hero"

       Exemplos de placement:
       hero
       preco
       cta-final
       whatsapp-flutuante

       Isso deixa os CTAs preparados para
       medição de eventos no futuro.
    ====================================================== */

    trackedWhatsappLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    const placement =
                        link.dataset
                            .placement
                        ||
                        "desconhecido";


                    window.dispatchEvent(

                        new CustomEvent(
                            "lume:whatsapp-click",
                            {

                                detail: {
                                    placement
                                }

                            }
                        )

                    );


                    if (
                        Array.isArray(
                            window.dataLayer
                        )
                    ) {

                        window.dataLayer.push({

                            event:
                                "whatsapp_click",

                            placement:
                                placement

                        });

                    }

                }
            );

        }
    );

});