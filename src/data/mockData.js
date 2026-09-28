// Nexa Digitals — Premium Digital Products & Subscriptions Database

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'all' },
  { id: 'music', name: 'Music', icon: 'music', count: 12 },
  { id: 'video', name: 'Video', icon: 'video', count: 8 },
  { id: 'streaming', name: 'Streaming', icon: 'streaming', count: 15 },
  { id: 'ai-tools', name: 'AI Tools', icon: 'ai-tools', count: 10 },
  { id: 'gaming', name: 'Gaming', icon: 'gaming', count: 14 },
  { id: 'software', name: 'Software', icon: 'software', count: 18 },
  { id: 'gift-cards', name: 'Gift Cards', icon: 'gift-cards', count: 9 }
];

export const CURRENCIES = {
  INR: { symbol: '₹', rate: 1.0, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.0095, label: 'GBP (£)' }
};

export const VALUE_PROPOSITIONS = [
  {
    icon: 'zap',
    title: 'Instant Delivery',
    description: 'Automated digital dispatch under 60 seconds'
  },
  {
    icon: 'shield',
    title: 'Genuine Products',
    description: '100% authentic, verified licenses and subscriptions'
  },
  {
    icon: 'card',
    title: 'Secure Payments',
    description: 'Encrypted multi-gateway UPI, Cards & Crypto'
  },
  {
    icon: 'headset',
    title: 'Fast Support',
    description: 'Dedicated 24/7 human technical resolution'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: '1. Choose',
    desc: 'Browse and select your product.',
    icon: 'cart'
  },
  {
    step: '2',
    title: '2. Pay',
    desc: 'Complete your payment securely.',
    icon: 'card'
  },
  {
    step: '3',
    title: '3. Receive',
    desc: 'Get your product details instantly via email.',
    icon: 'mail'
  },
  {
    step: '4',
    title: '4. Enjoy',
    desc: 'Start using your premium subscription!',
    icon: 'check'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Arjun K',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    comment: 'Got my YouTube Premium instantly. Everything worked perfectly. Highly recommended!'
  },
  {
    id: 'test-2',
    name: 'Sneha M',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    comment: 'Smooth process and great support. Received my Spotify Premium within minutes!'
  },
  {
    id: 'test-3',
    name: 'Vishnu R',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    comment: 'Best prices and genuine products. Will definitely buy again!'
  }
];

export const INITIAL_LISTINGS = [
  {
    id: 'nexa-spotify-01',
    title: 'Spotify Premium',
    plan: '1 Month Plan',
    category: 'music',
    price: 99,
    originalPrice: 179,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    iconType: 'spotify',
    description: 'Ad-free music listening, offline downloads, unlimited skips, and crystal clear 320kbps high-fidelity audio on all devices.',
    features: [
      'Ad-free high fidelity streaming',
      'Download music for offline listening',
      'Unlimited skips & on-demand playback',
      'Works on Mobile, PC, Mac, Tablet & TV',
      'Full account replacement guarantee'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Nexa Full Warranty',
    seller: {
      name: 'Nexa Verified Store',
      rating: 4.99,
      reviewsCount: 14200,
      verified: true
    },
    instantCredentials: {
      type: 'Account Upgrade / Credentials',
      login: 'spotify.nexa.user882@gmail.com',
      password: 'NexaMusicSecure88!',
      token: 'SPT-NX-99820-VALID',
      instructions: 'Log in with the verified credentials provided or tap the family token link to invite your personal email.'
    },
    tags: ['Ad-Free', 'High Quality', 'Instant Dispatch', '1 Month'],
    isFeatured: true
  },
  {
    id: 'nexa-youtube-02',
    title: 'YouTube Premium',
    plan: '1 Month Plan',
    category: 'video',
    price: 149,
    originalPrice: 299,
    badge: 'Popular',
    badgeType: 'popular',
    iconType: 'youtube',
    description: 'Watch all YouTube videos without any ads, background play when the screen is locked, and full YouTube Music Premium included.',
    features: [
      '100% Ad-Free Video Viewing',
      'Background Audio Playback',
      'Picture-in-Picture (PiP) Mode',
      'YouTube Music Premium Included',
      'Activates directly on your personal Gmail'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Nexa Guarantee',
    seller: {
      name: 'Nexa Verified Store',
      rating: 4.99,
      reviewsCount: 18500,
      verified: true
    },
    instantCredentials: {
      type: 'Official Google Family Invite',
      inviteUrl: 'https://families.google.com/join/nexa-yt-vip-invite-78921',
      instructions: 'Open the invite link using your preferred Gmail account to immediately enable YouTube Premium benefits.'
    },
    tags: ['Ad-Free', 'Background Play', 'Personal Account', 'Instant Dispatch'],
    isFeatured: true
  },
  {
    id: 'nexa-chatgpt-03',
    title: 'ChatGPT Plus',
    plan: '1 Month Plan',
    category: 'ai-tools',
    price: 499,
    originalPrice: 999,
    badge: null,
    iconType: 'chatgpt',
    description: 'Get priority access to GPT-4o, OpenAI o1 reasoning model, DALL·E 3 image generation, and natural Advanced Voice Mode.',
    features: [
      'Access to GPT-4o and OpenAI o1',
      'High-speed responses during peak times',
      'Create and use Custom GPTs',
      'DALL-E 3 image creation & web browsing',
      'Dedicated private login credentials'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Unconditional Replacement',
    seller: {
      name: 'Nexa AI Vault',
      rating: 4.98,
      reviewsCount: 9200,
      verified: true
    },
    instantCredentials: {
      type: 'Dedicated Private Account',
      login: 'nexa.gpt.plus881@openai-member.com',
      password: 'PlusAiSecure99#',
      instructions: 'Private dedicated OpenAI account with active Plus tier. You can customize settings and use across all apps.'
    },
    tags: ['GPT-4o', 'OpenAI o1', 'Voice Mode', 'Private Account'],
    isFeatured: true
  },
  {
    id: 'nexa-netflix-04',
    title: 'Netflix Premium',
    plan: '1 Month Plan',
    category: 'streaming',
    price: 199,
    originalPrice: 499,
    badge: null,
    iconType: 'netflix',
    description: 'Ultra HD 4K + HDR video quality with immersive Dolby Atmos audio. Dedicated private profile with personal 4-digit PIN protection.',
    features: [
      'Ultra HD (4K) & HDR Streaming',
      'Dolby Atmos Spatial Audio',
      'Dedicated Private Profile with PIN Lock',
      'Stream on Smart TV, Laptop, Mobile & Tablet',
      '100% stable connection guarantee'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Anti-Screen Lock Warranty',
    seller: {
      name: 'Nexa Stream Central',
      rating: 4.97,
      reviewsCount: 16400,
      verified: true
    },
    instantCredentials: {
      type: 'Private Profile + PIN',
      login: 'nexa.stream.hub41@nflx-direct.com',
      password: 'NetflixStream88!',
      profileName: 'Profile 4 (Nexa VIP)',
      profilePin: '4921',
      instructions: 'Log into Netflix with credentials above, choose Profile 4, and unlock with PIN 4921.'
    },
    tags: ['4K Ultra HD', 'Private PIN', 'Dolby Atmos', 'Instant Dispatch'],
    isFeatured: true
  },
  {
    id: 'nexa-canva-05',
    title: 'Canva Pro',
    plan: '1 Month Plan',
    category: 'software',
    price: 249,
    originalPrice: 499,
    badge: null,
    iconType: 'canva',
    description: 'Unlock 100M+ premium assets, photos, videos, Magic Studio AI design suite, 1-click background remover, and unlimited cloud storage.',
    features: [
      '100+ Million Premium Stock Assets',
      '1-Click AI Background Remover',
      'Brand Kit with Custom Fonts & Palettes',
      'Magic Resize for all social platforms',
      'Activates directly on your personal Canva account'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: 'Lifetime Upgrade Assurance',
    seller: {
      name: 'Nexa Pro Software',
      rating: 4.99,
      reviewsCount: 8800,
      verified: true
    },
    instantCredentials: {
      type: 'Direct Canva Team Invitation',
      inviteUrl: 'https://www.canva.com/brand/join?token=nexa-pro-team-88912',
      instructions: 'Click the link to join the Nexa Enterprise Pro Workspace on your own existing Canva account.'
    },
    tags: ['Magic Studio', 'Pro Assets', '1-Click BG Remover', 'Personal Email'],
    isFeatured: true
  },
  {
    id: 'nexa-discord-06',
    title: 'Discord Nitro',
    plan: '1 Month Plan',
    category: 'gaming',
    price: 299,
    originalPrice: 599,
    badge: null,
    iconType: 'discord',
    description: '500MB upload capacity, HD 4K 60fps streaming, custom emojis & stickers anywhere, 2 free Server Boosts, and animated profile badge.',
    features: [
      '500MB Large File Uploads',
      'HD 4K 60fps Screen Streaming',
      '2 Free Server Boosts + 30% Off Extras',
      'Custom & Animated Emojis Anywhere',
      'Redeemable Official Discord Gift Link'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: 'Direct Discord Voucher Guarantee',
    seller: {
      name: 'Nexa Gaming Network',
      rating: 4.98,
      reviewsCount: 11500,
      verified: true
    },
    instantCredentials: {
      type: 'Official Discord Gift Voucher',
      giftUrl: 'https://discord.gift/nexa-nitro-voucher-89214kds',
      instructions: 'Open the Discord gift link in your browser or Discord app to claim your 1 Month Nitro subscription.'
    },
    tags: ['2 Server Boosts', '500MB Uploads', '4K 60FPS', 'Official Gift'],
    isFeatured: true
  },
  {
    id: 'nexa-claude-07',
    title: 'Claude Pro',
    plan: '1 Month Plan',
    category: 'ai-tools',
    price: 549,
    originalPrice: 1099,
    badge: 'Popular',
    badgeType: 'popular',
    iconType: 'claude',
    description: 'Anthropic Claude 3.5 Sonnet & Opus with 5x usage limits, large 200K token context window, Projects feature, and early access to new models.',
    features: [
      'Claude 3.5 Sonnet & Claude 3 Opus',
      '5x more usage compared to free tier',
      '200K token context window for large documents',
      'Create and manage Claude Projects',
      'Dedicated high-reliability account'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Guaranteed Replacement',
    seller: {
      name: 'Nexa AI Vault',
      rating: 4.99,
      reviewsCount: 5400,
      verified: true
    },
    instantCredentials: {
      type: 'Dedicated Private Account',
      login: 'claude.pro.nexa78@anthropic-member.com',
      password: 'ClaudeSonnet99#',
      instructions: 'Dedicated account with active Claude Pro membership.'
    },
    tags: ['Claude 3.5 Sonnet', '200K Context', 'AI Coding', 'Fast Dispatch'],
    isFeatured: false
  },
  {
    id: 'nexa-win11-08',
    title: 'Windows 11 Pro License',
    plan: 'Lifetime Plan',
    category: 'software',
    price: 499,
    originalPrice: 1999,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    iconType: 'windows',
    description: 'Official OEM Retail Product Key for Windows 11 Pro 64-bit. Lifetime activation with BitLocker encryption, Remote Desktop and Windows Sandbox.',
    features: [
      'Genuine Microsoft Digital Product Key',
      'Lifetime Activation for 1 PC',
      'BitLocker Device Encryption',
      'Hyper-V & Windows Sandbox',
      'Direct online activation via Microsoft'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '100% Activation Guarantee',
    seller: {
      name: 'Nexa Pro Software',
      rating: 5.0,
      reviewsCount: 22100,
      verified: true
    },
    instantCredentials: {
      type: '25-Digit Retail License Key',
      productKey: 'VK7JG-NPHTM-C97JM-9MPGT-3V66T',
      instructions: 'Go to Settings > System > Activation > Change Product Key, enter the 25-digit code, and click Activate.'
    },
    tags: ['Lifetime License', '100% Genuine', 'BitLocker', 'Instant Key'],
    isFeatured: false
  },
  {
    id: 'nexa-prime-09',
    title: 'Amazon Prime Video',
    plan: '1 Month Plan',
    category: 'streaming',
    price: 129,
    originalPrice: 299,
    badge: null,
    iconType: 'prime',
    description: 'Stream unlimited blockbuster movies, award-winning Amazon Originals, and live sports in pristine 4K Ultra HD.',
    features: [
      'Access to full Prime Video library',
      'Watch in 4K UHD with HDR',
      'Download to mobile for offline viewing',
      'Private profile lock',
      'Zero ads during playback'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Full Replacement',
    seller: {
      name: 'Nexa Stream Central',
      rating: 4.96,
      reviewsCount: 7800,
      verified: true
    },
    instantCredentials: {
      type: 'Private Profile Credentials',
      login: 'nexa.prime.stream9@amazon-vault.com',
      password: 'PrimeStream99!',
      profile: 'VIP Profile 2 (PIN: 8812)',
      instructions: 'Log in and select your designated VIP Profile with the PIN provided.'
    },
    tags: ['4K UHD', 'Amazon Originals', 'Private Profile', 'Instant Dispatch'],
    isFeatured: false
  },
  {
    id: 'nexa-steam-10',
    title: 'Steam ₹1,000 Wallet Code',
    plan: 'Digital Voucher',
    category: 'gift-cards',
    price: 899,
    originalPrice: 1000,
    badge: 'Popular',
    badgeType: 'popular',
    iconType: 'steam',
    description: 'Official digital Steam Wallet Gift Card code. Instantly adds ₹1,000 credit directly to your Steam account for any games, DLCs, or market items.',
    features: [
      'Official Steam Wallet digital code',
      'Adds exact ₹1,000 in-wallet balance',
      'No expiration date',
      'Works on all Indian Steam accounts',
      'Instant code reveal upon purchase'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: 'Instant Activation Guarantee',
    seller: {
      name: 'Nexa Gaming Network',
      rating: 5.0,
      reviewsCount: 19800,
      verified: true
    },
    instantCredentials: {
      type: 'Digital Steam Redeem Code',
      walletCode: 'STEAM-NX-8841-9921-PLQZ',
      instructions: 'Go to store.steampowered.com/account/redeemwalletcode, enter your code, and click Continue.'
    },
    tags: ['Steam Wallet', '₹1000 Credit', 'Instant Code', 'No Expiry'],
    isFeatured: false
  },
  {
    id: 'nexa-gamepass-11',
    title: 'Xbox Game Pass Ultimate',
    plan: '1 Month Plan',
    category: 'gaming',
    price: 349,
    originalPrice: 549,
    badge: null,
    iconType: 'xbox',
    description: 'Play over 100 high-quality console & PC games, day-one releases, EA Play membership, cloud gaming on phones and TVs.',
    features: [
      'Play 100+ top titles on PC and Xbox',
      'Day-One Releases (Call of Duty, Halo, Forza)',
      'EA Play Membership included at no cost',
      'Xbox Cloud Gaming on mobile and browser',
      'Redeemable on existing or new Microsoft account'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '30-Day Full Protection',
    seller: {
      name: 'Nexa Gaming Network',
      rating: 4.97,
      reviewsCount: 6300,
      verified: true
    },
    instantCredentials: {
      type: '25-Character Xbox Digital Key',
      productKey: 'XBOX-GPU-9928-KLWQ-4412-NNM8',
      instructions: 'Redeem at redeem.microsoft.com or directly in the Xbox app on your PC/Console.'
    },
    tags: ['EA Play Included', 'Day One Games', 'PC & Console', 'Cloud Gaming'],
    isFeatured: false
  },
  {
    id: 'nexa-applemusic-12',
    title: 'Apple Music',
    plan: '3 Months Plan',
    category: 'music',
    price: 199,
    originalPrice: 399,
    badge: null,
    iconType: 'applemusic',
    description: 'Over 100 million songs, Lossless Audio up to 24-bit/192 kHz, Spatial Audio with Dolby Atmos, and Apple Music Sing karaoke mode.',
    features: [
      '100+ Million Songs in Lossless Audio',
      'Immersive Spatial Audio with Dolby Atmos',
      'Download for offline listening',
      'Works with Siri and all Apple & Android devices',
      'Direct activation link'
    ],
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: '90-Day Full Validity Guarantee',
    seller: {
      name: 'Nexa Verified Store',
      rating: 4.98,
      reviewsCount: 4200,
      verified: true
    },
    instantCredentials: {
      type: 'Direct Apple Music Voucher Link',
      voucherUrl: 'https://music.apple.com/redeem?code=NEXA3M-APL-88912',
      instructions: 'Click the link on your iPhone, iPad, Mac or Android device to claim 3 months of Apple Music.'
    },
    tags: ['Lossless Audio', 'Spatial Audio', '3 Months', 'Dolby Atmos'],
    isFeatured: false
  }
];
