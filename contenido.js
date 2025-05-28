document.addEventListener('DOMContentLoaded', () => {
    const newsData = {
        cuidado: [
            {
                title: "Tecnologías innovadoras para el ahorro de agua en hogares",
                description: "Descubre cómo los nuevos sistemas de grifos, inodoros y duchas inteligentes están revolucionando el consumo de agua en casa.",
                link: "#"
            },
            {
                title: "La importancia de la recolección de agua de lluvia en zonas urbanas",
                description: "Proyectos que promueven la captación de agua pluvial para riego y usos no potables, reduciendo la dependencia de fuentes potables.",
                link: "#"
            },
            {
                title: "Campañas de concienciación sobre el uso responsable del agua en México",
                description: "Iniciativas gubernamentales y civiles que educan a la población sobre el valor del agua y cómo evitar su desperdicio.",
                link: "#"
            },
            {
                title: "Agricultura sostenible: métodos de riego eficientes para cultivos",
                description: "Explorando técnicas como el riego por goteo y la hidroponía que minimizan el consumo de agua en la producción de alimentos.",
                link: "#"
            }
        ],
        beneficios: [
            {
                title: "El agua como pilar de la salud y el bienestar humano",
                description: "Desde la hidratación hasta la higiene, el agua es esencial para todas las funciones corporales y la prevención de enfermedades.",
                link: "#"
            },
            {
                title: "Biodiversidad y ecosistemas: el rol vital del agua",
                description: "Cómo ríos, lagos y océanos sostienen una inmensa variedad de vida y regulan el clima global.",
                link: "#"
            },
            {
                title: "Impacto económico de la disponibilidad de agua dulce",
                description: "El agua es crucial para la industria, la energía y la agricultura, impulsando el desarrollo económico y la creación de empleos.",
                link: "#"
            },
            {
                title: "Beneficios recreativos y turísticos de los cuerpos de agua",
                description: "Playas, ríos y lagos ofrecen oportunidades para el ocio, el deporte y el turismo, fomentando economías locales.",
                link: "#"
            }
        ],
        danos: [
            {
                title: "Crisis hídrica global: ¿Qué pasa cuando el agua escasea?",
                description: "Consecuencias de la sequía y la sobreexplotación de acuíferos, afectando a comunidades y la producción de alimentos.",
                link: "#"
            },
            {
                title: "Contaminación del agua: un riesgo latente para la salud pública",
                description: "El impacto de desechos industriales, agrícolas y urbanos en la calidad del agua y sus efectos en la salud humana y animal.",
                link: "#"
            },
            {
                title: "El cambio climático y su efecto en los recursos hídricos",
                description: "Cómo el calentamiento global altera los patrones de lluvia, provoca inundaciones y sequías más extremas.",
                link: "#"
            },
            {
                title: "Desplazamiento humano y conflictos por el acceso al agua",
                description: "Comunidades enteras se ven obligadas a migrar debido a la falta de agua, generando tensiones y conflictos a nivel regional.",
                link: "#"
            }
        ]
    };

    function createArticleCard(article) {
        const card = document.createElement('div');
        card.classList.add('article-card');
        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.link}" target="_blank">Leer más</a>
        `;
        return card;
    }

    // Load articles for each section
    for (const sectionId in newsData) {
        const container = document.querySelector(`#${sectionId} .articles-container`);
        if (container) {
            newsData[sectionId].forEach(article => {
                container.appendChild(createArticleCard(article));
            });
        }
    }
});
