// 1. Responsive Navigation Menu
const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".nav-links");

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 2. Language Toggle
// teckt
document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let selectedLang = this.innerText === "العربية" ? "ar" : "en";
      document.documentElement.lang = selectedLang;
      translatePage(selectedLang);
    });
  });

  function translatePage(lang) {
    const translations = {
      ar: {
        "Book Your Ticket": "احجز تذكرتك",
        "Full Name": "الاسم الكامل",
        Email: "البريد الإلكتروني",
        "Phone Number": "رقم الهاتف",
        "Visit Date": "تاريخ الزيارة",
        "Ticket Type": "نوع التذكرة",
        Standard: "عادية",
        VIP: "كبار الشخصيات",
        Student: "طالب",
        "Number of Tickets": "عدد التذاكر",
        "Book Now": "احجز الآن",
        "Call Us": "اتصل بنا",
        "FOLLOW US": "تابعنا",
      },
      en: {
        "احجز تذكرتك": "Book Your Ticket",
        "الاسم الكامل": "Full Name",
        "البريد الإلكتروني": "Email",
        "رقم الهاتف": "Phone Number",
        "تاريخ الزيارة": "Visit Date",
        "نوع التذكرة": "Ticket Type",
        عادية: "Standard",
        "كبار الشخصيات": "VIP",
        طالب: "Student",
        "عدد التذاكر": "Number of Tickets",
        "احجز الآن": "Book Now",
        "اتصل بنا": "Call Us",
        تابعنا: "FOLLOW US",
      },
    };

    document.querySelectorAll("h2, label, button, a, li").forEach((el) => {
      let text = el.innerText.trim();
      if (translations[lang][text]) {
        el.innerText = translations[lang][text];
      }
    });
  }
});
// home
const translations = {
  en: {
    about: "About",
    contact: "Contact",
    home: "Home",
    history: "HISTORY",
    section1Text:
      "Welcome to the official website for booking tickets to the Grand Egyptian Museum.",
    section1SText: ` Please note that the museum is currently offering limited-entry
              visits to test site readiness and the visitor experience before
              the official opening. During this phase, you will be able to visit
              the main exhibition halls, the Grand Hall, the Grand Staircase,
              the commercial area, and the outdoor gardens. However, the King
              Tutankhamun galleries will remain closed until the official
              opening. We remind you that this is the only official platform for
              purchasing tickets, and the museum holds no responsibility for
              tickets bought from other sources `,
    spany:
      " We look forward to welcoming you soon at the Grand EgyptianMuseum.",
    text1:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
    heroTitle:
      "DISCOVER <span class='highlight'>EGYPT</span> TIMELESS TREASURES",
    heroSubtitle:
      "Experience the wonders of ancient Egypt like never before...",
    exploreNow: "Explore Now",
    contactUs: "Contact Us",
    callUs: "Call Us",
    followUs: "FOLLOW US",
    kidsMuseum: "KID's Museum",
    museumStore: "Museum Store",
    virtualTour: "Virtual Tour",
    goExplore: "Go Explore!",
    yourName: "Your Name",
    yourMail: "Your Mail",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
  },
  ar: {
    about: "معلومات عنا",
    contact: "اتصل بنا",
    home: "الرئيسية",
    history: "التاريخ",
    section1Text: "مرحبًا بك في الموقع الرسمي لحجز تذاكر المتحف المصري الكبير.",
    section1SText: `يرجى ملاحظة أن المتحف يقدم حاليًا زيارات محدودة لاختبار جاهزية الموقع وتجربة الزوار قبل الافتتاح الرسمي. خلال هذه المرحلة، يمكنك زيارة قاعات المعارض الرئيسية، والقاعة الكبرى، والسلم العظيم، والمنطقة التجارية، والحدائق الخارجية. ومع ذلك، ستظل قاعات الملك توت عنخ آمون مغلقة حتى الافتتاح الرسمي. نذكرك بأن هذه هي المنصة الرسمية الوحيدة لشراء التذاكر، ولا يتحمل المتحف أي مسؤولية عن التذاكر المشتراة من مصادر أخرى.`,
    spany: "نتطلع إلى الترحيب بكم قريبًا في المتحف المصري الكبير.",
    text1:
      "كان هناك قوس كبير، تجمع عنده الناس، وكان يمثل بداية الطريق نحو التاريخ العظيم.",
    heroTitle: "اكتشف <span class='highlight'>مصر</span> وكنوزها الخالدة",
    heroSubtitle: "اكتشف عجائب مصر القديمة كما لم تفعل من قبل...",
    exploreNow: "استكشف الآن",
    contactUs: "اتصل بنا",
    callUs: "اتصل بنا",
    followUs: "تابعنا",
    kidsMuseum: "متحف الأطفال",
    museumStore: "متجر المتحف",
    virtualTour: "جولة افتراضية",
    goExplore: "استكشف!",
    yourName: "اسمك",
    yourMail: "بريدك الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang =
        button.textContent.trim() === "English" ? "en" : "ar";
      translatePage(selectedLang);
    });
  });
});

function translatePage(lang) {
  document.querySelector(".nav-links li:nth-child(1) a").textContent =
    translations[lang].about;
  document.querySelector(".nav-links li:nth-child(2) a").textContent =
    translations[lang].contact;
  document.querySelector(".nav-links li:nth-child(3) a").textContent =
    translations[lang].home;
  document.querySelector(".nav-links li:nth-child(4) a").textContent =
    translations[lang].history;
  document.querySelector("[data-translate='section1Text']").textContent =
    translations[lang].section1Text;
  document.querySelector("[data-translate='section1SText']").textContent =
    translations[lang].section1SText;
  document.querySelector("[data-translate='text1']").textContent =
    translations[lang].text1;
  document.querySelector("[data-translate='spany']").textContent =
    translations[lang].spany;
  document.querySelector(".hero-title").innerHTML =
    translations[lang].heroTitle;
  document.querySelector(".hero-subtitle").textContent =
    translations[lang].heroSubtitle;
  document.querySelector(".cta-button").textContent =
    translations[lang].exploreNow;
  document.querySelector(".main-heding h2").textContent =
    translations[lang].contactUs;
  document.querySelector(".contact h2").textContent = translations[lang].callUs;
  document.querySelector(".Social h2").textContent =
    translations[lang].followUs;
  document.querySelectorAll(".services .box h2")[0].textContent =
    translations[lang].kidsMuseum;
  document.querySelectorAll(".services .box h2")[1].textContent =
    translations[lang].museumStore;
  document.querySelectorAll(".services .box h2")[2].textContent =
    translations[lang].virtualTour;
  document
    .querySelectorAll(".show")
    .forEach((btn) => (btn.textContent = translations[lang].goExplore));
  document.querySelector("input[name='name']").placeholder =
    translations[lang].yourName;
  document.querySelector("input[name='Mail']").placeholder =
    translations[lang].yourMail;
  document.querySelector("textarea[name='message']").placeholder =
    translations[lang].yourMessage;
  document.querySelector("input[type='submit']").value =
    translations[lang].sendMessage;
}

// 3. Hero Section Image Slider
const images = [
  "./image/اللوبي.jpg",
  "./image/sliders_ar1739101249Banner AR.jpg ",
  "./image/المتحف-المصري-25-1729421774.webp",
  "./image/تصميم بدون عنوان.png",
];

let currentIndex = 0;
const heroSection = document.querySelector(".landing");
const nextDiv = document.querySelector(".mov");
const prevDiv = document.querySelector(".mov2");
const bullets = document.querySelectorAll(".bullets li");

// Set initial background on page load
heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
heroSection.style.transition = "opacity 1s ease-in-out";

function updateHeroBackground() {
  heroSection.style.opacity = 0;
  setTimeout(() => {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    heroSection.style.opacity = 1;
  }, 500);
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle("active", index === currentIndex);
  });
}

nextDiv.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateHeroBackground();
});

prevDiv.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateHeroBackground();
});

let autoSlide = setInterval(() => {
  if (!document.hidden) {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroBackground();
  }
}, 5000);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(autoSlide);
  } else {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateHeroBackground();
    }, 5000);
  }
});

// 4. "Show More" Button in Services Section
const showButtons = document.querySelectorAll(".show");
showButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.previousElementSibling;
    content.classList.toggle("expanded");
    button.textContent = content.classList.contains("expanded")
      ? "Show Less"
      : "Show More";
  });
});
