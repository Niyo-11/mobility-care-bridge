
import { ExternalLink, CheckCircle, AlertCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Donate = () => {
  const donationProcess = [
    {
      step: '1',
      title: 'Fill Out Our Donation Form',
      description: 'Tell us about the mobility aid you\'d like to donate, including its condition and any repairs needed.',
      icon: Heart
    },
    {
      step: '2',
      title: 'Item Assessment',
      description: 'Our partner clinics and NGOs will assess the item to determine if it can be safely used or repaired.',
      icon: CheckCircle
    },
    {
      step: '3',
      title: 'Professional Repair',
      description: 'If needed, our skilled repair shop partners will restore the item to excellent working condition.',
      icon: AlertCircle
    },
    {
      step: '4',
      title: 'Connect with Someone in Need',
      description: 'We match the restored mobility aid with someone who needs it through our trusted partner network.',
      icon: Heart
    }
  ];

  const acceptedItems = [
    'Wheelchairs (manual and electric)',
    'Walking aids (canes, walkers, crutches)',
    'Foot supports and braces',
    'Mobility scooters',
    'Transfer boards and equipment',
    'Bath and shower safety equipment'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Donate Mobility Aids
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Your generous donation can transform someone's life. We accept both new and gently used 
            mobility aids, including items that need minor repairs.
          </p>
          
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
            <a 
              href="https://forms.google.com/mobility-donation-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Donate Now <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Donation Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How Your Donation Works
            </h2>
            <p className="text-xl text-slate-600">
              From your generous donation to someone regaining their independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">What We Accept</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {acceptedItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Your donation could be exactly what someone needs to regain their independence. 
            Start the process today.
          </p>
          
          <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4">
            <a 
              href="https://forms.google.com/mobility-donation-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Fill Out Donation Form <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <p className="text-emerald-100 mt-4 text-sm">
            Questions? <a href="/contact" className="underline hover:text-white">Contact us</a> anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;
