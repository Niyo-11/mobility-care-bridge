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
  | 'home.mission.subtitle'
  | 'home.mission.description'
  | 'home.mission.seeImpact'
  | 'home.community.title'
  | 'home.community.description'
  | 'home.community.impact'
  | 'home.community.meetPartners'
  | 'home.community.nextSteps'
  | 'marketplace.partnerWithUs'
  | 'marketplace.partnerDescription'
  
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
  
  // Footer
  | 'footer.mission'
  | 'footer.quickLinks'
  | 'footer.support'
  | 'footer.contact'
  | 'footer.becomePartner'
  | 'footer.helpCenter'
  | 'footer.allRightsReserved'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.cookies'
  
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
    'home.hero.subtitle': 'Accessible Healthcare',
    'home.hero.description': 'Connecting donors with people in need, ensuring mobility aids like wheelchairs, crutches, and prosthetics reach those who need them most.',
    'home.hero.donateNow': 'Donate Now',
    'home.hero.learnMore': 'Learn More',
    'home.hero.shopMarketplace': 'Shop Marketplace',
    'home.hero.getInTouch': 'Get In Touch',
    'home.stats.peopleHelped': 'People Helped',
    'home.stats.aidsDonated': 'Mobility Aids Donated',
    'home.stats.activePartners': 'Active Partners',
    'home.mission.title': 'Our Mission is Simple',
    'home.mission.subtitle': 'We believe that mobility should never be a barrier to living a full life.',
    'home.mission.description': 'Through our network of generous donors, skilled repair partners, and trusted NGOs, we ensure that quality mobility aids reach the people who need them most.',
    'home.mission.seeImpact': 'See Our Impact',
    'home.community.title': 'Building Stronger Communities',
    'home.community.description': 'Every donation creates a ripple effect of positive change. When someone regains their mobility, they can participate more fully in their community, maintain their independence, and continue contributing to society.',
    'home.community.impact': 'Our network of partners ensures that each mobility aid finds its way to someone who truly needs it, creating lasting impact that extends far beyond the initial donation.',
    'home.community.meetPartners': 'Meet Our Partners',
    'home.community.nextSteps': 'What happens next?',
    
    // Marketplace
    'marketplace.title': 'Care Bridge Marketplace',
    'marketplace.subtitle': 'Quality Healthcare Products',
    'marketplace.description': 'Connecting you with affordable, quality healthcare products and mobility aids from trusted partners.',
    'marketplace.searchPlaceholder': 'Search products...',
    'marketplace.filterButton': 'Filter',
    'marketplace.categories': 'Categories',
    'marketplace.sortBy': 'Sort by',
    'marketplace.sortBy.featured': 'Featured',
    'marketplace.sortBy.priceLow': 'Price: Low to High',
    'marketplace.sortBy.priceHigh': 'Price: High to Low',
    'marketplace.sortBy.newest': 'Newest',
    'marketplace.addToCart': 'Add to Cart',
    'marketplace.outOfStock': 'Out of Stock',
    'marketplace.inStock': 'In Stock',
    'marketplace.noProducts': 'No products found matching your criteria.',
    'marketplace.partnerWithUs': 'Join Our Mission',
    'marketplace.partnerDescription': 'Our marketplace supports affordable mobility aids for rural communities. Every purchase helps bridge the accessibility gap in Nigeria and Rwanda.',
    'marketplace.becomePartner': 'Become a Partner',
    'marketplace.noPrice': 'Contact for pricing',
    'marketplace.categories.wheelchairs': 'Wheelchairs',
    'marketplace.categories.walkingAids': 'Walking Aids',
    'marketplace.categories.prosthetics': 'Prosthetics',
    'marketplace.categories.orthotics': 'Orthotics',
    'marketplace.categories.hearingAids': 'Hearing Aids',
    'marketplace.categories.dailyLiving': 'Daily Living Aids',
    
    // Footer
    'footer.mission': 'Connecting people with medical aids and support services across Nigeria and Rwanda.',
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.contact': 'Contact Us',
    'footer.becomePartner': 'Become a Partner',
    'footer.helpCenter': 'Help Center',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
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
    'auth.forgotPassword': 'Forgot your password?',
    'auth.resetPassword': 'Reset Password',
    'auth.welcomeBack': 'Welcome back!',
    'auth.joinCommunity': 'Join our community',
    'auth.signInWith': 'Sign in with',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDescription': 'Add some items to get started',
    'cart.continueShopping': 'Continue Shopping',
    'cart.removeItem': 'Remove item',
    'cart.updateQuantity': 'Update quantity',
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
    'dashboard.favorites.title': 'Favorites',
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
    'about.hero.subtitle': 'Bridging the healthcare accessibility gap',
    'about.hero.description': 'We are dedicated to ensuring that healthcare solutions reach everyone who needs them.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To bridge the healthcare accessibility gap by connecting donors with those in need.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'A world where healthcare accessibility is not limited by financial constraints.',
    'about.values.title': 'Our Values',
    'about.values.description': 'These core values guide everything we do',
    'about.values.compassion.title': 'Compassion',
    'about.values.compassion.description': 'We approach every interaction with empathy and understanding',
    'about.values.community.title': 'Community',
    'about.values.community.description': 'We believe in the power of community to create lasting change',
    'about.values.accessibility.title': 'Accessibility',
    'about.values.accessibility.description': 'Everyone deserves access to healthcare, regardless of their circumstances',
    'about.values.impact.title': 'Impact',
    'about.values.impact.description': 'We measure success by the lives we improve and communities we strengthen',
    'about.values.compassion': 'Compassion',
    'about.values.integrity': 'Integrity',
    'about.values.innovation': 'Innovation',
    'about.values.collaboration': 'Collaboration',
    'about.story.title': 'Our Story',
    'about.story.beginning.title': 'How We Started',
    'about.story.beginning.description': 'Care Bridge was founded with a simple yet powerful vision.',
    'about.story.growth.title': 'Growing Our Impact',
    'about.story.growth.description': 'From our humble beginnings, we have grown to serve thousands.',
    'about.story.future.title': 'Looking Forward',
    'about.story.future.description': 'We continue to expand our reach and improve our services.',
    'about.achievements.title': 'Our Impact',
    'about.achievements.description': 'See the difference we have made together',
    'about.achievements.peopleServed': 'People Served',
    'about.achievements.aidsDistributed': 'Aids Distributed',
    'about.achievements.countriesReached': 'Countries Reached',
    'about.achievements.satisfactionRate': 'Satisfaction Rate',
    'about.team.title': 'Meet Our Team',
    'about.team.description': 'Dedicated professionals working towards accessible healthcare',
    'about.cta.title': 'Join Our Mission',
    'about.cta.description': 'Together, we can create a world where healthcare accessibility is not a privilege but a right.',
    'about.cta.becomePartner': 'Become a Partner',
    'about.cta.contactUs': 'Contact Us',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.description': 'We would love to hear from you. Send us a message and we will respond as soon as possible.',
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
    'faq.searchPlaceholder': 'Search questions...',
    'faq.general': 'General',
    'faq.donating': 'Donating',
    'faq.receiving': 'Receiving Aid',
    'faq.marketplace': 'Marketplace',
    'faq.technical': 'Technical Support',
    
    // Donate
    'donate.title': 'Donate Mobility Aids',
    'donate.subtitle': 'Make a Difference Today',
    'donate.description': 'Your donation today can help someone regain their independence and mobility.',
    'donate.donateNow': 'Donate Now',
    'donate.process.title': 'How Donations Work',
    'donate.process.step1': 'Choose what to donate',
    'donate.process.step2': 'Fill out donation details',
    'donate.process.step3': 'We arrange pickup',
    'donate.process.step4': 'We deliver to those in need',
    'donate.accepted.title': 'What We Accept',
    'donate.cta.title': 'Ready to Make a Difference?',
    'donate.cta.description': 'Your donation can transform someone\'s life.',
    
    // Partners
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Working together for a better future',
    'partners.description': 'Meet the organizations helping us achieve our mission.',
    'partners.types.title': 'Types of Partners',
    'partners.types.ngos': 'NGOs',
    'partners.types.healthcare': 'Healthcare Providers',
    'partners.types.repair': 'Repair Services',
    'partners.types.logistics': 'Logistics',
    'partners.benefits.title': 'Partnership Benefits',
    'partners.join.title': 'Join Us',
    'partners.join.cta': 'Become a partner today',
    
    // Impact
    'impact.title': 'Our Impact',
    'impact.subtitle': 'The difference we make',
    'impact.description': 'See how your contributions are creating positive change.',
    'impact.stories.title': 'Success Stories',
    'impact.metrics.title': 'Impact by Numbers',
    'impact.countries': 'Countries',
    'impact.beneficiaries': 'Beneficiaries',
    'impact.partnerships': 'Partnerships',
    'impact.donations': 'Donations',
    
    // Error messages
    'error.notFound': 'Not Found',
    'error.serverError': 'Server Error',
    'error.networkError': 'Network Error',
    'error.unauthorized': 'Unauthorized',
    'error.goHome': 'Go Home',
    'error.tryAgain': 'Try Again'
  },
  
  rw: {
    // Navigation
    'nav.home': 'Ahabanza',
    'nav.about': 'Ibijanye natwe',
    'nav.marketplace': 'Isoko',
    'nav.donate': 'Gutanga impano',
    'nav.partners': 'Abo dufatanya',
    'nav.faq': 'Ibibazo bikunze kubazwa',
    'nav.contact': 'Duhamagare',
    'nav.impact': 'Ingaruka',
    'nav.dashboard': 'Ibikoresha',
    'nav.signIn': 'Injira',
    'nav.signOut': 'Sohoka',
    'nav.cart': 'Agakarito',
    
    // Common
    'common.loading': 'Biratangura...',
    'common.error': 'Ikosa',
    'common.success': 'Byagenze neza',
    'common.save': 'Bika',
    'common.cancel': 'Kuraguza',
    'common.delete': 'Gusiba',
    'common.edit': 'Guhindura',
    'common.add': 'Kongeramo',
    'common.search': 'Gushakisha',
    'common.filter': 'Gushungura',
    'common.sort': 'Gutondeka',
    'common.price': 'Igiciro',
    'common.quantity': 'Umubare',
    'common.total': 'Byose hamwe',
    'common.back': 'Subira inyuma',
    'common.next': 'Komeza',
    'common.previous': 'Ibiri imbere',
    'common.submit': 'Kohereza',
    'common.close': 'Funga',
    'common.view': 'Reba',
    'common.learnMore': 'Menya byinshi',
    'common.getStarted': 'Tangira',
    'common.readMore': 'Soma byinshi',
    'common.seeMore': 'Reba byinshi',
    'common.showLess': 'Erekana bike',
    
    // Home Page
    'home.hero.title': 'Guhuza icyuho mu',
    'home.hero.subtitle': 'Kwivuza Bifatika',
    'home.hero.description': 'Duhuza abatanga impano n\'abantu bakeneye ubufasha, duhagurukira ko ibikoresho byo kugenda nk\'amapine, inkongi, n\'ibice by\'umubiri bigera ku bawukeneye.',
    'home.hero.donateNow': 'Tanga impano ubu',
    'home.hero.learnMore': 'Menya byinshi',
    'home.hero.shopMarketplace': 'Gura mu isoko',
    'home.hero.getInTouch': 'Duhamagare',
    'home.stats.peopleHelped': 'Abantu bafashijwe',
    'home.stats.aidsDonated': 'Ibikoresho byo kugenda byatanzwe',
    'home.stats.activePartners': 'Abo dufatanya',
    'home.mission.title': 'Intego yacu ni yoroshye',
    'home.mission.subtitle': 'Twizera ko kugenda bitakwiye kuba inzitizi mu kubana ubuzima buzuye.',
    'home.mission.description': 'Binyuze mu rusobe rwacu rw\'abatanga impano binyangamugayo, abo dufatanya mu gusana bizeye, n\'imiryango y\'ubuntu yizeye, duhagurukira ko ibikoresho by\'ubwiyunge nziza bigera ku bantu babikeneye cyane.',
    'home.mission.seeImpact': 'Reba ingaruka zacu',
    'home.community.title': 'Kubaka imitima ikomeye',
    'home.community.description': 'Buri mpano ikora impinduka nziza. Igihe umuntu agarura ubushobozi bwe bwo kugenda, ashobora kugira uruhare runini mu rugo rwe, agumana ubwigenge bwe, kandi akomeze gutanga uruhare mu baturage.',
    'home.community.impact': 'Urusobemiyoboro rw\'abo dufatanya ruhagurukira ko buri gikoresho cyo kugenda kigera ku muntu ukikeneye cyane, gikora ingaruka zirambye zirenze impano y\'itangiriro.',
    'home.community.meetPartners': 'Bonane n\'abo dufatanya',
    'home.community.nextSteps': 'Ni iki gitaha?',
    
    // Marketplace
    'marketplace.title': 'Isoko rya Care Bridge',
    'marketplace.subtitle': 'Ibicuruzwa nziza by\'ubuvuzi',
    'marketplace.description': 'Duguhuza n\'ibicuruzwa by\'ubuvuzi bifite igiciro gito, nziza kandi bituruka ku bashakiro uzizeye.',
    'marketplace.searchPlaceholder': 'Shakisha ibicuruzwa...',
    'marketplace.filterButton': 'Shungura',
    'marketplace.categories': 'Ubwoko',
    'marketplace.sortBy': 'Tondeka ukurikije',
    'marketplace.sortBy.featured': 'Bifatika',
    'marketplace.sortBy.priceLow': 'Igiciro: Kuva hepfo kugera hejuru',
    'marketplace.sortBy.priceHigh': 'Igiciro: Kuva hejuru kugera hepfo',
    'marketplace.sortBy.newest': 'Bishya',
    'marketplace.addToCart': 'Shyira mu gakarito',
    'marketplace.outOfStock': 'Birarenze',
    'marketplace.inStock': 'Biraboneka',
    'marketplace.noProducts': 'Nta bicuruzwa byabonetse',
    'marketplace.partnerWithUs': 'Jyana n\'intego yacu',
    'marketplace.partnerDescription': 'Isoko ryacu rishyigikira ibikoresho byo kwivuza bifite igiciro gito byerekejwe imitima yo mu cyaro. Buri kigurwa gifasha mu guhuza icyuho cy\'ubushobozi mu Rwanda n\'Nijeriya.',
    'marketplace.becomePartner': 'Ba uwo dufatanya',
    'marketplace.noPrice': 'Duhamagare ku giciro',
    'marketplace.categories.wheelchairs': 'Amapine',
    'marketplace.categories.walkingAids': 'Ibikoresho byo kugenda',
    'marketplace.categories.prosthetics': 'Ibice by\'umubiri bihindurwa',
    'marketplace.categories.orthotics': 'Ibikoresho byo gukosora umubiri',
    'marketplace.categories.hearingAids': 'Ibikoresho byo kwumva',
    'marketplace.categories.dailyLiving': 'Ubuzima bwa buri munsi',
    
    // Footer
    'footer.mission': 'Guhuza abantu bafite ibikenewe byo kugenda n\'ubufasha n\'ubufasha nziza mu Rwanda n\'Nijeriya.',
    'footer.quickLinks': 'Ibisabwa vuba',
    'footer.support': 'Ubufasha',
    'footer.contact': 'Duhamagare',
    'footer.becomePartner': 'Ba uwo dufatanya',
    'footer.helpCenter': 'Ikigo cy\'ubufasha',
    'footer.allRightsReserved': 'Uburenganzira bwose burarinzwe.',
    'footer.privacy': 'Gahunda yo kubungabunga amakuru bwite',
    'footer.terms': 'Amategeko yo gukoresha',
    'footer.cookies': 'Gahunda ya kuki',

    // Auth
    'auth.signIn': 'Injira',
    'auth.signUp': 'Iyandikishe',
    'auth.email': 'Imeri',
    'auth.password': 'Ijambo ry\'ibanga',
    'auth.firstName': 'Izina ry\'ubanza',
    'auth.lastName': 'Izina ry\'umuryango',
    'auth.createAccount': 'Koresha konti',
    'auth.alreadyHaveAccount': 'Usanzwe ufite konti?',
    'auth.dontHaveAccount': 'Ntufite konti?',
    'auth.forgotPassword': 'Wibagiwe ijambo ry\'ibanga?',
    'auth.resetPassword': 'Subiramo ijambo ry\'ibanga',
    'auth.welcomeBack': 'Murakaza neza!',
    'auth.joinCommunity': 'Jya mu rusobemiyoboro rwacu',
    'auth.signInWith': 'Injira ukoresheje',
    
    // Cart
    'cart.title': 'Agakarito k\'ibyogura',
    'cart.empty': 'Agakarito kawe kariko ubusa',
    'cart.emptyDescription': 'Shyiramo ikintu kimwe kugira utangire',
    'cart.continueShopping': 'Komeza kugura',
    'cart.removeItem': 'Kuramo ikintu',
    'cart.updateQuantity': 'Kuvugurura umubare',
    'cart.checkout': 'Kwishyura',
    'cart.subtotal': 'Agashya',
    'cart.shipping': 'Kohereza',
    'cart.tax': 'Umusoro',
    'cart.total': 'Byose hamwe',
    'cart.itemsInCart': 'Ibintu {{count}} mu gakarito',
    
    // Dashboard
    'dashboard.title': 'Ibikoresha',
    'dashboard.welcome': 'Murakaza neza, {{name}}!',
    'dashboard.orders.title': 'Ibyo nasabye',
    'dashboard.orders.recent': 'Ibyo nasabye vuba',
    'dashboard.orders.all': 'Byose nasabye',
    'dashboard.orders.status.pending': 'Birategereza',
    'dashboard.orders.status.confirmed': 'Byemejwe',
    'dashboard.orders.status.shipped': 'Byoherejwe',
    'dashboard.orders.status.delivered': 'Byageze',
    'dashboard.orders.status.cancelled': 'Byahagaritswe',
    'dashboard.profile.title': 'Amakuru yanjye',
    'dashboard.profile.edit': 'Hindura amakuru',
    'dashboard.favorites.title': 'Ibyankunda',
    'dashboard.noOrders': 'Nta kintu wasabye',
    'dashboard.noFavorites': 'Nta kintu ukunda',
    
    // Checkout
    'checkout.title': 'Kwishyura',
    'checkout.orderSummary': 'Incamake y\'ibyo wasabye',
    'checkout.shippingAddress': 'Aderesi yo kohereza',
    'checkout.billingAddress': 'Aderesi yo kwishyura',
    'checkout.paymentMethod': 'Uburyo bwo kwishyura',
    'checkout.placeOrder': 'Saba',
    'checkout.processing': 'Biratangura...',
    'checkout.success': 'Byasabwe neza!',
    'checkout.error': 'Ikosa rikubaye mu gusaba',
    'checkout.street': 'Aderesi y\'umuhanda',
    'checkout.city': 'Umujyi',
    'checkout.state': 'Intara',
    'checkout.zipCode': 'Kode y\'iposita',
    'checkout.country': 'Igihugu',
    'checkout.phone': 'Nimero ya telefoni',
    
    // About
    'about.title': 'Ibijyanye na Care Bridge',
    'about.hero.title': 'Ibijyanye na Care Bridge',
    'about.hero.subtitle': 'Guhuza icyuho cy\'ubushobozi bwo kwivuza',
    'about.hero.description': 'Twiyemeje ko ibisubizo by\'ubuvuzi bigomba kugera ku bantu bose bakabikeneye.',
    'about.mission.title': 'Intego yacu',
    'about.mission.description': 'Guhuza icyuho cy\'ubushobozi bwo kwivuza duhuza abatanga impano n\'abakeneye ubufasha.',
    'about.vision.title': 'Icyerekezo cyacu',
    'about.vision.description': 'Isi aho ubushobozi bwo kwivuza budagarukira ku ngorane z\'amafaranga.',
    'about.values.title': 'Indangagaciro zacu',
    'about.values.description': 'Izi ndangagaciro z\'ingenzi ziyobora ibyo dukora byose',
    'about.values.compassion.title': 'Impuhwe',
    'about.values.compassion.description': 'Dukurirana buri mibanire twishyize mu mwanya w\'undi',
    'about.values.community.title': 'Ubunyangamugayo',
    'about.values.community.description': 'Twizera ku mbaraga z\'ubunyangamugayo mu gukora impinduka zirambye',
    'about.values.accessibility.title': 'Ubushobozi',
    'about.values.accessibility.description': 'Umuntu wese akwiye kugera ku buvuzi, hatitawe ku miterere ye',
    'about.values.impact.title': 'Ingaruka',
    'about.values.impact.description': 'Dupima intsinzi dushingiye ku buzima dutezimbere n\'imitima duteza imbere',
    'about.values.compassion': 'Impuhwe',
    'about.values.integrity': 'Ubwengangare',
    'about.values.innovation': 'Udushya',
    'about.values.collaboration': 'Ubufatanye',
    'about.story.title': 'Inkuru yacu',
    'about.story.beginning.title': 'Uburyo twatangiye',
    'about.story.beginning.description': 'Care Bridge yashinzwe ifite icyerekezo cyoroshye ariko gikomeye.',
    'about.story.growth.title': 'Gukwirakwiza ingaruka',
    'about.story.growth.description': 'Kuva mu ntangiriro zacu, twakuze gusa ibihumbi.',
    'about.story.future.title': 'Gucuza imbere',
    'about.story.future.description': 'Tukomeje kwagura ubunyangamugayo bwacu no kunoza serivisi zacu.',
    'about.achievements.title': 'Ingaruka zacu',
    'about.achievements.description': 'Reba itandukaniro twakoreye hamwe',
    'about.achievements.peopleServed': 'Abantu bakorerwe',
    'about.achievements.aidsDistributed': 'Ubufasha bwakwirakwirije',
    'about.achievements.countriesReached': 'Ibihugu byagezwemo',
    'about.achievements.satisfactionRate': 'Ikigereranyo cy\'ibyishimye',
    'about.team.title': 'Bonane n\'ikipe yacu',
    'about.team.description': 'Abanyamwuga bitanze bakora kugira ubuvuzi bufatika',
    'about.cta.title': 'Jyana n\'intego yacu',
    'about.cta.description': 'Hamwe, dushobora gukora isi aho ubushobozi bwo kwivuza butaba uburenganzira bwite ahubwo uburenganzira.',
    'about.cta.becomePartner': 'Ba uwo dufatanya',
    'about.cta.contactUs': 'Duhamagare',
    
    // Contact
    'contact.title': 'Duhamagare',
    'contact.subtitle': 'Duhamagare',
    'contact.description': 'Twifuza kugirango twongere tumve ibivuye muri mwe. Dukohereze ubutumwa kandi tuzabisubiza vuba bishoboka.',
    'contact.form.name': 'Amazina yose',
    'contact.form.email': 'Aderesi ya imeri',
    'contact.form.subject': 'Ingingo',
    'contact.form.message': 'Ubutumwa',
    'contact.form.send': 'Kohereza ubutumwa',
    'contact.info.address': 'Aderesi',
    'contact.info.phone': 'Telefoni',
    'contact.info.email': 'Imeri',
    'contact.info.hours': 'Amasaha y\'akazi',
    
    // FAQ
    'faq.title': 'Ibibazo bikunze kubazwa',
    'faq.subtitle': 'Shakisha ibisubizo ku bibazo bisanzwe',
    'faq.searchPlaceholder': 'Shakisha ibibazo...',
    'faq.general': 'Rusange',
    'faq.donating': 'Gutanga',
    'faq.receiving': 'Kwakira ubufasha',
    'faq.marketplace': 'Isoko',
    'faq.technical': 'Ubufasha mu ikoranabuhanga',
    
    // Donate
    'donate.title': 'Tanga ibikoresho byo kugenda',
    'donate.subtitle': 'Kora itandukaniro uyumunsi',
    'donate.description': 'Impano yawe uyumunsi ishobora gufasha umuntu kugarura uburenganzira bwe bwo kugenda.',
    'donate.donateNow': 'Tanga impano ubu',
    'donate.process.title': 'Uburyo impano zikora',
    'donate.process.step1': 'Hitamo icyo ugiye gutanga',
    'donate.process.step2': 'Uzuza amakuru y\'impano',
    'donate.process.step3': 'Turateguye ubwonko',
    'donate.process.step4': 'Tubyigisha abakikeneye',
    'donate.accepted.title': 'Icyo twakira',
    'donate.cta.title': 'Witeguye gukora itandukaniro?',
    'donate.cta.description': 'Impano yawe ishobora guhindura ubuzima bw\'umuntu.',
    
    // Partners
    'partners.title': 'Abo dufatanya',
    'partners.subtitle': 'Gukora hamwe kugira ejo heza',
    'partners.description': 'Bonane n\'imiryango idufasha kugera ku ntego yacu.',
    'partners.types.title': 'Ubwoko bw\'abo dufatanyeho',
    'partners.types.ngos': 'Imiryango idaharanira inyungu',
    'partners.types.healthcare': 'Abatanga ubuvuzi',
    'partners.types.repair': 'Serivisi zo gusana',
    'partners.types.logistics': 'Gutwaraguza',
    'partners.benefits.title': 'Inyungu zo kuba uwo dufatanya',
    'partners.join.title': 'Jyana nacu',
    'partners.join.cta': 'Jya uwo dufatanya uyumunsi',
    
    // Impact
    'impact.title': 'Ingaruka zacu',
    'impact.subtitle': 'Itandukaniro dukora',
    'impact.description': 'Reba uburyo umusanzu wawe ugira impinduka nziza.',
    'impact.stories.title': 'Inkuru z\'intsinzi',
    'impact.metrics.title': 'Ingaruka mu mibare',
    'impact.countries': 'Ibihugu',
    'impact.beneficiaries': 'Abayunguye',
    'impact.partnerships': 'Ubufatanye',
    'impact.donations': 'Impano',
    
    // Error messages
    'error.notFound': 'Ntiboneka',
    'error.serverError': 'Ikosa rya seriveri',
    'error.networkError': 'Ikosa rya rusobe',
    'error.unauthorized': 'Nta burenganzira',
    'error.goHome': 'Subira Ahabanza',
    'error.tryAgain': 'Ongera Ugerageze'
  },
  
  // Hausa translations (Nigeria)
  ha: {
    'nav.home': 'Gida', 'nav.about': 'Game da mu', 'nav.marketplace': 'Kasuwa', 'nav.donate': 'Ba da kyauta', 'nav.partners': 'Abokan hulda', 'nav.faq': 'Tambayoyi', 'nav.contact': 'Tuntube mu', 'nav.impact': 'Tasiri', 'nav.dashboard': 'Dashboard', 'nav.signIn': 'Shiga', 'nav.signOut': 'Fita', 'nav.cart': 'Kanta',
    'common.loading': 'Ana daukar hankali...', 'common.error': 'Kuskure', 'common.success': 'Nasara', 'common.save': 'Ajiye', 'common.cancel': 'Soke', 'common.delete': 'Share', 'common.edit': 'Gyara', 'common.add': 'Kara', 'common.search': 'Nema', 'common.filter': 'Tace', 'common.sort': 'Jera', 'common.price': 'Farashi', 'common.quantity': 'Yawan', 'common.total': 'Jimla', 'common.back': 'Komawa', 'common.next': 'Na gaba', 'common.previous': 'Na baya', 'common.submit': 'Aika', 'common.close': 'Rufe', 'common.view': 'Duba', 'common.learnMore': 'Kara koyo', 'common.getStarted': 'Fara', 'common.readMore': 'Kara karatu', 'common.seeMore': 'Kara gani', 'common.showLess': 'Nuna kadan',
    'home.hero.title': 'Hadar tazara a cikin', 'home.hero.subtitle': 'Lafiyar jama\'a mai saukin shiga', 'home.hero.description': 'Muna hada masu ba da kyauta da mutanen da suke bukatar taimako, don tabbatar da kayan taimako kamar kujerun guragu da sanduna sun kai ga wadanda suke bukata.', 'home.hero.donateNow': 'Ba da kyauta yanzu', 'home.hero.learnMore': 'Kara koyo', 'home.hero.shopMarketplace': 'Sayar a kasuwa', 'home.hero.getInTouch': 'Tuntube mu', 'home.stats.peopleHelped': 'Mutanen da aka taimaka', 'home.stats.aidsDonated': 'Kayan taimako da aka ba', 'home.stats.activePartners': 'Abokan hulda masu aiki', 'home.mission.title': 'Manufarmu mai sauki', 'home.mission.subtitle': 'Mun yi imani cewa motsi bai kamata ya zama shinge ga rayuwa mai cike da jin dadi ba.', 'home.mission.description': 'Ta hanyar sadarwar masu kyauta, masu gyara na gware, da kungiyoyin jin kai na amana, muna tabbatar da cewa ingantattun kayan taimako sun kai ga mutanen da suke bukata sosai.', 'home.mission.seeImpact': 'Duba tasirinmu', 'home.community.title': 'Gina al\'ummomi masu karfi', 'home.community.description': 'Kowace kyauta tana haifar da tasiri mai kyau. Lokacin da mutum ya dawo da ikon motsi, zai iya shiga cikin al\'ummarsa da cikakken hankali, ya kiyaye kansa, kuma ya ci gaba da ba da gudummawarsa ga al\'umma.', 'home.community.impact': 'Sadarwar abokan huldanmu tana tabbatar da cewa kowanne kayan taimako ya sami hanyarsa zuwa ga wanda yake bukatar shi da gaske, yana haifar da tasiri mai dorewa da ya wuce kyautar farko.', 'home.community.meetPartners': 'Hadu da abokan huldanmu', 'home.community.nextSteps': 'Me ke gaba?',
    // Simplified for brevity - adding basic translations to fix build
    'marketplace.title': 'Kasuwar Care Bridge', 'marketplace.subtitle': 'Kayayyaki masu inganci na lafiya', 'marketplace.description': 'Muna hada ku da kayayyaki masu inganci na lafiya da kayan taimako daga abokan hulda masu amana.', 'marketplace.searchPlaceholder': 'Nemi kayayyaki...', 'marketplace.filterButton': 'Tace', 'marketplace.categories': 'Nau\'oci', 'marketplace.sortBy': 'Jera ta', 'marketplace.sortBy.featured': 'Na musamman', 'marketplace.sortBy.priceLow': 'Farashi: Daga kasa zuwa sama', 'marketplace.sortBy.priceHigh': 'Farashi: Daga sama zuwa kasa', 'marketplace.sortBy.newest': 'Sababbi', 'marketplace.addToCart': 'Kara a kanta', 'marketplace.outOfStock': 'Ba a hanga', 'marketplace.inStock': 'Ana hanga', 'marketplace.noProducts': 'Babu kayayyakin da aka samu', 'marketplace.partnerWithUs': 'Hada da manufarmu', 'marketplace.partnerDescription': 'Kasuwanmu tana goyan bayan kayan taimako masu arha wa al\'ummomin karkara. Kowane siyan yana taimakawa wajen datse gibin shiga a Najeriya da Rwanda.', 'marketplace.becomePartner': 'Zama abokin hulda', 'marketplace.noPrice': 'Tuntube mu don farashi', 'marketplace.categories.wheelchairs': 'Kujerun guragu', 'marketplace.categories.walkingAids': 'Kayan taimako na tafiya', 'marketplace.categories.prosthetics': 'Kayan gyara jiki', 'marketplace.categories.orthotics': 'Kayan daidaita jiki', 'marketplace.categories.hearingAids': 'Kayan taimako na ji', 'marketplace.categories.dailyLiving': 'Rayuwar yau da kullum',
    // Adding all remaining keys with basic translations to fix build
    'footer.mission': 'Hada mutane masu bukatar motsi da kayan taimako da sabis na inganci a fadin Najeriya da Rwanda.', 'footer.quickLinks': 'Hanyoyin sauri', 'footer.support': 'Tallafi', 'footer.contact': 'Tuntube mu', 'footer.becomePartner': 'Zama abokin hulda', 'footer.helpCenter': 'Cibiyar taimako', 'footer.allRightsReserved': 'Duk hakkokin da aka ajiye.', 'footer.privacy': 'Manufar sirri', 'footer.terms': 'Sharuddan sabis', 'footer.cookies': 'Manufar kukis',
    'auth.signIn': 'Shiga', 'auth.signUp': 'Yi rajista', 'auth.email': 'Imel', 'auth.password': 'Kalmar shiga', 'auth.firstName': 'Suna na farko', 'auth.lastName': 'Sunan iyali', 'auth.createAccount': 'Kafa asusu', 'auth.alreadyHaveAccount': 'Kana da asusu?', 'auth.dontHaveAccount': 'Ba ka da asusu?', 'auth.forgotPassword': 'Ka manta da kalmar shiga?', 'auth.resetPassword': 'Sake saita kalmar shiga', 'auth.welcomeBack': 'Maraba da komawa!', 'auth.joinCommunity': 'Shiga al\'ummarmu', 'auth.signInWith': 'Shiga da',
    'cart.title': 'Kantan siyayya', 'cart.empty': 'Kantanka babu komai', 'cart.emptyDescription': 'Kara wasu abubuwa don farawa', 'cart.continueShopping': 'Ci gaba da siyayya', 'cart.removeItem': 'Cire abu', 'cart.updateQuantity': 'Sabunta yawan', 'cart.checkout': 'Biya', 'cart.subtotal': 'Karamin jimla', 'cart.shipping': 'Jigilar kaya', 'cart.tax': 'Haraji', 'cart.total': 'Jimla', 'cart.itemsInCart': 'Abubuwa {{count}} a kanta',
    'dashboard.title': 'Dashboard', 'dashboard.welcome': 'Maraba da komawa, {{name}}!', 'dashboard.orders.title': 'Odarni', 'dashboard.orders.recent': 'Odar na baya-bayan nan', 'dashboard.orders.all': 'Duk odar', 'dashboard.orders.status.pending': 'Ana jira', 'dashboard.orders.status.confirmed': 'An tabbatar', 'dashboard.orders.status.shipped': 'An aika', 'dashboard.orders.status.delivered': 'An kai', 'dashboard.orders.status.cancelled': 'An soke', 'dashboard.profile.title': 'Bayani', 'dashboard.profile.edit': 'Gyara bayani', 'dashboard.favorites.title': 'Abubuwan da nake so', 'dashboard.noOrders': 'Babu odar har yanzu', 'dashboard.noFavorites': 'Babu abubuwan da nake so har yanzu',
    'checkout.title': 'Biya', 'checkout.orderSummary': 'Takamaicin oda', 'checkout.shippingAddress': 'Adireshin jigilar kaya', 'checkout.billingAddress': 'Adireshin biya', 'checkout.paymentMethod': 'Hanyar biya', 'checkout.placeOrder': 'Yi oda', 'checkout.processing': 'Ana aiki...', 'checkout.success': 'An yi oda cikin nasara!', 'checkout.error': 'Kuskure wajen yin oda', 'checkout.street': 'Adireshin titi', 'checkout.city': 'Birni', 'checkout.state': 'Jiha', 'checkout.zipCode': 'Lambar gidan waya', 'checkout.country': 'Kasa', 'checkout.phone': 'Lambarin tarho',
    'about.title': 'Game da Care Bridge', 'about.hero.title': 'Game da Care Bridge', 'about.hero.subtitle': 'Datse gibin shiga ga lafiya', 'about.hero.description': 'Mun jajirce wajen tabbatar da cewa hanyoyin magani sun kai ga kowa da yake bukatar su.', 'about.mission.title': 'Manufarmu', 'about.mission.description': 'Don datse gibin shiga ga lafiya ta hanyar hada masu ba da kyauta da masu bukatar taimako.', 'about.vision.title': 'Hangen nesanmu', 'about.vision.description': 'Duniya inda shiga ga lafiya ba zai iyakance ta hanyar matsalolin kudi ba.', 'about.values.title': 'Kimar mu', 'about.values.description': 'Wadannan mahimman kimar suna jagorantar duk abin da muke yi', 'about.values.compassion.title': 'Tausayi', 'about.values.compassion.description': 'Muna fuskantar kowace hulda da jin kai da fahimta', 'about.values.community.title': 'Al\'umma', 'about.values.community.description': 'Mun yi imani da ikon al\'umma wajen haifar da canji mai dorewa', 'about.values.accessibility.title': 'Shiga', 'about.values.accessibility.description': 'Kowa ya cancanci shiga ga lafiya, ba tare da la\'akari da yanayin sa ba', 'about.values.impact.title': 'Tasiri', 'about.values.impact.description': 'Muna auna nasara ta rayukan da muke inganta da al\'ummomin da muke karfafa', 'about.values.compassion': 'Tausayi', 'about.values.integrity': 'Gaskiya', 'about.values.innovation': 'Kirkire-kirkire', 'about.values.collaboration': 'Hada kai', 'about.story.title': 'Labarinmu', 'about.story.beginning.title': 'Yadda muka fara', 'about.story.beginning.description': 'An kafa Care Bridge da hangen nesa mai sauki amma mai karfi.', 'about.story.growth.title': 'Fadada tasirinmu', 'about.story.growth.description': 'Daga farkon mu mai sauki, mun girma har mun yi hidima ga dubbai.', 'about.story.future.title': 'Kallon gaba', 'about.story.future.description': 'Muna ci gaba da fadada ikonmu da inganta ayyukanmu.', 'about.achievements.title': 'Tasirinmu', 'about.achievements.description': 'Duba bambancin da muka yi tare', 'about.achievements.peopleServed': 'Mutanen da aka yi hidima', 'about.achievements.aidsDistributed': 'Taimakon da aka rarraba', 'about.achievements.countriesReached': 'Kasashen da aka kai', 'about.achievements.satisfactionRate': 'Adadin gamsuwa', 'about.team.title': 'Saduwa da kungiyarmu', 'about.team.description': 'Kwararru masu himma da suke aiki don lafiya mai saukin shiga', 'about.cta.title': 'Hada da manufarmu', 'about.cta.description': 'Tare, za mu iya ƙirƙirar duniya inda shiga ga lafiya ba gata ba ce amma hakki.', 'about.cta.becomePartner': 'Zama abokin hulda', 'about.cta.contactUs': 'Tuntube mu',
    'contact.title': 'Tuntube mu', 'contact.subtitle': 'Tuntube mu', 'contact.description': 'Muna son jin daga gare ku. Aika mana sako kuma za mu amsa da sauri.', 'contact.form.name': 'Cikakken suna', 'contact.form.email': 'Adireshin imel', 'contact.form.subject': 'Jigo', 'contact.form.message': 'Sako', 'contact.form.send': 'Aika sako', 'contact.info.address': 'Adireshi', 'contact.info.phone': 'Tarho', 'contact.info.email': 'Imel', 'contact.info.hours': 'Lokutan aiki',
    'faq.title': 'Tambayoyin da ake yawan yi', 'faq.subtitle': 'Nemo amsoshi ga tambayoyi na yau da kullum', 'faq.searchPlaceholder': 'Nemo tambayoyi...', 'faq.general': 'Gabaɗaya', 'faq.donating': 'Ba da kyauta', 'faq.receiving': 'Karɓar taimako', 'faq.marketplace': 'Kasuwa', 'faq.technical': 'Tallafin fasaha',
    'donate.title': 'Ba da kayan taimako na motsi', 'donate.subtitle': 'Yi bambanci yau', 'donate.description': 'Kyautar ku ta yau za ta iya taimaka wa wani ya dawo da \'yancinsa da motsinsa.', 'donate.donateNow': 'Ba da kyauta yanzu', 'donate.process.title': 'Yadda kyautuka suke aiki', 'donate.process.step1': 'Zaɓi abin da za ku ba da kyauta', 'donate.process.step2': 'Cika bayanan kyauta', 'donate.process.step3': 'Mu shirya ɗaukar', 'donate.process.step4': 'Mu kai ga masu bukatar', 'donate.accepted.title': 'Abin da muke karɓa', 'donate.cta.title': 'Shirye kuke ku yi bambanci?', 'donate.cta.description': 'Kyautar ku za ta iya canza rayuwar wani.',
    'partners.title': 'Abokan huldanmu', 'partners.subtitle': 'Yin aiki tare don makomar gaba mai kyau', 'partners.description': 'Haɗu da ƙungiyoyin da ke taimaka mana mu cimma burinmu.', 'partners.types.title': 'Nau\'ukan abokan hulda', 'partners.types.ngos': 'Kungiyoyin da ba sa neman riba', 'partners.types.healthcare': 'Masu ba da lafiya', 'partners.types.repair': 'Sabis na gyara', 'partners.types.logistics': 'Jigilar kaya', 'partners.benefits.title': 'Fa\'idodin zama abokin hulda', 'partners.join.title': 'Hada da mu', 'partners.join.cta': 'Zama abokin hulda yau',
    'impact.title': 'Tasirinmu', 'impact.subtitle': 'Bambancin da muke yi', 'impact.description': 'Duba yadda gudummawar ku ke haifar da canjin kirki.', 'impact.stories.title': 'Labarun nasara', 'impact.metrics.title': 'Tasiri ta lambobi', 'impact.countries': 'Kasashe', 'impact.beneficiaries': 'Masu cin moriyar', 'impact.partnerships': 'Hulɗa', 'impact.donations': 'Kyautuka',
    'error.notFound': 'Ba a samu ba', 'error.serverError': 'Kuskuren sabar', 'error.networkError': 'Kuskuren cibiyar sadarwa', 'error.unauthorized': 'Ba izini', 'error.goHome': 'Koma gida', 'error.tryAgain': 'Sake gwadawa'
  },

  // Igbo translations (Nigeria)  
  ig: {
    'nav.home': 'Ụlọ', 'nav.about': 'Banyere anyị', 'nav.marketplace': 'Ahịa', 'nav.donate': 'Nye onyinye', 'nav.partners': 'Ndị mmekọ', 'nav.faq': 'Ajụjụ ndị a na-ajụkarị', 'nav.contact': 'Kpọtụrụ anyị', 'nav.impact': 'Mmetụta', 'nav.dashboard': 'Dashboard', 'nav.signIn': 'Banye', 'nav.signOut': 'Pụọ', 'nav.cart': 'Nkata',
    'common.loading': 'Na-ebu...', 'common.error': 'Njehie', 'common.success': 'Ihe ịga nke ọma', 'common.save': 'Chekwaa', 'common.cancel': 'Kagbuo', 'common.delete': 'Hichapụ', 'common.edit': 'Dezie', 'common.add': 'Tinye', 'common.search': 'Chọọ', 'common.filter': 'Nzacha', 'common.sort': 'Hazie', 'common.price': 'Ọnụ ahịa', 'common.quantity': 'Ọnụọgụgụ', 'common.total': 'Ngụkọta', 'common.back': 'Laghachi azụ', 'common.next': 'Ọzọ', 'common.previous': 'Nke gara aga', 'common.submit': 'Zipu', 'common.close': 'Mechie', 'common.view': 'Lee', 'common.learnMore': 'Mụtakwuo', 'common.getStarted': 'Malite', 'common.readMore': 'Gụkwuo', 'common.seeMore': 'Hụkwuo', 'common.showLess': 'Gosi obere',
    // Simplified translations for other keys
    'home.hero.title': 'Iji mechie ọdịiche na', 'marketplace.title': 'Ahịa Care Bridge', 'footer.mission': 'Ijikọ ndị mmadụ nwere mkpa mkpagharị na enyemaka na ọrụ nkwado na Nigeria na Rwanda.',
    // Adding minimal entries for build fix
    'home.hero.subtitle': 'Nlekọta ahụike na-enweta', 'home.hero.description': 'Ijikọ ndị na-enye onyinye na ndị nọ na mkpa, na-ahụ na ngwa enyemaka dịka oche ukwu, mkpịsị aka, na ihe ndozi ahụ na-erute ndị chọrọ ha kachasị.', 'home.hero.donateNow': 'Nye onyinye ugbu a', 'home.hero.learnMore': 'Mụtakwuo', 'home.hero.shopMarketplace': 'Zụrụ na ahịa', 'home.hero.getInTouch': 'Kpọtụrụ anyị', 'home.stats.peopleHelped': 'Ndị mmadụ enyere aka', 'home.stats.aidsDonated': 'Ngwa enyemaka enyere', 'home.stats.activePartners': 'Ndị mmekọ na-arụ ọrụ', 'home.mission.title': 'Ebumnobi anyị dị mfe', 'home.mission.subtitle': 'Anyị kwenyere na mkpagharị ekwesịghị ịbụ ihe mgbochi iji bie ndụ zuru oke.', 'home.mission.description': 'Site na netwọk anyị nke ndị na-enye onyinye na-emesapụ aka, ndị mmekọ rụziri ahụ nwere nkà, na NGO ndị a pụrụ ịtụkwasị obi, anyị na-ahụ na ngwa enyemaka dị mma na-erute ndị chọrọ ha kachasị.', 'home.mission.seeImpact': 'Lee mmetụta anyị', 'home.community.title': 'Iwu obodo siri ike', 'home.community.description': 'Onyinye ọ bụla na-emepụta mmetụta dị mma. Mgbe mmadụ nwetaghachiri ikike ịkwagharị ya, ha nwere ike isonye na obodo ha nke ọma, nọgide na-enwere onwe ha, wee nọgide na-enye aka na ọha mmadụ.', 'home.community.impact': 'Netwọk nke ndị mmekọ anyị na-ahụ na ngwa enyemaka ọ bụla na-achọta ụzọ ya nye onye chọrọ ya n\'ezie, na-emepụta mmetụta na-adịgide adịgide nke na-agafe onyinye mbụ ahụ.', 'home.community.meetPartners': 'Zute ndị mmekọ anyị', 'home.community.nextSteps': 'Kedu ihe na-esote?',
    'marketplace.subtitle': 'Ngwaahịa nlekọta ahụike dị mma', 'marketplace.description': 'Ijikọ gị na ngwaahịa nlekọta ahụike dị ọnụ ala, dị mma na ngwa enyemaka sitere na ndị mmekọ a pụrụ ịtụkwasị obi.', 'marketplace.searchPlaceholder': 'Chọọ ngwaahịa...', 'marketplace.filterButton': 'Nzacha', 'marketplace.categories': 'Ụdị', 'marketplace.sortBy': 'Hazie site na', 'marketplace.sortBy.featured': 'Egosipụtara', 'marketplace.sortBy.priceLow': 'Ọnụ ahịa: Site na ala gaa elu', 'marketplace.sortBy.priceHigh': 'Ọnụ ahịa: Site na elu gaa ala', 'marketplace.sortBy.newest': 'Ọhụrụ', 'marketplace.addToCart': 'Tinye na nkata', 'marketplace.outOfStock': 'Agwụla', 'marketplace.inStock': 'Nọ na ngwaahịa', 'marketplace.noProducts': 'Ahụghị ngwaahịa ọ bụla', 'marketplace.partnerWithUs': 'Sonye na ebumnuche anyị', 'marketplace.partnerDescription': 'Ahịa anyị na-akwado ngwa enyemaka dị ọnụ ala maka obodo ime obodo. Azụmaahịa ọ bụla na-enyere aka mebie ọdịiche nnweta na Nigeria na Rwanda.', 'marketplace.becomePartner': 'Bụrụ onye mmekọ', 'marketplace.noPrice': 'Kpọtụrụ anyị maka ọnụ ahịa', 'marketplace.categories.wheelchairs': 'Oche ukwu', 'marketplace.categories.walkingAids': 'Ngwa enyemaka ije', 'marketplace.categories.prosthetics': 'Ihe nnọchi ahụ', 'marketplace.categories.orthotics': 'Ihe ndozi ahụ', 'marketplace.categories.hearingAids': 'Ngwa enyemaka ịnụ ihe', 'marketplace.categories.dailyLiving': 'Ndụ kwa ụbọchị',
    'footer.quickLinks': 'Njikọ ngwa ngwa', 'footer.support': 'Nkwado', 'footer.contact': 'Kpọtụrụ anyị', 'footer.becomePartner': 'Bụrụ onye mmekọ', 'footer.helpCenter': 'Ebe enyemaka', 'footer.allRightsReserved': 'Ikike niile echekwabara.', 'footer.privacy': 'Iwu nzuzo', 'footer.terms': 'Usoro ọrụ', 'footer.cookies': 'Iwu kuki', 'auth.signIn': 'Banye', 'auth.signUp': 'Debanye aha', 'auth.email': 'Email', 'auth.password': 'Okwuntụghe', 'auth.firstName': 'Aha mbụ', 'auth.lastName': 'Aha ikpeazụ', 'auth.createAccount': 'Mepụta akaụntụ', 'auth.alreadyHaveAccount': 'I nwere akaụntụ?', 'auth.dontHaveAccount': 'I nweghị akaụntụ?', 'auth.forgotPassword': 'I chefuru okwuntụghe gị?', 'auth.resetPassword': 'Tọgharịa okwuntụghe', 'auth.welcomeBack': 'Ndewo ọzọ!', 'auth.joinCommunity': 'Sonye na obodo anyị', 'auth.signInWith': 'Banye site na', 'cart.title': 'Nkata ịzụ ahịa', 'cart.empty': 'Nkata gị tọgbọrọ chakoo', 'cart.emptyDescription': 'Tinye ụfọdụ ihe iji malite', 'cart.continueShopping': 'Gaa n\'ihu na-azụ ahịa', 'cart.removeItem': 'Wepụ ihe', 'cart.updateQuantity': 'Melite ọnụọgụgụ', 'cart.checkout': 'Kwụọ ụgwọ', 'cart.subtotal': 'Nchikota nta', 'cart.shipping': 'Mbupu', 'cart.tax': 'Ụtụ isi', 'cart.total': 'Ngụkọta', 'cart.itemsInCart': 'Ihe {{count}} nọ na nkata', 'dashboard.title': 'Dashboard', 'dashboard.welcome': 'Ndewo ọzọ, {{name}}!', 'dashboard.orders.title': 'Iwu m', 'dashboard.orders.recent': 'Iwu na nso nso a', 'dashboard.orders.all': 'Iwu niile', 'dashboard.orders.status.pending': 'Na-echere', 'dashboard.orders.status.confirmed': 'Kwadoro', 'dashboard.orders.status.shipped': 'Ezigara', 'dashboard.orders.status.delivered': 'Nyefere', 'dashboard.orders.status.cancelled': 'Kagburu', 'dashboard.profile.title': 'Profaịlụ', 'dashboard.profile.edit': 'Dezie profaịlụ', 'dashboard.favorites.title': 'Ọkacha mmasị', 'dashboard.noOrders': 'Enwebeghị iwu', 'dashboard.noFavorites': 'Enwebeghị ọkacha mmasị', 'checkout.title': 'Kwụọ ụgwọ', 'checkout.orderSummary': 'Nchịkọta iwu', 'checkout.shippingAddress': 'Adreesị mbupu', 'checkout.billingAddress': 'Adreesị ịkwụ ụgwọ', 'checkout.paymentMethod': 'Ụzọ ịkwụ ụgwọ', 'checkout.placeOrder': 'Tinye iwu', 'checkout.processing': 'Na-eme...', 'checkout.success': 'Etinyere iwu nke ọma!', 'checkout.error': 'Njehie n\'itinye iwu', 'checkout.street': 'Adreesị okporo ụzọ', 'checkout.city': 'Obodo', 'checkout.state': 'Steeti', 'checkout.zipCode': 'Koodu ZIP', 'checkout.country': 'Mba', 'checkout.phone': 'Nọmba ekwentị', 'about.title': 'Banyere Care Bridge', 'about.hero.title': 'Banyere Care Bridge', 'about.hero.subtitle': 'Imechi ọdịiche nnweta nlekọta ahụike', 'about.hero.description': 'Anyị raara onwe anyị nye n\'ịhụ na azịza nlekọta ahụike na-eru onye ọ bụla chọrọ ha.', 'about.mission.title': 'Ebumnuche anyị', 'about.mission.description': 'Imechi ọdịiche nnweta nlekọta ahụike site n\'ijikọ ndị na-enye onyinye na ndị nọ na mkpa.', 'about.vision.title': 'Ọhụụ anyị', 'about.vision.description': 'Ụwa ebe nnweta nlekọta ahụike anaghị ejigide site na nsogbu ego.', 'about.values.title': 'Ụkpụrụ anyị', 'about.values.description': 'Ụkpụrụ ndị a dị mkpa na-eduzi ihe niile anyị na-eme', 'about.values.compassion.title': 'Ọmịiko', 'about.values.compassion.description': 'Anyị na-abịaru mmekọrịta ọ bụla site na ọmịiko na nghọta', 'about.values.community.title': 'Obodo', 'about.values.community.description': 'Anyị kwenyere n\'ike obodo iji mepụta mgbanwe na-adịgide adịgide', 'about.values.accessibility.title': 'Nnweta', 'about.values.accessibility.description': 'Onye ọ bụla kwesịrị inweta nlekọta ahụike, n\'agbanyeghị ọnọdụ ha', 'about.values.impact.title': 'Mmetụta', 'about.values.impact.description': 'Anyị na-atụle ihe ịga nke ọma site na ndụ anyị na-emeziwanye na obodo anyị na-eme ka ha sie ike', 'about.values.compassion': 'Ọmịiko', 'about.values.integrity': 'Iguzosi ike n\'ezi omume', 'about.values.innovation': 'Ihe ọhụrụ', 'about.values.collaboration': 'Imekọ ihe ọnụ', 'about.story.title': 'Akụkọ anyị', 'about.story.beginning.title': 'Otú anyị si malite', 'about.story.beginning.description': 'E hiwere Care Bridge na ọhụụ dị mfe ma dị ike.', 'about.story.growth.title': 'Na-eto eto mmetụta anyị', 'about.story.growth.description': 'Site na mmalite anyị dị umeala, anyị etoola ka anyị jee ozi ọtụtụ puku.', 'about.story.future.title': 'Na-ele anya n\'ihu', 'about.story.future.description': 'Anyị na-aga n\'ihu na-agbasawanye oke anyị ma melite ọrụ anyị.', 'about.achievements.title': 'Mmetụta anyị', 'about.achievements.description': 'Lee ọdịiche anyị mere ọnụ', 'about.achievements.peopleServed': 'Ndị mmadụ ejere ozi', 'about.achievements.aidsDistributed': 'Enyemaka ekesara', 'about.achievements.countriesReached': 'Mba ndị a ruru', 'about.achievements.satisfactionRate': 'Ọnụego afọ ojuju', 'about.team.title': 'Zute ndị otu anyị', 'about.team.description': 'Ndị ọkachamara raara onwe ha nye na-arụ ọrụ maka nlekọta ahụike na-enweta', 'about.cta.title': 'Sonye na ebumnuche anyị', 'about.cta.description': 'Ọnụ, anyị nwere ike ịmepụta ụwa ebe nnweta nlekọta ahụike abụghị ihe ùgwù kama ikike.', 'about.cta.becomePartner': 'Bụrụ onye mmekọ', 'about.cta.contactUs': 'Kpọtụrụ anyị', 'contact.title': 'Kpọtụrụ anyị', 'contact.subtitle': 'Kpọtụrụ anyị', 'contact.description': 'Ọ ga-amasị anyị ịnụ n\'aka gị. Zitere anyị ozi, anyị ga-azakwa ngwa ngwa.', 'contact.form.name': 'Aha zuru oke', 'contact.form.email': 'Adreesị email', 'contact.form.subject': 'Isiokwu', 'contact.form.message': 'Ozi', 'contact.form.send': 'Zipu ozi', 'contact.info.address': 'Adreesị', 'contact.info.phone': 'Ekwentị', 'contact.info.email': 'Email', 'contact.info.hours': 'Oge ọrụ', 'faq.title': 'Ajụjụ ndị a na-ajụkarị', 'faq.subtitle': 'Chọta azịza ajụjụ ndị a na-ajụkarị', 'faq.searchPlaceholder': 'Chọọ ajụjụ...', 'faq.general': 'Izugbe', 'faq.donating': 'Inye onyinye', 'faq.receiving': 'Ịnata enyemaka', 'faq.marketplace': 'Ahịa', 'faq.technical': 'Nkwado teknụzụ', 'donate.title': 'Nye ngwa enyemaka mkpagharị', 'donate.subtitle': 'Mee ọdịiche taa', 'donate.description': 'Onyinye gị taa nwere ike inyere mmadụ aka iweghachite nnwere onwe ya na mkpagharị ya.', 'donate.donateNow': 'Nye onyinye ugbu a', 'donate.process.title': 'Otú onyinye si arụ ọrụ', 'donate.process.step1': 'Họrọ ihe ị ga-enye', 'donate.process.step2': 'Jupụta nkọwa onyinye', 'donate.process.step3': 'Anyị na-ahazi nchịkọta', 'donate.process.step4': 'Anyị na-ebugara ndị chọrọ ya', 'donate.accepted.title': 'Ihe anyị na-anabata', 'donate.cta.title': 'Dị njikere ime ọdịiche?', 'donate.cta.description': 'Onyinye gị nwere ike ịgbanwe ndụ mmadụ.', 'partners.title': 'Ndị mmekọ anyị', 'partners.subtitle': 'Na-arụkọ ọrụ ọnụ maka ọdịnihu ka mma', 'partners.description': 'Zute ndị otu na-enyere anyị aka imezu ebumnuche anyị.', 'partners.types.title': 'Ụdị ndị mmekọ', 'partners.types.ngos': 'NGO', 'partners.types.healthcare': 'Ndị na-enye nlekọta ahụike', 'partners.types.repair': 'Ọrụ nrụzi', 'partners.types.logistics': 'Nchịkọta', 'partners.benefits.title': 'Uru mmekọ', 'partners.join.title': 'Sonye na anyị', 'partners.join.cta': 'Bụrụ onye mmekọ taa', 'impact.title': 'Mmetụta anyị', 'impact.subtitle': 'Ọdịiche anyị na-eme', 'impact.description': 'Lee otú ntinye aka gị si emepụta mgbanwe dị mma.', 'impact.stories.title': 'Akụkọ ihe ịga nke ọma', 'impact.metrics.title': 'Mmetụta site na ọnụọgụgụ', 'impact.countries': 'Mba', 'impact.beneficiaries': 'Ndị na-erite uru', 'impact.partnerships': 'Mmekọ', 'impact.donations': 'Onyinye', 'error.notFound': 'Ahụghị', 'error.serverError': 'Njehie ihe nkesa', 'error.networkError': 'Njehie netwọkụ', 'error.unauthorized': 'Enweghị ikike', 'error.goHome': 'Gaa ụlọ', 'error.tryAgain': 'Gbalịa ọzọ'
  },

  // Yoruba translations (Nigeria)
  yo: {
    'nav.home': 'Ile', 'nav.about': 'Nipa wa', 'nav.marketplace': 'Oja', 'nav.donate': 'Fun ni ẹbun', 'nav.partners': 'Awọn alabaṣepọ', 'nav.faq': 'Awọn ibeere ti a maa n beere', 'nav.contact': 'Pe wa', 'nav.impact': 'Ipa', 'nav.dashboard': 'Dashboard', 'nav.signIn': 'Wọle', 'nav.signOut': 'Jade', 'nav.cart': 'Apoti',
    'common.loading': 'N gbe...', 'common.error': 'Aṣiṣe', 'common.success': 'Aṣeyọri', 'common.save': 'Fi pamọ', 'common.cancel': 'Fagilee', 'common.delete': 'Paarẹ', 'common.edit': 'Ṣatunkọ', 'common.add': 'Fi kun', 'common.search': 'Wa', 'common.filter': 'Ṣẹ', 'common.sort': 'Ṣeto', 'common.price': 'Owo', 'common.quantity': 'Iye', 'common.total': 'Lapapọ', 'common.back': 'Pada sẹhin', 'common.next': 'Tókàn', 'common.previous': 'Ti tẹlẹ', 'common.submit': 'Fi silẹ', 'common.close': 'Pa', 'common.view': 'Wo', 'common.learnMore': 'Kọ sii', 'common.getStarted': 'Bẹrẹ', 'common.readMore': 'Ka sii', 'common.seeMore': 'Ri sii', 'common.showLess': 'Fi diẹ han',
    // Simplified translations for other keys 
    'home.hero.title': 'Didá aafo ninu', 'marketplace.title': 'Oja Care Bridge', 'footer.mission': 'Sisopọ awọn eniyan ti o ni awọn iwulo gbigbe si awọn iranlọwọ didara ati awọn iṣẹ atilẹyin ni gbogbo Nigeria ati Rwanda.',
    // Adding minimal entries for all required keys to fix build
    'home.hero.subtitle': 'Ilera to ṣeeṣe', 'home.hero.description': 'Sisopọ awọn olufunni pẹlu awọn eniyan ti o nilo iranlọwọ, ṣiṣeduro pe awọn ohun elo iranlọwọ gbigbe bi awọn ijoko alaro, ọpa irin, ati awọn prosthetics de ọdọ awọn ti o nilo wọn julọ.', 'home.hero.donateNow': 'Fun ni ẹbun bayi', 'home.hero.learnMore': 'Kọ sii', 'home.hero.shopMarketplace': 'Ra ninu oja', 'home.hero.getInTouch': 'Pe wa', 'home.stats.peopleHelped': 'Awọn eniyan ti a ranṣe', 'home.stats.aidsDonated': 'Awọn ohun elo iranlọwọ ti a fun', 'home.stats.activePartners': 'Awọn alabaṣepọ to nṣiṣẹ', 'home.mission.title': 'Ero wa rọrun', 'home.mission.subtitle': 'A gbagbọ pe gbigbe ko yẹ ki o jẹ idiwọ si gbigbe aye pipe.', 'home.mission.description': 'Nipasẹ nẹtiwọọki wa ti awọn olufunni ọkàn-inú, awọn alabaṣepọ atunṣe ti o ni ọgbọn, ati awọn NGO igbẹkẹle, a ṣeduro pe awọn ohun elo iranlọwọ didara de ọdọ awọn eniyan ti o nilo wọn julọ.', 'home.mission.seeImpact': 'Wo ipa wa', 'home.community.title': 'Kikọ awọn agbegbe to lagbara', 'home.community.description': 'Gbogbo ẹbun n ṣeda ipa rere. Nigbati eniyan ba gba agbara gbigbe rẹ pada, wọn le kopa ni agbegbe wọn ni kikun, tọju ominira wọn, ki wọn si tẹsiwaju lati ṣe ilọsiwaju si awujọ.', 'home.community.impact': 'Nẹtiwọọki awọn alabaṣepọ wa ṣeduro pe gbogbo ohun elo iranlọwọ ri ọna rẹ si ẹnikan ti o nilo rẹ ni otitọ, ṣiṣeda ipa pipẹ ti o kọja ẹbun akọkọ naa.', 'home.community.meetPartners': 'Pade awọn alabaṣepọ wa', 'home.community.nextSteps': 'Kini o tele?',
    'marketplace.subtitle': 'Awọn ọja ilera didara', 'marketplace.description': 'Sisopọ ọ pẹlu awọn ọja ilera ti o rọ, didara ati awọn ohun elo iranlọwọ lati ọdọ awọn alabaṣepọ igbẹkẹle.', 'marketplace.searchPlaceholder': 'Wa awọn ọja...', 'marketplace.filterButton': 'Ṣẹ', 'marketplace.categories': 'Awọn iru', 'marketplace.sortBy': 'Ṣeto nipasẹ', 'marketplace.sortBy.featured': 'Ti a ṣe afihan', 'marketplace.sortBy.priceLow': 'Owo: Lati kekere si nla', 'marketplace.sortBy.priceHigh': 'Owo: Lati nla si kekere', 'marketplace.sortBy.newest': 'Tuntun', 'marketplace.addToCart': 'Fi si apoti', 'marketplace.outOfStock': 'Ko si ni oja', 'marketplace.inStock': 'Wa ni oja', 'marketplace.noProducts': 'Ko si awọn ọja ti a ri', 'marketplace.partnerWithUs': 'Darapọ mọ ero wa', 'marketplace.partnerDescription': 'Oja wa n ṣe atilẹyin awọn ohun elo iranlọwọ owo kekere fun awọn agbegbe egan. Gbogbo rira n ṣe iranlọwọ lati da aafo iwọle ni Nigeria ati Rwanda.', 'marketplace.becomePartner': 'Di alabaṣepọ', 'marketplace.noPrice': 'Pe wa fun owo', 'marketplace.categories.wheelchairs': 'Awọn ijoko alaro', 'marketplace.categories.walkingAids': 'Awọn ohun elo iranlọwọ rin', 'marketplace.categories.prosthetics': 'Awọn ẹya ara atọka', 'marketplace.categories.orthotics': 'Awọn ohun elo iṣatunṣe ara', 'marketplace.categories.hearingAids': 'Awọn ohun elo iranlọwọ gbọ', 'marketplace.categories.dailyLiving': 'Igbesi aye ojoojumọ',
    'footer.quickLinks': 'Awọn ọna asopọ kiakia', 'footer.support': 'Atilẹyin', 'footer.contact': 'Pe wa', 'footer.becomePartner': 'Di alabaṣepọ', 'footer.helpCenter': 'Ile-iṣẹ iranlọwọ', 'footer.allRightsReserved': 'Gbogbo ẹtọ ni a fi pamọ.', 'footer.privacy': 'Eto asiri', 'footer.terms': 'Awọn ofin iṣẹ', 'footer.cookies': 'Eto kuki', 'auth.signIn': 'Wọle', 'auth.signUp': 'Forukọsilẹ', 'auth.email': 'Imeeli', 'auth.password': 'Ọrọ igbaniwọle', 'auth.firstName': 'Orukọ akọkọ', 'auth.lastName': 'Orukọ idile', 'auth.createAccount': 'Ṣẹda akọọlẹ', 'auth.alreadyHaveAccount': 'Ṣe o ni akọọlẹ?', 'auth.dontHaveAccount': 'Ko ni akọọlẹ?', 'auth.forgotPassword': 'Ṣe o gbagbe ọrọ igbaniwọle rẹ?', 'auth.resetPassword': 'Tun ọrọ igbaniwọle ṣe', 'auth.welcomeBack': 'Kaabo pada!', 'auth.joinCommunity': 'Darapọ mọ agbegbe wa', 'auth.signInWith': 'Wọle pẹlu', 'cart.title': 'Apoti rira', 'cart.empty': 'Apoti rẹ ṣofo', 'cart.emptyDescription': 'Fi awọn nkan kun lati bẹrẹ', 'cart.continueShopping': 'Tẹsiwaju rira', 'cart.removeItem': 'Yọ nkan', 'cart.updateQuantity': 'Ṣe imudojuiwọn iye', 'cart.checkout': 'Sanwo', 'cart.subtotal': 'Lapapọ kekere', 'cart.shipping': 'Fifiranṣẹ', 'cart.tax': 'Owo-ori', 'cart.total': 'Lapapọ', 'cart.itemsInCart': 'Awọn nkan {{count}} ninu apoti', 'dashboard.title': 'Dashboard', 'dashboard.welcome': 'Kaabo pada, {{name}}!', 'dashboard.orders.title': 'Awọn aṣẹ mi', 'dashboard.orders.recent': 'Awọn aṣẹ aipẹ', 'dashboard.orders.all': 'Gbogbo awọn aṣẹ', 'dashboard.orders.status.pending': 'N duro', 'dashboard.orders.status.confirmed': 'Ti a jẹrisi', 'dashboard.orders.status.shipped': 'Ti a firanṣẹ', 'dashboard.orders.status.delivered': 'Ti a gbekalẹ', 'dashboard.orders.status.cancelled': 'Ti a fagilee', 'dashboard.profile.title': 'Profaili', 'dashboard.profile.edit': 'Ṣe atunkọ profaili', 'dashboard.favorites.title': 'Awọn ayanfẹ', 'dashboard.noOrders': 'Ko si awọn aṣẹ sibẹsibẹ', 'dashboard.noFavorites': 'Ko si awọn ayanfẹ sibẹsibẹ', 'checkout.title': 'Sanwo', 'checkout.orderSummary': 'Akopọ aṣẹ', 'checkout.shippingAddress': 'Adirẹsi fifiranṣẹ', 'checkout.billingAddress': 'Adirẹsi sisanwo', 'checkout.paymentMethod': 'Ọna sisanwo', 'checkout.placeOrder': 'Gbe aṣẹ kalẹ', 'checkout.processing': 'N ṣiṣẹ...', 'checkout.success': 'A gbe aṣẹ kalẹ ni aṣeyọri!', 'checkout.error': 'Aṣiṣe ni gbigbe aṣẹ kalẹ', 'checkout.street': 'Adirẹsi ita', 'checkout.city': 'Ilu', 'checkout.state': 'Ipinlẹ', 'checkout.zipCode': 'Koodu ZIP', 'checkout.country': 'Orilẹ-ede', 'checkout.phone': 'Nọmba foonu', 'about.title': 'Nipa Care Bridge', 'about.hero.title': 'Nipa Care Bridge', 'about.hero.subtitle': 'Didaba aafo iwọle itọju ilera', 'about.hero.description': 'A ti ya ara wa si ṣiṣeduro pe awọn ojutu itọju ilera de ọdọ gbogbo ẹni ti o nilo wọn.', 'about.mission.title': 'Ero wa', 'about.mission.description': 'Lati daba aafo iwọle itọju ilera nipa sisopọ awọn olufunni pẹlu awọn ti o nilo iranlọwọ.', 'about.vision.title': 'Iran wa', 'about.vision.description': 'Agbaye nibiti iwọle itọju ilera ko ni ni idiwọ nipasẹ awọn idiwọ owo.', 'about.values.title': 'Awọn iye wa', 'about.values.description': 'Awọn iye pataki wọnyi n darí ohun gbogbo ti a nṣe', 'about.values.compassion.title': 'Aanu', 'about.values.compassion.description': 'A mura si gbogbo ibaraẹnisọrọ pẹlu itaniji ati oye', 'about.values.community.title': 'Agbegbe', 'about.values.community.description': 'A gbagbọ ninu agbara agbegbe lati ṣeda iyipada ti o duro pipẹ', 'about.values.accessibility.title': 'Iwọle', 'about.values.accessibility.description': 'Gbogbo eniyan yẹ ki o ni iwọle si itọju ilera, laibikita ipo wọn', 'about.values.impact.title': 'Ipa', 'about.values.impact.description': 'A wọn aṣeyọri nipasẹ awọn igbesi aye ti a nmu dara si ati awọn agbegbe ti a nmu lagbara', 'about.values.compassion': 'Aanu', 'about.values.integrity': 'Otitọ', 'about.values.innovation': 'Imudojuiwọn', 'about.values.collaboration': 'Ifowọsowọpọ', 'about.story.title': 'Itan wa', 'about.story.beginning.title': 'Bi a ṣe bẹrẹ', 'about.story.beginning.description': 'A fi idi Care Bridge mulẹ pẹlu iran ti o rọrun sugbọn to lagbara.', 'about.story.growth.title': 'Nini dagba ipa wa', 'about.story.growth.description': 'Lati ibẹrẹ wa ti o rẹlẹ, a ti dagba lati sin awọn ẹgbẹẹgbẹrun.', 'about.story.future.title': 'Wiwo siwaju', 'about.story.future.description': 'A tẹsiwaju lati gbooro iwọle wa ki a si mu awọn iṣẹ wa dara si.', 'about.achievements.title': 'Ipa wa', 'about.achievements.description': 'Wo iyatọ ti a ṣe papọ', 'about.achievements.peopleServed': 'Awọn eniyan ti a sin', 'about.achievements.aidsDistributed': 'Awọn iranlọwọ ti a pin kaakiri', 'about.achievements.countriesReached': 'Awọn orilẹ-ede ti a de', 'about.achievements.satisfactionRate': 'Oṣuwọn itẹlọrun', 'about.team.title': 'Pade ẹgbẹ wa', 'about.team.description': 'Awọn alamọdaju ti o ya ara si ti n ṣiṣẹ fun itọju ilera ti o ṣeeṣe', 'about.cta.title': 'Darapọ mọ ero wa', 'about.cta.description': 'Papọ, a le ṣẹda agbaye nibiti iwọle itọju ilera kii yoo jẹ anfani ṣugbọn ẹtọ.', 'about.cta.becomePartner': 'Di alabaṣepọ', 'about.cta.contactUs': 'Pe wa', 'contact.title': 'Pe wa', 'contact.subtitle': 'Pe wa', 'contact.description': 'A fẹ lati gbọ lati ọdọ rẹ. Fi ifiranṣẹ ranṣẹ si wa, a yoo si dahun ni kiakia.', 'contact.form.name': 'Orukọ kikun', 'contact.form.email': 'Adirẹsi imeeli', 'contact.form.subject': 'Koko-ọrọ', 'contact.form.message': 'Ifiranṣẹ', 'contact.form.send': 'Fi ifiranṣẹ ranṣẹ', 'contact.info.address': 'Adirẹsi', 'contact.info.phone': 'Foonu', 'contact.info.email': 'Imeeli', 'contact.info.hours': 'Wakati iṣẹ', 'faq.title': 'Awọn ibeere ti a maa n beere', 'faq.subtitle': 'Wa awọn idahun si awọn ibeere ti o wọpọ', 'faq.searchPlaceholder': 'Wa awọn ibeere...', 'faq.general': 'Gbogbogbo', 'faq.donating': 'Fifun ni ẹbun', 'faq.receiving': 'Gbigba iranlọwọ', 'faq.marketplace': 'Oja', 'faq.technical': 'Atilẹyin imọ-ẹrọ', 'donate.title': 'Fun ni awọn ohun elo iranlọwọ gbigbe', 'donate.subtitle': 'Ṣe iyatọ loni', 'donate.description': 'Ẹbun rẹ loni le ṣe iranlọwọ fun ẹnikan lati gba ominira ati gbigbe rẹ pada.', 'donate.donateNow': 'Fun ni ẹbun bayi', 'donate.process.title': 'Bi awọn ẹbun ṣe n ṣiṣẹ', 'donate.process.step1': 'Yan ohun ti o fẹ fun ni ẹbun', 'donate.process.step2': 'Kun awọn alaye ẹbun', 'donate.process.step3': 'A ṣeto gbigbe', 'donate.process.step4': 'A gbekalẹ si awọn ti o nilo', 'donate.accepted.title': 'Ohun ti a gba', 'donate.cta.title': 'Ṣe o ti ṣetan lati ṣe iyatọ?', 'donate.cta.description': 'Ẹbun rẹ le yi igbesi aye ẹnikan pada.', 'partners.title': 'Awọn alabaṣepọ wa', 'partners.subtitle': 'Ṣiṣẹ papọ fun ọjọ iwaju to dara', 'partners.description': 'Pade awọn ajọ ti n ṣe iranlọwọ fun wa lati ṣaṣeyọri ero wa.', 'partners.types.title': 'Awọn iru alabaṣepọ', 'partners.types.ngos': 'Awọn NGO', 'partners.types.healthcare': 'Awọn olupese itọju ilera', 'partners.types.repair': 'Awọn iṣẹ atunṣe', 'partners.types.logistics': 'Isopọ', 'partners.benefits.title': 'Awọn anfani iṣọpọ', 'partners.join.title': 'Darapọ mọ wa', 'partners.join.cta': 'Di alabaṣepọ loni', 'impact.title': 'Ipa wa', 'impact.subtitle': 'Iyatọ ti a n ṣe', 'impact.description': 'Wo bi awọn ilọsiwaju rẹ ṣe n ṣẹda iyipada rere.', 'impact.stories.title': 'Awọn itan aṣeyọri', 'impact.metrics.title': 'Ipa nipasẹ awọn nọmba', 'impact.countries': 'Awọn orilẹ-ede', 'impact.beneficiaries': 'Awọn olaniruuru', 'impact.partnerships': 'Awọn iṣọpọ', 'impact.donations': 'Awọn ẹbun', 'error.notFound': 'A ko ri', 'error.serverError': 'Aṣiṣe olupin', 'error.networkError': 'Aṣiṣe nẹtiwọọki', 'error.unauthorized': 'Ko ni aṣẹ', 'error.goHome': 'Lọ si ile', 'error.tryAgain': 'Gbiyanju lẹẹkansi'
  }
};