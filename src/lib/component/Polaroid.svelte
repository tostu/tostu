<script>
    export let src = "";
    export let caption = "";
  </script>
  
  <style>
    .polaroid {
      display: inline-block;
      padding: 10px;
      background-color: white;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      text-align: center;
      width: 250px;
      font-family: 'Arial', sans-serif;
    }
  
    .polaroid img {
      width: 100%;
      height: auto;
      display: block;
    }
  
    .caption {
      margin-top: 10px;
      font-size: 14px;
      color: #555;
    }
  </style>
  
  <div class="polaroid">
    <img src={src} alt={caption} />
    {#if caption}
      <div class="caption">{caption}</div>
    {/if}
  </div>