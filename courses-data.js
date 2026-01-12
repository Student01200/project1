// Database of University Compulsory Courses (متطلب جامعة اجباري)
// Source: Palestine Technical University - Khudouri
// Program: Bachelor of Horticultural and Agricultural Extension
// Last Updated: 11 Jan 2026

const COURSES_DATABASE = {
    // Course ID: Course Details
    '13010006': {
        id: '13010006',
        name: 'مهارات الحاسوب وتطبيقاته',
        nameEn: 'Computer Skills and Applications',
        hours: 1,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'يركز هذا المساق على تطوير المهارات الأساسية في استخدام الحاسوب والتطبيقات المختلفة التي يحتاجها الطالب في دراسته الجامعية. يتضمن المساق دراسة أنظمة التشغيل وأساسيات البرمجة والتطبيقات المكتبية.',
        descriptionEn: 'This course focuses on developing basic computer and various application skills needed for university studies.',
        objectives: [
            'تطوير مهارات استخدام الحاسوب الأساسية',
            'فهم أنظمة التشغيل المختلفة',
            'استخدام التطبيقات المكتبية بفعالية',
            'الكفاءة في معالجة النصوص والجداول'
        ],
        prerequisites: 'لا توجد متطلبات سابقة',
        prerequisitesId: null
    },
    
    '13010007': {
        id: '13010007',
        name: 'مهارات الاتصال',
        nameEn: 'Communication Skills',
        hours: 1,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'يغطي هذا المساق المهارات الأساسية للاتصال الفعال بين الأفراد والمجموعات. يركز على مهارات الاستماع الفعال والتحدث الواضح والكتابة الموثرة.',
        descriptionEn: 'This course covers basic effective communication skills between individuals and groups.',
        objectives: [
            'تطوير مهارات الاستماع الفعال',
            'تحسين مهارات التحدث والعرض',
            'كتابة رسائل وتقارير فعالة',
            'التواصل الفعال في بيئات العمل'
        ],
        prerequisites: 'لا توجد متطلبات سابقة',
        prerequisitesId: null
    },

    '15200101': {
        id: '15200101',
        name: 'القضية الفلسطينية',
        nameEn: 'Palestinian Issue',
        hours: 3,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'دراسة شاملة للقضية الفلسطينية من جوانب تاريخية وسياسية واجتماعية واقتصادية. يركز المساق على الأبعاد التاريخية للقضية والصراع العربي الإسرائيلي والحقوق الفلسطينية.',
        descriptionEn: 'A comprehensive study of the Palestinian issue from historical, political, social, and economic perspectives.',
        objectives: [
            'فهم الجذور التاريخية للقضية الفلسطينية',
            'دراسة الجوانب القانونية والسياسية',
            'تحليل الوضع الاجتماعي والاقتصادي',
            'معرفة الحقوق الفلسطينية الدولية'
        ],
        prerequisites: 'لا توجد متطلبات سابقة',
        prerequisitesId: null
    },

    '15200102': {
        id: '15200102',
        name: 'اللغة العربية',
        nameEn: 'Arabic Language',
        hours: 3,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'تطوير مهارات اللغة العربية الكتابية والشفهية والقراءة والاستيعاب. يركز المساق على القواعد النحوية والصرفية والبلاغية وتحسين مهارات التعبير الكتابي والشفهي.',
        descriptionEn: 'Developing Arabic language skills in writing, speaking, reading, and comprehension.',
        objectives: [
            'إتقان القواعد النحوية والصرفية',
            'تحسين مهارات الكتابة والتعبير',
            'تطوير مهارات الاستماع والفهم',
            'الإلمام بالبلاغة والأدب العربي'
        ],
        prerequisites: 'لا توجد متطلبات سابقة',
        prerequisitesId: null
    },

    '15200104': {
        id: '15200104',
        name: 'خدمة المجتمع',
        nameEn: 'Community Service',
        hours: 1,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'تعريف الطلاب بأهمية خدمة المجتمع والمشاركة الفاعلة في التنمية المحلية. يركز المساق على المسؤولية الاجتماعية والعمل التطوعي وتأثيره على المجتمع.',
        descriptionEn: 'Introducing students to the importance of community service and active participation in local development.',
        objectives: [
            'فهم أهمية خدمة المجتمع',
            'تطوير روح المسؤولية الاجتماعية',
            'المشاركة في مشاريع تطوعية',
            'فهم احتياجات المجتمع المحلي'
        ],
        prerequisites: 'لا توجد متطلبات سابقة',
        prerequisitesId: null
    },

    '15200106': {
        id: '15200106',
        name: 'اللغة الإنجليزية (1)',
        nameEn: 'English Language (1)',
        hours: 3,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'مساق تأسيسي في اللغة الإنجليزية يركز على الاستماع والتحدث والقراءة والكتابة. يغطي المساق المفردات الأساسية والقواعس النحوية الأساسية والتواصل البسيط.',
        descriptionEn: 'A foundational course in English focusing on listening, speaking, reading, and writing.',
        objectives: [
            'تطوير مهارات الاستماع بالإنجليزية',
            'التحدث بثقة باللغة الإنجليزية',
            'قراءة وفهم النصوص الإنجليزية',
            'كتابة جمل وفقرات صحيحة'
        ],
        prerequisites: 'لا توجد متطلبات سابقة (أو اجتياز امتحان التصنيف)',
        prerequisitesId: null
    },

    '15200107': {
        id: '15200107',
        name: 'الدراسات الإسلامية',
        nameEn: 'Islamic Studies',
        hours: 3,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'دراسة عقائدية لأساسيات الإسلام والقيم الإسلامية الأساسية. يركز المساق على العقيدة الإسلامية وأركان الإسلام والأخلاق الإسلامية وتطبيقاتها المعاصرة.',
        descriptionEn: 'A doctrinal study of Islamic fundamentals and core Islamic values.',
        objectives: [
            'فهم العقيدة الإسلامية الصحيحة',
            'دراسة أركان الإسلام وشروطها',
            'تعلم الأخلاق والقيم الإسلامية',
            'فهم أحكام الشريعة الإسلامية'
        ],
        prerequisites: 'لا توجد متطلبات سابقة',
        prerequisitesId: null
    },

    '15200112': {
        id: '15200112',
        name: 'اللغة الإنجليزية (2)',
        nameEn: 'English Language (2)',
        hours: 3,
        category: 'متطلب جامعة اجباري',
        categoryEn: 'Compulsory University Requirement',
        description: 'مساق متقدم في اللغة الإنجليزية يركز على التواصل الفعال والكتابة الأكاديمية. يغطي المساق مهارات الكتابة المتقدمة والقراءة النقدية والحوار الأكاديمي.',
        descriptionEn: 'An advanced English course focusing on effective communication and academic writing.',
        objectives: [
            'تطوير مهارات الكتابة الأكاديمية',
            'القراءة والتحليل النقدي للنصوص',
            'المشاركة في الحوارات الأكاديمية',
            'الكتابة المنظمة والفعالة'
        ],
        prerequisites: 'اللغة الإنجليزية (1) - 15200106',
        prerequisitesId: '15200106'
    }
};

/**
 * Get course by ID
 * @param {string} courseId - The course ID
 * @returns {Object} Course object or null
 */
function getCourseById(courseId) {
    return COURSES_DATABASE[courseId] || null;
}

/**
 * Get all courses in a category
 * @param {string} category - The category name
 * @returns {Array} Array of courses
 */
function getCoursesByCategory(category) {
    return Object.values(COURSES_DATABASE).filter(course => course.category === category);
}

/**
 * Search courses by name or ID
 * @param {string} query - Search query
 * @returns {Array} Array of matching courses
 */
function searchCourses(query) {
    const lowerQuery = query.toLowerCase();
    return Object.values(COURSES_DATABASE).filter(course => 
        course.name.includes(query) || 
        course.id.includes(query) ||
        course.nameEn.toLowerCase().includes(lowerQuery)
    );
}

/**
 * Get all courses
 * @returns {Array} Array of all courses
 */
function getAllCourses() {
    return Object.values(COURSES_DATABASE);
}

/**
 * Get courses count
 * @returns {number} Total number of courses
 */
function getCoursesCount() {
    return Object.keys(COURSES_DATABASE).length;
}

/**
 * Get course statistics
 * @returns {Object} Statistics object
 */
function getCourseStats() {
    const courses = Object.values(COURSES_DATABASE);
    return {
        total: courses.length,
        totalHours: courses.reduce((sum, course) => sum + course.hours, 0),
        categories: [...new Set(courses.map(c => c.category))],
        averageHours: (courses.reduce((sum, course) => sum + course.hours, 0) / courses.length).toFixed(2)
    };
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        COURSES_DATABASE,
        getCourseById,
        getCoursesByCategory,
        searchCourses,
        getAllCourses,
        getCoursesCount,
        getCourseStats
    };
}
