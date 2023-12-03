
gsap.to("#page1",{

})

gsap.to("#nav",{
    
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})
gsap.to("#main",{
  
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top -100%",
        scrub:2,
    }
})