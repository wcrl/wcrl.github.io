---
layout: home
title: Competitor Page
---

<!-- 
Ideas:
- 3 buttons on the top, Register, Build, Compete and depending on which one is selected it shows info based on selection
- Overlay in the top with countdown to next match
-->


# Spring 2025 Registration Open

<button id="register-button" style="background-color: black; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; transition: transform 0.2s, background-color 0.2s;" onclick="window.open('https://forms.gle/cWv3s9G7wya3rGDP7', '_blank')">
    Register
</button>

<script>
    document.getElementById('register-button').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#333';
    });
    document.getElementById('register-button').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'black';
    });
</script>

**Note:** *you can register in the middle of the season as well. Just keep in mind you need to participate in three to qualify for the tournament - or win one!*


# Important Dates

### Next Match In
<div id="countdown" style="font-size: 20px; margin-top: 20px; font-family: 'Arial', sans-serif; color:rgb(21, 20, 22); text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"></div>
<script>
    function countdownTimer(endDate) {
        let timer, days, hours, minutes, seconds;
        endDate = new Date(endDate).getTime();

        if (isNaN(endDate)) return;

        timer = setInterval(calculate, 1000);

        function calculate() {
            let startDate = new Date().getTime();
            let timeRemaining = parseInt((endDate - startDate) / 1000);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                seconds = parseInt(timeRemaining % 60);

                document.getElementById("countdown").innerHTML =
                    `<span style="font-size: 36px;">${parseInt(days, 10)}</span>d ` +
                    `<span style="font-size: 36px;">${("0" + hours).slice(-2)}</span>h ` +
                    `<span style="font-size: 36px;">${("0" + minutes).slice(-2)}</span>m ` +
                    `<span style="font-size: 36px;">${("0" + seconds).slice(-2)}</span>s`;
            } else {
                return;
            }
        }
    }
    (function () {
        countdownTimer("March 3, 2025 20:00:00");
    })();
</script> 

### Qualifying Matches
- March 3rd (8pm @ Fabrication Lab)
- March 17th (8pm @ Fabrication Lab)
- March 24th (8pm @ Fabrication Lab)
- March 31st (8pm @ Fabrication Lab)
- April 7th (8pm @ Fabrication Lab)
- April 16th (8pm @ Fabrication Lab)

### End of Semester Tournament
- May 4th (9am @ Engineering and Sciences Building of ITC)

### Google Calendar
<!-- to style the calendar check https://styledcalendar.com/ (currently on Salaj's account) -->
<iframe src="https://embed.styledcalendar.com/#HajExdydXOgbQW8OcJrE" title="Styled Calendar" class="styled-calendar-container" style="width: 100%; border: none;" data-cy="calendar-embed-iframe"></iframe>
<script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>



# Getting Started

So you want to build a robot and compete in our internal league, but don't know how to get going? Luckily for you, we got plenty of resources to help! 

### Meet with a Build Tech
After registering via our Google Form, you will be assigned a build tech mentor who is there to guide you in the bot building process. The first step is to schedule a 
meeting with them to get advice on where to start:

<button id="appointment-button" style="background-color: black; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; transition: transform 0.2s, background-color 0.2s;" onclick="window.open('https://calendar.google.com/calendar/u/0/appointments/AcZssZ3sh9qFSfliBgOxbZ1bM4Z6kd2ox-P8v60v3qE=', '_blank')">
    Book Appointment
</button>
<script>
    document.getElementById('appointment-button').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#333';
    });
    document.getElementById('appointment-button').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'black';
    });
</script>

**Note:** *If your assigned build tech's schedule does not align with yours, feel free to book an appointment with any other build tech! The build techs are not exclusive to their assigned teams.*

### Build Your Bot
After you meet with your build tech and get a rundown, the next step is to actually get started. Here is an overview of the general timeline:

- Design Your Robot With CAD
- Solder Electronics (Parts Provided!)
- 3D Print Your Parts
- Assemble Your Robot
- Battle!
- Rinse & Repeat

The Fabrication Lab is where most of your soldering and building will take place, so make sure to register for [keycard access]({{"/documentation/keycard-access" | relative_url }}). If you need guidance, you can attend our weekly build sessions at 8pm in the Fab Lab or alternatively schedule an appointment with a build tech.

If you ever need any help, don't be afraid to reach out in your team's channel on Discord! Also be sure to check out other resources on the website!
 