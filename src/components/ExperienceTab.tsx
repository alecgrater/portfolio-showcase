import React from 'react';
import experienceData from '../data/experience.json';
import { Building2, GraduationCap, MapPin, Calendar } from 'lucide-react';

const ExperienceTab: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <img
            src={experienceData.photo_url}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#2980B9]"
          />
          <h2 className="text-3xl font-bold text-[#2C3E50]">Alec Grater-Cafiero</h2>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6 flex items-center">
              <Building2 className="mr-2" /> Experience
            </h3>
            {experienceData.experience.map((exp) => (
              <div key={exp.company} className="mb-8">
                <h4 className="text-xl font-semibold text-[#2C3E50] mb-4">{exp.company}</h4>
                {exp.positions.map((position, index) => (
                  <div key={index} className="ml-4 mb-6 border-l-2 border-[#A9D8F7] pl-4">
                    <h5 className="font-medium text-[#2C3E50]">{position.title}</h5>
                    <div className="text-sm text-[#7F8C8D] mt-1 space-y-1">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" /> {position.location}
                      </p>
                      <p className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" /> {position.duration}
                      </p>
                    </div>
                    {position.responsibilities && (
                      <ul className="mt-3 list-disc list-inside text-[#7F8C8D]">
                        {position.responsibilities.map((resp, i) => (
                          <li key={i} className="ml-4">{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h3>
            {experienceData.education.map((edu) => (
              <div key={edu.school} className="ml-4 border-l-2 border-[#A9D8F7] pl-4">
                <h4 className="text-xl font-semibold text-[#2C3E50]">{edu.school}</h4>
                <p className="text-[#2C3E50]">{edu.degree} • {edu.field_of_study}</p>
                <p className="text-[#7F8C8D]">{edu.years_attended}</p>
                {edu.activities_and_societies && (
                  <div className="mt-3">
                    <p className="font-medium text-[#2C3E50]">Activities & Societies:</p>
                    <ul className="list-disc list-inside text-[#7F8C8D]">
                      {edu.activities_and_societies.map((activity, index) => (
                        <li key={index} className="ml-4">{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;