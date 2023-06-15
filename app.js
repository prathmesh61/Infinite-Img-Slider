var t1 = gsap.timeline({
  repeat: -1,
});
var t2 = gsap.timeline({
  repeat: -1,
});
var t3 = gsap.timeline({
  repeat: -1,
});

t1.to(
  ".imgContainer",
  2,
  {
    width: "60%",
    stagger: 2,
    ease: "Expo.easeInOut",
  },
  "a"
);
t1.to(
  ".text h2",
  2,
  {
    top: 0,
    stagger: 2,
    ease: "Expo.easeInOut",
  },
  "a"
);
t1.to(
  ".text h2",
  {
    delay: 2,
    top: "-100%",
    stagger: 2,
    ease: "Expo.easeInOut",
  },
  "a"
);
