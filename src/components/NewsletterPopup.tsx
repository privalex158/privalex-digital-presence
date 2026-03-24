import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "privalex_newsletter_dismissed";

const NewsletterPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "min(560px, calc(100vw - 2rem))",
        background: "#1A2B5E",
        borderRadius: "12px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
        padding: "1.5rem 1.75rem",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        animation: "slideUp 0.3s ease",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(16px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div style={{ flex: 1 }}>
        <p style={{ color: "#2BBCD4", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
          Stay Informed
        </p>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>
          Subscribe to the PrivaLex Brief
        </p>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", marginBottom: "0.85rem", lineHeight: 1.5 }}>
          Data protection, cybersecurity &amp; AI governance intelligence — delivered to your inbox.
        </p>
        <a
          href="https://dashboard.mailerlite.com/forms/2092322"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#2BBCD4",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.82rem",
            padding: "8px 18px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Subscribe Now <ArrowRight size={14} />
        </a>
      </div>

      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          alignSelf: "flex-start",
          background: "rgba(255,255,255,0.08)",
          border: "none",
          borderRadius: "6px",
          padding: "6px",
          cursor: "pointer",
          color: "rgba(255,255,255,0.5)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default NewsletterPopup;
