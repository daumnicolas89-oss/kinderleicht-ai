"use client";

import { useState } from "react";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";
import { PriceDetail } from "@/components/ToolDetailClient";

const DSGVO_COLOR: Record<string, string> = { grün: "#059669", gelb: "#D97706", rot: "#DC2626" };
const DSGVO_BG: Record<string, string>    = { grün: "#DCFCE7", gelb: "#FEF9C3", rot: "#FEE2E2" };
const DSGVO_LABEL: Record<string, string> = { grün: "DSGVO konform", gelb: "Eingeschränkt", rot: "Kritisch" };

export type ToolData = {
  name: string;
  beschreibung?: string;
  vorteile?: string[];
  nachteile?: string[];
  didaktischer_mehrwert?: string;
  aufwand?: string;
  preismodell?: string;
  preis_detail?: string;
  dsgvo?: string;
  dsgvo_hinweis?: string;
  anbieter?: string;
  serverstandort?: string;
  bildungslizenz?: boolean | null;
  bildungslizenz_info?: string;
  website?: string;
};

function SidebarLabel({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2">
      <span className="text-sm leading-none">{emoji}</span>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-lg font-semibold text-gray-900 mb-4"
      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
    >
      {children}
    </h2>
  );
}

function SidebarCard({
  tool,
  shotUrl,
  targetUrl,
}: {
  tool: ToolData;
  shotUrl: string | null;
  targetUrl: string | null;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">

      {shotUrl && (
        <div className="p-4">
          <ScreenshotLightbox src={shotUrl} alt={`Screenshot ${tool.name}`} fullWidth />
        </div>
      )}

      {(tool.preismodell || tool.preis_detail) && (
        <div className="px-5 py-4">
          <SidebarLabel emoji="💶" label="Preis" />
          {tool.preismodell && <p className="text-sm font-semibold text-gray-800">{tool.preismodell}</p>}
          {tool.preis_detail && <PriceDetail text={tool.preis_detail} />}
        </div>
      )}

      {(tool.dsgvo || tool.dsgvo_hinweis) && (
        <div className="px-5 py-4">
          <SidebarLabel emoji="🛡️" label="Datenschutz" />
          {tool.dsgvo && (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
              style={{ backgroundColor: DSGVO_BG[tool.dsgvo], color: DSGVO_COLOR[tool.dsgvo] }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: DSGVO_COLOR[tool.dsgvo] }} />
              {DSGVO_LABEL[tool.dsgvo]}
            </span>
          )}
          {tool.dsgvo_hinweis && (
            <p className="text-xs text-gray-500 leading-relaxed">{tool.dsgvo_hinweis}</p>
          )}
        </div>
      )}

      {tool.serverstandort && (
        <div className="px-5 py-4">
          <SidebarLabel emoji="🖥️" label="Server" />
          <p className="text-sm text-gray-700">{tool.serverstandort}</p>
        </div>
      )}

      {tool.anbieter && (
        <div className="px-5 py-4">
          <SidebarLabel emoji="🏢" label="Anbieter" />
          <p className="text-sm text-gray-700">{tool.anbieter}</p>
        </div>
      )}

      {tool.bildungslizenz !== undefined && tool.bildungslizenz !== null && (
        <div className="px-5 py-4">
          <SidebarLabel emoji="🎓" label="Bildungslizenz" />
          {tool.bildungslizenz ? (
            <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Verfügbar
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium text-gray-400">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Nicht verfügbar
            </span>
          )}
          {tool.bildungslizenz_info && (
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tool.bildungslizenz_info}</p>
          )}
        </div>
      )}

      {tool.website && (
        <div className="px-5 py-4">
          <SidebarLabel emoji="🌐" label="Website" />
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline break-all"
            style={{ color: "#2596be" }}
          >
            {(() => { try { return new URL(tool.website).hostname; } catch { return tool.website; } })()}
          </a>
        </div>
      )}

      {targetUrl && (
        <div className="px-5 py-4">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#2596be" }}
          >
            Tool öffnen
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

export default function ToolDetailLayout({
  tool,
  shotUrl,
  targetUrl,
}: {
  tool: ToolData;
  shotUrl: string | null;
  targetUrl: string | null;
}) {
  const hasÜberblick   = !!(tool.beschreibung || (tool.vorteile?.length ?? 0) > 0 || (tool.nachteile?.length ?? 0) > 0);
  const hasUnterricht  = !!(tool.didaktischer_mehrwert || tool.aufwand);
  const hasDetails     = !!(tool.preismodell || tool.dsgvo || tool.serverstandort || tool.anbieter || (tool.bildungslizenz !== undefined && tool.bildungslizenz !== null));

  const TABS = [
    { id: "überblick",  label: "Überblick",           show: hasÜberblick  },
    { id: "unterricht", label: "Für den Unterricht",  show: hasUnterricht },
    { id: "details",    label: "Details",              show: hasDetails    },
  ].filter((t) => t.show);

  const [activeTab, setActiveTab] = useState(TABS[0]?.id ?? "überblick");

  return (
    <>
      {/* Mobile: Sidebar zuerst */}
      <div className="lg:hidden mb-6">
        <SidebarCard tool={tool} shotUrl={shotUrl} targetUrl={targetUrl} />
      </div>

      {/* Desktop: 2-Spalten-Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">

        {/* Linke Spalte: Tab-Navigation + Inhalt */}
        <div>
          {TABS.length > 1 && (
            <div className="flex gap-1 p-1 bg-white rounded-xl border border-gray-100 mb-5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all duration-150"
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: "#2596be", color: "#ffffff" }
                      : { color: "#6b7280" }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Tab: Überblick */}
          {activeTab === "überblick" && (
            <div className="space-y-5">
              {tool.beschreibung && (
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <SectionHeading>Über das Tool</SectionHeading>
                  <p className="text-sm text-gray-600 leading-[1.85] whitespace-pre-line">
                    {tool.beschreibung}
                  </p>
                </div>
              )}

              {((tool.vorteile?.length ?? 0) > 0 || (tool.nachteile?.length ?? 0) > 0) && (
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <SectionHeading>Stärken & Schwächen</SectionHeading>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(tool.vorteile?.length ?? 0) > 0 && (
                      <div className="rounded-xl border-l-4 bg-emerald-50 p-4" style={{ borderLeftColor: "#059669" }}>
                        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">Vorteile</p>
                        <ul className="space-y-2">
                          {tool.vorteile!.map((v, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-700 leading-snug">
                              <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(tool.nachteile?.length ?? 0) > 0 && (
                      <div className="rounded-xl border-l-4 bg-red-50 p-4" style={{ borderLeftColor: "#DC2626" }}>
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">Nachteile</p>
                        <ul className="space-y-2">
                          {tool.nachteile!.map((n, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-700 leading-snug">
                              <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5">
                                <path d="M18 6L6 18M6 6l12 12" />
                              </svg>
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab: Für den Unterricht */}
          {activeTab === "unterricht" && (
            <div className="space-y-5">
              {tool.didaktischer_mehrwert && (
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <SectionHeading>Didaktischer Mehrwert</SectionHeading>
                  <blockquote
                    className="border-l-4 pl-5 text-gray-600 leading-[1.85] text-sm whitespace-pre-line"
                    style={{ borderColor: "#2596be" }}
                  >
                    {tool.didaktischer_mehrwert}
                  </blockquote>
                </div>
              )}
              {tool.aufwand && (
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <SectionHeading>Aufwand & Voraussetzungen</SectionHeading>
                  <p className="text-sm text-gray-600 leading-[1.85]">{tool.aufwand}</p>
                </div>
              )}
            </div>
          )}

          {/* Tab: Details */}
          {activeTab === "details" && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
              {(tool.preismodell || tool.preis_detail) && (
                <div className="px-6 py-5">
                  <SidebarLabel emoji="💶" label="Preis" />
                  {tool.preismodell && <p className="text-sm font-semibold text-gray-800">{tool.preismodell}</p>}
                  {tool.preis_detail && <PriceDetail text={tool.preis_detail} />}
                </div>
              )}
              {(tool.dsgvo || tool.dsgvo_hinweis) && (
                <div className="px-6 py-5">
                  <SidebarLabel emoji="🛡️" label="Datenschutz" />
                  {tool.dsgvo && (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                      style={{ backgroundColor: DSGVO_BG[tool.dsgvo], color: DSGVO_COLOR[tool.dsgvo] }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: DSGVO_COLOR[tool.dsgvo] }} />
                      {DSGVO_LABEL[tool.dsgvo]}
                    </span>
                  )}
                  {tool.dsgvo_hinweis && (
                    <p className="text-xs text-gray-500 leading-relaxed">{tool.dsgvo_hinweis}</p>
                  )}
                </div>
              )}
              {tool.serverstandort && (
                <div className="px-6 py-5">
                  <SidebarLabel emoji="🖥️" label="Server" />
                  <p className="text-sm text-gray-700">{tool.serverstandort}</p>
                </div>
              )}
              {tool.anbieter && (
                <div className="px-6 py-5">
                  <SidebarLabel emoji="🏢" label="Anbieter" />
                  <p className="text-sm text-gray-700">{tool.anbieter}</p>
                </div>
              )}
              {tool.bildungslizenz !== undefined && tool.bildungslizenz !== null && (
                <div className="px-6 py-5">
                  <SidebarLabel emoji="🎓" label="Bildungslizenz" />
                  {tool.bildungslizenz ? (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      Verfügbar
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-gray-400">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      Nicht verfügbar
                    </span>
                  )}
                  {tool.bildungslizenz_info && (
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tool.bildungslizenz_info}</p>
                  )}
                </div>
              )}
              {tool.website && (
                <div className="px-6 py-5">
                  <SidebarLabel emoji="🌐" label="Website" />
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline break-all"
                    style={{ color: "#2596be" }}
                  >
                    {(() => { try { return new URL(tool.website).hostname; } catch { return tool.website; } })()}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rechte Spalte: Sticky Sidebar (nur Desktop) */}
        <aside className="hidden lg:block lg:sticky lg:top-[88px]">
          <SidebarCard tool={tool} shotUrl={shotUrl} targetUrl={targetUrl} />
        </aside>
      </div>
    </>
  );
}
