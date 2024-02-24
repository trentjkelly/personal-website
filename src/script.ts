// Changing font color and sizes on main page
    let h1 : HTMLHeadingElement | null;
    let h2 : HTMLHeadingElement | null;
    let p  : HTMLParagraphElement | null;

if(document !== null){
    h1 = document.querySelector("h1");
    h2 = document.querySelector("h2");
    p = document.querySelector("p");

    // Hover effect for h1, h2, and p
    if((h1 !== null) && (h2 !== null) && (p !== null)) {
        h1.addEventListener("mouseover", (e) => {
            h1!.style.color = "#183D3D";
            h1!.style.fontSize = "10.5vw";
        });

        h1.addEventListener("mouseout", (e) => {
            h1!.style.color = "#5C8374";
            h1!.style.fontSize = "10vw";
        })

        h2.addEventListener("mouseover", (e) => {
            h2!.style.color = "#183D3D";
            h2!.style.fontSize = "3.2vw";
        });
        
        h2.addEventListener("mouseout", (e) => {
            h2!.style.color = "#5C8374";
            h2!.style.fontSize = "3vw";
        })

        p.addEventListener("mouseover", (e) => {
            p!.style.color = "#183D3D";
            p!.style.fontSize = "2.7vw";
        });
        
        p.addEventListener("mouseout", (e) => {
            p!.style.color = "#5C8374";
            p!.style.fontSize = "2.5vw";
        })

        // Mouse trail for landing page
        document.addEventListener('mousemove', (e) => {
            let landingPage : Element | null = document.querySelector(".landingPage");
            let bottomPagePx : number = 0;
            
            if(landingPage !== null){
                bottomPagePx = landingPage.getBoundingClientRect().bottom;
            }
        
            let scrollAmount = window.scrollY;
            
            let noCursorArea = {
                belowPage: bottomPagePx + scrollAmount,
                left: h1!.getBoundingClientRect().left,
                right: h1!.getBoundingClientRect().right,
                top: h1!.getBoundingClientRect().top + scrollAmount,
                bottom : p!.getBoundingClientRect().bottom + scrollAmount
            };
        
            if(e.pageY > noCursorArea.belowPage){
                return;
            }
        
            if(e.pageX > noCursorArea.left && e.pageX < noCursorArea.right && e.pageY > noCursorArea.top && e.pageY < noCursorArea.bottom) {
                return;
            }
        
            const trail : HTMLDivElement = document.createElement('div');
            trail.id = 'trail';
            document.body.appendChild(trail);
            trail.style.left = e.pageX + 'px';
            trail.style.top = e.pageY + 'px';
        
            setTimeout(function () {
                trail.style.opacity = '0';
            }, 100);
        
            setTimeout(function () {
                document.body.removeChild(trail);
            }, 800);
        });

        //Change body background color to projects page once scrolled
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                document.body.classList.add("backgroundScrollColor")
            }

            if(window.scrollY < 100){
                document.body.classList.remove("backgroundScrollColor")
            }
        });
    }
}