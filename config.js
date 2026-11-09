/**
 * ====================================================================
 *                 NHẬT TÂM BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Chill, Cozy, Night Owl, Gaming, Lo-fi & Aesthetic Edition ♡
 */

const CONFIG = {
    // 1. DISCORD USER ID:
    discordId: "1363388808661438495",

    // 2. THÔNG TIN PROFILE (NHẬT TÂM):
    profile: {
        name: "Nhật Tâm ♡",
        username: "idksenz.",
        title: "Chuyên Gia Ngủ Nướng ☁️ Đam Mê Ăn Uống 🍰 Cozy Gamer 🎮 Lo-fi Lover 🎧 🌸",
        avatar: "avatar.jpg",
        avatarDecoration: "",
        useDiscordAvatarDecoration: false,
        banner: "banner.jpg",
        bio: "welcome to nhat tam's cozy sanctuary ♡ một chiếc em bé thích chill hưởng thụ, ăn ngon ngủ kỹ, nghe nhạc lo-fi và cày game cùng bạn bè. tôn chỉ sống: việc gì khó quá thì mình đi ngủ, mai tính tiếp nha 🌸✨",
        location: "Vietnam 🌸",
        quotes: [
            "hôm nay ăn gì, ngủ bao nhiêu tiếng và chơi game gì nhỉ? 🍰",
            "thế giới ngoài kia xô bồ quá, về đây chill nghe nhạc cùng nhật tâm đi ♡",
            "tôn chỉ cuộc sống: ăn no, ngủ kỹ và luôn luôn đáng yêu 🌸",
            "nạp vitamin trà sữa và thức khuya cày game 🎮✨",
            "ngủ nướng là đam mê, ăn ngon là chân lý, chill là phong cách sống ☁️"
        ],
        badges: [
            { icon: "fa-solid fa-bed", label: "Master Ngủ Nướng", color: "#fbcfe8" },
            { icon: "fa-solid fa-utensils", label: "Đam Mê Ăn Uống", color: "#fda4af" },
            { icon: "fa-solid fa-gamepad", label: "Cozy Gamer", color: "#c084fc" },
            { icon: "fa-solid fa-headphones", label: "Lo-fi Addict", color: "#ff75a0" },
            { icon: "fa-solid fa-mug-hot", label: "Trà Sữa 100% Đường", color: "#f472b6" },
            { icon: "fa-solid fa-crown", label: "Nhật Tâm VIP", color: "#f9a8d4" }
        ]
    },

    // 3. DISCORD SERVER CHÍNH THỨC:
    servers: [
        {
            name: "F8 Legendary",
            role: "Cozy Hangout & Gaming Community 🌸",
            description: "Không gian giao lưu, trò chuyện, quẩy game cực vui cùng Nhật Tâm & những người bạn siêu dễ thương ♡",
            inviteUrl: "https://discord.gg/f8legendary",
            icon: "f8_icon.png",
            banner: "f8_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1538307697076736084/795017a2c2c5c0826c41bfb23ef8643e.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1538307697076736084/6a27ba5864b94854c07f0e6d42578a81.png?size=1024",
            members: "710 Members",
            online: "181 Online",
            tag: "OFFICIAL HUB 🌸",
            featured: true
        }
    ],

    // 4. MẠNG XÃ HỘI / DIRECT CONNECTIONS:
    socials: [
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@nhatamxyz?lang=vi-VN" },
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/share/1DZdG7chnE/?mibextid=wwXIfr" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/nhaatazm?cplk=MWw0dzR2MHJ2cG1zZA==" }
    ],

    // 5. NHẠC NỀN & PLAYLIST:
    music: {
        autoplayOnEnter: true,
        volume: 0.4,
        playlist: [
            {
                title: "10 Ngàn Năm",
                artist: "PC • Nhật Tâm's Cozy Playlist ♡",
                url: "10NganNam.mp3"
            },
            {
                title: "Rain 7",
                artist: "Chill Beats • Nhật Tâm's Cozy Playlist 🌸",
                url: "Rain7.mp3"
            }
        ],
        title: "10 Ngàn Năm",
        artist: "PC • Nhật Tâm's Cozy Playlist ♡",
        url: "10NganNam.mp3"
    },

    // 6. HIỆU ỨNG:
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true
    },

    // 7. SỞ THÍCH & DAILY VIBES (6 PILLARS CỦA NHẬT TÂM):
    techStack: [
        { name: "Ngủ Nướng 12 Tiếng", domain: "Sạc lại năng lượng mỗi ngày ☁️", icon: "fa-solid fa-bed" },
        { name: "Thế Giới Đồ Ăn", domain: "Trà sữa, bánh ngọt & đồ ngon 🍰", icon: "fa-solid fa-cake-candles" },
        { name: "Cày Game Thâu Đêm", domain: "Valorant, Genshin & GTA V 🎮", icon: "fa-solid fa-gamepad" },
        { name: "Lo-fi & R&B Vibes", domain: "Playlist chill không lối thoát 🎧", icon: "fa-solid fa-headphones" },
        { name: "Mua Sắm & Làm Đẹp", domain: "Sưu tầm đồ cute & phụ kiện 🎀", icon: "fa-solid fa-bag-shopping" },
        { name: "Chill & Hưởng Thụ", domain: "Tận hưởng từng khoảnh khắc ♡", icon: "fa-solid fa-heart" }
    ]
};
