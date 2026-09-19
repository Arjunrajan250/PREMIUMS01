// NexusLoot Enterprise P2P Gaming Exchange Database

export const POPULAR_GAMES = [
  { id: 'all', name: 'All Titles', code: 'ALL', count: 1840 },
  { id: 'valorant', name: 'Valorant', code: 'VAL', publisher: 'Riot Games', count: 420 },
  { id: 'cs2', name: 'Counter-Strike 2', code: 'CS2', publisher: 'Valve', count: 380 },
  { id: 'blox-fruits', name: 'Roblox: Blox Fruits', code: 'RBLX', publisher: 'Roblox Corp', count: 512 },
  { id: 'wow', name: 'World of Warcraft', code: 'WoW', publisher: 'Blizzard', count: 290 },
  { id: 'gta-v', name: 'Grand Theft Auto V', code: 'GTA5', publisher: 'Rockstar', count: 340 },
  { id: 'osrs', name: 'Old School RuneScape', code: 'OSRS', publisher: 'Jagex', count: 210 },
  { id: 'fortnite', name: 'Fortnite', code: 'FN', publisher: 'Epic Games', count: 395 },
  { id: 'poe2', name: 'Path of Exile 2', code: 'PoE2', publisher: 'Grinding Gear', count: 180 },
  { id: 'lol', name: 'League of Legends', code: 'LoL', publisher: 'Riot Games', count: 310 }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', iconName: 'Layers', description: 'Browse all verified digital gaming assets' },
  { id: 'accounts', name: 'Game Accounts', iconName: 'UserCheck', description: 'Pre-ranked, competitive smurfs, verified & full-access credentials' },
  { id: 'currency', name: 'In-Game Currency', iconName: 'Coins', description: 'Gold, credits, orbs, tokens & in-game wealth' },
  { id: 'items', name: 'Items & Skins', iconName: 'Shield', description: 'Rare cosmetics, classified weapon skins, collectibles' },
  { id: 'boosting', name: 'Rank Boosting', iconName: 'Zap', description: 'High-tier competitive carries, badge completion, power-leveling' },
  { id: 'giftcards', name: 'Digital Gift Cards', iconName: 'CreditCard', description: 'Steam, PlayStation, Xbox, Discord Nitro & subscription vouchers' }
];

export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)' },
  CAD: { symbol: 'CA$', rate: 1.36, label: 'CAD (CA$)' },
  AUD: { symbol: 'AU$', rate: 1.52, label: 'AUD (AU$)' },
  INR: { symbol: '₹', rate: 83.5, label: 'INR (₹)' }
};

export const INITIAL_LISTINGS = [
  {
    id: 'NL-80421',
    game: 'Valorant',
    gameId: 'valorant',
    category: 'accounts',
    title: 'Immortal 3 Peak • Kuronami Vandal + Champions 2023 • Full Email Access',
    description: 'Level 148 Account. Original Creation Email transfer included. Complete inventory includes Kuronami Vandal (Max Upgrade), Champions 2023 Limited Bundle, Reaver Operator, Prime 2.0 Phantom, and 1,200 Radianite/VP balance. Clean competitive MMR record with zero penalty history.',
    price: 89.99,
    stock: 1,
    region: 'North America (NA)',
    platform: 'PC / Riot Client',
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: 'Lifetime VaultShield™ Guarantee',
    seller: {
      id: 'SELLER-VALK',
      name: 'ValkyrieVault',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      rating: 4.98,
      reviewsCount: 3840,
      completionRate: '99.8%',
      avgResponse: '1 min',
      badge: 'Tier 1 Merchant',
      verified: true
    },
    instantCredentials: {
      accountLogin: 'ImmortalKuro#NA1',
      accountPassword: 'NexusAuth_9921#Verified',
      associatedEmail: 'na_valk_temp14@nexusmail.gg (PW: TempPass99#)',
      accountPortal: 'https://auth.riotgames.com'
    },
    tags: ['Kuronami Vandal', 'Immortal 3', 'Original Email', 'Instant Dispatch'],
    isFeatured: true
  },
  {
    id: 'NL-80422',
    game: 'Counter-Strike 2',
    gameId: 'cs2',
    category: 'items',
    title: '★ Butterfly Knife | Doppler Phase 2 (Factory New) • 0.012 Float Spine',
    description: 'Ultra-low 0.012 float rating with clean spine edge and deep magenta Doppler Phase 2 pattern. Automated Steam trade offer dispatched through the VaultShield Escrow Bot immediately upon payment confirmation.',
    price: 1850.00,
    stock: 1,
    region: 'Global',
    platform: 'PC / Steam Trade',
    deliveryType: 'instant',
    deliverySpeed: 'Automated Bot Offer (3 min)',
    warranty: 'VaultShield™ 7-Day Trade Lock Insurance',
    seller: {
      id: 'SELLER-SKIN',
      name: 'ApexSkins Exchange',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      rating: 4.99,
      reviewsCount: 14200,
      completionRate: '100%',
      avgResponse: 'Instant API',
      badge: 'Enterprise Partner',
      verified: true
    },
    instantCredentials: {
      tradeOfferUrl: 'https://steamcommunity.com/tradeoffer/new/?partner=8910245&token=NexusEscrow781',
      tradeValidationHash: 'SHA256:4f8e21ba9910d8ce',
      instructions: 'Click the automated Steam trade offer URL above to accept delivery directly into your Steam inventory.'
    },
    tags: ['Butterfly Knife', 'Doppler P2', 'FN 0.012', 'Steam Trade'],
    isFeatured: true
  },
  {
    id: 'NL-80423',
    game: 'Roblox: Blox Fruits',
    gameId: 'blox-fruits',
    category: 'items',
    title: 'Permanent Kitsune + Permanent Dragon Fruit [Verified Bundle]',
    description: 'Direct in-game trade conducted in a dedicated VIP private server under platform Escrow protection. Includes permanent inventory unlock of both Kitsune and Dragon fruits.',
    price: 34.50,
    stock: 15,
    region: 'Global',
    platform: 'Cross-Platform',
    deliveryType: 'instant',
    deliverySpeed: 'Private Server Transfer (5 min)',
    warranty: '24-Hour Replacement Warranty',
    seller: {
      id: 'SELLER-FRUIT',
      name: 'GrandMerchant Trade',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      rating: 4.96,
      reviewsCount: 7120,
      completionRate: '100%',
      avgResponse: '2 min',
      badge: 'Certified Merchant',
      verified: true
    },
    instantCredentials: {
      privateServerLink: 'https://roblox.com/games/2753915549/Blox-Fruits?privateServerLinkCode=nexus-vault-trade-8891',
      tradeSessionId: 'SESSION-NX-99812',
      instructions: 'Join the private server link with your Roblox username. Our trade coordinator bot will transfer the bundle directly.'
    },
    tags: ['Permanent Kitsune', 'Permanent Dragon', 'VIP Server', 'Instant'],
    isFeatured: true
  },
  {
    id: 'NL-80424',
    game: 'Grand Theft Auto V',
    gameId: 'gta-v',
    category: 'accounts',
    title: 'GTA Online Modded Account • $750M Banked • Level 350 • Clean Stats',
    description: 'Rockstar Games Social Club / PC Edition. Features 750 Million pure banked currency, rank 350 unlock, all research blueprints completed, 150 modded high-end vehicles with Bennys and F1 components. 100% clean anti-cheat record.',
    price: 28.99,
    stock: 30,
    region: 'Global',
    platform: 'PC / Rockstar Launcher',
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: 'Lifetime Anti-Ban Warranty',
    seller: {
      id: 'SELLER-CARTEL',
      name: 'Veritas Gaming Ltd',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
      rating: 4.95,
      reviewsCount: 5410,
      completionRate: '99.6%',
      avgResponse: '3 min',
      badge: 'Certified Merchant',
      verified: true
    },
    instantCredentials: {
      accountLogin: 'Veritas_GTA_Client99@rockstar-temp.com',
      accountPassword: 'SecureRockstar_8891!',
      socialClubPin: '8821',
      originalEmail: 'temp_veritas_99@nexusmail.gg (PW: MailPass88!)'
    },
    tags: ['$750M Banked', 'Rank 350', 'Modded Fleet', 'Anti-Ban Protected'],
    isFeatured: false
  },
  {
    id: 'NL-80425',
    game: 'World of Warcraft',
    gameId: 'wow',
    category: 'currency',
    title: '1,000,000 WoW Retail Gold (US/EU Realms) • Guild Bank Transfer',
    description: 'Professionally farmed World of Warcraft retail currency. Delivered through secure Guild Bank deposits or safe face-to-face transfer in Orgrimmar or Stormwind. Compliant trade protocols.',
    price: 49.00,
    stock: 50,
    region: 'North America (NA)',
    platform: 'PC / Battle.net',
    deliveryType: '1hour',
    deliverySpeed: '10 - 20 Minutes',
    warranty: 'Safe Transfer Guarantee',
    seller: {
      id: 'SELLER-WOW',
      name: 'Azeroth Vaults',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      rating: 4.97,
      reviewsCount: 9430,
      completionRate: '99.9%',
      avgResponse: '4 min',
      badge: 'High-Volume Supplier',
      verified: true
    },
    instantCredentials: {
      guildTradeCoordinator: 'GoldCoordinator-Area52 (US)',
      instructions: 'Please enter your Character Name and Realm in the direct trade chat. Our officer will initiate guild invite or trade transfer within 15 minutes.'
    },
    tags: ['1M Gold', 'Retail WoW', 'Guild Bank', 'Safe Protocol'],
    isFeatured: false
  },
  {
    id: 'NL-80426',
    game: 'Old School RuneScape',
    gameId: 'osrs',
    category: 'currency',
    title: '100M OSRS Gold • Clean High-Combat Mule Transfer Protocol',
    description: 'Direct player-to-player trade delivered from veteran high-combat level accounts to eliminate system flags. Clean origin guaranteed.',
    price: 24.80,
    stock: 120,
    region: 'Global',
    platform: 'Cross-Platform',
    deliveryType: '1hour',
    deliverySpeed: '5 - 15 Minutes',
    warranty: 'Account Integrity Guarantee',
    seller: {
      id: 'SELLER-OSRS',
      name: 'Gielinor Reserve',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
      rating: 4.99,
      reviewsCount: 16500,
      completionRate: '100%',
      avgResponse: '2 min',
      badge: 'Enterprise Partner',
      verified: true
    },
    instantCredentials: {
      tradeLocation: 'World 302 / Grand Exchange Behind Bank Booth',
      instructions: 'Meet character "VanguardTrader" at Grand Exchange. Place a junk item in trade screen to maintain natural trading profile.'
    },
    tags: ['100M OSRS', 'High-Combat Mule', 'Hand Farmed', 'Clean History'],
    isFeatured: true
  },
  {
    id: 'NL-80427',
    game: 'Fortnite',
    gameId: 'fortnite',
    category: 'accounts',
    title: 'Legacy Chapter 1 Season 1 • Renegade Raider + Travis Scott + Black Knight',
    description: 'Original Chapter 1 legacy account. Features 280 skins including rare Renegade Raider, Travis Scott, Black Knight, Leviathan Axe, and 3,400 V-Bucks. Universal console linkable (PSN, Xbox, PC, Switch).',
    price: 380.00,
    stock: 1,
    region: 'Global',
    platform: 'Cross-Platform',
    deliveryType: 'instant',
    deliverySpeed: 'Instant Dispatch (< 60s)',
    warranty: 'Lifetime VaultShield™ Guarantee',
    seller: {
      id: 'SELLER-VALK',
      name: 'ValkyrieVault',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      rating: 4.98,
      reviewsCount: 3840,
      completionRate: '99.8%',
      avgResponse: '1 min',
      badge: 'Tier 1 Merchant',
      verified: true
    },
    instantCredentials: {
      epicLogin: 'renegade_og_vault@epic-nexus.com',
      epicPassword: 'EpicFortniteSecure_2024!',
      mailAccess: 'renegade_og_vault@nexusmail.gg (PW: SecretPass99)',
      accountPortal: 'https://www.epicgames.com/id/login'
    },
    tags: ['Renegade Raider', 'Travis Scott', 'Black Knight', '280 Skins'],
    isFeatured: true
  },
  {
    id: 'NL-80428',
    game: 'Path of Exile 2',
    gameId: 'poe2',
    category: 'currency',
    title: '50x Divine Orbs + 2x Mirror of Kalandra • Active League Currency',
    description: 'Direct player hideout delivery in the active challenge league. 24/7 automated delivery team ready to transfer upon escrow locking.',
    price: 65.00,
    stock: 25,
    region: 'Global',
    platform: 'PC',
    deliveryType: 'instant',
    deliverySpeed: 'Instant Bot (2 min)',
    warranty: 'VaultShield™ Trade Guarantee',
    seller: {
      id: 'SELLER-POE',
      name: 'Wraeclast Liquidity',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&auto=format&fit=crop&q=80',
      rating: 4.96,
      reviewsCount: 4180,
      completionRate: '99.7%',
      avgResponse: '2 min',
      badge: 'Certified Merchant',
      verified: true
    },
    instantCredentials: {
      hideoutCommand: '/hideout NexusLootTradeBot',
      whisperCode: '@NexusLootTradeBot Verification Token #POE2-99418'
    },
    tags: ['Divine Orbs', 'Mirror of Kalandra', 'Current League', 'Hideout Trade'],
    isFeatured: false
  },
  {
    id: 'NL-80429',
    game: 'Discord Nitro & Subscriptions',
    gameId: 'giftcards',
    category: 'giftcards',
    title: 'Discord Nitro 12-Month Subscription • Official Global Digital Activation Key',
    description: '100% legitimate 1-year Discord Nitro gift activation link. Works globally across existing and new accounts. Includes 2 monthly server boosts, custom emoji, and 4K 60FPS streaming.',
    price: 48.00,
    stock: 65,
    region: 'Global',
    platform: 'Cross-Platform',
    deliveryType: 'instant',
    deliverySpeed: 'Instant Code Dispatch',
    warranty: 'Activation Guarantee',
    seller: {
      id: 'SELLER-KEYS',
      name: 'OmniVouchers Global',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
      rating: 4.97,
      reviewsCount: 18450,
      completionRate: '100%',
      avgResponse: 'Instant API',
      badge: 'Enterprise Partner',
      verified: true
    },
    instantCredentials: {
      activationUrl: 'https://discord.gift/NEXUS-LOOT-NITRO-YEAR-2983719823',
      instructions: 'Click the official Discord activation URL or paste directly into Discord Settings > Gift Inventory.'
    },
    tags: ['Discord Nitro', '1 Year', '2x Server Boosts', 'Global Activation'],
    isFeatured: true
  }
];

export const HOW_ESCROW_WORKS_STEPS = [
  {
    step: '01',
    title: 'Secured Escrow Commitment',
    desc: 'When you place an order, your payment is held in an encrypted institutional vault. The seller does not receive payment until you test and authorize release.',
    iconName: 'Lock'
  },
  {
    step: '02',
    title: 'Automated Asset Delivery',
    desc: 'Account credentials, digital license keys, or in-game trade coordinates are dispatched immediately through our automated escrow dispatch pipeline.',
    iconName: 'Zap'
  },
  {
    step: '03',
    title: 'Buyer Verification Window',
    desc: 'You log into the account, verify inventory and safety settings, or confirm item delivery in-game. You have full warranty protection throughout this window.',
    iconName: 'ShieldCheck'
  },
  {
    step: '04',
    title: 'Final Settlement or Dispute',
    desc: 'Upon your confirmation, funds are settled to the seller. If any defect or issue arises, our 24/7 mediation team steps in to refund your balance immediately.',
    iconName: 'CheckCircle2'
  }
];
