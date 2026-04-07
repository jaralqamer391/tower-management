// وظيفة قراءة الإكسل الشامل
document.getElementById('excel-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);
        
        console.log("البيانات المستوردة:", json);
        alert("تم استيراد الملف بنجاح! سيتم تحديث قائمة الأبراج.");
        // هنا يمكنك إضافة كود لعرض البيانات في كارتات
    };
    reader.readAsArrayBuffer(file);
});

// وظيفة البحث السريع
document.getElementById('searchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    // كود الفلترة يوضع هنا
});
