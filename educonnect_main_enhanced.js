// EduConnect Maroc - Enhanced Main JavaScript File
// ==================================================

// Global State Management
const EduConnectMaroc = {
    currentLanguage: 'ar',
    p5Instance: null,
    
    // ============================================
    // COMPLETE TRANSLATIONS
    // ============================================
    translations: {
        ar: {
            // Navigation
            'nav-home': 'الصفحة الرئيسية',
            'nav-features': 'الميزات',
            'nav-pricing': 'الأسعار',
            'nav-contact': 'اتصل بنا',
            'cta-free-trial': 'تجربة مجانية',
            
            // Hero Section
            'hero-title-1': 'ربط المدارس',
            'hero-title-2': 'بالمستقبل',
            'hero-description': 'منصة EduConnect Maroc هي الحل الشامل لإدارة المدارس في المغرب. نربط المعلمين، الآباء، والطلاب من خلال تقنية متطورة وسهلة الاستخدام.',
            'start-now': 'ابدأ الآن مجاناً',
            'watch-video': 'شاهد الفيديو',
            
            // Statistics
            'stats-title': 'تأثيرنا في أرقام',
            'stats-subtitle': 'نحن نحدث فرقاً حقيقياً في التعليم المغربي',
            'schools-connected': 'مدرسة متصلة',
            'active-students': 'طالب نشط',
            'connected-teachers': 'معلم مرتبط',
            'parent-satisfaction': '% رضا الآباء',
            
            // Challenges
            'challenges-title': 'التحديات التي نواجهها',
            'communication-gap': 'نقص التواصل',
            'communication-gap-desc': '79% من الآباء لا يتلقون تحديثات منتظمة عن تقدم أبنائهم الدراسي',
            'administrative-challenges': 'التحديات الإدارية',
            'administrative-challenges-desc': 'نقص 60,000 معلم في المغرب يؤثر على جودة التعليم',
            'digital-divide': 'الفجوة الرقمية',
            'digital-divide-desc': 'المناطق الريفية تعاني من ضعف البنية التحتية التكنولوجية',
            
            // Solutions
            'solutions-title': 'حلولنا المتكاملة',
            'effective-management': 'إدارة فعالة',
            'effective-management-desc': 'نظام متكامل لإدارة الطلاب، المعلمين، والموارد المدرسية مع تقارير دقيقة ومتابعة فورية',
            'seamless-communication': 'تواصل سلس',
            'seamless-communication-desc': 'تواصل فوري بين المدرسين والآباء مع دعم كامل للغتين العربية والفرنسية',
            'advanced-technology': 'تكنولوجيا متقدمة',
            'advanced-technology-desc': 'تطبيقات متنقلة وسهلة الاستخدام تعمل حتى في المناطق ذات الاتصال الضعيف',
            
            // Dashboard
            'dashboard-title': 'لوحة التحكم الذكية',
            'dashboard-desc': 'احصل على نظرة شاملة على أداء طلابك مع لوحة تحكم توفر لك جميع المعلومات التي تحتاجها في مكان واحد.',
            'real-time-analytics': 'تحليلات الأداء في الوقت الفعلي',
            'custom-reports': 'تقارير مخصصة قابلة للتصدير',
            'smart-alerts': 'تنبيهات ذكية وإشعارات مهمة',
            'try-dashboard': 'جرب لوحة التحكم',
            
            // Mobile App
            'mobile-app-title': 'تطبيق متنقل متقدم',
            'mobile-app-desc': 'تواصل مع مدرستك في أي وقت ومن أي مكان عبر تطبيقنا المتنقل المصمم خصيصاً للبيئة المغربية.',
            'easy-to-use': 'سهل الاستخدام',
            'easy-to-use-desc': 'واجهة مبسطة تناسب جميع المستويات',
            'offline-mode': 'يعمل بدون إنترنت',
            'offline-mode-desc': 'مزامنة تلقائية عند توفر الاتصال',
            'instant-notifications': 'إشعارات فورية',
            'instant-notifications-desc': 'تنبيهات مهمة في الوقت المناسب',
            'bilingual': 'ثنائي اللغة',
            'bilingual-desc': 'العربية والفرنسية بدعم كامل',
            'download-ios': 'تحميل للآيفون',
            'download-android': 'تحميل للأندرويد',
            
            // Testimonials
            'testimonials-title': 'ماذا يقول عملاؤنا',
            'testimonials-subtitle': 'قصص نجاح من مدارس استفادت من EduConnect Maroc',
            
            // CTA
            'ready-to-transform': 'مستعد لتحويل مدرستك؟',
            'ready-to-transform-desc': 'انضم إلى آلاف المدارس في المغرب التي ثقت بـ EduConnect Maroc لتحسين التعليم وتواصل أفضل.',
            'start-free-trial': 'ابدأ تجربة مجانية',
            'book-demo': 'احجز عرضاً توضيحياً',
            
            // Footer
            'quick-links': 'روابط سريعة',
            'support': 'الدعم',
            'help-center': 'مركز المساعدة',
            'documentation': 'التوثيق',
            'tutorials': 'الدروس التعليمية',
            'link-features': 'الميزات',
            'link-pricing': 'الأسعار',
            'link-contact': 'اتصل بنا',
            'made-in-morocco': 'صنع في المغرب 🇲🇦',
            
            // Modal
            'coming-soon': 'قريباً!',
            'coming-soon-desc': 'نحن نعمل على هذه الميزة. سيتم إطلاقها قريباً!',
            'okay-button': 'حسناً'
        },
        
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-features': 'Features',
            'nav-pricing': 'Pricing',
            'nav-contact': 'Contact',
            'cta-free-trial': 'Free Trial',
            
            // Hero Section
            'hero-title-1': 'Connecting Schools',
            'hero-title-2': 'To The Future',
            'hero-description': 'EduConnect Maroc is the comprehensive school management platform in Morocco. We connect teachers, parents, and students through advanced and easy-to-use technology.',
            'start-now': 'Start Now Free',
            'watch-video': 'Watch Video',
            
            // Statistics
            'stats-title': 'Our Impact in Numbers',
            'stats-subtitle': 'We are making a real difference in Moroccan education',
            'schools-connected': 'Connected Schools',
            'active-students': 'Active Students',
            'connected-teachers': 'Connected Teachers',
            'parent-satisfaction': '% Parent Satisfaction',
            
            // Challenges
            'challenges-title': 'Challenges We Face',
            'communication-gap': 'Communication Gap',
            'communication-gap-desc': '79% of parents do not receive regular updates about their children\'s academic progress',
            'administrative-challenges': 'Administrative Challenges',
            'administrative-challenges-desc': 'Shortage of 60,000 teachers in Morocco affects education quality',
            'digital-divide': 'Digital Divide',
            'digital-divide-desc': 'Rural areas suffer from weak technological infrastructure',
            
            // Solutions
            'solutions-title': 'Our Integrated Solutions',
            'effective-management': 'Effective Management',
            'effective-management-desc': 'Integrated system for managing students, teachers, and school resources with accurate reports and real-time monitoring',
            'seamless-communication': 'Seamless Communication',
            'seamless-communication-desc': 'Instant communication between teachers and parents with full support for both Arabic and French languages',
            'advanced-technology': 'Advanced Technology',
            'advanced-technology-desc': 'Mobile applications that are easy to use and work even in areas with weak connectivity',
            
            // Dashboard
            'dashboard-title': 'Smart Dashboard',
            'dashboard-desc': 'Get a comprehensive overview of your students\' performance with a dashboard that provides all the information you need in one place.',
            'real-time-analytics': 'Real-time performance analytics',
            'custom-reports': 'Customizable exportable reports',
            'smart-alerts': 'Smart alerts and important notifications',
            'try-dashboard': 'Try Dashboard',
            
            // Mobile App
            'mobile-app-title': 'Advanced Mobile App',
            'mobile-app-desc': 'Stay connected with your school anytime, anywhere through our mobile app designed specifically for the Moroccan environment.',
            'easy-to-use': 'Easy to Use',
            'easy-to-use-desc': 'Simplified interface suitable for all levels',
            'offline-mode': 'Works Offline',
            'offline-mode-desc': 'Automatic sync when connection is available',
            'instant-notifications': 'Instant Notifications',
            'instant-notifications-desc': 'Important alerts at the right time',
            'bilingual': 'Bilingual',
            'bilingual-desc': 'Full support for Arabic and French',
            'download-ios': 'Download for iPhone',
            'download-android': 'Download for Android',
            
            // Testimonials
            'testimonials-title': 'What Our Customers Say',
            'testimonials-subtitle': 'Success stories from schools that benefited from EduConnect Maroc',
            
            // CTA
            'ready-to-transform': 'Ready to Transform Your School?',
            'ready-to-transform-desc': 'Join thousands of schools in Morocco that trust EduConnect Maroc to improve education and communication.',
            'start-free-trial': 'Start Free Trial',
            'book-demo': 'Book a Demo',
            
            // Footer
            'quick-links': 'Quick Links',
            'support': 'Support',
            'help-center': 'Help Center',
            'documentation': 'Documentation',
            'tutorials': 'Tutorials',
            'link-features': 'Features',
            'link-pricing': 'Pricing',
            'link-contact': 'Contact',
            'made-in-morocco': 'Made in Morocco 🇲🇦',
            
            // Modal
            'coming-soon': 'Coming Soon!',
            'coming-soon-desc': 'We are working on this feature. It will be launched soon!',
            'okay-button': 'Okay'
        },
        
        fr: {
            // Navigation
            'nav-home': 'Accueil',
            'nav-features': 'Fonctionnalités',
            'nav-pricing': 'Tarifs',
            'nav-contact': 'Contact',
            'cta-free-trial': 'Essai Gratuit',
            
            // Hero Section
            'hero-title-1': 'Connecter les Écoles',
            'hero-title-2': 'au Futur',
            'hero-description': 'EduConnect Maroc est la plateforme de gestion scolaire complète au Maroc. Nous connectons enseignants, parents et élèves grâce à une technologie avancée et facile à utiliser.',
            'start-now': 'Commencer Gratuitement',
            'watch-video': 'Voir la Vidéo',
            
            // Statistics
            'stats-title': 'Notre Impact en Chiffres',
            'stats-subtitle': 'Nous faisons une réelle différence dans l\'éducation marocaine',
            'schools-connected': 'Écoles Connectées',
            'active-students': 'Élèves Actifs',
            'connected-teachers': 'Enseignants Connectés',
            'parent-satisfaction': '% Satisfaction Parents',
            
            // Challenges
            'challenges-title': 'Défis auxquels Nous Faisons Face',
            'communication-gap': 'Manque de Communication',
            'communication-gap-desc': '79% des parents ne reçoivent pas de mises à jour régulières sur les progrès de leurs enfants',
            'administrative-challenges': 'Défis Administratifs',
            'administrative-challenges-desc': 'Pénurie de 60,000 enseignants au Maroc affecte la qualité de l\'éducation',
            'digital-divide': 'Fracture Numérique',
            'digital-divide-desc': 'Les zones rurales souffrent d\'une infrastructure technologique faible',
            
            // Solutions
            'solutions-title': 'Nos Solutions Intégrées',
            'effective-management': 'Gestion Efficace',
            'effective-management-desc': 'Système intégré pour gérer les élèves, enseignants et ressources scolaires avec des rapports précis et un suivi en temps réel',
            'seamless-communication': 'Communication Fluide',
            'seamless-communication-desc': 'Communication instantanée entre enseignants et parents avec support complet des langues arabe et française',
            'advanced-technology': 'Technologie Avancée',
            'advanced-technology-desc': 'Applications mobiles faciles à utiliser qui fonctionnent même dans les zones avec une connectivité faible',
            
            // Dashboard
            'dashboard-title': 'Tableau de Bord Intelligent',
            'dashboard-desc': 'Obtenez une vue d\'ensemble complète des performances de vos élèves avec un tableau de bord qui fournit toutes les informations dont vous avez besoin en un seul endroit.',
            'real-time-analytics': 'Analyses de performance en temps réel',
            'custom-reports': 'Rapports personnalisés exportables',
            'smart-alerts': 'Alertes intelligentes et notifications importantes',
            'try-dashboard': 'Essayer le Tableau de Bord',
            
            // Mobile App
            'mobile-app-title': 'Application Mobile Avancée',
            'mobile-app-desc': 'Restez connecté avec votre école à tout moment et de n\'importe où via notre application mobile conçue spécifiquement pour l\'environnement marocain.',
            'easy-to-use': 'Facile à Utiliser',
            'easy-to-use-desc': 'Interface simplifiée adaptée à tous les niveaux',
            'offline-mode': 'Fonctionne Hors Ligne',
            'offline-mode-desc': 'Synchronisation automatique lorsque la connexion est disponible',
            'instant-notifications': 'Notifications Instantanées',
            'instant-notifications-desc': 'Alertes importantes au bon moment',
            'bilingual': 'Bilingue',
            'bilingual-desc': 'Arabe et français avec support complet',
            'download-ios': 'Télécharger pour iPhone',
            'download-android': 'Télécharger pour Android',
            
            // Testimonials
            'testimonials-title': 'Ce que Disent Nos Clients',
            'testimonials-subtitle': 'Histoires de réussite d\'écoles ayant bénéficié de EduConnect Maroc',
            
            // CTA
            'ready-to-transform': 'Prêt à Transformer Votre École ?',
            'ready-to-transform-desc': 'Rejoignez des milliers d\'écoles au Maroc qui font confiance à EduConnect Maroc pour améliorer l\'éducation et la communication.',
            'start-free-trial': 'Commencer l\'Essai Gratuit',
            'book-demo': 'Réserver une Démo',
            
            // Footer
            'quick-links': 'Liens Rapides',
            'support': 'Support',
            'help-center': 'Centre d\'Aide',
            'documentation': 'Documentation',
            'tutorials': 'Tutoriels',
            'link-features': 'Fonctionnalités',
            'link-pricing': 'Tarifs',
            'link-contact': 'Contact',
            'made-in-morocco': 'Fabriqué au Maroc 🇲🇦',
            
            // Modal
            'coming-soon': 'Bientôt Disponible!',
            'coming-soon-desc': 'Nous travaillons sur cette fonctionnalité. Elle sera bientôt disponible!',
            'okay-button': 'D\'accord'
        }
    },
    
    // ============================================
    // Initialize Application
    // ============================================
    init() {
        console.log('🚀 Initializing EduConnect Maroc...');
        
        this.setupLanguageSystem();
        this.setupAnimations();
        this.setupScrollEffects();
        this.setupInteractiveElements();
        this.setupNotificationSystem();
        
        console.log('✅ EduConnect Maroc initialized successfully');
    },
    
    // ============================================
    // Language System
    // ============================================
    setupLanguageSystem() {
        const languageSelector = document.getElementById('language-selector');
        if (!languageSelector) {
            console.warn('⚠️ Language selector not found');
            return;
        }
        
        // Load saved language or default to Arabic
        const savedLang = localStorage.getItem('educonnect-language') || 'ar';
        this.currentLanguage = savedLang;
        languageSelector.value = savedLang;
        
        // Apply language immediately
        this.updateLanguage(savedLang);
        
        // Language change handler
        languageSelector.addEventListener('change', (e) => {
            console.log('🌐 Language changed to:', e.target.value);
            this.updateLanguage(e.target.value);
        });
        
        console.log('✅ Language system initialized. Current:', savedLang);
    },
    
    updateLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('educonnect-language', lang);
        
        // Update text direction
        const isRTL = lang === 'ar';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.body.className = isRTL ? 'rtl' : 'ltr';
        
        // Get translations for selected language
        const translations = this.translations[lang];
        if (!translations) {
            console.error('❌ No translations found for:', lang);
            return;
        }
        
        let updatedCount = 0;
        
        // Update all translatable elements
        Object.keys(translations).forEach(key => {
            const elements = document.querySelectorAll(`[id="${key}"]`);
            
            elements.forEach(el => {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[key];
                } else if (el.tagName === 'BUTTON' || el.tagName === 'A') {
                    el.textContent = translations[key];
                } else {
                    el.textContent = translations[key];
                }
                updatedCount++;
            });
        });
        
        console.log(`✅ Updated ${updatedCount} elements to ${lang}`);
        
        // Show notification
        this.showNotification(`تم التبديل إلى ${lang === 'ar' ? 'العربية' : lang === 'fr' ? 'Français' : 'English'}`, 'info');
    },
    
    // ============================================
    // Animation System
    // ============================================
    setupAnimations() {
        // Initialize p5.js background only on home page
        if (document.getElementById('p5-background')) {
            this.initP5Background();
        }
        
        // Animate statistics counters
        this.animateCounters();
        
        // Initialize testimonials slider
        this.initTestimonialsSlider();
        
        // Add hover animations
        this.setupHoverEffects();
    },
    
    initP5Background() {
        if (typeof p5 === 'undefined') {
            console.warn('⚠️ p5.js not loaded');
            return;
        }
        
        const sketch = (p) => {
            let particles = [];
            const numParticles = window.innerWidth < 768 ? 30 : 50;
            
            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('p5-background');
                canvas.style('position', 'absolute');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '1');
                
                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 5),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                for (let particle of particles) {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    p.fill(255, 255, 255, particle.opacity * 255);
                    p.noStroke();
                    p.ellipse(particle.x, particle.y, particle.size);
                }
                
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        let d = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        if (d < 120) {
                            let alpha = p.map(d, 0, 120, 0.1, 0);
                            p.stroke(255, 255, 255, alpha * 255);
                            p.strokeWeight(1);
                            p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        }
                    }
                }
            };
            
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        };
        
        this.p5Instance = new p5(sketch);
        console.log('✅ p5.js background initialized');
    },
    
    animateCounters() {
        const counters = document.querySelectorAll('.stats-counter');
        if (counters.length === 0) return;
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuad = (t) => t * (2 - t);
                const current = Math.floor(target * easeOutQuad(progress));
                
                counter.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };
            
            requestAnimationFrame(updateCounter);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    },
    
    initTestimonialsSlider() {
        if (typeof Splide !== 'undefined' && document.querySelector('.splide')) {
            new Splide('.splide', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 5000,
                pauseOnHover: true,
                arrows: true,
                pagination: true
            }).mount();
            console.log('✅ Testimonials slider initialized');
        }
    },
    
    setupHoverEffects() {
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    },
    
    // ============================================
    // Scroll Effects
    // ============================================
    setupScrollEffects() {
        this.setupNavbarScroll();
        this.setupFadeInAnimations();
        this.setupSmoothScrolling();
    },
    
    setupNavbarScroll() {
        const navbar = document.querySelector('nav');
        if (!navbar) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            if (currentScroll > lastScroll && currentScroll > 300) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    },
    
    setupFadeInAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease-out';
            observer.observe(el);
        });
    },
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    // ============================================
    // Interactive Elements
    // ============================================
    setupInteractiveElements() {
        this.setupModalSystem();
        this.setupButtonHandlers();
    },
    
    setupModalSystem() {
        if (!document.getElementById('modal-container')) {
            const modalContainer = document.createElement('div');
            modalContainer.id = 'modal-container';
            modalContainer.style.cssText = `
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                z-index: 9999;
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(5px);
            `;
            document.body.appendChild(modalContainer);
            
            modalContainer.addEventListener('click', (e) => {
                if (e.target === modalContainer) {
                    this.closeModal();
                }
            });
        }
    },
    
    setupButtonHandlers() {
        const buttonSelectors = [
            '#cta-free-trial',
            '#start-now',
            '#watch-video',
            '#try-dashboard',
            '#download-ios',
            '#download-android',
            '#start-free-trial',
            '#book-demo'
        ];
        
        buttonSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showComingSoonModal();
                });
            });
        });
    },
    
    showComingSoonModal() {
        const modal = document.getElementById('modal-container');
        const translations = this.translations[this.currentLanguage];
        
        modal.innerHTML = `
            <div style="
                background: white;
                padding: 3rem;
                border-radius: 1.5rem;
                max-width: 500px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">🚀</div>
                <h2 style="font-size: 2rem; font-weight: bold; color: #2C5F5D; margin-bottom: 1rem;">
                    ${translations['coming-soon']}
                </h2>
                <p style="color: #6b7280; font-size: 1.125rem; margin-bottom: 2rem; line-height: 1.6;">
                    ${translations['coming-soon-desc']}
                </p>
                <button onclick="EduConnectMaroc.closeModal()" style="
                    background: linear-gradient(135deg, #2C5F5D, #1E3A8A);
                    color: white;
                    padding: 1rem 3rem;
                    border-radius: 0.75rem;
                    border: none;
                    font-size: 1.125rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    ${translations['okay-button']}
                </button>
            </div>
        `;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },
    
    closeModal() {
        const modal = document.getElementById('modal-container');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    },
    
    // ============================================
    // Notification System
    // ============================================
    setupNotificationSystem() {
        if (!document.getElementById('notification-container')) {
            const container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 80px;
                ${this.currentLanguage === 'ar' ? 'left' : 'right'}: 20px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 350px;
            `;
            document.body.appendChild(container);
        }
    },
    
    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        
        const icons = {
            success: '✓',
            error: '✗',
            info: 'ℹ',
            warning: '⚠'
        };
        
        notification.style.cssText = `
            background: ${colors[type]};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 500;
            transform: translateX(${this.currentLanguage === 'ar' ? '-' : ''}400px);
            transition: transform 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <span style="font-size: 1.5rem;">${icons[type]}</span>
            <span>${message}</span>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            notification.style.transform = `translateX(${this.currentLanguage === 'ar' ? '-' : ''}400px)`;
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => EduConnectMaroc.init());
} else {
    EduConnectMaroc.init();
}

// Add CSS for transitions
const style = document.createElement('style');
style.textContent = `
    nav {
        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    }
    
    .card-hover {
        transition: all 0.3s ease !important;
    }
    
    * {
        transition: direction 0s, text-align 0s;
    }
`;
document.head.appendChild(style);

// Export for global access
window.EduConnectMaroc = EduConnectMaroc;