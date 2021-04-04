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

        <div class="subtitle-s" style="text-align: center">
          <div class="subtitle" @mouseover="consultation()">
            <svg class="small-icon" viewBox="0 0 7.75rem 7.75rem">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 1"
                id="Ellipse_179"
                rx="3.75rem"
                ry="3.75rem"
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
              @click="goto('consultation')"
              v-if="selected === 1"
              style="color: black; cursor: pointer"
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
          <div v-if="selected === 1" style="height: 100%">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-1-blur"
            >
              <div>
                <p style="margin-top: 22rem">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>

              <button class="button">
                <p>Read More</p>

                <svg class="button-arrow" viewBox="0 8 28 28">
                  <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                </svg>
              </button>
            </div>
            <div v-else class="image-1" @mouseover="blur"></div>
          </div>

          <div v-else-if="this.selected === 2" style="height: 100%">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-2-blur"
            >
              <div>
                <p>
                  {{ $t("message.realEstate.shortDescription") }}
                </p>
              </div>

              <button class="button" @click="goRealEstate()">
                <p>Read More</p>

                <svg class="button-arrow" viewBox="0 8 25 25">
                  <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                </svg>
              </button>
            </div>
            <div v-else class="image-2" @mouseover="blur"></div>
          </div>
          <div v-else-if="selected === 3" style="height: 100%">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-3-blur"
            >
              <div>
                <p>
                  {{ $t("message.construction.shortDescription") }}
                </p>
              </div>

              <button class="button" @click="goConstruction()">
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
        <div class="block2-row-1">
          <div class="column-1">
            <div class="ID" style="color: white">
              <span>02</span>
            </div>

            <svg class="title-underline" style="stroke: white">
              <line x1="0" y1="0" x2="150" y2="0" />
            </svg>

            <div class="title" style="color: white">
              <span>{{ $t("message.about-title") }}</span>
            </div>
          </div>
          <div class="column-2">
            <p class="content-head f-f-raleway">
              {{ $t("message.about-title") }}
            </p>
          </div>
          <div class="column-3"></div>
        </div>

        <div class="content">
          <p style="margin-top: 2rem; height: 17rem">
            {{ $t("message.about") }}
            <span
              class="read-more"
              @click="goto('about-us')"
              style="color: rgb(6, 69, 173); cursor: pointer"
              >Read More</span
            >
          </p>

          <!--
          <button class="button-2">
            <p>Read More</p>

            <svg class="button-arrow" viewBox="0 0 25 25">
              <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
            </svg>
          </button>

          -->
        </div>
      </div>
    </div>

    <div class="background-3">
      <div class="block3">
        <div class="block3-row-1">
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
          <div class="column-2">MCC Singapore History</div>
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
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 0"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 3.5rem 3.5rem" class="block-3-cercle" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <line x1="0" y1="0" x2="1" y2="51" />
            </svg>

            <div class="year-small">
              <p v-if="yearIndex === 0">{{ years[0] }}</p>
              <p v-else style="color: rgba(198, 198, 198, 1)">{{ years[0] }}</p>
            </div>
            <transition name="fade">
              <div class="subtitle" v-if="index === 0">
                <p>{{ $t("message.history[0].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="top: 13rem"
                class="content f-f-avenir"
                v-if="index === 0"
              >
                <p>{{ $t("message.history[0].content") }}</p>
              </div>
            </transition>
          </div>
          <div class="box-2" ref="box2">
            <svg
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 1"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" viewBox="0 0 3.5rem 3.5rem" v-else>
              <ellipse
                id="Ellipse_178_o"
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <div class="subtitle" v-if="index === 1">
                <p>{{ $t("message.history[1].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="top: 13rem; min-width: 60rem"
                class="content f-f-avenir"
                v-if="index === 1"
              >
                <p>{{ $t("message.history[0].content") }}</p>
              </div>
            </transition>
          </div>
          <div class="box-3" ref="box3">
            <svg
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 2"
            >
              <ellipse
                id="Ellipse_178_o"
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg class="block-3-cercle" v-else>
              <ellipse
                viewBox="0 0 3.5rem 3.5rem"
                id="Ellipse_178_o"
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <div class="subtitle" v-if="index === 2">
                <p>{{ $t("message.history[2].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="top: 13rem; width: 34rem"
                class="content f-f-avenir"
                v-if="index === 2"
              >
                <p>{{ $t("message.history[2].content") }}</p>
              </div>
            </transition>
          </div>
          <div class="box-4" ref="box4">
            <svg
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 3"
            >
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 3.5rem 3.5rem" class="block-3-cercle" v-else>
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <div class="subtitle" v-if="index === 3">
                <p>{{ $t("message.history[4].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="top: 13rem; background-color: rgba(255, 255, 255, 0.8)"
                class="content f-f-avenir"
                v-if="index === 3"
              >
                <p>{{ $t("message.history[4].content") }}</p>
              </div>
            </transition>
          </div>

          <div class="box-5" ref="box5">
            <div class="sentorini" ref="sentorini">
              <img src="../../assets/imgs/home/sentorini + canopy.jpg" alt="" />
            </div>
            <div class="bedok" ref="bedok">
              <img src="../../assets/imgs/home/poiz + bedok south.jpg" alt="" />
            </div>

            <svg
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 4"
            >
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 3.5rem 3.5rem" class="block-3-cercle" v-else>
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <div class="subtitle" v-if="index === 4">
                <p>{{ $t("message.history[5].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="
                  top: 13rem;
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
                  top: 13rem;
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
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 5"
            >
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 3.5rem 3.5rem" class="block-3-cercle" v-else>
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <div class="subtitle" v-if="index === 5">
                <p>{{ $t("message.history[6].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="top: 13rem; max-width: 50rem"
                class="content f-f-avenir"
                v-if="index === 5"
              >
                <p>{{ $t("message.history[6].content2") }}</p>
              </div>
            </transition>
          </div>

          <div class="box-7" ref="box7">
            <svg
              viewBox="0 0 3.5rem 3.5rem"
              class="block-3-cercle"
              style="fill: black; stroke: black"
              v-if="yearIndex === 6"
            >
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
              ></ellipse>
            </svg>

            <svg viewBox="0 0 3.5rem 3.5rem" class="block-3-cercle" v-else>
              <ellipse
                rx="1.5rem"
                ry="1.5rem"
                cx="1.7rem"
                cy="1.7rem"
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
              <div class="subtitle" v-if="index === 6">
                <p>{{ $t("message.history[7].title") }}</p>
              </div>
            </transition>

            <transition name="fade">
              <div
                style="
                  top: 12.5rem;
                  width: 44rem;
                  background-color: rgba(255, 255, 255, 0);
                "
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

    <div class="background-4">
      <div class="block4-row-1">
        <div class="column-1">
          <div class="ID">
            <span>04</span>
          </div>

          <svg class="title-underline">
            <line x1="0" y1="0" x2="150" y2="0" />
          </svg>

          <div class="title">
            <span>MCC news</span>
          </div>
        </div>
        <div class="column-2">
          <div class="head-4">
            <p>MCC News</p>
          </div>
        </div>
        <div class="column-3"></div>
      </div>

      <div class="container-4">
        <div class="block4">
          <div class="gallery">
            <div class="left" @click="goLeft">
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
                        stroke="black"
                        fill="none"
                      />
                      <path
                        id="Path_2293"
                        data-name="Path 2293"
                        d="M194.825,112.484a1.656,1.656,0,1,0-2.341,2.341L204.56,126.9l-12.077,12.077a1.656,1.656,0,1,0,2.341,2.341l13.247-13.247a1.654,1.654,0,0,0,0-2.341Z"
                        transform="translate(-170.278 -96.901)"
                        fill="black"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <carousel
              :per-page="3"
              :minSwipeDistance="500"
              :paginationEnabled="false"
              :navigateTo="this.block4status"
            >
              <slide>
                <div class="block-4-img" @click="goNews(allNews[0])">
                  <img
                    :src="
                      require('../../assets/news/' +
                        allNews[0] +
                        '/' +
                        1 +
                        '.jpg')
                    "
                    alt=""
                  />
                </div>

                <div class="background-white" @click="goNews(allNews[0])">
                  <div class="block-4-title f-f-sans">{{ news1.title }}</div>
                </div>
              </slide>
              <slide>
                <div class="block-4-img" @click="goNews(allNews[1])">
                  <img
                    :src="
                      require('../../assets/news/' +
                        allNews[1] +
                        '/' +
                        1 +
                        '.jpg')
                    "
                    alt=""
                  />
                </div>

                <div class="background-white" @click="goNews(allNews[1])">
                  <div class="block-4-title f-f-sans">{{ news2.title }}</div>
                </div>
                <div class="head"></div>
              </slide>
              <slide>
                <div class="block-4-img" @click="goNews(allNews[2])">
                  <img
                    :src="
                      require('../../assets/news/' +
                        allNews[2] +
                        '/' +
                        1 +
                        '.jpg')
                    "
                    alt=""
                  />
                </div>

                <div class="background-white" @click="goNews(allNews[2])">
                  <div class="block-4-title f-f-sans">{{ news3.title }}</div>
                </div>
              </slide>

              <slide>
                <div class="block-4-img" @click="goNews(allNews[3])">
                  <img
                    :src="
                      require('../../assets/news/' +
                        allNews[3] +
                        '/' +
                        1 +
                        '.jpg')
                    "
                    alt=""
                  />
                </div>

                <div class="background-white" @click="goNews(allNews[3])">
                  <div class="block-4-title f-f-sans">{{ news4.title }}</div>
                </div>
              </slide>
            </carousel>

            <div class="right" @click="goRight">
              <svg
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
                      stroke="black"
                      fill="none"
                    />
                    <path
                      id="Path_2293"
                      data-name="Path 2293"
                      d="M194.825,112.484a1.656,1.656,0,1,0-2.341,2.341L204.56,126.9l-12.077,12.077a1.656,1.656,0,1,0,2.341,2.341l13.247-13.247a1.654,1.654,0,0,0,0-2.341Z"
                      transform="translate(-170.278 -96.901)"
                      fill="black"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div class="button-1" @click="goAllNews">
            <button>
              <div class="button-1-text">
                <p>View more</p>
              </div>

              <svg class="button-arrow" viewBox="0 0 28 28">
                <path d="M5 15 L25 15 M25 15 L17 22 M25 15 L17 8"></path>
              </svg>
            </button>
          </div>
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
        <span>Our culture</span>
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
            <p class="title-5 font-bold">Core Values</p>
          </div>
          <div class="content-5">
            <p>
              Make a difference, Creativity, Cooperation, Sincerity,
              Goal-oriented.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="background-6" v-if="this.$store.state.showContectUs">
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
            st
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
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  data: function () {
    return {
      content: "",
      selected: 1,
      mouseover: false,
      email: "Your email address…",
      text: "  Leave your message here…",
      years: [1992, 1997, 2006, 2008, 2010, 2017, 2020],
      box5special: true,
      box5LeftSpecial: true,
      box5counter: 0,
      yearIndex: 0,
      scrollTop: 0,
      index: 0,
      index2010: 0,
      block4status: 0,
      newsPageCount: 2,
      showContact: this.$store.state.showContectUs,
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

      newsID: null,
      photos: [],
      allNews: null,
      news1: null,
      news2: null,
      news3: null,
      news4: null,
    };
  },

  components: {
    Carousel,
    Slide,
  },

  computed: {
    userStyle() {
      return {};
    },
  },

  created() {
    this.allNews = [
      "2_10_2020",
      "7_9_2020",
      "20_8_2020",
      "23_6_2020",
      "19_5_2020",
      "11_4_2020",
      "6_4_2020",
      "27_3_2020",
      "13_1_2020",
      "11_10_2019",
      "30_9_2019",
    ];

    this.content = require("../../assets/homepage/content.json");

    this.news1 = require("../../assets/news/" +
      this.allNews[0] +
      "/content.json");
    this.news2 = require("../../assets/news/" +
      this.allNews[1] +
      "/content.json");
    this.news3 = require("../../assets/news/" +
      this.allNews[2] +
      "/content.json");
    this.news4 = require("../../assets/news/" +
      this.allNews[3] +
      "/content.json");
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

  destroy() {
    window.removeEventListener("scroll", this.resizeTrigger);
  },

  methods: {
    goLeft: function () {
      if (this.block4status > 0) {
        this.block4status--;
      }
    },

    goRight: function () {
      if (this.block4status < this.newsPageCount - 1) {
        this.block4status++;
      }
    },

    goNews: function (id) {
      this.$router.push("/news/?id=" + id);
      window.scrollTo(0, 0);
    },

    blur: function () {
      this.mouseover = true;
    },

    clear: function () {
      this.mouseover = false;
    },

    gonews: function () {
      this.$router.push("/news");
    },

    goAllNews: function () {
      this.$router.push("/all-news");
    },

    goRealEstate: function () {
      this.$router.push("/real-estate");
    },

    goConstruction: function () {
      this.$router.push("/construction");
    },

    goto(where) {
      this.$router.push("/" + where);
    },

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

          left: "-130rem",
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
      console.log("right");
      console.log(this.index);
      console.log(this.box5special);
      console.log(this.box5LeftSpecial);
      console.log(this.box5counter);
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

        console.log("hahaha" + this.index2010);
        anime({
          targets: this.sentorini,

          left: "10rem",
          duration: 500,
          opacity: 1,
          easing: "easeInOutQuad",
        });
        anime({
          targets: this.bedok,
          left: "140rem",
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
          this.box2.style.backgroundSize = "40%, 60%";
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
          this.box6.style.backgroundSize = "80%";
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
      console.log("left");
      console.log(this.index);
      console.log(this.box5special);
      console.log(this.box5LeftSpecial);
      console.log(this.box5counter);
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap");

.home {
  width: 100%;
  //min-height: 100%;
  //padding: 14rem 14rem 0 14rem;

  .fade-enter-active {
    transition: opacity 0.3s;
    transition-delay: 200ms;
  }
  .fade-leave-active {
    transition: opacity 0.3s;
    transition-delay: 100ms;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .block1 {
    padding: 21.3rem 14rem 0 14rem;

    display: flex;
    flex-direction: row;
    //justify-content: space-around;
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
    stroke-width: 3px;
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

    font: normal normal 600 2.4rem/3.3rem Open Sans;
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
        width: 52rem;
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
          margin-left: 1.8rem;
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

    width: 100vw/1920 * 1109;

    //height: 100%;
    //height: 65.7rem;

    .content {
      display: flex;
      flex-direction: column;
      position: relative;

      width: auto;
      height: 100%;

      line-height: 2.8rem;

      p {
        margin-left: auto;
        margin-right: auto;
        margin-top: 100vw/1920 * 150;
        text-align: center;
        font-size: 2rem;
        color: white;

        width: 50%;
      }

      .button {
        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        background-color: rgba(74, 145, 242, 1);
        margin-top: 5rem;
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

        width: auto;

        height: 96%;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
          ),
          url("../../assets/imgs/home/consultation.jpg");
        background-color: white;
        //filter: blur(12px);

        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      .image-2-blur {
        position: relative;
        display: flex;
        flex-direction: column;

        width: auto;

        height: 96%;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url("../../assets/imgs/home/realestate.jpg");
        background-color: white;
        //filter: blur(12px);

        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      .image-3-blur {
        position: relative;
        display: flex;
        flex-direction: column;

        width: auto;

        height: 96%;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url("../../assets/imgs/home/construction.jpg");
        background-color: white;
        //filter: blur(12px);

        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      .image-1 {
        width: auto;

        height: 96%;

        background-image: url("../../assets/imgs/home/consultation.jpg");
        background-color: white;

        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      .image-2 {
        width: auto;

        height: 96%;
        background-image: url("../../assets/imgs/home/realestate.jpg");
        background-color: white;

        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      .image-3 {
        width: 100%;

        height: 96%;
        background-image: url("../../assets/imgs/home/construction.jpg");
        background-color: white;

        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      font-size: 2rem;
    }
  }

  .block2 {
    padding: 17.6rem 0 0 0;
    height: 87.8rem;

    .background {
      .block2-row-1 {
        display: flex;
        flex-flow: row;

        .column-1 {
          width: 30%;
          flex-flow: column;

          .ID {
            margin-left: 14rem;
            margin-top: 14.9rem;
          }

          .title-underline {
            margin-left: 14rem;
          }

          .title {
            margin-left: 18.375rem;
          }
        }

        .column-2 {
          width: 40%;

          .content-head {
            color: var(--unnamed-color-000000);
            text-align: center;
            font: normal normal bold 45px/53px Raleway;
            position: relative;
            margin-top: 21.6rem;

            letter-spacing: 0.18rem;
            //font: normal normal normal 3vw Source Sans Pro;
            font-size: 4.5rem;
            letter-spacing: 0.18rem;

            color: #000000;
            opacity: 1;
          }
        }

        .column-3 {
          width: 30%;
        }
      }

      //padding: 14rem 14rem 0 14rem;
      display: flex;
      flex-direction: column;

      height: 100%;
      background-image: url("../../assets/imgs/home/Group_920@2x.png"),
        url("../../assets/imgs/home/bady-abbas-MDgRcuGYu58-unsplas@2x.png");
      background-color: white;
      background-position: bottom, center;
      background-repeat: no-repeat;
      background-size: 102.6rem 19.7rem, 100% 100%;
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
      margin-left: auto;
      margin-right: auto;
      white-space: pre-line;

      margin-top: 0;
      line-height: 4.5rem;

      width: 51vw;
      height: 39%;

      color: var(--unnamed-color-000000);
      text-align: center;
      font: normal normal normal Source Sans Pro;
      font-size: 1.9rem;
      letter-spacing: 0.18rem;
      letter-spacing: 0.88px;

      color: #000000;
      opacity: 1;
      .read-more {
        &:hover {
          border-bottom: solid;
        }
      }

      .button-2 {
        &:hover {
          background-color: white;
          border-color: white;
        }

        margin-left: auto;
        margin-right: auto;
        margin-top: 100vw/1920 * 24;
        display: flex;

        flex-direction: row;
        justify-content: center;

        background-color: transparent;
        border: 0.1rem solid black;
        /* Green */

        width: 16.4rem;
        height: 5.4rem;

        border-radius: 4px;
        opacity: 1;

        p {
          margin-top: 100vw/1920 * 15;
          margin-left: 1.2rem;
          white-space: nowrap;
          font: normal normal normal 1.8rem/2.5rem Source Sans Pro;
        }

        .button-arrow {
          margin-top: 100vw/1920 * 0;
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
    padding: 14.9rem 0 0 0;

    height: 75rem;
  }

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
      z-index: 3;
      position: absolute;
      left: -1.6rem;
      bottom: 50.1rem;
      width: 3.4rem;
      height: 3.4rem;
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
      height: 50rem;
      stroke: rgba(198, 198, 198, 1);
      stroke-width: 0.3;
    }

    .year-small {
      position: absolute;
      left: 3rem;
      bottom: 49rem;
      color: var(--unnamed-color-1381ce);
      text-align: left;
      font: normal normal bold 3.7rem/5.3rem Source Sans Pro;
      letter-spacing: 0.148rem;
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

      letter-spacing: 5.08px;
      color: rgba(19, 129, 206, 1);
      margin-top: 40vh;

      div {
        font-size: 6.5vw;
        letter-spacing: 0.508rem;
        line-height: 15.2rem;
      }
    }

    .gallery {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      //justify-content: space-between;
      background-image: url("../../assets/imgs/home/标尺.png");
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

      .subtitle {
        position: absolute;
        left: 3rem;
        bottom: 44rem;
        color: var(--unnamed-color-000000);
        text-align: left;
        font: normal normal 900 3.7rem/5.1rem Avenir;
        //font-size: 1.5vw;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
      }

      .content {
        font: normal normal normal 2.4rem/3.3rem Avenir;
        letter-spacing: 0.096rem;
        position: absolute;
        left: 3rem;
        //bottom: 35rem;
        max-width: 45rem;
        text-align: left;
        white-space: pre-line;
      }

      .box-1 {
        background-image: url("../../assets/imgs/home/Artboard_1@2x.png");
        background-color: transparent;

        background-position: 20% 50%;
        background-size: 100%;
        background-repeat: no-repeat;

        position: absolute;
        top: 0;
        left: $box1positionx;
        height: 100%;
        width: $zoomedDistance;
      }

      .box-2 {
        background-image: url("../../assets/imgs/home/wooland checkpoint.jpg"),
          url("../../assets/imgs/home/singapore-expo.jpg");
        background-color: transparent;
        background-position: 100% 65%, 10% 90%;
        background-repeat: no-repeat;
        background-size: 35%, 60%;

        position: absolute;
        bottom: 0;
        left: $box1positionx + $zoomedDistance;
        height: 100%;
        width: 66.14583vw;
      }

      .box-3 {
        background-image: url("../../assets/imgs/home/组屋.jpg");

        background-position: 60% 40%;
        background-repeat: no-repeat;
        background-size: 70%;

        position: absolute;

        bottom: 0;
        left: $box1positionx + $zoomedDistance * 2;
        height: 100%;
        width: 66.14583vw;
      }

      .box-4 {
        background-image: url("../../assets/imgs/home/sentosa zong+jubu.png");

        background-position: 5rem -5rem;
        background-repeat: no-repeat;
        background-size: 85%;

        position: absolute;
        bottom: 0;
        left: $box1positionx + $zoomedDistance * 3;
        height: 100%;
        width: 140rem;
      }

      .box-5 {
        //background-image: url("../../assets/imgs/home/sentorini + canopy.jpg");
        z-index: 1;
        background-position: 40% 60%;
        background-repeat: no-repeat;
        background-size: 85%;

        .sentorini {
          position: absolute;
          left: 10rem;
          top: 12rem;
          height: 100%;
          width: 140rem;

          img {
            height: auto;
            width: 80%;
          }
        }

        .bedok {
          position: absolute;

          left: 140rem;
          top: 18rem;
          height: 100%;
          width: 140rem;

          img {
            height: auto;
            width: 80%;
          }
        }

        position: absolute;
        bottom: 0;
        left: $box1positionx + $zoomedDistance * 4;
        height: 100%;
        width: 140rem;
      }

      .box-6 {
        background-image: url("../../assets/imgs/home/dangga heights.jpg");

        background-position: 40rem -3rem;
        background-repeat: no-repeat;
        background-size: 70%;

        position: absolute;
        bottom: 0;
        left: $box1positionx + $zoomedDistance * 5;
        height: 100%;
        width: 140rem;
      }

      .box-7 {
        background-image: url("../../assets/imgs/home/热带雨林.jpg"),
          url("../../assets/imgs/home/hotel.png");

        background-position: 20% 80%, 100% 65%;
        background-repeat: no-repeat;
        background-size: 55%, 35%;

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
        margin-top: 7.5rem;
        font: normal normal bold 4.5rem/5.3rem Raleway;
        color: rgba(31, 118, 173, 1);
        max-width: 50%;
        width: 40%;
      }

      .column-3 {
        display: flex;
        justify-content: right;
        max-width: 50%;
        width: 30%;
        margin-top: 5rem;
        z-index: 4;

        .button-left {
          margin-left: 22rem;
        }

        svg {
          margin-top: 15%;

          max-width: 50%;
          max-height: 6rem;
          margin-left: 5.5rem;

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
    //padding: 21.3rem 0 0 0;
    .block4-row-1 {
      display: flex;
      flex-direction: row;

      .column-1 {
        width: 30%;
      }

      .column-2 {
        width: 40%;
        flex-direction: column;
        margin-top: 21.5rem;

        .head-4 {
          text-align: center;
          //margin-top: 20.1rem;

          font: normal normal bold 4.5rem/5.3rem Raleway;
          color: rgba(31, 118, 173, 1);
        }
      }

      .column-3 {
        width: 30%;
      }
    }

    display: flex;
    flex-flow: column;
    background: rgba(143, 177, 205, 0.54) 0% 0% no-repeat padding-box;
    //opacity: 0.15;
    height: 110rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    //position: relative;
    .container-4 {
      svg {
        max-width: 100%;
        max-height: 6rem;
        margin-left: 10%;

        &:hover {
          circle {
            fill: #1381ce;
            stroke: #1381ce;
          }

          path {
            fill: white;
          }
        }
      }

      .block4 {
        flex-direction: column;
        height: 10rem;

        .gallery {
          //font: normal normal normal 1.6rem/2.2rem Source Sans Pro;
          padding: 0 15rem 0 15rem;

          font: normal normal normal 2.8rem/4rem Source Sans Pro;
          color: rgba(0, 0, 0, 1);
          letter-spacing: 0.112rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

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

          text-align: center;

          .left {
            cursor: pointer;
            margin-top: 25rem;
            width: 6rem;
            height: 6rem;
            margin-right: 0.6rem;
            z-index: 3;
          }

          .VueCarousel {
            width: 100vw/1920 * (454+576+454);
            height: 100vw/1920 * (516);
          }

          .VueCarousel-slide {
            background-color: rgba(143, 177, 205, 0.54) 0% 0%;
            //padding: 0 (100vw/1920 * (30)) 0 (100vw/1920 * (30));

            height: 100vw/1920 * (516);
            .block-4-img {
              cursor: pointer;
              margin-left: 100vw/1920 * (30.5);
              width: 100vw/1920 * (454-15.25);
              height: 55%;
              overflow: hidden;
            }
            .block-4-title {
              cursor: pointer;
              padding: 0 1.5rem 0 1.5rem;
              font-size: 2rem;
            }
            img {
              cursor: pointer;
              width: 100%;
              height: auto;
            }

            .background-white {
              cursor: pointer;
              padding: (100vw/1920 * (46)) 0 0 0;
              background-color: white;
              margin-left: 100vw/1920 * (30.5);
              width: 100vw/1920 * (454-15.25);
              height: 100%;
              max-width: 100%;
            }
          }

          .right {
            cursor: pointer;
            margin-top: 25rem;

            height: 6rem;
            width: 6rem;
          }
        }

        .button-1 {
          button {
            margin-left: auto;
            margin-right: auto;
            margin-top: 100vw/1920 * 90;
            display: flex;
            flex-basis: row;
            justify-content: center;

            width: 100vw/1920 * 185;
            height: 100vw/1920 * 54;

            background: rgba(74, 145, 242, 0) 0% 0% no-repeat padding-box;
            color: black;
            border: 1px solid #000000;
            border-radius: 4px;

            .button-1-text {
              margin-left: 100vw/1920 * 0;
              width: 100vw/1920 * 95;
              height: 100vw/1920 * 32;
              text-align: left;

              margin-top: 100vw/1920 * 11;
              white-space: nowrap;
              font-family: Source Sans Pro;
              font-size: 100vw/1920 * 20;
            }

            .button-arrow {
              width: 100vw/1920 * 25;
              height: 100vw/1920 * 21.95;
              margin-top: 100vw/1920 * 14;

              margin-left: 100vw/1920 * 3;

              //margin-bottom: 90%;

              stroke: #000000;
              stroke-width: 0.15rem;
            }
          }
        }
      }
    }

    .ID {
      margin-left: 14rem;
      margin-top: 14.9rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal bold 4.1rem/5.3rem PT Sans;
      letter-spacing: 1.64px;
      color: rgba(0, 0, 0, 1);
      opacity: 1;
    }

    .title-underline {
      margin-left: 14rem;
      stroke-width: 3px;
      opacity: 1;
    }

    .title {
      margin-left: 21rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal 600 2.4rem/3.3rem Open Sans;

      letter-spacing: 0.96px;
      color: #000000;
      opacity: 1;
    }
  }

  .block5 {
    padding: 14.9rem 0 0 14rem;
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

  .background-6 {
    background-color: hsla(205, 37%, 87%, 1);
    height: 45.1rem;
    padding: 7.3rem 0 7.3rem 0;

    .title-2 {
      text-align: center;
      color: var(--unnamed-color-000000);
      font: normal normal bold 4.1rem/4.9rem Raleway;
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
          color: rgba(155, 155, 155, 1);
          background-color: hsla(205, 37%, 87%, 1);
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
          color: rgba(155, 155, 155, 1);
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
