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



<head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P|Slabo+27px" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>