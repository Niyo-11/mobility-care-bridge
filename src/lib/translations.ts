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
    'footer.mission': 'Connecting people with mobility needs to quality aids and support services across Nigeria and Rwanda.',
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
  }
};