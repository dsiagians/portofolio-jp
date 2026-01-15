// Surat Lamaran Functionality

function downloadSurat() {
    const element = document.querySelector('.surat-wrapper');
    const opt = {
        margin: 10,
        filename: 'Surat_Lamaran_Melky_Raham.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // Note: You need to include html2pdf library in your HTML
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save();
    } else {
        alert('Fitur download memerlukan library html2pdf. Gunakan Cetak/Simpan PDF sebagai alternatif.');
        window.print();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const subjek = document.getElementById('subjek').value;
    const pesan = document.getElementById('pesan').value;

    // Validate form
    if (!nama || !email || !subjek || !pesan) {
        alert('Semua field harus diisi!');
        return;
    }

    // Create mailto link
    const mailtoLink = `mailto:melky.ariyanto@email.com?subject=Balas: ${encodeURIComponent(subjek)}&body=${encodeURIComponent(`Dari: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
        alert('Email client akan terbuka. Jika tidak, Anda dapat mengirim email ke melky.ariyanto@email.com');
        document.querySelector('.contact-form').reset();
    }, 500);
}

// Auto-fill email with your email when needed
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        // You can set a placeholder or help text
    }
});

// Form validation with visual feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#2563eb';
                }
            });

            input.addEventListener('focus', function() {
                this.style.borderColor = '#2563eb';
            });
        });
    }
});
