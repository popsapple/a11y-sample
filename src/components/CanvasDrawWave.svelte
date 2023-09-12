<script lang="ts">
    import { onMount } from 'svelte';
	import type { HtmlTagDescriptor } from 'vite';
    let canvas: HTMLCanvasElement | undefined = undefined;
    let canvas2: HTMLCanvasElement | undefined = undefined;
    let drawcircle = () => {
        if(canvas) {
            const _canvas = (canvas as HTMLCanvasElement);
            const ctx = _canvas.getContext('2d');
            if(!ctx) return;
            ctx.beginPath();
            ctx.arc(50,50,50,0,Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
        }
    }
    let drawarc = () => {
        if(canvas) {
            const _canvas = (canvas as HTMLCanvasElement);
            const ctx = _canvas.getContext('2d');
            if(!ctx) return;
            ctx.moveTo(10,200)
            ctx.arcTo(200,200,200,10,100);
            ctx.lineTo(200,10)
            ctx.stroke();
        }
    }
    let drawcurve_once = () => {
        if(canvas) {
            const _canvas = (canvas as HTMLCanvasElement);
            const ctx = _canvas.getContext('2d');
            if(!ctx) return;
            ctx.beginPath();
            ctx.moveTo(0,200)
            ctx.quadraticCurveTo(10,-100,200,200);
            ctx.stroke();
        }
    }
    let drawcurve_twice = (cv: HTMLCanvasElement, sp: number[], wp: number[], color: string) => {
        const promise =  new Promise<void>((resolve, reject)=> {
            if(cv) {
                const _canvas = (cv as HTMLCanvasElement);
                const ctx = _canvas.getContext('2d');
                const ww = wp[0];
                const wh = wp[1];
                let lx = sp[0];
                let count = 0;
                if(!ctx) return;
                ctx.clearRect(0,0,_canvas.width,_canvas.height);
                ctx.beginPath();
                ctx.moveTo(sp[0],sp[1])
                while(lx < _canvas.width) {
                    //ctx.bezierCurveTo(lx+ww,sp[1]-wh,lx+(ww*2),sp[1]+wh,lx+(ww*3),sp[1]);
                    let h = sp[1]-wh;
                    if(count % 2 === 0) h = sp[1]+wh;
                    ctx.quadraticCurveTo(lx+ww,h,lx+(ww*2),sp[1]);
                    lx = lx+(ww*2);
                    if(lx === _canvas.width) lx += 1;
                    count++;
                }  
                ctx.lineTo(_canvas.width,_canvas.height);
                ctx.lineTo(0,_canvas.height);
                ctx.fillStyle = color;
                ctx.fill();
                resolve();
            }
        });
        Promise.resolve(promise);
        return promise;
    }
    let wave = (cvs: HTMLCanvasElement, sp:number[], wp:number[], deep: number, color: string, speed: number) => {
        let dir = 1;
        let animate = async (wp: any) => {
            await drawcurve_twice(cvs,sp,wp,color);
            wp[1]= wp[1] + dir;
            sp[0]= sp[0] - (1 * speed);
            if(wp[1] >= deep) dir = -1 * speed;
            if(wp[1] <= -deep) dir = 1 * speed;
            requestAnimationFrame(() => animate(wp));
        };
        animate(wp);
    }
    onMount(() => {
        if(canvas) {
            wave(canvas, [0,50], [200,10], 10, "rgba(140, 200, 237, 0.3)", 1);
            canvas.width = document.body.getBoundingClientRect().width;
            canvas.height = window.innerHeight;
        }
        if(canvas2) {
            wave(canvas2, [-200,50], [200,30], 30, "rgba(25, 166, 252, 0.5)", 2);
            canvas2.width = document.body.getBoundingClientRect().width;
            canvas2.height = window.innerHeight;
        }
    });
</script>
<canvas bind:this={canvas} width="500" height="500"></canvas>
<canvas bind:this={canvas2} width="500" height="500"></canvas>
<svelte:window on:resize={() => {
     if(canvas) {
        canvas.width = document.body.getBoundingClientRect().width;
        canvas.height = window.innerHeight;
     }
     if(canvas2) {
        canvas2.width = document.body.getBoundingClientRect().width;
        canvas2.height = window.innerHeight;
     }
}} />
<style>
    canvas {
        position: absolute;
    }
</style>