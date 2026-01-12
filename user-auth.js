// ملف JavaScript مشترك للتحقق من تسجيل الدخول والحد الأقصى للمواد

// التحقق من تسجيل الدخول عند تحميل الصفحة
function checkUserLogin() {
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!userLoggedIn && !adminLoggedIn) {
        // إذا لم يكن مسجل دخول، يمكنه التصفح كزائر
        return false;
    }
    return true;
}

// إضافة مساق إلى المكتبة الشخصية
function addToMyCourses(courseId) {
    // التحقق من تسجيل الدخول (مستخدم أو مشرف)
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!userLoggedIn && !adminLoggedIn) {
        alert('يجب تسجيل الدخول أولاً لإضافة مساقات إلى مكتبتك');
        window.location.href = 'login.html';
        return false;
    }
    
    // إذا كان المشرف، السماح له بإضافة المساقات بدون قيود
    if (adminLoggedIn) {
        // إنشاء حساب مؤقت للمشرف إذا لم يكن موجوداً
        let adminUser = JSON.parse(localStorage.getItem('adminUserData') || 'null');
        if (!adminUser) {
            adminUser = {
                username: 'admin',
                email: 'admin@ptuk.edu.ps',
                firstName: 'المشرف',
                lastName: 'النظام',
                profileImage: 'default',
                points: 0,
                subscription: true,
                myCourses: [],
                maxCourses: 999, // حد غير محدود للمشرف
                paidSlots: 0,
                isAdmin: true
            };
            localStorage.setItem('adminUserData', JSON.stringify(adminUser));
        }
        
        // إضافة المساق لمكتبة المشرف
        if (!adminUser.myCourses.includes(courseId)) {
            adminUser.myCourses.push(courseId);
            localStorage.setItem('adminUserData', JSON.stringify(adminUser));
            alert('تم إضافة المساق إلى مكتبتك بنجاح!');
            return true;
        } else {
            alert('هذا المساق موجود بالفعل في مكتبتك');
            return false;
        }
    }

    // الحصول على بيانات المستخدم الحالي
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // إذا كان المشرف، استخدام بيانات المشرف
    if (adminLoggedIn && !currentUser.username) {
        currentUser = JSON.parse(localStorage.getItem('adminUserData') || '{}');
        if (!currentUser.username) {
            currentUser = {
                username: 'admin',
                email: 'admin@ptuk.edu.ps',
                firstName: 'المشرف',
                lastName: 'النظام',
                profileImage: 'default',
                points: 0,
                subscription: true,
                myCourses: [],
                maxCourses: 999,
                paidSlots: 0,
                isAdmin: true
            };
            localStorage.setItem('adminUserData', JSON.stringify(currentUser));
        }
    }
    
    if (!currentUser.username) {
        alert('خطأ في بيانات المستخدم. يرجى تسجيل الدخول مرة أخرى');
        window.location.href = 'login.html';
        return false;
    }

    // التحقق من المستخدمين المحظورين
    const bannedUsers = JSON.parse(localStorage.getItem('bannedUsers') || '[]');
    if (bannedUsers.includes(currentUser.username)) {
        alert('تم حظر حسابك. لا يمكنك إضافة مساقات');
        return false;
    }

    // الحصول على المساقات الحالية
    const myCourses = currentUser.myCourses || [];
    const maxCourses = currentUser.maxCourses || 3;

    // التحقق من وجود المساق بالفعل
    if (myCourses.includes(courseId)) {
        alert('هذا المساق موجود بالفعل في مكتبتك');
        return false;
    }

    // التحقق من الحد الأقصى (لا ينطبق على المشرف)
    if (!currentUser.isAdmin && myCourses.length >= maxCourses) {
        const upgradeMessage = `لقد وصلت إلى الحد الأقصى للمساقات المجانية (${maxCourses} مساقات).\n\n` +
                              `يمكنك دفع 3 شيكل لفتح مساحة إضافية لـ 3 مساقات أخرى.\n\n` +
                              `هل تريد الانتقال إلى صفحة الحساب للترقية؟`;
        
        if (confirm(upgradeMessage)) {
            window.location.href = 'user-dashboard.html';
        }
        return false;
    }

    // إضافة المساق
    myCourses.push(courseId);
    currentUser.myCourses = myCourses;

    // تحديث localStorage
    if (currentUser.isAdmin) {
        localStorage.setItem('adminUserData', JSON.stringify(currentUser));
    } else {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // تحديث قاعدة بيانات المستخدمين
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex].myCourses = myCourses;
            localStorage.setItem('registeredUsers', JSON.stringify(users));
        }
    }

    alert('تم إضافة المساق إلى مكتبتك بنجاح!');
    return true;
}

// التحقق من تسجيل الدخول المحفوظ عند تحميل الصفحة
function checkSavedLoginOnLoad() {
    const savedLogin = localStorage.getItem('savedLogin');
    if (savedLogin) {
        const loginData = JSON.parse(savedLogin);
        if (loginData.rememberMe) {
            // إذا كان هناك تسجيل دخول محفوظ، يمكن توجيه المستخدم تلقائياً
            // لكننا لن نفعل ذلك تلقائياً لأسباب أمنية
            // يمكن للمستخدم الضغط على زر تسجيل الدخول
        }
    }
}

// الحصول على بيانات المستخدم الحالي (سواء كان مستخدم عادي أو مشرف)
function getCurrentUser() {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    
    if (adminLoggedIn) {
        let adminUser = JSON.parse(localStorage.getItem('adminUserData') || 'null');
        if (!adminUser) {
            adminUser = {
                username: 'admin',
                email: 'admin@ptuk.edu.ps',
                firstName: 'المشرف',
                lastName: 'النظام',
                profileImage: 'default',
                points: 0,
                subscription: true,
                myCourses: [],
                maxCourses: 999,
                paidSlots: 0,
                isAdmin: true
            };
            localStorage.setItem('adminUserData', JSON.stringify(adminUser));
        }
        return adminUser;
    } else if (userLoggedIn) {
        return JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
    
    return null;
}

// التحقق من أن المستخدم مسجل دخول (مستخدم أو مشرف)
function isLoggedIn() {
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    return userLoggedIn || adminLoggedIn;
}

// التحقق من أن المستخدم هو مشرف
function isAdmin() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// الحصول على رابط لوحة التحكم المناسبة
function getDashboardLink() {
    if (isAdmin()) {
        return 'admin-dashboard.html';
    } else if (isLoggedIn()) {
        return 'user-dashboard.html';
    }
    return 'login.html';
}

// استدعاء التحقق عند تحميل الصفحة
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', checkSavedLoginOnLoad);
}

