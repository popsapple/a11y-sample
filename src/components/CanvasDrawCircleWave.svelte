<script lang="ts">
    import { onMount } from 'svelte';
	import type { HtmlTagDescriptor } from 'vite';
    let canvas: HTMLCanvasElement | undefined = undefined;
    let angle = 0;
		function toRadians(degrees: number) {	
			return degrees * (Math.PI / 180);
		}
    let drawcircle = (x:number,y:number,r: number, poly: number, step: number) => {
        if(canvas) {
            const _canvas = (canvas as HTMLCanvasElement);
            const ctx = _canvas.getContext('2d');
            if(!ctx) return;
            ctx.lineWidth = 1;
            x += (r * Math.cos( toRadians(angle) ));
			y += (r * Math.sin( toRadians(angle) ));
            ctx.lineTo(x,y)
            step += 1;
            angle = poly * step;
            if(angle <= 360) requestAnimationFrame(() => drawcircle(x,y, r, poly, step));
            else {
                ctx.stroke();
            }
        }
    }
    onMount(() => {
        if(canvas) {
            drawcircle(100,100,30,30,0);
        }
    });
</script>
<canvas bind:this={canvas} width="500" height="500"></canvas>
<style>
    canvas {
        position: absolute;
    }
</style>