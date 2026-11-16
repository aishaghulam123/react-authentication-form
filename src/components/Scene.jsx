export default function Scene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c49b" />
          <stop offset="0.6" stopColor="#f8e0c4" />
          <stop offset="1" stopColor="#fbeedd" />
        </linearGradient>
      </defs>

      <rect width="800" height="1000" fill="url(#sky)" />

      <circle cx="610" cy="470" r="190" fill="#e07a4a" opacity="0.12" />
      <circle cx="610" cy="470" r="145" fill="#e07a4a" opacity="0.22" />
      <circle cx="610" cy="470" r="105" fill="#e07a4a" />

      <g fill="#fff" opacity="0.65">
        <rect x="70" y="520" width="150" height="24" rx="12" />
        <rect x="110" y="502" width="90" height="24" rx="12" />
        <rect x="640" y="640" width="120" height="20" rx="10" />
        <rect x="670" y="626" width="70" height="20" rx="10" />
      </g>

      <g fill="none" stroke="#1d2b24" strokeWidth="2.5" strokeLinecap="round">
        <path d="M380 440 q9 -9 18 0 q9 -9 18 0" />
        <path d="M430 405 q7 -7 14 0 q7 -7 14 0" />
        <path d="M335 480 q6 -6 12 0 q6 -6 12 0" />
      </g>

      <path
        d="M0 560 C150 500 280 540 400 510 C540 475 680 520 800 490 L800 1000 L0 1000 Z"
        fill="#b3c1a3"
      />

      <path
        d="M0 650 C140 590 300 640 430 600 C560 565 700 610 800 580 L800 1000 L0 1000 Z"
        fill="#628868"
      />

      <g fill="#35563f">
        <polygon points="150,570 128,620 172,620" />
        <polygon points="150,545 134,590 166,590" />
        <polygon points="205,588 189,618 221,618" />
        <polygon points="205,566 193,600 217,600" />
      </g>

      <g>
        <rect x="544" y="518" width="9" height="22" fill="#7a3a20" />
        <rect x="492" y="546" width="68" height="46" fill="#f6ead6" />
        <polygon points="483,548 526,514 569,548" fill="#b0532d" />
        <rect x="516" y="566" width="16" height="26" rx="2" fill="#1d2b24" />
        <rect x="499" y="560" width="12" height="12" fill="#ffd58a" />
        <rect x="539" y="560" width="12" height="12" fill="#ffd58a" />
        <path
          d="M548 512 q8 -10 0 -20 q-8 -10 2 -22"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>

      <path
        d="M0 760 C160 700 320 750 470 710 C600 675 720 720 800 690 L800 1000 L0 1000 Z"
        fill="#35563f"
      />

      <path
        d="M524 592 C520 650 470 690 430 730 C380 780 330 810 300 870 L370 870 C385 820 435 790 475 748 C525 700 548 645 534 592 Z"
        fill="#ecd9b8"
        opacity="0.85"
      />

      <path
        d="M0 860 C180 800 380 850 560 820 C660 802 740 820 800 810 L800 1000 L0 1000 Z"
        fill="#1d2b24"
      />

      <g fill="#e07a4a">
        <circle cx="90" cy="820" r="5" />
        <circle cx="130" cy="845" r="4" />
        <circle cx="210" cy="832" r="5" />
        <circle cx="610" cy="850" r="5" />
        <circle cx="680" cy="835" r="4" />
        <circle cx="730" cy="860" r="5" />
      </g>
      <g fill="#f6ead6">
        <circle cx="160" cy="868" r="4" />
        <circle cx="560" cy="860" r="4" />
        <circle cx="770" cy="845" r="4" />
      </g>
    </svg>
  )
}
