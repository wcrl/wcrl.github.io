---
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tournament - Combat Robotics League</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background-color: #1a1a1a;
            color: #ffffff;
            font-family: 'Arial', sans-serif;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 0 0 10px rgba(255, 100, 0, 0.8);
        }

        h2 {
            text-align: center;
            color: #cccccc;
            margin-bottom: 40px;
        }

        .section {
            margin-bottom: 40px;
        }

        .section-title {
            font-size: 1.5em;
            margin-bottom: 20px;
            color: #ff6600;
        }

        .frame-container {
            position: relative;
            margin-bottom: 40px;
            border-radius: 10px;
            overflow: hidden;
        }

        .livestream-container {
            aspect-ratio: 16/9;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
        }

        .bracket-container {
            width: 100%;
            height: 550px;
        }

        .frame-container::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #ff6600, #ff9966);
            z-index: -1;
            animation: border-flame 3s infinite;
        }

        .frame-container iframe {
            display: block;
            width: 100%;
            height: 100%;
            background: #000;
            box-shadow: 0 10px 30px rgba(255, 102, 0, 0.3);
        }

        @keyframes border-flame {
            0%, 100% {
                filter: blur(10px) brightness(1);
            }
            50% {
                filter: blur(15px) brightness(1.3);
            }
        }

        .flame-particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ff6600;
            border-radius: 50%;
            filter: blur(2px);
            pointer-events: none;
        }

        @media (max-width: 768px) {
            body {
                padding: 10px;
            }
            h1 {
                font-size: 2em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>TOURNAMENT</h1>
        <h2>Watch the WCRL Tournament live!</h2>

        <div class="section">
            <div class="section-title">🔴 LIVE STREAM</div>
            <div class="frame-container livestream-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rMfYGWAwfcc?si=plZrRr9WNPRyTS5j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        <div class="section">
            <div class="section-title">🏆 TOURNAMENT BRACKET</div>
            <div class="frame-container bracket-container">
                <iframe 
                    src="https://brackethq.com/b/nxkcc/embed/" 
                    frameborder="0">
                </iframe>
            </div>
        </div>
    </div>

    <script>
        // Flame particle effect
        function createFlameParticle(x, y, container) {
            const particle = document.createElement('div');
            particle.className = 'flame-particle';
            particle.style.left = x + 'px';
            particle.style.bottom = '0px';
            container.appendChild(particle);

            gsap.to(particle, {
                y: -Math.random() * 50 - 25,
                x: (Math.random() - 0.5) * 30,
                opacity: 0,
                duration: 1 + Math.random(),
                ease: "power1.out",
                onComplete: () => particle.remove()
            });
        }

        // Add flame particles to frame containers
        document.querySelectorAll('.frame-container').forEach(container => {
            setInterval(() => {
                const rect = container.getBoundingClientRect();
                const x = Math.random() * rect.width;
                createFlameParticle(x, 0, container);
            }, 100);
        });
    </script>
</body>
</html>