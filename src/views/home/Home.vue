<template>
  <div class="home">
    <div class="block1">
      <div class="container-1-left">
        <div class="block-1-message">
          <p>Hello,</p>
          <br />
          <p>Welcome to MCC Singapore!</p>
        </div>

        <div>
          <div class="ID">
            <p class="f-f-ptsans">01</p>
          </div>

          <svg class="title-underline">
            <line x1="0" y1="0" x2="150" y2="0" />
          </svg>

          <div class="title">
            <p>What we do</p>
          </div>
        </div>

        <div class="subtitle-s " style="text-align: center">
          <div class="subtitle " @mouseover="consultation()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 1"
                id="Ellipse_179"
                rx="4rem"
                ry="4rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.65rem"
                ry="0.65rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>
            </svg>
            <span v-if="selected === 1" style="color: black; cursor: pointer"
              >Consultation</span
            >
            <span v-else>Consultation</span>
          </div>

          <div class="subtitle" @mousemove="realestate()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 2"
                id="Ellipse_179"
                rx="4rem"
                ry="4rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.65rem"
                ry="0.65rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>
            </svg>

            <span
              v-if="selected === 2"
              style="color: black; cursor: pointer"
              @click="goRealEstate()"
              >Real Estate</span
            >

            <span v-else>Real Estate</span>
          </div>

          <div class="subtitle" @mouseover="construction()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 3"
                id="Ellipse_179"
                rx="4rem"
                ry="4rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.65rem"
                ry="0.65rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>
            </svg>

            <span
              style="color: black; cursor: pointer"
              v-if="selected === 3"
              @click="goConstruction()"
              >Construction</span
            >

            <span v-else>Construction</span>
          </div>
        </div>
      </div>

      <div class="container-1-right">
        <div class="content">
          <div v-if="selected === 1">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-1-blur"
            >
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>

              <button class="button">
                <p>Read More</p>

                <svg class="button-arrow" viewBox="0 8 25 25">
                  <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                </svg>
              </button>
            </div>
            <div v-else class="image-1" @mouseover="blur"></div>
          </div>

          <div v-else-if="this.selected === 2">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-2-blur"
            >
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>

              <button class="button">
                <p>Read More</p>

                <svg class="button-arrow" viewBox="0 8 25 25">
                  <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                </svg>
              </button>
            </div>
            <div v-else class="image-2" @mouseover="blur"></div>
          </div>
          <div v-else-if="selected === 3">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-3-blur"
            >
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>

              <button class="button">
                <p>Read More</p>

                <svg class="button-arrow" viewBox="0 8 25 25">
                  <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                </svg>
              </button>
            </div>
            <div v-else class="image-3" @mouseover="blur"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="block2">
      <div class="background">
        <div class="ID" style="color: white">
          <span>02</span>
        </div>

        <svg class="title-underline" style="stroke: white">
          <line x1="0" y1="0" x2="150" y2="0" />
        </svg>

        <div class="title" style="color: white">
          <span>about us</span>
        </div>
        <div class="content">
          <p class="content-head f-f-raleway">About us</p>
          <p style="margin-top:10px">
            Incorporated in 2010, MCC Land (Singapore) Limited has been actively
            involved in Singapore’s real estate scene and achieved good results.
            It has developed five development projects, co-developed two
            development projects and managed five development projects. The
            company has been
          </p>
          <button class="button-2">
            <p>Read More</p>

            <svg class="button-arrow" viewBox="0 8 25 25">
              <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="background-3">
      <div class="block3">
        <div class="gallery-3">
          <div class="column-1">
            <div class="ID">
              <span>03</span>
            </div>

            <svg class="title-underline">
              <line x1="0" y1="0" x2="15rem" y2="0" />
            </svg>

            <div class="title">
              <span>MCC history</span>
            </div>
          </div>
          <div class="column-2">
            <svg
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
            {{ years[yearIndex] }}
          </div>

          <div class="box-1" ref="box1">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 0"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 0"
            >
              <line x1="0" y1="0" x2="0" y2="50rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="50rem" />
            </svg>

            <div class="year-small f-f-sans">
              <p v-if="yearIndex === 0">{{ years[0] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[0] }}</p>
            </div>

            <div class="subtitle" v-if="index === 0">
              <p>Mcc first launched</p>
            </div>

            <div class="content f-f-avenir" v-if="index === 0">
              <p>Labour Subcontracting & Professional Subcontracting</p>
            </div>
          </div>
          <div class="box-2" ref="box2">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 1"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 1"
            >
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 1">{{ years[1] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[1] }}</p>
            </div>
          </div>
          <div class="box-3" ref="box3">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 2"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 2"
            >
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 2">{{ years[2] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[2] }}</p>
            </div>
          </div>
          <div class="box-4" ref="box4">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 3"
            >
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 3"
            >
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 3">{{ years[3] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[3] }}</p>
            </div>
          </div>

          <div class="box-5" ref="box5">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 4"
            >
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 4"
            >
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 4">{{ years[4] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[4] }}</p>
            </div>
          </div>

          <div class="box-6" ref="box6">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 5"
            >
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 5"
            >
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 5">{{ years[5] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[5] }}</p>
            </div>
          </div>

          <div class="box-7" ref="box7">
            <svg
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 6"
            >
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                rx="1.6rem"
                ry="1.6rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg
              class="block-3-line"
              style="fill: black; stroke: black"
              v-if="yearIndex === 6"
            >
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <svg class="block-3-line" v-else>
              <line x1="0" y1="0" x2="0" y2="62.2rem" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 6">{{ years[6] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[6] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="background-4">
      <div class="ID">
        <span>04</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="150" y2="0" />
      </svg>

      <div class="title">
        <span>MCC news</span>
      </div>

      <div class="container-4">
        <div class="left">
          <svg type="button" width="60" height="60" viewBox="0 0 60 60">
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
        </div>

        <div class="block4">
          <div class="head">
            <p>Featured news of MCC Singapore</p>
            <div class="button-1">
              <button>
                <p>View more</p>

                <svg class="button-arrow" viewBox="0 8 25 25">
                  <path d="M0 15 L25 15 M25 15 L17 22 M25 15 L17 8"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="gallery">
            <div class="box-1">
              <img src="../../assets/imgs/home/ID6Z2A5209@2x.png" alt="" />
              <div class="background-white">
                <h1 class="f-f-sans">Title 1</h1>
                <p class="f-f-sans">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et
                </p>
              </div>
            </div>
            <div class="box-2">
              <img src="../../assets/imgs/home/ID4@2x.png" alt="" />
              <div class="background-white">
                <h1 class="f-f-sans">Title 2</h1>
                <p class="f-f-sans">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et
                </p>
              </div>
            </div>
            <div class="box-3">
              <img src="../../assets/imgs/home/ID3@2x.png" alt="" />
              <div class="background-white">
                <h1 class="f-f-sans">Title 3</h1>
                <p class="f-f-sans">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <svg
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
    </div>

    <div class="block5">
      <div class="ID">
        <span>05</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="15rem" y2="0" />
      </svg>

      <div class="title">
        <span>our culture</span>
      </div>

      <div class="row-1">
        <div class="col-1">
          <div class="">
            <div class="container-5">
              <svg class="line-5">
                <line x1="0" y1="0" x2="2.5rem" y2="0" />
              </svg>
              <p class="title-5 font-bold">Mission</p>
            </div>
          </div>
          <div class="f-f-sans f-s-25 content-5">
            <p>Transforming lives, inspiring society</p>
          </div>
        </div>
        <div class="col-2">
          <div class="container-5">
            <svg class="line-5">
              <line x1="0" y1="0" x2="2.5rem" y2="0" />
            </svg>
            <p class="title-5 font-bold">Vision</p>
          </div>
          <div class="content-5">
            <p>To be a global leading urbanisation enterprise</p>
          </div>
        </div>
        <div class="col-3">
          <div class="container-5">
            <svg class="line-5">
              <line x1="0" y1="0" x2="2.5rem" y2="0" />
            </svg>
            <p class="title-5 font-bold">Culture</p>
          </div>
          <div class="content-5">
            <p>
              Make a difference. Creativity. Cooperation. Sincerity.
              Goal-oriented
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="title-2">
      <p>CONTACT US</p>
    </div>

    <gap :height="70" />

    <div class="input">
      <div class="email">
        <input
          type="text"
          v-model="email"
          @focus="clearContent('email')"
          @blur="resetContent('email')"
        />
      </div>

      <gap :height="63" />
      <div class="text">
        <textarea
          type="input"
          v-model="text"
          @focus="clearContent('text')"
          @blur="resetContent('text')"
        ></textarea>
      </div>
    </div>

    <div class="button-5-1">
      <button class="button-5-2">Confirm</button>
    </div>

    <gap :height="123" />
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "Home",
  data: function () {
    return {
      selected: 1,
      mouseover: false,
      email: "Your email address…",
      text: "  Leave your message here…",
      years: [1992, 1997, 2006, 2008, 2010, 2017, 2020],
      yearIndex: 0,
      scrollTop: 0,
      index: 0,
      //moveLeft: null,
      //moveRight: null,
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

  computed: {
    userStyle() {
      return {};
    },
  },

  mounted() {
    window.addEventListener("scroll", this.scrollTrigger);
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

    this.year = this.$refs.year;
  },

  destroy() {
    window.removeEventListener("scroll", this.scrollTrigger);
  },

  methods: {
    blur: function () {
      this.mouseover = true;
    },

    clear: function () {
      this.mouseover = false;
    },

    goRealEstate: function () {
      this.$router.push("/real-estate");
    },

    goConstruction: function () {
      this.$router.push("/construction");
    },

    scrollTrigger: function () {
      this.scrollTop = window.scrollY;

      if (this.scrollTop > document.body.scrollHeight * 0.13) {
        this.$refs["img-2"].style.transform = "scale(1.5)";
        //this.$refs["img-2"].style.margin-top = "scale(2)";
        console.log(this.$refs["img-2"].style);
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

      if (this.index >= 1) {
        anime({
          targets: this.gallery,
          scrollLeft: this.gallery.offsetWidth * 0.527 * (this.index - 1),
          duration: 500,
          easing: "easeOutElastic(3, 1)",
        });

        if (this.index === 1) {
          this.box1.style.backgroundSize = "70%";
          anime({
            targets: this.box1,
            //width: this.box1.offsetWidth * 20,
            left: "60rem",

            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });

          anime({
            targets: this.year,
            left: "20rem",

            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 2) {
          this.box2.style.backgroundSize = "70%";
          anime({
            targets: this.box2,
            //width: this.box2.offsetWidth * 20,
            left: "160rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "120rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 3) {
          this.box3.style.backgroundSize = "70%";
          anime({
            targets: this.box3,
            //width: this.box3.offsetWidth * 20,
            left: "260rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "225rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 4) {
          this.box4.style.backgroundSize = "80%";
          anime({
            targets: this.box4,
            //width: this.box4.offsetWidth * 20,
            left: "360rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "325rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 5) {
          this.box5.style.backgroundSize = "70%";
          anime({
            targets: this.box5,
            //width: this.box5.offsetWidth * 20,
            left: "460rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "425rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 6) {
          this.box6.style.backgroundSize = "60%";
          anime({
            targets: this.box6,
            //width: this.box6.offsetWidth * 20,
            left: "560rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "525rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        }

        this.index = this.index - 1;
        this.yearIndex--;
      }
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

      if (this.index < 6) {
        console.log(this.gallery.offsetWidth);
        anime({
          targets: this.gallery,
          scrollLeft: (this.gallery.offsetWidth / 1920) * 1270,
          duration: 500,
          easing: "easeOutElastic(3, 1)",
        });

        if (this.index === 0) {
          this.box1.style.backgroundSize = "0%";
          anime({
            targets: this.box1,
            //width: this.box1.offsetWidth / 20,
            width: "39rem",
            left: (this.gallery.offsetWidth / 1920) * 1330,
            duration: 500,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: (this.gallery.offsetWidth / 1920) * 1400,
            duration: 500,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 1) {
          this.box2.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box2,
            //width: this.box2.offsetWidth / 20,
            left: "205rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "220rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 2) {
          this.box3.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box3,
            //width: this.box3.offsetWidth / 20,
            left: "310rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "325rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 3) {
          this.box4.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box4,
            //width: this.box4.offsetWidth / 20,
            left: "405rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "420rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 4) {
          this.box5.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box5,
            //width: this.box5.offsetWidth / 20,
            left: "500rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "520rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 5) {
          this.box6.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box6,
            //width: this.box6.offsetWidth / 20,
            left: "610rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "625rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        } else if (this.index === 6) {
          this.box7.style.backgroundSize = "0%";
          //console.log("123");
          anime({
            targets: this.box7,
            //width: this.box7.offsetWidth / 20,
            left: "700rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
          anime({
            targets: this.year,
            left: "785rem",
            duration: 300,
            easing: "easeOutElastic(3, 1)",
          });
        }
        this.index = this.index + 1;

        this.yearIndex++;
      }
    },

    consultation: function () {
      this.selected = 1;
    },
    realestate: function () {
      this.selected = 2;
    },
    construction: function () {
      this.selected = 3;
    },

    clearContent: function (content) {
      if (content === "email" && this.email === "Your email address…") {
        this.email = null;
      } else if (
        content === "text" &&
        this.text === "  Leave your message here…"
      ) {
        this.text = null;
      }
    },

    resetContent: function (content) {
      if (this.email === "") {
        this.email = null;
      }

      if (this.text === "") {
        this.text = null;
      }

      if (content === "email" && this.email === null) {
        this.email = "Your email address…";
      }

      if (content === "text" && this.text === null) {
        this.text = "  Leave your message here…";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
.home {
  width: 100%;
  //min-height: 100%;
  //padding: 14rem 14rem 0 14rem;

  .block1 {
    padding: 21.3rem 14rem 0 14rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .ID {
    margin-top: 12rem;
    width: 4.8rem;
    height: 4.8rem;
    text-align: left;
    color: #4a9ef2;
    letter-spacing: 1.64px;
    line-height: 5.3rem;
    font: 4.1rem/5.3rem PT Sans;
    font-weight: 700;
  }

  .title-underline {
    margin-top: 1.4vh;
    fill: transparent;
    stroke: rgba(113, 113, 113, 1);
    stroke-width: 2px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
    width: 16rem;
    height: 2rem;
    left: 14rem;
  }

  .title {
    margin-left: 7rem;
    margin-top: 0.3rem;
    text-align: left;

    font-size: 2.6rem;
    line-height: 3.7rem;
    letter-spacing: 1.04px;
    color: rgba(113, 113, 113, 1);
  }

  .container-1-left {
    display: flex;
    flex-direction: column;

    min-width: 55rem;

    .block-1-message {
      font-size: 2rem;
    }

    .subtitle-s {
      display: flex;
      flex-direction: column;
      width: 50rem;
      margin-top: 9rem;

      .subtitle {
        width: 50rem;
        display: flex;
        flex-direction: row;

        &:hover {
          color: var(--unnamed-color-000000);
        }

        //margin-left: 5rem;

        text-align: left;

        .small-icon {
          //margin-top: 4rem;

          width: 9.5rem;
          height: 9.5rem;
          opacity: 1;
          fill: transparent;
          stroke: rgba(59, 125, 216, 1);
          stroke-width: 1px;
          stroke-linejoin: miter;
          stroke-linecap: butt;
          stroke-miterlimit: 4;
          shape-rendering: auto;
        }

        span {
          font: normal normal bold 5rem/6.9rem Raleway;
          margin-left: 1.7rem;
          margin-top: 1.5rem;
        }
      }

      text-align: left;

      font-size: 5.9rem;
      letter-spacing: 2.44px;
      color: rgba(227, 227, 227, 1);
    }
  }

  .container-1-right {
    display: flex;
    flex-direction: column;
    width: 110.9rem;
    height: 65.7rem;

    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      line-height: 2.8rem;
      p {
        margin-left: auto;
        margin-right: auto;
        margin-top: 24.7rem;
        text-align: center;
        font-size: 2rem;
        color: white;

        width: 82rem;
      }
      .button {
        position: absolute;
        left: 40%;
        top: 38rem;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        background-color: rgba(74, 145, 242, 1);
        margin-top: 2rem;
        width: 22rem;
        height: 5.4rem;
        border: 1px solid var(--unnamed-color-000000);

        border-radius: 4px;
        opacity: 1;
        //font: 2.2rem/3.2rem Source Sans Pro;
        font-size: 2.2rem;
        line-height: 3.2rem;
        p {
          margin-left: 10%;
          width: 40%;
          height: 100%;
          margin-top: 5%;
          white-space: nowrap;
        }
        .button-arrow {
          margin-top: 6%;
          margin-left: 10%;
          width: 30%;
          //margin-bottom: 90%;
          height: 100%;
          stroke: white;
          stroke-width: 1px;
        }
      }

      .image-1-blur {
        position: relative;
        display: flex;
        flex-direction: column;

        width: 100%;

        height: 65.7rem;
        background-image: url("../../assets/imgs/home/blur-scott-graham-5fNmWej4tAA-unspl@2x.png");
        background-color: white;
        //filter: blur(12px);

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .image-2-blur {
        position: relative;
        display: flex;
        flex-direction: column;

        width: 100%;

        height: 65.7rem;
        background-image: url("../../assets/imgs/home/blur-realestate.png");
        background-color: white;
        //filter: blur(12px);

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .image-3-blur {
        position: relative;
        display: flex;
        flex-direction: column;

        width: 100%;

        height: 65.7rem;
        background-image: url("../../assets/imgs/home/blur-construction.png");
        background-color: white;
        //filter: blur(12px);

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .image-1 {
        width: 100%;

        height: 65.7rem;
        background-image: url("../../assets/imgs/home/scott-graham-5fNmWej4tAA-unspl@2x.png");
        background-color: white;

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .image-2 {
        width: 100%;

        height: 65.7rem;
        background-image: url("../../assets/imgs/home/realestate.png");
        background-color: white;

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .image-3 {
        width: 100%;

        height: 65.7rem;
        background-image: url("../../assets/imgs/home/construction.png");
        background-color: white;

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      font-size: 2rem;
    }
  }

  .block2 {
    padding: 21.3rem 0 0 0;
    height: 90rem;

    .background {
      .ID {
        margin-left: 14rem;
      }
      .title-underline {
        margin-left: 14rem;
      }
      .title {
        margin-left: 18.375rem;
      }
      //padding: 14rem 14rem 0 14rem;
      display: flex;
      flex-direction: column;

      height: 92%;
      background-image: url("../../assets/imgs/home/bady-abbas-MDgRcuGYu58-unsplas@2x.png"),
        url("../../assets/imgs/home/Group_920@2x.png");
      background-color: white;

      background-position: center, bottom;
      background-repeat: no-repeat;
      background-size: 100% 100%, 102.6rem 19.7rem;
      //position: relative;
    }
    .img {
      margin-top: 40rem;
      margin-left: 0rem;

      max-width: 50.5rem;
      max-height: 38.5rem;
      transform: scale(0.7);
      transform-origin: bottom left;
      transition: 1s;
    }

    .content {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      line-height: 4.5rem;

      .content-head {
        color: var(--unnamed-color-000000);
        text-align: center;
        font: normal normal bold 45px/53px Raleway;
        letter-spacing: 1.8px;
        //font: normal normal normal 3vw Source Sans Pro;
        font-size: 4.5rem;
        letter-spacing: 1.8px;

        color: #000000;
        opacity: 1;

      }

      width: 100.1rem;
      color: var(--unnamed-color-000000);
      text-align: center;
      font: normal normal normal  Source Sans Pro;
      font-size: 1.9rem;
      letter-spacing: 1.8px;
      letter-spacing: 0.88px;
      color: #000000;
      opacity: 1;

      .button-2 {
        position: absolute;
        left: 39.5%;
        top: 24rem;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        background-color: transparent;
        border: 0.2rem solid black; /* Green */
        margin-top: 20px;
        width: 22rem;
        height: 5.4rem;

        border-radius: 4px;
        opacity: 1;
        //font: 2.2rem/3.2rem Source Sans Pro;
        font-size: 2.2rem;
        line-height: 3.2rem;
        p {
          margin-left: 10%;
          width: 40%;
          height: 100%;
          margin-top: 5%;
          white-space: nowrap;
        }
        .button-arrow {
          margin-top: 6%;
          margin-left: 10%;
          width: 30%;
          //margin-bottom: 90%;
          height: 100%;
          stroke: black;
          stroke-width: 1px;
        }
      }
    }
  }

  .background-3 {
    padding: 20.1rem 0 0 0;
    background-image: url("../../assets/imgs/home/标尺.png");

    background-position: 0% 100%;
    background-repeat: repeat-x;
    background-size: 100%;
    height: 80rem;
    .block3 {
      .ID {
        margin-left: 14rem;
        margin-top: 0;
      }
      .title-underline {
        margin-left: 14rem;
      }
      .title {
        margin-left: 21rem;
      }
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      .block-3-cercle {
        position: absolute;
        left: 0rem;
        bottom: 3.2rem;
        width: 3.4rem;
        height: 50rem;
        fill: transparent;
        stroke: rgba(19, 129, 206, 1);
        stroke-width: 2px;
      }

      .block-3-line {
        position: absolute;
        left: 1.6rem;
        bottom: 0;
        width: 33.4rem;
        height: 50rem;
        stroke: rgba(198, 198, 198, 1);
        stroke-width: 3;
      }

      .gallery {
        display: flex;
        flex-direction: row;
        $box1positionx: 50.1rem;
        $zoomedDistance: 127rem;
        //$normalDistance: 42.4rem;

        position: relative;
        height: 100%;
        width: 100%;
        overflow: auto;
        .year-small {
          position: absolute;
          left: 5rem;
          bottom: 50rem;
          color: var(--unnamed-color-1381ce);
          text-align: left;
          font: normal normal bold 2vw Source Sans Pro;
          letter-spacing: 1.48px;
          color: rgba(19, 129, 206, 1);
        }
        .year {
          position: absolute;
          left: 13.4rem;
          bottom: 10.9rem;
          max-width: 32.8rem;
          color: var(--unnamed-color-1381ce);
          text-align: left;
          font-size: 12.7rem;
          letter-spacing: 5.08px;
          color: rgba(19, 129, 206, 1);
          margin-top: 40vh;
        }

        .box-1 {
          background-image: url("../../assets/imgs/home/Artboard_1@2x.png");
          background-color: transparent;

          background-position: 20% 40%;
          background-size: 70%;
          background-repeat: no-repeat;

          position: absolute;
          bottom: 0;
          left: $box1positionx;
          height: 100%;
          width: $zoomedDistance;

          .subtitle {
            position: absolute;
            left: 16rem;
            bottom: 43rem;
            color: var(--unnamed-color-000000);
            text-align: left;
            font: normal normal 1.5vw Avenir;
            //font-size: 1.5vw;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
          }
          .content {
            font-size: 2.4rem;
            letter-spacing: 0.096rem;
            position: absolute;
            left: 16rem;
            bottom: 35rem;
            max-width: 45rem;
          }
        }
        .box-2 {
          background-image: url("../../assets/imgs/home/woodlands_checkpoint-otc-6.png");
          background-color: transparent;
          background-position: 20% 40%;
          background-repeat: no-repeat;
          background-size: 70%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance;
          height: 100%;
          width: 140rem;
        }
        .box-3 {
          background-image: url("../../assets/imgs/home/组屋-sep.jpg");

          background-position: 20% 40%;
          background-repeat: no-repeat;
          background-size: 70%;

          position: absolute;

          bottom: 0;
          left: $box1positionx + $zoomedDistance * 2;
          height: 100%;
          width: 140rem;
        }
        .box-4 {
          background-image: url("../../assets/imgs/home/圣淘沙+（局部）.jpg");

          background-position: 20% 80%;
          background-repeat: no-repeat;
          background-size: 80%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 3;
          height: 100%;
          width: 140rem;
        }

        .box-5 {
          background-image: url("../../assets/imgs/home/Artboard 1.jpg");

          background-position: 30% 80%;
          background-repeat: no-repeat;
          background-size: 70%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 4;
          height: 100%;
          width: 140rem;
        }

        .box-6 {
          background-image: url("../../assets/imgs/home/singapore-expo.jpg");

          background-position: 30% 80%;
          background-repeat: no-repeat;
          background-size: 60%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 5;
          height: 100%;
          width: 140rem;
        }

        .box-7 {
          background-image: url("../../assets/imgs/home/热带雨林.jpg");

          background-position: 20% 80%;
          background-repeat: no-repeat;
          background-size: 60%;

          position: absolute;
          bottom: 0;
          left: $box1positionx + $zoomedDistance * 6;
          height: 100%;
          width: 140rem;
        }
      }

      .column-1 {
        float: left;
        max-width: 50%;
        width: 30%;
      }
      .column-2 {
        float: right;
        max-width: 50%;
        width: 30%;
        padding: 0 0 0 15%;

        svg {
          margin-top: 15%;

          max-width: 50%;
          max-height: 6rem;
          margin-left: 10%;
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

  .background-4 {
    padding: 21.3rem 0 0 0;
    display: flex;
    flex-flow: column;
    background: rgba(68, 139, 217, 0.15) 0% 0% no-repeat padding-box;
    //opacity: 0.15;
    height: 120rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //position: relative;
    .container-4 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      svg {
        max-width: 100%;
        max-height: 6rem;
        margin-left: 10%;
        &:hover {
          circle {
            fill: #1381ce;
          }
          path {
            fill: white;
          }
        }
      }

      .left {
        margin-top: 45rem;

        width: 5%;
      }

      .block4 {
        width: 80%;

        flex-direction: column;
        height: 10rem;
        .gallery {
          font: normal normal normal 1.6rem/2.2rem Source Sans Pro;
          h1 {
            font-size: 3.6rem;
            letter-spacing: 0.144rem;
          }
          p {
            font-size: 1.6rem;
            line-height: 2.2rem;
            margin-top: 5rem;
          }
          margin-top: 3.5rem;
          .background-white {
            padding: 10%;
            background-color: white;
          }
          text-align: center;
          img {
            width: 100%;
            height: auto;
          }
          .box-1 {
            float: left;
            max-width: 30%;
            max-height: 50%;
          }
          .box-2 {
            margin-left: 5%;
            float: left;
            max-width: 30%;
          }
          .box-3 {
            margin-left: 5%;
            float: left;
            max-width: 30%;
          }
        }
      }

      .right {
        margin-top: 45rem;

        width: 5%;
      }
    }

    .ID {
      margin-left: 14rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal bold 4.1rem/5.3rem PT Sans;
      letter-spacing: 1.64px;
      color: rgba(0, 0, 0, 1);
      opacity: 1;
    }
    .title-underline {
      margin-left: 14rem;
      opacity: 1;
    }
    .title {
      margin-left: 21rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font-size: 2.6rem;
      line-height: 3.7rem;
      letter-spacing: 1.04px;
      color: #000000;
      opacity: 1;
    }

    .head {
      .button-1 {
        float: right;
        max-width: 20%;

        button {
          display: flex;
          justify-content: space-around;
          //font: normal normal normal 2.2rem/3.2rem Source Sans Pro;
          font-size: 2.2rem;
          line-height: 3.2rem;
          letter-spacing: 0.88px;

          border: none;
          width: 22rem;
          height: 5.4rem;

          background: rgba(74, 145, 242, 0) 0% 0% no-repeat padding-box;
          color: black;
          border: 1px solid #000000;
          border-radius: 4px;
          p {
            margin-left: 5%;
            width: 40%;
            height: 100%;
            margin-top: 5%;
            white-space: nowrap;
          }
          .button-arrow {
            margin-top: 6%;
            margin-left: 10%;
            width: 30%;
            //margin-bottom: 90%;
            height: 100%;
            stroke: #000000;
            stroke-width: 0.6px;
          }
        }
      }

      max-width: 100%;
      p {
        float: left;
        max-width: 80%;
      }

      margin-top: 10rem;
      max-height: 6.4rem;

      height: 6.4rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 4.5rem/6.4rem Source Sans Pro;
      letter-spacing: 1.8px;
      color: #000000;
    }
  }

  .block5 {
    padding: 21.3rem 0 0 14rem;
    display: flex;
    flex-direction: column;
    height: 70rem;

    .ID {
      margin-top: 0;
    }

    .row-1 {
      height: 35rem;
      margin-top: 14.7rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .container-5 {
        display: flex;
        flex-direction: row;
        height: 4.7rem;

        svg {
          width: 3rem;
          margin-top: 3rem;
          fill: transparent;
          stroke: rgba(19, 129, 206, 1);
          stroke-width: 1rem;
          stroke-linejoin: miter;
          stroke-linecap: butt;
          stroke-miterlimit: 4;
          shape-rendering: auto;
        }

        .title-5 {
          margin-left: 0.5rem;
          width: 50%;
          color: var(--unnamed-color-000000);

          text-align: left;
          font: 3.5rem/6.4rem Open Sans;
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 1);
        }
      }

      .content-5 {
        margin-top: 5rem;
        text-align: left;
        width: 35rem;
        line-height: 5rem;

        font-size: 3rem;

        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
      }
      .col-1 {
        background-image: url("../../assets/imgs/home/mission.png");
        height: 35rem;
        width: 30%;
        background-color: white;
        background-position: 40% 80%;
        background-repeat: no-repeat;
        background-size: 50%;
      }
      .col-2 {
        background-image: url("../../assets/imgs/home/vision.png");

        height: 35rem;
        width: 30%;
        background-color: white;
        background-position: 60% 60%;
        background-repeat: no-repeat;
        background-size: 50%;
      }
      .col-3 {
        background-image: url("../../assets/imgs/home/culture.png");
        height: 35rem;
        width: 30%;
        background-color: white;
        background-position: 80% 50%;
        background-repeat: no-repeat;
        background-size: 50%;
      }
    }
  }

  .title-2 {
    margin-top: 10%;
    text-align: center;
    color: var(--unnamed-color-000000);
    font: normal normal bold 4.1rem/5.3rem PT Sans;
    letter-spacing: 0.164rem;
    color: rgba(0, 0, 0, 1);
  }
  .input {
    .email {
      display: flex;
      justify-content: space-around;
      input[type="text"] {
        width: 59.2rem;
        border: none;
        border-bottom: 1px solid rgba(112, 112, 112, 1);
        color: var(--unnamed-color-c6c6c6);
        text-align: left;
        font: normal normal normal 2.2rem/4.5rem Source Sans Pro;
        letter-spacing: 0.088rem;
        color: rgba(198, 198, 198, 1);
      }
    }
    .text {
      display: flex;
      justify-content: space-around;
      textarea {
        width: 59.2rem;
        height: 15rem;
        max-height: 15rem;
        background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
        border: 1px solid rgba(112, 112, 112, 1);
        border-radius: 3px;
        color: var(--unnamed-color-c6c6c6);
        text-align: left;
        font: normal normal normal 2.2rem/4.5rem Source Sans Pro;
        letter-spacing: 0.88px;
        color: rgba(198, 198, 198, 1);
      }
    }
  }
  .button-5-1 {
    display: flex;
    justify-content: space-around;
    margin-top: 4rem;
    .button-5-2 {
      text-align: center;
      font: normal normal normal 2.2rem/3.2rem Source Sans Pro;
      letter-spacing: 0.088rem;
      width: 13.2rem;
      height: 5.4rem;
      border: none;

      background: rgba(74, 145, 242, 1) 0% 0% no-repeat padding-box;
      color: white;
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 768px) {
    .container-1 {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}
</style>
