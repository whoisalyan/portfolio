import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/xeozzawj", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">Aliyan Abbasi</h1>
          <p className="text-lg text-gray-300">
            Data Solutions Engineer | Python, SQL, Scalable Systems
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/thesoftwaredeveloper" target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><Github className="mr-2 h-4 w-4" />GitHub</Button>
            </a>
            <a href="https://linkedin.com/in/thesoftwaredeveloper" target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</Button>
            </a>
          </div>
        </header>

        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <Card className="bg-gray-800">
            <CardContent className="p-6 text-gray-200">
              <p>
                I’m a Data Solutions Engineer focused on building scalable systems to tackle enterprise-level data challenges in finance and tech. I specialize in Python and SQL, with hands-on experience designing ETL pipelines, automating CRM systems, and integrating with platforms like Vtiger and Salesforce.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Python (Automation, APIs, Data Engineering)</li>
            <li>SQL (Query Optimization, Relational DBs)</li>
            <li>CRM Integrations (Vtiger, Salesforce)</li>
            <li>ETL Pipelines & Data Workflows</li>
            <li>System Design & Scalability</li>
          </ul>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>
          <Card className="mb-4 bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white">CRM Deduplication System</h3>
              <p className="text-gray-300 mt-2">
                Designed and implemented a scalable Python-based system to deduplicate 5M+ records in Vtiger using fuzzy logic, preserving critical data integrity across accounts and contacts.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white">Email Engagement Insights</h3>
              <p className="text-gray-300 mt-2">
                Integrated with SendX API and developed a recipient-level tracking system for clicks and opens, aligning with ETL systems and analytics dashboards.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              {submitted ? (
                <p className="text-green-400">Thanks! Your message has been sent.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-900 text-white shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-900 text-white shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-900 text-white shadow-sm p-2"
                    ></textarea>
                  </div>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
