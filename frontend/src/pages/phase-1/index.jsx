import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';

const tools = [
  {
    name: 'Apache Airflow',
    description: 'Workflow Management',
    bestFor: 'Data Pipeline Orchestration',
    learningLink: 'https://airflow.apache.org/docs/',
    videoId: '4Spo2QRTz1k',
  },
  {
    name: 'Apache Spark',
    description: 'Distributed Computing',
    bestFor: 'Big Data Processing',
    learningLink: 'https://spark.apache.org/docs/latest/',
    videoId: '4Spo2QRTz1k',
  },
  {
    name: 'dbt',
    description: 'Data Build Tool',
    bestFor: 'Data Transformation',
    learningLink: 'https://docs.getdbt.com/',
    videoId: '4Spo2QRTz1k',
  },
  {
    name: 'Great Expectations',
    description: 'Data Quality',
    bestFor: 'Data Validation',
    learningLink: 'https://docs.greatexpectations.io/',
    videoId: '4Spo2QRTz1k',
  },
  {
    name: 'Apache Kafka',
    description: 'Stream Processing',
    bestFor: 'Real-time Data Pipelines',
    learningLink: 'https://kafka.apache.org/documentation/',
    videoId: '4Spo2QRTz1k',
  },
  {
    name: 'Snowflake',
    description: 'Cloud Data Warehouse',
    bestFor: 'Data Storage & Analytics',
    learningLink: 'https://docs.snowflake.com/',
    videoId: '4Spo2QRTz1k',
  },
];

const categories = [
  {
    name: 'Data Pipeline Development',
    primary: 'Apache Airflow',
    alternative: 'dbt',
    description: 'Best for orchestrating complex data workflows and transformations.',
  },
  {
    name: 'Data Processing',
    primary: 'Apache Spark',
    alternative: 'Kafka',
    description: 'Ideal for processing large-scale data and real-time streaming.',
  },
  {
    name: 'Data Quality',
    primary: 'Great Expectations',
    alternative: 'dbt tests',
    description: 'Perfect for ensuring data quality and validation.',
  },
  {
    name: 'Data Storage',
    primary: 'Snowflake',
    alternative: 'Data Lakes',
    description: 'Best for modern cloud data warehousing and analytics.',
  },
];

const aiTools = [
  {
    name: 'LangChain',
    description: 'Framework for LLM Applications',
    bestFor: 'Building AI-powered Data Pipelines',
    learningLink: 'https://python.langchain.com/docs/get_started/introduction',
    videoId: 'lG7Uxts9SXs',
  },
  {
    name: 'Hugging Face',
    description: 'AI Model Hub & Tools',
    bestFor: 'Model Deployment & Fine-tuning',
    learningLink: 'https://huggingface.co/docs',
    videoId: '7Pq-S557XQU',
  },
  {
    name: 'MLflow',
    description: 'ML Lifecycle Management',
    bestFor: 'Experiment Tracking & Model Registry',
    learningLink: 'https://mlflow.org/docs/latest/index.html',
    videoId: '1ykg4YmbF20',
  },
  {
    name: 'Weights & Biases',
    description: 'ML Experiment Tracking',
    bestFor: 'Model Monitoring & Visualization',
    learningLink: 'https://docs.wandb.ai/',
    videoId: '7_foSH9QZQY',
  },
  {
    name: 'Ray',
    description: 'Distributed Computing Framework',
    bestFor: 'Scaling ML Workloads',
    learningLink: 'https://docs.ray.io/en/latest/',
    videoId: 'D_ix8FmsR5o',
  },
  {
    name: 'TensorFlow Extended (TFX)',
    description: 'Production ML Pipeline Platform',
    bestFor: 'End-to-end ML Pipelines',
    learningLink: 'https://www.tensorflow.org/tfx',
    videoId: 'D_ix8FmsR5o',
  },
];

const aiCategories = [
  {
    name: 'LLM Integration',
    primary: 'LangChain',
    alternative: 'Hugging Face',
    description: 'Best for integrating large language models into data pipelines.',
  },
  {
    name: 'Model Management',
    primary: 'MLflow',
    alternative: 'Weights & Biases',
    description: 'Ideal for tracking experiments and managing model versions.',
  },
  {
    name: 'ML Infrastructure',
    primary: 'Ray',
    alternative: 'TFX',
    description: 'Perfect for scaling machine learning workloads.',
  },
  {
    name: 'Model Deployment',
    primary: 'Hugging Face',
    alternative: 'MLflow',
    description: 'Best for deploying and serving ML models.',
  },
];

const aiDevelopmentTools = [
  {
    name: 'GitHub Copilot',
    description: 'AI Pair Programming Assistant',
    bestFor: 'Code Generation & Documentation',
    learningLink: 'https://docs.github.com/en/copilot',
    videoId: 'D_ix8FmsR5o',
  },
  {
    name: 'Cursor',
    description: 'AI-Powered Code Editor',
    bestFor: 'Code Completion & Refactoring',
    learningLink: 'https://cursor.sh/docs',
    videoId: 'D_ix8FmsR5o',
  },
  {
    name: 'Codex',
    description: 'Code Generation Model',
    bestFor: 'Natural Language to Code',
    learningLink: 'https://openai.com/blog/openai-codex',
    videoId: 'D_ix8FmsR5o',
  },
  {
    name: 'Tabnine',
    description: 'AI Code Completion',
    bestFor: 'Real-time Code Suggestions',
    learningLink: 'https://www.tabnine.com/docs',
    videoId: 'D_ix8FmsR5o',
  },
];

const toolByDevelopmentType = [
  {
    name: 'Data Pipeline Development',
    tools: ['Apache Airflow', 'dbt', 'LangChain'],
    description: 'Tools for building and orchestrating data pipelines.',
  },
  {
    name: 'Data Processing',
    tools: ['Apache Spark', 'Ray', 'TensorFlow Extended'],
    description: 'Tools for processing and transforming data at scale.',
  },
  {
    name: 'Model Development',
    tools: ['Hugging Face', 'MLflow', 'Weights & Biases'],
    description: 'Tools for developing and training ML models.',
  },
  {
    name: 'Data Quality',
    tools: ['Great Expectations', 'dbt tests', 'MLflow'],
    description: 'Tools for ensuring data quality and validation.',
  },
];

const toolByProjectPhase = [
  {
    name: 'Development',
    tools: ['Cursor', 'GitHub Copilot', 'dbt'],
    description: 'Tools for initial development and prototyping.',
  },
  {
    name: 'Testing',
    tools: ['Great Expectations', 'MLflow', 'Weights & Biases'],
    description: 'Tools for testing and validation.',
  },
  {
    name: 'Deployment',
    tools: ['Apache Airflow', 'Hugging Face', 'TFX'],
    description: 'Tools for deploying to production.',
  },
  {
    name: 'Monitoring',
    tools: ['MLflow', 'Weights & Biases', 'Ray'],
    description: 'Tools for monitoring and maintenance.',
  },
];

const toolByTeamSize = [
  {
    name: 'Small Team (1-5)',
    tools: ['dbt', 'Great Expectations', 'Cursor'],
    description: 'Tools that are easy to set up and maintain.',
  },
  {
    name: 'Medium Team (6-20)',
    tools: ['Apache Airflow', 'MLflow', 'GitHub Copilot'],
    description: 'Tools that support collaboration and scaling.',
  },
  {
    name: 'Large Team (20+)',
    tools: ['Apache Spark', 'Ray', 'TFX'],
    description: 'Tools that support enterprise-scale operations.',
  },
];

const toolByLearningCurve = [
  {
    name: 'Beginner Friendly',
    tools: ['dbt', 'Cursor', 'GitHub Copilot'],
    description: 'Tools with gentle learning curves and good documentation.',
  },
  {
    name: 'Intermediate',
    tools: ['Apache Airflow', 'MLflow', 'Hugging Face'],
    description: 'Tools requiring some prior knowledge and experience.',
  },
  {
    name: 'Advanced',
    tools: ['Apache Spark', 'Ray', 'TFX'],
    description: 'Tools requiring significant expertise and experience.',
  },
];

export default function Phase1() {
  const [selectedCategory, setSelectedCategory] = useState('Data Pipeline Development');
  const [selectedAICategory, setSelectedAICategory] = useState('LLM Integration');
  const [selectedDevType, setSelectedDevType] = useState('Data Pipeline Development');
  const [selectedProjectPhase, setSelectedProjectPhase] = useState('Development');
  const [selectedTeamSize, setSelectedTeamSize] = useState('Small Team (1-5)');
  const [selectedLearningCurve, setSelectedLearningCurve] = useState('Beginner Friendly');
  const [showDevTypeDetails, setShowDevTypeDetails] = useState(false);
  const [showProjectPhaseDetails, setShowProjectPhaseDetails] = useState(false);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Phase 1 – Data Engineering Fundamentals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore the essential tools and concepts in data engineering.
            </p>
          </div>

          {/* Tools Table */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Essential Tools</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Learning Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tools.map((tool) => (
                    <tr key={tool.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{tool.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tool.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tool.bestFor}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <a href={tool.learningLink} className="text-primary-600 hover:text-primary-500">
                          Documentation
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Featured Tool */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Tool: Apache Airflow</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/4Spo2QRTz1k"
                title="Apache Airflow Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* Tool Selection Guide */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">When to Use Each Tool</h2>
            
            {/* Development Type Cards */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">By Development Type</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {toolByDevelopmentType.map((type) => (
                  <div
                    key={type.name}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{type.name}</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-medium text-primary-600 mb-2">Primary Choice</h5>
                          <p className="text-sm text-gray-600">{type.tools[0]}</p>
                          <p className="mt-2 text-sm text-gray-500">{type.description}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">Alternative</h5>
                          <p className="text-sm text-gray-600">{type.tools[1]}</p>
                          <p className="mt-2 text-sm text-gray-500">
                            {type.name === 'Data Pipeline Development' 
                              ? 'Great for simpler data transformations and SQL-based workflows.'
                              : type.name === 'Data Processing'
                              ? 'Best for real-time data processing and streaming applications.'
                              : type.name === 'Model Development'
                              ? 'Excellent for experiment tracking and model versioning.'
                              : 'Perfect for automated data quality checks and validation.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Phase Cards */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">By Project Phase</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {toolByProjectPhase.map((phase) => (
                  <div
                    key={phase.name}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{phase.name}</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-medium text-primary-600 mb-2">Primary Choice</h5>
                          <p className="text-sm text-gray-600">{phase.tools[0]}</p>
                          <p className="mt-2 text-sm text-gray-500">{phase.description}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">Alternative</h5>
                          <p className="text-sm text-gray-600">{phase.tools[1]}</p>
                          <p className="mt-2 text-sm text-gray-500">
                            {phase.name === 'Development'
                              ? 'Great for rapid prototyping and initial development.'
                              : phase.name === 'Testing'
                              ? 'Excellent for comprehensive testing and validation.'
                              : phase.name === 'Deployment'
                              ? 'Best for production deployment and scaling.'
                              : 'Perfect for monitoring and maintaining production systems.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Size Cards */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">By Team Size</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {toolByTeamSize.map((size) => (
                  <div
                    key={size.name}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{size.name}</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-medium text-primary-600 mb-2">Primary Choice</h5>
                          <p className="text-sm text-gray-600">{size.tools[0]}</p>
                          <p className="mt-2 text-sm text-gray-500">{size.description}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">Alternative</h5>
                          <p className="text-sm text-gray-600">{size.tools[1]}</p>
                          <p className="mt-2 text-sm text-gray-500">
                            {size.name === 'Small Team (1-5)'
                              ? 'Great for teams focusing on rapid development and iteration.'
                              : size.name === 'Medium Team (6-20)'
                              ? 'Excellent for teams requiring collaboration and standardization.'
                              : 'Best for teams needing enterprise-grade features and scalability.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Curve Cards */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">By Learning Curve</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {toolByLearningCurve.map((curve) => (
                  <div
                    key={curve.name}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{curve.name}</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-medium text-primary-600 mb-2">Primary Choice</h5>
                          <p className="text-sm text-gray-600">{curve.tools[0]}</p>
                          <p className="mt-2 text-sm text-gray-500">{curve.description}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">Alternative</h5>
                          <p className="text-sm text-gray-600">{curve.tools[1]}</p>
                          <p className="mt-2 text-sm text-gray-500">
                            {curve.name === 'Beginner Friendly'
                              ? 'Great for those new to data engineering and AI tools.'
                              : curve.name === 'Intermediate'
                              ? 'Excellent for teams with some experience in data engineering.'
                              : 'Best for experienced teams working on complex data systems.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Tools Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">AI Tools for Data Engineering</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Learning Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {aiTools.map((tool) => (
                    <tr key={tool.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{tool.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tool.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tool.bestFor}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <a href={tool.learningLink} className="text-primary-600 hover:text-primary-500">
                          Documentation
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Featured AI Tool */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured AI Tool: LangChain</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/lG7Uxts9SXs"
                title="LangChain Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* AI Tool Selection Guide */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">When to Use Each AI Tool</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aiCategories.map((category) => (
                <div
                  key={category.name}
                  className={`rounded-lg p-6 ${
                    selectedAICategory === category.name
                      ? 'bg-primary-50 ring-2 ring-primary-600'
                      : 'bg-gray-50'
                  }`}
                  onClick={() => setSelectedAICategory(category.name)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-primary-600">Primary Choice</h4>
                    <p className="mt-1 text-sm text-gray-500">{category.primary}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-600">Alternative</h4>
                    <p className="mt-1 text-sm text-gray-500">{category.alternative}</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Assisted Development Tools */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">AI-Assisted Development Tools</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Learning Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {aiDevelopmentTools.map((tool) => (
                    <tr key={tool.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{tool.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tool.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tool.bestFor}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <a href={tool.learningLink} className="text-primary-600 hover:text-primary-500">
                          Documentation
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 