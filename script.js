/* ================================================
   René Maldonado Reyes - Portfolio Site
   JavaScript Functionality
   ================================================ */

// ================================================
// Translations
// ================================================
const translations = {
    es: {
        nav_perfil: "Perfil",
        nav_trayectoria: "Trayectoria",
        nav_servicios: "Servicios",
        nav_contacto: "Contacto",
        hero_overline: "Asesoría Legal Estratégica",
        hero_name: "René Maldonado Reyes",
        hero_title_1: "Senior Legal Counsel",
        hero_title_2: "& Real Estate Strategist",
        hero_desc: "+23 años alineando seguridad legal con rentabilidad.<br>+$1,500 MMDD en transacciones estratégicas.",
        stat_years: "Años de Experiencia",
        stat_transactions: "USD en Transacciones",
        stat_projects: "Proyectos Cerrados",
        hero_scroll: "Conocer más",
        cred_title: "Formación de Excelencia",
        cred_1: "Licenciatura en Derecho",
        cred_2: "Alta Dirección",
        cred_3: "Legal Tech e Innovación",
        profile_title: "Perfil Profesional",
        profile_p1: "Con más de dos décadas de experiencia en la intersección entre derecho, finanzas e inversión inmobiliaria, René Maldonado ha consolidado su reputación como el aliado estratégico que las empresas requieren para navegar complejidades legales sin sacrificar velocidad de negocio.",
        profile_p2: "Su trayectoria comenzó en GICSA, donde como Subdirector Jurídico de Financiamiento participó en financiamientos sindicados, bursatilizaciones y la adquisición de reserva territorial a nivel nacional. Posteriormente, en Avison Young, asumió el liderazgo de la división de Mercados de Capitales, estructurando vehículos de inversión para fondos extranjeros.",
        profile_p3: "Desde 2018, <strong>Renueva Integradora</strong> representa la culminación de su visión: un modelo de Legal Management y Counsel externo que combina gobierno corporativo, compliance y estructuración de fideicomisos, habiendo facilitado transacciones por más de $1,500 millones de dólares.",
        timeline_tag: "Trayectoria",
        timeline_title: "Experiencia Profesional",
        current: "Actual",
        role_1: "Socio Director General",
        desc_1: "Legal Management y General Counsel externo. Especializado en Gobierno Corporativo, Compliance y estructuración de fideicomisos.",
        role_2: "Socio Principal - Capital Markets",
        desc_2: "Lideró la división de Mercados de Capitales. Estructuración de vehículos de inversión para fondos extranjeros.",
        role_3: "Socio Fundador",
        desc_3: "Consultoría financiera-legal. Levantamiento de capital semilla y mezzanine para proyectos inmobiliarios.",
        role_4: "Subdirector Jurídico de Financiamiento",
        desc_4: "Financiamientos sindicados, bursatilizaciones y adquisición de reserva territorial nacional.",
        services_title: "Áreas de Práctica",
        services_subtitle: "Soluciones legales estratégicas diseñadas para maximizar el valor y minimizar el riesgo.",
        s1_title: "Real Estate & FIBRAs",
        s1_desc: "Estructuración integral de vehículos de inversión inmobiliaria, desde fideicomisos hasta emisiones bursátiles.",
        s2_title: "M&A Transfronterizo",
        s2_desc: "Fusiones y adquisiciones internacionales, Joint Ventures y navegación regulatoria multijurisdiccional.",
        s3_title: "Legal Design & Innovation",
        s3_desc: "Transformación de procesos legales mediante metodologías innovadoras para maximizar eficiencia operativa.",
        s4_title: "Gestión de Crisis",
        s4_desc: "Intervención estratégica en situaciones complejas. Counsel externo para decisiones bajo presión.",
        s5_title: "Vehículos de Inversión",
        s5_desc: "Diseño de fideicomisos, fondos y estructuras corporativas optimizadas para protección patrimonial.",
        s6_title: "Gobierno Corporativo",
        s6_desc: "Implementación de marcos de gobierno y compliance que protegen y dan valor a las organizaciones.",
        contact_tag: "Contacto",
        contact_title: "Consultoría Estratégica",
        contact_subtitle: "Inicie una conversación sobre su próximo movimiento estratégico.",
        loc_label: "Ubicación",
        loc_value: "Ciudad de México, México",
        form_name: "Nombre completo",
        form_email: "Correo electrónico",
        form_msg: "¿Cómo puedo ayudarle?",
        form_btn: "Enviar Mensaje"
    },
    en: {
        nav_perfil: "Profile",
        nav_trayectoria: "Track Record",
        nav_servicios: "Services",
        nav_contacto: "Contact",
        hero_overline: "Strategic Legal Counsel",
        hero_name: "René Maldonado Reyes",
        hero_title_1: "Senior Legal Counsel",
        hero_title_2: "& Real Estate Strategist",
        hero_desc: "+23 years aligning legal security with profitability.<br>+$1.5 Billion USD in strategic transactions.",
        stat_years: "Years of Experience",
        stat_transactions: "USD in Transactions",
        stat_projects: "Deals Closed",
        hero_scroll: "Learn more",
        cred_title: "Executive Education",
        cred_1: "Law Degree (JD Equivalent)",
        cred_2: "Top Management Program",
        cred_3: "Legal Tech & Innovation",
        profile_title: "Professional Profile",
        profile_p1: "With over two decades of experience at the intersection of law, finance, and real estate investment, René Maldonado has established himself as the strategic ally companies need to navigate legal complexities without sacrificing business velocity.",
        profile_p2: "His career began at GICSA, where as Deputy Legal Director of Financing he participated in syndicated financing, securitizations, and the acquisition of land reserves nationwide. Subsequently, at Avison Young, he assumed leadership of the Capital Markets division, structuring investment vehicles for foreign funds.",
        profile_p3: "Since 2018, <strong>Renueva Integradora</strong> represents the culmination of his vision: a Legal Management and external Counsel model that combines corporate governance, compliance, and trust structuring, having facilitated transactions of more than $1.5 billion dollars.",
        timeline_tag: "Track Record",
        timeline_title: "Professional Experience",
        current: "Current",
        role_1: "Managing Partner",
        desc_1: "Legal Management and External General Counsel. Specialized in Corporate Governance, Compliance, and trust structuring.",
        role_2: "Principal - Capital Markets",
        desc_2: "Led the Capital Markets division. Structuring investment vehicles for foreign institutional funds.",
        role_3: "Founding Partner",
        desc_3: "Financial-legal consulting. Seed and mezzanine capital raising for real estate projects.",
        role_4: "Deputy Legal Director of Financing",
        desc_4: "Syndicated financing, securitizations, and national land reserve acquisition.",
        services_title: "Practice Areas",
        services_subtitle: "Strategic legal solutions designed to maximize value and minimize risk.",
        s1_title: "Real Estate & REITs",
        s1_desc: "Comprehensive structuring of real estate investment vehicles, from trusts to public listings.",
        s2_title: "Cross-Border M&A",
        s2_desc: "International mergers and acquisitions, Joint Ventures, and multi-jurisdictional regulatory navigation.",
        s3_title: "Legal Design & Innovation",
        s3_desc: "Transformation of legal processes through innovative methodologies to maximize operational efficiency.",
        s4_title: "Crisis Management",
        s4_desc: "Strategic intervention in complex situations. External counsel for high-pressure decision making.",
        s5_title: "Investment Vehicles",
        s5_desc: "Design of trusts, funds, and corporate structures optimized for asset protection.",
        s6_title: "Corporate Governance",
        s6_desc: "Implementation of governance frameworks and compliance programs that protect and add value.",
        contact_tag: "Contact",
        contact_title: "Strategic Consulting",
        contact_subtitle: "Start a conversation about your next strategic move.",
        loc_label: "Location",
        loc_value: "Mexico City, Mexico",
        form_name: "Full Name",
        form_email: "Email Address",
        form_msg: "How can I help you?",
        form_btn: "Send Message"
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'hero_desc' || key === 'profile_p3') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update language buttons
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Update CV download link
    const cvLink = document.getElementById('cv-download');
    if (cvLink) {
        cvLink.href = lang === 'es'
            ? 'assets/CV-ReneMaldonado-ES.pdf'
            : 'assets/CV-ReneMaldonado-EN.pdf';
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// ================================================
// Navigation
// ================================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Scroll effect for navigation
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('nav--scrolled');
    } else {
        nav.classList.remove('nav--scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('ri-menu-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
        }
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    });
});

// ================================================
// Smooth Scroll
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================================
// Intersection Observer for Animations
// ================================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animatedElements = document.querySelectorAll('.timeline__item, .service-card, .credentials__item, .section-header');

animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)`;
    // Possible staggered delay (optional, but keep it subtle)
    // el.style.transitionDelay = `${(index % 3) * 0.1}s`; 
    observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .timeline__item.visible,
    .service-card.visible,
    .credentials__item.visible,
    .section-header.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ================================================
// Form Handling
// ================================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form_name').value;
        const email = document.getElementById('form_email').value;
        const message = document.getElementById('form_message').value;

        // WhatsApp configuration
        const phoneNumber = '525544479168';
        const text = `Hola René, soy *${name}*. Mi correo es ${email}. Me interesa: ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Optional: Reset form
        contactForm.reset();
    });
}

// ================================================
// Console Branding
// ================================================
console.log('%c👔 René Maldonado Reyes', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%c   Senior Legal Counsel & Real Estate Strategist', 'font-size: 14px; color: #0a192f;');
console.log('%c   Crafted with 💜 by Smartizable', 'font-size: 12px; color: #a855f7;');

// ================================================
// Initialize
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language based on browser preference
    const browserLang = navigator.language.substring(0, 2);
    setLanguage(browserLang === 'en' ? 'en' : 'es');
});
