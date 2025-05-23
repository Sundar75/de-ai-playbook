import Link from 'next/link';
import Layout from '../components/Layout';

const phases = [
  {
    name: 'Phase 1',
    title: 'Data Engineering Fundamentals & Tool Awareness',
    description: 'Learn the essential tools and concepts in data engineering.',
    href: '/phase-1',
  },
  {
    name: 'Phase 2',
    title: 'Advanced Data Engineering',
    description: 'Master advanced concepts and specialized tools.',
    href: '/phase-2',
  },
  {
    name: 'Phase 3',
    title: 'Production & Operations',
    description: 'Learn about production deployment and operations.',
    href: '/phase-3',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data Engineering Playbook
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A comprehensive guide to mastering data engineering concepts, tools, and best practices.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {phases.map((phase) => (
                <div key={phase.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <Link href={phase.href} className="hover:text-primary-600">
                      {phase.name}
                    </Link>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{phase.title}</p>
                    <p className="mt-6">
                      <Link
                        href={phase.href}
                        className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Getting Started
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Follow these steps to begin your data engineering journey:
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <ol className="space-y-4 text-base leading-7 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    1
                  </span>
                  Begin with Phase 1 to build your foundation
                </li>
                <li className="flex gap-x-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    2
                  </span>
                  Progress through each phase sequentially
                </li>
                <li className="flex gap-x-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    3
                  </span>
                  Complete hands-on exercises in each section
                </li>
                <li className="flex gap-x-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    4
                  </span>
                  Build a portfolio project
                </li>
                <li className="flex gap-x-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    5
                  </span>
                  Get certified in key tools
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 