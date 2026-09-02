document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       BLOQUEIA TRADUÇÃO AUTOMÁTICA DO NAVEGADOR
    ====================================================== */

    document.documentElement.setAttribute(
        "translate",
        "no"
    );

    document.documentElement.classList.add(
        "notranslate"
    );

    document.body.setAttribute(
        "translate",
        "no"
    );

    document.body.classList.add(
        "notranslate"
    );


    let noTranslateMeta =
        document.querySelector(
            'meta[name="google"]'
        );


    if (!noTranslateMeta) {

        noTranslateMeta =
            document.createElement(
                "meta"
            );


        noTranslateMeta.setAttribute(
            "name",
            "google"
        );


        document.head.appendChild(
            noTranslateMeta
        );

    }


    noTranslateMeta.setAttribute(
        "content",
        "notranslate"
    );


    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const header =
        document.getElementById(
            "header"
        );

    const menuButton =
        document.getElementById(
            "menuButton"
        );

    const nav =
        document.getElementById(
            "nav"
        );

    const currentYear =
        document.getElementById(
            "currentYear"
        );

    const languageToggle =
        document.getElementById(
            "languageToggle"
        );

    const languageOptions =
        document.querySelectorAll(
            "[data-language-option]"
        );


    /* =====================================================
       IDENTIFICA A PÁGINA
    ====================================================== */

    const fileName =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const pages = {

        "privacidade.html": {
            language:
                "pt",

            counterpart:
                "privacy.html"
        },


        "privacy.html": {
            language:
                "en",

            counterpart:
                "privacidade.html"
        },


        "termos.html": {
            language:
                "pt",

            counterpart:
                "terms.html"
        },


        "terms.html": {
            language:
                "en",

            counterpart:
                "termos.html"
        }

    };


    const page =
        pages[fileName];


    if (!page) {
        return;
    }


    /* =====================================================
       IDIOMA HTML
    ====================================================== */

    document.documentElement.lang =
        page.language === "en"
            ? "en"
            : "pt-BR";


    /* =====================================================
       BOTÃO PT / EN
    ====================================================== */

    languageOptions.forEach(
        (option) => {

            option.classList.toggle(
                "is-active",
                option.dataset.languageOption ===
                    page.language
            );

        }
    );


    if (languageToggle) {

        languageToggle.setAttribute(
            "aria-label",
            page.language === "en"
                ? "Mudar site para português"
                : "Switch website to English"
        );


        languageToggle.setAttribute(
            "aria-pressed",
            page.language === "en"
                ? "true"
                : "false"
        );


        languageToggle.addEventListener(
            "click",
            () => {

                const nextLanguage =
                    page.language === "en"
                        ? "pt"
                        : "en";


                try {

                    localStorage.setItem(
                        "lume-language",
                        nextLanguage
                    );

                } catch (error) {

                    // Continua funcionando
                    // sem localStorage.

                }


                window.location.href =
                    page.counterpart;

            }
        );

    }


    /* =====================================================
       SALVA IDIOMA ATUAL
    ====================================================== */

    try {

        localStorage.setItem(
            "lume-language",
            page.language
        );

    } catch (error) {

        // Continua funcionando
        // sem localStorage.

    }


    /* =====================================================
       ANO
    ====================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       HEADER
    ====================================================== */

    if (header) {

        header.classList.add(
            "scrolled"
        );

    }


    /* =====================================================
       MENU MOBILE
    ====================================================== */

    function openMenu() {

        if (
            !nav ||
            !menuButton
        ) {
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
            page.language === "en"
                ? "Close menu"
                : "Fechar menu"
        );

    }


    function closeMenu() {

        if (
            !nav ||
            !menuButton
        ) {
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
            page.language === "en"
                ? "Open menu"
                : "Abrir menu"
        );

    }


    if (
        menuButton &&
        nav
    ) {

        menuButton.addEventListener(
            "click",
            () => {

                if (
                    nav.classList.contains(
                        "active"
                    )
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
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

});