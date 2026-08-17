import * as React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LeadCapturePopup } from "../components/site/LeadCapturePopup";
import { COMPANY_NAME, COMPANY_TAGLINE, CONTACT_PHONE_PRIMARY, WHATSAPP_NUMBER } from "../data/brand";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${COMPANY_NAME} — Inspiring Minds. Igniting Potential. Creating Impact.` },
      { name: "description", content: "A global academy committed to academic excellence, skill development and real-world success." },
      { name: "author", content: COMPANY_NAME },
      { property: "og:title", content: `${COMPANY_NAME} — Inspiring Minds. Igniting Potential. Creating Impact.` },
      { property: "og:description", content: "Education, Employment, Entrepreneurship — pathways designed for every stage of growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ShakthiAcademy" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/brand/logo-icon.png" },
      { rel: "apple-touch-icon", href: "/brand/logo-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <LeadCapturePopup />

      {/* Floating Chatbot Pop-up Window */}
      {isChatOpen && (
        <div className="fixed bottom-[164px] right-6 w-[300px] sm:w-[350px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-tr from-emerald-600 to-green-500 text-white p-4 flex items-center justify-between shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm select-none">
                SA
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-emerald-600" />
              </div>
              <div>
                <p className="font-extrabold text-sm leading-tight text-white">Shakthi Assistant</p>
                <p className="text-[10px] text-white/90 font-semibold mt-0.5">Online • Typically replies instantly</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Call Shortcut */}
              <a
                href={CONTACT_PHONE_PRIMARY ? `tel:${CONTACT_PHONE_PRIMARY.tel}` : "/contact"}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
                title={CONTACT_PHONE_PRIMARY ? "Call Hotline" : "Contact Us"}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
                title="Close Chat"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Messages Area */}
          <div className="p-4 bg-[#efeae2] h-48 overflow-y-auto flex flex-col gap-3 relative select-none">
            {/* WhatsApp background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Agent Welcome message */}
            <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-none p-3 shadow-sm relative z-10 self-start">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                Hello! 👋 Welcome to {COMPANY_NAME}. How can we assist you with your programs, admissions, or career journey today?
              </p>
              <span className="text-[9px] font-semibold text-slate-400 block text-right mt-1.5 uppercase">
                Agent • Just Now
              </span>
            </div>
          </div>
          
          {/* Input Form Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const encodedMsg = encodeURIComponent(chatMessage);
              if (WHATSAPP_NUMBER) {
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, "_blank");
              } else {
                window.location.assign(`/contact`);
              }
              setChatMessage("");
              setIsChatOpen(false);
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Type your message here..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="flex-1 rounded-xl bg-slate-50 border border-slate-100 px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-500/50 transition-colors font-medium text-slate-800"
            />
            <button
              type="submit"
              className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-md shrink-0"
              title="Send on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Call & WhatsApp Widgets */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
        {/* Floating Call Button */}
        <div className="relative group">
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white border border-slate-100 shadow-lg text-slate-800 text-xs font-extrabold rounded-xl px-4 py-2.5 shrink-0 select-none whitespace-nowrap">
            {CONTACT_PHONE_PRIMARY ? (
              <>
                Call <span className="text-[#0A3D62]">Shakthi Academy</span> Hotline
              </>
            ) : (
              <>
                Contact <span className="text-[#0A3D62]">Shakthi Academy</span>
              </>
            )}
          </div>
          <a
            href={CONTACT_PHONE_PRIMARY ? `tel:${CONTACT_PHONE_PRIMARY.tel}` : "/contact"}
            className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-[#0A3D62] to-[#4DA8DA] text-white flex items-center justify-center shadow-glow shrink-0"
            aria-label={CONTACT_PHONE_PRIMARY ? "Call Shakthi Academy Hotline" : "Contact Shakthi Academy"}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 relative z-10 fill-none stroke-current stroke-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>

        {/* Floating Chat Trigger Button */}
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white border border-slate-100 shadow-lg text-slate-800 text-xs font-extrabold rounded-xl px-4 py-2.5 shrink-0 select-none whitespace-nowrap">
            Chat with <span className="text-[#4DA8DA]">Shakthi Academy</span> Mentors
          </div>
          
          {/* Button */}
          <button
            type="button"
            onClick={() => setIsChatOpen((v) => !v)}
            className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-glow shrink-0"
            aria-label="Toggle WhatsApp Chatbot"
          >
            <svg
              viewBox="0 0 448 512"
              className="h-6 w-6 relative z-10 fill-current"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </button>
        </div>
      </div>
    </QueryClientProvider>
  );
}
