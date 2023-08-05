<script lang="ts">
	import '../styles/styles.css';
	import '../styles/utilities.css';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';
	// gsap config
	const duration = 0.6,
		ease = 'power4.inOut',
		smoothSpeed = 0.6,
		smoothEase = 'expo';
	let currentValue = 0;
	// theme config and elements
	let storedTheme: 'dark' | 'light' | undefined = undefined;
	let percentCount, toggle, animEl: HTMLElement;
	// gsap smoother
	let smoother: any;
	// time elements
	let timeStatus, timeValue, timeState, timeContainer: HTMLElement;

	let onOutroEnd;
	function updateToggleText(theme: typeof storedTheme) {
		toggle.innerHTML = theme === 'dark' ? 'Light mode' : 'Dark mode';
	}
	function updateLoadPercent() {
		const docHeight = document.documentElement.scrollHeight,
			viewportHeight = window.innerHeight,
			scrollTop = window.scrollY,
			percentScrolled = (scrollTop / (docHeight - viewportHeight)) * 100;
		// Animate the counting with GSAP
		gsap.to(percentCount, {
			innerText: Math.round(percentScrolled) + '%',
			roundProps: 'innerText',
			duration: smoothSpeed,
			ease: smoothEase
		});
	}
	function showCopenhagenTime() {
		const currentDate = new Date();
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes().toString().padStart(2, '0');
		const copenhagenTime = hours + ':' + minutes;
		timeContainer.textContent = copenhagenTime;

		const dayOfWeek = currentDate.getDay();
		if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 10 && hours < 16) {
			timeState.classList.add('open');
			timeState.classList.remove('closed');
			timeStatus.textContent = 'Open';
		} else {
			timeState.classList.remove('open');
			timeState.classList.add('closed');
			timeStatus.textContent = 'Closed';
		}
	}

	onMount(() => {
		// Themes
		storedTheme =
			localStorage.getItem('theme') ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		storedTheme && document.documentElement.setAttribute('data-theme', storedTheme);
		updateToggleText(storedTheme);
		toggle.onclick = function () {
			let targetTheme = 'light';
			if ('light' === document.documentElement.getAttribute('data-theme')) {
				targetTheme = 'dark';
			}
			document.documentElement.setAttribute('data-theme', targetTheme);
			localStorage.setItem('theme', targetTheme);
			updateToggleText(targetTheme);
		};
		(timeValue = document.querySelector('.clock [time]')),
			(timeState = document.querySelector('.clock [state]')),
			(timeStatus = document.querySelector('.clock [status]')),
			(timeContainer = document.querySelector('.clock'));
		setInterval(showCopenhagenTime, 1000);
		// register GSAP, taken from main.js
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		smoother = ScrollSmoother.create({
			smooth: smoothSpeed,
			wrapper: '.page',
			content: 'main',
			preventDefault: true,
			ease: smoothEase,
			effects: true,
			smoothTouch: false
		});
		gsap.to(animEl, {
			xPercent: -100,
			duration,
			ease
		});
	});

	navigating.subscribe((n) => {
		if (!browser) return;
		const currentPageURL = window.location.href;
		for (const link of document.getElementsByTagName('a')) {
			if (link.href === currentPageURL) {
				link.classList.add('current');
			}
		}
	});
	beforeNavigate(async () => {
		if (!browser) return;
		document.body.classList.add('animating');
		await gsap
			.to(animEl, {
				xPercent: 0,
				duration,
				ease,
				onComplete: () => {
					document.body.classList.remove('animating');
				}
			})
			.then();
		gsap.to(animEl, {
			xPercent: -100,
			duration,
			ease
		});
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
	<script src="/script/gsap/scrollsmoother.min.js"></script>
	<script src="/script/gsap/inertia.min.js"></script>
</svelte:head>
<svelte:window
	on:resize={() => {
		updateLoadPercent();
	}}
	on:scroll={() => {
		updateLoadPercent();
	}}
/>
<Navigation />

<aside bind:this={animEl} class="l" />
<aside class="progress">
	<div class="con">
		<div col="3" />
		<div class="relative" click="child" col="7">
			<div bind:this={toggle} blink theme>Dark mode</div>
		</div>
		<div bind:this={percentCount} percent>0%</div>
	</div>
</aside>
<div class="page">
	<main on:outroend={onOutroEnd}>
		<slot />
	</main>
</div>
<Footer />
