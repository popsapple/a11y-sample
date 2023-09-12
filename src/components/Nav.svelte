<script lang="ts">
   import Router, {location, link} from 'svelte-spa-router';
</script>
<nav>
	<a href="/" use:link>Home</a>
	<a href="/layout" use:link>Layout</a>
	<a href="/badlayout" use:link>badlayout</a>
	<a href="/form" use:link>form</a>
	<a href="/badform" use:link>badform</a>
	<a href="/sections" use:link>sections</a>
	<a href="/imagevideo" use:link>imagevideo</a>
	<a href="/badimagevideo" use:link>badimagevideo</a>
	<a href="/list" use:link>list</a>
	<a href="/table" use:link>table</a>
	<a href="/badtable" use:link>table</a>
	<a href="/slider" use:link>slider</a>
	<a href="/badslider" use:link>badslider</a>
</nav>
<style>
    * {
		font-size: 14px;
    }
</style>