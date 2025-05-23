import { useState } from 'react';
import Layout from '../../../components/Layout';
import { BookOpenIcon, PlayCircleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    title: 'Overview',
    content: 'Data pipeline architecture is the foundation of any data engineering system. It defines how data flows from source systems through various processing stages to its final destination.',
  },
  {
    title: 'Key Components',
    items: [
      'Source Systems: Databases, APIs, file systems, and streaming sources',
      'Ingestion Layer: Data collection and initial validation',
      'Processing Layer: Data transformation and enrichment',
      'Storage Layer: Data warehouses, data lakes, and data marts',
      'Delivery Layer: Data serving and consumption',
    ],
  },
  {
    title: 'Best Practices',
    items: [
      'Design for scalability and maintainability',
      'Implement proper error handling and monitoring',
      'Ensure data quality and validation',
      'Document pipeline architecture and dependencies',
      'Use appropriate tools for each stage',
      'Implement proper security measures',
    ],
  },
];

const resources = {
  documentation: [
    { title: 'Apache Airflow Documentation', url: 'https://airflow.apache.org/docs/' },
    { title: 'Data Pipeline Design Patterns', url: 'https://www.databricks.com/glossary/data-pipeline' },
    { title: 'Data Pipeline Architecture Guide', url: 'https://www.databricks.com/glossary/data-pipeline-architecture' },
  ],
  videos: [
    { title: 'Data Pipeline Architecture Overview', videoId: '4Spo2QRTz1k' },
    { title: 'Building Scalable Data Pipelines', videoId: '4Spo2QRTz1k' },
  ],
};

export default function DataPipelineArchitecture() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data Pipeline Architecture
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Understanding the fundamental components and patterns of data pipelines.
            </p>
          </div>

          {/* Main Video */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/4Spo2QRTz1k"
                title="Data Pipeline Architecture Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="flex space-x-4 mb-8">
              {sections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => setActiveSection(section.title.toLowerCase())}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeSection === section.title.toLowerCase()
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className={activeSection === section.title.toLowerCase() ? 'block' : 'hidden'}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                  {section.content && <p className="text-gray-600 mb-4">{section.content}</p>}
                  {section.items && (
                    <ul className="list-disc list-inside space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mt-16 mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-2 text-primary-600" />
                  Documentation
                </h3>
                <ul className="space-y-3">
                  {resources.documentation.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-500 flex items-center"
                      >
                        <BookOpenIcon className="w-4 h-4 mr-2" />
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <PlayCircleIcon className="w-5 h-5 mr-2 text-primary-600" />
                  Video Tutorials
                </h3>
                <div className="space-y-4">
                  {resources.videos.map((video, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 