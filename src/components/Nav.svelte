<script lang="ts">
   import Router, {location, link} from 'svelte-spa-router';
</script>
<nav>
	<ul>
		<li>
			<a href="/" use:link>Home</a>
		</li>
		<li>
			<a href="/layout" use:link>Layout</a>
			<a href="/badlayout" use:link>badlayout</a>
		</li>
		<li>
			<a href="/form" use:link>form</a>
			<a href="/badform" use:link>badform</a>
		</li>
		<li>
			<a href="/sections" use:link>sections</a>
			<a href="/badsections" use:link>badsections</a>
		</li>
		<li>
			<a href="/imagevideo" use:link>imagevideo</a>
			<a href="/badimagevideo" use:link>badimagevideo</a>
		</li>
		<li>
			<a href="/list" use:link>list</a>
			<a href="/badlist" use:link>badlist</a>
		</li>
		<li>
			<a href="/table" use:link>table</a>
			<a href="/badtable" use:link>badtable</a>
		</li>
		<li>
			<a href="/slider" use:link>slider</a>
			<a href="/badslider" use:link>badslider</a>
		</li>
	</ul>
</nav>
<style>
    * {
		font-size: 14px;
    }
	a {
		display:block;
		padding: 0px 20px;
		height: 30px;
		line-height: 30px;
		font-size: 20px;
		color:cadetblue;
		font-weight: 900;
	}
	li {
		display: inline-block;
		margin: 10px;
	}
</style>