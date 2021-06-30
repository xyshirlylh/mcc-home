<template>
  <div class="gallary-component">
    <div class="outer-frame">
      <div class="inner-frame">
        <div class="block3-row-1">
          <div class="column-1"></div>
          <div class="column-2">{{ $t("message.history-title") }}</div>
          <div class="column-3">
            <svg
              class="button-left"
              @click="moveLeft()"
              ref="moveLeft"
              type="button"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="_929764"
                data-name="929764"
                transform="translate(60 60) rotate(180)"
              >
                <g id="Group_854" data-name="Group 854">
                  <g id="Group_853" data-name="Group 853">
                    <circle
                      cx="30"
                      cy="30"
                      r="28"
                      stroke-width="3"
                      stroke="#1381ce"
                      fill="none"
                    />
                    <path
                      id="Path_2293"
                      data-name="Path 2293"
                      d="M194.825,112.484a1.656,1.656,0,1,0-2.341,2.341L204.56,126.9l-12.077,12.077a1.656,1.656,0,1,0,2.341,2.341l13.247-13.247a1.654,1.654,0,0,0,0-2.341Z"
                      transform="translate(-170.278 -96.901)"
                      fill="#1381ce"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <svg
              class="button-right"
              @click="moveRight()"
              ref="moveRight"
              type="button"
              key=""
              id="_929764"
              data-name="929764"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g id="Group_854" data-name="Group 854">
                <g id="Group_853" data-name="Group 853">
                  <circle
                    cx="30"
                    cy="30"
                    r="28"
                    stroke-width="3"
                    stroke="#1381ce"
                    fill="none"
                  />
                  <path
                    id="Path_2293"
                    data-name="Path 2293"
                    d="M194.825,112.484a1.656,1.656,0,1,0-2.341,2.341L204.56,126.9l-12.077,12.077a1.656,1.656,0,1,0,2.341,2.341l13.247-13.247a1.654,1.654,0,0,0,0-2.341Z"
                    transform="translate(-170.278 -96.901)"
                    fill="#1381ce"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div class="gallery" ref="gallery">
          <div class="year f-f-wigwag" ref="year">
            <div>{{ years[yearIndex] }}</div>
          </div>

          <div class="box-1" ref="box1">
            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 0"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 0"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 0">{{ years[0] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[0] }}</p>
            </div>

            <transition name="fade">
              <div class="content f-f-avenir" v-if="index === 0">
                {{ $t("message.history[0].content") }}
              </div>
            </transition>
          </div>
          <div class="box-2" ref="box2">
            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 1"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 1"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 1">{{ years[1] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[1] }}</p>
            </div>

            <transition name="fade">
              <div
                style="min-width: 60rem"
                class="content f-f-avenir"
                v-if="index === 1"
              >
                <p>{{ $t("message.history[0].content") }}</p>
              </div>
            </transition>
          </div>
          <div class="box-3" ref="box3">
            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 2"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 2"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 2">{{ years[2] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[2] }}</p>
            </div>

            <transition name="fade">
              <div
                style="width: 34rem"
                class="content f-f-avenir"
                v-if="index === 2"
              >
                <p>{{ $t("message.history[2].content") }}</p>
              </div>
            </transition>
          </div>
          <div class="box-4" ref="box4">
            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 3"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 3"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 3">{{ years[3] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[3] }}</p>
            </div>

            <transition name="fade">
              <div
                style="background-color: rgba(255, 255, 255, 0.8); width: 50%"
                class="content f-f-avenir"
                v-if="index === 3"
              >
                <p>{{ $t("message.history[4].content") }}</p>
              </div>
            </transition>
          </div>

          <div class="box-5" ref="box5">
            <div class="sentorini" ref="sentorini">
              <img
                src="../../../assets/imgs/home/sentorini + canopy.jpg"
                alt=""
              />
            </div>
            <div class="bedok" ref="bedok">
              <img
                src="../../../assets/imgs/home/poiz + bedok south.jpg"
                alt=""
              />
            </div>

            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 4"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 4"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 4">{{ years[4] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[4] }}</p>
            </div>

            <transition name="fade">
              <div
                style="
                  max-width: 70rem;
                  background-color: rgba(255, 255, 255, 0);
                "
                class="content f-f-avenir"
                v-if="index === 4 && index2010 === 0"
              >
                <p v-if="index2010 === 0">
                  {{ $t("message.history[5].content2") }}
                </p>
              </div>

              <div
                style="
                  max-width: 70rem;
                  background-color: rgba(255, 255, 255, 0);
                "
                class="content f-f-avenir"
                v-if="index === 4 && index2010 === 1"
              >
                <p>
                  {{ $t("message.history[5].content3") }}
                </p>
              </div>
            </transition>
          </div>

          <div class="box-6" ref="box6">
            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 5"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 5"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 5">{{ years[5] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[5] }}</p>
            </div>

            <transition name="fade">
              <div
                class="content f-f-avenir"
                v-if="index === 5"
                style="width: 33%"
              >
                <p>{{ $t("message.history[6].content2") }}</p>
              </div>
            </transition>
          </div>

          <div class="box-7" ref="box7">
            <svg
              viewBox="0 0 1.684vw 1.684vw"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 6"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 1.684vw 1.684vw" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="0.7vw"
                ry="0.7vw"
                cx="0.84vw"
                cy="0.84vw"
              ></ellipse>
            </svg>

            <svg
              viewBox="0 0 1 51"
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 6"
            >
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <svg viewBox="0 0 1 51" class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 6">{{ years[6] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[6] }}</p>
            </div>

            <transition name="fade">
              <div
                style="background-color: rgba(255, 255, 255, 0)"
                class="content f-f"
                v-if="index === 6"
              >
                <p>{{ $t("message.history[7].content") }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      years: [1992, 1997, 2006, 2008, 2010, 2017, 2020],
      box5special: true,
      box5LeftSpecial: true,
      box5counter: 0,
      yearIndex: 0,
      scrollTop: 0,
      index: 0,
      index2010: 0,

      gallery: null,
      box1: null,
      year: null,
      box2: null,
      box3: null,
      box4: null,
      box5: null,
      box6: null,
      box7: null,
    };
  },

  mounted() {
    window.addEventListener("resize", this.resizeTrigger);
    //console.log(document.height);
    //this.moveLeft = this.$refs.moveLeft;
    //this.moveRight = this.$refs.moveRight;
    this.gallery = this.$refs.gallery;
    this.box1 = this.$refs.box1;
    this.box2 = this.$refs.box2;
    this.box3 = this.$refs.box3;
    this.box4 = this.$refs.box4;
    this.box5 = this.$refs.box5;
    this.box6 = this.$refs.box6;
    this.box7 = this.$refs.box7;
    this.sentorini = this.$refs.sentorini;
    this.bedok = this.$refs.bedok;

    this.year = this.$refs.year;
  },

  destroyed() {
    window.removeEventListener("scroll", this.resizeTrigger);
  },

  computed: {
    userStyle() {
      return {};
    },

    ...mapState(["lang"]),
  },

  watch: {
    lang(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateDom();
      }
    },
  },

  methods: {
    resizeTrigger: function () {
      //console.log('resize')

      anime({
        targets: this.gallery,
        scrollLeft: (this.gallery.offsetWidth / 1920) * 1270 * this.index,
        duration: 500,
        easing: "easeInOutQuad",
      });
    },
    moveRight: function () {
      if (this.index < 1) {
        this.index = 0;
      }
      if (this.yearIndex < 1) {
        this.yearIndex = 0;
      }

      if (this.yearIndex > 5) {
        this.yearIndex = 6;
      }

      if (this.index > 5) {
        this.index = 6;
      }
      // use anime.js
      if (this.box5special === false) {
        this.box5LeftSpecial = false;
        if (this.index2010 < 1) {
          this.index2010++;
        }

        anime({
          targets: this.sentorini,

          left: "-50vw",
          duration: 500,
          opacity: 0.3,
          easing: "easeInOutQuad",
        });
        anime({
          targets: this.bedok,
          left: "0",
          duration: 500,
          easing: "easeInOutQuad",
        });
        this.box5counter++;

        //this.box5LeftSpecial = false;

        if (this.box5counter === 2) {
          this.box5special = true;
          this.box5LeftSpecial = true;
        }
        //this.box5special = true;
      }

      if (this.index < 6 && this.box5special) {
        console.log(this.gallery.offsetWidth);
        anime({
          targets: this.gallery,
          scrollLeft:
            (this.gallery.offsetWidth / 1920) * 1270 * (this.index + 1),
          duration: 500,
          easing: "easeInOutQuad",
        });

        if (this.index === 0) {
          this.box1.style.backgroundSize = "0%";
          anime({
            targets: this.box1,
            //width: this.box1.offsetWidth / 20,
            width: "20.3125vw",
            left: "69vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "71.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 1) {
          this.box2.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box2,
            //width: this.box2.offsetWidth / 20,
            width: "20.3125vw",
            left: "134vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "135.5vw",

            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 2) {
          this.box3.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box3,
            width: "20.3125vw",
            //width: this.box3.offsetWidth / 20,
            left: "199vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "200.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 3) {
          this.box4.style.backgroundSize = "0%";
          this.box5special = false;

          //console.log("123");
          anime({
            targets: this.box4,
            //width: this.box4.offsetWidth / 20,
            width: "20.3125vw",
            left: "264vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "266.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 4) {
          this.box5.style.backgroundSize = "0%";

          //this.index2010 = this.index2010 + 1;

          //console.log(this.box5counter);
          this.box5counter = 2;
          this.box5LeftSpecial = true;

          anime({
            targets: this.box5,
            //width: this.box5.offsetWidth / 20,
            width: "20.3125vw",
            left: "329vw",
            duration: 500,
            easing: "easeInOutQuad",
          });

          anime({
            targets: this.sentorini,

            left: "-270rem",
            duration: 500,
            opacity: 0.3,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.bedok,
            left: "-140rem",
            duration: 500,
            easing: "easeInOutQuad",
          });

          anime({
            targets: this.year,
            left: "332vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 5) {
          this.box6.style.backgroundSize = "0%";
          this.box5LeftSpecial = true;

          //console.log("123");
          anime({
            targets: this.box6,

            //width: this.box6.offsetWidth / 20,
            width: "20.3125vw",
            left: "394vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "396vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        }
        this.index = this.index + 1;

        this.yearIndex++;
      }
    },

    moveLeft: function () {
      if (this.index < 1) {
        this.index = 0;
      }

      if (this.yearIndex < 1) {
        this.yearIndex = 0;
      }

      if (this.index > 6) {
        this.index = 6;
      }

      if (this.box5LeftSpecial === false) {
        this.box5special = false;
        if (this.index2010 > 0) {
          this.index2010--;
        }

        anime({
          targets: this.sentorini,

          left: "0",
          duration: 500,
          opacity: 1,
          easing: "easeInOutQuad",
        });
        anime({
          targets: this.bedok,
          left: "90%",
          duration: 500,
          easing: "easeInOutQuad",
        });
        this.box5counter--;
        if (this.box5counter === 0) {
          this.box5LeftSpecial = false;
          this.box5special = false;
        }

        if (this.box5counter === -1) {
          this.box5LeftSpecial = true;
          this.box5counter = 0;
        }

        //this.box5special = true;
      }

      if (this.index >= 1 && this.box5LeftSpecial) {
        anime({
          targets: this.gallery,
          scrollLeft:
            (this.gallery.offsetWidth / 1920) * 1270 * (this.index - 1),
          duration: 500,
          easing: "easeInOutQuad",
        });

        if (this.index === 1) {
          this.box1.style.backgroundSize = "100%";
          anime({
            targets: this.box1,
            //width: this.box1.offsetWidth * 20,
            left: "26.09375vw",
            width: "65vw",

            duration: 500,
            easing: "easeInOutQuad",
          });

          anime({
            targets: this.year,
            left: "6.5vw",

            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 2) {
          this.box2.style.backgroundSize = "30%, 50%";
          anime({
            targets: this.box2,
            //width: this.box2.offsetWidth * 20,
            left: "91.09375vw",
            width: "65vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "71.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 3) {
          this.box3.style.backgroundSize = "70%";
          anime({
            targets: this.box3,
            //width: this.box3.offsetWidth * 20,
            left: "156.09375vw",
            width: "65vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "135.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 4) {
          this.box4.style.backgroundSize = "95%";
          this.box5special = true;
          this.box5LeftSpecial = true;

          anime({
            targets: this.box4,
            //width: this.box4.offsetWidth * 20,
            left: "221.09375vw",
            width: "65vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "200.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 5) {
          this.box5.style.backgroundSize = "85%";
          this.box5counter--;

          anime({
            targets: this.box5,
            //width: this.box5.offsetWidth * 20,
            left: "286.09375vw",
            width: "65vw",
            duration: 500,
            easing: "easeInOutQuad",
          });

          anime({
            targets: this.sentorini,

            left: "-130rem",
            duration: 500,
            opacity: 0.3,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.bedok,
            left: "-0rem",
            duration: 500,
            easing: "easeInOutQuad",
          });

          anime({
            targets: this.year,
            left: "266.5vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          this.box5LeftSpecial = false;
          anime({
            targets: this.sentorini,

            left: "-130rem",
            duration: 500,
            opacity: 0.3,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.bedok,
            left: "0rem",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else if (this.index === 6) {
          this.box6.style.backgroundSize = "70%";
          anime({
            targets: this.box6,
            //width: this.box6.offsetWidth * 20,
            left: "351.09375vw",
            width: "65vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: this.year,
            left: "332vw",
            duration: 500,
            easing: "easeInOutQuad",
          });
        }

        this.index = this.index - 1;
        this.yearIndex--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap");
@font-face {
  font-family: "Avenir";
  src: url("../../../assets/custom-font/Avenir Book.ttf");
}
@mixin styling($unit-size) {
  .gallary-component {
    .outer-frame {
      height: 545.27 * $unit-size;
    }
    .inner-frame {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      .block-3-cercle {
        z-index: 3;
        position: absolute;
        left: -9.5 * $unit-size;
        bottom: 357 * $unit-size;
        width: 23 * $unit-size;
        height: 23 * $unit-size;
        fill: transparent;
        stroke: rgba(19, 129, 206, 1);
        stroke-width: 2px;
      }

      .block-3-line {
        position: absolute;
        z-index: 5;
        left: 0.1rem;
        bottom: 0;
        width: 1rem;
        height: 358.04 * $unit-size;
        stroke: rgba(198, 198, 198, 1);
        stroke-width: 0.3;
      }

      .year-small {
        position: absolute;
        left: 26.5 * $unit-size;
        bottom: 352 * $unit-size;
        color: var(--unnamed-color-1381ce);
        text-align: left;
        font: normal normal Source Sans Pro;
        font-size: 25 * $unit-size;
        font-weight: 800;
        line-height: 36 * $unit-size;

        color: rgba(19, 129, 206, 1);
      }

      .year {
        position: absolute;
        z-index: 2;
        left: 6.5vw;
        bottom: 3rem;
        width: 10vw;
        color: var(--unnamed-color-1381ce);
        text-align: left;

        color: rgba(19, 129, 206, 1);
        margin-top: 40vh;

        div {
          font-size: 87 * $unit-size;
          line-height: 104 * $unit-size;
        }
      }

      .gallery {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        //justify-content: space-between;
        background-image: url("../../../assets/imgs/home/标尺.png");
        z-index: 3;
        background-position: 0% 100%;
        background-repeat: repeat-x;
        background-size: 100%;

        $box1positionx: 26.09375vw;
        $zoomedDistance: 65vw;
        //$normalDistance: 42.4rem;

        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;

        .content {
          //background-color: red;
          font-family: Avenir;
          height: 101 * $unit-size;
          font-size: 16 * $unit-size;
          line-height: 19 * $unit-size;
          position: absolute;
          left: 26.5 * $unit-size;
          bottom: 240 * $unit-size;
          max-width: 646 * $unit-size;
          text-align: left;
          white-space: pre-line;
        }

        .box-1 {
          background-image: url("../../../assets/imgs/home/Artboard_1@2x.png");
          background-color: transparent;

          background-position: 20% 85%;
          background-size: 100%;
          background-repeat: no-repeat;

          position: absolute;
          top: 0;
          left: $box1positionx;
          height: 100%;
          width: $zoomedDistance;
        }

        .box-2 {
          background-image: url("../../../assets/imgs/home/wooland checkpoint.jpg"),
            url("../../../assets/imgs/home/singapore-expo.jpg");
          background-color: transparent;
          background-position: 90% 80%, 10% 90%;
          background-repeat: no-repeat;
          background-size: 35%, 50%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance;
          height: 100%;
          width: 66.14583vw;
        }

        .box-3 {
          background-image: url("../../../assets/imgs/home/组屋.jpg");

          background-position: 70% 80%;
          background-repeat: no-repeat;
          background-size: 70%;

          position: absolute;

          bottom: 0;
          left: $box1positionx + $zoomedDistance * 2;
          height: 100%;
          width: 66.14583vw;
        }

        .box-4 {
          background-image: url("../../../assets/imgs/home/sentosa zong+jubu.png");

          background-position: 40% 75%;
          background-repeat: no-repeat;
          background-size: 80%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 3;
          height: 100%;
          width: 66.14583vw;
        }

        .box-5 {
          //background-image: url("../../assets/imgs/home/sentorini + canopy.jpg");
          z-index: 1;
          //background-position: 40% 60%;
          background-repeat: no-repeat;
          background-size: 100%;
          //background-color: red;

          .sentorini {
            position: absolute;
            //background-color: green;
            left: 0%;
            top: 0%;
            height: 100%;
            width: 66.14583vw;

            img {
              position: absolute;
              width: 80%;
              top: 30%;
              left: 10%;
            }
          }

          .bedok {
            position: absolute;

            left: 90%;
            top: 0%;
            height: 100%;
            width: 66.14583vw;

            img {
              position: absolute;
              height: auto;
              width: 80%;
              left: 15%;
              top: 40%;
            }
          }

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 4;
          height: 100%;
          width: 66.14583vw;
        }

        .box-6 {
          background-image: url("../../../assets/imgs/home/dangga heights.jpg");

          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 70%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 5;
          height: 100%;
          width: 66.14583vw;
        }

        .box-7 {
          background-image: url("../../../assets/imgs/home/热带雨林.jpg"),
            url("../../../assets/imgs/home/hotel.png");

          background-position: 15% 80%, 55% 80%;
          background-repeat: no-repeat;
          background-size: 30%, 20%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 6;
          height: 100%;
          width: 140rem;
        }
      }

      .block3-row-1 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .column-1 {
          max-width: 50%;
          width: 30%;
        }

        .column-2 {
          display: flex;
          justify-content: center;
          margin-top: 69 * $unit-size;
          font-family: Raleway;
          font-size: 21 * $unit-size;
          line-height: 25 * $unit-size;
          color: rgba(31, 118, 173, 1);
          font-weight: 800;
          max-width: 50%;
          width: 40%;
        }

        .column-3 {
          display: flex;
          justify-content: right;
          max-width: 50%;
          width: 30%;
          //margin-top: 5rem;
          z-index: 4;

          .button-left {
            margin-left: 120 * $unit-size;
          }

          svg {
            margin-top: 15%;

            max-width: 10%;

            margin-left: 50 * $unit-size;

            &:hover {
              circle {
                fill: #1381ce;
              }

              path {
                fill: white;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>