/**
 * ====================================================================
 *                 NHẬT TÂM BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Chill, Cozy, Night Owl, Gaming, Lo-fi & Tech Guy Edition 🌙
 */

const CONFIG = {
    // 1. DISCORD USER ID:
    discordId: "1363388808661438495",

    // 2. THÔNG TIN PROFILE (NHẬT TÂM):
    profile: {
        name: "Nhật Tâm ♡",
        username: "idksenz.",
        title: "Night Owl 🌙 • Hardcore Gamer 🎮 • Lo-fi & Tech Addict 🎧 • Chill Guy 🪐",
        avatar: "avatar.jpg",
        avatarDecoration: "discord_avatar_decoration.png",
        useDiscordAvatarDecoration: true,
        banner: "banner.jpg",
        bio: "welcome to my chill sanctuary 🪐 ban ngày cày cuốc học tập ☕, ban đêm chill nhạc lofi và leo rank cùng anh em 🎧🎮. tôn chỉ sống: việc hôm nay chớ để ngày mai, mà hãy để ngày mốt ✨💤",
        location: "Vietnam 🪐",
        quotes: [
            "đêm nay leo rank gì, nghe lofi hay ngủ sớm nhỉ? 🎮",
            "thế giới ngoài kia ồn ào quá, vào đây chill nghe nhạc cùng tui đi 🎧",
            "tôn chỉ cuộc sống: chill hết mình, chơi hết sức và luôn giữ cái đầu lạnh 🧊",
            "nạp chút caffeine và thức khuya cày cuốc cùng anh em ☕✨",
            "night owl chính hiệu, nhạc chill là chân lý, game là đam mê 🌙"
        ],
        badges: [
            { icon: "fa-solid fa-moon", label: "Night Owl", color: "#38bdf8" },
            { icon: "fa-solid fa-gamepad", label: "Hardcore Gamer", color: "#818cf8" },
            { icon: "fa-solid fa-headphones", label: "Lo-fi Addict", color: "#22d3ee" },
            { icon: "fa-solid fa-mug-hot", label: "100% Caffeine", color: "#f59e0b" },
            { icon: "fa-solid fa-paw", label: "Cat Lover", color: "#bae6fd" },
            { icon: "fa-solid fa-crown", label: "Nhật Tâm VIP", color: "#fbbf24" }
        ]
    },

    // 3. DISCORD SERVER CHÍNH THỨC:
    servers: [
        {
            name: "F8 Legendary",
            role: "Chill Hangout & Gaming Community 🎮",
            description: "Không gian giao lưu, trò chuyện, quẩy game cực vui cùng Nhật Tâm & những người bạn chiến hữu 🎮",
            inviteUrl: "https://discord.gg/f8legendary",
            icon: "f8_icon.png",
            banner: "f8_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1538307697076736084/795017a2c2c5c0826c41bfb23ef8643e.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1538307697076736084/6a27ba5864b94854c07f0e6d42578a81.png?size=1024",
            members: "710 Members",
            online: "181 Online",
            tag: "OFFICIAL HUB 👑",
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
                artist: "PC • Chill Night Playlist 🌙",
                url: "10NganNam.mp3"
            },
            {
                title: "Rain 7",
                artist: "Chill Beats • Midnight Lofi 🎧",
                url: "Rain7.mp3"
            }
        ],
        title: "10 Ngàn Năm",
        artist: "PC • Chill Night Playlist 🌙",
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

    // 7. SỞ THÍCH & DAILY VIBES:
    techStack: [
        { name: "Chiến Thần Leo Rank", domain: "Valorant, CS2 & GTA V 🎮", icon: "fa-solid fa-gamepad" },
        { name: "Chuyên Gia Thức Đêm", domain: "Năng lượng đỉnh nhất lúc 2h sáng 🌙", icon: "fa-solid fa-moon" },
        { name: "Playlist Bất Hủ", domain: "Lo-fi, R&B & Phonk không lối thoát 🎧", icon: "fa-solid fa-headphones" },
        { name: "Caffeine & Đồ Ngon", domain: "Cà phê đen, nước tăng lực & ăn đêm ☕", icon: "fa-solid fa-mug-hot" },
        { name: "Góc Setup Chiến Game", domain: "Bàn PC, gear xịn & đèn led RGB 🖥️", icon: "fa-solid fa-desktop" },
        { name: "Chill & Vibe Out", domain: "Tận hưởng từng khoảnh khắc cuộc sống ✨", icon: "fa-solid fa-star" }
    ]
};
