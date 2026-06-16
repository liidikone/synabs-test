'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What exactly does "evolving" mean?',
    answer: "Our AI agents continuously learn from every conversation. They analyze what works, identify patterns that lead to conversions, and automatically update their responses — getting smarter every week without manual tuning.",
  },
  {
    question: 'How is Synabs different from a regular chatbot?',
    answer: "Regular chatbots answer questions. Synabs agents qualify leads, book meetings, detect buying intent, and improve over time based on real conversion data. They're built to drive revenue, not just respond.",
  },
  {
    question: 'How does the Cortex Engine work?',
    answer: "The Cortex Engine analyzes intent, context, sentiment, and customer behavior in real time. It benchmarks conversation outcomes, identifies what works and what doesn't, and deploys targeted improvements designed to increase lead quality and conversion rates.",
  },
  {
    question: 'How long does it take to get started?',
    answer: "Just 2 minutes. Paste one line of code into your website and your AI agent goes live instantly. We can also help you set it up if you prefer.",
  },
  {
    question: 'Can I see how the AI is performing?',
    answer: "Yes. You receive clear monthly summaries of conversations, captured leads, and agent insights, so you can track ROI with confidence.",
  },
  {
    question: 'What happens if the AI gives incorrect information?',
    answer: "The Cortex Engine continuously monitors for failures and deploys corrections. You can also set guardrails and review conversation logs at any time.",
  },
  {
    question: 'What CRM integrations are available?',
    answer: "We integrate with any CRM via Zapier, including HubSpot, Salesforce, Pipedrive, and more. Custom integrations are also available.",
  },
  {
    question: 'What happens after 5,000 messages?',
    answer: "Additional messages are charged at €0.06 per message. You'll never be cut off mid-conversation.",
  },
  {
    question: 'Is my data shared with other customers?',
    answer: "Never. Your data is isolated and encrypted. We never share conversation data between customers.",
  },
  {
    question: 'Is Synabs GDPR compliant?',
    answer: "Yes. We are fully GDPR compliant and host all data within the EU.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 glass-red rounded-full mb-4">
            <span className="text-sm font-medium text-synabs-red">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            Frequently asked<br />
            <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-display font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-synabs-red flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
