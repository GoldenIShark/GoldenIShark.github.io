document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#feedback-form');
  const status = document.querySelector('#feedback-status');
  const guidance = document.querySelector('#report-guidance');
  const submitButton = form ? form.querySelector('button[type="submit"]') : null;
  const config = window.ADSharksFeedbackConfig || {};

  if (!form || !status || !guidance || !submitButton) return;

  const updateGuidance = () => {
    const selectedType = form.querySelector('input[name="type"]:checked');
    if (selectedType && selectedType.value === 'Lapor Bug') {
      guidance.textContent = 'Jelaskan masalah yang Anda temukan, apa yang terjadi, dan jika memungkinkan langkah yang dilakukan sebelum masalah muncul.';
    } else if (selectedType) {
      guidance.textContent = 'Jelaskan ide atau perubahan yang menurut Anda dapat membuat AD Sharks Studio lebih mudah digunakan.';
    } else {
      guidance.textContent = 'Pilih jenis laporan untuk melihat panduan pengisian.';
    }
  };

  form.querySelectorAll('input[name="type"]').forEach((radio) => {
    radio.addEventListener('change', updateGuidance);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    status.removeAttribute('data-state');

    if (!form.reportValidity()) return;

    if (typeof config.endpoint !== 'string' || !config.endpoint.trim()) {
      status.textContent = 'Tujuan pengiriman belum dikonfigurasi. Isian Anda belum dikirim.';
      status.dataset.state = 'error';
      return;
    }

    submitButton.disabled = true;
    status.textContent = 'Mengirim masukan...';

    try {
      const report = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
      });

      if (!response.ok) throw new Error(`Pengiriman gagal (${response.status})`);

      form.reset();
      updateGuidance();
      status.textContent = 'Masukan berhasil dikirim. Terima kasih.';
      status.dataset.state = 'success';
    } catch (error) {
      status.textContent = error instanceof Error
        ? `Masukan belum berhasil dikirim. ${error.message}`
        : 'Masukan belum berhasil dikirim. Silakan coba kembali.';
      status.dataset.state = 'error';
    } finally {
      submitButton.disabled = false;
    }
  });
});
