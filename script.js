document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('#genderSelector input[name="gender"]');
  const section = document.getElementById('subscriptionSection');
  const scheduleInfo = document.getElementById('scheduleInfo');

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
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // نمنع الإرسال مؤقتًا

    // نرسل البيانات عبر FormSubmit باستخدام طريقة بسيطة
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        successMessage.style.display = 'block';
        form.reset();
      }
    }).catch(error => {
      alert('حدث خطأ أثناء الإرسال، حاول لاحقًا');
    });
  });
});
