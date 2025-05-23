import Layout from '../../../components/Layout';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const concepts = [
  {
    title: 'Data Pipeline Architecture',
    description: 'Understanding the fundamental components and patterns of data pipelines.',
    href: '/phase-1/core-concepts/data-pipeline-architecture',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Data Modeling',
    description: 'Techniques and patterns for structuring and organizing data.',
    href: '/phase-1/core-concepts/data-modeling',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Data Quality',
    description: 'Ensuring data accuracy, completeness, and reliability.',
    href: '/phase-1/core-concepts/data-quality',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Data Governance',
    description: 'Managing data assets, policies, and compliance.',
    href: '/phase-1/core-concepts/data-governance',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Data Integration',
    description: 'Combining data from multiple sources into a unified view.',
    href: '/phase-1/core-concepts/data-integration',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Data Storage',
    description: 'Selecting and implementing appropriate storage solutions.',
    href: '/phase-1/core-concepts/data-storage',
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
  },
];

export default function CoreConceptsIndex() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data Engineering Core Concepts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Essential concepts and best practices for modern data engineering.
            </p>
          </div>

          {/* Main Video */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/4Spo2QRTz1k"
                title="Data Engineering Fundamentals"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Watch this comprehensive overview of Data Engineering Fundamentals
            </p>
          </div>

          {/* Concept Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <Link
                key={concept.title}
                href={concept.href}
                className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={concept.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{concept.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{concept.description}</p>
                  <div className="flex items-center text-primary-600 group-hover:text-primary-500">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 