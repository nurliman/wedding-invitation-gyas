import React, { useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import { Picture } from "next-img";
import Countdown from "react-countdown";
import Head from "../components/Head";
import Slider from "../components/Slider";
import MusicPlayer from "../components/MusicPlayer";
import { LocomotiveScrollProvider } from "../components/LocomotiveScroll";
import styles from "../styles/Home.module.scss";
import "animate.css";

import laurelWreathImg from "../assets/laurel-wreath.png";
import bridesImg from "../assets/brides.png";
import maleImg from "../assets/male.png";
import femaleImg from "../assets/female.png";
import akadNikahImg from "../assets/akad-nikah.png";
import resepsiImg from "../assets/resepsi.png";


const HomePage: React.FC = () => {
  const containerRef = useRef(null);
  const sectionDateRef = useRef(null);

  return (
    <>
      <Head title="Wedding Invitation" />
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={
          {
            /* smooth: true */
          }
        }
        watch={[]}
      >
        <main data-scroll-container ref={containerRef}>
          <div data-scroll-section>
            <section className={cn(styles.section, styles.sectionTop)}>
              <div className={styles.laurelWreathImg}>
                <Picture
                  src={laurelWreathImg}
                  alt="Laurel Wreath Image"
                  loading="lazy"
                />
              </div>
              <h1 className={styles.theWeddingText}>THE WEDDING</h1>
              <h2 className={styles.weddingDate}>28 MARET 2021</h2>
              <div
                data-scroll
                data-scroll-class={cn("animate__fadeInUp")}
                className={cn(styles.bridesNameLogoImg, "animate__animated")}
              >
                <Picture src={bridesImg} alt="Brides" />
              </div>
              <button
                className={styles.saveTheDateButton}
                onClick={() => sectionDateRef.current.scrollIntoView()}
              >
                SAVE THE DATE
              </button>
            </section>
            <section className={cn(styles.section, styles.sectionBridesIntro)}>
              <div className={styles.bridesIntroText}>
                <p>Maha Suci Allah SWT</p>
                <p>Yang telah menciptakan makhlukNya berpasang-pasangan.</p>
                <p>Ya Allah dengan memmohon Ridho dan Rahmat-Mu</p>
                <p>Perkenankanlah dan Ridhoilah putra-putri kami:</p>
              </div>
              <div className={styles.brides}>
                <div
                  data-scroll
                  data-scroll-class="animate__fadeInLeft"
                  className={cn(styles.bride, "animate__animated")}
                >
                  <div className={styles.bridePicture}>
                    <Picture src={maleImg} alt="Male Bride" loading="lazy" />
                  </div>
                  <div className={styles.brideName}>Gias Arya Ramadhan</div>
                  <b className={styles.childOf}>Putra pertama dari</b>
                  <div className={styles.childOf}>
                    Bpk Taufik Hidayat &amp; Ibu Ina Meilina
                  </div>
                </div>
                <div>
                  <Image
                    src="/assets/love-calendar.png"
                    width={78}
                    height={78}
                    quality={92}
                    alt="Love Calendar"
                  />
                </div>
                <div
                  data-scroll
                  data-scroll-class="animate__fadeInRight"
                  className={cn(styles.bride, "animate__animated")}
                >
                  <div className={styles.bridePicture}>
                    <Picture
                      src={femaleImg}
                      alt="Female Bride"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.brideName}>Wina Khania Seftiany</div>
                  <b className={styles.childOf}>Putri bungsu dari</b>
                  <div className={styles.childOf}>
                    Bpk Nono Sukirno &amp; Ibu Lilis Eulis A
                  </div>
                </div>
              </div>
              <div className={styles.bridesIntroText}>
                <p>Untuk mengikuti Sunnah Rasul-Mu</p>
                <p>
                  dalam rangka membentuk keluarga yang sakinah, mawaddah,&amp;
                  warahmah.
                </p>
                <p>maka ijinkanlah kami menikahkannya.</p>
              </div>
            </section>
            <span className={styles.squigglyDevider} />
            <section
              ref={sectionDateRef}
              className={cn(styles.section, styles.sectionEventSchedule)}
            >
              <div>
                <div
                  style={{ marginBottom: "-.7rem" }}
                  className={styles.title1}
                >
                  OUR SPECIAL
                </div>
                <div className={styles.title2}>Wedding Event</div>
              </div>
              <div className={styles.eventContainer}>
                <div className={styles.eventRibbonImg}>
                  <Picture src={akadNikahImg} alt="Akad Nikah" loading="lazy" />
                </div>
                <b className={styles.eventPlace}>Tempat:</b>
                <div className={styles.eventPlace}>
                  Sanggar Indah Banjaran
                  <br />
                  F3 No.57 Rt.07 Rw.06 Ds.Nagrak Kec.Cangkuang Kab.Bandung
                </div>
                <div className={styles.eventTimeContainer}>
                  <div
                    data-scroll
                    data-scroll-class="animate__fadeIn"
                    className={cn(styles.eventTimeCard, "animate__animated")}
                  >
                    <div className={styles.pinkCircleIcon}>
                      <Image
                        src="/assets/calendar-alt-regular.svg"
                        alt="Calendar Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      Sunday,
                      <br />
                      28 Maret 2021
                    </div>
                  </div>
                  <div
                    data-scroll
                    data-scroll-class="animate__fadeIn"
                    className={cn(styles.eventTimeCard, "animate__animated")}
                  >
                    <div className={styles.pinkCircleIcon}>
                      <Image
                        src="/assets/clock-regular.svg"
                        alt="Clock Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      09.00 WIB
                      <br />
                      Until End
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.eventContainer}>
                <div className={styles.eventRibbonImg}>
                  <Picture src={resepsiImg} alt="Resepsi" loading="lazy" />
                </div>
                <b className={styles.eventPlace}>Tempat:</b>
                <div className={styles.eventPlace}>
                  Sanggar Indah Banjaran
                  <br />
                  F3 No.57 Rt.07 Rw.06 Ds.Nagrak Kec.Cangkuang Kab.Bandung
                </div>
                <div className={styles.eventTimeContainer}>
                  <div
                    data-scroll
                    data-scroll-class="animate__fadeIn"
                    className={cn(styles.eventTimeCard, "animate__animated")}
                  >
                    <div className={styles.pinkCircleIcon}>
                      <Image
                        src="/assets/calendar-alt-regular.svg"
                        alt="Calendar Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      Sunday,
                      <br />
                      28 Maret 2021
                    </div>
                  </div>
                  <div
                    data-scroll
                    data-scroll-class="animate__fadeIn"
                    className={cn(styles.eventTimeCard, "animate__animated")}
                  >
                    <div className={styles.pinkCircleIcon}>
                      <Image
                        src="/assets/clock-regular.svg"
                        alt="Clock Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      11.00 WIB
                      <br />
                      Until End
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <span className={styles.squigglyDevider} />
            <section className={cn(styles.section, styles.sectionMap)}>
              <div
                data-scroll
                data-scroll-class="animate__fadeInUpBig"
                className={cn(styles.maps, "animate__animated")}
              >
                <iframe
                  height="345"
                  style={{ border: 0 }}
                  loading="lazy"
                  scrolling="no"
                  src="https://maps.google.com/maps?q=+-7.051242,107.540867&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
                  title="place"
                  aria-label="place"
                />
              </div>
            </section>
            <section className={cn(styles.section, styles.sectionCountDown)}>
              <div className={styles.countDownTitle}>
                <div
                  style={{ marginBottom: "-.7rem", fontSize: "2.2rem" }}
                  className={styles.title1}
                >
                  WE'RE GETTING MARRIED
                </div>
                <div className={styles.title2}>Countdown Timer</div>
              </div>
              <Countdown
                date={new Date(1616893200000)}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className={styles.countDownContainer}>
                    <div className={styles.countDownItem}>
                      <div className={styles.countDownValue}>{days}</div>
                      <div>Hari</div>
                    </div>
                    <div className={styles.countDownItem}>
                      <div className={styles.countDownValue}>{hours}</div>
                      <div>Jam</div>
                    </div>
                    <div className={styles.countDownItem}>
                      <div className={styles.countDownValue}>{minutes}</div>
                      <div>Menit</div>
                    </div>
                    <div className={styles.countDownItem}>
                      <div className={styles.countDownValue}>{seconds}</div>
                      <div>Detik</div>
                    </div>
                  </div>
                )}
              />
            </section>
            <section>
              <Slider />
            </section>
            <section className={cn(styles.section, styles.sectionOutro)}>
              <div className={styles.outroPray}>
                “Semoga Allah meghimpun yang terserak dari keduanya, memberkati
                mereka berdua dan kiranya Allah meningkatkan kualitas keturunan
                mereka, menjadikannya pembuka pintu rahmat, sumber ilmu dan
                hikmah serta pemberi rasa aman bagi umat.”
              </div>
              <div
                className={styles.outroPray}
                style={{ maxWidth: "60rem", marginBottom: "6.2rem" }}
              >
                <b>
                  (Doa Nabi Muhammad SAW, pada pernikahan putrinya Fatimah
                  Azzahra dengan Ali Bin Abi Thalib)
                </b>
              </div>
              <div className={styles.laurelWreathImg}>
                <Picture
                  src={laurelWreathImg}
                  alt="Laurel Wreath Image"
                  loading="lazy"
                />
              </div>
            </section>
            <footer className={styles.footer}>
              Made By&nbsp;
              <a
                style={{ color: "inherit" }}
                href="https://github.com/nurliman"
              >
                Nurliman Diara Aria
              </a>
              . 2021
            </footer>
          </div>
          <MusicPlayer data-scroll-sticky/>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default HomePage;
