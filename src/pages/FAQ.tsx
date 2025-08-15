import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
      question: "Can I donate used or slightly damaged mobility aids?",
      answer: "Absolutely! We accept both gently used and items that need minor repairs. Our network includes skilled repair shops that can restore mobility aids to excellent working condition. Common repairs we handle include wheel replacements, brake adjustments, padding replacement, and mechanical tune-ups."
    },
    {
      question: "Who receives the donated mobility aids?",
      answer: "Our partner NGOs and healthcare providers identify individuals and families who cannot afford mobility aids. Recipients are verified through our trusted network of clinics and community organizations to ensure aids reach those who need them most."
    },
    {
      question: "How are donated items verified and assessed?",
      answer: "Every donated item goes through a thorough assessment process by our healthcare partners. They check for safety, functionality, and determine what repairs (if any) are needed. Only items that meet our safety standards are distributed to recipients."
    },
    {
      question: "Is there a cost for people receiving mobility aids?",
      answer: "No, there is no cost to recipients. Our mission is to remove financial barriers to mobility aids. The entire process from donation to delivery is provided at no charge to those in need."
    },
    {
      question: "What types of mobility aids do you accept?",
      answer: "We accept wheelchairs (manual and electric), walking aids (canes, walkers, crutches), foot supports and braces, mobility scooters, transfer boards and equipment, and bath and shower safety equipment."
    },
    {
      question: "How long does the donation process take?",
      answer: "The timeline varies depending on the condition of the item and repair needs. Typically, items that don't need repairs can be distributed within 2-3 weeks. Items requiring repairs may take 4-6 weeks depending on the complexity of the work needed."
    },
    {
      question: "Can I specify who receives my donated item?",
      answer: "While we can't guarantee specific recipients due to privacy and fairness considerations, we ensure every item goes to someone who truly needs it through our verified partner network. We can provide general updates about the impact of your donation."
    },
    {
      question: "Do you provide pickup for donated items?",
      answer: "Pickup arrangements vary by location and item size. When you fill out our donation form, we'll work with you to determine the best way to collect your donation, whether through pickup or drop-off at a partner location."
    },
    {
      question: "How do I know my donation made a difference?",
      answer: "We believe in transparency and impact reporting. After your donated item is distributed, we'll send you updates about how it's being used and the difference it's making in someone's life. We respect privacy while still sharing the positive impact of your generosity."
    },
    {
      question: "Can I donate money instead of physical items?",
      answer: "Yes! Monetary donations help us cover repair costs, transportation, storage, and administrative expenses. Financial support is just as valuable as physical donations and helps us maintain our operations to serve more people in need."
    },
    {
      question: "What condition should items be in when I donate?",
      answer: "We accept items in various conditions, from gently used to those needing minor repairs. Items should be structurally sound and safe. Our partners can handle cleaning, minor repairs, and refurbishment, but items should not be severely damaged beyond repair."
    },
    {
      question: "How do you ensure donated items reach the right people?",
      answer: "We work exclusively with verified partner organizations including NGOs, healthcare providers, and community groups. These partners have established systems for identifying, verifying, and supporting individuals who genuinely need mobility aids."
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;