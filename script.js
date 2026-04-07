// قائمة المشتركين (تقدر تزيد عليهم براحتك)
const subscribers = [
  { name: "Karrar-B2", phone: "07814120492", tower: "برج احسان 4", status: "ممتلئ" },
  { name: "Karrar-C1", phone: "07814120492", tower: "برج احسان 4", status: "ممتلئ" },
  { name: "Ahmed-K6", phone: "07814120492", tower: "برج المركز", status: "نشط" }
];

const statusList = document.getElementById('status-list');
const quickButtons = document.getElementById('quick-buttons');
const searchInput = document.getElementById('searchInput');

// وظيفة لعرض البيانات في الواجهة
function render(data) {
  statusList.innerHTML = '';
  quickButtons.innerHTML = '';

  data.forEach(item => {
      // إضافة التنبيهات في قسم الإحصائيات
      statusList.innerHTML += `
          <div class="status-item">
              📍 ${item.tower} > ${item.name} <br>
              <small>(حالة السكتر: ${item.status})</small>
          </div>
      `;

      // إضافة الأزرار البرتقالية في قسم التحكم
      quickButtons.innerHTML += `
          <button class="btn-orange">دخول - ${item.name} - ${item.phone}</button>
      `;
  });
}

// تشغيل العرض عند فتح الصفحة
render(subscribers);

// تفعيل ميزة البحث السريع
searchInput.addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = subscribers.filter(s => 
      s.name.toLowerCase().includes(val) || s.phone.includes(val)
  );
  render(filtered);
});