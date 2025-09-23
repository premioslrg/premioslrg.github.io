// Variables globales
let currentLanguage = 'es';

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Configurar el año en el footer
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent = new Date().getFullYear();
    }
    
    // Inicializar el idioma
    initializeLanguage();
    
    // Configurar el selector de idioma
    setupLanguageSelector();
    
    // Configurar formularios
    setupContactForm();
    
    // Configurar navegación
    setupNavigation();
    
    // Configurar animaciones
    setupAnimations();
    
    // Configurar funcionalidades específicas según la página
    setupPageSpecificFeatures();
});

// Función para inicializar el idioma
function initializeLanguage() {
    // Obtener idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    currentLanguage = savedLanguage;
    
    // Actualizar el selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Aplicar traducciones
    applyTranslations(currentLanguage);
}

// Función para configurar el selector de idioma
function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            const selectedLanguage = e.target.value;
            changeLanguage(selectedLanguage);
        });
    }
}

// Función para cambiar el idioma
function changeLanguage(newLanguage) {
    if (newLanguage === currentLanguage) return;
    
    // Mostrar efecto de carga
    document.body.classList.add('language-changing');
    
    setTimeout(() => {
        currentLanguage = newLanguage;
        
        // Guardar en localStorage
        localStorage.setItem('selectedLanguage', newLanguage);
        
        // Cambiar el atributo lang del documento
        document.documentElement.lang = newLanguage;
        
        // Aplicar traducciones
        applyTranslations(newLanguage);
        
        // Quitar efecto de carga
        document.body.classList.remove('language-changing');
        
        // Actualizar título de la página
        updatePageTitle(newLanguage);
        
    }, 300);
}

// Función para aplicar las traducciones
function applyTranslations(language) {
    const translations = getTranslations(language);
    
    // Buscar todos los elementos con data-translate
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            // Si el contenido incluye HTML (como <strong>), usar innerHTML
            if (translations[key].includes('<strong>')) {
                element.innerHTML = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Actualizar placeholders de inputs si existen
    updateInputPlaceholders(language);
}

// Función para actualizar placeholders de inputs
function updateInputPlaceholders(language) {
    const translations = getTranslations(language);
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const organizationInput = document.getElementById('organization');
    const dietaryInput = document.getElementById('dietary');
    const accessibilityInput = document.getElementById('accessibility');
    
    if (nameInput) {
        nameInput.placeholder = translations.form_name || 'Nombre';
    }
    
    if (emailInput) {
        emailInput.placeholder = translations.form_email || 'Correo electrónico';
    }
    
    if (phoneInput) {
        phoneInput.placeholder = translations.form_phone || 'Teléfono';
    }
    
    if (messageInput) {
        messageInput.placeholder = translations.form_message || 'Mensaje';
    }
    
    if (organizationInput) {
        organizationInput.placeholder = translations.form_organization || 'Organización/Empresa';
    }
    
    if (dietaryInput) {
        dietaryInput.placeholder = currentLanguage === 'es' ? 'Indique cualquier alergia o restricción alimentaria' :
                                   currentLanguage === 'gl' ? 'Indique calquera alerxia ou restrición alimentaria' :
                                   'Indicate any allergies or dietary restrictions';
    }
    
    if (accessibilityInput) {
        accessibilityInput.placeholder = currentLanguage === 'es' ? 'Describa cualquier asistencia que requiera' :
                                        currentLanguage === 'gl' ? 'Describa calquera asistencia que requira' :
                                        'Describe any assistance you require';
    }
}

// Función para actualizar el título de la página
function updatePageTitle(language) {
    const translations = getTranslations(language);
    
    // Determinar el título según la página actual
    const path = window.location.pathname;
    let titleKey = 'title';
    
    if (path.includes('contacto')) {
        titleKey = 'contact_page_title';
    } else if (path.includes('programa')) {
        titleKey = 'program_page_title';
    } else if (path.includes('historico')) {
        titleKey = 'history_page_title';
    }
    
    const pageTitle = translations[titleKey] || translations.title;
    document.title = `${pageTitle} - Liga Con Nós`;
}

// Función para configurar formularios
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const registrationForm = document.getElementById('registrationForm');
    
    if (contactForm) {
        setupForm(contactForm, 'contact');
    }
    
    if (registrationForm) {
        setupForm(registrationForm, 'registration');
    }
    
    // Validación en tiempo real
    setupFormValidation();
}

// Función genérica para configurar formularios
function setupForm(form, type) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const name = form.querySelector('#name')?.value.trim();
        const email = form.querySelector('#email')?.value.trim();
        const message = form.querySelector('#message')?.value.trim();
        
        // Obtener traducciones para mensajes
        const translations = getTranslations(currentLanguage);
        
        // Validación básica
        if (!name || !email || (message !== undefined && !message && form.querySelector('#message')?.hasAttribute('required'))) {
            alert(translations.form_error || 'Por favor, complete todos los campos obligatorios.');
            return;
        }
        
        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(translations.email_error || 'Por favor, ingrese una dirección de correo electrónico válida.');
            return;
        }
        
        // Simular envío del formulario
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        const sendingText = currentLanguage === 'es' ? 'Enviando...' : 
                           currentLanguage === 'gl' ? 'Enviando...' : 'Sending...';
        
        submitBtn.textContent = sendingText;
        submitBtn.disabled = true;
        
        setTimeout(() => {
            const successMessage = type === 'registration' ? 
                (currentLanguage === 'es' ? '¡Inscripción realizada con éxito! Recibirá un email de confirmación en breve.' :
                 currentLanguage === 'gl' ? '¡Inscrición realizada con éxito! Recibirá un email de confirmación en breve.' :
                 'Registration successful! You will receive a confirmation email shortly.') :
                (translations.form_success || '¡Formulario enviado correctamente!');
            
            alert(successMessage);
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Función para configurar validación del formulario
function setupFormValidation() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Limpiar errores mientras el usuario escribe
            this.style.borderColor = '#ddd';
        });
    });
}

// Función para validar un campo
function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        field.style.borderColor = '#e74c3c';
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.style.borderColor = '#e74c3c';
            return false;
        }
    }
    
    field.style.borderColor = '#27ae60';
    return true;
}

// Función para configurar la navegación
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Marcar el botón activo según la página actual
    const currentPath = window.location.pathname;
    navButtons.forEach(button => {
        const href = button.getAttribute('href');
        
        // Determinar si este botón corresponde a la página actual
        if (
            (currentPath.includes('index.html') || currentPath.endsWith('/') || currentPath.split('/').pop() === '') && href.includes('index.html') ||
            currentPath.includes('contacto') && href.includes('contacto') ||
            currentPath.includes('programa') && href.includes('programa') ||
            currentPath.includes('historico') && href.includes('historico')
        ) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
        
        button.addEventListener('click', function(e) {
            // Si es un enlace a otra página, permitir navegación normal
            if (this.getAttribute('href') !== '#') {
                return;
            }
            
            e.preventDefault();
            
            // Remover clase active de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
        });
    });
}

// Función para configurar animaciones
function setupAnimations() {
    // Animación de fade in al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const elementsToAnimate = document.querySelectorAll('.section-title, .welcome-text, .blue-content, .contact-grid, .sponsors-grid, .preview-content, .winner-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Animación de hover para imágenes
    const images = document.querySelectorAll('.sponsor-logo, .image-container img, .winner-image img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Función para configurar funcionalidades específicas de cada página
function setupPageSpecificFeatures() {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('historico')) {
        setupHistoryPage();
    } else if (currentPath.includes('programa')) {
        setupProgramPage();
    }
}

// Función para configurar la página del histórico
function setupHistoryPage() {
    const expandBtns = document.querySelectorAll('.expand-btn');
    
    expandBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const winnerId = this.getAttribute('data-winner');
            const description = document.getElementById(winnerId);
            
            if (description) {
                const isActive = description.classList.contains('active');
                
                // Cerrar todas las descripciones
                document.querySelectorAll('.winner-description').forEach(desc => {
                    desc.classList.remove('active');
                });
                
                document.querySelectorAll('.expand-btn').forEach(button => {
                    button.textContent = button.textContent.replace('- ', '+ ');
                    if (currentLanguage === 'es') {
                        button.textContent = 'Más información +';
                    } else if (currentLanguage === 'gl') {
                        button.textContent = 'Máis información +';
                    } else {
                        button.textContent = 'More information +';
                    }
                });
                
                // Si no estaba activa, mostrar esta descripción
                if (!isActive) {
                    description.classList.add('active');
                    if (currentLanguage === 'es') {
                        this.textContent = 'Menos información -';
                    } else if (currentLanguage === 'gl') {
                        this.textContent = 'Menos información -';
                    } else {
                        this.textContent = 'Less information -';
                    }
                }
            }
        });
    });
}

// Función para configurar la página del programa
function setupProgramPage() {
    // Animación de timeline
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const itemVisible = 150;
            
            if (itemTop < window.innerHeight - itemVisible) {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 200);
            }
        });
    }
    
    // Ejecutar animaciones
    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Ejecutar una vez al cargar
    
    // Animaciones adicionales para elementos del programa
    function fadeInOnScroll() {
        const elements = document.querySelectorAll('.highlight-card, .info-card, .timeline-content');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializar animaciones para elementos del programa
    document.querySelectorAll('.highlight-card, .info-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
}

// Función para smooth scroll (si se necesita navegación interna)
function smoothScrollTo(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para detectar el idioma del navegador (opcional)
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('gl')) {
        return 'gl';
    } else if (browserLang.startsWith('en')) {
        return 'en';
    } else {
        return 'es'; // Por defecto español
    }
}

// Exportar funciones para uso global si es necesario
window.changeLanguage = changeLanguage;
window.smoothScrollTo = smoothScrollTo;