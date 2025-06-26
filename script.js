document.addEventListener('DOMContentLoaded', () => {
  // ✅ كود تغيير الخلفية حسب الجنس
  const radios = document.querySelectorAll('#genderSelector input[name="gender"]');
  const section = document.getElementById('subscriptionSection');
  const scheduleInfo = document.getElementById('scheduleInfo');

  if (radios.length > 0 && section && scheduleInfo) {
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const gender = e.target.value;

        if (gender === 'male') {
          section.style.backgroundImage = "url('https://res.cloudinary.com/dchrfb1h9/image/upload/v1750879981/pexels-anush-1229356_vzsadq.jpg')";
          scheduleInfo.innerHTML = `<strong>دوام الرجال:</strong><br>السبت - الخميس<br>من 6 صباحًا إلى 2 ظهرًا`;
        } else if (gender === 'female') {
          section.style.backgroundImage = "url('https://res.cloudinary.com/dchrfb1h9/image/upload/v1750879687/pexels-cristian-rojas-8809982_bnoppk.jpg')";
          scheduleInfo.innerHTML = `<strong>دوام النساء:</strong><br>السبت - الخميس<br>من 3 ظهرًا إلى 9 مساءً`;
        }
      });
    });
  }

  // ✅ كود إرسال النموذج
  const form = document.getElementById('emailForm');
  const successMessage = document.getElementById('successMessage');

  if (form && successMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: formData
      }).then(response => {
        if (response.ok) {
          successMessage.style.display = 'block';
          form.reset();
        } else {
          alert("⚠️ لم يتم الإرسال بنجاح، يرجى المحاولة لاحقًا");
        }
      }).catch(() => {
        alert("⚠️ حدث خطأ في الاتصال بالخادم");
      });
    });
  }
});