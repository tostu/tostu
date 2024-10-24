<script>
  import Topbar from '$lib/component/Topbar.svelte';
  import me from '$lib/asset/me.jpeg';
	import Polaroid from '$lib/component/Polaroid.svelte';
</script>
  
<style>
  h2 {
      font-size: 2.2em;
      font-weight: 700;
      letter-spacing: -1.5px;
  }

  p {
      font-size: 1.3em;
      font-weight: 300;
      line-height: 1.4;
      max-width: 28em;
      mask-position: topt;
  }

  #me{
    mask-image: url('$lib/asset/scribble.png');
    mask-size: 650px;
    mask-position: right;
    mask-repeat: no-repeat;
    width: 600px;
    height: auto;
  }

  #me img{
    object-position: top;
    object-fit: fill;
  }


</style>


  <Topbar></Topbar>
  <div class="row justify-between">


  <div>
    <h2>My name is Torge Stubbe.</h2>
    <p>
      I am a professionally trained software developer based in northern Germany, self-identified as a Full Stack developer. I currently work at <a href="https://fricke.de">FRICKE Group</a>, where I maintain the <a href="https://granit-parts.com">granit-parts</a> B2B webshop. Most of my  private work is open source and publicly available on GitHub.
    </p>
    <p>
      
    </p>
    <p>
    </p>
  </div>

  <!-- <Polaroid src={me} caption="me"></Polaroid> -->
   
  <!-- <div id="me">
    <img  src={me} alt="" srcset="">
  </div> -->
</div>