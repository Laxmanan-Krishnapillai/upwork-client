<script lang="ts">
    import "../styles/styles.css";
    import "../styles/utilities.css";
    import Navigation from "$lib/Navigation.svelte";
    import Footer from "$lib/Footer.svelte";
    import {browser} from "$app/environment";
    import { onMount } from 'svelte';
    import { navigating } from '$app/stores';
    const duration = 0.6, ease = "power4.inOut";
    let animEl: HTMLElement;
    let mounted = false;
    onMount(()=>{
        // register GSAP, taken from main.js
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        animEl = document.querySelector(".l");
        let s = document.createElement("script");
        s.src = "/script/main.js";
        document.body.appendChild(s);
    })
    async function animatePageChange(t) {
        document.body.classList.add("animating"),
        await gsap.to(animEl, {
            xPercent: 0,
            duration,
            ease,
            onComplete: () => {
                document.body.classList.remove("animating");
            },
        }).then();
        gsap.to(animEl, {
            xPercent: -100,
            duration,
            ease
        })
    }
    navigating.subscribe((n)=>{
        if(!browser) return;
        !n && animatePageChange()
    })
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
    <script src="/script/gsap/scrollsmoother.min.js"></script>
    <script src="/script/gsap/inertia.min.js"></script>
</svelte:head>
<Navigation/>
<aside class="l"></aside>
<aside class="progress">
    <div class="con">
    <div col="3"></div>
    <div class="relative" click="child" col="7">
        <div blink theme>Dark mode</div>
    </div>
    <div percent>0%</div>
    </div>
</aside>
<div class="page">
    <main>
        <slot />
    </main>
</div>
<Footer/>