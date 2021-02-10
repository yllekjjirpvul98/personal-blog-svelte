<script>
    export let appear;
    let src = '/elizabeth.png';
</script>

<style>
	img {
		position: absolute;
        max-width: 70%;
        height: auto;
        bottom: -80%;
        left: -45%;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}

	.popup {
		transform: rotate(0deg);
	}



</style>


<img
	class:popup={appear}
	alt="A wild elizabeth shows up!"
	src={src}
/>