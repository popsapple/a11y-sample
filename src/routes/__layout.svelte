<script lang="ts">
	import Router, {location, link} from 'svelte-spa-router';
	import Form from '../components/Form.svelte';
	import BadSections from '../components/BadSections.svelte';
	import Sections from '../components/Sections.svelte';
	import ImageVideo from '../components/ImageVideo.svelte';
	import BadImageVideo from '../components/BadImageVideo.svelte';
	import Layout from '../components/Layout.svelte';
	import BadLayout from '../components/BadLayout.svelte';
	import List from '../components/List.svelte';
	import Table from '../components/Table.svelte';
	import Home from '../components/Home.svelte';
	//import CanvasDrawWave from '../components/CanvasDrawWave.svelte';
	//import CanvasDrawCircleWave from '../components/CanvasDrawCircleWave.svelte';
	import BadForm from '../components/BadForm.svelte';
</script>
<Router routes={{
	'/': Home,
	'/layout': Layout,
	'/badlayout': BadLayout,
	'/form': Form,
	'/badform': BadForm,
	'/sections': Sections,
	'/badsections': BadSections,
	'/imagevideo': ImageVideo,
	'/badimagevideo': BadImageVideo,
	'/list': List,
	'/table': Table,
	//'/wave': CanvasDrawWave,
	//'/criclewave': CanvasDrawCircleWave
}} />