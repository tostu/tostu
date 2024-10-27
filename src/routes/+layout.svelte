<script lang="ts">
	import 'sanitize.css';
	import 'terminal.css'
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Torge Stubbe</title>
	<meta name="description" content="My name is Torge Stubbe. I'm a Full Stack software developer from northern Germany.">
</svelte:head>

{@render children()}
