import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_EMAIL } from '@/constants/contact';

const FAQ = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is CareBridge?",
      answer: "CareBridge is a technology-enabled marketplace focused on safe, affordable mobility aids. We connect verified sellers and suppliers with buyers and healthcare-aligned partners—not a charity donation program."
    },
    {
      question: "How do I buy mobility aids?",
      answer: "Create an account, browse the marketplace by category, add items to your cart, and complete checkout. Availability and pricing are shown on each product listing from verified merchants."
    },
    {
      question: "How are sellers verified?",
      answer: "Merchants go through an application and review process. We prioritize partners who meet safety and quality expectations and who can support reliable fulfillment and customer communication."
    },
    {
      question: "What product categories are available?",
      answer: "Typical categories include wheelchairs, walking aids, prosthetics-related listings where applicable, orthotics, hearing aids, and daily living aids—subject to what verified merchants have listed."
    },
    {
      question: "How does shipping or delivery work?",
      answer: "Delivery options depend on the merchant and your location. Shipping fees and timelines are shown at checkout when applicable. For questions about a specific order, contact us with your order details."
    },
    {
      question: "What is your return or refund policy?",
      answer: "Policies can vary by merchant and product type. Review the listing and checkout terms, and contact support if you need help with a specific order."
    },
    {
      question: "How can my organization partner with CareBridge?",
      answer: "Clinics, logistics providers, and suppliers can start with the Become a Partner / merchant application flows. We will follow up on fit, coverage, and onboarding steps."
    },
    {
      question: "Is CareBridge a medical provider?",
      answer: "No. CareBridge is a marketplace and coordination platform. For medical advice or fitting, consult a licensed healthcare professional."
    },
    {
      question: "How do I contact support?",
      answer: `Use the Contact page or email ${CONTACT_EMAIL}. We aim to respond to email within 24 hours for general and order-related inquiries.`
    },
    {
      question: "Do you still accept charitable donations of equipment?",
      answer: "The product experience is oriented around verified commerce on the marketplace. If you have a large institutional or partnership inquiry, contact us and we can route it to the right team."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <HelpCircle className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-800 pr-8">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-slate-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-600" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Our team is here to help. Reach out to us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact support
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;