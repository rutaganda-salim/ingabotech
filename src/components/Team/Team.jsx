import React from 'react';

// Team members data with LinkedIn profiles
const teamMembers = [
    {
        name: 'Brian Nkongori',
        role: 'CEO & Project Manager',
        image: '/teambrian.jpg',
        linkedIn: 'https://www.linkedin.com/in/brian-nkongori/',
    },
    {
        name: 'Jean Victor',
        role: 'Technical Advisor',
        image: 'https://media.licdn.com/dms/image/v2/C5603AQHS_KKrxDFYXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1634020618916?e=1731542400&v=beta&t=pHMAx3r-jsQQC0-KiBiSHIxhZm0-31i7XITrv8hV6kQ',
        linkedIn: 'https://www.linkedin.com/in/jean-victor-b-71266741/',
    },
    {
        name: 'Francis Munyaneza',
        role: 'Finance Manager',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQHeDXPbrXAwnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588490551169?e=1731542400&v=beta&t=cKg4bAv6rCRPgaDrLvUhgQ3KabNpfrn-lrcyjlQHbXc',
        linkedIn: 'https://www.linkedin.com/in/francis-munyaneza-9036ab1a6/',
    },
    {
        name: 'Salim Rutaganda',
        role: 'Full Stack Web and Mobile Developer',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQG24Elq_ba9BQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725481217065?e=1731542400&v=beta&t=m1nIka2O22uhFe-l0KNwU76D2vRi9YcptHWa7etU4q4',
        linkedIn: 'https://www.linkedin.com/in/salimrutaganda',
    },
    {
        name: 'Tom Amundala',
        role: 'Full Stack Developer',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFbhgV-AzhdDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713180282294?e=1733356800&v=beta&t=aIXXKvFvGXHIpJ2Qy76_uHbtHJP2kllVn9kSa8Fqsa8',
        linkedIn: 'https://www.linkedin.com/in/tom-amundala',
    },
    {
        name: 'Umutoni Kanamugire',
        role: 'Social Media Manager',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHI8ZjRAHSCKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712057856134?e=1733356800&v=beta&t=hjnoyNhHbrThhsvOp0d3Vlif4tezuw4puM5U_DgUUSA',
        linkedIn: 'https://www.linkedin.com/in/umutoni-kanamugire',
    },
];

export default function TeamSection() {
    return (
        <section id='team' className="bg-[#071119] py-12 px-4 md:py-16 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-center text-white">
                    Meet Our Team
                </h2>
                <p className="max-w-xl mx-auto mb-12 text-center text-gray-300">
                    Our team of skilled professionals is dedicated to delivering the best solutions tailored to your needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <a
                            key={index}
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center group relative p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0d1d2a] focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:ring-opacity-50"
                            aria-label={`View ${member.name}'s LinkedIn profile`}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-medium text-white group-hover:text-[#00ff99] transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {member.role}
                            </p>
                            <span className="sr-only">View LinkedIn profile</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}