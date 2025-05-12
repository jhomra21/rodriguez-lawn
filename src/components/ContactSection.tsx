import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Phone, MapPin, User, Info } from 'lucide-react';
import { Label } from "./ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// WhatsApp Icon Component (from BusinessCard.tsx)
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className={className}>
    <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"/>
    <path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.79-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"/>
  </svg>
);

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-zinc-400 to-gray-900 text-transparent bg-clip-text mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help with all your lawn care and tree service needs. Reach out today!
            </p>
          </div>
        </ScrollAnimationWrapper>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          <ScrollAnimationWrapper delay={0.1}>
            <Card className="h-full shadow-sm border-0 overflow-hidden">
              <CardHeader className="border-b bg-white pb-6">
                <CardTitle className="text-lg font-medium text-green-600 flex items-center">
                  <Phone className="h-5 w-5 mr-2.5" /> 
                  <p className="text-zinc-700/80">Get in Touch </p> <p className="bg-gradient-to-br from-green-400 to-green-900 text-transparent bg-clip-text ml-1.5"> Directly</p>
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Call or message us for a quick response.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 pb-8 px-6 bg-white">
                <TooltipProvider delayDuration={100}>
                  <div className="space-y-6">
                    {/* Contact Item - Emilio */}
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-md bg-zinc-50 shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Emilio (Español)</h4>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a href="tel:+19563788069" className="text-base font-medium text-green-600 hover:text-green-700 transition-colors duration-200 block">
                              (956) 378-8069
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Tap to call Emilio</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a 
                              href="https://wa.me/19563788069" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 mt-1 transition-colors duration-200"
                            >
                              <WhatsAppIcon className="h-5 w-5 mr-1.5 bg-zinc-100 rounded-md p-0.5" /> WhatsApp Emilio
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Message Emilio on WhatsApp</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 w-full"></div>
                    
                    {/* Contact Item - Ever */}
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-md bg-zinc-50 shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Ever (English)</h4>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a href="tel:+19569297845" className="text-base font-medium text-green-600 hover:text-green-700 transition-colors duration-200 block">
                              (956) 929-7845
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Tap to call Ever</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a 
                              href="https://wa.me/19569297845" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 mt-1 transition-colors duration-200"
                            >
                              <WhatsAppIcon className="h-5 w-5 mr-1.5 bg-zinc-100 rounded-md p-0.5" /> WhatsApp Ever
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Message Ever on WhatsApp</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 w-full"></div>

                    {/* Contact Item - Service Area */}
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-md bg-zinc-50 shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Service Area</h4>
                        <p className="text-base text-gray-600">
                          Serving the Rio Grande Valley
                        </p>
                        <p className="text-sm text-gray-400 mt-1 italic">
                          Including Edinburg, McAllen, Mission, Pharr, San Juan, and surrounding areas
                        </p>
                      </div>
                    </div>
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.2}>
            <Card className="h-full shadow-sm border-0 overflow-hidden">
              <CardHeader className="border-b bg-white pb-6">
                <CardTitle className="text-lg font-medium text-green-600 flex items-center">
                  <Info className="h-5 w-5 mr-2.5" />
                  <p className="text-zinc-700/80">Request a </p> <p className="bg-gradient-to-br from-green-400 to-green-900 text-transparent bg-clip-text mx-1.5"> Free </p> <p className="text-zinc-700/80"> Estimate</p>
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Fill out the form below and we'll get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 pb-8 px-6 bg-white">
                <form className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      className="mt-1 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="(555) 123-4567" 
                      className="mt-1 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">Services Needed / Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      placeholder="Tell us about your project..." 
                      className="mt-1 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5"
                  >
                    Send Request
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 24 hours. For urgent requests, please call.
                  </p>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 