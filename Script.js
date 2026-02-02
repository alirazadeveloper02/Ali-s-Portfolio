
    // ===== DATA =====
    const services = [
      {
        id: 1,
        title: "Web Development",
        description: "Building responsive, high-performance websites and web applications using modern frameworks.",
        icon: "💻"
      },
      {
        id: 2,
        title: "AI Integration",
        description: "Integrating Artificial Intelligence and Machine Learning models into business workflows.",
        icon: "🤖"
      },
      {
        id: 3,
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user interfaces for better user experience.",
        icon: "🎨"
      },
      {
        id: 4,
        title: "Backend Engineering",
        description: "Designing robust and scalable server-side architectures and APIs.",
        icon: "⚙️"
      }
    ];

    const projects = [
      {
        id: 1,
        title: "Simple Calculator",
        description: "A user-friendly simple calculator for basic and advanced mathematical operations.",
        imageUrl: "calculator.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://alirazadeveloper02.github.io/Scientific-Calculator/",
        repoUrl: "https://github.com/alirazadeveloper02/Scientific-Calculator"
      },
      {
        id: 2,
        title: "Learn Islam Globally",
        description: "Learn Islam Globally is an educational website offering authentic Quran and Islamic learning resources for people of all ages worldwide.",
        imageUrl: "Website-Logo.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://alirazadeveloper02.github.io/Learn_Islam_Globally-Website/",
        repoUrl: "https://github.com/alirazadeveloper02/Learn_Islam_Globally-Website"
      },
      {
        id: 4,
        title: "Portfolio v1",
        description: "My previous portfolio website built with vanilla HTML/CSS/JS.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        repoUrl: "#"
      }
    ];

    // ===== DOM Elements =====
    const navbar = document.getElementById('navbar');
    const servicesContainer = document.getElementById('servicesContainer');
    const projectsContainer = document.getElementById('projectsContainer');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    // ===== Initialize =====
    document.getElementById('year').textContent = new Date().getFullYear();

    // ===== Render Services =====
    function renderServices() {
      servicesContainer.innerHTML = services.map(service => `
          <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
        `).join('');
    }

    // ===== Render Projects =====
    function renderProjects() {
      projectsContainer.innerHTML = projects.map(project => `
          <div class="project-card">
            <div class="project-image">
              <img src="${project.imageUrl}" alt="${project.title}">
            </div>
            <div class="project-content">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
              </div>
            </div>
            <div class="project-buttons">
              ${project.demoUrl ? `<button onclick="window.open('${project.demoUrl}', '_blank')">Live Demo</button>` : ''}
              ${project.repoUrl ? `<button onclick="window.open('${project.repoUrl}', '_blank')">Code</button>` : ''}
            </div>
          </div>
        `).join('');
    }

    // ===== Navbar Scroll =====
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // ===== Scroll to Section =====
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // ===== Contact Form =====
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '✓ Message Sent!';

      // Save to localStorage
      const messages = JSON.parse(localStorage.getItem('messages') || '[]');
      messages.push({ name, email, message, timestamp: new Date().toISOString() });
      localStorage.setItem('messages', JSON.stringify(messages));

      setTimeout(() => {
        alert('Thank you! Your message has been saved locally.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message →';
      }, 500);
    });

    // ===== Mobile Menu =====
    function toggleMobileMenu() {
      const navLinks = document.querySelector('.nav-links');
      const menuToggle = document.getElementById('menuToggle');
      if (!navLinks) return;
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // close menu when a link is clicked (mobile)
      if (isOpen) {
        Array.from(navLinks.querySelectorAll('a')).forEach(a => {
          a.addEventListener('click', () => navLinks.classList.remove('mobile-open'), { once: true });
        });
      }
    }

    // ===== Dark Mode =====
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });

    // ===== Load on Page Load =====
    window.addEventListener('load', () => {
      renderServices();
      renderProjects();
    });
