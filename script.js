// Mock Data (Simulating Database)

// 1. Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== MENU DATA =====
const menuData = {
  royal: [
    {
      title: "Royal Soup",
      image: "images/soup.jpg",
      desc: "Creamy royal soup with exotic spices and herbs.",
      price: "₹299"
    },
    {
      title: "Golden Starter",
      image: "images/starter.jpg",
      desc: "Special crispy starter served with royal sauce.",
      price: "₹399"
    },
    {
      title: "Crispy Corn Delight",
      image: "images/corn.jpg",
      desc: "Crunchy sweet corn with spicy seasonings.",
      price: "₹269"
    },
    {
      title: "Cheese Garlic Bread",
      image: "images/bread.jpg",
      desc: "Toasted bread loaded with melted cheese.",
      price: "₹249"
    }
  ],

  feast: [
    {
      title: "King Special Thali",
      image: "images/thali.jpg",
      desc: "Luxury thali with premium dishes and desserts.",
      price: "₹899"
    },
    {
      title: "Royal Biryani",
      image: "images/biryani.jpg",
      desc: "Aromatic biryani cooked with royal spices.",
      price: "₹599"
    },
    {
      title: "Creamy Alfredo Pasta",
      image: "images/pasta.jpg",
      desc: "White sauce pasta mixed with herbs & cheese.",
      price: "₹179"
    },
    {
      title: "Smokey Stuffed Biryani",
      image: "images/smokey.jpg",
      desc: "Aromatic basmati rice cooked with rich spices.",
      price: "₹349"
    }
  ],

  sweet: [
    {
      title: "Chocolate Palace",
      image: "images/chocolate.jpg",
      desc: "Rich chocolate dessert with royal presentation.",
      price: "₹349"
    },
    {
      title: "Sweet Crown",
      image: "images/sweet.jpg",
      desc: "Luxury ice cream topped with dry fruits.",
      price: "₹249"
    },
    {
      title: "Chocolate Lava Cake",
      image: "images/lava.jpg", // FIXED: "imaegs/" changed to "images/"
      desc: "Warm chocolate cake with molten center.",
      price: "₹449"
    },  
    {
      title: "Brownie Ice Cream Bliss",
      image: "images/brownie.jpg",
      desc: "Chocolate brownie served with vanilla ice cream.",
      price: "₹269"
    }
  ],

  liquid: [
    {
      title: "Royal Mocktail",
      image: "images/royal.jpg",
      desc: "Refreshing luxury drink with fresh fruits.",
      price: "₹199"
    },
    {
      title: "Golden Shake",
      image: "images/golden.jpg",
      desc: "Creamy shake with premium ingredients.",
      price: "₹299"
    },
    {
      title: "Blue Lagoon Mojito",
      image: "images/blue.jpg", // FIXED: "blue,jpg" changed to "blue.jpg"
      desc: "Refreshing mint drink with blue citrus.",
      price: "₹189"
    },
    {
      title: "Velvet Cold Coffee", // FIXED: "titlt" changed to "title"
      image: "images/cold.jpg",
      desc: "Creamy cold coffee topped with chocolate.",
      price: "₹249"
    }
  ],

  garden: [
    {
      title: "Royal Paneer Tikka",
      image: "images/panner.jpg",
      desc: "Juicy paneer cubes grilled with royal indian spices.",
      price: "₹269"
    },
    {
      title: "Nawabi Veg Handi",
      image: "images/veg.jpg",
      desc: "Fresh vegetables cooked in rich creamy gravy.",
      price: "₹299"
    },
    {
      title: "Shahi Mushroom Masala",
      image: "images/shahi.jpg",
      desc: "Mushrooms simmered in buttery tomato sauce with royal spices.",
      price: "₹279"
    },
    {
      title: "Malai Kofta",
      image: "images/malai.jpg",
      desc: "Soft kofta balls served in luxurious creamy cashew gravy.",
      price: "₹289"
    }
  ],

  burger: [
    {
      title: "Cheese Burst Burger",
      image: "images/cheese.jpg",
      desc: "Loaded burger packed with molten cheese.",
      price: "₹249"
    },
    {
      title: "Smokey BBQ Crunch Burger",
      image: "images/bbq.jpg",
      desc: "Crunchy burger layered with smokey BBQ.",
      price: "₹269"
    },
    {
      title: "Spicy Maharaja Burger",
      image: "images/spicy.jpg",
      desc: "A fiery burger with grilled patty.",
      price: "₹229"
    },
    {
      title: "Double Patty Crown Burger",
      image: "images/patty.jpg",
      desc: "Doubled layered burger stacked with cheese.",
      price: "₹329"
    }
  ],

  combos: [
    {
      title: "Kings Burger Feast",
      image: "images/kings.jpg",
      desc: "Juicy veg burger served with crispy fries, cheesy dip & a chilled soft drink.",
      price: "₹299"
    },
    {
      title: "Coffee & Cookie Delight",
      image: "images/cookie.jpg",
      desc: "Freshly brewed cappuccino paired with warm chocolate cookies for a cozy cafe experience.",
      price: "₹149"
    },
    {
      title: "Family Treat Combo",
      image: "images/family.jpg",
      desc: "Burgers, garlic fries, cheesy pasta & 2 cold beverages.",
      price: "₹699"
    },
    {
      title: "Sweet Kingdom Combo",
      image: "images/kingdom.jpg",
      desc: "Chocolate brownie with vanilla ice cream & cold coffee.",
      price: "₹199"
    }
  ],

  snacks: [
    {
      title: "Crispy Golden Fries",
      image: "images/crispy.jpg",
      desc: "Perfectly salted potato fries served with cheesy dip.",
      price: "₹129"
    },
    {
      title: "Spicy Paneer Pops",
      image: "images/pops.jpg",
      desc: "Crispy fried paneer cubes tossed in spicy herbs and sauces.",
      price: "₹189"
    },
    {
      title: "Veggie Crunch Wrap",
      image: "images/veggie.jpg",
      desc: "Loaded tortilla wrap filled with fresh veggies & creamy mayo.",
      price: "₹159"
    },
    {
      title: "Cheese Burst Nachos",
      image: "images/burst.jpg",
      desc: "Crunchy nachos topped with melted cheese, salsa, & jalapenos.",
      price: "₹199"
    }
  ],

  morning: [
    {
      title: "Sunrise Pancakes",
      image: "images/sunrise.jpg",
      desc: "Fluffy pancakes served with honey, butter, & fresh berries.",
      price: "₹199"
    },
    {
      title: "Classic Veggie Sandwich",
      image: "images/classic.jpg",
      desc: "Grilled sandwich loaded with fresh vegetables & creamy mayo.",
      price: "₹149"
    },
    {
      title: "Masala Cheese Omelette",
      image: "images/masala.jpg",
      desc: "Soft omelette filled with cheese, onion, tomato, & indian spices.",
      price: "₹179"
    },
    {
      title: "Butter Toast Combo",
      image: "images/butter.jpg",
      desc: "Creamy butter toast served with jam and hot coffee.",
      price: "₹129"
    }
  ],

  signature: [
    {
      title: "Maharaja Flame Burger",
      image: "images/maharaja.jpg",
      desc: "A juicy double-patty burger layered with smoked cheese, caramelized onions, royal sauce.",
      price: "₹349"
    },
    {
      title: "Velvet Pasta",
      image: "images/velvet.jpg",
      desc: "Creamy red velvet infused pasta tossed with exotic herbs, parmesan cheese, and roasted vegetables.",
      price: "₹299"
    },
    {
      title: "Crowned Paneer Sizzler",
      image: "images/crowned.jpg",
      desc: "Soft paneer cubes grilled with spicy royal marinade, served on a sizzling platter.",
      price: "₹379"
    },
    {
      title: "Queens Choco Lava Delight",
      image: "images/queens.jpg",
      desc: "Warm molten chocolate cake served with vanilla ice cream and chocolate drizzle.",
      price: "₹299"
    }
  ],

  kids: [
    {
      title: "Happy Crispy Fries",
      image: "images/happy.jpg",
      desc: "Golden crispy potato fries served with creamy tomato dip.",
      price: "₹99"
    },
    {
      title: "Rainbow Veggie Pizza",
      image: "images/rainbow.jpg",
      desc: "Colorful cheesy pizza with sweet corn, capsicum, and olives.",
      price: "₹199"
    },
    {
      title: "Dino Nuggets Combo",
      image: "images/dino.jpg",
      desc: "Crunchy dinosaur-shaped nuggets served with fries and ketchup.",
      price: "₹189"
    },
    {
      title: "Berry Blast Milkshake",
      image: "images/berry.jpg",
      desc: "Creamy strawberry and blueberry milkshake with whipped cream topping.",
      price: "₹129"
    }
  ],

  pizza: [
    {
      title: "Classic Margherita",
      image: "images/margherita.jpg",
      desc: "Simple yet delicious pizza with tomato sauce, basil, and melted mozzarella.",
      price: "₹249"
    },
    {
      title: "Mexican Fiesta Pizza",
      image: "images/mexican.jpg",
      desc: "Mexican-style salsa, corn, jalapenos, and herbs for a tangy spicy flavor.",
      price: "₹369"
    },
    {
      title: "Paneer Tikka Supreme",
      image: "images/tikka.jpg",
      desc: "Soft paneer tikka cubes with smokey spices and creamy cheese topping.",
      price: "₹399"
    },
    {
      title: "Farm Fresh Delight",
      image: "images/farm.jpg",
      desc: "Fresh tomatoes, sweet corn, olives, and crunchy onions with rich cheese.",
      price: "₹279"
    }
  ]
};

// ===== SELECT ELEMENTS =====
const buttons = document.querySelectorAll(".tab-btn");
const menuContainer = document.getElementById("menu-container");

// ===== LOAD MENU =====
function loadMenu(category) {
  menuContainer.innerHTML = "";

  // Prevent crashes if an incorrect category gets called
  if (!menuData[category]) return; 

  menuData[category].forEach(item => {
    const card = `
      <div class="menu-card">
        <img src="${item.image}" alt="${item.title}">
        <div class="menu-content">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span class="price">${item.price}</span>
        </div>
      </div>
    `;
    menuContainer.innerHTML += card;
  });
}

//==== BUTTON CLICK =====//
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const activeBtn = document.querySelector(".tab-btn.active");
    if (activeBtn) activeBtn.classList.remove("active");

    button.classList.add("active");
    const category = button.dataset.category;
    loadMenu(category);
  });
});

// ===== DEFAULT LOAD =====
loadMenu("royal");
  
// ===== SCROLL EFFECT =====
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if(elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);