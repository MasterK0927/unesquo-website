'use client'
import "./index.css";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import WavyBackground from "@/components/WavyBackground";
import {
  GridContent,
  GridWrapper,
} from "@/components/GridContainer";
import CommitteeCard from "@/components/CommitteeCard";
import SecretariatCard from "@/components/SecretariatCard";
import ScheduleDay from "@/components/ScheduleDay";
import { committees, secretariat, schedule, partners } from "@/data/munData";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  const committeesRef = useRef<(HTMLElement | null)[]>([]);
  const secretariatRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [...committeesRef.current, ...secretariatRef.current].forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <WavyBackground />
      <Header />

      {/* Hero Section */}
      <Section>
        <GridWrapper>
          <GridContent className="!mt-0 !mb-0">
            <div className="article-full-width text-center flex flex-col items-center py-20">
              <h1 className="font-display font-semibold fluid-title mb-8">
                <span className="block bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                  BITMUN
                </span>
                <span className="block text-foreground">2025</span>
              </h1>
              <p className="text-muted-foreground text-[1.125rem] md:text-[1.5rem] leading-relaxed max-w-[60ch] mb-12">
                Join us for three days of diplomatic excellence, global discourse, and youth leadership.
                Where tomorrow's leaders debate today's challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Register Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Committees
                </Button>
              </div>
              <div className="mt-16 flex gap-12 text-center">
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Delegates</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-secondary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Committees</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* About Section */}
      <Section id="about">
        <GridWrapper>
          <GridContent>
            <div className="article-hero">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
                About the Conference
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  BITMUN 2025 brings together exceptional young minds from across the nation to engage in
                  meaningful dialogue on pressing global issues. As one of India's premier Model United Nations
                  conferences, we provide a platform for delegates to develop diplomatic skills, critical thinking,
                  and cross-cultural understanding.
                </p>
                <p>
                  Through intensive committee sessions, crisis simulations, and networking opportunities, delegates
                  will experience the complexity of international relations firsthand. Our conference emphasizes
                  substantive debate, collaborative problem-solving, and the development of practical solutions to
                  real-world challenges.
                </p>
                <p className="text-foreground font-medium">
                  January 18-19, 2025 | BIT Mesra, Ranchi
                </p>
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Video Section */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="article-full-width mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                BITMUN 2024
              </h2>
              <p className="text-xl text-muted-foreground max-w-[60ch] mb-8">
                Relive the highlights from last year's conference.
              </p>
            </div>
            <div className="article-full-width">
              <VideoSection />
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Committees Section */}
      <Section id="committees">
        <GridWrapper>
          <GridContent>
            <div className="article-full-width mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Committees
              </h2>
              <p className="text-xl text-muted-foreground max-w-[60ch]">
                Choose from six diverse committees spanning international security, human rights,
                environmental policy, and global health.
              </p>
            </div>
            <div className="article-full-width">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {committees.map((committee, index) => (
                  <div
                    key={index}
                    ref={(el) => (committeesRef.current[index] = el)}
                    className="blog-feed__item"
                    style={{
                      animationDelay: `${(index % 2) * 150}ms`,
                    }}
                  >
                    <CommitteeCard {...committee} />
                  </div>
                ))}
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Secretariat Section */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="article-full-width mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Executive Board
              </h2>
              <p className="text-xl text-muted-foreground max-w-[60ch]">
                Meet the experienced team leading VITMUN 2025.
              </p>
            </div>
            <div className="article-full-width">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {secretariat.map((member, index) => (
                  <div
                    key={index}
                    ref={(el) => (secretariatRef.current[index] = el)}
                    className="blog-feed__item"
                    style={{
                      animationDelay: `${(index % 4) * 100}ms`,
                    }}
                  >
                    <SecretariatCard {...member} />
                  </div>
                ))}
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Schedule Section */}
      <Section id="schedule">
        <GridWrapper>
          <GridContent>
            <div className="article-full-width mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Conference Schedule
              </h2>
              <p className="text-xl text-muted-foreground max-w-[60ch]">
                Three days of intensive debate, networking, and diplomatic engagement.
              </p>
            </div>
            <div className="article-full-width">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {schedule.map((day, index) => (
                  <ScheduleDay key={index} {...day} />
                ))}
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Registration CTA */}
      <Section id="register">
        <GridWrapper>
          <GridContent>
            <div className="article-hero">
              <div className="bg-gradient-to-r from-accent/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Ready to Make Your Mark?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-[50ch] mx-auto">
                  Registration opens January 15, 2025. Limited seats available across all committees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Early Bird Registration
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Venue Section */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="article-hero">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
                Venue
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p className="text-2xl font-medium text-foreground">
                  BIT Mesra, Ranchi
                </p>
                <p>
                  State-of-the-art conference facilities in one of India's premier technological institutions.
                  Modern committee rooms, multimedia equipment, and comfortable delegate spaces ensure an
                  exceptional conference experience.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">How to Reach:</p>
                  <ul className="space-y-2 text-base">
                    <li>✈️ Nearest Airport: Birsa Munda Airport, Ranchi (20 km)</li>
                    <li>🚂 Nearest Railway: Ranchi Railway Station (16 km)</li>
                    <li>🚌 Direct buses from Patna, Kolkata, and nearby cities</li>
                  </ul>
                </div>
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Partners Section */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="article-full-width">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 text-center">
                Our Partners
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{partner.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Contact Section */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="article-hero">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">General Inquiries</h3>
                    <p className="text-muted-foreground">info@bitmun.org</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Registration Support</h3>
                    <p className="text-muted-foreground">registrations@bitmun.org</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">Coming soon</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Follow Us</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">Instagram: @bitmun_bitmesra</p>
                      <p className="text-muted-foreground">LinkedIn: BITMUN BIT Mesra</p>
                      <p className="text-muted-foreground">Twitter: @bitmun</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="article-grid py-12">
          <div className="article-hero text-center text-sm text-muted-foreground">
            <p>© 2025 BITMUN. Empowering youth through diplomacy and dialogue.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;