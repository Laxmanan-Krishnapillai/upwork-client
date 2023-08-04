<script lang="ts">
    import "../styles/styles.css";
    import "../styles/utilities.css";
    import Navigation from "$lib/Navigation.svelte";
    import Footer from "$lib/Footer.svelte";
    import {browser} from "$app/environment";
    import onMount from "svelte";
    onMount(()=>{
        // register GSAP, taken from main.js
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        // wierd shit from load.js
        let el = document.querySelector(".l");;
        gsap.to(element, {
        xPercent: -100,
        duration: duration,
        ease: ease,
        onComplete: () => {
                gsap.set(element, {
                    xPercent: 100,
                });
            },
        });
  })
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
    <script src="/script/jquery.min.js"></script>
    <script src="/script/gsap/scrollsmoother.min.js"></script>
    <script src="/script/gsap/inertia.min.js"></script>
    <script async src="/script/main.js"></script>
</svelte:head>
{#if browser}
    <script src="/script/load.js"></script>
{/if}
<Navigation/>
<div class="page">
    <main>
        <slot />
    </main>
</div>
<Footer/>