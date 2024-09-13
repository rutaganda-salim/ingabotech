import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react'; // Import the icons
import 'boxicons';

const SubscriptionSection = () => {
    return (
        <div className="bg-[#00FF80] text-center pt-10">
            <h1 className="text-3xl font-bold mb-4">Manage your IT projects and save time</h1>
            <p className="text-gray-800 mb-8">
                Subscribe to our newsletter and stay updated with the latest trends in software development and IT consultancy from Ingabo Tech.
            </p>

            <div className="flex justify-center">
                <form action="">
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="rounded-full px-6 py-6 mr-2 w-80 outline-none"
                    />
                    <button className="bg-black text-white rounded-full px-8 py-4 ml-4 hover:bg-gray-900">
                        Subscribe
                    </button>
                </form>
            </div>

            <footer className="bg-[#071119] mt-10 text-white py-8">
                <div className="flex justify-center mb-6">
                    <a href="#home" className="text-[#00FF80] text-2xl font-bold">Ingabo Tech</a>
                </div>

                {/* Grid Layout for Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-xl">
                            <li><a href="#home" className="hover:text-[#00FF80]">Home</a></li>
                            <li><a href="#services" className="hover:text-[#00FF80]">Services</a></li>
                            <li><a href="#about" className="hover:text-[#00FF80]">About Us</a></li>
                            <li><a href="#blog" className="hover:text-[#00FF80]">Contact</a></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                        <p className="text-xl text-gray-400">
                            <MapPin className="inline-block mr-2" /> KG 31 Ave, Kigali, Rwanda <br />
                            <Phone className="inline-block mr-2" /> +250 788 708 389 <br />
                            <Mail className="inline-block mr-2" /> info@ingabotech.com
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400 text-xl">
                            <li>Software Development</li>
                            <li>IT Consulting</li>
                            <li>Project Management</li>
                            <li>Support & Maintenance</li>
                        </ul>
                    </div>

                    {/* Connect with Us */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://wa.me/250788708389" target="_blank" rel="noopener noreferrer">
                                <box-icon type='logo' name='whatsapp' color="#00FF80" size="md"></box-icon>
                            </a>
                            <a href="https://www.instagram.com/ingabotech?igsh=OWtpOWtlYmc2ZDdym" target="_blank" rel="noopener noreferrer">
                                <box-icon name='instagram' type='logo' color="#00FF80" size="md" ></box-icon>
                            </a>
                            <a href="https://www.linkedin.com/company/ingabotech/" target="_blank" rel="noopener noreferrer">
                                <box-icon type='logo' name='linkedin-square' color="#00FF80" size="md"></box-icon>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2024 Ingabo Tech | All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default SubscriptionSection;
