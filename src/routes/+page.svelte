<script>
  import Topbar from '$lib/component/Topbar.svelte';
  import me from '$lib/asset/me_polaroid.png';
</script>
  
<style>
  h2{
    font-size: 2.2em;
    font-weight: 700;
    letter-spacing: -1.5px;
  }

  p{
    font-size: 1.3em;
    font-weight: 300;
    line-height: 1.4;
    max-width: 28em;
    mask-position: topt;
    text-align: justify;
  }

  #me{
    max-height: 500px;
    object-fit: contain;
  }

</style>

  <div class="tw-container tw-mx-auto tw-px-44">

  <Topbar></Topbar>
  <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between">


  <div class="md:tw-w-[50%]">
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
  <div class="tw-col tw-items-center md:tw-w-[50%]">
    <img id="me" src={me} alt="" srcset="">
  </div>

</div>

</div>