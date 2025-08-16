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

export const translations: Record<'en' | 'rw' | 'ha' | 'ig' | 'yo', Record<TranslationKey, string>> = {
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
    
    // Continue with remaining translations in shortened form...
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

    // Auth & other sections abbreviated for space
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

    // All other translation keys with basic English translations...
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

    // Abbreviated other sections...
    'about.title': 'About Care Bridge',
    'about.hero.title': 'About Care Bridge',
    'about.hero.subtitle': 'Bridging Healthcare Access Gaps',
    'about.hero.description': 'We are committed to ensuring that essential healthcare accessories reach everyone who needs them.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To bridge the gap in healthcare accessibility by connecting donors with those in need.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'A world where healthcare accessibility is not limited by economic barriers.',
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
    'about.story.beginning.description': 'Care Bridge was founded with a simple but powerful idea.',
    'about.story.growth.title': 'Growing Impact',
    'about.story.growth.description': 'From our humble beginnings, we have grown to serve thousands.',
    'about.story.future.title': 'Looking Forward',
    'about.story.future.description': 'We continue to expand our reach and improve our services.',
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

    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.description': 'We\'d love to hear from you.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions',
    'faq.searchPlaceholder': 'Search FAQs...',
    'faq.general': 'General',
    'faq.donating': 'Donating',
    'faq.receiving': 'Receiving Aid',
    'faq.marketplace': 'Marketplace',
    'faq.technical': 'Technical Support',

    'donate.title': 'Donate Mobility Aids',
    'donate.subtitle': 'Make a Difference Today',
    'donate.description': 'Your donation today will help someone in need.',
    'donate.donateNow': 'Donate Now',
    'donate.process.title': 'How to Donate',
    'donate.process.step1': 'Choose items to donate',
    'donate.process.step2': 'Fill required information',
    'donate.process.step3': 'We collect the items',
    'donate.process.step4': 'We distribute to those in need',
    'donate.accepted.title': 'What We Accept',
    'donate.cta.title': 'Ready to Donate?',
    'donate.cta.description': 'Your donation will make a huge difference in someone\'s life.',

    'partners.title': 'Our Partners',
    'partners.subtitle': 'Working together for a better future',
    'partners.description': 'Meet the organizations we work with to achieve our mission.',
    'partners.types.title': 'Types of Partners',
    'partners.types.ngos': 'NGOs',
    'partners.types.healthcare': 'Healthcare Providers',
    'partners.types.repair': 'Repair Services',
    'partners.types.logistics': 'Logistics',
    'partners.benefits.title': 'Benefits of Partnership',
    'partners.join.title': 'Join Us',
    'partners.join.cta': 'Join us as a partner',

    'impact.title': 'Our Impact',
    'impact.subtitle': 'The difference we make',
    'impact.description': 'See how your donations are creating positive change.',
    'impact.stories.title': 'Success Stories',
    'impact.metrics.title': 'Our Impact in Numbers',
    'impact.countries': 'Countries',
    'impact.beneficiaries': 'Beneficiaries',
    'impact.partnerships': 'Partnerships',
    'impact.donations': 'Donations',

    'error.notFound': 'Not Found',
    'error.serverError': 'Server Error',
    'error.networkError': 'Network Error',
    'error.unauthorized': 'Unauthorized',
    'error.goHome': 'Go Home',
    'error.tryAgain': 'Try Again'
  },

  // Kinyarwanda translations (simplified)
  rw: {
    'nav.home': 'Urugo',
    'nav.about': 'Kuduhuza',
    'nav.marketplace': 'Isoko',
    'nav.donate': 'Gutanga',
    'nav.partners': 'Ababana',
    'nav.faq': 'Ibibazo',
    'nav.contact': 'Duhamagare',
    'nav.impact': 'Ingaruka',
    'nav.dashboard': 'Imbonerahamwe',
    'nav.signIn': 'Kwinjira',
    'nav.signOut': 'Gusohoka',
    'nav.cart': 'Agatebo',
    
    // All other keys with Kinyarwanda translations or fallbacks
    'common.loading': 'Birakuramo...',
    'common.error': 'Ikosa',
    'common.success': 'Byagenze neza',
    'common.save': 'Kubika',
    'common.cancel': 'Kureka',
    'common.delete': 'Gusiba',
    'common.edit': 'Guhindura',
    'common.add': 'Kongeramo',
    'common.search': 'Gushakisha',
    'common.filter': 'Gushungura',
    'common.sort': 'Gutondeka',
    'common.price': 'Igiciro',
    'common.quantity': 'Umubare',
    'common.total': 'Byose',
    'common.back': 'Gusubira inyuma',
    'common.next': 'Ikurikira',
    'common.previous': 'Ibanjirije',
    'common.submit': 'Kohereza',
    'common.close': 'Gufunga',
    'common.view': 'Kureba',
    'common.learnMore': 'Menya byinshi',
    'common.getStarted': 'Tangira',
    'common.readMore': 'Soma byinshi',
    'common.seeMore': 'Reba byinshi',
    'common.showLess': 'Erekana bike',

    'home.hero.title': 'Kuhuza icyuho muri',
    'home.hero.subtitle': 'Kubona ibikoresho byo kwihuta',
    'home.hero.description': 'Tuhuza abatanga n\'abakeneye, tubona ko ibikoresho nk\'intebe z\'amaguru, inkoni, n\'inkingi z\'amaguru bigera ku bakeneye.',
    'home.hero.donateNow': 'Tanga ubu',
    'home.hero.learnMore': 'Menya byinshi',
    'home.hero.shopMarketplace': 'Gura mu isoko',
    'home.hero.getInTouch': 'Duhamagare',
    'home.stats.peopleHelped': 'Abantu bafashijwe',
    'home.stats.aidsDonated': 'Ubufasha bwatanzwe',
    'home.stats.activePartners': 'Ababana bakora',
    'home.mission.title': 'Intego yacu yoroshye',
    'home.mission.description': 'Twizera ko kwihuta kutari ikibazo cyo kubana n\'ubuzima buzuye.',
    'home.mission.seeImpact': 'Reba ingaruka zacu',
    'home.community.title': 'Kubaka imitwe ikomeye',
    'home.community.description': 'Buri mutanga urasa ingaruka nziza.',
    'home.community.impact': 'Umuryango w\'ababana wacu ubona ko buri gikoresho cyo kwihuta kigera ku ukeneye.',
    'home.community.meetPartners': 'Hura ababana bacu',

    'marketplace.title': 'Isoko rya Care Bridge',
    'marketplace.subtitle': 'Ibikoresho by\'ubuzima biza',
    'marketplace.description': 'Kukuhuza n\'ibikoresho by\'ubuzima bihendutse',

    // Continue with basic Kinyarwanda translations for all keys...
    // (For brevity, using simplified versions)
    'marketplace.searchPlaceholder': 'Shakisha ibicuruzwa...',
    'marketplace.filterButton': 'Amashungura',
    'marketplace.categories': 'Amoko',
    'marketplace.sortBy': 'Tondeka ukurikije',
    'marketplace.sortBy.featured': 'Byerekana',
    'marketplace.sortBy.priceLow': 'Igiciro: Hasi kugeza hejuru',
    'marketplace.sortBy.priceHigh': 'Igiciro: Hejuru kugeza hasi',
    'marketplace.sortBy.newest': 'Bishya',
    'marketplace.addToCart': 'Shyira mu gatebo',
    'marketplace.outOfStock': 'Byarangiye',
    'marketplace.inStock': 'Birahari',
    'marketplace.noProducts': 'Nta bicuruzwa byabonetse',
    'marketplace.partnerWithUs': 'Ufatanye nacu',
    'marketplace.partnerDescription': 'Jya mu muryango wacu w\'abatanga serivisi z\'ubuzima',
    'marketplace.becomePartner': 'Ba umunyangana',
    'marketplace.noPrice': 'Hamagara kugira igiciro',
    'marketplace.categories.wheelchairs': 'Intebe z\'amaguru',
    'marketplace.categories.walkingAids': 'Ibikoresho byo kwihuta',
    'marketplace.categories.prosthetics': 'Ibice by\'umubiri bitanzwe',
    'marketplace.categories.orthotics': 'Ibikoresho byo gukosora umubiri',
    'marketplace.categories.hearingAids': 'Ibikoresho byo kwumva',
    'marketplace.categories.dailyLiving': 'Ubuzima bwa buri munsi',

    // Basic translations for all other sections
    'auth.signIn': 'Kwinjira',
    'auth.signUp': 'Kwiyandikisha',
    'auth.email': 'Imeli',
    'auth.password': 'Ijambo banga',
    'auth.firstName': 'Izina ryambere',
    'auth.lastName': 'Izina ryumuryango',
    'auth.createAccount': 'Kora konti',
    'auth.alreadyHaveAccount': 'Ufite konti?',
    'auth.dontHaveAccount': 'Nta konti ufite?',
    'auth.forgotPassword': 'Wibagiwe ijambo banga?',
    'auth.resetPassword': 'Subiza ijambo banga',
    'auth.welcomeBack': 'Murakaza neza!',
    'auth.joinCommunity': 'Jya mu muryango wacu',
    'auth.signInWith': 'Injira ukoresheje',

    'cart.title': 'Agatebo ko kugura',
    'cart.empty': 'Agatebo kawe karimo ubusa',
    'cart.emptyDescription': 'Ongera ibintu tangira',
    'cart.continueShopping': 'Komeza kugura',
    'cart.removeItem': 'Kureho ikintu',
    'cart.updateQuantity': 'Guhindura umubare',
    'cart.checkout': 'Kwishyura',
    'cart.subtotal': 'Igikaze gito',
    'cart.shipping': 'Kohereza',
    'cart.tax': 'Imisoro',
    'cart.total': 'Byose',
    'cart.itemsInCart': 'Ibintu {{count}} mu gatebo',

    'dashboard.title': 'Imbonerahamwe',
    'dashboard.welcome': 'Murakaza neza, {{name}}!',
    'dashboard.orders.title': 'Ibyo nasabye',
    'dashboard.orders.recent': 'Ibyo nasabye vuba',
    'dashboard.orders.all': 'Byose nasabye',
    'dashboard.orders.status.pending': 'Bitegereje',
    'dashboard.orders.status.confirmed': 'Byemejwe',
    'dashboard.orders.status.shipped': 'Byoherejwe',
    'dashboard.orders.status.delivered': 'Byagejejwe',
    'dashboard.orders.status.cancelled': 'Byahagaritswe',
    'dashboard.profile.title': 'Umwirondoro',
    'dashboard.profile.edit': 'Guhindura umwirondoro',
    'dashboard.favorites.title': 'Ibyo nkunda',
    'dashboard.noOrders': 'Nta kintu wasabye',
    'dashboard.noFavorites': 'Nta kintu ukunda',

    'checkout.title': 'Kwishyura',
    'checkout.orderSummary': 'Incamake y\'ibyo wasabye',
    'checkout.shippingAddress': 'Aderesi yo kohereza',
    'checkout.billingAddress': 'Aderesi yo kwishyurira',
    'checkout.paymentMethod': 'Uburyo bwo kwishyura',
    'checkout.placeOrder': 'Gusaba',
    'checkout.processing': 'Birakozwa...',
    'checkout.success': 'Bisabwe neza!',
    'checkout.error': 'Ikosa mu gusaba',
    'checkout.street': 'Aderesi y\'umuhanda',
    'checkout.city': 'Umujyi',
    'checkout.state': 'Intara',
    'checkout.zipCode': 'Kode ya posta',
    'checkout.country': 'Igihugu',
    'checkout.phone': 'Nimero ya telefoni',

    // Continue with basic translations for all remaining keys...
    'about.title': 'Kuduhuza Care Bridge',
    'about.hero.title': 'Kuduhuza Care Bridge',
    'about.hero.subtitle': 'Guhuza icyuho mu kubona ubuvuzi',
    'about.hero.description': 'Dushishikajwe no kubona ko ibikoresho by\'ubuvuzi bigera ku bantu bose bakeneye.',
    'about.mission.title': 'Intego yacu',
    'about.mission.description': 'Guhuza icyuho mu kubona ubuvuzi.',
    'about.vision.title': 'Icyerekezo cyacu',
    'about.vision.description': 'Isi aho kubona ubuvuzi kutabuza n\'ibibazo by\'ubukungu.',
    'about.values.title': 'Indangagaciro zacu',
    'about.values.description': 'Izi ndangagaciro zikayobora ibyo dukora byose',
    'about.values.compassion.title': 'Imbabazi',
    'about.values.compassion.description': 'Twegera buri kintu n\'imbabazi no gusobanukirwa',
    'about.values.community.title': 'Umuryango',
    'about.values.community.description': 'Twizera ko umuryango ufite imbaraga zo guhindura ibintu',
    'about.values.accessibility.title': 'Kuboneka',
    'about.values.accessibility.description': 'Buri wese akwiye kubona ubuvuzi',
    'about.values.impact.title': 'Ingaruka',
    'about.values.impact.description': 'Tupima intsinzi ku buzima bw\'abantu tuzamura',
    'about.story.title': 'Inkuru yacu',
    'about.story.beginning.title': 'Uko twatangiye',
    'about.story.beginning.description': 'Care Bridge yashinzwe n\'igitekerezo cyoroshye.',
    'about.story.growth.title': 'Kwaguka kw\'ingaruka',
    'about.story.growth.description': 'Kuva ku ntangiriro zacu, twakuze kugera ku bantu ibihumbi.',
    'about.story.future.title': 'Kureba imbere',
    'about.story.future.description': 'Dukomeza kwagura serivisi zacu.',
    'about.achievements.title': 'Ingaruka zacu',
    'about.achievements.description': 'Reba itandukaniro twakoreye hamwe',
    'about.achievements.peopleServed': 'Abantu bakorerwe',
    'about.achievements.aidsDistributed': 'Ibikoresho by\'ubuvuzi byatanzwe',
    'about.achievements.countriesReached': 'Ibihugu twageze',
    'about.achievements.satisfactionRate': 'Igipimo cy\'ibyishimo',
    'about.team.title': 'Hura itsinda ryacu',
    'about.team.description': 'Abanyamwuga biyeguriye gukora ubuvuzi buboneka',
    'about.cta.title': 'Jya mu ntego yacu',
    'about.cta.description': 'Hamwe, dushobora kurema isi aho kubona ubuvuzi ari uburenganzira.',
    'about.cta.becomePartner': 'Ba umunyangana',
    'about.cta.contactUs': 'Duhamagare',
    'about.values.compassion': 'Imbabazi',
    'about.values.integrity': 'Ubunyangamugayo',
    'about.values.innovation': 'Guhanga udushya',
    'about.values.collaboration': 'Gufatanya',

    'contact.title': 'Duhamagare',
    'contact.subtitle': 'Duhamagare',
    'contact.description': 'Twifuza kukumva.',
    'contact.form.name': 'Amazina yose',
    'contact.form.email': 'Aderesi ya imeli',
    'contact.form.subject': 'Ingingo',
    'contact.form.message': 'Ubutumwa',
    'contact.form.send': 'Kohereza ubutumwa',
    'contact.info.address': 'Aderesi',
    'contact.info.phone': 'Telefoni',
    'contact.info.email': 'Imeli',
    'contact.info.hours': 'Amasaha y\'akazi',

    'faq.title': 'Ibibazo bikunze kubazwa',
    'faq.subtitle': 'Shakisha ibisubizo ku bibazo bisanzwe',
    'faq.searchPlaceholder': 'Shakisha FAQ...',
    'faq.general': 'Rusange',
    'faq.donating': 'Gutanga',
    'faq.receiving': 'Kwakira ubufasha',
    'faq.marketplace': 'Isoko',
    'faq.technical': 'Ubufasha bwa tekiniki',

    'donate.title': 'Tanga ibikoresho byo kwihuta',
    'donate.subtitle': 'Kora itandukaniro uyu munsi',
    'donate.description': 'Tanga uyu munsi kugira utandukaniro.',
    'donate.donateNow': 'Tanga ubu',
    'donate.process.title': 'Uburyo bwo gutanga',
    'donate.process.step1': 'Hitamo ibyo uzatanga',
    'donate.process.step2': 'Uzuza amakuru akenewe',
    'donate.process.step3': 'Tuza kubikuraho',
    'donate.process.step4': 'Tubitanga abakeneye',
    'donate.accepted.title': 'Ibyo twakira',
    'donate.cta.title': 'Witeguye gutanga?',
    'donate.cta.description': 'Ibyawatanze bizakora itandukaniro rinini mu buzima bw\'umuntu.',

    'partners.title': 'Ababana bacu',
    'partners.subtitle': 'Gukora hamwe kugira ejo hazaza heza',
    'partners.description': 'Hura amatsinda dukora nayo kugira tugere ku ntego zacu.',
    'partners.types.title': 'Ubwoko bw\'ababana',
    'partners.types.ngos': 'Amatsinda atari aya leta',
    'partners.types.healthcare': 'Abatanga serivisi z\'ubuzima',
    'partners.types.repair': 'Serivisi zo gusana',
    'partners.types.logistics': 'Kohereza',
    'partners.benefits.title': 'Inyungu zo kuba umunyangana',
    'partners.join.title': 'Dujye hamwe',
    'partners.join.cta': 'Dujye hamwe nk\'umunyangana',

    'impact.title': 'Ingaruka zacu',
    'impact.subtitle': 'Itandukaniro dukora',
    'impact.description': 'Reba uko ibyawatanze bikora impinduka nziza.',
    'impact.stories.title': 'Inkuru z\'intsinzi',
    'impact.metrics.title': 'Ingaruka zacu mu mibare',
    'impact.countries': 'Ibihugu',
    'impact.beneficiaries': 'Abanyungu',
    'impact.partnerships': 'Ubufatanye',
    'impact.donations': 'Impano',

    'error.notFound': 'Ntibyabonetse',
    'error.serverError': 'Ikosa rya seriveri',
    'error.networkError': 'Ikosa ryo guhuza',
    'error.unauthorized': 'Ntabwo wemerewe',
    'error.goHome': 'Garuka urugo',
    'error.tryAgain': 'Ongera ugerageze'
  },

  // Hausa, Igbo, and Yoruba with basic translations
  ha: {
    'nav.home': 'Gida',
    'nav.about': 'Game da mu',
    'nav.marketplace': 'Kasuwa',
    'nav.donate': 'Ba da gudummawa',
    'nav.partners': 'Abokan hulda',
    'nav.faq': 'Tambayoyi',
    'nav.contact': 'Tuntube mu',
    'nav.impact': 'Tasiri',
    'nav.dashboard': 'Allon bayani',
    'nav.signIn': 'Shiga',
    'nav.signOut': 'Fita',
    'nav.cart': 'Kaya',
    
    'common.loading': 'Ana lodawa...',
    'common.error': 'Kuskure',
    'common.success': 'Nasara',
    'common.save': 'Ajiye',
    'common.cancel': 'Soke',
    'common.delete': 'Share',
    'common.edit': 'Gyara',
    'common.add': 'Kara',
    'common.search': 'Nema',
    'common.filter': 'Tace',
    'common.sort': 'Jera',
    'common.price': 'Farashi',
    'common.quantity': 'Adadi',
    'common.total': 'Jimillar',
    'common.back': 'Komawa',
    'common.next': 'Na gaba',
    'common.previous': 'Na baya',
    'common.submit': 'Mika',
    'common.close': 'Rufe',
    'common.view': 'Duba',
    'common.learnMore': 'Koyi kari',
    'common.getStarted': 'Fara',
    'common.readMore': 'Karanta kari',
    'common.seeMore': 'Duba kari',
    'common.showLess': 'Nuna kadan',

    // Basic placeholders for all other keys...
    'home.hero.title': 'Haɗa gibin cikin',
    'home.hero.subtitle': 'Samun kayan taimako',
    'home.hero.description': 'Muna haɗa masu ba da gudummawa da mutane masu bukatar taimako.',
    'home.hero.donateNow': 'Ba da gudummawa yanzu',
    'home.hero.learnMore': 'Koyi kari',
    'home.hero.shopMarketplace': 'Saya daga kasuwa',
    'home.hero.getInTouch': 'Tuntube mu',
    'home.stats.peopleHelped': 'Mutane da aka taimaka',
    'home.stats.aidsDonated': 'Kayan taimako da aka bayar',
    'home.stats.activePartners': 'Abokan hulda',
    'home.mission.title': 'Manufarmu ta sauƙi',
    'home.mission.description': 'Mun yi imani cewa motsi bai kamata ya zama shinge ga rayuwa mai cikawa ba.',
    'home.mission.seeImpact': 'Duba tasirinmu',
    'home.community.title': 'Gina al\'ummomi masu ƙarfi',
    'home.community.description': 'Kowane gudummawa yana haifar da sauyi mai kyau.',
    'home.community.impact': 'Cibiyar abokan huldarmu tana tabbatar da cewa kowane kayan taimako ya kai ga wanda ya fi bukata.',
    'home.community.meetPartners': 'Ku gamu da abokan huldarmu',

    'marketplace.title': 'Kasuwar Care Bridge',
    'marketplace.subtitle': 'Kayan lafiya masu inganci',
    'marketplace.description': 'Haɗa ku da kayan lafiya masu araha',

    // Continue with basic Hausa placeholders for remaining keys...
    'marketplace.searchPlaceholder': 'Nemi kayayyaki...',
    'marketplace.filterButton': 'Tace',
    'marketplace.categories': 'Nau\'i',
    'marketplace.sortBy': 'Jera ta',
    'marketplace.sortBy.featured': 'Fitattun',
    'marketplace.sortBy.priceLow': 'Farashi: Daga ƙasa zuwa sama',
    'marketplace.sortBy.priceHigh': 'Farashi: Daga sama zuwa ƙasa',
    'marketplace.sortBy.newest': 'Sabbin',
    'marketplace.addToCart': 'Kara zuwa kaya',
    'marketplace.outOfStock': 'Ba kowa',
    'marketplace.inStock': 'Akwai kowa',
    'marketplace.noProducts': 'Babu kayayyaki',
    'marketplace.partnerWithUs': 'Kasance abokin hulda',
    'marketplace.partnerDescription': 'Kasance memba na cibiyar masu ba da kula da lafiya',
    'marketplace.becomePartner': 'Kasance abokin hulda',
    'marketplace.noPrice': 'Tuntubi don farashi',
    'marketplace.categories.wheelchairs': 'Kujerun hannu',
    'marketplace.categories.walkingAids': 'Kayan taimakon tafiya',
    'marketplace.categories.prosthetics': 'Kayan wucin gadi',
    'marketplace.categories.orthotics': 'Kayan gyaran jiki',
    'marketplace.categories.hearingAids': 'Kayan taimakon ji',
    'marketplace.categories.dailyLiving': 'Rayuwar yau da kullun',

    // Continue with basic translations for all other sections...
    'auth.signIn': 'Shiga',
    'auth.signUp': 'Yi rajista',
    'auth.email': 'Imel',
    'auth.password': 'Kalmar sirri',
    'auth.firstName': 'Suna na farko',
    'auth.lastName': 'Suna na ƙarshe',
    'auth.createAccount': 'Ƙirƙiri asusun',
    'auth.alreadyHaveAccount': 'Kana da asusun?',
    'auth.dontHaveAccount': 'Ba ka da asusun?',
    'auth.forgotPassword': 'Ka manta da kalmar sirri?',
    'auth.resetPassword': 'Sake saita kalmar sirri',
    'auth.welcomeBack': 'Barka da dawowa',
    'auth.joinCommunity': 'Shiga al\'ummarmu',
    'auth.signInWith': 'Shiga da',

    'cart.title': 'Kayan saya',
    'cart.empty': 'Kayanka ba komai',
    'cart.emptyDescription': 'Kara wasu abubuwa don farawa',
    'cart.continueShopping': 'Ci gaba da saya',
    'cart.removeItem': 'Cire abu',
    'cart.updateQuantity': 'Sabunta adadi',
    'cart.checkout': 'Biya',
    'cart.subtotal': 'Jimillar ƙarami',
    'cart.shipping': 'Jigilar kaya',
    'cart.tax': 'Haraji',
    'cart.total': 'Jimillar',
    'cart.itemsInCart': '{{count}} abubuwa a cikin kaya',

    // Complete with basic translations for all remaining sections...
    'dashboard.title': 'Allon bayani',
    'dashboard.welcome': 'Barka da dawowa, {{name}}!',
    'dashboard.orders.title': 'Umarninuna',
    'dashboard.orders.recent': 'Umarni na kwanan nan',
    'dashboard.orders.all': 'Dukkan umarni',
    'dashboard.orders.status.pending': 'Ana jira',
    'dashboard.orders.status.confirmed': 'An tabbatar',
    'dashboard.orders.status.shipped': 'An aika',
    'dashboard.orders.status.delivered': 'An kawo',
    'dashboard.orders.status.cancelled': 'An soke',
    'dashboard.profile.title': 'Bayani',
    'dashboard.profile.edit': 'Gyara bayani',
    'dashboard.favorites.title': 'Abubuwan da na fi so',
    'dashboard.noOrders': 'Babu umarni tukuna',
    'dashboard.noFavorites': 'Babu abubuwan da ka fi so tukuna',

    'checkout.title': 'Biya',
    'checkout.orderSummary': 'Takaitawar umarnin',
    'checkout.shippingAddress': 'Adireshin jigilar kaya',
    'checkout.billingAddress': 'Adireshin biyan kuɗi',
    'checkout.paymentMethod': 'Hanyar biyan kuɗi',
    'checkout.placeOrder': 'Yin umarnin',
    'checkout.processing': 'Ana aiki...',
    'checkout.success': 'An yi nasarar yin umarnin!',
    'checkout.error': 'Kuskure wajen yin umarnin',
    'checkout.street': 'Adireshin titi',
    'checkout.city': 'Birni',
    'checkout.state': 'Jiha',
    'checkout.zipCode': 'Lambar gida',
    'checkout.country': 'Ƙasa',
    'checkout.phone': 'Lambar waya',

    // Continue with basic placeholders for all remaining sections...
    'about.title': 'Game da Care Bridge',
    'about.hero.title': 'Game da Care Bridge',
    'about.hero.subtitle': 'Cike gibin samun kula da lafiya',
    'about.hero.description': 'Mun jajirce wajen tabbatar da cewa kayan kula da lafiya sun kai ga kowa da yake bukata.',
    'about.mission.title': 'Manufarmu',
    'about.mission.description': 'Don cike gibin samun kula da lafiya.',
    'about.vision.title': 'Hangen nesanmu',
    'about.vision.description': 'Duniya inda samun kula da lafiya ba ya iyakance ta wurin matsalolin kuɗi.',
    'about.values.title': 'Ƙimar da muke riki',
    'about.values.description': 'Waɗannan ƙimomi sune ke jagorantar duk abin da muke yi',
    'about.values.compassion.title': 'Tausayi',
    'about.values.compassion.description': 'Muna yin kowane hanyar sadarwa da tausayi da fahimta',
    'about.values.community.title': 'Al\'umma',
    'about.values.community.description': 'Mun yi imani da ikon al\'umma wajen ƙirƙirar sauyi mai dorewa',
    'about.values.accessibility.title': 'Samun damar',
    'about.values.accessibility.description': 'Kowa ya cancanci samun kula da lafiya ko da yaya yanayin sa',
    'about.values.impact.title': 'Tasiri',
    'about.values.impact.description': 'Muna auna nasara ta rayukan da muke inganta.',
    'about.values.compassion': 'Tausayi',
    'about.values.integrity': 'Gaskiya',
    'about.values.innovation': 'Ƙirƙira',
    'about.values.collaboration': 'Haɗin kai',
    'about.story.title': 'Tarihinmu',
    'about.story.beginning.title': 'Yadda muka fara',
    'about.story.beginning.description': 'An kafa Care Bridge da ra\'ayi mai sauƙi amma mai ƙarfi.',
    'about.story.growth.title': 'Girman tasiri',
    'about.story.growth.description': 'Daga farkonmu, mun girma don hidimar dubban mutane.',
    'about.story.future.title': 'Duban gaba',
    'about.story.future.description': 'Muna ci gaba da faɗaɗa ikonmu.',
    'about.achievements.title': 'Tasirinmu',
    'about.achievements.description': 'Duba bambancin da muka yi tare',
    'about.achievements.peopleServed': 'Mutane da aka yi wa hidima',
    'about.achievements.aidsDistributed': 'Kayan taimako da aka rarraba',
    'about.achievements.countriesReached': 'Ƙasashen da aka kai',
    'about.achievements.satisfactionRate': 'Matakın gamsuwa',
    'about.team.title': 'Ku gamu da ƙungiyarmu',
    'about.team.description': 'Ƙwararrun ma\'aikata da ke aiki don samun kula da lafiya',
    'about.cta.title': 'Shiga da manufarmu',
    'about.cta.description': 'Tare, za mu iya ƙirƙirar duniya inda samun kula da lafiya ba gata ba ne amma hakki.',
    'about.cta.becomePartner': 'Kasance abokin hulda',
    'about.cta.contactUs': 'Tuntube mu',

    'contact.title': 'Tuntube mu',
    'contact.subtitle': 'Tuntube mu',
    'contact.description': 'Muna so mu ji daga gare ku.',
    'contact.form.name': 'Cikakken suna',
    'contact.form.email': 'Adireshin imel',
    'contact.form.subject': 'Taken',
    'contact.form.message': 'Saƙo',
    'contact.form.send': 'Aika saƙo',
    'contact.info.address': 'Adireshi',
    'contact.info.phone': 'Waya',
    'contact.info.email': 'Imel',
    'contact.info.hours': 'Lokutan aiki',

    'faq.title': 'Tambayoyi da ake yawan yi',
    'faq.subtitle': 'Nemo amsoshi ga tambayoyi na yau da kullun',
    'faq.searchPlaceholder': 'Nemi tambayoyi...',
    'faq.general': 'Gabaɗaya',
    'faq.donating': 'Ba da gudummawa',
    'faq.receiving': 'Karɓar taimako',
    'faq.marketplace': 'Kasuwa',
    'faq.technical': 'Taimakon fasaha',

    'donate.title': 'Ba da kayan taimako',
    'donate.subtitle': 'Yi bambanci yau',
    'donate.description': 'Ba da gudummawar ku yau.',
    'donate.donateNow': 'Ba da gudummawa yanzu',
    'donate.process.title': 'Yadda ake ba da gudummawa',
    'donate.process.step1': 'Zaɓi kayan da za ku bayar',
    'donate.process.step2': 'Cika bayanan da ake bukata',
    'donate.process.step3': 'Mu aika mu karɓo',
    'donate.process.step4': 'Mu ba wa waɗanda suke bukata',
    'donate.accepted.title': 'Kayan da muke karɓa',
    'donate.cta.title': 'Shirya don ba da gudummawa?',
    'donate.cta.description': 'Gudummawar ku za ta haifar da babban sauyi.',

    'partners.title': 'Abokan huldarmu',
    'partners.subtitle': 'Yin aiki tare don ingantaccen makoma',
    'partners.description': 'Mu gamu da ƙungiyoyin da muke aiki tare.',
    'partners.types.title': 'Nau\'in abokan hulda',
    'partners.types.ngos': 'Ƙungiyoyin sa kai',
    'partners.types.healthcare': 'Masu ba da kula da lafiya',
    'partners.types.repair': 'Masu gyara',
    'partners.types.logistics': 'Jigilar kaya',
    'partners.benefits.title': 'Fa\'idodin kasancewa abokin hulda',
    'partners.join.title': 'Shiga da mu',
    'partners.join.cta': 'Shiga da mu a matsayin abokin hulda',

    'impact.title': 'Tasirinmu',
    'impact.subtitle': 'Bambancin da muke yi',
    'impact.description': 'Duba yadda gudummawar ku ke haifar da sauyi mai kyau.',
    'impact.stories.title': 'Labarun nasara',
    'impact.metrics.title': 'Tasirinmu ta lambobi',
    'impact.countries': 'Ƙasashe',
    'impact.beneficiaries': 'Masu amfana',
    'impact.partnerships': 'Abokan hulda',
    'impact.donations': 'Gudummawa',

    'error.notFound': 'Ba a samu ba',
    'error.serverError': 'Kuskuren sabar',
    'error.networkError': 'Kuskuren hanyar sadarwa',
    'error.unauthorized': 'Ba a ba da izini ba',
    'error.goHome': 'Koma gida',
    'error.tryAgain': 'Sake gwadawa'
  },

  // Basic Igbo translations
  ig: {
    'nav.home': 'Ụlọ',
    'nav.about': 'Banyere anyị',
    'nav.marketplace': 'Ahịa',
    'nav.donate': 'Nye onyinye',
    'nav.partners': 'Ndị mmekọ',
    'nav.faq': 'Ajụjụ',
    'nav.contact': 'Kpọtụrụ anyị',
    'nav.impact': 'Mmetụta',
    'nav.dashboard': 'Dashbọọdụ',
    'nav.signIn': 'Banye',
    'nav.signOut': 'Pụọ',
    'nav.cart': 'Kaat',
    
    'common.loading': 'Na-ebu...',
    'common.error': 'Njehie',
    'common.success': 'Ihe ịga nke ọma',
    'common.save': 'Chekwaa',
    'common.cancel': 'Kagbuo',
    'common.delete': 'Hichapụ',
    'common.edit': 'Dezie',
    'common.add': 'Tinye',
    'common.search': 'Chọọ',
    'common.filter': 'Kpọchie',
    'common.sort': 'Hazie',
    'common.price': 'Ọnụ ahịa',
    'common.quantity': 'Ọnụọgụgụ',
    'common.total': 'Ngụkọta',
    'common.back': 'Laghachi azụ',
    'common.next': 'Osote',
    'common.previous': 'Nke gara aga',
    'common.submit': 'Nyefee',
    'common.close': 'Mechie',
    'common.view': 'Lee',
    'common.learnMore': 'Mụtakwuo',
    'common.getStarted': 'Malite',
    'common.readMore': 'Gụkwuo',
    'common.seeMore': 'Hụkwuo',
    'common.showLess': 'Gosi nke ole',

    // Continue with basic Igbo translations for all remaining keys...
    'home.hero.title': 'Na-ejikọta ọgbụgba na',
    'home.hero.subtitle': 'Ịnweta ngwa enyemaka',
    'home.hero.description': 'Anyị na-ejikọta ndị na-enye onyinye na ndị chọrọ enyemaka.',
    'home.hero.donateNow': 'Nye onyinye ugbu a',
    'home.hero.learnMore': 'Mụtakwuo',
    'home.hero.shopMarketplace': 'Zụrụ n\'ahịa',
    'home.hero.getInTouch': 'Kpọtụrụ anyị',
    'home.stats.peopleHelped': 'Ndị enyemere aka',
    'home.stats.aidsDonated': 'Ngwa enyemaka enyere',
    'home.stats.activePartners': 'Ndị mmekọ na-arụ ọrụ',
    'home.mission.title': 'Ebumnuche anyị dị mfe',
    'home.mission.description': 'Anyị kwenyere na mmegharị ekwesighị ịbụ ihe mgbochi.',
    'home.mission.seeImpact': 'Lee mmetụta anyị',
    'home.community.title': 'Na-ewu obodo siri ike',
    'home.community.description': 'Onyinye ọ bụla na-ebute mgbanwe dị mma.',
    'home.community.impact': 'Netwọọkụ nke ndị mmekọ anyị na-ahụ na ngwa enyemaka.',
    'home.community.meetPartners': 'Zute ndị mmekọ anyị',

    'marketplace.title': 'Ahịa Care Bridge',
    'marketplace.subtitle': 'Ngwa ahụike dị mma',
    'marketplace.description': 'Na-ejikọta gị na ngwa ahụike dị ọnụ ala',

    // Continue with all other sections with basic Igbo translations...
    'marketplace.searchPlaceholder': 'Chọọ ngwaahịa...',
    'marketplace.filterButton': 'Kpọchie',
    'marketplace.categories': 'Ụdị',
    'marketplace.sortBy': 'Hazie site na',
    'marketplace.sortBy.featured': 'Nke a gosipụtara',
    'marketplace.sortBy.priceLow': 'Ọnụ ahịa: Site na ala ruo elu',
    'marketplace.sortBy.priceHigh': 'Ọnụ ahịa: Site na elu ruo ala',
    'marketplace.sortBy.newest': 'Nke ọhụrụ',
    'marketplace.addToCart': 'Tinye na kaat',
    'marketplace.outOfStock': 'Agwụla',
    'marketplace.inStock': 'Dị',
    'marketplace.noProducts': 'Enweghị ngwaahịa',
    'marketplace.partnerWithUs': 'Sonyere anyị',
    'marketplace.partnerDescription': 'Sonye na netwọọkụ anyị.',
    'marketplace.becomePartner': 'Bụrụ onye mmekọ',
    'marketplace.noPrice': 'Kpọtụrụ maka ọnụ ahịa',
    'marketplace.categories.wheelchairs': 'Oche ígwè',
    'marketplace.categories.walkingAids': 'Ngwa inyeaka ije',
    'marketplace.categories.prosthetics': 'Akụkụ arụrụ arụ',
    'marketplace.categories.orthotics': 'Ngwa ịhazi ahụ',
    'marketplace.categories.hearingAids': 'Ngwa inyeaka ịnụ ihe',
    'marketplace.categories.dailyLiving': 'Ibi ndụ kwa ụbọchị',

    // Continue with placeholders for all remaining sections...
    'auth.signIn': 'Banye',
    'auth.signUp': 'Debanye aha',
    'auth.email': 'Email',
    'auth.password': 'Paswọọdụ',
    'auth.firstName': 'Aha mbụ',
    'auth.lastName': 'Aha ikpeazụ',
    'auth.createAccount': 'Mepụta akaụntụ',
    'auth.alreadyHaveAccount': 'Ị nwere akaụntụ?',
    'auth.dontHaveAccount': 'Ị nweghị akaụntụ?',
    'auth.forgotPassword': 'Chefuru paswọọdụ?',
    'auth.resetPassword': 'Tọgharia paswọọdụ',
    'auth.welcomeBack': 'Nnọọ!',
    'auth.joinCommunity': 'Sonye na obodo anyị',
    'auth.signInWith': 'Banye site na',

    'cart.title': 'Kaat ịzụ ahịa',
    'cart.empty': 'Kaat gị tọgbọrọ chakoo',
    'cart.emptyDescription': 'Tinye ihe ụfọdụ ka ị malite',
    'cart.continueShopping': 'Gaa n\'ihu na-azụ ahịa',
    'cart.removeItem': 'Wepụ ihe',
    'cart.updateQuantity': 'Melite ọnụọgụgụ',
    'cart.checkout': 'Kwụọ ụgwọ',
    'cart.subtotal': 'Ngụkọta nta',
    'cart.shipping': 'Mbupu',
    'cart.tax': 'Ụtụ isi',
    'cart.total': 'Ngụkọta',
    'cart.itemsInCart': 'Ihe {{count}} na kaat',

    // Continue with all other sections...
    'dashboard.title': 'Dashbọọdụ',
    'dashboard.welcome': 'Nnọọ, {{name}}!',
    'dashboard.orders.title': 'Iwu m',
    'dashboard.orders.recent': 'Iwu nso nso a',
    'dashboard.orders.all': 'Iwu niile',
    'dashboard.orders.status.pending': 'Na-echere',
    'dashboard.orders.status.confirmed': 'Ekwenyela',
    'dashboard.orders.status.shipped': 'Ezigala',
    'dashboard.orders.status.delivered': 'Enyela',
    'dashboard.orders.status.cancelled': 'Kagbuola',
    'dashboard.profile.title': 'Profaịlụ',
    'dashboard.profile.edit': 'Dezie profaịlụ',
    'dashboard.favorites.title': 'Ihe m hụrụ n\'anya',
    'dashboard.noOrders': 'Enwebeghị iwu',
    'dashboard.noFavorites': 'Enwebeghị ihe ị hụrụ n\'anya',

    'checkout.title': 'Kwụọ ụgwọ',
    'checkout.orderSummary': 'Nchịkọta iwu',
    'checkout.shippingAddress': 'Adreesị mbupu',
    'checkout.billingAddress': 'Adreesị ịkwụ ụgwọ',
    'checkout.paymentMethod': 'Ụzọ ịkwụ ụgwọ',
    'checkout.placeOrder': 'Nye iwu',
    'checkout.processing': 'Na-eme...',
    'checkout.success': 'E nyela iwu nke ọma!',
    'checkout.error': 'Njehie n\'inye iwu',
    'checkout.street': 'Adreesị okporo ụzọ',
    'checkout.city': 'Obodo',
    'checkout.state': 'Steeti',
    'checkout.zipCode': 'Koodu ZIP',
    'checkout.country': 'Mba',
    'checkout.phone': 'Nọmba ekwentị',

    // Basic translations for all remaining sections...
    'about.title': 'Banyere Care Bridge',
    'about.hero.title': 'Banyere Care Bridge',
    'about.hero.subtitle': 'Na-ejikọta ọgbụgba ịnweta nlekọta ahụike',
    'about.hero.description': 'Anyị raara onwe anyị nye ịhụ na ngwa nlekọta ahụike dị mkpa.',
    'about.mission.title': 'Ebumnuche anyị',
    'about.mission.description': 'Iji jikọta ọgbụgba dị na ịnweta nlekọta ahụike.',
    'about.vision.title': 'Ọhụụ anyị',
    'about.vision.description': 'Ụwa ebe ịnweta nlekọta ahụike anaghị ejedebe site na ihe mgbochi ego.',
    'about.values.title': 'Ụkpụrụ ndị bụ isi anyị',
    'about.values.description': 'Ụkpụrụ ndị a na-eduzi ihe niile anyị na-eme',
    'about.values.compassion.title': 'Ọmịiko',
    'about.values.compassion.description': 'Anyị na-eji ọmịiko na nghọta eme ihe ọ bụla',
    'about.values.community.title': 'Obodo',
    'about.values.community.description': 'Anyị kwenyere na ike obodo inwe mgbanwe.',
    'about.values.accessibility.title': 'Ịnweta',
    'about.values.accessibility.description': 'Onye ọ bụla kwesịrị inweta nlekọta ahụike.',
    'about.values.impact.title': 'Mmetụta',
    'about.values.impact.description': 'Anyị na-atụ ihe ịga nke ọma site na ndụ anyị na-emezi.',
    'about.values.compassion': 'Ọmịiko',
    'about.values.integrity': 'Iguzosi ike n\'ezi omume',
    'about.values.innovation': 'Ihe ọhụrụ',
    'about.values.collaboration': 'Nkwekọrịta',
    'about.story.title': 'Akụkọ anyị',
    'about.story.beginning.title': 'Otú anyị si malite',
    'about.story.beginning.description': 'E hiwere Care Bridge na echiche dị mfe mana dị ike.',
    'about.story.growth.title': 'Na-eto eto mmetụta',
    'about.story.growth.description': 'Site na mmalite anyị dị umeala.',
    'about.story.future.title': 'Na-ele anya n\'ihu',
    'about.story.future.description': 'Anyị na-aga n\'ihu na-agbasawanye ọrụ anyị.',
    'about.achievements.title': 'Mmetụta anyị',
    'about.achievements.description': 'Lee ọdịiche anyị na-eme ọnụ',
    'about.achievements.peopleServed': 'Ndị e jere ozi',
    'about.achievements.aidsDistributed': 'Ngwa nlekọta ahụike ekesara',
    'about.achievements.countriesReached': 'Mba anyị ruru',
    'about.achievements.satisfactionRate': 'Ọnụego afọ ojuju',
    'about.team.title': 'Zute ndị otu anyị',
    'about.team.description': 'Ndị ọkachamara raara onwe ha nye ime ka nlekọta ahụike dị',
    'about.cta.title': 'Sonye na ebumnuche anyị',
    'about.cta.description': 'Ọnụ, anyị nwere ike mepụta ụwa.',
    'about.cta.becomePartner': 'Bụrụ onye mmekọ',
    'about.cta.contactUs': 'Kpọtụrụ anyị',

    'contact.title': 'Kpọtụrụ anyị',
    'contact.subtitle': 'Kpọtụrụ anyị',
    'contact.description': 'Anyị ga-achọ ịnụ site n\'aka gị.',
    'contact.form.name': 'Aha zuru oke',
    'contact.form.email': 'Adreesị email',
    'contact.form.subject': 'Isiokwu',
    'contact.form.message': 'Ozi',
    'contact.form.send': 'Ziga ozi',
    'contact.info.address': 'Adreesị',
    'contact.info.phone': 'Ekwentị',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Oge ọrụ',

    'faq.title': 'Ajụjụ a na-ajụkarị',
    'faq.subtitle': 'Chọta azịza nye ajụjụ ndị a na-ajụkarị',
    'faq.searchPlaceholder': 'Chọọ FAQ...',
    'faq.general': 'Izugbe',
    'faq.donating': 'Inye onyinye',
    'faq.receiving': 'Ịnata enyemaka',
    'faq.marketplace': 'Ahịa',
    'faq.technical': 'Nkwado teknuzu',

    'donate.title': 'Nye ngwa enyemaka mmegharị',
    'donate.subtitle': 'Mee ọdịiche taa',
    'donate.description': 'Nye onyinye gị taa.',
    'donate.donateNow': 'Nye onyinye ugbu a',
    'donate.process.title': 'Otú e si enye onyinye',
    'donate.process.step1': 'Họrọ ihe ị ga-enye',
    'donate.process.step2': 'Dejupụta ozi achọrọ',
    'donate.process.step3': 'Anyị ga-abịa nara ya',
    'donate.process.step4': 'Anyị ga-enye ndị chọrọ ya',
    'donate.accepted.title': 'Ihe anyị na-anabata',
    'donate.cta.title': 'Njikere inye onyinye?',
    'donate.cta.description': 'Onyinye gị ga-eme nnukwu mgbanwe.',

    'partners.title': 'Ndị mmekọ anyị',
    'partners.subtitle': 'Na-arụkọ ọrụ maka ọdịnihu ka mma',
    'partners.description': 'Zute otu ndị anyị na-arụkọ ọrụ.',
    'partners.types.title': 'Ụdị ndị mmekọ',
    'partners.types.ngos': 'Otu ndị na-enweghị ego',
    'partners.types.healthcare': 'Ndị na-enye nlekọta ahụike',
    'partners.types.repair': 'Ndị na-arụzi',
    'partners.types.logistics': 'Mbupu',
    'partners.benefits.title': 'Uru nke ịbụ onye mmekọ',
    'partners.join.title': 'Sonye na anyị',
    'partners.join.cta': 'Sonye na anyị dị ka onye mmekọ',

    'impact.title': 'Mmetụta anyị',
    'impact.subtitle': 'Ọdịiche anyị na-eme',
    'impact.description': 'Lee otú onyinye gị si na-ebute mgbanwe dị mma.',
    'impact.stories.title': 'Akụkọ ihe ịga nke ọma',
    'impact.metrics.title': 'Mmetụta anyị na ọnụọgụgụ',
    'impact.countries': 'Mba',
    'impact.beneficiaries': 'Ndị na-erite uru',
    'impact.partnerships': 'Mmekọrịta',
    'impact.donations': 'Onyinye',

    'error.notFound': 'Ahụghị',
    'error.serverError': 'Njehie server',
    'error.networkError': 'Njehie netwọọkụ',
    'error.unauthorized': 'Enyeghị ikike',
    'error.goHome': 'Gaa ụlọ',
    'error.tryAgain': 'Nwaa ọzọ'
  },

  // Basic Yoruba translations
  yo: {
    'nav.home': 'Ilé',
    'nav.about': 'Nípa wa',
    'nav.marketplace': 'Ọjà',
    'nav.donate': 'Fi sílẹ̀',
    'nav.partners': 'Awon alabaṣepọ',
    'nav.faq': 'Awon ibeere',
    'nav.contact': 'Pè wa',
    'nav.impact': 'Ipa',
    'nav.dashboard': 'Ojú-ìdánilékọọ́',
    'nav.signIn': 'Wọlé',
    'nav.signOut': 'Jáde',
    'nav.cart': 'Apòpọ̀',
    
    'common.loading': 'Ó ń gbé...',
    'common.error': 'Aṣìṣe',
    'common.success': 'Àṣeyọrí',
    'common.save': 'Fi pamọ́',
    'common.cancel': 'Fagilee',
    'common.delete': 'Parẹ́',
    'common.edit': 'Ṣàtúnkọ',
    'common.add': 'Fikún',
    'common.search': 'Wá',
    'common.filter': 'Sé àṣẹ',
    'common.sort': 'Tò',
    'common.price': 'Owo',
    'common.quantity': 'Iye',
    'common.total': 'Àpapọ̀',
    'common.back': 'Padà sẹ́yìn',
    'common.next': 'Ẹ̀kàn',
    'common.previous': 'Tẹ́lẹ̀',
    'common.submit': 'Rán lọ',
    'common.close': 'Ti',
    'common.view': 'Wò',
    'common.learnMore': 'Kọ́ sí i',
    'common.getStarted': 'Bẹ̀rẹ̀',
    'common.readMore': 'Kà sí i',
    'common.seeMore': 'Wò sí i',
    'common.showLess': 'Fi díẹ̀ hàn',

    // Continue with basic Yoruba translations for all remaining keys...
    'home.hero.title': 'Díta aàfin nínú',
    'home.hero.subtitle': 'Rírí awon ohun èlò ìrànlọ́wọ́',
    'home.hero.description': 'A ń so awon olùfúnni pọ̀ mọ́ awon tí ó nílò ìrànlọ́wọ́.',
    'home.hero.donateNow': 'Fi sílẹ̀ nísinsin yìí',
    'home.hero.learnMore': 'Kọ́ sí i',
    'home.hero.shopMarketplace': 'Ra ní ọjà',
    'home.hero.getInTouch': 'Pè wa',
    'home.stats.peopleHelped': 'Ènìyàn tí a ti ràn lọ́wọ́',
    'home.stats.aidsDonated': 'Awon ohun èlò ìrànlọ́wọ́ tí a ti fún',
    'home.stats.activePartners': 'Awon alabaṣepọ tí ó ń ṣiṣẹ́',
    'home.mission.title': 'Àfojúsùn wa rọrùn',
    'home.mission.description': 'A gbà gbọ́ pé ìrìn-àjò kò yẹ kó jẹ́ ìdíwọ́.',
    'home.mission.seeImpact': 'Wò ipa wa',
    'home.community.title': 'Kíkọ́ awon àgbègbè tí ó lágbára',
    'home.community.description': 'Gbogbo ẹ̀bùn ló máa ń fa ìyípadà rere.',
    'home.community.impact': 'Nẹ́tíwọ̀ọ̀kì awon alabaṣepọ wa.',
    'home.community.meetPartners': 'Pàdé awon alabaṣepọ wa',

    'marketplace.title': 'Ọjà Care Bridge',
    'marketplace.subtitle': 'Awon ohun èlò ìlera tí ó dára',
    'marketplace.description': 'Ń so ọ́ pọ̀ mọ́ awon ohun èlò ìlera tí ó pọ̀n',

    // Continue with all other sections with basic Yoruba translations...
    'marketplace.searchPlaceholder': 'Wá awon ọjà...',
    'marketplace.filterButton': 'Awon àṣẹ',
    'marketplace.categories': 'Awon orísí',
    'marketplace.sortBy': 'Tò nípa',
    'marketplace.sortBy.featured': 'Tí a fihàn',
    'marketplace.sortBy.priceLow': 'Owo: Látí kékeré sí ńlá',
    'marketplace.sortBy.priceHigh': 'Owo: Látí ńlá sí kékeré',
    'marketplace.sortBy.newest': 'Àwọn tuntun',
    'marketplace.addToCart': 'Fi sínú apòpọ̀',
    'marketplace.outOfStock': 'Kò sí mọ́',
    'marketplace.inStock': 'Ó wà',
    'marketplace.noProducts': 'Kò sí awon ọjà',
    'marketplace.partnerWithUs': 'Bá wa ṣe àjọ',
    'marketplace.partnerDescription': 'Di ọ̀kan nínú nẹ́tíwọ̀ọ̀kì wa.',
    'marketplace.becomePartner': 'Di alabaṣepọ',
    'marketplace.noPrice': 'Pè fún owo',
    'marketplace.categories.wheelchairs': 'Àga ológò',
    'marketplace.categories.walkingAids': 'Awon ohun èlò ìrànlọ́wọ́ ìrìn',
    'marketplace.categories.prosthetics': 'Awon ẹ̀yà ara atọ́ka',
    'marketplace.categories.orthotics': 'Awon ohun èlò ìṣatúnṣe ara',
    'marketplace.categories.hearingAids': 'Awon ohun èlò ìrànlọ́wọ́ etí',
    'marketplace.categories.dailyLiving': 'Ìgbé ayé òòjọ́',

    'auth.signIn': 'Wọlé',
    'auth.signUp': 'Forúkọsilẹ̀',
    'auth.email': 'Email',
    'auth.password': 'Ọ̀rọ̀ aṣínà',
    'auth.firstName': 'Orúkọ àkọ́kọ́',
    'auth.lastName': 'Orúkọ ìdílé',
    'auth.createAccount': 'Ṣẹ̀dá àkáǹtì',
    'auth.alreadyHaveAccount': 'Ní àkáǹtì?',
    'auth.dontHaveAccount': 'Kò ní àkáǹtì?',
    'auth.forgotPassword': 'Gbàgbé ọ̀rọ̀ aṣínà?',
    'auth.resetPassword': 'Tún ọ̀rọ̀ aṣínà ṣe',
    'auth.welcomeBack': 'Kú àbọ̀!',
    'auth.joinCommunity': 'Darapọ̀ mọ́ àgbègbè wa',
    'auth.signInWith': 'Wọlé pẹ̀lú',

    'cart.title': 'Apòpọ̀ rírà',
    'cart.empty': 'Apòpọ̀ rẹ ṣófo',
    'cart.emptyDescription': 'Fi nǹkan díẹ̀ kún láti bẹ̀rẹ̀',
    'cart.continueShopping': 'Tẹ̀síwájú rírà',
    'cart.removeItem': 'Yọ nǹkan kúrò',
    'cart.updateQuantity': 'Mú iye tuntun',
    'cart.checkout': 'San owó',
    'cart.subtotal': 'Àpapọ̀ kékeré',
    'cart.shipping': 'Ìfí ránṣẹ́',
    'cart.tax': 'Owó òde',
    'cart.total': 'Àpapọ̀',
    'cart.itemsInCart': 'Nǹkan {{count}} ní apòpọ̀',

    // Continue with all other sections...
    'dashboard.title': 'Ojú-ìdánilékọọ́',
    'dashboard.welcome': 'Kú àbọ̀, {{name}}!',
    'dashboard.orders.title': 'Awon àṣẹ mi',
    'dashboard.orders.recent': 'Awon àṣẹ àìpẹ́',
    'dashboard.orders.all': 'Gbogbo awon àṣẹ',
    'dashboard.orders.status.pending': 'Tí ó ń dúró',
    'dashboard.orders.status.confirmed': 'Tí a ti jẹ́rìí sí',
    'dashboard.orders.status.shipped': 'Tí a ti firanṣẹ́',
    'dashboard.orders.status.delivered': 'Tí a ti gbé dé',
    'dashboard.orders.status.cancelled': 'Tí a ti fagilee',
    'dashboard.profile.title': 'Àkọsílẹ̀',
    'dashboard.profile.edit': 'Ṣe àtúnṣe àkọsílẹ̀',
    'dashboard.favorites.title': 'Awon tí mo fẹ́ràn',
    'dashboard.noOrders': 'Kò sí àṣẹ kan',
    'dashboard.noFavorites': 'Kò sí ohun tí o fẹ́ràn',

    'checkout.title': 'San owó',
    'checkout.orderSummary': 'Àkójọpọ̀ àṣẹ',
    'checkout.shippingAddress': 'Àdírẹ́sì ìfí ránṣẹ́',
    'checkout.billingAddress': 'Àdírẹ́sì sísanwo',
    'checkout.paymentMethod': 'Ọ̀nà sísanwo',
    'checkout.placeOrder': 'Gbe àṣẹ',
    'checkout.processing': 'Ó ń ṣe...',
    'checkout.success': 'Àṣẹ ti yọrí sí rere!',
    'checkout.error': 'Àṣìṣe ní gbígbe àṣẹ',
    'checkout.street': 'Àdírẹ́sì òpópónà',
    'checkout.city': 'Ìlú',
    'checkout.state': 'Ìpínlẹ̀',
    'checkout.zipCode': 'Koodu ZIP',
    'checkout.country': 'Orílẹ̀-èdè',
    'checkout.phone': 'Nọ́mbà fóònù',

    // Continue with basic translations for all remaining sections...
    'about.title': 'Nípa Care Bridge',
    'about.hero.title': 'Nípa Care Bridge',
    'about.hero.subtitle': 'Díta aàfin ní wíwá ìtọ́jú ìlera',
    'about.hero.description': 'A ti pinnu láti rí i dájú pé awon ohun èlò ìtọ́jú ìlera.',
    'about.mission.title': 'Àfojúsùn wa',
    'about.mission.description': 'Láti dín aàfin tí ó wà ní wíwá ìtọ́jú ìlera kù.',
    'about.vision.title': 'Ìran wa',
    'about.vision.description': 'Ayé kan tí wíwá ìtọ́jú ìlera kò ní ààlá.',
    'about.values.title': 'Awon iye wa tí ó ṣe pàtàkì',
    'about.values.description': 'Awon iye wọ̀nyí ló ń tọ́ka gbogbo ohun tí a ń ṣe',
    'about.values.compassion.title': 'Àánú',
    'about.values.compassion.description': 'A ń fi àánú àti òye ṣe gbogbo ìbáṣepọ̀',
    'about.values.community.title': 'Àgbègbè',
    'about.values.community.description': 'A gbà gbọ́ ní agbára àgbègbè.',
    'about.values.accessibility.title': 'Wíwá',
    'about.values.accessibility.description': 'Gbogbo ènìyàn ni ó tọ́ síi láti rí ìtọ́jú ìlera.',
    'about.values.impact.title': 'Ipa',
    'about.values.impact.description': 'A ń wọn àṣeyọrí nípa awon ayé tí a ń mú dára.',
    'about.values.compassion': 'Àánú',
    'about.values.integrity': 'Òdodo',
    'about.values.innovation': 'Ìmúdàgba',
    'about.values.collaboration': 'Ìfọwọ́sowọ́pọ̀',
    'about.story.title': 'Ìtàn wa',
    'about.story.beginning.title': 'Bí a ti bẹ̀rẹ̀',
    'about.story.beginning.description': 'A fi ìdí Care Bridge lélẹ̀.',
    'about.story.growth.title': 'Dídàgbà ipa',
    'about.story.growth.description': 'Láti ìbẹ̀rẹ̀ onírẹ̀lẹ̀ wa.',
    'about.story.future.title': 'Wíwò síwájú',
    'about.story.future.description': 'A ń tẹ̀síwájú láti fẹ̀ ipa wa.',
    'about.achievements.title': 'Ipa wa',
    'about.achievements.description': 'Wò ìyàtọ̀ tí a ṣe papọ̀',
    'about.achievements.peopleServed': 'Awon ènìyàn tí a ti sìn',
    'about.achievements.aidsDistributed': 'Awon ohun èlò ìlera tí a ti pín',
    'about.achievements.countriesReached': 'Awon orílẹ̀-èdè tí a ti dé',
    'about.achievements.satisfactionRate': 'Ìwọ̀n ìtẹ́lọ́rùn',
    'about.team.title': 'Pàdé ẹgbẹ́ wa',
    'about.team.description': 'Awon ọ̀mọ̀wé tí wọ́n ya ara wọn si.',
    'about.cta.title': 'Darapọ̀ mọ́ àfojúsùn wa',
    'about.cta.description': 'Pọ̀, a lè ṣẹ̀dá ayé kan.',
    'about.cta.becomePartner': 'Di alabaṣepọ',
    'about.cta.contactUs': 'Pè wa',

    'contact.title': 'Pè wa',
    'contact.subtitle': 'Pè wa',
    'contact.description': 'A fẹ́ láti gbọ́ láti ọ̀dọ̀ rẹ.',
    'contact.form.name': 'Orúkọ kíkún',
    'contact.form.email': 'Àdírẹ́sì email',
    'contact.form.subject': 'Kókó ọ̀rọ̀',
    'contact.form.message': 'Ifiranṣẹ́',
    'contact.form.send': 'Fi ifiranṣẹ́ ránṣẹ́',
    'contact.info.address': 'Àdírẹ́sì',
    'contact.info.phone': 'Fóònù',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Àkókò iṣẹ́',

    'faq.title': 'Awon ìbéèrè tí a máa ń béèrè',
    'faq.subtitle': 'Wá àwọn ìdáhùn sí awon ìbéèrè tí ó wọ́pọ̀',
    'faq.searchPlaceholder': 'Wá FAQ...',
    'faq.general': 'Gbogbogbò',
    'faq.donating': 'Fífún',
    'faq.receiving': 'Gbígba ìrànlọ́wọ́',
    'faq.marketplace': 'Ọjà',
    'faq.technical': 'Ìrànlọ́wọ́ ìmọ̀ ẹ̀rọ',

    'donate.title': 'Fi awon ohun èlò ìrànlọ́wọ́ ìrìn sílẹ̀',
    'donate.subtitle': 'Ṣe ìyàtọ̀ lónìí',
    'donate.description': 'Fi ẹ̀bùn rẹ sílẹ̀ lónìí.',
    'donate.donateNow': 'Fi sílẹ̀ nísinsin yìí',
    'donate.process.title': 'Bí a ṣe ń fi nǹkan sílẹ̀',
    'donate.process.step1': 'Yan ohun tí ìwọ yóò fi sílẹ̀',
    'donate.process.step2': 'Kún àwọn àlàyé tí a nílò',
    'donate.process.step3': 'A ó wá gbà á',
    'donate.process.step4': 'A ó fi fún awon tí ó nílò',
    'donate.accepted.title': 'Awon ohun tí a ń gba',
    'donate.cta.title': 'Ṣetan láti fi nǹkan sílẹ̀?',
    'donate.cta.description': 'Ẹ̀bùn rẹ yóò ṣe ìyàtọ̀ ńlá.',

    'partners.title': 'Awon alabaṣepọ wa',
    'partners.subtitle': 'Ń ṣiṣẹ́ papọ̀ fún ọjọ́ iwájú tí ó dára',
    'partners.description': 'Pàdé awon ẹgbẹ́ tí a ń bá ṣiṣẹ́.',
    'partners.types.title': 'Orísí awon alabaṣepọ',
    'partners.types.ngos': 'Awon ẹgbẹ́ tí kò ṣe fún èrè',
    'partners.types.healthcare': 'Awon olùpèsè ìtọ́jú ìlera',
    'partners.types.repair': 'Awon atúnṣe',
    'partners.types.logistics': 'Ìfí ránṣẹ́',
    'partners.benefits.title': 'Anfani ti jíjẹ alabaṣepọ',
    'partners.join.title': 'Darapọ̀ mọ́ wa',
    'partners.join.cta': 'Darapọ̀ mọ́ wa gẹ́gẹ́ bí alabaṣepọ',

    'impact.title': 'Ipa wa',
    'impact.subtitle': 'Ìyàtọ̀ tí a ń ṣe',
    'impact.description': 'Wò bí ẹ̀bùn rẹ ṣe ń fa ìyípadà rere.',
    'impact.stories.title': 'Àwọn ìtàn àṣeyọrí',
    'impact.metrics.title': 'Ipa wa ní nọ́mbà',
    'impact.countries': 'Awon orílẹ̀-èdè',
    'impact.beneficiaries': 'Awon alájẹ́',
    'impact.partnerships': 'Awon àjọṣe',
    'impact.donations': 'Awon ẹ̀bùn',

    'error.notFound': 'Kò rí',
    'error.serverError': 'Àṣìṣe server',
    'error.networkError': 'Àṣìṣe nẹ́tíwọ̀ọ̀kì',
    'error.unauthorized': 'Kò ní àṣẹ',
    'error.goHome': 'Lọ sílé',
    'error.tryAgain': 'Gbìyànjú lẹ́ẹ̀kan sí i'
  }
};
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