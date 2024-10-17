const loadSVG = () => {
    fetch("city.svg")
        .then(res => {
            return res.text()
        })
        .then((svg) => {
            document.getElementById('bg_city').innerHTML = svg;
            document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice")
            setAnimationScroll()
        })

}

const setAnimationScroll = () => {
    gsap.registerPlugin(ScrollTrigger)

    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    })

    runAnimation.add([
        gsap.to("#bg_city svg", 3, {
            scale: 1.6
        }),
        gsap.to("#full_city", 3, {
            opacity: 0
        })
    ])
        .add([
            gsap.to("#building_top", 3, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#wall_side", 3, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#wall_front", 3, {
                x: 200,
                y: 200,
                opacity: 0
            })
        ])
        .add([
            gsap.to("#interior_wall_side", 2, {
                x: -200,
                opacity: 0
            }),
            gsap.to("#interior_wall_top", 2, {
                x: 200,
                opacity: 0
            }),
            gsap.to("#interior_wall_side_2", 2, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#interior_wall_front", 2, {
                y: 200,
                opacity: 0
            })

        ])
        .add([
            gsap.to("#building_bottom", 3, {
                scale: 1.4,
                x: -200,
                y: -200
            })
        ])


}

loadSVG()