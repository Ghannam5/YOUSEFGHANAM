/**
 * YOUSEF GHANNAM — THE CREATIVE ATELIER & CINEMA SUITE
 * High-Performance Vanilla Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. COMPREHENSIVE BILINGUAL DICTIONARY (ARABIC & ENGLISH)
    // ==========================================================================
    const dictionary = {
        ar: {
            nav_archive: "الأعمال المختارة",
            nav_deck: "كوتشينة التصاميم",
            nav_suite: "استوديو المونتاج",
            nav_dossier: "الملف الإبداعي",
            nav_arsenal: "الترسانة والمهارات",
            nav_praise: "آراء العملاء",
            nav_dispatch: "تواصل معي",

            // Hero
            telemetry_loc: "القاهرة // عمل دولي",
            hero_main_name: "يوسف غنام",
            hero_title_desc: "Graphic Designer & Video Editor",
            hero_manifesto_para: "أصمم هويات بصرية أصيلة وأنتج مونتاج فيديو سينمائي عالي الاستبقاء، يجذب الانتباه، يبني المكانة القيادية لعلامتك، ويحوّل المشاهدين إلى عملاء دائمين.",
            btn_explore_archive: "استكشف الأرشيف الإبداعي",
            btn_commission_direct: "تواصل معي",
            stat_years: "سنوات خبرة",
            stat_clients: "عميل ومؤسسة",
            stat_assets: "عمل منجز",
            stat_lift: "تفاعل إضافي",

            // Archive
            archive_eyebrow: "SELECTED WORKS GALLERY",
            archive_title_1: "أعمال مختارة تصنع",
            archive_title_2: "فارقاً استثنائياً في السوق.",
            archive_lead_desc: "كل مشروع في هذا الأرشيف يمثل تحدياً تم تحويله إلى قصة نجاح بصرية وتجارية قابلة للقياس، عبر دمج الفن الراقي مع سيكولوجية الجمهور.",
            mode_wall: "معرض الأعمال",
            mode_index: "فهرس الاستوديو (Index)",
            filter_all: "أعمال الهوية الرئيسية [2]",
            filter_branding: "الهوية البصرية وتصميم الشخصيات",

            // Project 01
            proj_bunz_h3: "BUNZ — الهوية البصرية وتغليف المنتجات لمطعم برجر",
            proj_bunz_p: "تأسيس وتصميم هوية بصرية كاملة لـ BUNZ، تشمل الشعار المبتكر، فلسفة الألوان المشبعة بالحيوية، وتصميم علب البرجر والبطاطس والأكياس الورقية، مما ساهم في ترسيخ حضور العلامة في السوق وزيادة التفاعل بنسبة 120%.",

            // Project 02
            proj_pizza_h3: "Pizza Steve — ابتكار الشخصية وإعادة تصميم العلامة",
            proj_pizza_p: "تطوير شخصية كرتونية كأيقونة وهوية رئيسية لمطعم بيتزا، ارتكزت على الرسوم المرحة والتايبوغرافي البارز ثلاثي الأبعاد لجذب الفئات الشابة وخلق طابع مميز لا يُنسى.",

            btn_open_case: "عرض ملف دراسة الحالة كاملاً",

            // Suite
            suite_eyebrow: "CINEMA & VIDEO MONTAGE DECK",
            suite_title_1: "استوديو المونتاج: مونتاج هندسي",
            suite_title_2: "يصنع الإثارة ويضمن بقاء المشاهد.",
            suite_lead_desc: "المونتاج ليس مجرد تقطيع مشاهد؛ إنه علم الإيقاع، فن اختيار اللحظة، وهندسة الصوت التي تجعل المشاهد يتفاعل مع كل ثانية كأنها فيلم سينمائي.",
            phone_vid_title: "Alex Hormozi Style Reels",

            // Dossier
            dossier_eyebrow: "THE CREATIVE PHILOSOPHY",
            dossier_quote: "\"في عصر يتكدس فيه المحتوى الرقمي كل جزء من الثانية، البقاء والربح ليس لمن ينشر أكثر، بل لمن يصنع أثراً بصرياً لا يُقاوم.\"",
            dossier_p1: "أنا <strong>يوسف غنام</strong> — مصمم جرافيك ومونتير فيديو أمتلك أكثر من 3 سنوات من الممارسة الميدانية المكثفة. خلال هذه الرحلة، عملت مع أكثر من 40 علامة تجارية ومؤسسة في مجالات التعليم، المطاعم، والخدمات الرقمية، وساعدتهم على بناء هوية بصرية ومحتوى فيديو يحقق نتائج حقيقية وأرقام مبيعات ملموسة.",
            dossier_p2: "تضمنت أعمالي إعادة إطلاق الهوية التجارية لمطاعم أدت إلى مضاعفة التفاعل بنسبة 120% في أول 30 يوماً، وإنتاج أكثر من 150 عملاً إبداعياً ساهم في تصدر كبار المعلمين للمنصات الرقمية. أجمع بين الرؤية الفنية الدقيقة والفهم العملي لسيكولوجية المشاهد وسلوك المستهلك.",
            tel_clients: "عميل ومؤسسة معتمدة",
            tel_assets: "مادة بصرية وفيديو تم تسليمها",
            tel_lift: "متوسط ارتفاع التفاعل للعملاء",
            tel_commitment: "التزام بالمواعيد ومعايير الجودة",

            // Arsenal
            arsenal_eyebrow: "CREATIVE ARSENAL & CAPABILITIES",
            arsenal_title_1: "الترسانة الإبداعية: خبرة متكاملة",
            arsenal_title_2: "من الفكرة إلى الإنتاج النهائي.",
            arsenal_desc: "لا أستخدم نسباً مئوية عشوائية — قدراتي تتجسد في منظومة عمل متكاملة تبدأ من وضع الإستراتيجية البصرية وحتى التسليم النهائي بدقة استثنائية.",
            ars1_title: "الهوية البصرية والعلامات التجارية",
            ars1_p: "بناء شعارات أصلية، أنظمة ألوان متجانسة، أدلة هوية بصرية (Brand Guidelines)، وتغليف منتجات يميز علامتك عن كل المنافسين في السوق.",
            ars2_title: "مونتاج الفيديو وصناعة المحتوى",
            ars2_p: "مونتاج احترافي لمقاطع اليوتيوب، الريلز، وتيك توك مع هندسة صوتية متقنة، تصحيح ألوان سينمائي، وموشن غرافيكس يحافظ على شغف المشاهد.",
            ars3_title: "التصميم الإعلاني والسوشيال ميديا",
            ars3_p: "تصميم بوسترات الحملات الإعلانية، مذكرات الشرح، شهادات التقدير، وصور اليوتيوب المصغرة التي تحقق أرقام نقرات قياسية (High CTR).",

            // Praise
            praise_eyebrow: "CLIENT FEEDBACK & PROOF",
            praise_title_1: "شهادات حقيقية من شركاء",
            praise_title_2: "النجاح وأصحاب الأعمال.",
            praise_desc: "انطباعات وتقييمات مباشرة من عملائي — اضغط على أي صورة لتكبيرها وفحص آراء من وثقوا في قدراتي الإبداعية.",

            // Signal
            signal_eyebrow: "READY TO CONNECT?",
            signal_h2_1: "فلنصنع عملاً إبداعياً",
            signal_h2_2: "يستحق أن يُخلَّد في الذاكرة.",
            signal_p: "متاح دائماً للتواصل المباشر ومناقشة الأفكار والرؤى الإبداعية لتصميم الهويات ومونتاج الفيديو الاحترافي.",
            footer_sub: "Graphic Designer & Video Editor",
            footer_rights: "© 2025 YOUSEF GHANNAM. ALL RIGHTS RESERVED.",

            // Case Study
            case_brief_title: "نبذة عن التحدي والمشروع",
            case_solution_title: "الحل الإبداعي والتنفيذ",
            case_tools_title: "الأدوات المستخدمة",
            case_external_btn: "مشاهدة العمل الأصلي كاملاً",
            btn_prev: "السابق",
            btn_next: "التالي"
        },
        en: {
            nav_archive: "Selected Works",
            nav_deck: "Design Decks",
            nav_suite: "Editing Suite",
            nav_dossier: "Creative Dossier",
            nav_arsenal: "Arsenal & Skills",
            nav_praise: "Client Proof",
            nav_dispatch: "Contact Me",

            // Hero
            telemetry_loc: "CAIRO // GLOBAL REMOTE",
            hero_main_name: "Yousef Ghannam",
            hero_title_desc: "Graphic Designer & Video Editor",
            hero_manifesto_para: "Architecting iconic visual identities and engineering high-retention video narratives that capture immediate attention, solidify brand authority, and turn casual viewers into dedicated clients.",
            btn_explore_archive: "Explore Creative Archive",
            btn_commission_direct: "Connect With Me",
            stat_years: "Years Exp.",
            stat_clients: "Clients Served",
            stat_assets: "Assets Delivered",
            stat_lift: "Client Lift",

            // Archive
            archive_eyebrow: "SELECTED WORKS GALLERY",
            archive_title_1: "Curated works that build",
            archive_title_2: "unmistakable market authority.",
            archive_lead_desc: "Every commission in this archive represents a distinct commercial challenge converted into measurable success, combining artistic rigor with viewer psychology.",
            mode_wall: "Exhibition Wall",
            mode_index: "Studio Index",
            filter_all: "Core Identity Works [2]",
            filter_branding: "Brand Identity & Mascot",

            proj_bunz_h3: "BUNZ — Fast Casual Burger Identity & Packaging",
            proj_bunz_p: "Comprehensive brand engineering for BUNZ, featuring dynamic typographic lockups, energized color palettes, bespoke burger boxes, fry cups, and launch campaign assets yielding +120% client engagement.",

            proj_pizza_h3: "Pizza Steve — Character Mascot & Brand Identity",
            proj_pizza_p: "Playful character-driven identity overhaul combining hand-drawn mascot illustration, retro-modern shades, and dimensional typography tailored for high youth appeal.",

            btn_open_case: "View Full Case Dossier ↗",

            // Suite
            suite_eyebrow: "CINEMA & VIDEO MONTAGE DECK",
            suite_title_1: "The Editing Suite: Pacing-driven",
            suite_title_2: "editing that locks viewers in.",
            suite_lead_desc: "Editing is not merely cutting footage; it is the science of rhythm, the art of emotional tension, and sound architecture that turns every second into a cinematic experience.",
            phone_vid_title: "Alex Hormozi Style Reels",

            // Dossier
            dossier_eyebrow: "THE CREATIVE PHILOSOPHY",
            dossier_quote: "\"In an era where millions of videos compete for attention every second, survival and profit belong not to those who post the most, but to those who create unforgettable visual authority.\"",
            dossier_p1: "I am <strong>Yousef Ghannam</strong> — a Graphic Designer and Video Editor with over 3 years of rigorous commercial practice. Over this journey, I have partnered with more than 40 brands and educators across Egypt and internationally, constructing visual identities and video content that deliver measurable revenue.",
            dossier_p2: "My portfolio includes ground-up restaurant identity re-launches that boosted customer engagement by 120% within 30 days, alongside 150+ visual content pieces enabling top educators to dominate their sectors. I blend fine artistic judgment with practical marketing psychology.",
            tel_clients: "Trusted Clients & Brands",
            tel_assets: "Creative Deliverables Completed",
            tel_lift: "Average Engagement Lift",
            tel_commitment: "On-Time Execution & Quality",

            // Arsenal
            arsenal_eyebrow: "CREATIVE ARSENAL & CAPABILITIES",
            arsenal_title_1: "The Creative Arsenal: Complete",
            arsenal_title_2: "execution from concept to delivery.",
            arsenal_desc: "I do not use arbitrary percentage bars — my capabilities reflect an end-to-end design ecosystem spanning creative strategy to high-end final production.",
            ars1_title: "Brand Identity Systems",
            ars1_p: "Original logo marks, cohesive color palettes, exhaustive brand guideline books, and tactile packaging that separates you from competitors.",
            ars2_title: "Video Editing & Motion Graphics",
            ars2_p: "Pacing-driven editing for YouTube and short-form video, featuring rich sound design, cinematic color correction, and kinetic typography.",
            ars3_title: "Advertising & Social Direction",
            ars3_p: "Impactful marketing posters, publication book covers, student certificates, and high-CTR YouTube thumbnail packaging.",

            // Praise
            praise_eyebrow: "CLIENT FEEDBACK & PROOF",
            praise_title_1: "Verified proof from",
            praise_title_2: "trusted business partners.",
            praise_desc: "Direct unedited reactions from clients and educators I have supported — click any image to zoom in.",

            // Signal
            signal_eyebrow: "READY TO CONNECT?",
            signal_h2_1: "Let's create something",
            signal_h2_2: "worth remembering.",
            signal_p: "Available for direct communication and discussing creative visions for brand identity design and high-end video editing.",
            footer_sub: "Graphic Designer & Video Editor",
            footer_rights: "© 2025 YOUSEF GHANNAM. ALL RIGHTS RESERVED.",

            // Case Study
            case_brief_title: "Project Scope & Challenge",
            case_solution_title: "Creative Execution & Results",
            case_tools_title: "Tools & Disciplines Applied",
            case_external_btn: "View Original Project on Behance ↗",
            btn_prev: "Previous",
            btn_next: "Next"
        }
    };

    // ==========================================================================
    // 2. PROJECT DOSSIER DATA
    // ==========================================================================
    const projectsData = {
        'bunz': {
            title: "BUNZ — Fast Casual Burger Identity & Packaging",
            category: "BRAND IDENTITY",
            year: "2025",
            client: "BUNZ Burger Co.",
            image: "../images/Thumbnail - Size.webp",
            brief: "BUNZ needed an electrifying brand identity that could stand out against saturated competitors in the modern fast-casual burger market. The challenge was crafting an identity that felt energetic, appetizing, and premium all at once.",
            solution: "Engineered a custom typographic logomark with dynamic speed angles, paired with high-voltage yellow, deep crimson, and violet contrasts. Designed complete packaging collateral including burger wrappers, fry containers, bags, and high-impact social media campaign rollouts.",
            tools: ["Adobe Illustrator", "Adobe Photoshop", "Brand Guidelines", "Packaging Print Setup"],
            link: "https://www.behance.net/gallery/227914985/BUNZ-Identity-Campaign-Design-for-a-Burger"
        },
        'pizza-steve': {
            title: "Pizza Steve — Character Mascot Brand Identity",
            category: "CONCEPT & MASCOT",
            year: "2024",
            client: "Pizza Steve Eatery",
            image: "../images/Thumbnail.webp",
            brief: "Pizza Steve was seeking a memorable character-driven redesign to connect with teenage and college demographics while keeping a warm, friendly neighborhood feel.",
            solution: "Created an iconic pizza slice mascot with retro-modern sunglasses, expressive illustrated line-work, bold 3D typographic styling, and a cohesive warm red color system suited for restaurant signage and social feeds.",
            tools: ["Adobe Illustrator", "Character Design", "Photoshop", "Signage Prep"],
            link: "https://www.behance.net/gallery/227664051/Mini-Identity-Concept-Pizza-Steve"
        }
    };

    // ==========================================================================
    // 3. PRECISION CURSOR SYSTEM
    // ==========================================================================
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        const animateCursor = () => {
            ringX += (mouseX - ringX) * 0.2;
            ringY += (mouseY - ringY) * 0.2;
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            requestAnimationFrame(animateCursor);
        };
        requestAnimationFrame(animateCursor);

        // Interactive Cursor States
        document.querySelectorAll('a, button, .btn-laser, .btn-wireframe, .archive-tab, .mode-btn, .stepper-btn, .tool-toggle-btn').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-hover'));
        });

        document.querySelectorAll('[data-cursor="view"]').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-view'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-view'));
        });

        document.querySelectorAll('[data-cursor="play"]').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-play'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-play'));
        });
    }

    // ==========================================================================
    // ==========================================================================
    // 4. PERMANENT ARABIC LANGUAGE ENFORCEMENT
    // ==========================================================================
    let currentLang = 'ar';
    try {
        localStorage.setItem('atelier_lang', 'ar');
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } catch(e) {}

    // Dark theme permanent enforcement (No day-mode toggle)
    try {
        localStorage.removeItem('atelier_theme');
        document.body.classList.remove('light-mode');
    } catch(e) {}

    // ==========================================================================
    // 5. MOBILE DRAWER NAVIGATION
    // ==========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('active');
            mobileToggle.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        mobileDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================================================
    // 7. EXHIBITION WALL VS. STUDIO INDEX VIEW TOGGLE
    // ==========================================================================
    const btnWall = document.getElementById('btn-mode-wall');
    const btnIndex = document.getElementById('btn-mode-index');
    const exhibitionWall = document.getElementById('exhibition-wall');
    const studioIndex = document.getElementById('studio-index');
    const floatingPortal = document.getElementById('floating-portal');
    const portalImg = document.getElementById('portal-img');

    if (btnWall && btnIndex && exhibitionWall && studioIndex) {
        btnWall.addEventListener('click', () => {
            btnWall.classList.add('active');
            btnIndex.classList.remove('active');
            exhibitionWall.style.display = 'flex';
            studioIndex.style.display = 'none';
        });

        btnIndex.addEventListener('click', () => {
            btnIndex.classList.add('active');
            btnWall.classList.remove('active');
            exhibitionWall.style.display = 'none';
            studioIndex.style.display = 'flex';
        });
    }

    // Floating Preview Portal on Studio Index
    if (floatingPortal && portalImg) {
        document.querySelectorAll('.index-row-item').forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const img = item.getAttribute('data-portal-img');
                if (img) {
                    portalImg.src = img;
                    floatingPortal.classList.add('visible');
                }
            });

            item.addEventListener('mousemove', (e) => {
                floatingPortal.style.left = `${e.clientX}px`;
                floatingPortal.style.top = `${e.clientY}px`;
            });

            item.addEventListener('mouseleave', () => {
                floatingPortal.classList.remove('visible');
            });

            item.addEventListener('click', () => {
                const projectId = item.getAttribute('data-project-id');
                if (projectId) openCaseStudy(projectId);
            });
        });
    }

    // ==========================================================================
    // 8. ARCHIVE FILTER TABS
    // ==========================================================================
    const archiveTabs = document.querySelectorAll('.archive-tab');
    const spreads = document.querySelectorAll('.exhibition-spread');

    archiveTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            archiveTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');

            spreads.forEach(spread => {
                const category = spread.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    spread.style.display = 'grid';
                } else {
                    spread.style.display = 'none';
                }
            });
        });
    });

    // ==========================================================================
    // 9. INTERACTIVE BRAND IDENTITY SHOWCASE MODAL SYSTEM
    // ==========================================================================
    const brandProjectsDatabase = {
        'bunz': {
            title: "BUNZ BURGER",
            year: "2025",
            category: "VISUAL IDENTITY // PACKAGING",
            headline: "تصميم هوية بصرية وتغليف كامل لمطعم برجر عصري",
            behanceUrl: "https://www.behance.net/gallery/227914985/BUNZ-Identity-Campaign-Design-for-a-Burger",
            assets: [
                { src: "../images/Thumbnail - Size.webp", title: "الهوية الرئيسية والشعار الرسمي // Master Identity" },
                { src: "../images/brger (1).webp", title: "علبة البرجر الكرتونية الأساسية // Burger Packaging Box" },
                { src: "../images/brger (2).webp", title: "كيس التيك أواي الورقي الفاخر // Takeout Paper Bag" },
                { src: "../images/brger (3).webp", title: "ورق تغليف الساندوتش المنقوش // Custom Wrap Paper" },
                { src: "../images/brger (4).webp", title: "أكواب المشروبات الباردة المطبوعة // Branded Drink Cups" },
                { src: "../images/brger (5).webp", title: "علبة البطاطس المقلية المميزة // French Fries Box" },
                { src: "../images/brger (6).webp", title: "حزمة المطبوعات والتغليف الكاملة // Full Packaging Suite" },
                { src: "../images/brger (7).webp", title: "تطبيق الشعار والتايبوغرافي الديناميكي // Typography & Logomark" },
                { src: "../images/brger (8).webp", title: "دليل الهوية ونظام الألوان الجريء // Brand Visual System" },
                { src: "../images/brger (9).webp", title: "أكياس التوصيل كبيرة الحجم // Large Delivery Bag" },
                { src: "../images/brger (10).webp", title: "تصميم بطاقة قائمة الوجبات // Dine-in Menu Layout" },
                { src: "../images/brger (11).webp", title: "بورد العروض الترويجية الرقمية // Promo Screen Board" },
                { src: "../images/brger (12).webp", title: "ملصقات وستيكرات إغلاق الوجبات // Security Seal Stickers" },
                { src: "../images/brger (13).webp", title: "أزياء ويونيفورم طاقم العمل // Staff Apparel Mockup" },
                { src: "../images/brger (14).webp", title: "لافتة واجهة المطعم الرئيسية // Outdoor Storefront Signage" }
            ]
        },
        'pizza-steve': {
            title: "PIZZA STEVE",
            year: "2024",
            category: "BRANDING // CHARACTER MASCOT",
            headline: "تطوير هوية بصرية ممتعة وماسكوت كرتوني لمطعم بيتزا",
            behanceUrl: "https://www.behance.net/gallery/227664051/Mini-Identity-Concept-Pizza-Steve",
            assets: [
                { src: "../images/Thumbnail.webp", title: "شخصية الماسكوت وهوية البراند // Mascot & Brand Concept" },
                { src: "../images/pizaa (1).webp", title: "علبة البيتزا الإيطالية العائلية الكبيرة // Large Pizza Box" },
                { src: "../images/pizaa (2).webp", title: "علبة البيتزا المتوسطة والتوصيل // Medium Delivery Box" },
                { src: "../images/pizaa (3).webp", title: "رسم تفاصيل الماسكوت والخطوط // Illustrated Character Artwork" },
                { src: "../images/pizaa (4).webp", title: "تطبيقات الهوية والمطبوعات الورقية // Stationery & Collateral" }
            ]
        }
    };

    const brandModal = document.getElementById('brand-showcase-modal');
    const closeBrandModalBtn = document.getElementById('close-brand-modal');
    const brandModalYear = document.getElementById('brand-modal-year');
    const brandModalCategory = document.getElementById('brand-modal-category');
    const brandModalCount = document.getElementById('brand-modal-count');
    const brandModalTitle = document.getElementById('brand-modal-title');
    const brandModalHeadline = document.getElementById('brand-modal-headline');
    const brandModalBehanceBtn = document.getElementById('brand-modal-behance-btn');
    const spotlightMainImg = document.getElementById('spotlight-main-img');
    const spotlightAssetTitle = document.getElementById('spotlight-asset-title');
    const spotlightCounter = document.getElementById('spotlight-counter');
    const spotlightPrevBtn = document.getElementById('spotlight-prev-btn');
    const spotlightNextBtn = document.getElementById('spotlight-next-btn');
    const brandFilmstripTrack = document.getElementById('brand-filmstrip-track');
    const brandModalGrid = document.getElementById('brand-modal-grid');

    let currentBrandSlug = null;
    let currentBrandAssetIdx = 0;

    function setSpotlightAsset(idx) {
        if (!currentBrandSlug || !brandProjectsDatabase[currentBrandSlug]) return;
        const project = brandProjectsDatabase[currentBrandSlug];
        if (idx < 0) idx = project.assets.length - 1;
        if (idx >= project.assets.length) idx = 0;
        currentBrandAssetIdx = idx;

        const asset = project.assets[idx];

        // Smooth transition animation
        if (spotlightMainImg) {
            spotlightMainImg.classList.add('switching');
            setTimeout(() => {
                spotlightMainImg.src = asset.src;
                spotlightMainImg.alt = asset.title;
                spotlightMainImg.classList.remove('switching');
            }, 120);
        }

        if (spotlightAssetTitle) spotlightAssetTitle.textContent = asset.title;
        if (spotlightCounter) {
            const pad = (n) => (n).toString().padStart(2, '0');
            spotlightCounter.textContent = `${pad(idx + 1)} / ${pad(project.assets.length)}`;
        }

        // Update active class in filmstrip
        if (brandFilmstripTrack) {
            const thumbs = brandFilmstripTrack.querySelectorAll('.filmstrip-thumb');
            thumbs.forEach((t, i) => {
                if (i === idx) {
                    t.classList.add('active');
                    t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    t.classList.remove('active');
                }
            });
        }
    }

    function openBrandShowcase(slug) {
        const project = brandProjectsDatabase[slug];
        if (!project || !brandModal) return;

        currentBrandSlug = slug;
        currentBrandAssetIdx = 0;

        if (brandModalYear) brandModalYear.textContent = project.year;
        if (brandModalCategory) brandModalCategory.textContent = project.category;
        if (brandModalCount) brandModalCount.textContent = `${project.assets.length} DESIGNS & ASSETS`;
        if (brandModalTitle) brandModalTitle.textContent = project.title;
        if (brandModalHeadline) brandModalHeadline.textContent = project.headline;
        if (brandModalBehanceBtn) brandModalBehanceBtn.href = project.behanceUrl;

        // Build Filmstrip Thumbnails
        if (brandFilmstripTrack) {
            brandFilmstripTrack.innerHTML = '';
            project.assets.forEach((item, i) => {
                const thumb = document.createElement('div');
                thumb.className = `filmstrip-thumb ${i === 0 ? 'active' : ''}`;
                thumb.title = item.title;
                thumb.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
                thumb.addEventListener('click', () => setSpotlightAsset(i));
                brandFilmstripTrack.appendChild(thumb);
            });
        }

        // Build Waterfall Deliverables Grid with Staggered Animation
        if (brandModalGrid) {
            brandModalGrid.innerHTML = '';
            project.assets.forEach((item, i) => {
                const card = document.createElement('div');
                card.className = 'brand-grid-card';
                card.style.animationDelay = `${i * 0.04}s`;
                card.innerHTML = `
                    <div class="brand-grid-media">
                        <img src="${item.src}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="brand-grid-footer">
                        <span>${item.title.split('//')[0].trim()}</span>
                        <span style="font-family: var(--font-mono); color: var(--color-accent-green); font-size: 0.74rem;">#${(i + 1).toString().padStart(2, '0')} ↗</span>
                    </div>
                `;
                card.addEventListener('click', () => {
                    setSpotlightAsset(i);
                    const spotlightStage = document.querySelector('.brand-spotlight-stage');
                    if (spotlightStage) {
                        spotlightStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
                brandModalGrid.appendChild(card);
            });
        }

        setSpotlightAsset(0);

        brandModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeBrandShowcase() {
        if (!brandModal) return;
        brandModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Connect trigger clicks (Cards, Explore Buttons, Cover Images)
    document.querySelectorAll('.btn-brand-explore, .spread-media-monograph[data-project-slug]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const slug = el.getAttribute('data-project-slug');
            if (slug) openBrandShowcase(slug);
        });
    });

    document.querySelectorAll('.project-spread-item[data-project-slug]').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('.btn-brand-behance')) return; // Allow direct Behance link click
            const slug = item.getAttribute('data-project-slug');
            if (slug) openBrandShowcase(slug);
        });
    });

    if (spotlightPrevBtn) {
        spotlightPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setSpotlightAsset(currentBrandAssetIdx - 1);
        });
    }

    if (spotlightNextBtn) {
        spotlightNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setSpotlightAsset(currentBrandAssetIdx + 1);
        });
    }

    if (closeBrandModalBtn) {
        closeBrandModalBtn.addEventListener('click', closeBrandShowcase);
    }

    if (brandModal) {
        brandModal.addEventListener('click', (e) => {
            if (e.target === brandModal) closeBrandShowcase();
        });
    }

    // Keyboard navigation (Arrow keys & Escape)
    document.addEventListener('keydown', (e) => {
        if (!brandModal || !brandModal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeBrandShowcase();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            setSpotlightAsset(currentBrandAssetIdx + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            setSpotlightAsset(currentBrandAssetIdx - 1);
        }
    });

    // Legacy Case Study Modal Support
    const caseModal = document.getElementById('case-study-modal');
    const closeCaseBtn = document.getElementById('close-case-modal');
    if (closeCaseBtn && caseModal) {
        closeCaseBtn.addEventListener('click', () => {
            caseModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        caseModal.addEventListener('click', (e) => {
            if (e.target === caseModal) {
                caseModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ==========================================================================
    // 10. LIVE CINEMA VIDEO PLAYER & REAL-TIME NLE TIMELINE ENGINE
    // ==========================================================================
    const liveCinemaPlayer = document.getElementById('live-cinema-player');
    const liveSoundToggle = document.getElementById('live-sound-toggle');
    const soundIcon = document.getElementById('sound-icon');
    const soundText = document.getElementById('sound-text');
    const scrubberTrack = document.getElementById('scrubber-track');
    const scrubberProgress = document.getElementById('scrubber-progress');
    const timecodeReadout = document.getElementById('nle-timecode');
    const cinemaCurrentTitle = document.getElementById('cinema-current-title');
    const cinemaQueueBadge = document.getElementById('cinema-queue-badge');

    // 10-Reel Vertical Master Playlist
    const cinemaPlaylist = [
        {
            src: '../videos/edu (1).mp4',
            title: 'REEL 01 // SELECTED WORK'
        },
        {
            src: '../videos/edu (2).mp4',
            title: 'REEL 02 // SELECTED WORK'
        },
        {
            src: '../videos/edu (3).mp4',
            title: 'REEL 03 // SELECTED WORK'
        },
        {
            src: '../videos/edu (4).mp4',
            title: 'REEL 04 // SELECTED WORK'
        },
        {
            src: '../videos/edu (5).mp4',
            title: 'REEL 05 // SELECTED WORK'
        },
        {
            src: '../videos/edu (6).mp4',
            title: 'REEL 06 // SELECTED WORK'
        },
        {
            src: '../videos/edu (7).mp4',
            title: 'REEL 07 // SELECTED WORK'
        },
        {
            src: '../videos/medcal (1).mp4',
            title: 'REEL 08 // SELECTED WORK'
        },
        {
            src: '../videos/medcal (2).mp4',
            title: 'REEL 09 // SELECTED WORK'
        },
        {
            src: '../videos/medcal (3).mp4',
            title: 'REEL 10 // SELECTED WORK'
        }
    ];

    let currentCinemaIdx = 0;

    function formatTimecode(seconds) {
        if (isNaN(seconds) || seconds < 0) seconds = 0;
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        const frames = Math.floor((seconds % 1) * 25);
        const pad = (n) => n.toString().padStart(2, '0');
        return `TIMECODE: 00:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
    }

    function loadCinemaVideo(idx) {
        if (!liveCinemaPlayer || !cinemaPlaylist[idx]) return;
        currentCinemaIdx = idx;
        const item = cinemaPlaylist[idx];
        const wasMuted = liveCinemaPlayer.muted;
        liveCinemaPlayer.src = item.src;
        liveCinemaPlayer.muted = wasMuted;

        if (cinemaCurrentTitle) cinemaCurrentTitle.textContent = item.title;
        if (cinemaQueueBadge) cinemaQueueBadge.textContent = `REEL: ${(idx + 1).toString().padStart(2, '0')} / 10`;

        liveCinemaPlayer.play().catch(err => {
            console.log('Autoplay muted by browser policy:', err);
            liveCinemaPlayer.muted = true;
            updateSoundBtnState(true);
            liveCinemaPlayer.play();
        });
    }

    function updateSoundBtnState(isMuted) {
        if (!soundIcon || !soundText) return;
        if (isMuted) {
            soundIcon.className = 'fas fa-volume-mute';
            soundText.textContent = (typeof currentLang !== 'undefined' && currentLang === 'ar') ? 'تشغيل الصوت 🔊' : 'Unmute Audio 🔊';
        } else {
            soundIcon.className = 'fas fa-volume-up';
            soundText.textContent = (typeof currentLang !== 'undefined' && currentLang === 'ar') ? 'كتم الصوت 🔇' : 'Mute Audio 🔇';
        }
    }

    if (liveCinemaPlayer) {
        // Initial play attempt on load (muted autoplay allowed across all modern browsers)
        liveCinemaPlayer.play().catch(err => console.log('Autoplay initiated:', err));

        // Real-time Scrubber & Timecode Synchronization
        liveCinemaPlayer.addEventListener('timeupdate', () => {
            if (liveCinemaPlayer.duration) {
                const percent = (liveCinemaPlayer.currentTime / liveCinemaPlayer.duration) * 100;
                if (scrubberProgress) scrubberProgress.style.width = `${percent}%`;
            }
            if (timecodeReadout) {
                timecodeReadout.textContent = formatTimecode(liveCinemaPlayer.currentTime);
            }
        });

        // Auto-advance to next video when current video completes
        liveCinemaPlayer.addEventListener('ended', () => {
            const nextIdx = (currentCinemaIdx + 1) % cinemaPlaylist.length;
            loadCinemaVideo(nextIdx);
        });
    }

    // Audio Unmute/Mute Toggle Button
    if (liveSoundToggle && liveCinemaPlayer) {
        liveSoundToggle.addEventListener('click', () => {
            liveCinemaPlayer.muted = !liveCinemaPlayer.muted;
            updateSoundBtnState(liveCinemaPlayer.muted);
        });
    }

    // Interactive Real-Time Scrubber Seeking
    if (scrubberTrack && scrubberProgress && liveCinemaPlayer) {
        let isScrubbing = false;

        const seekVideo = (e) => {
            const rect = scrubberTrack.getBoundingClientRect();
            let percent = (e.clientX - rect.left) / rect.width;
            percent = Math.max(0, Math.min(1, percent));
            scrubberProgress.style.width = `${percent * 100}%`;

            if (liveCinemaPlayer.duration) {
                liveCinemaPlayer.currentTime = percent * liveCinemaPlayer.duration;
            }
        };

        scrubberTrack.addEventListener('mousedown', (e) => {
            isScrubbing = true;
            seekVideo(e);
        });

        window.addEventListener('mousemove', (e) => {
            if (isScrubbing) seekVideo(e);
        });

        window.addEventListener('mouseup', () => {
            isScrubbing = false;
        });

        // Mobile touch scrubbing
        scrubberTrack.addEventListener('touchstart', (e) => {
            if (e.touches[0]) {
                isScrubbing = true;
                const rect = scrubberTrack.getBoundingClientRect();
                let percent = (e.touches[0].clientX - rect.left) / rect.width;
                percent = Math.max(0, Math.min(1, percent));
                scrubberProgress.style.width = `${percent * 100}%`;
                if (liveCinemaPlayer.duration) {
                    liveCinemaPlayer.currentTime = percent * liveCinemaPlayer.duration;
                }
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (isScrubbing && e.touches[0]) {
                const rect = scrubberTrack.getBoundingClientRect();
                let percent = (e.touches[0].clientX - rect.left) / rect.width;
                percent = Math.max(0, Math.min(1, percent));
                scrubberProgress.style.width = `${percent * 100}%`;
                if (liveCinemaPlayer.duration) {
                    liveCinemaPlayer.currentTime = percent * liveCinemaPlayer.duration;
                }
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            isScrubbing = false;
        });
    }

    // ==========================================================================
    // 11. UNIVERSAL 3D PLAYING CARDS DECK ENGINE (جميع كوتشينات التصاميم والفيديو)
    // ==========================================================================
    const deckWraps = document.querySelectorAll('.card-deck-showcase-wrap');

    deckWraps.forEach(wrap => {
        const stack = wrap.querySelector('.card-deck-stack');
        if (!stack) return;

        const cards = wrap.querySelectorAll('.deck-card-item');
        const prevBtn = wrap.querySelector('.deck-prev-btn');
        const nextBtn = wrap.querySelector('.deck-next-btn');
        const autoToggle = wrap.querySelector('.deck-autoplay-toggle');
        const autoIcon = wrap.querySelector('.autoplay-icon');
        const autoText = wrap.querySelector('.autoplay-text');
        const counterBadge = wrap.querySelector('.deck-counter');

        let currentIdx = 0;
        const total = cards.length;
        if (!total) return;

        let autoTimer = null;
        let isAutoplaying = true;

        function updateStack() {
            cards.forEach((card, i) => {
                const offset = (i - currentIdx + total) % total;
                if (offset === 0) {
                    card.setAttribute('data-card-pos', '0');
                } else if (offset === 1) {
                    card.setAttribute('data-card-pos', '1');
                } else if (offset === 2) {
                    card.setAttribute('data-card-pos', '2');
                } else if (offset === 3) {
                    card.setAttribute('data-card-pos', '3');
                } else {
                    card.setAttribute('data-card-pos', 'hidden');
                }
            });

            if (counterBadge) {
                const curStr = (currentIdx + 1).toString().padStart(2, '0');
                const totStr = total.toString().padStart(2, '0');
                const prefix = wrap.id === 'screening-room' ? 'REEL' : 'CARD';
                counterBadge.textContent = `${prefix} ${curStr} / ${totStr}`;
            }
        }

        function advanceCard() {
            currentIdx = (currentIdx + 1) % total;
            updateStack();
        }

        function retreatCard() {
            currentIdx = (currentIdx - 1 + total) % total;
            updateStack();
        }

        function startAutoplay() {
            stopAutoplay();
            autoTimer = setInterval(advanceCard, 2200);
            isAutoplaying = true;
            if (autoIcon) autoIcon.className = 'fas fa-pause autoplay-icon';
            if (autoText) autoText.textContent = 'PAUSE';
        }

        function stopAutoplay() {
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
            isAutoplaying = false;
            if (autoIcon) autoIcon.className = 'fas fa-play autoplay-icon';
            if (autoText) autoText.textContent = 'PLAY';
        }

        // Initialize state
        updateStack();
        startAutoplay();

        // Clicking card in stack
        cards.forEach((card, i) => {
            card.addEventListener('click', (e) => {
                // Video card playback trigger
                const vidIdxAttr = card.getAttribute('data-video-index');
                if (vidIdxAttr !== null) {
                    const vIdx = parseInt(vidIdxAttr, 10);
                    if (!isNaN(vIdx)) {
                        loadCinemaVideo(vIdx);
                        const cinemaSuite = document.getElementById('editing-suite');
                        if (cinemaSuite) {
                            cinemaSuite.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }

                // Advance to next card
                advanceCard();
            });
        });

        // Hover pause / resume
        stack.addEventListener('mouseenter', () => {
            if (isAutoplaying && autoTimer) {
                clearInterval(autoTimer);
            }
        });

        stack.addEventListener('mouseleave', () => {
            if (isAutoplaying) {
                startAutoplay();
            }
        });

        // Touch swipe gestures
        let touchStartX = 0;
        let touchEndX = 0;

        stack.addEventListener('touchstart', (e) => {
            if (e.changedTouches[0]) touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        stack.addEventListener('touchend', (e) => {
            if (e.changedTouches[0]) {
                touchEndX = e.changedTouches[0].screenX;
                const diff = touchEndX - touchStartX;
                if (Math.abs(diff) > 40) {
                    if (diff < 0) {
                        advanceCard();
                    } else {
                        retreatCard();
                    }
                }
            }
        }, { passive: true });

        // Controls buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                advanceCard();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                retreatCard();
            });
        }

        if (autoToggle) {
            autoToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                if (isAutoplaying) {
                    stopAutoplay();
                } else {
                    startAutoplay();
                }
            });
        }
    });

    // ==========================================================================
    // 11B. EXPANDABLE GALLERIES (ACCORDIONS: عرض كل التصاميم / عرض أقل)
    // ==========================================================================
    document.querySelectorAll('.btn-expand-gallery').forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const targetGrid = document.getElementById(targetId);
        const btnTextEl = btn.querySelector('.btn-text');
        const originalText = btnTextEl ? btnTextEl.textContent : '';

        if (targetGrid) {
            btn.addEventListener('click', () => {
                const isExpanded = targetGrid.classList.toggle('expanded');
                btn.classList.toggle('active', isExpanded);

                if (btnTextEl) {
                    if (isExpanded) {
                        btnTextEl.textContent = (typeof currentLang !== 'undefined' && currentLang === 'ar') ? 'عرض أقل ▴' : 'Show Less ▴';
                    } else {
                        btnTextEl.textContent = originalText;
                    }
                }

                const icon = btn.querySelector('.fa-chevron-down, .fa-chevron-up');
                if (icon) {
                    if (isExpanded) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                }
            });
        }
    });

    // Wire clicking video tiles in grid to load into master player
    document.querySelectorAll('.design-card-tile.video-deck-card').forEach(tile => {
        tile.addEventListener('click', () => {
            const vidIdxAttr = tile.getAttribute('data-video-index');
            if (vidIdxAttr !== null) {
                const vIdx = parseInt(vidIdxAttr, 10);
                if (!isNaN(vIdx)) {
                    loadCinemaVideo(vIdx);
                    const cinemaSuite = document.getElementById('editing-suite');
                    if (cinemaSuite) {
                        cinemaSuite.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });

    // Wire clicking companion flanking phones in panoramic stage
    document.querySelectorAll('.reels-companion-phone').forEach(phone => {
        phone.addEventListener('click', () => {
            const vidIdxAttr = phone.getAttribute('data-video-index');
            if (vidIdxAttr !== null) {
                const vIdx = parseInt(vidIdxAttr, 10);
                if (!isNaN(vIdx)) {
                    loadCinemaVideo(vIdx);
                    const cinemaSuite = document.getElementById('editing-suite');
                    if (cinemaSuite) {
                        cinemaSuite.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });

    // Scroll entrance animation for companion phones in panoramic stage
    const panoramicStage = document.getElementById('reels-panoramic-stage');
    if (panoramicStage && 'IntersectionObserver' in window) {
        const stageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    panoramicStage.classList.add('in-view');
                }
            });
        }, { threshold: 0.15 });
        stageObserver.observe(panoramicStage);
    }

    // ==========================================================================
    // 12. TESTIMONIALS & DESIGN TILES LIGHTBOX
    // ==========================================================================
    const praiseTrack = document.getElementById('praise-track');
    const praisePrev = document.getElementById('praise-prev');
    const praiseNext = document.getElementById('praise-next');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');

    if (praisePrev && praiseTrack) {
        praisePrev.addEventListener('click', () => {
            const shift = document.documentElement.dir === 'rtl' ? 360 : -360;
            praiseTrack.scrollBy({ left: shift, behavior: 'smooth' });
        });
    }

    if (praiseNext && praiseTrack) {
        praiseNext.addEventListener('click', () => {
            const shift = document.documentElement.dir === 'rtl' ? -360 : 360;
            praiseTrack.scrollBy({ left: shift, behavior: 'smooth' });
        });
    }

    // Zoom on any element with data-zoom (design tiles, brand assets, praise snapshots)
    document.querySelectorAll('[data-zoom]').forEach(item => {
        item.addEventListener('click', (e) => {
            // If the element is a 3D deck card with a video, don't open image lightbox
            if (item.classList.contains('video-deck-card')) return;
            const src = item.getAttribute('data-zoom');
            if (lightboxModal && lightboxImg && src) {
                e.stopPropagation();
                lightboxImg.src = src;
                lightboxModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeLightbox && lightboxModal) {
        closeLightbox.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ==========================================================================
    // 13. ANIMATED METRIC COUNTERS ON SCROLL
    // ==========================================================================
    const counterElements = document.querySelectorAll('[data-counter]');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counterElements.forEach(el => {
                    const target = parseInt(el.getAttribute('data-counter')) || 0;
                    const suffix = el.textContent.includes('+') ? '+' : (el.textContent.includes('%') ? '%' : '');
                    let count = 0;
                    const increment = target / 35;

                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            el.textContent = `${target}${suffix}`;
                            clearInterval(timer);
                        } else {
                            el.textContent = `${Math.floor(count)}${suffix}`;
                        }
                    }, 35);
                });
            }
        });
    }, { threshold: 0.25 });

    const statsGrid = document.querySelector('.hero-director-stats');
    if (statsGrid) observer.observe(statsGrid);

    // ==========================================================================
    // 14. LIVE CAIRO TIMECODE CLOCK
    // ==========================================================================
    const clockEl = document.getElementById('cairo-clock');
    function tickCairo() {
        if (!clockEl) return;
        const opts = {
            timeZone: 'Africa/Cairo',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const cairoStr = new Intl.DateTimeFormat('en-US', opts).format(new Date());
        clockEl.textContent = `CAIRO ${cairoStr}`;
    }
    tickCairo();
    setInterval(tickCairo, 1000);

    // ==========================================================================
    // 14. DIRECTOR MANIFESTO CINEMATIC REVEAL (أنيميشن الكشف السينمائي الانسيابي)
    // ==========================================================================
    function initDirectorManifestoReveal() {
        const manifestoCard = document.getElementById('hero-manifesto');
        if (!manifestoCard) return;

        function triggerReveal() {
            manifestoCard.classList.add('manifesto-active');
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        triggerReveal();
                        observer.unobserve(manifestoCard);
                    }
                });
            }, { threshold: 0.12 });
            observer.observe(manifestoCard);
        } else {
            triggerReveal();
        }
    }

    initDirectorManifestoReveal();

    // ==========================================================================
    // 15. ESCAPE KEY TO CLOSE ANY OPEN MODAL
    // ==========================================================================
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (caseModal && caseModal.classList.contains('active')) caseModal.classList.remove('active');
            if (videoModal && videoModal.classList.contains('active')) {
                videoModal.classList.remove('active');
                if (videoIframe) videoIframe.src = '';
            }
            if (lightboxModal && lightboxModal.classList.contains('active')) lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Ensure no legacy realm attribute or storage persists
    try {
        localStorage.removeItem('yg_portfolio_realm');
        document.documentElement.removeAttribute('data-realm');
    } catch (e) {
        console.warn('Storage cleanup:', e);
    }

});
