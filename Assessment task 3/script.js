        const menuData = {

            breakfast: [
                {   name: "Hashbrown", 
                    price: 1.50,
                    image: "Images/Breakfast/Hashbrown.png"
                },
                {   name: "Zaatar",  
                    price: 4.00,
                    image: "Images/Breakfast/Zaatar.png"
                },
                {   name: "Double Bacon Roll",
                    price: 5.00,
                    image: "Images/Breakfast/DoubleBaconRoll.png"
                },
                {   name: "Bacon Egg Roll",
                    price: 5.00,
                    image: "Images/Breakfast/BaconEggRoll.png"
                },
                {   name: "Banana Bread",
                    price: 4.80,
                    image: "Images/Breakfast/BananaBread.png"
                }
            ],
            "salad bowls": [
                {   name: "Fruit Salad (seasonal Fruit)", 
                    price: 5.50,
                    image: "Images/SaladBowls/FruitSalad.png"
                },
                {   name: "Greek Salad (lettuce tomato cucumber onion feta olives)", 
                    price: 6.50,
                    image: "Images/SaladBowls/GreekSalad.png"
                },
                {   name: "Mediterranean Pasta Salad (sundried tomatoes olive mushrooms pasta)", 
                    price: 7.00,
                    image: "Images/SaladBowls/MediterraneanPastaSalad.png"
                },
                {   name: "Pesto Salad (chicken bacon pesto cream)", 
                    price: 7.00,
                    image: "Images/SaladBowls/PestoSalad.png"
                },
                {   name: "Chicken Cesar Salad (chicken mushrooms croutons bacon lettuce cheese)", 
                    price: 7.00,
                    image: "Images/SaladBowls/ChickenCesarSalad.png"
                }
            ],
            sandwiches: [
                {   name: "Salad Sandwich (lettuce tomato cucumber carrot)", 
                    price: 5.50,
                    image: "Images/Sandwiches/SaladSandwich.png"
                },
                {   name: "Cheese Salad Sandwich (cheese lettuce tomato cucumber carrot)", 
                    price: 6.00,
                    image: "Images/Sandwiches/CheeseSaladSandwich.png"
                },
                {   name: "Ham Cheese Tomato Sandwich (leg ham tasty cheese tomato mixed lettuce)", 
                    price: 5.50,
                    image: "Images/Sandwiches/HamCheeseTomatoSandwich.png"
                },
                {   name: "Chicken Salad Sandwich  (chicken lettuce tomato cucumber carrot)", 
                    price: 6.00,
                    image: "Images/Sandwiches/ChickenSaladSandwich.png" 
                },
                {   name: "Ham Cheese Salad Sandwich (ham cheese lettuce tomato cucumber carrot)", 
                    price: 6.00,
                    image: "Images/Sandwiches/HamCheeseSaladSandwich.png"
                }
            ],
            toasties: [
                {   name: "Cheese Toastie", 
                    price: 3.50, 
                    image: "Images/Toasties/Cheese Toastie.png" 
                },
                {   name: "Ham Cheese Toastie",     
                    price: 4.00, 
                    image: "Images/Toasties/Ham Cheese Toastie.png" 
                },
                {   name: "Ham Cheese Tomato Toastie", 
                    price: 4.50,    
                    image: "Images/Toasties/Ham Cheese Tomato Toastie.png" 
                }
            ],
            sushi: [
                {   name: "Sushi", 
                    price: 4.50, 
                    flavours: [
                        "California",
                        "Tuna",
                        "Salmon",
                        "Chicken",
                        "Beef"
                    ],
                    image: "Images/Sushi/Sushi.png" 
                },
                {   name: "Rice Paper Rolls 2 pcs", 
                    price: 7.50, 
                    flavours: [
                        "BBQ Chicken",
                        "BBQ Pork",
                        "Vegetarian"
                    ],
                    image: "Images/Sushi/Rice Paper Rolls.png" 
                },
                {   name: "Sashimi Salmon Nigiri Pack", 
                    price: 8.50, 
                    image: "Images/Sushi/Sashimi Salmon Nigiri Pack.png" 
                },
                {   name: "Mixed Seafood Sushi & Nigiri", 
                    price: 8.50, 
                    image: "Images/Sushi/Mixed Seafood Sushi & Nigiri.png" 
                }
            ],
            wraps: [
                {   name: "From the Garden (lettuce tomato cucumber carrot onion)", 
                    price: 5.50, 
                    image: "Images/Wraps/From the Garden.png" 
                },
                {   name: "Falafel (Falafel tomato lettuce cucumber humus)", 
                    price: 6.00, 
                    image: "Images/Wraps/Falafel.png" 
                },
                {   name: "Harvest Collection (ham cheese lettuce tomato cucumber onion)", 
                    price: 6.50, 
                    image: "Images/Wraps/Harvest Collection.png" 
                },
                {   name: "Char Grilled Veg (egg plant capsicum mixed lettuce halloumi)", 
                    price: 6.50, 
                    image: "Images/Wraps/Char Grilled Veg.png" 
                },
                {   name: "Chicken Farm (grilled chicken mixed lettuce sun dried tomatoes)", 
                    price: 7.00, 
                    image: "Images/Wraps/Chicken Farm.png" 
                },
                {   name: "Spicy Chicken Tender (chicken tenderloin lettuce dressing)", 
                    price: 7.00, 
                    image: "Images/Wraps/Spicy Chicken Tender.png" 
                }
            ],
            milkshakes: [
                {   name: "Chocolate Milkshake", 
                    price: 4.00, 
                    image: "Images/Milkshakes/Chocolate Milkshake.png" 
                },
                {   name: "Caramel Milkshake", 
                    price: 4.00, 
                    image: "Images/Milkshakes/Caramel Milkshake.png" 
                },
                {   name: "Strawberry Milkshake", 
                    price: 4.00, 
                    image: "Images/Milkshakes/Strawberry Milkshake.png" 
                },
                {   name: "Vanilla Milkshake", 
                    price: 4.00, 
                    image: "Images/Milkshakes/Vanilla Milkshake.png" 
                },
                {   name: "Granola and Yoghurt Milkshake (Mixed Berries)", 
                    price: 4.00, 
                    image: "Images/Milkshakes/Granola and Yoghurt Milkshake.png" 
                }
            ],
            pastas: [
                {   name: "Lasagne", 
                    price: 5.50, 
                    image: "Images/Pastas/Lasagne.png" 
                },
                {   name: "Gnocchi", 
                    price: 7.00, 
                    image: "Images/Pastas/Gnocchi.png" 
                },
                {   name: "Spaghetti Boscaiola (pasta with creamy bacon and mushroom sauce)", 
                    price: 7.00, 
                    image: "Images/Pastas/Spaghetti Boscaiola.png" 
                },
                {   name: "Spaghetti Bolognese (ground beef garlic onion spices)", 
                    price: 7.00, 
                    image: "Images/Pastas/Spaghetti Bolognese.png" 
                }
            ],
            burgers: [
            
                {   name: "Classic BLT Burger(bacon cheese lettuce tomato bbq sauce)", 
                    price: 7.00, 
                    image: "Images/Burgers/Classic BLT Burger.png"   
                },
                {   name: "Portugese Chicken Burger (spicy chicken bacon cheese lettuce mayo)", 
                    price: 7.00, 
                    image: "Images/Burgers/Portugese Chicken Burger.png" 
                },
                {   name: "Chicken Supreme Burger(marinated chicken pineapple cheese lettuce)", 
                    price: 7.00, 
                    image: "Images/Burgers/Chicken Supreme Burger.png" 
                },
                {   name: "Angus Beef Burger (lettuce tomato onion bbq sauce)", 
                    price: 7.00, 
                    image: "Images/Burgers/Angus Beef Burger.png" 
                },
                {   name: "Chicken Schnitzel Roll Burger (crumbled chicken lettuce dressing)", 
                    price: 7.00, 
                    image: "Images/Burgers/Chicken Schnitzel Roll Burger.png" 
                }
            ],
            refreshments: [
                {   name: "Plain Milk", 
                    price: 2.00, 
                    image: "Images/Refreshments/Plain Milk.png" 
                },    
                {   name: "Water", 
                    price: 2.50, 
                    image: "Images/Refreshments/Water.png" 
                },
                {   name: "Orange Juice", 
                    price: 4.00, 
                    image: "Images/Refreshments/Orange Juice.png" 
                },
                {   name: "Soft Drinks", 
                    price: 2.80, 
                    flavours: [
                        "Coke",
                        "Pepsi",
                        "Sprite",
                        "Fanta",
                        "Solo"
                    ],
                    image: "Images/Refreshments/Soft Drinks.png" 
                },
                
            ],
            "rice combinations": [
                {   name: "Fried Rice",  
                    price: 5.50, 
                    image: "Images/RiceCombos/Fried Rice.png" 
                },
                {   name: "Butter Chicken", 
                    price: 7.00, 
                    image: "Images/RiceCombos/Butter Chicken.png" 
                },
            ],
            pies: [
                {   name: "Beef Sausage Roll Pie", 
                    price: 5.00, 
                    image: "Images/Pies/Beef Sausage Roll Pie.png" 
                },
                {   name: "Spinach & Feta Roll Pie", 
                    price: 5.00, 
                    image: "Images/Pies/Spinach & Feta Roll Pie.png" 
                },
                {   name: "Beef Pie", 
                    price: 5.00, 
                    image: "Images/Pies/Beef Pie.png" 
                },
            ],
            "panini rolls": [
                {   name: "BLT Panini Roll (bacon cheese lettuce tomato bbq sauce)", 
                    price: 7.00, 
                    image: "Images/PaniniRolls/BLT Panini Roll.png" 
                },
                {   name: "Spicy Chicken Panini Roll", 
                    price: 7.00, 
                    image: "Images/PaniniRolls/Spicy Chicken Panini Roll.png" 
                },
                {   name: "Chicken Schnitzel Panini Roll (crumbed chicken cheese lettuce tomato mayo)", 
                    price: 7.00, 
                    image: "Images/PaniniRolls/Chicken Schnitzel Panini Roll.png" 
                },
            ],
            snacks: [
                {   name: "Seasonal Fruit Cup", 
                    price: 1.50, 
                    image: "Images/Snacks/Seasonal Fruit Cup.png" 
                },
                {   name: "Popcorn",    
                    price: 2.50, 
                    image: "Images/Snacks/Popcorn.png" 
                },
                {   name: "Red Rock Chips",     
                    price: 2.80, 
                    flavours: [
                        "Sweet Chilli & Sour Cream",
                        "Honey Soy Chicken",
                        "Lime & Black Pepper",
                        "Sea Salt",
                        "Sea Salt & Balsamic Vinegar"
                    ],
                    image: "Images/Snacks/Red Rock Chips.png" 
                },
                {   name: "Garlic Bread", 
                    price: 2.50, 
                    image: "Images/Snacks/Garlic Bread.png" 
                },
                {   name: "Muffins", 
                    price: 5.00, 
                    flavours: [
                        "Blueberry",
                        "Chocolate Chip",
                        "Banana Nut",
                        "Apple Cinnamon",
                        "Lemon Poppy Seed",
                        "Pumpkin Spice"
                    ],
                    image: "Images/Snacks/Muffins.png" 
                },
            ],
            "gluten free": [
                {   name: "Potato Bake", 
                    price: 6.50, 
                    image: "Images/GlutenFree/Potato Bake.png" 
                },
                {   name: "Chicken Tender Wrap", 
                    price: 6.50, 
                    image: "Images/GlutenFree/Chicken Tender Wrap.png" 
                },
            ],

        };
            //Images for each category
            const categoryImages = {
                breakfast: "Images/Categories/Breakfast.png",
                "salad bowls": "Images/Categories/salad bowls.png",
                sandwiches: "Images/Categories/sandwiches.png",
                toasties: "Images/Categories/toasties.png",
                sushi: "Images/Categories/sushi.png",
                wraps: "Images/Categories/wraps.png",
                milkshakes: "Images/Categories/milkshakes.png",
                pastas: "Images/Categories/pastas.png",
                burgers: "Images/Categories/burgers.png",
                refreshments: "Images/Categories/refreshments.png",
                "rice combinations": "Images/Categories/rice combinations.png",
                pies: "Images/Categories/pies.png",
                "panini rolls": "Images/Categories/panini rolls.png",
                snacks: "Images/Categories/snacks.png",
                "gluten free": "Images/Categories/gluten free.png"
            };

        const MAX_STOCK = 10;
        const INACTIVITY_TIME = 30000; //30 seconds
        const itemLookup = {};

        Object.values(menuData).forEach(category => {

            category.forEach(item => {

                const itemId =
                    item.name.replace(/\s/g, '');

                itemLookup[itemId] = item;

            });

        });

        let cart = [];
        let total = 0;
        let inactivityTimer;
        let countdownTimer;
        let countdown = 10;
        let currentOrderNumber = 1000;
        let orderConfirmed = false;
        let paymentProcessing = false;

        const $ = id => document.getElementById(id);
        
        function show(id, display = 'block') {
            const element = $(id);

            if (!element) {
                console.error(`Element not found: ${id}`);
                return;
            }

            element.style.display = display;
        }

        function hide(id) {
            const element = $(id);

            if (!element) {
                console.error(`Element not found: ${id}`);
                return;
            }

            element.style.display = 'none';
        }

        function formatCategory(category) {
            return category.charAt(0).toUpperCase() +
                   category.slice(1);
        }

        function startOrdering() {
        hide('startScreen');
        document.getElementById('menuScreen')
            .classList.add('active');
        document.getElementById('cartTotal')
            .classList.add('active');
        displayCategories();
        startInactivityTimer();
        }

        function backToStart() {

            const checkoutScreen =
                document.getElementById('checkoutScreen');

            if (checkoutScreen.classList.contains('active')) {

                checkoutScreen.classList.remove('active');

                show('searchContainer');

                show('categories', 'grid');
                show('itemsContainer');

                // FIXES BOTTOM BAR
                show('menuButtons', 'flex');
                hide('checkoutActions');

            } else {

                document.getElementById('startScreen').style.display = 'flex';
                document.getElementById('menuScreen').classList.remove('active');

            }
        }

        function displayCategories() {
            const container = document.getElementById('categories');
            container.innerHTML = '';


            Object.keys(menuData).forEach(category => {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                btn.style.backgroundImage =
                    `url('${categoryImages[category]}')`;
                btn.innerHTML =
                    `<span>${formatCategory(category)}</span>`;

                btn.onclick = () => displayItems(category);
                container.appendChild(btn);
            });
        }

        function createItemHTML(item) {

            const itemId = item.name.replace(/\s/g, '');
                
            return `
                <div class="item"
                    onclick="toggleQuantity('${itemId}')">

                    <img src="${item.image}"
                        alt="${item.name}">

                    <div class="item-content">

                        <div class="item-name">
                            ${item.name}
                        </div>

                        <div class="item-price">
                            $${item.price.toFixed(2)}
                        </div>

                        <div class="quantity-popup"
                            id="popup-${itemId}"
                            onclick="event.stopPropagation()">

                            ${item.flavours ? `
                                <div style="margin-bottom:15px;">
                                    <label style="
                                        font-weight:bold;
                                        display:block;
                                        margin-bottom:8px;
                                    ">
                                        Choose a flavour:
                                    </label>

                                    <select id="flavour-${itemId}"
                                        style="
                                            width:100%;
                                            padding:10px;
                                            border-radius:6px;
                                            border:1px solid #ccc;
                                            font-size:16px;
                                        ">
                                        ${item.flavours.map(flavour => `
                                            <option value="${flavour}">
                                                ${flavour}
                                            </option>
                                        `).join('')}
                                    </select>
                                </div>
                            ` : ''}

                            <p class="quantity-text">
                                How many items do you want to order?
                            </p>

                            <div class="quantity-controls">

                                <button class="qty-btn"
                                    onclick="event.stopPropagation(); changeQuantity(
                                        '${item.name}',
                                        ${item.price},
                                        -1,
                                        '${itemId}'
                                    )">
                                    -
                                </button>

                                <span class="qty-number"
                                    id="qty-${itemId}">
                                    1
                                </span>

                                <button class="qty-btn"
                                    onclick="event.stopPropagation(); changeQuantity(
                                        '${item.name}',
                                        ${item.price},
                                        1,
                                        '${itemId}'
                                    )">
                                    +
                                </button>

                            </div>

                            <div class="popup-actions">

                                <button class="popup-btn confirm-btn"
                                    onclick="event.stopPropagation(); confirmItem('${itemId}')">
                                    Confirm
                                </button>

                                <button class="popup-btn cancel-btn"
                                    onclick="event.stopPropagation(); cancelItem('${itemId}')">
                                    Cancel
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            `;
        }

        function displayItems(category) {
            const container = document.getElementById('itemsContainer');
            const items = menuData[category];

            let html = `
                <div class="menu-items active">

                    <button class="popup-back-btn" onclick="closeMenu()">
                        ← Back
                    </button>

                    <h2>
                        ${formatCategory(category)}
                    </h2>

                    <div class="items">
            `;

            if (items.length === 0) {
                html += '<p>No items available</p>';
            } else {
                items.forEach(item => {
                    html += createItemHTML(item);
                });
            }

            html += `
                    </div>
                </div>
            `;

            container.innerHTML = html;

            const overlay = $('overlay');
            overlay.classList.add('active');
        }

        function toggleQuantity(itemId) {

            const popup =
                document.getElementById(`popup-${itemId}`);

            const overlay =
                $('overlay');

            const allPopups =
                document.querySelectorAll('.quantity-popup');

            // Hide all other popups
            allPopups.forEach(p => {
                if (p !== popup) {
                    p.style.display = 'none';
                }
            });

            // Toggle current popup
            if (popup.style.display === 'block') {

                popup.style.display = 'none';
                overlay.classList.remove('active');

            } else {

                popup.style.display = 'block';
                popup.scrollIntoView({ block: 'center' });
                overlay.classList.add('active');
            }
        }

        function closeMenu() {
            document.getElementById('itemsContainer').innerHTML = '';

            const overlay = $('overlay');
            overlay.classList.remove('active');
        }

        function closeSearchResults() {

            document.getElementById('itemsContainer')
                .innerHTML = '';

            document.getElementById('searchBar')
                .value = '';

            $('overlay')
                .classList.remove('active');
        }

        function addToCart(itemName, itemPrice) {
            cart.push({
                name: itemName,
                price: itemPrice
            });
            total += itemPrice;
            updateCart();
        }
        
        function changeQuantity(itemName, itemPrice, change, itemId) {

            const qtyElement =
                document.getElementById(`qty-${itemId}`);

            let quantity = parseInt(qtyElement.textContent);

            quantity += change;

            if (quantity < 1) {
                quantity = 1;
            }

            qtyElement.textContent = quantity;
        }

        function updateCart() {

            document.getElementById('cartTotal').textContent =
                `Total: $${total.toFixed(2)}`;

            document.getElementById('checkoutTotal').textContent =
                `Total: $${total.toFixed(2)}`;

            // Total quantity count
            const totalItems =
                cart.reduce((sum, item) => sum + item.quantity, 0);

            document.getElementById('cartCount').textContent =
                totalItems;

            const cartItemsContainer =
                document.getElementById('cartItems');

            let html = '';

            if (cart.length === 0) {

                html = '<p>Your cart is empty.</p>';

            } else {

                cart.forEach((item, index) => {

                    const subtotal =
                        item.price * item.quantity;

                    html += `
                        <div class="cart-item">

                            <div>

                                <div style="
                                    font-weight:bold;
                                    font-size:18px;
                                    margin-bottom:5px;
                                ">
                                    ${item.name}
                                </div>

                                <div style="
                                    color:#666;
                                    margin-bottom:6px;
                                ">
                                    $${item.price.toFixed(2)} each
                                </div>

                                <div style="
                                    font-weight:bold;
                                    color:#4CAF50;
                                ">
                                    Subtotal:
                                    $${subtotal.toFixed(2)}
                                </div>

                            </div>

                            <div style="
                                display:flex;
                                align-items:center;
                                gap:10px;
                            ">

                                <button class="qty-btn"
                                    onclick="decreaseCartQuantity(${index})">
                                    -
                                </button>

                                <span class="qty-number">
                                    ${item.quantity}
                                </span>

                                <button class="qty-btn"
                                    onclick="increaseCartQuantity(${index})">
                                    +
                                </button>

                            </div>

                        </div>
                    `;
                });
            }

            cartItemsContainer.innerHTML = html;

            // Bounce animation
            const cartTotal =
                document.getElementById('cartTotal');

            cartTotal.classList.remove('bounce');

            void cartTotal.offsetWidth;

            cartTotal.classList.add('bounce');
        }

        function removeItem(index) {

            const item = cart[index];

            if (item.quantity > 1) {

                item.quantity--;

                total -= item.price;

            } else {

                total -= item.price;

                cart.splice(index, 1);
            }

            updateCart();
        }

        function increaseCartQuantity(index) {

            const item = cart[index];

            // STOCK LIMIT
            if (item.quantity >= MAX_STOCK) {

                showStockPopup(
                    `Maximum quantity is ${MAX_STOCK}.`
                );

                return;
            }

            item.quantity++;

            total += item.price;

            updateCart();
        }

        function decreaseCartQuantity(index) {

            const item = cart[index];

            item.quantity--;

            total -= item.price;

            if (item.quantity <= 0) {

                cart.splice(index, 1);
            }

            updateCart();
        }

        function showCheckout() {

            hide('searchContainer'); // Hide search bar

            hide('categories');
            hide('itemsContainer');

            $('checkoutScreen').classList.add('active');

            hide('menuButtons');
            show('checkoutActions', 'flex');

            updateCart();
        }

        function keepOrdering() {

            show('searchContainer'); // Show search bar again

            show('categories', 'grid');
            show('itemsContainer');

            $('checkoutScreen').classList.remove('active');

            show('menuButtons', 'flex');
            hide('checkoutActions');
        }

        function confirmOrder() {

            // Stop checkout if cart is empty
            if (cart.length === 0) {

                document.getElementById('emptyCartPopup').style.display = 'flex';

                return;
            }

            $('overlay')
                .classList.add('active');

            show('paymentPopup', 'flex');
            
            // Reset payment popup content with back button
            document.querySelector('.payment-box').innerHTML = `
                <button class="popup-back-btn"
                    onclick="backToCheckout()">
                    ← Back
                </button>

                <h2>Select Payment Method</h2>

                <button class="payment-btn card-btn"
                    onclick="selectPayment('card')">
                    Pay with Card
                </button>

                <button class="payment-btn counter-btn"
                    onclick="selectPayment('counter')">
                    Pay at Counter
                </button>
            `;
        }

        function backToCheckout() {

            // Close payment popup
            $('overlay')
                .classList.remove('active');

            document.getElementById('paymentPopup')
                .style.display = 'none';

            // Keep checkout screen visible
            document.getElementById('checkoutScreen')
                .classList.add('active');

            // Keep checkout buttons visible
            document.getElementById('menuButtons').style.display = 'none';
            document.getElementById('checkoutActions').style.display = 'flex';
        }

        function selectPayment(method) {

            const paymentBox = document.querySelector('.payment-box');

            if (method === 'card') {

                paymentBox.innerHTML = `
                    <h2>Please Tap Card</h2>

                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
                        alt="Card Scanner"
                        style="
                            width:120px;
                            margin:20px 0;
                        "
                    >

                    <p id="paymentStatus"
                        style="
                            font-size:18px;
                            margin-bottom:25px;
                        ">
                        Waiting for card...
                    </p>

                    <button class="payment-btn cancel-btn"
                        onclick="cancelPayment()">
                        Cancel Payment
                    </button>
                `;

                setTimeout(() => {

                    const status =
                        document.getElementById('paymentStatus');

                    if (status) {
                        status.textContent =
                            "Cannot detect card, please try again.";
                    }

                }, 10000);

            } else {
                
                paymentProcessing = true;

                paymentBox.innerHTML = `
                    <h2>Processing Order...</h2>

                    <p style="
                        font-size: 20px;
                        margin: 30px 0;
                        color: #333;
                    ">
                        Please wait...
                    </p>
                `;

                // FETCH RUNS IMMEDIATELY
                fetch("https://script.google.com/macros/s/AKfycbxANl2eVvDFoDAkXQcD-SXiyZuQ_wLyNqtzR1i-_-v47DZbawD1THDIkxZ2TCYVfFQbxQ/exec", {
                    method: "POST",

                    body: JSON.stringify({
                        items: cart.map(item => ({
                            name: item.name,
                            quantity: item.quantity,
                            price: item.price,
                            subtotal: (item.price * item.quantity).toFixed(2)
                        })),

                        total: total.toFixed(2),
                        paymentMethod: "Counter"
                    })
                })

                .then(response => response.json())

                .then(data => {

                    paymentProcessing = false;
                    orderConfirmed = true;

                    console.log(data);

                    currentOrderNumber = data.orderNumber;

                    orderConfirmed = true;

                    paymentBox.innerHTML = `
                        <h2>Order Confirmed</h2>

                        <p style="
                            font-size:24px;
                            font-weight:bold;
                            margin:20px 0;
                            color:#4CAF50;
                        ">
                            Order #${currentOrderNumber}
                        </p>

                        <p style="
                            font-size:18px;
                            line-height:1.5;
                            margin-bottom:25px;
                            color:#333;
                        ">
                            Please go to the counter and pay for your order
                            for it to be prepared.
                        </p>

                            <button class="payment-btn counter-btn"
                            onclick="resetSystem()">
                            Done
                        </button>
                    `;
                })

                .catch(error => {

                    paymentProcessing = false;

                    console.error("FETCH ERROR:", error);

                });
            }
        }

        function cancelPayment() {

            if (paymentProcessing) {
                return;
            }

            if (orderConfirmed) {

                resetSystem();
                return;

            }

            $('overlay')
                .classList.remove('active');

            hide('paymentPopup');

            // Restore original popup
            document.querySelector('.payment-box').innerHTML = `
                <button class="popup-back-btn"
                    onclick="backToCheckout()">
                    ← Back
                </button>

                <h2>Select Payment Method</h2>

                <button class="payment-btn card-btn"
                    onclick="selectPayment('card')">
                    Card Payment
                </button>

                <button class="payment-btn counter-btn"
                    onclick="selectPayment('counter')">
                    Pay at Counter
                </button>
            `;
        }

        function closeAllPopups() {

            document.querySelectorAll('.quantity-popup')
                .forEach(popup => {
                    popup.style.display = 'none';
                });

            $('overlay')
                .classList.remove('active');
        }

        function confirmItem(itemId) {

            let quantity =
                parseInt(document.getElementById(`qty-${itemId}`).textContent);

            if (quantity <= 0) {
                return;
            }

            // STOCK LIMIT
            if (quantity > MAX_STOCK) {

                showStockPopup(
                    `Maximum quantity is ${MAX_STOCK}.`
                );

                quantity = 10;
            }

            // Find item data
            const selectedItem = itemLookup[itemId];

            if (!selectedItem) return;

            let finalName = selectedItem.name;

            const flavourSelect =
                document.getElementById(`flavour-${itemId}`);

            if (flavourSelect) {

                finalName =
                    `${selectedItem.name} - ${flavourSelect.value}`;
            }

            // Check if item already exists in cart
            const existingItem = cart.find(item => item.id === finalName);            
            
            if (existingItem) {

                if (existingItem.quantity + quantity > MAX_STOCK) {
                    showStockPopup(`Maximum quantity is ${MAX_STOCK}.`);
                    return;
                }

                existingItem.quantity += quantity;

            } else {

                cart.push({
                    id: finalName,
                    name: finalName,
                    price: selectedItem.price,
                    quantity: quantity
                });
            }

            // Update total
            total += selectedItem.price * quantity;

            updateCart();

            // Reset popup quantity
            document.getElementById(`qty-${itemId}`).textContent = 1;

            // Close popup
            document.getElementById(`popup-${itemId}`).style.display = 'none';
        }

        function cancelItem(itemId) {

            document.getElementById(`qty-${itemId}`).textContent = 1;

            document.getElementById(`popup-${itemId}`).style.display = 'none';
        }

        function startInactivityTimer() {

            clearTimeout(inactivityTimer);

            inactivityTimer = setTimeout(() => {

                showInactivePopup();

            }, INACTIVITY_TIME); // what ever time Inacitivy time is set to
        }

        function showInactivePopup() {

             $('overlay').classList.add('active');

            show('inactivePopup', 'flex');

            countdown = 10;

            document.getElementById('countdown').textContent = countdown;

            countdownTimer = setInterval(() => {

                countdown--;

                document.getElementById('countdown').textContent = countdown;

                if (countdown <= 0) {

                    clearInterval(countdownTimer);

                    resetSystem();
                }

            }, 1000);
        }

        function stayActive() {

            hide('inactivePopup');

            $('overlay').classList.remove('active');

            clearInterval(countdownTimer);

            startInactivityTimer();
        }

        function resetSystem() {

            orderConfirmed = false;

            clearTimeout(inactivityTimer);
            clearInterval(countdownTimer);

            document.getElementById('inactivePopup').style.display = 'none';

            // Reset cart
            cart = [];
            total = 0;

            updateCart();

            // Reset quantity displays
            document.querySelectorAll('.qty-number').forEach(qty => {
                qty.textContent = 1;
            });

            // Close popups
            closeMenu();
            closeAllPopups();

            // Hide payment popup
            document.getElementById('paymentPopup').style.display = 'none';

            // Hide inactivity popup
            document.getElementById('inactivePopup').style.display = 'none';

            // Hide empty cart popup
            document.getElementById('emptyCartPopup').style.display = 'none';

            // Remove overlay
            $('overlay').classList.remove('active');

            // Reset checkout screen
            document.getElementById('checkoutScreen')
                .classList.remove('active');

            // Reset buttons
            document.getElementById('menuButtons').style.display = 'flex';
            document.getElementById('checkoutActions').style.display = 'none';

            // Show categories again
            document.getElementById('categories').style.display = 'grid';
            document.getElementById('itemsContainer').style.display = 'block';

            // Rebuild categories
            displayCategories();
            
            // Hide menu
            document.getElementById('menuScreen')
                .classList.remove('active');

            // Show start page
            document.getElementById('startScreen')
                .style.display = 'flex';

            // Restore original payment popup
            document.querySelector('.payment-box').innerHTML = `
                <h2>Select Payment Method</h2>

                <button class="payment-btn card-btn"
                    onclick="selectPayment('card')">
                    Pay with Card
                </button>

                <button class="payment-btn counter-btn"
                    onclick="selectPayment('counter')">
                    Pay at Counter
                </button>
            `;
            show('searchContainer');
        }
        
        // Detect user activity ONLY when ordering screen is open
        ['click', 'mousemove', 'keypress', 'touchstart'].forEach(event => {

            document.addEventListener(event, () => {

                const menuScreen =
                    document.getElementById('menuScreen');

                if (menuScreen.classList.contains('active')) {
                    startInactivityTimer();
                }

            });

        });

        function showStockPopup(message) {

            document.getElementById('stockPopupText').textContent =
                message;

            show('stockPopup', 'flex');
        }

        function closeStockPopup() {

            hide('stockPopup');
        }

        function searchItems() {

            const search =
                document.getElementById('searchBar')
                .value
                .toLowerCase();

            const container =
                document.getElementById('itemsContainer');

            // If search is empty
            if (search.trim() === "") {

                container.innerHTML = "";

                return;
            }

            let matchedItems = [];

            // Search through all categories
            Object.keys(menuData).forEach(category => {

                menuData[category].forEach(item => {

                    const itemName =
                        item.name.toLowerCase();

                    // Search item name
                    if (itemName.includes(search)) {

                        matchedItems.push(item);
                    }

                    // Search flavours
                    if (item.flavours) {

                        item.flavours.forEach(flavour => {

                            if (
                                flavour.toLowerCase()
                                .includes(search)
                            ) {

                                matchedItems.push(item);
                            }
                        });
                    }
                });
            });

            // Remove duplicates
            matchedItems =
                [...new Set(matchedItems)];

            let html = `
                <div class="menu-items active">

                    <button class="popup-back-btn"
                        onclick="closeSearchResults()">
                        ← Back
                    </button>

                    <h2>Search Results</h2>

                    <div class="items">
            `;
                        
            if (matchedItems.length === 0) {

                html += `
                    <p>No matching items found.</p>
                `;

            } else {

                matchedItems.forEach(item => {
                    html += createItemHTML(item);
                });
            }

            html += `
                    </div>
                </div>
            `;

            container.innerHTML = html;
            $('overlay')
               .classList.add('active');
        }

        document
            .getElementById("adminBtn")
            .addEventListener("click", () => {
                document.getElementById("adminPopup").style.display = "block";
            });

        function closeAdminPopup() {
            document.getElementById("adminPopup").style.display = "none";
            document.getElementById("adminUsername").value = "";
            document.getElementById("adminPassword").value = "";
        }

        function checkAdminLogin() {

            const username = document.getElementById("adminUsername").value;
            const password = document.getElementById("adminPassword").value;

           if (username === "Admin1" && password === "abc123") {

            closeAdminPopup();   
            window.location.href = "dashboard.html";

           } else {

               alert("Incorrect username or password.");

           }
        }       
