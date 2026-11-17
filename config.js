/**
 * ====================================================================
 *                 NHẬT TÂM BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Chill, Cozy, Night Owl, Gaming, Lo-fi & Tech Guy Edition 🌙
 */

const CONFIG = {
    // 1. DISCORD USER ID:
    discordId: "1528751528586907741",

    // 2. THÔNG TIN PROFILE (NHẬT TÂM):
    profile: {
        name: "Nhật Tâm",
        username: "2l9x",
        title: "Gamer • Night Owl • Lo-fi & Tech Addict 🎧",
        avatar: "avatar.jpg",
        avatarDecoration: "discord_avatar_decoration.png",
        useDiscordAvatarDecoration: true,
        banner: "banner.jpg",
        bio: "Ban ngày bận học, ban đêm bật lofi leo rank cùng anh em. Thức khuya không phải vì mất ngủ, mà vì đêm mới thực sự là của mình.",
        location: "Vietnam 🪐",
        quotes: [
            "Thức khuya không vì mất ngủ, chỉ vì đêm mới là lúc yên tĩnh nhất.",
            "Một ly cà phê, một playlist quen và vài ván rank cùng anh em 🎮",
            "Nhạc bật nhỏ, đèn chỉnh dịu, việc hôm nay mai tính tiếp.",
            "Không quan trọng thắng hay thua, quan trọng là bắn cùng ai 🎧",
            "Ai rồi cũng phải leo rank lúc 2h sáng thôi 🌙",
            "Sống chậm lại một nhịp, ngoài kia ồn ào thế là đủ rồi."
        ],
        badges: [
            { id: "gamepad", icon: "badge_gamepad.svg", png: "badge_gamepad.png", label: "Game Variety: Universalist", color: "#f59e0b" },
            { id: "sword", icon: "badge_sword.svg", png: "badge_sword.png", label: "Game Time: Eternal", color: "#f59e0b" },
            { id: "bravery", icon: "badge_bravery.svg", png: "badge_bravery.png", label: "HypeSquad Bravery", color: "#a855f7" },
            { id: "nitro", icon: "badge_nitro.svg", png: "badge_nitro.png", label: "Discord Nitro", color: "#f47fff" },
            { id: "activedev", icon: "badge_activedev.svg", png: "badge_activedev.png", label: "Active Developer", color: "#22d3ee" },
            { id: "booster", icon: "badge_booster.svg", png: "badge_booster.png", label: "Server Booster", color: "#fb923c" }
        ]
    },

    // 3. DISCORD SERVER CHÍNH THỨC:
    servers: [
        {
            name: "F8 Legendary",
            role: "Chill Hangout & Gaming Community 🎮",
            description: "Không gian giao lưu, trò chuyện, quẩy game cực vui cùng Nhật Tâm & những người bạn chiến hữu",
            inviteUrl: "https://discord.gg/7Dh6Djp7t4",
            icon: "f8_icon.png",
            banner: "f8_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1538307697076736084/bfcf1c1de01a9276e9f57a8b2f611fa9.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1538307697076736084/a_24382b66014507da54a84d11142cc466.png?size=1024",
            members: "1,942 Members",
            online: "195 Online",
            tag: "OFFICIAL HUB",
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
        { name: "Chiến Thần Rank", domain: "Valorant, CS2 & GTA V", icon: "fa-solid fa-gamepad" },
        { name: "Chuyên Gia Đêm", domain: "Năng lượng lúc 2h sáng", icon: "fa-solid fa-moon" },
        { name: "Playlist Bất Hủ", domain: "Lo-fi, R&B & Phonk", icon: "fa-solid fa-headphones" },
        { name: "Caffeine Power", domain: "Cà phê đen & tăng lực", icon: "fa-solid fa-mug-hot" },
        { name: "Góc Setup PC", domain: "Battlestation & RGB", icon: "fa-solid fa-desktop" },
        { name: "Chill & Relax", domain: "Tận hưởng cuộc sống", icon: "fa-solid fa-star" }
    ]
};
