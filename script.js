/**
 * ====================================================================
 *                 NHẬT TÂM BIO - SCRIPT CONTROLLER 🌙
 *                  Midnight Chill & Aesthetic Boy Edition 🌙
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initProfileUI();
    initTypewriter();
    initClickToEnter();
    initAudioController();
    initMouseEffects();
    initParticleCanvas();
    initLanyardRealtime();
    initLocalClock();
});

/* ====================================================================
   1. PROFILE UI INITIALIZATION FROM CONFIG
   ==================================================================== */
function initProfileUI() {
    // Set Browser Document Title
    document.title = CONFIG.profile.name || "Nhật Tâm 🌙";

    // Set Profile Text
    const nameEl = document.getElementById('user-display-name');
    const handleEl = document.getElementById('user-handle');
    const taglineEl = document.getElementById('user-tagline');
    const bioEl = document.getElementById('user-bio');
    const avatarEl = document.getElementById('profile-avatar');
    const bannerEl = document.getElementById('card-banner');

    if (nameEl) nameEl.textContent = CONFIG.profile.name;
    if (handleEl) handleEl.textContent = `@${CONFIG.profile.username}`;
    if (taglineEl) taglineEl.textContent = CONFIG.profile.title;
    if (bioEl) bioEl.textContent = CONFIG.profile.bio;
    if (avatarEl && CONFIG.profile.avatar) avatarEl.src = CONFIG.profile.avatar;
    if (bannerEl && CONFIG.profile.banner) bannerEl.style.backgroundImage = `url('${CONFIG.profile.banner}')`;

    // Synchronize Cute Welcome Overlay
    const enterAvatarEl = document.querySelector('.cute-avatar-img, .enter-avatar-img');
    const enterNameEl = document.querySelector('.cute-name, .enter-name');
    if (enterAvatarEl && CONFIG.profile.avatar) enterAvatarEl.src = CONFIG.profile.avatar;
    if (enterNameEl && CONFIG.profile.name) enterNameEl.textContent = CONFIG.profile.name;

    // Initialize Discord Avatar Decoration from CONFIG
    const decorEl = document.getElementById('avatar-decoration');
    const cuteDecorEl = document.getElementById('cute-avatar-decoration');
    const avatarWrapper = document.getElementById('avatar-wrapper');
    const cuteAvatarWrap = document.querySelector('.cute-avatar-wrap');
    const defaultDecoration = CONFIG.profile.avatarDecoration || 'discord_avatar_decoration.png';
    if (defaultDecoration) {
        if (decorEl) {
            decorEl.onerror = () => { decorEl.src = 'discord_avatar_decoration.png'; };
            decorEl.src = defaultDecoration;
            decorEl.style.display = 'block';
        }
        if (cuteDecorEl) {
            cuteDecorEl.onerror = () => { cuteDecorEl.src = 'discord_avatar_decoration.png'; };
            cuteDecorEl.src = defaultDecoration;
            cuteDecorEl.style.display = 'block';
        }
        if (avatarWrapper) avatarWrapper.classList.add('has-decoration');
        if (cuteAvatarWrap) cuteAvatarWrap.classList.add('has-decoration');
    }

    // Force Browser Tab Favicon to sync with cute avatar and bypass browser tab cache immediately
    try {
        const updateFaviconsWithCanvas = () => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = 64;
                    canvas.height = 64;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;

                    // Circular crop with anti-aliasing
                    ctx.beginPath();
                    ctx.arc(32, 32, 31, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.clip();

                    const minDim = Math.min(img.naturalWidth, img.naturalHeight);
                    const sx = (img.naturalWidth - minDim) / 2;
                    const sy = Math.max(0, (img.naturalHeight - minDim) * 0.22);
                    ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, 64, 64);

                    const dataUrl = canvas.toDataURL('image/png');
                    const iconLinks = document.querySelectorAll("link[rel*='icon']");
                    iconLinks.forEach(link => {
                        link.href = dataUrl;
                    });
                } catch (e) {
                    // Fallback to cachebusting timestamp
                }
            };
            img.src = (CONFIG.profile.avatar || 'avatar.jpg') + '?v=' + Date.now();
        };
        updateFaviconsWithCanvas();
    } catch (err) {
        // Safe fallback
    }

    // Render Badges
    const badgesContainer = document.getElementById('badges-container');
    if (badgesContainer && CONFIG.profile.badges) {
        badgesContainer.innerHTML = '';
        CONFIG.profile.badges.forEach(badge => {
            const pill = document.createElement('div');
            pill.className = 'badge-pill';
            pill.innerHTML = `<i class="${badge.icon}" style="color:${badge.color || '#38bdf8'};"></i> <span>${badge.label}</span>`;
            badgesContainer.appendChild(pill);
        });
    }

    // Render 2 Discord Servers
    const serversGrid = document.getElementById('servers-grid');
    if (serversGrid && CONFIG.servers) {
        serversGrid.innerHTML = '';
        CONFIG.servers.forEach((srv, idx) => {
            const card = document.createElement('div');
            card.className = 'server-card';
            card.id = `server-card-${idx}`;
            card.innerHTML = `
                <img src="${srv.banner}" alt="${srv.name} Banner" class="server-banner-img" id="server-banner-${idx}">
                <div class="server-body">
                    <div class="server-icon-wrap">
                        <img src="${srv.icon}" alt="${srv.name} Icon" class="server-icon" id="server-icon-${idx}">
                    </div>
                    <div class="server-content">
                        <div class="server-top-line">
                            <span class="server-name" id="server-name-${idx}">${srv.name}</span>
                            <span class="server-tag">${srv.tag}</span>
                        </div>
                        <div class="server-stats" id="server-stats-${idx}" style="display:flex;align-items:center;gap:7px;font-size:0.7rem;color:var(--text-muted);font-family:var(--font-mono);margin-top:1px;">
                            <span style="display:inline-flex;align-items:center;gap:4px;"><i class="fa-solid fa-circle" style="color:var(--status-online);font-size:0.45rem;"></i> ${srv.online || 'Active Hub'}</span>
                            <span>•</span>
                            <span>${srv.members || 'Community'}</span>
                        </div>
                        <span class="server-role">${srv.role}</span>
                        <p class="server-desc">${srv.description}</p>
                    </div>
                    <a href="${srv.inviteUrl}" target="_blank" rel="noopener noreferrer" class="server-join-btn">
                        <i class="fa-brands fa-discord"></i> Join ♡
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

            // Fetch latest live Discord server data
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
            a.innerHTML = `<i class="${soc.icon}"></i> <span>${soc.name}</span>`;

            if (soc.copy) {
                a.addEventListener('click', (e) => {
                    navigator.clipboard.writeText(soc.copy);
                    showToast(`Đã sao chép ${soc.name}: ${soc.copy}`, 'fa-solid fa-circle-check');
                });
            }

            socialsList.appendChild(a);
        });
    }

    // Render Core Arsenal from CONFIG
    const arsenalGrid = document.getElementById('arsenal-grid');
    if (arsenalGrid && Array.isArray(CONFIG.techStack) && CONFIG.techStack.length > 0) {
        arsenalGrid.innerHTML = '';
        CONFIG.techStack.forEach(item => {
            const pill = document.createElement('div');
            pill.className = 'arsenal-pill';
            pill.innerHTML = `
                <div class="arsenal-icon-wrap">
                    <i class="${item.icon}"></i>
                </div>
                <div class="arsenal-info">
                    <span class="arsenal-name">${item.name}</span>
                    <span class="arsenal-sub">${item.domain}</span>
                </div>
            `;
            arsenalGrid.appendChild(pill);
        });
    }

    // Copy Tag Button Event
    const copyTagBtn = document.getElementById('copy-tag-btn');
    if (copyTagBtn) {
        copyTagBtn.addEventListener('click', () => {
            const textToCopy = CONFIG.profile.username || CONFIG.discordId;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Đã sao chép Discord: ${textToCopy} ♡`, 'fa-solid fa-circle-check');
                playCuteChimeSound();
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

        if (nameEl && guild.name) {
            nameEl.textContent = guild.name;
        }

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
                <span style="display:inline-flex;align-items:center;gap:4px;"><i class="fa-solid fa-circle" style="color:var(--status-online);font-size:0.45rem;"></i> ${onlineCount.toLocaleString()} Online</span>
                <span>•</span>
                <span>${memberCount.toLocaleString()} Members</span>
            `;
        }
    } catch (e) {
        // Silently use values defined in config.js
    }
}

/* ====================================================================
   2. TYPEWRITER EFFECT FOR QUOTES
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

        let typeSpeed = isDeleting ? 25 : 60;

        if (!isDeleting && charIndex === currentQuote.length) {
            typeSpeed = 2800; // Pause at end of quote
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
    if (!overlay) return;

    overlay.addEventListener('click', () => {
        overlay.classList.add('entered');
        playCuteChimeSound();

        // Start Audio Playback if enabled
        if (CONFIG.music && CONFIG.music.autoplayOnEnter) {
            const audio = document.getElementById('bg-audio');
            if (audio) {
                audio.play().then(() => {
                    updateAudioWidgetState(true);
                    if (playlist.length > 0 && playlist[currentTrackIndex]) {
                        showToast(`Đang phát: ${playlist[currentTrackIndex].title} ♡`, 'fa-solid fa-music');
                    }
                }).catch(e => console.log('Audio autoplay prevented:', e));
            }
        }
    });
}

/* ====================================================================
   4. AUDIO PLAYER CONTROLLER (Playlist & Controls)
   ==================================================================== */
let currentTrackIndex = 0;
let playlist = [];

function initAudioController() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('audio-play-btn');
    const prevBtn = document.getElementById('audio-prev-btn');
    const nextBtn = document.getElementById('audio-next-btn');
    const playIcon = document.getElementById('play-icon');
    const disc = document.getElementById('audio-disc');
    const eq = document.getElementById('equalizer');
    const volumeSlider = document.getElementById('volume-slider');
    const trackTitle = document.getElementById('audio-track-title');
    const artistName = document.getElementById('audio-artist-name');

    if (!audio || !CONFIG.music) return;

    if (Array.isArray(CONFIG.music.playlist) && CONFIG.music.playlist.length > 0) {
        playlist = CONFIG.music.playlist;
    } else if (CONFIG.music.url) {
        playlist = [{
            title: CONFIG.music.title || 'Lofi Chill ♡',
            artist: CONFIG.music.artist || 'Sanctuary Beats',
            url: CONFIG.music.url
        }];
    }

    if (playlist.length === 0) return;

    audio.volume = CONFIG.music.volume || 0.4;
    if (volumeSlider) volumeSlider.value = audio.volume;

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

        if (trackTitle) {
            trackTitle.textContent = track.title;
            trackTitle.title = track.title;
        }
        if (artistName) {
            const countTag = playlist.length > 1 ? `${currentTrackIndex + 1}/${playlist.length} • ` : '';
            artistName.textContent = `${countTag}${track.artist}`;
        }

        if (autoPlay) {
            audio.play().then(() => {
                updateAudioWidgetState(true);
                showToast(`Đang phát: ${track.title} ♡`, 'fa-solid fa-music');
            }).catch(err => {
                console.log('Audio play prevented:', err);
                updateAudioWidgetState(false);
            });
        }
    }

    function playNextTrack() {
        playCuteChimeSound();
        const nextIdx = (currentTrackIndex + 1) % playlist.length;
        loadTrack(nextIdx, true);
    }

    function playPrevTrack() {
        playCuteChimeSound();
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
            return;
        }
        const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(prevIdx, true);
    }

    // Set initial track metadata
    loadTrack(0, false);

    // Play/Pause button
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            playCuteChimeSound();
            if (audio.paused) {
                audio.play().then(() => {
                    updateAudioWidgetState(true);
                }).catch(e => console.log('Audio playback error:', e));
            } else {
                audio.pause();
                updateAudioWidgetState(false);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => playNextTrack());
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => playPrevTrack());
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = parseFloat(e.target.value);
        });
    }

    audio.addEventListener('play', () => updateAudioWidgetState(true));
    audio.addEventListener('pause', () => updateAudioWidgetState(false));
    audio.addEventListener('ended', () => playNextTrack());

    window.bioPlayer = {
        next: playNextTrack,
        prev: playPrevTrack,
        load: loadTrack
    };
}

function updateAudioWidgetState(isPlaying) {
    const playIcon = document.getElementById('play-icon');
    const disc = document.getElementById('audio-disc');
    const eq = document.getElementById('equalizer');

    if (isPlaying) {
        if (playIcon) playIcon.className = 'fa-solid fa-pause';
        if (disc) disc.classList.add('playing');
        if (eq) eq.classList.add('active');
    } else {
        if (playIcon) playIcon.className = 'fa-solid fa-play';
        if (disc) disc.classList.remove('playing');
        if (eq) eq.classList.remove('active');
    }
}

/* ====================================================================
   5. MOUSE EFFECTS: SPOTLIGHT, 3D CARD TILT & CUTE CURSOR
   ==================================================================== */
const stardustSparks = [];
const cometRibbon = [];

function initMouseEffects() {
    const spotlight = document.getElementById('mouse-spotlight');
    const cursorDot = document.getElementById('cursor-dot');
    const cyberCursor = document.getElementById('cyber-cursor');
    const tiltContainer = document.getElementById('tilt-container');
    const bioCard = document.getElementById('bio-card');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let prevMouseX = mouseX;
    let prevMouseY = mouseY;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let prevCursorX = mouseX;
    let prevCursorY = mouseY;

    let currentAngle = 0;
    let scaleX = 1;
    let scaleY = 1;

    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    let hoveredElement = null;

    function updateCursorDot(x, y) {
        if (cursorDot) {
            cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
    }
    updateCursorDot(mouseX, mouseY);

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        updateCursorDot(mouseX, mouseY);
        document.body.classList.remove('cursor-hidden');

        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        const speed = Math.sqrt(dx * dx + dy * dy);

        // Add to Silk Comet Ribbon Trail (soft pink)
        cometRibbon.push({
            x: mouseX,
            y: mouseY,
            age: 0,
            life: 30,
            width: Math.min(speed * 0.45 + 3, 10)
        });

        if (cometRibbon.length > 36) {
            cometRibbon.shift();
        }

        // Emit glowing stardust sparks when moving
        if (speed > 2.5) {
            const count = Math.min(Math.floor(speed / 4.2), 3);
            for (let i = 0; i < count; i++) {
                stardustSparks.push({
                    x: mouseX + (Math.random() - 0.5) * 8,
                    y: mouseY + (Math.random() - 0.5) * 8,
                    vx: (Math.random() - 0.5) * 2 - dx * 0.08,
                    vy: (Math.random() - 0.5) * 2 - dy * 0.08,
                    size: Math.random() * 2.4 + 1.2,
                    alpha: 0.95,
                    decay: Math.random() * 0.025 + 0.02
                });
            }
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;

        // Ambient spotlight
        if (CONFIG.effects.enableSpotlight && spotlight) {
            spotlight.style.setProperty('--mouse-x', `${mouseX}px`);
            spotlight.style.setProperty('--mouse-y', `${mouseY}px`);
        }

        // 3D Card Tilt
        if (CONFIG.effects.enableTilt && tiltContainer) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const maxTilt = 7;

            const deltaX = (mouseX - centerX) / centerX;
            const deltaY = (mouseY - centerY) / centerY;

            targetTiltX = -deltaY * maxTilt;
            targetTiltY = deltaX * maxTilt;

            if (bioCard) {
                const rect = bioCard.getBoundingClientRect();
                const glareX = mouseX - rect.left;
                const glareY = mouseY - rect.top;
                bioCard.style.setProperty('--glare-x', `${glareX}px`);
                bioCard.style.setProperty('--glare-y', `${glareY}px`);
            }
        }
    });

    document.addEventListener('mouseleave', () => {
        document.body.classList.add('cursor-hidden');
        targetTiltX = 0;
        targetTiltY = 0;
        hoveredElement = null;
    });

    document.addEventListener('mouseenter', () => {
        document.body.classList.remove('cursor-hidden');
    });

    window.addEventListener('mousedown', () => {
        document.body.classList.add('cursor-clicking');
    });

    window.addEventListener('mouseup', () => {
        document.body.classList.remove('cursor-clicking');
    });

    // Cute Click Effect: Ripple + Floating Heart Particles
    window.addEventListener('click', (e) => {
        // Shockwave Ripple
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => {
            if (ripple && ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 550);

        // Spawn floating stardust & aesthetic icons
        const cuteIcons = ['✦', '🌙', '🪐', '🎮', '🎧', '☕', '🐾', '✨', '⭐'];
        const chosenIcon = cuteIcons[Math.floor(Math.random() * cuteIcons.length)];
        const heartEl = document.createElement('span');
        heartEl.className = 'click-heart';
        heartEl.textContent = chosenIcon;
        heartEl.style.left = `${e.clientX}px`;
        heartEl.style.top = `${e.clientY}px`;
        document.body.appendChild(heartEl);
        setTimeout(() => {
            if (heartEl && heartEl.parentNode) heartEl.parentNode.removeChild(heartEl);
        }, 800);

        // Starburst micro sparks
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 / 8) * i + (Math.random() - 0.5) * 0.5;
            const burstSpeed = Math.random() * 3.5 + 2.5;
            stardustSparks.push({
                x: e.clientX,
                y: e.clientY,
                vx: Math.cos(angle) * burstSpeed,
                vy: Math.sin(angle) * burstSpeed,
                size: Math.random() * 2.8 + 1.2,
                alpha: 1.0,
                decay: Math.random() * 0.035 + 0.02
            });
        }
    });

    const interactiveElements = 'a, button, input, .badge-pill, .server-card, .activity-card, .gear-slot, .nav-tab, .music-card, .social-item, .cute-pill-btn, .enter-overlay, .volume-slider, .social-pill';
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest(interactiveElements);
        if (target) {
            document.body.classList.add('cursor-hover');
            if (target.matches('.badge-pill, .social-pill, .ctrl-btn, .copy-tag-btn')) {
                hoveredElement = target;
            } else {
                hoveredElement = null;
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest(interactiveElements);
        if (target) {
            document.body.classList.remove('cursor-hover');
            hoveredElement = null;
        }
    });

    function renderPhysics() {
        let targetX = mouseX;
        let targetY = mouseY;

        if (hoveredElement) {
            const rect = hoveredElement.getBoundingClientRect();
            const elemCenterX = rect.left + rect.width / 2;
            const elemCenterY = rect.top + rect.height / 2;
            targetX = mouseX + (elemCenterX - mouseX) * 0.35;
            targetY = mouseY + (elemCenterY - mouseY) * 0.35;
        }

        cursorX += (targetX - cursorX) * 0.18;
        cursorY += (targetY - cursorY) * 0.18;

        const vx = cursorX - prevCursorX;
        const vy = cursorY - prevCursorY;
        const speed = Math.sqrt(vx * vx + vy * vy);
        prevCursorX = cursorX;
        prevCursorY = cursorY;

        if (speed > 1.2) {
            const moveAngle = Math.atan2(vy, vx) * (180 / Math.PI);
            let angleDiff = moveAngle - currentAngle;
            while (angleDiff > 180) angleDiff -= 360;
            while (angleDiff < -180) angleDiff += 360;
            currentAngle += angleDiff * 0.14;

            const targetStretch = Math.min(speed * 0.014, 0.3);
            scaleX += (1 + targetStretch - scaleX) * 0.18;
            scaleY += (1 - targetStretch * 0.7 - scaleY) * 0.18;
        } else {
            let angleDiff = 0 - currentAngle;
            while (angleDiff > 180) angleDiff -= 360;
            while (angleDiff < -180) angleDiff += 360;
            currentAngle += angleDiff * 0.08;

            scaleX += (1 - scaleX) * 0.12;
            scaleY += (1 - scaleY) * 0.12;
        }

        if (cyberCursor) {
            cyberCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) rotate(${currentAngle.toFixed(1)}deg) scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;
        }

        if (CONFIG.effects.enableTilt && tiltContainer) {
            currentTiltX += (targetTiltX - currentTiltX) * 0.08;
            currentTiltY += (targetTiltY - currentTiltY) * 0.08;
            tiltContainer.style.transform = `rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
        }

        requestAnimationFrame(renderPhysics);
    }
    requestAnimationFrame(renderPhysics);
}

/* ====================================================================
   6. SAKURA PETALS, STARDUST & SHOOTING STARS CANVAS
   ==================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || !CONFIG.effects.enableParticles) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // 1. Sakura Petals (Cánh hoa anh đào rơi bồng bềnh)
    const petals = [];
    const petalCount = Math.min(Math.floor((width * height) / 22000), 40);

    for (let i = 0; i < petalCount; i++) {
        petals.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 6 + 7,
            speedY: Math.random() * 0.8 + 0.6,
            speedX: Math.random() * 0.5 - 0.1,
            angle: Math.random() * Math.PI * 2,
            angleSpeed: (Math.random() - 0.5) * 0.02,
            flip: Math.random() * Math.PI,
            flipSpeed: Math.random() * 0.03 + 0.015,
            sway: Math.random() * Math.PI * 2,
            swaySpeed: Math.random() * 0.02 + 0.01,
            alpha: Math.random() * 0.4 + 0.45
        });
    }

    // 2. Ambient Floating Pastel Stars
    const stars = [];
    const starCount = 35;
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            alpha: Math.random() * 0.6 + 0.2,
            pulseSpeed: Math.random() * 0.03 + 0.01,
            pulseVal: Math.random() * Math.PI
        });
    }

    // 3. Shooting Stars Generator
    const shootingStars = [];
    let nextShootingStarTime = Date.now() + 1200;

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
            width: Math.random() * 1.5 + 2.2,
            alpha: 1.0,
            decay: Math.random() * 0.012 + 0.012,
            glowHue: Math.random() > 0.4 ? 'rgba(56, 189, 248, 0.95)' : 'rgba(129, 140, 248, 0.95)',
            sparkTimer: 0
        });

        nextShootingStarTime = Date.now() + (Math.random() * 5000 + 4500);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key && e.key.toLowerCase() === 's') spawnShootingStar();
    });

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Twinkling Pastel Stars
        for (let i = 0; i < stars.length; i++) {
            const st = stars[i];
            st.pulseVal += st.pulseSpeed;
            const currentAlpha = st.alpha * (0.6 + 0.4 * Math.sin(st.pulseVal));

            ctx.save();
            ctx.beginPath();
            ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 209, 220, ${currentAlpha})`;
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.restore();
        }

        // 2. Draw Gentle Fluttering Sakura Petals 🌸
        for (let i = 0; i < petals.length; i++) {
            const p = petals[i];
            p.sway += p.swaySpeed;
            p.x += p.speedX + Math.sin(p.sway) * 0.8;
            p.y += p.speedY;
            p.angle += p.angleSpeed;
            p.flip += p.flipSpeed;

            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width;
            }
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.scale(Math.cos(p.flip), 1);

            // Draw graceful heart/sakura petal curve
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-p.size * 0.8, -p.size * 0.7, -p.size * 1.1, p.size * 0.6, 0, p.size * 1.3);
            ctx.bezierCurveTo(p.size * 1.1, p.size * 0.6, p.size * 0.8, -p.size * 0.7, 0, 0);

            const petalGrad = ctx.createLinearGradient(0, -p.size * 0.5, 0, p.size * 1.3);
            petalGrad.addColorStop(0, `rgba(255, 230, 240, ${p.alpha * 0.9})`);
            petalGrad.addColorStop(1, `rgba(255, 117, 160, ${p.alpha * 0.8})`);

            ctx.fillStyle = petalGrad;
            ctx.shadowColor = 'rgba(255, 117, 160, 0.4)';
            ctx.shadowBlur = 4;
            ctx.fill();
            ctx.restore();
        }

        // 3. Draw Fluid Silk Comet Ribbon Trail (Soft pink & lilac)
        if (cometRibbon.length > 2) {
            ctx.save();
            for (let i = cometRibbon.length - 1; i >= 0; i--) {
                const pt = cometRibbon[i];
                pt.age++;
                if (pt.age >= pt.life) cometRibbon.splice(i, 1);
            }

            for (let i = cometRibbon.length - 1; i > 0; i--) {
                const pt = cometRibbon[i];
                const prevPt = cometRibbon[i - 1];
                const progress = pt.age / pt.life;
                const alpha = (1 - progress) * 0.5;
                const lineWidth = pt.width * (1 - progress * 0.65);

                ctx.beginPath();
                ctx.moveTo(prevPt.x, prevPt.y);
                const midX = (prevPt.x + pt.x) / 2;
                const midY = (prevPt.y + pt.y) / 2;
                ctx.quadraticCurveTo(prevPt.x, prevPt.y, midX, midY);
                ctx.lineTo(pt.x, pt.y);

                ctx.strokeStyle = `rgba(255, 117, 160, ${alpha})`;
                ctx.lineWidth = lineWidth;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.shadowColor = '#38bdf8';
                ctx.shadowBlur = 12 * (1 - progress);
                ctx.stroke();
            }
            ctx.restore();
        }

        // 4. Draw Sparkling Stardust Particles
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

            ctx.save();
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 182, 218, ${s.alpha})`;
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.restore();
        }

        // 5. Draw & Update Shooting Stars (Pastel Pink/Lavender Comets)
        if (CONFIG.effects.enableShootingStars !== false) {
            if (Date.now() >= nextShootingStarTime) spawnShootingStar();

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
                        alpha: star.alpha * 0.95,
                        decay: Math.random() * 0.035 + 0.02
                    });
                }

                const angle = Math.atan2(star.vy, star.vx);
                const tailX = star.x - Math.cos(angle) * star.length;
                const tailY = star.y - Math.sin(angle) * star.length;

                ctx.save();
                const tailGrad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
                tailGrad.addColorStop(0, 'rgba(255, 117, 160, 0)');
                tailGrad.addColorStop(0.5, `rgba(255, 182, 218, ${star.alpha * 0.35})`);
                tailGrad.addColorStop(0.85, `rgba(255, 255, 255, ${star.alpha * 0.85})`);
                tailGrad.addColorStop(1, `rgba(255, 255, 255, ${star.alpha})`);

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(star.x, star.y);
                ctx.strokeStyle = tailGrad;
                ctx.lineWidth = star.width;
                ctx.lineCap = 'round';
                ctx.shadowColor = star.glowHue;
                ctx.shadowBlur = 18;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.width * 1.35, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = 22;
                ctx.fill();
                ctx.restore();
            }
        }

        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

/* ====================================================================
   7. DISCORD REALTIME PRESENCE (Lanyard WebSocket & REST)
   ==================================================================== */
let spotifyProgressInterval = null;

function initLanyardRealtime() {
    if (!CONFIG.discordId) {
        setMockDiscordState();
        return;
    }
    connectLanyardWebSocket();
}

function connectLanyardWebSocket() {
    const ws = new WebSocket('wss://api.lanyard.rest/socket');
    let heartbeatInterval = null;

    ws.onopen = () => {
        ws.send(JSON.stringify({
            op: 2,
            d: { subscribe_to_id: CONFIG.discordId }
        }));
    };

    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            const { op, t, d } = data;

            if (op === 1) {
                const interval = d.heartbeat_interval;
                heartbeatInterval = setInterval(() => {
                    ws.send(JSON.stringify({ op: 3 }));
                }, interval);
            }

            if (t === 'INIT_STATE' || t === 'PRESENCE_UPDATE') {
                updateDiscordPresenceUI(d);
            }
        } catch (e) {
            console.error('Lanyard WS parse error:', e);
        }
    };

    ws.onerror = () => {
        fetchLanyardREST();
    };

    ws.onclose = () => {
        if (heartbeatInterval) clearInterval(heartbeatInterval);
        setTimeout(fetchLanyardREST, 5000);
    };
}

async function fetchLanyardREST() {
    try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${CONFIG.discordId}`);
        if (res.status === 404) {
            setMockDiscordState(true);
            setTimeout(fetchLanyardREST, 4000);
            return;
        }
        const json = await res.json();
        if (json && json.success && json.data) {
            updateDiscordPresenceUI(json.data);
        } else {
            setMockDiscordState(true);
            setTimeout(fetchLanyardREST, 4000);
        }
    } catch (e) {
        setMockDiscordState(false);
        setTimeout(fetchLanyardREST, 5000);
    }
}

function updateDiscordPresenceUI(data) {
    if (!data) return;

    const { discord_user, discord_status, activities, listening_to_spotify, spotify } = data;

    // 1. Update Avatar (preserve custom avatar if set)
    const avatarEl = document.getElementById('profile-avatar');
    if (avatarEl) {
        if (CONFIG.profile.avatar) {
            avatarEl.src = CONFIG.profile.avatar;
        } else if (discord_user && discord_user.avatar) {
            const isGif = discord_user.avatar.startsWith('a_');
            const ext = isGif ? 'gif' : 'png';
            avatarEl.src = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.${ext}?size=256`;
        }
    }

    // 1.1 Update Discord Avatar Decoration (Khung avatar người dùng Discord)
    const decorEl = document.getElementById('avatar-decoration');
    const cuteDecorEl = document.getElementById('cute-avatar-decoration');
    const avatarWrapper = document.getElementById('avatar-wrapper');
    const cuteAvatarWrap = document.querySelector('.cute-avatar-wrap');

    let decorationUrl = CONFIG.profile.avatarDecoration || 'discord_avatar_decoration.png';
    if (discord_user && discord_user.avatar_decoration_data && discord_user.avatar_decoration_data.asset) {
        decorationUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${discord_user.avatar_decoration_data.asset}.png?size=240&passthrough=true`;
    }

    if (decorationUrl) {
        if (decorEl) {
            decorEl.onerror = () => { decorEl.src = 'discord_avatar_decoration.png'; };
            decorEl.src = decorationUrl;
            decorEl.style.display = 'block';
        }
        if (cuteDecorEl) {
            cuteDecorEl.onerror = () => { cuteDecorEl.src = 'discord_avatar_decoration.png'; };
            cuteDecorEl.src = decorationUrl;
            cuteDecorEl.style.display = 'block';
        }
        if (avatarWrapper) avatarWrapper.classList.add('has-decoration');
        if (cuteAvatarWrap) cuteAvatarWrap.classList.add('has-decoration');
    }

    // 2. Update Status Dot & Top Banner Status
    const statusDot = document.querySelector('.status-dot');
    const headerStatusText = document.getElementById('header-status-text');

    if (statusDot) {
        statusDot.className = `status-dot ${discord_status}`;
    }

    if (headerStatusText) {
        headerStatusText.textContent = `DISCORD • ${discord_status.toUpperCase()} 🌸`;
    }

    // 3. Custom Status
    const customStatus = activities ? activities.find(a => a.type === 4) : null;
    const customStatusEmoji = document.getElementById('custom-status-emoji');
    const customStatusText = document.getElementById('custom-status-text');

    if (customStatus) {
        let emoji = '🌸';
        if (customStatus.emoji) {
            if (customStatus.emoji.id) {
                emoji = `<img src="https://cdn.discordapp.com/emojis/${customStatus.emoji.id}.png" style="width:20px;height:20px;vertical-align:middle;">`;
            } else if (customStatus.emoji.name) {
                emoji = customStatus.emoji.name;
            }
        }
        if (customStatusEmoji) customStatusEmoji.innerHTML = emoji;
        if (customStatusText) customStatusText.textContent = customStatus.state || 'Online on Discord ♡';
    } else {
        if (customStatusEmoji) customStatusEmoji.textContent = '🌸';
        if (customStatusText) customStatusText.textContent = `Status: ${discord_status.toUpperCase()} • Available ♡`;
    }

    // 4. Spotify Live Activity
    const spotifyCard = document.getElementById('spotify-card');
    const spotifyArt = document.getElementById('spotify-album-art');
    const spotifyTrack = document.getElementById('spotify-track');
    const spotifyArtist = document.getElementById('spotify-artist');
    const spotifyTimeCurrent = document.getElementById('spotify-time-current');
    const spotifyTimeTotal = document.getElementById('spotify-time-total');
    const spotifyProgressFill = document.getElementById('spotify-progress-fill');

    if (spotifyProgressInterval) clearInterval(spotifyProgressInterval);

    if (listening_to_spotify && spotify) {
        if (spotifyCard) spotifyCard.style.display = 'flex';
        if (spotifyArt) spotifyArt.src = spotify.album_art_url;
        if (spotifyTrack) spotifyTrack.textContent = spotify.song;
        if (spotifyArtist) spotifyArtist.textContent = `by ${spotify.artist}`;

        const duration = spotify.timestamps.end - spotify.timestamps.start;
        if (spotifyTimeTotal) spotifyTimeTotal.textContent = formatMs(duration);

        function updateProgress() {
            const elapsed = Date.now() - spotify.timestamps.start;
            const clamped = Math.max(0, Math.min(elapsed, duration));
            const pct = (clamped / duration) * 100;

            if (spotifyTimeCurrent) spotifyTimeCurrent.textContent = formatMs(clamped);
            if (spotifyProgressFill) spotifyProgressFill.style.width = `${pct}%`;

            if (elapsed >= duration) {
                clearInterval(spotifyProgressInterval);
            }
        }

        updateProgress();
        spotifyProgressInterval = setInterval(updateProgress, 1000);
    } else {
        if (spotifyCard) spotifyCard.style.display = 'none';
    }

    // 5. Game / Other Activity
    const gameActivity = activities ? activities.find(a => a.type !== 4) : null;
    const gameCard = document.getElementById('game-card');
    const gameArt = document.getElementById('game-art');
    const gameName = document.getElementById('game-name');
    const gameState = document.getElementById('game-state');
    const gameDetails = document.getElementById('game-details-text');
    const gameBadge = document.getElementById('game-badge');

    if (gameActivity) {
        if (gameCard) gameCard.style.display = 'flex';
        if (gameName) gameName.textContent = gameActivity.name;
        if (gameState) gameState.textContent = gameActivity.state || 'Active now';
        if (gameDetails) gameDetails.textContent = gameActivity.details || '';

        if (gameArt) {
            if (gameActivity.assets && gameActivity.assets.large_image) {
                let imgUrl = gameActivity.assets.large_image;
                if (imgUrl.startsWith('mp:external/')) {
                    imgUrl = 'https://media.discordapp.net/' + imgUrl.replace('mp:', '');
                } else if (gameActivity.application_id) {
                    imgUrl = `https://cdn.discordapp.com/app-assets/${gameActivity.application_id}/${imgUrl}.png`;
                }
                gameArt.src = imgUrl;
                gameArt.style.display = 'block';
            } else {
                gameArt.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop';
            }
        }

        if (gameBadge) {
            let label = 'PLAYING GAME';
            let icon = 'fa-gamepad';
            if (gameActivity.name.toLowerCase().includes('visual studio code') || gameActivity.name.toLowerCase().includes('code')) {
                label = 'DEVELOPING ✨';
                icon = 'fa-code';
            } else if (gameActivity.type === 2) {
                label = 'LISTENING 🎧';
                icon = 'fa-headphones';
            } else if (gameActivity.type === 3) {
                label = 'STREAMING ♡';
                icon = 'fa-video';
            }
            gameBadge.innerHTML = `<i class="fa-solid ${icon}"></i> ${label}`;
        }
    } else {
        if (gameCard) gameCard.style.display = 'none';
    }
}

function setMockDiscordState(is404 = false) {
    const statusDot = document.querySelector('.status-dot');
    const headerStatusText = document.getElementById('header-status-text');
    const customStatusEmoji = document.getElementById('custom-status-emoji');
    const customStatusText = document.getElementById('custom-status-text');

    if (statusDot) statusDot.className = 'status-dot online';
    if (headerStatusText) headerStatusText.textContent = 'DISCORD • ONLINE 🌙';

    if (customStatusEmoji) customStatusEmoji.innerHTML = '🌙';
    if (customStatusText) {
        customStatusText.innerHTML = `Active on Discord • @${CONFIG.profile.username || 'idksenz.'} 🌙`;
    }
}

function formatMs(ms) {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

/* ====================================================================
   8. REALTIME CLOCK IN FOOTER
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
   9. TOAST NOTIFICATIONS & CUTE AUDIO CHIME
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

// Sweet soft harmonic chime chords (C6, E6, G6)
function playCuteChimeSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        // Pentatonic sweet notes: 1046Hz (C6), 1318Hz (E6)
        const notes = [1046, 1318];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);

            gain.gain.setValueAtTime(0.035, ctx.currentTime + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 0.18);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + i * 0.05);
            osc.stop(ctx.currentTime + i * 0.05 + 0.18);
        });
    } catch (e) {
        // Silent catch for audio context restrictions
    }
}
