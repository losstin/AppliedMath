import React from "react";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./graduates.css";
import asel from  "./img/Snapchat-315682093 - Asel Nurlanbek kyzy.jpg";
import ayzada from "./img/65FD1B41-AD11-4CAF-85A6-6302E8A141D4 - айзаада жантай кызы.jpg";
import ayperi from  "./img/IMG_8330 - Ayperi Akimova.JPG";
import _1 from  "./img/1.jpg";
import eliza from  "./img/BE89110B-8221-4186-98D6-50537877581F - Eliza Kubanychbekova.jpg";
import nuraaly from  "./img/IMG_20230404_181833 - Nuraaly Dzhuzupbekov.jpg";
import kanykei from  "./img/823B1C5C-33B2-42FB-A268-3D41E09F27D4 - Kanykei Kalybaeva.jpg";

const Graduates = () => {
  return (
    <div className={"off-canvas-wrap"}>
      <Header />

      <main class="inner-wrap" id="contentarea" tabindex="-1">
        <a class="exit-off-canvas"></a>

        <div class="container-gra">
          <h1 class="h1-gra">Бутуруучулор</h1>
          <div class="container-gra-flex">
            <div class="graduate">
              <div class="graduate-border">
                <img
                  src={kanykei}
                  alt=""
                />
                <div class="gra-info">
                  <h3>Калыбаева Каныкей Уланбековна</h3>
                  <span>Бутургон жылы - 2021</span>
                  <p>
                    <b>Project Manager</b>
                  </p>
                  <p>"Удалёнка(онлайн проекты)"</p>
                  <a>kanykei3197@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="graduate">
              <div class="graduate-border">
                <img
                  src={nuraaly}
                  alt=""
                />
                <div class="gra-info">
                  <h3>Джузупбеков Нураалы Абдыманапович</h3>
                  <span>Бутургон жылы - 2020</span>
                  <p>
                    <b>PHP back-end developer</b>
                  </p>
                  <p>"Axelhub"</p>
                  <a>dzhuzupbekovnuraaly@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="graduate">
              <div class="graduate-border">
                <img
                  src={eliza}
                  alt=""
                />
                <div class="gra-info">
                  <h3>Кубанычбек кызы Элиза</h3>
                  <span>Бутургон жылы - 2021</span>
                  <p>
                    <b>Экономист</b>
                  </p>
                  <p>"ОсОО Кул брос"</p>
                  <a>ek4949645@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="graduate">
              <div class="graduate-border">
                <img src={_1} alt="" />
                <div class="gra-info">
                  <h3>Ашимов Адилбек Мамадаминович</h3>
                  <span>Бутургон жылы - 2020</span>
                  <p>
                    <b>Андроид разработчик</b>
                  </p>
                  <p>"Осоо InstatSport"</p>
                  <a>adyl.ashimov1997@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="graduate">
              <div class="graduate-border">
                <img src={ayperi} alt="" />
                <div class="gra-info">
                  <h3>Аким кызы Айпери</h3>
                  <span>Бутургон жылы - 2020</span>
                  <p>
                    <b>Бухгалтер производства</b>
                  </p>
                  <p>"Kyzyl-Kiya"</p>
                  <a>akimovaayperi.96@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="graduate">
              <div class="graduate-border">
                <img
                  src={ayzada}
                  alt=""
                />
                <div class="gra-info">
                  <h3>Жантай кызы Айзаада</h3>
                  <span>Бутургон жылы - 2021</span>
                  <p>
                    <b>Main Cashier</b>
                  </p>
                  <p>"Frunze"</p>
                  <a>aizaada.jantaeva@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="graduate">
              <div class="graduate-border">
                <img
                  src={asel}
                  alt=""
                />
                <div class="gra-info">
                  <h3>Нурланбек кызы Асел</h3>
                  <span>Бутургон жылы - 2021</span>
                  <p>
                    <b>Programmer</b>
                  </p>
                  <p>"ОсОО Timely Soft"</p>
                  <a>aselnurlanbekova@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div aria-label="subfooter" id="subfooter" role="contentinfo">
        <div class="section-header-content">
          <div class="section-header-title">
            <div
              class="title-bg"
              id="socialLinks"
              itemscope="itemscope"
              itemtype="http://schema.org/Organization"
            >
              <span class="sr-only" itemprop="name">
                Манас Университет
              </span>
              <span class="sr-only" itemprop="telephone">979-845-3211</span>
              <span
                class="sr-only"
                itemprop="address"
                itemscope="itemscope"
                itemtype="http://schema.org/PostalAddress"
              >
                <span itemprop="addressLocality">College Station</span>
                <span itemprop="addressRegion">TX</span>
                <span itemprop="postalCode">77843</span>
                <span itemprop="addressCountry">USA</span>
              </span>
              <link href="https://www.manas.edu/" itemprop="url" target="_parent" />
              <a
                href="https://www.facebook.com/manas"
                id="Facebook"
                itemprop="sameAs"
                title="manas facebook"
              >
                <span class="sr-only">Manas Facebook</span>
                <span
                  aria-hidden="true"
                  aria-label="Manas Facebook"
                  class="fab fa-facebook"
                  title="Manas Facebook"
                ></span>
              </a>

              <a
                href="https://www.instagram.com/manas/"
                id="Instagram"
                itemprop="sameAs"
                title="manas instagram"
              >
                <span class="sr-only">Manas Instagram</span>
                <span
                  aria-hidden="true"
                  aria-label="Manas Instagram"
                  class="fab fa-instagram"
                  title="Manas Instagram"
                ></span>
              </a>

              <a
                href="https://www.linkedin.com/edu/school?id=19491"
                id="Linkedin"
                itemprop="sameAs"
                title="manas linkedin"
              >
                <span class="sr-only">Manas LinkedIn</span>
                <span
                  aria-hidden="true"
                  aria-label="Manas Linkedin"
                  class="fab fa-linkedin"
                  title="Manas Linkedin"
                ></span>
              </a>

              <a
                href="https://www.youtube.com/manas"
                id="Youtube"
                itemprop="sameAs"
                title="manas youtube"
              >
                <span class="sr-only">Manas Youtube</span>
                <span
                  aria-hidden="true"
                  aria-label="Manas YouTube"
                  class="fab fa-youtube"
                  title="Manas YouTube"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Feedback />
      <Footer />
    </div>
  );
}

export default Graduates;
