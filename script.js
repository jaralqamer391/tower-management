// قائمة المشتركين التجريبية - يمكنك إضافة بياناتك الحقيقية هنا
const subscribers = [
    { name: "كرار - B2", phone: "07814120492", tower: "برج احسان 4", status: "ممتلئ" },
    { name: "أحمد - C1", phone: "07701234567", tower: "برج احسان 4", status: "نشط" },
    { name: "محمد - K6", phone: "07509876543", tower: "برج المركز", status: "تحت الصيانة" },
    { name: "جاسم - S1", phone: "07801122334", tower: "برج كرار", status: "نشط" },
    { name: "حيدر - Z4", phone: "07711223344", tower: "برج المركز", status: "ممتلئ" }
];

const statusList = document.getElementById('status-list');
const quickButtons = document.getElementById('quick-buttons');
const searchInput = document.getElementById('searchInput');
const towerFilter = document.getElementById('towerFilter');

// وظيفة عرض البيانات
function renderData(dataToRender) {
    statusList.innerHTML = '';
    quickButtons.innerHTML = '';

    dataToRender.forEach(sub => {
        // إضافة التنبيهات للسكترات الممتلئة أو التي تحت الصيانة
        if (sub.status !== "نشط") {
            statusList.innerHTML += `
                <div class="status-item">
                    <strong>${sub.tower}</strong>: المشترك ${sub.name} <br>
                    <small>الحالة: ${sub.status}</small>
                </div>
            `;
        }

        // إضافة أزرار الدخول البرتقالية
        quickButtons.innerHTML += `
            <button class="btn-orange">
                دخول - ${sub.name} | ${sub.phone}
            </button>
        `;
    });
}

// التشغيل الأول عند فتح الصفحة
renderData(subscribers);

// ميزة البحث السريع بالاسم أو الهاتف
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = subscribers.filter(s => 
        s.name.toLowerCase().includes(term) || s.phone.includes(term)
    );
    renderData(filtered);
});

// ميزة التصفية حسب البرج
towerFilter.addEventListener('change', (e) => {
    const selectedTower = e.target.value;
    if (selectedTower === "all") {
        renderData(subscribers);
    } else {
        const filtered = subscribers.filter(s => s.tower === selectedTower);
        renderData(filtered);
    }
});
