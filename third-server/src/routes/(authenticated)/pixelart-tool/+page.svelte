<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
<script>
	import P5 from 'p5-svelte';
	let width = 55;
	let height = 55;
    let canvasH = 0;
    let canvasW = 0;
    let defineWH = true
    if (canvasH <= 0 && canvasW <= 0) {
        defineWH = true;
    } else {
        defineWH = false;
    }
	const sketch = (p5) => {
		p5.setup = () => {
            
			p5.createCanvas(canvasW, canvasH);
            p5.background(51)
		};

		p5.draw = () => {
			p5.ellipse(p5.width / 2, p5.height / 2, width, height);
		};
        function mousePressed() {
        p5.ellipse(p5.mouseX, p5.mouseY, 5, 5);
  
}
	};
</script>
<style>
    .defineWHBG {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
    }
    .defineWH {
        position: absolute;
        width: 350px;
        height: 500px;
        background-color: rgb(211, 221, 223);
        left: 50%;
        top: calc(50% + 32.5px);
        transform:translate(-50%,-50%);
        border-radius: 2.5px;
    }
    .cc {
        font-family: 'VT323', monospace;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
    }
</style>

{#if defineWH} 
<div class="defineWHBG"></div><div class="defineWH"><p class="cc">configurate canvas</p><p style="font-family: 'VT323', monospace; margin-left:10%;">Width:</p><p style="font-family: 'VT323', monospace; margin-left:10%;">Height:</p></div>
{/if}
{#if !defineWH}
<label>
	Width
	<input type="range" bind:value={width} min="100" max="400" step="0.01" />
	{width}
</label>

<label>
	Height
	<input type="range" bind:value={height} min="100" max="1000" step="0.01" />
	{height}
</label>

<P5 {sketch} />

{/if}
