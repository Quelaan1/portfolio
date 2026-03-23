'use client'

import Image from 'next/image'

interface PhoneMockupProps {
  className?: string
}

export function PhoneMockup({ className = '' }: PhoneMockupProps) {
  return (
    <div
      className={`w-[280px] h-[580px] rounded-[44px] border-2 border-[rgba(255,255,255,0.08)] relative overflow-hidden animate-float ${className}`}
      style={{
        background: 'linear-gradient(180deg, #221328, #1A0A1B)',
        transform: 'perspective(800px) rotateY(-5deg) rotateX(2deg)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(107,65,108,0.12)',
      }}
    >
      {/* Notch / Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />

      {/* Status Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-4 pb-0">
        <span className="text-[11px] font-semibold text-white/80">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <rect x="0" y="5.5" width="2" height="2.5" rx="0.5" fill="rgba(255,255,255,0.8)" />
            <rect x="3" y="4" width="2" height="4" rx="0.5" fill="rgba(255,255,255,0.8)" />
            <rect x="6" y="2" width="2" height="6" rx="0.5" fill="rgba(255,255,255,0.8)" />
            <rect x="9" y="0" width="2" height="8" rx="0.5" fill="rgba(255,255,255,0.35)" />
          </svg>
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path d="M5.5 7.2a0.6 0.6 0 100-1.2 0.6 0.6 0 000 1.2z" fill="rgba(255,255,255,0.8)" />
            <path d="M3.2 5a2.8 2.8 0 014 0" stroke="rgba(255,255,255,0.8)" strokeWidth="1" strokeLinecap="round" />
            <path d="M1.2 3a5.5 5.5 0 018.6 0" stroke="rgba(255,255,255,0.8)" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <div className="w-[16px] h-[8px] rounded-[2px] border border-white/50 flex items-center p-[1px]">
            <div className="h-full w-[65%] rounded-[1px] bg-white/80" />
          </div>
        </div>
      </div>

      {/* Filter Chips Row */}
      <div className="relative z-10 mx-3 pt-3 pb-1 overflow-hidden">
        <div className="flex items-center gap-2 pl-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 opacity-70">
            <line x1="21" y1="4" x2="14" y2="4" /><line x1="10" y1="4" x2="3" y2="4" /><line x1="21" y1="12" x2="12" y2="12" /><line x1="8" y1="12" x2="3" y2="12" /><line x1="21" y1="20" x2="16" y2="20" /><line x1="12" y1="20" x2="3" y2="20" />
            <line x1="14" y1="2" x2="14" y2="6" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="16" y1="18" x2="16" y2="22" />
          </svg>
          <div className="flex-shrink-0 bg-[#6B416C] rounded-full px-4 py-[5px] flex items-center gap-1.5">
            <span className="text-[10px] text-white font-medium">Age</span>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div className="flex-shrink-0 bg-[#6B416C] rounded-full px-4 py-[5px] flex items-center gap-1.5">
            <span className="text-[10px] text-white font-medium">Height</span>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div className="flex-shrink-0 bg-white/10 border border-white/15 rounded-full px-4 py-[5px] flex items-center whitespace-nowrap">
            <span className="text-[10px] text-white/60 font-medium">Active today</span>
          </div>
        </div>
      </div>

      {/* Name Row */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-2.5 pb-1">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-headline)] font-bold text-[18px] text-white">Priya</span>
          <span className="w-[7px] h-[7px] rounded-full bg-green-400" />
          <span className="text-[10px] text-white/40">Active now</span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.35">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </div>
      </div>

      {/* Large Photo Card */}
      <div className="relative z-10 mx-3">
        <div className="rounded-[16px] overflow-hidden relative h-[250px]">
          <Image
            src="/images/amour-profile.jpg"
            alt="Amour app profile card showing a verified user with compatibility score"
            fill
            sizes="280px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center z-10"
            style={{
              background: 'rgba(107,65,108,0.85)',
              borderRadius: 20,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 4,
              paddingRight: 10,
              gap: 4,
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <span
              className="text-white font-[family-name:var(--font-headline)] font-bold"
              style={{
                fontSize: 10,
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 8,
                paddingLeft: 6,
                paddingRight: 6,
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >95<span className="text-[7px] font-[family-name:var(--font-body)] font-medium">%</span></span>
            <span className="text-white font-[family-name:var(--font-headline)] font-medium" style={{ fontSize: 11 }}>Match</span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 w-[28px] h-[28px] rounded-full bg-[#F3F4F6] flex items-center justify-center z-10 shadow-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#9CA3AF">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info Row */}
      <div className="relative z-10 mx-3 pt-3 overflow-hidden">
        <div className="flex items-center gap-2 pl-1">
          <div className="flex items-center gap-1 whitespace-nowrap flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            </svg>
            <span className="text-[11px] text-white/60 font-medium">26</span>
          </div>
          <div className="w-px h-3.5 bg-white/10 flex-shrink-0" />
          <div className="flex items-center gap-1 whitespace-nowrap flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round">
              <circle cx="12" cy="8" r="5" /><path d="M12 13v8" /><path d="M9 18h6" />
            </svg>
            <span className="text-[11px] text-white/60 font-medium">WOMAN</span>
          </div>
          <div className="w-px h-3.5 bg-white/10 flex-shrink-0" />
          <div className="flex items-center gap-1 whitespace-nowrap flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round">
              <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" />
            </svg>
            <span className="text-[11px] text-white/60 font-medium">172 cm</span>
          </div>
          <div className="w-px h-3.5 bg-white/10 flex-shrink-0" />
          <div className="flex items-center gap-1 whitespace-nowrap min-w-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round" className="flex-shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[11px] text-white/60 font-medium">Bengaluru</span>
          </div>
        </div>
      </div>

      {/* Detail Rows */}
      <div className="relative z-10 px-4 pt-2.5 space-y-2">
        <div className="flex items-center gap-2.5 border-b border-white/5 pb-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a4 4 0 00-8 0v2" />
          </svg>
          <span className="text-[11px] text-white/70">Software Engineer</span>
        </div>
        <div className="flex items-center gap-2.5 border-b border-white/5 pb-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
          </svg>
          <span className="text-[11px] text-white/70">Master&apos;s</span>
        </div>
      </div>

      {/* Floating Bottom Tab Bar */}
      <div className="absolute bottom-3 left-[30px] right-[30px] z-10 bg-white/10 backdrop-blur-md rounded-[32px] flex items-center justify-around h-[46px] px-2 border border-white/10">
        <div className="w-[32px] h-[32px] rounded-full border-2 border-[#6B416C] bg-[rgba(107,65,108,0.15)] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B7A2B7" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </div>
  )
}
