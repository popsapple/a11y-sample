<script lang="ts">
	import Router, {location, link} from 'svelte-spa-router';
	import Form from '../components/Form.svelte';
	import Sections from '../components/Sections.svelte';
	import Image from '../components/Image.svelte';
	import Layout from '../components/Layout.svelte';
	import BadLayout from '../components/BadLayout.svelte';
	import List from '../components/List.svelte';
	import Table from '../components/Table.svelte';
	import Home from '../components/Home.svelte';
</script>
<Router routes={{
	'/': Home,
	'/layout': Layout,
	'/badlayout': BadLayout,
	'/form': Form,
	'/sections': Sections,
	'/image': Image,
	'/list': List,
	'/table': Table
}} />