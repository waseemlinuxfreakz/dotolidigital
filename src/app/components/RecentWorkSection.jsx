import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
export function RecentWorkSection() {
  /* 
    recentWorkSecRef
    */
  const recentWorkSecRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Text 1 animation
  useGSAP(
    () => {
      gsap.from(text1Ref.current, {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: recentWorkSecRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: recentWorkSecRef }
  );

  // Text 2 animation
  useGSAP(
    () => {
      gsap.from(text2Ref.current, {
        x: -100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: recentWorkSecRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: recentWorkSecRef }
  );

  return (
    <>
      <section className="recent-work-sec" ref={recentWorkSecRef}>
        <div className="container">
          <div className="flex-box">
            <div className="text">
              <h3 className="title-1 text-left">
                <span className="block sm1" ref={text1Ref}>
                  What
                </span>
                <span className="block sm2" ref={text2Ref}>
                  We Do
                </span>
              </h3>

              <p className="text-1">
                We help consultants, agencies, trades, and local service brands gain visibility and convert attention into action. Every strategy we create blends three powerful elements:
              </p>
            </div>
            <div className="btn">{/* <Link href="/about">Explore work</Link> */}</div>
          </div>
        </div>
      </section>
    </>
  );
}
