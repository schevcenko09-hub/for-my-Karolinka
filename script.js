document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 💗 KAROLINKA LOVE WEBSITE
    // ==========================================

    const body = document.body;

    // ------------------------------------------
    // 🌸 1. Создаём контейнер для сердечек
    // ------------------------------------------

    const heartsContainer = document.createElement("div");
    heartsContainer.className = "floating-hearts";

    body.appendChild(heartsContainer);


    // ------------------------------------------
    // 💕 2. Плавающие сердечки
    // ------------------------------------------

    const hearts = [
        "💗",
        "💖",
        "💕",
        "💘",
        "💝",
        "💓",
        "❤️",
        "✨"
    ];

    function createFloatingHeart() {

        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.animationDuration =
            6 + Math.random() * 8 + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 16000);
    }

    setInterval(createFloatingHeart, 500);


    // ------------------------------------------
    // ✨ 3. Свечение за курсором
    // ------------------------------------------

    const cursorGlow = document.createElement("div");

    cursorGlow.className = "cursor-glow";

    body.appendChild(cursorGlow);

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;
    });


    // ------------------------------------------
    // 💌 4. Печатающийся текст
    // ------------------------------------------

    const typingElement =
        document.querySelector(".typing");

    if (typingElement) {

        const text =
            "Каролинка, ты — самое прекрасное, что есть в моей жизни. ❤️";

        let currentIndex = 0;

        typingElement.textContent = "";

        function typeWriter() {

            if (currentIndex < text.length) {

                typingElement.textContent +=
                    text[currentIndex];

                currentIndex++;

                setTimeout(typeWriter, 65);
            }
        }

        setTimeout(typeWriter, 1200);
    }


    // ------------------------------------------
    // 💖 5. Главная кнопка любви
    // ------------------------------------------

    const loveButton =
        document.querySelector(".love-button");

    if (loveButton) {

        loveButton.addEventListener("click", () => {

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            showLovePopup();
        });
    }


    // ------------------------------------------
    // 💥 6. Взрыв сердечек
    // ------------------------------------------

    function createHeartExplosion(x, y) {

        for (let i = 0; i < 60; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "explosion-heart";

            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                100 + Math.random() * 350;

            const moveX =
                Math.cos(angle) * distance;

            const moveY =
                Math.sin(angle) * distance;

            heart.style.setProperty(
                "--move-x",
                `${moveX}px`
            );

            heart.style.setProperty(
                "--move-y",
                `${moveY}px`
            );

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1500);
        }
    }


    // ------------------------------------------
    // 💌 7. Огромное признание
    // ------------------------------------------

    function showLovePopup() {

        const overlay =
            document.createElement("div");

        overlay.className =
            "love-overlay";

        overlay.innerHTML = `

            <div class="love-popup">

                <div class="popup-heart">
                    💗
                </div>

                <h2>
                    Каролинка
                </h2>

                <p>
                    Ты даже не представляешь,
                    насколько сильно я тебя люблю.
                </p>

                <p>
                    Для меня нет никого прекраснее тебя.
                    Ты особенная. Ты невероятная.
                    Ты моя самая любимая девочка. 💕
                </p>

                <p>
                    И я хочу, чтобы ты всегда знала:
                    я никогда в жизни не хочу тебе изменять.
                    Я выбираю тебя.
                    И моё сердце принадлежит тебе. ❤️
                </p>

                <div class="big-love">
                    Я ЛЮБЛЮ ТЕБЯ
                </div>

                <div class="popup-hearts">
                    💗 💕 💖 💘 💝
                </div>

                <button class="close-love">
                    Закрыть 💕
                </button>

            </div>
        `;

        body.appendChild(overlay);

        setTimeout(() => {
            overlay.classList.add("show");
        }, 50);


        const closeButton =
            overlay.querySelector(".close-love");

        closeButton.addEventListener("click", () => {

            overlay.classList.remove("show");

            setTimeout(() => {
                overlay.remove();
            }, 500);
        });
    }


    // ------------------------------------------
    // 🌸 8. Плавное появление секций
    // ------------------------------------------

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    // ------------------------------------------
    // 💗 9. Сердечко при клике
    // ------------------------------------------

    document.addEventListener("click", (event) => {

        if (
            event.target.closest(".love-button") ||
            event.target.closest(".close-love")
        ) {
            return;
        }

        const clickHeart =
            document.createElement("span");

        clickHeart.className =
            "click-heart";

        clickHeart.textContent =
            "💗";

        clickHeart.style.left =
            `${event.clientX}px`;

        clickHeart.style.top =
            `${event.clientY}px`;

        body.appendChild(clickHeart);

        setTimeout(() => {
            clickHeart.remove();
        }, 1000);
    });


    // ------------------------------------------
    // ✨ 10. Параллакс главной карточки
    // ------------------------------------------

    const heroCard =
        document.querySelector(".hero-card");

    if (heroCard && window.innerWidth > 700) {

        document.addEventListener("mousemove", (event) => {

            const centerX =
                window.innerWidth / 2;

            const centerY =
                window.innerHeight / 2;

            const rotateY =
                (event.clientX - centerX) / 45;

            const rotateX =
                (centerY - event.clientY) / 45;

            heroCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        });

        document.addEventListener("mouseleave", () => {

            heroCard.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    }


    // ------------------------------------------
    // 🌹 11. Кнопки с эффектом ripple
    // ------------------------------------------

    document
        .querySelectorAll("button")
        .forEach((button) => {

            button.addEventListener("click", function(event) {

                const ripple =
                    document.createElement("span");

                ripple.className = "ripple";

                const rect =
                    button.getBoundingClientRect();

                ripple.style.left =
                    `${event.clientX - rect.left}px`;

                ripple.style.top =
                    `${event.clientY - rect.top}px`;

                button.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 700);
            });
        });


    // ------------------------------------------
    // 💕 12. Красивое приветствие в консоли
    // ------------------------------------------

    console.log(
        "%c💗 КАРОЛИНКА 💗",
        "font-size:30px;color:#ff1493;font-weight:bold;"
    );

    console.log(
        "%cЭтот сайт создан с огромной любовью ❤️",
        "font-size:16px;color:#ff69b4;"
    );

});
