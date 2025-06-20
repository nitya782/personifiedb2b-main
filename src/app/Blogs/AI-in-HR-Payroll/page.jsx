"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Lownav from "../../../components/Lownav";
import Upnav from "../../../components/Upnav";
import Footer from "../../../components/Footer";

const Blog3 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(5).fill(false));
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach((section, index) => {
      section.setAttribute('data-index', index);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const shareOnLinkedIn = () => {
    const title = "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype";
    const summary = "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.";
    const source = "Compare Bazaar";

    const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
    shareUrl.searchParams.append("url", currentUrl);
    shareUrl.searchParams.append("title", title);
    shareUrl.searchParams.append("summary", summary);
    shareUrl.searchParams.append("source", source);

    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      shareUrl.toString(),
      'LinkedInShare',
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no`
    );
  };

  const shareContent = async () => {
    const title = "How Comparison Quotes, Reviews, and Articles Help a Tech Buyer's Journey";
    const text = "Making smart decisions in a noisy digital marketplace";
    
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: currentUrl,
        });
      } else {
        shareOnLinkedIn();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Reset error state
    setError("");
    
    // Validate email
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }
    
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a");
    formData.append("subject", "New Blog Subscription - AI in HR & Payroll");
    formData.append("from_name", "Compare Bazaar Blog");
    formData.append("message", `New subscriber from AI in HR & Payroll blog post: ${email.trim()}`);
    formData.append("email", email.trim());
    formData.append("reply_to", email.trim());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubscribed(true);
        setEmail("");
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        throw new Error(result.message || "Subscription failed");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Upnav />
      <Lownav />
      <Head>
        <title>AI in HR & Payroll: How Artificial Intelligence is Reshaping the Future of Work in 2025</title>
        <meta property="og:title" content="AI in HR & Payroll: How Artificial Intelligence is Reshaping the Future of Work in 2025" />
        <meta property="og:description" content="From manual tasks to strategic impact—AI is changing the way HR and payroll teams operate." />
        <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.webp" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Compare Bazaar" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="max-w-4xl mx-auto px-5 py-16 bg-white rounded-lg mt-30 mb-16">
        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              AI in HR & Payroll: How Artificial Intelligence is Reshaping the Future of Work in 2025
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <span>Published on June 1, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <img
              src="/images/capital.jpg"
              alt="AI in HR & Payroll"
              className="w-[800px] h-[250px] object-cover rounded-lg shadow mb-6"
            />
            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-700 bg-gray-100 py-2 mb-6">
              From manual tasks to strategic impact—AI is changing the way HR and payroll teams operate.
            </blockquote>
          </header>

          <section className="prose prose-lg max-w-none text-gray-800">
            <p>
              HR and payroll teams are no longer just processing forms and paychecks—they are shaping the employee experience, enabling business agility, and driving strategic decisions.
            </p>
            <p>
              And in 2025, <b>AI is at the center of that transformation.</b>
            </p>
            <p>
              At Compare-Bazaar.com, we help businesses evaluate and compare the best HR and payroll solutions. And today, one thing is clear: <b>AI is no longer a futuristic add-on—it's a must-have feature built into the most competitive platforms.</b>
            </p>
            <p>
              So, what does that mean for your business?
            </p>
            <p>
              Let's break down how AI is truly reshaping HR and payroll management in 2025.
            </p>
            <br></br>
            <h2 className="text-2xl">1. AI-Powered Payroll Automation = Accuracy + Time Savings</h2>
            <ul>
              <li>Auto-detect discrepancies in hours, pay rates, or tax data</li>
              <li>Flag compliance risks before they happen</li>
              <li>Adapt to local and international payroll regulations</li>
              <li>Predict errors before payroll runs</li>
            </ul>
            <p>
              This means <b>fewer mistakes, less manual entry,</b> and <b>faster processing</b>—giving HR teams more time to focus on people, not paperwork.
            </p>

            <br></br>

            <h2 className="text-2xl">2. Smarter Hiring with AI-Driven Recruitment Tools</h2>
            <ul>
              <li>Scan resumes and match candidates to job descriptions in seconds</li>
              <li>Remove unconscious bias by focusing on skills, not keywords</li>
              <li>Predict candidate success using behavioral and historical data</li>
              <li>Automate interview scheduling and communication</li>
            </ul>
            <p>
              <b>Bonus benefit:</b> AI allows for more inclusive and diverse hiring pipelines—making recruitment both smarter and fairer.
            </p>

            <br></br>

            <h2 className="text-2xl">3. Real-Time Analytics for Workforce Planning</h2>
            <ul>
              <li>Real-time dashboards tracking employee engagement, performance, and retention</li>
              <li>Predictive analytics to forecast turnover or identify skill gaps</li>
              <li>Insights that help build smarter workforce development plans</li>
            </ul>
            <p>
              Managers don't just react—they anticipate. And AI makes that possible.
            </p>

            <br></br>

            <h2 className="text-2xl">4. Personalized Employee Experiences</h2>
            <ul>
              <li>Recommend relevant learning modules</li>
              <li>Suggest wellness programs based on usage trends</li>
              <li>Provide personalized support via intelligent chatbots</li>
            </ul>
            <p>
              The result? <b>Happier, more supported employees—and a stronger culture.</b>
            </p>

            <br></br>

            <h2 className="text-2xl">5. Enhanced Compliance and Risk Management</h2>
            <ul>
              <li>Automating audit trails</li>
              <li>Tracking policy changes and applying them in real-time</li>
              <li>Ensuring your business stays compliant—locally and globally</li>
            </ul>
            <p>
              No more scrambling to catch up. AI ensures you're always one step ahead.
            </p>

            <h2 className="text-xl">Final Thoughts: AI Doesn't Replace HR—It Reinvents It</h2>
            <p>
              In 2025, AI isn't taking jobs away from HR professionals—it's <b>making their jobs more impactful.</b>
              By handling the repetitive tasks, flagging issues early, and offering deeper insights, AI allows HR teams to focus on what truly matters: people, growth, and strategy.
            </p>
            <br></br>
            <h2>💡 Ready to Upgrade Your HR or Payroll System?</h2>
            <p>
              At <b>Compare-Bazaar.com,</b> we help businesses compare <b>AI-powered HR and payroll platforms</b>—side-by-side, with no obligation.
              <br />🔍 Browse features.<br />📊 See pricing.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
              <p className="font-bold text-lg text-gray-800 mb-3">
                ✅ Make the right choice—for your people and your business.
              </p>
              <p className="mb-4">
                Visit <a href="https://compare-bazaar.com" className="text-blue-600 hover:underline font-medium">Compare-Bazaar.com</a> or reach us at:
              </p>
              <ul>
                <li>Email: marketing@compare-bazaar.com</li>
                <li>Phone: +1 332-231-0404</li>
              </ul>
              <p className="mt-4 italic text-gray-600">
                Where smart choices start.
              </p>
            </div>
          </section>
        </article>

        {/* Subscribe Card - Enhanced and Fully Functional */}
        <div className="max-w-lg mx-auto px-6 py-12">
          <div className="bg-[#386861] p-9 rounded-3xl shadow-xl border border-[#1a3b36] hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-3xl font-extrabold text-center text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-center mb-8 leading-relaxed">
              Subscribe to the very latest B2B lead gen updates — only the best bits, none of the fluff!
            </p>

            {/* Success Message */}
            {subscribed && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
                <p className="font-semibold">🎉 Successfully Subscribed!</p>
                <p className="text-sm">Thank you for joining our community!</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-600 text-white rounded-lg text-center">
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubscribe} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading || subscribed}
                  className="w-full rounded-lg border border-[#375e58] bg-[#132926] px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading || subscribed}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#0E1F1C] font-bold py-3 rounded-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition transform hover:scale-[1.03] active:scale-95"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0E1F1C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : subscribed ? (
                  "✓ Subscribed!"
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-6 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-xl">
            <p className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share this article
            </p>

            <div className="flex gap-4">
              {/* LinkedIn Icon */}
              <div
                onClick={shareOnLinkedIn}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
                title="Share on LinkedIn"
              >
                <svg className="w-10 h-10 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </div>

              {/* Instagram Icon */}
              <div
                onClick={shareContent}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
                title="Share on Instagram"
              >
                <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>

              {/* Copy Link Icon */}
              <div
                onClick={copyToClipboard}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
                title={copied ? "Copied!" : "Copy Link"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-10 h-10 ${copied ? 'text-green-600' : 'text-gray-700'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default Blog3;