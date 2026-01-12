// Theme toggle functionality
let currentTheme = localStorage.getItem('theme') || 'light';

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// Language toggle
let currentLanguage = 'ar';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    if (currentLanguage === 'ar') {
        html.lang = 'ar';
        html.dir = 'rtl';
        localStorage.setItem('language', 'ar');
        updatePageText('ar');
    } else {
        html.lang = 'en';
        html.dir = 'ltr';
        localStorage.setItem('language', 'en');
        updatePageText('en');
    }
}

function updatePageText(lang) {
    const translations = {
        'en': {
            'nav-home': 'Home',
            'nav-courses': 'Courses',
            'nav-tools': 'Tools',
            'nav-activity': 'Activity',
            'btn-login': 'Login',
            'btn-register': 'Register',
        },
        'ar': {
            'nav-home': 'الرئيسية',
            'nav-courses': 'المواد',
            'nav-tools': 'الأدوات',
            'nav-activity': 'النشاط',
            'btn-login': 'تسجيل الدخول',
            'btn-register': 'إنشاء حساب',
        }
    };
}

// Poll functionality
document.querySelectorAll('.poll-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const rating = this.getAttribute('data-rating');
        const ratings = ['😞', '😕', '😐', '😊', '😍'];
        const messages = {
            'en': ['Thanks for the feedback!', 'We\'ll improve!', 'Let us know how to help', 'Glad you\'re happy!', 'Amazing! Thank you!'],
            'ar': ['شكراً على تقييمك!', 'سنحسنها!', 'أخبرنا كيف نساعد', 'نسعد برضاك!', 'رائع! شكراً لك!']
        };
        
        document.querySelectorAll('.poll-btn').forEach(b => b.classList.remove('voted'));
        this.classList.add('voted');
        
        const msg = document.getElementById('poll-message');
        msg.textContent = ratings[rating - 1] + ' ' + messages['ar'][rating - 1];
        msg.style.display = 'block';
    });
});

// Grade Calculator
function calculateGrade() {
    const midterm = parseFloat(document.getElementById('midterm').value) || 0;
    const assignments = parseFloat(document.getElementById('assignments').value) || 0;
    const participation = parseFloat(document.getElementById('participation').value) || 0;
    const finalExam = parseFloat(document.getElementById('final-exam').value) || 0;
    
    // Weights: midterm 25%, assignments 25%, participation 10%, final 40%
    const totalGrade = (midterm * 0.25) + (assignments * 0.25) + (participation * 0.10) + (finalExam * 0.40);
    
    const resultDiv = document.getElementById('grade-result');
    let letterGrade = 'F';
    if (totalGrade >= 90) letterGrade = 'A';
    else if (totalGrade >= 80) letterGrade = 'B';
    else if (totalGrade >= 70) letterGrade = 'C';
    else if (totalGrade >= 60) letterGrade = 'D';
    
    resultDiv.innerHTML = `
        <div class="result-label">Your Final Grade</div>
        <div class="result-value">${totalGrade.toFixed(2)} / 100</div>
        <div class="result-label">Letter Grade: <strong>${letterGrade}</strong></div>
    `;
    resultDiv.classList.add('show');
}

// Fee Calculator
function calculateFee() {
    const creditHours = parseFloat(document.getElementById('credit-hours').value) || 0;
    const isInternational = document.getElementById('international').checked;
    
    // Domestic: 50 JOD per credit hour, International: 100 USD per credit hour
    const feePerUnit = isInternational ? 100 : 50;
    const currency = isInternational ? 'USD' : 'JOD';
    const totalFee = creditHours * feePerUnit;
    
    const resultDiv = document.getElementById('fee-result');
    resultDiv.innerHTML = `
        <div class="result-label">Total University Fees</div>
        <div class="result-value">${totalFee.toFixed(2)} ${currency}</div>
        <div class="result-label">For ${creditHours} Credit Hours</div>
    `;
    resultDiv.classList.add('show');
}

// File Upload Handler
function handleFileUpload(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulate file upload
    const fileName = formData.get('file')?.name || 'Unknown file';
    const message = `File "${fileName}" uploaded successfully! It will be visible to the community shortly.`;
    
    alert(message);
    e.target.reset();
}

// Search functionality
function searchCourses() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.course-name')?.textContent.toLowerCase();
        const code = card.querySelector('.course-code')?.textContent.toLowerCase();
        
        if (name?.includes(searchTerm) || code?.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Activity Filter
function filterActivity(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter logic would go here
    console.log('Filtering by:', filter);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'ar';
    currentLanguage = savedLanguage;
    updateLanguage();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Search enter key support
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCourses();
        }
    });
}
