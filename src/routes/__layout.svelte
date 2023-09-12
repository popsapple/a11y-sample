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
	import BadList from '../components/BadList.svelte';
	import Table from '../components/Table.svelte';
	import BadTable from '../components/BadTable.svelte';
	import Home from '../components/Home.svelte';
	import BadSlider from '../components/BadSwiper.svelte';
	import Slider from '../components/Swiper.svelte';
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
	'/badlist': BadList,
	'/table': Table,
	'/badtable': BadTable,
	'/badslider': BadSlider,
	'/slider': Slider,
	//'/wave': CanvasDrawWave,
	//'/criclewave': CanvasDrawCircleWave
}} />