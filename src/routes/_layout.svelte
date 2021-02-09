<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 80%;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		height: 100%;
		width: 100%;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>