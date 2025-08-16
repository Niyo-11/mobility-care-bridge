export type TranslationKey = 
  // Navigation
  | 'nav.home'
  | 'nav.about'
  | 'nav.marketplace'
  | 'nav.donate'
  | 'nav.partners'
  | 'nav.faq'
  | 'nav.contact'
  | 'nav.impact'
  | 'nav.dashboard'
  | 'nav.signIn'
  | 'nav.signOut'
  | 'nav.cart'
  
  // Common
  | 'common.loading'
  | 'common.error'
  | 'common.success'
  | 'common.save'
  | 'common.cancel'
  | 'common.delete'
  | 'common.edit'
  | 'common.add'
  | 'common.search'
  | 'common.filter'
  | 'common.sort'
  | 'common.price'
  | 'common.quantity'
  | 'common.total'
  | 'common.back'
  | 'common.next'
  | 'common.previous'
  | 'common.submit'
  | 'common.close'
  | 'common.view'
  | 'common.learnMore'
  | 'common.getStarted'
  | 'common.readMore'
  | 'common.seeMore'
  | 'common.showLess'
  
  // Home Page
  | 'home.hero.title'
  | 'home.hero.subtitle'
  | 'home.hero.description'
  | 'home.hero.donateNow'
  | 'home.hero.learnMore'
  | 'home.hero.shopMarketplace'
  | 'home.hero.getInTouch'
  | 'home.stats.peopleHelped'
  | 'home.stats.aidsDonated'
  | 'home.stats.activePartners'
  | 'home.mission.title'
  | 'home.mission.description'
  | 'home.mission.seeImpact'
  | 'home.community.title'
  | 'home.community.description'
  | 'home.community.impact'
  | 'home.community.meetPartners'
  
  // Marketplace
  | 'marketplace.title'
  | 'marketplace.subtitle'
  | 'marketplace.description'
  | 'marketplace.searchPlaceholder'
  | 'marketplace.filterButton'
  | 'marketplace.categories'
  | 'marketplace.sortBy'
  | 'marketplace.sortBy.featured'
  | 'marketplace.sortBy.priceLow'
  | 'marketplace.sortBy.priceHigh'
  | 'marketplace.sortBy.newest'
  | 'marketplace.addToCart'
  | 'marketplace.outOfStock'
  | 'marketplace.inStock'
  | 'marketplace.noProducts'
  | 'marketplace.partnerWithUs'
  | 'marketplace.partnerDescription'
  | 'marketplace.becomePartner'
  | 'marketplace.noPrice'
  | 'marketplace.categories.wheelchairs'
  | 'marketplace.categories.walkingAids'
  | 'marketplace.categories.prosthetics'
  | 'marketplace.categories.orthotics'
  | 'marketplace.categories.hearingAids'
  | 'marketplace.categories.dailyLiving'
  
  // Auth
  | 'auth.signIn'
  | 'auth.signUp'
  | 'auth.email'
  | 'auth.password'
  | 'auth.firstName'
  | 'auth.lastName'
  | 'auth.createAccount'
  | 'auth.alreadyHaveAccount'
  | 'auth.dontHaveAccount'
  | 'auth.forgotPassword'
  | 'auth.resetPassword'
  | 'auth.welcomeBack'
  | 'auth.joinCommunity'
  | 'auth.signInWith'
  
  // Cart
  | 'cart.title'
  | 'cart.empty'
  | 'cart.emptyDescription'
  | 'cart.continueShopping'
  | 'cart.removeItem'
  | 'cart.updateQuantity'
  | 'cart.checkout'
  | 'cart.subtotal'
  | 'cart.shipping'
  | 'cart.tax'
  | 'cart.total'
  | 'cart.itemsInCart'
  
  // Dashboard
  | 'dashboard.title'
  | 'dashboard.welcome'
  | 'dashboard.orders.title'
  | 'dashboard.orders.recent'
  | 'dashboard.orders.all'
  | 'dashboard.orders.status.pending'
  | 'dashboard.orders.status.confirmed'
  | 'dashboard.orders.status.shipped'
  | 'dashboard.orders.status.delivered'
  | 'dashboard.orders.status.cancelled'
  | 'dashboard.profile.title'
  | 'dashboard.profile.edit'
  | 'dashboard.favorites.title'
  | 'dashboard.noOrders'
  | 'dashboard.noFavorites'
  
  // Checkout
  | 'checkout.title'
  | 'checkout.orderSummary'
  | 'checkout.shippingAddress'
  | 'checkout.billingAddress'
  | 'checkout.paymentMethod'
  | 'checkout.placeOrder'
  | 'checkout.processing'
  | 'checkout.success'
  | 'checkout.error'
  | 'checkout.street'
  | 'checkout.city'
  | 'checkout.state'
  | 'checkout.zipCode'
  | 'checkout.country'
  | 'checkout.phone'
  
  // About
  | 'about.title'
  | 'about.hero.title'
  | 'about.hero.subtitle'
  | 'about.hero.description'
  | 'about.mission.title'
  | 'about.mission.description'
  | 'about.vision.title'
  | 'about.vision.description'
  | 'about.values.title'
  | 'about.values.description'
  | 'about.values.compassion.title'
  | 'about.values.compassion.description'
  | 'about.values.community.title'
  | 'about.values.community.description'
  | 'about.values.accessibility.title'
  | 'about.values.accessibility.description'
  | 'about.values.impact.title'
  | 'about.values.impact.description'
  | 'about.values.compassion'
  | 'about.values.integrity'
  | 'about.values.innovation'
  | 'about.values.collaboration'
  | 'about.story.title'
  | 'about.story.beginning.title'
  | 'about.story.beginning.description'
  | 'about.story.growth.title'
  | 'about.story.growth.description'
  | 'about.story.future.title'
  | 'about.story.future.description'
  | 'about.achievements.title'
  | 'about.achievements.description'
  | 'about.achievements.peopleServed'
  | 'about.achievements.aidsDistributed'
  | 'about.achievements.countriesReached'
  | 'about.achievements.satisfactionRate'
  | 'about.team.title'
  | 'about.team.description'
  | 'about.cta.title'
  | 'about.cta.description'
  | 'about.cta.becomePartner'
  | 'about.cta.contactUs'
  
  // Contact
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.description'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.subject'
  | 'contact.form.message'
  | 'contact.form.send'
  | 'contact.info.address'
  | 'contact.info.phone'
  | 'contact.info.email'
  | 'contact.info.hours'
  
  // FAQ
  | 'faq.title'
  | 'faq.subtitle'
  | 'faq.searchPlaceholder'
  | 'faq.general'
  | 'faq.donating'
  | 'faq.receiving'
  | 'faq.marketplace'
  | 'faq.technical'
  
  // Donate
  | 'donate.title'
  | 'donate.subtitle'
  | 'donate.description'
  | 'donate.donateNow'
  | 'donate.process.title'
  | 'donate.process.step1'
  | 'donate.process.step2'
  | 'donate.process.step3'
  | 'donate.process.step4'
  | 'donate.accepted.title'
  | 'donate.cta.title'
  | 'donate.cta.description'
  
  // Partners
  | 'partners.title'
  | 'partners.subtitle'
  | 'partners.description'
  | 'partners.types.title'
  | 'partners.types.ngos'
  | 'partners.types.healthcare'
  | 'partners.types.repair'
  | 'partners.types.logistics'
  | 'partners.benefits.title'
  | 'partners.join.title'
  | 'partners.join.cta'
  
  // Impact
  | 'impact.title'
  | 'impact.subtitle'
  | 'impact.description'
  | 'impact.stories.title'
  | 'impact.metrics.title'
  | 'impact.countries'
  | 'impact.beneficiaries'
  | 'impact.partnerships'
  | 'impact.donations'
  
  // Errors
  | 'error.notFound'
  | 'error.serverError'
  | 'error.networkError'
  | 'error.unauthorized'
  | 'error.goHome'
  | 'error.tryAgain';

export const translations: Record<'en' | 'rw', Record<TranslationKey, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.marketplace': 'Marketplace',
    'nav.donate': 'Donate',
    'nav.partners': 'Partners',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.impact': 'Impact',
    'nav.dashboard': 'Dashboard',
    'nav.signIn': 'Sign In',
    'nav.signOut': 'Sign Out',
    'nav.cart': 'Cart',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.add': 'Add',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.price': 'Price',
    'common.quantity': 'Quantity',
    'common.total': 'Total',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.close': 'Close',
    'common.view': 'View',
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
    'common.seeMore': 'See More',
    'common.showLess': 'Show Less',
    
    // Home Page
    'home.hero.title': 'Bridging the Gap in',
    'home.hero.subtitle': 'Access to Mobility Aids',
    'home.hero.description': 'We connect generous donors with people in need, ensuring that mobility aids like wheelchairs, crutches, and foot supports reach those who need them most. Every donation creates independence and dignity for someone in our community.',
    'home.hero.donateNow': 'Donate Now',
    'home.hero.learnMore': 'Learn More',
    'home.hero.shopMarketplace': 'Shop Marketplace',
    'home.hero.getInTouch': 'Get in Touch',
    'home.stats.peopleHelped': 'People Helped',
    'home.stats.aidsDonated': 'Aids Donated',
    'home.stats.activePartners': 'Active Partners',
    'home.mission.title': 'Our Mission is Simple',
    'home.mission.description': 'We believe that mobility should never be a barrier to living a full life. Through our network of generous donors, skilled repair partners, and trusted NGOs, we ensure that quality mobility aids reach the people who need them most.',
    'home.mission.seeImpact': 'See Our Impact',
    'home.community.title': 'Building Stronger Communities',
    'home.community.description': 'Every donation creates a ripple effect of positive change. When someone regains their mobility, they can participate more fully in their community, maintain their independence, and continue contributing to society.',
    'home.community.impact': 'Our network of partners ensures that each mobility aid finds its way to someone who truly needs it, creating lasting impact that extends far beyond the initial donation.',
    'home.community.meetPartners': 'Meet Our Partners',
    
    // Marketplace
    'marketplace.title': 'Care Bridge Marketplace',
    'marketplace.subtitle': 'Quality Healthcare Accessories',
    'marketplace.description': 'Connecting you with affordable healthcare accessories',
    'marketplace.searchPlaceholder': 'Search products...',
    'marketplace.filterButton': 'Filters',
    'marketplace.categories': 'Categories',
    'marketplace.sortBy': 'Sort by',
    'marketplace.sortBy.featured': 'Featured',
    'marketplace.sortBy.priceLow': 'Price: Low to High',
    'marketplace.sortBy.priceHigh': 'Price: High to Low',
    'marketplace.sortBy.newest': 'Newest',
    'marketplace.addToCart': 'Add to Cart',
    'marketplace.outOfStock': 'Out of Stock',
    'marketplace.inStock': 'In Stock',
    'marketplace.noProducts': 'No products found',
    'marketplace.partnerWithUs': 'Partner with Us',
    'marketplace.partnerDescription': 'Join our network of trusted healthcare providers',
    'marketplace.becomePartner': 'Become a Partner',
    'marketplace.noPrice': 'Contact for price',
    'marketplace.categories.wheelchairs': 'Wheelchairs',
    'marketplace.categories.walkingAids': 'Walking Aids',
    'marketplace.categories.prosthetics': 'Prosthetics',
    'marketplace.categories.orthotics': 'Orthotics',
    'marketplace.categories.hearingAids': 'Hearing Aids',
    'marketplace.categories.dailyLiving': 'Daily Living',
    
    // Auth
    'auth.signIn': 'Sign In',
    'auth.signUp': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.createAccount': 'Create Account',
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.dontHaveAccount': "Don't have an account?",
    'auth.forgotPassword': 'Forgot Password?',
    'auth.resetPassword': 'Reset Password',
    'auth.welcomeBack': 'Welcome Back',
    'auth.joinCommunity': 'Join Our Community',
    'auth.signInWith': 'Sign in with',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDescription': 'Add some items to get started',
    'cart.continueShopping': 'Continue Shopping',
    'cart.removeItem': 'Remove Item',
    'cart.updateQuantity': 'Update Quantity',
    'cart.checkout': 'Checkout',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.tax': 'Tax',
    'cart.total': 'Total',
    'cart.itemsInCart': '{{count}} items in cart',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome back, {{name}}!',
    'dashboard.orders.title': 'My Orders',
    'dashboard.orders.recent': 'Recent Orders',
    'dashboard.orders.all': 'All Orders',
    'dashboard.orders.status.pending': 'Pending',
    'dashboard.orders.status.confirmed': 'Confirmed',
    'dashboard.orders.status.shipped': 'Shipped',
    'dashboard.orders.status.delivered': 'Delivered',
    'dashboard.orders.status.cancelled': 'Cancelled',
    'dashboard.profile.title': 'Profile',
    'dashboard.profile.edit': 'Edit Profile',
    'dashboard.favorites.title': 'My Favorites',
    'dashboard.noOrders': 'No orders yet',
    'dashboard.noFavorites': 'No favorites yet',
    
    // Checkout
    'checkout.title': 'Checkout',
    'checkout.orderSummary': 'Order Summary',
    'checkout.shippingAddress': 'Shipping Address',
    'checkout.billingAddress': 'Billing Address',
    'checkout.paymentMethod': 'Payment Method',
    'checkout.placeOrder': 'Place Order',
    'checkout.processing': 'Processing...',
    'checkout.success': 'Order placed successfully!',
    'checkout.error': 'Error placing order',
    'checkout.street': 'Street Address',
    'checkout.city': 'City',
    'checkout.state': 'State/Province',
    'checkout.zipCode': 'ZIP/Postal Code',
    'checkout.country': 'Country',
    'checkout.phone': 'Phone Number',
    
    // About
    'about.title': 'About Care Bridge',
    'about.hero.title': 'About Care Bridge',
    'about.hero.subtitle': 'Bridging Healthcare Access Gaps',
    'about.hero.description': 'We are committed to ensuring that essential healthcare accessories reach everyone who needs them, regardless of their economic situation.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To bridge the gap in healthcare accessibility by connecting donors with those in need, ensuring everyone has access to essential mobility aids and healthcare accessories.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'A world where healthcare accessibility is not limited by economic barriers, and every person can live with dignity and independence.',
    'about.values.title': 'Our Core Values',
    'about.values.description': 'These values guide everything we do',
    'about.values.compassion.title': 'Compassion',
    'about.values.compassion.description': 'We approach every interaction with empathy and understanding',
    'about.values.community.title': 'Community',
    'about.values.community.description': 'We believe in the power of community to create lasting change',
    'about.values.accessibility.title': 'Accessibility',
    'about.values.accessibility.description': 'Everyone deserves access to healthcare regardless of circumstances',
    'about.values.impact.title': 'Impact',
    'about.values.impact.description': 'We measure success by the lives we improve and communities we strengthen',
    'about.story.title': 'Our Story',
    'about.story.beginning.title': 'How We Started',
    'about.story.beginning.description': 'Care Bridge was founded with a simple but powerful idea: healthcare accessories should be accessible to everyone, not just those who can afford them.',
    'about.story.growth.title': 'Growing Impact',
    'about.story.growth.description': 'From our humble beginnings, we have grown to serve thousands of people across Rwanda and Nigeria, building partnerships with local organizations.',
    'about.story.future.title': 'Looking Forward',
    'about.story.future.description': 'We continue to expand our reach, improve our services, and work towards a future where healthcare accessibility is a reality for all.',
    'about.achievements.title': 'Our Impact',
    'about.achievements.description': 'See the difference we have made together',
    'about.achievements.peopleServed': 'People Served',
    'about.achievements.aidsDistributed': 'Healthcare Aids Distributed',
    'about.achievements.countriesReached': 'Countries Reached',
    'about.achievements.satisfactionRate': 'Satisfaction Rate',
    'about.team.title': 'Meet Our Team',
    'about.team.description': 'Dedicated professionals working to make healthcare accessible',
    'about.cta.title': 'Join Our Mission',
    'about.cta.description': 'Together, we can create a world where healthcare accessibility is not a privilege but a right.',
    'about.cta.becomePartner': 'Become a Partner',
    'about.cta.contactUs': 'Contact Us',
    'about.values.compassion': 'Compassion',
    'about.values.integrity': 'Integrity',
    'about.values.innovation': 'Innovation',
    'about.values.collaboration': 'Collaboration',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.description': 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions',
    'faq.searchPlaceholder': 'Search FAQs...',
    'faq.general': 'General',
    'faq.donating': 'Donating',
    'faq.receiving': 'Receiving Aid',
    'faq.marketplace': 'Marketplace',
    'faq.technical': 'Technical Support',
    
    // Donate
    'donate.title': 'Donate Mobility Aids',
    'donate.subtitle': 'Make a Difference Today',
    'donate.description': 'Your donation of mobility aids can transform someone\'s life. Help us bridge the gap between those who have and those who need.',
    'donate.donateNow': 'Donate Now',
    'donate.process.title': 'How It Works',
    'donate.process.step1': 'Submit donation form',
    'donate.process.step2': 'Schedule pickup',
    'donate.process.step3': 'Quality assessment',
    'donate.process.step4': 'Distribution to beneficiary',
    'donate.accepted.title': 'Accepted Items',
    'donate.cta.title': 'Ready to Make a Difference?',
    'donate.cta.description': 'Start your donation process today',
    
    // Partners
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Building a Network of Care',
    'partners.description': 'We work with trusted organizations across Rwanda and Nigeria to ensure mobility aids reach those who need them most.',
    'partners.types.title': 'Partner Types',
    'partners.types.ngos': 'NGOs & Nonprofits',
    'partners.types.healthcare': 'Healthcare Providers',
    'partners.types.repair': 'Repair Services',
    'partners.types.logistics': 'Logistics Partners',
    'partners.benefits.title': 'Partnership Benefits',
    'partners.join.title': 'Join Our Network',
    'partners.join.cta': 'Become a Partner',
    
    // Impact
    'impact.title': 'Our Impact',
    'impact.subtitle': 'Creating Change Together',
    'impact.description': 'See how our community is making a difference in the lives of people across Rwanda and Nigeria.',
    'impact.stories.title': 'Success Stories',
    'impact.metrics.title': 'Impact Metrics',
    'impact.countries': 'Countries Served',
    'impact.beneficiaries': 'Lives Impacted',
    'impact.partnerships': 'Active Partnerships',
    'impact.donations': 'Aids Distributed',
    
    // Errors
    'error.notFound': 'Page not found',
    'error.serverError': 'Server error',
    'error.networkError': 'Network error',
    'error.unauthorized': 'Unauthorized access',
    'error.goHome': 'Go Home',
    'error.tryAgain': 'Try Again',
  },
  
  rw: {
    // Navigation
    'nav.home': 'Ahabanza',
    'nav.about': 'Inyandiko',
    'nav.marketplace': 'Isoko',
    'nav.donate': 'Gutanga',
    'nav.partners': 'Abafatanyabikorwa',
    'nav.faq': 'Ibibazo Bikunze Kubazwa',
    'nav.contact': 'Kuvugana',
    'nav.impact': 'Ingaruka',
    'nav.dashboard': 'Ikibaho',
    'nav.signIn': 'Kwinjira',
    'nav.signOut': 'Gusohoka',
    'nav.cart': 'Agasanduku',
    
    // Common
    'common.loading': 'Gupakira...',
    'common.error': 'Ikosa',
    'common.success': 'Byagenze neza',
    'common.save': 'Kubika',
    'common.cancel': 'Kureka',
    'common.delete': 'Gusiba',
    'common.edit': 'Guhindura',
    'common.add': 'Kongeramo',
    'common.search': 'Gushakisha',
    'common.filter': 'Gutoranya',
    'common.sort': 'Gutondeka',
    'common.price': 'Igiciro',
    'common.quantity': 'Umubare',
    'common.total': 'Byose',
    'common.back': 'Subira',
    'common.next': 'Ikurikira',
    'common.previous': 'Ibanjirije',
    'common.submit': 'Kohereza',
    'common.close': 'Gufunga',
    'common.view': 'Kureba',
    'common.learnMore': 'Menya Byinshi',
    'common.getStarted': 'Tangira',
    'common.readMore': 'Soma Byinshi',
    'common.seeMore': 'Reba Byinshi',
    'common.showLess': 'Erekana Bike',
    
    // Home Page
    'home.hero.title': 'Gushyira Uburyohe mu',
    'home.hero.subtitle': 'Kubona Ibikoresho byo Kugenda',
    'home.hero.description': 'Duhuza abatanga impano n\'abakeneye, dukemeza ko ibikoresho byo kugenda nk\'amategeko, inkoni, n\'ibindi bikoresho bigera ku bakeneye byinshi. Buri mpano itanga ubwigenge n\'icyubahiro ku muntu mu muryango wacu.',
    'home.hero.donateNow': 'Tanga Ubu',
    'home.hero.learnMore': 'Menya Byinshi',
    'home.hero.shopMarketplace': 'Gura mu Isoko',
    'home.hero.getInTouch': 'Kuvugana',
    'home.stats.peopleHelped': 'Abantu Bafashijwe',
    'home.stats.aidsDonated': 'Ubufasha Butanzwe',
    'home.stats.activePartners': 'Abafatanyabikorwa Bakora',
    'home.mission.title': 'Intego Yacu ni Yoroheje',
    'home.mission.description': 'Twizera ko kugenda bitagomba kuba inzitizi yo kubana ubuzima bwuzuye. Binyuze mu baturage b\'abatanga impano, abafatanyabikorwa b\'ubuhanga bwo gusana, n\'amashyirahamwe y\'icyizere, dukemeza ko ibikoresho byiza byo kugenda bigera ku bantu babikeneye.',
    'home.mission.seeImpact': 'Reba Ingaruka Zacu',
    'home.community.title': 'Kubaka Amatsinda Akomeye',
    'home.community.description': 'Buri mpano ikora ingaruka nziza. Iyo umuntu agarura ubushobozi bwo kugenda, ashobora kwitabira byinshi mu muryango we, agakomeza ubwigenge bwe, kandi akomeza gutanga umusanzu mu sosiyete.',
    'home.community.impact': 'Urusobe rwacu rw\'abafatanyabikorwa rukemeza ko buri gikoresho cyo kugenda gihageze ku muntu ukigikeneye, bigatera ingaruka zirambye zirenga impano ya mbere.',
    'home.community.meetPartners': 'Huza n\'Abafatanyabikorwa Bacu',
    
    // Marketplace
    'marketplace.title': 'Isoko rya Care Bridge',
    'marketplace.subtitle': 'Ibikoresho by\'Ubuvuzi bya Kalite',
    'marketplace.description': 'kuguhuriza n\'ibikoresho by\'ubuvuzi bihendutse mu Rwanda no muri Nigeriya',
    'marketplace.searchPlaceholder': 'Shakisha ibicuruzwa...',
    'marketplace.filterButton': 'Gutoranya',
    'marketplace.categories': 'Ibyiciro',
    'marketplace.sortBy': 'Tondeka ukurikije',
    'marketplace.sortBy.featured': 'Byerekanwe',
    'marketplace.sortBy.priceLow': 'Igiciro: Bito kugeza Gikomeye',
    'marketplace.sortBy.priceHigh': 'Igiciro: Gikomeye kugeza Bito',
    'marketplace.sortBy.newest': 'Bishya',
    'marketplace.addToCart': 'Shyira mu Gasanduku',
    'marketplace.outOfStock': 'Byarangiye',
    'marketplace.inStock': 'Bihari',
    'marketplace.noProducts': 'Nta bicuruzwa byabonetse',
    'marketplace.partnerWithUs': 'Fatanyabikorwa Nacu',
    'marketplace.partnerDescription': 'Injira mu baturage bacu b\'abatanga serivisi z\'ubuvuzi bazwi',
    'marketplace.becomePartner': 'Ba Umufatanyabikorwa',
    'marketplace.noPrice': 'Kuvugana kugira ngo umenye igiciro',
    'marketplace.categories.wheelchairs': 'Amategeko',
    'marketplace.categories.walkingAids': 'Ibikoresho byo Kugenda',
    'marketplace.categories.prosthetics': 'Ibikoresho by\'Ubusimbuka',
    'marketplace.categories.orthotics': 'Ibikoresho by\'Ubuvuzi',
    'marketplace.categories.hearingAids': 'Ibikoresho byo Kumva',
    'marketplace.categories.dailyLiving': 'Ubuzima bwa Buri Munsi',
    
    // Auth
    'auth.signIn': 'Kwinjira',
    'auth.signUp': 'Kwiyandikisha',
    'auth.email': 'Imeyili',
    'auth.password': 'Ijambo ry\'Ibanga',
    'auth.firstName': 'Izina ry\'Ubwambere',
    'auth.lastName': 'Izina ry\'Umuryango',
    'auth.createAccount': 'Kora Konti',
    'auth.alreadyHaveAccount': 'Usanzwe ufite konti?',
    'auth.dontHaveAccount': 'Ntufite konti?',
    'auth.forgotPassword': 'Wibagiwe Ijambo ry\'Ibanga?',
    'auth.resetPassword': 'Subiramo Ijambo ry\'Ibanga',
    'auth.welcomeBack': 'Murakaza neza',
    'auth.joinCommunity': 'Injira mu Muryango Wacu',
    'auth.signInWith': 'Winjire ukoresheje',
    
    // Cart
    'cart.title': 'Agasanduku k\'Ubucuruzi',
    'cart.empty': 'Agasanduku kawe nta kintu',
    'cart.emptyDescription': 'Ongeramo ibintu kugira ngo utangire',
    'cart.continueShopping': 'Komeza Gucuruza',
    'cart.removeItem': 'Kuramo Ikintu',
    'cart.updateQuantity': 'Kuvugurura Umubare',
    'cart.checkout': 'Kwishyura',
    'cart.subtotal': 'Igice',
    'cart.shipping': 'Kwohereza',
    'cart.tax': 'Umusoro',
    'cart.total': 'Byose',
    'cart.itemsInCart': 'Ibintu {{count}} mu gasanduku',
    
    // Dashboard
    'dashboard.title': 'Ikibaho',
    'dashboard.welcome': 'Murakaza neza, {{name}}!',
    'dashboard.orders.title': 'Ibyo Nategetse',
    'dashboard.orders.recent': 'Ibyo Nategetse Vuba',
    'dashboard.orders.all': 'Ibyo Nategetse Byose',
    'dashboard.orders.status.pending': 'Gutegereza',
    'dashboard.orders.status.confirmed': 'Byemejwe',
    'dashboard.orders.status.shipped': 'Byoherejwe',
    'dashboard.orders.status.delivered': 'Byahagaritswe',
    'dashboard.orders.status.cancelled': 'Byahajuwe',
    'dashboard.profile.title': 'Umwirondoro',
    'dashboard.profile.edit': 'Hindura Umwirondoro',
    'dashboard.favorites.title': 'Ibyo Nkunda',
    'dashboard.noOrders': 'Nta bitegetswe',
    'dashboard.noFavorites': 'Nta byo nkunda',
    
    // Checkout
    'checkout.title': 'Kwishyura',
    'checkout.orderSummary': 'Incamake y\'Inyandiko',
    'checkout.shippingAddress': 'Aderesi yo Kohereza',
    'checkout.billingAddress': 'Aderesi y\'Kwishyura',
    'checkout.paymentMethod': 'Uburyo bwo Kwishyura',
    'checkout.placeOrder': 'Shyira Itegeko',
    'checkout.processing': 'Biratunganywa...',
    'checkout.success': 'Itegeko ryashyizweho neza!',
    'checkout.error': 'Ikosa mu gushyira itegeko',
    'checkout.street': 'Aderesi y\'Umuhanda',
    'checkout.city': 'Umujyi',
    'checkout.state': 'Leta/Intara',
    'checkout.zipCode': 'Kode ya ZIP/Posita',
    'checkout.country': 'Igihugu',
    'checkout.phone': 'Nimero ya Terefone',
    
    // About
    'about.title': 'Inyandiko za Care Bridge',
    'about.hero.title': 'Inyandiko za Care Bridge',
    'about.hero.subtitle': 'Gushyira Uburyohe mu Kubona Ubuvuzi',
    'about.hero.description': 'Twiteguye kumenya ko ibikoresho byingirakamaro byubuvuzi bigera kumuntu wese ubikeneye, utitaye kubushobozi bwe bwebukungu.',
    'about.mission.title': 'Intego Yacu',
    'about.mission.description': 'Gushyira uburyohe mu kubona ibikoresho byiza by\'ubuvuzi n\'ubufasha bwo kugenda mu Rwanda no muri Nigeriya.',
    'about.vision.title': 'Icyerekezo Cyacu',
    'about.vision.description': 'Isi aho umuntu wese agira uburenganzira bwo kubona ibikoresho by\'ubuvuzi akeneye kugira ngo abeho mu cyubahiro n\'ubwigenge.',
    'about.values.title': 'Indangagaciro Zacu',
    'about.values.description': 'Izi ndangagaciro ziyobora ibyose dukora',
    'about.values.compassion.title': 'Impuhwe',
    'about.values.compassion.description': 'Dukwegera buri kuvugana n\'impuhwe no kumva',
    'about.values.community.title': 'Muryango',
    'about.values.community.description': 'Twizera muri mbaraga za muryango mu guhindura ibihe byinshi',
    'about.values.accessibility.title': 'Kuboneka',
    'about.values.accessibility.description': 'Umuntu wese akwiye kubona ubuvuzi atitaye ku bidukikije',
    'about.values.impact.title': 'Ingaruka',
    'about.values.impact.description': 'Dupima intsinzi n\'ubuzima dutunze n\'amatsinda dukomeye',
    'about.story.title': 'Inkuru Yacu',
    'about.story.beginning.title': 'Uburyo Twatangiye',
    'about.story.beginning.description': 'Care Bridge yashinzwe n\'igitekerezo cy\'ubunyangamugayo: ibikoresho by\'ubuvuzi bigomba kuboneka kuri bose.',
    'about.story.growth.title': 'Ingaruka Zikura',
    'about.story.growth.description': 'Kuva mu ntangiriro zacu, twakuze tufasha abantu ibihumbi mu Rwanda no muri Nigeriya.',
    'about.story.future.title': 'Kureba Imbere',
    'about.story.future.description': 'Dukomeza kwagura ubufasha bwacu, dunonoseza serivisi zacu.',
    'about.achievements.title': 'Ingaruka Zacu',
    'about.achievements.description': 'Reba itandukaniro twakoreye hamwe',
    'about.achievements.peopleServed': 'Abantu Bafashijwe',
    'about.achievements.aidsDistributed': 'Ubufasha bw\'Ubuvuzi Bwagabanijwe',
    'about.achievements.countriesReached': 'Ibihugu Byagerwemo',
    'about.achievements.satisfactionRate': 'Igipimo cy\'Kunyuzwa',
    'about.team.title': 'Huza n\'Itsinda Ryacu',
    'about.team.description': 'Abakozi biyemeje bakora kugira ngo ubuvuzi bubone',
    'about.cta.title': 'Injira mu Ntego Yacu',
    'about.cta.description': 'Hamwe, dushobora gukora isi aho kubona ubuvuzi ari uburenganzira.',
    'about.cta.becomePartner': 'Ba Umufatanyabikorwa',
    'about.cta.contactUs': 'Kuvugana',
    'about.values.compassion': 'Ubwoba',
    'about.values.integrity': 'Ubunyangamugayo',
    'about.values.innovation': 'Uduhuzwa',
    'about.values.collaboration': 'Ubufatanye',
    
    // Contact
    'contact.title': 'Kuvugana',
    'contact.subtitle': 'Dukorerane',
    'contact.description': 'Twishimiye kuvuga nawe. Twoherereze ubutumwa tuzakusubiza vuba bishoboka.',
    'contact.form.name': 'Amazina Yose',
    'contact.form.email': 'Aderesi ya Imeyili',
    'contact.form.subject': 'Ingingo',
    'contact.form.message': 'Ubutumwa',
    'contact.form.send': 'Kohereza Ubutumwa',
    'contact.info.address': 'Aderesi',
    'contact.info.phone': 'Terefone',
    'contact.info.email': 'Imeyili',
    'contact.info.hours': 'Amasaha y\'Akazi',
    
    // FAQ
    'faq.title': 'Ibibazo Bikunze Kubazwa',
    'faq.subtitle': 'Shakira ibisubizo ku bibazo bikunze kubazwa',
    'faq.searchPlaceholder': 'Shakisha FAQ...',
    'faq.general': 'Rusange',
    'faq.donating': 'Gutanga',
    'faq.receiving': 'Kwakira Ubufasha',
    'faq.marketplace': 'Isoko',
    'faq.technical': 'Ubufasha bwa Tekiniki',
    
    // Donate
    'donate.title': 'Tanga Ibikoresho byo Kugenda',
    'donate.subtitle': 'Hindura Uyu Munsi',
    'donate.description': 'Impano yawe y\'ibikoresho byo kugenda ishobora guhindura ubuzima bw\'umuntu. Dufashe gushyira uburyohe hagati y\'abafite n\'abakeneye.',
    'donate.donateNow': 'Tanga Ubu',
    'donate.process.title': 'Ukuntu Bikora',
    'donate.process.step1': 'Shyira ifishi y\'impano',
    'donate.process.step2': 'Gena igihe cyo gutoranywa',
    'donate.process.step3': 'Gusuzuma uburyo',
    'donate.process.step4': 'Kugabura ku nyungu',
    'donate.accepted.title': 'Ibintu Byemewe',
    'donate.cta.title': 'Witeguye Guhindura?',
    'donate.cta.description': 'Tangira inzira yawe yo gutanga uyu munsi',
    
    // Partners
    'partners.title': 'Abafatanyabikorwa Bacu',
    'partners.subtitle': 'Kubaka Urusobe rw\'Ubwitange',
    'partners.description': 'Dukorana n\'amashyirahamwe y\'icyizere mu Rwanda no muri Nigeriya kugira ngo dukemeze ko ibikoresho byo kugenda bigera ku bakeneye byinshi.',
    'partners.types.title': 'Ubwoko bw\'Abafatanyabikorwa',
    'partners.types.ngos': 'NGO & Amashyirahamwe',
    'partners.types.healthcare': 'Abatanga Ubuvuzi',
    'partners.types.repair': 'Serivisi zo Gusana',
    'partners.types.logistics': 'Abafatanyabikorwa ba Logistics',
    'partners.benefits.title': 'Inyungu z\'Ubufatanye',
    'partners.join.title': 'Injira mu Rusobe Rwacu',
    'partners.join.cta': 'Ba Umufatanyabikorwa',
    
    // Impact
    'impact.title': 'Ingaruka Zacu',
    'impact.subtitle': 'Guhindura Hamwe',
    'impact.description': 'Reba ukuntu muryango wacu uhindura ubuzima bw\'abantu mu Rwanda no muri Nigeriya.',
    'impact.stories.title': 'Inkuru z\'Intsinzi',
    'impact.metrics.title': 'Ibipimo by\'Ingaruka',
    'impact.countries': 'Ibihugu Byatanzwe',
    'impact.beneficiaries': 'Ubuzima Bwahinduwe',
    'impact.partnerships': 'Ubufatanye Bukora',
    'impact.donations': 'Ubufasha Bwagabanijwe',
    
    // Errors
    'error.notFound': 'Ipaji ntiboneka',
    'error.serverError': 'Ikosa rya seriveri',
    'error.networkError': 'Ikosa rya rusobe',
    'error.unauthorized': 'Nta burenganzira',
    'error.goHome': 'Subira Ahabanza',
    'error.tryAgain': 'Ongera Ugerageze',
  },
};