let sec = document.querySelector('.second');
        let min = document.querySelector('.minute');
        let hour = document.querySelector('.hour');
        
        setInterval(time,1000);
        function time() {
            let now = new Date();
            let s = now.getSeconds() * 6;
            let m = now.getMinutes() * 6;
            let h = now.getHours() * 30;
            sec.style.transform = `rotateZ(${s}deg)`;
            min.style.transform = `rotateZ(${m}deg)`;
            hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
        }
        