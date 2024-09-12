import React from 'react';
import 'boxicons';

// Team members data with LinkedIn profiles
const teamMembers = [
    {
        name: 'Brian Nkongori',
        role: 'CEO & Project Manager',
        image: '/teambrian.jpg',
        description: 'Brian leads the team and manages projects with strategic vision and precision.',
        linkedIn: 'https://www.linkedin.com/in/brian-nkongori/',
    },
    {
        name: 'Jean Victor',
        role: 'Technical Advisor',
        image: 'https://media.licdn.com/dms/image/v2/C5603AQHS_KKrxDFYXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1634020618916?e=1731542400&v=beta&t=pHMAx3r-jsQQC0-KiBiSHIxhZm0-31i7XITrv8hV6kQ',
        description: 'Jean provides expert technical guidance to enhance our solutions.',
        linkedIn: 'https://www.linkedin.com/in/jean-victor-b-71266741/',
    },
    {
        name: 'Francis Munyaneza',
        role: 'Finance Manager',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQHeDXPbrXAwnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588490551169?e=1731542400&v=beta&t=cKg4bAv6rCRPgaDrLvUhgQ3KabNpfrn-lrcyjlQHbXc',
        description: 'Francis oversees financial planning, ensuring sustainable growth.',
        linkedIn: 'https://www.linkedin.com/in/francis-munyaneza-9036ab1a6/',
    },
    {
        name: 'Salim Rutaganda',
        role: 'Full Stack Web and Mobile Developer',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQG24Elq_ba9BQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725481217065?e=1731542400&v=beta&t=m1nIka2O22uhFe-l0KNwU76D2vRi9YcptHWa7etU4q4',
        description: 'Salim develops robust web and mobile applications from concept to deployment.',
        linkedIn: 'https://www.linkedin.com/in/salimrutaganda',
    },
];

const TeamSection = () => {
    return (
        <section id='team' className="bg-[#071119] py-12 px-4 md:py-16 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-center text-white">
                    Meet Our Team
                </h2>
                <p className="max-w-xl mx-auto mb-12 text-center text-gray-300">
                    Our team of skilled professionals is dedicated to delivering the best solutions tailored to your needs.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-medium text-white">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>
                            <p className="text-gray-300 mt-2">{member.description}</p>
                            <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-4 text-white hover:text-[#00ff99] transition-colors duration-300"
                            >
                                <span className="w-12 h-12 mr-2 text-white hover:text-[#00ff99]">
                                    <box-icon name='linkedin-square' type='logo' color='currentColor' size='md' />
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
