import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { CheckCircle, AlertCircle, Rocket, Target, Users, Clock, Brain, BookOpen, MessageCircle, Shield, TrendingUp, Calendar, Zap, DollarSign, Star, Zap as ZapIcon, AlertTriangle } from "lucide-react";

export default function SlideDeck() {
  const costData = [
    { name: "Low-Cost", Kosten: 1500, color: "#3b82f6" },
    { name: "Midrange", Kosten: 11000, color: "#10b981" },
    { name: "Ferrari", Kosten: 65000, color: "#8b5cf6" }
  ];

  const roadmapData = [
    { month: "Monat 1", wissensmanagement: 80, chatbot: 20, kiLeitlinien: 10 },
    { month: "Monat 2-3", wissensmanagement: 100, chatbot: 30, kiLeitlinien: 15 },
    { month: "Monat 4-6", wissensmanagement: 100, chatbot: 80, kiLeitlinien: 40 },
    { month: "Monat 7-9", wissensmanagement: 100, chatbot: 100, kiLeitlinien: 90 },
    { month: "Monat 10-12", wissensmanagement: 100, chatbot: 100, kiLeitlinien: 100 }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 24px 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginBottom: '18px' }}>
            <Target style={{ width: '48px', height: '48px', color: '#2997ff' }} />
            <h1 style={{ fontSize: '56px', fontWeight: 700, color: '#0a2540', margin: 0, letterSpacing: '-2px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
              AlpineFresh
            </h1>
          </div>
          <p style={{ fontSize: '24px', color: '#3d4756', margin: 0, fontWeight: 400, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            Digitale Transformation & KI-Governance
          </p>
        </div>

        {/* Ziele */}
        <div style={{ 
          backgroundColor: '#f5f7fa', 
          borderRadius: '16px', 
          padding: '32px', 
          marginBottom: '32px',
          border: '1px solid #e3e7ed'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Target style={{ width: '32px', height: '32px', color: '#2997ff' }} />
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#0a2540', margin: 0 }}>
              Ziel von AlpineFresh
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <TrendingUp style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Stabiles Wachstum
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Im Bereich Frische Convenience Produkte
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Users style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Digitale Skalierung
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Fokus auf Kundenzufriedenheit und Effizienz
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Clock style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Schnelle Umsetzung
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Max. 12 Monate, erste Ergebnisse nach 30 Tagen
              </p>
            </div>
          </div>
        </div>

        {/* Herausforderungen */}
        <div style={{ 
          backgroundColor: '#f5f7fa', 
          borderRadius: '16px', 
          padding: '32px', 
          marginBottom: '32px',
          border: '1px solid #e3e7ed'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <AlertCircle style={{ width: '32px', height: '32px', color: '#2997ff' }} />
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#0a2540', margin: 0, background: 'none', border: 'none', boxShadow: 'none' }}>
              Herausforderungen
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <AlertTriangle style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Informationssilos
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Wissen liegt verstreut, neue MA suchen zu lange
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Clock style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Langsame Reaktionen
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Kundenanfragen dauern im Schnitt 24h
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Zap style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                KI-Wildwuchs
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Kein Überblick über KI-Nutzung in Teams
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Shield style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Fehlende Governance
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Keine Datenschutz-/Qualitätsrichtlinien für KI
              </p>
            </div>
          </div>
        </div>

        {/* Lösungsmodule */}
        <div style={{ 
          backgroundColor: '#f5f7fa', 
          borderRadius: '16px', 
          padding: '32px', 
          marginBottom: '32px',
          border: '1px solid #e3e7ed'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Brain style={{ width: '32px', height: '32px', color: '#2997ff' }} />
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#0a2540', margin: 0 }}>
              Drei Lösungsmodule im Fokus
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <BookOpen style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Wissensmanagement
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Zentralisierte Plattform zur Ablage und Suche von internem Wissen
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <MessageCircle style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                Chatbot
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Integration eines KI-Chatbots auf der Website
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid #e3e7ed',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
            }} onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Shield style={{ width: '24px', height: '24px', color: '#2997ff', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '8px' }}>
                KI-Leitlinien
              </h3>
              <p style={{ color: '#3d4756', margin: 0, fontSize: '14px', fontWeight: 400 }}>
                Etablierung eines Governance-Frameworks für KI-Nutzung
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div style={{ 
          backgroundColor: '#f5f7fa', 
          borderRadius: '16px', 
          padding: '32px', 
          marginBottom: '32px',
          border: '1px solid #e3e7ed'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Calendar style={{ width: '32px', height: '32px', color: '#2997ff' }} />
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#0a2540', margin: 0 }}>
              12-Monats-Roadmap
            </h2>
          </div>
          <div style={{ height: '320px', marginBottom: '24px', background: '#fff', borderRadius: '12px', border: '1px solid #e3e7ed', padding: '16px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roadmapData}>
                <CartesianGrid strokeDasharray="2 4" stroke="#f5f7fa" />
                <XAxis dataKey="month" stroke="#3d4756" />
                <YAxis stroke="#e3e7ed" />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e3e7ed', borderRadius: '8px', color: '#0a2540', fontWeight: 400, fontSize: '14px', boxShadow: 'none' }} itemStyle={{ color: '#0a2540' }} />
                <Line type="monotone" dataKey="wissensmanagement" stroke="#2997ff" strokeWidth={2} name="Wissensmanagement" dot={{ r: 4, stroke: '#2997ff', strokeWidth: 1.5, fill: '#fff' }} activeDot={{ r: 6, fill: '#2997ff' }} />
                <Line type="monotone" dataKey="chatbot" stroke="#0a2540" strokeWidth={2} name="Chatbot" dot={{ r: 4, stroke: '#0a2540', strokeWidth: 1.5, fill: '#fff' }} activeDot={{ r: 6, fill: '#0a2540' }} />
                <Line type="monotone" dataKey="kiLeitlinien" stroke="#3d4756" strokeWidth={2} name="KI-Leitlinien" dot={{ r: 4, stroke: '#3d4756', strokeWidth: 1.5, fill: '#fff' }} activeDot={{ r: 6, fill: '#3d4756' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e3e7ed', color: '#3d4756', fontSize: '15px', fontWeight: 400, transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span style={{ color: '#0a2540', fontWeight: 600 }}>Monat 1:</span> Wissensdatenbank pilotieren (Quick Win), Chatbot vorbereiten
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e3e7ed', color: '#3d4756', fontSize: '15px', fontWeight: 400, transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span style={{ color: '#0a2540', fontWeight: 600 }}>Monat 2-3:</span> Chatbot Prototyp, KI-Leitlinien-Entwurf
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e3e7ed', color: '#3d4756', fontSize: '15px', fontWeight: 400, transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span style={{ color: '#0a2540', fontWeight: 600 }}>Monat 4-6:</span> Rollout Chatbot, Leitlinien-Schulung
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e3e7ed', color: '#3d4756', fontSize: '15px', fontWeight: 400, transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 8px 24px 0 rgba(10,37,64,0.12)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span style={{ color: '#0a2540', fontWeight: 600 }}>Monat 7-12:</span> Optimierung, Monitoring, weitere Automatisierung
            </div>
          </div>
        </div>

        {/* Drei Lösungsvarianten */}
        <div style={{ 
          background: 'linear-gradient(120deg, #ffffff 60%, #eaf1fa 100%)',
          borderRadius: '24px', 
          boxShadow: '0 8px 32px 0 rgba(10,37,64,0.08)', 
          padding: '40px', 
          marginBottom: '40px',
          border: 'none',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <Zap style={{ width: '36px', height: '36px', color: '#2997ff' }} />
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0a2540', margin: 0, letterSpacing: '-1px' }}>
              Drei Lösungsvarianten
            </h2>
          </div>

          {/* Variante 1: Low-Cost */}
          <div style={{ 
            padding: '32px', 
            backgroundColor: '#f5f7fa', 
            borderRadius: '20px', 
            border: '1px solid #e3e7ed',
            marginBottom: '32px',
            boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <ZapIcon style={{ width: '32px', height: '32px', color: '#2997ff' }} />
              <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0a2540', margin: 0, letterSpacing: '-1px' }}>
                Variante 1: Low-Cost & Quick-Win Setup
              </h3>
            </div>
            <p style={{ fontSize: '18px', color: '#3d4756', marginBottom: '28px', fontWeight: 400 }}>
              <strong style={{ color: '#0a2540' }}>Ziel:</strong> Innerhalb von 1–3 Monaten sichtbare Resultate mit minimalem Budget – ideal für Sofortstart mit vorhandenen Mitteln und Tools.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '28px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  1. Wissensmanagement
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>System:</strong> Optimierter SharePoint (bestehendes Intranet) mit strukturierter Ablage, klarer Taxonomie und Standard-Metadaten.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> 0–500 CHF (interne Arbeitszeit zur Strukturierung, keine zusätzlichen Lizenzen)
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  2. Chatbot
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Tool:</strong> Tidio oder ChatBot.com – einfache Web-Integration mit FAQ-Import.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> ca. 39–59 CHF/Monat → 468–708 CHF/Jahr
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  3. KI-Leitlinien
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Umsetzung:</strong> Interne Richtlinie als PDF + 1-stündiges Onboarding mit Präsentation.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> 0–1'000 CHF (intern erstellbar, ggf. externer Input für juristisch saubere Formulierungen)
                </p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#eaf1fa', 
              padding: '24px', 
              borderRadius: '16px', 
              textAlign: 'center',
              border: '1px solid #e3e7ed'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                <DollarSign style={{ width: '28px', height: '28px', color: '#2997ff' }} />
                <span style={{ fontSize: '24px', fontWeight: 700, color: '#0a2540' }}>
                  Gesamtjahreskosten: ~1'500 CHF
                </span>
              </div>
            </div>
          </div>

          {/* Variante 2: Midrange */}
          <div style={{ 
            padding: '32px', 
            backgroundColor: '#f5f7fa', 
            borderRadius: '20px', 
            border: '1px solid #e3e7ed',
            marginBottom: '32px',
            boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <Star style={{ width: '32px', height: '32px', color: '#2997ff' }} />
              <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0a2540', margin: 0, letterSpacing: '-1px' }}>
                Variante 2: Skalierbare Midrange-Lösung
              </h3>
            </div>
            <p style={{ fontSize: '18px', color: '#3d4756', marginBottom: '28px', fontWeight: 400 }}>
              <strong style={{ color: '#0a2540' }}>Ziel:</strong> Optimale Kombination aus Usability, Wachstumspotenzial und vertretbarem Budget.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '28px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  1. Wissensmanagement
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Tool:</strong> Notion Business mit Rollen, Templates, KI-Suche und API.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> ~10 CHF/User/Monat bei 30 Mitarbeitenden → 3'600 CHF/Jahr
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  2. Chatbot
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Tool:</strong> Freshchat mit KI-Erweiterung oder Zoho SalesIQ + Bot
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> 100–200 CHF/Monat inkl. API & Analytics → ~2'000 CHF/Jahr
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  3. KI-Leitlinien
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Umsetzung:</strong> Externer Workshop (z. B. durch Datenschutz-/KI-Experten) + unternehmensspezifische Guidelines + E-Learning
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> ~4'000–6'000 CHF (inkl. Schulungsunterlagen und 1 Tag Workshop)
                </p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#eaf1fa', 
              padding: '24px', 
              borderRadius: '16px', 
              textAlign: 'center',
              border: '1px solid #e3e7ed'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                <DollarSign style={{ width: '28px', height: '28px', color: '#2997ff' }} />
                <span style={{ fontSize: '24px', fontWeight: 700, color: '#0a2540' }}>
                  Gesamtjahreskosten: ~10'000–12'000 CHF
                </span>
              </div>
            </div>
          </div>

          {/* Variante 3: Ferrari */}
          <div style={{ 
            padding: '32px', 
            backgroundColor: '#f5f7fa', 
            borderRadius: '20px', 
            border: '1px solid #e3e7ed',
            marginBottom: '32px',
            boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <Rocket style={{ width: '32px', height: '32px', color: '#2997ff' }} />
              <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0a2540', margin: 0, letterSpacing: '-1px' }}>
                Variante 3: "Ferrari"-Setup – Premium Digital Excellence
              </h3>
            </div>
            <p style={{ fontSize: '18px', color: '#3d4756', marginBottom: '28px', fontWeight: 400 }}>
              <strong style={{ color: '#0a2540' }}>Ziel:</strong> Hochautomatisiert, stark skalierbar, maximale Integrationen, rechtlich & ethisch auf Top-Niveau.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '28px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  1. Wissensmanagement
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Tool:</strong> Guru oder Stonly – Wissensdatenbank mit interaktiven Guides, Browser-Extension, AI-Suche, Slack-Integration, Analytics.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> ~20–30 CHF/User/Monat → bei 50 Usern: ~15'000 CHF/Jahr
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  2. Chatbot
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Tool:</strong> Individueller GPT-basierter Bot (z. B. via OpenAI API + Retune, Microsoft Copilot Studio oder Ingest.ai) mit Anbindung an Produktdaten & CRM.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> Setup ~15'000–25'000 CHF, laufend ca. 500–1'000 CHF/Monat (API, Wartung) → ~30'000–35'000 CHF/Jahr
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', marginBottom: '14px' }}>
                  3. KI-Leitlinien
                </h4>
                <p style={{ color: '#3d4756', marginBottom: '10px', fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Tool:</strong> Externe Governance-Partner (z. B. AI Ethics Lab, PwC AI Governance) + skalierbare Compliance-Schulungen + Auditfunktion.
                </p>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Kosten:</strong> Initial ~15'000 CHF (Beratung, interne Policies, Trainings), jährlich ~5'000–7'000 CHF für Audits & Refresh
                </p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#eaf1fa', 
              padding: '24px', 
              borderRadius: '16px', 
              textAlign: 'center',
              border: '1px solid #e3e7ed'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                <DollarSign style={{ width: '28px', height: '28px', color: '#2997ff' }} />
                <span style={{ fontSize: '24px', fontWeight: 700, color: '#0a2540' }}>
                  Gesamtjahreskosten: ~60'000–70'000 CHF
                </span>
              </div>
            </div>
          </div>

          {/* Kostenvergleich Grafik */}
          <div style={{ height: '300px', marginBottom: '32px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData}>
                <XAxis dataKey="name" stroke="#3d4756" />
                <YAxis stroke="#3d4756" />
                <Tooltip formatter={(value) => [`${value} CHF`, 'Kosten']} />
                <Bar dataKey="Kosten" fill="#2997ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Empfehlungen je nach Strategie */}
          <div style={{ 
            backgroundColor: '#f5f7fa', 
            padding: '32px', 
            borderRadius: '20px', 
            border: '1px solid #e3e7ed',
            boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#0a2540', marginBottom: '24px', textAlign: 'center' }}>
              Empfehlungen je nach Strategie
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '12px' }}>
                  Sofort starten mit minimalem Aufwand
                </h4>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Low-Cost</strong><br/>
                  Quick Wins, MVP, bestehende Tools
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '12px' }}>
                  Sicher & skalierbar wachsen
                </h4>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Midrange</strong><br/>
                  Struktur, Standards, Expansion-ready
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e3e7ed', boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#0a2540', marginBottom: '12px' }}>
                  Flaggschiff-Image & Exzellenz
                </h4>
                <p style={{ color: '#3d4756', margin: 0, fontWeight: 400 }}>
                  <strong style={{ color: '#0a2540' }}>Ferrari</strong><br/>
                  Integrationen, Automatisierung, AI-first Company
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empfehlung */}
        <div style={{ 
          background: 'linear-gradient(120deg, #ffffff 60%, #eaf1fa 100%)',
          borderRadius: '24px', 
          boxShadow: '0 8px 32px 0 rgba(10,37,64,0.08)', 
          padding: '40px', 
          marginBottom: '40px',
          border: 'none',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <CheckCircle style={{ width: '36px', height: '36px', color: '#2997ff' }} />
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0a2540', margin: 0, letterSpacing: '-1px' }}>
              Empfehlung
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              padding: '28px', 
              backgroundColor: '#f5f7fa', 
              borderRadius: '16px', 
              border: '1px solid #e3e7ed',
              boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)'
            }}>
              <CheckCircle style={{ width: '32px', height: '32px', color: '#2997ff', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', margin: '0 0 10px 0' }}>
                  Variante 2 (Midrange) empfohlen
                </h3>
                <p style={{ color: '#3d4756', margin: 0, fontSize: '16px', fontWeight: 400 }}>
                  Bietet das beste Gleichgewicht aus Kosten, Skalierung und Nutzen für AlpineFresh.
                </p>
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              padding: '28px', 
              backgroundColor: '#f5f7fa', 
              borderRadius: '16px', 
              border: '1px solid #e3e7ed',
              boxShadow: '0 2px 8px 0 rgba(10,37,64,0.03)'
            }}>
              <AlertCircle style={{ width: '32px', height: '32px', color: '#2997ff', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0a2540', margin: '0 0 10px 0' }}>
                  Alternative: Schrittweise Umsetzung
                </h3>
                <p style={{ color: '#3d4756', margin: 0, fontSize: '16px', fontWeight: 400 }}>
                  Mit Low-Cost starten und in 3 Monaten auf Midrange upgraden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          background: 'linear-gradient(120deg, #ffffff 60%, #eaf1fa 100%)',
          borderRadius: '24px', 
          boxShadow: '0 8px 32px 0 rgba(10,37,64,0.08)', 
          padding: '40px', 
          marginBottom: '40px',
          border: 'none',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0a2540', marginBottom: '20px', letterSpacing: '-1px' }}>
            Bereit für die digitale Transformation?
          </h2>
          <p style={{ fontSize: '18px', color: '#3d4756', marginBottom: '40px', fontWeight: 400 }}>
            Lassen Sie uns gemeinsam die Zukunft von AlpineFresh gestalten
          </p>
          <button style={{
            backgroundColor: '#2997ff',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '18px',
            padding: '20px 40px',
            borderRadius: '16px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px 0 rgba(41,151,255,0.3)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
          }} onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0a2540';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px 0 rgba(10,37,64,0.4)';
          }} onMouseOut={(e) => {
            e.target.style.backgroundColor = '#2997ff';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px 0 rgba(41,151,255,0.3)';
          }}>
            <Rocket style={{ width: '24px', height: '24px', color: '#ffffff' }} />
            Projekt starten
          </button>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '40px 0', color: '#3d4756', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: 400 }}>
            AlpineFresh © 2024 - Digitale Transformation & KI-Governance
          </p>
        </div>

      </div>
    </div>
  );
}