import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/context/LanguageContext";
import { Coins, ExternalLink, FileText, ChevronRight, CheckCircle2, AlertTriangle, Zap, Users, TrendingUp, Shield } from "lucide-react";

const xolLogo = "https://customer-assets.emergentagent.com/job_repo-preview-57/artifacts/sj0xl1db_LOGO%20-%20%24XOL%20%28Xolar%29.png";
const bscLogo = "https://customer-assets.emergentagent.com/job_repo-preview-57/artifacts/hs60w3g1_Binance%20Smart%20Chain.png";
const uniswapLogo = "https://customer-assets.emergentagent.com/job_repo-preview-57/artifacts/cb4kyxjp_Uniswap.png";

const tokenomicsData = [
  { label: "Ecosystem & Rewards", percentage: 18, color: "bg-[#8B5CF6]" },
  { label: "Treasury", percentage: 30, color: "bg-[#D90429]" },
  { label: "Team", percentage: 15, color: "bg-[#2B2D42]" },
  { label: "Investors", percentage: 15, color: "bg-[#F7B32B]" },
  { label: "Liquidity", percentage: 10, color: "bg-[#06D6A0]" },
  { label: "Growth & Partnerships", percentage: 8, color: "bg-[#118AB2]" },
  { label: "Public Sale", percentage: 4, color: "bg-[#EF476F]" },
];

const roadmapPhases = [
  { phase: "Phase 1", title: "Token Launch & Core Utilities", status: "upcoming" },
  { phase: "Phase 2", title: "Revenue Activation & Growth", status: "upcoming" },
  { phase: "Phase 3", title: "RWA Integration", status: "upcoming" },
  { phase: "Phase 4", title: "Scaling & Global Adoption", status: "upcoming" },
];

export const UpcomingProductSection = () => {
  const { t } = useLanguage();
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  return (
    <>
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]" data-testid="upcoming-product-section">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="reveal-up mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
              {t({ en: "Upcoming Product", id: "Produk Mendatang" })}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              {t({ en: "XOL Token – Xolar", id: "Token XOL – Xolar" })}
            </h2>
            <p className="mt-2 text-lg text-gray-400">
              {t({ en: "Economic Layer for Xolaria Ecosystem", id: "Lapisan Ekonomi untuk Ekosistem Xolaria" })}
            </p>
          </div>

          {/* Token Card */}
          <Card className="reveal-up delay-100 rounded-xl border border-[#2a2a3e] bg-[#12121a]/80 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Blockchain-themed background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <CardContent className="relative p-6 md:p-10">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
                {/* Token Logo */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#D90429]/20 p-1 shadow-2xl shadow-[#8B5CF6]/20">
                      <div className="w-full h-full rounded-full bg-[#0a0a0f] p-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={xolLogo}
                          alt="XOL Token Logo"
                          className="w-full h-full object-contain"
                          data-testid="xol-token-logo"
                        />
                      </div>
                    </div>
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B5CF6]/30 to-[#D90429]/30 blur-2xl -z-10 animate-pulse" />
                  </div>
                </div>

                {/* Token Info */}
                <div className="md:col-span-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="rounded-full bg-[#F7B32B]/20 text-[#F7B32B] border-[#F7B32B]/30 hover:bg-[#F7B32B]/30">
                      <Coins className="w-3 h-3 mr-1" />
                      {t({ en: "Utility Token", id: "Token Utilitas" })}
                    </Badge>
                    <Badge className="rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/30">
                      {t({ en: "Revenue-Backed", id: "Didukung Pendapatan" })}
                    </Badge>
                    <Badge className="rounded-full bg-[#06D6A0]/20 text-[#06D6A0] border-[#06D6A0]/30 hover:bg-[#06D6A0]/30">
                      {t({ en: "Fixed Supply", id: "Pasokan Tetap" })}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {t({ en: "XOL Token – Xolar", id: "Token XOL – Xolar" })}
                  </h3>
                  <p className="mt-2 text-[#8B5CF6] font-medium">
                    {t({ en: "Economic Layer for Xolaria Ecosystem", id: "Lapisan Ekonomi untuk Ekosistem Xolaria" })}
                  </p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {t({
                      en: "Xolar (XOL) is a fixed supply digital asset acting as the economic layer of the Xolaria Corp ecosystem. It integrates premium access, revenue-based value distribution, and real-world asset tokenization.",
                      id: "Xolar (XOL) adalah aset digital dengan pasokan tetap yang berfungsi sebagai lapisan ekonomi ekosistem Xolaria Corp. Mengintegrasikan akses premium, distribusi nilai berbasis pendapatan, dan tokenisasi aset dunia nyata."
                    })}
                  </p>

                  {/* Token Details Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{t({ en: "Total Supply", id: "Total Pasokan" })}</p>
                      <p className="text-xl font-bold text-white mt-1">1,000,000,000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{t({ en: "Token Symbol", id: "Simbol Token" })}</p>
                      <p className="text-xl font-bold text-[#8B5CF6] mt-1">$XOL</p>
                    </div>
                  </div>

                  {/* Blockchain Badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <img src={bscLogo} alt="Binance Smart Chain" className="h-6 w-auto" />
                      <span className="text-sm text-gray-300">{t({ en: "Binance Smart Chain", id: "Binance Smart Chain" })}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <img src={uniswapLogo} alt="Uniswap" className="h-6 w-auto" />
                      <span className="text-sm text-gray-300">{t({ en: "Available on Uniswap", id: "Tersedia di Uniswap" })}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      onClick={() => setIsWhitepaperOpen(true)}
                      className="h-12 px-6 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D90429] text-white hover:opacity-90 transition-opacity"
                      data-testid="view-whitepaper-btn"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {t({ en: "View Whitepaper", id: "Lihat Whitepaper" })}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Whitepaper Modal */}
      <Dialog open={isWhitepaperOpen} onOpenChange={setIsWhitepaperOpen}>
        <DialogContent className="max-w-4xl h-[90vh] p-0 bg-[#0a0a0f] border-[#2a2a3e]">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-[#2a2a3e]">
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#D90429] flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              XOLAR WHITEPAPER
            </DialogTitle>
            <p className="text-[#8B5CF6] text-sm mt-1">Economic Layer for Xolaria Corp</p>
          </DialogHeader>

          <ScrollArea className="h-full px-6 pb-6">
            <div className="space-y-8 py-6 text-gray-300">
              {/* 1. Executive Summary */}
              <WhitepaperSection number="1" title="Executive Summary">
                <p>
                  Xolar (XOL) is a fixed supply digital asset acting as the economic layer of Xolaria Corp ecosystem. 
                  It integrates premium access, revenue-based value distribution, and real-world asset tokenization.
                </p>
              </WhitepaperSection>

              {/* 2. Problem Statement */}
              <WhitepaperSection number="2" title="Problem Statement">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Traditional Models:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>Limited and geographically restricted investment access</li>
                      <li>No direct community incentive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Crypto Limitations:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>No real utility</li>
                      <li>Speculative nature</li>
                      <li>No revenue backing</li>
                    </ul>
                  </div>
                </div>
              </WhitepaperSection>

              {/* 3. Solution */}
              <WhitepaperSection number="3" title="Solution">
                <p className="mb-4">Xolar introduces a hybrid model: <span className="text-[#8B5CF6] font-semibold">Utility + Revenue + Real-world integration</span></p>
                <div className="grid grid-cols-2 gap-3">
                  {["Access Layer", "Value Distribution Layer", "Asset Tokenization Layer", "Community Growth Layer"].map((pillar, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <CheckCircle2 className="w-4 h-4 text-[#06D6A0]" />
                      <span className="text-sm text-white">{pillar}</span>
                    </div>
                  ))}
                </div>
              </WhitepaperSection>

              {/* 4. Core Utilities */}
              <WhitepaperSection number="4" title="Core Utilities">
                <div className="grid gap-4">
                  <UtilityCard
                    icon={Zap}
                    title="Access Premium Features"
                    items={["AI-driven analytics", "Trading & brokerage tools", "Early product access"]}
                  />
                  <UtilityCard
                    icon={TrendingUp}
                    title="Revenue Sharing Mechanism"
                    items={["Staking-based rewards", "Backed by real platform activity"]}
                  />
                  <UtilityCard
                    icon={Shield}
                    title="RWA Tokenization Medium"
                    items={["Fractional ownership", "Web2 to Web3 bridge"]}
                  />
                  <UtilityCard
                    icon={Users}
                    title="Community Bounty System"
                    items={["Incentivized participation", "Rewards for growth and development"]}
                  />
                </div>
              </WhitepaperSection>

              {/* 5. Tokenomics */}
              <WhitepaperSection number="5" title="Tokenomics">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                    <p className="text-xs text-gray-500">Token Name</p>
                    <p className="text-lg font-bold text-white">Xolar (XOL)</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                    <p className="text-xs text-gray-500">Blockchain</p>
                    <p className="text-lg font-bold text-[#F7B32B]">Binance Smart Chain</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                    <p className="text-xs text-gray-500">Total Supply</p>
                    <p className="text-lg font-bold text-white">1,000,000,000</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                    <p className="text-xs text-gray-500">Model</p>
                    <p className="text-lg font-bold text-[#06D6A0]">Fixed Supply</p>
                  </div>
                </div>

                <h4 className="text-white font-semibold mb-3">Allocation</h4>
                <div className="space-y-2">
                  {tokenomicsData.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm text-gray-400 flex-1">{item.label}</span>
                      <span className="text-sm font-semibold text-white">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </WhitepaperSection>

              {/* 6. Value Flow Model */}
              <WhitepaperSection number="6" title="Value Flow Model">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] text-sm font-bold">1</div>
                    <span>Users utilize Xolaria services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] text-sm font-bold">2</div>
                    <span>Platform generates revenue</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] text-sm font-bold">3</div>
                    <span>Revenue allocation: Buyback & burn, Staking rewards, Treasury growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] text-sm font-bold">4</div>
                    <span>Demand drivers: Premium access, RWA participation, Staking</span>
                  </div>
                </div>
              </WhitepaperSection>

              {/* 7. User Journey */}
              <WhitepaperSection number="7" title="User Journey">
                <div className="flex flex-wrap gap-2">
                  {["Entry (buy token, join platform)", "Engagement (stake, use features)", "Value Accrual (earn rewards)", "Expansion (increase holdings)", "Retention (long-term participation)"].map((phase, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <span className="w-5 h-5 rounded-full bg-[#8B5CF6] text-white text-xs flex items-center justify-center">{i + 1}</span>
                      <span className="text-sm">{phase}</span>
                    </div>
                  ))}
                </div>
              </WhitepaperSection>

              {/* 8. Economic Flywheel */}
              <WhitepaperSection number="8" title="Economic Flywheel">
                <div className="p-4 rounded-lg bg-gradient-to-r from-[#8B5CF6]/10 to-[#D90429]/10 border border-[#2a2a3e]">
                  <p className="text-center text-white font-medium">
                    User growth → Revenue growth → Rewards → Staking → Reduced supply → Increased value
                  </p>
                </div>
              </WhitepaperSection>

              {/* 9. Strategic Positioning */}
              <WhitepaperSection number="9" title="Strategic Positioning">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#D90429]/10 border border-[#D90429]/30">
                    <h4 className="text-[#D90429] font-semibold mb-2">Xolar is NOT:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                      <li>Meme coin</li>
                      <li>Pure governance token</li>
                      <li>Traditional security</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-[#06D6A0]/10 border border-[#06D6A0]/30">
                    <h4 className="text-[#06D6A0] font-semibold mb-2">Xolar IS:</h4>
                    <p className="text-gray-400 text-sm">Revenue-backed utility asset with real-world exposure</p>
                  </div>
                </div>
              </WhitepaperSection>

              {/* 10. Roadmap */}
              <WhitepaperSection number="10" title="Roadmap">
                <div className="space-y-3">
                  {roadmapPhases.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <div className="w-20 text-xs font-bold text-[#8B5CF6]">{item.phase}</div>
                      <div className="flex-1 text-white">{item.title}</div>
                      <Badge variant="outline" className="text-xs border-[#F7B32B]/50 text-[#F7B32B]">Upcoming</Badge>
                    </div>
                  ))}
                </div>
              </WhitepaperSection>

              {/* 11. Risk & Considerations */}
              <WhitepaperSection number="11" title="Risk & Considerations">
                <div className="grid grid-cols-2 gap-3">
                  {["Regulatory uncertainty", "Revenue sustainability", "Market volatility", "Execution risk"].map((risk, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
                      <AlertTriangle className="w-4 h-4 text-[#F7B32B]" />
                      <span className="text-sm text-gray-400">{risk}</span>
                    </div>
                  ))}
                </div>
              </WhitepaperSection>

              {/* 12. Closing Statement */}
              <WhitepaperSection number="12" title="Closing Statement">
                <div className="p-6 rounded-lg bg-gradient-to-r from-[#8B5CF6]/10 to-[#D90429]/10 border border-[#2a2a3e]">
                  <p className="text-white mb-4">
                    Xolar connects real-world value with blockchain-based systems, enabling:
                  </p>
                  <ul className="space-y-2">
                    {["Sustainable digital ecosystem", "Efficient value distribution", "Web2 to Web3 integration"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#06D6A0]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </WhitepaperSection>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Helper Components
const WhitepaperSection = ({ number, title, children }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#D90429] flex items-center justify-center text-white text-sm font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="pl-11">{children}</div>
  </div>
);

const UtilityCard = ({ icon: Icon, title, items }) => (
  <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e]">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#8B5CF6]" />
      </div>
      <h4 className="text-white font-semibold">{title}</h4>
    </div>
    <ul className="space-y-1 pl-11">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
          <ChevronRight className="w-3 h-3 text-[#8B5CF6]" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
