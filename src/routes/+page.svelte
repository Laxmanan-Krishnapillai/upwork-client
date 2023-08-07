<script lang="ts">
import {browser} from "$app/environment";
import { onMount } from "svelte";
    export let data;
    type Media = {
        url: string;
        mimeType: string;
    }
    type Work = {
        name: string;
        url: string;
        media: Media[];
        client: {
            industry: string;
            location: string;
        };
        services: {
            name: string;
        }[];
        date: string;
    }
    let works: Work[] = data.works;
    onMount(()=>{
        function runMarquee() {
            const allMarquees = document.querySelectorAll(".marquee");
            allMarquees.forEach((marquee, index) => {
                marquee.querySelector(".track");
                const allItems = marquee.querySelectorAll(".marquee>.track>*"),
                proxy = document.createElement("div");
                allItems.length;
                let totalX = 0,
                marqueeH = 0;
                marquee.offsetWidth;
                allItems.forEach((item, i) => {
                const itemW = item.offsetWidth,
                itemH = item.offsetHeight;
                (totalX += itemW),
                gsap.set(item, {
                x: totalX,
                width: itemW,
                height: itemH,
                }),
                itemH > marqueeH && (marqueeH = itemH);
                });
                const marqueeVal = gsap.utils.wrap(0, totalX),
                marqueeProgress = gsap.utils.wrap(0, 1);
                gsap.set([marquee], {
                height: marqueeH,
                });
                const stringX = `-=${totalX}`,
                animation = gsap.to(allItems, {
                repeat: -1,
                duration: 300,
                x: stringX,
                ease: "none",
                paused: !0,
                modifiers: {
                    x: function (x, target) {
                    return `${(x =
                        ((parseInt(x) - totalX) % totalX) +
                        (totalX - target.offsetWidth))}px`;
                    },
                },
                });

                function updateProgress() {
                    const dragValue = marqueeVal((this.deltaX / 2) * -1) / totalX,
                    currentProgressAnim = animation.progress(),
                    endProgress = marqueeProgress(currentProgressAnim + dragValue);
                    animation.progress(endProgress);
                }
                Draggable.create(proxy, {
                    type: "x",
                    trigger: marquee,
                    inertia: !0,
                    onDrag: updateProgress,
                    onThrowUpdate: updateProgress,
                }),
                window.addEventListener("resize", function resize() {
                animation.render(animation.time(), !1, !0);
                }),
                animation.play();
            });
        }
        runMarquee();
    })
</script>

<svelte:head>
    <title>© Asger Krause</title>
    <meta name="description" content="This is an example of a best-practice Designer & dev's website">
    <link rel="icon" href="/media/comp/fav.svg" type="image/svg+xml">
    <meta property="og:title" content="Best Practice Designers Website">
    <meta property="og:description" content="This is an example of a best-practice Designer & dev's website">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.yourwebsite.com">
    <meta property="og:image" content="https://www.yourwebsite.com/path/to/og_image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Best Practice Designers Website">
    <meta name="twitter:description" content="This is an example of a best-practice Designer & dev's website">
    <meta name="twitter:image" content="https://www.yourwebsite.com/path/to/twitter_card_image.jpg">
</svelte:head>
<header>
    <div class="con">
        <div col="6" hide="600"></div>
        <div col="6" mcol="12">
            <div class="wrap left">
                <h1>Designing <i>impossible-to-ignore</i> brands and competitive digital solutions for
                    design-driven companies where <i>attention to detail</i> matters.</h1>
                <h2>Brand Strategy, <i>Brand Identity</i>, Creative Development, <i>Creative Direction</i>,
                    Digital Design, <i>Digital Engineering</i>, Experience Design.</h2>
                <a blink target="_blank" href="https://cal.com/krause">Currently <i>available</i> for
                    work</a>
            </div>
        </div>
    </div>
</header>
<section>
    <div class="con">
        <div col="3"></div>
        <!-- <h1>Selected <i>works:</i></h1> -->
        <!-- Work/cases will be here -->
        {#each works as {name, url, media, client, services, date}}
            <div class="case">
                <div id="top">
                    <h2 col="6">{name}</h2> <!-- reference: clientName will be here -->
                    <h3 col="4" op="40" mcol="6">{client.industry}</h3> <!-- reference: clientIndustry -->
                    <p col="2" op="40" hide="600">{client.location}</p> <!-- reference: clientLocation -->
                </div>
                <div class="marquee">
                    <div class="track">
                        <!-- All media will be placed here inside .track a div called .item -->
                        <!-- Videos shall have the same settings as you can see belows -->
                        {#each media as {mimeType, url}}
                            {#if mimeType.includes("video")}
                                <video loading="eager" autoplay loop muted src={url} alt="" />
                            {:else}
                                <img loading="eager" src={url} alt="" />
                            {/if}
                        {/each}
                    </div>
                </div>
                <div id="bot">
                    <p col="10" mcol="12" op="50">{services.map(service => service.name).sort((a, b) => a.localeCompare(b)).join(", ")}</p> <!-- reference: services will be here -->
                    <p col="2" mcol="12" mfirst op="50">{date.slice(0, date.length - 3).replace("-", "/")}</p> <!-- Launch date will be here -->
                </div>
            </div>
        {/each}
</section>

<slot name="footer"/>

<style>
      .case {
        width: 100%;
        margin-bottom: calc(var(--gap) * 3);
      }

      .case > #top,
      .case > #bot {
        width: calc(var(--col-12) + var(--space));
        margin-right: calc(var(--space) * -1);
        gap: 0 var(--space);
        padding: 0.25em 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .marquee {
        position: relative;
        overflow: hidden;
        display: block;
        margin-left: calc(var(--space) * -1);
        width: 100vw;
        height: 16em;
      }

      .marquee video {
        filter: brightness(105%) contrast(96%) saturate(110%);
        aspect-ratio: 1/1;
      }

      .marquee img {
        filter: brightness(100%) contrast(98%) saturate(110%);
      }

      .marquee .track {
        height: 100%;
        transform-origin: 0 0;
        display: block;
        position: relative;
      }

      .marquee .track > * {
        height: 100%;
        width: auto;
        padding-left: 4px;
        position: absolute;
        object-fit: cover;
      }
</style>