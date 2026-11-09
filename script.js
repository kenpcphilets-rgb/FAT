/**
 * ====================================================================
 *                 PHẠM NHẬT TÂM - SCRIPT CONTROLLER
 * ====================================================================
 * Music Sanctuary Controller: Lofi Vinyl Player, Soundwaves Engine,
 * Parallax Banner Shimmer & Interactive Aesthetic FX.
 */

// GitHub Raw CDN Base (Fallback bảo đảm 100% khi host Vercel không tìm thấy file cục bộ)
const GH_RAW_BASE = 'https://raw.githubusercontent.com/kenpcphilets-rgb/FAT/main';

if (typeof window.CONFIG === 'undefined' || !window.CONFIG.profile) {
    window.CONFIG = {
        profile: {
            name: "Phạm Nhật Tâm",
            username: "darakz.xyz",
            title: "Music Enthusiast • Creative Digital Artisan • F8 Sanctuary",
            avatar: "avatar.jpg",
            banner: "profile_banner.jpg",
            banners: [
                { id: "chrome", name: "Liquid Chrome Violet", url: "profile_banner.jpg", tag: "CYBER WAVE" },
                { id: "f8_anime", name: "F8 Anime Aesthetic", url: "f8_banner.png", tag: "PURPLE NOIR" },
                { id: "f8_welcome", name: "F8 Graffiti Welcome", url: "f8_splash.png", tag: "STREET NEON" },
                { id: "gta_prime", name: "GTA5F8 Prime Warzone", url: "gta_banner.png", tag: "WARZONE F8" }
            ],
            bio: "Tôi là Phạm Nhật Tâm — một tâm hồn say đắm những thanh âm Lofi êm đềm, tìm kiếm sự tự do và an yên giữa từng giai điệu và thế giới số. Đối với tôi, âm nhạc là ngôn ngữ chữa lành cảm xúc, còn công nghệ là nơi tôi thỏa sức định hình phong cách và sáng tạo thế giới của riêng mình.",
            location: "Vietnam",
            quotes: [
                "Âm nhạc là nơi tâm hồn tìm về sự tĩnh lặng giữa nhịp sống hối hả.",
                "Mỗi giai điệu Lofi là một mảnh ghép ký ức, mỗi dự án là một ước mơ.",
                "Đắm mình vào từng nốt nhạc êm dịu, gác lại mọi âu lo ngoài kia.",
                "Phạm Nhật Tâm • Lắng nghe thanh âm của sự tĩnh lặng và đam mê.",
                "Midnight headphones on, world turned off • Pure music sanctuary."
            ],
            badges: [
                { icon: "fa-solid fa-headphones", label: "Music Enthusiast", color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)", border: "rgba(192, 132, 252, 0.35)" },
                { icon: "fa-solid fa-compact-disc", label: "Lofi Chillhop", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.35)" },
                { icon: "fa-solid fa-music", label: "Melody Lover", color: "#f43f5e", bg: "rgba(244, 63, 94, 0.12)", border: "rgba(244, 63, 94, 0.35)" },
                { icon: "fa-solid fa-code", label: "Digital Artisan", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)", border: "rgba(16, 185, 129, 0.35)" },
                { icon: "fa-solid fa-moon", label: "Midnight Dreamer", color: "#eab308", bg: "rgba(234, 179, 8, 0.12)", border: "rgba(234, 179, 8, 0.35)" },
                { icon: "fa-solid fa-crown", label: "F8 Owner", color: "#ffffff", bg: "rgba(255, 255, 255, 0.12)", border: "rgba(255, 255, 255, 0.35)" }
            ]
        },
        servers: [
            {
                name: "F8 LEGENDARY",
                icon: "f8_icon.png",
                banner: "f8_banner.png",
                members: "1,913 Members",
                online: "181 Online",
                tag: "OFFICIAL HUB",
                featured: true,
                inviteUrl: "https://discord.gg/f8legendary"
            },
            {
                name: "GTA5F8.VN | GTA5F8 - Chiếm Đóng",
                icon: "gta_icon.png",
                banner: "gta_banner.png",
                members: "214 Members",
                online: "51 Online",
                tag: "F8G5",
                featured: false,
                inviteUrl: "https://discord.gg/CEGqygrhsw"
            }
        ],
        socials: [
            { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/kenpcphilets-rgb", brand: "github" },
            { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/nhatam.029/", brand: "facebook" },
            { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@nhatamxyz", brand: "tiktok" },
            { name: "Steam", icon: "fa-brands fa-steam", url: "https://steamcommunity.com/profiles/76561199524577128/", brand: "steam" }
        ],
        music: {
            autoplayOnEnter: true,
            volume: 0.45,
            playlist: [
                { id: "track-1", title: "Nàng Thơ (Lofi Chill)", artist: "Hoàng Dũng • Lofi Chillhop", duration: "4:12", url: "nang_tho.mp3", tag: "V-POP LOFI" },
                { id: "track-2", title: "Dạ Vũ (Lofi Chill Mix)", artist: "Tăng Duy Tân • V-Lofi Session", duration: "3:15", url: "da_vu.mp3", tag: "V-POP CHILL" },
                { id: "track-3", title: "3107 - 3 (Lofi Ver)", artist: "W/n ft. Duongg, Nâu, Titie", duration: "3:55", url: "3107_3.mp3", tag: "SAD LOFI" },
                { id: "track-4", title: "Ánh Sao Và Bầu Trời", artist: "T.R.I x Cá • Lofi Melody", duration: "4:08", url: "anh_sao_va_bau_troi.mp3", tag: "MELODY CHILL" },
                { id: "track-5", title: "Có Em (Chill Mix)", artist: "Madihu ft. Low G • Indie Chill", duration: "3:36", url: "co_em.mp3", tag: "INDIE CHILL" },
                { id: "track-6", title: "Bước Qua Mùa Cô Đơn", artist: "Vũ • Lofi Acoustic Version", duration: "4:18", url: "buoc_qua_mua_co_don.mp3", tag: "ACOUSTIC LOFI" },
                { id: "track-7", title: "Em Không Cần (Chill Session)", artist: "Hannie • Lofi V-Pop Mix", duration: "3:20", url: "emkhongcan.mp3", tag: "V-POP LOFI" },
                { id: "track-8", title: "Dù Cho Mai Về Sau", artist: "buitruonglinh • Lofi Sweet", duration: "3:45", url: "du_cho_mai_ve_sau.mp3", tag: "SWEET LOFI" },
                { id: "track-9", title: "Cắt Đôi Nỗi Sầu (Lofi Chill)", artist: "Tăng Duy Tân • Chillhop Beats", duration: "3:05", url: "cat_doi_noi_sau.mp3", tag: "CHILL VIBES" },
                { id: "track-10", title: "Bao Tiền Một Mớ Bình Yên", artist: "14 Casper & Bon Nghiêm • Lofi", duration: "3:50", url: "bao_tien_mot_mo_binh_yen.mp3", tag: "HEALING LOFI" },
                { id: "track-11", title: "Em Không Cần (Acoustic Night)", artist: "Hannie • Midnight Sanctuary", duration: "4:25", url: "emkhongcan_alt.mp3", tag: "ACOUSTIC" }
            ]
        },
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
}

document.addEventListener('DOMContentLoaded', () => {
    initProfileUI();
    initTypewriter();
    initClickToEnter();
    initAudioController();
    initMouseEffects();
    initParticleCanvas();
    initLocalClock();
});

/* ====================================================================
   1. PROFILE UI & BANNER ENGINE INITIALIZATION
   ==================================================================== */
let currentBannerIndex = 0;
const bannerList = (CONFIG.profile && Array.isArray(CONFIG.profile.banners) && CONFIG.profile.banners.length > 0)
    ? CONFIG.profile.banners
    : [
        { id: "chrome", name: "Liquid Chrome Violet", url: "profile_banner.jpg", tag: "CYBER WAVE" },
        { id: "f8_anime", name: "F8 Anime Aesthetic", url: "f8_banner.png", tag: "PURPLE NOIR" },
        { id: "f8_welcome", name: "F8 Graffiti Welcome", url: "f8_splash.png", tag: "STREET NEON" },
        { id: "gta_prime", name: "GTA5F8 Prime Warzone", url: "gta_banner.png", tag: "WARZONE F8" }
    ];

function setBanner(index, triggerToast = false) {
    if (index < 0) index = bannerList.length - 1;
    if (index >= bannerList.length) index = 0;
    currentBannerIndex = index;

    const b = bannerList[currentBannerIndex];
    const bannerImgLayer = document.getElementById('banner-img-layer');
    const bannerEl = document.getElementById('card-banner');
    const hudTag = document.getElementById('banner-hud-tag');

    if (bannerImgLayer) {
        bannerImgLayer.style.opacity = '0.35';
        bannerImgLayer.style.filter = 'blur(4px)';
        setTimeout(() => {
            bannerImgLayer.style.backgroundImage = `url('${b.url}')`;
            bannerImgLayer.style.opacity = '1';
            bannerImgLayer.style.filter = 'blur(0px)';
        }, 160);
    } else if (bannerEl) {
        bannerEl.style.backgroundImage = `url('${b.url}')`;
    }

    if (hudTag) {
        hudTag.textContent = b.tag || b.name.toUpperCase();
    }

    try {
        localStorage.setItem('nhatam_banner_idx', currentBannerIndex.toString());
    } catch (e) {}

    if (triggerToast) {
        showToast(`Đã chuyển Banner: ${b.name}`, 'fa-solid fa-wand-magic-sparkles');
        playBeepSound(640, 0.08);
    }
}

function initProfileUI() {
    // Set Document Title
    document.title = `${CONFIG.profile.name || "Phạm Nhật Tâm"} • Music Sanctuary`;

    // Set Profile Text
    const nameEl = document.getElementById('user-display-name');
    const handleEl = document.getElementById('user-handle');
    const taglineEl = document.getElementById('user-tagline');
    const bioEl = document.getElementById('user-bio');
    const avatarEl = document.getElementById('profile-avatar');

    if (nameEl) nameEl.textContent = CONFIG.profile.name;
    if (handleEl) handleEl.textContent = `@${CONFIG.profile.username}`;
    if (taglineEl) taglineEl.textContent = CONFIG.profile.title;
    if (bioEl && CONFIG.profile.bio) {
        bioEl.innerHTML = `Tôi là <strong class="name-highlight">${CONFIG.profile.name}</strong> — một tâm hồn say đắm những thanh âm Lofi êm đềm, tìm kiếm sự tự do và an yên giữa từng giai điệu và thế giới số. Đối với tôi, âm nhạc là ngôn ngữ chữa lành cảm xúc, còn công nghệ là nơi tôi thỏa sức định hình phong cách và sáng tạo thế giới của riêng mình.`;
    }
    if (avatarEl && CONFIG.profile.avatar) avatarEl.src = CONFIG.profile.avatar;

    // Load Saved or Default Banner
    let savedBannerIdx = 0;
    try {
        const stored = localStorage.getItem('nhatam_banner_idx');
        if (stored !== null) {
            const parsed = parseInt(stored, 10);
            if (!isNaN(parsed) && parsed >= 0 && parsed < bannerList.length) {
                savedBannerIdx = parsed;
            }
        }
    } catch (e) {}
    setBanner(savedBannerIdx, false);

    // Switch Banner Button
    const bannerSwitchBtn = document.getElementById('banner-switch-btn');
    if (bannerSwitchBtn) {
        bannerSwitchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setBanner(currentBannerIndex + 1, true);
        });
    }

    // Keyboard Shortcut 'B' for instant banner switch
    window.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key && (e.key.toLowerCase() === 'b')) {
            setBanner(currentBannerIndex + 1, true);
        }
    });

    // Synchronize Welcome Overlay
    const enterAvatarEl = document.querySelector('.cute-avatar-img');
    const enterNameEl = document.querySelector('.cute-name');
    if (enterAvatarEl && CONFIG.profile.avatar) enterAvatarEl.src = CONFIG.profile.avatar;
    if (enterNameEl && CONFIG.profile.name) enterNameEl.textContent = CONFIG.profile.name;

    // Avatar Modal Preview
    const avatarWrapper = document.getElementById('avatar-wrapper');
    const avatarModal = document.getElementById('avatar-modal');
    const avatarModalImg = document.getElementById('avatar-modal-img');
    const avatarModalName = document.querySelector('.avatar-modal-name');
    if (avatarWrapper && avatarModal) {
        avatarWrapper.addEventListener('click', () => {
            if (avatarModalImg && CONFIG.profile.avatar) avatarModalImg.src = CONFIG.profile.avatar;
            if (avatarModalName && CONFIG.profile.name) avatarModalName.textContent = CONFIG.profile.name;
            avatarModal.classList.add('active');
            playBeepSound(680, 0.08);
        });
        avatarModal.addEventListener('click', () => {
            avatarModal.classList.remove('active');
        });
    }

    // Render Badges with Color Highlights
    const badgesContainer = document.getElementById('badges-container');
    if (badgesContainer && CONFIG.profile.badges) {
        badgesContainer.innerHTML = '';
        CONFIG.profile.badges.forEach(badge => {
            const pill = document.createElement('div');
            pill.className = 'badge-pill';
            if (badge.color) pill.style.setProperty('--badge-color', badge.color);
            if (badge.bg) pill.style.setProperty('--badge-bg', badge.bg);
            if (badge.border) pill.style.setProperty('--badge-border', badge.border);
            pill.innerHTML = `<i class="${badge.icon}"></i> <span>${badge.label}</span>`;
            badgesContainer.appendChild(pill);
        });
    }

    // Render 2 Discord Servers
    const serversGrid = document.getElementById('servers-grid');
    if (serversGrid && CONFIG.servers) {
        serversGrid.innerHTML = '';
        CONFIG.servers.forEach((srv, idx) => {
            const card = document.createElement('div');
            card.className = `server-card ${srv.featured ? 'featured-server' : ''}`;
            card.id = `server-card-${idx}`;
            card.innerHTML = `
                <div class="server-banner-wrap">
                    <img src="${srv.banner}" alt="${srv.name} Banner" class="server-banner-img" id="server-banner-${idx}">
                    <div class="server-banner-grad"></div>
                </div>
                <div class="server-body">
                    <div class="server-icon-wrap">
                        <img src="${srv.icon}" alt="${srv.name} Icon" class="server-icon" id="server-icon-${idx}">
                    </div>
                    <div class="server-content">
                        <div class="server-top-line">
                            <span class="server-name" id="server-name-${idx}">${srv.name}</span>
                            <span class="server-tag">${srv.tag}</span>
                        </div>
                        <div class="server-stats" id="server-stats-${idx}">
                            <span class="stat-online"><i class="fa-solid fa-circle"></i> ${srv.online || 'Active Hub'}</span>
                            <span class="stat-dot">•</span>
                            <span class="stat-members">${srv.members || 'Community'}</span>
                        </div>
                        <span class="server-role">${srv.role}</span>
                        <p class="server-desc">${srv.description}</p>
                    </div>
                    <a href="${srv.inviteUrl}" target="_blank" rel="noopener noreferrer" class="server-join-btn">
                        <i class="fa-brands fa-discord"></i> <span>Join</span>
                    </a>
                </div>
            `;
            serversGrid.appendChild(card);

            // Fallback bindings if local or CDN image has network issues
            const bannerEl = card.querySelector('.server-banner-img');
            const iconEl = card.querySelector('.server-icon');
            if (bannerEl && srv.cdnBanner) {
                bannerEl.onerror = () => {
                    if (bannerEl.src !== srv.cdnBanner) bannerEl.src = srv.cdnBanner;
                };
            }
            if (iconEl && srv.cdnIcon) {
                iconEl.onerror = () => {
                    if (iconEl.src !== srv.cdnIcon) iconEl.src = srv.cdnIcon;
                };
            }

            // Fetch live Discord server data
            fetchDiscordInviteData(srv.inviteUrl, idx);
        });
    }

    // Render Socials
    const socialsList = document.getElementById('socials-list');
    if (socialsList && CONFIG.socials) {
        socialsList.innerHTML = '';
        CONFIG.socials.forEach(soc => {
            const a = document.createElement('a');
            a.className = 'social-pill';
            a.href = soc.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            const brand = soc.brand || soc.name.toLowerCase();
            a.setAttribute('data-brand', brand);
            a.innerHTML = `<i class="${soc.icon}"></i> <span>${soc.name}</span>`;

            if (soc.copy) {
                a.addEventListener('click', (e) => {
                    navigator.clipboard.writeText(soc.copy);
                    showToast(`Đã sao chép ${soc.name}: ${soc.copy}`);
                });
            }

            socialsList.appendChild(a);
        });
    }

    // Copy Tag Button Event
    const copyTagBtn = document.getElementById('copy-tag-btn');
    if (copyTagBtn) {
        copyTagBtn.addEventListener('click', () => {
            const textToCopy = CONFIG.profile.username || "darakz.xyz";
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Đã sao chép Discord: ${textToCopy}`);
                playBeepSound(600, 0.08);
            });
        });
    }
}

/* ====================================================================
   1.1 DYNAMIC DISCORD GUILD INVITE FETCHER
   ==================================================================== */
async function fetchDiscordInviteData(inviteUrl, idx) {
    try {
        const code = inviteUrl.split('/').pop().trim();
        if (!code) return;
        const res = await fetch(`https://discord.com/api/v9/invites/${code}?with_counts=true`);
        if (!res.ok) return;
        const data = await res.json();
        if (!data || !data.guild) return;

        const guild = data.guild;
        const iconEl = document.getElementById(`server-icon-${idx}`);
        const bannerEl = document.getElementById(`server-banner-${idx}`);
        const statsEl = document.getElementById(`server-stats-${idx}`);
        const nameEl = document.getElementById(`server-name-${idx}`);

        if (nameEl && guild.name) nameEl.textContent = guild.name;

        if (iconEl && guild.icon) {
            const isGif = guild.icon.startsWith('a_');
            const ext = isGif ? 'gif' : 'png';
            iconEl.src = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${ext}?size=256`;
        }

        if (bannerEl) {
            if (guild.banner) {
                const isGif = guild.banner.startsWith('a_');
                const ext = isGif ? 'gif' : 'png';
                bannerEl.src = `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.${ext}?size=1024`;
            } else if (guild.splash) {
                bannerEl.src = `https://cdn.discordapp.com/splashes/${guild.id}/${guild.splash}.png?size=1024`;
            }
        }

        if (statsEl && data.approximate_member_count) {
            const onlineCount = data.approximate_presence_count || 0;
            const memberCount = data.approximate_member_count;
            statsEl.innerHTML = `
                <span class="stat-online"><i class="fa-solid fa-circle"></i> ${onlineCount.toLocaleString()} Online</span>
                <span class="stat-dot">•</span>
                <span class="stat-members">${memberCount.toLocaleString()} Members</span>
            `;
        }
    } catch (e) {}
}

/* ====================================================================
   2. TERMINAL TYPEWRITER EFFECT FOR QUOTES
   ==================================================================== */
function initTypewriter() {
    const textEl = document.getElementById('typewriter-quote');
    if (!textEl || !CONFIG.profile.quotes || CONFIG.profile.quotes.length === 0) return;

    let quoteIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const quotes = CONFIG.profile.quotes;

    function typeLoop() {
        const currentQuote = quotes[quoteIndex];
        
        if (isDeleting) {
            charIndex--;
            textEl.textContent = currentQuote.substring(0, charIndex);
        } else {
            charIndex++;
            textEl.textContent = currentQuote.substring(0, charIndex);
        }

        let typeSpeed = isDeleting ? 28 : 55;

        if (!isDeleting && charIndex === currentQuote.length) {
            typeSpeed = 3000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            quoteIndex = (quoteIndex + 1) % quotes.length;
            typeSpeed = 450;
        }

        setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
}

/* ====================================================================
   3. CLICK TO ENTER OVERLAY
   ==================================================================== */
function initClickToEnter() {
    const overlay = document.getElementById('enter-overlay');

    function triggerAutoplay() {
        if (!CONFIG.music || !CONFIG.music.autoplayOnEnter) return;
        const audio = document.getElementById('bg-audio');
        if (audio) {
            if (!audio.src || audio.src === '' || audio.src.endsWith('/')) {
                if (typeof window.bioPlayer !== 'undefined' && window.bioPlayer.load) {
                    window.bioPlayer.load(0, true);
                    return;
                }
            }
            if (audio.paused) {
                const p = audio.play();
                if (p !== undefined) {
                    p.then(() => {
                        updateAudioWidgetState(true);
                        if (playlist.length > 0 && playlist[currentTrackIndex]) {
                            showToast(`Đang phát: ${playlist[currentTrackIndex].title}`, 'fa-solid fa-music');
                        }
                    }).catch(e => {
                        console.log('Autoplay waiting for user gesture:', e);
                    });
                }
            }
        }
    }

    if (overlay) {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('entered') === '1' || urlParams.get('preview') === '1') {
                overlay.classList.add('entered');
            }
        } catch (e) {}

        overlay.addEventListener('click', () => {
            overlay.classList.add('entered');
            playBeepSound(480, 0.12);
            triggerAutoplay();
        });
    }

    // Modern Web Audio Autoplay Unlock:
    // When deployed on Vercel/HTTPS, browsers require user interaction to play audio.
    // The very first tap or click anywhere on the page unlocks audio playback instantly!
    const unlockOnce = () => {
        triggerAutoplay();
        window.removeEventListener('click', unlockOnce);
        window.removeEventListener('touchstart', unlockOnce);
        window.removeEventListener('keydown', unlockOnce);
        window.removeEventListener('pointerdown', unlockOnce);
    };
    window.addEventListener('click', unlockOnce, { once: true, passive: true });
    window.addEventListener('touchstart', unlockOnce, { once: true, passive: true });
    window.addEventListener('keydown', unlockOnce, { once: true, passive: true });
    window.addEventListener('pointerdown', unlockOnce, { once: true, passive: true });
}

/* ====================================================================
   4. AUDIO CONTROLLER & PLAYLIST ENGINE
   ==================================================================== */
let currentTrackIndex = 0;
let playlist = [];
let isAudioPlaying = false;

function initAudioController() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('audio-play-btn');
    const prevBtn = document.getElementById('audio-prev-btn');
    const nextBtn = document.getElementById('audio-next-btn');
    const volumeSlider = document.getElementById('volume-slider');

    if (!audio || !CONFIG.music) return;

    if (Array.isArray(CONFIG.music.playlist) && CONFIG.music.playlist.length > 0) {
        playlist = CONFIG.music.playlist;
    } else if (CONFIG.music.url) {
        playlist = [{
            title: CONFIG.music.title || 'Lofi Chill',
            artist: CONFIG.music.artist || 'Sanctuary Beats',
            url: CONFIG.music.url,
            duration: '2:45'
        }];
    }

    if (playlist.length === 0) return;

    audio.volume = CONFIG.music.volume || 0.45;
    if (volumeSlider) volumeSlider.value = audio.volume;

    function renderPlaylistUI() {
        const playlistContainer = document.getElementById('playlist-tracks');
        const playlistCount = document.getElementById('playlist-count');
        if (!playlistContainer) return;

        if (playlistCount) playlistCount.textContent = `${playlist.length} Tracks`;
        playlistContainer.innerHTML = '';

        playlist.forEach((track, idx) => {
            const item = document.createElement('div');
            item.className = `track-item ${idx === currentTrackIndex ? 'active' : ''}`;
            item.id = `playlist-item-${idx}`;
            item.innerHTML = `
                <div class="track-item-left">
                    <div class="track-play-icon">
                        <i class="fa-solid ${idx === currentTrackIndex && isAudioPlaying ? 'fa-pause' : 'fa-play'}"></i>
                    </div>
                    <div class="track-text-meta">
                        <span class="track-item-title">${track.title}</span>
                        <span class="track-item-artist">${track.artist}</span>
                    </div>
                </div>
                <div class="track-item-right">
                    <span class="track-tag-badge">${track.tag || 'LOFI'}</span>
                    <span class="track-duration">${track.duration || '3:00'}</span>
                </div>
            `;
            item.addEventListener('click', () => {
                if (idx === currentTrackIndex) {
                    togglePlayPause();
                } else {
                    loadTrack(idx, true);
                }
            });
            playlistContainer.appendChild(item);
        });
    }

    function loadTrack(index, autoPlay = false) {
        if (index < 0) index = playlist.length - 1;
        if (index >= playlist.length) index = 0;
        currentTrackIndex = index;

        const track = playlist[currentTrackIndex];
        try {
            audio.pause();
            audio.currentTime = 0;
        } catch (e) {}
        audio.src = track.url;
        audio.load();

        const trackTitle = document.getElementById('audio-track-title');
        const artistName = document.getElementById('audio-artist-name');
        const nowTrackTitle = document.getElementById('now-track-title');
        const nowTrackArtist = document.getElementById('now-track-artist');

        if (trackTitle) trackTitle.textContent = track.title;
        if (artistName) artistName.textContent = `${currentTrackIndex + 1}/${playlist.length} • ${track.artist}`;
        if (nowTrackTitle) nowTrackTitle.textContent = track.title;
        if (nowTrackArtist) nowTrackArtist.textContent = track.artist;

        renderPlaylistUI();

        if (autoPlay) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    consecutiveErrors = 0;
                    updateAudioWidgetState(true);
                    showToast(`Đang phát: ${track.title}`, 'fa-solid fa-music');
                }).catch(err => {
                    console.log('Playback error or waiting for gesture:', err);
                    updateAudioWidgetState(false);
                });
            }
        }
    }

    function togglePlayPause() {
        playBeepSound(520, 0.05);
        if (!audio.src || audio.src === '' || audio.src.endsWith('/')) {
            loadTrack(currentTrackIndex, true);
            return;
        }
        if (audio.paused) {
            const p = audio.play();
            if (p !== undefined) {
                p.then(() => {
                    consecutiveErrors = 0;
                    updateAudioWidgetState(true);
                }).catch(e => {
                    console.log('Audio playback error, reloading track:', e);
                    loadTrack(currentTrackIndex, true);
                });
            }
        } else {
            audio.pause();
            updateAudioWidgetState(false);
        }
    }

    function playNextTrack() {
        playBeepSound(560, 0.05);
        const nextIdx = (currentTrackIndex + 1) % playlist.length;
        loadTrack(nextIdx, true);
    }

    function playPrevTrack() {
        playBeepSound(480, 0.05);
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
            return;
        }
        const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(prevIdx, true);
    }

    loadTrack(0, false);

    if (playBtn) {
        playBtn.addEventListener('click', togglePlayPause);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', playNextTrack);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', playPrevTrack);
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = parseFloat(e.target.value);
        });
    }

    let consecutiveErrors = 0;
    audio.addEventListener('play', () => {
        consecutiveErrors = 0;
        updateAudioWidgetState(true);
    });
    audio.addEventListener('pause', () => updateAudioWidgetState(false));
    audio.addEventListener('ended', playNextTrack);
    audio.addEventListener('error', (e) => {
        consecutiveErrors++;
        console.warn(`[Audio Error] Không thể phát: ${audio.src} (lần ${consecutiveErrors})`);

        // Tránh lặp vô hạn nếu toàn bộ danh sách gặp sự cố
        if (consecutiveErrors > playlist.length + 2) {
            console.warn('[Audio] Đã duyệt qua tất cả bài hát trong danh sách.');
            updateAudioWidgetState(false);
            return;
        }

        const rawUrl = audio.src || '';
        const fileName = rawUrl.split('/').pop().split('?')[0];

        // 1. Nếu đang gọi qua thư mục 'audio/xxx.mp3', thử ngay file cùng tên ở thư mục gốc (root)
        if (rawUrl.includes('/audio/') && !rawUrl.includes('githubusercontent')) {
            console.log(`[Audio Recovery] Thử file ở thư mục gốc: ${fileName}`);
            audio.src = fileName;
            audio.load();
            audio.play().then(() => {
                consecutiveErrors = 0;
                updateAudioWidgetState(true);
            }).catch(() => {});
            return;
        }

        // 2. Nếu file cục bộ trên host chưa có hoặc 404, tự động chuyển sang GitHub Raw CDN của repo FAT
        if (!rawUrl.includes('raw.githubusercontent.com') && fileName.endsWith('.mp3')) {
            const ghRaw = `${GH_RAW_BASE}/${fileName}`;
            console.log(`[Audio Recovery] Chuyển sang GitHub Raw CDN: ${ghRaw}`);
            audio.src = ghRaw;
            audio.load();
            audio.play().then(() => {
                consecutiveErrors = 0;
                updateAudioWidgetState(true);
            }).catch(() => {});
            return;
        }

        // 3. Nếu file chưa được tải lên, tự động chuyển sang bài tiếp theo mượt mà
        console.log(`[Audio Recovery] File chưa sẵn sàng, tự động chuyển sang bài tiếp theo...`);
        setTimeout(() => {
            const nextIdx = (currentTrackIndex + 1) % playlist.length;
            loadTrack(nextIdx, true);
        }, 300);
    });

    window.bioPlayer = {
        next: playNextTrack,
        prev: playPrevTrack,
        load: loadTrack,
        toggle: togglePlayPause
    };
}

function updateAudioWidgetState(isPlaying) {
    isAudioPlaying = isPlaying;

    const playIcon = document.getElementById('play-icon');
    const disc = document.getElementById('audio-disc');
    const eq = document.getElementById('equalizer');
    const vinylOuter = document.querySelector('.vinyl-outer-ring');
    const musicCardWave = document.getElementById('music-card-wave');
    const bannerAudioWaves = document.getElementById('banner-audio-waves');
    const headerMusicText = document.getElementById('header-music-text');

    if (isPlaying) {
        if (playIcon) playIcon.className = 'fa-solid fa-pause';
        if (disc) disc.classList.add('playing');
        if (eq) eq.classList.add('active');
        if (vinylOuter) vinylOuter.classList.add('playing');
        if (musicCardWave) musicCardWave.classList.add('active');
        if (bannerAudioWaves) bannerAudioWaves.style.opacity = '1';

        if (headerMusicText && playlist[currentTrackIndex]) {
            headerMusicText.textContent = `NOW PLAYING: ${playlist[currentTrackIndex].title.toUpperCase()}`;
        }
    } else {
        if (playIcon) playIcon.className = 'fa-solid fa-play';
        if (disc) disc.classList.remove('playing');
        if (eq) eq.classList.remove('active');
        if (vinylOuter) vinylOuter.classList.remove('playing');
        if (musicCardWave) musicCardWave.classList.remove('active');
        if (bannerAudioWaves) bannerAudioWaves.style.opacity = '0.35';

        if (headerMusicText && playlist[currentTrackIndex]) {
            headerMusicText.textContent = `PAUSED: ${playlist[currentTrackIndex].title.toUpperCase()}`;
        }
    }

    // Update active play/pause icon in playlist
    playlist.forEach((_, idx) => {
        const item = document.getElementById(`playlist-item-${idx}`);
        if (item) {
            const icon = item.querySelector('.track-play-icon i');
            if (idx === currentTrackIndex) {
                item.classList.add('active');
                if (icon) icon.className = `fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`;
            } else {
                item.classList.remove('active');
                if (icon) icon.className = 'fa-solid fa-play';
            }
        }
    });
}

/* ====================================================================
   5. MOUSE EFFECTS: SPOTLIGHT, 3D CARD TILT, BANNER PARALLAX & CURSOR
   ==================================================================== */
const stardustSparks = [];
const cometRibbon = [];

function initMouseEffects() {
    const spotlight = document.getElementById('mouse-spotlight');
    const cyberCursor = document.getElementById('cyber-cursor');
    const tiltContainer = document.getElementById('tilt-container');
    const bioCard = document.getElementById('bio-card');
    const bannerImgLayer = document.getElementById('banner-img-layer');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let prevMouseX = mouseX;
    let prevMouseY = mouseY;
    let cursorX = mouseX;
    let cursorY = mouseY;

    let currentAngle = 0;
    let targetAngle = 0;

    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    // Cache card dimensions to avoid layout thrashing on mousemove
    let cardRect = bioCard ? bioCard.getBoundingClientRect() : null;
    window.addEventListener('resize', () => {
        if (bioCard) cardRect = bioCard.getBoundingClientRect();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        const distSq = dx * dx + dy * dy;

        if (distSq > 4) {
            targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);

            // Only add ribbon if mouse moved sufficiently
            if (cometRibbon.length < 18) {
                cometRibbon.push({
                    x: mouseX,
                    y: mouseY,
                    age: 0,
                    life: 20,
                    width: Math.min(Math.sqrt(distSq) * 0.35 + 2, 7)
                });
            }

            if (distSq > 36 && stardustSparks.length < 15) {
                stardustSparks.push({
                    x: mouseX + (Math.random() - 0.5) * 6,
                    y: mouseY + (Math.random() - 0.5) * 6,
                    vx: (Math.random() - 0.5) * 1.5 - dx * 0.08,
                    vy: (Math.random() - 0.5) * 1.5 - dy * 0.08,
                    size: Math.random() * 2 + 1,
                    alpha: 0.8,
                    decay: 0.035
                });
            }

            prevMouseX = mouseX;
            prevMouseY = mouseY;
        }

        if (CONFIG.effects.enableTilt && tiltContainer) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const maxTilt = 6;

            const deltaX = (mouseX - centerX) / centerX;
            const deltaY = (mouseY - centerY) / centerY;

            targetTiltX = -deltaY * maxTilt;
            targetTiltY = deltaX * maxTilt;
        }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        targetTiltX = 0;
        targetTiltY = 0;
        targetAngle = 0;
    });

    const interactiveElements = 'a, button, input, .badge-pill, .server-card, .enter-overlay, .avatar-wrapper, .banner-switch-btn, .track-item';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveElements)) {
            document.body.classList.add('cursor-hover');
        }
    }, { passive: true });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveElements)) {
            document.body.classList.remove('cursor-hover');
        }
    }, { passive: true });

    let lastSpotX = 0;
    let lastSpotY = 0;

    function renderPhysics() {
        cursorX += (mouseX - cursorX) * 0.28;
        cursorY += (mouseY - cursorY) * 0.28;

        let angleDiff = targetAngle - currentAngle;
        while (angleDiff > 180) angleDiff -= 360;
        while (angleDiff < -180) angleDiff += 360;
        currentAngle += angleDiff * 0.12;

        if (cyberCursor) {
            cyberCursor.style.transform = `translate3d(${cursorX.toFixed(1)}px, ${cursorY.toFixed(1)}px, 0) translate(-50%, -50%) rotate(${currentAngle.toFixed(1)}deg)`;
        }

        // Spotlight & Glare updated inside 60fps rAF
        if (CONFIG.effects.enableSpotlight && spotlight) {
            if (Math.abs(cursorX - lastSpotX) > 1 || Math.abs(cursorY - lastSpotY) > 1) {
                spotlight.style.setProperty('--mouse-x', `${cursorX.toFixed(1)}px`);
                spotlight.style.setProperty('--mouse-y', `${cursorY.toFixed(1)}px`);
                lastSpotX = cursorX;
                lastSpotY = cursorY;
            }
        }

        if (CONFIG.effects.enableTilt && tiltContainer) {
            currentTiltX += (targetTiltX - currentTiltX) * 0.08;
            currentTiltY += (targetTiltY - currentTiltY) * 0.08;
            tiltContainer.style.transform = `rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;

            if (bioCard && cardRect) {
                const glareX = cursorX - cardRect.left;
                const glareY = cursorY - cardRect.top;
                bioCard.style.setProperty('--glare-x', `${glareX.toFixed(1)}px`);
                bioCard.style.setProperty('--glare-y', `${glareY.toFixed(1)}px`);
            }

            // Banner Parallax Shift
            if (bannerImgLayer) {
                const shiftX = -currentTiltY * 1.1;
                const shiftY = currentTiltX * 1.1;
                bannerImgLayer.style.transform = `scale(1.04) translate3d(${shiftX.toFixed(1)}px, ${shiftY.toFixed(1)}px, 0)`;
            }
        }

        requestAnimationFrame(renderPhysics);
    }
    requestAnimationFrame(renderPhysics);
}

/* ====================================================================
   6. MONOCHROME PARTICLE & FLUID STARDUST COMET CANVAS
   ==================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || !CONFIG.effects.enableParticles) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const count = Math.min(Math.floor((width * height) / 26000), 36);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.3 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            alpha: Math.random() * 0.4 + 0.15
        });
    }

    const shootingStars = [];
    let nextShootingStarTime = Date.now() + 1500;

    function spawnShootingStar() {
        if (CONFIG.effects.enableShootingStars === false) return;
        
        const angleDeg = Math.random() * 20 + 32;
        const angle = (angleDeg * Math.PI) / 180;
        const speed = Math.random() * 12 + 18;

        const spawnFromTop = Math.random() > 0.35;
        const startX = spawnFromTop ? Math.random() * (width * 0.9) : -60;
        const startY = spawnFromTop ? -60 : Math.random() * (height * 0.45);

        const trailLength = Math.random() * 160 + 220;

        shootingStars.push({
            x: startX,
            y: startY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            length: trailLength,
            width: Math.random() * 1.5 + 2.0,
            alpha: 1.0,
            decay: Math.random() * 0.012 + 0.012,
            glowHue: Math.random() > 0.4 ? 'rgba(168, 85, 247, 0.85)' : 'rgba(255, 255, 255, 0.95)',
            sparkTimer: 0
        });

        nextShootingStarTime = Date.now() + (Math.random() * 5000 + 4500);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key && e.key.toLowerCase() === 's') {
            spawnShootingStar();
        }
    });

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        // 1. Ambient Floating Particles (Batched 60fps)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Batched Particle Network Connections (Zero Math.sqrt, single stroke call)
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 0.65;
        const maxDistSq = 85 * 85;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < maxDistSq) {
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                }
            }
        }
        ctx.stroke();

        // 2. Fluid Glowing Comet Ribbon Trail (No expensive shadowBlur)
        if (cometRibbon.length > 2) {
            for (let i = cometRibbon.length - 1; i > 0; i--) {
                const pt = cometRibbon[i];
                const prevPt = cometRibbon[i - 1];
                pt.age++;

                const progress = pt.age / pt.life;
                if (progress >= 1) {
                    cometRibbon.splice(i, 1);
                    continue;
                }

                const alpha = (1 - progress) * 0.45;
                const lineWidth = pt.width * (1 - progress * 0.7);

                ctx.beginPath();
                ctx.moveTo(prevPt.x, prevPt.y);
                ctx.lineTo(pt.x, pt.y);
                ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
                ctx.lineWidth = lineWidth;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.stroke();
            }
        }

        // 3. Sparkling Stardust Particles (Lightweight)
        for (let i = stardustSparks.length - 1; i >= 0; i--) {
            const s = stardustSparks[i];
            s.x += s.vx;
            s.y += s.vy;
            s.vx *= 0.94;
            s.vy *= 0.94;
            s.alpha -= s.decay;

            if (s.alpha <= 0) {
                stardustSparks.splice(i, 1);
                continue;
            }

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
            ctx.fill();
        }

        // 4. Shooting Stars
        if (CONFIG.effects.enableShootingStars !== false) {
            if (Date.now() >= nextShootingStarTime) {
                spawnShootingStar();
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const star = shootingStars[i];
                star.x += star.vx;
                star.y += star.vy;
                star.alpha -= star.decay;

                if (star.alpha <= 0 || star.x > width + 450 || star.y > height + 450) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                star.sparkTimer++;
                if (star.sparkTimer % 2 === 0) {
                    stardustSparks.push({
                        x: star.x - (star.vx * 0.25) + (Math.random() - 0.5) * 6,
                        y: star.y - (star.vy * 0.25) + (Math.random() - 0.5) * 6,
                        vx: (Math.random() - 0.5) * 1.2,
                        vy: (Math.random() - 0.5) * 1.2,
                        size: Math.random() * 2.0 + 0.8,
                        alpha: star.alpha * 0.9,
                        decay: Math.random() * 0.035 + 0.02
                    });
                }

                const angle = Math.atan2(star.vy, star.vx);
                const tailX = star.x - Math.cos(angle) * star.length;
                const tailY = star.y - Math.sin(angle) * star.length;

                ctx.save();
                const tailGrad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
                tailGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
                tailGrad.addColorStop(0.5, `rgba(255, 255, 255, ${star.alpha * 0.25})`);
                tailGrad.addColorStop(0.85, `rgba(255, 255, 255, ${star.alpha * 0.75})`);
                tailGrad.addColorStop(1, `rgba(255, 255, 255, ${star.alpha})`);

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(star.x, star.y);
                ctx.strokeStyle = tailGrad;
                ctx.lineWidth = star.width;
                ctx.lineCap = 'round';
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.width * 1.4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
                ctx.restore();
            }
        }

        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

/* ====================================================================
   7. REALTIME CLOCK IN FOOTER
   ==================================================================== */
function initLocalClock() {
    const clockEl = document.getElementById('local-time');
    if (!clockEl) return;

    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        clockEl.textContent = `${timeStr} (GMT+7)`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

/* ====================================================================
   8. TOAST NOTIFICATIONS & AUDIO EFFECTS
   ==================================================================== */
function showToast(message, icon = 'fa-solid fa-circle-check') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

function playBeepSound(freq = 520, duration = 0.08) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {}
}
