<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    $: clients = data.clients.map((c)=>c.name).sort((a, b) => a.localeCompare(b));
    $: services = data.services.map((s)=>s.name).sort((a, b) => a.localeCompare(b));
</script>

<svelte:head>
<title>© Asger Krause</title>
<meta
    name="description"
    content="This is an example of a best-practice Designer & dev's website"
/>
<link rel="icon" href="/media/comp/fav.svg" type="image/svg+xml" />

<meta property="og:title" content="Best Practice Designers Website" />
<meta
    property="og:description"
    content="This is an example of a best-practice Designer & dev's website"
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.yourwebsite.com" />
<meta
    property="og:image"
    content="https://www.yourwebsite.com/path/to/og_image.jpg"
/>
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Best Practice Designers Website" />
<meta
    name="twitter:description"
    content="This is an example of a best-practice Designer & dev's website"
/>
<meta
    name="twitter:image"
    content="https://www.yourwebsite.com/path/to/twitter_card_image.jpg"
/>
<style>
    header {
    min-height: calc(100vh - 10em);
    }
    /* Images */
    .img-w {
    aspect-ratio: 1/0.8;
    overflow: hidden;
    display: flex;
    align-items: end;
    max-height: 80vh;
    border-radius: var(--radius);
    /* max-width: 100vmin; */
    }

    .img-w img {
    position: relative;
    width: 100%;
    height: 130%;
    object-fit: cover;
    }
</style>
</svelte:head>

<header>
    <div class="con">
    <div col="3" hide="600"></div>
    <div col="3" mcol="6">
        <h2 class="hide">Contact Asger Krause</h2>
        <h3>Get in touch:</h3>
    </div>
    <ul col="6">
        <li>
        <a target="_blank" blink href="mailto:work@asgerkrause.com"
            >asger@krause.studio</a
        >
        </li>
        <li>
        <a target="_blank" blink href="tel:+4520707032">+45 20707032</a>
        </li>
        <li>
        <a target="_blank" blink href="https://cal.com/krause"
            >Scheduling</a
        >
        </li>
        <li>
        <a
            target="_blank"
            blink
            href="https://instagram.com/krause.studio/"
            >Instagram</a
        >
        </li>
        <li>
        <a
            target="_blank"
            blink
            href="https://linkedin.com/in/asgerkrause/"
            >LinkedIn</a
        >
        </li>
        <li>
        <a target="_blank" blink href="https://are.na/asger-krause"
            >Are.na</a
        >
        </li>
    </ul>
    </div>
</header>
<section>
    <div class="con">
    <div col="3" hide="600"></div>
    <div col="3" mcol="6">
        <h1>Imprint:</h1>
    </div>
    <div class="wrap left" col="6">
        <h1>
        I believe that a great user experiences require
        <i>structure</i>, delightfulness, <i>surprises</i>, and a deep
        understanding of your <i>target audience</i>.
        </h1>
        <a blink target="_blank" href="https://cal.com/krause"
        >Currently <i>available</i> for work</a
        >
    </div>
    </div>
</section>
<section>
    <div class="con">
    <div col="6"></div>
    <div col="6" class="img-w">
        <img data-speed="auto" src="/media/info/me.webp" alt="" />
    </div>
    </div>
</section>
<section>
    <div class="con">
    <div col="3" hide="600"></div>
    <div col="3" mcol="6">
        <h2>Services</h2>
    </div>
    <div col="6">
        {#each services as service}
            <h3>{service}</h3>
        {/each}
    </div>
    </div>
</section>
<section>
    <div class="con">
    <div col="3" hide="600"></div>
    <div col="3" mcol="6">
        <h2>Clients</h2>
    </div>
    <div col="6">
        {#each clients as client}
            <h3>{client}</h3>
        {/each}
    </div>
    </div>
</section>
<section std>
    <div class="con">
      <div>
        <h2>Featured on:</h2>
      </div>
      <div>
        <h3>Godly<span>5</span></h3>
        <h3>CCSDA<span>2</span></h3>
        <h3>The FWA<span>4</span></h3>
        <h3>Awwwards<span>3</span></h3>
        <h3>SiteInspire<span>2</span></h3>
        <h3>Mindsparkle<span>2</span></h3>
        <h3>Typewolf<span>2</span></h3>
        <h3>httpster<span>1</span></h3>
      </div>
    </div>
  </section>