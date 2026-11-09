/**
 * ====================================================================
 *                 PHẠM NHẬT TÂM - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Chủ đề: Đam mê âm nhạc, Lofi Chill, Digital Artisan & F8 Sanctuary
 */

const CONFIG = {
    // 1. THÔNG TIN PROFILE:
    profile: {
        name: "Phạm Nhật Tâm",
        username: "darakz.xyz",
        title: "Music Enthusiast • Creative Digital Artisan • F8 Sanctuary",
        avatar: "avatar.jpg",
        banner: "profile_banner.jpg",
        
        // Danh sách các banner nghệ thuật có thể chuyển đổi linh hoạt:
        banners: [
            { id: "chrome", name: "Liquid Chrome Violet", url: "profile_banner.jpg", tag: "CYBER WAVE" },
            { id: "f8_anime", name: "F8 Anime Aesthetic", url: "f8_banner.png", tag: "PURPLE NOIR" },
            { id: "f8_welcome", name: "F8 Graffiti Welcome", url: "f8_splash.png", tag: "STREET NEON" },
            { id: "gta_prime", name: "GTA5F8 Prime Warzone", url: "gta_banner.png", tag: "WARZONE F8" }
        ],

        // Câu văn giới thiệu hay, sâu sắc về Phạm Nhật Tâm:
        bio: "Tôi là Phạm Nhật Tâm — một tâm hồn say đắm những thanh âm Lofi êm đềm, tìm kiếm sự tự do và an yên giữa từng giai điệu và thế giới số. Đối với tôi, âm nhạc là ngôn ngữ chữa lành cảm xúc, còn công nghệ là nơi tôi thỏa sức định hình phong cách và sáng tạo thế giới của riêng mình.",
        location: "Vietnam",
        
        // Trích dẫn sâu lắng hiển thị trên thanh gõ chữ Typewriter:
        quotes: [
            "Âm nhạc là nơi tâm hồn tìm về sự tĩnh lặng giữa nhịp sống hối hả.",
            "Mỗi giai điệu Lofi là một mảnh ghép ký ức, mỗi dự án là một ước mơ.",
            "Đắm mình vào từng nốt nhạc êm dịu, gác lại mọi âu lo ngoài kia.",
            "Phạm Nhật Tâm • Lắng nghe thanh âm của sự tĩnh lặng và đam mê.",
            "Midnight headphones on, world turned off • Pure music sanctuary."
        ],
        
        // Huy hiệu đam mê âm nhạc & công nghệ:
        badges: [
            { icon: "fa-solid fa-headphones", label: "Music Enthusiast", color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)", border: "rgba(192, 132, 252, 0.35)" },
            { icon: "fa-solid fa-compact-disc", label: "Lofi Chillhop", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.35)" },
            { icon: "fa-solid fa-music", label: "Melody Lover", color: "#f43f5e", bg: "rgba(244, 63, 94, 0.12)", border: "rgba(244, 63, 94, 0.35)" },
            { icon: "fa-solid fa-code", label: "Digital Artisan", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)", border: "rgba(16, 185, 129, 0.35)" },
            { icon: "fa-solid fa-moon", label: "Midnight Dreamer", color: "#eab308", bg: "rgba(234, 179, 8, 0.12)", border: "rgba(234, 179, 8, 0.35)" },
            { icon: "fa-solid fa-crown", label: "F8 Owner", color: "#ffffff", bg: "rgba(255, 255, 255, 0.12)", border: "rgba(255, 255, 255, 0.35)" }
        ]
    },

    // 2. DANH SÁCH 2 DISCORD SERVER:
    servers: [
        {
            name: "F8 Legendary",
            role: "Digital Services • Community & Gaming Sanctuary",
            description: "Premier engineering hub & community sanctuary. Providing full-spectrum digital solutions, exclusive gaming mods, and custom technical craft.",
            inviteUrl: "https://discord.gg/f8legendary",
            icon: "f8_icon.png",
            banner: "f8_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1538307697076736084/795017a2c2c5c0826c41bfb23ef8643e.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1538307697076736084/6a27ba5864b94854c07f0e6d42578a81.png?size=1024",
            members: "710 Members",
            online: "181 Online",
            tag: "OFFICIAL HUB",
            featured: true
        },
        {
            name: "GTA5F8 ( Chiếm Đóng )",
            role: "F8 Gang & Dev Sanctuary",
            description: "Official GTA5F8 community — Nơi Những Huyền Thoại Được Tạo Nên Trên Chiến Trường. Exclusive projects & networking.",
            inviteUrl: "https://discord.gg/CEGqygrhsw",
            icon: "gta_icon.png",
            banner: "gta_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1331250454520139797/26fd1402640c50b5ef8e34d5605d93ff.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1331250454520139797/154cf34e99b180d1cd8ae3089047a89e.png?size=1024",
            members: "214 Members",
            online: "51 Online",
            tag: "F8G5",
            featured: false
        }
    ],

    // 3. MẠNG XÃ HỘI / LIÊN HỆ:
    socials: [
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/kenpcphilets-rgb", brand: "github" },
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/nhatam.029/", brand: "facebook" },
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@nhatamxyz", brand: "tiktok" },
        { name: "Steam", icon: "fa-brands fa-steam", url: "https://steamcommunity.com/profiles/76561199524577128/", brand: "steam" }
    ],

    // 4. DANH SÁCH NHẠC (MUSIC PLAYLIST - 100% ONLINE HTTPS CDN VERCEL-READY):
    music: {
        autoplayOnEnter: true,
        volume: 0.45,
        playlist: [
            {
                id: "track-1",
                title: "Nàng Thơ (Lofi Chill)",
                artist: "Hoàng Dũng • Lofi Chillhop",
                duration: "4:12",
                url: "https://files.catbox.moe/zo5ng5.mp3",
                tag: "V-POP LOFI"
            },
            {
                id: "track-2",
                title: "Dạ Vũ (Lofi Chill Mix)",
                artist: "Tăng Duy Tân • V-Lofi Session",
                duration: "3:15",
                url: "https://files.catbox.moe/1sew8n.mp3",
                tag: "V-POP CHILL"
            },
            {
                id: "track-3",
                title: "3107 - 3 (Lofi Ver)",
                artist: "W/n ft. Duongg, Nâu, Titie",
                duration: "3:55",
                url: "https://files.catbox.moe/y13nxv.mp3",
                tag: "SAD LOFI"
            },
            {
                id: "track-4",
                title: "Ánh Sao Và Bầu Trời",
                artist: "T.R.I x Cá • Lofi Melody",
                duration: "4:08",
                url: "https://files.catbox.moe/bf3wuo.mp3",
                tag: "MELODY CHILL"
            },
            {
                id: "track-5",
                title: "Có Em (Chill Mix)",
                artist: "Madihu ft. Low G • Indie Chill",
                duration: "3:36",
                url: "https://files.catbox.moe/kqirh2.mp3",
                tag: "INDIE CHILL"
            },
            {
                id: "track-6",
                title: "Bước Qua Mùa Cô Đơn",
                artist: "Vũ • Lofi Acoustic Version",
                duration: "4:18",
                url: "https://files.catbox.moe/8wbkas.mp3",
                tag: "ACOUSTIC LOFI"
            },
            {
                id: "track-7",
                title: "Em Không Cần (Chill Session)",
                artist: "Hannie • Lofi V-Pop Mix",
                duration: "3:20",
                url: "https://files.catbox.moe/f61o5o.mp3",
                tag: "V-POP LOFI"
            },
            {
                id: "track-8",
                title: "Dù Cho Mai Về Sau",
                artist: "buitruonglinh • Lofi Sweet",
                duration: "3:45",
                url: "https://files.catbox.moe/aorw9q.mp3",
                tag: "SWEET LOFI"
            },
            {
                id: "track-9",
                title: "Cắt Đôi Nỗi Sầu (Lofi Chill)",
                artist: "Tăng Duy Tân • Chillhop Beats",
                duration: "3:05",
                url: "https://files.catbox.moe/ouhxzb.mp3",
                tag: "CHILL VIBES"
            },
            {
                id: "track-10",
                title: "Bao Tiền Một Mớ Bình Yên",
                artist: "14 Casper & Bon Nghiêm • Lofi",
                duration: "3:50",
                url: "https://files.catbox.moe/j0drgk.mp3",
                tag: "HEALING LOFI"
            },
            {
                id: "track-11",
                title: "Em Không Cần (Acoustic Night)",
                artist: "Hannie • Midnight Sanctuary",
                duration: "4:25",
                url: "https://files.catbox.moe/j6f8qk.mp3",
                tag: "ACOUSTIC"
            }
        ]
    },

    // 5. HIỆU ỨNG TRANG:
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true,
        enableBannerShimmer: true,
        enableSoundwaves: true
    }
};
