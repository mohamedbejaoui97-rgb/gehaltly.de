'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const GA_ID = 'G-E1BKJVFXZL';
const CONSENT_KEY = 'gehaltly_cookie_consent';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted' || stored === 'rejected') return stored;
  return 'pending';
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(getConsent());
    setMounted(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setConsent('rejected');
  };

  return (
    <>
      {/* GA4 — only load after explicit consent */}
      {consent === 'accepted' && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {/* Banner — only show when no decision made yet */}
      {mounted && consent === 'pending' && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#1A1A1A] text-white border-t border-gray-700 shadow-2xl md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-xl md:border">
          <div className="p-4 md:p-5">
            <p className="text-sm font-semibold mb-2">Cookie-Einstellungen</p>
            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
              Wir verwenden Cookies und Google Analytics, um unsere Website zu verbessern.
              Ihre Gehaltsdaten werden <strong>nicht</strong> gespeichert — alle Berechnungen erfolgen lokal in Ihrem Browser.{' '}
              <a href="/datenschutz" className="underline hover:text-[#DD0000] transition-colors">
                Mehr erfahren
              </a>
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#DD0000] hover:bg-[#BB0000] text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Akzeptieren
              </button>
              <button
                onClick={handleReject}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Nur notwendige
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
