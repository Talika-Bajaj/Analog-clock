//setInterval to move clock arms
setInterval(()=> {
        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        
        let hRotate = 30 * hr + min / 2;
        let mRotate = 6 * min;
        let sRotate = 6 * sec;

        let h = document.getElementById("hr");
        h.style.transform = `rotate(${hRotate}deg)`
        let m = document.getElementById("min");
        m.style.transform = `rotate(${mRotate}deg)`
        let s = document.getElementById("sec");
        s.style.transform = `rotate(${sRotate}deg)`
    }, 1000)
