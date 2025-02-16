// Données du menu
const menuData = {
    naans: [
        {
            name: "Kebab",
            description: "Kebab, crudités",
            price: "7.40",
            image: "images/menu/naans/kebab.jpg"
        },
        {
            name: "L'oriental",
            description: "Viande hachée assaisonnée, cheddar, œuf, crudités",
            price: "7.40",
            image: "images/menu/naans/oriental.jpg"
        },
        {
            name: "Mixte",
            description: "Cordon bleu, steak, cheddar, crudités",
            price: "7.40",
            image: "images/menu/naans/mixte.jpg"
        },
        {
            name: "Chicken Tikka",
            description: "Chicken tandoori, crudités",
            price: "7.40",
            image: "images/menu/naans/chicken-tikka.jpg"
        },
        {
            name: "Chicken Curry",
            description: "Chicken curry, crudités",
            price: "7.40",
            image: "images/menu/naans/chicken-curry.jpg"
        },
        {
            name: "Délice Boursin",
            description: "Escalope sauce Boursin, crudités",
            price: "7.40",
            image: "images/menu/naans/delice-boursin.jpg"
        },
        {
            name: "Savoyard",
            description: "Steak, œuf, bacon, cheddar, crudités",
            price: "7.40",
            image: "images/menu/naans/savoyard.jpg"
        },
        {
            name: "Poulet Suisse",
            description: "Escalope, crème, fromage râpé, crudités",
            price: "7.40",
            image: "images/menu/naans/poulet-suisse.jpg"
        },
        {
            name: "Raclette",
            description: "Steak ou tenders, galette de pomme de terre, bacon, fromage raclette, crudités",
            price: "7.40",
            image: "images/menu/naans/raclette.jpg"
        },
        {
            name: "Tendre Extra",
            description: "Tenders, bacon, cheddar, crudités",
            price: "7.40",
            image: "images/menu/naans/tendre-extra.jpg"
        },
        {
            name: "Merguez",
            description: "Merguez, crudités, sauce au choix",
            price: "7.40",
            image: "images/menu/naans/merguez.jpg"
        },
        {
            name: "Thaï",
            description: "Escalope, cheddar, poivrons, sauce chili thaï",
            price: "7.40",
            image: "images/menu/naans/thai.jpg"
        },
        {
            name: "Végétarien",
            description: "Pomme de terre rosti, œuf, chèvre, crudités",
            price: "7.40",
            image: "images/menu/naans/vegetarien.jpg"
        }
    ],
    burgers: [
        {
            name: "Cheese Burger",
            description: "Steak haché, fromage, salade, tomate, oignon",
            price: "3.50",
            image: "images/menu/burgers/cheese-burger.jpg"
        },
        {
            name: "Double",
            description: "Double steak haché, double fromage, salade, tomate, oignon",
            price: "4.50",
            image: "images/menu/burgers/double.jpg"
        },
        {
            name: "Triple",
            description: "Triple steak haché, triple fromage, salade, tomate, oignon",
            price: "5.90",
            image: "images/menu/burgers/triple.jpg"
        },
        {
            name: "Chicken Burger",
            description: "Poulet pané, fromage, salade, tomate, oignon",
            price: "6.90",
            image: "images/menu/burgers/chicken-burger.jpg"
        },
        {
            name: "Fish",
            description: "Poisson pané, sauce tartare, salade",
            price: "5.00",
            image: "images/menu/burgers/fish.jpg"
        },
        {
            name: "Bacon Beef",
            description: "Steak haché, bacon, fromage, salade, tomate, oignon",
            price: "5.90",
            image: "images/menu/burgers/bacon-beef.jpg"
        },
        {
            name: "Tower",
            description: "Poulet pané, fromage, salade, tomate, oignon",
            price: "6.90",
            image: "images/menu/burgers/tower.jpg"
        },
        {
            name: "Classic Burger",
            description: "Steak haché, fromage, salade, tomate, oignon",
            price: "6.90",
            image: "images/menu/burgers/classic.jpg"
        },
        {
            name: "Black Burger",
            description: "Pain noir, steak haché, fromage, salade",
            price: "6.90",
            image: "images/menu/burgers/black.jpg"
        }
    ],
    sandwichs: [
        {
            name: "Steak Frites",
            description: "Steak haché, frites, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/steak-frites.jpg"
        },
        {
            name: "Kebab Frites",
            description: "Kebab, frites, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/kebab-frites.jpg"
        },
        {
            name: "Poulet Curry",
            description: "Poulet au curry, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/poulet-curry.jpg"
        },
        {
            name: "Kebab",
            description: "Kebab, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/kebab.jpg"
        },
        {
            name: "Merguez",
            description: "Merguez, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/merguez.jpg"
        },
        {
            name: "Omelette",
            description: "Omelette, fromage, salade",
            price: "5.50",
            image: "images/menu/sandwichs/omelette.jpg"
        },
        {
            name: "Escalope",
            description: "Escalope de poulet, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/escalope.jpg"
        },
        {
            name: "Tikka",
            description: "Poulet tikka, salade, sauce",
            price: "7.40",
            image: "images/menu/sandwichs/tikka.jpg"
        },
        {
            name: "Suisse",
            description: "Escalope, fromage, salade",
            price: "7.40",
            image: "images/menu/sandwichs/suisse.jpg"
        }
    ],
    kapsalons: [
        {
            name: "Kapsalon Tikka du Curry",
            description: "Poulet tikka curry, frites, sauce",
            price: "8.50",
            image: "images/menu/kapsalons/tikka-curry.jpg"
        },
        {
            name: "Kapsalon Mixte",
            description: "Cordon bleu, steak, frites, sauce",
            price: "8.50",
            image: "images/menu/kapsalons/mixte.jpg"
        },
        {
            name: "Kapsalon Kebab",
            description: "Kebab, frites, sauce",
            price: "8.50",
            image: "images/menu/kapsalons/kebab.jpg"
        },
        {
            name: "Kapsalon Bolognaise",
            description: "Sauce bolognaise, frites, fromage",
            price: "8.50",
            image: "images/menu/kapsalons/bolognaise.jpg"
        },
        {
            name: "Kapsalon Thaï",
            description: "Poulet sauce thaï, frites",
            price: "8.50",
            image: "images/menu/kapsalons/thai.jpg"
        },
        {
            name: "Kapsalon Raclette",
            description: "Steak ou tenders, frites, fromage raclette",
            price: "8.50",
            image: "images/menu/kapsalons/raclette.jpg"
        }
    ]
};

// Fonction pour créer un élément de menu
function createMenuItem(item) {
    return $(`
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="menu-item-price">${item.price}€</div>
            </div>
        </div>
    `);
}

// Fonction pour charger les items d'une catégorie
function loadCategoryItems(category) {
    const $gallery = $(`#${category} .menu-gallery`);
    if (!$gallery.length) return;

    const items = menuData[category];
    if (!items) return;

    $gallery.empty();
    items.forEach(item => {
        $gallery.append(createMenuItem(item));
    });
}

// Initialisation du Swiper pour le menu
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.menu-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 800,
        grabCursor: true,
        allowTouchMove: true,
        
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    });

    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            swiper.slideNext();
        });

        prevButton.addEventListener('click', () => {
            swiper.slidePrev();
        });
    }

    // Animation au scroll
    const menuSection = document.querySelector('.menu_section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.swiper-slide').forEach((slide, index) => {
                    setTimeout(() => {
                        slide.style.opacity = '1';
                        slide.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.2 });

    observer.observe(menuSection);
});

// Initialisation quand le document est prêt
$(document).ready(function() {
    // Charger la première catégorie (Naans) au démarrage
    loadCategoryItems('naans');

    // Gérer les changements d'onglets
    $('[data-bs-toggle="tab"]').on('shown.bs.tab', function(event) {
        const category = $(event.target).attr('href').substring(1);
        loadCategoryItems(category);
    });

    // Ajouter une animation de fondu aux items du menu
    $('.menu-item').hover(
        function() { $(this).addClass('hover'); },
        function() { $(this).removeClass('hover'); }
    );
});
