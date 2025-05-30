import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-zinc-50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-zinc-500 to-gray-900 text-transparent bg-clip-text mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our tree and palm trimming services.
            </p>
          </div>
        </ScrollAnimationWrapper>
        
        <div className="max-w-3xl mx-auto">
          <ScrollAnimationWrapper delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              <ScrollAnimationWrapper delay={0.15}>
                <AccordionItem value="item-1" className="!border-b border-zinc-300/50">
                  <AccordionTrigger className="text-left font-medium cursor-pointer">
                    What areas do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We proudly serve the entire Rio Grande Valley, including Edinburg, McAllen, Mission, Pharr, San Juan, and surrounding areas. If you're unsure if we cover your location, please contact us directly.
                </AccordionContent>
              </AccordionItem>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={0.2}>
              <AccordionItem value="item-2" className="!border-b border-zinc-300/50">
                <AccordionTrigger className="text-left font-medium cursor-pointer">
                  How often should I schedule tree trimming?
                </AccordionTrigger>
                <AccordionContent>
                  For most residential properties in the Rio Grande Valley, we recommend yearly tree trimming, during the growing season (spring through fall). However, this can vary based on your specific lawn type, irrigation system, and personal preferences.
                </AccordionContent>
              </AccordionItem>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={0.25}>
              <AccordionItem value="item-3" className="!border-b border-zinc-300/50">
                <AccordionTrigger className="text-left font-medium cursor-pointer">
                  Do you offer tree trimming services?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive tree trimming and maintenance services. Our experienced team can handle everything from routine pruning to more complex trimming needs for both aesthetic purposes and tree health.
                </AccordionContent>
              </AccordionItem>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={0.3}>
              <AccordionItem value="item-4" className="!border-b border-zinc-300/50">
                <AccordionTrigger className="text-left font-medium cursor-pointer">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept cash, and virtual payments through Cash App. For recurring services, we can also set up convenient automatic payment options.
                </AccordionContent>
              </AccordionItem>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={0.35}>
              <AccordionItem value="item-5" className="!border-b border-zinc-300/50">
                <AccordionTrigger className="text-left font-medium cursor-pointer">
                  Do you offer free estimates?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide free estimates for all our services. Contact us by phone or through our website to schedule an assessment of your property and receive a detailed quote.
                </AccordionContent>
              </AccordionItem>
              </ScrollAnimationWrapper>              
              <ScrollAnimationWrapper delay={0.4}>
              <AccordionItem value="item-6" className="!border-b border-zinc-300/50">
                <AccordionTrigger className="text-left font-medium cursor-pointer">
                  How can I get started with your services?
                </AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Simply contact us by phone or through our website. We'll schedule a convenient time to visit your property, discuss your needs, and provide a free estimate. Once you approve, we can begin service as soon as possible.
                </AccordionContent>
              </AccordionItem>
              </ScrollAnimationWrapper>
            </Accordion>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;