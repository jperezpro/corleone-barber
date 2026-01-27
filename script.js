document.addEventListener('DOMContentLoaded', function() {
    
    const servicesData = [
        { 
            name: 'Barba', 
            price: '$230', 
            description: '<ul class="list-disc list-inside"><li>Perfilado de Barba y reducción de volumen para un aspecto elegante y cuidado</li><li>Incluye Asesoramiento y diseño según tu estilo</li></ul>',
            url: 'https://corleoneuy.setmore.com/services/6304d19c-7c26-499b-8245-f2dc5ba41952?step=time-slot&products=6304d19c-7c26-499b-8245-f2dc5ba41952&type=service&staff=c2736db6-8484-4ce7-81bd-8b2917ccddd9&staffSelected=false',
            buttonText: 'Reservar servicio'
        },
        { 
            name: 'Corte máquina, un solo número', 
            price: '$280', 
            description: '<ul class="list-disc list-inside"><li>Incluye asesoramiento y CORTE un solo nivel de altura.</li><li>Ideal para mantenimiento de pelo muy corto.</li></ul>',
            url: 'https://corleoneuy.setmore.com/services/fc48be48-d0ff-4dc7-bc6f-d6be5d8ae97c?step=time-slot&products=fc48be48-d0ff-4dc7-bc6f-d6be5d8ae97c&type=service&staff=c2736db6-8484-4ce7-81bd-8b2917ccddd9&staffSelected=false',
            buttonText: 'Reservar servicio'
        },
        { 
            name: 'Corte', 
            price: '$420', 
            description: '<ul class="list-disc list-inside"><li>Incluye CORTE completo con degradé.</li><li>Asesoramiento y técnicas de estilismo adaptadas a tu rostro.</li></ul>',
            url: 'https://corleoneuy.setmore.com/services/e46d7acc-8a56-449a-874e-755524254234?step=time-slot&products=e46d7acc-8a56-449a-874e-755524254234&type=service&staff=c2736db6-8484-4ce7-81bd-8b2917ccddd9&staffSelected=false',
            buttonText: 'Reservar servicio'
        },
        { 
            name: 'Corte + Barba', 
            price: '$500', 
            description: '<ul class="list-disc list-inside"><li>Incluye CORTE completo con degradé y asesoramiento.</li><li>Perfilado de BARBA y reducción de volumen para un aspecto elegante y cuidado.</li></ul>',
            url: 'https://corleoneuy.setmore.com/services/a46111d3-df95-482c-b9ac-7b69fbed3f7f?step=time-slot&products=a46111d3-df95-482c-b9ac-7b69fbed3f7f&type=service&staff=c2736db6-8484-4ce7-81bd-8b2917ccddd9&staffSelected=false',
            buttonText: 'Reservar servicio'
        },
        { 
            name: '⭐ Servicio VIP Corleone', 
            price: '$720', 
            description: '<ul class="list-disc list-inside"><li>Corte + Barba + Cejas + BAÑO DE CREMA</li><li>Incluye CORTE completo con degradé y asesoramiento.</li><li>Perfilado de BARBA con reducción de volumen.</li><li>Perfilado de CEJAS para un aspecto más limpio y elegante.</li><li>Tratamiento con BAÑO DE CREMA para un cuidado integral.</li></ul>',
            url: 'https://corleoneuy.setmore.com/services/656ade0a-ecf4-41e0-a1d8-3cfd3d520859?step=time-slot&products=656ade0a-ecf4-41e0-a1d8-3cfd3d520859&type=service&staff=c2736db6-8484-4ce7-81bd-8b2917ccddd9&staffSelected=false',
            buttonText: 'Reservar servicio'
        },
        { 
            name: 'Colorimetría', 
            price: '', 
            description: '<ul class="list-disc list-inside"><li>Asesoramiento personalizado de color.</li><li>Aplicación de tintas a elección en mechas o color global.</li><li>Incluye corte, lavado y peinado.</li></ul>',
            url: 'https://wa.link/zhik35',
            buttonText: 'Más información'
        }
    ];

    const testimonialsData = [
        { quote: 'La mejor barbería de Montevideo por lejos. El nivel de detalle y profesionalismo es increíble. Siempre salgo impecable.', author: 'Martín R.' },
        { quote: 'Un ambiente espectacular y barberos que saben lo que hacen. Te asesoran y el resultado es siempre mejor de lo esperado. ¡100% recomendado!', author: 'Juan Pablo G.' },
        { quote: 'Desde que descubrí Corleone no voy a otro lado. La calidad del servicio y la buena onda del lugar son inigualables.', author: 'Sebastián L.' },
        { quote: 'Llevé a mi hijo y el trato fue excelente. Mucha paciencia y un corte espectacular. Ahora vamos los dos.', author: 'Federico A.' },
    ];

    // Renderizado de servicios con accesibilidad mejorada
    const servicesList = document.getElementById('services-list');
    servicesData.forEach(service => {
        const item = document.createElement('div');
        item.className = 'service-item cursor-pointer p-6';
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-expanded', 'false');
        item.setAttribute('aria-label', `Ver detalles de ${service.name}`);
        
        item.innerHTML = `
            <div class="flex justify-between items-center">
                <h3 class="text-xl md:text-2xl font-bold text-white">${service.name}</h3>
                <div class="flex items-center space-x-4">
                    <span class="text-xl font-semibold text-[#D4AF37]">${service.price}</span>
                    <span class="text-2xl text-gray-500 transform transition-transform duration-300">+</span>
                </div>
            </div>
            <div class="service-description hidden mt-4 text-gray-300 pr-16">
                ${service.description}
                <a href="${service.url}" target="_blank" class="btn-gold text-sm px-4 py-2 rounded-sm mt-4 inline-block">${service.buttonText}</a>
            </div>
        `;
        servicesList.appendChild(item);
    });

    // Event listeners para servicios (click y teclado)
    servicesList.addEventListener('click', (e) => {
        const item = e.target.closest('.service-item');
        if (item) {
            toggleService(item);
        }
    });

    servicesList.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const item = e.target.closest('.service-item');
            if (item) {
                toggleService(item);
            }
        }
    });

    function toggleService(item) {
        const desc = item.querySelector('.service-description');
        const icon = item.querySelector('.text-2xl');
        const isExpanded = item.getAttribute('aria-expanded') === 'true';
        
        desc.classList.toggle('hidden');
        icon.classList.toggle('rotate-45');
        item.setAttribute('aria-expanded', !isExpanded);
    }

    // Testimonios
    const testimonialContainer = document.getElementById('testimonial-container');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        const t = testimonialsData[index];
        testimonialContainer.innerHTML = `
            <div class="testimonial-card p-8 rounded-lg border border-gray-700 shadow-lg text-center transition-opacity duration-500">
                <p class="text-xl italic text-gray-200">"${t.quote}"</p>
                <p class="mt-6 font-bold text-[#D4AF37]">- ${t.author}</p>
            </div>
        `;
    }
    
    document.getElementById('next-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
        showTestimonial(currentTestimonial);
    });
    
    document.getElementById('prev-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length;
        showTestimonial(currentTestimonial);
    });
    
    showTestimonial(0);
    
    setInterval(() => {
        document.getElementById('next-testimonial').click();
    }, 7000);

    // Menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileMenuButton.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.textContent = isOpen ? '☰' : '✕';
        mobileMenuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.textContent = '☰';
            mobileMenuButton.setAttribute('aria-label', 'Abrir menú');
        });
    });

    // Header con sombra al hacer scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg', 'shadow-black/50');
        } else {
            header.classList.remove('shadow-lg', 'shadow-black/50');
        }
    });
});