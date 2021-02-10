<script>
import Banner from '../components/Banner.svelte';
import Elizabeth from '../components/Elizabeth.svelte';
export let appear;
const handleMouseenter = () => { appear = true; console.log(appear); };
const handleMouseleave = () => { appear = false; console.log(appear); };
</script>

<svelte:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>

<div class="content-holder">
	<div class="container">
			<div class = "intro">
				<p style="text-align: left;"> “Hello! I am Kelly Yung 😎</p>
				<p style="text-align: right;"> Your Friendly Software Engineer Neighbourhood👩‍💻”</p>
			<Banner/>
			</div>
	</div>
</div>
<Elizabeth appear={appear}/>

<style>

:global(body) {
	overflow: hidden;
}

.content-holder {
	background-image: linear-gradient(135deg, #ffdb43 25%, #3d6f8e 25%, #3d6f8e 50%, #ffdb43 50%, #ffdb43 75%, #3d6f8e 75%, #3d6f8e 100%);
    background-size: 84.85px 84.85px;
	width: 100%;
	height: 100%;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	align-items: center;
	min-height: 100%;
	padding: 2em;
}


.intro {
	background-color: lightyellow;
	padding: 2em;
	font-size: 1.5em;
}

.intro p {
  font-family: 'Press Start 2P', cursive;
}

</style>

