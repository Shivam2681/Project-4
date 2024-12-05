"use client"
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const Feedback = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (sectionKey) => {
    if (expandedSections.includes(sectionKey)) {
      setExpandedSections(expandedSections.filter((key) => key !== sectionKey));
    } else {
      setExpandedSections([...expandedSections, sectionKey]);
    }
  };

  const sections = [
    {
      key: 'why-special',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
        <>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'special-attractions',
      title: 'Special Attractions at Anand Dham Ashram',
      content: (
        <>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'why-special-2',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
<>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'why-special-3',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
<>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'why-special-4',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
<>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'why-special-5',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
<>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'why-special-6',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
<>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    {
      key: 'why-special-7',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
<>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
          {/* Add more content for this section */}
        </>
      ),
    },
    // Add more sections as needed
  ];

  return (
    <div className="space-y-4 p-4 m-12 md:p-8">
      {sections.map((section) => (
        <div
          key={section.key}
          className={`bg-white ${
            expandedSections.includes(section.key)
              ? 'border-none'
              : 'border-t-2'
          }`}
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleSection(section.key)}
          >
            <h2 className="text-xl font-bold">{section.title}</h2>
            {expandedSections.includes(section.key) ? (
              <MinusIcon className="w-6 h-6 text-gray-500" />
            ) : (
              <PlusIcon className="w-6 h-6 text-gray-500" />
            )}
          </div>
          {expandedSections.includes(section.key) && (
            <div className="p-4 md:p-8">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feedback;