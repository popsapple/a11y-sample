<script lang="ts">
   import Router, {location, link} from 'svelte-spa-router';
</script>
<nav>
	<a href="/" use:link>Home</a>
	<a href="/layout" use:link>Layout</a>
	<a href="/badlayout" use:link>badlayout</a>
	<a href="/form" use:link>form</a>
	<a href="/sections" use:link>sections</a>
	<a href="/image" use:link>image</a>
	<a href="/list" use:link>list</a>
	<a href="/table" use:link>table</a>
</nav>