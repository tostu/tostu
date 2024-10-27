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
      I'm a professionally trained Full Stack software developer based in northern Germany. Currently, I work at <a href="https://fricke.de">FRICKE Group</a>, where I maintain and enhance the <a href="https://granit-parts.com">granit-parts</a> B2B webshop. Most of my personal projects are open source and available on GitHub.
    <p>
      
    </p>
    <p>
      Outside of programming, I enjoy capturing urban moments through street photography—follow along on <a href="https://instagram.com/torge.jpg" target="_blank">Instagram</a> if you're curious. I also unwind with video games and cooking, where I love experimenting with new flavors
    </p>
  </div>

  <!-- <Polaroid src={me} caption="me"></Polaroid> -->
  <div class="tw-col tw-items-center md:tw-w-[50%]">
    <img id="me" src={me} alt="" srcset="">
  </div>

</div>

</div>