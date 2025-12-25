document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATIONS & LANGUAGE SWITCHER ---
    const translations = {
        en: {
            brand: "YG",
            nav_about: "About",
            nav_offers: "Offers",
            nav_portfolio: "Portfolio",
            nav_skills: "Skills",
            nav_testimonials: "Testimonials",
            nav_contact: "Contact",
            hero_name: "Youssef Ghannam",
            hero_tagline: "Graphic Designer & Video Editor",
            hero_button: "Discover More",
            about_title: "About Me",
            about_p1: "Every successful project begins with one simple question: how can we deliver the right idea?<br><br>I'm Yousef Ghannam — a graphic designer and video editor with over 3 years of hands-on experience. Throughout my journey, I’ve collaborated with more than 40 clients across various industries, including education and food & beverage, helping brands communicate visually and connect meaningfully with their audiences.<br><br>My work includes redesigning the visual identity for two restaurant brands, which resulted in a 120% increase in engagement in just one month. I've also created over 150 pieces of visual content — from book covers and YouTube thumbnails to Reels — that have helped educators increase their reach and demand.<br><br>Although I didn’t formally study design, my passion for the field led me to learn through real-world experience, continuous practice, and a deep understanding of what works in today’s market. My focus remains on crafting compelling brand identities, editing engaging videos, and designing visuals that not only look good but serve a purpose.",
            offers_title: "Special Offers",
            offer1_title: "Weekly Follow-up",
            offer1_f1: "4 Videos / Month",
            offer1_f2: "4 Thumbnails",
            offer1_f3: "High Quality",
            offer2_title: "Intensive Curriculum",
            offer2_f1: "8 Videos",
            offer2_f2: "8 Thumbnails",
            offer2_f3: "4 Posters",
            offer2_f4: "Ad Schedule & Management File (Free)",
            offer3_title: "Viral & Trending",
            offer3_f1: "6 Full Explainer Videos",
            offer3_f2: "3 Reels (TikTok/IG)",
            offer3_f3: "6 Thumbnails",
            offer3_f4: "6 Posters",
            best_value: "Best Value",
            contact_for_price: "Contact for Price",
            portfolio_title: "Some of My Work",
            portfolio_button: "View Project",
            portfolio1_title: "Restaurant Brand Redesign",
            portfolio1_p: "Led a complete brand identity overhaul for two local restaurants, significantly boosting their online presence and customer interaction.",
            portfolio2_title: "Educational Content Series",
            portfolio2_p: "Designed and produced over 150 engaging visual materials for educational services, including presentations, infographics, and video overlays.",
            portfolio3_title: "Reels Video Editing",
            portfolio3_p: "Specialized in fast-paced and engaging video editing for social media Reels and advertisements, optimizing content for maximum retention.",
            portfolio4_title: "Thumbnail Design",
            portfolio4_p: "Created captivating and click-worthy thumbnails for YouTube videos. Focused on visual hierarchy and compelling imagery to increase click-through rates.",
            portfolio5_title: "BUNZ – Restaurant Brand Identity Design",
            portfolio5_p: "Created a full visual identity for BUNZ, a modern burger restaurant. The project included logo design, color palette, typography, and branded packaging, helping establish a bold and cohesive brand presence.",
            skills_title: "Skills",
            skill1_title: "Graphic Design",
            skill1_p: "Mastering Adobe tools like Photoshop, Illustrator, and InDesign.",
            skill2_title: "Video Editing & Production",
            skill2_p: "Proficient in Adobe Premiere Pro & CapCut for producing professional videos.",
            skill5_title: "Creativity & Innovation",
            skill5_p: "Generating fresh and original ideas and delivering unique design solutions.",
            skill7_title: "Communication & Collaboration",
            skill7_p: "Building strong client relationships and working effectively within teams.",
            testimonials_title: "Testimonials",
            contact_title: "Ready to Bring Your Vision to Life?",
            contact_p: "Let's connect and discuss how I can help your brand shine.",
            contact_whatsapp: "WhatsApp",
            contact_instagram: "Instagram",
            contact_email: "Email",
            footer_text: "&copy; 2025 Youssef Ghannam. All rights reserved."
        },
        ar: {
            brand: "YG",
            nav_about: "من أنا",
            nav_offers: "العروض",
            nav_portfolio: "أعمالي",
            nav_skills: "المهارات",
            nav_testimonials: "آراء العملاء",
            nav_contact: "تواصل معي",
            hero_name: "يوسف غنام",
            hero_tagline: "مصمم جرافيك ومحرر فيديو",
            hero_button: "اكتشف المزيد",
            about_title: "من أنا",
            about_p1: "كل مشروع ناجح يبدأ بسؤال بسيط واحد: كيف نقدّم الفكرة الصحيحة؟<br><br>أنا يوسف غنام — مصمم جرافيك ومحرر فيديو بخبرة عملية تزيد عن 3 سنوات. خلال رحلتي، تعاونت مع أكثر من 40 عميل في مختلف المجالات، بما في ذلك التعليم والأغذية والمشروبات، وساعدت العلامات التجارية على التواصل بصريًا والتواصل بشكل هادف مع جماهيرها.<br><br>يتضمن عملي إعادة تصميم الهوية البصرية لعلامتين تجاريتين لمطاعم، مما أدى إلى زيادة بنسبة 120٪ في التفاعل خلال شهر واحد فقط. كما قمت بإنشاء أكثر من 150 قطعة من المحتوى المرئي — من أغلفة الكتب والصور المصغرة على يوتيوب إلى مقاطع Reels — والتي ساعدت المعلمين على زيادة انتشارهم والطلب على خدماتهم.<br><br>على الرغم من أنني لم أدرس التصميم بشكل رسمي، إلا أن شغفي بالمجال دفعني للتعلم من خلال الخبرة الواقعية، والممارسة المستمرة، والفهم العميق لما ينجح في سوق اليوم. يبقى تركيزي على صياغة هويات تجارية مقنعة، وتحرير فيديوهات جذابة، وتصميم مرئيات لا تبدو جيدة فحسب، بل تخدم هدفاً محدداً.",
            offers_title: "باقات العروض الخاصة",
            offer1_title: "باقة المتابعة الأسبوعية",
            offer1_f1: "4 فيديوهات / شهر",
            offer1_f2: "4 صور مصغرة (Thumbnails)",
            offer1_f3: "جودة عالية (High Quality)",
            offer2_title: "باقة المنهج المكثف",
            offer2_f1: "8 فيديوهات",
            offer2_f2: "8 صور مصغرة (Thumbnails)",
            offer2_f3: "4 تصميمات (Posters)",
            offer2_f4: "ملف جدولة وإدارة إعلانات (مجاناً)",
            offer3_title: "باقة الانتشار والتريند",
            offer3_f1: "6 فيديوهات شرح كامل",
            offer3_f2: "3 فيديوهات ريلز (TikTok/IG)",
            offer3_f3: "6 صور مصغرة",
            offer3_f4: "6 تصميمات بوسترز",
            best_value: "الأكثر طلباً (Best Value)",
            contact_for_price: "تواصل للسعر",
            portfolio_title: "بعض من أعمالي",
            portfolio_button: "عرض المشروع",
            portfolio1_title: "إعادة تصميم علامة تجارية لمطعم",
            portfolio1_p: "قمت بإعادة تصميم الهوية التجارية الكاملة لمطعمين محليين، مما أدى إلى تعزيز وجودهم على الإنترنت وتفاعل العملاء بشكل كبير.",
            portfolio2_title: "سلسلة محتوى تعليمي",
            portfolio2_p: "صممت وأنتجت أكثر من 150 مادة مرئية جذابة للخدمات التعليمية، بما في ذلك العروض التقديمية والرسوم البيانية وتراكبات الفيديو.",
            portfolio3_title: "مونتاج فيديوهات Reels",
            portfolio3_p: "متخصص في تحرير الفيديو سريع الخطى والجذاب لمقاطع Reels والإعلانات على وسائل التواصل الاجتماعي، مع تحسين المحتوى لتحقيق أقصى قدر من الاحتفاظ.",
            portfolio4_title: "تصميم الصور المصغرة",
            portfolio4_p: "قمت بإنشاء صور مصغرة جذابة ومغرية للنقر لمقاطع فيديو يوتيوب. ركزت على التسلسل الهرمي البصري والصور المقنعة لزيادة معدلات النقر.",
            portfolio5_title: "BUNZ – تصميم هوية بصرية لمطعم",
            portfolio5_p: "تم إنشاء هوية بصرية كاملة لـ BUNZ، وهو مطعم برجر عصري. شمل المشروع تصميم الشعار، ولوحة الألوان، والخطوط، والتغليف، مما ساعد على تأسيس حضور قوي ومتماسك للعلامة التجارية.",
            skills_title: "المهارات",
            skill1_title: "التصميم الجرافيكي",
            skill1_p: "إتقان أدوات Adobe مثل فوتوشوب، إليستريتور، وإن ديزاين.",
            skill2_title: "تحرير ومونتاج الفيديو",
            skill2_p: "خبرة في استخدام Adobe Premiere Pro و CapCut لإنتاج فيديوهات احترافية.",
            skill5_title: "الإبداع والابتكار",
            skill5_p: "توليد أفكار جديدة وتقديم حلول تصميم فريدة.",
            skill7_title: "التواصل والتعاون",
            skill7_p: "بناء علاقات قوية مع العملاء والعمل بفعالية ضمن فرق.",
            testimonials_title: "آراء العملاء",
            contact_title: "هل أنت مستعد لتحويل رؤيتك إلى حقيقة؟",
            contact_p: "لنتواصل ونناقش كيف يمكنني مساعدة علامتك التجارية على التألق.",
            contact_whatsapp: "واتساب",
            contact_instagram: "انستغرام",
            contact_email: "البريد الإلكتروني",
            footer_text: "© 2025 يوسف غنام. جميع الحقوق محفوظة."
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                // If it has specific icon children we want to keep, we might need a safer way.
                // For now, most keys are direct text. 
                // Exceptions: list items with icons. 
                // Simple workaround: Just replace textContent if no children, or specific innerHTML logic.
                // Given the structure, simple innerText with preserved HTML icons is better.
                if (element.children.length > 0 && element.tagName === 'LI') {
                    // Preserve icon
                    const icon = element.querySelector('i');
                    element.innerHTML = '';
                    if (icon) element.appendChild(icon);
                    element.appendChild(document.createTextNode(' ' + translations[lang][key]));
                } else if (element.children.length > 0 && element.tagName === 'A') {
                    // Button with icon
                    const icon = element.querySelector('i');
                    const span = element.querySelector('span');
                    if (span) span.innerText = translations[lang][key];
                    else {
                        // Fallback
                        element.innerText = translations[lang][key];
                    }
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Split Type Re-init if needed
        if (typeof SplitType !== 'undefined' && document.querySelector('#about-content p')) {
            try {
                const aboutP = document.querySelector('#about-content p');
                aboutP.style.opacity = '1';
                new SplitType(aboutP, { types: 'words' });
            } catch (e) { }
        }
    }

    // Add event listener for Lang Switcher
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            langSwitcher.textContent = newLang === 'ar' ? 'English' : 'عربي';
            updateLanguage(newLang);
        });
    }

    // Set Initial Content (In case HTML is empty or to ensure sync)
    // We only want to set About text if it's empty in HTML to avoid overwrite flicker, 
    // but since user requested "Show About Content", we enforce it.
    const initialLang = document.documentElement.lang || 'ar';
    if (document.querySelector('#about-content p') && document.querySelector('#about-content p').innerText.trim() === '') {
        document.querySelector('#about-content p').innerText = translations[initialLang].about_p1;
    }

    // --- GENERIC UTILS (Theme, Nav, Cursor) ---
    // ... (These remain largely same, I will include abbreviated versions or just copy the logic)

    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const themeIcon = themeSwitcher ? themeSwitcher.querySelector('i') : null;
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const current = localStorage.getItem('theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            body.classList.toggle('light-mode', next === 'light');
            if (themeIcon) {
                themeIcon.classList.toggle('fa-sun', next === 'dark');
                themeIcon.classList.toggle('fa-moon', next === 'light');
            }
        });
        const savedTheme = localStorage.getItem('theme') || 'dark';
        body.classList.toggle('light-mode', savedTheme === 'light');
        if (themeIcon) {
            themeIcon.classList.toggle('fa-sun', savedTheme === 'dark');
            themeIcon.classList.toggle('fa-moon', savedTheme === 'light');
        }
    }

    // Mobile Nav
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('nav-open');
            document.body.classList.toggle('no-scroll');
        });
        navLinks.querySelectorAll('a, button').forEach(l => {
            l.addEventListener('click', () => {
                navLinks.classList.remove('nav-open');
                navToggle.classList.remove('nav-open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        if (cursorDot) { cursorDot.style.left = `${posX}px`; cursorDot.style.top = `${posY}px`; }
        if (cursorOutline) cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
    });
    document.querySelectorAll('a, button, .card, input, label').forEach((el) => {
        el.addEventListener('mouseover', () => cursorOutline?.classList.add('cursor-interact'));
        el.addEventListener('mouseleave', () => cursorOutline?.classList.remove('cursor-interact'));
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetPosition = targetElement.offsetTop - navbarHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Particle BG
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const numParticles = 50; // Optimized
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                const r = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - r * 2) + r;
                const y = Math.random() * (canvas.height - r * 2) + r;
                const c = body.classList.contains('light-mode') ? 'rgba(4, 54, 74, 0.4)' : `rgba(100, 204, 197, ${Math.random() * 0.3 + 0.1})`;
                const v = { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 };
                particles.push({ x, y, r, c, v });
            }
        };
        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                if (p.x + p.r > canvas.width || p.x - p.r < 0) p.v.x = -p.v.x;
                if (p.y + p.r > canvas.height || p.y - p.r < 0) p.v.y = -p.v.y;
                p.x += p.v.x; p.y += p.v.y;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.c;
                ctx.fill();
            });
        };
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); };
        window.addEventListener('resize', resize);
        resize();
        animate();
    }

    // Tilt
    if (window.innerWidth > 768 && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".card"), { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
    }

    // SplitType Animation
    if (typeof SplitType !== 'undefined') {
        const aboutText = document.querySelector('#about-content p');
        if (aboutText) {
            new SplitType(aboutText, { types: 'words' });
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const words = entry.target.querySelectorAll('.word');
                        words.forEach((el, i) => {
                            setTimeout(() => { el.style.transform = 'translateY(0)'; }, i * 30);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(aboutText);
        }
    }

    // --- SCROLL ANIMATIONS (IntersectionObserver) ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // optional: stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Testimonial
    const slider = document.getElementById('testimonial-slider');
    const lBtn = document.getElementById('scroll-left');
    const rBtn = document.getElementById('scroll-right');
    if (slider && lBtn && rBtn) {
        rBtn.addEventListener('click', () => slider.scrollBy({ left: 300, behavior: 'smooth' }));
        lBtn.addEventListener('click', () => slider.scrollBy({ left: -300, behavior: 'smooth' }));
    }


    // --- 🚀 NEW FEATURE: PACKAGE DETAILS OVERLAY & DATA ---

    const packagesData = {
        'basic': {
            title: 'باقة المتابعة الأسبوعية',
            image: 'https://placehold.co/800x400/04364A/64CCC5?text=Weekly+Package', // Placeholder
            audience: 'مثالية للمدرسين الجدد أو صناع المحتوى الذين يرغبون في الاستمرارية بمحتوى ثابت ومتميز شهرياً دون تكلفة إنتاج ضخمة.',
            features: [
                '4 فيديوهات مونتاج احترافي (فيديو كل أسبوع)',
                '4 صور مصغرة (Thumbnails) جذابة لزيادة النقرات',
                'تحسين جودة الصوت والصورة الحالية',
                'تسليم سريع خلال 48 ساعة من التصوير',
                'خطة نشر مقترحة (Bonus)'
            ],
            price: '1250 EGP <span style="font-size:0.5em; text-decoration:line-through; color:#aaa">1500</span>'
        },
        'pro': {
            title: 'باقة المنهج المكثف',
            image: 'https://placehold.co/800x400/04364A/64CCC5?text=Intensive+Course',
            audience: 'صممت خصيصاً للمدرسين الذين يصورون منهجاً كاملاً أو دورات تدريبية ويحتاجون إلى إنتاج غزير بجودة عالية مع تصميمات تسويقية.',
            features: [
                '8 فيديوهات شرح/محتوى (2 أسبوعياً)',
                '8 صور مصغرة احترافية',
                '4 تصميمات بوسترز للسوشيال ميديا للإعلانات',
                'إدارة الحملات الإعلانية مجاناً (Setup & Monitoring)',
                'نصائح لتحسين الظهور أمام الكاميرا'
            ],
            price: 'تواصل للسعر'
        },
        'vip': {
            title: 'باقة الانتشار والتريند',
            image: 'https://placehold.co/800x400/04364A/64CCC5?text=Viral+%26+Trending',
            audience: 'للأكاديميات والمدرسين الكبار الباحثين عن التوسع السريع والسيطرة على منصات الفيديو القصيرة (TikTok/Reels/Shorts).',
            features: [
                '5 فيديوهات شرح طويلة (يوتيوب/فيسبوك)',
                '5 فيديوهات ريلز سريعة الانتشار (Viral Style)',
                '5 صور مصغرة عالية الجودة',
                '5 بوسترات إعلانية قوية',
                'خطة محتوى تفاعلية لزيادة المتابعين',
                'أولوية قصوى في التنفيذ والتعديلات'
            ],
            price: 'تواصل للسعر'
        }
    };

    const packageOverlay = document.getElementById('package-overlay');
    const closeOverlayBtn = document.querySelector('.close-overlay');
    const viewDetailBtns = document.querySelectorAll('.view-package-detail');
    const pkgBookBtn = document.getElementById('pkg-book-btn');

    // Elements to populate
    const pkgTitle = document.getElementById('pkg-title');
    const pkgImg = document.getElementById('pkg-img');
    const pkgAudience = document.getElementById('pkg-audience');
    const pkgFeatures = document.getElementById('pkg-features');
    const pkgPrice = document.getElementById('pkg-price');

    let currentSelectedPackageId = '';

    // OPEN Overlay
    viewDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pkgId = btn.getAttribute('data-package-id');
            const data = packagesData[pkgId];

            if (data) {
                currentSelectedPackageId = pkgId; // Store for Wizard
                pkgTitle.innerText = data.title;
                pkgImg.src = data.image;
                pkgImg.onerror = function () { this.src = 'https://placehold.co/800x400/04364A/64CCC5?text=Package+Image'; };
                pkgAudience.innerText = data.audience;
                pkgPrice.innerHTML = data.price;

                // Populate Features
                pkgFeatures.innerHTML = '';
                data.features.forEach(feat => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check-circle"></i> ${feat}`;
                    pkgFeatures.appendChild(li);
                });

                // Show
                packageOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // CLOSE Overlay
    if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener('click', () => {
            packageOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // BOOK from Overlay -> Open Wizard
    if (pkgBookBtn) {
        pkgBookBtn.addEventListener('click', () => {
            // Close details overlay? Or keep it open underneath?
            // User flow: Details -> Book -> Form.
            // Better to keep details open but blurred? Or close it.
            // Let's keep it open, Wizard is z-index higher.
            openWizard(currentSelectedPackageId);
        });
    }


    // --- WIZARD FORM LOGIC ---

    const wizardModal = document.getElementById('wizard-modal');
    const closeWizardBtn = document.querySelector('.close-modal'); // Assuming this is inside wizard
    const wizardForm = document.getElementById('wizard-form');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const steps = document.querySelectorAll('.step');
    const progressFill = document.getElementById('progress-fill');
    let currentStep = 1;
    let selectedPackageName = "";

    function openWizard(pkgId) {
        // Map ID to Name
        const map = { 'basic': 'باقة المتابعة الأسبوعية', 'pro': 'باقة المنهج المكثف', 'vip': 'باقة الانتشار والتريند' };
        selectedPackageName = map[pkgId] || "باقة غير محددة";

        wizardModal.classList.add('active');
        // Overlay is already overflow hidden, so we are good.
    }

    if (closeWizardBtn) {
        closeWizardBtn.addEventListener('click', () => {
            wizardModal.classList.remove('active');
            // If overlay is active, keep overflow hidden.
            if (!packageOverlay.classList.contains('active')) {
                document.body.style.overflow = 'auto';
            }
        });
    }

    function updateWizard() {
        steps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === currentStep) {
                step.classList.add('active');
            }
        });
        const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
        if (progressFill) progressFill.style.width = `${progress}%`;

        if (currentStep === 1) {
            prevBtn.style.display = 'none';
            nextBtn.textContent = 'التالي';
        } else if (currentStep === steps.length) {
            prevBtn.style.display = 'inline-block';
            nextBtn.textContent = 'إرسال الطلب (WhatsApp)';
        } else {
            prevBtn.style.display = 'inline-block';
            nextBtn.textContent = 'التالي';
        }
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const currentStepEl = document.querySelector(`.step[data-step="${currentStep}"]`);
            // Validation
            const inputs = currentStepEl.querySelectorAll('input[required], select[required]');
            let valid = true;
            inputs.forEach(i => { if (!i.checkValidity()) { i.reportValidity(); valid = false; } });

            if (valid) {
                if (currentStep < steps.length) {
                    currentStep++;
                    updateWizard();
                } else {
                    sendToWhatsApp();
                }
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) { currentStep--; updateWizard(); }
        });
    }

    function sendToWhatsApp() {
        const formData = new FormData(wizardForm);
        const data = Object.fromEntries(formData.entries());

        // Checkboxes
        const goals = [];
        document.querySelectorAll('input[name="goal"]:checked').forEach(cb => goals.push(cb.value));
        const platforms = [];
        document.querySelectorAll('input[name="platform"]:checked').forEach(cb => platforms.push(cb.value));

        let message = `*طلب جديد من الموقع 🚀*\n\n`;
        message += `*الباقة المختارة:* ${selectedPackageName}\n`;
        message += `*الاسم:* ${data.name || ''}\n`;
        message += `*رقم الهاتف:* ${data.phone || ''}\n`;
        message += `*الصفة:* ${data.role || ''}\n\n`;

        message += `--- تفاصيل المشروع ---\n`;
        message += `*الهدف:* ${goals.join('، ')}\n`;
        message += `*الخدمة:* ${data.service}\n`;
        message += `*الوضع الحالي:* ${data.status}\n\n`;

        message += `--- الجمهور والستايل والهوية ---\n`;
        message += `*الجمهور:* ${data.audience || 'غير محدد'}\n`;
        message += `*الستايل:* ${data.style || 'غير محدد'}\n`;
        message += `*هوية بصرية خاصة؟:* ${data.branding || 'لا'}\n`;
        message += `*المنصات:* ${platforms.join('، ')}\n\n`;

        message += `--- الموعد ---\n`;
        // Budget removed
        message += `*الموعد:* ${data.timeline || 'غير محدد'}\n`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/201062680608?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');

        setTimeout(() => {
            wizardModal.classList.remove('active');
            packageOverlay.classList.remove('active'); // Close everything
            document.body.style.overflow = 'auto';
            currentStep = 1;
            updateWizard();
            wizardForm.reset();
        }, 1000);
    }

});
