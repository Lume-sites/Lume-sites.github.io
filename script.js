document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCRIPT PRINCIPAL — HOME
       A Home usa este script.
       Privacidade/Termos usam legal-language.js.
    ====================================================== */

    const currentFile = window.location.pathname.split("/").pop().toLowerCase();
    const legalPages = ["privacidade.html", "privacy.html", "termos.html", "terms.html"];

    if (legalPages.includes(currentFile)) {
        return;
    }

    /* =====================================================
       BLOQUEIA TRADUÇÃO AUTOMÁTICA DO NAVEGADOR
    ====================================================== */

    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
    document.body.setAttribute("translate", "no");
    document.body.classList.add("notranslate");

    let noTranslateMeta = document.querySelector('meta[name="google"]');

    if (!noTranslateMeta) {
        noTranslateMeta = document.createElement("meta");
        noTranslateMeta.setAttribute("name", "google");
        document.head.appendChild(noTranslateMeta);
    }

    noTranslateMeta.setAttribute("content", "notranslate");

    /* =====================================================
       CORREÇÃO MOBILE — SAFARI / IPHONE

       O Safari pode restaurar a posição anterior da página
       e fazer a Home abrir no meio da Hero.

       No celular, quando não existe uma âncora explícita,
       sempre começamos no topo.
    ====================================================== */

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    function resetMobileInitialScroll() {
        const isMobile = window.matchMedia("(max-width: 620px)").matches;

        if (isMobile && !window.location.hash) {
            window.scrollTo(0, 0);
        }
    }

    resetMobileInitialScroll();
    requestAnimationFrame(resetMobileInitialScroll);

    window.addEventListener("pageshow", () => {
        resetMobileInitialScroll();
        setTimeout(resetMobileInitialScroll, 60);
    });

    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const header = document.getElementById("header");
    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav a");
    const faqItems = document.querySelectorAll(".faq-item");
    const revealElements = document.querySelectorAll(".reveal");
    const currentYear = document.getElementById("currentYear");
    const languageToggle = document.getElementById("languageToggle");
    const languageOptions = document.querySelectorAll("[data-language-option]");
    const trackedWhatsappLinks = document.querySelectorAll('[data-track="whatsapp"]');

    /* =====================================================
       TRADUÇÕES DA HOME
    ====================================================== */

    const translations = {

        "Pular para o conteúdo":
            "Skip to content",

        "Início":
            "Home",

        "Seu site":
            "Your website",

        "Por que a Lume":
            "Why Lume",

        "Como funciona":
            "How it works",

        "Portfólio":
            "Portfolio",

        "Preço":
            "Price",

        "Dúvidas":
            "FAQ",

        "Quero meu site":
            "I want my website",

        "Privacidade":
            "Privacy",

        "Termos":
            "Terms",

        "A Lume":
            "About Lume",

        "Termos de Serviço":
            "Terms of Service",

        "Política de Privacidade":
            "Privacy Policy",

        "Fale com a Lume":
            "Talk to Lume",

        "Voltar para o site":
            "Back to the website",

        "← Voltar para o site":
            "← Back to the website",

        "Sites profissionais para pequenos negócios.":
            "Professional websites for small businesses.",

        "Lume. Todos os direitos reservados.":
            "Lume. All rights reserved.",

        "Menu principal":
            "Main navigation",

        "Abrir menu":
            "Open menu",

        "Fechar menu":
            "Close menu",

        "Lume - Página inicial":
            "Lume - Home page",

        "Telefone / WhatsApp":
            "Phone / WhatsApp",

        "E-mail":
            "Email",


        /* =================================================
           HERO
        ================================================= */

        "Sites para pequenos negócios":
            "Websites for small businesses",

        "Sites que iluminam ideias e geram resultados.":
            "Websites that illuminate ideas and drive results.",

        "Seu negócio":
            "Your business",

        "merece ser visto.":
            "deserves to be seen.",

        "Criamos sites profissionais para apresentar seu negócio, transmitir confiança e transformar visitantes em contatos pelo WhatsApp.":
            "We create professional websites to showcase your business, build trust, and turn visitors into WhatsApp leads.",

        "pagamento único":
            "one-time payment",

        "até 7 dias úteis*":
            "up to 7 business days*",

        "Ver o que está incluso":
            "See what is included",

        "1 ano de domínio incluído":
            "1 year of domain included",

        "Sem mensalidade de hospedagem":
            "No monthly hosting fee",

        "Celular, tablet e computador":
            "Mobile, tablet and desktop",

        "*Prazo contado após o recebimento de todo o material necessário.":
            "*Timeline starts after we receive all required materials.",

        "seunegocio.com.br":
            "yourbusiness.com",

        "Seu Negócio":
            "Your Business",

        "Sem mensalidade":
            "No monthly fee",

        "hospedagem sem cobrança mensal":
            "hosting with no monthly charge",

        "Direto para o WhatsApp":
            "Straight to WhatsApp",

        "facilite novos contatos":
            "make it easier to get new leads",


        /* =================================================
           PRESENÇA DIGITAL
        ================================================= */

        "Sua presença digital":
            "Your digital presence",

        "Seu negócio já está na internet.":
            "Your business is already online.",

        "Mas está do jeito certo?":
            "But is it presented the right way?",

        "Antes de entrar em contato, muita gente pesquisa uma empresa na internet. Um site profissional ajuda seu negócio a transmitir confiança e deixa tudo o que o cliente precisa encontrar em um só lugar.":
            "Before getting in touch, many people search for a business online. A professional website helps your business build trust and puts everything customers need in one place.",

        "Tudo espalhado?":
            "Is everything scattered?",

        "Instagram, WhatsApp, endereço, horários e serviços em lugares diferentes dificultam a vida do cliente.":
            "Instagram, WhatsApp, address, opening hours and services in different places make things harder for customers.",

        "Falta uma apresentação profissional?":
            "Missing a professional presentation?",

        "Um site bem apresentado ajuda seu negócio a transmitir mais confiança para quem está conhecendo sua empresa.":
            "A well-presented website helps your business inspire more confidence in people discovering your company.",

        "Quer facilitar novos contatos?":
            "Want to make new enquiries easier?",

        "Organizamos suas informações e conduzimos o visitante até o canal mais importante: uma conversa com você.":
            "We organize your information and guide visitors to the most important channel: a conversation with you.",


        /* =================================================
           O QUE FAZEMOS
        ================================================= */

        "O que fazemos":
            "What we do",

        "Um espaço só seu":
            "A space of your own",

        "na internet.":
            "online.",

        "Criamos sites profissionais para apresentar sua empresa, seus serviços, seus diferenciais e facilitar o contato dos clientes com você.":
            "We create professional websites to present your company, services and strengths, while making it easy for customers to contact you.",

        "Você envia as informações, fotos e identidade visual. A Lume cuida da organização, do design, da construção, da configuração e da publicação.":
            "You send us your information, photos and visual identity. Lume takes care of the organization, design, development, setup and publishing.",

        "Conhecer o Pacote Lume":
            "Explore the Lume Package",

        "Visual profissional":
            "Professional design",

        "Um design pensado para combinar com a identidade e o estilo do seu negócio.":
            "A design created to match your business identity and style.",

        "O site se adapta aos principais tamanhos de tela e dispositivos.":
            "Your website adapts to the main screen sizes and devices.",

        "Foco no WhatsApp":
            "WhatsApp-focused",

        "O objetivo é facilitar para quem visita seu site entrar em contato com seu negócio.":
            "The goal is to make it easy for website visitors to contact your business.",

        "O site é publicado em uma estrutura que não exige mensalidade de hospedagem.":
            "Your website is published on an infrastructure that does not require a monthly hosting fee.",


        /* =================================================
           PROPOSTA
        ================================================= */

        "Nossa proposta":
            "Our approach",

        "Não fazemos loja virtual.":
            "We do not build online stores.",

        "Fazemos seu cliente falar com você.":
            "We help customers start a conversation with you.",

        "O Pacote Lume é voltado para sites institucionais, de apresentação e geração de contatos. Não desenvolvemos lojas virtuais com carrinho, checkout ou pagamento online.":
            "The Lume Package is designed for business presentation websites and lead generation. We do not build online stores with carts, checkout or online payments.",

        "Nosso foco é organizar as informações do seu negócio de forma profissional e conduzir o visitante até um contato direto com você.":
            "Our focus is to organize your business information professionally and guide visitors toward direct contact with you.",

        "Quero saber se serve para meu negócio":
            "See if it works for my business",


        /* =================================================
           O QUE PODE TER
        ================================================= */

        "Do seu jeito":
            "Built around your business",

        "O que seu site":
            "What can your website",

        "pode ter?":
            "include?",

        "Cada negócio é diferente. Por isso, organizamos o conteúdo de acordo com aquilo que seus clientes realmente precisam encontrar.":
            "Every business is different. That is why we organize the content around what your customers actually need to find.",

        "Apresentação da empresa":
            "Company presentation",

        "Produtos ou serviços":
            "Products or services",

        "Botão direto para WhatsApp":
            "Direct WhatsApp button",

        "Google Maps e endereço":
            "Google Maps and address",

        "Horários de funcionamento":
            "Opening hours",

        "Instagram e redes sociais":
            "Instagram and social media",

        "Galeria de fotos":
            "Photo gallery",

        "Formulário simples de contato":
            "Simple contact form",

        "Informações de contato":
            "Contact information",

        "Perguntas frequentes":
            "Frequently asked questions",


        /* =================================================
           POR QUE A LUME
        ================================================= */

        "Por que escolher a Lume?":
            "Why choose Lume?",

        "Profissional por fora.":
            "Professional on the outside.",

        "Simples por dentro.":
            "Simple behind the scenes.",

        "Um site profissional, sem complicação, sem mensalidade e feito para colocar seu negócio no digital.":
            "A professional website without the hassle or monthly hosting fees, built to bring your business online.",

        "R$397 uma única vez":
            "R$397 one-time payment",

        "Preço simples e transparente para colocar seu site no ar.":
            "Simple, transparent pricing to get your website online.",

        "Você não fica preso a uma cobrança mensal de hospedagem.":
            "You are not tied to a monthly hosting fee.",

        "O primeiro ano está no pacote e o domínio fica registrado em seu nome.":
            "The first year is included and the domain is registered in your name.",

        "Até 7 dias úteis":
            "Up to 7 business days",

        "Depois de recebermos todo o material necessário, começa o prazo de produção.":
            "The production timeline starts once we receive all required materials.",

        "Até 2 rodadas de alterações":
            "Up to 2 revision rounds",

        "Você revisa o projeto antes da aprovação e publicação final.":
            "You review the project before final approval and publishing.",

        "Feito para todas as telas":
            "Made for every screen",

        "Celular, tablet e computador recebem uma experiência adaptada.":
            "Mobile, tablet and desktop all receive an adapted experience.",

        "Você envia. A Lume cuida.":
            "You send it. Lume handles the rest.",

        "Organizamos as informações e cuidamos da parte visual e técnica.":
            "We organize your information and take care of the visual and technical work.",

        "Pensado para o WhatsApp":
            "Designed around WhatsApp",

        "Chamadas para contato aparecem nos pontos certos do site.":
            "Contact calls-to-action appear at the right points throughout the website.",


        /* =================================================
           PROCESSO
        ================================================= */

        "Simples do começo ao fim":
            "Simple from start to finish",

        "Seu site no ar":
            "Your website live",

        "em até 7 dias úteis.":
            "in up to 7 business days.",

        "O prazo começa após o recebimento de todo o material necessário para o projeto.":
            "The timeline starts after we receive all materials required for the project.",

        "Conte sobre seu negócio":
            "Tell us about your business",

        "Você envia logo, textos, fotos, contatos, redes sociais, endereço e referências.":
            "You send your logo, texts, photos, contact details, social media, address and references.",

        "A Lume cria":
            "Lume creates",

        "Organizamos o conteúdo e desenvolvemos o design e a estrutura do seu site.":
            "We organize the content and develop your website design and structure.",

        "Você revisa":
            "You review",

        "Você recebe a primeira versão e tem até 2 rodadas de alterações antes da aprovação final.":
            "You receive the first version and have up to 2 revision rounds before final approval.",

        "Seu site entra no ar":
            "Your website goes live",

        "Após a aprovação e o pagamento final, configuramos o domínio e publicamos o site.":
            "After approval and final payment, we configure the domain and publish the website.",


        /* =================================================
           PORTFÓLIO
        ================================================= */

        "Projetos que já":
            "Projects already",

        "saíram do papel.":
            "brought to life.",

        "Um cliente real e um exemplo de como a Lume transforma informações, serviços e chamadas para contato em uma presença digital profissional.":
            "A real client and an example of how Lume turns information, services and calls-to-action into a professional digital presence.",

        "CLIENTE REAL":
            "REAL CLIENT",

        "Aquecimento e soluções para piscinas":
            "Pool heating and solutions",

        "Site institucional desenvolvido pela Lume para apresentar serviços, equipamentos e assistência técnica, facilitando o contato de potenciais clientes pelo WhatsApp.":
            "Business website developed by Lume to present services, equipment and technical support, making it easier for potential customers to get in touch via WhatsApp.",

        "Ver site":
            "View website",


        /* =================================================
           PREÇO
        ================================================= */

        "O que você recebe":
            "What you get",

        "Um site profissional.":
            "A professional website.",

        "Sem mensalidade.":
            "No monthly hosting fee.",

        "Um pacote completo para colocar seu negócio no digital sem transformar o projeto em algo complicado.":
            "A complete package to bring your business online without turning the project into something complicated.",

        "Pagamento":
            "Payment",

        "50% para começar + 50% após a aprovação final, antes da publicação.":
            "50% to start + 50% after final approval, before publishing.",

        "Depois do primeiro ano":
            "After the first year",

        "você fica responsável apenas pela renovação anual do domínio.":
            "you are only responsible for the annual domain renewal.",

        "PACOTE LUME":
            "LUME PACKAGE",

        "1 site completo com até 5 seções/páginas principais":
            "1 complete website with up to 5 main sections/pages",

        "Botões de contato pelo WhatsApp":
            "WhatsApp contact buttons",

        "Google Maps, redes sociais, galeria e formulário simples quando fizer sentido":
            "Google Maps, social media, gallery and a simple contact form when relevant",

        "1 ano de domínio incluído e registrado em nome do cliente":
            "1 year of domain included and registered in the client’s name",

        "Até 2 rodadas de alterações antes da publicação":
            "Up to 2 revision rounds before publishing",

        "Entrega em até 7 dias úteis após receber todo o material":
            "Delivery in up to 7 business days after receiving all materials",

        "Configuração e publicação do site":
            "Website setup and publishing",

        "Quero começar meu site":
            "I want to start my website",

        "O domínio fica em nome do cliente. A renovação após o primeiro ano segue o valor cobrado pelo registrador naquele momento.":
            "The domain is registered in the client’s name. Renewal after the first year follows the registrar’s price at that time.",


        /* =================================================
           ESCOPO
        ================================================= */

        "Escopo claro":
            "Clear scope",

        "O que não está":
            "What is not",

        "incluído.":
            "included.",

        "O Pacote Lume é voltado para sites profissionais de apresentação e geração de contatos.":
            "The Lume Package is designed for professional presentation websites and lead generation.",

        "Loja virtual / e-commerce":
            "Online store / e-commerce",

        "Carrinho, checkout e pagamentos online":
            "Shopping cart, checkout and online payments",

        "Área de membros ou login":
            "Members area or login",

        "Sistemas personalizados e banco de dados":
            "Custom systems and databases",

        "Agendamento ou integrações complexas":
            "Complex scheduling or integrations",

        "Criação de logo e identidade visual":
            "Logo and visual identity creation",

        "Produção profissional de fotos e vídeos":
            "Professional photo and video production",

        "Produção extensa de textos do zero":
            "Extensive copywriting from scratch",

        "Alterações ilimitadas ou manutenção contínua":
            "Unlimited revisions or ongoing maintenance",

        "Precisa de algo diferente?":
            "Need something different?",

        "Fale com a gente":
            "Talk to us",


        /* =================================================
           SOBRE
        ================================================= */

        "Sobre a Lume":
            "About Lume",

        "A Lume nasceu para simplificar a presença digital de pequenos negócios.":
            "Lume was created to simplify the digital presence of small businesses.",

        "Criamos sites profissionais para quem quer apresentar sua empresa na internet, transmitir mais confiança e facilitar o contato com novos clientes.":
            "We create professional websites for businesses that want to present themselves online, build trust and make it easier for new customers to get in touch.",

        "Você não precisa entender de tecnologia. Você envia as informações do seu negócio e a Lume cuida da criação, configuração e publicação do seu site — de forma simples, rápida e sem mensalidade de hospedagem.":
            "You do not need to understand technology. You send us your business information and Lume handles the creation, setup and publishing of your website — simply, quickly and with no monthly hosting fee.",


        /* =================================================
           PARA QUEM É
        ================================================= */

        "Feito para quem empreende":
            "Made for entrepreneurs",

        "Pequeno no tamanho.":
            "Small in size.",

        "Grande no que faz.":
            "Big in what it does.",

        "Sites profissionais para negócios locais e prestadores de serviço que querem ser encontrados e receber novos contatos.":
            "Professional websites for local businesses and service providers that want to be found and receive new enquiries.",

        "Restaurantes":
            "Restaurants",

        "Salões":
            "Salons",

        "Clínicas":
            "Clinics",

        "Consultórios":
            "Practices",

        "Lojas físicas":
            "Physical stores",

        "Escritórios":
            "Offices",

        "Oficinas":
            "Workshops",

        "Autônomos":
            "Independent professionals",

        "Prestadores de serviço":
            "Service providers",

        "E muito mais":
            "And much more",


        /* =================================================
           FAQ
        ================================================= */

        "Perguntas":
            "Frequently asked",

        "frequentes.":
            "questions.",

        "Tudo o que você precisa saber antes de criar seu site com a Lume.":
            "Everything you need to know before creating your website with Lume.",

        "Quanto custa o site?":
            "How much does the website cost?",

        "O valor do Pacote Lume é R$397,00. O pagamento é dividido em 50% para iniciar o projeto e 50% após a aprovação final, antes da publicação.":
            "The Lume Package costs R$397.00. Payment is split into 50% to start the project and 50% after final approval, before publishing.",

        "O que está incluído nos R$397?":
            "What is included in the R$397 package?",

        "Um site completo com até 5 seções/páginas principais, versão para celular, tablet e computador, configuração e publicação, 1 ano de domínio, até 2 rodadas de alterações e recursos como WhatsApp, Google Maps, redes sociais, galeria e formulário simples quando fizerem sentido para o projeto.":
            "A complete website with up to 5 main sections/pages, mobile, tablet and desktop versions, setup and publishing, 1 year of domain, up to 2 revision rounds, and features such as WhatsApp, Google Maps, social media, gallery and a simple contact form when relevant to the project.",

        "Existe mensalidade?":
            "Is there a monthly fee?",

        "Não cobramos mensalidade de hospedagem. Depois do primeiro ano, o cliente fica responsável pela renovação anual do domínio.":
            "We do not charge a monthly hosting fee. After the first year, the client is responsible for the annual domain renewal.",

        "O domínio está incluído e fica no meu nome?":
            "Is the domain included and registered in my name?",

        "Sim. O primeiro ano está incluído e o domínio é registrado em nome do cliente. A partir do segundo ano, a renovação passa a ser responsabilidade do cliente.":
            "Yes. The first year is included and the domain is registered in the client’s name. From the second year onward, the client is responsible for renewal.",

        "Em quanto tempo meu site fica pronto?":
            "How long does it take to complete my website?",

        "Em até 7 dias úteis, contados a partir do momento em que recebermos todo o material necessário para desenvolver o projeto.":
            "Up to 7 business days, counted from the moment we receive all materials required to develop the project.",

        "Posso pedir alterações?":
            "Can I request changes?",

        "Sim. Estão incluídas até 2 rodadas de alterações antes da publicação. Mudanças adicionais ou solicitadas depois que o site estiver publicado podem ser orçadas separadamente.":
            "Yes. Up to 2 revision rounds are included before publishing. Additional changes or changes requested after the website is published may be quoted separately.",

        "Preciso entender de tecnologia?":
            "Do I need to understand technology?",

        "Não. Você envia as informações, imagens e referências do seu negócio. A Lume cuida da organização, criação e parte técnica.":
            "No. You send your business information, images and references. Lume handles the organization, creation and technical work.",

        "A Lume cria loja virtual?":
            "Does Lume build online stores?",

        "Não. O Pacote Lume não inclui loja virtual, carrinho de compras, checkout ou pagamento online. Nosso foco são sites de apresentação e geração de contatos.":
            "No. The Lume Package does not include online stores, shopping carts, checkout or online payments. Our focus is presentation websites and lead generation.",

        "O que acontece depois que o site é publicado?":
            "What happens after the website is published?",

        "O site permanece publicado sem mensalidade de hospedagem. Se você quiser novas alterações no futuro, a Lume poderá avaliar e enviar um orçamento separado.":
            "The website remains online with no monthly hosting fee. If you want new changes in the future, Lume can review the request and provide a separate quote.",


        /* =================================================
           CONTATO FINAL
        ================================================= */

        "Vamos conversar?":
            "Let’s talk",

        "Sua ideia brilha, a gente ilumina.":
            "Your idea shines. We bring it to light.",

        "Seu negócio já pode ter":
            "Your business can already have",

        "um site profissional.":
            "a professional website.",

        "Comece seu site por R$397 e deixe a parte técnica com a Lume.":
            "Start your website for R$397 and leave the technical side to Lume."

    };


    /* =====================================================
       TRADUÇÕES DE ATRIBUTOS
    ====================================================== */

    const attributeTranslations = {

        "Oferta do Pacote Lume":
            "Lume Package offer",

        "Falar com a Lume pelo WhatsApp":
            "Talk to Lume on WhatsApp",

        "Página inicial real do site Quente e Frio desenvolvido pela Lume":
            "Real homepage of the Quente e Frio website developed by Lume",

        "Lume":
            "Lume"

    };


    /* =====================================================
       SEO
    ====================================================== */

    const metaTranslations = {

        pt: {

            title:
                "Lume | Sites profissionais para pequenos negócios",

            description:
                "Criamos sites profissionais para pequenos negócios a partir de R$397, sem mensalidade de hospedagem e com entrega em até 7 dias úteis.",

            ogTitle:
                "Lume | Sites profissionais para pequenos negócios",

            ogDescription:
                "Tenha um site profissional a partir de R$397, sem mensalidade de hospedagem.",

            ogAlt:
                "Lume — Seu negócio merece ser visto. Sites profissionais a partir de R$397."

        },

        en: {

            title:
                "Lume | Professional websites for small businesses",

            description:
                "We create professional websites for small businesses from R$397, with no monthly hosting fee and delivery in up to 7 business days.",

            ogTitle:
                "Lume | Professional websites for small businesses",

            ogDescription:
                "Get a professional website from R$397, with no monthly hosting fee.",

            ogAlt:
                "Lume — Your business deserves to be seen. Professional websites from R$397."

        }

    };


    /* =====================================================
       CONTEÚDO ORIGINAL
    ====================================================== */

    const originalTextNodes = [];
    const originalAttributes = [];
    const originalWhatsappLinks = new Map();


    function normalizeText(value) {

        return String(value)
            .replace(/\s+/g, " ")
            .trim();

    }


    function collectOriginalContent() {

        const walker = document.createTreeWalker(

            document.body,

            NodeFilter.SHOW_TEXT,

            {

                acceptNode(node) {

                    const parent =
                        node.parentElement;

                    if (!parent) {

                        return NodeFilter.FILTER_REJECT;

                    }


                    if (

                        parent.closest(
                            "script, style, noscript, .language-toggle"
                        )

                    ) {

                        return NodeFilter.FILTER_REJECT;

                    }


                    if (

                        !normalizeText(
                            node.nodeValue
                        )

                    ) {

                        return NodeFilter.FILTER_REJECT;

                    }


                    return NodeFilter.FILTER_ACCEPT;

                }

            }

        );


        let node;


        while (
            (
                node =
                    walker.nextNode()
            )
        ) {

            originalTextNodes.push({

                node,

                value:
                    node.nodeValue

            });

        }


        document

            .querySelectorAll(
                "[aria-label], [title], [alt]"
            )

            .forEach((element) => {

                [
                    "aria-label",
                    "title",
                    "alt"

                ].forEach((attribute) => {

                    if (

                        !element.hasAttribute(
                            attribute
                        ) ||

                        element.closest(
                            ".language-toggle"
                        )

                    ) {

                        return;

                    }


                    originalAttributes.push({

                        element,

                        attribute,

                        value:
                            element.getAttribute(
                                attribute
                            )

                    });

                });

            });


        trackedWhatsappLinks.forEach((link) => {

            originalWhatsappLinks.set(

                link,

                link.getAttribute(
                    "href"
                )

            );

        });

    }


    function translatedText(
        originalValue
    ) {

        const normalized =
            normalizeText(
                originalValue
            );


        const translation =
            translations[
                normalized
            ];


        if (!translation) {

            return originalValue;

        }


        const beginning =
            originalValue.match(
                /^\s*/
            )?.[0] || "";


        const end =
            originalValue.match(
                /\s*$/
            )?.[0] || "";


        return (
            beginning +
            translation +
            end
        );

    }


    /* =====================================================
       SEO
    ====================================================== */

    function updateMeta(
        language
    ) {

        const meta =
            metaTranslations[
                language
            ];


        document.title =
            meta.title;


        const description =
            document.querySelector(
                'meta[name="description"]'
            );


        const ogTitle =
            document.querySelector(
                'meta[property="og:title"]'
            );


        const ogDescription =
            document.querySelector(
                'meta[property="og:description"]'
            );


        const ogImageAlt =
            document.querySelector(
                'meta[property="og:image:alt"]'
            );


        const ogLocale =
            document.querySelector(
                'meta[property="og:locale"]'
            );


        const twitterTitle =
            document.querySelector(
                'meta[name="twitter:title"]'
            );


        const twitterDescription =
            document.querySelector(
                'meta[name="twitter:description"]'
            );


        if (description) {

            description.setAttribute(
                "content",
                meta.description
            );

        }


        if (ogTitle) {

            ogTitle.setAttribute(
                "content",
                meta.ogTitle
            );

        }


        if (ogDescription) {

            ogDescription.setAttribute(
                "content",
                meta.ogDescription
            );

        }


        if (ogImageAlt) {

            ogImageAlt.setAttribute(
                "content",
                meta.ogAlt
            );

        }


        if (ogLocale) {

            ogLocale.setAttribute(

                "content",

                language === "en"
                    ? "en_US"
                    : "pt_BR"

            );

        }


        if (twitterTitle) {

            twitterTitle.setAttribute(
                "content",
                meta.ogTitle
            );

        }


        if (twitterDescription) {

            twitterDescription.setAttribute(
                "content",
                meta.ogDescription
            );

        }

    }


    /* =====================================================
       WHATSAPP
    ====================================================== */

    function englishWhatsappMessage(
        placement
    ) {

        const messages = {

            hero:
                "Hi, Lume! I'm interested in the Lume Package for R$397.",

            "serve-negocio":
                "Hi, Lume! I'd like to know whether the Lume website package is right for my business.",

            preco:
                "Hi, Lume! I'd like to start my website with the R$397 Lume Package.",

            "escopo-diferente":
                "Hi, Lume! I need something a little different for my website and would like to talk about it.",

            "cta-final":
                "Hi, Lume! I'd like to start my website for R$397.",

            flutuante:
                "Hi, Lume! I'd like to learn more about creating a website."

        };


        return (
            messages[
                placement
            ] ||
            messages.flutuante
        );

    }


    function updateWhatsappLinks(
        language
    ) {

        trackedWhatsappLinks.forEach(
            (link) => {

                if (
                    language ===
                    "pt"
                ) {

                    const original =
                        originalWhatsappLinks.get(
                            link
                        );


                    if (original) {

                        link.setAttribute(
                            "href",
                            original
                        );

                    }


                    return;

                }


                const placement =
                    link.dataset.placement ||
                    "flutuante";


                link.setAttribute(

                    "href",

                    "https://wa.me/5521984588494?text=" +

                        encodeURIComponent(

                            englishWhatsappMessage(
                                placement
                            )

                        )

                );

            }
        );

    }


    /* =====================================================
       BOTÃO PT / EN
    ====================================================== */

    function updateLanguageButton(
        language
    ) {

        languageOptions.forEach(
            (option) => {

                option.classList.toggle(

                    "is-active",

                    option.dataset.languageOption ===
                        language

                );

            }
        );


        if (!languageToggle) {

            return;

        }


        languageToggle.setAttribute(

            "aria-pressed",

            language === "en"
                ? "true"
                : "false"

        );


        languageToggle.setAttribute(

            "aria-label",

            language === "en"
                ? "Mudar site para português"
                : "Switch website to English"

        );

    }


    /* =====================================================
       LINKS PRIVACIDADE / TERMOS
    ====================================================== */

    function updateLegalLinks(
        language
    ) {

        document

            .querySelectorAll(
                "a[href]"
            )

            .forEach((link) => {

                const originalHref =

                    link.dataset.originalHref ||

                    link.getAttribute(
                        "href"
                    );


                if (!originalHref) {

                    return;

                }


                if (
                    !link.dataset.originalHref
                ) {

                    link.dataset.originalHref =
                        originalHref;

                }


                const cleanHref =
                    originalHref

                        .split("?")[0]

                        .split("#")[0]

                        .toLowerCase();


                if (

                    cleanHref.endsWith(
                        "privacidade.html"
                    ) ||

                    cleanHref.endsWith(
                        "privacy.html"
                    )

                ) {

                    link.setAttribute(

                        "href",

                        language === "en"
                            ? "privacy.html"
                            : "privacidade.html"

                    );


                    return;

                }


                if (

                    cleanHref.endsWith(
                        "termos.html"
                    ) ||

                    cleanHref.endsWith(
                        "terms.html"
                    )

                ) {

                    link.setAttribute(

                        "href",

                        language === "en"
                            ? "terms.html"
                            : "termos.html"

                    );

                }

            });

    }


    /* =====================================================
       URL DA HOME
    ====================================================== */

    function syncHomeUrl(
        language
    ) {

        try {

            const url =
                new URL(
                    window.location.href
                );


            if (
                language ===
                "en"
            ) {

                url.searchParams.set(
                    "lang",
                    "en"
                );

            } else {

                url.searchParams.delete(
                    "lang"
                );

            }


            history.replaceState(

                null,

                "",

                url.pathname +
                    url.search +
                    url.hash

            );

        } catch (error) {

            // Não interfere na navegação.

        }

    }


    /* =====================================================
       GARANTE HOME / INÍCIO
       IMPORTANTE:
       seleciona somente os links de texto da navegação
       e do rodapé.

       NÃO seleciona .logo-link, evitando apagar
       a imagem da logo.
    ====================================================== */

    function enforceHomeLabels(
        language
    ) {

        document

            .querySelectorAll(
                '.nav a[href="#inicio"], .footer-links a[href="#inicio"]'
            )

            .forEach((link) => {

                link.textContent =
                    language === "en"
                        ? "Home"
                        : "Início";

            });

    }


    /* =====================================================
       FAQ
    ====================================================== */

    function refreshFaqHeight() {

        faqItems.forEach(
            (item) => {

                if (

                    !item.classList.contains(
                        "active"
                    )

                ) {

                    return;

                }


                const answer =
                    item.querySelector(
                        ".faq-answer"
                    );


                if (answer) {

                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                }

            }
        );

    }


    /* =====================================================
       APLICA IDIOMA
    ====================================================== */

    function setLanguage(
        language
    ) {

        const selected =
            language === "en"
                ? "en"
                : "pt";


        document.documentElement.lang =
            selected === "en"
                ? "en"
                : "pt-BR";


        document.documentElement.setAttribute(
            "translate",
            "no"
        );


        document.body.setAttribute(
            "translate",
            "no"
        );


        originalTextNodes.forEach(
            (item) => {

                item.node.nodeValue =

                    selected === "en"

                        ? translatedText(
                            item.value
                        )

                        : item.value;

            }
        );


        originalAttributes.forEach(
            (item) => {

                if (
                    selected === "pt"
                ) {

                    item.element.setAttribute(

                        item.attribute,

                        item.value

                    );


                    return;

                }


                const normalized =
                    normalizeText(
                        item.value
                    );


                const translated =

                    attributeTranslations[
                        normalized
                    ] ||

                    translations[
                        normalized
                    ];


                item.element.setAttribute(

                    item.attribute,

                    translated ||
                        item.value

                );

            }
        );


        enforceHomeLabels(
            selected
        );


        updateLanguageButton(
            selected
        );


        updateMeta(
            selected
        );


        updateWhatsappLinks(
            selected
        );


        updateLegalLinks(
            selected
        );


        syncHomeUrl(
            selected
        );


        refreshFaqHeight();


        try {

            localStorage.setItem(
                "lume-language",
                selected
            );

        } catch (error) {

            // Continua funcionando sem localStorage.

        }

    }


    /* =====================================================
       INICIALIZAÇÃO DO IDIOMA
    ====================================================== */

    collectOriginalContent();


    let initialLanguage =
        "pt";


    const languageFromUrl =

        new URLSearchParams(
            window.location.search
        ).get(
            "lang"
        );


    if (
        languageFromUrl ===
        "en"
    ) {

        initialLanguage =
            "en";

    } else if (
        languageFromUrl ===
        "pt"
    ) {

        initialLanguage =
            "pt";

    } else {

        try {

            const stored =
                localStorage.getItem(
                    "lume-language"
                );


            if (

                stored ===
                "en" ||

                stored ===
                "pt"

            ) {

                initialLanguage =
                    stored;

            }

        } catch (error) {

            initialLanguage =
                "pt";

        }

    }


    setLanguage(
        initialLanguage
    );


    /* =====================================================
       CLIQUE PT / EN
    ====================================================== */

    if (
        languageToggle
    ) {

        languageToggle.addEventListener(

            "click",

            () => {

                const currentLanguage =

                    document.documentElement.lang ===
                    "en"

                        ? "en"
                        : "pt";


                setLanguage(

                    currentLanguage === "en"
                        ? "pt"
                        : "en"

                );

            }

        );

    }


    /* =====================================================
       ANO AUTOMÁTICO
    ====================================================== */

    if (
        currentYear
    ) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       HEADER
    ====================================================== */

    function updateHeader() {

        if (
            !header
        ) {

            return;

        }


        header.classList.toggle(

            "scrolled",

            window.scrollY >
                20

        );

    }


    updateHeader();


    window.addEventListener(

        "scroll",

        updateHeader,

        {
            passive:
                true
        }

    );


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

            document.documentElement.lang ===
            "en"

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

            document.documentElement.lang ===
            "en"

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

                nav.classList.contains(
                    "active"
                )

                    ? closeMenu()
                    : openMenu();

            }

        );

    }


    navLinks.forEach(
        (link) => {

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

        }
    );


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

        (
            item,
            index
        ) => {

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

                    const wasOpen =

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


                    if (
                        !wasOpen
                    ) {

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
        "IntersectionObserver" in window
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
                    threshold:
                        0.12
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

    document

        .querySelectorAll(
            'a[href^="#"]'
        )

        .forEach(
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


                        if (
                            !target
                        ) {

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
                                .top +

                            window.pageYOffset -

                            headerHeight +

                            1;


                        const reducedMotion =

                            window.matchMedia(
                                "(prefers-reduced-motion: reduce)"
                            ).matches;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                reducedMotion
                                    ? "auto"
                                    : "smooth"

                        });

                    }

                );

            }
        );


    /* =====================================================
       CLOUDFLARE ZARAZ — WHATSAPP
    ====================================================== */

    function normalizarNomeEvento(
        placement
    ) {

        return String(
            placement
        )

            .toLowerCase()

            .normalize(
                "NFD"
            )

            .replace(
                /[\u0300-\u036f]/g,
                ""
            )

            .replace(
                /[^a-z0-9]+/g,
                "_"
            )

            .replace(
                /^_+|_+$/g,
                ""
            );

    }


    function registrarCliqueWhatsapp(
        placement
    ) {

        const placementOriginal =
            placement ||
            "desconhecido";


        const nomeEvento =

            "whatsapp_" +

            normalizarNomeEvento(
                placementOriginal
            );


        const propriedades = {

            placement:
                placementOriginal,

            pagina:
                window.location.pathname,

            idioma:

                document.documentElement.lang ===
                "en"

                    ? "en"
                    : "pt",

            url:
                window.location.href

        };


        if (

            window.zaraz &&

            typeof window.zaraz.track ===
                "function"

        ) {

            try {

                window.zaraz.track(

                    nomeEvento,

                    propriedades

                );

            } catch (error) {

                console.warn(

                    "Não foi possível registrar o evento no Zaraz.",

                    error

                );

            }

        }


        window.dispatchEvent(

            new CustomEvent(

                "lume:whatsapp-click",

                {

                    detail: {

                        placement:
                            placementOriginal,

                        eventName:
                            nomeEvento

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
                    nomeEvento,

                placement:
                    placementOriginal

            });

        }

    }


    trackedWhatsappLinks.forEach(
        (link) => {

            link.addEventListener(

                "click",

                () => {

                    registrarCliqueWhatsapp(

                        link.dataset.placement ||
                        "desconhecido"

                    );

                }

            );

        }
    );

});