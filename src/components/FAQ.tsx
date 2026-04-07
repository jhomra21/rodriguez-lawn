import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "What areas do you serve?",
    answer: "We proudly serve the entire Rio Grande Valley, including Edinburg, McAllen, Mission, Pharr, San Juan, and surrounding areas. If you're unsure if we cover your location, please contact us directly.",
  },
  {
    value: "item-2",
    question: "How often should I schedule tree trimming?",
    answer: "For most residential properties in the Rio Grande Valley, we recommend yearly tree trimming, during the growing season (spring through fall). However, this can vary based on your specific lawn type, irrigation system, and personal preferences.",
  },
  {
    value: "item-3",
    question: "Do you offer tree trimming services?",
    answer: "Yes, we provide comprehensive tree trimming and maintenance services. Our experienced team can handle everything from routine pruning to more complex trimming needs for both aesthetic purposes and tree health.",
  },
  {
    value: "item-4",
    question: "What payment methods do you accept?",
    answer: "We accept cash, and virtual payments through Cash App. For recurring services, we can also set up convenient automatic payment options.",
  },
  {
    value: "item-5",
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free estimates for all our services. Contact us by phone or through our website to schedule an assessment of your property and receive a detailed quote.",
  },
  {
    value: "item-6",
    question: "How can I get started with your services?",
    answer: "Getting started is easy! Simply contact us by phone or through our website. We'll schedule a convenient time to visit your property, discuss your needs, and provide a free estimate. Once you approve, we can begin service as soon as possible.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-zinc-500 to-gray-900 text-transparent bg-clip-text mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tree and palm trimming services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="!border-b border-zinc-300/50">
                <AccordionTrigger className="text-left font-medium cursor-pointer">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
