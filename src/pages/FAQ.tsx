
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
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
      answer: "We provide updates to donors about the impact of their contributions. While we protect recipient privacy, we share general information about how donations are helping people in our community regain independence and mobility."
    },
    {
      question: "Can organizations or businesses make bulk donations?",
      answer: "Yes! We welcome bulk donations from healthcare facilities, organizations, and businesses. Please contact us directly to discuss logistics for larger donations and any special arrangements that may be needed."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <HelpCircle className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Find answers to common questions about donating and receiving mobility aids
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-slate-100 pt-4">
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're here to help! Reach out to us anytime for personalized assistance.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
