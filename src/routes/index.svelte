<script>
import Banner from '../components/Banner.svelte';
</script>


<head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P|Slabo+27px" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<div class="content-holder">
	<div class="container">
			<div class = "intro">
			<p> <p style="align: left;"> “Hello! I am Kelly Yung 😎</p>
				<p style="align: right;"> Your Friendly Software Engineer Neighbourhood👩‍💻”</p>
			</p>
			<Banner/>
			</div>
	</div>
</div>


<style>

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

