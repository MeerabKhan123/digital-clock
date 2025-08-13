
        const timeElement = document.getElementById('clock-time');
        const dateElement = document.getElementById('clock-date');

        // Function to update the time and date
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            
            // Get the day of the week, month, and day of the month
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const dayOfWeek = daysOfWeek[now.getDay()];
            const month = months[now.getMonth()];
            const dayOfMonth = now.getDate();
            const year = now.getFullYear();

            // Format hours, minutes, and seconds with leading zeros if needed
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            // Update the HTML content
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
            dateElement.textContent = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
        }

        // Call the function once to avoid an initial delay
        updateClock();

        // Update the clock every second (1000 milliseconds)
        setInterval(updateClock, 1000);